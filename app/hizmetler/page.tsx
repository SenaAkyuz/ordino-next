import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesHeroGrid } from "@/components/sections/ServicesHeroGrid";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { PowerSection } from "@/components/sections/PowerSection";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";
import {
  serviceCards,
  serviceDetails,
  analyticsPlatforms,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Tam servis ve çok disiplinli reklam ajansı. Strateji, yaratıcılık, performans, analitik, büyüme ve dijital deneyim.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        label="Hizmetlerimiz"
        title="Tam servis."
        emphasis="Çok disiplinli."
        sub="Strateji, yaratıcılık, performans medya, analitik, büyüme ve dijital deneyim — tek elden, ölçülebilir sonuçlarla."
      />
      <WhatWeDo
        eyebrow="Neler Yapıyoruz?"
        title="Veriyi <em>yaratıcılıkla</em> bütünleştiriyor,<br><em>çok disiplinli</em> yapımızla yenilikçi çözümler üretiyoruz."
      />
      <ServicesHeroGrid cards={serviceCards} />
      <ServicesAccordion details={serviceDetails} />
      <PowerSection
        label="Yapay Zekanın Gücü"
        title="En iyi kampanyalarınız için"
        emphasis="yeterince akıllı."
      />
      <AnalyticsBlock
        title="Tek partner."
        emphasis="Tüm platformlar."
        description="Ekibimiz tüm büyük reklam platformlarında doğal olarak çalışır — ve onları birbirine bağlayan analitik altyapılar üzerinde. Bu, ölçeklendikçe stratejinizin bütünleşik kalması demek."
        items={analyticsPlatforms}
      />
      <Cta
        title="Büyüme yolculuğunuza hız katmak için"
        emphasis="toplantıyı şimdi planlayın."
        buttonLabel="Toplantı Planla"
        href="/iletisim#contact-form"
      />
    </>
  );
}
