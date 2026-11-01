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
  formulation: Bimuno galactooligosaccharides (B-GOS) or fructooligosaccharides (FOS)
  route: oral
  frequency: daily
  duration: 3 weeks
  population: 45 healthy volunteers randomized to B-GOS, FOS or maltodextrin placebo
  purpose: Research exposure
  sourceCategory: research
  note: The abstract specifies formulation, daily schedule and 3-week duration but not gram quantity.
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
  conceptId: cortisol
  name: Cortisol awakening response
  direction: Decreased
  evidence: Human research
  description: B-GOS significantly lowered salivary cortisol awakening response versus maltodextrin placebo; FOS had no effect.
  sourceId: reddit-pmid-25449699
  population: 45 healthy volunteers
  exposure: B-GOS or FOS daily for 3 weeks
  instrument: Salivary cortisol awakening response
  magnitude: null
  reportType: measured-assessment
- id: reddit-prebiotics-emotional-bias-25449699
  conceptId: anxiety-symptom-severity
  name: Emotional attentional bias
  direction: Decreased
  evidence: Human research
  description: B-GOS reduced attentional vigilance to negative versus positive information in a dot-probe task; FOS showed no effect.
  sourceId: reddit-pmid-25449699
  population: 45 healthy volunteers
  exposure: B-GOS or FOS daily for 3 weeks
  instrument: Dot-probe emotional attention task
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Microbiota-linked stress response
  description: The authors interpret lower cortisol awakening response and positive attentional bias after B-GOS as consistent with neuroendocrine and anxiolytic effects of microbiota proliferation; this is a mechanism hypothesis, not proof of treatment efficacy.
  sourceId: reddit-pmid-25449699
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: reddit-claim-prebiotics-25449699-0
  assertion: In a 3-week randomized trial, B-GOS but not FOS lowered cortisol awakening response and reduced negative attentional vigilance in healthy volunteers.
  relation: associated-with
  participants:
  - entityId: substance:prebiotics
    role: intervention or exposure
  - entityId: tag:cortisol
    role: reported endpoint
  context: PMID 25449699; B-GOS, FOS and maltodextrin were separate study arms.
  sourceIds:
  - reddit-pmid-25449699
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single short randomized trial; no disease-treatment or long-term inference.
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
  limitation: PubMed abstract was reviewed; PMC citation PMC4410136 was identified but rights-eligible full-text retrieval was unavailable in this pass.
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
