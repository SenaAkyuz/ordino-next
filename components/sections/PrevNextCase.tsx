import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type PrevNextStudy = {
  slug: string;
  brand: string;
  sector: string;
} | null;

type PrevNextCaseProps = {
  prev: PrevNextStudy;
  next: PrevNextStudy;
};

export async function PrevNextCase({ prev, next }: PrevNextCaseProps) {
  if (!prev && !next) return null;

  const t = await getTranslations("caseStudies.prevNext");

  return (
    <section
      data-theme="light"
      className="border-y border-[#eee] bg-light-bg px-5 py-12 md:px-10 md:py-16 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
        {prev ? (
          <Link
            href={{
              pathname: "/referanslar/[slug]",
              params: { slug: prev.slug },
            }}
            className="group flex flex-col items-start gap-3 transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-body text-[0.7rem] uppercase tracking-[2px] text-accent">
              {t("prev")}
            </span>
            <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-gray">
              {prev.sector}
            </p>
            <h4 className="font-display text-[1.6rem] font-normal text-black transition-transform duration-300 group-hover:translate-x-[-4px]">
              {prev.brand}
            </h4>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={{
              pathname: "/referanslar/[slug]",
              params: { slug: next.slug },
            }}
            className="group flex flex-col items-end gap-3 text-right transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-body text-[0.7rem] uppercase tracking-[2px] text-accent">
              {t("next")}
            </span>
            <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-gray">
              {next.sector}
            </p>
            <h4 className="font-display text-[1.6rem] font-normal text-black transition-transform duration-300 group-hover:translate-x-1">
              {next.brand}
            </h4>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
