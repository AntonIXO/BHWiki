---
slug: methylphenidate
name: Methylphenidate
subtitle: A transporter target, a clinical context.
aliases:
  - Ritalin
  - Concerta
  - MPH
formula: C14H19NO2
molecularWeight: 233.31 g/mol
pubchemCid: 4158
smiles: COC(=O)C(C1CCCCN1)C2=CC=CC=C2
category: Stimulant medicine
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
  - attention
accent: "#b4a0c3"
reviewedAt: 2026-09-29
editorialStatus: sourced-draft
halfLife:
  label: Mean about 3.5 hours
  low: 3.5
  high: 3.5
  context: Adult immediate-release tablet estimate reported in the Ritalin LA label; formulation controls delivery separately.
  sourceId: methylphenidate-pk-label
  observationId: methylphenidate-ir-mean
kinetics:
  onset: Not established here
  peak: About 2 hours after the label's 10 mg immediate-release tablet exposure
  duration: Depends on formulation; not assigned from plasma half-life
  bioavailability: Enantiomer-specific and affected by first-pass metabolism; no single value assigned here
  metabolism: Primarily de-esterification to ritalinic acid
  sourceId: methylphenidate-label
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
x-order: 7
---

## Summary

A stimulant medicine with formulation-dependent delivery. ADHD treatment findings and attention-task results should retain their population and exposure context.

## Description

Methylphenidate is used in clinical treatment of ADHD and narcolepsy. It inhibits catecholamine reuptake, including dopamine transporters. The displayed structure is the parent compound; study and labeled products commonly contain its hydrochloride salt.

## Evidence note

A treatment response in ADHD does not establish cognitive enhancement in people without ADHD.

## Doses

```yaml
- label: Adult ADHD cognitive-task experiment
  amount: 30 mg once
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
  formulation: Oral study medication; salt not specified in abstract
  route: Oral
  frequency: Single study exposure
  duration: Acute crossover experiment
  population: 24 adults recruited from an ADHD clinic; 18 met DSM-IV ADHD criteria
  purpose: Assess attention and spatial working memory
  sourceCategory: research
  note: A monitored experimental exposure, not a dosing recommendation or a formulation conversion.
  sourceId: turner2005
```

## Pharmacokinetics

```yaml
- id: methylphenidate-ir-mean
  analyte: Methylphenidate
  route: Oral
  formulation: Immediate-release Ritalin tablet
  population: Adults in label pharmacokinetic studies
  endpoint: elimination-half-life
  statistic: study-mean
  value: 3.5
  low: null
  high: null
  unit: hours
  context: Approximate adult mean; distinct from the reported range and from extended-release delivery duration.
  sourceId: methylphenidate-pk-label
  modelEligible: true
- id: methylphenidate-ir-range
  analyte: Methylphenidate
  route: Oral
  formulation: Immediate-release Ritalin tablet
  population: Adults in label pharmacokinetic studies
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.3
  high: 7.7
  unit: hours
  context: Reported adult range, not a confidence interval or a personal prediction.
  sourceId: methylphenidate-pk-label
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
- conceptId: attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: Attention-task performance improved in the subgroup meeting ADHD diagnostic criteria. Participants without that diagnosis showed a different response pattern.
  sourceId: turner2005
  population: Adults meeting DSM-IV ADHD criteria within a clinic-recruited study
  exposure: Single 30 mg oral study exposure
  instrument: Sustained-attention task; instrument details not assessed in this draft
  magnitude: null
```

## Mechanisms

```yaml
- title: Dopamine transporter blockade
  description: Human PET detected dose-dependent transporter occupancy after oral administration.
  sourceId: volkow1998
  conceptId: dopamine-transporter
```

## Cautions

```yaml
- title: Misuse, dependence and withdrawal
  description: Prescribing information carries a boxed warning for abuse, misuse and addiction and describes physical dependence and withdrawal.
  sourceId: methylphenidate-label
- title: Cardiovascular and psychiatric context
  description: The label describes cardiovascular and psychiatric risks and monitoring requirements.
  sourceId: methylphenidate-label
- title: Formulations differ
  description: Immediate-release elimination data do not describe the release profile of every extended-release product.
  sourceId: methylphenidate-pk-label
```

## Claims

```yaml
- id: methylphenidate-dat
  assertion: Oral methylphenidate occupied dopamine transporters in a PET study.
  relation: transporter-occupancy
  participants:
    - entityId: substance:methylphenidate
      role: substance
    - entityId: tag:dopamine-transporter
      role: target
    - entityId: tag:dopamine
      role: transmitter
  context: Acute exposure in healthy volunteers
  sourceIds:
    - volkow1998
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanistic imaging does not measure clinical response.
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
- id: methylphenidate-label
  title: "RITALIN immediate-release tablets: prescribing information"
  authors: Novartis Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0bf0835-6a2f-4067-a158-8b86c4b0668a
  kind: Official prescribing label
  insight: Describes immediate-release absorption, metabolism, clinical use and safety.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: methylphenidate-pk-label
  title: "RITALIN LA: pharmacokinetic comparison with Ritalin tablets"
  authors: Novartis Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=effd952d-ac94-47bb-b107-589a4934dcca
  kind: Official prescribing label
  insight: Separately reports adult mean and range for immediate-release methylphenidate elimination.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: turner2005
  title: Neurocognitive effects of methylphenidate in adult attention-deficit/hyperactivity disorder
  authors: Turner et al.
  year: 2005
  pmid: "15338103"
  doi: 10.1007/s00213-004-1993-5
  url: https://pubmed.ncbi.nlm.nih.gov/15338103/
  kind: Randomized placebo-controlled crossover study
  insight: Observed changes in sustained attention and spatial working memory in the diagnosed subgroup.
  limitation: Small acute study, with differing diagnostic subgroups; not evidence for universal enhancement.
  funding: Not assessed in this draft.
- id: volkow1998
  title: Dopamine transporter occupancies in the human brain induced by therapeutic doses of oral methylphenidate
  authors: Volkow et al.
  year: 1998
  pmid: "9766762"
  doi: 10.1176/ajp.155.10.1325
  url: https://pubmed.ncbi.nlm.nih.gov/9766762/
  kind: Human PET study
  insight: Directly measured dopamine transporter occupancy after oral methylphenidate.
  limitation: Small selected sample and a mechanistic endpoint.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Methylphenidate: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/4158
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure and connectivity SMILES.
  limitation: The parent compound identity is distinct from salts, formulations and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

