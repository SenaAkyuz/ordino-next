import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

const CARD_KEYS = ["global", "becomeClient", "joinTeam"] as const;

type WhereCard = { title: string; text: string };

export async function WhereWeWork() {
  const t = await getTranslations("contact.whereWeWork");

  return (
    <section
      data-theme="dark"
      className="bg-dark-bg px-5 py-[80px] text-white md:px-10 md:pt-[120px] md:pb-[100px] lg:px-20 lg:pt-[140px] lg:pb-[120px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <h1 className="mb-12 max-w-[960px] font-display text-[clamp(1.8rem,3.2vw,3rem)] font-light leading-[1.25] tracking-[-0.3px] [&_em]:italic [&_em]:font-normal md:mb-20">
            {t("titleLead")} <em>{t("titleHighlight")}</em>{" "}
            {t("titleTail")}
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-[60px] md:pt-14">
          {CARD_KEYS.map((key) => {
            const card = (t.raw as (k: string) => unknown)(
              `cards.${key}`,
            ) as WhereCard;
            return (
              <Reveal key={key}>
                <h4 className="mb-[18px] font-body text-[0.85rem] font-medium tracking-[0.5px] text-white">
                  {card.title}
                </h4>
                <p className="font-body text-[0.82rem] font-light leading-[1.8] text-white/65">
                  {card.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
