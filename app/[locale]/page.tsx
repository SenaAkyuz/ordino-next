import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { MeetingCta } from "@/components/sections/MeetingCta";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Ordino — Strateji. Yaratıcılık. Büyüme.",
  description:
    "London ve Istanbul merkezli full-service reklam ajansı. Google, Meta, TikTok ve X resmi reklam partnerliği ile Türk ve uluslararası markalara hizmet veriyoruz.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <ClientsShowcase />
      <HowWeWork />
      <PartnerMarquee />
      <ServicesGrid />
      <LatestWorks />
      <MeetingCta />
      <Cta
        title="Markanızın büyüme yolculuğunda büyük bir adım atmak için"
        emphasis="şimdi tanışalım."
        buttonLabel="İletişime Geç"
        href="/iletisim"
      />
    </>
  );
}
