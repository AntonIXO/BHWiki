import type { Metadata, MetadataRoute } from "next";
import { conceptPath, type Tag } from "./types";

/** No reviewedAt → lastmod: draft source dates are not publication attestations. */
export function buildSitemap(substances: { slug: string }[], concepts: Pick<Tag, "id" | "kind">[]): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/contribute", "/concepts", "/effects", "/outcomes", ...substances.map(s => `/substances/${s.slug}`), ...concepts.map(conceptPath)];
  return [...new Set(paths)].sort().map(path => ({ url: absoluteUrl(path) }));
}
import { siteUrl } from "./site";

export const SITE_TITLE = "BHWiki — A field guide to substances";
export const SITE_DESCRIPTION = "An open substance encyclopedia connecting mechanisms, subjective effects, pharmacokinetics, and published evidence. An independent open reference.";
export type SeoSearchParams = Record<string, string | string[] | undefined>;

export function buildLlmsTxt(substances: { slug: string; name: string }[], concepts: Pick<Tag, "id" | "kind" | "label">[]): string {
  const label = (value: string) => value.replace(/[\r\n\[\]]/g, " ");
  return [
    "# BHWiki", "", "> An independent, source-linked substance encyclopedia.", "",
    "Articles connect mechanisms, subjective experiences and measured outcomes to their cited sources. Consult each article's Research & sources section for the underlying publications.", "",
    "## Orientation", `- [Evidence & methodology](${absoluteUrl("/about")})`, `- [Contribute corrections](${absoluteUrl("/contribute")})`, `- [Public sitemap](${absoluteUrl("/sitemap.xml")})`, "",
    "## Substances", ...substances.map(s => `- [${label(s.name)}](${absoluteUrl(`/substances/${s.slug}`)})`), "",
    "## Concepts, effects and outcomes", ...concepts.map(c => `- [${label(c.label)}](${absoluteUrl(conceptPath(c))})`), "",
  ].join("\n");
}

export function verificationMetadata(): Pick<Metadata, "verification"> {
  const google = process.env.BHWIKI_GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BHWIKI_BING_SITE_VERIFICATION?.trim();
  return google || bing ? { verification: { ...(google ? { google } : {}), ...(bing ? { other: { "msvalidate.01": bing } } : {}) } } : {};
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl()}/#organization`, name: "BHWiki", url: siteUrl(), description: "An independent, source-linked substance reference.", logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png"), width: 512, height: 512 } },
      { "@type": "WebSite", "@id": `${siteUrl()}/#website`, name: "BHWiki", url: siteUrl(), description: SITE_DESCRIPTION, inLanguage: "en", publisher: { "@id": `${siteUrl()}/#organization` } },
    ] as const,
  };
}

export function articleJsonLd({ path, title, description, sources, breadcrumbs }: {
  path: string; title: string; description: string; sources: string[]; breadcrumbs: { path: string; name: string }[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": `${url}#article`, headline: title, description, url, mainEntityOfPage: url, inLanguage: "en", isPartOf: { "@id": `${siteUrl()}/#website` }, publisher: { "@id": `${siteUrl()}/#organization` }, citation: [...new Set(sources)] },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`, itemListElement: breadcrumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, name: crumb.name, item: absoluteUrl(crumb.path) })) },
    ] as const,
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/[<>&\u2028\u2029]/g, char => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

export function absoluteUrl(path: string): string {
  // Only local paths are accepted; no host/query data comes from the request.
  if (!path.startsWith("/") || path.startsWith("//") || /[?#\\]/.test(path)) throw new Error("Expected a clean local SEO path");
  return path === "/" ? siteUrl() : `${siteUrl()}${path}`;
}

export function pageMetadata({ path, title, description, search = {}, noindex = false, article = false }: {
  path: string; title: string; description: string; search?: SeoSearchParams; noindex?: boolean; article?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const index = !noindex && !Object.entries(search).some(([key, value]) => value !== undefined && !/^(utm_.*|gclid|fbclid|msclkid)$/.test(key));
  const socialTitle = title === SITE_TITLE ? title : `${title} · BHWiki`;
  const images = [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: SITE_TITLE }];
  return {
    title: title === SITE_TITLE ? { absolute: title } : title, description, alternates: { canonical: url },
    robots: { index, follow: true, googleBot: { index, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: article ? "article" : "website", siteName: "BHWiki", locale: "en_US", title: socialTitle, description, url, images },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}
