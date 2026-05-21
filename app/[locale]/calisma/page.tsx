import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/lib/data/site";
import {
  workPortfolioConfig,
  type WorkPortfolioItem,
} from "@/lib/data/workPortfolio";

import { WorkHero } from "@/components/sections/WorkHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "work.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CalismaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("work");
  const tNav = await getTranslations("nav");
  const tSectors = await getTranslations("latestWorks.sectors");
  const tServices = await getTranslations("workPortfolio.featuredServicesShort");

  const items: WorkPortfolioItem[] = workPortfolioConfig.map((cfg) => ({
    slug: cfg.slug,
    brand: cfg.brand,
    sector: tSectors(cfg.sectorKey),
    featuredServicesShort: cfg.featuredServicesShortKeys.map((k) => tServices(k)),
    image: cfg.image,
    gradient: cfg.gradient,
    hasDetail: cfg.hasDetail,
  }));

  const analyticsItems = (t.raw as (key: string) => unknown)(
    "analyticsBlock.items",
  ) as string[];

  return (
    <>
      <WorkHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        emphasis={t("hero.emphasis")}
        sub={t("hero.sub")}
        scrollTo="#portfolio"
      />
      <PortfolioGrid items={items} />
      <AnalyticsBlock
        title={t("analyticsBlock.title")}
        emphasis={t("analyticsBlock.emphasis")}
        description={t("analyticsBlock.description")}
        items={analyticsItems}
        showPartners={false}
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
