import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News — Ordino",
  description:
    "Campaign teardowns, platform updates, creative experiments, and the occasional strong opinion — from the Ordino team.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News & Insight"
        title="What we're"
        emphasis="thinking about."
        sub="Campaign teardowns, platform updates, creative experiments, and the occasional strong opinion — from the Ordino team."
      />
      <NewsGrid posts={news} />
      <PowerSection
        label="Subscribe"
        title="One email a month."
        emphasis="No fluff."
      />
      <Cta
        title="Have a story idea"
        emphasis="for us?"
        buttonLabel="hello@theordino.com"
        href="mailto:hello@theordino.com"
      />
    </>
  );
}
