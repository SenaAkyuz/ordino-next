import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#fff",
          color: "#000",
        }}
      >
        <div style={{ maxWidth: 600, textAlign: "center" }}>
          <p
            style={{
              marginBottom: 16,
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#b28f6c",
            }}
          >
            404
          </p>
          <h1
            style={{
              marginBottom: 24,
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Sayfa Bulunamadı / Page Not Found
          </h1>
          <p
            style={{
              marginBottom: 48,
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#666",
            }}
          >
            Aradığınız sayfa taşınmış veya silinmiş olabilir. Anasayfadan devam
            edebilirsiniz. — The page you&rsquo;re looking for may have moved or
            been removed.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: 999,
              border: "1px solid #000",
              background: "#000",
              color: "#fff",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Anasayfa / Home
          </Link>
        </div>
      </body>
    </html>
  );
}
