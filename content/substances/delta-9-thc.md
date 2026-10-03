---
slug: delta-9-thc
name: Delta-9-THC
subtitle: The dronabinol capsule record.
aliases:
  - Dronabinol
  - THC
  - delta-9-Tetrahydrocannabinol
formula: C21H30O2
molecularWeight: 314.5 g/mol
pubchemCid: 16078
smiles: CCCCCC1=CC(=C2C3C=C(CCC3C(OC2=C1)(C)C)C)O
category: Cannabinoid
tags:
  - cannabinoid
accent: "#adbd8e"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Terminal about 25–36 hours
  low: 25
  high: 36
  context: The label describes a terminal (beta) half-life of 25 to 36 hours and an initial (alpha) half-life of about 4 hours. Only the terminal range is stored, and it is not modeled as a single value.
  sourceId: dronabinol-label
  observationId: dronabinol-terminal
kinetics:
  onset: Not assessed
  peak: Parent drug and 11-hydroxy-delta-9-THC peak at about 0.5 to 4 hours after oral dosing. In a multiple-dose fasted study, median Tmax was 1.00 hour at 2.5 mg, 2.50 hours at 5 mg, and 1.50 hours at 10 mg.
  duration: Not assessed
  bioavailability: Almost completely absorbed (90 to 95%) after single oral doses. Because of first-pass hepatic metabolism and high lipid solubility, 10 to 20% of the administered dose reaches the systemic circulation.
  metabolism: Extensive first-pass hepatic metabolism, primarily by hydroxylation, yielding active and inactive metabolites. A high-fat, high-calorie meal (59 grams of fat, about 950 calories) delayed mean Tmax by 4 hours and increased AUCinf 2.9-fold. Cmax was not significantly changed.
  sourceId: dronabinol-label
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
x-order: 403
---

## Summary

Delta-9-THC, PubChem CID 16078, summarized here from the dronabinol capsule label. Oral absorption is high, systemic availability is low, and the terminal half-life is reported as 25 to 36 hours.

## Description

PubChem titles this record Tetrahydrocannabinol. The clinical text is the dronabinol capsule label: dronabinol is delta-9-THC. Labeled uses in adults are anorexia associated with weight loss in AIDS, and nausea and vomiting from cancer chemotherapy after conventional antiemetics fail. Flower and other cannabis preparations are outside this label.

## Evidence note

The terminal range is not modeled as one half-life. The initial 4-hour figure is a separate alpha phase. Ethanol is one example in a CNS-depressant list.

## Doses

```yaml
- label: Fasted multiple-dose pharmacokinetics, 2.5 mg
  amount: 2.5 mg twice daily
  quantity: 2.5
  quantityMax: null
  unit: mg
  ingredient: Dronabinol
  formulation: Capsule
  route: Oral
  frequency: Twice daily
  duration: Multiple-dose pharmacokinetic study
  population: 34 healthy subjects, ages 20–45, fasted
  purpose: Labeled pharmacokinetic summary
  sourceCategory: approved-label
  note: Mean Cmax 1.32 ng/mL (SD 0.62), median Tmax 1.00 hour (0.50–4.00), AUC0-12 2.88 ng·hr/mL (SD 1.57).
  sourceId: dronabinol-label
- label: Fasted multiple-dose pharmacokinetics, 5 mg
  amount: 5 mg twice daily
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Dronabinol
  formulation: Capsule
  route: Oral
  frequency: Twice daily
  duration: Multiple-dose pharmacokinetic study
  population: 34 healthy subjects, ages 20–45, fasted
  purpose: Labeled pharmacokinetic summary
  sourceCategory: approved-label
  note: Mean Cmax 2.96 ng/mL (SD 1.81), median Tmax 2.50 hours (0.50–4.00), AUC0-12 6.16 ng·hr/mL (SD 1.85).
  sourceId: dronabinol-label
- label: Fasted multiple-dose pharmacokinetics, 10 mg
  amount: 10 mg twice daily
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Dronabinol
  formulation: Capsule
  route: Oral
  frequency: Twice daily
  duration: Multiple-dose pharmacokinetic study
  population: 34 healthy subjects, ages 20–45, fasted
  purpose: Labeled pharmacokinetic summary
  sourceCategory: approved-label
  note: Mean Cmax 7.88 ng/mL (SD 4.54), median Tmax 1.50 hours (0.50–3.50), AUC0-12 15.2 ng·hr/mL (SD 5.52). The label notes a slight increase in dose proportionality for mean Cmax and AUC0-12 as dose increased.
  sourceId: dronabinol-label
```

