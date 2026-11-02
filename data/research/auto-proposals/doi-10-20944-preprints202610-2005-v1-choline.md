# Automated editorial proposal

- Proposal ID: proposal:64d13390c57447781a418b26ed5ae75e
- Substance: choline
- Suggestion type: new-claim
- Source: [Genetic Analysis of Polar Metabolites Identifies Genetic Control of Betaine in White Flour of Wheat](https://doi.org/10.20944/preprints202610.2005.v1)
- PMID: not indexed
- DOI: 10.20944/preprints202610.2005.v1
- Published: 2026-10-21
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> White wheat flour contains a range of polar metabolites, including amino acids, organic acids, sugars (mono-, di- and tri-saccharides) and methyl donors (choline and betaine), which may contribute to a healthy diet. We have used 1H NMR to quantify the concentrations of 28 polar metabolites in the white flour of a double haploid population of the cross Malacca x Hereward comprised of 106 lines grown in field trials in 2020 and 2021 and a sub-set of 76 lines grown in 2005. This identified a total of 106 QTL for individual or groups of metabolites of which three were present in two of the three datasets. These “stable” QTLs include two for betaine, QBet-4D.1 and QBet-5B.1, explaining 14-31% and 21-24% of the variation, respectively, and one for succinate, QScc-7B.1, explaining 16-18% of the variation, with average additive effects of + 0.09(M), +0.03(M), and +0.06 (H) mg. g-1 of flour. Betaine has established health benefits in humans by remethylating homocysteine, which is a risk factor for cardiovascular disease. The availability of markers from our study will therefore allow the selection of new types of wheat with higher betaine in white flour.

## Proposed structured change

```json
{
  "claim": "White wheat flour contains choline as one of its polar methyl-donor metabolites and may contribute to a healthy diet.",
  "context": "The study quantified polar metabolites in white wheat flour, but the abstract does not report a choline-specific QTL or concentration result."
}
```

## Model rationale

The abstract explicitly identifies choline as a methyl donor present among the polar metabolites in white wheat flour, while the reported genetic findings focus on betaine and succinate.

## Verbatim evidence from the abstract

> White wheat flour contains a range of polar metabolites, including amino acids, organic acids, sugars (mono-, di- and tri-saccharides) and methyl donors (choline and betaine), which may contribute to a healthy diet.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
