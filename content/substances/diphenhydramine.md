---
slug: diphenhydramine
name: Diphenhydramine
subtitle: Histamine and acetylcholine pathways.
aliases:
  - DPH
  - Benadryl
  - Dimedrol
formula: C17H21NO
molecularWeight: 255.35 g/mol
pubchemCid: 3100
smiles: CN(C)CCOC(C1=CC=CC=C1)C2=CC=CC=C2
category: Antihistamine
tags:
  - antihistamine
  - histamine
  - histamine-h1
  - muscarinic-receptor
  - acetylcholine
  - drowsiness
  - age-exposure
accent: "#c4978c"
reviewedAt: 2026-09-29
editorialStatus: sourced-draft
halfLife:
  label: Study mean 9.2 hours
  low: 9.2
  high: 9.2
  context: Young-adult group in a syrup study; the reported variation is not encoded as a range or confidence interval.
  sourceId: simons1990
  observationId: diphenhydramine-young-adult
kinetics:
  onset: Not established here
  peak: Not assessed for the selected syrup study
  duration: Subjective effects and antihistamine activity differ from serum elimination
  bioavailability: Not assessed in this draft
  metabolism: Not assessed in this draft
  sourceId: simons1990
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
  - references
  - legal
  - interactions
  - experienceLinks
x-order: 8
---

## Summary

An H1 antihistamine with antimuscarinic and sedative actions. A sedating experience is not equivalent to restorative sleep or preserved performance.

## Description

Diphenhydramine acts at histamine H1 receptors and has additional antimuscarinic activity. Different exposures and study populations produce different kinetic and subjective findings. The molecular structure represents the parent base, not the hydrochloride salt used in the cited experiment.

## Evidence note

Age differences were observed in one kinetic study but not in another exposure setting; a universal age multiplier is not justified.

## Doses

```yaml
- label: Sedation and performance experiment
  amount: 25 mg once
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine hydrochloride
  formulation: Oral study medication
  route: Oral
  frequency: Single study exposure
  duration: 24-hour observation
  population: 37 younger and older adult volunteers
  purpose: Assess pharmacokinetics, self-rated sedation and performance
  sourceCategory: research
  note: This particular experiment detected no significant sedation or performance difference versus placebo.
  sourceId: scavone1998
```

## Pharmacokinetics

```yaml
- id: diphenhydramine-young-adult
  analyte: Diphenhydramine
  route: Oral
  formulation: Syrup
  population: Young-adult group in a study of 21 participants across three age groups
  endpoint: elimination-half-life
  statistic: study-mean
  value: 9.2
  low: null
  high: null
  unit: hours
  context: Group mean after a single 1.25 mg/kg study exposure; not a recommended exposure.
  sourceId: simons1990
  modelEligible: true
- id: diphenhydramine-older-adult
  analyte: Diphenhydramine
  route: Oral
  formulation: Syrup
  population: Older-adult group in the same age-comparison study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 13.5
  low: null
  high: null
  unit: hours
  context: Group mean after a single 1.25 mg/kg study exposure. Other experiments did not reproduce a significant age effect.
  sourceId: simons1990
  modelEligible: true
```

## Modifiers

```yaml
- label: Age-defined study group
  effect: Longer mean half-life in older adults in one study
  detail: A separate lower-exposure crossover experiment did not find significant age differences. Do not use a fixed age-based multiplier.
  sourceId: simons1990
  observationId: diphenhydramine-older-adult
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: drowsiness
  name: Self-rated sedation
  direction: Variable
  evidence: Human research
  description: No significant difference from placebo was detected at this study exposure. This does not negate sedation warnings for the medicine.
  sourceId: scavone1998
  population: Younger and older healthy volunteers
  exposure: Single 25 mg oral exposure
  instrument: Self-ratings of sedation
  magnitude: null
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: H1 antihistamine activity
  description: Diphenhydramine inhibits histamine-mediated responses; its additional muscarinic activity makes it pharmacologically broader than an H1-only description.
  sourceId: liu2005
  conceptId: histamine-h1
- title: Antimuscarinic activity
  description: Experimental inhibition of acetylcholine-driven secretion supports a distinct antimuscarinic mechanism.
  sourceId: liu2005
  conceptId: muscarinic-receptor
```

