import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  prose?: string[];
  variant?: "light" | "dark";
};

export function EditorialHero({
  eyebrow,
  title,
  emphasis,
  prose = [],
  variant = "light",
}: EditorialHeroProps) {
  const isDark = variant === "dark";
  return (
    <section
      data-theme={isDark ? "dark" : "light"}
      className={cn(
        "px-6 pt-[120px] pb-20 text-center md:pt-[160px] md:pb-[100px] lg:px-20 lg:pt-[200px] lg:pb-[140px]",
        isDark ? "bg-dark-bg-2 text-white" : "bg-white text-black",
      )}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center">
        <Reveal>
          <p
            className={cn(
              "mb-9 font-body text-[0.72rem] uppercase tracking-[4px]",
              isDark ? "text-white/60" : "text-gray",
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="mx-auto mb-12 max-w-[820px] font-display text-[clamp(2.4rem,5.2vw,4.8rem)] font-light leading-[1.08] tracking-[-1.2px] md:mb-16 [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && (
              <>
                <br />
                <em>{emphasis}</em>
              </>
            )}
          </h1>
        </Reveal>
        {prose.length > 0 && (
          <Reveal>
            <div
              className={cn(
                "grid max-w-[780px] grid-cols-1 gap-10 text-left md:grid-cols-2 md:gap-14",
                isDark ? "text-white/70" : "text-[#555]",
              )}
            >
              {prose.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[0.82rem] font-normal leading-[1.85]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
