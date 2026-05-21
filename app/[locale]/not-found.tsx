import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main
      data-theme="light"
      className="flex min-h-screen items-center justify-center bg-white px-5 py-[120px] md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-[600px] text-center">
        <p className="mb-4 font-body text-[0.75rem] uppercase tracking-[3px] text-accent">
          404
        </p>
        <h1 className="mb-6 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-[1.2] tracking-[-0.5px] text-black">
          {t("title")}
        </h1>
        <p className="mb-12 font-body text-base font-light leading-[1.7] text-[#666]">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-block rounded-[10em] border border-black bg-black px-8 py-3 font-body text-[0.85rem] text-white transition-[background,color] duration-300 hover:bg-transparent hover:text-black"
        >
          {t("backHome")}
        </Link>
      </div>
    </main>
  );
}
