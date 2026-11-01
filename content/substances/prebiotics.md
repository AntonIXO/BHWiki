---
slug: prebiotics
name: Prebiotics
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
  sourceId: optihealth-substance-01a08b04-2fb3-728e-9e73-0d4d6290e407
  observationId: prebiotics-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2fb3-728e-9e73-0d4d6290e407
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
x-order: 1748
---

## Summary

Prebiotics evidence is source-specific and endpoint-limited. The salivary cortisol awakening response was significantly lower after B-GOS intake compared with placebo.
## Description

This page links PubMed evidence for prebiotics. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 25449699.
## Evidence note

The linked randomized human trial compared FOS and B-GOS with maltodextrin for 3 weeks; only B-GOS lowered the cortisol awakening response and shifted emotional attention. No pharmacokinetic estimate was reported.

Reviewed PubMed abstracts for PMID(s) 25449699. PMC citation PMC4410136 was checked; rights-eligible full-text retrieval was not available in this pass.

## Doses

```yaml
- label: B-GOS or FOS prebiotic exposure (25449699)
  amount: Study product daily
  quantity: null
  quantityMax: null
  unit: not stated
  ingredient: Prebiotic
  formulation: fructooligosaccharides
  route: oral or as stated in abstract
  frequency: daily
  duration: 3 weeks
  population: 'OBJECTIVES: The present study explored the effects of two prebiotics on the secretion of the stress hormone, cortisol and emotional processing in healthy volunteers.'
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 25449699 abstract; formulation and population are source-specific to this study.
  sourceId: reddit-pmid-25449699
```

## Pharmacokinetics

```yaml
- id: prebiotics-identity-unassessed
  analyte: Prebiotics
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
  sourceId: optihealth-substance-01a08b04-2fb3-728e-9e73-0d4d6290e407
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
- id: reddit-prebiotics-cortisol-25449699
  conceptId: cortisol-response
  name: Cortisol awakening response
  direction: Variable
  evidence: Limited research
  description: The salivary cortisol awakening response was significantly lower after B-GOS intake compared with placebo.
  sourceId: reddit-pmid-25449699
  population: 'OBJECTIVES: The present study explored the effects of two prebiotics on the secretion of the stress hormone, cortisol and emotional processing in healthy volunteers.'
  exposure: 'METHODS: Forty-five healthy volunteers received one of two prebiotics (fructooligosaccharides, FOS, or Bimuno galactooligosaccharides, B-GOS) or a placebo (maltodextrin) daily for 3 weeks.'
  instrument: Salivary cortisol awakening response
  magnitude: null
  reportType: measured-assessment
- id: reddit-prebiotics-emotional-bias-25449699
  conceptId: anxiety-symptom-severity
  name: Emotional attentional bias
  direction: Variable
  evidence: Limited research
  description: The salivary cortisol awakening response was significantly lower after B-GOS intake compared with placebo.
  sourceId: reddit-pmid-25449699
  population: 'OBJECTIVES: The present study explored the effects of two prebiotics on the secretion of the stress hormone, cortisol and emotional processing in healthy volunteers.'
  exposure: 'METHODS: Forty-five healthy volunteers received one of two prebiotics (fructooligosaccharides, FOS, or Bimuno galactooligosaccharides, B-GOS) or a placebo (maltodextrin) daily for 3 weeks.'
  instrument: Dot-probe emotional attention task
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
- id: reddit-claim-prebiotics-25449699-0
  assertion: 'PMID 25449699 reported: The salivary cortisol awakening response was significantly lower after B-GOS intake compared with placebo.'
  relation: associated-with
  participants:
  - entityId: substance:prebiotics
    role: intervention or exposure
  - entityId: tag:cortisol-response
    role: reported endpoint
  context: Source-specific result from PMID 25449699; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-25449699
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 25449699; this single study does not establish general efficacy or safety.
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
- id: optihealth-substance-01a08b04-2fb3-728e-9e73-0d4d6290e407
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2fb3-728e-9e73-0d4d6290e407
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-link-ca2a06d4103b
  title: Prebiotic intake reduces the waking cortisol response and alters emotional bias in healthy volunteers (2015)
  authors: Not established
  year: 2015
  url: https://link.springer.com/article/10.1007%2Fs00213-014-3810-0#page-1
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25449699
  title: Prebiotic intake reduces the waking cortisol response and alters emotional bias in healthy volunteers.
  authors: Kristin Schmidt, Philip J Cowen, Catherine J Harmer, George Tzortzis, Steven Errington, Philip W J Burnet
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25449699/
  kind: PubMed publication
  insight: The salivary cortisol awakening response was significantly lower after B-GOS intake compared with placebo.
  limitation: PubMed abstract and rights-eligible PMC full text (PMC4410136) were reviewed; applicability remains limited to the reported design and population.
  pmid: '25449699'
  doi: 10.1007/s00213-014-3810-0
  pmcid: PMC4410136
  funding: Not assessed in this pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
