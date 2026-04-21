import { Reveal } from "@/components/ui/Reveal";

type AnalyticsBlockProps = {
  title: string;
  emphasis?: string;
  description?: string;
  items: string[];
};

export function AnalyticsBlock({
  title,
  emphasis,
  description,
  items,
}: AnalyticsBlockProps) {
  return (
    <section className="bg-dark-bg px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light leading-[1.2] [&_em]:block [&_em]:italic [&_em]:font-normal">
              {title}
              {emphasis && (
                <>
                  <br />
                  <em>{emphasis}</em>
                </>
              )}
            </h2>
          </Reveal>
          {description && (
            <Reveal>
              <p className="mt-[30px] font-body text-base font-light leading-[1.8] text-gray">
                {description}
              </p>
            </Reveal>
          )}
        </div>
        <Reveal>
          <ul className="flex list-none flex-col gap-[18px]">
            {items.map((item) => (
              <li
                key={item}
                className="border-b border-white/10 pb-[18px] font-body text-base font-light text-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
