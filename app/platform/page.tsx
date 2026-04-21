import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformProduct } from "@/components/sections/PlatformProduct";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { AIEngine } from "@/components/sections/AIEngine";
import { PlatformResults } from "@/components/sections/PlatformResults";
import { PlatformFinalCta } from "@/components/sections/PlatformFinalCta";

export const metadata: Metadata = {
  title: "Platform — Ordino AI",
  description:
    "All Your Ads. One Brain. Create, manage, and optimize campaigns across TikTok, Meta, Google & more from a single AI-powered command center.",
};

export default function PlatformPage() {
  return (
    <div data-theme="dark" className="bg-dark-bg-2">
      <PlatformHero />
      <PlatformProduct />
      <PlatformFeatures />
      <AIEngine />
      <PlatformResults />
      <PlatformFinalCta />
    </div>
  );
}
