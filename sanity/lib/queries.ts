import type { Locale } from "@/i18n/routing";

// Locale'e gore dogru dil alanlarini secen GROQ query'leri.
// Token yok / published perspective; draft'lar path("drafts.**") ile de haric.
const suffix = (locale: Locale) => (locale === "tr" ? "Tr" : "En");

export function postsListQuery(locale: Locale): string {
  const s = suffix(locale);
  return `*[
    _type == "post"
    && !(_id in path("drafts.**"))
    && defined(publishedAt) && publishedAt <= now()
    && defined(title${s}) && title${s} != ""
    && defined(slug${s}.current)
  ] | order(publishedAt desc) {
    "slug": slug${s}.current,
    "title": title${s},
    "excerpt": excerpt${s},
    "category": category,
    "author": author,
    "publishedAt": publishedAt,
    "gradient": gradient,
    "coverImage": coverImage{ asset, alt, hotspot, crop },
    "charCount": length(pt::text(body${s}))
  }`;
}

export function postBySlugQuery(locale: Locale): string {
  const s = suffix(locale);
  return `*[
    _type == "post"
    && !(_id in path("drafts.**"))
    && defined(publishedAt) && publishedAt <= now()
    && slug${s}.current == $slug
  ][0] {
    "slug": slug${s}.current,
    "slugTr": slugTr.current,
    "slugEn": slugEn.current,
    "hasEn": defined(titleEn) && titleEn != "",
    "title": title${s},
    "excerpt": excerpt${s},
    "category": category,
    "author": author,
    "publishedAt": publishedAt,
    "updatedAt": _updatedAt,
    "gradient": gradient,
    "coverImage": coverImage{
      asset,
      alt,
      hotspot,
      crop,
      "lqip": asset->metadata.lqip,
      "dimensions": asset->metadata.dimensions
    },
    "body": body${s}[]{
      ...,
      _type == "image" => {
        ...,
        "lqip": asset->metadata.lqip,
        "dimensions": asset->metadata.dimensions
      }
    },
    "charCount": length(pt::text(body${s})),
    "meta": meta${s}{ metaTitle, metaDescription, ogImage{ asset }, canonicalUrl, noIndex }
  }`;
}

// generateStaticParams icin: her yayinlanmis yazinin TR ve (varsa) EN slug'i.
export const allSlugsQuery = `*[
  _type == "post"
  && !(_id in path("drafts.**"))
  && defined(publishedAt) && publishedAt <= now()
] {
  "slugTr": slugTr.current,
  "slugEn": slugEn.current,
  "hasEn": defined(titleEn) && titleEn != ""
}`;

// Sitemap icin: TUM yayinlanmis (draft/planlanmis haric) yazilar.
export const sitemapPostsQuery = `*[
  _type == "post"
  && !(_id in path("drafts.**"))
  && defined(publishedAt) && publishedAt <= now()
  && defined(slugTr.current)
] | order(publishedAt desc) {
  "slugTr": slugTr.current,
  "slugEn": slugEn.current,
  "hasEn": defined(titleEn) && titleEn != "",
  "updatedAt": _updatedAt
}`;

// Slug 301: verilen locale'de previousSlugs<Locale> icinde $slug geceni bul,
// guncel slug'ini dondur (yoksa null). Sadece yayinlanmis yazilar.
export function redirectLookupQuery(locale: Locale): string {
  const s = suffix(locale);
  return `*[
    _type == "post"
    && !(_id in path("drafts.**"))
    && defined(publishedAt) && publishedAt <= now()
    && $slug in previousSlugs${s}
  ][0] {
    "slugTr": slugTr.current,
    "slugEn": slugEn.current,
    "hasEn": defined(titleEn) && titleEn != ""
  }`;
}
