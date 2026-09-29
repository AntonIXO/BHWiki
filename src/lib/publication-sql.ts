import type { Reference, Substance } from "./types";
import { contentHash, sourceIdentity, type PublicationMetadata } from "./publication-metadata";

const q = (value: unknown): string => value === null || value === undefined ? "NULL" : `'${String(value).replaceAll("'", "''")}'`;
const json = (value: unknown) => `${q(JSON.stringify(value))}::jsonb`;
export function sourceMatchSql(ref: Reference): string {
  const id = sourceIdentity(ref);
  return [`url = ${q(id.url)}`, ...(id.doi ? [`doi = ${q(id.doi)}`] : []), ...(id.pmid ? [`pmid = ${q(id.pmid)}`] : [])].join(" OR ");
}

/** Use inside the publisher's advisory-locked transaction only. */
export function publicationStatements(article: Substance, metadata: PublicationMetadata | undefined, sourceCommit: string | null): string[] {
  const hash = contentHash(article);
  const contributors = json(metadata?.contributors ?? []);
  const reviewers = json(metadata?.reviewers ?? []);
  const summary = article.editorialStatus === "editorially-reviewed"
    ? `Editorial review: ${metadata!.reviewReference}`
    : "Source-controlled publication; editorial review not yet completed.";
  return [
    `SELECT bhwiki.publish_article(${json(article)}, ${q(hash)}, ${q(sourceCommit)}, ${contributors}, ${reviewers}, ${q(summary)});`,
  ];
}

/** Validated bibliographic corrections update the shared canonical record. */
export function sourceUpsertStatements(ref: Reference): string[] {
  const id = sourceIdentity(ref);
  const match = sourceMatchSql(ref);
  const key = id.doi ? `doi:${id.doi}` : id.pmid ? `pmid:${id.pmid}` : `url:${id.url}`;
  // Quote the complete PL/pgSQL body as a SQL literal. A fixed dollar delimiter
  // can be terminated by data even when that data is in an inner SQL literal.
  const ambiguityCheck = `BEGIN IF (SELECT count(*) FROM bhwiki.sources WHERE ${match}) > 1 THEN RAISE EXCEPTION 'Conflicting source identities require explicit consolidation'; END IF; END`;
  const identityCheck = `BEGIN IF EXISTS (SELECT FROM bhwiki.sources WHERE (${match}) AND
      ((${q(id.doi)}::text IS NOT NULL AND doi IS NOT NULL AND doi <> ${q(id.doi)})
       OR (${q(id.pmid)}::text IS NOT NULL AND pmid IS NOT NULL AND pmid <> ${q(id.pmid)})))
      THEN RAISE EXCEPTION 'Existing canonical source has conflicting DOI or PMID; reconcile identity before publication'; END IF; END`;
  return [
    `DO ${q(ambiguityCheck)};`,
    `INSERT INTO bhwiki.sources (canonical_key, doi, pmid, title, authors, year, url, kind)
      SELECT ${[key, id.doi, id.pmid, ref.title, ref.authors, ref.year, ref.url, ref.kind].map(q).join(", ")}
      WHERE NOT EXISTS (SELECT FROM bhwiki.sources WHERE ${match});`,
    `DO ${q(identityCheck)};`,
    `UPDATE bhwiki.sources SET doi = coalesce(doi, ${q(id.doi)}), pmid = coalesce(pmid, ${q(id.pmid)}),
      title = ${q(ref.title)}, authors = ${q(ref.authors)}, year = ${q(ref.year)}, url = ${q(ref.url)}, kind = ${q(ref.kind)} WHERE ${match};`,
  ];
}
