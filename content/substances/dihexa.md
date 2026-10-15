---
slug: dihexa
name: Dihexa
subtitle: A preclinical HGF/c-MET research compound with compromised foundational evidence and no human dataset.
aliases:
  - dihexa
  - PNB-0408
  - N-hexanoyl-Tyr-Ile-(6)-aminohexanamide
formula: C27H44N4O5
molecularWeight: 504.7 g/mol
pubchemCid: 129010512
smiles: CCCCCC(=O)N[C@@H](CC1=CC=C(C=C1)O)C(=O)N[C@@H]([C@@H](C)CC)C(=O)NCCCCCC(=O)N
category: Experimental compound
tags:
  - experimental-compound
accent: "#8090a0"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: "Rat-only observations: 5.6 h serum stability; ~304 h IV terminal estimate; no human half-life"
  low: null
  high: null
  context: The two numeric observations are rat-specific and sourced from a Dihexa PK paper carrying a Notice of Concern. Human PK was not located.
  sourceId: dh-pk
  observationId: dihexa-rat-iv-half-life
kinetics:
  onset: Not established in humans.
  peak: Radiolabeled brain accumulation was reported in rats at 30 minutes.
  duration: No human subjective or clinical duration established.
  bioavailability: Human oral bioavailability is unknown.
  metabolism: Human metabolism, metabolites and clearance are unknown.
  sourceId: dh-pk
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
x-order: 9007199254740991
---

## Summary

Dihexa is a synthetic angiotensin-IV-derived peptidomimetic reported in rat PK and cognition studies. No registered or published human trial or human PK study was located. The principal mechanistic paper was retracted and the main PK/behavior paper carries a Notice of Concern, so animal findings require strong qualification. [dh-pk] [dh-retraction-2014] [dh-notice]

## Description

The CAS-linked record identifies C27H44N4O5 and CID 129010512; a separate PNB-0408 PubChem entry is not merged without stereochemical verification. [dh-pubchem] [dh-pubchem-pnb]

## Evidence note

This page separates rat doses, true rat half-life observations, preclinical outcomes, mechanistic hypotheses, integrity warnings and legal context. No human dose, efficacy, safety, interaction or half-life is established. [dh-trials] [dh-hgf-cancer]

## Doses

```yaml
- label: Rat IV PK
  amount: 10 mg/kg
  quantity: 10
  quantityMax: null
  unit: mg/kg
  ingredient: Dihexa
  formulation: Experimental solution
  route: Intravenous
  frequency: Single dose
  duration: PK sampling
  population: Rats
  purpose: Research exposure
  sourceCategory: research
  note: Historical animal parameter from paper under Notice of Concern; not a human dose.
  sourceId: dh-pk
- label: Rat intraperitoneal PK
  amount: 20 mg/kg
  quantity: 20
  quantityMax: null
  unit: mg/kg
  ingredient: Dihexa
  formulation: Experimental solution
  route: Intraperitoneal
  frequency: Single dose
  duration: PK sampling
  population: Rats
  purpose: Research exposure
  sourceCategory: research
  note: Historical animal parameter; not a human dose.
  sourceId: dh-pk
- label: Rat oral cognitive experiment
  amount: 2 mg/kg
  quantity: 2
  quantityMax: null
  unit: mg/kg
  ingredient: Dihexa
  formulation: Experimental preparation
  route: Oral
  frequency: Study-specific
  duration: Morris water maze study
  population: Scopolamine-impaired rats
  purpose: Research exposure
  sourceCategory: research
  note: Reported in a paper later retracted; not a human-equivalent dose.
  sourceId: dh-mechanism
- label: dihexa research exposure 1
  amount: 10 mg/kg
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: dihexa
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: In-vivo PK
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-dihexa-s2
- label: dihexa research exposure 2
  amount: 20 mg/kg
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: dihexa
  formulation: Not established
  route: Intraperitoneal
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: In-vivo PK
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-dihexa-s2
- label: dihexa research exposure 3
  amount: 2 mg/kg
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: dihexa
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Scopolamine-amnesia Morris water maze experiment
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-dihexa-s3
- label: dihexa research exposure 4
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: dihexa
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-dihexa-s9
```

## Pharmacokinetics

