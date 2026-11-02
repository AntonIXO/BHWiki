# Automated editorial proposal

- Proposal ID: proposal:88d0a052945cd8e25874961540fff9e7
- Substance: vitamin-c
- Suggestion type: new-effect
- Source: [Optimal Vitamin C Status is Associated with Better Physical Performance in Men and Women from the EPIC-Norfolk Cohort: A Cross-Sectional Study.](https://pubmed.ncbi.nlm.nih.gov/42925332/)
- PMID: 42925332
- DOI: 10.1007/s00223-026-01614-7
- Published: 2026-10-24
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Vitamin C may be important for maintaining skeletal muscle health and preventing sarcopenia, but most previous epidemiological studies have investigated dietary intakes rather than vitamin C status. To address this gap, this study investigated cross-sectional associations between both plasma and dietary vitamin C and muscle strength and physical performance. This study analysed data from over 5000 participants of the European Prospective Investigation into Cancer and Nutrition (EPIC)-Norfolk cohort (aged 48-92 years). Multivariable linear regression models, adjusted for lifestyle, biological, medical, and dietary covariates, were used to investigate associations between dietary (categorised as quintiles, Qs) and plasma vitamin C (low < 25μmol/L, suboptimal 25 to < 50μmol/L, optimal ≥ 50μmol/L), and handgrip strength (adjusted for height: HGS<sub>ht</sub>), gait speed, and 5-chair-stand time. Least square means for outcome measures were calculated from regression models. Women with optimal versus low plasma vitamin C had higher HGS<sub>ht</sub> (+ 0.54 kg/m<sup>2</sup>, p = 0.009), and faster gait speed and chair-stand time (+ 0.11m/s, p < 0.001; - 1.03s, p = 0.028, respectively). Men with optimal versus low plasma vitamin C had faster gait speed and chair-stand time (+ 0.05m/s, p = 0.01; - 0.71s, p = 0.026, respectively). Compared with Q1 of dietary intake, women in Q2 and Q5 had faster gait speed (+ 0.04m/s, p < 0.01 for both); women in Q4 and Q5 had faster chair-stand times (- 0.67s, p = 0.002; - 0.57s, p = 0.013, respectively). No associations were found for dietary vitamin C in men. These findings suggest that maintaining optimal plasma vitamin C status could be important for maintaining physical function. Longitudinal and intervention studies are needed to support our findings.

## Proposed structured change

```json
{
  "effect": "Higher plasma vitamin C status was associated with better physical performance in older men and women, including faster gait speed and faster chair-stand performance; in women, optimal versus low plasma vitamin C was also associated with higher height-adjusted handgrip strength.",
  "population": "Over 5000 participants aged 48-92 years from the EPIC-Norfolk cohort.",
  "exposure": "Plasma vitamin C status and dietary vitamin C intake.",
  "outcomes": [
    "Handgrip strength",
    "Gait speed",
    "5-chair-stand time"
  ],
  "study_design": "Cross-sectional observational study"
}
```

## Model rationale

The abstract reports adjusted associations between vitamin C status and measures of muscle strength and physical performance.

## Verbatim evidence from the abstract

> Women with optimal versus low plasma vitamin C had higher HGS<sub>ht</sub> (+ 0.54 kg/m<sup>2</sup>, p = 0.009), and faster gait speed and chair-stand time (+ 0.11m/s, p < 0.001; - 1.03s, p = 0.028, respectively). Men with optimal versus low plasma vitamin C had faster gait speed and chair-stand time (+ 0.05m/s, p = 0.01; - 0.71s, p = 0.026, respectively).
> Compared with Q1 of dietary intake, women in Q2 and Q5 had faster gait speed (+ 0.04m/s, p < 0.01 for both); women in Q4 and Q5 had faster chair-stand times (- 0.67s, p = 0.002; - 0.57s, p = 0.013, respectively). No associations were found for dietary vitamin C in men.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
