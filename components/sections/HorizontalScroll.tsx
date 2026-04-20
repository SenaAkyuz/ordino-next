import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioHighlights } from "@/lib/data/portfolio";

export function HorizontalScroll() {
  return (
    <section className="overflow-hidden bg-dark-bg py-[120px] pl-5 md:pl-10 lg:pl-20">
      <Reveal>
        <div className="mx-auto mb-[60px] flex max-w-[1400px] items-end justify-between pr-5 text-white md:pr-10 lg:pr-20">
          <div>
            <p className="mb-4 font-body text-[0.75rem] uppercase tracking-[3px] text-white/50">
              Selected Work
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-light leading-[1.15] tracking-[-1px] [&_em]:font-normal [&_em]:italic">
              Brands we&rsquo;ve
              <br />
              <em>elevated.</em>
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden shrink-0 border-b border-white/30 pb-[3px] font-body text-[0.9rem] text-white/80 transition-colors duration-300 hover:border-white hover:text-white md:inline-block"
          >
            View all work →
          </Link>
        </div>
      </Reveal>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pr-5 md:pr-10 lg:pr-20">
        {portfolioHighlights.map((item) => (
          <Link
            key={item.slug}
            href={item.href ?? `/case-studies#${item.slug}`}
            className="group relative w-[320px] shrink-0 snap-start md:w-[420px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1d20]">
              <div
                className="h-full w-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                style={{ background: item.gradient }}
                aria-hidden="true"
              />
            </div>
            <div className="px-[2px] pt-[22px] text-white">
              <p className="mb-[6px] font-body text-[0.7rem] uppercase tracking-[2px] text-white/50">
                {item.category}
              </p>
              <h3 className="font-display text-[1.5rem] font-normal leading-[1.2]">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
