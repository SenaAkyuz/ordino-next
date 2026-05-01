import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type CtaProps = {
  title?: string;
  emphasis?: string;
  buttonLabel?: string;
  href?: string;
  id?: string;
};

const isInternal = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

export function Cta({
  title = "Birlikte neler",
  emphasis = "yaratacağız.",
  buttonLabel = "Toplantı Planla",
  href = "/iletisim#contact-form",
  id = "contact",
}: CtaProps) {
  const linkClass =
    "inline-block rounded-[10em] border border-white px-8 py-4 font-body text-[0.95rem] font-normal text-white transition-[background,color] duration-[400ms] hover:bg-white hover:text-black md:px-[50px] md:py-[18px] md:text-base";
  return (
    <section
      id={id}
      data-theme="dark"
      className="bg-dark-bg px-5 py-[120px] text-center text-white md:px-10 md:py-[160px] lg:py-[180px]"
    >
      <Reveal>
        <h2 className="mx-auto mb-12 max-w-[800px] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.2] md:mb-[50px] [&_em]:italic [&_em]:font-normal">
          {title}
          <br />
          <em>{emphasis}</em>
        </h2>
      </Reveal>
      <Reveal>
        {isInternal(href) ? (
          <Link href={href} className={linkClass}>
            {buttonLabel}
          </Link>
        ) : (
          <a href={href} className={linkClass}>
            {buttonLabel}
          </a>
        )}
      </Reveal>
    </section>
  );
}
