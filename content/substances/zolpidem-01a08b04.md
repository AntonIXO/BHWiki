---
slug: zolpidem-01a08b04
name: Zolpidem
subtitle: Identity record
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags:
  - reaction-time
  - gaba-a-receptor
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-3004-7dbf-8c78-67dd3cffbca3
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-3004-7dbf-8c78-67dd3cffbca3
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
x-order: 1927
---

## Summary

Zolpidem acts at GABA-A receptors and is studied for sleep and its effects on brain activity.

## Description

Zolpidem acts at GABA-A receptors and is studied for sleep and its effects on brain activity.

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
- id: research-zolpidem-01a08b04-reaction-time-24049230
  conceptId: reaction-time
  name: Reaction Time
  direction: Increased
  evidence: Human research
  description: The method was found to produce low variability with coefficient of variation less than 10%. Interday reproducibility was very good as shown by Bland-Altman plot with most of the values within ±2SD. There was a significant increase in RTs in Stroop performance with Zolpidem at 1 hr and 2 hrs; in contrast, caffeine significantly decreased RTs in Stroop performance at 1 hr only compared to placebo. The Stroop color-word recording and analysis system is simple, sensitive to centrally acting drug effects, and has potential for future experimental psychomotor assessment studies.
  sourceId: pubmed-24049230
  population: 24 healthy participants using computerized version of Stroop color-word test
  exposure: The standardized method was followed in all cases, by recording the reaction time (RT) in msec in 24 healthy participants using computerized version of Stroop color-word test. Reproducibility of the test procedure was evaluated by recording the RTs by a single experimenter on two sessions (interday reproducibility). Validity of the model was further tested by evaluating the psychotropic effect of Zolpidem 5 mg, Caffeine 500 mg, or Placebo on 24 healthy subjects in a randomized, double blind thre
  instrument: reaction time (RT) in msec in 24 healthy participants using computerized version of Stroop color-word t
  magnitude: The method was found to produce low variability with coefficient of variation less than 10%. Interday reproducibility was very good as shown by Bland-Altman plot with most of the values within ±2SD. There was a significant increase in RTs in Stroop performance with Zolpidem at 1 hr and 2 hrs; in contrast, caffeine sign
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
- id: research-claim-zolpidem-01a08b04-24049230
  assertion: The method was found to produce low variability with coefficient of variation less than 10%. Interday reproducibility was very good as shown by Bland-Altman plot with most of the values within ±2SD. There was a significant increase in RTs in Stroop performance with Zolpidem at 1 hr and 2 hrs; in contrast, caffeine significantly decreased RTs in Stroop performance at 1 hr only compared to placebo. The Stroop color-word recording and analysis system is simple, sensitive to centrally acting drug effects, and has potential for future experimental psychomotor assessment studies.
  relation: associated-with
  participants:
    - entityId: substance:zolpidem-01a08b04
      role: intervention or exposure
    - entityId: tag:reaction-time
      role: reported endpoint
  context: PMID 24049230 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-24049230
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
- id: optihealth-substance-01a08b04-3004-7dbf-8c78-67dd3cffbca3
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-3004-7dbf-8c78-67dd3cffbca3
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-24049230
  title: A computerized stroop test for the evaluation of psychotropic drugs in healthy participants.
  authors: Raveendranadh Pilli, Mur Naidu, Usha Rani Pingali, J C Shobha, A Praveen Reddy
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24049230/
  kind: PubMed publication
  insight: The method was found to produce low variability with coefficient of variation less than 10%. Interday reproducibility was very good as shown by Bland-Altman plot with most of the values within ±2SD. There was a significant increase in RTs in Stroop performance with Zolpidem at 1 hr and 2 hrs; in contrast, caffeine significantly decreased RTs in Stroop performance at 1 hr only compared to placebo. The Stroop color-word recording and analysis system is simple, sensitive to centrally acting drug effects, and has potential for future experimental psychomotor assessment studies.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC3775051 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC3775051/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: "24049230"
  doi: 10.4103/0253-7176.116251
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
