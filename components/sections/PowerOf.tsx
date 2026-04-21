import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";

type PowerOfProps = {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  sub?: string;
  brand?: string;
  gradient?: string;
};

export function PowerOf({
  eyebrow = "The Power of AI",
  title = "Performance Marketing",
  emphasis = "Worthy of Your Brand.",
  sub = "Where the world's ambitious brands come for measurable growth.",
  brand = "ORDINO",
  gradient = "radial-gradient(circle at 30% 40%, rgba(178,143,108,0.2), transparent 55%), linear-gradient(135deg, #1a0a1a 0%, #3d0c2e 30%, #6b1d4e 70%, #c03070 100%)",
}: PowerOfProps) {
  return (
    <section className="overflow-hidden bg-dark-bg px-6 pt-[100px] text-center text-white md:px-10 md:pt-[140px]">
      <Reveal>
        <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[4px] text-white/75">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="mx-auto mb-5 max-w-[900px] font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.15] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
          {title}
          <br />
          <em>{emphasis}</em>
        </h2>
      </Reveal>
      <Reveal>
        <p className="mx-auto mb-[100px] max-w-[560px] font-body text-[1.05rem] font-light text-white/70">
          {sub}
        </p>
      </Reveal>
      <Reveal>
        <h3 className="mb-10 font-body text-[clamp(4rem,14vw,12rem)] font-medium leading-none tracking-[-2px] text-white opacity-95">
          {brand}
        </h3>
      </Reveal>
      <Reveal className="mx-auto block max-w-[1400px]">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Placeholder gradient={gradient} />
        </div>
      </Reveal>
    </section>
  );
}