## Cautions

```yaml
- title: Sedation and additive impairment
  description: The label warns about drowsiness and additive effects with alcohol and other CNS depressants.
  sourceId: diphenhydramine-label
- title: Anticholinergic effects
  description: Drying effects and urinary or ocular problems matter in susceptible people; consult the formulation's contraindications and warnings.
  sourceId: diphenhydramine-label
- title: Age is not a personal half-life calculator
  description: Contrasting experiments caution against assigning every older adult the same elimination estimate.
  sourceId: scavone1998
```

## Claims

```yaml
- id: diphenhydramine-muscarinic
  assertion: Diphenhydramine inhibited muscarinic signaling in an airway-cell experiment.
  relation: receptor-antagonism
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:muscarinic-receptor
      role: target
    - entityId: tag:acetylcholine
      role: transmitter
  context: Cultured swine airway mucus-gland cells
  sourceIds:
    - liu2005
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical tissue assay; it does not quantify human cognitive effects.
- id: diphenhydramine-age
  assertion: One experiment found age-group differences in diphenhydramine elimination.
  relation: clearance-context
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:age-exposure
      role: population-context
  context: Syrup study compared younger adults, older adults and children
  sourceIds:
    - simons1990
  conflictingSourceIds:
    - scavone1998
  assessment: not-formally-assessed
  limitation: A separate lower-exposure study found no significant age effect.
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
- id: diphenhydramine-label
  title: "Diphenhydramine hydrochloride capsules: prescribing information"
  authors: DailyMed label record
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75f0cde5-c419-416d-9c13-bfc03bd83b1d
  kind: Official prescribing label
  insight: Documents antihistamine, anticholinergic and sedative properties and related warnings.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: simons1990
  title: "Diphenhydramine: pharmacokinetics and pharmacodynamics in elderly adults, young adults, and children"
  authors: Simons et al.
  year: 1990
  pmid: "2391399"
  doi: 10.1002/j.1552-4604.1990.tb01871.x
  url: https://pubmed.ncbi.nlm.nih.gov/2391399/
  kind: Human pharmacokinetic study
  insight: Compared serum elimination and skin-test responses across age groups.
  limitation: Small groups and a particular syrup exposure; group means do not predict individual clearance.
  funding: Not assessed in this draft.
- id: scavone1998
  title: Pharmacokinetics and pharmacodynamics of diphenhydramine 25 mg in young and elderly volunteers
  authors: Scavone et al.
  year: 1998
  pmid: "9702844"
  doi: 10.1002/j.1552-4604.1998.tb04466.x
  url: https://pubmed.ncbi.nlm.nih.gov/9702844/
  kind: Randomized placebo-controlled crossover study
  insight: Did not detect significant age effects on kinetics or sedation differences at the tested exposure.
  limitation: An undetected difference in one acute experiment does not establish absence of impairment in other settings.
  funding: NIMH support is listed in the PubMed record; other funding not assessed.
- id: liu2005
  title: Effects of first and second generation antihistamines on muscarinic induced mucus gland cell ion transport
  authors: Liu et al.
  year: 2005
  pmid: "15790419"
  doi: 10.1186/1471-2210-5-8
  url: https://pubmed.ncbi.nlm.nih.gov/15790419/
  kind: Preclinical receptor-function experiment
  insight: Compared antihistamine and antimuscarinic actions in airway cells.
  limitation: Swine cell preparation; cannot determine human clinical benefit or harm magnitude.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Diphenhydramine: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/3100
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure and connectivity SMILES.
  limitation: The parent compound identity is distinct from salts, formulations and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

