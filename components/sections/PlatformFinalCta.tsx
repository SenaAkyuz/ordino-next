import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function PlatformFinalCta() {
  return (
    <section
      id="demo"
      data-theme="dark"
      className="relative overflow-hidden border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[120px] text-center text-white md:px-10 md:py-[160px] lg:px-20"
    >
      <div className="relative z-[1] mx-auto max-w-[900px]">
        <Reveal>
          <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
            Erken Erişim
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mb-8 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1.1] tracking-[-1px] text-white md:mb-10 [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
            Yönetmeyi bırakıp,
            <br />
            <em>çoğaltmaya</em> hazır mısınız?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mb-12 max-w-[580px] font-body text-base font-light leading-[1.65] text-white/65">
            Ordino AI 2026&apos;da sınırlı bir gruba sunuluyor. Erişim talebinde bulunun, hesaplarınızı bir hafta içinde aktive edelim.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <Link
              href="/iletisim#contact-form"
              className="inline-flex items-center gap-[10px] rounded-[10em] border border-white bg-white px-9 py-[15px] font-body text-[0.88rem] font-normal text-black transition-all duration-[400ms] hover:-translate-y-[1px] hover:border-accent hover:bg-accent hover:text-white"
            >
              Erken Erişim Talep Et
            </Link>
            <Link
              href="/iletisim#contact-form"
              className="inline-flex items-center gap-[10px] rounded-[10em] border border-white/30 bg-transparent px-9 py-[15px] font-body text-[0.88rem] font-normal text-white transition-all duration-[400ms] hover:border-white/50 hover:bg-white/[0.08]"
            >
              Bizimle Konuş
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
