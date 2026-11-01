---
slug: centrophenoxine
name: Centrophenoxine
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
  sourceId: reddit-index-centrophenoxine
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-centrophenoxine
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

The Reddit links do not provide clinical efficacy evidence for centrophenoxine. One linked review describes lipofuscin biology; a second centrophenoxine title could not be matched to a PubMed record.

## Description

Centrophenoxine is often discussed as a lipofuscin-reducing compound, but the linked PubMed review is about age-related lipofuscin mechanisms rather than a centrophenoxine trial. No human dose, PK, cognitive outcome or safety estimate was established from the available links.

## Evidence note

Source gap: PubMed PMID 12208347 is a review of lipofuscin formation and lysosomal oxidative stress, not a centrophenoxine efficacy study. The 1999 “Centrophenoxine Slows Down…” link was not resolved to a PubMed/PMC record in this pass, so no effect or dose was inferred.

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
  sourceId: reddit-pmid-12208347
```

## Cautions

```yaml
- title: No centrophenoxine-specific dose or PK
  description: The linked PubMed review does not establish a centrophenoxine dose, pharmacokinetic parameter or human safety profile.
  sourceId: reddit-pmid-12208347
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
  - reddit-pmid-12208347
  - reddit-link-db2fa82bc1e5
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
- id: reddit-index-centrophenoxine
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-33300d73d232
  title: 'Lipofuscin: mechanisms of age-related accumulation and influence on cell function (2002)'
  authors: Not established
  year: 2002
  url: https://www.sciencedirect.com/science/article/pii/S0891584902009590
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-db2fa82bc1e5
  title: Centrophenoxine Slows Down, but Does Not Reverse, Lipofuscin Accumulation in Cultured Cells (1999)
  authors: Not established
  year: 1999
  url: https://online.liebertpub.com/doi/abs/10.1089/rej.1.1999.2.265
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12208347
  title: 'Lipofuscin: mechanisms of age-related accumulation and influence on cell function.'
  authors: Ulf T Brunk, Alexei Terman
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12208347/
  kind: PubMed publication
  insight: Review of iron-catalyzed lipofuscin accumulation and lysosomal oxidative stress; not a centrophenoxine trial.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: '12208347'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  doi: 10.1016/S0891-5849(02)00959-0
```

## Legal

```yaml
[]
```
