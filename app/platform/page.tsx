import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformProduct } from "@/components/sections/PlatformProduct";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { AIEngine } from "@/components/sections/AIEngine";
import { PlatformResults } from "@/components/sections/PlatformResults";
import { PlatformFinalCta } from "@/components/sections/PlatformFinalCta";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Tüm Reklamlarınız. ORDINO.AI. TikTok, Meta, Google ve daha fazlasında kampanyalarınızı tek bir AI destekli komuta merkezinden oluşturun, yönetin ve optimize edin.",
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
