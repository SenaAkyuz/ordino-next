import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "Adım 01",
    title: "Topla",
    text: "Motor her on beş dakikada bir, bağladığınız her platformdan gösterim, tıklama, dönüşüm ve maliyet verisini çeker. Hiçbir şey örneklenmez — hesabın tamamını okuruz.",
  },
  {
    num: "Adım 02",
    title: "Akıl Yürüt",
    text: "İki yüz otuz müşteri hesabı üzerinde eğitilmiş bir model, her aktif varlığı gerçek iş metriğinize katkısına göre sıralar — platformun proxy skoruna değil.",
  },
  {
    num: "Adım 03",
    title: "Aksiyon Al",
    text: "Bütçe kaydırmaları, duraklatmalar, negatif anahtar kelime aktarımları, yaratıcı rotasyonları — platform hesaplarınızda otomatik yürütülür, tek tıkla geri alınabilir tam bir denetim izi ile.",
  },
  {
    num: "Adım 04",
    title: "Raporla",
    text: "Her aksiyon sade bir dille loglanır. Pazartesi raporunuz kendini yazar: ne değişti, neden değişti ve sayıları nasıl oynattı.",
  },
];

export function AIEngine() {
  return (
    <section
      id="ai-engine"
      data-theme="dark"
      className="relative overflow-hidden border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_80%_20%,rgba(178,143,108,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto max-w-[1300px]">
        <div className="mb-20 text-center md:mb-[100px]">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              AI Motoru
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-1px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              <em>Beyin</em> nasıl çalışır.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {steps.map((s) => (
            <Reveal key={s.num}>
              <div className="border-t border-white/15 pt-10">
                <p className="mb-5 font-body text-[0.7rem] font-medium uppercase tracking-[3px] text-accent">
                  {s.num}
                </p>
                <h4 className="mb-[18px] font-display text-[1.75rem] font-normal tracking-[-0.3px] text-white">
                  {s.title}
                </h4>
                <p className="font-body text-[0.88rem] font-light leading-[1.75] text-white/55">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
