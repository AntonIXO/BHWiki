---
slug: fludrocortisone
name: Fludrocortisone
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: The linked memory trial reports no pharmacokinetic sampling or elimination estimate.
  sourceId: pubmed-25442112
kinetics:
  onset: The abstract reports acute memory testing after a single dose but not a pharmacokinetic onset time.
  peak: No plasma peak concentration was measured in the memory trial.
  duration: The trial did not report a pharmacodynamic or elimination duration.
  bioavailability: Absolute oral bioavailability was not measured.
  metabolism: The abstract did not report metabolism.
  sourceId: pubmed-25442112
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

Fludrocortisone activates mineralocorticoid receptors. The linked research explores their role in stress responses and memory.

## Description

The cited study tests mineralocorticoid-receptor (MR) stimulation with fludrocortisone. It measured verbal, visuospatial, and working memory after fludrocortisone or placebo at least three days apart. The abstract reports no pharmacokinetic measurements or safety outcomes, so those fields remain unpopulated.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Mineralocorticoid-receptor memory crossover
  amount: 0.4 mg
  quantity: 0.4
  quantityMax: null
  unit: mg
  ingredient: Fludrocortisone
  formulation: Study formulation (details not stated in abstract)
  route: Study administration route not stated in abstract
  frequency: Single dose per condition
  duration: Conditions separated by at least 3 days
  population: 31 young adults (mean age 25.4 ± 4.6 years) and 22 elderly adults (mean age 63.2 ± 8.2 years)
  purpose: Verbal, visuospatial, and working memory
  sourceCategory: research
  note: Randomized, double-blind, within-subject crossover with placebo.
  sourceId: pubmed-25442112
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
- id: research-fludrocortisone-visuospatial-memory-25442112
  conceptId: memory
  name: Visuospatial memory
  direction: Increased
  evidence: Human research
  description: Fludrocortisone improved Rey/Taylor complex-figure visuospatial memory versus placebo across age groups (treatment effect F=5.0, p=0.03).
  sourceId: pubmed-25442112
  population: 31 young and 22 elderly healthy adults
  exposure: 0.4 mg fludrocortisone
  instrument: Rey/Taylor complex figure test
  magnitude: F=5.0, p=0.03
  reportType: measured-assessment
- id: research-fludrocortisone-working-memory-25442112
  conceptId: memory
  name: Short-term and working memory
  direction: Increased
  evidence: Human research
  description: Digit-span forward performance was better after fludrocortisone than placebo across groups (treatment effect F=4.2, p=0.05); digit-span backward showed the expected age-group difference but not a reported treatment effect.
  sourceId: pubmed-25442112
  population: 31 young and 22 elderly healthy adults
  exposure: 0.4 mg fludrocortisone
  instrument: Digit-span task
  magnitude: F=4.2, p=0.05 for digit-span forward
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Mineralocorticoid-receptor stimulation
  description: Fludrocortisone is an MR agonist. The study frames memory effects within glucocorticoid and mineralocorticoid receptor activity in the brain and reports better visuospatial and short-term memory after MR stimulation.
  sourceId: pubmed-25442112
```

## Cautions

```yaml
- title: Acute healthy-volunteer evidence only
  description: PMID 25442112 tested one 0.4 mg dose in healthy adults and does not establish long-term cognitive benefit, pharmacokinetics, adverse-event rates, or suitability for self-directed use.
  sourceId: pubmed-25442112
- title: Thesis link not independently verified
  description: The research-linked 2017 dissertation has no PubMed abstract in this corpus pass; its spatial-learning findings remain unreviewed.
  sourceId: publication-link-26452a626732
```

## Claims

```yaml
- id: research-claim-fludrocortisone-25442112
  assertion: In 53 healthy adults, a single 0.4 mg fludrocortisone dose improved visuospatial memory and digit-span forward performance versus placebo across young and elderly groups.
  relation: associated-with
  participants:
    - entityId: substance:fludrocortisone
      role: intervention or exposure
    - entityId: tag:memory
      role: reported endpoint
  context: Randomized double-blind within-subject crossover; conditions were at least three days apart.
  sourceIds:
    - pubmed-25442112
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single acute study; no long-term efficacy or safety inference.
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
- id: pubmed-25442112
  title: Stimulation of the mineralocorticoid receptor improves memory in young and elderly healthy individuals.
  authors: Kim Hinkelmann, Katja Wingenfeld, Linn K Kuehl, Juliane Fleischer, Isabella Heuser, Klaus Wiedemann, Christian Otte
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25442112/
  kind: PubMed publication
  insight: In 53 healthy adults, a single 0.4 mg fludrocortisone dose improved visuospatial memory and digit-span forward performance versus placebo across age groups.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25442112"
  doi: 10.1016/j.neurobiolaging.2014.09.008
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-26452a626732
  title: Effects of mineralocorticoid receptor stimulation on spatial learning and spatial memory in healthy young adults. (2017)
  authors: Not established
  year: 2017
  url: https://www.diss.fu-berlin.de/diss/receive/FUDISS_thesis_000000103950
  kind: research index publication link
  insight: The research index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
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
  url: https://en.wikipedia.org/wiki/Fludrocortisone
  title: Wikipedia
```
