import { Reveal } from "@/components/ui/Reveal";

const results = [
  { value: "+187%", label: "90 günde ortalama ROAS artışı" },
  { value: "−42%", label: "Hesaplar genelinde ortalama CPA azaltma" },
  { value: "23%", label: "İlk haftada elenen boşa harcama" },
  { value: "3.8×", label: "B2B hesapları için pipeline hız artışı" },
];

export function PlatformResults() {
  return (
    <section
      id="results"
      data-theme="dark"
      className="border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-16 text-center md:mb-[90px]">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              Sonuçlar
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mb-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-light leading-[1.1] tracking-[-0.8px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              <em>Canlı ağdan</em> rakamlar.
            </h2>
          </Reveal>
          <Reveal>
            <p className="font-body text-[0.85rem] font-light tracking-[1px] text-white/50">
              Son on iki ayda aktif hesaplar üzerinden ortalamalar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-[60px] lg:grid-cols-4 lg:gap-10">
          {results.map((r) => (
            <Reveal key={r.value} className="text-center">
              <h3 className="mb-4 bg-gradient-to-br from-white to-[#d4a574] bg-clip-text font-display text-[clamp(2.8rem,5vw,4.2rem)] font-light leading-none tracking-[-1.5px] text-transparent">
                {r.value}
              </h3>
              <p className="mx-auto max-w-[220px] font-body text-[0.82rem] font-light leading-[1.6] tracking-[0.3px] text-white/55">
                {r.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
