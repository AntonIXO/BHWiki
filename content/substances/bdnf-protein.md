---
slug: bdnf-protein
name: BDNF
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
  sourceId: reddit-index-bdnf-protein
  observationId: bdnf-protein-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-bdnf-protein
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

BDNF is a neurotrophin studied here in an adult-rat hippocampal slice model; the linked evidence is mechanistic and does not establish a human supplement or treatment dose.

## Description

In adult rat hippocampal slices, BDNF alone did not change F-actin labeling but enhanced theta-burst-induced spine F-actin and long-term potentiation (LTP) consolidation. TrkB-Fc blocked these changes when applied immediately after stimulation, and BDNF rapidly phosphorylated PAK and cofilin.

## Evidence note

Retrieved PMID 17360925 abstract. PMC6672589 is not rights-eligible for automated full-text retrieval, so the mechanistic record is abstract-bounded and preclinical.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: bdnf-protein-reddit-pk-unestablished
  analyte: bdnf-protein
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination-half-life observation was established in the inspected linked publications.
  sourceId: reddit-index-bdnf-protein
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: bdnf-ltp-spine-actin-17360925
  conceptId: synaptic-plasticity
  name: LTP-related spine F-actin
  direction: Increased
  evidence: Limited research
  description: BDNF enhanced densely F-actin-labeled spines when paired with threshold theta-burst stimulation, while BDNF alone produced no F-actin change.
  sourceId: reddit-pmid-17360925
  population: Adult rat hippocampal slices
  exposure: BDNF applied during theta-burst stimulation; concentration not stated in abstract
  instrument: Phalloidin labeling of filamentous actin
  magnitude: Marked enhancement with threshold stimulation; numeric effect not reported in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: bdnf-ltp-consolidation-17360925
  conceptId: ltp-consolidation
  name: Long-term potentiation consolidation
  direction: Increased
  evidence: Limited research
  description: TrkB-Fc blocked LTP consolidation when applied 1–2 minutes, but not 10 minutes, after theta trains, supporting a time-dependent BDNF role.
  sourceId: reddit-pmid-17360925
  population: Adult rat hippocampal slices
  exposure: Theta-burst stimulation with BDNF or TrkB-Fc manipulation
  instrument: Electrophysiologic LTP measure
  magnitude: Timing-dependent blockade; numeric effect not reported in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: TrkB-dependent cytoskeletal signaling
  description: BDNF phosphorylated p21-activated kinase and cofilin in mature hippocampal spines; TrkB-Fc scavenging blocked spine F-actin and early LTP-consolidation effects.
  sourceId: reddit-pmid-17360925
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked study used adult rat hippocampal slices and does not establish human dosing, efficacy or safety.
  sourceId: reddit-pmid-17360925
```

## Claims

```yaml
- id: bdnf-claim-ltp-17360925
  assertion: BDNF positively modulates theta-burst-induced LTP consolidation through TrkB-linked spine cytoskeletal changes in adult rat hippocampal slices.
  relation: mechanistically-supports
  participants:
  - entityId: substance:bdnf-protein
    role: experimental factor
  - entityId: tag:ltp-consolidation
    role: measured outcome
  context: Ex vivo rat hippocampal slice study.
  sourceIds:
  - reddit-pmid-17360925
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No human translation or dose established.
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
  url: https://en.wikipedia.org/wiki/Brain-derived_neurotrophic_factor
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-bdnf-protein
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-6dcb8ee95c95
  title: Brain-derived neurotrophic factor promotes long-term potentiation-related cytoskeletal changes in adult hippocampus.
  authors: Christopher S Rex; Ching-Yi Lin; Eniko A Kramár; Lulu Y Chen; Christine M Gall; Gary Lynch
  year: 2007
  url: https://www.jneurosci.org/content/27/11/3017.long
  kind: Reddit index publication link
  insight: The Reddit JNeurosci link resolves to PMID 17360925; BDNF enhanced theta-burst-induced spine F-actin and LTP consolidation in adult rat hippocampal slices.
  limitation: PMC6672589 was not rights-eligible for automated full-text retrieval; human translation is unestablished.
  pmid: '17360925'
  doi: 10.1523/JNEUROSCI.4037-06.2007
  funding: NIH-supported research; full disclosure details were not independently assessed here.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not independently assessed here.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17360925
  title: Brain-derived neurotrophic factor promotes long-term potentiation-related cytoskeletal changes in adult hippocampus.
  authors: Christopher S Rex; Ching-Yi Lin; Eniko A Kramár; Lulu Y Chen; Christine M Gall; Gary Lynch
  year: 2007
  url: https://www.jneurosci.org/content/27/11/3017.long
  kind: Reddit index publication link
  insight: In adult rat hippocampal slices, BDNF enhanced theta-burst-induced spine F-actin and LTP consolidation through TrkB-linked PAK/cofilin phosphorylation.
  limitation: Ex vivo animal study; PMC6672589 was not rights-eligible for automated full-text retrieval.
  pmid: '17360925'
  pmcid: PMC6672589
  doi: 10.1523/JNEUROSCI.4037-06.2007
```

## Legal

```yaml
[]
```
