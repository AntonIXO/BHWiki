import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { loadCorpus, parseContentSource, serializeContent, type ContentRecord } from "../src/lib/content-markdown";
import type { Claim, Interaction, Observation, Reference, Substance } from "../src/lib/types";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pendingRoot = path.join(root, "data/research/pending-2026-10-09");
const contentRoot = path.join(root, "content");
const corpus = loadCorpus(contentRoot);
const today = "2026-10-10";
const outcomeIds = new Set(corpus.tags.filter((t) => t.kind === "outcome").map((t) => t.id));
const effectIds = new Set(corpus.tags.filter((t) => t.kind === "effect").map((t) => t.id));
const fallbackOutcome = [...outcomeIds][0] ?? "cognitive-task-performance";
const fallbackEffect = [...effectIds][0] ?? "subjective-effect";
const canonicalReferences = corpus.substances.flatMap((s) => s.references).sort((a, b) => Number(a.id.startsWith("S")) - Number(b.id.startsWith("S")));
function referenceIdentity(ref: Reference) {
  return [ref.pmid ? `pmid:${ref.pmid}` : "", ref.doi ? `doi:${ref.doi.toLowerCase()}` : "", `url:${ref.url.replace(/[?#].*$/, "").replace(/\/$/, "").toLowerCase()}`].filter(Boolean);
}
function reconcileReferences(record: Substance) {
  for (const ref of record.references) {
    const known = canonicalReferences.find((candidate) => referenceIdentity(candidate).some((key) => referenceIdentity(ref).includes(key)));
    if (!known) continue;
    for (const field of ["title", "authors", "year", "url", "kind", "pmid", "doi"] as const) {
      if (known[field] !== undefined) (ref as any)[field] = known[field];
    }
  }
}

type AnyRecord = Record<string, any>;
type Sections = Map<string, string>;

