import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export type StudioItem = {
  gradient?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type StudioGalleryProps = {
  items: [StudioItem, StudioItem, StudioItem];
};

export function StudioGallery({ items }: StudioGalleryProps) {
  return (
    <section className="bg-white">
      <div className="grid w-full grid-cols-1 gap-1 bg-black md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={i}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-dark-bg-2">
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                  style={{
                    background:
                      item.gradient ??
                      "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 60%, #4a6b8e 100%)",
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
