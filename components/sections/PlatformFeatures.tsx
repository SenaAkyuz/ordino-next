import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

const FEATURE_NUMS = ["01", "02", "03", "04", "05", "06"] as const;

type FeatureItem = { title: string; text: string };

export async function PlatformFeatures() {
  const t = await getTranslations("platform.features");

  return (
    <section
      id="features"
      data-theme="dark"
      className="border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-16 max-w-[900px] md:mb-20">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              {t("header.eyebrow")}
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.4rem)] font-light leading-[1.15] tracking-[-0.5px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              {t("header.title")}
              <br />
              <em>{t("header.emphasis")}</em> {t("header.tail")}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_NUMS.map((num, idx) => {
            const item = (t.raw as (key: string) => unknown)(
              `items.${num}`,
            ) as FeatureItem;
            const isItalic = idx % 2 === 1;

            return (
              <Reveal key={num}>
                <div className="group relative h-full border-b border-r border-white/[0.08] px-9 py-12 transition-colors duration-500 hover:bg-white/[0.02] md:px-11 md:py-14">
                  <p className="mb-[22px] font-display text-base font-normal tracking-[1px] text-accent">
                    {num}
                  </p>
                  <h4 className="mb-[18px] font-display text-[1.55rem] font-normal leading-[1.2] tracking-[-0.2px] text-white [&_em]:italic [&_em]:font-medium">
                    {isItalic ? <em>{item.title}</em> : item.title}
                  </h4>
                  <p className="font-body text-[0.9rem] font-light leading-[1.75] text-white/55">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
