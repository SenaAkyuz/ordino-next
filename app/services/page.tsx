import type { Metadata } from "next";
import { ServicesReel } from "@/components/sections/ServicesReel";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesHeroGrid } from "@/components/sections/ServicesHeroGrid";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { PowerSection } from "@/components/sections/PowerSection";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";
import {
  serviceCards,
  serviceDetails,
  analyticsPlatforms,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Ordino",
  description:
    "Full-service and multi-disciplinary: strategy, creative, performance media, analytics, growth, and digital environments.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesReel />
      <WhatWeDo title="We are full-service and <em>multi-disciplinary.</em><br>Our work: data-driven and <em>creatively sharp.</em>" />
      <ServicesHeroGrid cards={serviceCards} />
      {serviceDetails.map((detail, i) => (
        <ServiceDetail key={detail.slug} {...detail} alt={i % 2 === 1} />
      ))}
      <ClientsShowcase />
      <PowerSection
        label="The Power of AI"
        title="Smart enough for"
        emphasis="your best campaigns."
      />
      <AnalyticsBlock
        title="One partner."
        emphasis="Every channel."
        description="Our team operates natively across every major ad platform — and the analytics stacks that connect them. That means your strategy stays unified as you scale."
        items={analyticsPlatforms}
      />
      <Cta
        title="Let's build your"
        emphasis="growth engine."
        buttonLabel="Schedule A Meeting"
      />
    </>
  );
}
