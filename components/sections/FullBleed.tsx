import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type FullBleedProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  gradient?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function FullBleed({
  eyebrow,
  title,
  emphasis,
  gradient,
  imageSrc,
  imageAlt,
  href,
}: FullBleedProps) {
  const content = (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            priority={false}
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            style={{
              background:
                gradient ??
                "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 40%, #2a7a5a 70%, #b28f6c 100%)",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden="true"
      />

      <Reveal className="absolute bottom-[50px] left-[60px] z-[2] flex flex-col gap-[6px] text-white">
        <span className="font-body text-[0.7rem] uppercase tracking-[3px] text-white/70">
          {eyebrow}
        </span>
        <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-normal tracking-[-0.5px] [&_em]:italic">
          {title}
          {emphasis && <em>{emphasis}</em>}
        </h3>
      </Reveal>
    </>
  );

  const className =
    "group relative block h-screen min-h-[700px] w-full overflow-hidden text-white";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <section className={className}>{content}</section>;
}
