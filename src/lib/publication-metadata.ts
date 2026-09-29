import { createHash } from "node:crypto";
import type { Reference, Substance } from "./types";

export type PublicationMetadata = { contentHash: string; contributors: string[]; reviewers: string[]; reviewReference?: string };
export function contentHash(document: Substance): string {
  return createHash("sha256").update(JSON.stringify(document)).digest("hex");
}
function record(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
function names(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((name) => typeof name === "string" && Boolean(name.trim())) && new Set(value).size === value.length;
}
function httpsUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname); } catch { return false; }
}

/** Reviews attest to exactly one source snapshot, never to a mutable article slug. */
export function validateEditorialMetadata(substances: Substance[], input: unknown): Map<string, PublicationMetadata> {
  if (!record(input) || input.version !== 1 || !record(input.articles)) throw new Error("Editorial metadata requires version 1 and an articles map");
  const articles = new Map(substances.map((s) => [s.slug, s]));
  const result = new Map<string, PublicationMetadata>();
  for (const [slug, value] of Object.entries(input.articles)) {
    const article = articles.get(slug);
    if (!article) throw new Error(`Editorial metadata references unknown article: ${slug}`);
    if (!record(value) || !names(value.contributors) || !names(value.reviewers) || typeof value.contentHash !== "string") throw new Error(`Invalid editorial metadata: ${slug}`);
    if (value.contentHash !== contentHash(article)) throw new Error(`Stale editorial metadata: ${slug}; regenerate the hash and obtain review of the updated snapshot`);
    if (value.reviewReference !== undefined && !httpsUrl(value.reviewReference)) throw new Error(`Editorial review reference must be an HTTPS URL: ${slug}`);
    result.set(slug, value as PublicationMetadata);
  }
  for (const article of substances) {
    const metadata = result.get(article.slug);
    if (article.editorialStatus === "editorially-reviewed" && (!metadata?.reviewers.length || !metadata.reviewReference)) {
      throw new Error(`Reviewed article ${article.slug} requires named reviewers and a reviewReference for its exact content hash`);
    }
  }
  return result;
}

export function sourceIdentity(ref: Reference) {
  return { doi: ref.doi?.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").toLowerCase() ?? null, pmid: ref.pmid ?? null, url: ref.url };
}

/** Article-specific interpretations can differ; bibliographic identity cannot. */
export function validateCanonicalSources(references: Reference[]): void {
  const parents = references.map((_, i) => i);
  const find = (index: number): number => parents[index] === index ? index : (parents[index] = find(parents[index]));
  const keys = new Map<string, number>();
  references.forEach((ref, index) => {
    const identity = sourceIdentity(ref);
    for (const [field, value] of Object.entries(identity)) {
      if (!value) continue;
      const key = `${field}:${value}`;
      const prior = keys.get(key);
      if (prior !== undefined) parents[find(index)] = find(prior);
      keys.set(key, index);
    }
  });
  const groups = new Map<number, Reference[]>();
  references.forEach((ref, index) => { const id = find(index); groups.set(id, [...(groups.get(id) ?? []), ref]); });
  for (const refs of groups.values()) {
    const base = refs[0];
    for (const field of ["doi", "pmid"] as const) {
      const identities = new Set(refs.map((ref) => sourceIdentity(ref)[field]).filter(Boolean));
      if (identities.size > 1) throw new Error(`Conflicting canonical source ${field}: ${base.title}`);
    }
    for (const field of ["title", "authors", "year", "url", "kind"] as const) {
      if (refs.some((ref) => ref[field] !== base[field])) throw new Error(`Conflicting canonical source ${field}: ${base.title}; reconcile shared bibliographic metadata before publication`);
    }
  }
}
