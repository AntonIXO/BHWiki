# Individual Deep Research acquisition

Each research run has exactly one substance, supplement form, food or protocol. Supporting concept and relationship Markdown files belong to that topic's output. No multi-substance report is imported. See [the rich-page prompt contract](../../docs/deep-research-workflow.md).

Research is requested through ChatGPT Deep Research in the connected Chrome browser. Downloaded originals remain acquisition material, not independent editorial review. `downloads/<slug>/manifest.json` records the chat URL, acquisition method and SHA-256 fingerprints of the preserved original Markdown. The compiled article is an ordinary file under `content/`.

Validate an output before writing:

```sh
bun run content:research --slug phenibut --article /absolute/path/phenibut.md
```

Add each necessary companion with `--companion outcomes/endpoint.md=/absolute/path/endpoint.md` (or the relevant concept/relationship path). After source inspection and repair, add `--source-url https://chatgpt.com/c/ACTUAL_CHAT_ID --apply`. The importer checks the entire proposed corpus, canonical bibliography, source/observation links, numeric research data, disclosure metadata, editorial attestation and lossless Markdown round trip before writing. It preserves existing order and rejects changes to existing shared concepts, article batching and path traversal. Existing independently reviewed articles require a separate correction workflow.

Then run `bun run content:validate`, appropriate tests and rendering checks. Successful parsing does not verify an article's clinical claims, independence, legal scope or source accessibility. Uninspected disclosures remain unknown, never independent.

## Captured collection, 2026-10-04

All 21 launched individual researches completed and were inspected in Chrome. Nineteen delivered literal article Markdown and companion files in visible report content. Generated sandbox download links sometimes had empty targets, so a temporary loopback-only form saved those visible bytes into `acquired/<slug>/`; each `capture.json` records source URL and fingerprints. No browser credentials or personal health data were exported. Noopept rendered its report as visible JSON text; that text was decoded to recover its literal Markdown, with the original report retained.

`normalized/<slug>/` preserves the repair stage: quoted YAML strings, concept prose moved into `Definition`, relationship prose moved into `Description`, concise article introductions and conservative disclosure classification. Original acquisition files remain unchanged. Shared concept IDs and existing bibliography were reconciled during integration rather than duplicating or overwriting shared definitions. `scripts/integrate-deep-research.ts` validates these separate one-topic outputs together before applying them; `integration.json` records the 19-topic integration. This is corpus integration, not a combined research run.

Phenibut and Tadalafil provided summary reports but no retrievable literal article files. Their `reconciled/<slug>.json` records the local conversion and its limits; numerical findings were checked against linked primary records and official labels. Archived inputs under `downloads/` are the local reconciliation files for these topics, not falsely labeled ChatGPT downloads. Original PHIRST author disclosures were not independently recovered and stay unassessed; Lilly sponsorship was separately corroborated by its own release.

The resulting corpus has **296 substances, 213 concepts and 63 relationships**. All 21 topics remain `sourced-draft`; no independent editorial attestation or database publication was made. Funding and conflict-of-interest badges appear on references, citation previews and evidence panels. An uninspected declaration stays `not-assessed`, including PubMed indexing that does not establish a funder type. Validated numeric results activate study plots; unsupported timings and magnitudes stay empty.

The 59-topic queue is in `topics.json`: **21 imported, 38 not started**. Unused completed research and blank/helper tabs were closed after capture; unrelated user tabs were preserved.

Verification: content and canonical-source validation, TypeScript, the bundled production build and 63 unit tests passed. The full desktop/mobile browser suite passed 32 tests, with two pre-existing fixture tests skipped; after Tadalafil was added, the focused desktop/mobile research suite passed another 12 tests with the same two fixture skips. [Rendered disclosure evidence](acquired/phenibut/wiki-evidence.jpg) shows both industry sponsorship and declared author interests. Bundled checks do not verify live database publication, deployment or independent scientific accuracy.
