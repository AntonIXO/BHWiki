---
slug: roflumilast
name: Roflumilast
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
  sourceId: reddit-index-roflumilast
  observationId: roflumilast-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-roflumilast
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

Roflumilast evidence is source-specific and endpoint-limited. Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating. Phosphodiesterase inhibitors (PDE-Is) have proven efficacy as cognitive enhancers based on their positive effects in numerous preclinical studies.
## Description

This page links PubMed evidence for roflumilast. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 29098341, 29241652.
## Evidence note

Corpus import reviewed 2 PubMed abstracts and retained 2 linked source records. Full-text methods, funding, conflicts, and legal context were not comprehensively reviewed.

Reviewed PubMed abstracts for PMID(s) 29098341, 29241652. Rights-eligible PMC full text reviewed: PMC5748397.

## Doses

```yaml
- label: PubMed study exposure (29098341)
  amount: 1000 μg
  quantity: 1000
  quantityMax: null
  unit: μg
  ingredient: Roflumilast
  formulation: Formulation as described in PMID 29098341
  route: oral or as stated in abstract
  frequency: Study schedule not stated in abstract
  duration: Not stated in abstract
  population: The current study investigated the effects of the PDE4 inhibitor roflumilast in a sensory gating paradigm in 20 healthy young human volunteers (age range 18-30 years).
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 29098341 abstract; formulation and population are source-specific to this study.
  sourceId: reddit-pmid-29098341
- label: PubMed study exposure (29241652)
  amount: 100 μg
  quantity: 100
  quantityMax: null
  unit: μg
  ingredient: Roflumilast
  formulation: Formulation as described in PMID 29241652
  route: oral capsule
  frequency: single dose
  duration: Acute single dose; testing 1 hour after administration
  population: Healthy young adults in a randomized, placebo-controlled 4-way crossover study
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 29241652 abstract; formulation and population are source-specific to this study.
  sourceId: reddit-pmid-29241652
```

## Pharmacokinetics

```yaml
- id: roflumilast-reddit-pk-unestablished
  analyte: Roflumilast
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This corpus import does not establish a pharmacokinetic observation.
  sourceId: reddit-index-roflumilast
  modelEligible: false
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
- id: reddit-roflumilast-attention-29098341
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.
  sourceId: reddit-pmid-29098341
  population: The current study investigated the effects of the PDE4 inhibitor roflumilast in a sensory gating paradigm in 20 healthy young human volunteers (age range 18-30 years).
  exposure: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-roflumilast-cognitive-performance-29098341
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.
  sourceId: reddit-pmid-29098341
  population: The current study investigated the effects of the PDE4 inhibitor roflumilast in a sensory gating paradigm in 20 healthy young human volunteers (age range 18-30 years).
  exposure: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-roflumilast-cognitive-performance-29241652
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Preclinical or in-vitro research
  description: Phosphodiesterase inhibitors (PDE-Is) have proven efficacy as cognitive enhancers based on their positive effects in numerous preclinical studies.
  sourceId: reddit-pmid-29241652
  population: Population not stated in the PubMed record.
  exposure: This acute study was conducted according to a double-blind, randomized, placebo-controlled, 4-way crossover design.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-roflumilast-episodic-memory-29241652
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Preclinical or in-vitro research
  description: Phosphodiesterase inhibitors (PDE-Is) have proven efficacy as cognitive enhancers based on their positive effects in numerous preclinical studies.
  sourceId: reddit-pmid-29241652
  population: Population not stated in the PubMed record.
  exposure: This acute study was conducted according to a double-blind, randomized, placebo-controlled, 4-way crossover design.
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
- title: Source-specific finding from PMID 29098341
  description: This means roflumilast shows a beneficial effect on gating at a dose that had no adverse effects reported following single-dose administration in the present study.
  sourceId: reddit-pmid-29098341
- title: Source-specific finding from PMID 29241652
  description: No side effects typical for PDE4-Is were reported for the lowest and effective dose of 100 μg roflumilast.
  sourceId: reddit-pmid-29241652
```

## Claims

```yaml
- id: reddit-claim-roflumilast-29098341-0
  assertion: 'PMID 29098341 reported: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.'
  relation: associated-with
  participants:
  - entityId: substance:roflumilast
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Source-specific result from PMID 29098341; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-29098341
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 29098341; this single study does not establish general efficacy or safety.
- id: reddit-claim-roflumilast-29241652-1
  assertion: 'PMID 29241652 reported: Phosphodiesterase inhibitors (PDE-Is) have proven efficacy as cognitive enhancers based on their positive effects in numerous preclinical studies.'
  relation: associated-with
  participants:
  - entityId: substance:roflumilast
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Source-specific result from PMID 29241652; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-29241652
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 29241652; this single study does not establish general efficacy or safety.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Roflumilast
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-roflumilast
  title: Reddit Nootropics index entry
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-29098341
  title: Acute administration of roflumilast enhances sensory gating in healthy young humans in a randomized trial.
  authors: Pim R A Heckman, Marlies A Van Duinen, Arjan Blokland, Tolga Uz, Jos Prickaerts, Anke Sambeth
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29098341/
  kind: PubMed publication
  insight: Phosphodiesterase (PDE) inhibitors have received an increased interest as a tool to improve cognitive performance in both animals and man, including sensory gating.
  limitation: PubMed abstract and rights-eligible PMC full text (PMC5748397) were reviewed; applicability remains limited to the reported design and population.
  pmid: '29098341'
  doi: 10.1007/s00213-017-4770-y
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC5748397
- id: reddit-pmid-29241652
  title: Acute administration of roflumilast enhances immediate recall of verbal word memory in healthy young adults.
  authors: M A Van Duinen, A Sambeth, P R A Heckman, S Smit, M Tsai, G Lahu, T Uz, A Blokland, J Prickaerts
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29241652/
  kind: PubMed publication
  insight: Phosphodiesterase inhibitors (PDE-Is) have proven efficacy as cognitive enhancers based on their positive effects in numerous preclinical studies.
  limitation: PubMed abstract for PMID 29241652 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '29241652'
  doi: 10.1016/j.neuropharm.2017.12.019
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
