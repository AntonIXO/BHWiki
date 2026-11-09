import { expect, test } from "@playwright/test";
const articlePaths = ["/substances/caffeine", "/concepts/adenosine-antagonist", "/effects/alertness", "/outcomes/alertness-response"];

test("llms outline serves the published reference links as plain text", async ({ request }) => {
  const response = await request.get("/llms.txt");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/plain");
  const text = await response.text();
  expect(text.startsWith("# BHWiki\n")).toBe(true);
  for (const path of articlePaths) expect(text.includes(canonical(path)), path).toBe(true);
});

test("runtime ownership tokens are optional and social images and icons are valid raster assets", async ({ request }) => {
  const html = await (await request.get("/", { headers: crawler })).text();
  for (const [variable, name] of [["SEO_EXPECT_GOOGLE_VERIFICATION", "google-site-verification"], ["SEO_EXPECT_BING_VERIFICATION", "msvalidate.01"]]) {
    if (process.env[variable]) expect(html.includes(`name="${name}" content="${process.env[variable]}"`), name).toBe(true);
    expect(html.includes(`name="${name}" content=""`), name).toBe(false);
  }
  expect(html.includes('rel="icon" href="/icon-48.png"')).toBe(true);
  expect(html.includes('rel="apple-touch-icon" href="/apple-touch-icon.png"')).toBe(true);
  for (const [path, width, height] of [["/og.png", 1200, 630], ["/icon.png", 512, 512], ["/icon-48.png", 48, 48], ["/apple-touch-icon.png", 180, 180]] as const) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toContain("image/png");
    const body = await response.body();
    expect(body.subarray(0, 8).toString("hex"), path).toBe("89504e470d0a1a0a");
    expect(body.readUInt32BE(16), path).toBe(width);
    expect(body.readUInt32BE(20), path).toBe(height);
  }
  const favicon = await request.get("/favicon.ico");
  expect(favicon.status()).toBe(200);
  expect((await favicon.body()).subarray(0, 4).toString("hex")).toBe("00000100");
});

test("structured data is server-rendered and source-linked on every article family", async ({ request }) => {
  for (const path of ["/", ...articlePaths]) {
    const response = await request.get(path, { headers: crawler });
    const html = await response.text();
    const nodes = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m => JSON.parse(m[1])["@graph"] ?? []);
    expect(nodes.some(n => n["@type"] === "WebSite"), path).toBe(true);
    expect(nodes.some(n => n["@type"] === "Organization"), path).toBe(true);
    if (path === "/") continue;
    const article = nodes.find(n => n["@type"] === "Article");
    expect(article?.mainEntityOfPage, path).toBe(canonical(path));
    expect(Array.isArray(article?.citation), path).toBe(true);
    const breadcrumb = nodes.find(n => n["@type"] === "BreadcrumbList");
    expect(breadcrumb?.itemListElement.at(-1).item, path).toBe(canonical(path));
    expect(/datePublished|dateModified|lastReviewed|reviewedBy|AggregateRating|MedicalOrganization/.test(JSON.stringify(nodes)), path).toBe(false);
  }
});

test("robots and runtime sitemap expose clean public content without blocking noindex discovery", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  const rules = await robots.text();
  expect(rules.includes(`Sitemap: ${origin}/sitemap.xml`)).toBe(true);
  expect(rules.includes("Allow: /")).toBe(true);
  expect(rules.includes("Disallow: /api/")).toBe(true);
  expect(/Disallow:.*(?:substances|concepts|effects|outcomes|\?|compare|history)/.test(rules)).toBe(false);
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  expect(urls.length).toBeGreaterThan(6);
  expect(new Set(urls).size).toBe(urls.length);
  for (const path of ["/", "/about", "/contribute", "/concepts", "/effects", "/outcomes", ...articlePaths]) expect(urls).toContain(canonical(path));
  expect(urls.every(url => url === origin || url.startsWith(`${origin}/`))).toBe(true);
  expect(urls.some(url => /\?|history|compare|interactions|\/graph|\/api\//.test(url))).toBe(false);
  expect(xml.includes("<lastmod>")).toBe(false);
});

test("article families have their own social identity; missing content is HTTP 404 and noindex", async ({ request }) => {
  for (const path of articlePaths) {
    const response = await request.get(path, { headers: crawler });
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    expect(html.includes(`<link rel="canonical" href="${canonical(path)}"`), path).toBe(true);
    expect(html.includes(`<meta property="og:url" content="${canonical(path)}"`), path).toBe(true);
    expect(html.includes('property="og:type" content="article"'), path).toBe(true);
  }
  for (const path of ["/substances/seo-nonexistent-article", "/concepts/seo-nonexistent-concept", "/effects/seo-nonexistent-effect", "/outcomes/seo-nonexistent-outcome", "/seo-nonexistent-route"]) {
    for (const headers of [crawler, { "user-agent": "Mozilla/5.0" }]) {
      const response = await request.get(path, { headers });
      expect(response.status(), path).toBe(404);
      expect((await response.text()).includes('name="robots" content="noindex"'), path).toBe(true);
    }
  }
});

test("query variants and tools are noindex without canonicalizing articles to home", async ({ request }) => {
  const paths = ["/?q=caffeine", "/?tag=stimulant", "/concepts?q=adenosine", "/effects?page=2", "/outcomes?evidence=human", `${articlePaths[1]}?page=2`, `${articlePaths[2]}?q=test`, `${articlePaths[3]}?direction=Increased`, "/substances/caffeine?query=test", "/compare", "/interactions", "/graph", "/substances/caffeine/history"];
  for (const path of paths) {
    const response = await request.get(path, { headers: crawler });
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    expect(html.includes('name="robots" content="noindex, follow"'), path).toBe(true);
    expect(html.includes(`<link rel="canonical" href="${canonical(path.split("?")[0])}"`), path).toBe(true);
  }
});

const origin = "https://bhwiki.devpins.org";
const canonical = (path: string) => path === "/" ? origin : `${origin}${path}`;
const crawler = { "user-agent": "Twitterbot/1.0" };

test("public collections have unique canonical and social metadata in initial HTML", async ({ request }) => {
  const titles = new Set<string>();
  for (const path of ["/", "/concepts", "/effects", "/outcomes", "/about", "/contribute"]) {
    const response = await request.get(path, { headers: crawler });
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    expect(html).toContain(`<link rel="canonical" href="${canonical(path)}"`);
    expect(html).toContain(`<meta property="og:url" content="${canonical(path)}"`);
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
    expect(html).toContain('name="robots" content="index, follow"');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    expect(title).toBeTruthy();
    if (path === "/") expect(title).toBe("BHWiki — A field guide to substances");
    expect(titles.has(title!)).toBe(false);
    titles.add(title!);
  }
});
