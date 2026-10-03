---
slug: creatine
name: Creatine
subtitle: An energy reserve, studied over time.
aliases:
  - Creatine monohydrate (supplement form)
formula: C4H9N3O2
molecularWeight: 131.13 g/mol
pubchemCid: 586
smiles: CN(CC(=O)O)C(=N)N
category: Amino acid derivative
tags:
  - amino-acid
  - energy-buffer
  - exercise
  - muscle-stores
accent: "#c3b093"
reviewedAt: 2026-09-29
halfLife:
  label: Tissue stores matter
  low: null
  high: null
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  observationId: creatine-elimination
kinetics:
  onset: Tissue accumulation with repeated intake
  peak: Not summarized as a single acute peak
  duration: Muscle stores change gradually after supplementation stops
  bioavailability: No absolute estimate curated here
  metabolism: The creatine–phosphocreatine system supports energy buffering; creatinine is a breakdown product
  sourceId: hultman1996
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
x-order: 2
---

## Summary

An endogenous compound used in muscle energy metabolism. Supplementation research is strongest around muscle stores and exercise.

## Description

Creatine is better understood through tissue stores and repeated supplementation than through an immediate subjective effect. Research on training outcomes and research on cognition ask different questions and should not share a single benefit score.

## Evidence note

Evidence here concerns muscle stores and exercise. Proposed cognitive and clinical applications need separate assessment.

## Doses

```yaml
- label: Gradual muscle-loading study
  amount: 3 g daily for 28 days
  route: Oral
  population: Male participants in a muscle-biopsy study
  note: This exposure increased muscle creatine stores. The compound diagram shows creatine, not the monohydrate formulation.
  sourceId: hultman1996
  quantity: 3
  quantityMax: null
  unit: g
  ingredient: Creatine
  formulation: Supplement preparation; hydrate form not assessed from the abstract
  frequency: Daily total; divided schedule not assessed
  duration: 28 days
  purpose: Measure change in muscle creatine concentration
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: creatine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  analyte: Creatine
  route: Oral
  formulation: Creatine supplementation; tissue stores are the reported endpoint
  population: Men in the cited muscle-loading study
  statistic: not-established
  value: null
  low: null
  high: null
  modelEligible: false
```

## Modifiers

```yaml
- label: Starting muscle stores
  effect: Response is not uniform
  detail: Baseline stores and supplementation history are part of the interpretation of muscle-loading studies.
  sourceId: hultman1996
  observationId: creatine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- name: Muscle creatine stores
  direction: Increased
  evidence: Human research
  description: Measured muscle stores rose with repeated intake in the cited study; this is a biochemical outcome rather than a subjective sensation.
  sourceId: hultman1996
  conceptId: muscle-stores
  population: Men in a study that enrolled 31 participants across supplementation protocols
  exposure: 3 g daily over 28 days
  instrument: Muscle total creatine concentration
  magnitude: null
- name: High-intensity exercise performance
  direction: Increased
  evidence: Human research
  description: The position stand summarizes benefits in studied exercise settings; effects depend on the task and training context.
  sourceId: kreider2017
  conceptId: exercise
  population: Exercise and training populations represented in the position stand
  exposure: Varied creatine supplementation protocols
  instrument: Multiple performance tests; no shared scale
  magnitude: null
```

## Mechanisms

```yaml
- title: Energy buffering
  description: Creatine availability supports the phosphocreatine system, which helps regenerate ATP during demanding activity.
  sourceId: kreider2017
  conceptId: energy-buffer
```

## Cautions

```yaml
- title: Evidence is specific to the outcome
  description: Exercise evidence should not be treated as proof of a broad cognitive or anti-aging effect. Clinical populations require separate evidence.
  sourceId: kreider2017
```

## Claims

```yaml
- id: muscle-stores
  assertion: Repeated supplementation raised muscle total creatine concentration.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:muscle-stores
      role: measured-outcome
  context: Men receiving the studied supplementation protocols.
  sourceIds:
    - hultman1996
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Muscle concentration is not itself a subjective or cognitive outcome.
- id: energy-buffer
  assertion: Creatine participates in phosphocreatine energy buffering.
  relation: metabolic-pathway
  participants:
    - entityId: substance:creatine
      role: substrate
    - entityId: tag:energy-buffer
      role: mechanism
    - entityId: tag:exercise
      role: related-outcome
  context: Exercise physiology reviewed in a professional-society position stand.
  sourceIds:
    - kreider2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Individual exercise outcomes depend on task and training context.
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
- id: hultman1996
  title: Muscle creatine loading in men
  authors: Hultman et al.
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8828669/
  kind: Human supplementation study
  insight: Compared muscle accumulation with different supplementation patterns in 31 men.
  limitation: Male-only sample; muscle concentration is not itself an exercise or cognitive outcome.
  funding: Not assessed; consult the original disclosure.
  pmid: "8828669"
  doi: 10.1152/jappl.1996.81.1.232
- id: kreider2017
  title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine"
  authors: Kreider et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28615996/
  kind: Position stand / review
  insight: Summarizes muscle energy metabolism and exercise supplementation research.
  limitation: A professional-society position stand, not an independent trial; proposed clinical uses vary in evidence strength.
  funding: Not assessed; consult the original disclosure.
  pmid: "28615996"
  doi: 10.1186/s12970-017-0173-z
- id: pubchem
  title: "Creatine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/586
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```

