# Automated editorial proposal

- Proposal ID: proposal:ad49e2352e13b544f2a81753ed2f2237
- Substance: quercetin
- Suggestion type: new-effect
- Source: [HIF-1α-Driven Protein Lactylation Promotes Ferroptosis and Lipid Peroxidation in Ulcerative Colitis and Is Suppressed by Quercetin.](https://pubmed.ncbi.nlm.nih.gov/42901229/)
- PMID: 42901229
- DOI: 10.1016/j.yexcr.2026.115211
- Published: 2026-10-20
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Ulcerative colitis (UC) is associated with a hypoxic microenvironment that stabilizes hypoxia-inducible factor-1α (HIF-1α), driving glycolytic flux and lactate accumulation. Ferroptosis, an iron-dependent cell death process linked to lactate metabolism, has been implicated in UC pathogenesis; however, whether HIF-1α regulates ferroptosis through protein lactylation remains unclear. Bioinformatic analysis identified HIF-1α as a pivotal node connecting lactylation and ferroptosis signatures, with the lactylation score showing a strong positive correlation with ferroptosis activity, suggesting its upstream regulatory role. In cellular UC models, both protein lactylation and ferroptosis markers were significantly elevated. Inhibition of lactate synthesis reduced intracellular Fe<sup>2+</sup> overload and normalized expression of ferroptosis-related proteins. Mechanistically, knockdown of HIF-1α in colonic epithelial cells downregulated key glycolytic enzymes, including HK2, decreased lactate production and subsequent protein lactylation, and ultimately attenuated lipid peroxidation and reactive oxygen species (ROS) accumulation, thereby suppressing ferroptosis. Conversely, HIF-1α overexpression promoted ferroptosis-associated alterations in a glycolysis-dependent manner, and exogenous lactate partially restored these alterations upon HIF-1α silencing, supporting a HIF-1α-lactate-lactylation-ferroptosis cascade. We further screened for pharmacological inhibitors of HIF-1α and identified quercetin as a candidate through molecular docking and binding kinetics. Functional validation in vitro and in vivo demonstrated that quercetin directly binds and inhibits HIF-1α, thereby blocking the lactylation-ferroptosis axis and ameliorating colitis. Collectively, this study elucidates a novel HIF-1α-lactylation-ferroptosis regulatory axis in UC and proposes quercetin as a potential therapeutic agent that targets this "metabolism-cell death" network.

## Proposed structured change

```json
{
  "effect": "In vitro and in vivo, quercetin directly binds and inhibits HIF-1α, blocking the lactylation-ferroptosis axis and ameliorating colitis.",
  "context": "ulcerative colitis models"
}
```

## Model rationale

The abstract reports functional validation of quercetin’s effects in cellular and animal UC models.

## Verbatim evidence from the abstract

> Functional validation in vitro and in vivo demonstrated that quercetin directly binds and inhibits HIF-1α, thereby blocking the lactylation-ferroptosis axis and ameliorating colitis.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
