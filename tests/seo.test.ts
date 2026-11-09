import assert from "node:assert/strict";
import test from "node:test";
import * as site from "../src/lib/site";
import { existsSync } from "node:fs";
import { catalog, tags } from "../src/lib/content";
import { conceptPath } from "../src/lib/types";

test("llms outline links supplied content and methodology without claiming medical authority", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.buildLlmsTxt, "function", "Source-grounded llms outline is missing");
  const text = seo.buildLlmsTxt([catalog[0]], [tags[0]]);
  assert.ok(text.startsWith("# BHWiki\n"));
  assert.ok(text.includes(`${site.siteUrl()}/about`));
  assert.ok(text.includes(`${site.siteUrl()}/sitemap.xml`));
  assert.ok(text.includes(`${site.siteUrl()}/substances/${catalog[0].slug}`));
  assert.ok(text.includes(`${site.siteUrl()}${conceptPath(tags[0])}`));
  assert.ok(text.includes("not medical advice"));
  assert.ok(!text.includes(`/substances/${catalog[1].slug}`));
});

test("verification metadata is absent by default and reads optional runtime values on every call", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.verificationMetadata, "function", "Runtime verification metadata is missing");
  const names = ["BHWIKI_GOOGLE_SITE_VERIFICATION", "BHWIKI_BING_SITE_VERIFICATION"] as const;
  const saved = names.map(name => process.env[name]);
  try {
    for (const name of names) delete process.env[name];
    assert.deepEqual(seo.verificationMetadata(), {});
    process.env[names[0]] = " fixture-google-token ";
    process.env[names[1]] = "fixture-bing-token";
    assert.deepEqual(seo.verificationMetadata(), { verification: { google: "fixture-google-token", other: { "msvalidate.01": "fixture-bing-token" } } });
    process.env[names[0]] = "changed-at-runtime";
    assert.equal(seo.verificationMetadata().verification?.google, "changed-at-runtime");
  } finally {
    names.forEach((name, i) => { if (saved[i] === undefined) delete process.env[name]; else process.env[name] = saved[i]; });
  }
});

test("JSON-LD serializes hostile source text without breaking out of its script element", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.serializeJsonLd, "function", "Safe JSON-LD serializer is missing");
  const data = { text: '</script><script>alert("x")</script>&\u2028\u2029' };
  const serialized = seo.serializeJsonLd(data);
  assert.ok(!/[<>&\u2028\u2029]/.test(serialized));
  assert.deepEqual(JSON.parse(serialized), data);
});

test("article JSON-LD cites visible sources with real breadcrumbs and no invented attribution or dates", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.articleJsonLd, "function", "Article JSON-LD is missing");
  const data = seo.articleJsonLd({ path: "/substances/caffeine", title: "Caffeine", description: "A sourced draft", sources: ["https://pubmed.ncbi.nlm.nih.gov/123/", "https://pubmed.ncbi.nlm.nih.gov/123/"], breadcrumbs: [{ path: "/", name: "Library" }, { path: "/substances/caffeine", name: "Caffeine" }] });
  const [article, breadcrumb] = data["@graph"];
  assert.equal(article["@type"], "Article");
  assert.equal(article.mainEntityOfPage, `${site.siteUrl()}/substances/caffeine`);
  assert.equal(article.headline, "Caffeine");
  assert.deepEqual(article.citation, ["https://pubmed.ncbi.nlm.nih.gov/123/"]);
  assert.deepEqual(breadcrumb.itemListElement.map(n => [n.position, n.name, n.item]), [[1, "Library", site.siteUrl()], [2, "Caffeine", `${site.siteUrl()}/substances/caffeine`]]);
  assert.ok(!/datePublished|dateModified|lastReviewed|author|reviewedBy|AggregateRating|MedicalWebPage/.test(JSON.stringify(data)));
});

test("site JSON-LD describes an independent reference, not a medical authority", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.siteJsonLd, "function", "Site JSON-LD is missing");
  const data = seo.siteJsonLd();
  assert.equal(data["@context"], "https://schema.org");
  assert.deepEqual(data["@graph"].map(n => n["@type"]), ["Organization", "WebSite"]);
  assert.equal(data["@graph"][0].name, "BHWiki");
  assert.equal(data["@graph"][1].url, site.siteUrl());
  assert.equal(data["@graph"][1].publisher["@id"], data["@graph"][0]["@id"]);
  assert.ok(!/MedicalOrganization|Physician|founder|sameAs|SearchAction|rating/.test(JSON.stringify(data)));
});

