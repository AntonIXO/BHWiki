import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Let crawlers see noindex on tools, queries and history. Disallow is not noindex.
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: absoluteUrl("/sitemap.xml") };
}
