export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
  { label: "Work Together", href: "/contact" },
];

export const navCta: NavLink = {
  label: "Schedule A Meeting",
  href: "/contact#contact-form",
};
