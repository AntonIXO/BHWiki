---
slug: yam-extract
name: Yam Extract
subtitle: Yam extracts contain plant compounds studied in research on brain function and cognition..
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-29064406
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-29064406
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

Yam extracts contain plant compounds studied in research on brain function and cognition.

## Description

Yam extracts contain plant compounds studied in research on brain function and cognition.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
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
- id: research-yam-extract-memory-29064406
  conceptId: memory
  name: Memory
  direction: Increased
  evidence: Human research
  description: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  sourceId: pubmed-29064406
  population: "28 healthy volunteers (age: 20-81 years) were recruited from Toyama Prefecture, Japan, and was randomly assigned to receive either a yam extract or placebo"
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
  sourceId: pubmed-29064406
```

## Claims

```yaml
- id: research-claim-yam-extract-29064406
  assertion: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  relation: associated-with
  participants:
    - entityId: substance:yam-extract
      role: intervention or exposure
    - entityId: tag:memory
      role: reported endpoint
  context: PMID 29064406 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-29064406
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
- id: pubmed-29064406
  title: "Diosgenin-Rich Yam Extract Enhances Cognitive Function: A Placebo-Controlled, Randomized, Double-Blind, Crossover Study of Healthy Adults."
  authors: Chihiro Tohda, Ximeng Yang, Mie Matsui, Yuna Inada, Emika Kadomoto, Shotaro Nakada, Hidetoshi Watari, Naotoshi Shibahara
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29064406/
  kind: PubMed publication
  insight: Diosgenin, a yam-derived compound, was found to facilitate the repair of axonal atrophy and synaptic degeneration and improve memory dysfunction in a transgenic mouse model of Alzheimer's disease (AD). It was also found to enhance neuronal excitation and memory function even in normal mice. We hypothesized that diosgenin, either isolated or in an extract, may represent a new category of cognitive enhancers with essential activities that morphologically and functionally reinforce neuronal networks.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC5691776 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC5691776/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: "29064406"
  doi: 10.3390/nu9101160
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
