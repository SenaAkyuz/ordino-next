import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export type DualGridCell = {
  eyebrow: string;
  title: string;
  gradient?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

type DualGridProps = {
  cells: [DualGridCell, DualGridCell];
};

function Cell({ cell }: { cell: DualGridCell }) {
  const content = (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {cell.imageSrc ? (
          <Image
            src={cell.imageSrc}
            alt={cell.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
            style={{
              background:
                cell.gradient ??
                "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-90 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden="true"
      />

      <Reveal className="absolute bottom-10 left-10 z-[2] flex flex-col gap-[6px] text-white">
        <span className="font-body text-[0.7rem] uppercase tracking-[2.5px] text-white/70">
          {cell.eyebrow}
        </span>
        <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] font-normal">
          {cell.title}
        </h3>
      </Reveal>
    </>
  );

  const className =
    "group relative block aspect-[4/5] md:aspect-square w-full overflow-hidden text-white";

  if (cell.href) {
    return (
      <Link href={cell.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export function DualGrid({ cells }: DualGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Cell cell={cells[0]} />
      <Cell cell={cells[1]} />
    </section>
  );
}
