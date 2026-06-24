"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { etkinlikImages } from "@/lib/data/etkinlikImages";

export function EtkinlikCoverflow() {
  const t = useTranslations("etkinlikGaleri");
  const [active, setActive] = useState(0);
  const total = etkinlikImages.length;
  const dragStartX = useRef<number | null>(null);
  const dragged = useRef(false);
  const wheelLock = useRef(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const go = (dir: number) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return 0;
      if (next > total - 1) return total - 1;
      return next;
    });
  };

  // Klavye okları — sadece galeri görünürken
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("keydown", onKey);
        } else {
          window.removeEventListener("keydown", onKey);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [total]);

  // Touchpad / mouse wheel — yatay kaydırma (deltaX) ile geçiş
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // sadece yatay niyet (dikey sayfa scroll'una karışma)
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (wheelLock.current || Math.abs(e.deltaX) < 15) return;
      wheelLock.current = true;
      go(e.deltaX > 0 ? 1 : -1);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 450);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [total]);

  // Pointer drag — hem mouse hem touch (sağa/sola sürükle)
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragged.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 8) dragged.current = true;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
    dragStartX.current = null;
  };

  return (
    <section className="overflow-hidden bg-white px-5 py-20 md:px-10 md:py-28 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mb-4 font-display text-3xl font-light leading-tight text-black md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base font-light leading-relaxed text-gray">
            {t("description")}
          </p>
        </div>

        {/* Coverflow stage */}
        <div
          ref={stageRef}
          className="relative flex h-[440px] touch-pan-y select-none items-center justify-center md:h-[640px]"
          style={{ perspective: "1800px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {etkinlikImages.map((img, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            // Görünür aralık: aktif ±2 kart
            if (abs > 2) return null;

            const isActive = offset === 0;
            const isLandscape = img.orientation === "landscape";
            const translateX = offset * 58; // % cinsinden yatay kayma (geniş yayılım)
            const rotateY = offset === 0 ? 0 : offset > 0 ? -42 : 42;
            const scale = isActive ? 1 : 0.82 - (abs - 1) * 0.08;
            const zIndex = 50 - abs;
            const opacity = 1 - abs * 0.18;

            return (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  if (dragged.current) return; // sürükleme tıklama sayılmasın
                  setActive(i);
                }}
                aria-label={`Görsel ${i + 1}`}
                className={`absolute overflow-hidden rounded-2xl bg-[#f2f0ec] shadow-2xl transition-all duration-500 ease-out ${
                  isLandscape
                    ? "aspect-[4/3] w-[300px] md:w-[560px]"
                    : "aspect-[3/4] w-[260px] md:w-[440px]"
                }`}
                style={{
                  transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Etkinlik ${i + 1}`}
                  loading={abs <= 1 ? "eager" : "lazy"}
                  className={`h-full w-full ${
                    isLandscape ? "object-contain" : "object-cover"
                  }`}
                  draggable={false}
                />
                {/* Yan kartları karart */}
                {!isActive && <div className="absolute inset-0 bg-black/30" />}
              </button>
            );
          })}
        </div>

        {/* Oklar + dots */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Önceki"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-black transition-all hover:border-accent hover:text-accent disabled:opacity-30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {etkinlikImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Görsel ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-accent"
                    : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            disabled={active === total - 1}
            aria-label="Sonraki"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-black transition-all hover:border-accent hover:text-accent disabled:opacity-30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
