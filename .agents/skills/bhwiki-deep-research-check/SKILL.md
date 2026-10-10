---
name: bhwiki-deep-research-check
description: Run or audit one BHWiki topic through approved Deep Research or GPT-6 Pro Web in Chrome, preserving rich fields, source links, funding and conflicts, then validate its parsing and render.
metadata:
  short-description: Check Deep Research against BHWiki
---

# BHWiki Deep Research check

Use this skill when a user asks to run, update, audit, or import ChatGPT Deep Research for BHWiki. It is for one substance, one formulation, one food/organism, or one protocol per research run. Never combine queue items into one report.

## Prompt source and precedence

Read [AI4L.md](references/AI4L.md) before composing the research prompt. That file is an immutable copy of the upstream prompt supplied by the user: preserve it byte-for-byte and do not rewrite, summarize, or “improve” it. Treat its audit criteria as the QA baseline.

BHWiki’s checked-in contract is the output authority when the two documents differ. Read [docs/deep-research-workflow.md](../../../docs/deep-research-workflow.md), the relevant article in `content/substances/`, `content/templates/substance.md`, and the exact TypeScript record types before prompting. The AI4L checklist is a review layer; it must not cause an H1, AI4L section names, copied audit tables, or AI4L frontmatter to be emitted inside a BHWiki article.

## Research source

Use the connected OpenAI Deep Research result as the research input. For an inspection-only acquisition, preserve exactly one returned report under `data/research/pending-YYYY-MM-DD/<slug>-.../deep-research.md` and one short README with the conversation/mode/model evidence; do not create duplicate captures, acquisition manifests, or extra copies. Only a normalized, validated BHWiki Markdown article may enter `content/`, and pending research artifacts remain uncommitted unless the user explicitly asks otherwise.

When using the browser-backed ChatGPT surface, select the model selector's `6 Pro` mode before submitting the Deep Research prompt. Depending on the current UI, this may be displayed as the `Pro` tier rather than with the numeric model prefix; record the exact visible label instead of inventing a model name. Do not substitute ordinary Chat, `Medium`, the default model, or another model for this mode. Verify immediately before submission that the selector shows the Pro tier at `5 of 5` (the highest setting, when the power scale is exposed) and that the composer visibly has the `Deep research` mode chip. Model selection is separate from the Deep Research mode and must be checked immediately before submission. If neither a `6 Pro` label nor the current UI's `Pro` tier is visible, preserve the run as unverified and do not import it as an approved acquisition.

## Research run

1. Resolve the exact topic and slug. Include salts, stereoisomers, brands, strains, formulation, route, and aliases in the brief when they change evidence. If the queue contains multiple topics, create separate Deep Research runs and separate Markdown files.
2. Inspect the existing BHWiki article and canonical concepts first. Preserve non-empty curated identity, bibliography, PK, legal, interaction, and clinical records unless a checked source justifies a correction. Send the existing structure and canonical IDs to Deep Research so it extends the page instead of inventing duplicates.
3. Convert the result into a **complete `<slug>.md`** and companion concept/relationship `.md` files only where the BHWiki schema requires them. Keep compact original prose, exact study context, null findings, and the source links supplied by Deep Research. Do not add a separate acquisition or provenance file.
4. Every material factual assertion must have an inline citation or a source ID that resolves to the article’s `References` section. Preserve the study’s title, authors or organization, year, direct URL, and the specific finding or limitation needed to verify the assertion. Reviews may locate studies but must not be presented as independent replications. Community/vendor pages cannot establish efficacy, safety, or legal status.

## BHWiki output gate

Reject or repair the draft before import when any of these fail:

- frontmatter begins at byte zero, has no H1, lists every field once in `x-shape`, and keeps `reviewedAt` as quoted `YYYY-MM-DD`;
- headings are exactly `Summary`, `Description`, `Evidence note`, `Doses`, `Pharmacokinetics`, optional `Duration`, `Modifiers`, `Effects`, `Outcomes`, `Mechanisms`, `Cautions`, `Claims`, `Interactions`, `Experience links`, `References`, `Legal`, in that order;
- prose headings contain only concise original Markdown; every structured section contains exactly one fenced YAML list, including `[]` when evidence is absent;
- every inline citation/source ID resolves to a reference on that article, every concept/relationship member resolves, and every new concept is supplied as its own Markdown companion;
- effects, measured outcomes, PK observations, subjective timing, mechanisms, cautions, interactions, and claims remain separate records with population, formulation/route, comparator, instrument, assessment time, and uncertainty preserved;
- result confidence intervals are copied only when actually reported; never turn SD/SE/ranges/P values into a CI, and never invent a value to activate a graph;
- foods, organisms, combinations, nutrients, and protocols do not receive fabricated single-molecule structures or drug elimination curves;
- interaction records describe documented pairs/classes only; shared pathways belong in mechanisms/claims and do not become contraindications;
- each reference has an actual title, authors/organization, integer year, direct URL, and enough context to identify which claim it supports;
- summaries and evidence notes stay compact, major gaps are explicit, and no ChatGPT citation tokens, debug markup, or copied AI4L audit form appears in the article.

## Import and verification

Use the repository’s existing Markdown import path. Run the dry import first, then apply only after the proposed article validates. Run:

```bash
bun run content:validate
bun run typecheck
bun run test
bun run content:research -- --slug <slug> --article <path/to/<slug>.md> --source-url <chat-url> --apply
```

Use the project’s research/e2e checks when the page has plots, disclosures, study controls, or other interactive output. Open the rendered article in the local wiki and verify that the intended source cards, funding/COI badges, study result plots, PK/duration controls, concept links, and empty-state behavior match the structured data. Fix parser/import/render issues and re-run the relevant checks; do not silently delete evidence to make validation pass.

Return the imported Markdown file path, any schema-required companion files, validation/build/test results, and unresolved evidence or access limitations.
