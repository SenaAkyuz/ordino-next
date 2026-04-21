"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function SideFixed() {
  const pathname = usePathname();
  const isDark = pathname?.startsWith("/platform") ?? false;

  const linkClass = cn(
    "[writing-mode:vertical-rl] text-[0.7rem] tracking-[1px] transition-colors duration-300",
    isDark
      ? "text-white/50 hover:text-white"
      : "text-gray hover:text-black",
  );
  const lineClass = cn(
    "w-px",
    isDark ? "bg-white/30" : "bg-gray",
  );

  return (
    <>
      <div className="hidden md:flex fixed left-[35px] bottom-0 z-[999] flex-col items-center gap-5">
        <a href={`mailto:${site.email}`} className={cn(linkClass, "text-xs")}>
          {site.email}
        </a>
        <div className={cn(lineClass, "h-[60px]")} aria-hidden="true" />
      </div>

      <div className="hidden md:flex fixed right-[35px] bottom-0 z-[999] flex-col items-center gap-[15px]">
        <div className={cn(lineClass, "h-10 mb-[5px]")} aria-hidden="true" />
        {site.social.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.name}
            className={linkClass}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
