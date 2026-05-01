"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { ServiceDetail as ServiceDetailData } from "@/lib/data/services";

type ServicesAccordionProps = {
  details: ServiceDetailData[];
};

export function ServicesAccordion({ details }: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const openFromHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const index = details.findIndex((d) => d.slug === hash);
      if (index === -1) return;
      setActiveIndex(index);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [details]);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-16 text-center md:mb-20">
            <p className="mb-4 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
              Hizmet Kategorileri
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-[1.2] tracking-[-0.5px] text-black [&_em]:italic [&_em]:font-normal">
              9 alanda <em>uzman.</em> Tek elden <em>yönetim.</em>
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-[#e5e5e5]">
          {details.map((detail, index) => {
            const isActive = activeIndex === index;
            return (
              <Reveal key={detail.slug}>
                <div
                  id={detail.slug}
                  className={
                    isActive
                      ? "border-b border-[#e5e5e5] bg-light-bg"
                      : "border-b border-[#e5e5e5] bg-white transition-colors duration-300 hover:bg-light-bg/50"
                  }
                >
                  {/* Accordion Header (clickable) */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isActive}
                    aria-controls={`accordion-content-${detail.slug}`}
                    className="flex w-full items-center justify-between gap-6 px-5 py-8 text-left transition-colors duration-300 md:px-8 md:py-10"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span
                        className={
                          isActive
                            ? "font-display text-[1.4rem] font-light text-accent transition-colors duration-300 md:text-[1.8rem]"
                            : "font-display text-[1.4rem] font-light text-gray transition-colors duration-300 md:text-[1.8rem]"
                        }
                      >
                        {detail.num.split(" — ")[0]}
                      </span>
                      <h3
                        className={
                          isActive
                            ? "font-display text-[1.4rem] font-normal leading-[1.2] text-black transition-colors duration-300 md:text-[2rem]"
                            : "font-display text-[1.4rem] font-light leading-[1.2] text-black transition-colors duration-300 md:text-[2rem]"
                        }
                      >
                        {detail.num.split(" — ")[1]}
                      </h3>
                    </div>

                    {/* Plus/Minus Icon */}
                    <span
                      className="relative flex h-8 w-8 shrink-0 items-center justify-center md:h-10 md:w-10"
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-4 bg-black md:w-5" />
                      <span
                        className={
                          isActive
                            ? "absolute h-4 w-px bg-black opacity-0 transition-[opacity] duration-300 md:h-5"
                            : "absolute h-4 w-px bg-black opacity-100 transition-[opacity] duration-300 md:h-5"
                        }
                      />
                    </span>
                  </button>

                  {/* Accordion Content (collapsible) */}
                  <div
                    id={`accordion-content-${detail.slug}`}
                    role="region"
                    className={
                      isActive
                        ? "grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out"
                        : "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out"
                    }
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 gap-8 px-5 pb-10 md:grid-cols-[1fr_1.4fr] md:gap-12 md:px-8 md:pb-12 lg:gap-16">
                        {/* Sol: Baslik + Lead */}
                        <div>
                          <h4 className="mb-5 font-display text-[clamp(1.6rem,2.4vw,2rem)] font-light leading-[1.25] text-black [&_em]:italic [&_em]:font-normal">
                            {detail.title}
                            <br />
                            {detail.titleHead}
                            <em>{detail.titleEm}</em>
                          </h4>
                          <p className="font-body text-[0.95rem] font-light leading-[1.8] text-[#555]">
                            {detail.lead}
                          </p>
                        </div>

                        {/* Sag: Items + CTA */}
                        <div>
                          <ul className="grid list-none grid-cols-1 gap-x-[30px] gap-y-[12px] sm:grid-cols-2">
                            {detail.items.map((item) => (
                              <li
                                key={item}
                                className="relative pl-5 font-body text-[0.9rem] font-light text-[#444] before:absolute before:left-0 before:top-[10px] before:h-px before:w-2 before:bg-accent"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/iletisim"
                            className="mt-8 inline-block rounded-[10em] border border-black bg-black px-7 py-3 font-body text-[0.85rem] text-white transition-[background,color] duration-300 hover:bg-transparent hover:text-black"
                          >
                            Detaylı Bilgi Al →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
