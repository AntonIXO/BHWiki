# Automated editorial proposal

- Proposal ID: proposal:b600f5527d9db392515caeabf732d569
- Substance: glycine
- Suggestion type: new-effect
- Source: [Effect of glycine-enriched freezing medium on post-thaw quality and fertility of Murrah buffalo (Bubalus bubalis) bull semen.](https://pubmed.ncbi.nlm.nih.gov/42902053/)
- PMID: 42902053
- DOI: 10.1007/s11250-026-05425-8
- Published: 2026-10-20
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> This study was designed to evaluate the effect of glycine supplementation (0.0, 5.0, 10.0, 15.0, 20.0 and 25.0 mM) in freezing media on post-thaw quality of buffalo bull spermatozoa. Thirty-six semen ejaculates from six breeding Murrah buffalo bulls were collected using artificial vagina. Ejaculates having ≥ 70% sperm motility, ≤ 20% morphological abnormalities and > 500 million/ml concentration were diluted in Tris-egg yolk extender containing selected concentrations of glycine and control and cryopreserved following established protocol. The post-thaw semen was examined for CASA-based sperm motility and kinematics, viability, plasma membrane integrity, acrosome integrity, mitochondrial membrane potential and LPO. Statistical analysis was done using the IBM SPSS 20.0 software and Microsoft excel 2021. The total motility, progressive motility and plasma membrane integrity were higher (P < 0.05) in cryodiluent containing 20.0 mM of glycine in comparison to other concentrations and control. Regarding sperm kinematics, VAP was higher (P < 0.05) at 20.0 mM, VCL at 20.0 mM and 25.0 mM and VSL at 15.0 mM and 20.0 mM compared to other concentrations and control, respectively. Supplementation of glycine at 20.0 mM and 25.0 mM resulted in higher (P < 0.05) proportion of viable sperm. Mitochondrial membrane potential was higher (P < 0.05) at 15.0-25.0 mM glycine concentrations compared to remaining concentrations and control. MDA profiles were lower (P < 0.05) in all glycine supplemented groups, with lowest levels at 20.0 mM and 25.0 mM than in control. Sixty animals were inseminated using best evolved extender having glycine (20.0 mM) and control (n = 30 each). The conception rates were non-significantly (P > 0.05) higher using extender containing glycine than in control (53.3% vs 40%). In conclusion, addition of 20.0 mM glycine improved post-thaw sperm characteristics and showed a numerical increase in conception rate."

## Proposed structured change

```json
{
  "context": "cryopreserved Murrah buffalo bull semen",
  "intervention": "glycine supplementation in freezing medium",
  "concentration": "20.0 mM",
  "outcomes": [
    "total motility",
    "progressive motility",
    "plasma membrane integrity"
  ],
  "direction": "higher"
}
```

## Model rationale

Glycine at 20.0 mM was associated with higher post-thaw sperm motility and plasma membrane integrity than other concentrations and control.

## Verbatim evidence from the abstract

> The total motility, progressive motility and plasma membrane integrity were higher (P < 0.05) in cryodiluent containing 20.0 mM of glycine in comparison to other concentrations and control.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
