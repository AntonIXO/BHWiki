# Automated editorial proposal

- Proposal ID: proposal:34cfde0c682815d278dfdebc8c248815
- Substance: astaxanthin
- Suggestion type: new-effect
- Source: [Toxicity evaluation and mechanism study of butylparaben on zebrafish.](https://pubmed.ncbi.nlm.nih.gov/42918471/)
- PMID: 42918471
- DOI: 10.1016/j.cbpc.2026.110722
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Butylparaben is a widely used preservative, yet its toxicity and mechanisms of action in aquatic organisms remain unclear. In this study, zebrafish were used as a model and exposed to butylparaben at concentrations of 0, 1, 1.5, and 2 mg/L from 10 to 72 hpf. The results showed that butylparaben induced developmental malformations in larvae and exhibited stronger toxicity than other parabens of the same family. It significantly reduced the number of innate immune cells and triggered oxidative stress and apoptosis, while astaxanthin, BML-284, and QNZ partially rescued the reduction in neutrophils. In addition, tail curvature was not directly caused by morphological damage to the muscle or notochord. This study demonstrates that butylparaben exerts developmental and immunotoxic effects in zebrafish, providing experimental evidence for the environmental safety assessment of this class of preservatives.

## Proposed structured change

```json
{
  "effect": "Partially rescued the reduction in neutrophils in zebrafish exposed to butylparaben",
  "model": "zebrafish larvae",
  "context": "butylparaben exposure"
}
```

## Model rationale

The abstract reports that astaxanthin partially rescued the reduction in neutrophils caused by butylparaben exposure in zebrafish.

## Verbatim evidence from the abstract

> while astaxanthin, BML-284, and QNZ partially rescued the reduction in neutrophils

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