```yaml
- id: dihexa-rat-serum-half-life
  analyte: Dihexa
  route: In vitro rat serum
  formulation: Dihexa assay
  population: Rat serum stability experiment
  endpoint: elimination-half-life
  statistic: study-mean
  value: 5.59
  low: null
  high: null
  unit: hours
  context: Reported in-vitro rat-serum half-life 335.5 ± 9.5 minutes; animal-specific and from a paper under Notice of Concern.
  sourceId: dh-pk
  modelEligible: false
- id: dihexa-rat-iv-half-life
  analyte: Dihexa
  route: Intravenous
  formulation: Dihexa solution
  population: Three rats
  endpoint: elimination-half-life
  statistic: study-mean
  value: 304.27
  low: null
  high: null
  unit: hours
  context: Reported in-vivo terminal half-life 18,256 ± 7,787 minutes after 10 mg/kg IV; animal-specific and not a human estimate.
  sourceId: dh-pk
  modelEligible: false
- id: dr-dihexa-dihexa-pk-1
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
  modelEligible: false
- id: dr-dihexa-dihexa-pk-2
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
  modelEligible: false
- id: dr-dihexa-dihexa-pk-3
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
  modelEligible: false
- id: dr-dihexa-dihexa-pk-4
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-dihexa-s9
  modelEligible: false
- id: dr-dihexa-dihexa-pk-5
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
  modelEligible: false
```

## Modifiers

```yaml
- label: HGF antagonist Hinge
  effect: Reportedly blocked Dihexa-associated spinogenesis and mEPSC changes
  detail: Experimental pathway probe in the retracted 2014 paper; not a clinical co-treatment.
  sourceId: dh-mechanism
  observationId: dihexa-rat-iv-half-life
  factorType: other
  direction: variable
- label: c-MET shRNA
  effect: Reportedly blocked spine-induction effects
  detail: Experimental target manipulation in a retracted paper; no human validation.
  sourceId: dh-mechanism
  observationId: dihexa-rat-iv-half-life
  factorType: other
  direction: variable
- label: Modifier 1
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s3
  observationId: dr-dihexa-dihexa-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s3
  observationId: dr-dihexa-dihexa-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s3
  observationId: dr-dihexa-dihexa-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Dendritic spinogenesis
  direction: Increased
  evidence: Limited research
  description: Increased dendritic-spine density and synaptic-marker changes were reported in rat hippocampal preparations; the central mechanistic paper was retracted.
  sourceId: dh-mechanism
  population: Cultured rat hippocampal neurons and slices
  exposure: Experimental Dihexa exposure
  instrument: Spine density and synaptic markers
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Memory-task performance
  direction: Increased
  evidence: Limited research
  description: Morris water-maze deficit reversal was reported in scopolamine-impaired rats; the evidence is animal-only and integrity-compromised.
  sourceId: dh-pk
  population: Scopolamine-impaired rats
  exposure: 2 mg/kg oral Dihexa
  instrument: Morris water maze
  magnitude: null
  reportType: measured-assessment
- id: dr-dihexa-dihexa-effect-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: dihexa effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s3
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-effect-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: dihexa effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s3
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-effect-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: dihexa effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s2
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-effect-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: dihexa effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s9
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- conceptId: memory
  name: Morris water-maze performance
  direction: Increased
  evidence: Limited research
  description: A rat behavioral improvement was reported, but the relevant foundational papers carry a Notice of Concern or retraction.
  sourceId: dh-pk
  population: Scopolamine-impaired rats
  exposure: 2 mg/kg oral Dihexa
  instrument: Morris water maze
  magnitude: Animal-only; no human efficacy inference
  reportType: measured-assessment
- conceptId: memory
  name: Human cognitive efficacy
  direction: Variable
  evidence: Limited research
  description: No registered or published human Dihexa efficacy outcome was located.
  sourceId: dh-trials
  population: Humans; no verified study located
  exposure: No clinical exposure established
  instrument: ClinicalTrials.gov and PubMed searches
  magnitude: Not established
  reportType: measured-assessment
- id: dr-dihexa-dihexa-outcome-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: dihexa outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s9
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-outcome-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: dihexa outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s9
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-outcome-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: dihexa outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s9
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-dihexa-dihexa-outcome-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: dihexa outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-dihexa-s2
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Proposed HGF/c-MET potentiation
  description: The 2014 paper reported allosteric HGF modulation and enhanced c-MET phosphorylation, but that paper was retracted; these are historical claims rather than established mechanisms.
  sourceId: dh-mechanism
- title: Growth and invasion pathway context
  description: HGF/MET signaling participates in growth, survival, motility, angiogenesis, invasion and metastasis biology. This creates a mechanistic tumor concern, not evidence of Dihexa-specific human cancer.
  sourceId: dh-hgf-cancer
- title: Preclinical synaptic signaling
  description: Reported synaptic and electrophysiological effects were observed in cell or rat models and do not establish human cognitive efficacy.
  sourceId: dh-mechanism
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: dr-dihexa-s3
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: dr-dihexa-s3
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: dr-dihexa-s8
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: dr-dihexa-s8
```

