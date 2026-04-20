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
