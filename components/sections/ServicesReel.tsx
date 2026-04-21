type ServicesReelProps = {
  videoSrc?: string;
};

export function ServicesReel({ videoSrc }: ServicesReelProps) {
  return (
    <section className="relative w-full bg-black pt-20">
      <div className="relative max-h-[92vh] min-h-[420px] w-full overflow-hidden bg-black md:min-h-[520px]">
        <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:aspect-video">
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
              className="absolute inset-0 [background:radial-gradient(circle_at_30%_40%,rgba(178,143,108,0.18),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(120,80,55,0.18),transparent_60%),linear-gradient(135deg,#0a0b0c_0%,#141618_50%,#1c1f22_100%)]"
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
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_70%,rgba(0,0,0,0.4)_100%)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
