---
slug: levothyroxin
name: Levothyroxin
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
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-23319987
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-23319987
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

Levothyroxin is a synthetic form of the thyroid hormone T4. The linked research examines thyroid function and cognition.

## Description

Levothyroxin is a synthetic form of the thyroid hormone T4. The linked research examines thyroid function and cognition.

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
- id: research-levothyroxin-memory-23319987
  conceptId: memory
  name: Wechsler memory quotient
  direction: Increased
  evidence: Limited research
  description: In 60 adults with subclinical hypothyroidism, three months of levothyroxine increased memory quotient by 9.3 points versus 3.23 with placebo (p=0.002), with improvements in several Wechsler subtests.
  sourceId: pubmed-23319987
  population: 60 adults (51 women, 9 men) with TSH 4.5–10 mU/l and normal free T4
  exposure: Levothyroxine for 3 months versus placebo
  instrument: Wechsler Memory Scale
  magnitude: 9.3 versus 3.23 point memory-quotient rise
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Population-specific evidence (PMID 23319987; PMCID PMC3542502)
  description: The trial studied adults with subclinical hypothyroidism and does not establish cognitive benefit for euthyroid people or a general nootropic effect; levothyroxine treatment requires clinical monitoring.
  sourceId: pubmed-23319987
```

## Claims

```yaml
- id: research-claim-levothyroxin-23319987-0
  assertion: In adults with subclinical hypothyroidism, three months of levothyroxine improved memory-quotient and selected Wechsler subtest scores versus placebo.
  relation: reported-in
  participants:
    - entityId: substance:levothyroxin
      role: intervention
    - entityId: tag:memory
      role: reported endpoint
  context: Randomized double-blind clinical trial.
  sourceIds:
    - pubmed-23319987
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The study population had subclinical hypothyroidism; results do not generalize to euthyroid use.
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
- id: publication-link-62133cc03eae
  title: Changes of subtests of Wechsler Memory Scale and cognitive function in subjects with subclinical hypothyroidism following treatment with levothyroxine
  authors: Not established
  year: 2026
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3542502/
  kind: PubMed Central publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-9f631f134e08
  title: "Levothyroxin restores hypothyroidism-induced impairment of hippocampus-dependent learning and memory: Behavioral, electrophysiological, and molecular studies"
  authors: Not established
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1002/hipo.20476/abstract
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23319987
  title: Changes of subtests of Wechsler Memory Scale and cognitive function in subjects with subclinical hypothyroidism following treatment with levothyroxine.
  authors: Rokhsareh Aghili, Mohammad E Khamseh, Mojtaba Malek, Ali Hadian, Hamid R Baradaran, Laily Najafi, Zahra Emami
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23319987/
  kind: PubMed Central publication
  insight: A randomized double-blind trial in 60 adults with subclinical hypothyroidism found a greater three-month memory-quotient increase with levothyroxine than placebo.
  limitation: Full text retrieved from PMCID PMC3542502; findings apply to subclinical hypothyroidism and do not establish euthyroid cognitive enhancement.
  pmid: "23319987"
  pmcid: PMC3542502
  doi: 10.5114/aoms.2012.32423
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
