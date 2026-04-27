import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/data/caseStudies";

type CaseBlockProps = {
  data: CaseStudy;
  alt?: boolean;
};

const tagColors = {
  t1: "bg-[#1a1a2e]",
  t2: "bg-accent",
  t3: "bg-[#2a7a5a]",
  t4: "bg-[#4a2080]",
  t5: "bg-[#8b0000]",
} as const;

export function CaseBlock({ data, alt = false }: CaseBlockProps) {
  const stripeBg = alt ? "bg-light-bg" : "bg-white";

  return (
    <article id={data.slug} className="group relative scroll-mt-24">
      <section
        data-theme="light"
        className={cn(
          "px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:pb-[100px] lg:pt-[140px]",
          stripeBg,
        )}
      >
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="mb-[18px] font-display text-base uppercase tracking-[3px] text-accent">
                {data.num}
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-[8px] font-body text-base font-medium uppercase tracking-[6px] text-black">
                {data.brand}
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-[30px] font-body text-[0.75rem] uppercase tracking-[2px] text-gray">
                {data.sector}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="mb-[30px] font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.2] tracking-[-1px] [&_em]:italic [&_em]:font-normal">
                {data.title}
                <em>{data.titleEm}</em>
                {data.titleTail}
                {data.titleEm2 && <em>{data.titleEm2}</em>}
              </h2>
            </Reveal>
            <Reveal>
              <p className="mb-[30px] font-body text-base font-light leading-[1.8] text-[#555]">
                {data.lead}
              </p>
            </Reveal>
            <Reveal>
              <div className="mb-[30px] flex flex-wrap gap-[10px]">
                {data.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={cn(
                      "rounded-[10em] px-4 py-[6px] font-body text-[0.7rem] font-medium uppercase tracking-[1.5px] text-white",
                      tagColors[tag.variant],
                    )}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden">
              {data.image ? (
                <Image
                  src={data.image}
                  alt={`${data.brand} case study`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  priority={false}
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center font-display text-[2rem] font-light text-white/70 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  style={{ background: data.gradient }}
                  aria-hidden="true"
                >
                  {data.brand}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        data-theme="dark"
        className="bg-dark-bg px-5 py-20 text-white md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
          {data.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              className={cn(
                "px-5 text-center",
                i < data.stats.length - 1 && "md:border-r md:border-white/10",
              )}
            >
              <h3 className="mb-[14px] font-display text-[clamp(2.8rem,5vw,4.5rem)] font-normal leading-none text-accent">
                {stat.value}
              </h3>
              <p className="font-body text-[0.85rem] uppercase tracking-[1.5px] leading-[1.5] text-white/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id={`${data.slug}-detail`}
        data-theme="light"
        className={cn(
          "px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20 lg:py-[120px]",
          stripeBg,
        )}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-[100px]">
          <Reveal>
            <h4 className="mb-5 font-body text-[0.75rem] font-medium uppercase tracking-[3px] text-accent">
              Zorluk
            </h4>
            <h3 className="mb-6 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] font-light leading-[1.3] [&_em]:italic [&_em]:font-normal">
              {data.challenge.head}
              <em>{data.challenge.headEm}</em>
            </h3>
            {data.challenge.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-[18px] font-body text-base font-light leading-[1.9] text-[#555]"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal>
            <h4 className="mb-5 font-body text-[0.75rem] font-medium uppercase tracking-[3px] text-accent">
              Çözüm
            </h4>
            <h3 className="mb-6 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] font-light leading-[1.3] [&_em]:italic [&_em]:font-normal">
              {data.solution.head}
              <em>{data.solution.headEm}</em>
            </h3>
            {data.solution.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-[18px] font-body text-base font-light leading-[1.9] text-[#555]"
              >
                {p}
              </p>
            ))}
            <ul className="mt-6 flex list-none flex-col gap-[14px]">
              {data.solution.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-[22px] font-body text-[0.95rem] font-light leading-[1.6] text-[#444] before:absolute before:left-0 before:top-3 before:h-px before:w-[10px] before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        data-theme="dark"
        className="bg-accent px-5 py-[80px] text-center text-white md:px-10 md:py-[120px] lg:px-20"
      >
        <Reveal>
          <div className="mx-auto max-w-[900px]">
            <blockquote className="mb-10 font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-light italic leading-[1.4] tracking-[-0.5px] before:content-['“'] after:content-['”']">
              {data.quote.text}
            </blockquote>
            <cite className="block font-body text-[0.85rem] uppercase tracking-[2px] not-italic opacity-90">
              {data.quote.author}
              <span className="mt-[6px] block text-[0.75rem] normal-case tracking-[1.5px] opacity-75">
                {data.quote.role}
              </span>
            </cite>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
