import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFilter } from "@/components/sections/BlogFilter";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Blog & İçgörüler — Ordino",
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
      <PowerSection
        label="Bültenimize Abone Olun"
        title="Ayda bir e-posta."
        emphasis="Spam yok."
      />
      <Cta
        title="Bir hikaye fikriniz mi"
        emphasis="var?"
        buttonLabel="hello@theordino.com"
        href="mailto:hello@theordino.com"
      />
    </>
  );
}
