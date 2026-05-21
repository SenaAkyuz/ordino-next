import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CaseBlock } from "@/components/sections/CaseBlock";
import { PrevNextCase } from "@/components/sections/PrevNextCase";
import { Cta } from "@/components/sections/Cta";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/lib/data/site";
import {
  caseStudiesConfig,
  type CaseStudy,
  type CaseStudyContent,
} from "@/lib/data/caseStudies";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudiesConfig.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const cfg = caseStudiesConfig.find((c) => c.slug === slug);
  if (!cfg) return { title: "Case not found" };

  const localeTyped = locale as (typeof routing.locales)[number];
  const tContent = await getTranslations({
    locale: localeTyped,
    namespace: "caseStudiesContent",
  });
  const t = await getTranslations({
    locale: localeTyped,
    namespace: "caseStudies",
  });

  const brand = tContent(`${cfg.slug}.brand`);
  const lead = tContent(`${cfg.slug}.lead`);

  return {
    title: t("detailTitleTemplate", { brand }),
    description: lead,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const cfg = caseStudiesConfig.find((c) => c.slug === slug);
  if (!cfg) notFound();

  const tContent = await getTranslations("caseStudiesContent");
  const t = await getTranslations("caseStudies");
  const tNav = await getTranslations("nav");

  const content = (tContent.raw as (key: string) => unknown)(
    cfg.slug,
  ) as CaseStudyContent;
  const study: CaseStudy = {
    slug: cfg.slug,
    image: cfg.image,
    gradient: cfg.gradient,
    ...content,
  };

  const currentIndex = caseStudiesConfig.findIndex((c) => c.slug === slug);
  const prevCfg = currentIndex > 0 ? caseStudiesConfig[currentIndex - 1] : null;
  const nextCfg =
    currentIndex < caseStudiesConfig.length - 1
      ? caseStudiesConfig[currentIndex + 1]
      : null;

  const prev = prevCfg
    ? {
        slug: prevCfg.slug,
        brand: tContent(`${prevCfg.slug}.brand`),
        sector: tContent(`${prevCfg.slug}.sector`),
      }
    : null;
  const next = nextCfg
    ? {
        slug: nextCfg.slug,
        brand: tContent(`${nextCfg.slug}.brand`),
        sector: tContent(`${nextCfg.slug}.sector`),
      }
    : null;

  return (
    <>
      <CaseBlock data={study} />
      <PrevNextCase prev={prev} next={next} />
      <Cta
        title={t("cta.title")}
        emphasis={t("cta.emphasis")}
        buttonLabel={tNav("ctaLabel")}
        href={site.meetingUrl}
      />
    </>
  );
}
