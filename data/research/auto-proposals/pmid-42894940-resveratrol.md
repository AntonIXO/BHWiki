# Automated editorial proposal

- Proposal ID: proposal:b19395877fbbc24d11c7575da7e6b90f
- Substance: resveratrol
- Suggestion type: new-effect
- Source: [Resveratrol alleviates coal dust-induced pulmonary fibrosis by inhibiting the transformation of lung epithelial cells and fibroblasts.](https://pubmed.ncbi.nlm.nih.gov/42894940/)
- PMID: 42894940
- DOI: 10.1080/15376516.2026.2749667
- Published: 2026-10-29
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <b>Objective</b>: To observe the inhibition of resveratrol on coal dust-induced pulmonary fibrosis and explore the possible mechanism. <b>Methods</b>: A mouse model of pneumoconiosis was established by coal dust inhalation, and resveratrol was administered as treatment. Lung inflammation and fibrosis were observed using hematoxylin/eosin (HE) and Masson staining, and hydroxyproline content was measured by colorimetric assay. <i>In vitro</i>, lung epithelial cells were exposed with coal dust alone or in combination with resveratrol. Cell migration and invasion abilities were assessed using wound healing assay and Transwell assay. The key molecules of epithelial-mesenchymal transition (EMT) were detected by western blotting and ELISA. Additionally, the effects of resveratrol on proliferation and collagen production in TGF-β1-stimulated fibroblasts were examined using EDU, CCK-8, and western blotting. Results: The coal dust group showed marked inflammatory cell infiltration, collagen deposition, and elevated hydroxyproline levels in lung tissue, all of which were significantly improved in the resveratrol-treated group. <i>In vitro</i>, coal dust increased the migration rate, invasive ability, downregulated E-cadherin, and upregulated N-cadherin, vimentin, and Snail of lung epithelial cells, whereas these cellular changes were markedly attenuated in the resveratrol-treated group. Moreover, the levels of TGF-β1 and TNF-α were significantly lower in the resveratrol-treated group than in the coal dust group. In fibroblasts, the cell proliferation rate and collagen (COL-1, COL-3, α-SMA) were lower in the resveratrol-treated group than in the TGF-β1-stimulated group. <b>Conclusion</b>: Resveratrol inhibited EMT in lung epithelial cells, reduced TGF-β1 and TNF-α release, suppressed fibroblast-to-myofibroblast transformation (FMT), and alleviated coal dust-induced pulmonary fibrosis.

## Proposed structured change

```json
{
  "effect": "Alleviated coal dust-induced pulmonary fibrosis in a mouse model and related in vitro systems by inhibiting epithelial-mesenchymal transition, reducing TGF-β1 and TNF-α release, and suppressing fibroblast-to-myofibroblast transformation.",
  "context": "Coal dust-induced pneumoconiosis; mouse model and cultured lung epithelial cells/fibroblasts"
}
```

## Model rationale

The abstract reports reduced lung inflammation, collagen deposition, and hydroxyproline levels in resveratrol-treated mice, attenuation of EMT-associated cellular changes in lung epithelial cells, and reduced fibroblast proliferation and collagen production.

## Verbatim evidence from the abstract

> all of which were significantly improved in the resveratrol-treated group.
> whereas these cellular changes were markedly attenuated in the resveratrol-treated group.
> Moreover, the levels of TGF-β1 and TNF-α were significantly lower in the resveratrol-treated group than in the coal dust group.
> In fibroblasts, the cell proliferation rate and collagen (COL-1, COL-3, α-SMA) were lower in the resveratrol-treated group than in the TGF-β1-stimulated group.
> Resveratrol inhibited EMT in lung epithelial cells, reduced TGF-β1 and TNF-α release, suppressed fibroblast-to-myofibroblast transformation (FMT), and alleviated coal dust-induced pulmonary fibrosis.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
