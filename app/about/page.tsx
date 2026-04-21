import type { Metadata } from "next";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Showreel } from "@/components/sections/Showreel";
import { StudioGallery } from "@/components/sections/StudioGallery";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { PushForward } from "@/components/sections/PushForward";
import { Leadership } from "@/components/sections/Leadership";
import { PowerSection } from "@/components/sections/PowerSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Cta } from "@/components/sections/Cta";
import { founder, team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About — Ordino",
  description:
    "Ordino is a full-service AI-powered ad intelligence platform specializing in performance marketing, search optimization, and data-driven creative.",
};

export default function AboutPage() {
  return (
    <>
      <EditorialHero
        eyebrow="About Ordino"
        title="We elevate ads"
        emphasis="and push growth forward."
        prose={[
          "Ordino is a full-service AI-powered ad intelligence platform specializing in performance marketing, search optimization, and data-driven creative — trusted by growth-stage brands since 2021.",
          "We combine machine-learning pipelines with platform-native expertise to eliminate wasted spend, sharpen targeting, and turn campaign complexity into measurable growth. Based in Istanbul's Şişli business district, working globally.",
        ]}
      />
      <Showreel
        eyebrow="Studio Reel · 2026"
        title="Five years of "
        emphasis="elevating ads."
      />
      <StudioGallery
        items={[
          {
            gradient:
              "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 60%, #4a6b8e 100%)",
            imageAlt: "Studio entrance",
          },
          {
            gradient:
              "linear-gradient(135deg, #2c1810 0%, #5a3825 50%, #8b6914 100%)",
            imageAlt: "Studio floor",
          },
          {
            gradient:
              "linear-gradient(135deg, #1a1a1a 0%, #333 60%, #555 100%)",
            imageAlt: "Meeting room",
          },
        ]}
      />
      <HowWeWork
        eyebrow="How We Work"
        title="Requirements +"
        emphasis="Process + Results"
        description="We approach every partnership as a long-term collaboration. Our process begins with deep discovery — understanding your goals, competitive landscape, and data. From there, we design a tailored growth strategy, deploy AI-powered optimizations, and iterate relentlessly based on real performance. No generic playbooks. No vanity metrics. Just measurable growth."
        stats={[
          { value: "5", label: "Years Operating" },
          { value: "230+", label: "Brands Served" },
          { value: "$180M+", label: "Ad Spend Managed" },
          { value: "991+", label: "Campaigns Launched" },
        ]}
      />
      <PushForward
        title="A studio built for"
        emphasis="performance."
        text="Ordino was founded in 2021 by a team of performance marketers and machine learning engineers who believed ad optimization deserved smarter tools. We've spent the last five years building a platform and a team that blend creative strategy with rigorous analytics. Our headquarters in Istanbul houses data scientists, media buyers, and creative strategists — all obsessed with turning campaign complexity into clarity."
      />
      <Leadership
        lead="Our founder ensures exceptional delivery, data-infused creative flows, and most importantly a pleasant time while we hit your target goals."
        leader={founder}
      />
      <PowerSection
        label="Our Principles"
        title="Smart enough for"
        emphasis="your best campaigns."
      />
      <TeamGrid
        lead="Meet a few of our brilliant minds, whose secret power is staying sharp at heart and committed to the singular vision of "
        leadEm="growth without bound."
        members={team}
      />
      <Cta title="Ready to rock" emphasis="together?" />
    </>
  );
}
