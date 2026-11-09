---
slug: vardenafil
name: Vardenafil
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - cognitive-performance
  - pde5
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-23427190
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-23427190
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
  - externalWikiLinks
  - references
  - legal
x-order: 9007199254740991
---

## Summary

Vardenafil inhibits phosphodiesterase-5, increasing cGMP signalling. The linked research explores effects on memory and brain function.

## Description

Vardenafil inhibits phosphodiesterase-5, increasing cGMP signalling. The linked research explores effects on memory and brain function.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 23427190 study exposure: 20 mg"
  amount: 20 mg
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Vardenafil
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: Participants were selected out of a group of volunteers, based on their performance on a memory screening and they were orally treated with vardenafil (10-20 mg or placebo).
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: Participants were selected out of a group of volunteers, based on their performance on a memory screening and they were orally treated with vardenafil (10-20 mg or placebo)
  sourceId: pubmed-23427190
- label: "PMID 23427190 study exposure: 10 mg"
  amount: 10 mg
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Vardenafil
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: Participants were selected out of a group of volunteers, based on their performance on a memory screening and they were orally treated with vardenafil (10-20 mg or placebo).
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: Furthermore, the N400 was larger after vardenafil 10 mg than placebo treatment in a spatial memory task at Fz
  sourceId: pubmed-23427190
```

## Pharmacokinetics

```yaml
[]
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: research-vardenafil-cognitive-performance-23427190
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  sourceId: pubmed-23427190
  population: Participants were selected out of a group of volunteers, based on their performance on a memory screening and they were orally treated with vardenafil (10-20 mg or placebo).
  exposure: Participants were selected out of a group of volunteers, based on their performance on a memory screening and they were orally treated with vardenafil (10-20 mg or placebo).
  instrument: EEG) in healthy young adults
  magnitude: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and execu
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-vardenafil-23427190
  assertion: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  relation: associated-with
  participants:
    - entityId: substance:vardenafil
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: PMID 23427190 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-23427190
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
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
- id: pubmed-23427190
  title: "The effects of the phosphodiesterase type 5 inhibitor vardenafil on cognitive performance in healthy adults: a behavioral-electroencephalography study."
  authors: O A H Reneerkens, A Sambeth, J G Ramaekers, H W M Steinbusch, A Blokland, J Prickaerts
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23427190/
  kind: PubMed publication
  insight: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "23427190"
  doi: 10.1177/0269881113477747
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
