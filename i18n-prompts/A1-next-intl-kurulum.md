# Faz A1 — next-intl kurulumu + locale routing iskeleti

Bu prompt'un amacı: next-intl'i Next.js 16 + App Router projesine kurmak ve `app/[locale]/...` segment yapısını oluşturmak. **Slug çevirisi, middleware ve UI bu prompt'un kapsamı dışında** — onlar A3 ve A4'te ele alınacak.

## Kapsam (sadece bunlar)

1. `next-intl` paketini yükle (mevcut Next.js 16 ile uyumlu sürüm).
2. `next.config.ts`'i `createNextIntlPlugin` ile sar.
3. `i18n/` klasörü oluştur:
   - `i18n/routing.ts` — `defineRouting({ locales: ['tr', 'en'], defaultLocale: 'tr', localePrefix: 'as-needed' })` (slug `pathnames` config'i A3'te eklenecek, şimdilik boş).
   - `i18n/request.ts` — `getRequestConfig` ile aktif locale'in `messages/{locale}.json` dosyasını yükle.
   - `i18n/navigation.ts` — `createNavigation(routing)` (next-intl'in `Link`, `useRouter`, `redirect`, `usePathname` wrapper'ları).
4. Mevcut `app/` route'larını `app/[locale]/` altına taşı. Etkilenen sayfalar:
   - `app/page.tsx` → `app/[locale]/page.tsx`
   - `app/hakkimizda/page.tsx` → `app/[locale]/hakkimizda/page.tsx`
   - `app/hizmetler/page.tsx` → `app/[locale]/hizmetler/page.tsx`
   - `app/calisma/page.tsx` → `app/[locale]/calisma/page.tsx`
   - `app/referanslar/` (list + [slug]) → `app/[locale]/referanslar/...`
   - `app/platform/page.tsx` → `app/[locale]/platform/page.tsx`
   - `app/iletisim/page.tsx` + `tesekkurler/page.tsx` → `app/[locale]/iletisim/...`
   - `app/blog/...` → `app/[locale]/blog/...`
   - `app/gizlilik-politikasi/`, `cerez-politikasi/`, `kvkk/` → `app/[locale]/...`
   - `app/layout.tsx` → `app/[locale]/layout.tsx` (root layout artık locale-aware)
   - **API route'larını taşıma** (`app/api/*` locale'siz kalır).
   - `app/robots.ts` ve `app/sitemap.ts` taşıma; bunlar A3'te güncellenecek.
5. `app/[locale]/layout.tsx` içinde:
   - `params.locale`'i al, `setRequestLocale(locale)` çağır (static rendering için).
   - `<html lang={locale}>` dinamik yap.
   - `NextIntlClientProvider` ile children'ı sar (messages'ı `getMessages()` ile getir).
   - Mevcut Navbar/Footer/SideFixed/Cursor render'ı korunsun.
6. `app/[locale]/page.tsx` ve tüm sayfa component'lerinin `params: Promise<{locale: string}>` async parametresini alıp `setRequestLocale` çağırmasını sağla (Next 15+/16 async params pattern).
7. `next build` temiz geçmeli — TS hataları olmamalı. **Hardcoded TR metinler henüz değiştirilmeyecek**; sayfalar mevcut TR içerikle çalışmaya devam etsin (sadece routing iskeleti).

## Yapma

- ❌ Slug çevirisi (`pathnames` config) — A3'te.
- ❌ Middleware (`src/middleware.ts`) — A3'te.
- ❌ Component'lerde `useTranslations` çağrısı — Faz B'de.
- ❌ LanguageSwitcher UI — A4'te.
- ❌ `lib/data/*` data dosyalarını dokunma — Faz C'de.
- ❌ Mevcut hardcoded TR metinleri değiştirme.

## Doğrulama checklist

- [ ] `npx next build` temiz geçiyor, tüm route'lar `/tr/*` prefix'i olmadan da çalışıyor (defaultLocale TR, `localePrefix: 'as-needed'` olduğu için).
- [ ] `http://localhost:3000/` ve `http://localhost:3000/en` (henüz EN içerik yok ama sayfa açılıyor mu — fallback olarak TR string'leri render ediyorsa kabul).
- [ ] `messages/tr.json` ve `messages/en.json` request config tarafından doğru locale ile yükleniyor (debug log eklenebilir).
- [ ] HTML lang attribute TR'de `tr`, EN'de `en`.
- [ ] API route'ları (`/api/contact` vs.) hâlâ çalışıyor.

## Referans

- next-intl App Router setup: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
- Bu projenin mevcut yapısı: `app/`, route'lar genel (locale segment yok), Navbar `usePathname` ile adaptif renk kontrolü yapıyor — taşıma sırasında pathname comparison'ların `/[locale]/...` öneki ile uyumlu hale gelmesi gerekebilir; o ayarlamaları A4'te yapacağız, bu adımda sadece taşıma + build yeşil.