## Cautions

```yaml
- title: Human exposure unknown
  description: No verified human dose, PK, efficacy, safety or adverse-event dataset was located.
  sourceId: dh-trials
- title: Data integrity
  description: Two central papers were retracted and a Dihexa-focused PK/behavior paper carries a Notice of Concern; foundational findings require qualification.
  sourceId: dh-retraction-2014
- title: Tumor-pathway concern
  description: HGF/MET biology supports a theoretical concern about potentiating growth or invasion pathways; no Dihexa-specific human tumor signal has been demonstrated.
  sourceId: dh-hgf-cancer
- title: Rodent PK is not human PK
  description: Rat serum and IV terminal half-lives cannot define human accumulation, schedule or safety.
  sourceId: dh-pk
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-dihexa-s9
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-dihexa-s8
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-dihexa-s4
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-dihexa-s2
```

## Claims

```yaml
- id: dh-human-cognition
  assertion: Dihexa improves human cognition.
  relation: clinical-efficacy
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:memory
      role: outcome-domain
  context: No human efficacy trial was located.
  sourceIds:
    - dh-trials
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal cognitive performance does not establish clinical benefit.
- id: dh-mechanism
  assertion: Dihexa is a proven HGF/c-MET activator.
  relation: mechanism
  participants:
    - entityId: substance:dihexa
      role: compound
    - entityId: tag:experimental-compound
      role: research-context
  context: The central mechanistic paper was retracted.
  sourceIds:
    - dh-mechanism
    - dh-retraction-2014
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanism remains unconfirmed.
- id: dh-bbb
  assertion: Dihexa crosses the blood-brain barrier in humans.
  relation: distribution
  participants:
    - entityId: substance:dihexa
      role: compound
    - entityId: tag:experimental-compound
      role: research-context
  context: Brain accumulation was reported in rats; human CNS exposure is unknown.
  sourceIds:
    - dh-pk
    - dh-trials
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Species and measurement limitations.
- id: dh-cancer
  assertion: Dihexa causes cancer.
  relation: safety
  participants:
    - entityId: substance:dihexa
      role: compound
    - entityId: tag:experimental-compound
      role: pathway-context
  context: Only a pathway-based theoretical concern is supported.
  sourceIds:
    - dh-hgf-cancer
    - dh-trials
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No human tumor outcome demonstrates causation.
- id: dh-dose
  assertion: Rodent doses define a human dose.
  relation: dose-translation
  participants:
    - entityId: substance:dihexa
      role: compound
    - entityId: tag:experimental-compound
      role: animal-model
  context: No clinical dose exists.
  sourceIds:
    - dh-pk
    - dh-trials
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal doses cannot be converted into validated human regimens.
- id: dr-dihexa-dihexa-claim-1
  assertion: Dihexa improves human cognition
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s9
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-dihexa-dihexa-claim-2
  assertion: Dihexa is a proven HGF/c-MET activator
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s3
    - dr-dihexa-s4
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-dihexa-dihexa-claim-3
  assertion: Dihexa crosses the blood-brain barrier
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s2
    - dr-dihexa-s7
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-dihexa-dihexa-claim-4
  assertion: Rodent doses define a human dose
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s2
    - dr-dihexa-s3
    - dr-dihexa-s9
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-dihexa-dihexa-claim-5
  assertion: Dihexa causes cancer
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s8
    - dr-dihexa-s9
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-dihexa-dihexa-claim-6
  assertion: Dihexa is safe in humans
  relation: evidence-boundary
  participants:
    - entityId: substance:dihexa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-dihexa-s9
    - dh-trials
  conflictingSourceIds:
    - dr-dihexa-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: dh-hgf-probe
  name: HGF antagonist Hinge
  otherSlug: null
  summary: Used as an experimental pathway probe; no clinical interaction guidance follows.
  sourceId: dh-mechanism
  context: Mechanistic experiment, not a human drug interaction.
- id: dh-cmet-probe
  name: c-MET shRNA
  otherSlug: null
  summary: Used as an experimental target manipulation; no clinical interaction guidance follows.
  sourceId: dh-mechanism
  context: Mechanistic experiment, not a human drug interaction.
- id: dr-dihexa-interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-dihexa-s9
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-dihexa-s1
- id: dr-dihexa-interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-dihexa-s3
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-dihexa-s1
- id: dr-dihexa-interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-dihexa-s3
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-dihexa-s1
- id: dr-dihexa-interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-dihexa-s8
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-dihexa-s1
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: dh-pubchem
  title: N-(1-Oxohexyl)-L-tyrosyl-N-(6-amino-6-oxohexyl)-L-isoleucinamide | CID 129010512
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/129010512
  kind: Chemical database
  insight: CAS-linked name, formula, molecular weight and CID.
  limitation: Identity record, not efficacy or safety evidence.
  funding: NCBI/NIH infrastructure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dh-pubchem-pnb
  title: Dihexa (PNB-0408) | CID 125355097
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/Dihexa-_PNB-0408
  kind: Chemical database
  insight: Indexes the PNB-0408 synonym.
  limitation: Separate registry entry, not merged without stereochemical verification.
  funding: NCBI/NIH infrastructure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dh-pk
  title: Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia
    agents
  authors: Alene T. McCoy; Caroline C. Benoist; John W. Wright; Leen H. Kawas; et
    al.
  year: 2013
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/
  kind: Original preclinical paper
  insight: Dihexa rat PK, brain penetration, serum stability and behavioral reports.
  limitation: 2021 Notice of Concern; no human data.
  funding: Not stated in article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dh-mechanism
  title: The procognitive and synaptogenic effects of angiotensin IV-derived peptides
    are dependent on activation of HGF/c-Met
  authors: Leen H. Kawas; John W. Wright; Joseph W. Harding; et al.
  year: 2014
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4270014/
  kind: Original preclinical mechanistic paper
  insight: Reported HGF binding, c-MET signaling, synaptogenesis and rat cognition.
  limitation: Retracted in 2025 after WSU data-integrity findings.
  funding: Not stated; M3 Biotechnology affiliations present.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Commercial affiliations disclosed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4270014/
- id: dh-retraction-2014
  title: 'Retraction: The procognitive and synaptogenic effects of angiotensin IV-derived
    peptides'
  authors: Journal editorial record
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12063880/
  kind: Retraction notice
  insight: Specified figures and erratum data contained falsified and/or fabricated
    data.
  limitation: Does not independently validate remaining Dihexa literature.
  funding: Not applicable to retraction notice.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dh-2012
  title: Development of angiotensin IV analogs as HGF/Met modifiers
  authors: John W. Wright; Leen H. Kawas; Joseph W. Harding; et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22464142/
  kind: Original preclinical paper
  insight: Reported HGF/Met modulation by angiotensin-IV analogs.
  limitation: Retracted in 2025.
  funding: Research support, non-U.S. government indexed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No complete statement located.
  conflictOfInterestStatus: not-assessed
  pmid: '22464142'
- id: dh-retraction-2012
  title: 'Retraction: Development of angiotensin IV analogs as HGF/Met modifiers'
  authors: Journal editorial record
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40311219/
  kind: Retraction notice
  insight: States specified figures contained falsified and/or fabricated data.
  limitation: Retraction notice is not a clinical safety assessment.
  funding: Not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '40311219'
- id: dh-notice
  title: 'Expression of Concern: Evaluation of metabolically stabilized angiotensin
    IV analogs'
  authors: Journal editorial record
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8184897/
  kind: Notice of Concern
  insight: Flags the main Dihexa PK/behavior paper.
  limitation: Does not determine whether every result is invalid.
  funding: Not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8184897/
- id: dh-hgf-cancer
  title: Hepatocyte Growth Factor/c-MET Signaling in Cancer
  authors: George D. Birchmeier; Walter Birchmeier
  year: 2010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2888806/
  kind: Cancer-biology review
  insight: Describes HGF/MET roles in oncogenesis, invasion, angiogenesis and metastasis.
  limitation: Not Dihexa-specific and does not demonstrate Dihexa toxicity.
  funding: Funding not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dh-trials
  title: ClinicalTrials.gov Dihexa and PNB-0408 searches
  authors: U.S. National Library of Medicine
  year: 2026
  url: https://clinicaltrials.gov/search?term=dihexa
  kind: Clinical trial registry search
  insight: No directly indexed Dihexa/PNB-0408 human study located in the reviewed
    search.
  limitation: Registry absence cannot exclude unregistered human exposure.
  funding: U.S. government registry.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None reported.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://clinicaltrials.gov/search?term=dihexa
- id: dh-fda-compounding
  title: Dihexa Acetate compounding nomination record
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/drugs/human-drug-compounding/503a-bulk-drug-substances-nomination-under-section-503a-federal-food-drug-and-cosmetic-act
  kind: Regulatory administrative record
  insight: Dihexa acetate nomination was withdrawn from a compounding category.
  limitation: Withdrawal is not approval or safety evidence.
  funding: U.S. federal agency.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None reported.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/drugs/human-drug-compounding/503a-bulk-drug-substances-nomination-under-section-503a-federal-food-drug-and-cosmetic-act
- id: dh-wsu-patent
  title: Faculty inventors and M3 Biotechnology growth-factor-modulator program
  authors: Washington State University
  year: 2017
  url: https://research.wsu.edu/inventors/joseph-harding/
  kind: University commercialization record
  insight: Associates Harding and Wright with growth-factor-modulator patent/commercialization
    context.
  limitation: Institutional summary, not patent claim chart or clinical validation.
  funding: Not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s1
  title: N-(1-Oxohexyl)-L-tyrosyl-N-(6-amino-6-oxohexyl)-L-isoleucinamide | C27H44N4O5
    | CID 129010512 - PubChem
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  kind: Chemical database record
  insight: CAS-linked chemical name, formula, molecular weight, and CID
  limitation: Identity record; not efficacy or safety evidence
  funding: NCBI/NIH infrastructure; record does not state study funding
  sponsorshipStatus: not-assessed
  conflictsOfInterest: None reported
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s2
  title: Dihexa (PNB-0408) | C27H44N4O5 | CID 125355097 - PubChem
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/Dihexa-_PNB-0408"
  kind: Chemical database record
  insight: Indexes the PNB-0408 synonym
  limitation: Separate registry entry; not merged here with the CAS-linked record
  funding: NCBI/NIH infrastructure; not otherwise stated
  sponsorshipStatus: not-assessed
  conflictsOfInterest: None reported
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s3
  title: Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia
    agents
  authors: Alene T. McCoy, Caroline C. Benoist, John W. Wright, Leen H. Kawas, Jyote
    M. Bule-Ghogare, Mingyan Zhu, Suzanne M. Appleyard, Gary A. Wayman, Joseph W.
    Harding
  year: 2013
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/"
  kind: Original preclinical paper
  insight: Dihexa rat PK, brain penetration, serum stability, and behavioral reports
  limitation: 2021 Notice of Concern; no human data
  funding: Not stated in the retrieved article record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No complete statement located in the retrieved record
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s4
  title: The procognitive and synaptogenic effects of angiotensin IV-derived peptides
    are dependent on activation of the hepatocyte growth factor/c-met system
  authors: Caroline C. Benoist, Leen H. Kawas, Mingyan Zhu, Katherine A. Tyson, Lori
    Stillmaker, Suzanne M. Appleyard, John W. Wright, Gary A. Wayman, Joseph W. Harding
  year: 2014
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4201273/"
  kind: Original preclinical paper; retracted
  insight: Reported HGF binding, c-MET signaling, synaptogenesis, and rat cognition
  limitation: Retracted in 2025 after WSU data-integrity findings
  funding: Not stated in the retrieved article record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Kawas, Wright, and Harding had M3 Biotechnology affiliations
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s5
  title: Retraction notice to “The Procognitive and Synaptogenic Effects of Angiotensin
    IV-Derived Peptides Are Dependent on Activation of the Hepatocyte Growth Factor/c-Met
    System” [J Pharmacol Exp Ther 351 (2014) 390-402]
  authors: Caroline C. Benoist, Leen H. Kawas, Mingyan Zhu, Katherine A. Tyson, Lori
    Stillmaker, Suzanne M. Appleyard, John W. Wright, Gary A. Wayman, Joseph W. Harding
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13095468/"
  kind: Retraction notice
  insight: States that specified figures and erratum data contained falsified and/or
    fabricated data
  limitation: Does not independently validate remaining Dihexa literature
  funding: Not applicable to the retraction notice
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Original authors retained in the notice; M3 affiliations appear
    in the record
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s6
  title: Development of angiotensin IV analogs as hepatocyte growth factor/Met modifiers
  authors: Leen H. Kawas, Alene T. McCoy, Brent J. Yamamoto, John W. Wright, Joseph
    W. Harding
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22129598/"
  kind: Original preclinical paper; retracted
  insight: Reported HGF/Met modulation by angiotensin-IV analogs
  limitation: Retracted in 2025
  funding: Research Support, Non-U.S. Government listed by PubMed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No complete statement located in the retrieved record
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s7
  title: Retraction notice to “Development of Angiotensin IV Analogs as Hepatocyte
    Growth Factor/Met Modifiers” [J Pharmacol Exp Ther 340 (2012) 539-548]
  authors: Leen H. Kawas, Alene T. McCoy, Brent J. Yamamoto, John W. Wright, Joseph
    W. Harding
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40312092/"
  kind: Retraction notice
  insight: States that Figures 3A and 4 contained falsified and/or fabricated data
  limitation: Retraction notice is not a clinical safety assessment
  funding: Not applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Original author affiliations are retained
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s8
  title: 'Notice of Concern: McCoy AT, Benoist CC, Wright JW, Kawas LH, Bule-Ghogare
    JM, Zhu M, Appleyard SM, Wayman GA, and Harding JW (2013) Evaluation of Metabolically
    Stabilized Angiotensin IV Analogs as Procognitive/Antidementia Agents, J Pharmacol
    Exp Ther, 344: 141-154; DOI: 10.1124/jpet.112.199497'
  authors: The Journal of Pharmacology and Experimental Therapeutics; original authors
    McCoy et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34551989/"
  kind: Expression of concern
  insight: Flags the main Dihexa PK/behavior paper
  limitation: Does not itself determine whether every result is invalid
  funding: Not applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in notice
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s9
  title: Targeting the HGF/Met Signaling Pathway in Cancer
  authors: Fabiana Cecchi, Daniel C. Rabe, Douglas P. Bottaro
  year: 2010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3412517/"
  kind: Peer-reviewed cancer-biology review
  insight: Describes HGF/MET roles in oncogenesis, invasion, angiogenesis, and metastasis
  limitation: Not Dihexa-specific and does not demonstrate Dihexa toxicity
  funding: Not stated in the retrieved article record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved record
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s11
  title: Bulk Drug Substances Nominated for Use in Compounding Under Section 503A
    | Updated April 22, 2026
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/media/94155/download?attachment="
  kind: Regulatory document
  insight: Dihexa Acetate is shown as removed from Category 2 because the nomination
    was withdrawn
  limitation: Administrative compounding status; not approval or clinical safety evidence
  funding: U.S. federal agency
  sponsorshipStatus: not-assessed
  conflictsOfInterest: None reported
  conflictOfInterestStatus: not-assessed
- id: dr-dihexa-s12
  title: External Review of Innovation and Entrepreneurship at WSU
  authors: Washington State University
  year: 2017
  url: https://research.wsu.edu/documents/2017/03/external-review-of-innovation-and-entrepreneurship-at-wsu.pdf"
  kind: Institutional innovation report
  insight: Identifies Joseph Harding and John Wright as faculty inventors associated
    with M3’s growth-factor-modulator and patent-disclosure program
  limitation: Institutional summary, not a patent claim chart or clinical validation
  funding: Not stated
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Institutional and commercialization context is inherent
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Human approval or marketed therapeutic use
  status: No FDA-approved Dihexa product or human-use authorization was identified in the reviewed sources.
  sourceUrl: https://clinicaltrials.gov/search?term=dihexa
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Compounding nomination
  status: A Dihexa acetate nomination was withdrawn; withdrawal is not approval or a finding of safety.
  sourceUrl: https://www.fda.gov/drugs/human-drug-compounding/503a-bulk-drug-substances-nomination-under-section-503a-federal-food-drug-and-cosmetic-act
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Patent/commercialization context
  status: WSU records associate Harding and Wright with a growth-factor-modulator patent/commercialization program; this does not establish efficacy.
  sourceUrl: https://research.wsu.edu/inventors/joseph-harding/
  asOf: 2026-10-11
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pubchem.ncbi.nlm.nih.gov/compound/129010512"
  asOf: 2026-10-10
```
