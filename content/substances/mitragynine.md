---
slug: mitragynine
name: Mitragynine
subtitle: The alkaloid, not the leaf.
aliases:
  - Kratom
formula: C23H30N2O4
molecularWeight: 398.5 g/mol
pubchemCid: 3034396
smiles: CCC1CN2CCC3=C(C2CC1C(=COC)C(=O)OC)NC4=C3C(=CC=C4)OC
category: Opioid
tags:
  - opioid
  - mu-opioid-receptor
accent: "#c3b093"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The abstract says half-lives were best reflected at the higher doses but does not give a number. Reported Cmax and Tmax are exposure measurements.
  sourceId: huestis2026
  observationId: mitragynine-unresolved
kinetics:
  onset: Not assessed
  peak: Median Tmax was 1.3 hours. Single-dose mean Cmax was 32.8±17.0, 93.2±38.6, and 196±77.4 ng/mL after 9.9, 29.6, and 59.2 mg mitragynine.
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Single-dose mean Cmax of 7-hydroxymitragynine was 6.8±2.7, 13.7±3.3, and 30.5±12.2 ng/mL at those three mitragynine amounts. After 15 doses, mitragynine mean Cmax was 27.4±10.9, 125±79.7, and 277±48.8 ng/mL.
  sourceId: huestis2026
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
x-order: 409
---

## Summary

Mitragynine, PubChem CID 3034396, is kratom's primary alkaloid. A human study measured it in a kratom extract that was 39.5% mitragynine. The inspected abstract does not give a numeric half-life.

## Description

Searchers looking for kratom will land here on the alkaloid, not on a leaf, a tea, or a gram-of-plant dose. The pharmacokinetic doses below are milligrams of mitragynine in that extract. 7-hydroxymitragynine is a different constituent. The FDA states that it has substantially greater mu-opioid receptor potency than mitragynine and that it is under 2% of the alkaloid content of natural leaves.

## Evidence note

Extract pharmacokinetics, the leaf, pure mitragynine, and 7-hydroxymitragynine are different exposures. The FDA warning concerns kratom products. It is not a controlled trial of the pure alkaloid.

## Doses

```yaml
- label: Extract single dose, 9.9 mg mitragynine
  amount: 9.9 mg mitragynine
  quantity: 9.9
  quantityMax: null
  unit: mg
  ingredient: Mitragynine in a kratom extract
  formulation: Extract standardized to 39.5% mitragynine
  route: Oral
  frequency: Single dose, with a separate 15-dose series
  duration: Pharmacokinetic sampling in the cited study
  population: Human participants in the cited extract study
  purpose: Measure mitragynine and 7-hydroxymitragynine plasma concentrations
  sourceCategory: research
  note: Single-dose mean Cmax 32.8±17.0 ng/mL. After 15 doses, mean Cmax was 27.4±10.9 ng/mL. This is not a weight of leaf.
  sourceId: huestis2026
- label: Extract single dose, 29.6 mg mitragynine
  amount: 29.6 mg mitragynine
  quantity: 29.6
  quantityMax: null
  unit: mg
  ingredient: Mitragynine in a kratom extract
  formulation: Extract standardized to 39.5% mitragynine
  route: Oral
  frequency: Single dose, with a separate 15-dose series
  duration: Pharmacokinetic sampling in the cited study
  population: Human participants in the cited extract study
  purpose: Measure mitragynine and 7-hydroxymitragynine plasma concentrations
  sourceCategory: research
  note: Single-dose mean Cmax 93.2±38.6 ng/mL. After 15 doses, mean Cmax was 125±79.7 ng/mL.
  sourceId: huestis2026
- label: Extract single dose, 59.2 mg mitragynine
  amount: 59.2 mg mitragynine
  quantity: 59.2
  quantityMax: null
  unit: mg
  ingredient: Mitragynine in a kratom extract
  formulation: Extract standardized to 39.5% mitragynine
  route: Oral
  frequency: Single dose, with a separate 15-dose series
  duration: Pharmacokinetic sampling in the cited study
  population: Human participants in the cited extract study
  purpose: Measure mitragynine and 7-hydroxymitragynine plasma concentrations
  sourceCategory: research
  note: Single-dose mean Cmax 196±77.4 ng/mL. After 15 doses, mean Cmax was 277±48.8 ng/mL.
  sourceId: huestis2026
```