## Pharmacokinetics

```yaml
- id: dronabinol-terminal
  analyte: Dronabinol (delta-9-THC)
  route: Oral
  formulation: Capsule
  population: Pharmacokinetic descriptions in the prescribing label
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 25
  high: 36
  unit: hours
  context: Terminal half-life 25 to 36 hours. The initial half-life of about 4 hours is not an elimination estimate. Clearance averages about 0.2 L/kg-hr and is described as highly variable.
  sourceId: dronabinol-label
  modelEligible: false
```

## Modifiers

```yaml
- label: Diminished CYP2C9 function
  effect: Possibly higher exposure
  detail: Published data cited by the label indicate a potentially 2- to 3-fold higher dronabinol exposure in people with genetic variants associated with diminished CYP2C9 function. That statement is about exposure, not a revision of the 25–36 hour terminal range.
  sourceId: dronabinol-label
  observationId: dronabinol-terminal
  factorType: genotype
  direction: variable
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
- title: Labeled cannabinoid
  description: The capsule label calls dronabinol a cannabinoid and identifies it with delta-9-THC.
  sourceId: dronabinol-label
  conceptId: cannabinoid
```

## Cautions

```yaml
- title: Hazardous activities and other depressants
  description: The label says dronabinol can impair abilities needed for driving or operating machinery. Concomitant drugs that cause dizziness, confusion, sedation, or somnolence, including CNS depressants, may increase that effect.
  sourceId: dronabinol-label
```

## Claims

```yaml
- id: dronabinol-cannabinoid
  assertion: The dronabinol capsule label identifies that product as a cannabinoid.
  relation: class-identity
  participants:
    - entityId: substance:delta-9-thc
      role: substance
    - entityId: tag:cannabinoid
      role: class
  context: Adult capsule indications for AIDS-related anorexia and chemotherapy nausea after other antiemetics fail
  sourceIds:
    - dronabinol-label
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The sentence applies to the labeled capsule. It does not review other cannabinoid analogues or cannabis flower.
```

## Interactions

```yaml
- id: dronabinol-ethanol
  name: Ethanol
  otherSlug: ethanol
  summary: Ethanol is one example in the label's list of CNS depressants that may increase dizziness, confusion, sedation, or somnolence. Other named examples include barbiturates, benzodiazepines, lithium, opioids, buspirone, scopolamine, antihistamines, tricyclic antidepressants, other anticholinergic agents, and muscle relaxants. Formal drug-interaction studies have not been conducted. Published data cited by the label showed a 4-hour increase in pentobarbital elimination half-life when pentobarbital was dosed with dronabinol.
  sourceId: dronabinol-label
```

## Experience links

```yaml
- title: THC on PsychonautWiki
  url: https://psychonautwiki.org/wiki/THC
  publisher: PsychonautWiki
```

## References

```yaml
- id: dronabinol-label
  title: "Dronabinol capsules: prescribing information"
  authors: Major Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fd8c5d57-0173-4f62-8ff0-d8147986a976
  kind: Official prescribing label
  insight: Oral absorption, systemic availability, multiple-dose pharmacokinetics, terminal half-life, food effect, and concomitant CNS-depressant warning.
  limitation: Capsule labeling for specified adult indications. Retrieval year is 2026. Cannabis flower is outside this label.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: pubchem
  title: "Delta-9-THC: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/16078
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

