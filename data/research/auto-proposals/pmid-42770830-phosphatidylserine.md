# Automated editorial proposal

- Proposal ID: proposal:40442b7edacc3db50373ba748f1f3e1c
- Substance: phosphatidylserine
- Suggestion type: new-claim
- Source: [Structural organization of TAM receptor ectodomains.](https://pubmed.ncbi.nlm.nih.gov/42770830/)
- PMID: 42770830
- DOI: 10.1042/bcj20260584
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> TYRO3, AXL, and MERTK, the TAM receptor tyrosine kinases (RTKs), play roles in phagocytosis and negative regulation of immune responses, contributing to homeostasis in many adult tissues. Aberrant TAM signaling leads to diseases including autoimmune disorders, viral infection, inflammation, and cancer. Development of successful drugs targeting TAM receptors is hindered by incomplete knowledge of the receptor activation mechanism. Receptor dimerization is assumed to play a role, as seen for most RTKs. However, full biological responses require the TAM ligands to engage phosphatidylserine in an opposing cell or virus membrane, suggesting a more complex mechanism, possibly involving higher-order receptor oligomerization or clustering. Here, we present an X-ray crystal structure of the ectodomain of MERTK, which adopts a highly curved conformation with key interdomain boundaries stabilized by N-linked glycan moieties. We show that this MERTK extracellular region (ECR) forms a similar conformation in solution using small-angle X-ray scattering (SAXS), which also suggests a flexible ECR. We compare these crystallographic and solution data for MERTK with SAXS and AlphaFold structural predictions for the other two TAM receptors. SAXS data confirm that each TAM ECR has a distinct curvature, with TYRO3 the most bent and AXL relatively straight. This leads us to speculate that these different ectodomain conformations guide receptor-specific functions. The MERTK X-ray crystal structure also suggests a head-to-tail intermolecular interaction between the Ig2 domain of one MERTK and the FNIIIb domain of a second that has intriguing parallels with interactions that have been proposed to regulate Eph receptor clustering.

## Proposed structured change

```json
{
  "claim": "Full biological responses of TAM receptors require TAM ligands to engage phosphatidylserine in an opposing cell or virus membrane."
}
```

## Model rationale

The abstract directly links phosphatidylserine engagement in opposing membranes with full TAM receptor biological responses, providing a relevant mechanistic claim for phosphatidylserine.

## Verbatim evidence from the abstract

> full biological responses require the TAM ligands to engage phosphatidylserine in an opposing cell or virus membrane

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
