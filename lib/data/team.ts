export type RoleKey =
  | "founder"
  | "strategicPartner"
  | "managingDirector"
  | "operations"
  | "performance"
  | "design";

export type BioKey =
  | "oguzOzbenli"
  | "handeAris"
  | "ilaydaOzcan"
  | "ugurOzbenli"
  | "omerToraman"
  | "halisBattal";

export type Leader = {
  name: string;
  roleKey: RoleKey;
  bioKey: BioKey;
  initials: string;
  gradient: string;
  photo?: string;
  email?: string;
  linkedin?: string;
};

export type TeamMember = Leader & { placeholderTextColor?: string };

export const leadership: Leader[] = [
  {
    name: "Oğuz Özbenli",
    roleKey: "founder",
    bioKey: "oguzOzbenli",
    initials: "OÖ",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)",
    photo: "/team/oguzozbenli.webp",
    linkedin: "https://www.linkedin.com/in/oguz-ozbenli/",
  },
  {
    name: "Hande Arış",
    roleKey: "strategicPartner",
    bioKey: "handeAris",
    initials: "HA",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    photo: "/team/handearis.webp",
    linkedin: "https://www.linkedin.com/in/hande-ar%C4%B1s-b878557b/",
  },
  {
    name: "İlayda Özcan",
    roleKey: "managingDirector",
    bioKey: "ilaydaOzcan",
    initials: "İÖ",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 50%, #8b3a5a 100%)",
    photo: "/team/ilaydaozcan.webp",
    linkedin: "https://www.linkedin.com/in/ilayda-%C3%B6zcan-3980231b5/",
  },
  {
    name: "Uğur Özbenli",
    roleKey: "operations",
    bioKey: "ugurOzbenli",
    initials: "UÖ",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    photo: "/team/ugurozbenli.webp",
    linkedin: "https://www.linkedin.com/in/u%C4%9Fur-%C3%B6zbenli-8340a91b1/",
  },
  {
    name: "Ömer Toraman",
    roleKey: "performance",
    bioKey: "omerToraman",
    initials: "ÖT",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #2a7a5a 50%, #40916c 100%)",
    photo: "/team/omertoraman.webp",
    linkedin: "https://www.linkedin.com/in/yazar-%C3%B6mer-toraman-/",
  },
  {
    name: "Halis Battal",
    roleKey: "design",
    bioKey: "halisBattal",
    initials: "HB",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #3a3a3a 100%)",
    photo: "/team/halisbattal.webp",
    linkedin: "https://www.linkedin.com/in/halisbattal/",
  },
];

export const founder: Leader = leadership[0];
export const team: Leader[] = leadership;
