import { Reveal } from "@/components/ui/Reveal";

type PushForwardProps = {
  title?: string;
  emphasis?: string;
  text?: string;
};

export function PushForward({
  title = "We push performance",
  emphasis = "forward.",
  text = "At Ordino, we believe that every ad dollar should work harder. Our AI-powered platform goes beyond basic optimization — we understand the nuances of search intent, user behavior, and campaign dynamics. By combining cutting-edge machine learning with deep marketing expertise, we help brands maximize their ROAS while minimizing wasted spend.",
}: PushForwardProps) {
  return (
    <section className="mx-auto max-w-[1200px] bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light leading-[1.2] [&_em]:italic [&_em]:font-normal">
            {title}
            <br />
            <em>{emphasis}</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="font-body text-base font-light leading-[1.9] text-[#555]">
            {text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
