---
slug: carnosine
name: Carnosine
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
  sourceId: optihealth-substance-01a08b04-2ec5-762d-b89e-b0abaa348cae
  observationId: carnosine-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2ec5-762d-b89e-b0abaa348cae
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
x-order: 1343
---

## Summary

Small randomized studies in older adults suggest that carnosine/anserine formulas may preserve verbal episodic memory, but evidence is limited to short, small trials.

## Description

The Reddit-linked trials used an imidazole-dipeptide formula containing carnosine and anserine rather than isolated carnosine. Both reported verbal-memory preservation after about three months; one also reported resting-state connectivity changes.

## Evidence note

Two double-blind randomized studies were identified. A 31-person fMRI trial used 500 mg carnosine/anserine (1:3) twice daily for 3 months and found better verbal episodic memory versus placebo. A separate 39-completer trial used 1.0 g/day of a 3:1 anserine/carnosine formula for 3 months and reported preserved delayed verbal recall and posterior-cingulate perfusion. These are small, formulation-specific studies and do not establish general nootropic efficacy or PK.

## Doses

```yaml
- label: Imidazole-dipeptide formula
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Carnosine/anserine (1:3)
  formulation: Imidazole dipeptide formula
  route: Oral
  frequency: Twice daily
  duration: 3 months
  population: 31 healthy adults aged 40–78
  purpose: Memory and resting-state fMRI research
  sourceCategory: research
  note: Each dose contained 500 mg of the carnosine/anserine formula; total 1 g/day.
  sourceId: reddit-pmid-26640437
- label: Anserine/carnosine formula
  amount: 1.0 g/day
  quantity: 1.0
  quantityMax: null
  unit: g/day
  ingredient: Anserine/carnosine (3:1)
  formulation: Oral supplement
  route: Oral
  frequency: Daily
  duration: 3 months
  population: 39 healthy elderly volunteers completing follow-up
  purpose: Verbal episodic-memory research
  sourceCategory: research
  note: "The abstract reports a 3:1 anserine/carnosine formula."
  sourceId: reddit-pmid-26682691
```

## Pharmacokinetics

```yaml
- id: carnosine-identity-unassessed
  analyte: Carnosine
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
  sourceId: optihealth-substance-01a08b04-2ec5-762d-b89e-b0abaa348cae
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
- id: carnosine-episodic-26640437
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: After 3 months, the carnosine/anserine group had better verbal episodic-memory performance than placebo.
  sourceId: reddit-pmid-26640437
  population: 31 healthy adults aged 40–78
  exposure: 500 mg carnosine/anserine formula twice daily for 3 months
  instrument: Verbal episodic-memory testing
  magnitude: null
  reportType: measured-assessment
- id: carnosine-episodic-26682691
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: Delayed-recall verbal memory was preserved versus placebo after 3 months of 1 g/day anserine/carnosine; inflammatory cytokines and posterior-cingulate perfusion also changed.
  sourceId: reddit-pmid-26682691
  population: 39 healthy elderly volunteers completing follow-up
  exposure: 1.0 g/day 3:1 anserine/carnosine formula for 3 months
  instrument: Wechsler Memory Scale Logical Memory; arterial-spin-labeling MRI
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Memory and network-connectivity changes
  description: The 500 mg twice-daily formula improved verbal episodic memory and changed default-mode and frontoparietal resting-state connectivity versus placebo.
  sourceId: reddit-pmid-26640437
- title: Inflammatory and perfusion correlates
  description: The 1 g/day formula was associated with lower CCL-2/IL-8 secretion and less age-related posterior-cingulate perfusion decline.
  sourceId: reddit-pmid-26682691
```

## Cautions

```yaml
- title: Formulation-specific evidence
  description: The linked trials studied mixed anserine/carnosine formulas, not isolated carnosine; generalization to other products is uncertain.
  sourceId: reddit-pmid-26640437
```

## Claims

```yaml
- id: carnosine-claim-26640437
  assertion: A 500 mg twice-daily carnosine/anserine formula was associated with better verbal episodic memory after 3 months in a small randomized trial.
  relation: associated-with
  participants:
  - entityId: substance:carnosine
    role: intervention formula
  - entityId: tag:episodic-memory
    role: measured endpoint
  context: Double-blind placebo-controlled fMRI study; n=31.
  sourceIds:
  - reddit-pmid-26640437
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mixed formula and small sample.
- id: carnosine-claim-26682691
  assertion: A 1 g/day anserine/carnosine formula preserved delayed verbal recall versus placebo in healthy elderly volunteers.
  relation: associated-with
  participants:
  - entityId: substance:carnosine
    role: intervention formula
  - entityId: tag:episodic-memory
    role: measured endpoint
  context: Double-blind randomized trial with 39 completers.
  sourceIds:
  - reddit-pmid-26682691
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Short duration and mixed formula.
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
  url: https://en.wikipedia.org/wiki/Carnosine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Carnosine
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-2ec5-762d-b89e-b0abaa348cae
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2ec5-762d-b89e-b0abaa348cae
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-link-793ce4173075
  title: Daily Carnosine and Anserine Supplementation Alters Verbal Episodic Memory and Resting State Network Connectivity in Healthy Elderly Adults.
  authors: Jaroslav Rokicki, Lucia Li, Etsuko Imabayashi, Jun Kaneko, Tatsuhiro Hisatsune, Hiroshi Matsuda
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26640437/
  kind: PubMed publication
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: '26640437'
  doi: 10.3389/fnagi.2015.00219
- id: reddit-pmid-26682691
  title: Effect of Anserine/Carnosine Supplementation on Verbal Episodic Memory in Elderly People.
  authors: Tatsuhiro Hisatsune, Jun Kaneko, Hiroki Kurashige, Yuan Cao, Hideo Satsu, Mamoru Totsuka, Yoshinori Katakura, Etsuko Imabayashi, Hiroshi Matsuda
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26682691/
  kind: PubMed publication
  insight: In 39 healthy elderly completers, 1 g/day of a 3:1 anserine/carnosine formula preserved delayed verbal recall and posterior-cingulate perfusion over 3 months.
  limitation: PubMed abstract and linked PMC full text inspected; funding/conflicts not assessed in this pass.
  pmid: '26682691'
  doi: 10.3233/JAD-150767
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4927867/
- id: reddit-pmid-26640437
  title: Daily Carnosine and Anserine Supplementation Alters Verbal Episodic Memory and Resting State Network Connectivity in Healthy Elderly Adults.
  authors: Jaroslav Rokicki, Lucia Li, Etsuko Imabayashi, Jun Kaneko, Tatsuhiro Hisatsune, Hiroshi Matsuda
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26640437/
  kind: PubMed publication
  insight: 500 mg carnosine/anserine twice daily for 3 months improved verbal episodic memory and altered resting-state connectivity in 31 adults.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: '26640437'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  doi: 10.3389/fnagi.2015.00219
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4661275/
```

## Legal

```yaml
[]
```
