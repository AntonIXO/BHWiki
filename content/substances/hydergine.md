---
slug: hydergine
name: Hydergine
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Reddit index entry
tags:
- reddit-index
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: reddit-index-hydergine
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-hydergine
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
---

## Summary

Hydergine has 1 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Hydergine. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review: 1 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

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
  sourceId: reddit-pmid-536469
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
- id: reddit-hydergine-cognitive-performance-536469
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.'
  sourceId: reddit-pmid-536469
  population: 'The high dose of Hydergine used in this volunteer study was exceptionally well tolerated and did produce significant results on individual measures of central nervous system activity which might suggest the use of similar doses in patient populations.'
  exposure: 'Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.'
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
  description: 'Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.'
  sourceId: reddit-pmid-536469
```

## Claims

```yaml
- id: reddit-claim-hydergine-536469-0
  assertion: 'PMID 536469 reports: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.'
  relation: associated-with
  participants:
  - entityId: substance:hydergine
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-536469
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
- id: reddit-index-hydergine
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-536469
  title: The effects of an ergot alkaloid derivative (Hydergine) on aspects of psychomotor performance, arousal, and cognitive processing ability.
  authors: I Hindmarch, A C Parrott, M Lanza
  year: 1979
  url: https://pubmed.ncbi.nlm.nih.gov/536469/
  kind: PubMed publication
  insight: Hydergine, 12 mg per day for two weeks, has some direct activity on a variety of tasks of mental and cognitive performance. These results add support to biochemical findings that implicate the ergot alkaloids (particularly co-dergo-crine, Hydergine) in cellular activity likely to increase cortical arousal and awareness.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '536469'
  doi: 10.1002/j.1552-4604.1979.tb01643.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
