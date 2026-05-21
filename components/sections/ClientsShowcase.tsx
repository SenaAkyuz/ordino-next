import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/lib/data/clients";

export async function ClientsShowcase() {
  const t = await getTranslations("home.clientsShowcase");
  const tAlt = await getTranslations("clients.altText");

  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[80px] md:py-[140px] md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <div className="mb-12 text-center md:mb-20">
            <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.6rem)] font-light tracking-[-0.8px] text-black">
              {t("eyebrow")}
            </h2>
            <div className="mx-auto mb-6 h-px w-20 bg-accent" aria-hidden="true" />
            <p className="mx-auto max-w-[520px] font-body text-[0.95rem] font-light leading-[1.6] text-gray md:text-[1rem]">
              {t("sub")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid list-none grid-cols-2 items-center justify-items-center gap-x-8 gap-y-14 sm:gap-x-10 sm:gap-y-16 md:grid-cols-3 lg:grid-cols-4 md:gap-x-[80px] md:gap-y-28">
            {clients.map((c) => {
              const altText = tAlt(c.slug);
              return (
                <li
                  key={c.slug}
                  className="group flex h-[90px] w-full max-w-[220px] items-center justify-center overflow-hidden px-2 sm:h-[120px] sm:px-0 md:h-[140px]"
                >
                  {c.hasLogo ? (
                    <Image
                      src={`/clients/${c.slug}.${c.logoExt ?? "webp"}`}
                      alt={altText}
                      width={240}
                      height={120}
                      style={{ transform: `scale(${c.scale ?? 1})` }}
                      className="max-h-[55px] max-w-[85px] h-auto w-auto object-contain transition-transform duration-[400ms] group-hover:scale-[1.05] sm:max-h-[100px] sm:max-w-[170px] md:max-h-[110px] md:max-w-[200px]"
                      unoptimized
                    />
                  ) : (
                    <span
                      className="font-display text-[1.05rem] uppercase tracking-[2px] text-black transition-colors duration-[400ms] group-hover:text-accent"
                      aria-label={altText}
                    >
                      {c.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
