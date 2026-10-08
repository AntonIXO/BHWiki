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

## Approved Deep Research runners and strict model gate

For every new acquisition or rerun, use exactly one of these two paths:

1. OpenAI Deep Research: the dedicated connector selected by `$deep-research` (`app://connector_openai_deep_research`) or the authenticated `deep-research-mcp` server configured with the `openai-codex` provider.
2. The ChatGPT web UI through the `@Chrome` plugin (`plugin://chrome@openai-bundled`) with **GPT-6 Pro selected and Web enabled**. The visible model and Web state must be checked immediately before submission.

The MCP server is the local stdio wrapper from `https://github.com/pminervini/deep-research-mcp`; its device-code login may be completed with computer use during setup, but computer use is never a research runner. These are the only accepted acquisition paths. Never use ordinary Chat/Work, any other Chrome model, GPT-6 Astra or GPT-6.1 Sol through Chrome, generic web search, a manually synthesized report, a lower-tier model, or CUA as a workaround. When the Chrome path is selected, a normal Chat/Work composer, a Web label without GPT-6 Pro, or GPT-6 Pro without Web is a hard rejection.

Before dispatching the topic:

1. Verify that the `deep-research` connector is active, that the registered `deep-research-mcp` server resolves to authenticated `openai-codex`, or that `@Chrome` visibly shows GPT-6 Pro with Web enabled. A normal Chat/Work composer, a pasted prompt, or an unverified Web label does not qualify.
2. For Deep Research, select the highest-quality model exposed by that connector/account. For Chrome, select exactly GPT-6 Pro and enable Web. Never choose a cheap/fast fallback or another visible model.
3. For Deep Research, select the highest reasoning setting exposed by that model (`Ultra`, `Max`, or the highest visible equivalent). Do not use `None`, `Light`, `Medium`, or the default setting. Chrome GPT-6 Pro Web must retain the visible Web-enabled state through submission.
4. Record connector/run evidence in the acquisition manifest/capture metadata: `deepResearchMode: true` for a Deep Research run, `executionSurface` (`deep-research`, `deep-research-mcp`, or `@Chrome`), surface identifier, run ID or ChatGPT URL, `model`, `reasoningEffort`, and observation timestamp. A Chrome capture must additionally record `webSearchEnabled: true` and the exact visible GPT-6 Pro model label. For MCP runs, also record `provider: openai-codex`, the authenticated config path (never credentials), and the resolved model returned by the runner; `model = auto` alone is insufficient evidence of the selected model.

If the connector, MCP authentication/provider, Deep Research mode, GPT-6 Pro selection with Web, or required reasoning setting cannot be selected, stop the topic as unstarted/blocked. Preserve a short failure note, do not create a substitute article, and do not mark the queue item imported. The output gate rejects artifacts with missing runner/mode/model/Web/reasoning evidence or evidence of ordinary Chat/Work generation.

### Local MCP runner

When using `deep-research-mcp`, verify the server registration with `codex mcp get deep-research`, verify `deep-research-cli auth status`, and inspect the resolved configuration before dispatch. The required baseline is `provider = "openai-codex"`, the highest account model exposed by the runner (or an explicit resolved model when `auto` is used), and `reasoning_effort = "max"` or the highest exposed equivalent. Keep the device credential in `~/.deep_research_auth.json`; never copy it into the repository, acquisition manifest, prompt, or article. If authentication expires or the runner cannot expose the requested model/reasoning level, leave the topic queued and record the exact verification failure.

### Chrome plugin failure handling

Use only the `@Chrome` plugin calls when the web surface is selected. Before submission, verify that the visible model is GPT-6 Pro and Web is enabled; if either cannot be verified, stop and leave the topic queued. If the plugin reports an infrastructure error such as `Missing X server`, retry the same plugin operation once after the browser state has been rechecked. Do not invoke computer-use/CUA as a workaround. If the same plugin failure persists, record the exact error and leave the topic `queued`; no report, article, or substitute web research may be treated as acquired.

### Acquisition and recovery pitfalls

Read [runner-and-import-pitfalls.md](references/runner-and-import-pitfalls.md) when dispatching MCP jobs, recovering old captures, or repairing generated Markdown. It records observed failure modes and the evidence needed to distinguish a completed report from a failed attempt. A historical research URL, a passing parser, or an `imported` queue flag alone does not prove the current page is researched.

## Research run

