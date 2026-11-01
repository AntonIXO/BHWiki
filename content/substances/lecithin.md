---
slug: lecithin
name: Lecithin
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
  sourceId: reddit-index-lecithin
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-lecithin
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

Lecithin has 1 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Lecithin. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review: 1 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

## Doses

```yaml
- label: PubMed study exposure (6346908)
  amount: 20 g
  quantity: 20
  quantityMax: null
  unit: g
  ingredient: Lecithin
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-6346908
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
- id: reddit-lecithin-cognitive-performance-6346908
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.'
  sourceId: reddit-pmid-6346908
  population: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing.'
  exposure: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lecithin-episodic-memory-6346908
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.'
  sourceId: reddit-pmid-6346908
  population: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing.'
  exposure: 'In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: reddit-claim-lecithin-6346908-0
  assertion: 'PMID 6346908 reports: In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.'
  relation: associated-with
  participants:
  - entityId: substance:lecithin
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-6346908
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

## References

```yaml
- id: reddit-index-lecithin
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-6346908
  title: Effect of lecithin on memory in normal adults.
  authors: C M Harris, M W Dysken, P Fovall, J M Davis
  year: 1983
  url: https://pubmed.ncbi.nlm.nih.gov/6346908/
  kind: PubMed publication
  insight: In a double-blind, placebo-controlled, crossover study of the effect of lecithin on memory test performance, nine normal paid volunteers (age range = 22-55 years) took single oral doses of placebo and lecithin (20 g) 5 hours before cognitive testing. Lecithin raised plasma choline levels during the test session to nearly double the placebo levels, but a categorized serial learning task, a word recognition task, a paired associates learning task, and a test of retrieval by category demonstrated no significant change in memory performance.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '6346908'
  doi: 10.1176/ajp.140.8.1010
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
