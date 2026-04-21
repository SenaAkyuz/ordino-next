import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      data-theme="dark"
      className="relative flex h-screen min-h-[720px] items-center justify-center overflow-hidden bg-dark-bg-2 text-center text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-breathe h-full w-full" />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-[2] px-6">
        <Reveal>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-1.5px] text-white [&_em]:font-normal [&_em]:italic">
            We elevate <em>ads.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-[30px] max-w-[640px] font-body text-[1.1rem] font-light leading-[1.6] tracking-[0.5px] text-white/75">
            AI-powered ad intelligence for smarter campaigns, sharper targeting,
            and measurable growth.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/contact"
            className="mt-[50px] inline-block rounded-[10em] border border-white px-12 py-4 text-[0.95rem] text-white transition-[background,color] duration-[400ms] hover:bg-white hover:text-dark-bg"
          >
            Schedule A Meeting
          </Link>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-[14px] text-[0.7rem] uppercase tracking-[3px] text-white/60">
        Scroll
        <span
          className="h-10 w-px bg-gradient-to-b from-transparent to-white/50"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
