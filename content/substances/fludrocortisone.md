---
slug: fludrocortisone
name: Fludrocortisone
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
  context: The linked memory trial reports no pharmacokinetic sampling or elimination estimate.
  sourceId: reddit-pmid-25442112
  observationId: fludrocortisone-pk-unestablished
kinetics:
  onset: The abstract reports acute memory testing after a single dose but not a pharmacokinetic onset time.
  peak: No plasma peak concentration was measured in the memory trial.
  duration: The trial did not report a pharmacodynamic or elimination duration.
  bioavailability: Absolute oral bioavailability was not measured.
  metabolism: The abstract did not report metabolism.
  sourceId: reddit-pmid-25442112
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

Fludrocortisone is supported by one PubMed randomized crossover study in 31 young and 22 elderly healthy adults. A single 0.4 mg dose improved visuospatial memory and digit-span forward performance versus placebo across age groups; this acute result does not establish a general cognitive-enhancement or safety protocol. The linked 2017 thesis remains an unverified discovery lead.

## Description

The cited study tests mineralocorticoid-receptor (MR) stimulation with fludrocortisone. It measured verbal, visuospatial, and working memory after fludrocortisone or placebo at least three days apart. The abstract reports no pharmacokinetic measurements or safety outcomes, so those fields remain unpopulated.

## Evidence note

PubMed abstract PMID 25442112 was retrieved and used below. The 2017 dissertation link in the Reddit index has no PubMed identifier and was not independently reviewed. PubMed copyright status did not permit automated full-text retrieval for PMID 25442112, so detailed methods, adverse events, and funding/conflict disclosures remain unreviewed.

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
  sourceId: reddit-pmid-25442112
```
## Pharmacokinetics

```yaml
- id: fludrocortisone-pk-unestablished
  analyte: Fludrocortisone
  route: Clinical study dose
  formulation: Study formulation not described in abstract
  population: 53 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: PMID 25442112 reports memory outcomes after a single 0.4 mg dose but no pharmacokinetic sampling or elimination estimate.
  sourceId: reddit-pmid-25442112
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
- id: reddit-fludrocortisone-visuospatial-memory-25442112
  conceptId: memory
  name: Visuospatial memory
  direction: Increased
  evidence: Human research
  description: Fludrocortisone improved Rey/Taylor complex-figure visuospatial memory versus placebo across age groups (treatment effect F=5.0, p=0.03).
  sourceId: reddit-pmid-25442112
  population: 31 young and 22 elderly healthy adults
  exposure: 0.4 mg fludrocortisone
  instrument: Rey/Taylor complex figure test
  magnitude: F=5.0, p=0.03
  reportType: measured-assessment
- id: reddit-fludrocortisone-working-memory-25442112
  conceptId: memory
  name: Short-term and working memory
  direction: Increased
  evidence: Human research
  description: Digit-span forward performance was better after fludrocortisone than placebo across groups (treatment effect F=4.2, p=0.05); digit-span backward showed the expected age-group difference but not a reported treatment effect.
  sourceId: reddit-pmid-25442112
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
  sourceId: reddit-pmid-25442112
```

## Cautions

```yaml
- title: Acute healthy-volunteer evidence only
  description: PMID 25442112 tested one 0.4 mg dose in healthy adults and does not establish long-term cognitive benefit, pharmacokinetics, adverse-event rates, or suitability for self-directed use.
  sourceId: reddit-pmid-25442112
- title: Thesis link not independently verified
  description: The Reddit-linked 2017 dissertation has no PubMed abstract in this corpus pass; its spatial-learning findings remain unreviewed.
  sourceId: reddit-link-26452a626732
```

## Claims

```yaml
- id: reddit-claim-fludrocortisone-25442112
  assertion: In 53 healthy adults, a single 0.4 mg fludrocortisone dose improved visuospatial memory and digit-span forward performance versus placebo across young and elderly groups.
  relation: associated-with
  participants:
  - entityId: substance:fludrocortisone
    role: intervention or exposure
  - entityId: tag:memory
    role: reported endpoint
  context: Randomized double-blind within-subject crossover; conditions were at least three days apart.
  sourceIds:
  - reddit-pmid-25442112
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

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Fludrocortisone
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-fludrocortisone
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-25442112
  title: Stimulation of the mineralocorticoid receptor improves memory in young and elderly healthy individuals.
  authors: Kim Hinkelmann, Katja Wingenfeld, Linn K Kuehl, Juliane Fleischer, Isabella Heuser, Klaus Wiedemann, Christian Otte
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25442112/
  kind: PubMed publication
  insight: In 53 healthy adults, a single 0.4 mg fludrocortisone dose improved visuospatial memory and digit-span forward performance versus placebo across age groups.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '25442112'
  doi: 10.1016/j.neurobiolaging.2014.09.008
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-26452a626732
  title: Effects of mineralocorticoid receptor stimulation on spatial learning and spatial memory in healthy young adults. (2017)
  authors: Not established
  year: 2017
  url: https://www.diss.fu-berlin.de/diss/receive/FUDISS_thesis_000000103950
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
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
