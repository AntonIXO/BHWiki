---
slug: probiotics
name: Probiotics
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
  sourceId: optihealth-substance-01a08b04-2fb5-7676-8afd-93ff90b98cff
  observationId: probiotics-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2fb5-7676-8afd-93ff90b98cff
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
x-order: 1753
---

## Summary

Probiotics evidence is source-specific and endpoint-limited. Changes in gut microbiota have been reported to alter signaling mechanisms, emotional behavior, and visceral nociceptive reflexes in rodents.
## Description

This page links PubMed evidence for probiotics. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 23474283.
## Evidence note

The structured records below summarize the linked publication abstracts and any retrieved full text; they do not establish broad efficacy or safety beyond the reported populations and endpoints.

Reviewed PubMed abstracts for PMID(s) 23474283. Rights-eligible PMC full text reviewed: PMC3839572.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: probiotics-identity-unassessed
  analyte: Probiotics
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
  sourceId: optihealth-substance-01a08b04-2fb5-7676-8afd-93ff90b98cff
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
- id: reddit-probiotics-attention-23474283
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Limited research
  description: Changes in gut microbiota have been reported to alter signaling mechanisms, emotional behavior, and visceral nociceptive reflexes in rodents.
  sourceId: reddit-pmid-23474283
  population: Participants underwent functional magnetic resonance imaging before and after the intervention to measure brain response to an emotional faces attention task and resting brain activity.
  exposure: Healthy women with no gastrointestinal or psychiatric symptoms were randomly assigned to groups given FMPP (n = 12), a nonfermented milk product (n = 11, controls), or no intervention (n = 13) twice daily for 4 weeks.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 23474283
  description: Changes in gut microbiota have been reported to alter signaling mechanisms, emotional behavior, and visceral nociceptive reflexes in rodents.
  sourceId: reddit-pmid-23474283
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: reddit-claim-probiotics-23474283-0
  assertion: 'PMID 23474283 reported: Changes in gut microbiota have been reported to alter signaling mechanisms, emotional behavior, and visceral nociceptive reflexes in rodents.'
  relation: associated-with
  participants:
  - entityId: substance:probiotics
    role: intervention or exposure
  - entityId: tag:attention
    role: reported endpoint
  context: Source-specific result from PMID 23474283; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-23474283
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 23474283; this single study does not establish general efficacy or safety.
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
- id: optihealth-substance-01a08b04-2fb5-7676-8afd-93ff90b98cff
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2fb5-7676-8afd-93ff90b98cff
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-23474283
  title: Consumption of fermented milk product with probiotic modulates brain activity.
  authors: Kirsten Tillisch, Jennifer Labus, Lisa Kilpatrick, Zhiguo Jiang, Jean Stains, Bahar Ebrat, Denis Guyonnet, Sophie Legrain-Raspaud, Beatrice Trotin, Bruce Naliboff, Emeran A Mayer
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23474283/
  kind: PubMed publication
  insight: Changes in gut microbiota have been reported to alter signaling mechanisms, emotional behavior, and visceral nociceptive reflexes in rodents.
  limitation: PubMed abstract and rights-eligible PMC full text (PMC3839572) were reviewed; applicability remains limited to the reported design and population.
  pmid: '23474283'
  doi: 10.1053/j.gastro.2013.02.043
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcid: PMC3839572
- id: reddit-link-78f748664c58
  title: 'The microbiome-gut-brain axis: from bowel to behavior'
  authors: Not established
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2982.2010.01664.x/full
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
