import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { substances } from "../src/lib/content";

async function main() {
const manifestPath = "data/research/molecule-images.json";
const priorRecords = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")).records : [];
const recorded = [];
for (const s of substances.filter(s => s.pubchemCid !== null && !existsSync(`public/molecules/${s.slug}.png`))) {
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${s.pubchemCid}/PNG?image_size=500x500&record_type=2d`;
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`${s.slug}: PubChem image HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) throw new Error(`${s.slug}: expected PNG data`);
  writeFileSync(`public/molecules/${s.slug}.png`, bytes);
  recorded.push({ slug: s.slug, pubchemCid: s.pubchemCid, url, sha256: createHash("sha256").update(bytes).digest("hex") });
  console.log(`Saved ${s.slug} chemical identity depiction.`);
}
if (recorded.length) writeFileSync(manifestPath, JSON.stringify({ source: "NCBI PubChem PUG REST 2D image service", retrievedAt: "2026-10-04", records: [...priorRecords, ...recorded] }, null, 2) + "\n");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
