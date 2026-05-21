import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

type Stat = { value: string; label: string };

type HowWeWorkProps = {
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  stats: Stat[];
  id?: string;
};

export function HowWeWork({
  eyebrow,
  title,
  emphasis,
  description,
  stats,
  id = "about",
}: HowWeWorkProps) {
  return (
    <section
      id={id}
      data-theme="dark"
      className="bg-dark-bg text-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-[100px]">
        <Reveal>
          <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[4px] text-white/60">
            {eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.2] tracking-[-1px]">
            {title}
            <br />
            <em className="block italic font-light">{emphasis}</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="font-body text-base font-light leading-[1.8] text-gray">
            {description}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-2 gap-8 border-t border-white/10 pt-[60px] md:mt-[80px] md:grid-cols-4 md:gap-10">
        {stats.map((stat) => {
          const hasNumber = /\d/.test(stat.value) && !stat.value.includes(" · ");
          return (
            <Reveal key={stat.label} className="text-center">
              {hasNumber ? (
                <AnimatedNumber
                  target={stat.value}
                  className="mb-[10px] block font-display text-[2.2rem] md:text-[3rem] font-light"
                />
              ) : (
                <span className="mb-[10px] block font-display text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-light leading-[1.2]">
                  {stat.value}
                </span>
              )}
              <p className="font-body text-[0.8rem] uppercase tracking-[2px] text-gray">
                {stat.label}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
