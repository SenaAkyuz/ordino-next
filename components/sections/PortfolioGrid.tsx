"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { WorkPortfolioItem } from "@/lib/data/workPortfolio";

type PortfolioGridProps = {
  items: WorkPortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeSector, setActiveSector] = useState<string>("Tümü");

  const sectors = useMemo(() => {
    const uniqueSectors = Array.from(new Set(items.map((i) => i.sector)));
    return ["Tümü", ...uniqueSectors];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeSector === "Tümü") return items;
    return items.filter((i) => i.sector === activeSector);
  }, [items, activeSector]);

  return (
    <section
      data-theme="light"
      id="portfolio"
      className="bg-white px-5 py-[80px] md:px-10 md:py-[120px] lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <div className="mb-12 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3">
            {sectors.map((sector) => (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={
                  activeSector === sector
                    ? "rounded-[10em] border border-black bg-black px-5 py-2 font-body text-[0.8rem] text-white transition-[background,color] duration-300 md:px-6 md:py-[10px]"
                    : "rounded-[10em] border border-[#ddd] bg-transparent px-5 py-2 font-body text-[0.8rem] text-black transition-[background,color,border-color] duration-300 hover:border-black md:px-6 md:py-[10px]"
                }
              >
                {sector}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Reveal key={item.slug}>
              <Link
                href={`/referanslar/${item.slug}`}
                className="group block overflow-hidden"
              >
                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.brand} çalışması`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center font-display text-[1.4rem] font-light text-white/70 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                      style={{ background: item.gradient }}
                      aria-hidden="true"
                    >
                      {item.brand}
                    </div>
                  )}
                </div>
                <p className="mb-2 font-body text-[0.7rem] uppercase tracking-[2px] text-accent">
                  {item.sector}
                </p>
                <h3 className="mb-3 font-display text-[1.4rem] font-normal leading-[1.3] text-black transition-colors duration-300 group-hover:text-accent">
                  {item.brand}
                </h3>
                <p className="mb-4 font-body text-[0.85rem] font-light leading-[1.6] text-[#666]">
                  {item.featuredServicesShort.join(" · ")}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-[0.75rem] uppercase tracking-[1.5px] text-black transition-transform duration-300 group-hover:translate-x-1">
                  Detayları Gör →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-12 text-center font-body text-base text-gray">
            Bu sektörde henüz çalışma yok.
          </p>
        )}
      </div>
    </section>
  );
}
