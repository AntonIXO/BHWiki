---
slug: vardenafil
name: Vardenafil
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
  sourceId: reddit-index-vardenafil
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-vardenafil
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

Vardenafil has 1 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 1 retrieved PubMed records out of 1 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 1 PubMed records linked from this Reddit index entry; 0 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

## Doses

```yaml
- label: 'PMID 23427190 study exposure: 20 mg'
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
  sourceId: reddit-pmid-23427190
- label: 'PMID 23427190 study exposure: 10 mg'
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
  sourceId: reddit-pmid-23427190
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
- id: reddit-vardenafil-cognitive-performance-23427190
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  sourceId: reddit-pmid-23427190
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
- id: reddit-claim-vardenafil-23427190
  assertion: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  relation: associated-with
  participants:
  - entityId: substance:vardenafil
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: PMID 23427190 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23427190
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
- id: reddit-index-vardenafil
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-23427190
  title: 'The effects of the phosphodiesterase type 5 inhibitor vardenafil on cognitive performance in healthy adults: a behavioral-electroencephalography study.'
  authors: O A H Reneerkens, A Sambeth, J G Ramaekers, H W M Steinbusch, A Blokland, J Prickaerts
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23427190/
  kind: PubMed publication
  insight: Phosphodiesterase type 5 inhibitors (PDE5-Is) improve cognitive performance of rodents, but the few human studies investigating their effects did not systematically investigate cognitive effects and the results have been quite contradictory. Therefore, we examined whether the PDE5-I vardenafil improves memory and executive functioning and affect electroencephalography (EEG) in healthy young adults. Vardenafil did not affect cognitive performance of healthy adults and showed only some incidental effects on ERPs.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '23427190'
  doi: 10.1177/0269881113477747
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
