import { Hero } from "@/components/sections/Hero";
import { FullVideo } from "@/components/sections/FullVideo";
import { HorizontalScroll } from "@/components/sections/HorizontalScroll";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { FullBleed } from "@/components/sections/FullBleed";
import { DualGrid } from "@/components/sections/DualGrid";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { PushForward } from "@/components/sections/PushForward";
import { PowerOf } from "@/components/sections/PowerOf";
import { ColorBlock } from "@/components/sections/ColorBlock";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FullVideo
        eyebrow="Education · Case Study"
        title="GoBritanya — "
        emphasis="The Game Is On."
        placeholder="dark-breathe"
      />
      <FullVideo
        eyebrow="Travel · Case Study"
        title="AIATA — "
        emphasis="flight bookings, reimagined."
        placeholder="magenta-gradient"
      />
      <HorizontalScroll />
      <ClientsShowcase />
      <LatestWorks />
      <FullBleed
        eyebrow="Travel · Case Study 01"
        title="AIATA — "
        emphasis="flight bookings, reimagined."
        gradient="linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 40%, #2a7a5a 70%, #b28f6c 100%)"
        href="/case-studies#aiata"
      />
      <DualGrid
        cells={[
          {
            eyebrow: "Real Estate",
            title: "Yuva Maya",
            gradient:
              "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
          },
          {
            eyebrow: "B2B / Aviation",
            title: "Turkish Technic",
            gradient:
              "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
          },
        ]}
      />
      <HowWeWork />
      <PushForward />
      <PowerOf />
      <ColorBlock
        variant="purple"
        eyebrow="The Love For Analytics"
        title="Digital strategists"
        emphasis="with great taste."
        lead="We transform raw data into actionable insights that drive real business results — from search-term intelligence to multi-touch attribution."
        items={[
          "Search Term Analysis + AI Optimization",
          "Negative Keyword Strategy",
          "Campaign Performance Monitoring",
          "Smart Bidding Automation",
          "ROAS Maximization",
          "Custom Dashboard & Reporting",
        ]}
        gradient="linear-gradient(135deg, #4a00a0 0%, #7f00fd 50%, #a64eff 100%)"
      />
      <FullBleed
        eyebrow="Public Sector · Case Study 05"
        title="Turizm Bakanlığı — "
        emphasis="18M+ qualified impressions."
        gradient="linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)"
        href="/case-studies#turizm-bakanligi"
      />
      <ColorBlock
        variant="tan"
        reverse
        eyebrow="Digital Storytelling"
        title="Stories that"
        emphasis="scale."
        lead="Every campaign starts with a story worth telling. We craft narrative-led creative for every format — short-form video, long-form branded content, interactive landing pages, and UGC-driven social."
        items={[
          "Campaign Narrative & Concept",
          "Short-Form Video for Paid Social",
          "UGC & Creator Partnerships",
          "Landing Page Design & Copy",
          "Brand Guidelines & Art Direction",
          "Motion & Interactive Experiences",
        ]}
        gradient="linear-gradient(135deg, #8b6f50 0%, #b28f6c 50%, #d4b896 100%)"
      />
      <ServicesGrid />
      <Cta />
    </>
  );
}
