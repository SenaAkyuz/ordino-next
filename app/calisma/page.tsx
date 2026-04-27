import type { Metadata } from "next";
import { WorkHero } from "@/components/sections/WorkHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { AnalyticsBlock } from "@/components/sections/AnalyticsBlock";
import { Cta } from "@/components/sections/Cta";
import { workPortfolio } from "@/lib/data/workPortfolio";

export const metadata: Metadata = {
  title: "Çalışmalar",
  description:
    "Türk ve uluslararası markalara hizmet veren Ordino'nun seçili çalışmaları. Strateji, yaratıcılık ve büyüme odaklı projeler.",
};

export default function CalismaPage() {
  return (
    <>
      <WorkHero
        eyebrow="Çalışmalarımız"
        title="Markaları "
        emphasis="büyütüyoruz."
        sub="AI destekli zeka, gelişmiş otomasyon ve güçlü medya ağı ile uluslararası markalara hizmet veriyoruz."
        scrollTo="#portfolio"
      />
      <PortfolioGrid items={workPortfolio} />
      <AnalyticsBlock
        title="Birikerek artan"
        emphasis="sonuçlar."
        description="Aktif müşteri hesapları üzerinden son on iki ayın ortalama değerleri. Seçilmiş başarı hikayeleri değil — gerçek rakamlar."
        items={[
          "Ortalama %187 ROAS artışı (90 günde)",
          "Ortalama %42 CPA azaltma",
          "B2B müşteriler için 3.8× pipeline hızı",
          "AI arama-terimi analizi ile %23 boşa harcama eliminasyonu",
          "24 ayda %98 müşteri tutma oranı",
        ]}
      />
      <Cta
        title="Bir sonraki başarı hikayesi"
        emphasis="sizin olsun."
        buttonLabel="Toplantı Planla"
        href="/iletisim#contact-form"
      />
    </>
  );
}
