"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data/site";

type ScheduleMeetingProps = {
  calendlyUrl?: string;
};

export function ScheduleMeeting({
  calendlyUrl = site.meetingUrl,
}: ScheduleMeetingProps) {
  const t = useTranslations("contact.scheduleMeeting");
  const embedSrc = calendlyUrl.includes("?")
    ? `${calendlyUrl}&embed=true`
    : `${calendlyUrl}?embed=true`;

  return (
    <section
      id="schedule-meeting"
      data-theme="light"
      className="bg-light-bg px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]"
    >
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <p className="mb-5 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mb-6 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.2] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
            {t("title")} <em>{t("emphasis")}</em>
          </h2>
          <p className="font-body text-base font-light leading-[1.8] text-[#555]">
            {t("description")}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="w-full max-w-full overflow-hidden rounded-[20px] border border-[#e0e0e0] bg-white">
            <div
              className="meetings-iframe-container w-full"
              data-src={embedSrc}
              style={{ minHeight: 720 }}
            />
          </div>
        </Reveal>
      </div>

      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
