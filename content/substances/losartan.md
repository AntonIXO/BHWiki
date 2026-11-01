---
slug: losartan
name: Losartan
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
  sourceId: reddit-index-losartan
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-losartan
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

Losartan has 2 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Losartan. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review: 1 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

## Doses

```yaml
- label: PubMed study exposure (9845001)
  amount: 10 mg/kg
  quantity: 10
  quantityMax: null
  unit: mg/kg
  ingredient: Losartan
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-9845001
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
- id: reddit-losartan-episodic-memory-9845001
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: 'In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.'
  sourceId: reddit-pmid-9845001
  population: 'Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.'
  exposure: 'In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 9845001
  description: 'In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.'
  sourceId: reddit-pmid-9845001
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: reddit-claim-losartan-9845001-0
  assertion: 'PMID 9845001 reports: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.'
  relation: associated-with
  participants:
  - entityId: substance:losartan
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-9845001
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
  url: https://en.wikipedia.org/wiki/Losartan
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-losartan
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-5b7b7dc6cb0f
  title: Cognitive enhancement following acute losartan in normotensive young adults
  authors: Not established
  year: 2026
  url: https://link.springer.com/article/10.1007%2Fs00213-011-2257-9
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9845001
  title: Involvement of cholinergic system in losartan-induced facilitation of spatial and short-term working memory.
  authors: V Raghavendra, K Chopra, S K Kulkarni
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9845001/
  kind: PubMed publication
  insight: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '9845001'
  doi: 10.1016/s0143-4179(98)90065-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
