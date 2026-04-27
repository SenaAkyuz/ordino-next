import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/lib/data/clients";

export function ClientsShowcase() {
  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[140px] md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light tracking-[-0.8px] text-black">
              Çalıştığımız Markalar
            </h2>
            <div className="mx-auto mb-6 h-px w-20 bg-accent" aria-hidden="true" />
            <p className="mx-auto max-w-[520px] font-body text-[1rem] font-light leading-[1.6] text-gray">
              Stratejik ortaklıklarla büyüyen markalara hizmet veriyoruz.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid list-none grid-cols-2 items-center justify-items-center gap-x-10 gap-y-10 md:grid-cols-3 md:gap-x-[60px] md:gap-y-10">
            {clients.map((c) => (
              <li
                key={c.slug}
                className="group flex h-[120px] w-full items-center justify-center p-5"
              >
                {c.hasLogo ? (
                  <div className="relative h-[70%] w-[70%]">
                    <Image
                      src={`/clients/${c.slug}.png`}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 200px"
                      className="object-contain opacity-70 [filter:grayscale(40%)] transition-[opacity,filter,transform] duration-[400ms] group-hover:scale-[1.05] group-hover:opacity-100 group-hover:[filter:grayscale(0%)]"
                    />
                  </div>
                ) : (
                  <span
                    className="font-display text-[1.05rem] uppercase tracking-[2px] text-[#999] opacity-70 transition-[color,opacity] duration-[400ms] group-hover:text-black group-hover:opacity-100"
                    aria-label={c.alt}
                  >
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
