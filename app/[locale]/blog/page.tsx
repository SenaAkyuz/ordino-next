import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFilter } from "@/components/sections/BlogFilter";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Blog & İçgörüler",
  description:
    "Dijital pazarlama, SEO, AI, sosyal medya ve sektör haberleri üzerine Ordino ekibinden içgörüler.",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHero
        label="Blog & İçgörüler"
        title="Üzerinde"
        emphasis="düşündüklerimiz."
        sub="Kampanya analizleri, platform güncellemeleri, yaratıcı denemeler ve Ordino ekibinden samimi görüşler."
      />
      <BlogFilter posts={news} />
    </>
  );
}
