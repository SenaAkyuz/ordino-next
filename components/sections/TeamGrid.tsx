import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/lib/data/team";

type TeamGridProps = {
  eyebrow?: string;
  lead: string;
  leadEm?: string;
  members: TeamMember[];
};

export async function TeamGrid({
  eyebrow = "The A-Team",
  lead,
  leadEm,
  members,
}: TeamGridProps) {
  const t = await getTranslations("team");

  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto mb-16 grid max-w-[1200px] grid-cols-1 gap-10 md:mb-20 md:grid-cols-[200px_1fr] md:gap-[60px]">
          <Reveal>
            <p className="pt-[6px] font-body text-[0.72rem] uppercase tracking-[4px] text-gray">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal>
            <p className="max-w-[640px] font-body text-[clamp(1.05rem,1.4vw,1.25rem)] font-light leading-[1.55] text-black [&_em]:font-display [&_em]:italic [&_em]:font-normal">
              {lead}
              {leadEm && <em>{leadEm}</em>}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-[30px] md:gap-y-10">
          {members.map((member) => (
            <Reveal key={member.name}>
              <div className="group text-left">
                <div className="mb-5 aspect-[3/4] w-full overflow-hidden bg-light-bg">
                  <div
                    className="flex h-full w-full items-center justify-center font-display text-[3rem] transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    style={{
                      background: member.gradient,
                      color: member.placeholderTextColor ?? "rgba(255,255,255,0.8)",
                    }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                </div>
                <h4 className="mb-1 font-body text-base font-medium text-black">
                  {member.name}
                </h4>
                <p className="font-body text-[0.85rem] font-light tracking-[0.5px] text-gray">
                  {t(`roles.${member.roleKey}`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
