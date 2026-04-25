import { Reveal } from "@/components/ui/Reveal";

type Feature = {
  num: string;
  title: string;
  titleEm?: string;
  text: string;
};

const features: Feature[] = [
  {
    num: "01",
    title: "Birleşik Kampanyalar",
    text: "Bir kampanyayı bir kez kurun, her kanalda yayına alın. Kreatif varyantlar, hedef kitleler ve bütçeler otomatik senkron — sekmeler arasında dolaşmadan.",
  },
  {
    num: "02",
    title: "",
    titleEm: "AI Optimizasyonu",
    text: "Motorumuz performansı her on beş dakikada bir okur; bütçeyi kaydırır, kaybedenleri durdurur, kazananları ölçeklendirir — şeffaf bir şekilde, her karar loglanır.",
  },
  {
    num: "03",
    title: "Negatif Anahtar Kelimeler",
    text: "AI arama terimi analizi, Google'da boşa harcamayı saatler değil dakikalar içinde temizler. Ortalama bir Ordino hesabı ilk haftada %23 boşa harcamayı eler.",
  },
  {
    num: "04",
    title: "",
    titleEm: "Yaratıcı Zekâ",
    text: "Reklam varyantlarınızı yükleyin; motor disiplinli ölçümlerle bunları test eder ve sayılarınızı gerçekten oynatan desenleri yüzeye çıkarır — sadece CTR'ı değil.",
  },
  {
    num: "05",
    title: "Harmanlı Raporlama",
    text: "ROAS, CAC, geri ödeme süresi, katkı marjı — reklam harcamasını gösterimlere değil, pipeline ve gelire bağlayan tek bir dashboard.",
  },
  {
    num: "06",
    title: "",
    titleEm: "Ekip Akışları",
    text: "Onaylar, notlar, devirler. Yirmi hesabı tablolarda boğulmadan yöneten ajanslar ve in-house ekipler için tasarlandı.",
  },
];

export function PlatformFeatures() {
  return (
    <section
      id="features"
      data-theme="dark"
      className="border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-16 max-w-[900px] md:mb-20">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              Özellikler
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.4rem)] font-light leading-[1.15] tracking-[-0.5px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              Paid medyayı bir
              <br />
              <em>çekirdek ürün yüzeyi</em> olarak gören ekipler için.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Reveal key={f.num}>
              <div className="group relative h-full border-b border-r border-white/[0.08] px-9 py-12 transition-colors duration-500 hover:bg-white/[0.02] md:px-11 md:py-14">
                <p className="mb-[22px] font-display text-base font-normal tracking-[1px] text-accent">
                  {f.num}
                </p>
                <h4 className="mb-[18px] font-display text-[1.55rem] font-normal leading-[1.2] tracking-[-0.2px] text-white [&_em]:italic [&_em]:font-medium">
                  {f.title}
                  {f.titleEm && <em>{f.titleEm}</em>}
                </h4>
                <p className="font-body text-[0.9rem] font-light leading-[1.75] text-white/55">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
