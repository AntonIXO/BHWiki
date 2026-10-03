import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import { validateContent } from "../src/lib/validate-content";
import { validateCanonicalSources } from "../src/lib/publication-metadata";
import type { Reference, Substance, Tag } from "../src/lib/types";

export type MolekulManifest = {
  source: string; retrievedAt: string; method: string; classes: string[]; urlTokens: string[];
  profiles: [string, string, string, number, number[]][];
};
export const slugAliases: Record<string, string> = { phenotropil: "phenylpiracetam" };
export function expandSourceToken(token: string): string {
  if (/^\d+$/.test(token)) return `https://pubmed.ncbi.nlm.nih.gov/${token}/`;
  if (/^PMC\d+$/.test(token)) return `https://pmc.ncbi.nlm.nih.gov/articles/${token}/`;
  const url = new URL(token);
  if (url.protocol !== "https:" || url.username || url.password) throw new Error("Expected a public HTTPS source link");
  return url.href;
}
export function manifestFingerprint(manifest: MolekulManifest): number {
  const text = JSON.stringify({ classes: manifest.classes, urls: manifest.urlTokens.map(expandSourceToken), profiles: manifest.profiles });
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return hash >>> 0;
}

// Preserve the acquisition trail in the manifest, but omit product/catalogue pages from public references.
export function isResearchLink(url: string): boolean {
  return !["armbio.bio", "zdravushka.com.ua"].includes(new URL(url).hostname);
}
const groups: [string, string][] = [
  ["biological-preparation", "Biological preparation"], ["adamantane-research", "Experimental compound"],
  ["adamantane-research", "Experimental compound"], ["peptide-research", "Research peptide / preparation"],
  ["combination-research", "Combination"], ["actoprotector", "Actoprotector"],
  ["combination-research", "Combination"], ["biological-preparation", "Preparation research lead"],
  ["combination-research", "Combination"], ["peptide-research", "Research peptide"],
  ["experimental-compound", "Experimental compound"], ["biological-preparation", "Biological preparation"],
  ["biological-preparation", "Biological preparation"], ["biological-preparation", "Biological preparation"],
  ["peptide-research", "Research peptide / formulation"], ["nootropic-research", "Nootropic"],
  ["peptide-research", "Research peptide"], ["peptide-research", "Research peptide"],
  ["biological-preparation", "Biological preparation"], ["actoprotector", "Actoprotector research"],
  ["nootropic-research", "Nootropic"], ["nootropic-research", "Nootropic"],
  ["nootropic-research", "Nootropic"], ["combination-research", "Combination"],
  ["peptide-research", "Research peptide"], ["experimental-compound", "Experimental compound"],
];
const concepts = [
  ["biological-preparation", "Biological preparation", "A preparation obtained from biological material. Its composition can include many constituents; a study of a preparation does not identify one molecule as its active ingredient."],
  ["adamantane-research", "Adamantane research", "An index of records grouped around adamantane chemistry and related research codes. A scaffold or code does not establish pharmacological equivalence, a confirmed structure, or clinical benefit."],
  ["peptide-research", "Peptide research", "A research index covering peptide candidates and preparation records. Sequence, stereochemistry and formulation must be checked for each record before findings can be transferred between them."],
  ["combination-research", "Combination research", "A record for an intervention containing more than one ingredient. A combination study cannot isolate an ingredient's effect or demonstrate synergy without a suitable comparison."],
  ["actoprotector", "Actoprotector", "A historical research classification for preparations studied in relation to work capacity under demanding conditions. It is not a clinical evidence grade or a promise of protection during hazardous exposure."],
  ["experimental-compound", "Experimental compound", "A candidate compound or research code awaiting preparation-specific evaluation. This label supplies no conclusion about human efficacy, approval or safety."],
  ["nootropic-research", "Nootropic research", "A discovery grouping for compounds investigated in cognition-related research. The label does not establish cognitive improvement in any population."],
] as const;

