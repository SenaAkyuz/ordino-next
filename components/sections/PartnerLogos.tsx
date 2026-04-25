import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Partner = {
  name: string;
  description: string;
  logo: string;
};

const defaultPartners: Partner[] = [
  {
    name: "Google Partner",
    description: "Resmi Reklam Partneri",
    logo: "/partners/googlePartner.png",
  },
  {
    name: "Meta Business Partner",
    description: "Resmi Business Partner",
    logo: "/partners/metaBusinessPartner.png",
  },
  {
    name: "TikTok Marketing Partner",
    description: "Resmi Marketing Partner",
    logo: "/partners/tiktokBusinessPartner.png",
  },
];

type PartnerLogosProps = {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  description?: string;
  partners?: Partner[];
};

export function PartnerLogos({
  eyebrow = "Resmi Reklam Ortaklıklarımız",
  title = "Sektörün lider platformlarıyla",
  emphasis = "doğrulanmış partnerlikler.",
  description = "Google, Meta ve TikTok'un resmi reklam programlarındaki partner statümüz, kampanyalarınızda en güncel araçlara, beta özelliklere ve uzman desteğe doğrudan erişim sağlar.",
  partners = defaultPartners,
}: PartnerLogosProps) {
  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-16 text-center md:mb-20">
            <p className="mb-6 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
              {eyebrow}
            </p>
            <h2 className="mb-6 mx-auto max-w-[800px] font-display text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.2] [&_em]:italic [&_em]:font-normal">
              {title}
              <br />
              <em>{emphasis}</em>
            </h2>
            <p className="mx-auto max-w-[600px] font-body text-base font-light leading-[1.7] text-[#555]">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {partners.map((partner) => (
            <Reveal key={partner.name}>
              <div className="flex h-[220px] flex-col items-center justify-center gap-4 rounded-[8px] border border-[#e0e0e0] bg-white p-8 transition-[border-color,transform] duration-300 hover:border-accent hover:scale-[1.02]">
                <div className="relative h-[80px] w-[200px]">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <p className="text-center font-body text-[0.78rem] uppercase tracking-[1.5px] text-gray">
                  {partner.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
