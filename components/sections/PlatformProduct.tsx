import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

export async function PlatformProduct() {
  const t = await getTranslations("platform.product");

  return (
    <section
      id="product"
      data-theme="dark"
      className="border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2.4fr] md:gap-[60px]">
        <Reveal>
          <p className="pt-[10px] font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
            {t("eyebrow")}
          </p>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="mb-[30px] font-display text-[clamp(2rem,3.8vw,3.4rem)] font-light leading-[1.15] tracking-[-0.5px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              {t("title")} <em>{t("emphasis")}</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[720px] font-body text-base font-light leading-[1.75] text-white/65">
              {t("description")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
