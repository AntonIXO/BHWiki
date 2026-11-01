---
slug: danggui-jakyak-san
name: Danggui-Jakyak-San
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
  sourceId: reddit-index-danggui-jakyak-san
  observationId: danggui-jakyak-san-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-danggui-jakyak-san
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

Danggui-Jakyak-San (DJS) is a traditional multi-herb prescription. The linked publication is a mouse hippocampal-slice and Morris-water-maze study reporting enhanced LTP and spatial memory through ERK/CREB/BDNF signaling. No human dose, pharmacokinetic or clinical efficacy evidence is established by this index entry.

## Description

In acute mouse hippocampal slices, DJS enhanced Schaffer-collateral LTP in a concentration-dependent manner; ERK1/2 and CREB were activated and BDNF increased. Blocking ERK1/2 blocked the DJS-induced cascade and LTP enhancement. In vivo, DJS improved spatial long-term memory and upregulated hippocampal CREB/BDNF (PMID 26453932).

## Evidence note

Reviewed the single linked PubMed abstract. No PMC full text was available through the connector in this pass, and the abstract does not report a human dose or a quantitative DJS concentration. Findings are mouse/in-vitro preclinical evidence.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: danggui-jakyak-san-reddit-pk-unestablished
  analyte: Danggui-Jakyak-San
  route: Not established
  formulation: Herbal prescription
  population: No human PK population in linked record
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The linked mouse LTP/memory abstract provides no pharmacokinetic estimate.
  sourceId: reddit-index-danggui-jakyak-san
  modelEligible: false
```

## Modifiers

```yaml
- label: ERK1/2 blockade
  effect: Blocked DJS-induced ERK1/2/CREB/BDNF activation and LTP enhancement
  detail: PD198306 was used as a pathway probe in mouse hippocampal slices; this is not a clinical interaction.
  sourceId: reddit-pmid-26453932
  observationId: danggui-jakyak-san-reddit-pk-unestablished
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: danggui-jakyak-san-ltp-26453932
  conceptId: ltp-state
  name: Hippocampal long-term potentiation
  direction: Increased
  evidence: Limited research
  description: DJS enhanced Schaffer-collateral LTP in acute mouse hippocampal slices in a concentration-dependent manner.
  sourceId: reddit-pmid-26453932
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
  sourceId: reddit-pmid-26453932
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
  sourceId: reddit-pmid-26453932
```

## Cautions

```yaml
- title: Preclinical-only evidence
  description: The linked study used mouse slices and mice; no human efficacy, safety, dose or pharmacokinetic conclusion follows.
  sourceId: reddit-pmid-26453932
- title: Multi-herb formulation uncertainty
  description: The PubMed abstract does not specify a standardized extract composition or human-equivalent dose.
  sourceId: reddit-pmid-26453932
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
  - reddit-pmid-26453932
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
- id: reddit-index-danggui-jakyak-san
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Discovery index linking the DJS preclinical publication.
  limitation: Community indexing is not efficacy or safety evidence.
- id: reddit-pmid-26453932
  title: Danggui-Jakyak-San enhances hippocampal long-term potentiation through the ERK/CREB/BDNF cascade.
  authors: Jee Hyun Yi; Hye Jin Park; Soo Ji Beak; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26453932/
  kind: PubMed publication
  insight: DJS enhanced mouse hippocampal LTP and spatial memory with ERK/CREB/BDNF activation.
  limitation: Mouse/in-vitro study; no human dose, PK or clinical evidence; full text not retrieved in this pass.
  pmid: '26453932'
  doi: 10.1016/j.jep.2015.10.012
```

## Legal

```yaml
[]
```
