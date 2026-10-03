---
slug: ethanol
name: Ethanol
subtitle: Michaelis–Menten elimination.
aliases:
  - Alcohol
  - Ethyl alcohol
formula: C2H6O
molecularWeight: 46.07 g/mol
pubchemCid: 702
smiles: CCO
category: Depressant
tags:
  - depressant
accent: "#c3b093"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: Holford describes Michaelis–Menten elimination rather than a first-order half-life. For a 70 kg adult, volume of distribution is about 37 L, Vmax about 8.5 g/h, and Km about 80 mg/L. At maximum elimination, disappearance is about 230 mg/L/h.
  sourceId: holford1987
  observationId: ethanol-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Michaelis–Menten elimination. For a 70 kg adult, Vmax is about 8.5 g/h and Km is about 80 mg/L. Disappearance is about 230 mg/L/h when elimination is at its maximum. Volume of distribution is about 37 L.
  sourceId: holford1987
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
x-order: 404
---

## Summary

Ethanol, PubChem CID 702, is the alcohol in alcoholic drinks. Holford describes Michaelis–Menten elimination. This draft does not assign a first-order half-life.

## Description

The record is the compound ethanol. For a 70 kg adult, Holford reports a volume of distribution of about 37 L, a Vmax of about 8.5 g/h, and a Km of about 80 mg/L. When elimination is at its maximum, disappearance is about 230 mg/L/h. Those parameters are not a half-life and not a drinking recommendation.

## Evidence note

Capacity-limited elimination does not become a first-order half-life. The depressant index is a browsing group. Holford's abstract, as used here, is a pharmacokinetic description.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: ethanol-unresolved
  analyte: Ethanol
  route: Not assessed
  formulation: The compound, not a beverage
  population: A 70 kg adult in the cited pharmacokinetic review
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Vmax, Km, and volume of distribution are reported. No first-order elimination half-life is assigned.
  sourceId: holford1987
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
- title: No personal half-life
  description: The cited parameters are population pharmacokinetic constants for capacity-limited elimination. They do not predict an individual's blood alcohol at a chosen drink.
  sourceId: holford1987
```

## Claims

```yaml
[]
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: Ethanol on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Ethanol
  publisher: PsychonautWiki
```

## References

```yaml
- id: holford1987
  title: Clinical pharmacokinetics of ethanol
  authors: Holford
  year: 1987
  pmid: "3319346"
  url: https://pubmed.ncbi.nlm.nih.gov/3319346/
  kind: Pharmacokinetic review
  insight: Reports volume of distribution, Vmax, Km, and the zero-order disappearance rate at maximum elimination.
  limitation: A review of clinical pharmacokinetics. It does not provide a first-order half-life or a drinking guideline.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Ethanol: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/702
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

