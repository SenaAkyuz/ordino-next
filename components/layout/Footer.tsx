import { Link } from "@/i18n/navigation";
import { site } from "@/lib/data/site";
import type { Pathname } from "@/lib/data/nav";

function FooterInstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function FooterLinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type ServiceLink = { label: string; pathname: Pathname; hash: string };
type CompanyLink =
  | { label: string; pathname: Pathname; external?: false }
  | { label: string; href: string; external: true };
type LegalLink = { label: string; pathname: Pathname };

const services: ServiceLink[] = [
  { label: "Medya & Reklam", pathname: "/hizmetler", hash: "medya-reklam" },
  { label: "Sosyal Medya Yönetimi", pathname: "/hizmetler", hash: "sosyal-medya-yonetimi" },
  { label: "İçerik Üretimi", pathname: "/hizmetler", hash: "icerik-uretimi" },
  { label: "SEO & Organik Büyüme", pathname: "/hizmetler", hash: "seo-organik-buyume" },
  { label: "Görsel Tasarım", pathname: "/hizmetler", hash: "gorsel-tasarim" },
  { label: "Web Sitesi Geliştirme & Optimizasyon", pathname: "/hizmetler", hash: "web-gelistirme" },
  { label: "E-ticaret Çözümleri", pathname: "/hizmetler", hash: "e-ticaret" },
  { label: "Mailing & CRM", pathname: "/hizmetler", hash: "mailing-crm" },
  { label: "AI & Otomasyon", pathname: "/hizmetler", hash: "ai-otomasyon" },
];

const company: CompanyLink[] = [
  { label: "Hakkımızda", pathname: "/hakkimizda" },
  { label: "Çalışmalar", pathname: "/calisma" },
  { label: "Referanslar", pathname: "/referanslar" },
  { label: "Platform", pathname: "/platform" },
  { label: "Blog", pathname: "/blog" },
  { label: "Kariyer", href: `mailto:${site.careersEmail}`, external: true },
];

const legal: LegalLink[] = [
  { label: "Gizlilik Politikası", pathname: "/gizlilik-politikasi" },
  { label: "KVKK", pathname: "/kvkk" },
  { label: "Çerez Politikası", pathname: "/cerez-politikasi" },
];

export function Footer() {
  const instagram = site.social.find((s) => s.name === "Instagram");
  const linkedin = site.social.find((s) => s.name === "LinkedIn");

  return (
    <footer
      data-theme="dark"
      className="bg-dark-bg px-5 pt-20 pb-10 text-white md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 font-display text-[1.6rem] font-light tracking-[-0.5px] text-white">
              {site.name}
            </p>
            <p className="mb-6 font-display text-[0.95rem] font-light italic leading-[1.5] text-white/80">
              {site.tagline}
            </p>
            <p className="font-body text-[0.85rem] font-light leading-[1.7] text-gray">
              London &amp; Istanbul
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-body text-[0.72rem] font-medium uppercase tracking-[2px] text-white">
              Hizmetler
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={{ pathname: s.pathname, hash: s.hash }}
                    className="font-body text-[0.85rem] font-light text-gray transition-colors duration-300 hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-body text-[0.72rem] font-medium uppercase tracking-[2px] text-white">
              Şirket
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.label}>
                  {c.external ? (
                    <a
                      href={c.href}
                      className="font-body text-[0.85rem] font-light text-gray transition-colors duration-300 hover:text-white"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <Link
                      href={c.pathname}
                      className="font-body text-[0.85rem] font-light text-gray transition-colors duration-300 hover:text-white"
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-body text-[0.72rem] font-medium uppercase tracking-[2px] text-white">
              İletişim
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-body text-[0.85rem] font-light text-gray transition-colors duration-300 hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="font-body text-[0.85rem] font-light text-gray transition-colors duration-300 hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="pt-4">
                <p className="mb-1 font-body text-[0.7rem] font-medium uppercase tracking-[1.5px] text-white/80">
                  İstanbul Ofisi
                </p>
                <p className="font-body text-[0.82rem] font-light leading-[1.65] text-gray">
                  {site.address}
                </p>
              </li>
              <li className="pt-3">
                <p className="mb-1 font-body text-[0.7rem] font-medium uppercase tracking-[1.5px] text-white/80">
                  Londra Ofisi
                </p>
                <p className="font-body text-[0.82rem] font-light leading-[1.65] text-gray">
                  {site.londonAddress}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:gap-4">
          <p className="font-body text-[0.78rem] font-light text-gray">
            © {site.copyrightYear} {site.name}. Tüm hakları saklıdır.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.pathname}
                className="font-body text-[0.78rem] font-light text-gray transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {instagram && (
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={instagram.name}
                className="text-gray transition-colors duration-300 hover:text-white"
              >
                <FooterInstagramIcon />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedin.name}
                className="text-gray transition-colors duration-300 hover:text-white"
              >
                <FooterLinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
