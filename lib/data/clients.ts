export type ClientSlug =
  | "anadolu-group"
  | "turkish-technic"
  | "turizm-bakanligi"
  | "tff"
  | "anadolu-motor"
  | "aiata"
  | "allium-bodrum"
  | "yuva-maya"
  | "gobritanya"
  | "marie-claire"
  | "fortune"
  | "instyle"
  | "inspera";

export type Client = {
  slug: ClientSlug;
  name: string;
  logoExt?: "png" | "svg" | "webp";
  hasLogo?: boolean;
  scale?: number;
};

export const clients: Client[] = [
  { slug: "anadolu-group",    name: "Anadolu Group",    logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "turkish-technic",  name: "Turkish Technic",  logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "turizm-bakanligi", name: "Turizm Bakanlığı", logoExt: "webp", hasLogo: true, scale: 1.25 },
  { slug: "tff",              name: "TFF",              logoExt: "webp", hasLogo: true, scale: 1.2 },
  { slug: "anadolu-motor",    name: "Anadolu Motor",    logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "aiata",            name: "Aiata Boats",      logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "allium-bodrum",    name: "Allium Bodrum",    logoExt: "webp", hasLogo: true, scale: 1.2 },
  { slug: "yuva-maya",        name: "Yuva Maya",        logoExt: "webp", hasLogo: true, scale: 1.2 },
  { slug: "gobritanya",       name: "GoBritanya",       logoExt: "svg",  hasLogo: true, scale: 1.0 },
  { slug: "marie-claire",     name: "Marie Claire",     logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "fortune",          name: "Fortune",          logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "instyle",          name: "InStyle",          logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "inspera",          name: "Inspera",          logoExt: "webp", hasLogo: true, scale: 1.0 },
];
