import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      data-theme="dark"
      className="relative flex h-screen min-h-[720px] items-end justify-center overflow-hidden bg-black text-center text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero/hero-bg.webp"
          alt="Ordino — Strateji, Yaratıcılık, Büyüme"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-[2] mb-[2vh] px-6">
        <Reveal>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-1.5px] text-white [&_em]:font-normal [&_em]:italic">
            Strateji. <em>Yaratıcılık.</em> Büyüme.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-[30px] max-w-[640px] font-body text-[1.15rem] font-normal leading-[1.6] tracking-[0.5px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.55)]">
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

      <div className="absolute bottom-10 right-6 z-[2] flex flex-col items-center gap-[14px] text-[0.65rem] uppercase tracking-[3px] text-white/45 md:right-10">
        Scroll
        <span
          className="h-10 w-px bg-gradient-to-b from-transparent to-white/35"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
