import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type WorkHeroProps = {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  sub?: string;
  scrollTo?: string;
};

export function WorkHero({
  eyebrow,
  title,
  emphasis,
  sub,
  scrollTo,
}: WorkHeroProps) {
  return (
    <section
      id="top"
      data-theme="light"
      className="relative flex min-h-[70vh] items-center justify-center bg-white px-6 pt-[120px] pb-10 md:min-h-[90vh] md:px-10 md:pt-[180px] md:pb-[60px] lg:px-20"
    >
      <div className="relative mx-auto max-w-[1400px] text-center">
        {eyebrow && (
          <Reveal>
            <p className="mb-[30px] font-body text-[0.75rem] uppercase tracking-[4px] text-gray">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal>
          <h1 className="mx-auto mb-14 max-w-[1200px] font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.08] tracking-[-1.5px] text-black md:mb-20 [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && <em>{emphasis}</em>}
          </h1>
        </Reveal>
        {sub && (
          <Reveal>
            <p className="mx-auto mb-14 max-w-[680px] font-display text-[clamp(1.1rem,1.8vw,1.5rem)] font-light italic text-gray md:mb-20">
              {sub}
            </p>
          </Reveal>
        )}
        {scrollTo && (
          <Reveal>
            <Link
              href={scrollTo}
              aria-label="Scroll to work"
              className="mt-5 inline-block px-4 py-[10px] text-[1.5rem] text-gray opacity-60 transition-[color,opacity] duration-300 hover:text-black hover:opacity-100 motion-safe:animate-[bounceArrow_2.4s_ease-in-out_infinite]"
            >
              ↓
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
