import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { withSlugHistory } from "./sanity/actions/capturePreviousSlug";

export default defineConfig({
  name: "ordino-blog",
  title: "Ordino Blog",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
  document: {
    // Yalniz post tipinin publish action'ini sar; diger tip/action'lar aynen kalir.
    actions: (prev, context) => {
      if (context.schemaType !== "post") return prev;
      return prev.map((action) =>
        action.action === "publish" ? withSlugHistory(action) : action,
      );
    },
  },
});
