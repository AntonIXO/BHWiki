---
slug: cram
name: CRAM
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - focus
  - alertness-response
  - fatigue
  - habituation
  - reaction-time
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-21156078
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-21156078
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

CRAM is a multi-ingredient supplement studied for focus, alertness and reaction time around exercise.

## Description

The study evaluated a blend of α-glycerophosphocholine, choline bitartrate, phosphatidylserine, B vitamins, folic acid, L-tyrosine, caffeine, acetyl-L-carnitine, and naringin. Results apply to this combination and cannot identify an active ingredient.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Acute CRAM serving
  amount: 1.5 g (3 capsules)
  quantity: 1.5
  quantityMax: null
  unit: g
  ingredient: CRAM multi-ingredient blend
  formulation: α-GPC 150 mg; choline bitartrate 125 mg; phosphatidylserine 50 mg; niacin 30 mg; pyridoxine HCl 30 mg; methylcobalamin 0.06 mg; folic acid 4 mg; L-tyrosine 500 mg; anhydrous caffeine 60 mg; acetyl-L-carnitine 500 mg; naringin 20 mg
  route: Oral
  frequency: Once at each acute testing visit
  duration: Acute post-exercise session
  population: 19 physically active college students (17 men, 2 women)
  purpose: Reaction time and subjective alertness/focus after exhaustive exercise
  sourceCategory: research
  sourceId: pubmed-21156078
  note: Dose context was not described in the retrieved abstract.
- label: Four-week CRAM supplementation
  amount: 1.5 g per serving
  quantity: 1.5
  quantityMax: null
  unit: g
  ingredient: CRAM multi-ingredient blend
  formulation: Same blend as acute serving
  route: Oral
  frequency: Daily for 4 weeks, with an acute serving at the follow-up visit
  duration: 4 weeks
  population: 19 physically active college students
  purpose: Prolonged supplementation trial
  sourceCategory: research
  sourceId: pubmed-21156078
  note: Dose context was not described in the retrieved abstract.
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
- id: cram-focus-21156078
  conceptId: focus
  name: Subjective focus
  direction: Variable
  evidence: Limited research
  description: CRAM participants maintained visual-analog focus ratings from pre- to post-exercise at both visits; placebo ratings declined, but no between-group differences were detected.
  sourceId: pubmed-21156078
  population: 19 physically active college students
  exposure: Acute and 4-week CRAM protocols
  instrument: 15-cm visual-analog scale
  reportType: measured-assessment
  magnitude: null
```

## Outcomes

```yaml
- id: cram-alertness-21156078
  conceptId: alertness-response
  name: Subjective alertness
  direction: Decreased
  evidence: Limited research
  description: CRAM alertness did not significantly change acutely at the first visit, declined at the four-week visit, and did not differ from placebo at any time point.
  sourceId: pubmed-21156078
  population: 19 physically active college students
  exposure: Acute and 4-week CRAM protocols
  instrument: 15-cm visual-analog scale
  reportType: measured-assessment
  magnitude: null
- id: cram-fatigue-21156078
  conceptId: fatigue
  name: Subjective fatigue
  direction: Increased
  evidence: Limited research
  description: Fatigue increased after CRAM at both visits; placebo increased only at the four-week visit, with no significant between-group differences.
  sourceId: pubmed-21156078
  population: 19 physically active college students
  exposure: Acute and 4-week CRAM protocols
  instrument: 15-cm visual-analog scale
  reportType: measured-assessment
  magnitude: null
- id: cram-habituation-21156078
  conceptId: habituation
  name: Habituation signal
  direction: Variable
  evidence: Limited research
  description: Both groups showed significant reaction-performance declines after four weeks; the authors considered habituation a possible explanation.
  sourceId: pubmed-21156078
  population: 19 physically active college students
  exposure: Daily CRAM for 4 weeks
  instrument: Makoto reaction test
  reportType: measured-assessment
  magnitude: null
- id: cram-reaction-time-21156078
  conceptId: reaction-time
  name: Reaction time
  direction: Variable
  evidence: Limited research
  description: After the acute serving and exhaustive exercise, CRAM participants maintained reaction-time performance while placebo participants declined; the between-group comparison was not significant.
  sourceId: pubmed-21156078
  population: 19 physically active college students
  exposure: 1.5 g CRAM immediately before testing
  instrument: 4-minute Makoto visual/auditory reaction test
  reportType: measured-assessment
  magnitude: null
```

## Mechanisms

```yaml
- title: Multi-ingredient formulation
  description: The trial cannot separate contributions from 60 mg caffeine, choline donors, phosphatidylserine, tyrosine, acetyl-L-carnitine, vitamins, or naringin.
  sourceId: pubmed-21156078
```

## Cautions

```yaml
- title: Small, blend-specific trial
  description: Only 19 active college students were studied; no single ingredient can be assigned the observed pattern and generalization is limited.
  sourceId: pubmed-21156078
- title: No between-group differences
  description: Within-group maintenance versus decline did not translate into significant CRAM-versus-placebo differences for subjective measures or post-exercise performance.
  sourceId: pubmed-21156078
- title: Manufacturer conflict disclosure
  description: The full text reports that all authors declared no competing interests except one author who was CEO of MRM, the supplement company.
  sourceId: pubmed-21156078
```

## Claims

```yaml
- id: cram-acute-maintenance
  assertion: A single 1.5 g serving of CRAM maintained reaction time and focus after exhaustive exercise in this small trial.
  relation: measured-outcome
  participants:
    - entityId: substance:cram
      role: intervention
    - entityId: tag:reaction-time
      role: endpoint
  context: Within-group pre/post result; between-group comparisons were not significant.
  sourceIds:
    - pubmed-21156078
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small proprietary-blend study.
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
- id: pubmed-21156078
  title: The effects of acute and prolonged CRAM supplementation on reaction time and subjective measures of focus and alertness in healthy college students.
  authors: Jay R Hoffman; Nicholas A Ratamess; Adam Gonzalez; Noah A Beller; Mattan W Hoffman; Mark Olson; Martin Purpura; Ralf Jäger
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/21156078/
  kind: PubMed/PMC publication
  insight: Small randomized trial of a defined 1.5 g blend acutely and over four weeks; full text reports no significant between-group differences and one author was CEO of MRM.
  limitation: Single small study; findings are blend- and exercise-context specific.
  pmid: "21156078"
  pmcid: PMC3009695
  doi: 10.1186/1550-2783-7-39
  funding: Not stated in abstract; competing-interest disclosure inspected in full text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: One author (MO) was CEO of MRM; other listed authors declared no competing interests.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
