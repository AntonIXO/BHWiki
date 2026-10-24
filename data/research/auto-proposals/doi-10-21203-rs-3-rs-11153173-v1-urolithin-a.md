# Automated editorial proposal

- Proposal ID: proposal:774842be5d3c360503757ec2ec1c0484
- Substance: urolithin-a
- Suggestion type: ignore
- Source: [Serum uric acid-to-creatinine ratio and preeclampsia: a retrospective cross-sectional analysis with machine learning discrimination using the MIMIC-IV database](https://doi.org/10.21203/rs.3.rs-11153173/v1)
- PMID: not indexed
- DOI: 10.21203/rs.3.rs-11153173/v1
- Published: 2026-10-22
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <title>Abstract</title> <p>Objective Preeclampsia continues to be a primary cause of health complications and death for expectant mothers and their unborn children. Early identification of pregnant women at risk, followed by timely preventive interventions, carries clear clinical value. We examined whether the serum uric acid to creatinine ratio (UA/Cr) measured at admission is associated with preeclampsia and whether it adds discriminative value when used in machine learning (ML) models. Methods We conducted a retrospective cross-sectional study using the MIMIC-IV database, identifying 4,756 pregnant women with gestational age ≥ 20 weeks; 4,247 were excluded for missing data, leaving 509 for analysis (78 preeclampsia cases, 431 controls). Preeclampsia was identified by ICD-9/10 codes. UA/Cr (uric acid mg/dL ÷ creatinine mg/dL, first admission-day value) entered logistic regression as both a continuous variable and a quartile variable (Q1 as reference), with two adjustment sets: Model 1 adjusted for age, and Model 2 for age, language, and red blood cell count. Restricted cubic splines characterized nonlinearity, and subgroup analyses tested robustness. Six machine learning algorithms—random forest, XGBoost, LightGBM, CatBoost, AdaBoost, and TabPFN—were trained on the training set (n = 355) and validated on the validation set (n = 154). Features were selected by univariate screening, variance inflation factor (VIF) diagnostics, and LASSO.Univariate analysis for screening, VIF diagnostics, and LASSO were utilized to choose features. Result UA/Cr rose with preeclampsia risk and the dose–response curve was approximately linear (nonlinearity P = 0.911): each 1-unit increment was associated with an OR of 1.184 (95% CI 1.061–1.320, P = 0.002). The highest quartile carried an OR of 2.758 versus the lowest quartile (95% CI 1.318–6.128, P = 0.009; trend P = 0.020). AUCs in the validation set ranged from 0.655 to 0.761 (LightGBM the highest), with UA/Cr ranking second in feature importance. The four top-performing models did not differ significantly from one another. Conclusion In this MIMIC-IV cohort of hospitalized pregnant women, a higher admission UA/Cr was associated with preeclampsia, and an ML model built from routine admission data achieved moderate concurrent discrimination. Because of the cross-sectional design, the analysis does not support prospective prediction. Prospective and external validation, alongside head-to-head comparison with absolute uric acid, is required before any clinical use in risk stratification.</p>

## Proposed structured change

```json
{}
```

## Model rationale

The abstract evaluates the serum uric acid-to-creatinine ratio in relation to preeclampsia and does not study urolithin-A.

## Verbatim evidence from the abstract

> No abstract quote retained; full-text inspection is required.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
