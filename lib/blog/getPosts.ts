import { getTranslations } from "next-intl/server";
import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { routing, type Locale } from "@/i18n/routing";
import {
  newsConfig,
  NEWS_CATEGORY_KEYS,
  type NewsPostContent,
} from "@/lib/data/news";
import {
  postsListQuery,
  postBySlugQuery,
  allSlugsQuery,
  sitemapPostsQuery,
  redirectLookupQuery,
} from "@/sanity/lib/queries";
import { getBlogUrls } from "./urls";
import type { BlogPost } from "./types";

// Sanity fetch'lerine on-demand revalidate icin ortak cache tag.
const POST_TAG = { next: { tags: ["post"] } };

// ---- Sanity ham satir tipleri ----
type SanityDimensions = { width: number; height: number; aspectRatio?: number };

type SanityCover = {
  asset?: { _ref?: string };
  alt?: string;
  lqip?: string;
  dimensions?: SanityDimensions;
} & Record<string, unknown>;

type SanityListRow = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  gradient?: string;
  coverImage?: SanityCover;
  charCount?: number;
};

type SanityDetailRow = SanityListRow & {
  slugTr?: string;
  slugEn?: string;
  hasEn?: boolean;
  updatedAt?: string;
  body?: PortableTextBlock[];
  meta?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityCover;
    canonicalUrl?: string;
    noIndex?: boolean;
  };
};

type Ranked = { post: BlogPost; time: number };
type CatT = Awaited<ReturnType<typeof getTranslations>>;

// ---- Yardimcilar ----
function catLabel(key: string | undefined, tCat: CatT): string {
  if (key && (NEWS_CATEGORY_KEYS as readonly string[]).includes(key)) {
    return tCat(key);
  }
  return key ?? "";
}

function coverUrl(cover: SanityCover | undefined, width: number): string | undefined {
  if (!cover?.asset) return undefined;
  try {
    return urlForImage(cover).width(width).fit("max").auto("format").url();
  } catch {
    return undefined;
  }
}

function formatDate(iso: string | undefined, locale: Locale): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

function formatReadTime(charCount: number, locale: Locale): string {
  const minutes = Math.max(1, Math.ceil(charCount / 1200));
  return locale === "tr" ? `${minutes} dk okuma` : `${minutes} min read`;
}

// Hardcoded postlarin gorunum tarih string'ini siralanabilir timestamp'e cevirir.
const TR_MONTHS: Record<string, number> = {
  ocak: 0,
  şubat: 1,
  mart: 2,
  nisan: 3,
  mayıs: 4,
  haziran: 5,
  temmuz: 6,
  ağustos: 7,
  eylül: 8,
  ekim: 9,
  kasım: 10,
  aralık: 11,
};

function displayDateToTime(date: string | undefined, locale: Locale): number {
  if (!date) return 0;
  if (locale === "en") {
    const t = Date.parse(date); // "April 20, 2026" native parse edilir
    return Number.isNaN(t) ? 0 : t;
  }
  const m = date.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})$/);
  if (!m) return 0;
  const mon = TR_MONTHS[m[2]];
  if (mon === undefined) return 0;
  return new Date(Number(m[3]), mon, Number(m[1])).getTime();
}

// ---- Kaynaklar ----
async function getHardcodedRanked(locale: Locale): Promise<Ranked[]> {
  const [tNews, tCat] = await Promise.all([
    getTranslations({ locale, namespace: "news.posts" }),
    getTranslations({ locale, namespace: "blog.categories" }),
  ]);
  return newsConfig.map((cfg) => {
    const content = (tNews.raw as (k: string) => unknown)(
      cfg.slug,
    ) as NewsPostContent;
    const post: BlogPost = {
      slug: cfg.slug,
      category: tCat(cfg.categoryKey),
      gradient: cfg.gradient,
      content: cfg.content,
      ...content,
    };
    return { post, time: displayDateToTime(content.date, locale) };
  });
}

