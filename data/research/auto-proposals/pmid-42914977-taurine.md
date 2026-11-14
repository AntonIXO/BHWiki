# Automated editorial proposal

- Proposal ID: proposal:70e606353aa9521952882095345de08f
- Substance: taurine
- Suggestion type: new-reference
- Source: [Taurine lowers inflammaging by regulating the NLRP3 inflammasome in macrophages.](https://pubmed.ncbi.nlm.nih.gov/42914977/)
- PMID: 42914977
- DOI: 10.1016/j.cell.2026.09.061
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Whether a decline in taurine drives aging is debated, and despite high millimolar intracellular concentrations, its function as a potential guardian of cytosolic homeostasis is unclear. Here, we show that aging increases circulating taurine concentrations in humans and mice. Further elevating taurine in aged mice enhances health span, engaging anti-inflammatory pathways previously linked to youthfulness, and reduces mortality from sepsis and inflammasome-mediated inflammation, suggesting an enantiostatic response. Mechanistically, diverse NLRP3-specific "danger signals" induce taurine efflux from macrophages as a proximal step to activate the inflammasome and the resultant pyroptosis. Taurine restoration in macrophages prevents NLRP3-induced trans-Golgi network disassembly, thereby suppressing NLRP3 inflammasome activation. Conversely, lowering taurine biosynthesis combined with reduced bioavailability in macrophages exacerbated inflammasome activation. In humans, sustained caloric restriction elevates adipose tissue taurine and is accompanied by lower inflammation. Together, we identify taurine as an immunometabolic rheostat that links danger sensing to NLRP3 inflammasome activation, suggesting taurine-based strategies to alleviate inflammaging and inflammasomopathies.

## Proposed structured change

```json
{
  "title": "Taurine lowers inflammaging by regulating the NLRP3 inflammasome in macrophages",
  "studyModels": [
    "humans",
    "mice",
    "macrophages"
  ],
  "topics": [
    "aging",
    "inflammaging",
    "NLRP3 inflammasome",
    "macrophage biology"
  ]
}
```

## Model rationale

The abstract reports findings connecting taurine with aging, inflammation, macrophage NLRP3 inflammasome activation, and health span.

## Verbatim evidence from the abstract

> Here, we show that aging increases circulating taurine concentrations in humans and mice.
> Together, we identify taurine as an immunometabolic rheostat that links danger sensing to NLRP3 inflammasome activation

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
