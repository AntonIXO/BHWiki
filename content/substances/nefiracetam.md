---
slug: nefiracetam
name: Nefiracetam
subtitle: Racetam
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Racetam
tags:
  - apathy
  - nootropic-research
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
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
x-order: 1108
---

## Summary

Nefiracetam is a racetam compound studied for learning and memory.

## Description

Nefiracetam is a racetam compound studied for learning and memory.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Poststroke apathy trial
  amount: 900 mg/day
  quantity: 900
  quantityMax: null
  unit: mg
  ingredient: Nefiracetam
  formulation: Oral nefiracetam (route inferred from trial drug administration; abstract does not explicitly state route)
  route: oral
  frequency: daily
  duration: 12 weeks
  population: Patients 8–36 weeks after stroke with apathy
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized placebo-controlled trial; only 13 participants randomized.
  sourceId: pubmed-26915605
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
- id: research-nefiracetam-apathy-26915605
  conceptId: apathy
  name: Apathy severity
  direction: Variable
  evidence: Human research
  description: Nefiracetam was not more efficacious than placebo for poststroke apathy at 12 weeks.
  sourceId: pubmed-26915605
  population: 13 randomized participants with poststroke apathy
  exposure: 900 mg/day nefiracetam for 12 weeks
  instrument: Apathy Scale
  magnitude: No significant between-group difference; P > .14.
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Very small randomized sample
  description: Only 13 participants were randomized; the authors identify sample size as the main limitation.
  sourceId: pubmed-26915605
- title: Null efficacy result
  description: The trial did not show nefiracetam superiority to placebo for poststroke apathy.
  sourceId: pubmed-26915605
```

## Claims

```yaml
- id: research-claim-nefiracetam-26915605-0
  assertion: Nefiracetam 900 mg/day did not significantly improve poststroke apathy versus placebo over 12 weeks in a 13-person randomized trial.
  relation: no-difference
  participants:
    - entityId: substance:nefiracetam
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Patients 8–36 weeks after stroke; 13 randomized.
  sourceIds:
    - pubmed-26915605
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Very small trial; no full-text safety review.
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
- id: optihealth-substance-019fe218-43ed-73e7-8a69-12a62ccbc3d9
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43ed-73e7-8a69-12a62ccbc3d9
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-26915605
  title: A Randomized, Placebo-Controlled, Double-Blind Efficacy Study of Nefiracetam to Treat Poststroke Apathy.
  authors: Sergio E Starkstein, Simone Brockman, Katherine K Hatch, David G Bruce, Osvaldo P Almeida, Wendy A Davis, Robert G Robinson
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26915605/
  kind: PubMed publication
  insight: "BACKGROUND: To evaluate the efficacy of treatment with nefiracetam compared to placebo in poststroke apathy."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26915605"
  doi: 10.1016/j.jstrokecerebrovasdis.2016.01.032
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
  url: https://en.wikipedia.org/wiki/Nefiracetam
  title: Wikipedia
```
