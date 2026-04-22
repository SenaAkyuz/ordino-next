export function ServicesReel() {
  return (
    <section
      data-theme="dark"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <div className="relative aspect-[9/16] w-full max-w-[min(90vw,calc(90vh*9/16))]">
        <iframe
          src="https://player.vimeo.com/video/1185478630?background=1"
          className="absolute inset-0 h-full w-full"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
          title="Ordino Services Reel"
        />
      </div>
    </section>
  );
}