async function getSanityRanked(locale: Locale): Promise<Ranked[]> {
  let rows: SanityListRow[] = [];
  try {
    rows = await client.fetch<SanityListRow[]>(
      postsListQuery(locale),
      {},
      POST_TAG,
    );
  } catch {
    return []; // Sanity erisilemezse blog hardcoded ile calismaya devam etsin
  }
  const tCat = await getTranslations({ locale, namespace: "blog.categories" });
  return rows
    .filter((r) => r.slug)
    .map((r) => {
      const post: BlogPost = {
        slug: r.slug as string,
        title: r.title ?? "",
        excerpt: r.excerpt ?? "",
        category: catLabel(r.category, tCat),
        author: r.author || "Ordino",
        date: formatDate(r.publishedAt, locale),
        gradient: r.gradient,
        coverImageUrl: coverUrl(r.coverImage, 1200),
        coverImageAlt: r.coverImage?.alt || "",
        readTime: r.charCount ? formatReadTime(r.charCount, locale) : undefined,
      };
      return { post, time: r.publishedAt ? Date.parse(r.publishedAt) || 0 : 0 };
    });
}

// ---- Public API ----
export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
  const [hardcoded, sanity] = await Promise.all([
    getHardcodedRanked(locale),
    getSanityRanked(locale),
  ]);
  // Merge + dedup: ayni slug'da Sanity oncelikli.
  const bySlug = new Map<string, Ranked>();
  for (const h of hardcoded) bySlug.set(h.post.slug, h);
  for (const s of sanity) bySlug.set(s.post.slug, s);
  return [...bySlug.values()]
    .sort((a, b) => b.time - a.time)
    .map((r) => r.post);
}

export async function getBlogPost(
  locale: Locale,
  slug: string,
): Promise<BlogPost | null> {
  // 1. Once Sanity
  let row: SanityDetailRow | null = null;
  try {
    row = await client.fetch<SanityDetailRow | null>(
      postBySlugQuery(locale),
      { slug },
      POST_TAG,
    );
  } catch {
    row = null;
  }
  if (row?.slug) {
    const tCat = await getTranslations({ locale, namespace: "blog.categories" });
    const coverImageUrl = coverUrl(row.coverImage, 1600);
    // OG: elle girilen ogImage varsa 1200x630, yoksa kapak, o da yoksa undefined (sayfa site.ogImage'e duser).
    const ogImageUrl = row.meta?.ogImage?.asset
      ? coverUrl(row.meta.ogImage, 1200)
      : coverImageUrl;
    return {
      slug: row.slug,
      title: row.title ?? "",
      excerpt: row.excerpt ?? "",
      category: catLabel(row.category, tCat),
      author: row.author || "Ordino",
      date: formatDate(row.publishedAt, locale),
      gradient: row.gradient,
      coverImageUrl,
      coverImageAlt: row.coverImage?.alt || "",
      coverBlur: row.coverImage?.lqip,
      portableBody: row.body ?? [],
      metaTitle: row.meta?.metaTitle,
      metaDescription: row.meta?.metaDescription,
      readTime: row.charCount ? formatReadTime(row.charCount, locale) : undefined,
      // --- SEO ---
      altSlugs: { tr: row.slugTr, en: row.slugEn },
      hasEn: Boolean(row.hasEn),
      publishedAtISO: row.publishedAt,
      updatedAt: row.updatedAt,
      ogImageUrl,
      canonicalUrl: row.meta?.canonicalUrl,
      noIndex: Boolean(row.meta?.noIndex),
    };
  }

  // 2. Hardcoded fallback
  const cfg = newsConfig.find((c) => c.slug === slug);
  if (!cfg) return null;
  const [tNews, tCat] = await Promise.all([
    getTranslations({ locale, namespace: "news.posts" }),
    getTranslations({ locale, namespace: "blog.categories" }),
  ]);
  const content = (tNews.raw as (k: string) => unknown)(
    cfg.slug,
  ) as NewsPostContent;
  // Hardcoded yazi iki dilde de var (messages tr+en), slug her iki dilde ayni.
  const t = displayDateToTime(content.date, locale);
  const iso = t ? new Date(t).toISOString() : undefined;
  return {
    slug: cfg.slug,
    category: tCat(cfg.categoryKey),
    gradient: cfg.gradient,
    content: cfg.content,
    ...content,
    // --- SEO ---
    altSlugs: { tr: cfg.slug, en: cfg.slug },
    hasEn: true,
    publishedAtISO: iso,
    updatedAt: iso,
    noIndex: false,
  };
}

