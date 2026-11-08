import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type TeamPhotoProps = {
  alt: string;
};

// Sunum sayfasındaki zemin rengi (#f6f6ea) ile aynı: görsel sayfaya dikişsiz oturur
export function TeamPhoto({ alt }: TeamPhotoProps) {
  return (
    <section
      data-theme="light"
      className="bg-[#f6f6ea] px-0 pb-12 md:pb-20"
    >
      <Reveal>
        <div className="mx-auto max-w-[1600px]">
          <Image
            src="/images/yonetim-kadrosu.webp"
            alt={alt}
            width={1920}
            height={1080}
            sizes="(min-width: 1600px) 1600px, 100vw"
            quality={90}
            className="h-auto w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}
