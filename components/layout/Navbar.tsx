"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    cn(
      "relative text-[0.95rem] font-normal text-black transition-opacity duration-300 hover:opacity-60",
      pathname === href &&
        "after:content-[''] after:absolute after:-bottom-[6px] after:left-0 after:h-px after:w-full after:bg-current",
    );

  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-5 py-[18px] md:px-[30px] md:py-5 lg:px-[60px] lg:py-[27px] transition-[padding] duration-300">
      <Link
        href="/"
        className="relative z-[1001] text-[1.6rem] font-semibold uppercase tracking-[8px] text-black"
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
          className="rounded-[10em] border border-black px-[30px] py-3 text-[0.95rem] text-black transition-[background,color] duration-500 hover:bg-black hover:text-white"
        >
          {navCta.label}
        </Link>
        <a href="#" aria-label="Instagram" className="text-black">
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
            "block w-7 h-[1.5px] bg-black transition-transform duration-300",
            open && "rotate-45 translate-y-[5px]",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] bg-black transition-opacity duration-300",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-7 h-[1.5px] bg-black transition-transform duration-300",
            open && "-rotate-45 -translate-y-[5px]",
          )}
        />
      </button>

      {open && (
        <ul className="md:hidden fixed inset-0 z-[1000] flex flex-col justify-center items-center gap-[30px] bg-white list-none">
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
