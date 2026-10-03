---
slug: nicotine
name: Nicotine
subtitle: Cholinergic signaling with dependence risk.
aliases:
  - (S)-nicotine
formula: C10H14N2
molecularWeight: 162.23 g/mol
pubchemCid: 89594
smiles: CN1CCCC1C2=CN=CC=C2
category: Stimulant
tags:
  - stimulant
  - nicotinic-agonist
  - acetylcholine
  - cyp2a6
  - nicotinic-receptor
  - craving
accent: "#c8a18f"
reviewedAt: 2026-09-29
halfLife:
  label: About 2 hours
  low: 2
  high: 2
  context: Approximate plasma elimination after smoking or intravenous administration in the review. Slower terminal release from tissues is also described.
  sourceId: benowitz2009
  observationId: nicotine-elimination
kinetics:
  onset: Strongly dependent on delivery route
  peak: Rapid with inhalation; slower with replacement products
  duration: Repeated exposure can accumulate
  bioavailability: Route- and product-dependent; no universal value
  metabolism: Primarily hepatic metabolism, including CYP2A6; cotinine is an important metabolite
  sourceId: benowitz2009
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
  - halfLife
  - kinetics
  - modifiers
  - doses
  - effects
  - mechanisms
  - cautions
  - references
  - legal
  - editorialStatus
  - pkObservations
  - outcomes
  - claims
  - interactions
  - experienceLinks
x-order: 4
---

## Summary

An addictive nicotinic acetylcholine receptor agonist. Delivery route changes exposure; tobacco-smoke harms and nicotine pharmacology need separate treatment.

## Description

Nicotine activates receptors normally used by acetylcholine and participates in reinforcement and dependence. Medicines containing nicotine are used in smoking cessation. Neither that use nor short-term changes in attention establish a case for starting nicotine as a cognitive enhancer.

## Evidence note

This entry covers receptor pharmacology and dependence, rather than establishing a use for cognitive enhancement.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: nicotine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: Approximate plasma elimination after smoking or intravenous administration in the review. Slower terminal release from tissues is also described.
  sourceId: benowitz2009
  analyte: Nicotine
  route: Inhalation or intravenous administration
  formulation: Cigarette smoke or intravenous nicotine in reviewed kinetic studies
  population: Adults represented in the pharmacology review
  statistic: approximate
  value: 2
  low: null
  high: null
  modelEligible: true
```

## Modifiers

```yaml
- label: Delivery route
  effect: Changes speed and exposure
  detail: Inhaled and medicinal products have different absorption profiles. Product contents cannot be equated with an absorbed dose.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: other
  direction: variable
- label: Metabolic activity
  effect: Variable clearance
  detail: Genetics, medicines, pregnancy and kidney disease can affect nicotine disposition.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
- name: Craving during abstinence
  direction: Variable
  evidence: Human research
  description: Dependence can produce cravings during abstinence; relief after nicotine can reflect reversal of withdrawal.
  sourceId: benowitz2010
  conceptId: craving
  population: People with established tobacco dependence discussed in the clinical review
  exposure: Repeated nicotine exposure and subsequent abstinence
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: Nicotinic acetylcholine receptors
  description: Receptor activation changes neurotransmitter release, including dopamine signaling involved in reinforcement.
  sourceId: benowitz2010
  conceptId: nicotinic-receptor
```

## Cautions

```yaml
- title: Dependence is central
  description: Reward, tolerance and withdrawal belong in any assessment of perceived cognitive benefit.
  sourceId: benowitz2010
- title: Smoking is a separate exposure
  description: A nicotine molecule diagram does not describe the many toxic exposures from burning tobacco. Medicinal replacement and smoking are not interchangeable risk categories.
  sourceId: benowitz2010
```

## Claims

```yaml
- id: nicotinic-action
  assertion: Nicotine activates nicotinic acetylcholine receptors.
  relation: receptor-agonism
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:nicotinic-receptor
      role: target
    - entityId: tag:acetylcholine
      role: endogenous-ligand
  context: Receptor pharmacology in a clinical review of dependence.
  sourceIds:
    - benowitz2010
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Dependence and withdrawal confound claims of enhancement.
- id: metabolism
  assertion: CYP2A6 contributes to nicotine metabolism.
  relation: metabolic-pathway
  participants:
    - entityId: substance:nicotine
      role: substrate
    - entityId: tag:cyp2a6
      role: metabolizing-enzyme
  context: Route-dependent human nicotine pharmacokinetics.
  sourceIds:
    - benowitz2009
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: CYP2A6 metabolism does not make nicotine a proxy for tobacco-smoke induction of CYP1A2.
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
- id: benowitz2009
  title: Nicotine chemistry, metabolism, kinetics and biomarkers
  authors: Benowitz, Hukkanen & Jacob
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19184645/
  kind: Pharmacology review
  insight: Describes route-dependent absorption, elimination and metabolic modifiers.
  limitation: Population summaries differ by product and exposure history; a plasma half-life is not a duration-of-effect estimate.
  funding: Not assessed; consult the original disclosure.
  pmid: "19184645"
  doi: 10.1007/978-3-540-69248-5_2
- id: benowitz2010
  title: Nicotine addiction
  authors: Benowitz
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20554984/
  kind: Clinical review
  insight: Explains receptor signaling, reinforcement and the cycle of dependence and withdrawal.
  limitation: Not a trial of nicotine enhancement in people who do not use tobacco.
  funding: Not assessed; consult the original disclosure.
  pmid: "20554984"
  doi: 10.1056/NEJMra0809890
- id: pubchem
  title: "Nicotine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/89594
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```

