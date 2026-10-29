# Automated editorial proposal

- Proposal ID: proposal:e33041ed0cc07dccc2dcf4e7c291da28
- Substance: quercetin
- Suggestion type: new-reference
- Source: [Online HPLC-DPPH-Guided Isolation and Free Radical-Scavenging Evaluation of C-4″-Epimeric Quercetin Diglycosides From Saxifraga tangutica.](https://pubmed.ncbi.nlm.nih.gov/42782050/)
- PMID: 42782050
- DOI: 10.1002/bmc.70627
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Activity-guided separation of medicinal plants requires linking activity signals and chromatographic resolution in complex matrices. In this study, based on a previously established HPLC-DPPH platform, medium-pressure prefractionation and preparative chromatographic purification were applied for the targeted isolation of free radical scavengers from Saxifraga tangutica (S. tangutica). Medium-pressure prefractionation reduced sample complexity and enriched active fractions, while Click XION chromatography concentrated the target fraction. Subsequent purification on the ReproSil-Pur C18 AQ column resolved this fraction into two baseline-separated active peaks, affording compounds with purities greater than 95%. The isolated compounds were identified as quercetin-3-O-β-D-glucoside-7-O-β-D-glucoside and quercetin-3-O-β-D-galactoside-7-O-β-D-glucoside, a pair of C-4″-epimeric quercetin 3,7-di-O-glycosides. Both compounds exhibited DPPH radical-scavenging activity, with IC<sub>50</sub> values of 68.94 ± 2.77 and 75.59 ± 2.14 μM, respectively. DFT calculations, molecular docking, and ADMET prediction further supported the comparative interpretation of their electronic features, antioxidant-related interaction potential, and predicted pharmacokinetic profiles. Overall, this study achieved the activity guided isolation and activity evaluation of a pair of high-purity C-4″-epimeric flavonol diglycosides from S. tangutica, providing a practical chromatographic strategy for the targeted characterization of structurally similar bioactive constituents from medicinal plants.

## Proposed structured change

```json
{
  "title": "Online HPLC-DPPH-Guided Isolation and Free Radical-Scavenging Evaluation of C-4″-Epimeric Quercetin Diglycosides From Saxifraga tangutica",
  "studySubject": "C-4″-epimeric quercetin 3,7-di-O-glycosides isolated from Saxifraga tangutica",
  "compounds": [
    "quercetin-3-O-β-D-glucoside-7-O-β-D-glucoside",
    "quercetin-3-O-β-D-galactoside-7-O-β-D-glucoside"
  ]
}
```

## Model rationale

The abstract reports isolation, identification, and activity evaluation of two high-purity quercetin diglycosides. This is relevant to quercetin-derived compounds, but does not directly study quercetin aglycone.

## Verbatim evidence from the abstract

> The isolated compounds were identified as quercetin-3-O-β-D-glucoside-7-O-β-D-glucoside and quercetin-3-O-β-D-galactoside-7-O-β-D-glucoside, a pair of C-4″-epimeric quercetin 3,7-di-O-glycosides.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
