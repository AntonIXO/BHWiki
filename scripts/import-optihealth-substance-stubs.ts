import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadCorpus,
  parseContentSource,
  serializeContent,
} from "../src/lib/content-markdown";
import {
  validateCanonicalSources,
  validateEditorialMetadata,
} from "../src/lib/publication-metadata";
import { validateContent } from "../src/lib/validate-content";
import type { Reference, Substance } from "../src/lib/types";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const IDENTITY_STATUSES = ["mapped", "unmapped", "ambiguous"] as const;

type RecordValue = Record<string, unknown>;
export type OptiHealthIdentityStatus = (typeof IDENTITY_STATUSES)[number];

export type OptiHealthCandidate = {
  sourceId: string;
  name: string;
  sourceUrl: string;
  identityStatus: OptiHealthIdentityStatus;
  canonicalSlug: string | null;
  aliases: string[];
  candidateSlugs?: string[];
  reviewNote?: string;
  references: Reference[];
};

export type OptiHealthCandidateFile = {
  schemaVersion: 1;
  source: string;
  generatedAt: string;
  candidates: OptiHealthCandidate[];
};

type CoverageStatus = OptiHealthIdentityStatus;
export type CoverageRow = {
  sourceId: string;
  name: string;
  sourceUrl: string;
  canonicalSlug: string | null;
  candidateSlugs: string[];
  status: CoverageStatus;
  reason: string;
};

export type CoverageReport = {
  counts: { mapped: number; unmapped: number; ambiguous: number; total: number };
  mapped: CoverageRow[];
  unmapped: CoverageRow[];
  ambiguous: CoverageRow[];
};

export type PlannedStubWrite = {
  relativePath: string;
  source: string;
  record: Substance;
};

export type StubImportPlan = {
  report: CoverageReport;
  writes: PlannedStubWrite[];
};

