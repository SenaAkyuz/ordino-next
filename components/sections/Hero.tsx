import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section
      id="home"
      data-theme="dark"
      className="relative flex h-screen min-h-[720px] items-center justify-center overflow-hidden bg-dark-bg-2 text-center text-white"
    >
      {/* Katman 0a: Gradient fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-breathe h-full w-full" />
      </div>

      {/* Katman 0b: HTML5 video background */}
      <video
        src="/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={`https://vumbnail.com/${site.heroVideoId}.jpg`}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Katman 1: Karartma overlay */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.65)_100%)]"
        aria-hidden="true"
      />

      {/* Katman 2: Icerik */}
      <div className="relative z-[2] px-6">
        <Reveal>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-1.5px] text-white [&_em]:font-normal [&_em]:italic">
            Strateji. <em>Yaratıcılık.</em> Büyüme.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-[30px] max-w-[640px] font-body text-[1.1rem] font-light leading-[1.6] tracking-[0.5px] text-white/75">
            AI destekli reklam zekası ile daha akıllı kampanyalar, hedefli iletişim ve ölçülebilir büyüme.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-[50px] flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/hizmetler"
              className="inline-block rounded-[10em] border border-white bg-white px-10 py-4 text-[0.95rem] text-dark-bg transition-[background,color] duration-[400ms] hover:bg-transparent hover:text-white"
            >
              Hizmetleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="inline-block rounded-[10em] border border-white px-10 py-4 text-[0.95rem] text-white transition-[background,color] duration-[400ms] hover:bg-white hover:text-dark-bg"
            >
              İletişime Geç
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Scroll indikatoru */}
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
