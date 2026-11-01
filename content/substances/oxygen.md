---
slug: oxygen
name: Oxygen
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
  sourceId: reddit-index-oxygen
  observationId: oxygen-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-oxygen
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

In a preliminary placebo-controlled study of 20 healthy young adults, one hyperbaric oxygen exposure increased spatial working-memory and memory-quotient scores and altered resting-state regional homogeneity in hippocampal, frontal, and lingual regions. The abstract does not report a clinical dose or durability. [reddit-pmid-25703942]

## Description

This page imports the Reddit index source trail for Oxygen. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed abstract retrieved for PMID 25703942; no PMC full text was available. The study was small and preliminary, used hyperbaric oxygen rather than ordinary ambient oxygen, and does not establish general cognitive enhancement or a safe protocol.

## Doses

```yaml
- label: Hyperbaric oxygen cognitive study
  amount: null
  quantity: null
  quantityMax: null
  unit: null
  ingredient: Hyperbaric oxygen
  formulation: HBO exposure
  route: inhaled under hyperbaric conditions
  frequency: Single administration (abstract does not specify schedule)
  duration: Not reported in abstract
  population: 20 healthy young adults
  purpose: Research exposure; not a treatment recommendation.
  note: Pressure and oxygen concentration were not stated in the PubMed abstract.
  sourceId: reddit-pmid-25703942
```

## Pharmacokinetics

```yaml
- id: oxygen-reddit-pk-unestablished
  analyte: Oxygen
  route: inhaled under hyperbaric conditions
  formulation: Hyperbaric oxygen
  population: Healthy young adults
  endpoint: elimination-half-life
  statistic: not-applicable
  value: null
  low: null
  high: null
  unit: hours
  context: Oxygen exposure is not represented by a conventional drug elimination parameter in this study; no concentration-time data were reported.
  sourceId: reddit-pmid-25703942
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
- id: reddit-oxygen-episodic-memory-25703942
  conceptId: episodic-memory
  name: Memory
  direction: Increased
  evidence: Human research
  description: Memory-quotient and spatial working-memory scores increased after hyperbaric oxygen compared with placebo.
  sourceId: reddit-pmid-25703942
  population: 20 healthy young adults
  exposure: Hyperbaric oxygen
  instrument: Spatial working-memory task; memory quotient
  magnitude: Exact effect size not reported in abstract.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Regional brain-activity changes
  description: Hyperbaric oxygen increased resting-state regional homogeneity in left hippocampus, right inferior frontal, and lingual gyri; changes correlated with cognitive performance.
  sourceId: reddit-pmid-25703942
```

## Cautions

```yaml
- title: Preliminary small study
  description: The study included 20 healthy young adults and reports no durability or clinical-population evidence.
  sourceId: reddit-pmid-25703942
- title: Hyperbaric exposure is product-specific
  description: Findings concern hyperbaric oxygen and cannot be generalized to ordinary supplemental oxygen or ambient-air exposure.
  sourceId: reddit-pmid-25703942
```

## Claims

```yaml
- id: reddit-claim-oxygen-25703942-0
  assertion: A preliminary study found higher spatial working-memory and memory-quotient scores after hyperbaric oxygen in 20 healthy young adults.
  relation: associated-with
  participants:
  - entityId: substance:oxygen
    role: intervention
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Placebo-controlled rsfMRI study; protocol pressure and duration not stated in abstract.
  sourceIds:
  - reddit-pmid-25703942
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small preliminary study; no general oxygen or long-term claim.
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
- id: reddit-index-oxygen
  title: Reddit Nootropics index entry
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-25703942
  title: 'Cognitive enhancement of healthy young adults with hyperbaric oxygen: A preliminary resting-state fMRI study.'
  authors: Ronghao Yu, Bin Wang, Shumei Li, Junjing Wang, Feng Zhou, Shufang Chu, Xianyou He, Xue Wen, Xiaoxiao Ni, Liqing Liu, Qiuyou Xie, Ruiwang Huang
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25703942/
  kind: PubMed publication
  insight: 'OBJECTIVE: To date, no study has examined the effect of hyperbaric oxygen (HBO) on the cognitive performance and spontaneous brain activity in healthy adults using resting-state functional magnetic resonance imaging (rsfMRI).'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '25703942'
  doi: 10.1016/j.clinph.2015.01.010
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
