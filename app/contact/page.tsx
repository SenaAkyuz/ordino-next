import type { Metadata } from "next";
import { ContactHeroImage } from "@/components/sections/ContactHeroImage";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
import { ContactForm } from "@/components/sections/ContactForm";
import { PowerSection } from "@/components/sections/PowerSection";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Work Together — Ordino",
  description:
    "Start the conversation. Tell us about your brand and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroImage />
      <WhereWeWork
        title="Founded in Istanbul 5 years ago. Today, headquartered in the Şişli business district, working with "
        emphasis="growth-stage and high-profile"
        titleTail=" brands across travel, real estate, public sector, and B2B."
        cards={[
          {
            title: "Global",
            text: "We are a tight team headquartered in Istanbul, with partners and collaborators across Europe, the Gulf, and North America. We run campaigns globally.",
          },
          {
            title: "Become a Client",
            text: "Have a new project? We'd love to hear about it. Every great engagement starts with an even greater brief — we look forward to reviewing yours.",
          },
          {
            title: "Become a Member",
            text: "We hire exceptional operators only. If your work is so good you make yourself say \"that's sharp,\" you belong here with us.",
          },
        ]}
      />
      <ContactForm />
      <PowerSection
        label="One Reply Away"
        title="Reach out and we'll"
        emphasis="get right back."
      />
      <Cta
        title="Ready to rock"
        emphasis="together?"
        buttonLabel="info@theordino.com"
        href="mailto:info@theordino.com"
      />
    </>
  );
}
