#!/usr/bin/env node
// TR/EN messages parity guard — prebuild hook olarak çalışır.
// Eksik veya fazla leaf-key varsa build'i kırar.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = resolve(__dirname, "..", "messages");

const locales = ["tr", "en"];
const data = Object.fromEntries(
  locales.map((l) => [
    l,
    JSON.parse(readFileSync(resolve(messagesDir, `${l}.json`), "utf8")),
  ]),
);

/** Tüm leaf path'leri ('a.b.c' veya 'a.b[]') çıkar. */
function leafPaths(obj, prefix = "") {
  if (obj === null) return [prefix];
  if (Array.isArray(obj)) return [`${prefix}[]`];
  if (typeof obj !== "object") return [prefix];
  return Object.entries(obj).flatMap(([k, v]) =>
    leafPaths(v, prefix ? `${prefix}.${k}` : k),
  );
}

const sets = Object.fromEntries(
  locales.map((l) => [l, new Set(leafPaths(data[l]))]),
);

const trKeys = sets.tr;
const enKeys = sets.en;

const missingInEn = [...trKeys].filter((k) => !enKeys.has(k)).sort();
const missingInTr = [...enKeys].filter((k) => !trKeys.has(k)).sort();

if (missingInEn.length === 0 && missingInTr.length === 0) {
  console.log(
    `✓ messages parity OK — ${trKeys.size} keys, TR ⇔ EN matched.`,
  );
  process.exit(0);
}

console.error("\n✗ messages parity FAILED\n");
if (missingInEn.length > 0) {
  console.error(`  ${missingInEn.length} key(s) present in tr.json but missing in en.json:`);
  for (const k of missingInEn) console.error(`    - ${k}`);
}
if (missingInTr.length > 0) {
  console.error(`  ${missingInTr.length} key(s) present in en.json but missing in tr.json:`);
  for (const k of missingInTr) console.error(`    - ${k}`);
}
console.error("");
process.exit(1);
