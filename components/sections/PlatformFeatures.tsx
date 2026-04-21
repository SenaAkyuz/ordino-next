import { Reveal } from "@/components/ui/Reveal";

type Feature = {
  num: string;
  title: string;
  titleEm?: string;
  text: string;
};

const features: Feature[] = [
  {
    num: "01",
    title: "Unified Campaigns",
    text: "Launch a campaign once, deploy it across every channel. Creative variants, audiences, and budgets — synced automatically, no tab-hopping.",
  },
  {
    num: "02",
    title: "",
    titleEm: "AI Optimization",
    text: "Our engine reads performance every fifteen minutes and shifts budget, pauses losers, and scales winners — transparently, with every decision logged.",
  },
  {
    num: "03",
    title: "Negative Keywords",
    text: "AI search-term analysis eliminates wasted spend on Google in minutes, not hours. The average Ordino account clears 23% of wasted spend in week one.",
  },
  {
    num: "04",
    title: "",
    titleEm: "Creative Intelligence",
    text: "Upload ad variants, the engine tests them in disciplined reads, and surfaces the patterns that are actually moving your numbers — not just CTR.",
  },
  {
    num: "05",
    title: "Blended Reporting",
    text: "ROAS, CAC, payback window, contribution margin — in a single dashboard that ties ad spend to pipeline and revenue, not vanity impressions.",
  },
  {
    num: "06",
    title: "",
    titleEm: "Team Workflows",
    text: "Approvals, annotations, handoffs. Built for agencies and in-house teams who need to run twenty accounts without drowning in spreadsheets.",
  },
];

export function PlatformFeatures() {
  return (
    <section
      id="features"
      className="border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-16 max-w-[900px] md:mb-20">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              Features
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.4rem)] font-light leading-[1.15] tracking-[-0.5px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              Built for teams that treat paid
              <br />
              as a <em>core product surface.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Reveal key={f.num}>
              <div className="group relative h-full border-b border-r border-white/[0.08] px-9 py-12 transition-colors duration-500 hover:bg-white/[0.02] md:px-11 md:py-14">
                <p className="mb-[22px] font-display text-base font-normal tracking-[1px] text-accent">
                  {f.num}
                </p>
                <h4 className="mb-[18px] font-display text-[1.55rem] font-normal leading-[1.2] tracking-[-0.2px] text-white [&_em]:italic [&_em]:font-medium">
                  {f.title}
                  {f.titleEm && <em>{f.titleEm}</em>}
                </h4>
                <p className="font-body text-[0.9rem] font-light leading-[1.75] text-white/55">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
