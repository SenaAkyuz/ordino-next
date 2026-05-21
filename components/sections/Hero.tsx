import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";

export async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section
      id="home"
      data-theme="light"
      className="relative overflow-hidden bg-[#f0efed] text-dark-bg"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 45%, rgba(178,143,108,0.22), transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(74,107,142,0.10), transparent 60%), linear-gradient(135deg, #f8f7f5 0%, #efeeec 45%, #e3e1de 100%)",
        }}
        aria-hidden="true"
      />

      {/* MOBİL */}
      <div className="relative z-[2] flex min-h-screen w-full flex-col items-center justify-center gap-9 px-6 pt-[120px] pb-16 text-center md:hidden">
        <Reveal>
          <h1 className="font-display text-[clamp(2.4rem,9vw,3.6rem)] font-light leading-[1.08] tracking-[-1px] text-dark-bg [&_em]:font-normal [&_em]:italic">
            {t("headline.lead")} <em>{t("headline.highlight")}</em>{" "}
            {t("headline.tail")}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto max-w-[420px] font-body text-[0.95rem] leading-[1.6] tracking-[0.3px] text-dark-bg/70">
            {t("subhead")}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <PhoneMockup className="w-[260px]" />
        </Reveal>

        <Reveal delay={0.35}>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Link
              href="/hizmetler"
              className="inline-block w-full max-w-[300px] rounded-[10em] border border-dark-bg bg-dark-bg px-7 py-3 text-center text-[0.92rem] text-white"
            >
              {t("cta1")}
            </Link>
            <Link
              href="/iletisim"
              className="inline-block w-full max-w-[300px] rounded-[10em] border border-dark-bg px-7 py-3 text-center text-[0.92rem] text-dark-bg"
            >
              {t("cta2")}
            </Link>
          </div>
        </Reveal>
      </div>

      {/* DESKTOP + Tablet */}
      <div className="relative z-[2] mx-auto hidden min-h-screen w-full max-w-[1400px] items-center justify-between gap-10 px-10 pt-[120px] pb-16 md:flex lg:px-20">
        <div className="flex max-w-[640px] flex-1 flex-col items-start text-left">
          <Reveal>
            <h1 className="font-display text-[clamp(2.8rem,5.6vw,5.4rem)] font-light leading-[1.04] tracking-[-1.5px] text-dark-bg [&_em]:font-normal [&_em]:italic">
              {t("headline.lead")} <em>{t("headline.highlight")}</em>{" "}
              {t("headline.tail")}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[560px] font-body text-[1.05rem] font-light leading-[1.65] tracking-[0.3px] text-dark-bg/70">
              {t("subhead")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <Link
                href="/hizmetler"
                className="inline-block rounded-[10em] border border-dark-bg bg-dark-bg px-9 py-[14px] text-[0.92rem] text-white transition-[background,color] duration-[400ms] hover:bg-transparent hover:text-dark-bg"
              >
                {t("cta1")}
              </Link>
              <Link
                href="/iletisim"
                className="inline-block rounded-[10em] border border-dark-bg px-9 py-[14px] text-[0.92rem] text-dark-bg transition-[background,color] duration-[400ms] hover:bg-dark-bg hover:text-white"
              >
                {t("cta2")}
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-1 items-center justify-end">
            <PhoneMockup className="w-[340px] lg:w-[400px]" />
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-10 right-4 z-[3] hidden flex-col items-center gap-[14px] text-[0.65rem] uppercase tracking-[3px] text-dark-bg/45 md:flex lg:right-6">
        {t("scrollLabel")}
        <span
          className="h-10 w-px bg-gradient-to-b from-transparent to-dark-bg/35"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19.5] rounded-[44px] bg-black shadow-[0_40px_70px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10 ${className}`}
    >
      <div className="absolute inset-[10px] overflow-hidden rounded-[36px] bg-black">
        <video
          src="/hero/phone.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-2 z-[2] h-[22px] w-[110px] -translate-x-1/2 rounded-full bg-black"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
