# Ordino — Next.js Migration Bible

> **Bu belge neyin nesi?**
> Elimdeki statik HTML/CSS site'ı (8 sayfa, Ordino dijital reklam ajansı) Next.js'e taşıyorum. Bu belge, **sen (Claude Code)** ve **ben (Junior developer)** için ortak kılavuz — projenin tasarım dilini, mimari kararlarını, sıralı adımlarını içerir. **Bu belgeye sadakatle bağlı kal** — rastgele tasarım kararları verme, her şey aşağıda yazılı.

---

## 🎯 Proje özeti

**Marka:** Ordino — İstanbul Şişli merkezli, AI destekli reklam zekâsı platformu + dijital reklam ajansı. 2021'den beri, 230+ marka, $180M+ reklam bütçesi yönetilmiş.

**Tasarım dili:**
- Editorial / premium / sakin — referans: VMGROUPE.com
- Siyah-beyaz ağırlıklı, **krem arkaplan** (#f7f6f3) ve **warm accent** (#b28f6c) ile zenginleştirilmiş
- Serif Cormorant Garamond başlıklar + Jost/Inter sans-serif metin
- Çok nefesli, büyük tipografi, ince çizgi ayırıcılar, düşük kontrast

**Sayfalar (8 adet):**
1. `index.html` → `/` — ana sayfa, en büyük ve çeşitli
2. `work.html` → `/work` — portfolyo
3. `case-studies.html` → `/case-studies` — detaylı vaka çalışmaları
4. `services.html` → `/services` — hizmetler
5. `platform.html` → `/platform` — **"Ordino AI" ürün sayfası (tamamen koyu arkaplanlı)**
6. `about.html` → `/about` — hakkında, ekip
7. `contact.html` → `/contact` — iletişim + form
8. `news.html` → `/news` — blog/içgörüler

---

## 🛠 Teknoloji stack'i — seçimleri gerekçeleriyle

| Kategori | Seçim | Neden |
|---|---|---|
| **Framework** | Next.js 15+ | App Router, React Server Components, yerleşik video/image desteği |
| **Dil** | TypeScript | Tip güvenliği, IDE desteği, refactor kolaylığı. Junior için başta garip ama standart |
| **Styling** | **Tailwind CSS v4** | Mevcut CSS patterni utility-first'e iyi uyuyor, prod'da çok küçük CSS bundle |
| **Component kütüphanesi** | **shadcn/ui** (opsiyonel) | Sadece form öğeleri için (contact page) — çoğu her şey custom |
| **Animasyon** | **Framer Motion** | `.reveal` scroll animasyonları için — mevcut IntersectionObserver'ı değiştirir |
| **İkon** | **Lucide React** | Temiz, modern, mevcut SVG ikonların yerine |
| **Font** | **next/font/google** | Cormorant Garamond + Jost otomatik optimize edilir |
| **Resim** | **next/image** | Lazy-load, WebP dönüşüm, responsive srcset otomatik |
| **Video (ileride)** | **next/video** + Mux | Büyük videolar için streaming. Şimdilik `<video>` tag'i yeterli |
| **Linter/formatter** | ESLint + Prettier | `create-next-app` otomatik kurar |
| **Deployment** | Vercel | Next.js için doğal ev, ücretsiz tier yeterli |

---

## 🎨 Tasarım sistemi — değerler

Mevcut `styles.css`'teki `:root` değişkenlerini **Tailwind config'e** taşıyoruz:

### Renkler
```js
// tailwind.config.ts içinde extend.colors
colors: {
  black: '#000000',
  'dark-bg': '#101213',       // koyu section'lar
  'dark-bg-2': '#0a0b0c',     // hero + platform tamamı
  white: '#ffffff',
  'off-white': '#f7f6f3',     // krem açık section'lar
  gray: '#8a8a8a',
  'gray-dark': '#4a4d50',
  'light-bg': '#f5f5f5',
  accent: '#b28f6c',          // warm gold — tek vurgu rengi
  'accent-light': '#d4a574',  // gradient için
}
```

### Tipografi
```js
fontFamily: {
  display: ['var(--font-cormorant)', 'Georgia', 'serif'],
  body: ['var(--font-jost)', 'Inter', 'system-ui', 'sans-serif'],
}
```

**Kural:** `<h1>`, `<h2>`, `<h3>`'ler **daima display (Cormorant serif)**, `font-weight: 300` veya `400`. İçindeki `<em>` her zaman italic + weight 400. Bu projenin imza stili.

### Tipografi boyutları (mevcut CSS'ten direkt)
- Hero H1: `clamp(3rem, 7vw, 6.5rem)` — Tailwind'de: `text-[clamp(3rem,7vw,6.5rem)]` veya özel utility
- Section H2: `clamp(2.2rem, 4vw, 4rem)`
- Eyebrow: `0.72rem, letter-spacing: 4px, uppercase, color: gray`

### Tekrarlayan pattern: "eyebrow + başlık"
```html
<p class="eyebrow">The Power of AI</p>
<h2 class="section-title">Performance Marketing <em>Worthy of Your Brand.</em></h2>
```
→ Component'e alıyoruz: `<SectionHeader eyebrow="..." title="..." emphasis="..." />`

---

## 🏗 Component mimarisi — hangi component'ler var, neye dönecek

### Global (her sayfada)
| HTML'deki yapı | Component | Konum |
|---|---|---|
| `<nav id="navbar">` | `<Navbar />` | `components/layout/Navbar.tsx` |
| `<footer>` | `<Footer />` | `components/layout/Footer.tsx` |
| `<div class="side-left">` + `<div class="side-right">` | `<SideFixed />` | `components/layout/SideFixed.tsx` |
| Custom cursor (script.js) | `<CustomCursor />` | `components/ui/CustomCursor.tsx` (client-only) |

### UI primitives
| Amaç | Component |
|---|---|
| Eyebrow + başlık tekrarı | `<SectionHeader />` |
| `<em>` italic vurgulu başlık | Helper — `<EditorialHeading>` veya sadece `<em>` JSX'inde |
| Scroll-reveal wrapper | `<Reveal>` (Framer Motion ile) |
| Sayaç animasyonu (5 → 5, 230 → 230+) | `<AnimatedNumber target="230+" />` |
| Portfolio kartı | `<PortfolioCard image={...} label="..." />` |
| News kartı | `<NewsCard date meta title excerpt thumb />` |
| Team üyesi | `<TeamMember name role initials gradient />` |
| Client logo | `<ClientLogo name src />` |
| Service blok | `<ServiceBlock title items={[]} />` |

### Section component'leri (sayfa bazlı)
Her sayfadaki her `<section>` kendi component'i olur. Örnek:
- `components/sections/Hero.tsx` (index)
- `components/sections/FullVideo.tsx` (index'te iki kere kullanılıyor)
- `components/sections/HorizontalScroll.tsx` (index)
- `components/sections/ClientsShowcase.tsx` (index)
- `components/sections/HowWeWork.tsx` (index + about'ta)
- `components/sections/PowerOf.tsx` (index)
- `components/sections/ColorBlock.tsx` (index'te iki varyant: purple, tan)
- `components/sections/FullBleed.tsx` (index'te iki kere)
- `components/sections/DualGrid.tsx` (index)
- `components/sections/ServicesGrid.tsx` (index)
- `components/sections/Cta.tsx` (her sayfada)

Benzer şekilde work, about, platform sayfaları için kendi section component'leri.

---

## 🗄 Data mimarisi — content nasıl saklanacak

Tüm içerikler `lib/data.ts` (veya klasörleşmiş birkaç dosya) içinde **type-safe objeler** olarak durur. HTML'de hard-coded metin olmayacak.

### Örnek: `lib/data/clients.ts`
```ts
export type Client = {
  name: string;
  slug: string;
  logo: string;  // public klasörüne göre path
  alt: string;
};

export const clients: Client[] = [
  { name: 'Turkish Airlines', slug: 'turkish-airlines', logo: '/clients/turkish-airlines.png', alt: 'Turkish Airlines' },
  { name: 'AIATA', slug: 'aiata', logo: '/clients/aiata.png', alt: 'AIATA' },
  // ...
];
```

### Örnek: `lib/data/team.ts`
```ts
export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  gradient: string;   // CSS gradient string
  linkedin?: string;
  email?: string;
  isFounder?: boolean;
};

export const team: TeamMember[] = [
  { name: 'Oğuz Özbenli', role: 'Founder & CEO — Business Development & Marketing', initials: 'OÖ', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)', isFounder: true, email: 'oguz@theordino.com', linkedin: 'https://linkedin.com' },
  { name: 'Uğur Özbenli', role: 'Director · Ordino Medya', initials: 'UÖ', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2c3e50 100%)' },
  // ...
];
```

Benzer şekilde:
- `lib/data/portfolio.ts` — projeler, kategorileriyle
- `lib/data/services.ts` — hizmet başlıkları ve alt öğeleri
- `lib/data/news.ts` — blog post'ları
- `lib/data/caseStudies.ts` — vaka çalışmaları
- `lib/data/platformFeatures.ts` — platform sayfası 6 kartı
- `lib/data/nav.ts` — nav linkleri tek yerde
- `lib/data/site.ts` — site geneli (footer text, email, telefon, adres)

---

## 📐 "İçerik esnekliği" kuralı (çok önemli)

> Müşteri, "içerik daha sonra gelecek" dedi. Tasarım, **metin uzunluğu değişse, resim oranı farklı olsa, boş/çok dolu içerik olsa** **asla bozulmamalı**.

### Uygulanacak 4 teknik

**1. Resim/video alanları — aspect-ratio + object-fit**
```tsx
<div className="aspect-video w-full overflow-hidden">
  <Image src={...} alt={...} fill className="object-cover" />
</div>
```
Her kart, her portfolio öğesi, her video slotu sabit oran tutar. İçerik değişse de yükseklik sabit.

**2. Metin başlıkları — line-clamp**
```tsx
<h3 className="line-clamp-2">
  {project.title}
</h3>
<p className="line-clamp-3 text-sm">
  {project.description}
</p>
```
Başlık 2 satırdan, açıklama 3 satırdan fazlaysa `...` ile kesilir. Kartlar hizalı kalır.

**3. Fallback image / video placeholder**
İçerik eklenmediğinde nasıl görünecek, tasarım yine oturmalı. Placeholder gradient'leri şimdiden var, koruyoruz (bir `<Placeholder />` component'i yap).

**4. CSS `min-height` ve `min-width`** — boş array map olunca çökmesin
```tsx
{news.length > 0 ? (
  news.map(item => <NewsCard key={item.slug} {...item} />)
) : (
  <EmptyState message="Yakında yeni yazılar..." />
)}
```

---

## 🎬 Özel animasyonlar ve davranışlar — script.js'den taşıma

### 1. Adaptif nav (en kritik parça)
Mevcut `script.js` nav altındaki pixel'i örnekleyip nav rengini ayarlıyor. Next.js'de:
- **`'use client'`** component içinde aynı logic
- `useEffect` ile scroll/resize event listener
- `requestAnimationFrame` throttle
- Client-side olduğu için SSR'da nav siyah başlar, hydration sonrası doğru rengi alır

**Dosya:** `components/layout/AdaptiveNav.tsx`

### 2. Reveal animasyonları
Mevcut `.reveal` class'ı, scroll into view olunca `.visible` ekliyor. Next.js'de:
- **Framer Motion** `whileInView` kullanıyoruz
- Bir `<Reveal>` wrapper component yazıyoruz:
```tsx
<Reveal delay={0.1}>
  <h2>Some headline</h2>
</Reveal>
```
- Opacity 0 → 1, y: 20 → 0, 0.6s duration

### 3. Sayaç animasyonu
`<AnimatedNumber>` component — `useInView` + `useMotionValue` + requestAnimationFrame. Sayı "230+" olsa bile suffix'i koruyarak sayar.

### 4. Custom cursor
Mevcut mantığı aynen taşıyalım — sadece desktop'ta, hover: fine && pointer: hover media query ile. `<CustomCursor />` component olarak client-only. `useEffect`'te DOM'a ring + dot ekler.

### 5. Smooth anchor scroll
Next.js 13+'te `scroll-behavior: smooth` globalCSS'te + app router'ın Link component'i zaten halleder. Custom JS gerekmez.

### 6. Hamburger menu
Mobile nav overlay — `useState` + Framer Motion animation. Route değişince otomatik kapanır (`usePathname` watch).

---

## 📂 Klasör yapısı — Next.js App Router'a göre

```
ordino-next/
├── app/
│   ├── layout.tsx              # Root layout (html/body/fontlar/metadata)
│   ├── globals.css             # Tailwind direktifleri + custom global stiller
│   ├── page.tsx                # Ana sayfa (/)
│   ├── work/
│   │   └── page.tsx            # /work
│   ├── case-studies/
│   │   └── page.tsx            # /case-studies
│   ├── services/
│   │   └── page.tsx            # /services
│   ├── platform/
│   │   └── page.tsx            # /platform (dark theme)
│   ├── about/
│   │   └── page.tsx            # /about
│   ├── contact/
│   │   └── page.tsx            # /contact
│   └── news/
│       └── page.tsx            # /news
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Adaptif nav
│   │   ├── Footer.tsx
│   │   ├── SideFixed.tsx       # Sol-sağ kenar link'leri
│   │   └── AdaptiveNavLogic.tsx # Client-only renk değiştirici
│   │
│   ├── ui/
│   │   ├── SectionHeader.tsx   # Eyebrow + title pattern
│   │   ├── Reveal.tsx          # Framer motion wrapper
│   │   ├── AnimatedNumber.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Button.tsx          # btn-primary / btn-secondary / cta-btn
│   │   └── Placeholder.tsx     # Gradient placeholder image
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── FullVideo.tsx
│       ├── HorizontalScroll.tsx
│       ├── ClientsShowcase.tsx
│       ├── ColorBlock.tsx      # Purple + Tan varyant
│       ├── PowerOf.tsx
│       ├── HowWeWork.tsx
│       ├── PushForward.tsx
│       ├── FullBleed.tsx
│       ├── DualGrid.tsx
│       ├── ServicesGrid.tsx
│       ├── Cta.tsx
│       ├── TeamGrid.tsx
│       ├── Leadership.tsx
│       ├── StudioGallery.tsx   # About sayfası 3'lü
│       ├── ContactForm.tsx
│       ├── WhereWeWork.tsx     # Contact sayfa dark block
│       ├── PlatformHero.tsx
│       ├── PlatformFeatures.tsx
│       ├── AIEngine.tsx
│       ├── PlatformResults.tsx
│       └── NewsGrid.tsx
│
├── lib/
│   ├── data/
│   │   ├── site.ts
│   │   ├── nav.ts
│   │   ├── clients.ts
│   │   ├── team.ts
│   │   ├── portfolio.ts
│   │   ├── services.ts
│   │   ├── caseStudies.ts
│   │   ├── news.ts
│   │   └── platformFeatures.ts
│   │
│   └── utils.ts                # cn() helper (Tailwind class merging)
│
├── public/
│   ├── clients/                # 9 logo PNG
│   ├── video/
│   │   └── work-reel.mp4
│   ├── team/                   # ekip fotoğrafları (gelecek)
│   └── favicon.ico
│
├── .eslintrc.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📝 Adım adım migration planı — 8 aşama

Her aşama ayrı bir milestone. Tamamlanınca git commit at, sonraki aşamaya geç.

### Aşama 0: Proje kurulumu (30 dk)
1. `npx create-next-app@latest ordino-next --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*"` — **tüm cevaplar "Yes", src-dir "No"**
2. VS Code'da aç
3. `npm install framer-motion lucide-react clsx tailwind-merge`
4. `lib/utils.ts` oluştur (cn helper)
5. `tailwind.config.ts`'i yukarıdaki renk/font paletine göre güncelle
6. `app/globals.css`'e Tailwind direktiflerini kur + custom CSS variables ekle
7. `app/layout.tsx`'te `next/font/google`'dan Cormorant + Jost yükle
8. `npm run dev` → `http://localhost:3000` açılıyor, temiz beyaz sayfa ✅
9. `git init`, `git add .`, `git commit -m "Initial Next.js setup"`

**Çıktı:** Boş Next.js projesi, çalışıyor.

### Aşama 1: Temel layout + navbar + footer (1-2 saat)
1. `components/layout/Navbar.tsx` — responsive nav, mobile hamburger, henüz adaptif **değil**
2. `components/layout/Footer.tsx` — footer-top grid + footer-bottom
3. `components/layout/SideFixed.tsx` — sol-sağ fixed email/sosyal medya linkleri
4. `lib/data/nav.ts` + `lib/data/site.ts` — nav linkleri + footer/site bilgileri
5. `app/layout.tsx`'e Navbar, Footer, SideFixed yerleştir
6. `app/page.tsx`'te geçici olarak "Home" yazsın — nav + footer görünsün

**Çıktı:** Her sayfada nav + footer + side-fixed gözüküyor. İçerik henüz yok.

### Aşama 2: UI primitives (1 saat)
1. `components/ui/Reveal.tsx` — Framer Motion ile scroll-into-view animation
2. `components/ui/SectionHeader.tsx` — eyebrow + title + description + emphasis
3. `components/ui/AnimatedNumber.tsx` — sayaç
4. `components/ui/Button.tsx` — 3 varyant (primary, secondary, cta)
5. `components/ui/Placeholder.tsx` — gradient placeholder

**Çıktı:** Lego parçaları hazır, sayfalarda kullanmaya hazır.

### Aşama 3: Ana sayfa (2-3 saat)
`app/page.tsx`'i tamamen inşa et. Sırayla:
- Hero section
- 2x FullVideo (GoBritanya + AIATA)
- HorizontalScroll (7 proje)
- ClientsShowcase (9 logo, mevcut assets'i `public/clients/` altına taşıyoruz)
- LatestWorks (9 kart grid)
- FullBleed (AIATA)
- DualGrid (Yuva Maya + Turkish Technic)
- HowWeWork (dark section, stats ile)
- PushForward (açık section)
- PowerOf (warm accent)
- ColorBlock x2 (purple + tan)
- FullBleed (Turizm Bakanlığı)
- ServicesGrid (6 blok)
- Cta

**Çıktı:** Ana sayfa tamamen aynı görünür, ama artık React.

### Aşama 4: Adaptif nav (30 dk)
1. `components/layout/AdaptiveNavLogic.tsx` — client component, pixel sampling
2. Navbar'a bağla
3. `body.dark-page` class'ı yerine → dark page sayfalarda (platform) manual prop

**Çıktı:** Nav her sayfada arkaplanına göre siyah/beyaz oluyor.

### Aşama 5: Diğer sayfalar (her biri 1-2 saat)
Sırayla:
1. **About** — editorial hero + showreel + studio gallery + how + push + leadership + team + cta
2. **Services** — reel + what-we-do + 6-card grid + detaylı servis blokları + power + cta
3. **Work** — editorial hero + portfolio rows + latest works + analytics + cta
4. **Contact** — hero image + where-we-work + contact form + power + cta
5. **Platform** — dark theme, hero + product + features + engine + results + final CTA
6. **News** — page hero + news grid + power + cta
7. **Case Studies** — (en karmaşık olanı, en sona bırak)

**Her sayfa için rutin:**
- İlgili section component'lerini yaz (veya yeniden kullan)
- Data'yı `lib/data/`'dan çek
- İçeriği içerik esnekliği kurallarına uyarak ayarla
- Mobile + tablet + desktop'ta test et
- Commit

### Aşama 6: Mikro-etkileşimler ve animasyonlar (1 saat)
1. `components/ui/CustomCursor.tsx`
2. Smooth scroll anchor links (CSS + Link behavior)
3. Form validation (contact page)
4. Mobile hamburger animation polish

**Çıktı:** Tüm etkileşimler tamam.

### Aşama 7: Assets + SEO + production hazırlık (1 saat)
1. Tüm `assets/clients/*.png` → `public/clients/`'a taşı
2. `assets/video/work-reel.mp4` → `public/video/`'ya taşı (veya Mux'a yükle)
3. `app/layout.tsx`'te Metadata API ile title, description, OG tags
4. Her sayfa için `metadata` export
5. `next/image` ile tüm resimleri optimize
6. Lighthouse skorlarını kontrol (Performance, SEO, Accessibility > 90)


## 🆕 Aşama 7.5: Sanity CMS Entegrasyonu

### Amaç
Site'nin tüm içeriğini (yazılar, görseller, videolar, ekip, portfolyo, blog) admin rolündeki takım üyelerinin koddan değil **Sanity Studio admin paneli**'nden yönetebilmesini sağlamak. SEO meta etiketleri dahil her şey panel üzerinden değişecek.

### Mevcut Sanity durumu
- Mevcut Sanity hesabı var, eski bir projeden kalan organization aktif
- Bu organization içinde Ordino için **yeni bir proje** açılacak (yeni hesap/organization gerekmiyor)
- Şu anki kullanıcı (proje sahibi) organization'da admin rolünde
- Site içeriğini yönetecek olan: **takımdaki diğer admin rolündeki üyeler** (müşteri DEĞİL)
- Müşteri panel'e erişmeyecek — bu önemli kısıt: panel UX'i admin/teknik kullanıcı seviyesinde olabilir, çok süslemeye gerek yok

### Yaklaşım
- **Sanity Cloud** kullanılacak (self-hosted değil) — ücretsiz tier yeterli
- **Mevcut organization** içinde yeni proje: "Ordino" adıyla
- **Sanity Studio** mevcut Next.js projesinin içine `app/studio/[[...tool]]/page.tsx` route'u olarak entegre edilecek (embedded mode)
- Admin'ler `theordino.com/studio` adresinden Sanity hesaplarıyla login olup içerik yönetecek
- Veri kaynağı `lib/data/*.ts` dosyalarından Sanity GROQ sorgularına geçecek
- Component'lerin yapısı değişmeyecek, sadece veri kaynakları değişecek

### Yönetilecek schema'lar (12 adet)
1. **siteSettings** — email, telefon, adres, sosyal linkler, footer metin
2. **navigation** — nav linkleri (sayfa adı + slug)
3. **homeSections** — ana sayfanın her section'ının başlık/altyazı/CTA metni
4. **portfolio** — projeler (başlık, kategori, image, video URL, açıklama, slug)
5. **caseStudy** — vaka çalışmaları (başlık, client, hero image, içerik, istatistikler, alıntılar)
6. **service** — hizmet blokları (başlık, alt başlıklar, ikon, sıralama)
7. **teamMember** — ekip üyeleri (isim, pozisyon, foto, bio, sosyal, founder mı, sıralama)
8. **client** — client logoları (isim, logo image, sıralama)
9. **newsPost** — blog/news yazıları (başlık, kategori, tarih, kapak, body, slug)
10. **platformFeature** — platform sayfası 6 kartı + AI engine 4 adımı + sonuç sayıları
11. **page** — her sayfanın SEO metadata'sı (title, description, OG image, slug)
12. **mediaAsset** — site genelinde kullanılan video/image referansları

### Kurulum stratejisi — KRİTİK
**Sanity'i tek başına kur, test et, siteyi canlıya al, en sonda manuel olarak takım üyelerini davet et.**

Sebepleri:
- Schema'lar kurulurken Studio sürekli değişir — erken davet edilen üyeler karışır
- Mevcut `lib/data/*.ts` içeriğini Sanity'e aktarma işi tek kişilik iş (iki kişi paralel çalışırsa veri çakışması olur)
- Yanlış schema tasarımını kullanıcılar girmeden düzeltmek 10 kat kolay
- Dokümantasyon yazarken neyi anlatacağını ancak kendin kullanınca anlarsın
- Takım üyelerinin zamanını boşa harcama — sadece hazır bir panel sunulur

### Teknik adımlar

**Aşama 7.5 — Solo kurulum (sen yapacaksın)**
1. Mevcut Sanity organization'ında "Ordino" adıyla yeni proje oluştur (sanity.io/manage üzerinden, doğru organization seçildiğini iki kez kontrol et)
2. `npm create sanity@latest` ile mevcut Next.js projesine Studio kur (embedded mode, yeni oluşturulan proje ID'si ile)
3. `sanity/schemas/` altında 12 schema dosyası tanımla — TypeScript ile, tek tek test ederek
4. `lib/sanity/client.ts` — Sanity client setup
5. `lib/sanity/queries.ts` — GROQ sorguları (her schema için fetch fonksiyonu)
6. Mevcut `lib/data/*.ts` içeriklerini Sanity'e import et (migration script veya manuel Studio'dan)
7. Tüm component'lerin data import'larını Sanity sorgularıyla değiştir
8. `app/studio/[[...tool]]/page.tsx` — Studio route
9. `next.config.ts`'e Sanity image CDN domain'i ekle (cdn.sanity.io)
10. ISR (Incremental Static Regeneration) ayarla — `revalidate: 60` ile sayfa 60sn'de bir Sanity'den yenilenir
11. Preview mode aktif et (`next/draft-mode`)
12. **Smoke test:** Kendin panel'de her schema tipi için bir örnek ekle-düzenle-sil, görsel yükle, bir blog yazısı yayınla-geri çek. Hepsi çalışmadan ileri gitme.

**Aşama 8 — Deploy (Vercel)**
13. Site Vercel'e deploy edilir — Sanity Studio da `theordino.com/studio` adresinde otomatik olarak canlıya çıkar

**Aşama 8 sonrası — Manuel davet (en sonda, sen yapacaksın)**
14. Site canlı ve çalışır durumdayken Sanity.io/manage'de Ordino projesine git
15. "Members" / "Invite" menüsünden takım üyelerini **tek tek manuel olarak** admin rolünde davet et
16. Her davet emailine Studio URL'i ve kısa bir "nasıl giriş yapılır" not'u ekle
17. Davet kararı tamamen sende — kimi ne zaman davet edeceğini sen belirlersin

### Önemli kararlar
- **Kullanıcılar:** Tüm panel kullanıcıları admin rolünde takım üyeleri olacak — viewer/editor ayrımı YAPILMAYACAK (basitlik için)
- **Image handling:** `next-sanity` paketinin `<Image>` component'i kullanılacak (Sanity CDN + Next.js optimization)
- **Video:** Admin panel'e YouTube/Vimeo URL'i girer, ya da Sanity asset olarak yükler. Büyük videolar için `next/video` + Mux entegrasyonu ayrıca düşünülebilir
- **Preview mode:** Admin yayınlamadan önce taslağı görebilsin diye `next/draft-mode` aktif edilecek
- **Backup:** Sanity haftalık otomatik backup yapar, ek bir şey gerekmez
- **Çoklu dil:** Şu an site Türkçe ağırlıklı ama İngilizce metinli. İleride çoklu dil eklenirse Sanity'nin `internationalization` plugin'i kurulur, şimdi YAPILMAYACAK

### Süre tahmini
11-13 saat ek iş — Aşama 7 ile Aşama 8 arasına sığar.

### Maliyet
Mevcut organization'a yeni proje eklemenin maliyeti yok. Ücretsiz tier yeterli (3 user, 10K dokuman, 5GB asset, 100GB bandwidth/ay). Organization plan'ı ne ise (Free/Growth) Ordino projesi de ondan yararlanacak.

### Junior için tuzaklar
- Sanity Studio "embedded mode" ile aynı Next.js projesinde çalışır — ayrı sunucu/deploy yok
- Mevcut organization'a yeni proje açarken **doğru organization'ı seçmek** kritik (yanlış yere açılırsa silmek karmaşık)
- GROQ sorgusu SQL'e benzer ama farklı — sözdizimi öğrenmek 30 dk
- `'use server'` ve `revalidatePath()` ile webhook tetikleyerek anlık güncelleme yapılabilir
- Image upload sonrası Sanity URL'i otomatik üretir, manuel asset yönetimi yok
- **Önemli:** İlk schema yazılırken "_type" field'ı her dokümanın zorunlu kısmıdır — bu Sanity'nin temel düşünce yapısı

---

### Aşama 8: Deploy (15 dk)
1. GitHub repo oluştur, push et
2. Vercel hesabına bağla
3. "Import Project" → repo'yu seç → Deploy
4. Custom domain varsa ekle

**Çıktı:** Site canlıda, aynı görünüm.

---

## ⚠ Dikkat edilmesi gerekenler — "junior için tuzaklar"

1. **Server Components default** — `components/` altındakilerin çoğu server component. Ancak:
   - `useState`, `useEffect`, `useRef` kullanan her component'in başına `'use client'` yaz
   - `AdaptiveNavLogic`, `CustomCursor`, `Reveal`, `AnimatedNumber`, `ContactForm` — hepsi client component
   - Section component'leri mümkünse server component kalsın, sadece içindeki interactive parça client olsun

2. **Hydration mismatch uyarısı** — nav'ın adaptif rengi SSR'da bilinmez. İlk render'da default renk gösterip, client-side'da düzelt. `suppressHydrationWarning` **kullanma**, yerine `useEffect`'te ilk tick'te güncelle.

3. **Font'lar flash of unstyled text (FOUT)** — `next/font/google` bunu otomatik halleder, harici `<link>` **ekleme** HTML'de. `layout.tsx`'te font import et, `className={font.variable}` ile `<html>`'e bağla.

4. **Resim boyutları** — `<Image>` component'ine `width` + `height` veya `fill` + parent `aspect-ratio` ver. "Width/height required" hatası çok yaygın.

5. **`<a href>` yerine `<Link>`** — iç route'lar her zaman `<Link href="/work">`. Sadece dış link veya tel:/mailto:/# için `<a>`.

6. **CSS custom property → Tailwind** — mevcut `clamp()` içerikleri Tailwind'de arbitrary value ile: `text-[clamp(3rem,7vw,6.5rem)]`. Çok kullanılanlar config'e `fontSize` extend et.

7. **`em` içeren başlıklar** — Cormorant italic em'leri JSX'te yazılacak:
```tsx
   <h1>We elevate <em>ads.</em></h1>
```
   Tailwind ile: `[&_em]:italic [&_em]:font-normal`

8. **`body.dark-page`** yerine → Platform sayfasında layout veya page'de bir prop ile nav'a "force-dark" ilet.

9. **Placeholder'lar** — `placeholder-img` + inline gradient'ler tasarımın kritik parçası. `<Placeholder gradient="..." />` component yap, inline style kalsın.

10. **TypeScript strict mode** — her data objesi için `type` tanımla. Vakit kaybetme gibi görünebilir ama sonradan 10 kat geri öder.
---

## 🎯 İlk görev: Aşama 0 — Proje kurulumu

**Sen (Claude Code), bu dokümanı açıkça okuduğunu doğrula, sonra kullanıcıyla adım adım ilerle:**

1. Kullanıcıya terminal açtırtıp projeyi oluştur:
   ```bash
   cd ~/Desktop
   npx create-next-app@latest ordino-next --typescript --tailwind --app --eslint --import-alias="@/*"
   ```
   - "Would you like your code inside a `src/` directory?" → **No**
   - "Would you like to use Turbopack for next dev?" → **Yes**

2. `cd ordino-next` yapıp VS Code'da aç: `code .`

3. Gerekli kütüphaneleri kur:
   ```bash
   npm install framer-motion lucide-react clsx tailwind-merge
   ```

4. İlk çalıştırma: `npm run dev` → `localhost:3000` açık mı kontrol ettir

5. Git başlat: `git init && git add . && git commit -m "Aşama 0: Initial Next.js setup"`

Bundan sonra **Aşama 1'e geç** — ben (Claude Code) her dosyayı tek tek açıklayarak, mevcut HTML'deki karşılığına referans vererek yazacağım.

**Kritik kural:** Her adım sonrası kullanıcıya "Şu dosyaya bak, şu çıktıyı görmelisin" diye doğrulattır. Junior developer kaybolmasın.

---

## 📎 Referans: Orijinal HTML/CSS/JS dosyaları

Kullanıcının elinde 10 dosyalık v19 zip'i var:
- `index.html`, `work.html`, `case-studies.html`, `services.html`, `platform.html`, `about.html`, `contact.html`, `news.html`
- `styles.css` (~4800 satır)
- `script.js` (adaptif nav + reveal + counter + cursor)
- `assets/clients/*.png` (9 logo)
- `assets/video/work-reel.mp4` (work sayfası reel'i)

**Kullanıcı bunları migration sırasında Claude Code'un okuyabileceği bir klasöre (örn: `ordino-next/_legacy/`) koyacak. Sen referans olarak bu klasörü okuyabilir, class isimlerini/yapıyı birebir karşılaştırabilirsin.**

Bu belge, Claude Code olarak sana (ve bu projeyi dış birisi devralırsa ona) yol gösterir. **İçindeki her karara saygı göster, sadece gerektiğinde ve kullanıcıya açıklayarak sap.**


---

## 🔧 Ek düzeltme — Adaptif Nav + Buton Okunabilirliği (Aşama 4 revizyonu)

### Sorun
Mevcut pixel-sampling adaptif nav implementasyonu bazı durumlarda yanılıyor:
- Platform sayfasının ambient glow'ları (radial gradient'ler) luminance hesabını yanıltıyor — dark arkaplanda nav siyah kalıyor
- Karmaşık gradient'li section'larda tutarsız davranış
- "Schedule A Meeting" butonu dark arkaplanda siyah çerçeveli + siyah yazılı → okunmuyor

### Çözüm yaklaşımı — data-theme attribute
Pixel sampling yerine her section **kendi temasını deklare etsin**. Nav o anda viewport'un üst kısmında olan section'un `data-theme` attribute'una bakıp renk alır. Bu daha deterministik.

### Yapılacaklar (sırayla)

**1. components/layout/AdaptiveNavLogic.tsx'i yeniden yaz**
- Mevcut pixel sampling kodunu SİL
- Yeni mantık: `document.elementFromPoint(x, navHeight + 20)` ile nav altındaki elementi bul
- Element'ten yukarı doğru `.closest('[data-theme]')` ile en yakın tema bilgisini bul
- `data-theme="dark"` → `isDark=true` (nav beyaz)
- `data-theme="light"` → `isDark=false` (nav siyah)
- Hiç bulamazsa default: `light`
- scroll + resize event'lerinde `requestAnimationFrame` throttle ile tekrar hesapla
- SSR'da default `light` başlasın, client-side'da `useEffect` ile ilk tick'te güncelle — hydration mismatch olmasın

**2. Tüm section component'lerine data-theme ekle**

DARK section'lar (`data-theme="dark"`):
- Hero, FullVideo, FullBleed, HowWeWork, AnalyticsBlock, Cta
- ColorBlock (purple varyant), PowerOf (eğer dark-bg ise)
- WorkHero, WorkReel, EditorialHero (dark ise), Showreel
- WhereWeWork, ContactHeroImage
- PlatformHero, PlatformProduct, PlatformFeatures, AIEngine, PlatformResults, PlatformFinalCta
- Leadership (dark ise), ServicesReel, WhatWeDo, ServiceDetail (dark olanlar)
- CaseBlock (dark olanlar), PageHero (news dark hero)

LIGHT section'lar (`data-theme="light"`):
- ClientsShowcase, LatestWorks, HorizontalScroll, DualGrid, PushForward
- ColorBlock (tan varyant), ServicesGrid
- StudioGallery, TeamGrid, PowerSection (light)
- NewsGrid, ContactForm, CaseToc
- ServicesHeroGrid, PortfolioRows

**Not:** Kararsız olduğun section'larda legacy styles.css'e bakıp background değerine göre karar ver. Yanlış tema tespit edersen kullanıcıya sor.

**3. Footer component'ine `data-theme="dark"` ekle** (footer tamamen siyah)

**4. Navbar.tsx'i güncelle** — `isDark` prop'una göre:
- `isDark=true`: nav linkleri beyaz, "Schedule A Meeting" butonu beyaz çerçeveli + beyaz yazı, hover'da beyaz dolgu + siyah yazı, Instagram ikonu beyaz
- `isDark=false`: nav linkleri siyah, buton siyah çerçeveli + siyah yazı, hover'da siyah dolgu + beyaz yazı, Instagram ikonu siyah
- Tailwind ile yap, `currentColor` kullan ki ikon'lar otomatik renk alsın
- `transition-colors duration-300 ease-in-out` ki scroll sırasında yumuşak değişsin

**5. SideFixed.tsx'i aynı şekilde güncelle** — `isDark` prop'u al, sol/sağ dikey yazıları ve çizgileri buna göre renklendir

### Test planı

Her sayfayı sırayla aç, scroll ederken nav'ın rengini gözlemle:

1. `/` — scroll ile dark (Hero) → light (ClientsShowcase) → dark (HowWeWork) → light (PushForward) geçişleri
2. `/platform` — tamamen dark, nav her zaman beyaz olmalı
3. `/about` — light hero, scroll ile dark section'larda beyaz
4. `/work` — dark editorial hero, nav beyaz başlamalı
5. `/contact` — image section'a göre değişken
6. `/news` — dark hero, light grid
7. `/services` — karma geçişler
8. `/case-studies` — karma

### Kritik notlar
- Geçişler **yumuşak** olmalı (300ms transition)
- Hydration mismatch yok — SSR/client ilk render aynı
- Section sınırlarında nav kararsız kalmasın — viewport'un üstündeki section'a göre kesin karar

### Sıra
1. Önce AdaptiveNavLogic.tsx'i yeniden yaz — tek başına test et
2. Sonra 2-3 section'a data-theme ekle, nav'ın doğru çalıştığını doğrula
3. Navbar + SideFixed button renklerini güncelle
4. Kalan section'lara data-theme ekle (batch işlem)
5. Footer'a data-theme ekle
6. Her sayfayı test et, sorunları raporla