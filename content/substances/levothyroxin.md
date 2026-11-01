---
slug: levothyroxin
name: Levothyroxin
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
  sourceId: reddit-index-levothyroxin
  observationId: levothyroxin-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-levothyroxin
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

Levothyroxin has 2 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Levothyroxin. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review covered 1 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: levothyroxin-reddit-pk-unestablished
  analyte: Levothyroxin
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This corpus import does not establish a pharmacokinetic observation.
  sourceId: reddit-index-levothyroxin
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
- id: reddit-levothyroxin-memory-23319987
  conceptId: memory
  name: Wechsler memory quotient
  direction: Increased
  evidence: Limited research
  description: In 60 adults with subclinical hypothyroidism, three months of levothyroxine increased memory quotient by 9.3 points versus 3.23 with placebo (p=0.002), with improvements in several Wechsler subtests.
  sourceId: reddit-pmid-23319987
  population: 60 adults (51 women, 9 men) with TSH 4.5–10 mU/l and normal free T4
  exposure: Levothyroxine for 3 months versus placebo
  instrument: Wechsler Memory Scale
  magnitude: 9.3 versus 3.23 point memory-quotient rise
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Population-specific evidence (PMID 23319987; PMCID PMC3542502)
  description: The trial studied adults with subclinical hypothyroidism and does not establish cognitive benefit for euthyroid people or a general nootropic effect; levothyroxine treatment requires clinical monitoring.
  sourceId: reddit-pmid-23319987
```

## Claims

```yaml
- id: reddit-claim-levothyroxin-23319987-0
  assertion: In adults with subclinical hypothyroidism, three months of levothyroxine improved memory-quotient and selected Wechsler subtest scores versus placebo.
  relation: reported-in
  participants:
  - entityId: substance:levothyroxin
    role: intervention
  - entityId: tag:memory
    role: reported endpoint
  context: Randomized double-blind clinical trial.
  sourceIds:
  - reddit-pmid-23319987
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The study population had subclinical hypothyroidism; results do not generalize to euthyroid use.
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
- id: reddit-index-levothyroxin
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-62133cc03eae
  title: Changes of subtests of Wechsler Memory Scale and cognitive function in subjects with subclinical hypothyroidism following treatment with levothyroxine
  authors: Not established
  year: 2026
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3542502/
  kind: PubMed Central publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-9f631f134e08
  title: 'Levothyroxin restores hypothyroidism-induced impairment of hippocampus-dependent learning and memory: Behavioral, electrophysiological, and molecular studies'
  authors: Not established
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1002/hipo.20476/abstract
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23319987
  title: Changes of subtests of Wechsler Memory Scale and cognitive function in subjects with subclinical hypothyroidism following treatment with levothyroxine.
  authors: Rokhsareh Aghili, Mohammad E Khamseh, Mojtaba Malek, Ali Hadian, Hamid R Baradaran, Laily Najafi, Zahra Emami
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23319987/
  kind: PubMed Central publication
  insight: A randomized double-blind trial in 60 adults with subclinical hypothyroidism found a greater three-month memory-quotient increase with levothyroxine than placebo.
  limitation: Full text retrieved from PMCID PMC3542502; findings apply to subclinical hypothyroidism and do not establish euthyroid cognitive enhancement.
  pmid: '23319987'
  pmcid: PMC3542502
  doi: 10.5114/aoms.2012.32423
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
