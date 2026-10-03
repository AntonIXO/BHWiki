---
slug: melatonin
name: Melatonin
subtitle: A timing signal, not a universal sleep switch.
aliases:
  - N-acetyl-5-methoxytryptamine
formula: C13H16N2O2
molecularWeight: 232.28 g/mol
pubchemCid: 896
smiles: CC(=O)NCCC1=CNC2=C1C=C(C=C2)OC
category: Hormone
tags:
  - hormone
  - circadian
  - sleep
  - daytime-sleepiness
  - behavioral-scheduling
accent: "#b1abcf"
reviewedAt: 2026-09-29
halfLife:
  label: About 45 minutes
  low: 0.75
  high: 0.75
  context: Approximate summary estimate in a human pharmacokinetic review, not a universal range. Release formulation and population matter.
  sourceId: harpsoe2015
  observationId: melatonin-elimination
kinetics:
  onset: Depends on formulation and circadian timing
  peak: Around 50 minutes for oral immediate-release products in the review
  duration: Plasma exposure and circadian effects are different outcomes
  bioavailability: About 15% orally in the review; substantial between-study variability
  metabolism: Exposure is modified by medicines, smoking, feeding status and physiological factors
  sourceId: harpsoe2015
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
x-order: 3
---

## Summary

A hormone involved in circadian timing. Formulation, timing and the sleep problem being studied all matter.

## Description

The body produces melatonin in response to darkness. Supplemental melatonin has been studied for specific sleep and circadian problems. Results from delayed sleep-wake phase disorder should not be generalized to all insomnia.

## Evidence note

Evidence differs by sleep condition, formulation, timing and population. No overall benefit rating is assigned.

## Doses

```yaml
- label: Delayed sleep-wake phase trial
  amount: 0.5 mg
  route: Oral
  population: People with diagnosed delayed sleep-wake phase disorder and delayed melatonin timing
  note: Given 1 hour before desired bedtime, with behavioral scheduling, over 4 weeks. A specific trial protocol, not general insomnia guidance.
  sourceId: sletten2018
  quantity: 0.5
  quantityMax: null
  unit: mg
  ingredient: Melatonin
  formulation: Fast-release oral formulation
  frequency: At least 5 consecutive nights per week, 1 hour before desired bedtime
  duration: 4 weeks, alongside behavioral sleep–wake scheduling
  purpose: Assess sleep initiation in delayed sleep–wake phase disorder
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: melatonin-elimination
  endpoint: elimination-half-life
  unit: hours
  context: Approximate summary estimate in a human pharmacokinetic review, not a universal range. Release formulation and population matter.
  sourceId: harpsoe2015
  analyte: Melatonin
  route: Oral
  formulation: Immediate-release products in a heterogeneous review
  population: Human participants across reviewed studies
  statistic: approximate
  value: 0.75
  low: null
  high: null
  modelEligible: true
```

## Modifiers

```yaml
- label: Release formulation
  effect: Changes the exposure profile
  detail: The immediate-release kinetic summary should not be applied directly to prolonged-release products.
  sourceId: harpsoe2015
  observationId: melatonin-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
- name: Daytime sleepiness
  direction: Variable
  evidence: Human research
  description: Daytime sleepiness was among reported adverse events; its rate was similar between trial groups.
  sourceId: sletten2018
  conceptId: daytime-sleepiness
  population: Patients with delayed sleep–wake phase disorder in the randomized trial
  exposure: Melatonin or placebo alongside behavioral scheduling
  instrument: Adverse-event reporting
  magnitude: null
```

## Outcomes

```yaml
- name: Sleep onset time
  direction: Decreased
  evidence: Human research
  description: Sleep began earlier with melatonin plus scheduling in the selected circadian-disorder population.
  sourceId: sletten2018
  conceptId: sleep
  population: 116 randomized patients with delayed sleep–wake phase disorder and delayed endogenous melatonin timing
  exposure: 0.5 mg fast-release melatonin plus scheduling for 4 weeks versus placebo plus scheduling
  instrument: Actigraphic sleep onset time
  magnitude: null
```

## Mechanisms

```yaml
- title: A signal linked to darkness
  description: Endogenous melatonin participates in circadian timing. Light exposure and timing belong in the interpretation of sleep outcomes.
  sourceId: nccih-melatonin
  conceptId: circadian
```

## Cautions

```yaml
- title: Long-term uncertainty
  description: The cited trial did not establish long-term benefit or safety, nor benefit in people without the studied circadian delay.
  sourceId: sletten2018
- title: Products and populations differ
  description: Supplement contents can differ from labels. Evidence and safety considerations are different in children and pregnancy.
  sourceId: nccih-melatonin
```

## Claims

```yaml
- id: sleep-initiation
  assertion: Melatonin with scheduling advanced sleep initiation in the studied circadian-disorder population.
  relation: measured-outcome
  participants:
    - entityId: substance:melatonin
      role: exposure
    - entityId: tag:sleep
      role: measured-outcome
    - entityId: tag:behavioral-scheduling
      role: co-intervention
  context: Selected delayed sleep–wake phase disorder patients receiving fast-release melatonin with scheduling.
  sourceIds:
    - sletten2018
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The protocol does not establish efficacy for all insomnia or long-term treatment.
- id: circadian-signal
  assertion: Endogenous melatonin participates in circadian timing.
  relation: hormone-signaling
  participants:
    - entityId: substance:melatonin
      role: signal
    - entityId: tag:circadian
      role: mechanism
    - entityId: tag:hormone
      role: functional-class
  context: Physiology summarized by NIH.
  sourceIds:
    - nccih-melatonin
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Supplement effects depend on timing, condition and formulation.
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
- id: harpsoe2015
  title: "Clinical pharmacokinetics of melatonin: a systematic review"
  authors: Harpsøe et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26008214/
  kind: Systematic review
  insight: Summarizes exposure and large differences between formulations and study conditions.
  limitation: Heterogeneous studies; an approximate central value is not a personal prediction.
  funding: Not assessed; consult the original disclosure.
  pmid: "26008214"
  doi: 10.1007/s00228-015-1873-4
- id: sletten2018
  title: Efficacy of melatonin with behavioural sleep-wake scheduling for delayed sleep-wake phase disorder
  authors: Sletten et al.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29912983/
  kind: Randomized controlled trial
  insight: Melatonin with scheduling improved sleep initiation in a selected circadian-disorder population.
  limitation: Scheduling was part of treatment; long-term outcomes and broader insomnia populations were not established.
  funding: Not assessed; consult the original disclosure.
  pmid: "29912983"
  doi: 10.1371/journal.pmed.1002587
- id: nccih-melatonin
  title: "Melatonin: What You Need To Know"
  authors: NCCIH / NIH
  year: 2026
  url: https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know
  kind: Public health reference
  insight: Explains circadian signaling, differences between sleep conditions and supplement quality concerns.
  limitation: Public information, not individual clinical advice; year indicates access.
  funding: Not assessed; consult the original disclosure.
- id: pubchem
  title: "Melatonin: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/896
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```

