---
slug: binaural-beats
name: Binaural Beats
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
  sourceId: reddit-index-binaural-beats
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-binaural-beats
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

Binaural-beat evidence is parameter- and task-dependent: a 40 Hz protocol changed attentional focusing style but not interference suppression, while reviews describe contradictory cognition and mood findings.

## Description

In a healthy-adult study, 40 Hz binaural beats were played for 3 minutes before and during a global-local task. The beats did not change the congruency effect but reduced the global-precedence effect, consistent with a narrower attentional spotlight. A review of auditory beat stimulation emphasizes contradictory outcomes and the importance of stimulation parameters.

## Evidence note

Reviewed PMIDs 26612201 and 26029120 and retrieved PMC full text for both (PMC5233742 and PMC4428073). The Reddit-linked Frontiers creativity article remains a non-PubMed lead and was not independently abstract-reviewed. No pharmacokinetic section is applicable to an auditory stimulus.

## Doses

```yaml
- label: Gamma binaural-beat protocol (PMID 26612201)
  amount: 40 Hz beat frequency
  quantity: 40
  quantityMax: null
  unit: Hz
  ingredient: Binaural auditory beat stimulus
  formulation: 340 Hz carrier tone with 40 Hz binaural beat; control was constant 340 Hz tone
  route: Auditory
  frequency: 3 minutes before and during task
  duration: Acute single session
  population: Healthy adults
  purpose: Attentional-focusing research exposure
  sourceCategory: research
  note: Parameter description, not a pharmacologic dose.
  sourceId: reddit-pmid-26612201
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
- id: binaural-attentional-focusing-26612201
  conceptId: attentional-focusing
  name: Attentional focusing
  direction: Increased
  evidence: Human research
  description: Gamma-frequency binaural beats reduced the global-precedence effect, indicating a bias toward a narrower attentional spotlight; the congruency effect was unchanged.
  sourceId: reddit-pmid-26612201
  population: Healthy adults
  exposure: 40 Hz binaural beats for 3 minutes before and during task
  instrument: Global-local task
  magnitude: Considerable reduction in global-precedence effect; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: binaural-congruency-effect-26612201
  conceptId: interference-suppression
  name: Congruency effect
  direction: Variable
  evidence: Human research
  description: Binaural beats did not alter the congruency effect, interpreted as failure to suppress task-irrelevant information.
  sourceId: reddit-pmid-26612201
  population: Healthy adults
  exposure: 40 Hz binaural beats versus constant 340 Hz tone
  instrument: Global-local task
  magnitude: No significant change reported
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Auditory beat stimulation and attentional processing
  description: The review notes that binaural and monaural beats can alter auditory steady-state responses and functional connectivity, but published cognition and mood outcomes are contradictory and parameter-sensitive.
  sourceId: reddit-pmid-26029120
```

## Cautions

```yaml
- title: Contradictory evidence and parameter dependence
  description: Reviews emphasize that beat frequency, carrier, duration and task design vary substantially; findings should not be generalized across protocols.
  sourceId: reddit-pmid-26029120
```

## Claims

```yaml
- id: binaural-claim-attentional-style-26612201
  assertion: A 40 Hz binaural-beat protocol biased attentional processing toward a narrower spotlight in one healthy-adult task study.
  relation: associated-with
  participants:
  - entityId: substance:binaural-beats
    role: auditory exposure
  - entityId: tag:attentional-focusing
    role: reported endpoint
  context: 3-minute pre-task and during-task stimulation; constant 340 Hz tone control.
  sourceIds:
  - reddit-pmid-26612201
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single acute protocol; review-level evidence remains contradictory.
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
- id: reddit-index-binaural-beats
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-26612201
  title: 'More attentional focusing through binaural beats: evidence from the global-local task.'
  authors: Lorenza S Colzato, Hayley Barone, Roberta Sellaro, Bernhard Hommel
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26612201/
  kind: PubMed publication
  insight: A recent study showed that binaural beats have an impact on the efficiency of allocating attention over time.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26612201'
  doi: 10.1007/s00426-015-0727-0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26029120
  title: Auditory beat stimulation and its effects on cognition and mood States.
  authors: Leila Chaieb, Elke Caroline Wilpert, Thomas P Reber, Juergen Fell
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26029120/
  kind: PubMed publication
  insight: Auditory beat stimulation may be a promising new tool for the manipulation of cognitive processes and the modulation of mood states.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26029120'
  doi: 10.3389/fpsyt.2015.00070
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-fa0932ffc304
  title: The impact of binaural beats on creativity
  authors: Not established
  year: 2026
  url: https://www.frontiersin.org/Human_Neuroscience/10.3389/fnhum.2013.00786/full
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-204c14d60c09
  title: Gnaural
  authors: Not established
  year: 2026
  url: https://gnaural.sourceforge.net/
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
