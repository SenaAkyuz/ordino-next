import { Reveal } from "@/components/ui/Reveal";

export type ServiceBlock = {
  title: string;
  items: string[];
};

const defaultServices: ServiceBlock[] = [
  {
    title: "Strategy",
    items: [
      "Campaign Strategy",
      "Keyword Research",
      "Audience Targeting",
      "Competitive Analysis",
      "Budget Planning",
    ],
  },
  {
    title: "Optimization",
    items: [
      "AI-Powered Analysis",
      "Negative Keywords",
      "Bid Management",
      "Quality Score",
      "A/B Testing",
    ],
  },
  {
    title: "Content",
    items: [
      "Ad Copy Writing",
      "Landing Page Design",
      "Creative Strategy",
      "Video Ads",
      "Display Ads",
    ],
  },
  {
    title: "Analytics",
    items: [
      "Performance Dashboards",
      "Conversion Tracking",
      "Attribution Modeling",
      "ROI Analysis",
      "Custom Reports",
    ],
  },
  {
    title: "Growth",
    items: [
      "Scaling Strategies",
      "New Market Entry",
      "Channel Expansion",
      "Automation Setup",
      "Performance Marketing",
    ],
  },
  {
    title: "Platforms",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Programmatic",
    ],
  },
];

type ServicesGridProps = {
  title?: string;
  emphasis?: string;
  services?: ServiceBlock[];
  id?: string;
};

export function ServicesGrid({
  title = "Our ",
  emphasis = "Services",
  services = defaultServices,
  id = "services",
}: ServicesGridProps) {
  return (
    <section
      id={id}
      className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-[60px] text-center font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light md:mb-20 [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && <em>{emphasis}</em>}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-[60px] lg:grid-cols-3">
          {services.map((block) => (
            <Reveal key={block.title}>
              <h3 className="mb-5 border-b border-[#e0e0e0] pb-5 font-display text-[1.6rem] font-normal">
                {block.title}
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[0.9rem] font-light text-[#666]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
