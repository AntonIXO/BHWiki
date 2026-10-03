import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { portalManifest, deepStructures, type PortalSpec } from "./portal-manifest";
import { serializeContent } from "../src/lib/content-markdown";
import type { ExperienceLink, Substance } from "../src/lib/types";

const root = path.resolve(import.meta.dirname, "..");
const imageDir = path.join(root, "public/molecules");
const cacheFile = "/tmp/bhwiki-portal-cache.json";
const skipFile = "/tmp/bhwiki-portal-skips.json";
const reviewedAt = "2026-10-03";
const pauseMs = 220;
const userAgent = "BHWiki/0.1 (PubChem identity curation)";

const reserved = new Set([
  "caffeine", "l-theanine", "creatine", "melatonin", "nicotine", "psilocybin",
  "modafinil", "methylphenidate", "diphenhydramine", "citicoline", "acetylcholine",
  ...deepStructures.map((item) => item.slug),
]);

const accents: Record<string, string> = {
  psychedelic: "#b1abcf",
  lysergamide: "#b1abcf",
  tryptamine: "#a89bc4",
  phenethylamine: "#c8a18f",
  cannabinoid: "#adbd8e",
  dissociative: "#9fbab0",
  arylcyclohexylamine: "#9fbab0",
  deliriant: "#c4978c",
  depressant: "#c3b093",
  opioid: "#c3b093",
  benzodiazepine: "#c4b48a",
  stimulant: "#bea17c",
  "amino-acid": "#a9b993",
};

const classLabels: Record<string, string> = {
  psychedelic: "Psychedelic",
  stimulant: "Stimulant",
  "amino-acid": "Amino acid derivative",
  dissociative: "Dissociative",
  deliriant: "Deliriant",
  cannabinoid: "Cannabinoid",
  opioid: "Opioid",
  benzodiazepine: "Benzodiazepine",
  depressant: "Depressant",
  lysergamide: "Lysergamide",
  tryptamine: "Tryptamine",
  phenethylamine: "Phenethylamine",
  arylcyclohexylamine: "Arylcyclohexylamine",
};

type CacheEntry = { cid: number; formula: string; weight: string; smiles: string; title: string };
type Skip = { slug: string; name: string; query: string; reason: string; cids?: number[] };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
let nextSlot = 0;
async function pace() {
  const now = Date.now();
  const start = Math.max(now, nextSlot);
  nextSlot = start + pauseMs;
  if (start > now) await sleep(start - now);
}

async function pubchem(url: string): Promise<{ status: number; body: string }> {
  let last = { status: 0, body: "" };
  for (let attempt = 0; attempt < 4; attempt += 1) {
    await pace();
    const response = await fetch(url, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    const body = await response.text();
    last = { status: response.status, body };
    if (response.status !== 429 && response.status !== 503) return last;
    await sleep(1500 * (attempt + 1));
  }
  return last;
}

async function resolveCid(spec: PortalSpec): Promise<{ cid?: number; skip?: Skip }> {
  if (spec.cid) return { cid: spec.cid };
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(spec.query)}/cids/JSON`;
  const { status, body } = await pubchem(url);
  if (status === 404 || body.includes("NotFound")) return { skip: { slug: spec.slug, name: spec.name, query: spec.query, reason: "PubChem name not found" } };
  if (status !== 200) return { skip: { slug: spec.slug, name: spec.name, query: spec.query, reason: `PubChem name lookup HTTP ${status}` } };
  const parsed = JSON.parse(body) as { IdentifierList?: { CID?: number[] }; Fault?: { Message?: string } };
  const cids = parsed.IdentifierList?.CID ?? [];
  if (cids.length === 1) return { cid: cids[0] };
  return { skip: { slug: spec.slug, name: spec.name, query: spec.query, reason: cids.length === 0 ? "PubChem name not found" : `Ambiguous PubChem name (${cids.length} CIDs)`, cids: cids.slice(0, 8) } };
}

async function properties(cid: number): Promise<CacheEntry | string> {
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/Title,MolecularFormula,MolecularWeight,SMILES,ConnectivitySMILES/JSON`;
  const { status, body } = await pubchem(url);
  if (status !== 200) return `property HTTP ${status}`;
  const row = (JSON.parse(body) as { PropertyTable?: { Properties?: Array<Record<string, string | number>> } }).PropertyTable?.Properties?.[0];
  if (!row) return "property table empty";
  const formula = String(row.MolecularFormula ?? "");
  const weight = String(row.MolecularWeight ?? "").replace(/g\/mol/i, "").trim();
  const smiles = String(row.ConnectivitySMILES || row.SMILES || "");
  if (!/^[A-Z][A-Za-z0-9+\-\[\]()]*$/.test(formula) || !/^\d+(\.\d+)?$/.test(weight) || !smiles.trim()) return "incomplete identity";
  return { cid, formula, weight: `${weight} g/mol`, smiles, title: String(row.Title ?? "") };
}

