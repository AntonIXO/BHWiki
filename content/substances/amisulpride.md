---
slug: amisulpride
name: Amisulpride
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
  sourceId: reddit-index-amisulpride
  observationId: amisulpride-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-amisulpride
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

A single 400 mg dose of amisulpride improved word-fluency performance in healthy volunteers versus placebo in a double-blind trial. Other computerized-test improvements may have reflected practice effects; this is not evidence for unsupervised cognitive enhancement.

## Description

The cited study compared single doses of amisulpride, haloperidol, risperidone and aripiprazole in healthy volunteers, assessing cognition, sedation and extrapyramidal symptoms about four hours after dosing.

## Evidence note

One PubMed abstract was retrieved; no rights-eligible PMC full text was available. Dose and outcome details are abstract-supported. Full-text retrieval status is recorded per reference; 0 of 1 PubMed records had a PMC identifier in this set.

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
  sourceId: reddit-pmid-23131890
```

## Pharmacokinetics

```yaml
- id: amisulpride-reddit-pk-unestablished
  analyte: Amisulpride
  route: Not established from abstract
  formulation: Study formulation not reported as a PK parameter
  population: Not established
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated elimination or concentration parameter was reported in the
    retrieved linked abstracts.
  sourceId: reddit-index-amisulpride
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-amisulpride-sedation-23131890
  conceptId: drowsiness
  name: Sedation
  direction: Variable
  evidence: Human research
  description: The trial measured mental and physical sedation and extrapyramidal
    symptoms; word-fluency benefit remained after controlling for these factors.
  sourceId: reddit-pmid-23131890
  population: Healthy volunteers
  exposure: Single 400 mg dose
  instrument: Sedation and extrapyramidal assessments
  magnitude: No abstract effect size
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-amisulpride-word-fluency-23131890
  conceptId: verbal-fluency
  name: Word fluency
  direction: Increased
  evidence: Human research
  description: Single-dose amisulpride enhanced word-fluency performance versus placebo
    after controlling for sedation and extrapyramidal symptoms.
  sourceId: reddit-pmid-23131890
  population: Healthy volunteers
  exposure: 400 mg single dose
  instrument: Word fluency test
  magnitude: Significant versus placebo
  reportType: measured-assessment
- id: reddit-amisulpride-computerized-23131890
  conceptId: verbal-fluency
  name: Computerized neurocognitive tests
  direction: Variable
  evidence: Human research
  description: Some computerized cognitive measures improved in each antipsychotic
    group, but the authors note these changes may reflect practice effects.
  sourceId: reddit-pmid-23131890
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
  description: The study was acute and conducted in healthy volunteers; it does not
    establish clinical benefit or long-term safety.
  sourceId: reddit-pmid-23131890
- title: Practice-effect concern
  description: Some computerized-test improvements may have resulted from repeated
    testing rather than drug action.
  sourceId: reddit-pmid-23131890
```

## Claims

```yaml
- id: reddit-claim-amisulpride-23131890-0
  assertion: A single 400 mg dose improved word fluency versus placebo in healthy
    volunteers.
  relation: associated-with
  participants:
  - entityId: substance:amisulpride
    role: intervention or exposure
  - entityId: tag:verbal-fluency
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-23131890
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-amisulpride-23131890-1
  assertion: Some computerized-test improvements may reflect practice effects.
  relation: associated-with
  participants:
  - entityId: substance:amisulpride
    role: intervention or exposure
  - entityId: tag:verbal-fluency
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-23131890
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
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
- id: reddit-index-amisulpride
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Reddit index discovery link; it does not establish efficacy, dose or safety.
  limitation: Community index used as a discovery aid; publication evidence is evaluated in the linked records.
- id: reddit-pmid-23131890
  title: Cognitive effects of a single dose of atypical antipsychotics in healthy volunteers compared with placebo or haloperidol.
  authors: Young-Chul Chung, Tae-Won Park, Jong-Chul Yang, Guang-Biao Huang, Tong Zhao, Keun-Young Oh, Min-Gul Kim
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23131890/
  kind: PubMed publication
  insight: Healthy-volunteer trial found 400 mg single-dose amisulpride improved word fluency after controlling for sedation/extrapyramidal symptoms; other cognitive changes may be practice effects.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '23131890'
  doi: 10.1097/JCP.0b013e318272d10c
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
