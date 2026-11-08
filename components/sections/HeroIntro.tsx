import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";

export async function HeroIntro() {
  const t = await getTranslations("home.hero");

  return (
    <section
      id="home"
      data-theme="light"
      className="relative overflow-hidden bg-[#f0efed] px-6 py-[88px] text-center text-dark-bg md:px-10 md:py-[140px]"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 45%, rgba(178,143,108,0.22), transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(74,107,142,0.10), transparent 60%), linear-gradient(135deg, #f8f7f5 0%, #efeeec 45%, #e3e1de 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto flex max-w-[860px] flex-col items-center">
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.06] tracking-[-1.5px] text-dark-bg [&_em]:font-normal [&_em]:italic">
          {t("headline.lead")} <em>{t("headline.highlight")}</em>{" "}
          {t("headline.tail")}
        </h1>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-[560px] font-body text-[0.98rem] font-light leading-[1.65] tracking-[0.3px] text-dark-bg/70 md:text-[1.05rem]">
            {t("subhead")}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row md:gap-4">
            <Link
              href="/hizmetler"
              className="inline-block w-full max-w-[300px] rounded-[10em] border border-dark-bg bg-dark-bg px-9 py-[14px] text-center text-[0.92rem] text-white transition-[background,color] duration-[400ms] hover:bg-transparent hover:text-dark-bg sm:w-auto"
            >
              {t("cta1")}
            </Link>
            <Link
              href="/iletisim"
              className="inline-block w-full max-w-[300px] rounded-[10em] border border-dark-bg px-9 py-[14px] text-center text-[0.92rem] text-dark-bg transition-[background,color] duration-[400ms] hover:bg-dark-bg hover:text-white sm:w-auto"
            >
              {t("cta2")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
