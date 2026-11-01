---
slug: nefiracetam
name: Nefiracetam
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
  sourceId: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
  observationId: nefiracetam-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
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
x-order: 1108
---

## Summary

In a 12-week randomized, placebo-controlled, double-blind trial of poststroke apathy, nefiracetam 900 mg/day did not significantly outperform placebo. Only 13 participants were randomized, so the null result is imprecise and does not establish efficacy or safety for other uses. [reddit-pmid-26915605]

## Description

This page records the source-backed identity label Nefiracetam. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

PubMed abstract retrieved for PMID 26915605; no PMC full text was available. The abstract reports 13 randomized patients and no significant between-group difference at 12 weeks. Detailed adverse-event and funding data remain unreviewed.

## Doses

```yaml
- label: Poststroke apathy trial
  amount: 900 mg/day
  quantity: 900
  quantityMax: null
  unit: mg
  ingredient: Nefiracetam
  formulation: Oral nefiracetam (route inferred from trial drug administration; abstract does not explicitly state route)
  route: oral
  frequency: daily
  duration: 12 weeks
  population: Patients 8–36 weeks after stroke with apathy
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized placebo-controlled trial; only 13 participants randomized.
  sourceId: reddit-pmid-26915605
```

## Pharmacokinetics

```yaml
- id: nefiracetam-reddit-pk-unestablished
  analyte: Nefiracetam
  route: oral
  formulation: Nefiracetam
  population: Poststroke apathy trial participants
  endpoint: elimination-half-life
  statistic: not-reported
  value: null
  low: null
  high: null
  unit: hours
  context: The abstract gives dose and duration but no concentration-time or elimination parameters.
  sourceId: reddit-pmid-26915605
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
- id: reddit-nefiracetam-apathy-26915605
  conceptId: apathy
  name: Apathy severity
  direction: Null
  evidence: Human research
  description: Nefiracetam was not more efficacious than placebo for poststroke apathy at 12 weeks.
  sourceId: reddit-pmid-26915605
  population: 13 randomized participants with poststroke apathy
  exposure: 900 mg/day nefiracetam for 12 weeks
  instrument: Apathy Scale
  magnitude: No significant between-group difference; P > .14.
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Very small randomized sample
  description: Only 13 participants were randomized; the authors identify sample size as the main limitation.
  sourceId: reddit-pmid-26915605
- title: Null efficacy result
  description: The trial did not show nefiracetam superiority to placebo for poststroke apathy.
  sourceId: reddit-pmid-26915605
```

## Claims

```yaml
- id: reddit-claim-nefiracetam-26915605-0
  assertion: Nefiracetam 900 mg/day did not significantly improve poststroke apathy versus placebo over 12 weeks in a 13-person randomized trial.
  relation: no-difference
  participants:
  - entityId: substance:nefiracetam
    role: intervention
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Patients 8–36 weeks after stroke; 13 randomized.
  sourceIds:
  - reddit-pmid-26915605
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Very small trial; no full-text safety review.
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
  url: https://en.wikipedia.org/wiki/Nefiracetam
  title: Wikipedia
```

## References

```yaml
- id: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43ed-73e7-8a69-12a62ccbc3d9
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-26915605
  title: A Randomized, Placebo-Controlled, Double-Blind Efficacy Study of Nefiracetam to Treat Poststroke Apathy.
  authors: Sergio E Starkstein, Simone Brockman, Katherine K Hatch, David G Bruce, Osvaldo P Almeida, Wendy A Davis, Robert G Robinson
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26915605/
  kind: PubMed publication
  insight: 'BACKGROUND: To evaluate the efficacy of treatment with nefiracetam compared to placebo in poststroke apathy.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26915605'
  doi: 10.1016/j.jstrokecerebrovasdis.2016.01.032
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
