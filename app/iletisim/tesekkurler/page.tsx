import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teşekkürler — Ordino",
  description: "Mesajınızı aldık. En kısa sürede dönüş yapacağız.",
};

export default function TesekkurlerPage() {
  return (
    <main
      data-theme="light"
      className="flex min-h-screen items-center justify-center bg-white px-5 py-[120px] md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[700px] text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-10 text-accent"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12.5l4.5 4.5L19 7"
            />
          </svg>
        </div>
        <p className="mb-4 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
          Mesajınız Alındı
        </p>
        <h1 className="mb-8 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-[1.2] tracking-[-0.5px] text-black [&_em]:italic [&_em]:font-normal">
          Teşekkürler — <em>en kısa sürede</em> dönüş yapacağız.
        </h1>
        <p className="mb-12 font-body text-base font-light leading-[1.7] text-[#666]">
          Mesajınızı başarıyla aldık. Ekibimiz brief&apos;inizi inceleyecek ve bir iş günü içinde size dönüş yapacaktır. Acil durumlarda{" "}
          <a
            href="tel:+905352946540"
            className="text-black underline transition-colors hover:text-accent"
          >
            +90 535 294 65 40
          </a>{" "}
          numaramızı arayabilirsiniz.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-block rounded-[10em] border border-black bg-black px-8 py-3 font-body text-[0.85rem] text-white transition-[background,color] duration-300 hover:bg-transparent hover:text-black"
          >
            Anasayfaya Dön
          </Link>
          <Link
            href="/calisma"
            className="inline-block rounded-[10em] border border-black bg-transparent px-8 py-3 font-body text-[0.85rem] text-black transition-[background,color] duration-300 hover:bg-black hover:text-white"
          >
            Çalışmalarımızı İncele
          </Link>
        </div>
      </div>
    </main>
  );
}
