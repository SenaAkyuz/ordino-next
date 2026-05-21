import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformProduct } from "@/components/sections/PlatformProduct";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { AIEngine } from "@/components/sections/AIEngine";
import { PlatformResults } from "@/components/sections/PlatformResults";
import { PlatformFinalCta } from "@/components/sections/PlatformFinalCta";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "platform.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PlatformPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
