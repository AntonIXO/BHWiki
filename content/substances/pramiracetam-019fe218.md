---
slug: pramiracetam-019fe218
name: Pramiracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - episodic-memory
  - cognitive-performance
  - nootropic-research
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43f1-7aa0-9d45-77b4abbd6d71
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43f1-7aa0-9d45-77b4abbd6d71
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
x-order: 1110
---

## Summary

Pramiracetam is a racetam compound studied for learning and memory.

## Description

This page links PubMed evidence for pramiracetam 019fe218. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 1786500, 8557218.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: PubMed study exposure (8557218)
  amount: 300 mg/kg
  quantity: 300
  quantityMax: null
  unit: mg/kg
  ingredient: Pramiracetam
  formulation: Formulation as described in PMID 8557218
  route: oral or as stated in abstract
  frequency: Study schedule not stated in abstract
  duration: Not stated in abstract
  population: The effect of systemic administration of pramiracetam on neuronal type nitric oxide synthase (NOS) activity and NOS mRNA expression were studied in the hippocampus and cerebral cortex in rats.
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 8557218 abstract; formulation and population are source-specific to this study.
  sourceId: pubmed-8557218
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
- id: research-pramiracetam-019fe218-episodic-memory-8557218
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: A dose of 300 mg/kg (i.p.) of this nootropic produced an approximately 20% increase in NOS activity in rat brain cortical homogenates but not in hippocampal homogenates; no significant changes were observed in NOS mRNA expression in the cortex and hippocampus.
  sourceId: pubmed-8557218
  population: The effect of systemic administration of pramiracetam on neuronal type nitric oxide synthase (NOS) activity and NOS mRNA expression were studied in the hippocampus and cerebral cortex in rats.
  exposure: A dose of 300 mg/kg (i.p.) of this nootropic produced an approximately 20% increase in NOS activity in rat brain cortical homogenates but not in hippocampal homogenates; no significant changes were observed in NOS mRNA expression in the cortex and hippocampus.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-pramiracetam-019fe218-cognitive-performance-1786500
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo.
  sourceId: pubmed-1786500
  population: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo.
  exposure: The current study evaluated under double-blind placebo-controlled conditions, the safety and efficacy of 400 mg pramiracetam sulphate TID in treating memory and other cognitive problems of males who have sustained brain injuries.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-pramiracetam-019fe218-episodic-memory-1786500
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo.
  sourceId: pubmed-1786500
  population: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo.
  exposure: The current study evaluated under double-blind placebo-controlled conditions, the safety and efficacy of 400 mg pramiracetam sulphate TID in treating memory and other cognitive problems of males who have sustained brain injuries.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 8557218
  description: The effect of systemic administration of pramiracetam on neuronal type nitric oxide synthase (NOS) activity and NOS mRNA expression were studied in the hippocampus and cerebral cortex in rats.
  sourceId: pubmed-8557218
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-pramiracetam-019fe218-8557218-0
  assertion: "PMID 8557218 reported: A dose of 300 mg/kg (i.p.) of this nootropic produced an approximately 20% increase in NOS activity in rat brain cortical homogenates but not in hippocampal homogenates; no significant changes were observed in NOS mRNA expression in the cortex and hippocampus."
  relation: associated-with
  participants:
    - entityId: substance:pramiracetam-019fe218
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 8557218; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-8557218
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 8557218; this single study does not establish general efficacy or safety.
- id: research-claim-pramiracetam-019fe218-1786500-1
  assertion: "PMID 1786500 reported: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo."
  relation: associated-with
  participants:
    - entityId: substance:pramiracetam-019fe218
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 1786500; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-1786500
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 1786500; this single study does not establish general efficacy or safety.
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
- id: optihealth-substance-019fe218-43f1-7aa0-9d45-77b4abbd6d71
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43f1-7aa0-9d45-77b4abbd6d71
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: publication-link-e1553dde7b65
  title: Some neurochemical properties of pramiracetam (CI-879), a new cognition-enhancing agent
  authors: Not established
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1002/ddr.430030503/abstract
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-8557218
  title: Systemic administration of pramiracetam increases nitric oxide synthase activity in the cerebral cortex of the rat.
  authors: M T Corasaniti, A M Paoletti, E Palma, T Granato, M Navarra, G Nisticò
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/8557218/
  kind: PubMed publication
  insight: A dose of 300 mg/kg (i.p.) of this nootropic produced an approximately 20% increase in NOS activity in rat brain cortical homogenates but not in hippocampal homogenates; no significant changes were observed in NOS mRNA expression in the cortex and hippocampus.
  limitation: PubMed abstract for PMID 8557218 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "8557218"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-1786500
  title: Placebo-controlled study of pramiracetam in young males with memory and cognitive problems resulting from head injury and anoxia.
  authors: A McLean, D D Cardenas, D Burgess, E Gamzu
  year: 1991
  url: https://pubmed.ncbi.nlm.nih.gov/1786500/
  kind: PubMed publication
  insight: The results of the study indicate that subject performance in measures of memory, especially delayed recall, evidenced clinically significant improvements after the administration of pramiracetam sulphate as compared to placebo.
  limitation: PubMed abstract for PMID 1786500 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "1786500"
  doi: 10.3109/02699059109008110
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
  url: https://en.wikipedia.org/wiki/Pramiracetam
  title: Wikipedia
```