export function makeImportedRecord(manifest: MolekulManifest, row: MolekulManifest["profiles"][number], existing: Substance | undefined, canonical: Map<string, Reference>, identityNote?: string): Substance {
  const [sourceSlug, name, alias, classIndex, indices] = row;
  const group = groups[classIndex];
  if (!group || !manifest.classes[classIndex]) throw new Error(`Unknown classification: ${sourceSlug}`);
  const slug = slugAliases[sourceSlug] ?? sourceSlug;
  const profileUrl = `${manifest.source}compounds/${sourceSlug}`;
  const links = indices.map(index => {
    if (manifest.urlTokens[index] === undefined) throw new Error(`Missing URL ${index}: ${slug}`);
    return { index, url: expandSourceToken(manifest.urlTokens[index]) };
  }).filter(({ url }) => isResearchLink(url));
  const draft = existing ? structuredClone(existing) : {
    slug, name, subtitle: "Source-linked research profile.", aliases: [],
    formula: "Not established", molecularWeight: "Not established", pubchemCid: null, smiles: "Not established",
    category: group[1], tags: [], accent: "#a9b993", reviewedAt: manifest.retrievedAt, editorialStatus: "sourced-draft",
    summary: "", description: "", evidenceNote: "",
    halfLife: { label: "Not established here", low: null, high: null, context: "This import contains a research source trail, not a verified elimination estimate.", sourceId: "molekul-profile", observationId: `${slug}-unassessed` },
    pkObservations: [{ id: `${slug}-unassessed`, analyte: name, route: "Not assessed", formulation: "Preparation identity requires verification", population: "Not assessed", endpoint: "elimination-half-life", statistic: "not-established", value: null, low: null, high: null, unit: "hours", context: "No elimination observation has been independently curated for this imported record.", sourceId: "molekul-profile", modelEligible: false }],
    kinetics: { onset: "Not assessed", peak: "Not assessed", duration: "Not assessed", bioavailability: "Not assessed", metabolism: "Not assessed", sourceId: "molekul-profile" },
    modifiers: [], doses: [], effects: [], outcomes: [], claims: [], mechanisms: [], cautions: [], interactions: [], experienceLinks: [], references: [], legal: [],
  } satisfies Substance;
  // A reviewed article must be deliberately reconciled, never silently downgraded by an acquisition script.
  if (draft.editorialStatus === "editorially-reviewed") throw new Error(`Manual reconciliation required for reviewed article: ${slug}`);
  const title = existing?.name ?? name;
  if (name !== title && !draft.aliases.includes(name)) draft.aliases.push(name);
  if (alias && !draft.aliases.includes(alias)) draft.aliases.push(alias);
  if (!draft.tags.includes(group[0])) draft.tags.push(group[0]);
  const discoveryNote = `The Molekul profile was parsed on ${manifest.retrievedAt}. Its classification and linked source trail are discovery information; external documents, cohort overlap, preparation identity and findings have not been independently appraised in this import.`;
  if (!existing || existing.subtitle === "Identity record.") {
    draft.subtitle = "Source-linked research profile.";
    draft.category = group[1];
    draft.summary = `${title} is indexed here under ${group[1].toLowerCase()}. ${links.length ? "A source trail is available for further research." : "The imported profile supplies no eligible external research links."} Clinical effects and exposure protocols remain unassessed.`;
    draft.description = `${existing ? existing.description + "\n\n" : ""}${title} appears in Molekul's research atlas. The original profile groups it as ${manifest.classes[classIndex].toLowerCase()}. This describes the atlas's working classification, not an established indication. ${draft.pubchemCid === null ? "A single molecular identity has not been established here; no formula or structure is assigned to this record." : "The existing PubChem identity is retained separately from the newly collected research links."}\n\n${discoveryNote}`;
  } else if (!draft.description.includes(discoveryNote)) draft.description += `\n\n${discoveryNote}`;
  if (identityNote) {
    const note = `Identity lead from Molekul: ${identityNote} This account has not been independently verified against the original chemistry or preparation documentation.`;
    if (!draft.description.includes(note)) draft.description += `\n\n${note}`;
    if (draft.summary.startsWith(`${title} is indexed here`)) draft.summary = `${title} — ${identityNote} This is a secondary-source identity lead; clinical effects and exposure protocols remain unassessed.`;
  }
  if (!draft.evidenceNote.includes(discoveryNote)) draft.evidenceNote = `${draft.evidenceNote ? draft.evidenceNote + "\n\n" : ""}${discoveryNote} The year on a source-discovery link is its capture year, not the paper's publication year. Missing doses, kinetics and clinical observations remain unassessed.`;
  const incoming: Reference[] = [{
    id: "molekul-profile", title: `${name}: Molekul research profile`, authors: "Molekul", year: 2026,
    url: profileUrl, kind: "Research atlas · accessed 2026", insight: "Provenance of the imported name, working classification and source trail.",
    limitation: "A secondary discovery resource. This import does not independently verify its findings or count its links as independent studies.", funding: "Not assessed in this import.",
  }, ...links.map(({ index, url }): Reference => {
    const known = canonical.get(url);
    if (known) return { ...known, id: `molekul-link-${index}`, insight: "Linked by the Molekul profile; see the original publication and existing BHWiki curation for its applicable context.", limitation: "Association with this profile is a discovery lead, not a newly appraised result or an independent replication." };
    const token = manifest.urlTokens[index];
    const identifier = /^\d+$/.test(token) ? `PubMed PMID ${token}` : /^PMC\d+$/.test(token) ? `PubMed Central ${token}` : `${new URL(url).hostname} document ${index + 1}`;
    return { id: `molekul-link-${index}`, title: `${identifier} — source link captured 2026; metadata pending`, authors: "Bibliographic metadata not independently verified", year: 2026, url,
      kind: "Source discovery link · capture year", insight: "This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.",
      limitation: "Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.", funding: "Not assessed in this import." };
  })];
  for (const ref of incoming) if (!draft.references.some(previous => previous.url === ref.url)) draft.references.push(ref);
  draft.reviewedAt = manifest.retrievedAt;
  return draft;
}

