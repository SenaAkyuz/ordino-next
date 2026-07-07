import { defineType, defineField, defineArrayMember } from "sanity";
import type { SlugValidationContext } from "sanity";
import { apiVersion } from "../env";
import { trSlugify } from "../lib/slugify";

// Slug'in hem TR hem EN alanlarinda, tum dokumanlar arasinda benzersiz olmasini
// dogrular. /blog/[slug] her iki dilde ayni namespace'i kullandigindan cakisma olmamali.
async function isUniqueAcrossLocales(
  slug: string,
  context: SlugValidationContext,
): Promise<boolean> {
  const { document, getClient } = context;
  const client = getClient({ apiVersion });
  const id = (document?._id ?? "").replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    (slugTr.current == $slug || slugEn.current == $slug)
  ][0]._id)`;
  return client.fetch(query, params);
}

// Portable Text govde konfigurasyonu — hem bodyTr hem bodyEn icin ortak.
function bodyField(name: string, title: string, group: string) {
  return defineField({
    name,
    title,
    group,
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "Quote", value: "blockquote" },
        ],
        lists: [
          { title: "Madde", value: "bullet" },
          { title: "Numarali", value: "number" },
        ],
        marks: {
          decorators: [
            { title: "Kalin", value: "strong" },
            { title: "Italik", value: "em" },
          ],
          annotations: [
            defineArrayMember({
              name: "link",
              type: "object",
              title: "Link",
              fields: [
                defineField({
                  name: "href",
                  type: "url",
                  title: "URL",
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: "blank",
                  type: "boolean",
                  title: "Yeni sekmede aç",
                  initialValue: false,
                }),
              ],
            }),
          ],
        },
      }),
      defineArrayMember({
        type: "image",
        options: { hotspot: true },
        fields: [
          defineField({
            name: "alt",
            type: "string",
            title: "Alternatif metin",
            validation: (r) => r.required(),
          }),
        ],
      }),
    ],
  });
}

// SEO meta object'i — her dil grubu icinde (metaTr / metaEn).
function metaField(name: string, group: string) {
  return defineField({
    name,
    group,
    type: "object",
    title: "SEO",
    options: { collapsible: true, collapsed: true },
    fields: [
      defineField({
        name: "metaTitle",
        type: "string",
        title: "Meta başlık",
        description: "~50-60 karakter. Boşsa başlık kullanılır.",
      }),
      defineField({
        name: "metaDescription",
        type: "text",
        rows: 2,
        title: "Meta açıklama",
        description: "~150-160 karakter.",
      }),
      defineField({
        name: "ogImage",
        type: "image",
        title: "OG görsel",
        options: { hotspot: true },
        description: "1200×630 önerilir. Boşsa kapak görseli kullanılır.",
      }),
      defineField({
        name: "canonicalUrl",
        type: "url",
        title: "Canonical URL",
      }),
      defineField({
        name: "noIndex",
        type: "boolean",
        title: "noindex",
        initialValue: false,
        description: "Açık = aramada indeksleme kapalı.",
      }),
    ],
  });
}

export const post = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  groups: [
    { name: "shared", title: "Ortak", default: true },
    { name: "tr", title: "Türkçe" },
    { name: "en", title: "English" },
  ],
  // Kapak görseli veya gradient'ten en az biri dolu olmali (yeni yazilar gorsel koyar).
  validation: (rule) =>
    rule.custom((doc) => {
      const d = doc as { coverImage?: unknown; gradient?: string } | undefined;
      if (d?.coverImage || (d?.gradient && d.gradient.trim() !== "")) {
        return true;
      }
      return "Kapak görseli veya gradient'ten en az biri gerekli.";
    }),
  fields: [
    // ---------- Ortak ----------
    defineField({
      name: "coverImage",
      title: "Kapak görseli",
      group: "shared",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternatif metin",
          validation: (r) => r.required(),
        }),
      ],
      description:
        "Yeni yazılarda kapak görseli koyun. Boşsa legacy gradient kullanılır.",
    }),
    defineField({
      name: "gradient",
      title: "Gradient (legacy)",
      group: "shared",
      type: "string",
      description:
        "Genelde boş bırakın. Görsel yoksa kullanılan legacy degrade (ör. CSS linear-gradient).",
    }),
    defineField({
      name: "category",
      title: "Kategori",
      group: "shared",
      type: "string",
      options: {
        list: [
          { title: "Dijital Pazarlama", value: "digitalMarketing" },
          { title: "SEO", value: "seo" },
          { title: "Yapay Zeka", value: "ai" },
          { title: "Sosyal Medya", value: "socialMedia" },
          { title: "Sektör Haberleri", value: "industryNews" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Yazar",
      group: "shared",
      type: "string",
      initialValue: "Ordino",
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın tarihi",
      group: "shared",
      type: "datetime",
      description:
        "İleri tarih seçilebilir; gelecekteki tarih otomatik 'Planlanmış' davranır.",
      validation: (r) => r.required(),
    }),

    // ---------- Türkçe ----------
    defineField({
      name: "titleTr",
      title: "Başlık (TR)",
      group: "tr",
      type: "string",
      description: "H1 olarak kullanılır. ~50-70 karakter ideal.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slugTr",
      title: "Slug (TR)",
      group: "tr",
      type: "slug",
      options: {
        source: "titleTr",
        slugify: (input) => trSlugify(input),
        isUnique: isUniqueAcrossLocales,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "previousSlugsTr",
      title: "Eski slug'lar (TR)",
      group: "tr",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description:
        "Slug değişince eski slug'ı buraya ekle → eski URL yeni URL'e kalıcı yönlenir.",
    }),
    defineField({
      name: "excerptTr",
      title: "Özet (TR)",
      group: "tr",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    bodyField("bodyTr", "İçerik (TR)", "tr"),
    metaField("metaTr", "tr"),

    // ---------- English ----------
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      group: "en",
      type: "string",
      description: "Used as H1. ~50-70 chars ideal.",
    }),
    defineField({
      name: "slugEn",
      title: "Slug (EN)",
      group: "en",
      type: "slug",
      options: {
        source: "titleEn",
        slugify: (input) => trSlugify(input),
        isUnique: isUniqueAcrossLocales,
      },
    }),
    defineField({
      name: "previousSlugsEn",
      title: "Old slugs (EN)",
      group: "en",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description:
        "When the slug changes, add the old slug here → the old URL permanently redirects to the new one.",
    }),
    defineField({
      name: "excerptEn",
      title: "Excerpt (EN)",
      group: "en",
      type: "text",
      rows: 3,
    }),
    bodyField("bodyEn", "Body (EN)", "en"),
    metaField("metaEn", "en"),
  ],

  preview: {
    select: {
      title: "titleTr",
      publishedAt: "publishedAt",
      media: "coverImage",
      id: "_id",
    },
    prepare({ title, publishedAt, media, id }) {
      // Native draft/publish + publishedAt tarihinden durum turetilir (ayri enum yok).
      const isDraft = typeof id === "string" && id.startsWith("drafts.");
      let status = "Taslak";
      if (!isDraft) {
        status =
          publishedAt && new Date(publishedAt) > new Date()
            ? "Planlanmış"
            : "Yayında";
      }
      const dateStr = publishedAt
        ? new Date(publishedAt).toLocaleDateString("tr-TR")
        : "";
      return {
        title: title || "(başlıksız)",
        subtitle: [status, dateStr].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
