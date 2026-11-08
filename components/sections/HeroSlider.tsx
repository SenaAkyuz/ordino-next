"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { heroSlides } from "@/lib/data/heroSlides";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;
const FADE_MS = 900;
const SWIPE_PX = 50;

function SlideImage({
  slug,
  alt,
  eager,
}: {
  slug: string;
  alt: string;
  eager: boolean;
}) {
  const src = `/hero/slides/${slug}.webp`;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      quality={90}
      priority={eager}
      className={slug === "aiata" ? "object-cover" : "object-contain"}
    />
  );
}

export function HeroSlider() {
  const t = useTranslations("home.heroSlider");
  const count = heroSlides.length;

  const [active, setActive] = useState(0);
  // Giden slayt, gelen slayt tamamen görünene kadar altta opak kalır (çapraz geçişte arka plan sızmasın)
  const [prev, setPrev] = useState<number | null>(null);
  // Görseller yaklaşıldığında yüklenir (ilk yükte 7 yerine 2 görsel)
  const [seen, setSeen] = useState<ReadonlySet<number>>(new Set([0, 1]));
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchX = useRef<number | null>(null);

  const goTo = (index: number) => {
    const next = (index + count) % count;
    if (next === active) return;
    setPrev(active);
    setActive(next);
    setSeen((s) => new Set([...s, next, (next + 1) % count]));
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
    // goTo her render'da yeniden oluşur; zamanlayıcı yalnızca bu değerlerde yenilenmeli
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, reduced]);

  // Geçiş bitince giden slayt kaldırılır (görsel kenarlarında arkadan görünmesin)
  useEffect(() => {
    if (prev === null) return;
    const id = window.setTimeout(() => setPrev(null), FADE_MS);
    return () => window.clearTimeout(id);
  }, [prev]);

  // Aktif logo şerit içinde ortalansın (sayfayı kaydırmadan)
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (!list || !item || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({
      left: item.offsetLeft - (list.clientWidth - item.clientWidth) / 2,
      behavior: reduced ? "auto" : "smooth",
    });
  }, [active, reduced]);


  return (
    <section
      data-theme="light"
      aria-roledescription="carousel"
      aria-label={t("ariaLabel")}
      className="flex flex-col bg-off-white pt-[60px] md:pt-[68px] lg:h-[100svh] lg:min-h-[560px] lg:pt-[82px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative aspect-video w-full [container-type:size] lg:aspect-auto lg:min-h-0 lg:flex-1"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > SWIPE_PX) goTo(active + (dx < 0 ? 1 : -1));
        }}
      >
        {heroSlides.map((slide, i) => {
          const isActive = i === active;
          const isPrev = i === prev;
          return (
            <div
              key={slide.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
              aria-hidden={!isActive}
              style={{
                animationDuration: `${FADE_MS / 2}ms`,
                animationDelay: isActive ? `${FADE_MS / 2}ms` : undefined,
              }}
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-off-white",
                isActive && "visible z-[2]",
                isActive &&
                  prev !== null &&
                  "animate-[heroSlideIn_ease-in-out_backwards] motion-reduce:animate-none",
                isPrev &&
                  "visible z-[3] animate-[heroSlideOut_ease-in-out_forwards] motion-reduce:animate-none",
                !isActive && !isPrev && "invisible",
              )}
            >
              {/* 16:9 kutu: görsel ve "Projeyi incele" konumu bu kutuya göre yüzde ile yerleşir */}
              <div
                className="relative"
                style={{
                  width: slide.fill ? "100cqw" : "min(100cqw, 100cqh * 16 / 9)",
                  ...(slide.fill
                    ? { height: "100cqh" }
                    : { aspectRatio: "16 / 9" }),
                }}
              >
                {seen.has(i) && (
                  <SlideImage
                    slug={slide.slug}
                    alt={t(`slides.${slide.slug}`)}
                    eager={i === 0}
                  />
                )}
                {slide.href && (
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    style={{
                      left: slide.ctaCss?.left ?? `${slide.cta.left}%`,
                      top: slide.ctaCss?.top ?? `${slide.cta.top}%`,
                    }}
                    className={cn(
                      "group absolute z-[3] inline-flex -translate-y-1/2 items-center gap-1.5 text-[0.8rem] font-medium md:text-[1rem] lg:text-[1.2rem]",
                      slide.cta.tone === "light" ? "text-white" : "text-black",
                    )}
                  >
                    <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
                      {t("cta")}
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          );
        })}

      </div>

      <div className="flex items-stretch border-t border-dark-bg/10 bg-off-white">
        <ul
          ref={listRef}
          className="relative m-0 flex min-w-0 flex-1 list-none snap-x snap-mandatory overflow-x-auto p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {heroSlides.map((slide, i) => {
            const isActive = i === active;
            return (
              <li
                key={slide.slug}
                className="flex min-w-[132px] flex-1 basis-0 snap-center border-r border-dark-bg/10 last:border-r-0 md:min-w-[150px]"
              >
                <button
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={t("goTo", { name: slide.name })}
                  aria-current={isActive}
                  className="group relative flex h-[68px] w-full items-center justify-center px-5 md:h-[84px] lg:px-8"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.logo}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className={cn(
                      "max-h-[34px] max-w-full object-contain transition-[opacity,filter] duration-500 md:max-h-[40px]",
                      isActive
                        ? "opacity-100 grayscale brightness-[0.45] contrast-125"
                        : "opacity-45 grayscale group-hover:opacity-80",
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-5 bottom-0 h-0.5 origin-left bg-dark-bg transition-transform duration-500 lg:inset-x-8",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label={t("next")}
          className="flex shrink-0 items-center border-l border-dark-bg/10 px-4 md:px-7"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dark-bg/70 text-dark-bg transition-colors duration-300 hover:bg-dark-bg hover:text-white">
            <ArrowRight size={18} aria-hidden="true" />
          </span>
        </button>
      </div>
    </section>
  );
}
