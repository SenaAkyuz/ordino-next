"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const channels = ["TikTok", "Meta", "Google", "LinkedIn"];

// TODO: video eklenecek (örn. "/video/platform-demo.mp4")
const DEMO_VIDEO_SRC = "";

export function PlatformHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  return (
    <section
      data-theme="dark"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark-bg-2 px-5 pt-[140px] pb-[80px] md:px-10 md:pt-[180px] md:pb-[120px] lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute left-[-80px] top-[-120px] h-[560px] w-[560px] rounded-full opacity-35 blur-[110px] motion-safe:animate-[orbDrift_22s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, rgba(178,143,108,0.55) 0%, rgba(178,143,108,0) 70%)",
          }}
        />
        <div
          className="absolute bottom-[-180px] right-[-120px] h-[640px] w-[640px] rounded-full opacity-35 blur-[110px] motion-safe:animate-[orbDrift_22s_ease-in-out_infinite] [animation-delay:-7s]"
          style={{
            background:
              "radial-gradient(circle, rgba(110,90,180,0.32) 0%, rgba(110,90,180,0) 70%)",
          }}
        />
        <div
          className="absolute left-[55%] top-[40%] h-[420px] w-[420px] rounded-full opacity-35 blur-[110px] motion-safe:animate-[orbDrift_22s_ease-in-out_infinite] [animation-delay:-14s]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0) 70%)",
          }}
        />
        <Sparkle top="18%" left="12%" />
        <Sparkle top="28%" right="18%" size={3} delay="-0.8s" />
        <Sparkle top="62%" left="22%" delay="-1.6s" />
        <Sparkle top="75%" right="25%" size={3} delay="-2.4s" />
        <Sparkle top="40%" left="48%" size={2} delay="-3s" gold />
        <Sparkle top="85%" left="60%" delay="-3.6s" />
        <Sparkle top="12%" right="35%" size={2} delay="-2s" />
      </div>

      <div className="relative z-[2] mx-auto max-w-[980px] text-center">
        <Reveal>
          <div className="mb-[50px] inline-flex items-center gap-[10px] rounded-[10em] border border-white/[0.18] bg-white/[0.04] px-5 py-[9px] font-body text-[0.78rem] uppercase tracking-[1.5px] text-white/[0.88] backdrop-blur-sm">
            <span
              className="h-[7px] w-[7px] rounded-full bg-accent [box-shadow:0_0_10px_rgba(178,143,108,0.8)] motion-safe:animate-[chipPulse_2.2s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <span>Şimdi Erken Erişim&apos;de</span>
          </div>
        </Reveal>
        <Reveal>
          <h1 className="mb-10 font-display text-[clamp(3rem,8vw,7rem)] font-light leading-none tracking-[-2.5px] text-white">
            Tüm Reklamlarınız.
            <br />
            <em className="bg-gradient-to-br from-[#d4a574] via-[#b28f6c] to-[#9b7a5a] bg-clip-text font-normal italic text-transparent">
              ORDINO.AI
            </em>
          </h1>
        </Reveal>
        <Reveal>
          <p className="mx-auto mb-[50px] max-w-[620px] font-body text-[clamp(1rem,1.3vw,1.15rem)] font-light leading-[1.65] text-white/65">
            Tek bir AI destekli komuta merkezinden TikTok, Meta, Google ve daha fazlasında kampanyalarınızı oluşturun, yönetin ve optimize edin.
          </p>
        </Reveal>
        <Reveal>
          <div className="mb-[60px] flex flex-wrap justify-center gap-[14px]">
            <Link
              href="/iletisim#contact-form"
              className="inline-flex items-center gap-[10px] rounded-[10em] border border-white bg-white px-9 py-[15px] font-body text-[0.88rem] font-normal text-black transition-all duration-[400ms] hover:-translate-y-[1px] hover:border-accent hover:bg-accent hover:text-white"
            >
              Ücretsiz Deneme Başlat
            </Link>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex cursor-pointer items-center gap-[10px] rounded-[10em] border border-white/30 bg-transparent px-9 py-[15px] font-body text-[0.88rem] font-normal text-white transition-all duration-[400ms] hover:border-white/50 hover:bg-white/[0.08]"
            >
              <span
                className="mr-[2px] inline-block h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current"
                aria-hidden="true"
              />
              Demo İzle
            </button>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-[22px] font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/40">
            {channels.map((c, i) => (
              <span key={c} className="flex items-center gap-[22px]">
                {c}
                {i < channels.length - 1 && (
                  <span className="tracking-normal text-white/25">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Demo video"
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-[1500] flex items-center justify-center bg-black/85 px-5 backdrop-blur-sm md:px-10"
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Kapat"
            className="absolute right-5 top-5 z-[10] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.12] md:right-8 md:top-8"
          >
            <span className="text-[1.4rem] leading-none">×</span>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px]"
          >
            {DEMO_VIDEO_SRC ? (
              <video
                src={DEMO_VIDEO_SRC}
                controls
                autoPlay
                className="aspect-video w-full rounded-[8px] bg-black"
              />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-[8px] border border-white/10 bg-dark-bg-2 text-center">
                <p className="px-6 font-body text-[0.95rem] font-light text-white/55">
                  Demo videosu yakında eklenecek.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function Sparkle({
  top,
  left,
  right,
  size = 4,
  delay = "0s",
  gold = false,
}: {
  top?: string;
  left?: string;
  right?: string;
  size?: 2 | 3 | 4;
  delay?: string;
  gold?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute rounded-full motion-safe:animate-[sparkleFlicker_4s_ease-in-out_infinite]"
      style={{
        top,
        left,
        right,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: delay,
        background: gold ? "rgba(212,165,116,0.8)" : "rgba(255,255,255,0.7)",
        boxShadow: gold
          ? "0 0 8px rgba(212,165,116,0.6)"
          : "0 0 8px rgba(255,255,255,0.6)",
      }}
    />
  );
}
