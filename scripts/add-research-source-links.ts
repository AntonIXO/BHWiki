import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { parseContentSource, serializeContent } from "../src/lib/content-markdown";
import type { Reference } from "../src/lib/types";

const root = "data/research/pending-2026-10-09";
const today = "2026-10-10";

function slugOf(name: string) { return name.replace(/-(?:chrome-pro|chrome)$/, ""); }
function scanUrls(text: string): string[] {
  const found: string[] = [];
  let cursor = 0;
  while (true) {
    const start = text.indexOf("https://", cursor);
    if (start < 0) break;
    let i = start;
    let parentheses = 0;
    for (; i < text.length; i++) {
      const char = text[i];
      if (/\s|[<>\]"']/.test(char)) break;
      if (char === "(") parentheses++;
      else if (char === ")") {
        if (parentheses === 0) break;
        parentheses--;
      }
    }
    const url = text.slice(start, i).replace(/[.,;:]+$/, "");
    if (!found.includes(url)) found.push(url);
    cursor = Math.max(i + 1, start + 8);
  }
  return found;
}
function identity(url: string) {
  // Keep the exact returned URL, including registry search parameters and
  // inspected disclosure query strings. The capture itself is the provenance
  // record; collapsing URLs here would silently discard returned links.
  return url;
}

const changed: { slug: string; added: number }[] = [];
for (const entry of readdirSync(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const sourcePath = `${root}/${entry.name}/deep-research.md`;
  const articlePath = `substances/${slugOf(entry.name)}.md`;
  const articleFile = `content/${articlePath}`;
  try {
    const raw = readFileSync(sourcePath, "utf8");
    if (raw.length <= 1000) continue;
    const sourceUrls = scanUrls(raw);
    const sourceText = readFileSync(articleFile, "utf8");
    const article = parseContentSource(articlePath, sourceText);
    if (article.collection !== "substances") continue;
    const existing = new Set(article.record.references.map(ref => identity(ref.url)));
    const usedIds = new Set(article.record.references.map(ref => ref.id));
    const references = [...article.record.references];
    let added = 0;
    for (const url of sourceUrls) {
      const key = identity(url);
      if (existing.has(key)) continue;
      let ordinal = added + 1;
      let id = `dr-${article.record.slug}-link-${ordinal}`;
      while (usedIds.has(id)) { ordinal++; id = `dr-${article.record.slug}-link-${ordinal}`; }
      const reference: Reference = {
        id,
        title: "Deep Research source link",
        authors: "Deep Research returned source; metadata not separately normalized",
        year: Number(article.record.reviewedAt.slice(0, 4)) || 2026,
        url,
        kind: "Deep Research source link",
        insight: "Direct link returned by the completed Deep Research report; the article's Evidence note preserves the associated finding and limitation.",
        limitation: "Bibliographic metadata was not separately normalized from the capture.",
        funding: "Not assessed.",
        sponsorshipStatus: "not-assessed",
        conflictsOfInterest: "Not assessed.",
        conflictOfInterestStatus: "not-assessed",
      };
      references.push(reference);
      usedIds.add(id);
      existing.add(key);
      added++;
    }
    if (!added) continue;
    const marker = "<!-- Deep Research source-link ledger -->";
    const ledger = `${marker}\n\nEvery HTTPS link returned by this run is represented in References. Links whose full publication metadata was not recoverable remain explicitly labeled as source links.`;
    const record = { ...article.record, references, evidenceNote: article.record.evidenceNote.includes(marker) ? article.record.evidenceNote : `${article.record.evidenceNote}\n\n${ledger}` };
    const output = serializeContent(articlePath, { collection: "substances", record, order: Number(sourceText.match(/^x-order:\s*(\d+)/m)?.[1] ?? Number.MAX_SAFE_INTEGER) });
    writeFileSync(articleFile, output);
    changed.push({ slug: article.record.slug, added });
  } catch (error) {
    if (String(error).includes("ENOENT")) continue;
    throw error;
  }
}
console.log(JSON.stringify({ changed, totalAdded: changed.reduce((sum, item) => sum + item.added, 0) }, null, 2));
