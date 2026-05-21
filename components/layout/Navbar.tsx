"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks, navCta } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { useAdaptiveNav } from "@/components/layout/AdaptiveNavLogic";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type NavbarProps = { forceDark?: boolean };

export function Navbar({ forceDark = false }: NavbarProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  // Static-site external link'ler icin locale prefix ekle
  // (next-intl Link kullanmiyoruz cunku statik HTML routing'i ayri)
  const resolveExternal = (href: string) =>
    locale === "en" && href.startsWith("/") && !href.startsWith("/en/")
      ? `/en${href}`
      : href;
  const navRef = useRef<HTMLElement>(null);
  const { isDark, isScrolled } = useAdaptiveNav({ navRef, forceDark });
  const instagram = site.social.find((s) => s.name === "Instagram");
  const linkedin = site.social.find((s) => s.name === "LinkedIn");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const barColor = isDark ? "bg-white" : "bg-black";
  const ctaHover = isDark
    ? "hover:bg-white hover:text-black"
    : "hover:bg-black hover:text-white";

  const linkClass = (href: string) =>
    cn(
      "relative text-[0.95rem] font-normal transition-[color,opacity] duration-300 ease-in-out hover:opacity-60",
      textColor,
      pathname === href &&
        "after:content-[''] after:absolute after:-bottom-[6px] after:left-0 after:h-px after:w-full after:bg-current",
    );

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] flex items-center justify-between transition-[padding] duration-300 ease-in-out",
        isScrolled
          ? "px-5 py-3 md:px-[30px] md:py-4 lg:px-[60px] lg:py-5"
          : "px-5 py-[18px] md:px-[30px] md:py-5 lg:px-[60px] lg:py-[27px]",
      )}
    >
      <Link
        href="/"
        aria-label="Ordino"
        className="relative z-[1001] block h-6 md:h-7"
      >
        <span className="relative block h-full" style={{ aspectRatio: "2922 / 637" }}>
          <Image
            src="/ordino-logo-white.png"
            alt=""
            fill
            sizes="160px"
            priority
            className={cn(
              "object-contain transition-opacity duration-300 ease-in-out",
              isDark ? "opacity-100" : "opacity-0",
            )}
          />
          <Image
            src="/ordino-logo-black.png"
            alt="Ordino"
            fill
            sizes="160px"
            priority
            className={cn(
              "object-contain transition-opacity duration-300 ease-in-out",
              isDark ? "opacity-0" : "opacity-100",
            )}
          />
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-11 list-none">
        {navLinks.map((link) => (
          <li key={link.key}>
            {link.external ? (
              <a
                href={resolveExternal(link.href)}
                className={linkClass(link.href)}
              >
                {t(link.key)}
              </a>
            ) : (
              <Link href={link.href} className={linkClass(link.href)}>
                {t(link.key)}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-[20px]">
        <LanguageSwitcher className={textColor} />
        <a
          href={navCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-[10em] border px-[30px] py-3 text-[0.95rem] transition-[background-color,color,border-color] duration-300 ease-in-out",
            textColor,
            borderColor,
            ctaHover,
          )}
        >
          {t(navCta.key)}
        </a>
        {instagram && (
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={cn(
              "transition-colors duration-300 ease-in-out",
              textColor,
            )}
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={cn(
              "transition-colors duration-300 ease-in-out",
              textColor,
            )}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        )}
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative z-[1001] md:hidden flex flex-col gap-[6px] cursor-pointer bg-transparent border-0 p-0"
      >
        <span
          className={cn(
            "block w-7 h-[1.5px] transition-[transform,background-color] duration-300 ease-in-out",
            barColor,
            open && "rotate-45 translate-y-[5px]",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] transition-[opacity,background-color] duration-300 ease-in-out",
            barColor,
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] transition-[transform,background-color] duration-300 ease-in-out",
            barColor,
            open && "-rotate-45 -translate-y-[5px]",
          )}
        />
      </button>

      {open && (
        <ul
          className={cn(
            "md:hidden fixed inset-0 z-[1000] flex flex-col justify-center items-center gap-[30px] list-none",
            isDark ? "bg-black" : "bg-white",
          )}
        >
          {navLinks.map((link) => (
            <li key={link.key}>
              {link.external ? (
                <a href={link.href} className={linkClass(link.href)}>
                  {t(link.key)}
                </a>
              ) : (
                <Link href={link.href} className={linkClass(link.href)}>
                  {t(link.key)}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-4">
            <LanguageSwitcher className={textColor} />
          </li>
        </ul>
      )}
    </nav>
  );
}
