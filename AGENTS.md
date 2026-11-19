<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file; in monorepos the `next` package may not be visible from the repo root) before writing code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`.

<!-- END:nextjs-agent-rules -->

## Evidence UI

- If information is absent, omit the field. If every field in a section is absent, omit the entire section.
- Do not substitute missing information with “Not assessed”, “Not reported”, “No data”, or similar placeholders. Keep unknowns in the underlying data; do not infer values.
- Keep evidence in the compact side panel. Do not add generic limits/disclaimer boilerplate to it.
- Render Markdown emphasis and links authored in evidence text. Visually emphasize participant counts and exposure quantities without changing their meaning.

# BHWiki automated literature PR review

You are reviewing an **automated literature proposal PR**, not writing an article. Your job is to fact-check the proposal and report whether a human editor can safely use it as a source-controlled starting point.

## Scope and non-negotiable boundary

- BHWiki's editable source of truth is the Markdown corpus under `content/`.
- Files under `data/research/auto-proposals/` are review artifacts, not published evidence.
- Never treat an LLM rationale, payload, confidence value, or proposal status as evidence.
- Never merge, publish, or edit `content/substances/*` during an automated review.
- Never convert a relevance signal into a claim about efficacy, safety, mechanism, dose, interaction, or human outcome.
- Every factual assertion must be supported by the canonical publication or by an exact embedded source snapshot, and its support level must be stated.

## Files to read first

1. Read this file.
2. Read every changed file under `data/research/auto-proposals/`.
3. Read the matching `manifest-*.json` completely enough to inspect:
   - provider and retrieval timestamp;
   - PMID, DOI, PMCID and canonical URL;
   - matched BHWiki substances and terms;
   - raw provider record, including `abstractText`, publication status, publication types, grants and identifiers;
   - LLM model/provider and proposal payload.
4. Inspect the complete PR diff. The PR must not modify published article Markdown, migrations, application code, or unrelated files unless it explicitly says so.
5. Read the target substance article and its existing references before deciding whether a proposal is genuinely new or duplicates existing evidence.

## Evidence hierarchy

Use the strongest available source in this order:

1. Version-of-record full text from the canonical DOI/publisher, when accessible.
2. PubMed/Europe PMC record and abstract.
3. PMC full text only when the article is actually available through an appropriate OA/reuse path.
4. The embedded abstract snapshot in the proposal and the raw `manifest-*.json` record.
5. Model rationale, title, keywords, MeSH, or matched tags — these are discovery signals only, never evidence.

## How to retrieve and fact-check the publication

When network access is available, use identifiers rather than a generic web search:

```bash
curl -fsSL 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:<PMID>&resultType=core&format=json'
curl -fsSL 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=<PMID>&retmode=xml'
curl -IL 'https://doi.org/<DOI>'
```

The exact URLs in the PR and the returned provider payload are authoritative identifiers. Do not silently substitute a similarly titled paper, preprint, protocol, correction, or registry record.

Check all of the following:

- DOI, PMID, PMCID, title, authors, journal and publication date agree.
- The record is not retracted, corrected, superseded, or an expression of concern.
- Study design, species, population, intervention/exposure, comparator, outcome, time point and setting match the proposal.
- In vitro, in silico, animal, observational and human randomized evidence are not conflated.
- A comparator result is not rewritten as a result caused by the tracked substance.
- Association is not rewritten as causation.
- A mechanistic assay is not rewritten as a clinical outcome.
- A concentration, IC50, dose, or exposure is not rewritten as a recommended dose.
- Null, mixed, preliminary, or exploratory findings remain null, mixed, preliminary, or exploratory.
- Funding, conflicts and limitations are not inferred from author affiliations.
- Reuse rights are not inferred from an HTTP 200, an abstract page, or the presence of an OA link.

## Offline review fallback

Each proposal should contain an `## Embedded source snapshot` section. If the network is unavailable:

1. Use the embedded abstract verbatim and the raw provider record in the manifest.
2. Verify every proposed statement mechanically against that snapshot.
3. Treat the result as **abstract-only** evidence.
4. Do not claim to have checked full text, retraction status, licensing, funding disclosures, supplementary data, or results absent from the snapshot.
5. If a proposal depends on information not present in the snapshot, report `[P1] blocked: full-text/network verification required` rather than guessing.
6. A metadata-only `new-reference` proposal may still be useful when identifiers and relevance are verified; it must remain explicitly pending human full-text review.

If the proposal lacks both a reachable source and an embedded abstract, it is not fact-checkable. Request changes.

## Validate the proposal itself

For every suggestion, compare the payload and rationale against exact source spans:

- `substanceSlug` must be one of the substances actually matched by the query.
- The suggestion type must match the evidence: `new-reference`, `new-outcome`, `new-effect`, `new-claim`, `new-caution`, or `ignore`.
- Every `evidenceQuotes` item must be an exact contiguous span of the supplied abstract/source text, preserving qualifiers and negation.
- Quotes must support the *specific payload*, not merely mention the substance or topic.
- Reject payload fields that are absent from the source, even when they are scientifically plausible.
- Flag contamination when the source discusses a related compound, class, comparator, or metabolite but the proposal assigns the result to the tracked substance.
- Confidence is a triage signal, not a probability of truth.
- The proposal must not silently turn a paper about methylliberine, theacrine, a metabolite, or a combination into a caffeine-alone claim.

## Review severity and output

Report findings as review comments or in the final review summary:

- `[P0]` fabricated/contradictory source, dangerous medical/safety/dose claim, wrong article identity, or proposal that would publish a materially false claim.
- `[P1]` unsupported payload, comparator/species/design contamination, missing required full-text verification, retraction/version conflict, or source quote that does not support the assertion.
- `[P2]` missing provenance, weak wording, duplicate existing reference, incomplete metadata, or review-process issue that must be fixed before merge.

For each finding include:

```text
Severity: P0/P1/P2
File: path:line or proposal ID
Claim: exact proposal text
Evidence: exact source text or explicit “not present in supplied snapshot”
Why it matters: concise explanation
Required fix: precise correction or request for human verification
```

If there are no findings, say what was actually verified and distinguish:

- `verified from embedded abstract`;
- `verified from live canonical source`;
- `not verified because full text/network was unavailable`.

Do not write a generic “looks good” when the review only inspected the abstract.

## Required repository checks

Run the repository's normal gates when the checkout has dependencies:

```bash
bun install --frozen-lockfile
bun run content:validate
bun run test
bun run typecheck
BHWIKI_DATA_MODE=bundled bun run build
```

For a proposal-only PR, distinguish a failure caused by the proposal from a pre-existing failure in the base branch. Do not “fix” unrelated application code in an automated literature review.

## Merge policy

- Automated review never merges the PR.
- A proposal PR is acceptable only when all P0/P1 issues are absent, identifiers are consistent, every asserted field has source support, and any remaining full-text/licensing work is explicitly marked for the human editor.
- Merging a proposal PR does not publish a BHWiki claim. Human editorial work must manually update the relevant Markdown article and rerun the normal validation/publishing workflow.
