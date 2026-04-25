import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/sections/BlogPost";
import { RelatedPosts } from "@/components/sections/RelatedPosts";
import { news } from "@/lib/data/news";

type Params = { slug: string };

export async function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı bulunamadı — Ordino" };
  return {
    title: `${post.title} — Ordino`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
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
