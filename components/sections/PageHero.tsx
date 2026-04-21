import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  label: string;
  title: string;
  emphasis?: string;
  sub?: string;
};

export function PageHero({ label, title, emphasis, sub }: PageHeroProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-5 pt-[140px] pb-20 text-center md:min-h-[70vh] md:px-10 md:pt-[160px] md:pb-[80px] lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[3px] text-gray">
            {label}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="mx-auto max-w-[900px] font-display text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-[1.15] tracking-[-1px] [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && (
              <>
                <br />
                <em>{emphasis}</em>
              </>
            )}
          </h1>
        </Reveal>
        {sub && (
          <Reveal>
            <p className="mx-auto mt-8 max-w-[600px] font-body text-[1.05rem] font-light leading-[1.7] text-gray">
              {sub}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
