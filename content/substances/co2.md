---
slug: co2
name: CO2
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
  sourceId: reddit-index-co2
  observationId: co2-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-co2
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

Experimental inhalation of 7.5% carbon dioxide increases anxiety and autonomic arousal and shifts attention toward threat; it is not a nootropic intervention.

## Description

Two controlled human studies inhaled 7.5% CO₂ for 20 minutes. CO₂ raised heart rate, blood pressure, panic/anxiety ratings and threat-oriented eye movements; simple-task attention was focused while complex-task central demand increased.

## Evidence note

The evidence consists of healthy-volunteer challenge studies (8 participants in tracking and 12 in target identification; a separate threat-processing cohort). No therapeutic dose, PK or durable cognitive benefit was established.

## Doses

```yaml
- label: CO₂ challenge
  amount: 7.5% CO₂ inhalation for 20 minutes
  quantity: 7.5
  quantityMax: null
  unit: '% v/v'
  ingredient: Carbon dioxide
  formulation: 7.5% CO₂/21% O₂/71.5% N₂ mixture
  route: Inhalation
  frequency: Single 20-minute challenge
  duration: 20 minutes
  population: Healthy volunteers (8 in tracking; 12 in complex target task)
  purpose: Anxiety, autonomic and task-performance challenge
  sourceCategory: research
  note: Experimental challenge concentration; not a safe self-use dose.
  sourceId: reddit-pmid-21890588
```

## Pharmacokinetics

```yaml
- id: co2-reddit-pk-unestablished
  analyte: CO2
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
  sourceId: reddit-index-co2
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: co2-anxiety-21890588
  conceptId: anxiety
  name: Anxiety
  direction: Increased
  evidence: Human research
  description: 7.5% CO₂ inhalation increased panic, anxiety, fear and tension and reduced relaxation/happiness ratings.
  sourceId: reddit-pmid-21890588
  population: Healthy volunteers
  exposure: 20-minute inhalation of 7.5% CO₂ mixture
  instrument: Mood and workload ratings
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: co2-attention-21890588
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: CO₂ focused attention during a simple tracking task but increased central demand during a complex target-identification task.
  sourceId: reddit-pmid-21890588
  population: Healthy volunteers
  exposure: 20-minute 7.5% CO₂ inhalation
  instrument: Tracking/reaction-time and target-identification tasks
  magnitude: null
  reportType: measured-assessment
- id: co2-threat-21490591
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Increased
  evidence: Human research
  description: CO₂ increased anxiety, autonomic arousal and erroneous eye movements toward threat on antisaccade trials.
  sourceId: reddit-pmid-21490591
  population: Healthy volunteers
  exposure: 7.5% CO₂ inhalation versus air
  instrument: Emotional antisaccade task
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Threat-network activation
  description: CO₂ challenge increased threat-oriented eye movements and autonomic arousal, consistent with activation of a distributed fear network.
  sourceId: reddit-pmid-21490591
```

## Cautions

```yaml
- title: High-concentration inhalation is anxiogenic
  description: 7.5% CO₂ produced panic/anxiety and cardiovascular changes in healthy volunteers; the challenge should not be interpreted as cognitive enhancement.
  sourceId: reddit-pmid-21890588
```

## Claims

```yaml
- id: co2-claim-21890588
  assertion: Twenty minutes of 7.5% CO₂ inhalation increased anxiety and autonomic arousal and altered task demand in healthy volunteers.
  relation: associated-with
  participants:
  - entityId: substance:co2
    role: experimental exposure
  - entityId: tag:anxiety-symptom-severity
    role: measured endpoint
  context: Healthy-volunteer challenge study.
  sourceIds:
  - reddit-pmid-21890588
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Experimental high-concentration inhalation; no therapeutic use.
- id: co2-claim-21490591
  assertion: 7.5% CO₂ inhalation increased threat-oriented eye movements and anxiety in healthy volunteers.
  relation: associated-with
  participants:
  - entityId: substance:co2
    role: experimental exposure
  - entityId: tag:anxiety-symptom-severity
    role: measured endpoint
  context: Emotional antisaccade challenge study.
  sourceIds:
  - reddit-pmid-21490591
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute challenge only.
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
- id: reddit-index-co2
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-b47819593f04
  title: The effects of 7.5% carbon dioxide inhalation on task performance in healthy volunteers
  authors: Not established
  year: 2012
  url: https://jop.sagepub.com/content/26/4/487.short
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21890588
  title: The effects of 7.5% carbon dioxide inhalation on task performance in healthy volunteers.
  authors: Alison Diaper, David J Nutt, Marcus R Munafò, Joanna L White, Eric W Farmer, Jayne E Bailey
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/21890588/
  kind: PubMed publication
  insight: 20-minute 7.5% CO₂ inhalation increased anxiety, cardiovascular measures and altered task demand in healthy volunteers.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: '21890588'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  doi: 10.1177/0269881111415729
- id: reddit-pmid-21490591
  title: Inhalation of 7.5% carbon dioxide increases threat processing in humans.
  authors: Matthew Garner, Angela Attwood, David S Baldwin, Alexandra James, Marcus R Munafò
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21490591/
  kind: PubMed publication
  insight: 7.5% CO₂ increased anxiety, autonomic arousal and threat-oriented eye movements.
  limitation: PMC link is available, but the full-text connector returned an internal error in this pass; abstract retrieved. Funding and conflicts were not assessed.
  pmid: '21490591'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  doi: 10.1038/npp.2011.15
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3138667/
```

## Legal

```yaml
[]
```
