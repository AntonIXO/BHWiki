---
slug: psilocybin
name: Psilocybin
subtitle: A psychedelic under clinical investigation.
aliases:
  - O-phosphoryl-4-hydroxy-N,N-dimethyltryptamine
formula: C12H17N2O4P
molecularWeight: 284.25 g/mol
pubchemCid: 10624
smiles: CN(C)CCC1=CNC2=C1C(=CC=C2)OP(=O)(O)O
category: Psychedelic
tags:
  - psychedelic
  - serotonin-2a
  - serotonin
  - perception
  - us-schedule-i
  - depression-severity
  - psychological-support
accent: "#c1a6c5"
reviewedAt: 2026-09-29
halfLife:
  label: "Psilocin: about 3 hours"
  low: 3
  high: 3
  context: Mean elimination of the active metabolite in a small controlled study; this is not the half-life of parent psilocybin or a prediction of experience duration.
  sourceId: brown2017
  observationId: psilocybin-elimination
kinetics:
  onset: No estimate curated here
  peak: No estimate curated here
  duration: Subjective duration is not inferred from elimination
  bioavailability: No absolute estimate curated here
  metabolism: Converted to psilocin; the cited study measured active-metabolite kinetics
  sourceId: brown2017
editorialStatus: sourced-draft
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
  - halfLife
  - kinetics
  - modifiers
  - doses
  - effects
  - mechanisms
  - cautions
  - references
  - legal
  - editorialStatus
  - pkObservations
  - outcomes
  - claims
  - interactions
  - experienceLinks
x-order: 5
---

## Summary

A prodrug of psilocin, studied in supported clinical settings. Subjective effects, therapeutic outcomes and legal status are distinct questions.

## Description

Psilocybin is converted to active psilocin. Modern trials study carefully selected participants and structured support; their results cannot be transferred directly to unsupervised use or variable mushroom preparations. This entry distinguishes parent-compound identity from active-metabolite kinetics.

## Evidence note

Included clinical findings come from selected participants receiving psychological support. Comparative benefit, durability and harms need continued assessment.

## Doses

```yaml
- label: Depression trial exposure
  amount: 25 mg (studied arm)
  route: Oral
  population: Adults with treatment-resistant depression in a supported clinical trial
  note: An investigational trial arm, not instructions for personal use or an equivalent mushroom weight.
  sourceId: goodwin2022
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Psilocybin
  formulation: Proprietary synthetic formulation in a supported clinical trial
  frequency: Single administration
  duration: Primary outcome at week 3; secondary follow-up through week 12
  purpose: Investigate depression severity versus a 1 mg control arm
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: psilocybin-elimination
  endpoint: elimination-half-life
  unit: hours
  context: Mean elimination of the active metabolite in a small controlled study; this is not the half-life of parent psilocybin or a prediction of experience duration.
  sourceId: brown2017
  analyte: Psilocin (active metabolite)
  route: Oral administration of psilocybin
  formulation: Controlled oral psilocybin preparation
  population: 12 healthy adults in an open-label escalating-exposure study
  statistic: study-mean
  value: 3
  low: null
  high: null
  modelEligible: true
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- name: Perceptual alteration
  direction: Variable
  evidence: Human research
  description: Human antagonist experiments support serotonin-receptor involvement in changes to perception and experience; no intensity score is assigned.
  sourceId: vollenweider1998
  conceptId: perception
  population: Healthy volunteers in an acute antagonist experiment
  exposure: Psilocybin with pharmacological pretreatment in a controlled setting
  instrument: Acute subjective assessment; exact scale not assessed
  magnitude: null
```

## Outcomes

```yaml
- name: Depression symptom severity
  direction: Decreased
  evidence: Human research
  description: The studied higher-dose arm improved the primary short-term outcome compared with the low-dose control, with adverse events and unresolved durability.
  sourceId: goodwin2022
  conceptId: depression-severity
  population: Adults with treatment-resistant depression in the phase 2 trial
  exposure: Single 25 mg psilocybin administration with psychological support versus 1 mg control; week 3
  instrument: Montgomery–Åsberg Depression Rating Scale (MADRS)
  magnitude: null
```

## Mechanisms

```yaml
- title: Serotonin 5-HT2A signaling
  description: Blocking this receptor attenuated acute psilocybin effects in a human experiment. That does not establish a complete mechanism for lasting therapeutic change.
  sourceId: vollenweider1998
  conceptId: serotonin-2a
```

## Cautions

```yaml
- title: Clinical support and screening matter
  description: The depression trial reported headache, nausea and dizziness. Suicidal ideation, behavior or self-injury occurred across dose groups; the study cannot establish safety for unsupervised use.
  sourceId: goodwin2022
```

## Claims

```yaml
- id: serotonin-perception
  assertion: Antagonist experiments support serotonin 5-HT2A involvement in acute psilocybin effects.
  relation: receptor-pathway
  participants:
    - entityId: substance:psilocybin
      role: administered-prodrug
    - entityId: tag:serotonin-2a
      role: target
    - entityId: tag:perception
      role: subjective-effect
  context: Controlled acute human antagonist experiment.
  sourceIds:
    - vollenweider1998
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute receptor evidence does not establish a complete mechanism of sustained therapeutic change.
- id: depression-trial
  assertion: The higher-dose study arm reduced depression severity relative to the low-dose control at the primary time point.
  relation: measured-outcome
  participants:
    - entityId: substance:psilocybin
      role: exposure
    - entityId: tag:depression-severity
      role: measured-outcome
    - entityId: tag:psychological-support
      role: co-intervention
  context: Treatment-resistant depression; standardized preparation and psychological support; assessment at week 3.
  sourceIds:
    - goodwin2022
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Adverse events occurred and longer comparative trials are needed.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: brown2017
  title: Pharmacokinetics of Escalating Doses of Oral Psilocybin in Healthy Adults
  authors: Brown et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28353056/
  kind: Human pharmacokinetic study
  insight: Measured psilocin elimination after controlled oral psilocybin exposure in 12 healthy adults.
  limitation: Small, selected and supported sample. Active-metabolite kinetics are not equivalent to parent-compound kinetics.
  funding: Not assessed; consult the original disclosure.
  pmid: "28353056"
  doi: 10.1007/s40262-017-0540-6
- id: goodwin2022
  title: Single-Dose Psilocybin for a Treatment-Resistant Episode of Major Depression
  authors: Goodwin et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/36322843/
  kind: Phase 2 randomized trial
  insight: A supported clinical protocol improved the primary short-term depression outcome in the higher-dose arm.
  limitation: Adverse events occurred; longer and comparative trials are needed. Funded by COMPASS Pathfinder.
  funding: COMPASS Pathfinder.
  pmid: "36322843"
  doi: 10.1056/NEJMoa2206443
- id: vollenweider1998
  title: Psilocybin induces schizophrenia-like psychosis in humans via a serotonin-2 agonist action
  authors: Vollenweider et al.
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9875725/
  kind: Human antagonist experiment
  insight: Antagonist pretreatment supported a role for serotonin receptors in acute effects.
  limitation: Historical terminology and an acute laboratory experiment do not establish a model of schizophrenia or a therapeutic mechanism.
  funding: Not assessed; consult the original disclosure.
  pmid: "9875725"
  doi: 10.1097/00001756-199812010-00024
- id: pubchem
  title: "Psilocybin: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/10624
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
- jurisdiction: United States — federal
  status: Schedule I under the Controlled Substances Act. State and local rules require separate review.
  sourceUrl: https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf
  asOf: 2026-09-29
  activity: Federal controlled-substance classification of psilocybin; does not determine permitted state or local activities.
```

