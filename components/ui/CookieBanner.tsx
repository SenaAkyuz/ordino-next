"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_KEY = "ordino-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[2000] border-t border-white/10 bg-dark-bg/95 px-5 py-5 backdrop-blur-md md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start gap-4 text-white md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex-1">
          <p className="mb-2 font-display text-[1.1rem] font-normal">
            Çerezleri Yönetin
          </p>
          <p className="font-body text-[0.85rem] font-light leading-[1.6] text-white/75">
            Web sitemizde deneyiminizi iyileştirmek, performansı analiz etmek
            ve içerikleri kişiselleştirmek için çerezler kullanıyoruz. Detaylı
            bilgi için{" "}
            <Link
              href="/cerez-politikasi"
              className="text-accent underline hover:opacity-80"
            >
              Çerez Politikamızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex w-full gap-3 md:w-auto">
          <button
            type="button"
            onClick={handleReject}
            className="flex-1 rounded-[10em] border border-white/30 px-6 py-3 font-body text-[0.85rem] text-white transition-colors duration-300 hover:bg-white/10 md:flex-none"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 rounded-[10em] bg-accent px-6 py-3 font-body text-[0.85rem] text-white transition-opacity duration-300 hover:opacity-85 md:flex-none"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
