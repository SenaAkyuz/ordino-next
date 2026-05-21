import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BlogPost } from "@/components/sections/BlogPost";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { routing, type Locale } from "@/i18n/routing";
import {
  newsConfig,
  type NewsPost,
  type NewsPostContent,
} from "@/lib/data/news";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    newsConfig.map((cfg) => ({ locale, slug: cfg.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const cfg = newsConfig.find((c) => c.slug === slug);
  if (!cfg) return { title: "Post not found" };

  const localeTyped = locale as (typeof routing.locales)[number];
  const tNewsPosts = await getTranslations({
    locale: localeTyped,
    namespace: "news.posts",
  });
  const tBlog = await getTranslations({
    locale: localeTyped,
    namespace: "blog",
  });

  const content = (tNewsPosts.raw as (key: string) => unknown)(
    cfg.slug,
  ) as NewsPostContent;

  return {
    title: tBlog("detailTitleTemplate", { title: content.title }),
    description: content.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const cfg = newsConfig.find((c) => c.slug === slug);
  if (!cfg) notFound();

  const tNewsPosts = await getTranslations("news.posts");
  const tCategories = await getTranslations("blog.categories");

  const content = (tNewsPosts.raw as (key: string) => unknown)(
    cfg.slug,
  ) as NewsPostContent;
  const post: NewsPost = {
    slug: cfg.slug,
    category: tCategories(cfg.categoryKey),
    gradient: cfg.gradient,
    content: cfg.content,
    ...content,
  };

  const relatedPosts: NewsPost[] = newsConfig
    .filter((c) => c.slug !== slug && c.categoryKey === cfg.categoryKey)
    .slice(0, 3)
    .map((c) => {
      const rc = (tNewsPosts.raw as (key: string) => unknown)(
        c.slug,
      ) as NewsPostContent;
      return {
        slug: c.slug,
        category: tCategories(c.categoryKey),
        gradient: c.gradient,
        content: c.content,
        ...rc,
      };
    });

  return (
    <>
      <BlogPost post={post} />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </>
  );
}
