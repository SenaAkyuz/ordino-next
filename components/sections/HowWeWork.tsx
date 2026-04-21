import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

type Stat = { value: string; label: string };

const defaultStats: Stat[] = [
  { value: "5+ Years", label: "Experience" },
  { value: "50% Analytical", label: "Data-Driven" },
  { value: "50% AI", label: "Machine Learning" },
  { value: "100% Results", label: "Exceptional" },
];

type HowWeWorkProps = {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  description?: string;
  stats?: Stat[];
  id?: string;
};

export function HowWeWork({
  eyebrow = "How We Work",
  title = "Creative +",
  emphasis = "Analytical",
  description = "Data-driven creatives delivering exceptional ad optimization, memorable campaign strategies, and measurable growth. We combine AI intelligence with marketing expertise to craft campaigns that drive awareness, engagement, and conversion.",
  stats = defaultStats,
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
        {stats.map((stat) => (
          <Reveal key={stat.label} className="text-center">
            <AnimatedNumber
              target={stat.value}
              className="mb-[10px] block font-display text-[2.2rem] md:text-[3rem] font-light"
            />
            <p className="font-body text-[0.8rem] uppercase tracking-[2px] text-gray">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
