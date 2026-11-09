---
slug: centrophenoxine
name: Centrophenoxine
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags: []
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-12208347
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-12208347
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

Centrophenoxine is a compound studied for its effects on brain function and memory.

## Description

Centrophenoxine is often discussed as a lipofuscin-reducing compound, but the linked PubMed review is about age-related lipofuscin mechanisms rather than a centrophenoxine trial. No human dose, PK, cognitive outcome or safety estimate was established from the available links.

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
[]
```

## Mechanisms

```yaml
- title: Lipofuscin biology in aging
  description: Lipofuscin is an undegradable, iron-catalyzed oxidative polymer that can impair lysosomal stability and autophagy in postmitotic cells; the review does not test centrophenoxine.
  sourceId: pubmed-12208347
```

## Cautions

```yaml
- title: No centrophenoxine-specific dose or PK
  description: The linked PubMed review does not establish a centrophenoxine dose, pharmacokinetic parameter or human safety profile.
  sourceId: pubmed-12208347
```

## Claims

```yaml
- id: centrophenoxine-claim-gap
  assertion: The available linked publications do not establish centrophenoxine cognitive efficacy or safe dosing.
  relation: evidence-gap
  participants:
    - entityId: substance:centrophenoxine
      role: substance
    - entityId: tag:cognitive-performance
      role: evidence context
  context: One general lipofuscin review and one unresolved 1999 title link.
  sourceIds:
    - pubmed-12208347
    - publication-link-db2fa82bc1e5
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No matched clinical publication in this corpus pass.
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
- id: publication-link-33300d73d232
  title: "Lipofuscin: mechanisms of age-related accumulation and influence on cell function (2002)"
  authors: Not established
  year: 2002
  url: https://www.sciencedirect.com/science/article/pii/S0891584902009590
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-db2fa82bc1e5
  title: Centrophenoxine Slows Down, but Does Not Reverse, Lipofuscin Accumulation in Cultured Cells (1999)
  authors: Not established
  year: 1999
  url: https://online.liebertpub.com/doi/abs/10.1089/rej.1.1999.2.265
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-12208347
  title: "Lipofuscin: mechanisms of age-related accumulation and influence on cell function."
  authors: Ulf T Brunk, Alexei Terman
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12208347/
  kind: PubMed publication
  insight: Review of iron-catalyzed lipofuscin accumulation and lysosomal oxidative stress; not a centrophenoxine trial.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: "12208347"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  doi: 10.1016/S0891-5849(02)00959-0
```

## Legal

```yaml
[]
```
