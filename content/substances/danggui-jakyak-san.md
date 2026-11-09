---
slug: danggui-jakyak-san
name: Danggui-Jakyak-San
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - ltp-state
  - spatial-memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-26453932
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-26453932
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

Danggui-Jakyak-San is a traditional multi-herb preparation. The linked research explores learning and memory.

## Description

In acute mouse hippocampal slices, DJS enhanced Schaffer-collateral LTP in a concentration-dependent manner; ERK1/2 and CREB were activated and BDNF increased. Blocking ERK1/2 blocked the DJS-induced cascade and LTP enhancement. In vivo, DJS improved spatial long-term memory and upregulated hippocampal CREB/BDNF (PMID 26453932).

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
- id: danggui-jakyak-san-ltp-26453932
  conceptId: ltp-state
  name: Hippocampal long-term potentiation
  direction: Increased
  evidence: Limited research
  description: DJS enhanced Schaffer-collateral LTP in acute mouse hippocampal slices in a concentration-dependent manner.
  sourceId: pubmed-26453932
  population: Acute mouse hippocampal slices
  exposure: DJS; concentration not reported in abstract
  instrument: Electrophysiological LTP recording
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: danggui-jakyak-san-spatial-memory-26453932
  conceptId: spatial-memory
  name: Spatial long-term memory
  direction: Increased
  evidence: Limited research
  description: DJS improved spatial long-term memory in mice in the Morris water maze and increased hippocampal CREB/BDNF.
  sourceId: pubmed-26453932
  population: Mice
  exposure: DJS; dose not reported in abstract
  instrument: Morris water maze
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: ERK/CREB/BDNF cascade
  description: DJS activated ERK1/2 and CREB and increased BDNF; pharmacologic ERK1/2 blockade prevented the cascade and LTP enhancement in mouse slices.
  sourceId: pubmed-26453932
```

## Cautions

```yaml
- title: Preclinical-only evidence
  description: The linked study used mouse slices and mice; no human efficacy, safety, dose or pharmacokinetic conclusion follows.
  sourceId: pubmed-26453932
- title: Multi-herb formulation uncertainty
  description: The PubMed abstract does not specify a standardized extract composition or human-equivalent dose.
  sourceId: pubmed-26453932
```

## Claims

```yaml
- id: danggui-jakyak-san-claim-preclinical-memory
  assertion: Danggui-Jakyak-San improved mouse spatial memory and hippocampal LTP in a preclinical study.
  relation: preclinical-effect
  participants:
    - entityId: substance:danggui-jakyak-san
      role: intervention
    - entityId: tag:spatial-memory
      role: outcome
  context: Mouse hippocampal slices and Morris water maze.
  sourceIds:
    - pubmed-26453932
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No human dose or clinical endpoint.
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
- id: pubmed-26453932
  title: Danggui-Jakyak-San enhances hippocampal long-term potentiation through the ERK/CREB/BDNF cascade.
  authors: Jee Hyun Yi; Hye Jin Park; Soo Ji Beak; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26453932/
  kind: PubMed publication
  insight: DJS enhanced mouse hippocampal LTP and spatial memory with ERK/CREB/BDNF activation.
  limitation: Mouse/in-vitro study; no human dose, PK or clinical evidence; full text not retrieved in this pass.
  pmid: "26453932"
  doi: 10.1016/j.jep.2015.10.012
```

## Legal

```yaml
[]
```
