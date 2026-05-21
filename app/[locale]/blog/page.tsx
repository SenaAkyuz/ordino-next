import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFilter } from "@/components/sections/BlogFilter";
import {
  newsConfig,
  type NewsPost,
  type NewsPostContent,
} from "@/lib/data/news";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "blog.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("blog.hero");
  const tNewsPosts = await getTranslations("news.posts");
  const tCategories = await getTranslations("blog.categories");

  const posts: NewsPost[] = newsConfig.map((cfg) => {
    const content = (tNewsPosts.raw as (key: string) => unknown)(
      cfg.slug,
    ) as NewsPostContent;
    return {
      slug: cfg.slug,
      category: tCategories(cfg.categoryKey),
      gradient: cfg.gradient,
      content: cfg.content,
      ...content,
    };
  });

  return (
    <>
      <PageHero
        label={tHero("label")}
        title={tHero("title")}
        emphasis={tHero("emphasis")}
        sub={tHero("sub")}
      />
      <BlogFilter posts={posts} />
    </>
  );
}
