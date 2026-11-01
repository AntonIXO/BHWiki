---
slug: chloripram
name: Chloripram
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
  sourceId: reddit-index-chloripram
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-chloripram
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

Chlorbipram (the linked compound) is an investigational PDE4 inhibitor with antidepressant-like and anti-amnestic effects in animals; no human efficacy or safe dose is established.

## Description

The linked publication tested chlorbipram in mice, rats and beagle dogs. Single doses reduced immobility in forced-swim/tail-suspension tests, attenuated scopolamine-induced water-maze deficits, and caused less emesis than rolipram in dogs. These are preclinical findings.

## Evidence note

PMID 24113523 reports chlorbipram doses of 0.075–0.6 mg/kg in mice, 0.5–1.5 mg/kg in rats and up to 1.0 mg/kg orally in dogs. No human trial, human PK or clinical safety profile was identified.

## Doses

```yaml
- label: Mouse antidepressant-like tests
  amount: 0.075–0.6 mg/kg
  quantity: 0.075
  quantityMax: 0.6
  unit: mg/kg
  ingredient: Chlorbipram
  formulation: Experimental compound
  route: Not specified in abstract
  frequency: Single administration
  duration: Acute
  population: Kunming mice
  purpose: Forced-swim and tail-suspension behavior
  sourceCategory: research
  note: Animal dose; not a human dose.
  sourceId: reddit-pmid-24113523
- label: Rat scopolamine-cognition tests
  amount: 0.5–1.5 mg/kg
  quantity: 0.5
  quantityMax: 1.5
  unit: mg/kg
  ingredient: Chlorbipram
  formulation: Experimental compound
  route: Not specified in abstract
  frequency: Single administration
  duration: Acute
  population: Sprague-Dawley rats
  purpose: Morris water-maze cognition
  sourceCategory: research
  note: Animal dose; not a human dose.
  sourceId: reddit-pmid-24113523
- label: Dog emesis safety test
  amount: 0.5–1.0 mg/kg
  quantity: 0.5
  quantityMax: 1.0
  unit: mg/kg
  ingredient: Chlorbipram
  formulation: Oral experimental compound
  route: Oral
  frequency: Single administration
  duration: 120-minute observation
  population: Beagle dogs
  purpose: Emesis comparison with rolipram
  sourceCategory: research
  note: No emesis observed up to 1 mg/kg in this small animal test.
  sourceId: reddit-pmid-24113523
```

## Pharmacokinetics

```yaml
[]
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
- id: chloripram-cognitive-24113523
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: Chlorbipram attenuated scopolamine-induced cognitive dysfunction in rat Morris water-maze testing.
  sourceId: reddit-pmid-24113523
  population: Sprague-Dawley rats
  exposure: 0.5–1.5 mg/kg chlorbipram after scopolamine challenge
  instrument: Morris water maze
  magnitude: null
  reportType: measured-assessment
- id: chloripram-depression-24113523
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Limited research
  description: Single chlorbipram doses reduced immobility in mouse forced-swim and tail-suspension tests.
  sourceId: reddit-pmid-24113523
  population: Kunming mice
  exposure: 0.075–0.6 mg/kg chlorbipram
  instrument: Forced-swim and tail-suspension tests
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: PDE4 inhibition
  description: The study characterizes chlorbipram as a novel PDE4 inhibitor; PDE4 inhibition is the proposed pharmacological mechanism underlying the behavioral findings.
  sourceId: reddit-pmid-24113523
```

## Cautions

```yaml
- title: Preclinical emesis signal
  description: Rolipram caused emesis in all dogs at 0.5 mg/kg, while chlorbipram did not induce emesis during 120 minutes up to 1.0 mg/kg; this does not establish human tolerability.
  sourceId: reddit-pmid-24113523
```

## Claims

```yaml
- id: chloripram-claim-24113523
  assertion: Chlorbipram produced antidepressant-like and anti-amnestic effects in rodent tests and less emesis than rolipram in beagle dogs.
  relation: associated-with
  participants:
  - entityId: substance:chloripram
    role: experimental intervention
  - entityId: tag:cognitive-performance
    role: animal endpoint
  context: Single preclinical publication; no human participants.
  sourceIds:
  - reddit-pmid-24113523
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal models do not establish human efficacy or safety.
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
- id: reddit-index-chloripram
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-24113523
  title: 'Chlorbipram: a novel PDE4 inhibitor with improved safety as a potential antidepressant and cognitive enhancer.'
  authors: Ming-Zi Zhang, Zhong-Zhen Zhou, Xin Yuan, Yu-Fang Cheng, Bing-Tian Bi, Mei-Fang Gong, Yu-Pin Chen, Jiang-Ping Xu
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24113523/
  kind: PubMed publication
  insight: Major depressive disorder is a common, but serious, psychiatric dysfunction that affects 21% of the population worldwide.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '24113523'
  doi: 10.1016/j.ejphar.2013.09.055
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
