import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Showreel } from "@/components/sections/Showreel";
import { Leadership } from "@/components/sections/Leadership";
import { TeamStructure } from "@/components/sections/TeamStructure";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Cta } from "@/components/sections/Cta";
import { leadership, teamStructure } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ordino, London ve Istanbul merkezli full-service reklam ajansıdır. Google, Meta, TikTok ve X'te resmi reklam partnerliği ile Türk ve uluslararası markalara hizmet verir.",
};

export default async function HakkimizdaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <EditorialHero
        eyebrow="Hakkımızda"
        title="London ve Istanbul bazlı"
        emphasis="full-service ajans."
        prose={[
          "Google, Meta, TikTok ve X'te resmi reklam partnerliği.",
          "Türk ve uluslararası markalara hizmet.",
        ]}
      />
      <HowWeWork
        eyebrow="Rakamlarla Ordino"
        title="11 yılda"
        emphasis="ölçeklenen büyüme."
        description="2015'ten bu yana 50'den fazla markaya hizmet veriyoruz. UK, USA ve Türkiye'de yönetilen reklam bütçelerimiz toplamda yüz milyonlarca dolar; binlerce kampanya teslim ettik. Ekibimiz, deneyimli stratejistler, performans uzmanları ve yaratıcı yönetmenlerden oluşur."
        stats={[
          { value: "11", label: "Yıllık Tecrübe" },
          { value: "50+", label: "Marka ile Çalışıldı" },
          { value: "£2M+", label: "Yönetilen Reklam Bütçesi" },
          { value: "Binlerce", label: "Yönetilen Kampanya" },
        ]}
      />
      <Showreel
        eyebrow="Studio Reel · 2026"
        title="11 yılın "
        emphasis="hikayesi."
      />
      <Leadership
        lead="Ordino'nun yönetim kadrosu — strateji, performans, tasarım ve operasyondan sorumlu altı kişilik üst kadro."
        leaders={leadership}
      />
      <TeamStructure groups={teamStructure} />
      <PartnerLogos />
      <Cta
        title="Birlikte büyümeye"
        emphasis="hazır mısınız?"
      />
    </>
  );
}
