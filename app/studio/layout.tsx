// Studio, app/[locale] disinda oldugundan kendi html/body'sini saglamali
// (root app/layout.tsx pass-through; html/body normalde [locale]/layout'ta).
export const metadata = {
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
