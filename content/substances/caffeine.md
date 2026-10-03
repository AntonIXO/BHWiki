---
slug: caffeine
name: Caffeine
subtitle: Wakefulness, with a long tail.
aliases:
  - 1,3,7-trimethylxanthine
  - Coffee caffeine
formula: C8H10N4O2
molecularWeight: 194.19 g/mol
pubchemCid: 2519
smiles: CN1C=NC2=C1C(=O)N(C(=O)N2C)C
category: Stimulant
tags:
  - stimulant
  - methylxanthine
  - adenosine-antagonist
  - adenosine
  - cyp1a2
  - attention
  - sleep
  - adenosine-receptor
  - tobacco-smoke
  - alertness
  - anxiety
accent: "#adbd8e"
reviewedAt: 2026-09-29
halfLife:
  label: 3–7 hours
  low: 3
  high: 7
  context: A commonly reported adult range, not an individual prediction. Pregnancy, medications, smoking and liver function can shift it substantially.
  sourceId: temple2017
  observationId: caffeine-elimination
kinetics:
  onset: Subjective onset varies
  peak: Serum peak around 2 hours in the cited review; formulation and study matter
  duration: Sleep effects may outlast perceived stimulation
  bioavailability: Rapid, near-complete intestinal absorption
  metabolism: Primarily hepatic CYP1A2; paraxanthine is the major metabolite
  sourceId: temple2017
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
x-order: 0
---

## Summary

A familiar stimulant with an unusually rich evidence base. Its effects depend on timing, tolerance and how quickly your body clears it.

## Description

Caffeine is a methylxanthine found in coffee and tea and added to some foods and medicines. Blocking adenosine signaling can increase alertness, while residual exposure can interfere with sleep. The evidence below separates measured outcomes from the experience of feeling more awake.

## Evidence note

Selected evidence covers alertness, sleep disruption and pharmacokinetics. Claims have not undergone formal evidence grading or independent editorial review.

## Doses

```yaml
- label: Attention study
  amount: 50 mg
  route: Oral
  population: 27 healthy adult volunteers
  note: Studied alone and with 100 mg L-theanine. A trial exposure, not a recommended personal dose.
  sourceId: owen2008
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study treatment; exact preparation not assessed
  frequency: Single exposure per crossover session
  duration: Acute assessment at 60 and 90 minutes
  purpose: Compare attention and mood with placebo and a caffeine–theanine combination
  sourceCategory: research
- label: Sleep-disruption study
  amount: 400 mg
  route: Oral
  population: Adults in a placebo-controlled sleep study
  note: Given at bedtime or 3 or 6 hours before it. Sleep was disrupted at every tested timing; this is not a suggested dose.
  sourceId: drake2013
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study treatment; exact preparation not assessed
  frequency: Single exposure on each test night
  duration: At bedtime, or 3 or 6 hours before bedtime; sleep followed that night
  purpose: Assess timing-dependent sleep disruption
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: caffeine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: A commonly reported adult range, not an individual prediction. Pregnancy, medications, smoking and liver function can shift it substantially.
  sourceId: temple2017
  analyte: Caffeine
  route: Oral
  formulation: Ingested caffeine; preparations vary across reviewed studies
  population: Adults represented in the narrative review
  statistic: reported-range
  value: null
  low: 3
  high: 7
  modelEligible: true
```

## Modifiers

```yaml
- label: Tobacco smoke
  effect: Faster clearance during smoking
  detail: Smoking induces CYP1A2. In a small study of heavy smokers, caffeine clearance fell after cessation. This is not evidence that nicotine itself accelerates caffeine clearance.
  sourceId: faber2004
  observationId: caffeine-elimination
  factorType: smoking
  direction: faster
- label: CYP1A2 activity
  effect: Exposure varies between people
  detail: Genetics, medicines and physiological context affect clearance. A genotype alone cannot determine a precise personal half-life.
  sourceId: grzegorzewski2022
  observationId: caffeine-elimination
  factorType: enzyme
  direction: variable
- label: Oral contraceptives
  effect: Slower clearance in reviewed data
  detail: The systematic dataset found longer elimination half-life with oral contraceptive use; formulation and individual context still matter.
  sourceId: grzegorzewski2022
  observationId: caffeine-elimination
  factorType: other
  direction: slower
```

## Effects

```yaml
- name: Subjective alertness
  direction: Increased
  evidence: Human research
  description: Participants reported greater alertness after caffeine in the cited crossover trial.
  sourceId: owen2008
  conceptId: alertness
  population: 27 healthy adult volunteers
  exposure: 50 mg caffeine; acute crossover comparison with placebo
  instrument: Subjective alertness assessment; exact scale not assessed
  magnitude: null
- name: Anxiety / jitteriness
  direction: Variable
  evidence: Human research
  description: Adverse experiences depend on exposure and sensitivity; vulnerable populations need separate consideration.
  sourceId: temple2017
  conceptId: anxiety
  population: Populations represented in a narrative safety review
  exposure: Varied caffeine intakes and exposure histories
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- name: Attention-task accuracy
  direction: Increased
  evidence: Human research
  description: Accuracy improved on a specific switching task; this does not quantify a general cognitive boost.
  sourceId: owen2008
  conceptId: attention
  population: 27 healthy adult volunteers
  exposure: 50 mg caffeine; assessment 90 minutes after administration
  instrument: Attention-switching task accuracy
  magnitude: null
- name: Sleep continuity
  direction: Decreased
  evidence: Human research
  description: The sleep trial found disruption even when the studied exposure preceded bedtime by several hours.
  sourceId: drake2013
  conceptId: sleep
  population: Adults in a placebo-controlled home sleep study
  exposure: 400 mg caffeine at bedtime or 3 or 6 hours before it
  instrument: Self-report and validated portable sleep monitoring
  magnitude: null
```

