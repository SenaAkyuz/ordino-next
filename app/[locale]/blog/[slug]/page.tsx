import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BlogPost } from "@/components/sections/BlogPost";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { type Locale } from "@/i18n/routing";
import { site } from "@/lib/data/site";
import {
  getBlogPost,
  getBlogPosts,
  getAllBlogParams,
  getRedirectTarget,
} from "@/lib/blog/getPosts";
import { getBlogUrls } from "@/lib/blog/urls";

type Params = { locale: Locale; slug: string };

// Studio'dan sonra eklenen yazi build param'inda olmasa da ISR ile gelsin (404 vermesin).
export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  return getAllBlogParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPost(locale, slug);
  if (!post) return { title: "Post not found" };

  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const { selfUrl, trUrl, enUrl } = getBlogUrls(locale, post);

  // hreflang — eksik dil kurali: EN alternate SADECE hasEn ise. x-default = trUrl
  // (sitemap x-default basmiyor, defaultLocale tr).
  const languages: Record<string, string> = { tr: trUrl, "x-default": trUrl };
  if (post.hasEn) languages.en = enUrl;

  const ogTitle = post.metaTitle || post.title;
  const ogDescription = post.metaDescription || post.excerpt;
  const ogImage = post.ogImageUrl || site.ogImage;
  const alternateLocale =
    locale === "tr"
      ? post.hasEn
        ? ["en_US"]
        : undefined
      : ["tr_TR"];

  return {
    // title/description Adim 2 mantigi korunur.
    title: tBlog("detailTitleTemplate", { title: ogTitle }),
    description: ogDescription,
    alternates: {
      canonical: post.canonicalUrl || selfUrl,
      languages,
    },
    ...(post.noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "article",
      title: ogTitle,
      description: ogDescription,
      url: selfUrl,
      images: [ogImage],
      publishedTime: post.publishedAtISO,
      modifiedTime: post.updatedAt || post.publishedAtISO,
      authors: post.author ? [post.author] : undefined,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getBlogPost(locale, slug);
  if (!post) {
    // Slug degismisse eski slug'i previousSlugs'ta ara → guncel URL'e kalici (308) yonlen.
    const target = await getRedirectTarget(locale, slug);
    if (target) permanentRedirect(target);
    notFound();
  }

  const { selfUrl } = getBlogUrls(locale, post);

  // Ayni kategorideki diger yazilar (Sanity + hardcoded), mevcut yazi haric.
  const allPosts = await getBlogPosts(locale);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <ArticleSchema post={post} locale={locale} url={selfUrl} />
      <BlogPost post={post} />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </>
  );
}
