import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // API, Next internals, public asset'ler, /produksiyon ve /en/produksiyon
  // static site'lar, /sky-marble-rush gizlilik sayfalari ve metadata route'lari middleware'den haric tutuluyor.
  matcher: ["/((?!api|_next|_vercel|produksiyon|en/produksiyon|sky-marble-rush|studio|.*\\..*).*)"],
};