export function importMolekul(root: string) {
  const manifest: MolekulManifest = JSON.parse(readFileSync(path.join(root, "data/imports/molekul-2026-10-04.json"), "utf8"));
  const identityNotes: Record<string, string> = JSON.parse(readFileSync(path.join(root, "data/imports/molekul-identity-notes.json"), "utf8"));
  if (manifest.profiles.length !== 95 || manifest.urlTokens.length !== 274 || manifestFingerprint(manifest) !== 3078886368) throw new Error("Manifest differs from verified Chrome extraction");
  const content = path.join(root, "content");
  const corpus = loadCorpus(content);
  const canonical = new Map(corpus.substances.flatMap(s => s.references.map(r => [r.url, r] as const)));
  const pending: [string, string][] = [];
  let nextOrder = Math.max(...corpus.substances.map(s => parseContentSource(`substances/${s.slug}.md`, readFileSync(path.join(content, `substances/${s.slug}.md`), "utf8")).order).filter(order => order !== Number.MAX_SAFE_INTEGER)) + 1;
  let added = 0, enriched = 0;
  for (const row of manifest.profiles) {
    const slug = slugAliases[row[0]] ?? row[0];
    const existing = corpus.substances.find(s => s.slug === slug);
    if (!identityNotes[row[0]]) throw new Error(`Missing original identity note: ${row[0]}`);
    const record = makeImportedRecord(manifest, row, existing, canonical, identityNotes[row[0]]);
    const file = `substances/${slug}.md`;
    const order = existing ? parseContentSource(file, readFileSync(path.join(content, file), "utf8")).order : nextOrder++;
    if (!existing) added++;
    if (existing) enriched++;
    pending.push([path.join(content, file), serializeContent(file, { collection: "substances", record, order })]);
    const at = corpus.substances.findIndex(s => s.slug === slug);
    if (at < 0) corpus.substances.push(record); else corpus.substances[at] = record;
  }
  for (const [id, label, description] of concepts) {
    const file = `concepts/class/${id}.md`;
    if (corpus.tags.some(t => t.id === id)) continue;
    const record: Tag = { id, label, kind: "class", description, aliases: [], sourceUrls: ["https://molekul.io/compounds"] };
    corpus.tags.push(record);
    pending.push([path.join(content, file), serializeContent(file, { collection: "tags", record, order: Number.MAX_SAFE_INTEGER })]);
  }
  validateContent(corpus);
  validateCanonicalSources(corpus.substances.flatMap(s => s.references));
  for (const [file, source] of pending) if (!existsSync(file) || readFileSync(file, "utf8") !== source) writeFileSync(file, source);
  return { profiles: manifest.profiles.length, added, enriched, total: corpus.substances.length, distinctResearchLinks: manifest.urlTokens.map(expandSourceToken).filter(isResearchLink).length };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(importMolekul(path.resolve(import.meta.dirname, "..")));
