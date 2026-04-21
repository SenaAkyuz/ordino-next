import { Reveal } from "@/components/ui/Reveal";

type FullVideoProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  videoSrc?: string;
  placeholder?: "dark-breathe" | "magenta-gradient";
};

export function FullVideo({
  eyebrow,
  title,
  emphasis,
  videoSrc,
  placeholder = "dark-breathe",
}: FullVideoProps) {
  return (
    <section data-theme="dark" className="relative w-full bg-white">
      <div className="relative aspect-video max-h-[85vh] w-full overflow-hidden bg-[#0a0b0c]">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={
              placeholder === "dark-breathe"
                ? "fv-placeholder fv-placeholder--dark"
                : "fv-placeholder fv-placeholder--magenta"
            }
          >
            {placeholder === "dark-breathe" ? (
              <div className="fv-play-chip" aria-hidden="true" />
            ) : (
              <span className="fv-placeholder-note">▶ Add campaign video</span>
            )}
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.35)_100%)]"
          aria-hidden="true"
        />

        <Reveal className="absolute bottom-10 left-[50px] z-[2] text-white">
          <p className="mb-[6px] font-body text-[0.7rem] uppercase tracking-[3px] text-white/70">
            {eyebrow}
          </p>
          <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-normal tracking-[-0.5px] [&_em]:italic">
            {title}
            {emphasis && <em>{emphasis}</em>}
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
