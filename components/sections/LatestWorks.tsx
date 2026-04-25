import Link from "next/link";
import { latestWorks } from "@/lib/data/latestWorks";

export function LatestWorks() {
  return (
    <section data-theme="dark" className="w-full bg-dark-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20">
        <div className="mb-16 text-center">
          <p className="mb-4 font-body text-[0.75rem] uppercase tracking-[3px] text-white/60">
            Featured Work
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light text-white">
            Çalıştığımız <em className="italic font-normal">markalar.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {latestWorks.map((item) => (
            <Link
              key={item.slug}
              href={`/referanslar/${item.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                style={{ background: item.gradient }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.7)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 z-[2]">
                <p className="mb-1 font-body text-[0.7rem] uppercase tracking-[2px] text-white/70">
                  {item.sector}
                </p>
                <p className="font-display text-[1.4rem] font-normal text-white">
                  {item.label}
                </p>
                <p className="mt-2 font-body text-[0.75rem] uppercase tracking-[1.5px] text-white/0 transition-[color] duration-300 group-hover:text-white/90">
                  Detayları Gör →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
