---
slug: nitrous-oxide
name: Nitrous oxide
subtitle: Named in an inhaled-anesthetic review.
aliases:
  - Nitrous
  - N2O
formula: N2O
molecularWeight: 44.013 g/mol
pubchemCid: 948
smiles: "[N-]=[N+]=O"
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
  context: The inspected review of inhalational anesthetics does not state an elimination half-life for nitrous oxide.
  sourceId: miller2023
  observationId: nitrous-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: miller2023
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
x-order: 411
---

## Summary

Nitrous oxide, PubChem CID 948. A review of inhaled anesthetics includes it among agents used for induction and maintenance of general anesthesia. The inspected record does not give a MAC or an elimination half-life.

## Description

This article is the gas, formula N2O. The clinical source is a general review of inhalational anesthetics, not a nitrous-only study. No dose, interaction, or recreational method is taken from that record.

## Evidence note

The review covers several anesthetic gases. Nothing in the text used here is a nitrous-specific half-life or dose.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: nitrous-unresolved
  analyte: Nitrous oxide
  route: Inhaled
  formulation: Anesthetic gas
  population: Patients receiving general anesthesia, as framed by the review
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination half-life or MAC is stated in the text used for this draft.
  sourceId: miller2023
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
- title: A multi-agent review
  description: The cited record discusses nitrous oxide together with halothane, isoflurane, desflurane, and sevoflurane for induction and maintenance of general anesthesia. It is not a nitrous-only study.
  sourceId: miller2023
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
- title: Nitrous on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Nitrous
  publisher: PsychonautWiki
```

## References

```yaml
- id: miller2023
  title: Inhalational Anesthetic
  authors: Miller et al.
  year: 2023
  pmid: "32119427"
  url: https://pubmed.ncbi.nlm.nih.gov/32119427/
  kind: Review
  insight: Surveys inhaled anesthetics used for induction and maintenance of general anesthesia, including nitrous oxide.
  limitation: Not a nitrous-only study. No MAC, half-life, or interaction specific to nitrous oxide was extracted.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Nitrous oxide: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/948
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

