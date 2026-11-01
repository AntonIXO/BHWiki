---
slug: orexin-a
name: Orexin A
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
  sourceId: reddit-index-orexin-a
  observationId: orexin-a-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-orexin-a
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

Orexin-A evidence in the linked publications is preclinical. In mouse hippocampal slices, orexin-A produced age-dependent bidirectional synaptic plasticity through orexin receptor-1 and multiple kinases; in orexin-neuron-depleted mice, nasal Hcrt-1 partly restored long-term social memory. No human dose or pharmacokinetic evidence is provided. [reddit-pmid-19624551][reddit-pmid-23516292]

## Description

This page imports the Reddit index source trail for Orexin A. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed abstracts retrieved for PMIDs 19624551 and 23516292; full-text retrieval was attempted for PMC3640412 (PMID 23516292) but returned an internal connector error in this pass. Both studies are animal/preparation experiments and cannot establish human efficacy, dosing, or safety.

## Doses

```yaml
- label: Hippocampal slice orexin-A experiment
  amount: null
  quantity: null
  quantityMax: null
  unit: null
  ingredient: Orexin-A (hypocretin-1)
  formulation: Exogenous peptide in acute mouse brain slices
  route: Ex vivo bath application
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Adult and juvenile mouse hippocampal slices
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Concentration not stated in abstract.
  sourceId: reddit-pmid-19624551
- label: Nasal Hcrt-1 rescue experiment
  amount: null
  quantity: null
  quantityMax: null
  unit: null
  ingredient: Exogenous Hcrt-1 (orexin-A)
  formulation: Nasal administration in mice
  route: intranasal
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Orexin-neuron-depleted transgenic mice
  purpose: Preclinical exposure; not a human dosing recommendation.
  note: Amount not stated in abstract.
  sourceId: reddit-pmid-23516292
```

## Pharmacokinetics

```yaml
- id: orexin-a-reddit-pk-unestablished
  analyte: Orexin-A / Hcrt-1
  route: ex vivo and intranasal in mice
  formulation: Peptide
  population: Mouse experiments
  endpoint: elimination-half-life
  statistic: not-reported
  value: null
  low: null
  high: null
  unit: hours
  context: Linked abstracts report functional experiments without concentration-time or human pharmacokinetic data.
  sourceId: reddit-pmid-19624551
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
- id: reddit-orexin-a-episodic-memory-23516292
  conceptId: episodic-memory
  name: Social recognition memory
  direction: Increased
  evidence: Limited research
  description: Exogenous Hcrt-1 partly rescued long-term social-memory deficits in orexin-neuron-depleted mice.
  sourceId: reddit-pmid-23516292
  population: Orexin/ataxin-3 transgenic mice
  exposure: Intranasal Hcrt-1; amount not reported.
  instrument: Social novelty and recognition tests
  magnitude: Partial rescue; no human estimate.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: OX1R and kinase-dependent plasticity
  description: In mouse hippocampal slices, orexin-A effects required orexin receptor-1 and CaMKII, PKC, PKA, MAPK, PI3K, and Trk signaling; the direction depended on age and kinase inhibition.
  sourceId: reddit-pmid-19624551
- title: Hippocampal pCREB and synaptic plasticity
  description: Orexin-neuron loss reduced paired-pulse facilitation, long-term potentiation, and phosphorylated CREB; Hcrt-1 partly restored social memory.
  sourceId: reddit-pmid-23516292
```

## Cautions

```yaml
- title: Animal and ex vivo evidence only
  description: The linked studies used mouse slices or transgenic mice; no human efficacy, dose, pharmacokinetic, or safety conclusion follows.
  sourceId: reddit-pmid-19624551
- title: Age-dependent direction
  description: Orexin-A produced potentiation in adult slices but depression in juvenile slices, indicating context-dependent effects.
  sourceId: reddit-pmid-19624551
```

## Claims

```yaml
- id: reddit-claim-orexin-a-23516292-0
  assertion: Orexin-A/Hcrt-1 signaling contributes to hippocampal social-memory consolidation in mice, with partial rescue after nasal Hcrt-1 in orexin-neuron-depleted animals.
  relation: preclinical-support
  participants:
  - entityId: substance:orexin-a
    role: intervention
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Mouse neurobehavioral and electrophysiology study.
  sourceIds:
  - reddit-pmid-23516292
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical model; no human translation established.
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
- id: reddit-index-orexin-a
  title: Reddit Nootropics index entry
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-eedc858787b1
  title: Systemic and Nasal Delivery of Orexin-A (Hypocretin-1) Reduces the Effects of Sleep Deprivation on Cognitive Performance in Nonhuman Primates
  authors: Not established
  year: 2026
  url: https://www.jneurosci.org/content/27/52/14239.long
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19624551
  title: Orexins/hypocretins control bistability of hippocampal long-term synaptic plasticity through co-activation of multiple kinases.
  authors: O Selbach, C Bohla, A Barbara, N Doreulee, K S Eriksson, O A Sergeeva, H L Haas
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19624551/
  kind: PubMed publication
  insight: 'AIM: Orexins/hypocretins (OX/Hcrt) are hypothalamic neuropeptides linking sleep-wakefulness, appetite and neuroendocrine control.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19624551'
  doi: 10.1111/j.1748-1716.2009.02021.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23516292
  title: Hypocretin/orexin neurons contribute to hippocampus-dependent social memory and synaptic plasticity in mice.
  authors: Liya Yang, Bende Zou, Xiaoxing Xiong, Conrado Pascual, James Xie, Adam Malik, Julian Xie, Takeshi Sakurai, Xinmin Simon Xie
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23516292/
  kind: PubMed publication
  insight: Hypocretin/orexin (Hcrt)-producing neurons in the lateral hypothalamus project throughout the brain, including to the hippocampus, where Hcrt receptors are widely expressed.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23516292'
  pmcid: PMC3640412
  doi: 10.1523/JNEUROSCI.3200-12.2013
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-861dedcfb0b0
  title: 'The orexigenic effect of orexin-A revisited: Dependence of an intact growth hormone axis'
  authors: Not established
  year: 2026
  url: https://endo.endojournals.org/content/early/2013/07/16/en.2013-1251.abstract
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
