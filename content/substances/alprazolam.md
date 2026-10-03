---
slug: alprazolam
name: Alprazolam
subtitle: A labeled benzodiazepine.
aliases:
  - Xanax
formula: C17H13ClN4
molecularWeight: 308.8 g/mol
pubchemCid: 2118
smiles: CC1=NN=C2N1C3=C(C=C(C=C3)Cl)C(=NC2)C4=CC=CC=C4
category: Benzodiazepine
tags:
  - benzodiazepine
  - depressant
accent: "#c4b48a"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Mean about 11.2 hours
  low: 11.2
  high: 11.2
  context: Mean plasma elimination half-life about 11.2 hours in healthy adults. The label also reports a range of 6.3 to 26.9 hours for that population.
  sourceId: alprazolam-label
  observationId: alprazolam-healthy-mean
kinetics:
  onset: Not assessed
  peak: Peak plasma concentration occurs 1 to 2 hours after an oral dose.
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: About 80% bound to human serum protein, mostly albumin. Metabolized primarily by CYP3A4 to 4-hydroxyalprazolam and α-hydroxyalprazolam. Plasma levels of those two metabolites are less than 4% of the parent. Plasma levels of alprazolam increase proportionally from 0.5 to 3.0 mg. Parent and metabolites are excreted primarily in urine.
  sourceId: alprazolam-label
x-shape:
  - slug
  - name
  - subtitle
  - summary
  - description
  - aliases
  - formula
  - molecularWeight
  - pubchemCid
  - smiles
  - category
  - tags
  - accent
  - evidenceNote
  - reviewedAt
  - editorialStatus
  - halfLife
  - pkObservations
  - kinetics
  - modifiers
  - doses
  - effects
  - outcomes
  - claims
  - mechanisms
  - cautions
  - interactions
  - experienceLinks
  - references
  - legal
x-order: 410
---

## Summary

Alprazolam, PubChem CID 2118. The tablet label reports a mean plasma elimination half-life of about 11.2 hours in healthy adults, with a range of 6.3 to 26.9 hours.

## Description

The cited label covers generic alprazolam tablets for acute treatment of generalized anxiety disorder in adults and for panic disorder, with or without agoraphobia, in adults. Plasma levels increase proportionally from 0.5 to 3.0 mg. The boxed warning covers concomitant opioids, abuse and misuse, and dependence and withdrawal.

## Evidence note

The modeled value is the healthy-adult mean of 11.2 hours. The reported range and the elderly, obese, and hepatic means are separate observations.

## Doses

```yaml
- label: Generalized anxiety disorder starting dose
  amount: 0.25–0.5 mg
  quantity: 0.25
  quantityMax: 0.5
  unit: mg
  ingredient: Alprazolam
  formulation: Tablet
  route: Oral
  frequency: Three times daily
  duration: Acute labeled treatment. The dose may be increased every 3 to 4 days, to a maximum recommended 4 mg/day in divided doses.
  population: Adults with generalized anxiety disorder
  purpose: Labeled starting dose
  sourceCategory: approved-label
  note: The label says to use the lowest effective dose and to reassess the need for continued treatment.
  sourceId: alprazolam-label
- label: Panic disorder starting dose
  amount: 0.5 mg
  quantity: 0.5
  quantityMax: null
  unit: mg
  ingredient: Alprazolam
  formulation: Tablet
  route: Oral
  frequency: Three times daily
  duration: Labeled treatment. Increases are no more than 1 mg/day, at intervals of 3 to 4 days.
  population: Adults with panic disorder, with or without agoraphobia
  purpose: Labeled starting dose
  sourceCategory: approved-label
  note: When tapering, the label says to decrease the dosage by no more than 0.5 mg every 3 days. Some patients may require a slower reduction.
  sourceId: alprazolam-label
```

## Pharmacokinetics

