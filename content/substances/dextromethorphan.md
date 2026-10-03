---
slug: dextromethorphan
name: Dextromethorphan
subtitle: An MAOI warning from one product.
aliases:
  - DXM
formula: C18H25NO
molecularWeight: 271.4 g/mol
pubchemCid: 5360696
smiles: CN1CCC23CCCCC2C1CC4=C3C=C(C=C4)OC
category: Dissociative
tags:
  - dissociative
accent: "#9fbab0"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The inspected single-ingredient dextromethorphan polistirex extended-release label does not state an elimination half-life.
  sourceId: dxm-label
  observationId: dxm-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: dxm-label
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
x-order: 407
---

## Summary

Dextromethorphan, PubChem CID 5360696. The cited single-ingredient polistirex extended-release label warns against use with a monoamine oxidase inhibitor and for 2 weeks after stopping one. That label does not state an elimination half-life.

## Description

The structure is the parent compound. The safety statement is formulation-specific: a single-ingredient dextromethorphan polistirex extended-release suspension. It does not describe every dextromethorphan product, and this draft does not assign a half-life.

## Evidence note

The interaction warning belongs to the cited polistirex extended-release suspension. Elimination was not on that short label.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: dxm-unresolved
  analyte: Dextromethorphan
  route: Oral
  formulation: Polistirex extended-release suspension
  population: Users addressed by the product label
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination half-life is stated on the inspected label.
  sourceId: dxm-label
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
[]
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Monoamine oxidase inhibitors
  description: The label says not to use the product while taking a prescription monoamine oxidase inhibitor, including certain drugs for depression, psychiatric conditions, or Parkinson's disease, or for 2 weeks after stopping the MAOI.
  sourceId: dxm-label
```

## Claims

```yaml
[]
```

## Interactions

```yaml
- id: dxm-maoi
  name: Monoamine oxidase inhibitors
  otherSlug: null
  summary: The polistirex extended-release suspension label warns against use during prescription MAOI treatment and for 2 weeks after stopping the MAOI.
  sourceId: dxm-label
```

## Experience links

```yaml
- title: Dextromethorphan on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Dextromethorphan
  publisher: PsychonautWiki
```

## References

```yaml
- id: dxm-label
  title: "Dextromethorphan polistirex extended-release suspension: drug facts"
  authors: DailyMed label record
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6b68eb-8fe0-447d-aed7-28432c45b58c
  kind: Official prescribing label
  insight: States the MAOI warning for this single-ingredient extended-release suspension.
  limitation: A short over-the-counter drug-facts label. It does not report elimination half-life and does not cover every dextromethorphan formulation. Retrieval year is 2026.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: pubchem
  title: "Dextromethorphan: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5360696
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

