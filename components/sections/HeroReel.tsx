export function HeroReel() {
  return (
    <section
      data-theme="dark"
      className="relative w-full overflow-hidden bg-dark-bg"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20">
        <video
          src="/hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="block h-auto max-h-[85vh] w-auto max-w-full rounded-[12px] bg-black"
        />
      </div>
    </section>
  );
}
