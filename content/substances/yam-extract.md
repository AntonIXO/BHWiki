---
slug: yam-extract
name: Yam Extract
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
  sourceId: reddit-index-yam-extract
  observationId: yam-extract-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-yam-extract
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

Yam Extract has 1 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 1 retrieved PubMed records out of 1 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 1 PubMed records linked from this Reddit index entry; 1 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

PMC full-text retrieval for this page returned body text for 1/1 identified PMCID records; 0 returned no retrievable body or a tool error.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: yam-extract-pk-unestablished
  analyte: Yam Extract
  route: Not assessed
  formulation: No source-specific PK endpoint in linked abstracts
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Linked PubMed abstracts did not establish a validated elimination half-life.
  sourceId: reddit-index-yam-extract
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
- id: reddit-yam-extract-memory-29064406
  conceptId: memory
  name: Memory
  direction: Increased
  evidence: Human research
  description: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  sourceId: reddit-pmid-29064406
  population: '28 healthy volunteers (age: 20-81 years) were recruited from Toyama Prefecture, Japan, and was randomly assigned to receive either a yam extract or placebo'
  exposure: It was also found to enhance neuronal excitation and memory function even in normal mice.
  instrument: null
  magnitude: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgen
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 29064406)
  description: The Japanese version of the Repeatable Battery for the Assessment of Neuropsychological Status (RBANS) test was used for neurocognitive assessment, and the adverse effects were monitored through blood testing.
  sourceId: reddit-pmid-29064406
```

## Claims

```yaml
- id: reddit-claim-yam-extract-29064406
  assertion: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  relation: associated-with
  participants:
  - entityId: substance:yam-extract
    role: intervention or exposure
  - entityId: tag:memory
    role: reported endpoint
  context: PMID 29064406 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-29064406
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
- id: reddit-index-yam-extract
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-29064406
  title: 'Diosgenin-Rich Yam Extract Enhances Cognitive Function: A Placebo-Controlled, Randomized, Double-Blind, Crossover Study of Healthy Adults.'
  authors: Chihiro Tohda, Ximeng Yang, Mie Matsui, Yuna Inada, Emika Kadomoto, Shotaro Nakada, Hidetoshi Watari, Naotoshi Shibahara
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29064406/
  kind: PubMed publication
  insight: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC5691776 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC5691776/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: '29064406'
  doi: 10.3390/nu9101160
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
