import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CaseToc } from "@/components/sections/CaseToc";
import { CaseBlock } from "@/components/sections/CaseBlock";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies — Ordino",
  description:
    "Real brands. Real numbers. Five campaigns, five industries, one playbook: data-driven strategy, AI-powered optimization, and creative built for conversion.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Real brands."
        emphasis="Real numbers."
        sub="Five campaigns, five industries, one playbook: data-driven strategy, AI-powered optimization, and creative built for conversion. Here's what that looked like in practice."
      />
      <CaseToc
        items={caseStudies.map((c) => ({
          slug: c.slug,
          label:
            c.brand === "TURİZM BAKANLIĞI"
              ? "Turizm Bakanlığı"
              : c.brand === "YUVA MAYA"
                ? "Yuva Maya"
                : c.brand === "GOBRITANYA"
                  ? "GoBritanya"
                  : c.brand === "TURKISH TECHNIC"
                    ? "Turkish Technic"
                    : c.brand,
        }))}
      />
      {caseStudies.map((c, i) => (
        <CaseBlock key={c.slug} data={c} alt={i % 2 === 1} />
      ))}
      <PowerSection
        label="Every Case Starts The Same Way"
        title="Let's make your brand"
        emphasis="the next one."
      />
      <Cta
        title="Imagine what we'll"
        emphasis="create together."
        buttonLabel="Schedule A Meeting"
      />
    </>
  );
}
