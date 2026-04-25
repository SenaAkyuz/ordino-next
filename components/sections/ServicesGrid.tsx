import { Reveal } from "@/components/ui/Reveal";

export type ServiceBlock = {
  title: string;
  items: string[];
};

const defaultServices: ServiceBlock[] = [
  {
    title: "01 — Dijital Pazarlama",
    items: [
      "Dijital strateji",
      "Çok kanallı kampanya",
      "Landing page tasarımı",
      "E-posta pazarlama",
      "Web analitiği",
    ],
  },
  {
    title: "02 — Sosyal Medya",
    items: [
      "İçerik takvimi",
      "Instagram, TikTok, LinkedIn",
      "Topluluk yönetimi",
      "Influencer iş birlikleri",
      "Sosyal dinleme",
    ],
  },
  {
    title: "03 — SEO",
    items: [
      "Teknik SEO denetimi",
      "Anahtar kelime stratejisi",
      "On-page optimizasyon",
      "Lokal SEO",
      "Performans raporlama",
    ],
  },
  {
    title: "04 — Yazılım & Teknoloji",
    items: [
      "Web sitesi geliştirme",
      "E-ticaret platformu",
      "Mobil uygulama",
      "Özel CRM yazılımları",
      "API entegrasyonları",
    ],
  },
  {
    title: "05 — Medya",
    items: [
      "Medya planlama",
      "Programatik reklam",
      "TV ve geleneksel medya",
      "Outdoor (DOOH)",
      "CTV ve streaming",
    ],
  },
  {
    title: "06 — 360° İletişim",
    items: [
      "Halkla ilişkiler",
      "Basın bülteni",
      "Medya ilişkileri",
      "Kriz iletişimi",
      "Marka tonu yönetimi",
    ],
  },
  {
    title: "07 — Reklam",
    items: [
      "Kampanya konsepti",
      "TVC ve dijital film",
      "Print ve outdoor",
      "Yaratıcı yönetim",
      "ATL ve BTL entegrasyon",
    ],
  },
  {
    title: "08 — AI & Otomasyon",
    items: [
      "AI destekli içerik",
      "Müşteri segmentasyonu",
      "Kampanya otomasyonu",
      "Chatbot çözümleri",
      "İş akışı otomasyonu",
    ],
  },
  {
    title: "09 — Performans Marketing",
    items: [
      "Google Ads",
      "Meta (Facebook & Instagram)",
      "TikTok ve Pinterest",
      "Smart Bidding",
      "ROAS optimizasyonu",
    ],
  },
  {
    title: "10 — Kurumsal Kimlik & Tasarım",
    items: [
      "Logo ve marka kimliği",
      "Marka rehberi",
      "Tipografi ve renk",
      "Ambalaj tasarımı",
      "Pazarlama materyalleri",
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
