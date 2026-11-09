import type { MetadataRoute } from "next";
import { getSubstances, getConcepts } from "@/lib/repository";
import { buildSitemap } from "@/lib/seo";

// Read the same published revisions/concepts as the public pages at request time.
// Never freeze bundled content into a database-backed deployment's sitemap.
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [substances, concepts] = await Promise.all([getSubstances(), getConcepts()]);
  return buildSitemap(substances, concepts);
}
