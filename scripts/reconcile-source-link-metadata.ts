import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { loadCorpus, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import type { Reference } from "../src/lib/types";

const corpus = loadCorpus();
const canonical = new Map<string, Reference>();
for (const substance of corpus.substances) for (const reference of substance.references) {
  if (reference.title === "Deep Research source link") continue;
  canonical.set(reference.url, reference);
}
let changed = 0;
for (const entry of readdirSync("content/substances", { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
  const relative = `substances/${entry.name}`;
  const source = readFileSync(`content/${relative}`, "utf8");
  const parsed = parseContentSource(relative, source);
  if (parsed.collection !== "substances") continue;
  let touched = false;
  const references = parsed.record.references.map(reference => {
    const base = canonical.get(reference.url);
    if (reference.title !== "Deep Research source link" || !base) return reference;
    touched = true;
    const copy = { ...base, id: reference.id, url: reference.url };
    return copy;
  });
  if (!touched) continue;
  const order = Number(source.match(/^x-order:\s*(\d+)/m)?.[1] ?? Number.MAX_SAFE_INTEGER);
  writeFileSync(`content/${relative}`, serializeContent(relative, { collection: "substances", record: { ...parsed.record, references }, order }));
  changed++;
}
console.log(JSON.stringify({ changed }));
