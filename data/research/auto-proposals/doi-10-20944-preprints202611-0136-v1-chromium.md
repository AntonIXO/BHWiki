# Automated editorial proposal

- Proposal ID: proposal:7006a839d1157e26b2e19bc1627f2672
- Substance: chromium
- Suggestion type: new-reference
- Source: [An Exploratory In Vitro Pilot Study of Connector Failure and Censored Load Tolerance in Cast and Laser Melted Cobalt Chromium Frameworks](https://doi.org/10.20944/preprints202611.0136.v1)
- PMID: not indexed
- DOI: 10.20944/preprints202611.0136.v1
- Published: 2026-11-03
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> A load ceiling can obscure manufacturing-related differences in cobalt–chromium framework testing. This exploratory in vitro pilot analyzed ten frameworks: five cast and five fabricated by selective laser melting (SLM). The documented protocol used a hemispherical indenter at 1 mm/min after a 100 N preload. Cast specimens fractured at 938.53–1134.63 N (mean 1012.47 ± 77.40 N); SLM specimens remained macroscopically intact at 4498.36–4501.34 N and were right-censored. At the common observed limit of 4498.36 N, the capped mean contrast was 3485.89 N, with a 4.44 ratio and a two-sided exact permutation p-value of 0.00794. Single-specimen deletion changed the contrast by at most 0.876%. Exact 95% failure-probability intervals were 47.8–100% for casting and 0–52.2% for SLM. Bayesian direction favored SLM across three symmetric priors, while magnitude remained prior-sensitive. With five reported displacements per workflow, terminal displacement was 1.459 ± 0.357 mm for casting and 2.048 ± 0.134 mm for SLM. The five calculated SLM terminal secants averaged 2155.16 ± 139.28 N/mm; different endpoint forces preclude a matched-force stiffness comparison. The findings support independent validation; censored outcomes, unavailable raw traces, and unknown batch structure limit population and causal interpretation.

## Proposed structured change

```json
{
  "title": "An Exploratory In Vitro Pilot Study of Connector Failure and Censored Load Tolerance in Cast and Laser Melted Cobalt Chromium Frameworks",
  "studyType": "exploratory in vitro pilot",
  "material": "cobalt-chromium frameworks"
}
```

## Model rationale

This abstract reports an in vitro comparison of cast and selective-laser-melted cobalt-chromium frameworks relevant to chromium-containing dental materials.

## Verbatim evidence from the abstract

> This exploratory in vitro pilot analyzed ten frameworks: five cast and five fabricated by selective laser melting (SLM).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
