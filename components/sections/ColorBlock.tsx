import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";

type ColorBlockProps = {
  variant?: "purple" | "tan" | "deep";
  eyebrow: string;
  title: string;
  emphasis?: string;
  lead?: string;
  items?: string[];
  gradient?: string;
  reverse?: boolean;
};

const bgMap = {
  purple: "bg-[#7f00fd]",
  tan: "bg-accent",
  deep: "bg-[#1a0b3d]",
} as const;

export function ColorBlock({
  variant = "purple",
  eyebrow,
  title,
  emphasis,
  lead,
  items,
  gradient,
  reverse = false,
}: ColorBlockProps) {
  const text = (
    <div>
      <Reveal>
        <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[4px] text-white/85">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.15] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
          {title}
          {emphasis && (
            <>
              <br />
              <em>{emphasis}</em>
            </>
          )}
        </h2>
      </Reveal>
      {lead && (
        <Reveal>
          <p className="mt-[30px] mb-[30px] font-body text-base font-light leading-[1.9] text-white/85">
            {lead}
          </p>
        </Reveal>
      )}
      {items && items.length > 0 && (
        <Reveal>
          <ul className="flex flex-col gap-[14px]">
            {items.map((item) => (
              <li
                key={item}
                className="border-b border-white/15 pb-[14px] font-body text-[0.95rem] font-light text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );

  const visual = (
    <Reveal>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
        <Placeholder
          gradient={
            gradient ??
            "linear-gradient(135deg, #4a00a0 0%, #7f00fd 50%, #a64eff 100%)"
          }
        />
      </div>
    </Reveal>
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden text-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]",
        bgMap[variant],
      )}
    >
      <div className="relative z-[2] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[100px]">
        {reverse ? (
          <>
            {visual}
            {text}
          </>
        ) : (
          <>
            {text}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}