```yaml
- id: alprazolam-healthy-mean
  analyte: Alprazolam
  route: Oral
  formulation: Tablet
  population: Healthy adults
  endpoint: elimination-half-life
  statistic: study-mean
  value: 11.2
  low: null
  high: null
  unit: hours
  context: Label mean of approximately 11.2 hours. The range is stored separately and is not a confidence interval.
  sourceId: alprazolam-label
  modelEligible: true
- id: alprazolam-healthy-range
  analyte: Alprazolam
  route: Oral
  formulation: Tablet
  population: Healthy adults
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 6.3
  high: 26.9
  unit: hours
  context: Range reported with the healthy-adult mean. It is not a confidence interval.
  sourceId: alprazolam-label
  modelEligible: false
- id: alprazolam-elderly
  analyte: Alprazolam
  route: Oral
  formulation: Tablet
  population: Healthy elderly subjects
  endpoint: elimination-half-life
  statistic: study-mean
  value: 16.3
  low: null
  high: null
  unit: hours
  context: Mean 16.3 hours (range 9.0 to 26.9). The label compares this with 11.0 hours (range 6.3 to 15.8, n=16) in healthy younger adults. The sample size is stated for the younger group.
  sourceId: alprazolam-label
  modelEligible: false
- id: alprazolam-obese
  analyte: Alprazolam
  route: Oral
  formulation: Tablet
  population: A group of obese subjects
  endpoint: elimination-half-life
  statistic: study-mean
  value: 21.8
  low: null
  high: null
  unit: hours
  context: Mean 21.8 hours (range 9.9 to 40.4).
  sourceId: alprazolam-label
  modelEligible: false
- id: alprazolam-hepatic
  analyte: Alprazolam
  route: Oral
  formulation: Tablet
  population: Patients with alcoholic liver disease
  endpoint: elimination-half-life
  statistic: study-mean
  value: 19.7
  low: null
  high: null
  unit: hours
  context: Mean 19.7 hours (range 5.8 to 65.3) in patients with alcoholic liver disease.
  sourceId: alprazolam-label
  modelEligible: false
```

## Modifiers

```yaml
- label: Older age group
  effect: Longer mean half-life in the label's elderly comparison
  detail: Healthy elderly subjects had a mean of 16.3 hours, compared with 11.0 hours in healthy younger adults (n=16 for the younger group).
  sourceId: alprazolam-label
  observationId: alprazolam-elderly
  factorType: other
  direction: slower
- label: Obesity
  effect: Longer mean half-life in one labeled group
  detail: A group of obese subjects had a mean of 21.8 hours (range 9.9 to 40.4).
  sourceId: alprazolam-label
  observationId: alprazolam-obese
  factorType: other
  direction: slower
- label: Alcoholic liver disease
  effect: Longer mean half-life
  detail: Patients with alcoholic liver disease had a mean of 19.7 hours (range 5.8 to 65.3). The label recommends a dosage reduction in hepatic impairment.
  sourceId: alprazolam-label
  observationId: alprazolam-hepatic
  factorType: other
  direction: slower
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Boxed warning
  description: The label's boxed warning covers concomitant opioids, abuse, misuse, and addiction, and dependence and withdrawal reactions. Concomitant benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death.
  sourceId: alprazolam-label
- title: Strong CYP3A inhibitors
  description: Alprazolam tablets are contraindicated with strong CYP3A inhibitors, with a labeled exception for ritonavir that points to the label's own dose section. Hypersensitivity to alprazolam or other benzodiazepines is also a contraindication.
  sourceId: alprazolam-label
- title: Misuse with alcohol
  description: The label says abuse and misuse of benzodiazepines commonly involve other medications, alcohol, or illicit substances, and that this pattern is associated with more frequent serious adverse outcomes. That statement is not recorded here as a separate pharmacokinetic interaction.
  sourceId: alprazolam-label
```

## Claims

```yaml
- id: alprazolam-opioids
  assertion: The boxed warning states that concomitant benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death.
  relation: concomitant-risk
  participants:
    - entityId: substance:alprazolam
      role: substance
    - entityId: tag:opioid
      role: concomitant-class
  context: Prescribing warning for alprazolam tablets
  sourceIds:
    - alprazolam-label
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A class warning. It does not name one opioid product or quantify risk for every exposure. Concomitant prescribing is reserved for patients without an adequate alternative.
```

## Interactions

```yaml
- id: alprazolam-opioids
  name: Opioids
  otherSlug: null
  summary: Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. The label says to reserve concomitant prescribing for patients for whom alternatives are inadequate.
  sourceId: alprazolam-label
```

## Experience links

```yaml
- title: Alprazolam on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Alprazolam
  publisher: PsychonautWiki
```

## References

```yaml
- id: alprazolam-label
  title: "Alprazolam tablets: prescribing information"
  authors: Actavis Pharma, Inc.
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a23063c0-099a-4256-b95f-3a857bbf704b
  kind: Official prescribing label
  insight: Healthy-adult half-life, population differences, CYP3A4 metabolism, labeled starting doses, and the boxed opioid warning.
  limitation: Generic tablet labeling. The 11.2-hour figure is a healthy-adult mean. Retrieval year is 2026.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: pubchem
  title: "Alprazolam: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/2118
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

