---
slug: dmt
name: DMT
subtitle: Infusion concentrations, half-life unstated.
aliases:
  - N,N-Dimethyltryptamine
  - Dimethyltryptamine
formula: C12H16N2
molecularWeight: 188.27 g/mol
pubchemCid: 6089
smiles: CN(C)CCC1=CNC2=CC=CC=C21
category: Psychedelic
tags:
  - psychedelic
  - tryptamine
accent: "#a89bc4"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The inspected abstract does not report an elimination half-life. Plasma concentrations varied between and within individuals.
  sourceId: vanderheijden2026
  observationId: dmt-unresolved
kinetics:
  onset: Not assessed
  peak: Mild to moderate subjective psychedelic effects emerged at about 35 ng/mL.
  duration: Not assessed
  bioavailability: Administered by intravenous infusion. Oral bioavailability is not assessed.
  metabolism: At similar infusion rates, plasma concentrations in smokers were roughly double those of non-smokers. The authors say this was probably due to monoamine oxidase A-inhibiting compounds in cigarette smoke.
  sourceId: vanderheijden2026
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
x-order: 406
---

## Summary

N,N-Dimethyltryptamine, PubChem CID 6089. An intravenous infusion study found mild to moderate subjective effects around 35 ng/mL. The inspected abstract does not report an elimination half-life.

## Description

Part 1 was a randomized, double-blind, placebo-controlled single-ascending-dose study in healthy smokers, using 90-minute infusions. Part 2 was open-label in healthy non-smokers, with a 5-minute loading infusion and a 55-minute maintenance infusion. At similar infusion rates, plasma concentrations in smokers were roughly double those in non-smokers. The authors describe that difference as probably due to monoamine oxidase A-inhibiting compounds in cigarette smoke. The abstract used here ends mid-sentence after that comparison.

## Evidence note

The smoking comparison is the authors' probable explanation. It is not a measured MAO-A assay, and no half-life number was reported.

## Doses

```yaml
- label: Part 1, smoker ascending infusions
  amount: 0.10–0.81 mg/min
  quantity: 0.1
  quantityMax: 0.81
  unit: mg/min
  ingredient: DMT
  formulation: Intravenous infusion
  route: Intravenous
  frequency: 90-minute infusion
  duration: Single-ascending-dose observation
  population: Healthy smokers
  purpose: Randomized double-blind placebo-controlled ascending-dose study
  sourceCategory: research
  note: Infusion rates were 0.10, 0.20, 0.40, and 0.81 mg/min.
  sourceId: vanderheijden2026
- label: Part 2, non-smoker loading and maintenance
  amount: 3.64 mg/min loading, then 0.81 or 1.29 mg/min
  quantity: null
  quantityMax: null
  unit: mg/min
  ingredient: DMT
  formulation: Intravenous infusion
  route: Intravenous
  frequency: 5-minute loading infusion, then 55-minute maintenance
  duration: Open-label observation
  population: Healthy non-smokers
  purpose: Open-label loading and maintenance infusions
  sourceCategory: research
  note: The two regimens were 3.64 then 0.81 mg/min, and 3.64 then 1.29 mg/min.
  sourceId: vanderheijden2026
```

## Pharmacokinetics

```yaml
- id: dmt-unresolved
  analyte: DMT
  route: Intravenous infusion
  formulation: Solution for infusion
  population: Healthy smokers in part 1 and healthy non-smokers in part 2
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No numeric elimination half-life is stated. Concentrations in smokers were roughly double those in non-smokers at similar infusion rates.
  sourceId: vanderheijden2026
  modelEligible: false
```

## Modifiers

```yaml
- label: Cigarette smoking
  effect: Higher plasma concentration at a similar infusion rate
  detail: Concentrations in smokers were roughly double those in non-smokers. The paper calls monoamine oxidase A inhibition by cigarette smoke a probable explanation. The direction is a difference in concentration, not a measured change in half-life.
  sourceId: vanderheijden2026
  observationId: dmt-unresolved
  factorType: smoking
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Subjective psychedelic effects
  direction: Increased
  evidence: Human research
  description: Mild to moderate subjective psychedelic effects emerged at about 35 ng/mL. All recorded adverse events were mild to moderate and self-limiting. In part 2, two subjects asked to stop after the loading dose because of anxiety and intense effects.
  sourceId: vanderheijden2026
  population: Healthy smokers and healthy non-smokers
  exposure: Intravenous infusions described in the two study parts
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: Possible interaction with cigarette smoke
  description: Higher concentrations in smokers are described as probably related to monoamine oxidase A-inhibiting compounds in cigarette smoke.
  sourceId: vanderheijden2026
  conceptId: tobacco-smoke
```

## Cautions

```yaml
- title: Two discontinuations in part 2
  description: Two subjects asked to stop after the loading dose because of anxiety and intense effects. Other recorded adverse events in the abstract were mild to moderate and self-limiting.
  sourceId: vanderheijden2026
```

## Claims

```yaml
- id: dmt-tobacco-smoke
  assertion: The study authors propose that higher DMT plasma concentrations in smokers were probably due to MAO-A-inhibiting compounds in cigarette smoke.
  relation: exposure-context
  participants:
    - entityId: substance:dmt
      role: substance
    - entityId: tag:tobacco-smoke
      role: exposure
  context: Comparison of smokers and non-smokers at similar intravenous infusion rates
  sourceIds:
    - vanderheijden2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The abstract says probably. It does not report a direct MAO-A measurement, and the text used here ends during that discussion.
```

## Interactions

```yaml
- id: dmt-tobacco-smoke
  name: Tobacco smoke (possible MAO-A inhibition)
  otherSlug: null
  summary: At similar infusion rates, plasma concentrations in smokers were roughly double those of non-smokers, probably because of monoamine oxidase A-inhibiting compounds in cigarette smoke.
  sourceId: vanderheijden2026
```

## Experience links

```yaml
- title: DMT on PsychonautWiki
  url: https://psychonautwiki.org/wiki/DMT
  publisher: PsychonautWiki
```

## References

```yaml
- id: vanderheijden2026
  title: Pharmacokinetics, pharmacodynamics and safety of N,N-dimethyltryptamine administered intravenously in healthy smoking and non-smoking volunteers
  authors: van der Heijden et al.
  year: 2026
  pmid: "42671902"
  url: https://pubmed.ncbi.nlm.nih.gov/42671902/
  kind: Phase 1 intravenous study
  insight: Reports infusion regimens, a concentration associated with mild to moderate subjective effects, and a smoking-related difference in plasma concentration.
  limitation: Industry-affiliated authors. The abstract used for this draft ends mid-sentence, so later results are omitted. No half-life number is stated.
  funding: Industry-affiliated authors are listed on the PubMed record. Full funding text was not re-extracted.
- id: pubchem
  title: "DMT: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/6089
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

