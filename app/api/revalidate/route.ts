import { NextResponse, type NextRequest } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

// Sanity webhook (create/update/delete, _type == "post") bu endpoint'i cagirir.
// Secret dogrulaninca blog list/detail fetch'lerinin cache tag'i ('post') tazelenir.
type RevalidatePayload = {
  slugTr?: string;
  slugEn?: string;
  // Sanity webhook projection'a gore { slug: { current } } de gelebilir; ikisini de destekle.
  slug?: { current?: string } | string;
};

function extractSecret(req: NextRequest): string | null {
  const url = new URL(req.url);
  const fromQuery = url.searchParams.get("secret");
  if (fromQuery) return fromQuery;
  const header =
    req.headers.get("x-revalidate-secret") ||
    req.headers.get("sanity-webhook-secret");
  return header;
}

export async function POST(req: NextRequest) {
  const expected = process.env.SANITY_REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { revalidated: false, message: "Secret not configured" },
      { status: 500 },
    );
  }
  if (extractSecret(req) !== expected) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid secret" },
      { status: 401 },
    );
  }

  // Tum blog fetch'lerini tazele (list + detail + sitemap).
  // Next 16: route handler'da revalidateTag ikinci arguman ('max') ister; updateTag
  // yalniz Server Action'da calisir.
  revalidateTag("post", "max");

  // Payload'da slug varsa ilgili detay path'lerini de (her iki locale) tazele.
  let payload: RevalidatePayload = {};
  try {
    payload = (await req.json()) as RevalidatePayload;
  } catch {
    // Body yoksa/parse edilemezse tag revalidate yeterli.
  }
  const flatSlug =
    typeof payload.slug === "string" ? payload.slug : payload.slug?.current;
  const slugs = [payload.slugTr, payload.slugEn, flatSlug].filter(
    (s): s is string => Boolean(s),
  );
  for (const slug of slugs) {
    for (const locale of routing.locales) {
      const path = getPathname({
        locale,
        href: { pathname: "/blog/[slug]", params: { slug } },
      });
      revalidatePath(path);
    }
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
