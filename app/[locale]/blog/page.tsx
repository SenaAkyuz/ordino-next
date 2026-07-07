import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFilter } from "@/components/sections/BlogFilter";
import { getBlogPosts } from "@/lib/blog/getPosts";
import { getBlogListUrls } from "@/lib/blog/urls";

type Props = {
  params: Promise<{ locale: Locale }>;
};

// Studio degisiklikleri ~1dk'da yansisin (Adim 4'te on-demand webhook'a cevrilecek).
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "blog.metadata",
  });
  const { selfUrl, trUrl, enUrl } = getBlogListUrls(locale);
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: selfUrl,
      languages: { tr: trUrl, en: enUrl, "x-default": trUrl },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations("blog.hero");
  const posts = await getBlogPosts(locale);

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
