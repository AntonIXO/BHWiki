# Automated editorial proposal

- Proposal ID: proposal:6aa98bb1792f5583badc898ed0160d9f
- Substance: sarcosine
- Suggestion type: new-effect
- Source: [Discovery of Salivary Metabolomic Biomarkers for Canine Oral Melanoma and Squamous Cell Carcinoma via CIL LC-MS Analysis.](https://pubmed.ncbi.nlm.nih.gov/42926288/)
- PMID: 42926288
- DOI: 10.1007/978-1-0716-5619-8_29
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> In this case-control cross-sectional study, we examined the diagnostic potential of salivary metabolomics to differentiate canine oral melanoma (OM) and oral squamous cell carcinoma (OSCC) from benign oral tumors (BN). Using high-performance chemical isotope labeling liquid chromatography-mass spectrometry (CIL LC-MS) targeting at the amine/phenol submetabolome, we analyzed saliva from 65 dogs across malignant, benign, and healthy groups. Our results revealed distinct metabolic clustering among the groups, identifying 154 significantly altered metabolites in OM and 66 in OSCC compared to BN (P<sub>adj</sub> < 0.05). Notable biomarkers included elevated tryptophyl-threonine and decreased 1,2-dihydroxynaphthalene-6-sulfonic acid in OM, while OSCC was characterized by reduced seryl-arginine and sarcosine. These findings, and the protocol described herein that was used to obtain them, demonstrate the broad coverage of the salivary submetabolome and emphasize the potential of noninvasive metabolic profiling as a practical, high-throughput approach for accurate diagnosis of canine oral cancers in clinical settings.

## Proposed structured change

```json
{
  "effect": "reduced",
  "condition": "canine oral squamous cell carcinoma",
  "comparator": "benign oral tumors"
}
```

## Model rationale

The abstract reports reduced sarcosine in canine oral squamous cell carcinoma compared with benign oral tumors.

## Verbatim evidence from the abstract

> OSCC was characterized by reduced seryl-arginine and sarcosine.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
