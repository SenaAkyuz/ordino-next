import Link from "next/link";
import { latestWorks } from "@/lib/data/latestWorks";

export function LatestWorks() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
        {latestWorks.map((item) => (
          <Link
            key={item.slug}
            href={`/work#${item.slug}`}
            className="group relative block aspect-square overflow-hidden"
          >
            <div
              className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
              style={{ background: item.gradient }}
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)] opacity-[0.85]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[120px] w-full bg-gradient-to-b from-transparent to-black/30 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
              aria-hidden="true"
            />

            <span className="absolute bottom-10 left-10 z-[2] translate-y-[8px] font-display text-[1.5rem] font-normal text-white opacity-[0.92] transition-[transform,opacity] duration-[600ms] group-hover:translate-y-0 group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
