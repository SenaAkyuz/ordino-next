# Faz A4 — LanguageSwitcher component + Navbar entegrasyonu

A1-A3 tamam (next-intl kuruldu, slug mapping ve middleware aktif). Bu prompt: **TR/EN toggle UI'yi** kullanıcıya göster ve Navbar'ın i18n-aware davranmasını sağla.

## Kapsam

### 1. `components/layout/LanguageSwitcher.tsx`

Davranış:
- Mevcut sayfayı **aynı sayfada** koruyarak locale değiştirir. Yani `/hizmetler`'de iken EN'e tıklayınca `/en/services`'e gider (slug çevirisi otomatik, next-intl'in `useRouter` ve `usePathname` wrapper'ları sağlıyor).
- Aktif locale görsel olarak vurgulanır (kalın / underline / opacity 1; diğer locale soluk).
- Cookie persistence: `useRouter().replace(...)` next-intl'in `NEXT_LOCALE` cookie'sini otomatik yazıyor.

İskelet:
```tsx
'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: 'tr' | 'en') => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <button
        onClick={() => switchTo('tr')}
        className={locale === 'tr' ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-100'}
        aria-current={locale === 'tr' ? 'true' : undefined}
        disabled={isPending}
      >
        TR
      </button>
      <span className="opacity-30">|</span>
      <button
        onClick={() => switchTo('en')}
        className={locale === 'en' ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-100'}
        aria-current={locale === 'en' ? 'true' : undefined}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}
```

### 2. Navbar entegrasyonu (`components/layout/Navbar.tsx`)

- `LanguageSwitcher`'ı CTA button'unun yanına / önüne ekle (sağ üst).
- Switcher color, Navbar'ın adaptif renk kontrolüne uygun davranmalı (Navbar `forceDark` veya pixel-sampling ile rengi belirliyor — switcher de `currentColor` kullanarak miras alsın).
- Mevcut `usePathname()` kullanımlarını `@/i18n/navigation`'dan import edilen wrapper'a güncelle (bunlar TR-slug pathname döndürür; A3 sonrası tutarlı olur).
- Nav linklerini `next-intl`'in `<Link>` wrapper'ından geçir (mevcut `next/link` import'larını `@/i18n/navigation`'a değiştir). Böylece linkleri active locale'in slug'una otomatik mapler.
- `lib/data/nav.ts` href'leri sadece "kanonik TR" href'lerini taşımaya devam etsin (`/hizmetler`, `/calisma`, ...) — next-intl Link wrapper'ı bunları aktif locale'in slug'una çevirir.

### 3. Footer (`components/layout/Footer.tsx`)

- Footer linklerini de `@/i18n/navigation`'dan gelen `Link`'e geçir.
- Footer'da da LanguageSwitcher tekrar gösterilebilir (mobile UX için; opsiyonel).

### 4. `<html lang>` attribute

- A1'de `app/[locale]/layout.tsx` içinde `<html lang={locale}>` zaten kuruldu. Doğrula.
- Locale değiştiğinde Next.js full reload yapacak ve attribute güncellenecek.

### 5. SideFixed (`components/layout/SideFixed.tsx`)

- Mevcut `usePathname()` kullanımı `/platform` kontrolü için var. `@/i18n/navigation`'dan import edilen `usePathname`, locale-prefix'siz TR pathname döner (`/platform`), o yüzden mevcut comparison çalışmaya devam etmeli. Doğrula.

## Yapma

- ❌ Component'lerin TR string'lerini `useTranslations`'a çevirme — bu Faz B'nin işi.
- ❌ Data dosyalarına dokunma.
- ❌ Yeni route ekleme.

## Doğrulama checklist

- [ ] `/hizmetler`'de iken navbar'daki "EN" butonuna tıklayınca `/en/services`'e gidiyor; geri "TR" tıklayınca `/hizmetler`'e dönüyor.
- [ ] `/referanslar/aiata` → "EN" → `/en/case-studies/aiata` (dynamic segment korunuyor).
- [ ] Sayfa yenileme sonrası dil seçimi cookie'den geliyor.
- [ ] Aktif locale görsel olarak farklı; klavye navigasyonu ile butonlar erişilebilir.
- [ ] HTML lang attribute her iki sayfada doğru (`tr` / `en`).
- [ ] Navbar adaptif renk kontrolü hâlâ çalışıyor (dark hero'da beyaz logo, light section'da siyah).
- [ ] Build temiz, lint temiz.

## Faz A bittiğinde

- A1-A4 hepsi tamam → kullanıcı `/en` URL'lerine gidebiliyor, ama **EN sayfalar hâlâ TR string render ediyor** çünkü component'lerde t() çağrısı yok.
- Sıradaki adım **Faz B** (sayfa bazında t() entegrasyonu, sayfa-sayfa prompt).

## Referans

- next-intl Link/router: https://next-intl.dev/docs/routing/navigation
- Mevcut Navbar (adaptif renk): `components/layout/Navbar.tsx` — pixel sampling + luminance logic.
