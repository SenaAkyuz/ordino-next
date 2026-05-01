import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Partner = {
  name: string;
  logo: string;
};

type AnalyticsBlockProps = {
  title: string;
  emphasis?: string;
  description?: string;
  items: string[];
  partners?: Partner[];
  showPartners?: boolean;
};

const defaultPartners: Partner[] = [
  { name: "Google Partner", logo: "/partners/googlePartner.png" },
  { name: "Meta Business Partner", logo: "/partners/metaBusinessPartner.png" },
  { name: "Google Analytics Partner", logo: "/partners/googleAnalyticsPartner.png" },
  { name: "TikTok Marketing Partner", logo: "/partners/tiktokBusinessPartner.png" },
];

export function AnalyticsBlock({
  title,
  emphasis,
  description,
  items,
  partners = defaultPartners,
  showPartners = true,
}: AnalyticsBlockProps) {
  // Marquee icin 8x duplicate (mobilde dar viewport icin ekstra guvenlik)
  const marqueeItems = [
    ...partners, ...partners, ...partners, ...partners,
    ...partners, ...partners, ...partners, ...partners,
  ];

  return (
    <section
      data-theme="light"
      className="bg-white pt-[100px] pb-[60px] text-black md:pt-[140px] md:pb-[80px] lg:pt-[160px] lg:pb-[100px]"
    >
      {/* Ust kisim: Title + items grid */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10 lg:px-20">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light leading-[1.2] text-black [&_em]:block [&_em]:italic [&_em]:font-normal">
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
              <p className="mt-[30px] font-body text-base font-light leading-[1.8] text-[#555]">
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
                className="border-b border-black/10 pb-[18px] font-body text-base font-light text-[#555]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Alt kisim: Marquee logolari (beyaz arkaplanda) */}
      {showPartners && (
      <Reveal>
        <div className="mt-16 md:mt-24">
          <p className="mb-8 px-5 text-center font-body text-[0.72rem] uppercase tracking-[3px] text-black/50 md:px-10 lg:px-20">
            Resmi Reklam Ortaklıkları
          </p>
          <div className="marquee-pause relative w-full overflow-hidden py-6 md:py-12">
            {/* Sol/sag yatay fade-out (beyazdan saydama) — mobilde cok dar */}
            <div className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-[20px] bg-gradient-to-r from-white via-white/70 to-transparent md:w-[160px]" aria-hidden="true" />
            <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-[20px] bg-gradient-to-l from-white via-white/70 to-transparent md:w-[160px]" aria-hidden="true" />

            {/* Marquee track */}
            <div className="animate-marquee flex w-max items-center">
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-[70px] w-[150px] shrink-0 items-center justify-center px-2 md:h-[80px] md:w-auto md:px-20"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={80}
                    className="max-h-[55px] max-w-[130px] h-auto w-auto object-contain transition-transform duration-300 hover:scale-[1.05] md:max-h-[70px] md:max-w-[220px]"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      )}
    </section>
  );
}
