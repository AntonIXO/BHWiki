---
slug: binaural-beats
name: Binaural Beats
subtitle: Binaural beats are an auditory effect produced by playing slightly different frequencies in each ear.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Behaviour and protocol
tags:
  - attentional-focusing
  - interference-suppression
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-26612201
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-26612201
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
x-order: 9007199254740991
---

## Summary

Binaural beats are an auditory effect produced by playing slightly different frequencies in each ear. Studies examine attention, mood and brain activity.

## Description

Binaural beats are an auditory effect produced by playing slightly different frequencies in each ear. Studies examine attention, mood and brain activity.

## Evidence note

Study findings and methods are linked to their original publications.

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
  sourceId: pubmed-26612201
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
  sourceId: pubmed-26612201
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
  sourceId: pubmed-26612201
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
  sourceId: pubmed-26029120
```

## Cautions

```yaml
- title: Contradictory evidence and parameter dependence
  description: Reviews emphasize that beat frequency, carrier, duration and task design vary substantially; findings should not be generalized across protocols.
  sourceId: pubmed-26029120
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
    - pubmed-26612201
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
- id: pubmed-26612201
  title: "More attentional focusing through binaural beats: evidence from the global-local task."
  authors: Lorenza S Colzato, Hayley Barone, Roberta Sellaro, Bernhard Hommel
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26612201/
  kind: PubMed publication
  insight: A recent study showed that binaural beats have an impact on the efficiency of allocating attention over time.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26612201"
  doi: 10.1007/s00426-015-0727-0
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26029120
  title: Auditory beat stimulation and its effects on cognition and mood States.
  authors: Leila Chaieb, Elke Caroline Wilpert, Thomas P Reber, Juergen Fell
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26029120/
  kind: PubMed publication
  insight: Auditory beat stimulation may be a promising new tool for the manipulation of cognitive processes and the modulation of mood states.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26029120"
  doi: 10.3389/fpsyt.2015.00070
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-fa0932ffc304
  title: The impact of binaural beats on creativity
  authors: Not established
  year: 2026
  url: https://www.frontiersin.org/Human_Neuroscience/10.3389/fnhum.2013.00786/full
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-204c14d60c09
  title: Gnaural
  authors: Not established
  year: 2026
  url: https://gnaural.sourceforge.net/
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
