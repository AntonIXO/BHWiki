---
slug: rolipram
name: Rolipram
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - episodic-memory
  - depression-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-9844008
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-9844008
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

Rolipram is an experimental phosphodiesterase-4 inhibitor studied for learning and memory.

## Description

This page links PubMed evidence for rolipram. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 10633490, 22629087, 9844008.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: PubMed study exposure (22629087)
  amount: 0.1 mg/kg
  quantity: 0.1
  quantityMax: null
  unit: mg/kg
  ingredient: Rolipram
  formulation: Formulation as described in PMID 22629087
  route: oral
  frequency: daily
  duration: 3 weeks
  population: Male mice exposed to chronic mild stress-induced anhedonia
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 22629087 abstract; formulation and population are source-specific to this study.
  sourceId: pubmed-22629087
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
- id: research-rolipram-episodic-memory-9844008
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: In an attempt to improve behavioral memory, we devised a strategy to amplify the signal-to-noise ratio of the cAMP pathway, which plays a central role in hippocampal synaptic plasticity and behavioral memory.
  sourceId: pubmed-9844008
  population: We therefore examined the biochemical, physiological, and behavioral effects in mice of partial inhibition of a hippocampal cAMP phosphodiesterase.
  exposure: In both young and aged mice, rolipram treatment before training increased long- but not short-term retention in freezing to context, a hippocampus-dependent memory task.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-rolipram-depression-severity-22629087
  conceptId: depression-severity
  name: Depression Severity
  direction: Increased
  evidence: Limited research
  description: Furthermore, rolipram showed a significant reduction in duration of immobility in long-term behavioral changes recorded by the FST.
  sourceId: pubmed-22629087
  population: The alteration of GABA content by rolipram as a phosphodiesterase enzyme type-4 inhibitor in the frontal cortex (FCx; as a brain region crucial for the control of emotion and cognition) obtained from male mice exposed to chronic mild stress (CMS)-induced anhedonia (the loss of pleasure or lack of sensitivity to pleasure stimuli) was recorded.
  exposure: The alteration of GABA content by rolipram as a phosphodiesterase enzyme type-4 inhibitor in the frontal cortex (FCx; as a brain region crucial for the control of emotion and cognition) obtained from male mice exposed to chronic mild stress (CMS)-induced anhedonia (the loss of pleasure or lack of sensitivity to pleasure stimuli) was recorded.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-rolipram-depression-severity-10633490
  conceptId: depression-severity
  name: Depression Severity
  direction: Variable
  evidence: Limited research
  description: Coadministration of rolipram or Ro 20-1724 with an antidepressant (either desipramine or Org 4428) for 21 d resulted in a significant induction of BDNF mRNA in hippocampus relative to administration of vehicle.
  sourceId: pubmed-10633490
  population: Population not stated in the PubMed record.
  exposure: The influence of two selective phosphodiesterase 4 (PDE4) inhibitors, rolipram and Ro 20-1724, on the induction of BDNF mRNA by antidepressant treatment was examined.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 22629087
  description: To investigate the alterations in GABA levels by rolipram in the model of depression.
  sourceId: pubmed-22629087
- title: Source-specific finding from PMID 10633490
  description: Coadministration of rolipram or Ro 20-1724 with an antidepressant (either desipramine or Org 4428) for 21 d resulted in a significant induction of BDNF mRNA in hippocampus relative to administration of vehicle.
  sourceId: pubmed-10633490
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-rolipram-9844008-0
  assertion: "PMID 9844008 reported: In an attempt to improve behavioral memory, we devised a strategy to amplify the signal-to-noise ratio of the cAMP pathway, which plays a central role in hippocampal synaptic plasticity and behavioral memory."
  relation: associated-with
  participants:
    - entityId: substance:rolipram
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 9844008; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-9844008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 9844008; this single study does not establish general efficacy or safety.
- id: research-claim-rolipram-22629087-1
  assertion: "PMID 22629087 reported: Furthermore, rolipram showed a significant reduction in duration of immobility in long-term behavioral changes recorded by the FST."
  relation: associated-with
  participants:
    - entityId: substance:rolipram
      role: intervention or exposure
    - entityId: tag:depression-severity
      role: reported endpoint
  context: Source-specific result from PMID 22629087; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-22629087
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 22629087; this single study does not establish general efficacy or safety.
- id: research-claim-rolipram-10633490-2
  assertion: "PMID 10633490 reported: Coadministration of rolipram or Ro 20-1724 with an antidepressant (either desipramine or Org 4428) for 21 d resulted in a significant induction of BDNF mRNA in hippocampus relative to administration of vehicle."
  relation: associated-with
  participants:
    - entityId: substance:rolipram
      role: intervention or exposure
    - entityId: tag:depression-severity
      role: reported endpoint
  context: Source-specific result from PMID 10633490; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-10633490
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 10633490; this single study does not establish general efficacy or safety.
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
- id: pubmed-9844008
  title: Rolipram, a type IV-specific phosphodiesterase inhibitor, facilitates the establishment of long-lasting long-term potentiation and improves memory.
  authors: M Barad, R Bourtchouladze, D G Winder, H Golan, E Kandel
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9844008/
  kind: PubMed publication
  insight: In an attempt to improve behavioral memory, we devised a strategy to amplify the signal-to-noise ratio of the cAMP pathway, which plays a central role in hippocampal synaptic plasticity and behavioral memory.
  limitation: PubMed abstract and rights-eligible PMC full text (PMC24568) were reviewed; applicability remains limited to the reported design and population.
  pmid: "9844008"
  doi: 10.1073/pnas.95.25.15020
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcid: PMC24568
- id: pubmed-22629087
  title: Effect of rolipram, a phosphodiesterase enzyme type-4 inhibitor, on γ-amino butyric acid content of the frontal cortex in mice exposed to chronic mild stress.
  authors: Amany Mohamed Shalaby, Sahar Mohamed Kamal
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22629087/
  kind: PubMed publication
  insight: Furthermore, rolipram showed a significant reduction in duration of immobility in long-term behavioral changes recorded by the FST.
  limitation: PubMed abstract for PMID 22629087 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "22629087"
  doi: 10.4103/0976-500X.95509
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-10633490
  title: Administration of a cAMP phosphodiesterase 4 inhibitor enhances antidepressant-induction of BDNF mRNA in rat hippocampus.
  authors: K Fujimaki, S Morinobu, R S Duman
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10633490/
  kind: PubMed publication
  insight: Coadministration of rolipram or Ro 20-1724 with an antidepressant (either desipramine or Org 4428) for 21 d resulted in a significant induction of BDNF mRNA in hippocampus relative to administration of vehicle.
  limitation: PubMed abstract for PMID 10633490 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "10633490"
  doi: 10.1016/S0893-133X(99)00084-6
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Rolipram
  title: Wikipedia
```
