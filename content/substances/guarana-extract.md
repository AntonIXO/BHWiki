---
slug: guarana-extract
name: Guarana Extract
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
  sourceId: optihealth-substance-019feb25-d895-746d-8710-960b0831de89
  observationId: guarana-extract-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019feb25-d895-746d-8710-960b0831de89
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
x-order: 1128
---

## Summary

Guarana Extract is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Guarana Extract. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (5 linked source records; 3 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

PubMed MCP abstract review: 3 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

PubMed MCP abstract review covered 3 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
- label: PubMed study exposure (16533867)
  amount: 37.5 mg
  quantity: 37.5
  quantityMax: null
  unit: mg
  ingredient: Guarana Extract
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: 'n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37'
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-16533867
- label: PubMed study exposure (15582012)
  amount: 75 mg
  quantity: 75
  quantityMax: null
  unit: mg
  ingredient: Guarana Extract
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: 'In this double-blind, counterbalanced, placebo-controlled study, the cognitive and mood effects of separate single doses of: 75 mg of a dried ethanolic extract of guarana (approx 12% caffeine), 200 mg of Panax ginseng (G115), and their combination (75 mg/200 mg), were assessed in 28 healthy young (18-24) participants.'
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-15582012
```

## Pharmacokinetics

```yaml
- id: guarana-extract-identity-unassessed
  analyte: Guarana Extract
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
  sourceId: optihealth-substance-019feb25-d895-746d-8710-960b0831de89
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
- id: reddit-guarana-extract-cognitive-performance-16533867
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).'
  sourceId: reddit-pmid-16533867
  population: 'n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37'
  exposure: 'The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-episodic-memory-16533867
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: 'The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).'
  sourceId: reddit-pmid-16533867
  population: 'n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37'
  exposure: 'The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-attention-15582012
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  sourceId: reddit-pmid-15582012
  population: 'In this double-blind, counterbalanced, placebo-controlled study, the cognitive and mood effects of separate single doses of: 75 mg of a dried ethanolic extract of guarana (approx 12% caffeine), 200 mg of Panax ginseng (G115), and their combination (75 mg/200 mg), were assessed in 28 healthy young (18-24) participants.'
  exposure: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-cognitive-performance-15582012
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  sourceId: reddit-pmid-15582012
  population: 'In this double-blind, counterbalanced, placebo-controlled study, the cognitive and mood effects of separate single doses of: 75 mg of a dried ethanolic extract of guarana (approx 12% caffeine), 200 mg of Panax ginseng (G115), and their combination (75 mg/200 mg), were assessed in 28 healthy young (18-24) participants.'
  exposure: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-episodic-memory-15582012
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  sourceId: reddit-pmid-15582012
  population: 'In this double-blind, counterbalanced, placebo-controlled study, the cognitive and mood effects of separate single doses of: 75 mg of a dried ethanolic extract of guarana (approx 12% caffeine), 200 mg of Panax ginseng (G115), and their combination (75 mg/200 mg), were assessed in 28 healthy young (18-24) participants.'
  exposure: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-cognitive-performance-18077056
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  sourceId: reddit-pmid-18077056
  population: 'This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  exposure: 'Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-guarana-extract-fatigue-severity-18077056
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Increased
  evidence: Human research
  description: 'Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  sourceId: reddit-pmid-18077056
  population: 'This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  exposure: 'Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
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
- title: Source-specific finding from PMID 15582012
  description: 'Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  sourceId: reddit-pmid-15582012
```

## Claims

```yaml
- id: reddit-claim-guarana-extract-16533867-0
  assertion: 'PMID 16533867 reports: The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).'
  relation: associated-with
  participants:
  - entityId: substance:guarana-extract
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-16533867
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-guarana-extract-15582012-1
  assertion: 'PMID 15582012 reports: Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.'
  relation: associated-with
  participants:
  - entityId: substance:guarana-extract
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-15582012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-guarana-extract-18077056-2
  assertion: 'PMID 18077056 reports: Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).'
  relation: associated-with
  participants:
  - entityId: substance:guarana-extract
    role: intervention or exposure
  - entityId: tag:fatigue-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-18077056
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
  url: https://en.wikipedia.org/wiki/Guaran%C3%A1
  title: Wikipedia
```

## References

```yaml
- id: optihealth-substance-019feb25-d895-746d-8710-960b0831de89
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019feb25-d895-746d-8710-960b0831de89
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-link-8680c50a461e
  title: Acute efects of the Paulinia Cupana, "Guaraná" on the cognition of normal volunteers
  authors: Not established
  year: 2026
  url: https://www.scielo.br/scielo.php?pid=S1516-31801994000300007&script=sci_arttext
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16533867
  title: A double-blind, placebo-controlled, multi-dose evaluation of the acute behavioural effects of guaraná in humans.
  authors: C F Haskell, D O Kennedy, K A Wesnes, A L Milne, A B Scholey
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/16533867/
  kind: PubMed publication
  insight: The present study aimed to systematically assess acute, dose-related behavioural effects of an extract of guaraná plant for the first time in humans. This double-blind, counterbalanced, placebo-controlled study (n=26) assessed the acute mood and cognitive effects throughout the day of four different doses (37.5 mg, 75 mg, 150 mg and 300 mg) of a standardised guaraná extract (PC-102).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16533867'
  doi: 10.1177/0269881106063815
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15582012
  title: 'Improved cognitive performance in human volunteers following administration of guarana (Paullinia cupana) extract: comparison and interaction with Panax ginseng.'
  authors: D O Kennedy, C F Haskell, K A Wesnes, A B Scholey
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15582012/
  kind: PubMed publication
  insight: Extracts from the plant guarana (Paullinia cupana) feature as putatively stimulating ingredients in a number of foods, drinks and dietary/herbal supplements. To date, little research in humans has examined the potential psychoactive effects of these extracts.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15582012'
  doi: 10.1016/j.pbb.2004.07.014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18077056
  title: Improved cognitive performance and mental fatigue following a multi-vitamin and mineral supplement with added guaraná (Paullinia cupana).
  authors: D O Kennedy, C F Haskell, B Robertson, J Reay, C Brewster-Maund, J Luedemann, S Maggini, M Ruf, A Zangara, A B Scholey
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18077056/
  kind: PubMed publication
  insight: Guaraná (Paullinia cupana) extracts are most commonly used in Western markets as putatively psychoactive food and drink additives. This double-blind, randomised, placebo-controlled, parallel groups study assessed the acute effects of either a vitamin/mineral/guaraná supplement or placebo drink in 129 healthy young adults (18-24 years).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18077056'
  doi: 10.1016/j.appet.2007.10.007
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-ae2dfbfdd07a
  title: A multivitamin–mineral preparation with guaraná positively effects cognitive performance and reduces mental fatigue during sustained mental demand
  authors: Not established
  year: 2026
  url: https://www.sciencedirect.com/science/article/pii/S019566630800041X
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
