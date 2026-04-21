"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, navCta } from "@/lib/data/nav";
import { cn } from "@/lib/utils";
import { useAdaptiveNav } from "@/components/layout/AdaptiveNavLogic";

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

type NavbarProps = { forceDark?: boolean };

export function Navbar({ forceDark = false }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { isDark, isScrolled } = useAdaptiveNav({ navRef, forceDark });

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
        "fixed inset-x-0 top-0 z-[1000] flex items-center justify-between transition-[padding,background-color,backdrop-filter] duration-300 ease-in-out",
        isScrolled
          ? "px-5 py-3 md:px-[30px] md:py-4 lg:px-[60px] lg:py-5 backdrop-blur-md"
          : "px-5 py-[18px] md:px-[30px] md:py-5 lg:px-[60px] lg:py-[27px]",
        isScrolled && (isDark ? "bg-black/30" : "bg-white/30"),
      )}
    >
      <Link
        href="/"
        className={cn(
          "relative z-[1001] text-[1.6rem] font-semibold uppercase tracking-[8px] transition-colors duration-300 ease-in-out",
          textColor,
        )}
      >
        ORDINO
      </Link>

      <ul className="hidden md:flex items-center gap-11 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-[25px]">
        <Link
          href={navCta.href}
          className={cn(
            "rounded-[10em] border px-[30px] py-3 text-[0.95rem] transition-[background-color,color,border-color] duration-300 ease-in-out",
            textColor,
            borderColor,
            ctaHover,
          )}
        >
          {navCta.label}
        </Link>
        <a
          href="#"
          aria-label="Instagram"
          className={cn(
            "transition-colors duration-300 ease-in-out",
            textColor,
          )}
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
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
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
