// Mevcut 4 hardcoded blog yazisini (lib/data/news.ts + messages/{tr,en}.json)
// Sanity'ye aktarir. Slug ve gorunum korunur (gradient tasinir, coverImage yok).
//
// Kullanim:
//   node scripts/migrate-blog-to-sanity.mjs --dry-run   # yazmadan JSON bas
//   node scripts/migrate-blog-to-sanity.mjs             # createOrReplace ile yaz
//
// Gereken env (.env.local): NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
//   NEXT_PUBLIC_SANITY_API_VERSION, SANITY_API_WRITE_TOKEN (Editor yetkili, GECICI).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

loadEnv({ path: resolve(root, ".env.local") });

const DRY_RUN = process.argv.includes("--dry-run");

// --- Kaynaklar ---
const tr = JSON.parse(readFileSync(resolve(root, "messages/tr.json"), "utf8"));
const en = JSON.parse(readFileSync(resolve(root, "messages/en.json"), "utf8"));
const trPosts = tr.news.posts;
const enPosts = en.news.posts;
const placeholderText = tr.blog?.post?.placeholderText ?? "";

// lib/data/news.ts newsConfig ile birebir (slug -> kategori + gradient).
// Statik veri; migration tek seferlik oldugundan burada ayna tutuluyor.
const newsConfig = [
  {
    slug: "ai-reklam-optimizasyonu-2026",
    categoryKey: "ai",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 50%, #6e2da8 100%)",
  },
  {
    slug: "performans-marketing-rehberi",
    categoryKey: "digitalMarketing",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
  },
  {
    slug: "lokal-seo-2026",
    categoryKey: "seo",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "tiktok-algoritmasi-marka-stratejisi",
    categoryKey: "socialMedia",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 50%, #8b3a5a 100%)",
  },
];

// --- Tarih -> ISO (Adim 3 mantiginin aynasi) ---
const TR_MONTHS = {
  ocak: 0, şubat: 1, mart: 2, nisan: 3, mayıs: 4, haziran: 5,
  temmuz: 6, ağustos: 7, eylül: 8, ekim: 9, kasım: 10, aralık: 11,
};

function trDateToISO(trDate, enDate) {
  // Once TR "20 Nisan 2026" formatini dene.
  if (trDate) {
    const m = trDate
      .trim()
      .toLowerCase()
      .match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})$/);
    if (m && TR_MONTHS[m[2]] !== undefined) {
      // Ogle vakti (12:00Z) -> gun kaymasi olmasin.
      return new Date(
        Date.UTC(Number(m[3]), TR_MONTHS[m[2]], Number(m[1]), 12, 0, 0),
      ).toISOString();
    }
  }
  // Fallback: EN "April 20, 2026" native parse.
  if (enDate) {
    const t = Date.parse(enDate);
    if (!Number.isNaN(t)) return new Date(t).toISOString();
  }
  return new Date().toISOString();
}

// --- content -> Portable Text ---
// Bu 4 yazinin hicbirinde content yok (hepsi placeholder) -> body [].
// Ileride content'li yazi gelirse: duz metin paragraflara bolunur.
function contentToBlocks(content) {
  if (!content) return [];
  const text = String(content).trim();
  if (text === "" || text === placeholderText) return [];
  return text
    .split(/\n\s*\n/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => ({
      _type: "block",
      _key: randomUUID().slice(0, 8),
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: randomUUID().slice(0, 8), text: para, marks: [] }],
    }));
}

// --- Dokuman uret ---
function buildDoc(cfg) {
  const t = trPosts[cfg.slug] ?? {};
  const e = enPosts[cfg.slug] ?? {};
  return {
    _id: `post-${cfg.slug}`,
    _type: "post",
    // Ortak
    category: cfg.categoryKey,
    author: "Ordino", // shared alan; sema initialValue ile ayni, iki dilde de temiz
    publishedAt: trDateToISO(t.date, e.date),
    gradient: cfg.gradient, // coverImage yok -> gradient ile validation gecer
    // TR
    titleTr: t.title ?? "",
    slugTr: { _type: "slug", current: cfg.slug },
    excerptTr: t.excerpt ?? "",
    bodyTr: contentToBlocks(t.content),
    // EN
    titleEn: e.title ?? "",
    slugEn: { _type: "slug", current: cfg.slug },
    excerptEn: e.excerpt ?? "",
    bodyEn: contentToBlocks(e.content),
  };
}

const docs = newsConfig.map(buildDoc);

// Format dogrulama: ilk yazinin content dalini logla.
const first = newsConfig[0];
console.log(
  `[info] Ornek content (${first.slug}): TR=${JSON.stringify(
    trPosts[first.slug]?.content ?? "(yok -> placeholder -> body [])",
  )} | EN=${JSON.stringify(
    enPosts[first.slug]?.content ?? "(yok -> placeholder -> body [])",
  )}`,
);

if (DRY_RUN) {
  console.log("\n[dry-run] Uretilecek dokumanlar (Sanity'ye YAZILMADI):\n");
  console.log(JSON.stringify(docs, null, 2));
  console.log(`\n[dry-run] Toplam ${docs.length} dokuman. Yazmak icin --dry-run'siz calistir.`);
  process.exit(0);
}

// --- Yazma ---
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error("[hata] NEXT_PUBLIC_SANITY_PROJECT_ID / _DATASET eksik.");
  process.exit(1);
}
if (!token) {
  console.error(
    "[hata] SANITY_API_WRITE_TOKEN eksik. Sanity'de gecici Editor token olustur, .env.local'e ekle.",
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

for (const doc of docs) {
  await client.createOrReplace(doc);
  console.log(`✓ ${doc._id}`);
}

console.log(
  `\nTamam: ${docs.length} yazi yazildi. Studio'da kontrol et, gerekirse publish et.` +
    "\nGUVENLIK: SANITY_API_WRITE_TOKEN'i .env.local'den kaldir / Sanity'de rotate et.",
);
