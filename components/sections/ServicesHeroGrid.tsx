import { Reveal } from "@/components/ui/Reveal";
import type { ServiceCard } from "@/lib/data/services";

type ServicesHeroGridProps = {
  cards: ServiceCard[];
};

export function ServicesHeroGrid({ cards }: ServicesHeroGridProps) {
  return (
    <section data-theme="light" className="bg-white">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 border-l border-t border-[#eaeaea] px-6 py-20 md:grid-cols-2 md:px-10 md:pb-[120px] md:pt-20 lg:grid-cols-3 lg:px-20">
        {cards.map((card) => (
          <Reveal key={card.slug}>
            <a
              href={`#${card.slug}`}
              className="group relative block h-full border-b border-r border-[#eaeaea] p-9 transition-colors duration-500 hover:bg-light-bg"
            >
              <p className="mb-5 font-display text-[0.85rem] uppercase tracking-[2px] text-accent">
                {card.num}
              </p>
              <h4 className="mb-4 font-display text-[1.6rem] font-normal leading-[1.2] tracking-[-0.3px] [&_em]:italic [&_em]:font-normal">
                {card.title}
                {card.titleEm && <em>{card.titleEm}</em>}
              </h4>
              <p className="font-body text-[0.9rem] font-light leading-[1.7] text-[#666]">
                {card.description}
              </p>
              <span className="absolute right-9 top-9 -translate-x-[6px] text-[1.2rem] text-accent opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