export async function getAllBlogParams(): Promise<
  { locale: Locale; slug: string }[]
> {
  const params: { locale: Locale; slug: string }[] = [];
  // Hardcoded: her iki locale.
  for (const cfg of newsConfig) {
    for (const locale of routing.locales) {
      params.push({ locale, slug: cfg.slug });
    }
  }
  // Sanity: locale bazli slug'lar.
  try {
    const rows = await client.fetch<
      { slugTr?: string; slugEn?: string; hasEn?: boolean }[]
    >(allSlugsQuery, {}, POST_TAG);
    for (const r of rows) {
      if (r.slugTr) params.push({ locale: "tr", slug: r.slugTr });
      if (r.hasEn && r.slugEn) params.push({ locale: "en", slug: r.slugEn });
    }
  } catch {
    // Sanity erisilemezse sadece hardcoded param'lar uretilir.
  }
  // Dedup.
  const seen = new Set<string>();
  return params.filter((p) => {
    const k = `${p.locale}:${p.slug}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// ---- Sitemap ----
export type SitemapBlogEntry = {
  trUrl: string;
  enUrl?: string; // yalniz hasEn
  lastModified: Date;
};

type SitemapRow = {
  slugTr?: string;
  slugEn?: string;
  hasEn?: boolean;
  updatedAt?: string;
};

// URL uretimini urls.ts'teki getBlogUrls uzerinden yapar (sitemap ile birebir tutarli).
function entryUrls(trSlug: string, enSlug: string | undefined, hasEn: boolean) {
  const post = {
    slug: trSlug,
    altSlugs: { tr: trSlug, en: enSlug ?? trSlug },
  } as BlogPost;
  const { trUrl, enUrl } = getBlogUrls("tr", post);
  return { trUrl, enUrl: hasEn ? enUrl : undefined };
}

export async function getSitemapBlogEntries(): Promise<SitemapBlogEntry[]> {
  const bySlug = new Map<string, SitemapBlogEntry>();

  // Hardcoded (slug her iki dilde ayni, EN her zaman var).
  for (const cfg of newsConfig) {
    const { trUrl, enUrl } = entryUrls(cfg.slug, cfg.slug, true);
    bySlug.set(cfg.slug, { trUrl, enUrl, lastModified: new Date() });
  }

  // Sanity oncelikli (ayni slug'da uzerine yazar). Erisilemezse hardcoded'a duser.
  try {
    const rows = await client.fetch<SitemapRow[]>(
      sitemapPostsQuery,
      {},
      POST_TAG,
    );
    for (const r of rows) {
      if (!r.slugTr) continue;
      const hasEn = Boolean(r.hasEn && r.slugEn);
      const { trUrl, enUrl } = entryUrls(r.slugTr, r.slugEn, hasEn);
      const lastModified = r.updatedAt ? new Date(r.updatedAt) : new Date();
      bySlug.set(r.slugTr, { trUrl, enUrl, lastModified });
    }
  } catch {
    // Sanity yoksa yalniz hardcoded girisler doner.
  }

  return [...bySlug.values()];
}

// ---- Slug 301 ----
// Verilen locale + eski slug icin guncel detay path'i (redirect hedefi) dondur; yoksa null.
export async function getRedirectTarget(
  locale: Locale,
  slug: string,
): Promise<string | null> {
  let row: {
    slugTr?: string;
    slugEn?: string;
    hasEn?: boolean;
  } | null = null;
  try {
    row = await client.fetch(redirectLookupQuery(locale), { slug }, POST_TAG);
  } catch {
    return null;
  }
  if (!row) return null;

  const targetSlug = locale === "tr" ? row.slugTr : row.slugEn;
  // EN icin yeni slug yoksa (ceviri kaldirilmis) yonlendirme yapma.
  if (!targetSlug) return null;

  const post = {
    slug: targetSlug,
    altSlugs: { tr: row.slugTr, en: row.slugEn },
  } as BlogPost;
  const { trUrl, enUrl } = getBlogUrls(locale, post);
  const target = locale === "tr" ? trUrl : enUrl;
  // Absolute URL'den path'e indir (permanentRedirect relative path bekler / de kabul eder).
  try {
    return new URL(target).pathname;
  } catch {
    return target;
  }
}
