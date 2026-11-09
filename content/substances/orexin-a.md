---
slug: orexin-a
name: Orexin A
subtitle: Peptide and protein
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Peptide and protein
tags:
  - episodic-memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-19624551
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-19624551
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

Orexin A is a signalling peptide involved in wakefulness. Studies examine its effects on arousal, attention and memory.

## Description

Orexin A is a signalling peptide involved in wakefulness. Studies examine its effects on arousal, attention and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Hippocampal slice orexin-A experiment
  amount: Not reported in abstract
  quantity: null
  quantityMax: null
  unit: not-reported
  ingredient: Orexin-A (hypocretin-1)
  formulation: Exogenous peptide in acute mouse brain slices
  route: Ex vivo bath application
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Adult and juvenile mouse hippocampal slices
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Concentration not stated in abstract.
  sourceId: pubmed-19624551
- label: Nasal Hcrt-1 rescue experiment
  amount: Not reported in abstract
  quantity: null
  quantityMax: null
  unit: not-reported
  ingredient: Exogenous Hcrt-1 (orexin-A)
  formulation: Nasal administration in mice
  route: intranasal
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Orexin-neuron-depleted transgenic mice
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Amount not stated in abstract.
  sourceId: pubmed-23516292
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
- id: research-orexin-a-episodic-memory-23516292
  conceptId: episodic-memory
  name: Social recognition memory
  direction: Increased
  evidence: Limited research
  description: Exogenous Hcrt-1 partly rescued long-term social-memory deficits in orexin-neuron-depleted mice.
  sourceId: pubmed-23516292
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
  sourceId: pubmed-19624551
- title: Hippocampal pCREB and synaptic plasticity
  description: Orexin-neuron loss reduced paired-pulse facilitation, long-term potentiation, and phosphorylated CREB; Hcrt-1 partly restored social memory.
  sourceId: pubmed-23516292
```

## Cautions

```yaml
- title: Animal and ex vivo evidence only
  description: The linked studies used mouse slices or transgenic mice; no human efficacy, dose, pharmacokinetic, or safety conclusion follows.
  sourceId: pubmed-19624551
- title: Age-dependent direction
  description: Orexin-A produced potentiation in adult slices but depression in juvenile slices, indicating context-dependent effects.
  sourceId: pubmed-19624551
```

## Claims

```yaml
- id: research-claim-orexin-a-23516292-0
  assertion: Orexin-A/Hcrt-1 signaling contributes to hippocampal social-memory consolidation in mice, with partial rescue after nasal Hcrt-1 in orexin-neuron-depleted animals.
  relation: preclinical-support
  participants:
    - entityId: substance:orexin-a
      role: intervention
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Mouse neurobehavioral and electrophysiology study.
  sourceIds:
    - pubmed-23516292
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
- id: publication-link-eedc858787b1
  title: Systemic and Nasal Delivery of Orexin-A (Hypocretin-1) Reduces the Effects of Sleep Deprivation on Cognitive Performance in Nonhuman Primates
  authors: Not established
  year: 2026
  url: https://www.jneurosci.org/content/27/52/14239.long
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19624551
  title: Orexins/hypocretins control bistability of hippocampal long-term synaptic plasticity through co-activation of multiple kinases.
  authors: O Selbach, C Bohla, A Barbara, N Doreulee, K S Eriksson, O A Sergeeva, H L Haas
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19624551/
  kind: PubMed publication
  insight: "AIM: Orexins/hypocretins (OX/Hcrt) are hypothalamic neuropeptides linking sleep-wakefulness, appetite and neuroendocrine control."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19624551"
  doi: 10.1111/j.1748-1716.2009.02021.x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23516292
  title: Hypocretin/orexin neurons contribute to hippocampus-dependent social memory and synaptic plasticity in mice.
  authors: Liya Yang, Bende Zou, Xiaoxing Xiong, Conrado Pascual, James Xie, Adam Malik, Julian Xie, Takeshi Sakurai, Xinmin Simon Xie
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23516292/
  kind: PubMed publication
  insight: Hypocretin/orexin (Hcrt)-producing neurons in the lateral hypothalamus project throughout the brain, including to the hippocampus, where Hcrt receptors are widely expressed.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23516292"
  pmcid: PMC3640412
  doi: 10.1523/JNEUROSCI.3200-12.2013
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-861dedcfb0b0
  title: "The orexigenic effect of orexin-A revisited: Dependence of an intact growth hormone axis"
  authors: Not established
  year: 2026
  url: https://endo.endojournals.org/content/early/2013/07/16/en.2013-1251.abstract
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