function isRecord(value: unknown): value is RecordValue {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requireText(value: unknown, pathName: string): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${pathName} must be non-empty text`);
  return value;
}

function requireHttps(value: unknown, pathName: string): string {
  const text = requireText(value, pathName);
  let url: URL;
  try {
    url = new URL(text);
  } catch {
    throw new Error(`${pathName} must be an HTTPS URL`);
  }
  if (url.protocol !== "https:" || url.username || url.password) throw new Error(`${pathName} must be an HTTPS URL`);
  return text;
}

function requireSlug(value: unknown, pathName: string): string {
  const slug = requireText(value, pathName);
  if (!SLUG.test(slug)) throw new Error(`${pathName} is not a canonical slug`);
  return slug;
}

function requireDate(value: unknown, pathName: string): string {
  const text = requireText(value, pathName);
  if (!Number.isFinite(Date.parse(text))) throw new Error(`${pathName} must be an ISO date`);
  return text;
}

function reference(value: unknown, pathName: string): Reference {
  if (!isRecord(value)) throw new Error(`${pathName} must be an object`);
  const result = {
    id: requireText(value.id, `${pathName}.id`),
    title: requireText(value.title, `${pathName}.title`),
    authors: requireText(value.authors, `${pathName}.authors`),
    year: value.year,
    url: requireHttps(value.url, `${pathName}.url`),
    kind: requireText(value.kind, `${pathName}.kind`),
    insight: requireText(value.insight, `${pathName}.insight`),
    limitation: requireText(value.limitation, `${pathName}.limitation`),
  } as Reference;
  if (!Number.isInteger(result.year) || result.year < 1600 || result.year > 2200) throw new Error(`${pathName}.year is invalid`);
  for (const key of ["pmid", "doi", "funding", "sponsorshipStatus", "conflictsOfInterest", "conflictOfInterestStatus", "disclosureUrl"] as const) {
    if (value[key] !== undefined) (result as unknown as Record<string, unknown>)[key] = value[key];
  }
  return result;
}

function normalizeAlias(value: string): string {
  return value.trim().toLocaleLowerCase("en");
}

/** Parse and reject untrusted candidate JSON before it can affect source files. */
export function validateOptiHealthCandidateFile(input: unknown): OptiHealthCandidateFile {
  if (!isRecord(input) || input.schemaVersion !== 1) throw new Error("OptiHealth candidate file requires schemaVersion 1");
  const source = requireText(input.source, "source");
  const generatedAt = requireDate(input.generatedAt, "generatedAt");
  if (!Array.isArray(input.candidates) || input.candidates.length === 0) throw new Error("candidates must be a non-empty array");
  const sourceIds = new Set<string>();
  const candidates = input.candidates.map((value, index): OptiHealthCandidate => {
    const p = `candidates[${index}]`;
    if (!isRecord(value)) throw new Error(`${p} must be an object`);
    const sourceId = requireText(value.sourceId, `${p}.sourceId`);
    if (sourceIds.has(sourceId)) throw new Error(`duplicate candidate sourceId: ${sourceId}`);
    sourceIds.add(sourceId);
    const name = requireText(value.name, `${p}.name`);
    const sourceUrl = requireHttps(value.sourceUrl, `${p}.sourceUrl`);
    if (!IDENTITY_STATUSES.includes(value.identityStatus as OptiHealthIdentityStatus)) throw new Error(`${p}.identityStatus is invalid`);
    const identityStatus = value.identityStatus as OptiHealthIdentityStatus;
    const canonicalSlug = value.canonicalSlug === null ? null : requireSlug(value.canonicalSlug, `${p}.canonicalSlug`);
    const aliases = value.aliases === undefined ? [] : value.aliases;
    if (!Array.isArray(aliases) || aliases.some((alias) => typeof alias !== "string" || !alias.trim())) throw new Error(`${p}.aliases must contain non-empty text`);
    const normalizedAliases = aliases.map(normalizeAlias);
    if (new Set(normalizedAliases).size !== normalizedAliases.length) throw new Error(`${p}.aliases contains duplicate aliases`);
    if (normalizedAliases.includes(normalizeAlias(name))) throw new Error(`${p}.aliases must not repeat the canonical name`);
    const candidateSlugs = value.candidateSlugs === undefined ? [] : value.candidateSlugs;
    if (!Array.isArray(candidateSlugs) || candidateSlugs.some((slug) => typeof slug !== "string" || !SLUG.test(slug))) throw new Error(`${p}.candidateSlugs must contain canonical slugs`);
    if (new Set(candidateSlugs).size !== candidateSlugs.length) throw new Error(`${p}.candidateSlugs contains duplicates`);
    if (identityStatus === "ambiguous") {
      if (canonicalSlug !== null || candidateSlugs.length < 2) throw new Error(`${p}.ambiguous candidates require at least two candidateSlugs and no canonicalSlug`);
      requireText(value.reviewNote, `${p}.reviewNote`);
    } else if (canonicalSlug === null) {
      throw new Error(`${p}.${identityStatus} candidate requires canonicalSlug`);
    }
    if (identityStatus === "mapped" && candidateSlugs.length > 0 && !candidateSlugs.includes(canonicalSlug!)) throw new Error(`${p}.mapped candidateSlugs must include canonicalSlug`);
    if (identityStatus === "unmapped" && candidateSlugs.length > 0) throw new Error(`${p}.unmapped candidate cannot include candidateSlugs`);
    if (!Array.isArray(value.references) || value.references.length === 0) throw new Error(`${p}.references must be non-empty`);
    const references = value.references.map((item, refIndex) => reference(item, `${p}.references[${refIndex}]`));
    if (new Set(references.map((item) => item.id)).size !== references.length) throw new Error(`${p}.references contains duplicate IDs`);
    if (!references.some((item) => item.url === sourceUrl)) throw new Error(`${p}.sourceUrl must match a reference URL`);
    return {
      sourceId,
      name,
      sourceUrl,
      identityStatus,
      canonicalSlug,
      aliases: [...aliases],
      candidateSlugs: [...candidateSlugs],
      ...(value.reviewNote === undefined ? {} : { reviewNote: requireText(value.reviewNote, `${p}.reviewNote`) }),
      references,
    };
  });
  validateCanonicalSources(candidates.flatMap((candidate) => candidate.references));
  return { schemaVersion: 1, source, generatedAt, candidates };
}

function row(candidate: OptiHealthCandidate, status: CoverageStatus, reason: string): CoverageRow {
  return {
    sourceId: candidate.sourceId,
    name: candidate.name,
    sourceUrl: candidate.sourceUrl,
    canonicalSlug: candidate.canonicalSlug,
    candidateSlugs: [...(candidate.candidateSlugs ?? [])],
    status,
    reason,
  };
}

/** Audit against the source corpus without resolving names heuristically or inventing links. */
export function auditOptiHealthCoverage(input: OptiHealthCandidateFile, corpus: { substances: Substance[]; tags: { id: string }[] }): CoverageReport {
  const file = validateOptiHealthCandidateFile(input);
  const substanceSlugs = new Set(corpus.substances.map((substance) => substance.slug));
  const tagSlugs = new Set(corpus.tags.map((tag) => tag.id));
  const rows = file.candidates.map((candidate) => {
    if (candidate.identityStatus === "ambiguous") return row(candidate, "ambiguous", candidate.reviewNote ?? "Identity requires review.");
    if (substanceSlugs.has(candidate.canonicalSlug!)) return row(candidate, "mapped", `Canonical BHWiki article exists: ${candidate.canonicalSlug}.`);
    if (tagSlugs.has(candidate.canonicalSlug!)) return row(candidate, "ambiguous", `Canonical slug conflicts with an existing BHWiki concept: ${candidate.canonicalSlug}.`);
    return row(candidate, "unmapped", `No BHWiki substance article exists for ${candidate.canonicalSlug}.`);
  }).sort((a, b) => a.sourceId.localeCompare(b.sourceId));
  const mapped = rows.filter((item) => item.status === "mapped");
  const unmapped = rows.filter((item) => item.status === "unmapped");
  const ambiguous = rows.filter((item) => item.status === "ambiguous");
  return { counts: { mapped: mapped.length, unmapped: unmapped.length, ambiguous: ambiguous.length, total: rows.length }, mapped, unmapped, ambiguous };
}

export const auditCoverage = auditOptiHealthCoverage;

/** Build an identity-only sourced draft. No effects, doses, structures, or relations are inferred. */
export function buildOptiHealthSubstanceStub(candidate: OptiHealthCandidate, generatedAt: string): Substance {
  if (candidate.identityStatus === "ambiguous") throw new Error(`ambiguous candidate is review-only: ${candidate.name}`);
  if (!candidate.canonicalSlug) throw new Error(`Candidate has no canonical slug: ${candidate.name}`);
  const sourceId = candidate.references[0]?.id;
  if (!sourceId) throw new Error(`Candidate has no identity source: ${candidate.name}`);
  const identityObservation = `${candidate.canonicalSlug}-identity-unassessed`;
  const date = generatedAt.slice(0, 10);
  return {
    slug: candidate.canonicalSlug,
    name: candidate.name,
    subtitle: "Source-backed identity stub.",
    summary: `${candidate.name} is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.`,
    description: `This page records the source-backed identity label ${candidate.name}. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.`,
    aliases: [...candidate.aliases],
    formula: "Not established",
    molecularWeight: "Not established",
    pubchemCid: null,
    smiles: "Not established",
    category: "Identity record",
    tags: [],
    accent: "#a9b993",
    evidenceNote: "Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.",
    reviewedAt: date,
    editorialStatus: "sourced-draft",
    halfLife: { label: "Not established", low: null, high: null, context: "No pharmacokinetic observation was supplied by this identity import.", sourceId, observationId: identityObservation },
    pkObservations: [{ id: identityObservation, analyte: candidate.name, route: "Not assessed", formulation: "Identity-only record", population: "Not assessed", endpoint: "elimination-half-life", statistic: "not-established", value: null, low: null, high: null, unit: "hours", context: "This identity import does not establish a pharmacokinetic observation.", sourceId, modelEligible: false }],
    kinetics: { onset: "Not established", peak: "Not established", duration: "Not established", bioavailability: "Not established", metabolism: "Not established", sourceId },
    modifiers: [],
    doses: [],
    effects: [],
    outcomes: [],
    claims: [],
    mechanisms: [],
    cautions: [],
    interactions: [],
    experienceLinks: [],
    references: structuredClone(candidate.references),
    legal: [],
  };
}

function substanceOrder(root: string, corpus: { substances: Substance[] }): number {
  const orders = corpus.substances.map((substance) => {
    const file = path.join(root, "content", "substances", `${substance.slug}.md`);
    return parseContentSource(`substances/${substance.slug}.md`, readFileSync(file, "utf8")).order;
  }).filter((order) => order !== Number.MAX_SAFE_INTEGER);
  return (orders.length ? Math.max(...orders) : 0) + 1;
}

/** Validate the complete corpus and return deterministic source-file writes; do not write by default. */
export function planOptiHealthSubstanceStubs(root: string, input: unknown): StubImportPlan {
  const file = validateOptiHealthCandidateFile(input);
  const contentRoot = path.join(root, "content");
  const corpus = loadCorpus(contentRoot);
  const report = auditOptiHealthCoverage(file, corpus);
  const candidates = new Map(file.candidates.map((candidate) => [candidate.sourceId, candidate]));
  let nextOrder = substanceOrder(root, corpus);
  const writes: PlannedStubWrite[] = [];
  for (const coverage of report.unmapped) {
    const candidate = candidates.get(coverage.sourceId)!;
    const record = buildOptiHealthSubstanceStub(candidate, file.generatedAt);
    const relativePath = `substances/${record.slug}.md`;
    const source = serializeContent(relativePath, { collection: "substances", record, order: nextOrder++ }).replace(/\n+$/, "\n");
    const roundTrip = parseContentSource(relativePath, source);
    if (JSON.stringify(roundTrip.record) !== JSON.stringify(record)) throw new Error(`Stub changed during Markdown round trip: ${relativePath}`);
    corpus.substances.push(record);
    writes.push({ relativePath, source, record });
  }
  validateContent(corpus);
  validateCanonicalSources(corpus.substances.flatMap((substance) => substance.references));
  validateEditorialMetadata(corpus.substances, JSON.parse(readFileSync(path.join(contentRoot, "editorial.json"), "utf8")));
  writes.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  return { report, writes };
}

export function importOptiHealthSubstanceStubs(root: string, inputPath: string, apply = false) {
  const input = JSON.parse(readFileSync(inputPath, "utf8")) as unknown;
  const plan = planOptiHealthSubstanceStubs(root, input);
  if (apply) {
    for (const write of plan.writes) {
      const destination = path.join(root, "content", write.relativePath);
      if (existsSync(destination)) throw new Error(`Refusing to overwrite existing content: ${write.relativePath}`);
      mkdirSync(path.dirname(destination), { recursive: true });
      writeFileSync(destination, write.source);
    }
  }
  return { ...plan, applied: apply };
}

function main() {
  const args = process.argv.slice(2);
  let inputPath = "";
  let apply = false;
  while (args.length) {
    const flag = args.shift();
    if (flag === "--apply") { apply = true; continue; }
    if (flag === "--input") {
      const value = args.shift();
      if (!value || value.startsWith("--")) throw new Error("--input requires a JSON candidate file");
      inputPath = path.resolve(value);
      continue;
    }
    throw new Error(`Unknown argument: ${flag}`);
  }
  if (!inputPath) throw new Error("Usage: bun scripts/import-optihealth-substance-stubs.ts --input data/imports/candidates.json [--apply]");
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const result = importOptiHealthSubstanceStubs(root, inputPath, apply);
  console.log(JSON.stringify({ applied: result.applied, counts: result.report.counts, files: result.writes.map((write) => write.relativePath) }, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
