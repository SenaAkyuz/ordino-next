"use client";

import Script from "next/script";
import { Reveal } from "@/components/ui/Reveal";

type ScheduleMeetingProps = {
  /**
   * HubSpot Meetings booking URL.
   * Örnek: https://meetings.hubspot.com/ordino
   * Prop adı geçmiş uyumluluk için "calendlyUrl" — siteyi değiştirmek istemiyoruz.
   */
  calendlyUrl?: string;
};

export function ScheduleMeeting({
  calendlyUrl = "https://meetings.hubspot.com/ordino",
}: ScheduleMeetingProps) {
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
            Bir Sonraki Adım
          </p>
          <h2 className="mb-6 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.2] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
            Bir Toplantı <em>Planlayalım.</em>
          </h2>
          <p className="font-body text-base font-light leading-[1.8] text-[#555]">
            Markanızın hedeflerini ve ihtiyaçlarını birlikte değerlendirelim.
            30 dakikalık ücretsiz keşif görüşmemiz için takvimden uygun bir
            zaman seçebilirsiniz.
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
