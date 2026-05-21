import { site } from "./site";
import type { routing } from "@/i18n/routing";

type AllPathnames = keyof typeof routing.pathnames;
export type Pathname = Exclude<AllPathnames, `${string}[${string}]${string}`>;

export type NavKey =
  | "services"
  | "production"
  | "work"
  | "caseStudies"
  | "platform"
  | "about"
  | "contact"
  | "ctaLabel";

export type InternalNavLink = {
  key: NavKey;
  href: Pathname;
  external?: false;
};

export type ExternalNavLink = {
  key: NavKey;
  href: string;
  external: true;
};

export type NavLink = InternalNavLink | ExternalNavLink;

export const navLinks: NavLink[] = [
  { key: "services", href: "/hizmetler" },
  { key: "production", href: "/produksiyon", external: true },
  { key: "work", href: "/calisma" },
  { key: "caseStudies", href: "/referanslar" },
  { key: "platform", href: "/platform" },
  { key: "about", href: "/hakkimizda" },
  { key: "contact", href: "/iletisim" },
];

export const navCta: ExternalNavLink = {
  key: "ctaLabel",
  href: site.meetingUrl,
  external: true,
};
