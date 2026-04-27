import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFilter } from "@/components/sections/BlogFilter";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Blog & İçgörüler",
  description:
    "Dijital pazarlama, SEO, AI, sosyal medya ve sektör haberleri üzerine Ordino ekibinden içgörüler.",
};

export default function BlogPage() {
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
