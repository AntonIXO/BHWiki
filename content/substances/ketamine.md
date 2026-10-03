---
slug: ketamine
name: Ketamine
subtitle: An anesthetic label.
aliases:
  - Ketamine hydrochloride
formula: C13H16ClNO
molecularWeight: 237.72 g/mol
pubchemCid: 3821
smiles: CNC1(CCCCC1=O)C2=CC=CC=C2Cl
category: Dissociative
tags:
  - dissociative
  - arylcyclohexylamine
  - nmda-receptor
accent: "#9fbab0"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The label reports an alpha-phase half-life of 10 to 15 minutes, during a phase lasting about 45 minutes, corresponding clinically to the anesthetic effect. Redistribution from the central nervous system to peripheral tissues is about 2.5 hours. Neither figure is an elimination half-life.
  sourceId: ketamine-label
  observationId: ketamine-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: The anesthetic effect corresponds clinically to an alpha phase lasting about 45 minutes, with a half-life of 10 to 15 minutes. That interval is not a subjective-effect timeline and not an elimination half-life.
  bioavailability: Not assessed
  metabolism: N-dealkylation to the active metabolite norketamine, primarily by CYP2B6 and CYP3A4 and to a lesser extent by other CYP enzymes.
  sourceId: ketamine-label
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
x-order: 402
---

## Summary

Ketamine, PubChem CID 3821, as distinct from the hydrochloride salt in the cited injection label. The label's 2.5-hour figure is redistribution from the central nervous system, not an elimination half-life.

## Description

The structure is the parent compound titled Ketamine. The cited Eugia label is ketamine hydrochloride injection for intravenous or intramuscular use. The alpha phase lasts about 45 minutes and has a half-life of 10 to 15 minutes, corresponding clinically to the anesthetic effect. Elimination half-life is not established in this draft. A review of arylcyclohexylamine derivatives describes NMDA antagonism and dissociative effects.

## Evidence note

Redistribution half-life and the anesthetic alpha phase are not elimination. The label product is the hydrochloride salt.

## Doses

```yaml
- label: Intravenous induction
  amount: 1–4.5 mg/kg
  quantity: 1
  quantityMax: 4.5
  unit: mg/kg
  ingredient: Ketamine hydrochloride
  formulation: Injection
  route: Intravenous
  frequency: Initial induction dose
  duration: Administered slowly over 60 seconds
  population: Patients in the labeled induction-of-anesthesia context
  purpose: Induction of anesthesia
  sourceCategory: approved-label
  note: Labeled intravenous induction instruction. The intramuscular dose on the same label is not quoted here.
  sourceId: ketamine-label
- label: Alternative intravenous induction
  amount: 1–2 mg/kg
  quantity: 1
  quantityMax: 2
  unit: mg/kg
  ingredient: Ketamine hydrochloride
  formulation: Injection
  route: Intravenous
  frequency: Alternative induction
  duration: Rate of 0.5 mg/kg/min
  population: Patients in the labeled induction-of-anesthesia context
  purpose: Induction of anesthesia
  sourceCategory: approved-label
  note: The label's alternative intravenous induction instruction.
  sourceId: ketamine-label
```

## Pharmacokinetics

```yaml
- id: ketamine-unresolved
  analyte: Ketamine
  route: Intravenous
  formulation: Ketamine hydrochloride injection
  population: Patients described in the prescribing label
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Alpha-phase half-life 10 to 15 minutes and redistribution of about 2.5 hours are reported. Elimination half-life is not assigned from either figure.
  sourceId: ketamine-label
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
- title: NMDA antagonism
  description: The cited review connects NMDA receptor antagonism with dissociative effects of ketamine and synthetic arylcyclohexylamine derivatives.
  sourceId: pelletier2022
  conceptId: nmda-receptor
```

## Cautions

```yaml
- title: Blood pressure and hypersensitivity
  description: The label contraindicates ketamine when a significant elevation of blood pressure would be a serious hazard, and in known hypersensitivity to ketamine or any excipient.
  sourceId: ketamine-label
- title: Concomitant CNS depressants
  description: Concomitant opioid analgesics, benzodiazepines, or other CNS depressants, including alcohol, may result in profound sedation, respiratory depression, coma, or death. The label calls for close monitoring and an individualized dose adjustment.
  sourceId: ketamine-label
```

## Claims

```yaml
- id: ketamine-nmda
  assertion: A review of arylcyclohexylamine derivatives describes NMDA receptor antagonism leading to dissociative effects of ketamine and related compounds.
  relation: receptor-antagonism
  participants:
    - entityId: substance:ketamine
      role: substance
    - entityId: tag:nmda-receptor
      role: target
  context: Review of ketamine and synthetic derivatives
  sourceIds:
    - pelletier2022
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A review of a chemical series. It is not a binding constant for this parent record.
```

## Interactions

```yaml
- id: ketamine-cns-depressants
  name: Opioid analgesics, benzodiazepines, or other CNS depressants
  otherSlug: null
  summary: The label says concomitant use with opioid analgesics, benzodiazepines, or other CNS depressants, including alcohol, may result in profound sedation, respiratory depression, coma, or death.
  sourceId: ketamine-label
```

## Experience links

```yaml
- title: Ketamine on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Ketamine
  publisher: PsychonautWiki
```

## References

```yaml
- id: ketamine-label
  title: "Ketamine hydrochloride injection: prescribing information"
  authors: Eugia US LLC
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f8b01c77-620d-4734-a771-b8524b65bcca
  kind: Official prescribing label
  insight: Formulation-specific induction doses, redistribution, metabolism, contraindications, and the CNS-depressant warning.
  limitation: The product is ketamine hydrochloride injection. The 2.5-hour figure is redistribution, not elimination. Retrieval year is 2026.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: pelletier2022
  title: "Arylcyclohexylamine Derivatives: Pharmacokinetic, Pharmacodynamic, Clinical and Forensic Aspects"
  authors: Pelletier et al.
  year: 2022
  pmid: "36555217"
  url: https://pubmed.ncbi.nlm.nih.gov/36555217/
  kind: Review
  insight: Discusses ketamine and synthetic arylcyclohexylamine derivatives, NMDA antagonism, and dissociative effects.
  limitation: A review across a chemical series. It does not assign this article's elimination half-life.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Ketamine: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/3821
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

