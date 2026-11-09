---
slug: beetroot
name: Beetroot
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - cerebral-blood-flow
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-26037632
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-26037632
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

Beetroot contains nitrate and plant pigments. Studies explore blood-flow responses and cognitive performance.

## Description

In 40 healthy adults, 450 mL beetroot juice containing approximately 5.5 mmol nitrate was compared with placebo. After a 90-minute absorption period, nitrate changed the frontal hemodynamic response during cognitive tasks and improved serial-3s subtraction performance.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Beetroot juice nitrate crossover study (PMID 26037632)
  amount: 450 mL juice; approximately 5.5 mmol nitrate
  quantity: 5.5
  quantityMax: null
  unit: mmol nitrate
  ingredient: Dietary nitrate from beetroot juice
  formulation: Beetroot juice
  route: Oral
  frequency: Single dose
  duration: 90-minute absorption period before testing
  population: 40 healthy adults
  purpose: Cerebral blood flow and cognition research exposure
  sourceCategory: research
  note: Trial exposure; not a general dosing recommendation.
  sourceId: pubmed-26037632
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
- id: beetroot-cbf-26037632
  conceptId: cerebral-blood-flow
  name: Frontal cerebral blood-flow response
  direction: Variable
  evidence: Human research
  description: Beetroot-derived nitrate altered the frontal hemodynamic response during cognitive-task performance, with an early increase followed by lower responses during the least demanding task.
  sourceId: pubmed-26037632
  population: 40 healthy adults
  exposure: 450 mL beetroot juice (~5.5 mmol nitrate), single dose
  instrument: Near-infrared spectroscopy of oxygenated/deoxygenated hemoglobin
  magnitude: Time- and task-dependent modulation; numeric effect not reported in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: beetroot-serial-subtraction-26037632
  conceptId: cognitive-performance
  name: Serial-3s subtraction
  direction: Increased
  evidence: Human research
  description: Single-dose dietary nitrate improved performance on the serial-3s subtraction task after a 90-minute absorption period.
  sourceId: pubmed-26037632
  population: 40 healthy adults
  exposure: 450 mL beetroot juice containing ~5.5 mmol nitrate
  instrument: Serial-3s subtraction task
  magnitude: Improvement reported; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Nitrate–nitrite–nitric oxide pathway
  description: Dietary nitrate is reduced endogenously to nitrite and nitric oxide; plasma nitrate-to-nitrite bioconversion was confirmed in the study.
  sourceId: pubmed-26037632
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: beetroot-claim-cognition-26037632
  assertion: A single nitrate-rich beetroot juice dose improved serial-3s subtraction and modulated frontal hemodynamics in healthy adults.
  relation: associated-with
  participants:
    - entityId: substance:beetroot
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Randomized placebo-controlled human study.
  sourceIds:
    - pubmed-26037632
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small single-dose study; chronic effects were not assessed.
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
- id: pubmed-26037632
  title: "Dietary nitrate modulates cerebral blood flow parameters and cognitive performance in humans: A double-blind, placebo-controlled, crossover investigation."
  authors: Emma L Wightman, Crystal F Haskell-Ramsay, Kevin G Thompson, Jamie R Blackwell, Paul G Winyard, Joanne Forster, Andrew M Jones, David O Kennedy
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26037632/
  kind: PubMed publication
  insight: Nitrate derived from vegetables is consumed as part of a normal diet and is reduced endogenously via nitrite to nitric oxide.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26037632"
  doi: 10.1016/j.physbeh.2015.05.035
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Nitrate
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/nitrate
  title: Examine.com
```