async function downloadPng(slug: string, cid: number) {
  const destination = path.join(imageDir, `${slug}.png`);
  await pace();
  const response = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG?image_size=600x400`, { headers: { "User-Agent": userAgent } });
  if (!response.ok) throw new Error(`${slug} PNG HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") throw new Error(`${slug} PNG was not an image`);
  await writeFile(destination, bytes);
}

async function experienceLink(spec: PortalSpec): Promise<ExperienceLink[]> {
  const title = spec.wiki ?? spec.name.replace(/ /g, "_");
  if (!title || title.includes("/")) return [];
  const url = `https://psychonautwiki.org/wiki/${title}`;
  await pace();
  const controller = AbortSignal.timeout(20000);
  let response: Response;
  try {
    response = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller, headers: { "User-Agent": "BHWiki/0.1 (substance-page existence check)" } });
  } catch {
    return [];
  }
  if (response.status === 405 || response.status === 403) {
    try {
      response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(20000), headers: { "User-Agent": "BHWiki/0.1 (substance-page existence check)" } });
    } catch {
      return [];
    }
  }
  if (!response.ok) return [];
  const finalUrl = new URL(response.url);
  if (finalUrl.hostname !== "psychonautwiki.org" || finalUrl.search || finalUrl.hash || !/^\/wiki\/[^/]+$/.test(finalUrl.pathname)) return [];
  return [{ title: `${spec.name} on PsychonautWiki`, url: finalUrl.toString(), publisher: "PsychonautWiki" }];
}

function accentFor(tags: string[]) {
  for (const tag of tags) if (accents[tag]) return accents[tag];
  return "#a9b993";
}

function indexPhrase(spec: PortalSpec) {
  const labels = spec.tags.map((tag) => classLabels[tag]).filter(Boolean);
  return labels.length ? `It is indexed under ${labels.join(", ")}.` : `It is filed as ${spec.category}.`;
}

function substance(spec: PortalSpec, identity: CacheEntry, links: ExperienceLink[]): Substance {
  const summary = `${spec.name} is recorded here as ${identity.formula}, PubChem CID ${identity.cid}. ${indexPhrase(spec)} Effects, doses, pharmacokinetics, interactions, and legal status have not been assessed for this draft.`;
  return {
    slug: spec.slug,
    name: spec.name,
    subtitle: "Identity record.",
    summary,
    description: `${spec.name} is an identity record for PubChem CID ${identity.cid} (${identity.formula}). The structure and molecular weight come from that compound record. Salts, stereoisomers, preparations, and commercial products can differ. ${indexPhrase(spec)} Effects, doses, pharmacokinetics, interactions, and legal status have not been assessed for this draft.`,
    aliases: spec.aliases,
    formula: identity.formula,
    molecularWeight: identity.weight,
    pubchemCid: identity.cid,
    smiles: identity.smiles,
    category: spec.category,
    tags: spec.tags,
    accent: accentFor(spec.tags),
    evidenceNote: "Only chemical identity is curated. Effects, doses, pharmacokinetics, interactions, and legal status have not been assessed.",
    reviewedAt,
    editorialStatus: "sourced-draft",
    halfLife: {
      label: "Not established here",
      low: null,
      high: null,
      context: "The citation identifies the compound rather than reporting a PubChem half-life finding.",
      sourceId: "pubchem",
      observationId: `${spec.slug}-identity`,
    },
    pkObservations: [{
      id: `${spec.slug}-identity`,
      analyte: spec.name,
      route: "Not assessed",
      formulation: "Parent compound record",
      population: "Not assessed",
      endpoint: "elimination-half-life",
      statistic: "not-established",
      value: null,
      low: null,
      high: null,
      unit: "hours",
      context: "The citation identifies the compound rather than reporting an elimination half-life.",
      sourceId: "pubchem",
      modelEligible: false,
    }],
    kinetics: {
      onset: "Not assessed",
      peak: "Not assessed",
      duration: "Not assessed",
      bioavailability: "Not assessed",
      metabolism: "Not assessed",
      sourceId: "pubchem",
    },
    modifiers: [],
    doses: [],
    effects: [],
    outcomes: [],
    claims: [],
    mechanisms: [],
    cautions: [],
    interactions: [],
    experienceLinks: links,
    references: [{
      id: "pubchem",
      title: `${spec.name}: compound identity and structure`,
      authors: "NCBI PubChem",
      year: 2026,
      url: `https://pubchem.ncbi.nlm.nih.gov/compound/${identity.cid}`,
      kind: "Chemical database",
      insight: "Source of the displayed formula, molecular weight, structure, and connectivity SMILES.",
      limitation: "The parent compound identity is distinct from salts, formulations, and commercial product quality.",
      funding: "US National Library of Medicine.",
    }],
    legal: [],
  };
}

