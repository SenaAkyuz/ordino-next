import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  sector?: string;
  services?: string[];
  timing?: string;
  budget?: string;
  message?: string;
};

const PORTAL_ID = "49403906";
const FORM_ID = "f25b78bc-a317-4bf5-b0b0-1a845f9f37de";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_MAP: Record<keyof ContactPayload, string> = {
  firstName: "firstname",
  lastName: "lastname",
  email: "email",
  phone: "phone",
  company: "company",
  sector: "sector",
  services: "requested_services",
  timing: "project_timing",
  budget: "monthly_ad_budget",
  message: "message",
};

const SECTOR_TR_LABELS: Record<string, string> = {
  ecommerce: "E-Ticaret / DTC",
  saas: "SaaS / Yazılım",
  travel: "Seyahat / Konaklama",
  education: "Eğitim",
  realEstate: "Gayrimenkul",
  finance: "Finans / Fintech",
  healthcare: "Sağlık",
  b2b: "B2B / Endüstriyel",
  publicSector: "Kamu Sektörü",
  other: "Diğer",
};

const SERVICE_TR_LABELS: Record<string, string> = {
  strategy: "Strateji & Denetim",
  performance: "Performans Medya",
  creative: "Yaratıcı & Prodüksiyon",
  analytics: "Analitik & Atribüsyon",
  growth: "Büyüme & Ortaklıklar",
  cro: "CRO / Landing Page",
  fullService: "Tam Servis Ortaklığı",
};

const TIMING_TR_LABELS: Record<string, string> = {
  immediate: "Hemen başlamamız gerek",
  withinMonth: "Önümüzdeki ay içinde",
  threePlus: "3+ ay sonra",
  exploring: "Sadece keşfediyoruz",
};

const BUDGET_TR_LABELS: Record<string, string> = {
  tier1: "10.000 TL altı",
  tier2: "10.000 — 50.000 TL",
  tier3: "50.000 — 250.000 TL",
  tier4: "250.000 — 1M TL",
  tier5: "1M TL üzeri",
};

function mapSlug(
  map: Record<string, string>,
  slug: string | undefined | null,
): string | undefined {
  if (!slug) return undefined;
  if (Object.values(map).includes(slug)) return slug;
  return map[slug] ?? slug;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek formatı." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi." },
      { status: 400 },
    );
  }

  const data = body as Partial<ContactPayload>;

  if (
    !isNonEmptyString(data.firstName) ||
    !isNonEmptyString(data.lastName) ||
    !isNonEmptyString(data.email) ||
    !isNonEmptyString(data.phone)
  ) {
    return NextResponse.json(
      { error: "Lütfen ad, soyad, e-posta ve telefon alanlarını doldurun." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(data.email.trim())) {
    return NextResponse.json(
      { error: "Geçersiz e-posta adresi." },
      { status: 400 },
    );
  }

  const normalizedSector = mapSlug(SECTOR_TR_LABELS, data.sector);
  const normalizedServices = Array.isArray(data.services)
    ? data.services
        .map((s) => mapSlug(SERVICE_TR_LABELS, s))
        .filter((s): s is string => Boolean(s))
    : [];
  const normalizedTiming = mapSlug(TIMING_TR_LABELS, data.timing);
  const normalizedBudget = mapSlug(BUDGET_TR_LABELS, data.budget);

  const fields: { objectTypeId: string; name: string; value: string }[] = [];

  const pushField = (key: keyof ContactPayload, value: string) => {
    fields.push({
      objectTypeId: "0-1",
      name: FIELD_MAP[key],
      value,
    });
  };

  pushField("firstName", data.firstName.trim());
  pushField("lastName", data.lastName.trim());
  pushField("email", data.email.trim());
  pushField("phone", data.phone.trim());

  if (isNonEmptyString(data.company)) pushField("company", data.company.trim());
  if (isNonEmptyString(normalizedSector)) pushField("sector", normalizedSector);
  if (normalizedServices.length > 0) {
    pushField("services", normalizedServices.join(";"));
  }
  if (isNonEmptyString(normalizedTiming)) pushField("timing", normalizedTiming);
  if (isNonEmptyString(normalizedBudget)) pushField("budget", normalizedBudget);
  if (isNonEmptyString(data.message)) pushField("message", data.message.trim());

  const referer = request.headers.get("referer") ?? "https://theordino.com/iletisim";

  const hubspotPayload = {
    fields,
    context: {
      pageUri: referer,
      pageName: "İletişim - Ordino Medya",
    },
  };

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

  try {
    const hsRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotPayload),
    });

    if (!hsRes.ok) {
      const text = await hsRes.text().catch(() => "");
      console.error(
        `[contact-api] HubSpot error ${hsRes.status}:`,
        text.slice(0, 500),
      );
      return NextResponse.json(
        { error: "Form geçici olarak gönderilemedi. Lütfen biraz sonra tekrar deneyin." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact-api] unexpected error:", err);
    return NextResponse.json(
      { error: "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 },
    );
  }
}
