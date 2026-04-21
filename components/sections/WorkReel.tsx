type WorkReelProps = {
  videoSrc?: string;
  poster?: string;
};

export function WorkReel({ videoSrc, poster }: WorkReelProps) {
  return (
    <section
      data-theme="dark"
      className="relative flex w-full items-center justify-center overflow-hidden bg-dark-bg-2 px-5 py-10 md:px-10 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_25%_40%,rgba(178,143,108,0.08),transparent_55%),radial-gradient(ellipse_at_75%_60%,rgba(74,107,142,0.06),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1] aspect-[3/4] max-h-[92vh] w-full max-w-[540px] overflow-hidden bg-dark-bg-2 shadow-[0_30px_80px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.4)]">
        {videoSrc ? (
          <video
            className="relative z-[2] block h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-label="Ordino work reel"
            src={videoSrc}
          />
        ) : (
          <div
            className="absolute inset-0 z-[1] flex items-center justify-center [background:radial-gradient(circle_at_30%_40%,rgba(178,143,108,0.15),transparent_55%),radial-gradient(circle_at_70%_65%,rgba(74,107,142,0.10),transparent_60%),linear-gradient(135deg,#0a0b0c_0%,#141618_50%,#1c1f22_100%)]"
            aria-hidden="true"
          >
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
              <span
                className="ml-[3px] block h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white/85"
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
