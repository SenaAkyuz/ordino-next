"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, navCta } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

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

type Rgb = { r: number; g: number; b: number };

function parseRgb(color: string): Rgb | null {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
  if (parts.length < 3) return null;
  const alpha = parts.length === 4 ? parts[3] : 1;
  if (alpha <= 0.1) return null;
  return { r: parts[0], g: parts[1], b: parts[2] };
}

function getEffectiveBackground(el: Element | null): Rgb | null {
  let current: Element | null = el;
  while (current && current !== document.documentElement) {
    const bg = window.getComputedStyle(current).backgroundColor;
    const rgb = parseRgb(bg);
    if (rgb) return rgb;
    current = current.parentElement;
  }
  const bodyBg = window.getComputedStyle(document.body).backgroundColor;
  return parseRgb(bodyBg) ?? { r: 255, g: 255, b: 255 };
}

function luminance({ r, g, b }: Rgb): number {
  const toLin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
}

type NavbarProps = { forceDark?: boolean };

export function Navbar({ forceDark = false }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(forceDark);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (forceDark) {
      setIsDark(true);
      return;
    }

    const nav = navRef.current;
    if (!nav) return;

    let rafPending = false;

    const check = () => {
      const rect = nav.getBoundingClientRect();
      const sampleY = rect.bottom + 4;
      const vw = window.innerWidth;
      const xs = [vw * 0.1, vw * 0.3, vw * 0.5, vw * 0.7, vw * 0.9];

      const prevPointer = nav.style.pointerEvents;
      nav.style.pointerEvents = "none";

      let total = 0;
      let count = 0;
      for (const x of xs) {
        const el = document.elementFromPoint(x, sampleY);
        const bg = getEffectiveBackground(el);
        if (!bg) continue;
        total += luminance(bg);
        count++;
      }

      nav.style.pointerEvents = prevPointer;

      let avg: number;
      if (count === 0) {
        const body = parseRgb(window.getComputedStyle(document.body).backgroundColor);
        avg = body ? luminance(body) : 1;
      } else {
        avg = total / count;
      }

      setIsDark(avg < 0.5);
      setIsScrolled(window.scrollY > 80);
    };

    const onScrollOrResize = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        check();
        rafPending = false;
      });
    };

    check();
    const t1 = window.setTimeout(check, 100);
    const t2 = window.setTimeout(check, 500);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [forceDark, pathname]);

  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const barColor = isDark ? "bg-white" : "bg-black";
  const ctaHover = isDark
    ? "hover:bg-white hover:text-black"
    : "hover:bg-black hover:text-white";

  const linkClass = (href: string) =>
    cn(
      "relative text-[0.95rem] font-normal transition-[color,opacity] duration-500 hover:opacity-60",
      textColor,
      pathname === href &&
        "after:content-[''] after:absolute after:-bottom-[6px] after:left-0 after:h-px after:w-full after:bg-current",
    );

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] flex items-center justify-between transition-[padding,background] duration-500",
        isScrolled
          ? "px-5 py-3 md:px-[30px] md:py-4 lg:px-[60px] lg:py-5"
          : "px-5 py-[18px] md:px-[30px] md:py-5 lg:px-[60px] lg:py-[27px]",
      )}
    >
      <Link
        href="/"
        className={cn(
          "relative z-[1001] text-[1.6rem] font-semibold uppercase tracking-[8px] transition-colors duration-500",
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
            "rounded-[10em] border px-[30px] py-3 text-[0.95rem] transition-[background,color,border-color] duration-500",
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
          className={cn("transition-colors duration-500", textColor)}
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
            "block w-7 h-[1.5px] transition-[transform,background-color] duration-300",
            barColor,
            open && "rotate-45 translate-y-[5px]",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] transition-[opacity,background-color] duration-300",
            barColor,
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] transition-[transform,background-color] duration-300",
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
