import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/data/site";
import {
  serviceNums,
  serviceSlugs,
  type ServiceCard,
  type ServiceDetail,
} from "@/lib/data/services";

import { PageHero } from "@/components/sections/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesHeroGrid } from "@/components/sections/ServicesHeroGrid";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { PowerSection } from "@/components/sections/PowerSection";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "services.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HizmetlerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const tNav = await getTranslations("nav");

  const cards: ServiceCard[] = serviceNums.map((num) => ({
    num,
    slug: serviceSlugs[num],
    title: t(`heroGrid.${num}.title`),
    titleEm: t(`heroGrid.${num}.titleEm`),
    description: t(`heroGrid.${num}.description`),
  }));

  const details: ServiceDetail[] = serviceNums.map((num) => ({
    num: t(`accordion.${num}.num`),
    slug: serviceSlugs[num],
    title: t(`accordion.${num}.title`),
    titleHead: t(`accordion.${num}.titleHead`),
    titleEm: t(`accordion.${num}.titleEm`),
    lead: t(`accordion.${num}.lead`),
    items: (t.raw as (key: string) => unknown)(
      `accordion.${num}.items`,
    ) as string[],
  }));

  const platforms = (t.raw as (key: string) => unknown)(
    "analyticsBlock.platforms",
  ) as string[];

  return (
    <>
      <PageHero
        label={t("pageHero.label")}
        title={t("pageHero.title")}
        emphasis={t("pageHero.emphasis")}
        sub={t("pageHero.sub")}
      />
      <WhatWeDo
        eyebrow={t("whatWeDo.eyebrow")}
        title={t("whatWeDo.titleHtml")}
      />
      <ServicesHeroGrid cards={cards} />
      <ServicesAccordion details={details} />
      <PowerSection
        label={t("powerSection.label")}
        title={t("powerSection.title")}
        emphasis={t("powerSection.emphasis")}
      />
      <AnalyticsBlock
        title={t("analyticsBlock.title")}
        emphasis={t("analyticsBlock.emphasis")}
        description={t("analyticsBlock.description")}
        items={platforms}
        marqueeLabel={t("marqueeLabel")}
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
