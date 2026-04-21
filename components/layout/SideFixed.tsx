"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { themeAtY } from "@/components/layout/AdaptiveNavLogic";

export function SideFixed() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let rafPending = false;

    const measure = () => {
      // SideFixed sits near the bottom edge — read the theme of whatever
      // section crosses that Y.
      const theme = themeAtY(window.innerHeight - 120);
      setIsDark(theme === "dark");
    };

    const onScrollOrResize = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        measure();
        rafPending = false;
      });
    };

    measure();
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const linkClass = cn(
    "[writing-mode:vertical-rl] text-[0.7rem] tracking-[1px] transition-colors duration-300 ease-in-out",
    isDark
      ? "text-white/50 hover:text-white"
      : "text-gray hover:text-black",
  );
  const lineClass = cn(
    "w-px transition-colors duration-300 ease-in-out",
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
