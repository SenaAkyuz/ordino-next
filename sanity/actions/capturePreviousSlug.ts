import { useDocumentOperation } from "sanity";
import type {
  DocumentActionComponent,
  DocumentActionDescription,
  DocumentActionProps,
} from "sanity";

// Slug degisince eski slug'i previousSlugs'a otomatik ekleyen publish sarmalayici.
// Patch-then-publish pattern'i: publish oncesi draft'a patch uygular.
const LANGS = [
  { slugField: "slugTr", prevField: "previousSlugsTr" },
  { slugField: "slugEn", prevField: "previousSlugsEn" },
] as const;

// Sanity doküman alanlari dinamik oldugundan gevsek tipli erisim.
type SlugValue = { current?: string } | undefined;
type LooseDoc = Record<string, unknown> | null | undefined;

function slugOf(doc: LooseDoc, field: string): string | undefined {
  return (doc?.[field] as SlugValue)?.current;
}

function listOf(doc: LooseDoc, field: string): string[] {
  const v = doc?.[field];
  return Array.isArray(v) ? (v as string[]) : [];
}

export function withSlugHistory(
  OriginalPublish: DocumentActionComponent,
): DocumentActionComponent {
  const Wrapped: DocumentActionComponent = (props: DocumentActionProps) => {
    const { id, type, draft, published, onComplete } = props;
    const { patch, publish } = useDocumentOperation(id, type);
    // Etiket / disabled / validation kilidi orijinalden korunur.
    const original = OriginalPublish(props);
    // Publish action'i gizliyse ( or. yetki yok) aynen dondur.
    if (!original) return original;

    const description: DocumentActionDescription = {
      ...original,
      onHandle: () => {
        const patches: Array<Record<string, unknown>> = [];

        for (const { slugField, prevField } of LANGS) {
          const publishedSlug = slugOf(published, slugField);
          const newSlug = slugOf(draft, slugField) ?? publishedSlug;
          // Draft'taki liste onceliklidir; yoksa published'daki.
          const current =
            draft?.[prevField] !== undefined
              ? listOf(draft, prevField)
              : listOf(published, prevField);

          let next = [...current];
          // Slug degistiyse eski (published) slug'i tarihe ekle.
          if (publishedSlug && newSlug && publishedSlug !== newSlug) {
            next.push(publishedSlug);
          }
          // Hijyen: bos degerleri ve guncel slug'a esit olanlari cikar (self-redirect yok),
          // dedup, son 10 ile sinirla.
          next = Array.from(
            new Set(next.filter((s) => s && s !== newSlug)),
          ).slice(-10);

          const changed =
            next.length !== current.length ||
            next.some((s, i) => s !== current[i]);
          if (changed) {
            patches.push({ setIfMissing: { [prevField]: [] } });
            patches.push({ set: { [prevField]: next } });
          }
        }

        if (patches.length) patch.execute(patches);
        publish.execute();
        onComplete();
      },
    };
    return description;
  };

  // Sanity'nin bu action'i hala 'publish' olarak tanimasi icin kimligi koru.
  Wrapped.action = OriginalPublish.action;
  return Wrapped;
}
