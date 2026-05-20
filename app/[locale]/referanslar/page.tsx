import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Cta } from "@/components/sections/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Gerçek markalar. Gerçek sonuçlar. Veri odaklı strateji, AI destekli optimizasyon ve dönüşüme odaklı yaratıcılık ile elde ettiğimiz başarı hikayeleri.",
};

export default async function ReferanslarPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PageHero
        label="Referanslar"
        title="Gerçek markalar."
        emphasis="Gerçek sonuçlar."
        sub="Altı kampanya, altı sektör. Veri odaklı strateji, AI destekli optimizasyon ve dönüşüme odaklı yaratıcılık ile elde edilen ölçülebilir sonuçlar."
      />
      <section
        data-theme="light"
        className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <Reveal key={c.slug} className="h-full">
                <Link
                  href={`/referanslar/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden">
                    {c.image ? (
                      <Image
                        src={c.image}
                        alt={`${c.brand} case study`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center font-display text-[1.5rem] font-light text-white/70 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                        style={{ background: c.gradient }}
                        aria-hidden="true"
                      >
                        {c.brand}
                      </div>
                    )}
                  </div>
                  <p className="mb-2 font-body text-[0.7rem] uppercase tracking-[2px] text-accent">
                    {c.sector}
                  </p>
                  <h3 className="mb-3 font-display text-[1.4rem] font-normal leading-[1.3] text-black transition-colors duration-300 group-hover:text-accent">
                    {c.brand}
                  </h3>
                  <p className="mb-4 font-body text-[0.85rem] font-light leading-[1.6] text-[#666]">
                    {c.brandIntro}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-body text-[0.75rem] uppercase tracking-[1.5px] text-black transition-transform duration-300 group-hover:translate-x-1">
                    Detayları Gör →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta
        title="Sıradaki başarı hikayesi"
        emphasis="sizin olsun."
      />
    </>
  );
}