## Mechanisms

```yaml
- title: Adenosine receptor antagonism
  description: Caffeine interferes with adenosine signaling. Feeling less sleepy does not mean the underlying need for sleep has disappeared.
  sourceId: temple2017
  conceptId: adenosine-antagonist
```

## Cautions

```yaml
- title: Sleep is part of the outcome
  description: A short-lived improvement in alertness can coexist with later sleep disruption. Half-life is not the same as duration of a noticeable effect.
  sourceId: drake2013
- title: Changing smoking status changes exposure
  description: Caffeine clearance can decrease after stopping smoking; previous intake may then produce different exposure.
  sourceId: faber2004
- title: Population matters
  description: Pregnancy, childhood, heart conditions and some psychiatric conditions change the risk context. Adult study exposures are not universal guidance.
  sourceId: temple2017
```

## Claims

```yaml
- id: adenosine-action
  assertion: Caffeine antagonizes adenosine receptors.
  relation: receptor-antagonism
  participants:
    - entityId: substance:caffeine
      role: agent
    - entityId: tag:adenosine-receptor
      role: target
    - entityId: tag:adenosine
      role: endogenous-ligand
  context: Human pharmacology; receptor activity does not erase physiological sleep need.
  sourceIds:
    - temple2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanism alone does not establish the size or duration of a clinical effect.
- id: smoking-clearance
  assertion: Tobacco-smoke exposure induces CYP1A2 activity; stopping smoking reduced caffeine clearance in the cited study.
  relation: clearance-modification
  participants:
    - entityId: substance:caffeine
      role: substrate
    - entityId: tag:cyp1a2
      role: metabolizing-enzyme
    - entityId: tag:tobacco-smoke
      role: exposure-context
  context: Heavy smokers undergoing cessation. Tobacco smoke is a metabolic exposure, not a caffeine route.
  sourceIds:
    - faber2004
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Enzyme activity decline after cessation is not caffeine elimination half-life.
- id: sleep-disruption
  assertion: The tested caffeine exposure disrupted subsequent sleep.
  relation: adverse-outcome
  participants:
    - entityId: substance:caffeine
      role: exposure
    - entityId: tag:sleep
      role: measured-outcome
  context: 400 mg administered at bedtime or 3 or 6 hours before it.
  sourceIds:
    - drake2013
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: One fixed exposure cannot establish a universal sleep cutoff.
- id: attention-combination
  assertion: A caffeine–L-theanine combination improved selected attention task results.
  relation: co-studied
  participants:
    - entityId: substance:caffeine
      role: co-exposure
    - entityId: substance:l-theanine
      role: co-exposure
    - entityId: tag:attention
      role: measured-outcome
  context: 27 healthy volunteers; acute crossover comparison with placebo.
  sourceIds:
    - owen2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A co-study does not establish long-term benefit or synergy.
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
- id: owen2008
  title: The combined effects of L-theanine and caffeine on cognitive performance and mood
  authors: Owen et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18681988/
  kind: Randomized crossover trial
  insight: Caffeine with L-theanine improved some attention-task outcomes in 27 healthy volunteers.
  limitation: Small, short-term study; selected laboratory tasks do not establish everyday productivity or long-term benefit. Authors were affiliated with Unilever.
  funding: Funding not assessed; author affiliations include Unilever.
  pmid: "18681988"
  doi: 10.1179/147683008X301513
- id: temple2017
  title: "The Safety of Ingested Caffeine: A Comprehensive Review"
  authors: Temple et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28603504/
  kind: Narrative review
  insight: Reviews absorption, adenosine signaling, adult elimination and population-specific safety concerns.
  limitation: A broad review; its typical kinetic values cannot predict an individual's response.
  funding: Not assessed; consult the original disclosure.
  pmid: "28603504"
  doi: 10.3389/fpsyt.2017.00080
- id: grzegorzewski2022
  title: "Pharmacokinetics of Caffeine: A Systematic Analysis of Reported Data"
  authors: Grzegorzewski et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35280254/
  kind: Systematic pharmacokinetic analysis
  insight: Integrates human kinetic data and examines smoking, contraceptives, medicines and disease as modifiers.
  limitation: The underlying studies use different populations and methods; the result is not a personal clearance calculator.
  funding: Not assessed; consult the original disclosure.
  pmid: "35280254"
  doi: 10.3389/fphar.2021.752826
- id: faber2004
  title: Time response of cytochrome P450 1A2 activity on cessation of heavy smoking
  authors: Faber & Fuhr
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15289794/
  kind: Human pharmacokinetic study
  insight: Caffeine clearance decreased after cessation in 12 heavy smokers.
  limitation: Small selected sample. The reported half-life of enzyme activity change must not be confused with caffeine elimination half-life.
  funding: Not assessed; consult the original disclosure.
  pmid: "15289794"
  doi: 10.1016/j.clpt.2004.04.003
- id: drake2013
  title: Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed
  authors: Drake et al.
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24235903/
  kind: Randomized controlled trial
  insight: The tested caffeine exposure disrupted sleep at each tested timing.
  limitation: A single fixed exposure and a small sample do not define a universal bedtime cutoff.
  funding: Not assessed; consult the original disclosure.
  pmid: "24235903"
  doi: 10.5664/jcsm.3170
- id: pubchem
  title: "Caffeine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/2519
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```