1. Resolve the exact topic and slug. Include salts, stereoisomers, brands, strains, formulation, route, and aliases in the brief when they change evidence. If the queue contains multiple topics, create separate Deep Research runs and separate Markdown files.
2. Inspect the existing BHWiki article and canonical concepts first. Preserve non-empty curated identity, bibliography, PK, legal, interaction, and clinical records unless a checked source justifies a correction. Send the existing structure and canonical IDs to Deep Research so it extends the page instead of inventing duplicates.
3. Prompt the selected approved Deep Research runner, or GPT-6 Pro with Web in `@Chrome`, to return a **complete downloadable `<slug>.md`**, with companion concept/relationship `.md` files only where required. Ask for compact original prose, direct HTTPS source links, exact study context, null findings, and source-specific sponsorship/COI fields. Require `editorialStatus: sourced-draft` and the BHWiki headings and fenced-YAML section contract.
4. Require source inspection in the report itself: PubMed/PMC and original full text, trial registries, official labels/regulators, and authoritative monographs as applicable. Reviews may locate studies but must not be presented as independent replications. Community/vendor pages cannot establish efficacy, safety, or legal status.
5. Require a funding and conflicts assessment for every included reference. Distinguish `industry-funded`, `non-industry-funded`, `mixed-funding`, `no-external-funding`, `not-reported`, and `not-assessed`; distinguish declared COI, explicit none, not-reported, and not-assessed. Never infer independence from an author affiliation or an abstract that was not inspected.
6. Capture the literal report and every companion file before closing the research chat. If an attachment is inaccessible, preserve the visible report as acquisition material and mark the conversion/provenance; do not claim an original download that did not occur.

## BHWiki output gate

Reject or repair the draft before import when any of these fail:

- frontmatter begins at byte zero, has no H1, lists every field once in `x-shape`, and keeps `reviewedAt` as quoted `YYYY-MM-DD`;
- headings are exactly `Summary`, `Description`, `Evidence note`, `Doses`, `Pharmacokinetics`, optional `Duration`, `Modifiers`, `Effects`, `Outcomes`, `Mechanisms`, `Cautions`, `Claims`, `Interactions`, `Experience links`, `References`, `Legal`, in that order;
- prose headings contain only concise original Markdown; every structured section contains exactly one fenced YAML list, including `[]` when evidence is absent;
- every source ID resolves to a reference on that article, every concept/relationship member resolves, and every new concept is supplied as its own Markdown companion;
- effects, measured outcomes, PK observations, subjective timing, mechanisms, cautions, interactions, and claims remain separate records with population, formulation/route, comparator, instrument, assessment time, and uncertainty preserved;
- result confidence intervals are copied only when actually reported; never turn SD/SE/ranges/P values into a CI, and never invent a value to activate a graph;
- foods, organisms, combinations, nutrients, and protocols do not receive fabricated single-molecule structures or drug elimination curves;
- interaction records describe documented pairs/classes only; shared pathways belong in mechanisms/claims and do not become contraindications;
- each reference has actual title, authors/organization, integer year, direct URL, kind, insight, limitation, and funding/COI metadata; `disclosureUrl` appears only for an inspected declaration/source;
- acquisition metadata proves an approved Deep Research run or a Chrome run with GPT-6 Pro and `webSearchEnabled: true`, records the execution surface (`deep-research` connector, authenticated `deep-research-mcp`, or `@Chrome`), and records the model and required reasoning evidence; missing, ordinary Chat/Work, another Chrome model, GPT-6 Pro without Web, computer-use/CUA as the research runner, or lower-tier selection evidence is a hard rejection;
- summaries and evidence notes stay compact, major gaps are explicit, and no ChatGPT citation tokens, debug markup, or copied AI4L audit form appears in the article.

## Import and verification

Use the repository’s existing acquisition/import path. Preserve the literal input under `data/research/acquired/<slug>/`, run the dry import first, then apply only after the complete proposed corpus validates. Run:

```bash
bun run content:validate
bun run typecheck
bun run test
bun run content:research -- --slug <slug> --article <path/to/<slug>.md> --source-url <chat-url> --apply
```

Use the project’s research/e2e checks when the page has plots, disclosures, study controls, or other interactive output. Open the rendered article in the local wiki and verify that the intended source cards, funding/COI badges, study result plots, PK/duration controls, concept links, and empty-state behavior match the structured data. Fix parser/import/render issues and re-run the relevant checks; do not silently delete evidence to make validation pass.

Return the imported file path, companion files, source URL, validation/build/test results, and any unresolved evidence or access limitations. Machine validation proves parseability and rendering only; keep the article marked as a sourced draft until independent editorial review.
