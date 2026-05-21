import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

type GroupRaw = { value: string; label: string };

export async function TeamStructure() {
  const t = await getTranslations("team.structure");
  const groups = t.raw("groups") as GroupRaw[];

  const totalMembers = groups.reduce(
    (sum, g) => sum + (parseInt(g.value, 10) || 0),
    0,
  );

  return (
    <section
      data-theme="dark"
      className="bg-dark-bg px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[4px] text-white/60">
              {t("section.eyebrow")}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.6rem)] font-light leading-[1.2] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
              {t("section.title")}
              <br />
              <em>{t("section.emphasis")}</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="font-body text-base font-light leading-[1.8] text-gray">
              {t("section.description")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-[60px] md:grid-cols-4 md:gap-10">
          {groups.map((group) => (
            <Reveal key={group.label} className="text-center">
              <AnimatedNumber
                target={group.value}
                className="mb-[10px] block font-display text-[2.5rem] font-light md:text-[3.5rem]"
              />
              <p className="font-body text-[0.8rem] uppercase tracking-[2px] text-gray">
                {group.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="font-body text-[0.8rem] uppercase tracking-[3px] text-white/60">
            {t("section.footer", { n: totalMembers })}
          </p>
        </div>
      </div>
    </section>
  );
}
