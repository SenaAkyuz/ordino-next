"use client";

// Config + NextStudio yalnizca bu client sinirinda import edilir; boylece Sanity
// modul grafigi RSC (react-server) kosuluna girmez (Turbopack + swr uyumsuzlugu).
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export function Studio() {
  return <NextStudio config={config} />;
}
