import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type ScheduleMeetingProps = {
  calendlyUrl?: string;
};

export function ScheduleMeeting({
  calendlyUrl = "#",
}: ScheduleMeetingProps) {
  const isExternal = calendlyUrl.startsWith("http");
  return (
    <section
      id="schedule-meeting"
      data-theme="light"
      className="bg-light-bg px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]"
    >
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="mb-5 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
            Bir Sonraki Adım
          </p>
          <h2 className="mb-6 font-display text-[clamp(2.2rem,3.8vw,3.4rem)] font-light leading-[1.2] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
            Bir Toplantı <em>Planlayalım.</em>
          </h2>
          <p className="font-body text-base font-light leading-[1.8] text-[#555]">
            Markanızın hedeflerini ve ihtiyaçlarını birlikte değerlendirelim. 30 dakikalık ücretsiz keşif görüşmemiz için takvimimizden uygun bir zaman seçebilirsiniz.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-[20px] border border-[#e0e0e0] bg-white p-6 text-center sm:p-8 md:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 text-accent"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="mb-3 font-display text-[1.6rem] font-normal text-black">
              Takvimden seçin
            </h3>
            <p className="mb-8 font-body text-[0.95rem] font-light leading-[1.6] text-[#666]">
              Aşağıdaki butona tıklayarak Calendly takvimimize ulaşabilirsiniz.
            </p>
            {isExternal ? (
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[10em] bg-accent px-10 py-4 font-body text-[0.95rem] text-white transition-[opacity] duration-300 hover:opacity-85"
              >
                Toplantı Planla
              </a>
            ) : (
              <Link
                href={calendlyUrl}
                className="inline-block rounded-[10em] bg-accent px-10 py-4 font-body text-[0.95rem] text-white transition-[opacity] duration-300 hover:opacity-85"
              >
                Toplantı Planla
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
