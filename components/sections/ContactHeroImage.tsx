import Image from "next/image";

type ContactHeroImageProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function ContactHeroImage({ imageSrc, imageAlt }: ContactHeroImageProps) {
  return (
    <section className="w-full bg-black pt-20">
      <div className="group relative max-h-[88vh] min-h-[420px] w-full overflow-hidden bg-dark-bg-2 md:min-h-[520px]">
        <div className="relative aspect-[4/5] w-full md:aspect-video">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              sizes="100vw"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.015]"
            />
          ) : (
            <div
              className="h-full w-full [background:radial-gradient(ellipse_at_30%_40%,rgba(178,143,108,0.12),transparent_55%),radial-gradient(ellipse_at_70%_65%,rgba(74,107,142,0.10),transparent_60%),linear-gradient(135deg,#0a0b0c_0%,#141618_50%,#1c1f22_100%)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.015]"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
