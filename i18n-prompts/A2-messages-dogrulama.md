# Faz A2 — Messages JSON yapısının doğrulanması + TypeScript tip güvenliği

`messages/tr.json` ve `messages/en.json` zaten oluşturuldu (Part 1+2+3 çevirileri, 728 leaf anahtar, TR/EN parity ✓). Bu prompt'un amacı sadece **doğrulama + tip altyapısı** kurmak. Yeni içerik üretmiyoruz.

## Kapsam

1. **Build-time parity testi yaz** (`scripts/check-messages-parity.ts` veya `tests/messages.test.ts`):
   - Her iki dosyayı parse et, tüm leaf path'leri çıkar.
   - TR ⊂ EN ve EN ⊂ TR olduğunu assert et.
   - `npm run build` öncesi otomatik çalışsın — `package.json` script'i: `"prebuild": "node scripts/check-messages-parity.mjs"` veya equivalent.
   - Eksik/fazla anahtar varsa hangileri olduğunu net bir error mesajıyla bas.

2. **next-intl tip güvenliği:**
   - `global.d.ts` (veya `i18n/types.d.ts`) içinde `Messages` tipini `messages/tr.json` shape'inden türet:
     ```ts
     type Messages = typeof import('../messages/tr.json');
     declare interface IntlMessages extends Messages {}
     ```
   - Bu sayede component'lerde `useTranslations('home.hero')` çağrısı autocomplete + tip kontrolüne girer.

3. **JSON formatı standardı** (zorunlu değil, takdire bırakıldı):
   - Mevcut yapı: tek `messages/tr.json` + tek `messages/en.json`, namespace'ler top-level (common, nav, footer, contact, ...).
   - **Alternatif:** namespace başına dosya (`messages/tr/common.json`, `messages/tr/nav.json`, ...). next-intl her iki yapıyı da destekliyor.
   - **Şimdilik tek dosya kalsın** — dosyalar 700+ anahtarla bile <50KB, splitting'in pratik faydası yok. Faz B'de gerekirse refactor edilir.

4. **Doğrulanması gerekenler:**
   - `messages/tr.json` valid JSON (ASCII karakterleri kaçışlamış, Türkçe karakterler intact).
   - `messages/en.json` valid JSON.
   - İki dosyadaki anahtar yapısı (leaf path'ler) birebir.
   - Hiçbir leaf değer boş string değil **hariç** bilinçli olarak boş bırakılanlar: `caseStudiesContent.{instyle,inspera}.titleTail`, `caseStudiesContent.aiata.{titleTail}` gibi 2-parçalı title'larda boş tail alanları.

## Yapma

- ❌ JSON içeriğine yeni anahtar ekleme (yukarıdaki dosyalar tamam).
- ❌ Slug mapping (A3) veya UI (A4) işine girme.
- ❌ Component'lerde `useTranslations` çağrısı (Faz B).

## Doğrulama checklist

- [ ] `node scripts/check-messages-parity.mjs` (veya eşdeğer) sıfır farkla geçiyor.
- [ ] `tsc --noEmit` temiz; `useTranslations('nonexistent.key')` deneyince TS hatası veriyor (tip alttayken).
- [ ] `prebuild` hook'u çalışıyor, eksik anahtar enjekte ederek test edildi (örn. `tr.json`'dan bir anahtar silinip build çalıştırılınca hata veriyor mu).

## Not

JSON dosyaları zaten hazır. Bu prompt'un asıl işi: **sapmaları erken yakalayan bir guard kurmak**, böylece Faz B'de t() çağrıları eklenirken eksik anahtar fark edilirse build kırılsın (production'a kırık çeviri gitmesin).
