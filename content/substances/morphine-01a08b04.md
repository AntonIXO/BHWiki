---
slug: morphine-01a08b04
name: Morphine
subtitle: Identity record
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags:
  - alertness-response
  - episodic-memory
  - attention
  - opioid
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2f89-7849-95d5-bc13a57c7fe0
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f89-7849-95d5-bc13a57c7fe0
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
x-order: 1658
---

## Summary

Morphine is an opioid that acts mainly at mu-opioid receptors. Studies examine pain relief and its effects on the nervous system.

## Description

Morphine is an opioid that acts mainly at mu-opioid receptors. Studies examine pain relief and its effects on the nervous system.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Single-dose cognitive crossover
  amount: 10 or 15 mg morphine sulfate once
  quantity: 10
  quantityMax: 15
  unit: mg
  ingredient: Morphine sulfate
  formulation: Oral morphine sulfate
  route: oral
  frequency: single dose
  duration: acute; assessments to 6 hours
  population: 12 healthy subjects
  purpose: Cognitive and psychomotor effects
  sourceCategory: research
  note: Research exposure; not a safe self-experimentation dose.
  sourceId: pubmed-8582463
- label: Repeated-dose cognitive crossover
  amount: 10 mg morphine sulfate every 4 hours for four doses
  quantity: 10
  quantityMax: 10
  unit: mg per dose
  ingredient: Morphine sulfate
  formulation: Oral morphine sulfate
  route: oral
  frequency: every 4 hours ×4
  duration: one study day
  population: 10 healthy subjects
  purpose: Repeated-dose cognition and psychomotor effects
  sourceCategory: research
  note: Controlled laboratory exposure; not a treatment recommendation.
  sourceId: pubmed-10692620
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
- id: morphine-alertness-8582463
  conceptId: alertness-response
  name: Psychomotor and subjective alertness
  direction: Variable
  evidence: Human research
  description: Morphine effects were less dramatic than lorazepam; critical-flicker threshold was reduced over 6 hours and subjective alertness changes were not significant.
  sourceId: pubmed-8582463
  population: 12 healthy subjects
  exposure: 10 or 15 mg morphine sulfate once
  instrument: Critical flicker fusion and subjective ratings
  magnitude: CFFT reduction over observation period
  reportType: measured-assessment
- id: morphine-memory-8582463
  conceptId: episodic-memory
  name: Delayed memory recall
  direction: Decreased
  evidence: Human research
  description: Single 10 or 15 mg oral morphine doses impaired delayed word recall and picture-recognition sensitivity at 1 hour in 12 healthy subjects.
  sourceId: pubmed-8582463
  population: 12 healthy subjects
  exposure: 10 or 15 mg morphine sulfate once
  instrument: Delayed word recall and picture recognition
  magnitude: Significant at 1 hour
  reportType: measured-assessment
- id: morphine-reaction-10692620
  conceptId: attention
  name: Choice reaction accuracy
  direction: Increased
  evidence: Human research
  description: Four 10 mg oral morphine doses at 4-hour intervals increased choice-reaction accuracy at every assessment in 10 healthy subjects; other effects were sporadic.
  sourceId: pubmed-10692620
  population: 10 healthy subjects
  exposure: 10 mg every 4 hours ×4
  instrument: Choice reaction and vigilance tasks
  magnitude: Accuracy increase; no broad cognitive enhancement established
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Acute opioid cognitive impairment
  description: Single oral morphine doses impaired delayed memory and reduced critical-flicker threshold; repeated-dose findings do not establish safety outside controlled studies.
  sourceId: pubmed-8582463
```

## Claims

```yaml
- id: morphine-claim-memory-8582463
  assertion: Single oral morphine doses of 10–15 mg impaired delayed memory recall at 1 hour in healthy subjects.
  relation: supported-by
  participants:
    - entityId: substance:morphine-01a08b04
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Randomized double-blind four-way crossover study of 12 subjects.
  sourceIds:
    - pubmed-8582463
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute small laboratory study.
- id: morphine-claim-reaction-10692620
  assertion: Repeated 10 mg oral morphine doses increased choice-reaction accuracy in a small healthy-subject crossover study without broad cognitive enhancement.
  relation: associated-with
  participants:
    - entityId: substance:morphine-01a08b04
      role: intervention
    - entityId: tag:attention
      role: outcome
  context: Four doses at 4-hour intervals in 10 healthy subjects.
  sourceIds:
    - pubmed-10692620
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute study; effects varied across tasks.
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
- id: optihealth-substance-01a08b04-2f89-7849-95d5-bc13a57c7fe0
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f89-7849-95d5-bc13a57c7fe0
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-8582463
  title: The cognitive and psychomotor effects of opioid analgesics. II. A randomized controlled trial of single doses of morphine, lorazepam and placebo in healthy subjects.
  authors: G W Hanks, W M O'Neill, P Simpson, K Wesnes
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/8582463/
  kind: PubMed publication
  insight: "Twelve subjects (8 male) took part in a randomised double blind four way crossover design study comparing four treatments: (i) morphine sulphate 10 mg, (ii) morphine sulphate 15 mg, (iii) lorazepam 1 mg (positive control) and (iv) placebo."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "8582463"
  doi: 10.1007/BF00194334
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: pubmed-10692620
  title: "The cognitive and psychomotor effects of morphine in healthy subjects: a randomized controlled trial of repeated (four) oral doses of dextropropoxyphene, morphine, lorazepam and placebo."
  authors: W M O'Neill, G W Hanks, P Simpson, M T Fallon, E Jenkins, K Wesnes
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10692620/
  kind: PubMed publication
  insight: Ten healthy subjects (four male) of mean age 31 years (range 25-40) took part in a randomized double-blind four-way crossover study to examine the cognitive and psychomotor effects of repeated oral doses of dextropropoxyphene and morphine.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "10692620"
  doi: 10.1016/s0304-3959(99)00274-2
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
