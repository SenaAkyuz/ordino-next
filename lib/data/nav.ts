import { site } from "./site";
import type { routing } from "@/i18n/routing";

type AllPathnames = keyof typeof routing.pathnames;
// Dynamic path'leri ([slug] içerenleri) hariç tut — statik Link href olarak kullanılabilir olanlar.
export type Pathname = Exclude<AllPathnames, `${string}[${string}]${string}`>;

export type InternalNavLink = {
  label: string;
  href: Pathname;
  external?: false;
};

export type ExternalNavLink = {
  label: string;
  href: string;
  external: true;
};

export type NavLink = InternalNavLink | ExternalNavLink;

export const navLinks: NavLink[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Prodüksiyon", href: "/produksiyon", external: true },
  { label: "Çalışmalar", href: "/calisma" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Platform", href: "/platform" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const navCta: ExternalNavLink = {
  label: "Toplantı Planla",
  href: site.meetingUrl,
  external: true,
};
