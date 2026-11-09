---
slug: spirulina
name: Spirulina
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - fatigue-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019feb26-2e95-7909-99b1-629501126503
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019feb26-2e95-7909-99b1-629501126503
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
x-order: 1129
---

## Summary

Spirulina is a cyanobacterial food preparation. The linked research explores its effects on brain function and cognition.

## Description

Spirulina is a cyanobacterial food preparation. The linked research explores its effects on brain function and cognition.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 26888417 study exposure: 3 g"
  amount: 3 g
  quantity: 3
  quantityMax: null
  unit: g
  ingredient: Spirulina
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: This study tested that hypothesis in a randomized, double blinded, placebo controlled study in men.
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine)
  sourceId: pubmed-26888417
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
- id: research-spirulina-fatigue-severity-26888417
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Increased
  evidence: Human research
  description: Spirulina may increase people's ability to resist mental and physical fatigue. After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine). A mathematical based mental fatigue test showed improved performance 4 h after the first time of supplementation as well as 8 weeks later.
  sourceId: pubmed-26888417
  population: This study tested that hypothesis in a randomized, double blinded, placebo controlled study in men.
  exposure: After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine).
  instrument: null
  magnitude: Spirulina may increase people's ability to resist mental and physical fatigue. After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine). A mathematical based mental fatigue test showed improved pe
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
- id: research-claim-spirulina-26888417
  assertion: Spirulina may increase people's ability to resist mental and physical fatigue. After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine). A mathematical based mental fatigue test showed improved performance 4 h after the first time of supplementation as well as 8 weeks later.
  relation: associated-with
  participants:
    - entityId: substance:spirulina
      role: intervention or exposure
    - entityId: tag:fatigue-severity
      role: reported endpoint
  context: PMID 26888417 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-26888417
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
- id: optihealth-substance-019feb26-2e95-7909-99b1-629501126503
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019feb26-2e95-7909-99b1-629501126503
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-26888417
  title: A randomized, double blind, placebo controlled study of spirulina supplementation on indices of mental and physical fatigue in men.
  authors: Morgan Johnson, Lauren Hassinger, Joshua Davis, Steven T Devor, Robert A DiSilvestro
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26888417/
  kind: PubMed publication
  insight: Spirulina may increase people's ability to resist mental and physical fatigue. After 1 week, a 3 g/day dose of spirulina produced a small, but statistically significant increase in exercise output (Kcals consumed in 30 min exercise on a cross trainer machine). A mathematical based mental fatigue test showed improved performance 4 h after the first time of supplementation as well as 8 weeks later.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "26888417"
  doi: 10.3109/09637486.2016.1144719
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Examine
  url: https://examine.com/supplements/spirulina
  title: Examine.com
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Spirulina_(dietary_supplement)
  title: Wikipedia
```
