import { Reveal } from "@/components/ui/Reveal";

export type ServiceBlock = {
  title: string;
  items: string[];
};

const defaultServices: ServiceBlock[] = [
  {
    title: "01 — Medya & Reklam",
    items: [
      "Medya planlama ve satın alma",
      "Programatik reklam yönetimi",
      "TV, radyo ve geleneksel medya",
      "Outdoor (DOOH)",
      "TVC ve dijital film prodüksiyonu",
    ],
  },
  {
    title: "02 — Sosyal Medya Yönetimi",
    items: [
      "İçerik takvimi ve strateji",
      "Instagram, TikTok, LinkedIn",
      "Topluluk yönetimi",
      "Influencer iş birlikleri",
      "Sosyal dinleme",
    ],
  },
  {
    title: "03 — İçerik Üretimi",
    items: [
      "Video prodüksiyon",
      "Fotoğraf çekim",
      "Copywriting",
      "Grafik ve motion tasarım",
      "Marka hikayesi",
    ],
  },
  {
    title: "04 — SEO & Organik Büyüme",
    items: [
      "Teknik SEO denetimi",
      "Anahtar kelime stratejisi",
      "On-page optimizasyon",
      "Lokal SEO",
      "Schema markup",
    ],
  },
  {
    title: "05 — Görsel Tasarım",
    items: [
      "Logo ve marka kimliği",
      "Marka rehberi",
      "Tipografi ve renk",
      "Ambalaj tasarımı",
      "Kampanya görselleri",
    ],
  },
  {
    title: "06 — Web Sitesi Geliştirme & Optimizasyon",
    items: [
      "Next.js ve React geliştirme",
      "Kurumsal site ve landing page",
      "Core Web Vitals optimizasyonu",
      "CMS entegrasyonu",
      "API entegrasyonları",
    ],
  },
  {
    title: "07 — E-ticaret Çözümleri",
    items: [
      "Shopify mağaza geliştirme",
      "WooCommerce ve özel platform",
      "Ödeme ve kargo entegrasyonu",
      "Sepet terk optimizasyonu",
      "E-ticaret SEO",
    ],
  },
  {
    title: "08 — Mailing & CRM",
    items: [
      "E-posta pazarlama strateji",
      "Otomasyon flow'ları",
      "Müşteri segmentasyonu",
      "CRM entegrasyonu",
      "Newsletter tasarım",
    ],
  },
  {
    title: "09 — AI & Otomasyon",
    items: [
      "AI destekli içerik üretimi",
      "Müşteri davranışı tahminleme",
      "Kampanya AI otomasyonu",
      "Chatbot çözümleri",
      "İş akışı otomasyonu",
    ],
  },
];

type ServicesGridProps = {
  title?: string;
  emphasis?: string;
  services?: ServiceBlock[];
  id?: string;
};

export function ServicesGrid({
  title = "Hizmet ",
  emphasis = "Kategorilerimiz",
  services = defaultServices,
  id = "services",
}: ServicesGridProps) {
  return (
    <section
      id={id}
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-[60px] text-center font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-light md:mb-20 [&_em]:italic [&_em]:font-normal">
            {title}
            {emphasis && <em>{emphasis}</em>}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-[60px] lg:grid-cols-3">
          {services.map((block) => (
            <Reveal key={block.title}>
              <h3 className="mb-5 border-b border-[#e0e0e0] pb-5 font-display text-[1.6rem] font-normal">
                {block.title}
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[0.9rem] font-light text-[#666]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
