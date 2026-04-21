import { Reveal } from "@/components/ui/Reveal";

type ShowreelProps = {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  videoSrc?: string;
};

export function Showreel({
  eyebrow = "Studio Reel · 2026",
  title,
  emphasis,
  videoSrc,
}: ShowreelProps) {
  return (
    <section data-theme="dark" className="relative w-full bg-dark-bg">
      <div className="relative max-h-[88vh] w-full overflow-hidden bg-dark-bg-2 aspect-video">
        {videoSrc ? (
          <video
            className="block h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
          />
        ) : (
          <div
            className="absolute inset-0 overflow-hidden [background:radial-gradient(circle_at_30%_40%,rgba(178,143,108,0.18),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(120,80,55,0.18),transparent_60%),linear-gradient(135deg,#0a0b0c_0%,#141618_50%,#1c1f22_100%)]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 [background:repeating-linear-gradient(0deg,transparent_0_3px,rgba(255,255,255,0.015)_3px_4px)]" />
            <div className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-[94px] w-[94px] items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm transition-[transform,border-color] duration-500 group-hover:scale-[1.08] group-hover:border-white/60">
                <span
                  className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white/85"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.45)_100%)]"
          aria-hidden="true"
        />
        <Reveal className="absolute bottom-8 left-6 z-[2] flex flex-col gap-2 text-white md:bottom-[50px] md:left-[60px]">
          <span className="font-body text-[0.72rem] uppercase tracking-[3px] text-white/70">
            {eyebrow}
          </span>
          <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.1] tracking-[-0.5px] [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && <em>{emphasis}</em>}
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
