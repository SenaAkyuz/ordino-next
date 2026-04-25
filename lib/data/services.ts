export type ServiceCard = {
  num: string;
  title: string;
  titleEm?: string;
  description: string;
  slug: string;
};

export type ServiceDetail = {
  num: string;
  slug: string;
  title: string;
  titleHead: string;
  titleEm: string;
  lead: string;
  items: string[];
};

export const serviceCards: ServiceCard[] = [
  {
    num: "01",
    title: "Dijital ",
    titleEm: "Pazarlama",
    description:
      "Markanızın dijital varlığını uçtan uca yönetiyoruz. Veriye dayalı stratejilerle erişim, etkileşim ve dönüşüm.",
    slug: "dijital-pazarlama",
  },
  {
    num: "02",
    title: "Sosyal ",
    titleEm: "Medya",
    description:
      "Platform-spesifik içerik üretiminden topluluk yönetimine, organik büyümeden influencer iş birliklerine kadar.",
    slug: "sosyal-medya",
  },
  {
    num: "03",
    title: "",
    titleEm: "SEO",
    description:
      "Uzun vadeli organik büyümenin temeli. Teknik SEO'dan içerik stratejisine kalıcı görünürlük inşa ediyoruz.",
    slug: "seo",
  },
  {
    num: "04",
    title: "Yazılım & ",
    titleEm: "Teknoloji",
    description:
      "Web sitelerinden mobil uygulamalara, e-ticarete özel SaaS çözümlerine markanızın iş modeline tam uyan ürünler.",
    slug: "yazilim-teknoloji",
  },
  {
    num: "05",
    title: "",
    titleEm: "Medya",
    description:
      "Programatik reklamcılık, TV-dijital entegrasyonu, OOH ve geleneksel medya — bütünleşik medya yaklaşımı.",
    slug: "medya",
  },
  {
    num: "06",
    title: "360° ",
    titleEm: "İletişim",
    description:
      "Halkla ilişkilerden krize, basın bülteninden marka tonuna markanızın tüm iletişim süreçleri.",
    slug: "360-iletisim",
  },
  {
    num: "07",
    title: "",
    titleEm: "Reklam",
    description:
      "Konseptten çekime, prodüksiyondan medya yayınına reklam kampanyalarınızın tüm sürecini yönetiyoruz.",
    slug: "reklam",
  },
  {
    num: "08",
    title: "AI & ",
    titleEm: "Otomasyon",
    description:
      "Yapay zeka, stratejik bir araç. Veri analitiği, segmentasyon, kreatif süreçler ve kampanya optimizasyonu.",
    slug: "ai-otomasyon",
  },
  {
    num: "09",
    title: "Performans ",
    titleEm: "Marketing",
    description:
      "Google Ads, Meta, TikTok ve diğerlerinde kampanyalarınızı ROAS odaklı yönetir, optimize ederiz.",
    slug: "performans-marketing",
  },
  {
    num: "10",
    title: "Kurumsal Kimlik & ",
    titleEm: "Tasarım",
    description:
      "Logo'dan tipografiye, renk paletinden marka rehberine markanızı tanımlayan görsel sistemler.",
    slug: "kurumsal-kimlik",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    num: "01 — Dijital Pazarlama",
    slug: "dijital-pazarlama",
    title: "Dijital varlığınızı",
    titleHead: "uçtan uca ",
    titleEm: "yönetiyoruz.",
    lead: "Markanızın dijital varlığını uçtan uca yönetiyoruz. Veriye dayalı stratejilerle erişimi artırır, etkileşim üretir ve dönüşümü sürdürülebilir bir şekilde büyütürüz. Dijital ekosistemin tüm temas noktalarında tutarlı bir marka deneyimi sunarız.",
    items: [
      "Dijital strateji ve yol haritası",
      "Çok kanallı kampanya yönetimi",
      "Dönüşüm odaklı landing page tasarımı",
      "E-posta pazarlama ve otomasyon",
      "Web analitiği ve raporlama",
      "Marketing teknoloji altyapısı (MarTech)",
    ],
  },
  {
    num: "02 — Sosyal Medya",
    slug: "sosyal-medya",
    title: "Markanın insanlarla",
    titleHead: "buluştuğu ",
    titleEm: "yer.",
    lead: "Sosyal medya, markanızın insanlarla buluştuğu yerdir. Platform-spesifik içerik üretiminden topluluk yönetimine, organik büyümeden influencer iş birliklerine kadar tüm sürecin sahibi oluyoruz. Sayılara değil, gerçek bağlantılara odaklanıyoruz.",
    items: [
      "Sosyal medya strateji ve içerik takvimi",
      "Instagram, TikTok, LinkedIn içerik üretimi",
      "Topluluk yönetimi ve etkileşim",
      "Influencer ve içerik üretici iş birlikleri",
      "Sosyal dinleme ve trend analizi",
      "Sosyal medya performans raporlama",
    ],
  },
  {
    num: "03 — SEO",
    slug: "seo",
    title: "Uzun vadeli",
    titleHead: "organik ",
    titleEm: "büyüme.",
    lead: "Arama motoru optimizasyonu, uzun vadeli organik büyümenin temelidir. Teknik SEO'dan içerik stratejisine, link otoriteden lokal aramaya kadar markanızın doğru kelimelerde doğru kişilerin karşısına çıkmasını sağlıyoruz. Kalıcı görünürlük inşa ediyoruz.",
    items: [
      "Teknik SEO denetimi ve düzeltme",
      "Anahtar kelime stratejisi ve içerik planlaması",
      "On-page ve off-page optimizasyon",
      "Lokal SEO ve Google Business yönetimi",
      "Schema markup ve yapısal veri",
      "Aylık performans takibi ve raporlama",
    ],
  },
  {
    num: "04 — Yazılım & Teknoloji",
    slug: "yazilim-teknoloji",
    title: "Markanızın",
    titleHead: "iş modeline ",
    titleEm: "özel.",
    lead: "Ölçeklenen markaların kendine özgü teknolojiye ihtiyacı vardır. Web sitelerinden mobil uygulamalara, e-ticaret platformlarından özel SaaS çözümlerine kadar markanızın iş modeline tam uyan dijital ürünler geliştiriyoruz. Modern, hızlı ve sürdürülebilir.",
    items: [
      "Web sitesi tasarımı ve geliştirme (Next.js, React)",
      "E-ticaret platform geliştirme (Shopify, özel)",
      "Mobil uygulama geliştirme (iOS, Android)",
      "Özel CRM ve panel yazılımları",
      "API entegrasyonları ve sistem mimarisi",
      "Performans optimizasyonu ve sürekli bakım",
    ],
  },
  {
    num: "05 — Medya",
    slug: "medya",
    title: "Bütünleşik",
    titleHead: "medya ",
    titleEm: "yaklaşımı.",
    lead: "Doğru mesajın doğru zamanda doğru kişiye ulaşması için medya yatırımını stratejik bir yetenek haline getiriyoruz. Programatik reklamcılıktan TV-dijital entegrasyonuna, geleneksel medya planlamasından OOH'a kadar bütünleşik bir medya yaklaşımı sunuyoruz.",
    items: [
      "Medya planlama ve satın alma",
      "Programatik reklam yönetimi",
      "TV, radyo ve geleneksel medya",
      "Outdoor ve dijital outdoor (DOOH)",
      "CTV ve streaming reklamları",
      "Medya verimliliği ve frekans yönetimi",
    ],
  },
  {
    num: "06 — 360° İletişim",
    slug: "360-iletisim",
    title: "Her temas noktasında",
    titleHead: "tutarlı ",
    titleEm: "iletişim.",
    lead: "Markanızın hikayesi her temas noktasında tutarlı olmalı. Halkla ilişkilerden krize, basın bülteninden marka tonuna kadar markanızın insanlarla kurduğu tüm iletişimi tek elden, tutarlı ve etkili bir şekilde yönetiyoruz.",
    items: [
      "Halkla ilişkiler stratejisi ve uygulaması",
      "Basın bülteni hazırlama ve dağıtım",
      "Medya ilişkileri ve etkinlik organizasyonu",
      "Kriz iletişimi ve itibar yönetimi",
      "Marka tonu ve mesaj mimarisi",
      "Kurumsal iletişim ve raporlama",
    ],
  },
  {
    num: "07 — Reklam",
    slug: "reklam",
    title: "Yaratıcı fikir,",
    titleHead: "ölçülebilir ",
    titleEm: "sonuç.",
    lead: "Yaratıcı bir fikir, doğru hedef kitleye ulaştığında satış olur. Konsept geliştirmeden çekime, prodüksiyondan medya yayınına kadar reklam kampanyalarınızın tüm sürecini yönetiyoruz. Ödüllü yaratıcılık, ölçülebilir sonuçlarla.",
    items: [
      "Reklam kampanyası konsepti ve strateji",
      "TVC ve dijital film prodüksiyonu",
      "Print ve outdoor görsel üretimi",
      "Yaratıcı yönetim ve sanat direksiyonu",
      "Kampanya optimizasyonu ve A/B testi",
      "ATL ve BTL kampanya entegrasyonu",
    ],
  },
  {
    num: "08 — AI & Otomasyon",
    slug: "ai-otomasyon",
    title: "Yapay zeka,",
    titleHead: "stratejik bir ",
    titleEm: "araç.",
    lead: "Yapay zeka artık bir lüks değil, rekabet zorunluluğu. Veri analitiğinden müşteri segmentasyonuna, yaratıcı süreçlerden kampanya optimizasyonuna kadar AI'yı stratejik bir araç olarak kullanıyoruz. Daha hızlı, daha akıllı, daha verimli.",
    items: [
      "AI destekli içerik ve görsel üretimi",
      "Müşteri davranışı tahminleme ve segmentasyon",
      "Reklam kampanyası AI otomasyonu",
      "Chatbot ve müşteri hizmetleri otomasyonu",
      "Pazarlama iş akışı otomasyonu",
      "AI tabanlı performans optimizasyonu",
    ],
  },
  {
    num: "09 — Performans Marketing",
    slug: "performans-marketing",
    title: "Her tıklama,",
    titleHead: "her gösterim ",
    titleEm: "hesaplı.",
    lead: "Performans pazarlamada her tıklama, her gösterim ve her kuruş hesaplanmalı. Google Ads, Meta, TikTok ve diğer platformlarda kampanyalarınızı yönetir, sürekli optimize eder ve ROAS'ı maksimize ederiz. Veriye dayalı, sonuç odaklı.",
    items: [
      "Google Ads kampanya yönetimi",
      "Meta (Facebook & Instagram) Ads",
      "TikTok ve Pinterest reklamcılık",
      "Smart Bidding ve teklif optimizasyonu",
      "Dönüşüm takibi ve attribution modelleme",
      "ROAS odaklı bütçe yönetimi",
    ],
  },
  {
    num: "10 — Kurumsal Kimlik & Tasarım",
    slug: "kurumsal-kimlik",
    title: "Karakteri olan",
    titleHead: "markalar ",
    titleEm: "yaratıyoruz.",
    lead: "Marka kimliği, görsel tutarlılıktan çok daha fazlasıdır — bir markanın ruhudur. Logodan tipografiye, renk paletinden kullanım kılavuzuna kadar markanızı tanımlayan tüm görsel sistemleri tasarlıyoruz. Karakteri olan markalar yaratıyoruz.",
    items: [
      "Logo ve marka kimliği tasarımı",
      "Marka rehberi ve kullanım kılavuzu",
      "Tipografi ve renk sistemi",
      "Ambalaj ve ürün tasarımı",
      "Kurumsal sunum ve şablon tasarımı",
      "Pazarlama materyalleri (broşür, katalog vb.)",
    ],
  },
];

export const analyticsPlatforms: string[] = [
  "Google Ads — Search, Shopping, Performance Max",
  "Meta Ads — Facebook, Instagram, Threads",
  "LinkedIn Ads — B2B & ABM",
  "TikTok Ads — Spark & Creator",
  "Pinterest Ads",
  "Programatik — DV360, TTD",
  "GA4, Looker Studio, BigQuery",
];
