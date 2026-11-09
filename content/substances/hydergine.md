---
slug: hydergine
name: Hydergine
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-536469
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-536469
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

Hydergine is a mixture of ergot-derived compounds studied for cognitive function.

## Description

Hydergine is a mixture of ergot-derived compounds studied for cognitive function.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: PubMed study exposure (536469)
  amount: 12 mg
  quantity: 12
  quantityMax: null
  unit: mg
  ingredient: Hydergine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: The high dose of Hydergine used in this volunteer study was exceptionally well tolerated and did produce significant results on individual measures of central nervous system activity which might suggest the use of similar doses in patient populations.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: pubmed-536469
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
- id: research-hydergine-cognitive-performance-536469
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.
  sourceId: pubmed-536469
  population: The high dose of Hydergine used in this volunteer study was exceptionally well tolerated and did produce significant results on individual measures of central nervous system activity which might suggest the use of similar doses in patient populations.
  exposure: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Source-specific finding from PMID 536469
  description: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.
  sourceId: pubmed-536469
```

## Claims

```yaml
- id: research-claim-hydergine-536469-0
  assertion: "PMID 536469 reports: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness."
  relation: associated-with
  participants:
    - entityId: substance:hydergine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-536469
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
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
- id: pubmed-536469
  title: The effects of an ergot alkaloid derivative (Hydergine) on aspects of psychomotor performance, arousal, and cognitive processing ability.
  authors: I Hindmarch, A C Parrott, M Lanza
  year: 1979
  url: https://pubmed.ncbi.nlm.nih.gov/536469/
  kind: PubMed publication
  insight: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "536469"
  doi: 10.1002/j.1552-4604.1979.tb01643.x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