test("sitemap enumerates only supplied public records, routes kinds correctly and invents no dates", async () => {
  const seo = await import("../src/lib/seo");
  assert.equal(typeof seo.buildSitemap, "function", "Sitemap builder is missing");
  const urls = seo.buildSitemap(catalog, tags);
  const expected = ["/", "/about", "/contribute", "/concepts", "/effects", "/outcomes", ...catalog.map(s => `/substances/${s.slug}`), ...tags.map(conceptPath)].map(p => p === "/" ? site.siteUrl() : `${site.siteUrl()}${p}`).sort();
  assert.deepEqual(urls.map(u => u.url).sort(), expected);
  assert.equal(new Set(urls.map(u => u.url)).size, urls.length);
  assert.ok(urls.every(u => !u.lastModified && !u.url.includes("?") && !/history|compare|interactions|\/api\/|\/graph/.test(u.url)));
  const subset = seo.buildSitemap([catalog[0]], [tags[0]]);
  assert.equal(subset.length, 8);
  assert.equal(seo.buildSitemap([catalog[0], catalog[0]], [tags[0], tags[0]]).length, 8);
});

test("page metadata has clean canonical, matching social identity and query indexing policy", async () => {
  assert.ok(existsSync("src/lib/seo.ts"), "SEO metadata builder is missing");
  const { pageMetadata, SITE_TITLE, SITE_DESCRIPTION } = await import("../src/lib/seo");
  assert.deepEqual(pageMetadata({ path: "/", title: SITE_TITLE, description: SITE_DESCRIPTION }).title, { absolute: SITE_TITLE });
  const metadata = pageMetadata({ path: "/effects/relaxation", title: "Relaxation", description: "A sourced definition." });
  assert.equal(metadata.alternates?.canonical, "https://bhwiki.devpins.org/effects/relaxation");
  assert.equal(metadata.title, "Relaxation");
  assert.equal(metadata.description, "A sourced definition.");
  const og = metadata.openGraph as Record<string, unknown>;
  assert.equal(og.url, metadata.alternates?.canonical);
  assert.equal(og.title, "Relaxation · BHWiki");
  assert.equal(og.description, metadata.description);
  assert.deepEqual(og.images, [{ url: "https://bhwiki.devpins.org/og.png", width: 1200, height: 630, alt: "BHWiki — A field guide to substances" }]);
  assert.equal((metadata.twitter as Record<string, unknown>).title, og.title);
  assert.equal((metadata.robots as { index: boolean }).index, true);
  for (const search of [{ q: "caffeine" }, { tag: "stimulant" }, { page: "2" }, { evidence: "human" }, { focus: "caffeine" }]) {
    const variant = pageMetadata({ path: "/", title: "Library", description: "Sourced articles", search });
    assert.equal((variant.robots as { index: boolean }).index, false);
    assert.equal((variant.robots as { follow: boolean }).follow, true);
    assert.equal((variant.robots as { googleBot: { index: boolean } }).googleBot.index, false);
    assert.equal(variant.alternates?.canonical, "https://bhwiki.devpins.org");
  }
  assert.equal((pageMetadata({ path: "/", title: "Library", description: "Sourced articles", search: { utm_source: "share", gclid: "click" } }).robots as { index: boolean }).index, true);
  assert.equal((pageMetadata({ path: "/compare", title: "Compare", description: "Comparison tool", noindex: true }).robots as { index: boolean }).index, false);
});

test("SEO uses one production origin regardless of environment or request host", () => {
  const previous = process.env.BHWIKI_SITE_URL;
  try {
    delete process.env.BHWIKI_SITE_URL;
    assert.equal(site.siteUrl(), "https://bhwiki.devpins.org");
    process.env.BHWIKI_SITE_URL = "http://localhost:3086/poison?x=1";
    assert.equal(site.siteUrl(), "https://bhwiki.devpins.org");
  } finally {
    if (previous === undefined) delete process.env.BHWIKI_SITE_URL;
    else process.env.BHWIKI_SITE_URL = previous;
  }
});
