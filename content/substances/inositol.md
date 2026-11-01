---
slug: inositol
name: Inositol
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
  sourceId: optihealth-substance-01a08b04-2f51-734f-86bf-84630b35e498
  observationId: inositol-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f51-734f-86bf-84630b35e498
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
x-order: 1555
---

## Summary

Inositol is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Inositol. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (1 linked source records; 1 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

PubMed MCP abstract review: 1 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

PubMed MCP abstract review covered 1 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: inositol-identity-unassessed
  analyte: Inositol
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
  sourceId: optihealth-substance-01a08b04-2f51-734f-86bf-84630b35e498
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
- id: reddit-inositol-depression-severity-11267629
  conceptId: depression-severity
  name: Depression Severity
  direction: Variable
  evidence: Limited research
  description: 'A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.'
  sourceId: reddit-pmid-11267629
  population: 'Since nigro-striatal DA tracts are subject to 5HT(2) heteroreceptor regulation, one possible mechanism of inositol in OCD may involve its effects on inositol-dependent receptors, especially the 5HT(2) receptor, and a resulting effect on DA pathways in the striatum.'
  exposure: 'A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 11267629
  description: 'A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.'
  sourceId: reddit-pmid-11267629
```

## Cautions

```yaml
- title: Source-specific finding from PMID 11267629
  description: 'A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.'
  sourceId: reddit-pmid-11267629
```

## Claims

```yaml
- id: reddit-claim-inositol-11267629-0
  assertion: 'PMID 11267629 reports: A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.'
  relation: associated-with
  participants:
  - entityId: substance:inositol
    role: intervention or exposure
  - entityId: tag:depression-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-11267629
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
  url: https://en.wikipedia.org/wiki/Inositol
  title: Wikipedia
```

## References

```yaml
- id: optihealth-substance-01a08b04-2f51-734f-86bf-84630b35e498
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f51-734f-86bf-84630b35e498
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-11267629
  title: Chronic inositol increases striatal D(2) receptors but does not modify dexamphetamine-induced motor behavior. Relevance to obsessive-compulsive disorder.
  authors: B H Harvey, A Scheepers, L Brand, D J Stein
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11267629/
  kind: PubMed publication
  insight: A large body of evidence suggests that the neuropathology of obsessive-compulsive disorder (OCD) lies in the complex neurotransmitter network of the cortico-striatal-thalamo-cortical (CSTC) circuit, where dopamine (DA), serotonin (5HT), glutamate (Glu), and gamma-amino butyric acid (GABA) dysfunction have been implicated in the disorder. Chronic inositol has been found to be effective in specific disorders that respond to selective serotonin reuptake inhibitors (SSRIs), including OCD, panic, and depression.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '11267629'
  doi: 10.1016/s0091-3057(00)00459-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
