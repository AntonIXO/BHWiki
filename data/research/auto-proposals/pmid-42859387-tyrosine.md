# Automated editorial proposal

- Proposal ID: proposal:b9b5ef9767cf117e3222853c09bf6dca
- Substance: tyrosine
- Suggestion type: new-effect
- Source: [Decoupling Flavor From Spoilage: A Microbial and Chemical Framework for Volatile Sulfur Compounds and Biogenic Amines in Washed-Rind and Aged Cheeses.](https://pubmed.ncbi.nlm.nih.gov/42859387/)
- PMID: 42859387
- DOI: 10.1111/1541-4337.70672
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Ripened washed-rind and long-ripened cheeses owe their prized sulfurous, savory character to intensive proteolysis and amino-acid catabolism; the same activity, when poorly controlled, also generates sensory off-flavors and toxic biogenic amines (BAs). Histamine and tyramine reach up to approximately 2000-2500 and 1000-2000 mg/kg in extreme samples, although most cheeses contain far less, so that a 30-g portion of a high-histamine cheese can exceed the 50-mg per-meal intake regarded as without adverse effect in healthy adults. Flavor formation and chemical safety have traditionally been studied apart. This critical review reframes them as two outcomes of one metabolism: Proteolysis liberates a shared free amino-acid pool from which volatile sulfur compounds (VSCs) and BAs arise. Because the principal VSCs derive from methionine whereas the major BAs derive from histidine, tyrosine, ornithine, arginine, and lysine, we treat the branches not as direct competitors for one substrate but as metabolically coupled fates linked by shared proteolytic supply, overlapping physicochemical controls and microbial cross-feeding. Integrating evidence across cheese families, we reclassify the ripening microbiota into condition-dependent functional guilds, formalize metabolic bivalence (organisms that both generate flavor and degrade amines), and define a sensory inflection point separating the windowed VSC dose-response from the monotonic BA hazard. We critically appraise multi-omics, volatilomics, biosensors, machine learning, and digital twins, and outline a precision-fermentation roadmap. Current, largely in vitro, and single-variety evidence is consistent with, but does not establish, controllable decoupling, which we frame as a testable hypothesis that recasts cheese quality as a controllable metabolic-allocation problem.

## Proposed structured change

```json
{
  "effect": "Tyrosine is among the amino-acid precursors contributing to biogenic amine formation during cheese ripening.",
  "outcome": "Biogenic amine generation"
}
```

## Model rationale

The abstract identifies tyrosine as one of the amino acids from which major biogenic amines arise in ripened cheeses.

## Verbatim evidence from the abstract

> Because the principal VSCs derive from methionine whereas the major BAs derive from histidine, tyrosine, ornithine, arginine, and lysine

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
