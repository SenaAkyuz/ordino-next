import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Partner = {
  name: string;
  logo: string;
};

type PartnerMarqueeProps = {
  eyebrow?: string;
  partners?: Partner[];
};

const defaultPartners: Partner[] = [
  { name: "Google Partner", logo: "/partners/googlePartner.png" },
  { name: "Meta Business Partner", logo: "/partners/metaBusinessPartner.png" },
  { name: "Google Analytics Partner", logo: "/partners/googleAnalyticsPartner.png" },
  { name: "TikTok Marketing Partner", logo: "/partners/tiktokBusinessPartner.png" },
];

export function PartnerMarquee({
  eyebrow = "Resmi Reklam Ortaklıkları",
  partners = defaultPartners,
}: PartnerMarqueeProps) {
  // Marquee icin 8x duplicate (mobilde dar viewport icin ekstra guvenlik)
  const marqueeItems = [
    ...partners, ...partners, ...partners, ...partners,
    ...partners, ...partners, ...partners, ...partners,
  ];

  return (
    <section
      data-theme="light"
      className="bg-white pt-[80px] pb-[20px] md:pt-[100px] md:pb-[30px]"
    >
      <Reveal>
        <p className="mb-8 px-5 text-center font-body text-[0.72rem] uppercase tracking-[3px] text-black/50 md:px-10 lg:px-20">
          {eyebrow}
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
      </Reveal>
    </section>
  );
}