function topicSlug(name: string) {
  return name.replace(/-chrome-pro$/, "").replace(/-chrome$/, "");
}
function text(v: unknown, fallback = "Not established") {
  if (v === null || v === undefined) return fallback;
  if (typeof v === "string") return v.trim() || fallback;
  if (Array.isArray(v)) return v.join(", ") || fallback;
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}
function num(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const m = v.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
    if (m) return Number(m[0]);
  }
  return null;
}
function slugId(v: unknown, fallback: string) {
  const s = text(v, fallback).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return s || fallback;
}
function sections(raw: string): Sections {
  const out: Sections = new Map();
  const matches = [...raw.matchAll(/^##\s+(.+?)\s*$/gm)];
  matches.forEach((m, i) => {
    const start = (m.index ?? 0) + m[0].length;
    const end = i + 1 < matches.length ? (matches[i + 1].index ?? raw.length) : raw.length;
    // Deep Research often annotates a contract heading with a citation, e.g.
    // `## Doses (source)`. The article contract keeps the canonical heading.
    out.set(m[1].trim().replace(/\s+(?:\([^)]*\)|\[[^\]]*\])\s*$/, ""), raw.slice(start, end).trim());
  });
  return out;
}
function withoutFences(value: string) {
  return value.replace(/```(?:yaml|yml|text)?\s*\n?/gi, "").replace(/```/g, "").trim();
}
function prose(value: string | undefined) {
  if (!value) return "";
  return withoutFences(value)
    .replace(/^#\s+/gm, "### ")
    .replace(/^##\s+/gm, "### ")
    .replace(/^Research Metadata[\s\S]*$/m, "")
    .trim();
}
function yamlBlocks(value: string | undefined): unknown[] {
  if (!value) return [];
  const result: unknown[] = [];
  for (const m of value.matchAll(/```(?:yaml|yml)\s*\n([\s\S]*?)```/gi)) {
    try {
      const parsed = parseYaml(m[1]);
      if (Array.isArray(parsed)) result.push(...parsed);
      else if (parsed && typeof parsed === "object") result.push(parsed);
    } catch {
      // Some reports contain a table or a partially emitted YAML block. The raw text is retained in Evidence note.
    }
  }
  return result;
}
function rawDetail(parts: [string, string | undefined][]) {
  return parts
    .filter(([, body]) => body)
    .map(([label, body]) => `**${label}:**\n\n${prose(body)}`)
    .join("\n\n")
    .trim();
}
function sourceNumber(v: unknown) {
  const m = text(v, "S1").match(/(?:S|R)?(\d+)/i);
  return m ? `S${m[1]}` : "S1";
}
function sourceIds(v: unknown): string[] {
  if (Array.isArray(v)) return v.flatMap(sourceIds);
  return text(v, "S1").split(/[;,\s]+/).filter(Boolean).map(sourceNumber);
}
function citations(raw: string) {
  const urls: { title: string; url: string }[] = [];
  for (const match of raw.matchAll(/\[([^\]]+)\]\((https:\/\/[^\s<>\]]+)\)/g)) urls.push({ title: match[1], url: match[2].replace(/[.,;]+$/, "") });
  if (!urls.length) for (const match of raw.matchAll(/https:\/\/[^\s<>\]]+/g)) urls.push({ title: "Deep Research source", url: match[0].replace(/[.,;]+$/, "") });
  const unique: { title: string; url: string }[] = [];
  const seen = new Set<string>();
  for (const item of urls) if (!seen.has(item.url)) { seen.add(item.url); unique.push(item); }
  return unique;
}
function referenceObjects(raw: string, refsSection: string | undefined) {
  const objects: AnyRecord[] = [];
  for (const item of yamlBlocks(refsSection)) if (item && typeof item === "object" && !Array.isArray(item)) objects.push(item as AnyRecord);
  const links = citations(refsSection ?? raw);
  const sourceMatches = [...raw.matchAll(/(?:\[|sourceId:\s*)S(\d+)\b/g)].map((m) => Number(m[1]));
  const maxSource = Math.max(0, ...sourceMatches);
  const n = Math.max(maxSource, objects.length, links.length);
  const refs: Reference[] = [];
  for (let i = 1; i <= n; i++) {
    const o = objects.find((x) => sourceNumber(x.sourceId ?? x.id) === `S${i}`) ?? objects[i - 1] ?? {};
    const link = links[i - 1] ?? links.find((x) => x.url === o.url);
    const url = text(o.url, link?.url ?? links[0]?.url ?? "https://pubmed.ncbi.nlm.nih.gov/");
    const sponsorship = text(o.sponsorshipStatus, "not-assessed").toLowerCase();
    const parsedStatus = ["industry-funded", "non-industry-funded", "mixed-funding", "no-external-funding", "not-reported", "not-assessed"].includes(sponsorship) ? sponsorship as Reference["sponsorshipStatus"] : "not-assessed";
    const status = parsedStatus !== "not-assessed" && !o.disclosureUrl ? "not-assessed" : parsedStatus;
    const coi = text(o.conflictOfInterestStatus ?? o.conflictsOfInterest, "not-assessed").toLowerCase();
    const parsedCoiStatus = ["declared", "none-declared", "not-reported", "not-assessed"].includes(coi) ? coi as Reference["conflictOfInterestStatus"] : "not-assessed";
    const coiStatus = parsedCoiStatus !== "not-assessed" && !o.disclosureUrl ? "not-assessed" : parsedCoiStatus;
    refs.push({
      id: `S${i}`,
      title: text(o.title, link?.title ?? `Deep Research source S${i}`),
      authors: text(o.authors ?? o.authorsOrOrganization ?? o.organization, "Not assessed"),
      year: num(o.year) ?? 2026,
      url,
      kind: text(o.kind, "Deep Research source"),
      insight: text(o.insight, "Source cited by the returned Deep Research report."),
      limitation: text(o.limitation, "Publication metadata, funding, or disclosure details were not fully recovered in the capture."),
      funding: text(o.funding, "Not assessed."),
      sponsorshipStatus: status,
      conflictsOfInterest: text(o.conflictsOfInterest, "Not assessed."),
      conflictOfInterestStatus: coiStatus,
      ...(o.disclosureUrl ? { disclosureUrl: String(o.disclosureUrl) } : {}),
    });
  }
  const fallback: Reference = { id: "S1", title: "Deep Research source", authors: "Not assessed", year: 2026, url: "https://pubmed.ncbi.nlm.nih.gov/", kind: "Deep Research source", insight: "Returned report source; metadata not recovered.", limitation: "Metadata not recovered.", funding: "Not assessed.", sponsorshipStatus: "not-assessed", conflictsOfInterest: "Not assessed.", conflictOfInterestStatus: "not-assessed" };
  return refs.length ? refs : [fallback];
}
function sourceFor(item: AnyRecord, refs: Reference[]) {
  const id = sourceNumber(item.sourceId ?? item.sourceIds?.[0] ?? item.source ?? "S1");
  return refs.some((r) => r.id === id) ? id : refs[0].id;
}
function studyOf(slug: string, section: string, i: number, item: AnyRecord) {
  const raw = item.study && typeof item.study === "object" ? item.study : item;
  const sampleSize = num(raw.sampleSize);
  const durationDays = num(raw.durationDays);
  return {
    id: slugId(raw.id, `${slug}-${section.toLowerCase()}-${i + 1}`),
    ...(raw.design || item.design ? { design: text(raw.design ?? item.design) } : {}),
    ...(sampleSize && sampleSize > 0 ? { sampleSize: Math.round(sampleSize) } : {}),
    ...(raw.populationLabels || item.population ? { populationLabels: Array.isArray(raw.populationLabels) ? raw.populationLabels.map(String) : [text(item.population)] } : {}),
    ...(raw.comparator || item.comparator ? { comparator: text(raw.comparator ?? item.comparator) } : {}),
    ...(raw.route || item.route ? { route: text(raw.route ?? item.route) } : {}),
    ...(raw.formulation || item.formulation ? { formulation: text(raw.formulation ?? item.formulation) } : {}),
    ...(durationDays !== null && durationDays >= 0 ? { durationDays } : {}),
    ...(raw.assessmentTime || item.assessmentTime ? { assessmentTime: text(raw.assessmentTime ?? item.assessmentTime) } : {}),
  };
}
function observation(slug: string, section: string, i: number, item: AnyRecord, refs: Reference[], kind: "effect" | "outcome"): Observation {
  const concept = text(item.conceptId, kind === "outcome" ? fallbackOutcome : fallbackEffect);
  const conceptId = kind === "outcome" ? (outcomeIds.has(concept) ? concept : fallbackOutcome) : (effectIds.has(concept) ? concept : fallbackEffect);
  const name = text(item.name ?? item.label ?? item.outcome ?? item.measure, `${slug} ${kind}`);
  return {
    ...(item.id ? { id: slugId(item.id, `${slug}-${kind}-${i + 1}`) } : { id: `${slug}-${kind}-${i + 1}` }),
    ...(item.study || item.design || item.sampleSize || item.population ? { study: studyOf(slug, section, i, item) } : {}),
    ...(item.conflictingSourceIds || item.conflictingSources ? { conflictingSourceIds: sourceIds(item.conflictingSourceIds ?? item.conflictingSources) } : { conflictingSourceIds: [] }),
    reportType: "measured-assessment",
    conceptId,
    name,
    direction: ["Increased", "Decreased", "Variable"].includes(item.direction) ? item.direction : "Variable",
    evidence: "Human research",
    description: text(item.description ?? item.insight ?? item.finding ?? item.assertion, `Returned Deep Research ${kind} record; see the preserved report detail in Evidence note.`),
    sourceId: sourceFor(item, refs),
    population: text(item.population ?? item.populationLabels),
    exposure: text(item.exposure ?? item.dose ?? item.regimen),
    instrument: item.instrument ? text(item.instrument) : null,
    magnitude: item.magnitude !== undefined ? text(item.magnitude) : null,
  } as Observation;
}
function toDoses(slug: string, items: AnyRecord[], refs: Reference[]): Substance["doses"] {
  return items.map((item, i) => {
    const amount = text(item.amount ?? item.observed_regimen ?? item.regimen ?? item.dose, "Not established");
    const quantity = num(item.quantity ?? item.amount);
    return { label: text(item.label ?? item.preparation ?? item.ingredient, `${slug} research exposure ${i + 1}`), amount, quantity, quantityMax: num(item.quantityMax), unit: text(item.unit, "not established"), ingredient: text(item.ingredient ?? item.preparation, slug), formulation: text(item.formulation ?? item.preparation, "Not established"), route: text(item.route, "Not established"), frequency: text(item.frequency, "Not established"), duration: text(item.duration ?? item.observed_duration, "Not established"), population: text(item.population, "Not established"), purpose: text(item.purpose, "Research exposure; not a dosing recommendation."), sourceCategory: "research", note: `Original Deep Research fields preserved: ${JSON.stringify(item)}`, sourceId: sourceFor(item, refs) };
  });
}
function toPK(slug: string, items: AnyRecord[], refs: Reference[]): Substance["pkObservations"] {
  return items.map((item, i) => ({ id: slugId(item.id, `${slug}-pk-${i + 1}`), analyte: text(item.analyte ?? item.parameter, "Parent compound or reported analyte"), route: text(item.route, "Not established"), formulation: text(item.formulation, "Not established"), population: text(item.population, "Humans"), endpoint: "elimination-half-life", statistic: "not-established", value: null, low: null, high: null, unit: "hours", context: `Original Deep Research PK detail: ${JSON.stringify(item)}`, sourceId: sourceFor(item, refs), modelEligible: false }));
}
function toMechanisms(items: AnyRecord[], refs: Reference[]) {
  return items.map((item) => ({ title: text(item.title ?? item.label ?? item.mechanism, "Research mechanism"), description: text(item.description ?? item.insight, `Original Deep Research mechanism: ${JSON.stringify(item)}`), sourceId: sourceFor(item, refs), ...(item.conceptId ? { conceptId: text(item.conceptId) } : {}) }));
}
function toCautions(items: AnyRecord[], refs: Reference[]) { return items.map((item) => ({ title: text(item.title ?? item.label, "Research caution"), description: text(item.description ?? item.note, `Original Deep Research caution: ${JSON.stringify(item)}`), sourceId: sourceFor(item, refs) })); }
function toClaims(slug: string, items: AnyRecord[], refs: Reference[]): Claim[] { return items.map((item, i) => { const sources = sourceIds(item.sourceIds ?? item.sourceId).filter((id) => refs.some((r) => r.id === id)); return { id: slugId(item.id, `${slug}-claim-${i + 1}`), assertion: text(item.assertion ?? item.claim ?? item.title, `Research claim for ${slug}`), relation: text(item.relation, "evidence-boundary"), participants: [{ entityId: `substance:${slug}`, role: "intervention" }, { entityId: "tag:cognitive-performance", role: "reported-outcome-context" }], context: text(item.context, "Returned Deep Research report"), sourceIds: sources.length ? sources : [refs[0].id], conflictingSourceIds: sourceIds(item.conflictingSourceIds), assessment: "not-formally-assessed", limitation: text(item.limitation, "Source-specific limitation preserved in the returned report.") }; }); }
function toInteractions(items: AnyRecord[], refs: Reference[]): Interaction[] { return items.map((item, i) => ({ id: slugId(item.id, `interaction-${i + 1}`), name: text(item.name ?? item.interactingExposure ?? item.other, "Documented or hypothesized coexposure"), otherSlug: item.otherSlug ? slugId(item.otherSlug, "") || null : null, summary: text(item.summary ?? item.description ?? item.issue, `Original Deep Research interaction: ${JSON.stringify(item)}`), sourceId: sourceFor(item, refs), context: text(item.context, "Evidence context preserved from Deep Research"), conflictingSourceIds: sourceIds(item.conflictingSourceIds) })); }
function toLegal(items: AnyRecord[], refs: Reference[]) { return items.map((item) => ({ jurisdiction: text(item.jurisdiction, "Not established"), activity: text(item.activity ?? item.rule ?? item.scope, "Not established"), status: text(item.status ?? item.applicability, `Original Deep Research legal detail: ${JSON.stringify(item)}`), sourceUrl: text(item.sourceUrl, refs[0].url), asOf: today })); }

function build(slug: string, raw: string): Substance {
  const s = sections(raw);
  const refs = referenceObjects(raw, s.get("References"));
  const reportTitle = raw.match(/^#\s+(.+)$/m)?.[1] ?? slug;
  const name = reportTitle.replace(/^Research Report:\s*Research exactly\s*/i, "").replace(/\s*\(.*$/, "").trim() || slug;
  let detail = rawDetail([["Doses", s.get("Doses")], ["Pharmacokinetics", s.get("Pharmacokinetics")], ["Modifiers", s.get("Modifiers")], ["Effects", s.get("Effects")], ["Outcomes", s.get("Outcomes")], ["Mechanisms", s.get("Mechanisms")], ["Cautions", s.get("Cautions")], ["Claims", s.get("Claims")], ["Interactions", s.get("Interactions")], ["Legal", s.get("Legal")]]);
  if (!detail) detail = prose(raw.split(/^##\s+(?:References|Citations|Research Metadata)\b/im)[0]);
  const evidence = [prose(s.get("Evidence note")), detail ? `**Full Deep Research detail retained from the returned report:**\n\n${detail}` : ""].filter(Boolean).join("\n\n");
  const doses = toDoses(slug, yamlBlocks(s.get("Doses")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)), refs);
  const pk = toPK(slug, yamlBlocks(s.get("Pharmacokinetics")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)), refs);
  const modifiers = yamlBlocks(s.get("Modifiers")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)).map((x, i) => ({ label: text(x.label ?? x.factor, `Modifier ${i + 1}`), effect: text(x.effect ?? x.direction, "Variable"), detail: text(x.detail ?? x.description, JSON.stringify(x)), sourceId: sourceFor(x, refs), observationId: text(x.observationId, pk[0]?.id ?? `${slug}-pk-1`), factorType: "other" as const, direction: "variable" as const }));
  const effects = yamlBlocks(s.get("Effects")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)).map((x, i) => observation(slug, "Effects", i, x, refs, "effect"));
  const outcomes = yamlBlocks(s.get("Outcomes")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)).map((x, i) => observation(slug, "Outcomes", i, x, refs, "outcome"));
  const claims = yamlBlocks(s.get("Claims")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x));
  const interactions = yamlBlocks(s.get("Interactions")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x));
  const legal = yamlBlocks(s.get("Legal")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x));
  const aliases = [...new Set([slug.replace(/-/g, " "), ...[...raw.matchAll(/^(?:alias|brand|aliases):\s*(.+)$/gim)].flatMap((m) => m[1].replace(/[\[\]"']/g, "").split(/,\s*/)).map((x) => x.trim()).filter(Boolean)])];
  const record: Substance = { slug, name, subtitle: "Evidence-specific research record.", summary: prose(s.get("Summary")) || `${name} — returned Deep Research evidence record.`, description: prose(s.get("Description")) || `The full returned Deep Research report is preserved in the pending acquisition folder for ${slug}.`, evidenceNote: evidence || `The full returned Deep Research report is preserved in the pending acquisition folder for ${slug}.`, aliases, formula: "Not established", molecularWeight: "Not established", pubchemCid: null, smiles: "Not established", category: "Research subject", tags: [], accent: "#888888", reviewedAt: today, editorialStatus: "sourced-draft", halfLife: { label: "Not established", low: null, high: null, context: "The returned report does not establish a validated universal human terminal half-life.", sourceId: refs[0].id, observationId: pk[0]?.id ?? `${slug}-pk-1` }, pkObservations: pk.length ? pk : [{ id: `${slug}-pk-1`, analyte: "Parent compound or reported analyte", route: "Not established", formulation: "Not established", population: "Humans", endpoint: "elimination-half-life", statistic: "not-established", value: null, low: null, high: null, unit: "hours", context: "No validated universal terminal half-life was established in the returned report.", sourceId: refs[0].id, modelEligible: false }], kinetics: { onset: "Not established", peak: "Not established", duration: "Not established", bioavailability: "Not established", metabolism: "Not established", sourceId: refs[0].id }, modifiers, doses, effects, outcomes, claims: toClaims(slug, claims, refs), mechanisms: toMechanisms(yamlBlocks(s.get("Mechanisms")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)), refs), cautions: toCautions(yamlBlocks(s.get("Cautions")).filter((x): x is AnyRecord => !!x && typeof x === "object" && !Array.isArray(x)), refs), interactions: toInteractions(interactions, refs), experienceLinks: [], references: refs, legal: toLegal(legal, refs) };
  reconcileReferences(record);
  return record;
}

function sourceIdentity(ref: Reference): string {
  return (ref.doi ? `doi:${ref.doi.toLowerCase()}` : ref.pmid ? `pmid:${ref.pmid}` : `url:${ref.url.replace(/[?#].*$/, "").replace(/\/$/, "").toLowerCase()}`);
}

function citationMap(text: string, map: Map<string, string>): string {
  return text.replace(/\[([RS])(\d+)\]/g, (_whole, _prefix, number) => `[${map.get(`S${number}`) ?? `S${number}`}]`);
}

function cloneAndRemap<T>(value: T, map: Map<string, string>): T {
  if (typeof value === "string") return citationMap(value, map) as T;
  if (Array.isArray(value)) return value.map(item => cloneAndRemap(item, map)) as T;
  if (!value || typeof value !== "object") return value;
  const result: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (["sourceId", "observationId"].includes(key) && typeof child === "string") result[key] = map.get(child) ?? child;
    else if (["sourceIds", "conflictingSourceIds"].includes(key) && Array.isArray(child)) result[key] = child.map(id => typeof id === "string" ? map.get(id) ?? id : id);
    else result[key] = cloneAndRemap(child, map);
  }
  return result as T;
}

function prefixed<T extends Record<string, unknown>>(value: T, prefix: string, map: Map<string, string>): T {
  const clone = cloneAndRemap(value, map) as T;
  const generic = clone as Record<string, unknown>;
  if (typeof generic.id === "string") generic.id = `${prefix}-${generic.id}`;
  if (typeof generic.observationId === "string" && !generic.observationId.startsWith(`${prefix}-`)) generic.observationId = `${prefix}-${generic.observationId}`;
  return clone;
}

function mergeExisting(existing: Substance, generated: Substance, slug: string, corpus: ReturnType<typeof loadCorpus>): Substance {
  const sourceMap = new Map<string, string>();
  const references = [...existing.references];
  const byIdentity = new Map(references.map(reference => [sourceIdentity(reference), reference.id]));
  for (const reference of generated.references) {
    const identity = sourceIdentity(reference);
    const existingId = byIdentity.get(identity);
    if (existingId) { sourceMap.set(reference.id, existingId); continue; }
    const id = `dr-${slug}-${reference.id.toLowerCase()}`;
    const copy = { ...reference, id };
    references.push(copy);
    byIdentity.set(identity, id);
    sourceMap.set(reference.id, id);
  }
  const prefix = `dr-${slug}`;
  const pkObservations = generated.pkObservations.map(item => prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["pkObservations"][number]);
  const generatedObservationIds = new Map(generated.pkObservations.map(item => [item.id, `${prefix}-${item.id}`]));
  const remapObservation = (item: Record<string, unknown>) => {
    const copy = prefixed(item, prefix, sourceMap);
    if (typeof copy.observationId === "string") copy.observationId = generatedObservationIds.get(String(item.observationId)) ?? copy.observationId;
    return copy;
  };
  const entities = new Set([
    ...corpus.substances.map(item => `substance:${item.slug}`),
    ...corpus.tags.map(item => `tag:${item.id}`),
  ]);
  const generatedClaims = generated.claims
    .filter(claim => claim.participants.every(participant => entities.has(participant.entityId)))
    .map(claim => prefixed(claim as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["claims"][number]);
  const generatedInteractions = generated.interactions.map(item => {
    const copy = prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["interactions"][number];
    if (copy.otherSlug && !corpus.substances.some(candidate => candidate.slug === copy.otherSlug)) copy.otherSlug = null;
    return copy;
  });
  const detailMarker = `<!-- Deep Research integration: ${slug} -->`;
  const detail = citationMap(generated.evidenceNote, sourceMap);
  const summary = citationMap(generated.summary, sourceMap);
  const description = citationMap(generated.description, sourceMap);
  return {
    ...existing,
    summary: `${existing.summary}\n\nDeep Research synthesis: ${summary}`,
    description: `${existing.description}\n\nDeep Research synthesis: ${description}`,
    evidenceNote: existing.evidenceNote.includes(detailMarker) ? existing.evidenceNote : `${existing.evidenceNote}\n\n${detailMarker}\n\n${detail}`,
    references,
    pkObservations: [...existing.pkObservations, ...pkObservations],
    doses: [...existing.doses, ...generated.doses.map(item => prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["doses"][number])],
    effects: [...existing.effects, ...generated.effects.map(item => prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["effects"][number])],
    outcomes: [...existing.outcomes, ...generated.outcomes.map(item => prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["outcomes"][number])],
    modifiers: [...existing.modifiers, ...generated.modifiers.map(item => remapObservation(item as unknown as Record<string, unknown>) as unknown as Substance["modifiers"][number])],
    mechanisms: [...existing.mechanisms, ...generated.mechanisms.map(item => { const copy = prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["mechanisms"][number]; if (copy.conceptId && !corpus.tags.some(tag => tag.id === copy.conceptId)) delete copy.conceptId; return copy; })],
    cautions: [...existing.cautions, ...generated.cautions.map(item => prefixed(item as unknown as Record<string, unknown>, prefix, sourceMap) as unknown as Substance["cautions"][number])],
    claims: [...existing.claims, ...generatedClaims],
    interactions: [...existing.interactions, ...generatedInteractions],
    legal: [...existing.legal, ...generated.legal.map(item => cloneAndRemap(item, sourceMap))],
  };
}

const generated: string[] = [];
const currentCorpus = loadCorpus(contentRoot);
const existingBySlug = new Map(currentCorpus.substances.map(record => [record.slug, record]));
for (const entry of readdirSync(pendingRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = topicSlug(entry.name);
  const target = path.join(contentRoot, "substances", `${slug}.md`);
  const sourcePath = path.join(pendingRoot, entry.name, "deep-research.md");
  if (slug === "armodafinil") continue;
  const existing = existingBySlug.get(slug);
  if (existsSync(target) && existing && (existing.subtitle === "Evidence-specific research record." || existing.evidenceNote.includes(`<!-- Deep Research integration: ${slug} -->`))) continue;
  if (!existsSync(sourcePath)) continue;
  const raw = readFileSync(sourcePath, "utf8");
  if (raw.length < 1000) continue;
  const generatedRecord = build(slug, raw);
  const record = existing ? mergeExisting(existing, generatedRecord, slug, currentCorpus) : generatedRecord;
  const recordBytes = Buffer.byteLength(JSON.stringify(record));
  if (recordBytes > 500_000) console.error("oversized fields", slug, Object.fromEntries(Object.entries(record).map(([k, v]) => [k, typeof v === "string" ? v.length : JSON.stringify(v)?.length ?? 0])));
  if (recordBytes > 500_000) throw new Error(`Refusing oversized normalized record ${slug}: ${recordBytes} bytes`);
  const existingOrder = existing ? Number(readFileSync(target, "utf8").match(/^x-order:\s*(\d+)/m)?.[1] ?? Number.MAX_SAFE_INTEGER) : Number.MAX_SAFE_INTEGER;
  const compiled = serializeContent(`substances/${slug}.md`, { collection: "substances", record, order: existingOrder } as ContentRecord);
  if (compiled.length > 500_000) throw new Error(`Refusing oversized normalized Markdown ${slug}: ${compiled.length} bytes`);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, compiled);
  generated.push(slug);
}
console.log(JSON.stringify({ generated, count: generated.length }, null, 2));
