# Automated editorial proposal

- Proposal ID: proposal:69968d2a335a762788b0aab90acdf108
- Substance: docosahexaenoic-acid-dha
- Suggestion type: new-effect
- Source: [AA-Induced Lipid Peroxidation at the Center of Tumor Cell Apoptosis and Ferroptosis.](https://pubmed.ncbi.nlm.nih.gov/42834219/)
- PMID: 42834219
- DOI: 10.1007/978-981-92-5964-9_12
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Polyunsaturated fatty acids (PUFAs), especially gamma-linolenic acid (GLA), arachidonic acid (AA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA), can block HMG-CoA reductase activity and thus decrease cholesterol synthesis/formation. Cholesterol has antioxidant actions and thus reduces the formation of ROS (reactive oxygen species). In contrast, PUFAs augment the generation of ROS. PUFAs undergo peroxidation to form lipid peroxides that are toxic to tumor cells but not normal cells. GPX4 (glutathione peroxidase) reduces the formation of lipid peroxides and thus enhances tumor cell resistance to the tumoricidal actions of radiation, anticancer drugs, and immune checkpoint inhibitors (ICIs). Tumor cells have relatively high amounts of GPX4 and hence are resistant to lipid peroxide-induced ferroptosis/apoptosis. In contrast, normal cells can upregulate their GPX4 activity/content upon exposure to toxic lipid peroxides and hence are resistant to ferroptosis or apoptosis when supplemented with various PUFAs or exposed to radiation, anticancer drugs, and ICIs. Thus, PUFAs (especially GLA, AA, and DHA) are selectively toxic to tumors but not normal cells. Interferon-γ (IFN-γ) is secreted by CD8<sup>+</sup> T cells, and AA induces ferroptosis of tumor cells in an ACSL4 (the protein encoded by this gene is an isozyme of the long-chain fatty-acid-coenzyme A ligase family)-dependent lipid peroxidation process. IL-6, TNF-α, and IFN-γ activate PLA2 to release AA from membrane lipids, which is then peroxidized to trigger apoptosis or ferroptosis of cancer cells. CD8<sup>+</sup> T cells/macrophages/TILs/NK cells and other immunocytes downregulate the expression of SLC3A2 and SLC7A11, two subunits of the glutamate-cystine antiporter system xc- , and impair the uptake of cystine by tumor cells, because of which accumulation of toxic lipid peroxides occurs in the tumor cells, leading to their apoptosis/ferroptosis/necrosis. In C6 glioma cells, the inhibition of the cystine/glutamate (XC) antiporter and glutamate-cysteine ligase (GCL) results in inhibition of glutathione biosynthesis that leads to ferroptosis of cancer cells because of accumulation of toxic lipid peroxides. Thus, the lipid peroxidation process is at the center of tumor cell apoptosis/ferroptosis.

## Proposed structured change

```json
{
  "effect": "The abstract reports that DHA, as a PUFA, undergoes lipid peroxidation and is described as selectively toxic to tumor cells rather than normal cells.",
  "context": "Tumor-cell apoptosis/ferroptosis; mechanistic abstract evidence"
}
```

## Model rationale

DHA is explicitly identified among the PUFAs described as selectively toxic to tumors, although the abstract does not provide clinical dosing or human outcome data.

## Verbatim evidence from the abstract

> Thus, PUFAs (especially GLA, AA, and DHA) are selectively toxic to tumors but not normal cells.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
