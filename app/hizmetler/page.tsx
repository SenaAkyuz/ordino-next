import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesHeroGrid } from "@/components/sections/ServicesHeroGrid";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { PowerSection } from "@/components/sections/PowerSection";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";
import {
  serviceCards,
  serviceDetails,
  analyticsPlatforms,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Hizmetler — Ordino",
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
      <WhatWeDo title="Tam servis ve <em>çok disiplinli.</em><br>İşimiz: veri odaklı ve <em>yaratıcı zekayla</em>." />
      <ServicesHeroGrid cards={serviceCards} />
      {serviceDetails.map((detail, i) => (
        <ServiceDetail key={detail.slug} {...detail} alt={i % 2 === 1} />
      ))}
      <ClientsShowcase />
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
        title="Büyüme motorunuzu"
        emphasis="birlikte kuralım."
        buttonLabel="Toplantı Planla"
        href="/iletisim#contact-form"
      />
    </>
  );
}
