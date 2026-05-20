# Faz A3 — Slug mapping + middleware (locale detection + redirect)

A1'de iskelet kuruldu (`app/[locale]/...`, `i18n/routing.ts`). Bu prompt: **slug çevirilerini** routing config'e tanımla ve **middleware'i** kur.

## TR ↔ EN slug eşleşmesi

next-intl `pathnames` config formatında (örnek):

```ts
// i18n/routing.ts
export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/hizmetler': { tr: '/hizmetler', en: '/services' },
    '/calisma': { tr: '/calisma', en: '/work' },
    '/referanslar': { tr: '/referanslar', en: '/case-studies' },
    '/referanslar/[slug]': { tr: '/referanslar/[slug]', en: '/case-studies/[slug]' },
    '/platform': '/platform',
    '/hakkimizda': { tr: '/hakkimizda', en: '/about' },
    '/iletisim': { tr: '/iletisim', en: '/contact' },
    '/iletisim/tesekkurler': { tr: '/iletisim/tesekkurler', en: '/contact/thank-you' },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/gizlilik-politikasi': { tr: '/gizlilik-politikasi', en: '/privacy-policy' },
    '/cerez-politikasi': { tr: '/cerez-politikasi', en: '/cookie-policy' },
    '/kvkk': '/kvkk',  // TR-spesifik, EN'de aynı slug kalıyor
  },
});
```

> **Önemli:** Klasör/file yapısı her zaman TR slug'larını taşır (`app/[locale]/hizmetler/page.tsx`). next-intl `pathnames` config bunu locale bazlı çıktı slug'una mapler. Yani fiziksel dosya **rename edilmiyor**, sadece URL rewrite yapılıyor.

## Kapsam

1. `i18n/routing.ts`'e yukarıdaki `pathnames` config'i ekle.
2. `i18n/navigation.ts` zaten `createNavigation(routing)` ile pathnames-aware Link/router üretiyor — değişiklik gerekmez ama doğrula.
3. **Middleware oluştur** — `src/middleware.ts` veya `middleware.ts` (proje root):
   ```ts
   import createMiddleware from 'next-intl/middleware';
   import {routing} from './i18n/routing';
   export default createMiddleware(routing);
   export const config = {
     matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
   };
   ```
   - `/api/*`, `/_next/*`, static asset'ler (favicon, .jpg, .webp, .svg, robots.txt, sitemap.xml) middleware'den hariç tutulur.
   - TR default ve `localePrefix: 'as-needed'` olduğu için TR sayfaları `/hizmetler` gibi prefix-siz, EN sayfaları `/en/services` olarak servis edilir.
4. **Locale detection davranışı:**
   - İlk ziyarette Accept-Language header'ından dil tahmini yap (next-intl default davranışı).
   - Kullanıcı dil seçtikten sonra `NEXT_LOCALE` cookie'sini set et (next-intl bunu otomatik yapıyor — A4'teki LanguageSwitcher'da `router.replace({}, {locale: 'en'})` çağrısı bu cookie'yi de güncelliyor).
5. **`app/robots.ts` ve `app/sitemap.ts` güncelle:**
   - Sitemap'te hem TR hem EN URL'leri listele.
   - Her URL için `alternates.languages` field'ı ekle (Google'a alternatif dil URL'lerini bildir).
   - Örnek:
     ```ts
     {
       url: 'https://theordino.com/hizmetler',
       alternates: {
         languages: {
           tr: 'https://theordino.com/hizmetler',
           en: 'https://theordino.com/en/services',
         },
       },
     }
     ```
6. **Eski URL → yeni URL redirect'i** (opsiyonel ama önerilir):
   - Bu adımda TR slug'ları değişmediği için redirect gerekmez. Sadece EN ziyaretçilerine yeni `/en/...` URL'leri verilecek.

## Yapma

- ❌ Component'lerde `useTranslations` çağrısı (Faz B).
- ❌ LanguageSwitcher UI'yi (A4).
- ❌ Mevcut TR string'lerini değiştirme (Faz B).
- ❌ Data file'larını locale-aware yapma (Faz C).

## Doğrulama checklist

- [ ] `/hizmetler` → 200, TR içerik render.
- [ ] `/en/services` → 200, EN içerik render (EN messages'tan beslenecek — Faz B sonrası).
- [ ] `/services` (TR slug değil) → 404 veya `/hizmetler`'e redirect.
- [ ] `/en/hizmetler` → 404 (TR slug EN locale ile olmaz, EN slug `/services` kullanılır).
- [ ] `Accept-Language: en-US` header'ı ile yeni ziyaretçi `/en/...`'a yönlendiriliyor.
- [ ] `Accept-Language: tr-TR` header'ı ile TR'de kalıyor.
- [ ] `/sitemap.xml` ve `/robots.txt` middleware'den etkilenmiyor, doğru servis ediliyor.
- [ ] Sitemap içinde her sayfa için 2 URL (TR + EN) + alternates.languages var.
- [ ] `<link rel="alternate" hreflang="tr">` ve `hreflang="en"` head'de görünüyor (next-intl bunu otomatik yapıyor mu kontrol et; yapmıyorsa `app/[locale]/layout.tsx` içinde manuel ekle).

## Referans

- next-intl pathnames: https://next-intl.dev/docs/routing/pathnames
- next-intl middleware: https://next-intl.dev/docs/routing/middleware
- Mevcut sitemap: `app/sitemap.ts` (şu an 13 statik route; multi-locale olunca ~26 route olacak).
