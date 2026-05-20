import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BlogPost } from "@/components/sections/BlogPost";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { news } from "@/lib/data/news";
import { routing, type Locale } from "@/i18n/routing";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    news.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = news.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = news
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <BlogPost post={post} />
      {related.length > 0 && <RelatedPosts posts={related} />}
    </>
  );
}
