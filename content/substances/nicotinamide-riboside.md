---
slug: nicotinamide-riboside
name: Nicotinamide Riboside
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2f93-78f3-8990-fca1b82c6f4e
  observationId: nicotinamide-riboside-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f93-78f3-8990-fca1b82c6f4e
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
x-order: 1680
---

## Summary

Nicotinamide riboside (NR) is an NAD+ precursor. In the linked Cell Metabolism study, NR increased NAD+ and activated SIRT1/SIRT3 in cells and mice, improving oxidative metabolism and protecting against high-fat-diet metabolic abnormalities; this is preclinical evidence. [reddit-pmid-22682224]

## Description

NR is a natural NAD+ precursor studied in cells and mouse tissues. The linked publication reports metabolic effects in high-fat-diet models; it does not establish a human dose, pharmacokinetic profile, or clinical efficacy.

## Evidence note

PubMed abstract retrieved for PMID 22682224; PMC full text retrieval was attempted for PMC3616313 but was rate-limited in this pass. The linked evidence is cell and mouse research and does not establish human efficacy, safety, or dosing.

## Doses

```yaml
- label: NR metabolic study
  amount: null
  quantity: null
  quantityMax: null
  unit: null
  ingredient: Nicotinamide riboside
  formulation: Experimental NR
  route: Not reported in abstract
  frequency: Not reported in abstract
  duration: Not reported in abstract
  population: Mammalian cells and high-fat-diet mice
  purpose: Preclinical exposure; not a human dosing recommendation.
  note: Dose and route are not stated in the PubMed abstract.
  sourceId: reddit-pmid-22682224
```

## Pharmacokinetics

```yaml
- id: nicotinamide-riboside-pk-unestablished
  analyte: Nicotinamide riboside
  route: Not reported
  formulation: Experimental NR
  population: Cells and mice
  endpoint: elimination-half-life
  statistic: not-reported
  value: null
  low: null
  high: null
  unit: hours
  context: Linked abstract reports NAD+ and metabolic outcomes but no concentration-time or elimination data.
  sourceId: reddit-pmid-22682224
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
- id: reddit-nr-metabolic-abnormalities-22682224
  conceptId: glycemic-control
  name: Metabolic Abnormalities
  direction: Improved
  evidence: Limited research
  description: NR protected against high-fat-diet-induced metabolic abnormalities in mice while increasing NAD+ bioavailability.
  sourceId: reddit-pmid-22682224
  population: High-fat-diet mice
  exposure: NR; dose and route not reported.
  instrument: Metabolic and oxidative-metabolism measures
  magnitude: Quantitative effect not reported in abstract.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NAD+ precursor and sirtuin activation
  description: NR raises NAD+ levels and activates SIRT1 and SIRT3 in cells and mouse tissues, linking the intervention to oxidative metabolism.
  sourceId: reddit-pmid-22682224
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked study used mammalian cells and mice; it does not establish human dose, pharmacokinetics, safety, or clinical benefit.
  sourceId: reddit-pmid-22682224
- title: Formulation and dose not reported in abstract
  description: The PubMed abstract does not state the experimental amount or route, so the study cannot support a human supplement dose.
  sourceId: reddit-pmid-22682224
```

## Claims

```yaml
- id: reddit-claim-nr-22682224-0
  assertion: NR increased NAD+ and improved oxidative-metabolism phenotypes in cells and high-fat-diet mice.
  relation: preclinical-support
  participants:
  - entityId: substance:nicotinamide-riboside
    role: intervention
  - entityId: tag:mitochondrial-biomarkers
    role: reported endpoint
  context: Cell and mouse study; dose and route are not stated in the abstract.
  sourceIds:
  - reddit-pmid-22682224
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical evidence; no human translation established.
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
- id: optihealth-substance-01a08b04-2f93-78f3-8990-fca1b82c6f4e
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f93-78f3-8990-fca1b82c6f4e
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-22682224
  title: The NAD(+) precursor nicotinamide riboside enhances oxidative metabolism and protects against high-fat diet-induced obesity.
  authors: Carles Cantó; Riekelt H Houtkooper; Eija Pirinen; et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22682224/
  kind: PubMed publication
  insight: NR increased NAD+ and activated SIRT1/SIRT3, enhancing oxidative metabolism and protecting high-fat-diet mice from metabolic abnormalities.
  limitation: Cell and mouse study; dose and route are not stated in the abstract.
  pmid: '22682224'
  pmcid: PMC3616313
  doi: 10.1016/j.cmet.2012.04.022
  funding: Not assessed in this pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
