import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { ServiceDetail as ServiceDetailData } from "@/lib/data/services";

type ServiceDetailProps = ServiceDetailData & {
  alt?: boolean;
};

export function ServiceDetail({
  num,
  slug,
  title,
  titleHead,
  titleEm,
  lead,
  items,
  alt = false,
}: ServiceDetailProps) {
  return (
    <section
      id={slug}
      className={cn(
        "px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]",
        alt ? "bg-light-bg" : "bg-white",
      )}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.2fr] md:gap-[100px]">
        <Reveal>
          <p className="mb-5 font-display text-base uppercase tracking-[3px] text-accent">
            {num}
          </p>
          <h2 className="mb-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] [&_em]:italic [&_em]:font-normal">
            {title}
            <br />
            {titleHead}
            <em>{titleEm}</em>
          </h2>
        </Reveal>
        <div>
          <Reveal>
            <p className="mb-[30px] font-body text-base font-light leading-[1.9] text-[#555]">
              {lead}
            </p>
          </Reveal>
          <Reveal>
            <ul className="grid list-none grid-cols-1 gap-x-[30px] gap-y-[14px] sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 font-body text-[0.9rem] font-light text-[#444] before:absolute before:left-0 before:top-[10px] before:h-px before:w-2 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
