import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Showreel } from "@/components/sections/Showreel";
import { Leadership } from "@/components/sections/Leadership";
import { TeamStructure } from "@/components/sections/TeamStructure";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Cta } from "@/components/sections/Cta";
import { leadership } from "@/lib/data/team";
import { site } from "@/lib/data/site";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "about.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HakkimizdaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");

  const stats = t.raw("howWeWork.stats") as Array<{
    value: string;
    label: string;
  }>;

  const partners = [
    {
      name: "Google Partner",
      description: t("partnerLogos.partnerTypes.advertising"),
      logo: "/partners/googlePartner.png",
      showLogo: true,
    },
    {
      name: "Meta Business Partner",
      description: t("partnerLogos.partnerTypes.business"),
      logo: "/partners/metaBusinessPartner.png",
      showLogo: true,
    },
    {
      name: "Google Analytics Partner",
      description: t("partnerLogos.partnerTypes.analytics"),
      logo: "/partners/googleAnalyticsPartner.png",
      showLogo: true,
    },
    {
      name: "TikTok Marketing Partner",
      description: t("partnerLogos.partnerTypes.marketing"),
      logo: "/partners/tiktokBusinessPartner.png",
      showLogo: true,
    },
  ];

  return (
    <>
      <EditorialHero
        eyebrow={t("editorialHero.eyebrow")}
        title={t("editorialHero.title")}
        emphasis={t("editorialHero.emphasis")}
        prose={[t("editorialHero.prose1"), t("editorialHero.prose2")]}
      />
      <HowWeWork
        eyebrow={t("howWeWork.eyebrow")}
        title={t("howWeWork.title")}
        emphasis={t("howWeWork.emphasis")}
        description={t("howWeWork.description")}
        stats={stats}
      />
      <Showreel
        eyebrow={t("showreel.eyebrow")}
        title={`${t("showreel.title")} `}
        emphasis={t("showreel.emphasis")}
      />
      <Leadership
        eyebrow={t("leadership.eyebrow")}
        lead={t("leadership.lead")}
        linkLabel={t("leadership.linkLabel")}
        leaders={leadership}
      />
      <TeamStructure />
      <PartnerLogos
        eyebrow={t("partnerLogos.eyebrow")}
        title={t("partnerLogos.title")}
        emphasis={t("partnerLogos.emphasis")}
        description={t("partnerLogos.description")}
        partners={partners}
      />
      <Cta
        title={t("cta.title")}
        emphasis={t("cta.emphasis")}
        buttonLabel={tNav("ctaLabel")}
        href={site.meetingUrl}
      />
    </>
  );
}
