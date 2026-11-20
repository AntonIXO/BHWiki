# Automated editorial proposal

- Proposal ID: proposal:4ba135c4f778ccf3e655ac5fb2587b0d
- Substance: n-acetylcysteine-019fe218
- Suggestion type: new-effect
- Source: [Disarming the Heat-Shock Response: Rosmarinic Acid Potentiates Mild Hyperthermia-Induced Apoptosis in A549 Non-Small Cell Lung Cancer Cells.](https://pubmed.ncbi.nlm.nih.gov/42921998/)
- PMID: 42921998
- DOI: 10.1002/jbt.71147
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> This study investigated the biochemical mechanisms by which rosmarinic acid (RA), a natural polyphenol, sensitizes A549 non-small cell lung cancer (NSCLC) cells to mild hyperthermia (43°C). A549 cells were treated with RA (100 or 200 μM) and exposed to mild hyperthermia (43°C, 30 min), after which we performed a comprehensive analysis of cell viability, clonogenic potential, and migratory recovery. The molecular underpinnings were explored through flow cytometry for reactive oxygen species (ROS) and cell cycle progression, together with western blotting for MAPK signaling (JNK, ERK), apoptosis-related proteins (Bcl-xL, survivin, caspases), and the heat-shock response (HSP27, 70, 90, and HSF1). Our results show that the combination of RA and hyperthermia impaired cell proliferation and migration while promoting S-phase accumulation and apoptosis. At the biochemical level, combined RA and hyperthermia increased intracellular ROS beyond the level produced by either treatment alone. This rise in ROS occurred alongside an altered p-JNK/total JNK profile and caspase activation-associated apoptosis. Importantly, RA suppressed the canonical heat-shock response, lowering the p-HSF1/total HSF1 ratio and reducing the expression of the molecular chaperones HSP27, 70, and 90. Pretreatment with N-acetylcysteine (NAC) attenuated the observed ROS, Annexin V, and immunoblot changes, consistent with a contribution of redox imbalance to this sensitization process. In conclusion, RA enhanced hyperthermia-induced oxidative stress and suppressed the HSF1-HSP axis in A549 cells, providing a rationale for its further preclinical evaluation as a biochemical adjuvant in hyperthermic lung cancer therapy.

## Proposed structured change

```json
{
  "effect": "Pretreatment with N-acetylcysteine attenuated the ROS, Annexin V, and immunoblot changes observed with rosmarinic acid plus mild hyperthermia in A549 NSCLC cells.",
  "context": "A549 cells treated with rosmarinic acid and exposed to mild hyperthermia (43°C, 30 min)."
}
```

## Model rationale

The abstract reports that NAC reduced oxidative-stress, apoptosis-associated, and protein-expression changes linked to the combined treatment, consistent with a contribution of redox imbalance.

## Verbatim evidence from the abstract

> Pretreatment with N-acetylcysteine (NAC) attenuated the observed ROS, Annexin V, and immunoblot changes, consistent with a contribution of redox imbalance to this sensitization process.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
