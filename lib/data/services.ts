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
    title: "Medya & ",
    titleEm: "Reklam",
    description:
      "Programatik reklamcılık, TV-dijital entegrasyonu, yaratıcı kampanyalar ve medya satın alma — bütünleşik medya & reklam yaklaşımı.",
    slug: "medya-reklam",
  },
  {
    num: "02",
    title: "Sosyal Medya ",
    titleEm: "Yönetimi",
    description:
      "Platform-spesifik içerik üretiminden topluluk yönetimine, organik büyümeden influencer iş birliklerine kadar.",
    slug: "sosyal-medya-yonetimi",
  },
  {
    num: "03",
    title: "İçerik ",
    titleEm: "Üretimi",
    description:
      "Video, fotoğraf, metin ve grafik üretimi. Marka tonuna uygun, platform-uyumlu yaratıcı içerikler.",
    slug: "icerik-uretimi",
  },
  {
    num: "04",
    title: "SEO & Organik ",
    titleEm: "Büyüme",
    description:
      "Uzun vadeli organik büyümenin temeli. Teknik SEO'dan içerik stratejisine kalıcı görünürlük inşa ediyoruz.",
    slug: "seo-organik-buyume",
  },
  {
    num: "05",
    title: "Görsel ",
    titleEm: "Tasarım",
    description:
      "Logo, kurumsal kimlik, kampanya görselleri, ambalaj tasarımı — markanızın görsel dilini şekillendiriyoruz.",
    slug: "gorsel-tasarim",
  },
  {
    num: "06",
    title: "Web Sitesi Geliştirme & ",
    titleEm: "Optimizasyon",
    description:
      "Modern, hızlı, SEO uyumlu web siteleri. Next.js, React ve performans odaklı geliştirme yaklaşımı.",
    slug: "web-gelistirme",
  },
  {
    num: "07",
    title: "E-ticaret ",
    titleEm: "Çözümleri",
    description:
      "Shopify, WooCommerce ve özel e-ticaret platformları. Dönüşüm odaklı tasarım ve ödeme entegrasyonları.",
    slug: "e-ticaret",
  },
  {
    num: "08",
    title: "Mailing & ",
    titleEm: "CRM",
    description:
      "E-posta pazarlama, otomasyon, müşteri segmentasyonu ve CRM entegrasyonları ile sürdürülebilir ilişkiler.",
    slug: "mailing-crm",
  },
  {
    num: "09",
    title: "AI & ",
    titleEm: "Otomasyon",
    description:
      "Yapay zeka, stratejik bir araç. Veri analitiği, segmentasyon, kreatif süreçler ve kampanya optimizasyonu.",
    slug: "ai-otomasyon",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    num: "01 — Medya & Reklam",
    slug: "medya-reklam",
    title: "Bütünleşik medya &",
    titleHead: "yaratıcı ",
    titleEm: "reklam.",
    lead: "Doğru mesajın doğru zamanda doğru kişiye ulaşması için medya ve reklam yatırımını stratejik bir yetenek haline getiriyoruz. Programatik reklamcılıktan TV-dijital entegrasyonuna, yaratıcı kampanya konseptinden prodüksiyona kadar bütünleşik bir yaklaşım sunuyoruz.",
    items: [
      "Medya planlama ve satın alma",
      "Programatik reklam yönetimi",
      "TV, radyo ve geleneksel medya",
      "Outdoor ve dijital outdoor (DOOH)",
      "Reklam kampanyası konsepti ve strateji",
      "TVC ve dijital film prodüksiyonu",
      "Performans pazarlama (Google Ads, Meta, TikTok)",
      "ROAS odaklı bütçe yönetimi",
    ],
  },
  {
    num: "02 — Sosyal Medya Yönetimi",
    slug: "sosyal-medya-yonetimi",
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
    num: "03 — İçerik Üretimi",
    slug: "icerik-uretimi",
    title: "Hikaye anlatan",
    titleHead: "yaratıcı ",
    titleEm: "içerikler.",
    lead: "İçerik, markanızla hedef kitleniz arasında köprü kurar. Video, fotoğraf, metin ve grafik üretiminde marka tonunuza uygun, platform-uyumlu yaratıcı çalışmalar üretiyoruz. Story-telling, copywriting ve kreatif yönetim tek elden.",
    items: [
      "Video prodüksiyon (kısa ve uzun format)",
      "Fotoğraf çekim ve sanat yönetimi",
      "Copywriting ve metin yazarlığı",
      "Grafik ve motion tasarım",
      "Podcast ve ses içerik üretimi",
      "Marka hikayesi ve story-telling",
    ],
  },
  {
    num: "04 — SEO & Organik Büyüme",
    slug: "seo-organik-buyume",
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
    num: "05 — Görsel Tasarım",
    slug: "gorsel-tasarim",
    title: "Karakteri olan",
    titleHead: "markalar ",
    titleEm: "yaratıyoruz.",
    lead: "Marka kimliği, görsel tutarlılıktan çok daha fazlasıdır — bir markanın ruhudur. Logodan tipografiye, renk paletinden kullanım kılavuzuna kadar markanızı tanımlayan tüm görsel sistemleri tasarlıyoruz. Kampanya görselleri, ambalaj ve sunum tasarımları dahil.",
    items: [
      "Logo ve marka kimliği tasarımı",
      "Marka rehberi ve kullanım kılavuzu",
      "Tipografi ve renk sistemi",
      "Ambalaj ve ürün tasarımı",
      "Kampanya görselleri ve key visual",
      "Sunum, broşür ve katalog tasarımı",
    ],
  },
  {
    num: "06 — Web Sitesi Geliştirme & Optimizasyon",
    slug: "web-gelistirme",
    title: "Modern, hızlı,",
    titleHead: "SEO ",
    titleEm: "uyumlu.",
    lead: "Web siteniz markanızın dijital vitrini. Modern stack (Next.js, React) ile hızlı, SEO uyumlu, ölçeklenebilir siteler geliştiriyoruz. Tasarımdan kodlamaya, performans optimizasyonundan sürekli bakıma kadar tüm süreç tek elden.",
    items: [
      "Web sitesi tasarımı ve geliştirme (Next.js, React)",
      "Kurumsal web sitesi ve landing page",
      "Performans ve Core Web Vitals optimizasyonu",
      "İçerik yönetim sistemi (CMS) entegrasyonu",
      "API entegrasyonları",
      "SEO uyumlu altyapı ve schema markup",
      "Sürekli bakım ve iyileştirme",
    ],
  },
  {
    num: "07 — E-ticaret Çözümleri",
    slug: "e-ticaret",
    title: "Dönüşüm odaklı",
    titleHead: "e-ticaret ",
    titleEm: "deneyimi.",
    lead: "E-ticaret, sadece bir mağaza değil — uçtan uca bir kullanıcı deneyimidir. Shopify, WooCommerce ve özel platform geliştirmelerle dönüşüm odaklı, ödeme entegrasyonlu, mobil-uyumlu e-ticaret çözümleri sunuyoruz.",
    items: [
      "Shopify mağaza geliştirme ve özelleştirme",
      "WooCommerce ve özel e-ticaret platformları",
      "Ödeme sistemleri ve kargo entegrasyonu",
      "Ürün katalog yönetimi",
      "Sepet terk optimizasyonu",
      "E-ticaret SEO ve performans pazarlama",
      "Mobil uygulama (iOS / Android) entegrasyonu",
    ],
  },
  {
    num: "08 — Mailing & CRM",
    slug: "mailing-crm",
    title: "Sürdürülebilir",
    titleHead: "müşteri ",
    titleEm: "ilişkileri.",
    lead: "Müşteri ilişkisi tek seferlik bir satış değil, uzun vadeli bir bağ. E-posta pazarlama, otomasyon ve CRM entegrasyonları ile müşterilerinizle sürdürülebilir, kişiselleştirilmiş bir iletişim kuruyoruz. Veriden değer üretiyoruz.",
    items: [
      "E-posta pazarlama strateji ve kampanya",
      "E-posta otomasyon flow'ları",
      "Müşteri segmentasyonu ve kişiselleştirme",
      "CRM entegrasyonu (HubSpot, Salesforce, vb.)",
      "Newsletter tasarım ve içerik",
      "A/B test ve performans optimizasyonu",
    ],
  },
  {
    num: "09 — AI & Otomasyon",
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
];

export const analyticsPlatforms: string[] = [
  "Google Ads — Search, Shopping, Performance Max",
  "Meta Ads — Facebook, Instagram, Threads",
  "LinkedIn Ads — B2B & ABM",
  "TikTok Ads — Spark & Creator",
  "X (Twitter) Ads",
  "Programatik — DV360, TTD",
  "GA4, Looker Studio, BigQuery",
];
