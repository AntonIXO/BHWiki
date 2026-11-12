# Automated editorial proposal

- Proposal ID: proposal:a6cfda2695a7c697789127aa0f55723c
- Substance: rosmarinic-acid
- Suggestion type: new-effect
- Source: [&lt;b&gt;Rosmarinic acid attenuates heart failure-related injury through modulation of ferroptosis-related pathways: Network pharmacology and cellular validation&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42924970/)
- PMID: 42924970
- DOI: 10.36721/pjps/2026.40.16506.1
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Ferroptosis-related oxidative injury has been implicated in the progression of heart failure (HF). Rosmarinic acid (RA) has antioxidant and anti-lipid peroxidation properties, but its role in HF-associated ferroptosis-related cardiomyocyte injury remains unclear.<h4>Objectives</h4>This study aimed to investigate whether RA attenuates Ang II-induced cardiomyocyte injury by modulating ferroptosis-related oxidative injury and GPX4/xCT-associated defense responses.<h4>Methods</h4>RA-related targets were retrieved from TCMSP, while HF-related and ferroptosis-related genes were obtained from GeneCards/OMIM and FerrDB. Intersection targets were analyzed using PPI network construction, GO and KEGG enrichment analyses, RA-target-disease-pathway network construction and molecular docking. An Ang II-induced H9c2 cardiomyocyte injury model was established for validation. Cell viability was assessed by CCK-8 assay; ANP and BNP mRNA levels were measured by RT-qPCR; MDA content was measured to evaluate lipid peroxidation; and GPX4 and xCT protein expression was examined by Western blotting.<h4>Results</h4>Twenty-six RA-related targets, 3311 HF-related genes and 1393 ferroptosis-related genes were identified. Intersections yielded 397 HF-associated ferroptosis targets and 9 RA-related candidate targets. Network analysis highlighted PPARG, PTGS2, MAPK1, CDKN1A and CASP3 as important targets. Enrichment analyses indicated associations with oxidative stress, apoptotic regulation, iron ion response, inflammatory signaling, lipid and atherosclerosis, TNF, IL-17 and AGE-RAGE pathways. Molecular docking suggested favorable binding of RA to these targets, especially PPARG and PTGS2. In Ang II-treated H9c2 cells, RA restored cell viability, reduced ANP and BNP expression, decreased MDA accumulation and increased GPX4 and xCT expression; these effects were partially reversed by erastin.<h4>Conclusion</h4>RA may attenuate Ang II-induced cardiomyocyte injury by modulating ferroptosis-related oxidative injury and GPX4/xCT-associated defense responses. These findings provide preliminary computational and cellular evidence supporting RA as a candidate compound for further investigation in HF-related cardiomyocyte injury.

## Proposed structured change

```json
{
  "effect": "In an Ang II-induced H9c2 cardiomyocyte injury model, rosmarinic acid restored cell viability, reduced ANP and BNP expression, decreased MDA accumulation, and increased GPX4 and xCT expression.",
  "model": "Ang II-induced H9c2 cardiomyocytes",
  "outcomes": [
    "cell viability",
    "ANP mRNA",
    "BNP mRNA",
    "MDA accumulation",
    "GPX4 expression",
    "xCT expression"
  ]
}
```

## Model rationale

The abstract reports multiple cellular effects of rosmarinic acid in an Ang II-induced cardiomyocyte injury model.

## Verbatim evidence from the abstract

> In Ang II-treated H9c2 cells, RA restored cell viability, reduced ANP and BNP expression, decreased MDA accumulation and increased GPX4 and xCT expression; these effects were partially reversed by erastin.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
