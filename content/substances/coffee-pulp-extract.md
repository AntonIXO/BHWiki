---
slug: coffee-pulp-extract
name: Coffee Pulp Extract
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2ef9-702d-ac04-1efb84b7af53
  observationId: coffee-pulp-extract-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2ef9-702d-ac04-1efb84b7af53
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
- references
- legal
- externalWikiLinks
x-order: 1384
---

## Summary

Coffee Pulp Extract is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Coffee Pulp Extract. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (4 linked source records; 4 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

## Doses

```yaml
- label: PubMed study exposure (23312069)
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Coffee Pulp Extract
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-23312069
```

## Pharmacokinetics

```yaml
- id: coffee-pulp-extract-identity-unassessed
  analyte: Coffee Pulp Extract
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2ef9-702d-ac04-1efb84b7af53
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
- id: reddit-coffee-pulp-extract-cognitive-performance-23344884
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: The complex mixture of phytochemicals in fruits and vegetables provides protective health benefits, mainly through additive and/or synergistic effects.
  sourceId: reddit-pmid-23344884
  population: Population described in the PubMed abstract
  exposure: The complex mixture of phytochemicals in fruits and vegetables provides protective health benefits, mainly through additive and/or synergistic effects.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-coffee-pulp-extract-episodic-memory-23344884
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: The complex mixture of phytochemicals in fruits and vegetables provides protective health benefits, mainly through additive and/or synergistic effects.
  sourceId: reddit-pmid-23344884
  population: Population described in the PubMed abstract
  exposure: The complex mixture of phytochemicals in fruits and vegetables provides protective health benefits, mainly through additive and/or synergistic effects.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 23312069
  description: The present single-dose study was performed to assess the effect of whole coffee fruit concentrate powder (WCFC), green coffee caffeine powder (N677), grape seed extract powder (N31) and green coffee bean extract powder (N625) on blood levels of brain-derived neurotrophic factor (BDNF).
  sourceId: reddit-pmid-23312069
- title: Source-specific finding from PMID 6296693
  description: Opiate receptor-active peptide fragments (exorphins) have been identified recently in casein and gluten hydrolysates, and morphine has been found in bovine and human milk.
  sourceId: reddit-pmid-6296693
```

## Cautions

```yaml
- title: Source-specific finding from PMID 16139309
  description: Monoamine oxidase (MAO) is a mitochondrial outer-membrane flavoenzyme involved in brain and peripheral oxidative catabolism of neurotransmitters and xenobiotic amines, including neurotoxic amines, and a well-known target for antidepressant and neuroprotective drugs.
  sourceId: reddit-pmid-16139309
```

## Claims

```yaml
- id: reddit-claim-coffee-pulp-extract-23344884-0
  assertion: Coffee Pulp Extract is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:coffee-pulp-extract
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23344884
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
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
  url: https://en.wikipedia.org/wiki/Coffee
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Coffee
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-2ef9-702d-ac04-1efb84b7af53
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2ef9-702d-ac04-1efb84b7af53
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-23312069
  title: Modulatory effect of coffee fruit extract on plasma levels of brain-derived neurotrophic factor in healthy subjects.
  authors: Tania Reyes-Izquierdo, Boris Nemzer, Cynthia Shu, Lan Huynh, Ruby Argumedo, Robert Keller, Zb Pietrzkowski
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23312069/
  kind: PubMed publication
  insight: The present single-dose study was performed to assess the effect of whole coffee fruit concentrate powder (WCFC), green coffee caffeine powder (N677), grape seed extract powder (N31) and green coffee bean extract powder (N625) on blood levels of brain-derived neurotrophic factor (BDNF).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23312069'
  doi: 10.1017/S0007114512005338
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16139309
  title: Human monoamine oxidase enzyme inhibition by coffee and beta-carbolines norharman and harman isolated from coffee.
  authors: Tomas Herraiz, Carolina Chaparro
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16139309/
  kind: PubMed publication
  insight: Monoamine oxidase (MAO) is a mitochondrial outer-membrane flavoenzyme involved in brain and peripheral oxidative catabolism of neurotransmitters and xenobiotic amines, including neurotoxic amines, and a well-known target for antidepressant and neuroprotective drugs.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16139309'
  doi: 10.1016/j.lfs.2005.05.074
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-6296693
  title: Coffee contains potent opiate receptor binding activity.
  authors: J H Boublik, M J Quinn, J A Clements, A C Herington, K N Wynne, J W Funder
  year: 1983
  url: https://pubmed.ncbi.nlm.nih.gov/6296693/
  kind: PubMed publication
  insight: Opiate receptor-active peptide fragments (exorphins) have been identified recently in casein and gluten hydrolysates, and morphine has been found in bovine and human milk.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '6296693'
  doi: 10.1038/301246a0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23344884
  title: Coffee, but not caffeine, has positive effects on cognition and psychomotor behavior in aging.
  authors: Barbara Shukitt-Hale, Marshall G Miller, Yi-Fang Chu, Barbara J Lyle, James A Joseph
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23344884/
  kind: PubMed publication
  insight: The complex mixture of phytochemicals in fruits and vegetables provides protective health benefits, mainly through additive and/or synergistic effects.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23344884'
  doi: 10.1007/s11357-012-9509-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
