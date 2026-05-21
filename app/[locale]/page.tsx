import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";
import { ClientsShowcase } from "@/components/sections/ClientsShowcase";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LatestWorks } from "@/components/sections/LatestWorks";
import { MeetingCta } from "@/components/sections/MeetingCta";
import { Cta } from "@/components/sections/Cta";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  const howWeWorkStats = [
    { value: "11", label: t("howWeWork.stats.yearsExperience") },
    { value: "50+", label: t("howWeWork.stats.brandsServed") },
    { value: "£2M+", label: t("howWeWork.stats.adSpendManaged") },
    {
      value: t("howWeWork.stats.thousands"),
      label: t("howWeWork.stats.campaignsDelivered"),
    },
  ];

  const servicesGridItems = (
    t.raw as (key: string) => unknown
  )("servicesGrid.items") as Record<
    string,
    { title: string; items: string[] }
  >;
  const servicesGridServices = Object.entries(servicesGridItems).map(
    ([key, block]) => ({
      title: `${key} — ${block.title}`,
      items: block.items,
    }),
  );

  return (
    <>
      <Hero />
      <ClientsShowcase />
      <HowWeWork
        eyebrow={t("howWeWork.eyebrow")}
        title={t("howWeWork.title")}
        emphasis={t("howWeWork.emphasis")}
        description={t("howWeWork.description")}
        stats={howWeWorkStats}
      />
      <PartnerMarquee eyebrow={t("partnerMarquee.label")} />
      <ServicesGrid
        title={`${t("servicesGrid.title")} `}
        emphasis={t("servicesGrid.emphasis")}
        services={servicesGridServices}
      />
      <LatestWorks />
      <MeetingCta />
      <Cta
        title={t("cta.title")}
        emphasis={t("cta.emphasis")}
        buttonLabel={t("cta.button")}
        href="/iletisim"
      />
    </>
  );
}
