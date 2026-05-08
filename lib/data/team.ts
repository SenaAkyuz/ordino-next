export type Leader = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  photo?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
};

export type TeamGroup = {
  count: number;
  label: string;
};

export type TeamMember = Leader & { placeholderTextColor?: string };

export const leadership: Leader[] = [
  {
    name: "Oğuz Özbenli",
    role: "Founder & Executive Lead",
    initials: "OÖ",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)",
    photo: "/team/oguzozbenli.webp",
    bio: "Ordino'nun kurucusu. Ajansın iş geliştirme, pazarlama stratejisi ve marka ortaklıklarını yönetiyor. Her angajmanda ticari bir bakış açısı getirir — kampanya karmaşıklığını markaların ölçebileceği büyüme sonuçlarına çevirir.",
    linkedin: "https://www.linkedin.com/in/oguz-ozbenli/",
  },
  {
    name: "Hande Arıs",
    role: "Strategic Partner & Executive Lead",
    initials: "HA",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    photo: "/team/handearis.webp",
    bio: "Stratejik ortak ve yönetici lider. Ordino'nun dijital pazarlama yaklaşımının mimarı. 360° kampanya stratejilerinden marka konumlandırmasına kadar uzun vadeli iş ortaklıklarına liderlik eder.",
    linkedin: "https://www.linkedin.com/in/hande-ar%C4%B1s-b878557b/",
  },
  {
    name: "İlayda Özcan",
    role: "Managing Director & Creative Lead",
    initials: "İÖ",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 50%, #8b3a5a 100%)",
    photo: "/team/ilaydaozcan.webp",
    bio: "Yönetici Direktör ve Kreatif Lider. Marka vizyonu, yaratıcı strateji geliştirme ve iletişim süreçlerinin bütünsel yönetiminden sorumlu. Ordino'nun kimliğini ve müşterilerinin hikayelerini yaratıcı bir bakış açısıyla stratejik düzleme taşır.",
    linkedin: "https://www.linkedin.com/in/ilayda-%C3%B6zcan-3980231b5/",
  },
  {
    name: "Uğur Özbenli",
    role: "Head of Operations",
    initials: "UÖ",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    photo: "/team/ugurozbenli.webp",
    bio: "Operasyon direktörü. Ajansın iç süreçlerinden müşteri yönetimine, kaynak planlamasından teslimat takibine kadar her şeyin sorunsuz akmasını sağlar. Ordino'nun arka motorlarını yönetir.",
    linkedin: "https://www.linkedin.com/in/u%C4%9Fur-%C3%B6zbenli-8340a91b1/",
  },
  {
    name: "Ömer Toraman",
    role: "Head of Performance Marketing",
    initials: "ÖT",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #2a7a5a 50%, #40916c 100%)",
    photo: "/team/omertoraman.webp",
    bio: "Performans pazarlama direktörü. Google Ads, Meta, TikTok ve diğer platformlarda kampanya yönetimi, optimizasyon ve ROAS maksimizasyonundan sorumlu. Veri odaklı, sonuç takipçisi.",
    linkedin: "https://www.linkedin.com/in/yazar-%C3%B6mer-toraman-/",
  },
  {
    name: "Halis Battal",
    role: "Head of Design & Media Production",
    initials: "HB",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #3a3a3a 100%)",
    photo: "/team/halisbattal.webp",
    bio: "Tasarım ve medya prodüksiyon direktörü. Görsel kimlik, video prodüksiyon, motion graphics ve dijital tasarım süreçlerinin tek elden yöneticisi. Ordino'nun yaratıcı çıktılarının kalite kontrol noktası.",
    linkedin: "https://www.linkedin.com/in/halisbattal/",
  },
];

export const teamStructure: TeamGroup[] = [
  { count: 12, label: "Yaratıcı Ekip" },
  { count: 5, label: "Reklam Performansı" },
  { count: 5, label: "Stratejik Planlama" },
  { count: 6, label: "Dijital Prodüksiyon" },
];

export const founder: Leader = leadership[0];
export const team: Leader[] = leadership;
