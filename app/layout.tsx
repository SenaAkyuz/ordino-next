// Root layout — html/body actual locale-aware layout'ta (app/[locale]/layout.tsx).
// Bu pass-through, Next.js'in [locale] olmayan path'ler için fallback olarak kullanılır.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
