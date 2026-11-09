---
slug: s-adenosyl-l-methionine
name: S-adenosyl-L-methionine
subtitle: Amino acid and derivative
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Amino acid and derivative
tags:
  - depression-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-12420702
  observationId: s-adenosyl-l-methionine-pk-12420702
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-12420702
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

S-adenosyl-L-methionine, or SAMe, participates in methylation reactions. Research explores mood and cognitive function.

## Description

S-adenosyl-L-methionine, or SAMe, participates in methylation reactions. Research explores mood and cognitive function.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 12420702 study exposure: 1600 mg"
  amount: 1600 mg
  quantity: 1600
  quantityMax: null
  unit: mg
  ingredient: S-adenosyl-L-methionine
  formulation: Study formulation as stated in the abstract
  route: oral
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: Population not specified in the returned PubMed abstract.
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating depression, although some individuals may require higher doses
  sourceId: pubmed-12420702
```

## Pharmacokinetics

```yaml
- id: s-adenosyl-l-methionine-pk-12420702
  analyte: S-adenosyl-L-methionine
  route: oral
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Derived from the amino acid L-methionine through a metabolic pathway called the one-carbon cycle, SAMe has been postulated to have antidepressant properties.
  sourceId: pubmed-12420702
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
- id: research-s-adenosyl-l-methionine-depression-severity-12420702
  conceptId: depression-severity
  name: Depression Severity
  direction: Variable
  evidence: Human research
  description: Despite this growing popularity, there is limited evidence for the effectiveness of many of these natural treatments. A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating depression, although some individuals may require higher doses. SAMe may also protect against the deleterious effects of Alzheimer disease.
  sourceId: pubmed-12420702
  population: Population not specified in the returned PubMed abstract.
  exposure: A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating depression, although some individuals may require higher doses.
  instrument: null
  magnitude: Despite this growing popularity, there is limited evidence for the effectiveness of many of these natural treatments. A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating dep
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 12420702)
  description: SAMe is a methyl donor and is involved in the synthesis of various neurotransmitters in the brain.
  sourceId: pubmed-12420702
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 12420702)
  description: SAMe is well tolerated and relatively free of adverse effects, although some cases of mania have been reported in bipolar patients.
  sourceId: pubmed-12420702
```

## Claims

```yaml
- id: research-claim-s-adenosyl-l-methionine-12420702
  assertion: Despite this growing popularity, there is limited evidence for the effectiveness of many of these natural treatments. A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating depression, although some individuals may require higher doses. SAMe may also protect against the deleterious effects of Alzheimer disease.
  relation: associated-with
  participants:
    - entityId: substance:s-adenosyl-l-methionine
      role: intervention or exposure
    - entityId: tag:depression-severity
      role: reported endpoint
  context: PMID 12420702 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-12420702
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
- id: pubmed-12420702
  title: "Role of S-adenosyl-L-methionine in the treatment of depression: a review of the evidence."
  authors: David Mischoulon, Maurizio Fava
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12420702/
  kind: PubMed publication
  insight: Despite this growing popularity, there is limited evidence for the effectiveness of many of these natural treatments. A small number of clinical trials with parenteral or oral SAMe have shown that, at doses of 200-1600 mg/d, SAMe is superior to placebo and is as effective as tricyclic antidepressants in alleviating depression, although some individuals may require higher doses. SAMe may also protect against the deleterious effects of Alzheimer disease.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "12420702"
  doi: 10.1093/ajcn/76/5.1158S
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
