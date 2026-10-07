---
slug: example-substance
name: Example substance
subtitle: One sentence of context.
aliases: []
formula: C0
molecularWeight: Not assessed
pubchemCid: 1
smiles: C
category: Example
tags: []
accent: "#888888"
reviewedAt: 2026-01-01
halfLife:
  label: Not established
  low: null
  high: null
  context: Not established
  sourceId: example-source
  observationId: example-pk
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: example-source
editorialStatus: sourced-draft
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
  - identificationTests
  - experienceLinks
  - references
  - legal
---

## Summary

One or two sentences. This is the catalog summary.

## Description

The overview paragraph. Write it in your own words and cite the sections below.

## Evidence note

Say what this draft covers and what it does not claim.

## Doses

```yaml
[]
```

Optional dose fields `foodRelation`, `solubility`, and `absorptionNote` are source-linked and route/formulation-specific. Do not infer food instructions from solubility.

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
[]
```

## Cautions

```yaml
[]
```

## Claims

```yaml
[]
```

## Interactions

```yaml
[]
```

## Identification tests

```yaml
[]
```

Use `presumptive-reagent` for reagent results such as Ehrlich and `instrumental-confirmation` for methods such as FTIR or GC-MS. Include the expected result, interpretation, limitations, and a supporting `sourceId`; do not add synthesis or hazardous procedural instructions.

## Experience links

```yaml
[]
```

## References

```yaml
- id: example-source
  title: Replace with the cited work
  authors: Author
  year: 2026
  url: https://example.org/source
  kind: Example
  insight: What this source supports.
  limitation: What it does not establish.
  funding: Not assessed in this draft.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this draft.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
