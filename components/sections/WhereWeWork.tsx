import { Reveal } from "@/components/ui/Reveal";

export type WhereCard = {
  title: string;
  text: string;
};

type WhereWeWorkProps = {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  titleTail?: string;
  cards: WhereCard[];
};

export function WhereWeWork({
  eyebrow = "Where we work",
  title,
  emphasis,
  titleTail,
  cards,
}: WhereWeWorkProps) {
  return (
    <section className="bg-dark-bg px-5 py-[80px] text-white md:px-10 md:pt-[120px] md:pb-[100px] lg:px-20 lg:pt-[140px] lg:pb-[120px]">
      <div className="mx-auto mb-12 grid max-w-[1300px] grid-cols-1 items-start gap-6 md:mb-20 md:grid-cols-[1fr_2.4fr] md:gap-[60px]">
        <Reveal>
          <p className="pt-[10px] font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/60">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal>
          <h1 className="max-w-[780px] font-display text-[clamp(1.8rem,3.2vw,3rem)] font-light leading-[1.25] tracking-[-0.3px] [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && <em>{emphasis}</em>}
            {titleTail}
          </h1>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-[50px] md:pl-[29%]">
        {cards.map((card) => (
          <Reveal key={card.title}>
            <h4 className="mb-[18px] font-body text-[0.85rem] font-medium tracking-[0.5px] text-white">
              {card.title}
            </h4>
            <p className="font-body text-[0.82rem] font-light leading-[1.8] text-white/65">
              {card.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
