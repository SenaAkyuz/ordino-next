// Turkce karakterleri sadelestirip URL-guvenli slug uretir.
export function trSlugify(input: string): string {
  const map: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ş: "s",
    Ş: "s",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    I: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ü: "u",
    Ü: "u",
  };
  return input
    .split("")
    .map((c) => map[c] ?? c)
    .join("")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 96);
}
