import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Freshness: webhook revalidateTag ile "publish -> aninda yansi" akisi icin canli API
  // (api.sanity.io) kullanilir; CDN ~60sn stale donerdi. Fetch'ler zaten Next tarafinda
  // tags:["post"] + revalidate=60 ile cache'lendiginden canli API yalniz cache-miss'te cagrilir.
  useCdn: false,
});
