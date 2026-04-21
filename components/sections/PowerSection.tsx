import { Reveal } from "@/components/ui/Reveal";

type PowerSectionProps = {
  label: string;
  title: string;
  emphasis?: string;
};

export function PowerSection({ label, title, emphasis }: PowerSectionProps) {
  return (
    <section
      data-theme="light"
      className="bg-accent px-5 py-[100px] text-center text-white md:px-10 md:py-[140px] lg:py-[160px]"
    >
      <Reveal>
        <p className="mb-[30px] font-body text-[0.75rem] uppercase tracking-[3px] opacity-80">
          {label}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="mx-auto max-w-[800px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.15] [&_em]:italic [&_em]:font-normal">
          {title}
          {emphasis && (
            <>
              <br />
              <em>{emphasis}</em>
            </>
          )}
        </h2>
      </Reveal>
    </section>
  );
}
