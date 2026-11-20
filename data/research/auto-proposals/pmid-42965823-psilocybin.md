# Automated editorial proposal

- Proposal ID: proposal:a60dbb5fdda256f30c09fa91f3a96aa6
- Substance: psilocybin
- Suggestion type: new-reference
- Source: [Determination of Tryptamines in Biological Specimens.](https://pubmed.ncbi.nlm.nih.gov/42965823/)
- PMID: 42965823
- DOI: 10.1007/978-1-0716-5651-8_14
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Tryptamines constitute a class of organic compounds structurally derived from tryptamine, a natural alkaloid found in plants, fungi, and the human body. This group encompasses biologically significant molecules such as serotonin and melatonin, as well as psychoactive compounds like DMT and psilocybin. Tryptamines are typically classified into simple tryptamines and ergolines, with further subclassifications based on structural modifications on the indole ring system. Their primary mechanism of action involves modulation of serotonergic receptors, especially the 5-HT2A, often resulting in psychedelic effects. While some tryptamines are naturally occurring, others are synthetically produced and increasingly encountered as new psychoactive substances. The study presents a rapid and robust LC-MS/MS method for the simultaneous detection and quantification of 37 tryptamines in human urine and plasma. The method employs a ThermoFisher UHPLC-LC-MS/MS system using a Hypersil GOLD C18 column and gradient elution, with MS^n acquisition in positive ESI mode. Analytical validation demonstrated high selectivity, sensitivity, and reproducibility. Sample preparation was performed through a combination of liquid-liquid and protein precipitation extraction procedures. The method successfully identified tryptamines using product ion spectra compared to a reference spectral library, with detection limits, recovery, and matrix effects systematically evaluated. This analytical approach provides a reliable tool for forensic and clinical toxicology, particularly in the context of the increasing interest in tryptamines for both recreational and therapeutic purposes.

## Proposed structured change

```json
{
  "title": "Determination of Tryptamines in Biological Specimens.",
  "relevance": "Analytical toxicology study describing an LC-MS/MS method for simultaneous detection and quantification of tryptamines in human urine and plasma; psilocybin is explicitly included among the psychoactive tryptamines discussed."
}
```

## Model rationale

The abstract explicitly names psilocybin and describes a validated analytical approach relevant to detecting tryptamines in biological specimens, but does not provide psilocybin-specific validation results.

## Verbatim evidence from the abstract

> as well as psychoactive compounds like DMT and psilocybin.
> The study presents a rapid and robust LC-MS/MS method for the simultaneous detection and quantification of 37 tryptamines in human urine and plasma.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
