# Automated editorial proposal

- Proposal ID: proposal:fb2f5762333802fb6ab7411450a605e3
- Substance: antipsychotic
- Suggestion type: new-reference
- Source: [Antipsychotic Prescriptions for Prenatal and Postpartum Women in Japan: A Large Claims Database Study.](https://pubmed.ncbi.nlm.nih.gov/42952012/)
- PMID: 42952012
- DOI: 10.1002/prp2.70336
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> This study aimed to evaluate the prevalence of antipsychotic prescriptions before, during, and after pregnancy in Japan, with a focus on new prescriptions and continuation after pregnancy confirmation. We conducted a claims-based analysis using a Japanese claims database (analytic period: 2010-2022). Antipsychotic prescription prevalence and new prescriptions were assessed from 180 days before pregnancy through 180 days postpartum. To assess continuation after pregnancy confirmation, prescription status was evaluated across gestational weeks 0-4, 5-13, and from 14 weeks to delivery. Among 120 735 women, 1698 (140.6/10 000 deliveries) received at least one antipsychotic prescription, including 809 (67.0/10 000 deliveries) during pregnancy. Prescription prevalence decreased during the first and second trimesters but increased postpartum. New prescriptions were less frequent during pregnancy but increased after delivery. Among 611 women prescribed antipsychotics during 0-4 weeks' gestation, 482 (78.9%) continued and 129 (21.1%) discontinued prescription during weeks 5-13; of those who continued prescription during 5-13 weeks, 334 (54.7%) continued until delivery. Evaluation of major indications showed that continuation until delivery was highest in those with schizophrenia (63.6%), followed by bipolar disorder (51.0%). This study provides the first comprehensive description of perinatal antipsychotic prescription trends in Japan. Substantial prescription discontinuation occurred after pregnancy confirmation. Increases in postpartum prescriptions might reflect new prescriptions or resumption among women who had discontinued treatment during pregnancy. These findings offer foundational epidemiological insights into real-world perinatal antipsychotic use.

## Proposed structured change

```json
{
  "title": "Antipsychotic Prescriptions for Prenatal and Postpartum Women in Japan: A Large Claims Database Study.",
  "studyType": "claims-based analysis",
  "population": "120735 women in Japan",
  "analyticPeriod": "2010-2022",
  "focus": "Prescription prevalence, new prescriptions, and continuation from 180 days before pregnancy through 180 days postpartum"
}
```

## Model rationale

This is a large Japanese claims database study describing perinatal antipsychotic prescription patterns.

## Verbatim evidence from the abstract

> We conducted a claims-based analysis using a Japanese claims database (analytic period: 2010-2022).
> Among 120 735 women, 1698 (140.6/10 000 deliveries) received at least one antipsychotic prescription

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
