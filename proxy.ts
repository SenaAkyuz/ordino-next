import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // API, Next internals, public asset'ler ve metadata route'ları middleware'den hariç tutuluyor.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
