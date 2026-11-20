# Automated editorial proposal

- Proposal ID: proposal:a75d8ce616a88570a227369b4bf9d74f
- Substance: histidine
- Suggestion type: new-claim
- Source: [Chaihu-Guizhi Decoction Attenuates Airway Remodelling in COPD Mice via the TGF-β1/Smads Signalling Pathway: An Integrated Proteomic and Metabolomic Analysis.](https://pubmed.ncbi.nlm.nih.gov/42902462/)
- PMID: 42902462
- DOI: 10.1002/bmc.70632
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Chronic obstructive pulmonary disease (COPD) is characterised by persistent airway injury and remodelling, and the mechanisms by which Chai-Hu-Gui-Zhi Decoction (CGD) acts in COPD remain unclear. This study investigated whether CGD attenuates airway remodelling through the TGF-β1/Smads-EMT-ECM signalling axis. A mouse COPD model was established by cigarette-smoke exposure plus intranasal lipopolysaccharide. After model induction, mice received dexamethasone acetate or low-, medium- or high-dose CGD for 28 days. UHPLC-MS/MS, network pharmacology, molecular docking, molecular dynamics, proteomics, metabolomics, ELISA, western blotting, RT-PCR, pulmonary function testing and histopathology were integrated. CGD dose-dependently improved pulmonary function and lung pathology and reduced BALF total protein, NO, VEGF, IFN-γ, MPO, CXCL1 and serum 8-OHdG. Multi-omics and network analyses implicated phenylalanine/tyrosine/tryptophan biosynthesis, the histidine-glutamate-hypoxanthine axis, MAPK, PI3K-Akt and TGF-β1-related pathways. Validation showed that CGD decreased TGF-β1, p-SMAD2/3, SMAD2/3, MMP-9 and TIMP-1; increased SMAD7 and E-cadherin; and regulated Smad2/Smad3/Smad7 mRNA. CGD may attenuate COPD airway remodelling, in association with suppressed TGF-β1/Smads signalling, restored SMAD7-mediated feedback, limited EMT and rebalanced ECM remodelling.

## Proposed structured change

```json
{
  "claim": "Histidine was implicated in the histidine-glutamate-hypoxanthine axis identified in a multi-omics analysis of COPD mice treated with Chai-Hu-Gui-Zhi Decoction."
}
```

## Model rationale

The abstract mentions histidine only as part of a multi-metabolite axis implicated by multi-omics and network analyses; it does not report a direct histidine intervention or outcome.

## Verbatim evidence from the abstract

> Multi-omics and network analyses implicated phenylalanine/tyrosine/tryptophan biosynthesis, the histidine-glutamate-hypoxanthine axis, MAPK, PI3K-Akt and TGF-β1-related pathways.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
