---
slug: betahistine
name: Betahistine
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
  sourceId: reddit-index-betahistine
  observationId: betahistine-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-betahistine
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

One small randomized crossover study found no clear betahistine benefit on working-memory performance or task-network activity in healthy volunteers.

## Description

Sixteen healthy volunteers received two oral 48 mg betahistine doses (96 mg total, separated by 30 minutes) or placebo on separate days. N-back and spatial paired-associate learning were assessed during MRI; clear performance or canonical task-network effects were not established.

## Evidence note

Reviewed PMID 23517178 abstract. The study suggests uncertainty rather than a cognitive-enhancement effect and used a small healthy sample.

## Doses

```yaml
- label: Betahistine healthy-volunteer crossover study (PMID 23517178)
  amount: 48 mg twice, 96 mg total
  quantity: 96
  quantityMax: null
  unit: mg total
  ingredient: Betahistine
  formulation: Oral dose; formulation not specified in abstract
  route: Oral
  frequency: Two doses separated by 30 minutes
  duration: Acute testing during MRI session
  population: 16 healthy volunteers, 8 female, age 18–50 years
  purpose: Working-memory research exposure
  sourceCategory: research
  note: Trial exposure; not a general dosing recommendation.
  sourceId: reddit-pmid-23517178
```

## Pharmacokinetics

```yaml
- id: betahistine-reddit-pk-unestablished
  analyte: betahistine
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination-half-life observation was established in the inspected linked publications.
  sourceId: reddit-index-betahistine
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: betahistine-working-memory-23517178
  conceptId: working-memory-state
  name: Working memory
  direction: Variable
  evidence: Human research
  description: Clear betahistine-induced changes in working-memory performance were not established in N-back or spatial paired-associate tasks.
  sourceId: reddit-pmid-23517178
  population: 16 healthy volunteers
  exposure: Two 48 mg oral doses or placebo
  instrument: N-back and spatial paired-associate learning tasks with MRI
  magnitude: No clear effect reported
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: betahistine-task-network-23517178
  conceptId: task-related-brain-activity
  name: Task-related brain activity
  direction: Variable
  evidence: Human research
  description: No betahistine-induced changes were found in predefined task-related networks; exploratory whole-brain analyses showed activity changes outside those networks.
  sourceId: reddit-pmid-23517178
  population: 16 healthy volunteers
  exposure: Betahistine versus placebo
  instrument: fMRI during working-memory tasks
  magnitude: No predefined-network effect; exploratory changes only
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: H3 antagonism and H1 agonism
  description: Betahistine was studied as an H3 antagonist/H1 agonist, but the small trial did not establish a clear cognitive benefit.
  sourceId: reddit-pmid-23517178
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: betahistine-claim-null-23517178
  assertion: Acute betahistine did not produce a clear working-memory enhancement in a 16-person healthy-volunteer crossover study.
  relation: no-clear-effect
  participants:
  - entityId: substance:betahistine
    role: intervention
  - entityId: tag:working-memory
    role: assessed endpoint
  context: Two 48 mg oral doses versus placebo with fMRI.
  sourceIds:
  - reddit-pmid-23517178
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample and acute design.
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
- id: reddit-index-betahistine
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-23517178
  title: Potential enhancing effects of histamine H₁ agonism/H₃ antagonism on working memory assessed by performance and bold response in healthy volunteers.
  authors: P van Ruitenbeek, M A Mehta
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23517178/
  kind: PubMed publication
  insight: 'BACKGROUND AND PURPOSE: Schizophrenia is a highly debilitating disorder characterized by hallucinations and delusions, but also impaired cognition such as memory.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23517178'
  doi: 10.1111/bph.12184
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
