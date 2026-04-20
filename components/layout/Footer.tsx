import { site } from "@/lib/data/site";

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

export function Footer() {
  const instagram = site.social.find((s) => s.name === "Instagram");

  return (
    <footer className="bg-dark-bg text-white px-10 pt-20 pb-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 lg:gap-20 pb-20">
        <div>
          <p className="text-[0.9rem] leading-[1.8] text-gray font-light">
            {site.footerAbout}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[2px] mb-[25px] text-white font-medium">
            Contact Us
          </h4>
          <a
            href={site.phoneHref}
            className="block text-[0.9rem] text-gray mb-3 font-light transition-colors duration-300 hover:text-white"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block text-[0.9rem] text-gray mb-3 font-light transition-colors duration-300 hover:text-white"
          >
            {site.email}
          </a>
          <a
            href="#"
            className="block text-[0.9rem] text-gray mb-3 font-light transition-colors duration-300 hover:text-white"
          >
            {site.address}
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[2px] mb-[25px] text-white font-medium">
            Careers
          </h4>
          <a
            href="#"
            className="block text-[0.9rem] text-gray mb-3 font-light transition-colors duration-300 hover:text-white"
          >
            {site.careersBlurb}
          </a>
          <a
            href={`mailto:${site.careersEmail}`}
            className="block text-[0.9rem] text-gray mb-3 font-light transition-colors duration-300 hover:text-white"
          >
            {site.careersEmail}
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-10 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 text-center md:text-left">
        <p className="text-[0.8rem] text-gray font-light">
          &copy; {site.copyrightYear} {site.name.toUpperCase()} — {site.tagline} All rights reserved
        </p>
        <div className="flex items-center gap-[30px]">
          <a
            href="#"
            className="text-[0.8rem] text-gray transition-colors duration-300 hover:text-white"
          >
            Privacy Policy
          </a>
          {instagram && (
            <a
              href={instagram.href}
              aria-label={instagram.name}
              className="text-gray hover:text-white transition-colors duration-300"
            >
              <FooterInstagramIcon />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
