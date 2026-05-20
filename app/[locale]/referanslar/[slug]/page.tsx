import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CaseBlock } from "@/components/sections/CaseBlock";
import { PrevNextCase } from "@/components/sections/PrevNextCase";
import { Cta } from "@/components/sections/Cta";
import { caseStudies } from "@/lib/data/caseStudies";
import { routing, type Locale } from "@/i18n/routing";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Referans bulunamadı" };
  return {
    title: `${study.brand} — Referans`,
    description: study.lead,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <>
      <CaseBlock data={study} />
      <PrevNextCase prev={prevStudy} next={nextStudy} />
      <Cta
        title="Bir sonraki başarı"
        emphasis="hikayesi sizin olsun."
      />
    </>
  );
}
