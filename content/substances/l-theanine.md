---
slug: l-theanine
name: L-theanine
subtitle: A tea amino acid, beyond the stack.
aliases:
  - Theanine
  - γ-glutamylethylamide
formula: C7H14N2O3
molecularWeight: 174.20 g/mol
pubchemCid: 439378
smiles: CCNC(=O)CCC(C(=O)O)N
category: Amino acid derivative
tags:
  - amino-acid
  - attention
accent: "#9fbab0"
reviewedAt: 2026-09-29
halfLife:
  label: Not established
  low: null
  high: null
  context: Uptake was measured, but no elimination estimate has been curated for this article.
  sourceId: scheid2012
  observationId: l-theanine-elimination
kinetics:
  onset: Not established here
  peak: About 0.8 hours after 100 mg in the cited study
  duration: Not established here
  bioavailability: Systemic uptake observed from tea and capsules; absolute fraction not assigned
  metabolism: Human data suggest hydrolysis to ethylamine and glutamic acid
  sourceId: scheid2012
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
x-order: 1
---

## Summary

A tea-derived amino acid studied alone and alongside caffeine. Small attention studies offer useful signals, with important limits.

## Description

L-theanine is often discussed as a partner to caffeine. Evidence for a particular combination should stay attached to that combination, task and population. Human absorption has been studied, but a tidy claim that it reliably cancels caffeine's adverse effects goes beyond the sources included here.

## Evidence note

Selected small human studies are included. Combination findings do not establish theanine-alone benefit.

## Doses

```yaml
- label: Combination attention study
  amount: 100 mg
  route: Oral
  population: 27 healthy volunteers
  note: Studied with 50 mg caffeine. Research context, not a recommended stack.
  sourceId: owen2008
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: L-theanine
  formulation: Study treatment combined with caffeine; exact preparation not assessed
  frequency: Single exposure per crossover session
  duration: Acute assessment at 60 and 90 minutes
  purpose: Assess attention and mood with 50 mg caffeine versus placebo
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: l-theanine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: Uptake was measured, but no elimination estimate has been curated for this article.
  sourceId: scheid2012
  analyte: L-theanine
  route: Oral
  formulation: Capsules and green tea
  population: 12 healthy participants in the crossover study
  statistic: not-established
  value: null
  low: null
  high: null
  modelEligible: false
```

## Modifiers

```yaml
- label: Formulation
  effect: Comparable uptake in the tested preparations
  detail: Tea and capsules gave similar kinetic results in the cited small crossover study; this does not validate every commercial product.
  sourceId: scheid2012
  observationId: l-theanine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- name: Attention switching
  direction: Increased
  evidence: Human research
  description: Some task performance improved with the caffeine combination. The result does not isolate a standalone theanine benefit.
  sourceId: owen2008
  conceptId: attention
  population: 27 healthy adult volunteers
  exposure: 100 mg L-theanine with 50 mg caffeine; acute crossover comparison with placebo
  instrument: Attention-switching task at 60 minutes
  magnitude: null
```

## Mechanisms

```yaml
- title: Absorption is better established than a clinical mechanism
  description: The kinetic study detected theanine and its metabolites in people. It does not establish which molecule explains a cognitive effect.
  sourceId: scheid2012
  conceptId: amino-acid
```

## Cautions

```yaml
- title: Combination evidence has limits
  description: This small, acute study cannot establish long-term benefit or show that theanine removes caffeine-related sleep disruption.
  sourceId: owen2008
```

## Claims

```yaml
- id: attention-combination
  assertion: The studied caffeine–L-theanine combination improved selected attention task results.
  relation: co-studied
  participants:
    - entityId: substance:l-theanine
      role: co-exposure
    - entityId: substance:caffeine
      role: co-exposure
    - entityId: tag:attention
      role: measured-outcome
  context: 27 healthy volunteers; acute crossover comparison with placebo.
  sourceIds:
    - owen2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This does not isolate theanine-alone benefit.
- id: uptake
  assertion: Human uptake was comparable from the tested tea and capsule preparations.
  relation: absorption
  participants:
    - entityId: substance:l-theanine
      role: measured-compound
    - entityId: tag:amino-acid
      role: chemical-family
  context: Healthy volunteers in a small crossover study.
  sourceIds:
    - scheid2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Uptake does not establish a cognitive mechanism or equivalent exposure from every product.
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
- id: scheid2012
  title: Kinetics of L-theanine uptake and metabolism in healthy participants are comparable after ingestion via capsules and green tea
  authors: Scheid et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23096008/
  kind: Randomized crossover study
  insight: Measured uptake and metabolites after tea or capsule ingestion in 12 healthy participants.
  limitation: Small study focused on exposure, not clinical benefit or long-term safety.
  funding: Not assessed; consult the original disclosure.
  pmid: "23096008"
  doi: 10.3945/jn.112.166371
- id: pubchem
  title: "L-theanine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/439378
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```

