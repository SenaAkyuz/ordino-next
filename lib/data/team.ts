export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  placeholderTextColor?: string;
};

export type Leader = {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  bio: string;
  email?: string;
  linkedin?: string;
};

export const founder: Leader = {
  name: "Oğuz Özbenli",
  role: "Founder & CEO — Business Development & Marketing",
  initials: "OÖ",
  gradient: "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)",
  bio: "Founder of Ordino Medya. Leads the agency's business development, marketing strategy, and brand partnerships. Brings a sharp commercial lens to every engagement — translating campaign complexity into growth outcomes clients can measure. Builds Ordino around one principle: data-driven work that brands can actually trust.",
  email: "oguz@theordino.com",
  linkedin: "https://linkedin.com",
};

export const team: TeamMember[] = [
  {
    name: "Uğur Özbenli",
    role: "Director · Ordino Medya",
    initials: "UÖ",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 100%)",
  },
  {
    name: "Mustafa Eren Y.",
    role: "AI Filmmaker",
    initials: "MY",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 100%)",
  },
  {
    name: "Ömer Toraman",
    role: "Senior Growth Operations Manager",
    initials: "ÖT",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #2a7a5a 100%)",
  },
  {
    name: "Hande Arıs",
    role: "Strategic Partner · Digital Marketing",
    initials: "HA",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #d4a574 100%)",
  },
  {
    name: "Halis Battal",
    role: "Content Partner · RecStart Media",
    initials: "HB",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
  },
  {
    name: "Ertaç Toptutan",
    role: "Full Stack Developer",
    initials: "ET",
    gradient: "linear-gradient(135deg, #0f3460 0%, #4a6b8e 100%)",
  },
  {
    name: "İlayda Özcan",
    role: "Content & Copy",
    initials: "İÖ",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #8b3a5a 100%)",
  },
  {
    name: "Fatma Sena Ak.",
    role: "Junior Engineer · Data & Automation",
    initials: "FA",
    gradient: "linear-gradient(135deg, #2c1810 0%, #5a3825 100%)",
  },
  {
    name: "Şevval K.",
    role: "Creative Lead",
    initials: "ŞK",
    gradient:
      "linear-gradient(135deg, #d4b896 0%, #e8d5b0 50%, #f5e6c8 100%)",
    placeholderTextColor: "rgba(30,20,10,0.75)",
  },
  {
    name: "Emre Yalçın",
    role: "iOS Developer",
    initials: "EY",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)",
  },
  {
    name: "Burak Koç",
    role: "Android Developer",
    initials: "BK",
    gradient: "linear-gradient(135deg, #3d0c02 0%, #6b1d0e 100%)",
  },
  {
    name: "Deniz S.",
    role: "UI/UX Designer",
    initials: "DS",
    gradient: "linear-gradient(135deg, #7f00fd 0%, #a64eff 100%)",
  },
  {
    name: "Meryem A.",
    role: "Brand & Motion Designer",
    initials: "MA",
    gradient: "linear-gradient(135deg, #1a1a40 0%, #2e2e6e 100%)",
  },
  {
    name: "Kaan P.",
    role: "Full Stack Developer",
    initials: "KP",
    gradient: "linear-gradient(135deg, #8b0000 0%, #c03030 100%)",
  },
  {
    name: "Tuna Yılmaz",
    role: "Data Engineer",
    initials: "TY",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  },
];
