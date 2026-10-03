---
slug: modafinil
name: Modafinil
subtitle: Wakefulness and its limits.
aliases:
  - Provigil
formula: C15H15NO2S
molecularWeight: 273.4 g/mol
pubchemCid: 4236
smiles: C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N
category: Wake-promoting medicine
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
  - wakefulness
  - wake-maintenance
accent: "#bea17c"
reviewedAt: 2026-09-29
editorialStatus: sourced-draft
halfLife:
  label: About 15 hours
  low: 15
  high: 15
  context: Effective half-life after repeated oral exposure; R- and S-modafinil have different kinetics.
  sourceId: modafinil-label
  observationId: modafinil-repeat
kinetics:
  onset: Not established here
  peak: Plasma peak at 2–4 hours after oral administration
  duration: Not inferred from elimination half-life
  bioavailability: Absolute oral bioavailability not determined in the label
  metabolism: Hepatic metabolism; enantiomers differ in disposition
  sourceId: modafinil-label
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
x-order: 6
---

## Summary

A wake-promoting medicine studied in diagnosed sleep disorders. Measured wakefulness, felt alertness and everyday performance are different outcomes.

## Description

Modafinil is a racemic medicine used for excessive sleepiness in defined clinical settings. Human imaging links it to dopamine transporter occupancy. Sleep-disorder trials do not establish a broad cognitive benefit in healthy, rested people.

## Evidence note

Clinical and mechanistic findings are shown separately. Each claim remains a sourced draft.

## Doses

```yaml
- label: Shift-work sleep-disorder trial
  amount: 200 mg per studied shift
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Modafinil
  formulation: Oral study medication
  route: Oral
  frequency: Before each night-work shift
  duration: 3 months
  population: 209 adults with shift-work sleep disorder
  purpose: Evaluate excessive sleepiness during night work
  sourceCategory: research
  note: Study exposure, not a regimen for self-directed sleep deprivation.
  sourceId: czeisler2005
```

## Pharmacokinetics

```yaml
- id: modafinil-repeat
  analyte: Modafinil (racemate; effective repeated-dose estimate)
  route: Oral
  formulation: Tablet
  population: Adults in prescribing-label pharmacokinetic studies
  endpoint: elimination-half-life
  statistic: approximate
  value: 15
  low: null
  high: null
  unit: hours
  context: Repeated exposure; this effective estimate does not describe both enantiomers independently.
  sourceId: modafinil-label
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- conceptId: wakefulness
  name: Reported wakefulness
  direction: Increased
  evidence: Human research
  description: Participants reported reduced sleepiness, although substantial residual sleepiness remained.
  sourceId: czeisler2005
  population: Patients with shift-work sleep disorder
  exposure: 200 mg before studied shifts for 3 months
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- conceptId: wake-maintenance
  name: Nighttime sleep latency
  direction: Increased
  evidence: Human research
  description: Laboratory sleep latency improved modestly relative to placebo; wakefulness did not normalize.
  sourceId: czeisler2005
  population: Patients with shift-work sleep disorder
  exposure: 200 mg before studied shifts for 3 months
  instrument: Multiple Sleep Latency Test
  magnitude: null
```

## Mechanisms

```yaml
- title: Dopamine transporter interaction
  description: PET measurements support transporter occupancy and altered extracellular dopamine in the studied men.
  sourceId: volkow2009
  conceptId: dopamine-transporter
```

## Cautions

```yaml
- title: Serious hypersensitivity
  description: The label warns about serious rash and hypersensitivity reactions.
  sourceId: modafinil-label
- title: Interactions and psychiatric effects
  description: Prescribing information describes psychiatric reactions and interactions, including reduced effectiveness of steroidal contraceptives.
  sourceId: modafinil-label
- title: Residual sleepiness
  description: Improvement in a sleep-disorder trial did not restore normal alertness for every participant.
  sourceId: czeisler2005
```

## Claims

```yaml
- id: modafinil-dat
  assertion: Modafinil occupied dopamine transporters in a human imaging experiment.
  relation: transporter-occupancy
  participants:
    - entityId: substance:modafinil
      role: substance
    - entityId: tag:dopamine-transporter
      role: target
    - entityId: tag:dopamine
      role: transmitter
  context: Healthy male participants in an acute PET experiment
  sourceIds:
    - volkow2009
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Target occupancy is not a clinical outcome and the selected sample limits generalization.
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
- id: modafinil-label
  title: "PROVIGIL: prescribing information"
  authors: Teva Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b8d1c32-dac9-50e6-e063-6394a90aa5a5
  kind: Official prescribing label
  insight: Formulation-specific pharmacokinetics, warnings and interaction information.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: czeisler2005
  title: Modafinil for excessive sleepiness associated with shift-work sleep disorder
  authors: Czeisler et al.
  year: 2005
  pmid: "16079371"
  doi: 10.1056/NEJMoa041292
  url: https://pubmed.ncbi.nlm.nih.gov/16079371/
  kind: Randomized placebo-controlled trial
  insight: Improved some sleepiness and performance measures during night work.
  limitation: Selected clinical population; residual impairment remained. A correction is linked by the publisher.
  funding: Not assessed in this draft; consult the full article disclosures.
- id: volkow2009
  title: "Effects of modafinil on dopamine and dopamine transporters in the male human brain: clinical implications"
  authors: Volkow et al.
  year: 2009
  pmid: "19293415"
  doi: 10.1001/jama.2009.351
  url: https://pubmed.ncbi.nlm.nih.gov/19293415/
  kind: Human PET study
  insight: Measured dopamine transporter occupancy and changes in extracellular dopamine.
  limitation: Small male-only mechanistic study; cannot establish general cognitive efficacy.
  funding: NIH and other research support listed in the publication record.
- id: pubchem
  title: "Modafinil: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/4236
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure and connectivity SMILES.
  limitation: The parent compound identity is distinct from salts, formulations and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

