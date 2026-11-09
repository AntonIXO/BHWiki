---
slug: bdnf-protein
name: BDNF
subtitle: Brain-derived neurotrophic factor, or BDNF, is a protein involved in neuronal plasticity.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Peptide and protein
tags:
  - synaptic-plasticity
  - ltp-consolidation
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: publication-link-6dcb8ee95c95
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: publication-link-6dcb8ee95c95
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

Brain-derived neurotrophic factor, or BDNF, is a protein involved in neuronal plasticity. Studies explore how it influences synapses, learning and memory.

## Description

In adult rat hippocampal slices, BDNF alone did not change F-actin labeling but enhanced theta-burst-induced spine F-actin and long-term potentiation (LTP) consolidation. TrkB-Fc blocked these changes when applied immediately after stimulation, and BDNF rapidly phosphorylated PAK and cofilin.

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
- id: bdnf-ltp-spine-actin-17360925
  conceptId: synaptic-plasticity
  name: LTP-related spine F-actin
  direction: Increased
  evidence: Limited research
  description: BDNF enhanced densely F-actin-labeled spines when paired with threshold theta-burst stimulation, while BDNF alone produced no F-actin change.
  sourceId: pubmed-17360925
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
  sourceId: pubmed-17360925
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
  sourceId: pubmed-17360925
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked study used adult rat hippocampal slices and does not establish human dosing, efficacy or safety.
  sourceId: pubmed-17360925
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
    - pubmed-17360925
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

## References

```yaml
- id: publication-link-6dcb8ee95c95
  title: Brain-derived neurotrophic factor promotes long-term potentiation-related cytoskeletal changes in adult hippocampus.
  authors: Christopher S Rex; Ching-Yi Lin; Eniko A Kramár; Lulu Y Chen; Christine M Gall; Gary Lynch
  year: 2007
  url: https://www.jneurosci.org/content/27/11/3017.long
  kind: research index publication link
  insight: The research JNeurosci link resolves to PMID 17360925; BDNF enhanced theta-burst-induced spine F-actin and LTP consolidation in adult rat hippocampal slices.
  limitation: PMC6672589 was not rights-eligible for automated full-text retrieval; human translation is unestablished.
  pmid: "17360925"
  doi: 10.1523/JNEUROSCI.4037-06.2007
  funding: NIH-supported research; full disclosure details were not independently assessed here.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not independently assessed here.
  conflictOfInterestStatus: not-assessed
- id: pubmed-17360925
  title: Brain-derived neurotrophic factor promotes long-term potentiation-related cytoskeletal changes in adult hippocampus.
  authors: Christopher S Rex; Ching-Yi Lin; Eniko A Kramár; Lulu Y Chen; Christine M Gall; Gary Lynch
  year: 2007
  url: https://www.jneurosci.org/content/27/11/3017.long
  kind: research index publication link
  insight: In adult rat hippocampal slices, BDNF enhanced theta-burst-induced spine F-actin and LTP consolidation through TrkB-linked PAK/cofilin phosphorylation.
  limitation: Ex vivo animal study; PMC6672589 was not rights-eligible for automated full-text retrieval.
  pmid: "17360925"
  pmcid: PMC6672589
  doi: 10.1523/JNEUROSCI.4037-06.2007
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Brain-derived_neurotrophic_factor
  title: Wikipedia
```
