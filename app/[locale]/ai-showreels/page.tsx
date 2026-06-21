import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { type Locale } from "@/i18n/routing";
import { AiShowreelsHero } from "@/components/sections/AiShowreelsHero";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "aiShowreels.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AiShowreelsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div
      data-theme="dark"
      className="h-[100svh] snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth bg-black"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <AiShowreelsHero />
    </div>
  );
}
