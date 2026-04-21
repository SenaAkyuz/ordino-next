import { Reveal } from "@/components/ui/Reveal";

type WhatWeDoProps = {
  eyebrow?: string;
  title: string;
};

export function WhatWeDo({ eyebrow = "What We Do", title }: WhatWeDoProps) {
  return (
    <section className="bg-dark-bg px-5 py-[80px] text-white md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2.4fr] md:gap-[60px]">
        <Reveal>
          <p className="pt-3 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/60">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal>
          <h1
            className="font-display text-[clamp(2rem,3.8vw,3.6rem)] font-light leading-[1.15] tracking-[-0.5px] text-white [&_em]:italic [&_em]:font-normal"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Reveal>
      </div>
    </section>
  );
}
