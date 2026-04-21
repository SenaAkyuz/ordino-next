import type { WorkPortfolioItem } from "@/lib/data/workPortfolio";

type PortfolioRowsProps = {
  items: WorkPortfolioItem[];
  id?: string;
};

export function PortfolioRows({ items, id = "portfolio" }: PortfolioRowsProps) {
  return (
    <section id={id} className="w-full">
      {Array.from({ length: Math.ceil(items.length / 2) }, (_, rowIdx) => {
        const pair = items.slice(rowIdx * 2, rowIdx * 2 + 2);
        return (
          <div key={rowIdx} className="flex w-full flex-col md:flex-row">
            {pair.map((item, i) => (
              <div
                key={`${rowIdx}-${i}`}
                className="group relative flex-1 cursor-pointer overflow-hidden"
              >
                <div
                  className="flex aspect-[4/3] w-full items-center justify-center font-display text-[2rem] font-light text-white/60 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  style={{ background: item.gradient }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] opacity-85 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)] transition-opacity duration-[400ms]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[120px] w-full bg-gradient-to-b from-transparent to-black/30 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="absolute bottom-10 left-10 z-[2] translate-y-[8px] font-display text-[1.5rem] font-normal text-white opacity-[0.92] transition-[transform,opacity] duration-[600ms] group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
