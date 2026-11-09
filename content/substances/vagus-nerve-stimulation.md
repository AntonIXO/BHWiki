---
slug: vagus-nerve-stimulation
name: Vagus Nerve Stimulation
subtitle: Vagus nerve stimulation uses electrical pulses to influence brain activity through the vagus nerve.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Brain stimulation
tags:
  - seizure
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-28492363
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-28492363
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

Vagus nerve stimulation uses electrical pulses to influence brain activity through the vagus nerve. Studies examine memory and learning.

## Description

Vagus nerve stimulation uses electrical pulses to influence brain activity through the vagus nerve. Studies examine memory and learning.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
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
- id: research-vagus-nerve-stimulation-seizure-28492363
  conceptId: seizure
  name: Seizure
  direction: Variable
  evidence: Human research
  description: We found that vagus nerve stimulation improved working memory performance as seen in reduced errors on a subtask that relied on working memory, odds ratio (OR) = 0.63 (95% confidence interval, CI [0.47, 0.85]) and increased N1 amplitude, F(1, 15) = 10.17, p = .006. This is the first study to show immediate improvement in working memory performance in humans with clinically relevant vagus nerve stimulation.
  sourceId: pubmed-28492363
  population: Twenty patients (12 male and 8 female
  exposure: While the impact of this treatment on seizures has been established, its impact on human cognition remains equivocal.
  instrument: reaction time, F(1, 16) = 8
  magnitude: "We found that vagus nerve stimulation improved working memory performance as seen in reduced errors on a subtask that relied on working memory, odds ratio (OR) = 0.63 (95% confidence interval, CI [0.47, 0.85]) and increased N1 amplitude, F(1, 15) = 10.17, p = .006. This is the first study to show immediate improvement "
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-vagus-nerve-stimulation-28492363
  assertion: We found that vagus nerve stimulation improved working memory performance as seen in reduced errors on a subtask that relied on working memory, odds ratio (OR) = 0.63 (95% confidence interval, CI [0.47, 0.85]) and increased N1 amplitude, F(1, 15) = 10.17, p = .006. This is the first study to show immediate improvement in working memory performance in humans with clinically relevant vagus nerve stimulation.
  relation: associated-with
  participants:
    - entityId: substance:vagus-nerve-stimulation
      role: intervention or exposure
    - entityId: tag:seizure
      role: reported endpoint
  context: PMID 28492363 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-28492363
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
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
- id: pubmed-28492363
  title: Vagus nerve stimulation improves working memory performance.
  authors: Lihua Sun, Jari Peräkylä, Katri Holm, Joonas Haapasalo, Kai Lehtimäki, Keith H Ogawa, Jukka Peltola, Kaisa M Hartikainen
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28492363/
  kind: PubMed publication
  insight: We found that vagus nerve stimulation improved working memory performance as seen in reduced errors on a subtask that relied on working memory, odds ratio (OR) = 0.63 (95% confidence interval, CI [0.47, 0.85]) and increased N1 amplitude, F(1, 15) = 10.17, p = .006. This is the first study to show immediate improvement in working memory performance in humans with clinically relevant vagus nerve stimulation.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "28492363"
  doi: 10.1080/13803395.2017.1285869
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
