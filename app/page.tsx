import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { Cta } from "@/components/sections/Cta";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Ordino — Strateji. Yaratıcılık. Büyüme.",
  description:
    "London ve Istanbul merkezli full-service reklam ajansı. Google, Meta, TikTok ve X resmi reklam partnerliği ile Türk ve uluslararası markalara hizmet veriyoruz.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsShowcase />
      <HowWeWork />
      <PartnerMarquee />
      <ServicesGrid />
      <LatestWorks />
      <ScheduleMeeting calendlyUrl={site.meetingUrl} />
      <Cta
        title="Markanızın büyüme yolculuğunda büyük bir adım atmak için"
        emphasis="şimdi tanışalım."
        buttonLabel="İletişime Geç"
        href="/iletisim"
      />
    </>
  );
}
