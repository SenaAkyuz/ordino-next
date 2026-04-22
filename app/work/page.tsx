import type { Metadata } from "next";
import { WorkHero } from "@/components/sections/WorkHero";
import { WorkReel } from "@/components/sections/WorkReel";
import { PortfolioRows } from "@/components/sections/PortfolioRows";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";
import { workPortfolio } from "@/lib/data/workPortfolio";

export const metadata: Metadata = {
  title: "Work — Ordino",
  description:
    "Built to grow with Ordino. AI, advanced automation, and a powerful media network.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero
        eyebrow="Built to grow"
        title="With "
        emphasis="ORDINO."
        sub="AI, advanced automation, and a powerful media network."
        scrollTo="#portfolio"
      />
      <WorkReel />
      <PortfolioRows items={workPortfolio} />
      <LatestWorks />
      <AnalyticsBlock
        title="Results that"
        emphasis="compound."
        description="Averages across active client accounts over the past twelve months. Real numbers, not cherry-picked case studies."
        items={[
          "+187% average ROAS improvement within 90 days",
          "42% average CPA reduction",
          "3.8× pipeline velocity for B2B clients",
          "23% of wasted spend eliminated through AI search-term analysis",
          "98% client retention over 24 months",
        ]}
      />
      <Cta title="Want to be the next" emphasis="case study?" />
    </>
  );
}
