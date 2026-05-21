import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { site } from "@/lib/data/site";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScheduleMeeting } from "@/components/sections/ScheduleMeeting";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "contact.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function IletisimPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tPower = await getTranslations("contact.powerSection");
  const tBottom = await getTranslations("contact.bottomCta");

  return (
    <>
      <ContactForm />
      <WhereWeWork />
      <ScheduleMeeting calendlyUrl={site.meetingUrl} />
      <PowerSection
        label={tPower("label")}
        title={tPower("title")}
        emphasis={tPower("emphasis")}
      />
      <Cta
        title={tBottom("title")}
        emphasis={tBottom("emphasis")}
        buttonLabel={tBottom("button")}
        href="mailto:theordino.com"
      />
    </>
  );
}
