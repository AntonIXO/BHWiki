---
slug: losartan
name: Losartan
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
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
  sourceId: pubmed-9845001
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-9845001
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

Losartan blocks angiotensin II type 1 receptors. Research explores how this signalling pathway relates to memory and stress.

## Description

Losartan blocks angiotensin II type 1 receptors. Research explores how this signalling pathway relates to memory and stress.

## Evidence note

Study findings and methods are linked to their original publications.

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
  sourceId: pubmed-9845001
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
- id: research-losartan-episodic-memory-9845001
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  sourceId: pubmed-9845001
  population: Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  exposure: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 9845001
  description: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  sourceId: pubmed-9845001
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-losartan-9845001-0
  assertion: "PMID 9845001 reports: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively."
  relation: associated-with
  participants:
    - entityId: substance:losartan
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-9845001
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
- id: publication-link-5b7b7dc6cb0f
  title: Cognitive enhancement following acute losartan in normotensive young adults
  authors: Not established
  year: 2026
  url: https://link.springer.com/article/10.1007%2Fs00213-011-2257-9
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-9845001
  title: Involvement of cholinergic system in losartan-induced facilitation of spatial and short-term working memory.
  authors: V Raghavendra, K Chopra, S K Kulkarni
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9845001/
  kind: PubMed publication
  insight: In the present study we have shown the potential memory enhancing property of losartan, a selective Ang II AT1 receptor antagonist. Nootropic activity of losartan in mice was assessed by using passive avoidance step-down task and elevated plus-maze as a measure of short-term working and spatial memory respectively.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "9845001"
  doi: 10.1016/s0143-4179(98)90065-8
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
  url: https://en.wikipedia.org/wiki/Losartan
  title: Wikipedia
```