## Pharmacokinetics

```yaml
- id: mitragynine-unresolved
  analyte: Mitragynine
  route: Oral
  formulation: Kratom extract standardized to 39.5% mitragynine
  population: Human participants in the cited single-dose and 15-dose extract study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No numeric elimination half-life is stated.
  sourceId: huestis2026
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
- title: Mu-opioid potency comparison
  description: The FDA states that 7-hydroxymitragynine, less than 2% of leaf alkaloid content, has substantially greater mu-opioid receptor potency than mitragynine, and greater potency than classical opioids such as morphine.
  sourceId: fda-kratom
  conceptId: mu-opioid-receptor
```

## Cautions

```yaml
- title: Kratom products are not approved medicines
  description: The FDA warns consumers not to use kratom because of serious adverse events, including liver toxicity, seizures, and substance use disorder. That warning is about kratom products. The human concentration data are from a 39.5% mitragynine extract, not from pure mitragynine and not from a weighed leaf dose.
  sourceId: fda-kratom
```

## Claims

```yaml
- id: mitragynine-mu
  assertion: The FDA states that 7-hydroxymitragynine has substantially greater mu-opioid receptor potency than mitragynine.
  relation: receptor-potency-comparison
  participants:
    - entityId: substance:mitragynine
      role: substance
    - entityId: tag:mu-opioid-receptor
      role: receptor
  context: FDA communication on kratom alkaloids, comparing 7-hydroxymitragynine with mitragynine
  sourceIds:
    - fda-kratom
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: 7-hydroxymitragynine is not catalogued here as its own substance. The sentence is a potency comparison, not a controlled outcome of pure mitragynine.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: Kratom on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Kratom
  publisher: PsychonautWiki
```

## References

```yaml
- id: huestis2026
  title: Mitragynine and 7-hydroxy-mitragyine plasma pharmacokinetics in humans after single and 15 multiple oral kratom extract doses
  authors: Huestis et al.
  year: 2026
  pmid: "42266029"
  url: https://pubmed.ncbi.nlm.nih.gov/42266029/
  kind: Human pharmacokinetic study
  insight: Reports Cmax and Tmax for mitragynine and 7-hydroxymitragynine after specified extract doses.
  limitation: The title uses the journal's spelling of the metabolite. The product was a 39.5% extract, not pure alkaloid or leaf. No numeric half-life is given.
  funding: Not assessed in this draft.
- id: fda-kratom
  title: FDA and kratom
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/news-events/public-health-focus/fda-and-kratom
  kind: Regulatory safety communication
  insight: States that no kratom drug product, and no product containing kratom or its known alkaloids, is legally marketed as an approved or over-the-counter drug in the United States, and compares 7-hydroxymitragynine with mitragynine at the mu-opioid receptor.
  limitation: A product warning and alkaloid comparison. It is not a clinical trial of pure mitragynine, and it does not establish a leaf dose.
  funding: U.S. Food and Drug Administration.
- id: pubchem
  title: "Mitragynine: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/3034396
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
- jurisdiction: United States
  activity: Marketing a drug product containing kratom or its known alkaloids
  status: The FDA states that no FDA-approved kratom drug product is legally on the market, and that no prescription or over-the-counter drug product containing kratom or its known alkaloids is legally marketed. It warns consumers not to use kratom because of the risk of serious adverse events, including liver toxicity, seizures, and substance use disorder.
  sourceUrl: https://www.fda.gov/news-events/public-health-focus/fda-and-kratom
  asOf: 2026-10-03
```

