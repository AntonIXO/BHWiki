---
slug: amisulpride
name: Amisulpride
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - drowsiness
  - verbal-fluency
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-23131890
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-23131890
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

Amisulpride acts on dopamine receptors. Research explores how dopamine signalling affects learning and cognitive performance.

## Description

The cited study compared single doses of amisulpride, haloperidol, risperidone and aripiprazole in healthy volunteers, assessing cognition, sedation and extrapyramidal symptoms about four hours after dosing.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Healthy-volunteer single dose
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Amisulpride
  formulation: Oral study dose
  route: Oral
  frequency: Single dose
  duration: Assessment ~4 hours post-dose
  population: Healthy volunteers
  purpose: Acute cognitive-effect research
  sourceCategory: research
  note: Single-dose laboratory study; not a therapeutic recommendation.
  sourceId: pubmed-23131890
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
- id: research-amisulpride-sedation-23131890
  conceptId: drowsiness
  name: Sedation
  direction: Variable
  evidence: Human research
  description: The trial measured mental and physical sedation and extrapyramidal symptoms; word-fluency benefit remained after controlling for these factors.
  sourceId: pubmed-23131890
  population: Healthy volunteers
  exposure: Single 400 mg dose
  instrument: Sedation and extrapyramidal assessments
  magnitude: No abstract effect size
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: research-amisulpride-word-fluency-23131890
  conceptId: verbal-fluency
  name: Word fluency
  direction: Increased
  evidence: Human research
  description: Single-dose amisulpride enhanced word-fluency performance versus placebo after controlling for sedation and extrapyramidal symptoms.
  sourceId: pubmed-23131890
  population: Healthy volunteers
  exposure: 400 mg single dose
  instrument: Word fluency test
  magnitude: Significant versus placebo
  reportType: measured-assessment
- id: research-amisulpride-computerized-23131890
  conceptId: verbal-fluency
  name: Computerized neurocognitive tests
  direction: Variable
  evidence: Human research
  description: Some computerized cognitive measures improved in each antipsychotic group, but the authors note these changes may reflect practice effects.
  sourceId: pubmed-23131890
  population: Healthy volunteers
  exposure: Single doses of antipsychotics
  instrument: Computerized neurocognitive battery
  magnitude: Practice effect possible
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Single-dose healthy-volunteer evidence
  description: The study was acute and conducted in healthy volunteers; it does not establish clinical benefit or long-term safety.
  sourceId: pubmed-23131890
- title: Practice-effect concern
  description: Some computerized-test improvements may have resulted from repeated testing rather than drug action.
  sourceId: pubmed-23131890
```

## Claims

```yaml
- id: research-claim-amisulpride-23131890-0
  assertion: A single 400 mg dose improved word fluency versus placebo in healthy volunteers.
  relation: associated-with
  participants:
    - entityId: substance:amisulpride
      role: intervention or exposure
    - entityId: tag:verbal-fluency
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-23131890
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-amisulpride-23131890-1
  assertion: Some computerized-test improvements may reflect practice effects.
  relation: associated-with
  participants:
    - entityId: substance:amisulpride
      role: intervention or exposure
    - entityId: tag:verbal-fluency
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-23131890
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
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
- id: pubmed-23131890
  title: Cognitive effects of a single dose of atypical antipsychotics in healthy volunteers compared with placebo or haloperidol.
  authors: Young-Chul Chung, Tae-Won Park, Jong-Chul Yang, Guang-Biao Huang, Tong Zhao, Keun-Young Oh, Min-Gul Kim
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23131890/
  kind: PubMed publication
  insight: Healthy-volunteer trial found 400 mg single-dose amisulpride improved word fluency after controlling for sedation/extrapyramidal symptoms; other cognitive changes may be practice effects.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "23131890"
  doi: 10.1097/JCP.0b013e318272d10c
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