async function loadCache(): Promise<Record<string, CacheEntry>> {
  try {
    return JSON.parse(await readFile(cacheFile, "utf8")) as Record<string, CacheEntry>;
  } catch {
    return {};
  }
}

const seen = new Set<string>();
const skips: Skip[] = [];
const cache = await loadCache();
const substances: Substance[] = [];
await mkdir(imageDir, { recursive: true });

for (const spec of portalManifest) {
  if (seen.has(spec.slug) || reserved.has(spec.slug)) {
    skips.push({ slug: spec.slug, name: spec.name, query: spec.query, reason: "Reserved or duplicate slug" });
    continue;
  }
  seen.add(spec.slug);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(spec.slug)) {
    skips.push({ slug: spec.slug, name: spec.name, query: spec.query, reason: "Invalid slug" });
    continue;
  }
  let identity = cache[spec.slug];
  if (!identity || (spec.cid && identity.cid !== spec.cid)) {
    const resolved = await resolveCid(spec);
    if (!resolved.cid) {
      skips.push(resolved.skip!);
      continue;
    }
    const props = await properties(resolved.cid);
    if (typeof props === "string") {
      skips.push({ slug: spec.slug, name: spec.name, query: spec.query, reason: props, cids: [resolved.cid] });
      continue;
    }
    identity = props;
    cache[spec.slug] = identity;
    await writeFile(cacheFile, JSON.stringify(cache, null, 2));
  }
  await downloadPng(spec.slug, identity.cid);
  const links = await experienceLink(spec);
  substances.push(substance(spec, identity, links));
  console.log(`ok ${spec.slug} CID ${identity.cid} links ${links.length}`);
}

for (const deep of deepStructures) {
  await downloadPng(deep.slug, deep.cid);
  console.log(`png ${deep.slug}`);
}

substances.sort((a, b) => a.slug.localeCompare(b.slug));
const substanceDir = path.join(root, "content/substances");
await mkdir(substanceDir, { recursive: true });
let written = 0;
for (const [index, record] of substances.entries()) {
  const relative = `substances/${record.slug}.md`;
  const target = path.join(root, "content", relative);
  try {
    await readFile(target, "utf8");
    console.log(`keep ${record.slug}`);
    continue;
  } catch { /* A missing file is the stub to write. */ }
  // Identity stubs only. Effects, doses, and legal status stay empty.
  // Do not add prose copied from PsychonautWiki or molekul.io.
  await writeFile(target, serializeContent(relative, { collection: "substances", record, order: 100 + index }));
  written += 1;
}
await writeFile(skipFile, JSON.stringify(skips, null, 2));
console.log(`wrote ${written} stubs, kept ${substances.length - written}, skipped ${skips.length}`);
