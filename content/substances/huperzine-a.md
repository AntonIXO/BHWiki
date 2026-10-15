---
slug: huperzine-a
name: Huperzine A
subtitle: A reversible cholinesterase inhibitor with mixed Alzheimer evidence and uncertain supplement quality.
aliases:
  - huperzine a
  - HupA
  - selagine
formula: C15H18N2O
molecularWeight: 242.32 g/mol
pubchemCid: 854026
smiles: C/C=C/1\[C@@H]2CC3=C([C@]1(CC(=C2)C)N)C=CC(=O)N3
category: Cholinesterase inhibitor
tags:
  - acetylcholine
  - experimental-compound
accent: "#8090a0"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: Approximately 11.9 hours in one small single-dose human PK study
  low: null
  high: null
  context: A 12-volunteer study reported approximately 716 minutes; this is not a universal individual half-life and other small studies vary.
  sourceId: hup-pk
  observationId: huperzine-a-human-half-life
kinetics:
  onset: Tmax approximately 58 minutes after oral 0.4 mg in the cited human PK study.
  peak: Human plasma Tmax approximately 58–80 minutes across small studies.
  duration: Subjective or clinical duration is not established by the PK study.
  bioavailability: Rapid oral appearance; CNS penetration is reported but quantitative clinical brain exposure is not established.
  metabolism: Substantial unchanged urinary excretion has been reported; CYP interaction evidence is limited.
  sourceId: hup-pk
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

Huperzine A is a plant-derived, brain-penetrant reversible acetylcholinesterase inhibitor. Alzheimer trials are mixed: a U.S. phase-II prespecified endpoint was null, while smaller Chinese trials and pooled analyses report signals. Healthy enhancement evidence is sparse and includes a null adult exercise study. [hup-ad-us] [hup-ad-cn] [hup-meta]

## Description

Purified HupA is not dose-equivalent to unstandardized Huperzia serrata extract, which contains multiple alkaloids and may be inaccurately labeled. One small human PK study reported a terminal half-life of about 11.9 hours. [hup-chemistry] [hup-products] [hup-pk]

## Evidence note

This page separates symptomatic AD outcomes, selected healthy studies, human PK and cholinergic safety. No chronic safe intake or disease-modifying effect is established; funding and conflicts are marked on the cited records. [hup-rivm] [hup-ad-us]

## Doses

```yaml
- label: U.S. AD phase-II primary comparison
  amount: 200 µg twice daily
  quantity: 200
  quantityMax: null
  unit: µg/dose
  ingredient: Purified Huperzine A
  formulation: Study capsules
  route: Oral
  frequency: Twice daily
  duration: 16 weeks placebo-controlled; active follow-up to week 24
  population: 210 people with mild-to-moderate Alzheimer disease
  purpose: Research exposure
  sourceCategory: research
  note: Prespecified ADAS-Cog endpoint was null.
  sourceId: hup-ad-us
- label: U.S. AD phase-II higher arm
  amount: 400 µg twice daily
  quantity: 400
  quantityMax: null
  unit: µg/dose
  ingredient: Purified Huperzine A
  formulation: Study capsules
  route: Oral
  frequency: Twice daily
  duration: 16 weeks placebo-controlled
  population: 210 people with mild-to-moderate Alzheimer disease
  purpose: Research exposure
  sourceCategory: research
  note: Secondary week-11 signal did not remain significant at week 16.
  sourceId: hup-ad-us
- label: Chinese AD trial
  amount: 400 µg/day
  quantity: 400
  quantityMax: null
  unit: µg/day
  ingredient: Purified Huperzine A
  formulation: Study tablets
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: 202 people with mild-to-moderate Alzheimer disease
  purpose: Research exposure
  sourceCategory: research
  note: Reported positive cognitive, functional and global results; methods and funding details are limited publicly.
  sourceId: hup-ad-cn
- label: Adolescent memory study
  amount: 100 µg twice daily
  quantity: 100
  quantityMax: null
  unit: µg/dose
  ingredient: Huperzine A capsule
  formulation: Study capsules
  route: Oral
  frequency: Twice daily
  duration: 4 weeks
  population: 68 selected adolescents reporting memory inadequacy
  purpose: Research exposure
  sourceCategory: research
  note: Selected population; not general healthy cognition evidence.
  sourceId: hup-adolescent
- label: Exercise crossover
  amount: 200 µg single dose
  quantity: 200
  quantityMax: null
  unit: µg
  ingredient: Huperzine A
  formulation: Study capsule
  route: Oral
  frequency: Single dose
  duration: Acute crossover
  population: 15 exercise-trained adults
  purpose: Research exposure
  sourceCategory: research
  note: Cognition, performance and perceived exertion were null.
  sourceId: hup-exercise
- label: Human PK study
  amount: 0.4 mg single dose
  quantity: 0.4
  quantityMax: null
  unit: mg
  ingredient: Huperzine A
  formulation: Study capsule
  route: Oral
  frequency: Single dose
  duration: PK sampling period
  population: 12 healthy volunteers
  purpose: Research exposure
  sourceCategory: research
  note: Tmax ~58 min; terminal half-life ~716 min.
  sourceId: hup-pk
- label: huperzine-a research exposure 1
  amount: 200 µg twice daily; comparator arm escalated to 400 µg twice daily
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Placebo-controlled to week 16; active follow-up to week 24
  population: AD, U.S. phase II
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-ad-us
- label: huperzine-a research exposure 2
  amount: 400 µg/day
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 12 weeks
  population: AD, Chinese multicenter trial
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-ad-cn
- label: huperzine-a research exposure 3
  amount: 100 µg twice daily
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 4 weeks
  population: Adolescents reporting memory inadequacy
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-adolescent
- label: huperzine-a research exposure 4
  amount: 200 µg single dose
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Acute crossover exposure
  population: Healthy exercise-trained adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-exercise
- label: huperzine-a research exposure 5
  amount: 400 µg single dose
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Single-dose PK study
  population: Healthy pharmacokinetic volunteers
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-pk
- label: huperzine-a research exposure 6
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: huperzine-a
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: hup-rivm
```

## Pharmacokinetics

```yaml
- id: huperzine-a-human-half-life
  analyte: Huperzine A
  route: Oral
  formulation: Purified Huperzine A capsule
  population: 12 healthy human volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 11.93
  low: null
  high: null
  unit: hours
  context: Single 0.4 mg human PK study reported terminal half-life of approximately 716 minutes (11.9 hours); estimates vary across other small studies.
  sourceId: hup-pk
  modelEligible: true
- id: dr-huperzine-a-huperzine-a-pk-1
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
  sourceId: hup-pk
  modelEligible: false
- id: dr-huperzine-a-huperzine-a-pk-2
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
  sourceId: hup-pk
  modelEligible: false
- id: dr-huperzine-a-huperzine-a-pk-3
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
  sourceId: hup-rivm
  modelEligible: false
- id: dr-huperzine-a-huperzine-a-pk-4
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
  sourceId: hup-rivm
  modelEligible: false
- id: dr-huperzine-a-huperzine-a-pk-5
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
  sourceId: hup-ad-us
  modelEligible: false
```

## Modifiers

```yaml
- label: Clinical population
  effect: AD response differed across trials
  detail: The U.S. primary endpoint was null while a Chinese trial reported broader improvements; pooled evidence is low-confidence.
  sourceId: hup-ad-us
  observationId: huperzine-a-human-half-life
  factorType: other
  direction: variable
- label: Form identity
  effect: Purified HupA differs from Huperzia extract
  detail: Extracts contain multiple alkaloids and product assays frequently miss or misstate labeled ingredients.
  sourceId: hup-products
  observationId: huperzine-a-human-half-life
  factorType: other
  direction: variable
- label: Age and baseline state
  effect: Healthy enhancement signals are population-specific
  detail: Selected adolescents and one small adult exercise trial cannot establish benefit for healthy adults generally.
  sourceId: hup-adolescent
  observationId: huperzine-a-human-half-life
  factorType: other
  direction: variable
- label: Modifier 1
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  observationId: dr-huperzine-a-huperzine-a-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  observationId: dr-huperzine-a-huperzine-a-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: hup-products
  observationId: dr-huperzine-a-huperzine-a-pk-1
  factorType: other
  direction: variable
- label: Modifier 4
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: hup-products
  observationId: dr-huperzine-a-huperzine-a-pk-1
  factorType: other
  direction: variable
- label: Modifier 5
  effect: Variable
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: hup-rivm
  observationId: dr-huperzine-a-huperzine-a-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Subjective cognitive experience
  direction: Variable
  evidence: Human research
  description: Selected adolescent students reported higher memory-quotient scores after four weeks; the population and design are not generalizable.
  sourceId: hup-adolescent
  population: 68 adolescents reporting memory inadequacy
  exposure: 100 µg twice daily for 4 weeks
  instrument: Memory-quotient assessment
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Cholinergic adverse effects
  direction: Variable
  evidence: Human research
  description: Nausea, vomiting, diarrhea, sweating, dizziness, insomnia and bradycardia are reported in clinical and safety sources.
  sourceId: hup-rivm
  population: Adults exposed to HupA or Huperzia preparations
  exposure: Purified HupA or herbal preparations
  instrument: Adverse-event reports
  magnitude: null
  reportType: measured-assessment
- id: dr-huperzine-a-huperzine-a-effect-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: huperzine-a effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-effect-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: huperzine-a effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: hup-meta
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-effect-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: huperzine-a effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- conceptId: memory
  name: ADAS-Cog in Alzheimer disease
  direction: Variable
  evidence: Human research
  description: The U.S. phase-II prespecified 200 µg twice-daily comparison was null at week 16; the higher-dose signal was secondary and not durable.
  sourceId: hup-ad-us
  population: 210 people with mild-to-moderate AD
  exposure: 200 or 400 µg twice daily for 16 weeks
  instrument: ADAS-Cog
  magnitude: Primary comparison null
  reportType: measured-assessment
- conceptId: memory
  name: Cognitive and global measures in Chinese Alzheimer trial
  direction: Increased
  evidence: Human research
  description: A 202-person placebo-controlled trial reported improvements across cognitive, functional, behavioral and global measures.
  sourceId: hup-ad-cn
  population: 202 people with mild-to-moderate AD
  exposure: 400 µg/day for 12 weeks
  instrument: Cognitive, functional, behavioral and global measures
  magnitude: null
  reportType: measured-assessment
- conceptId: memory
  name: Healthy exercise-trial cognition
  direction: Variable
  evidence: Human research
  description: A randomized crossover study found no cognitive, exercise-performance or perceived-exertion benefit after one 200 µg dose.
  sourceId: hup-exercise
  population: 15 exercise-trained adults
  exposure: 200 µg single dose
  instrument: Cognitive tasks and perceived exertion
  magnitude: "Null"
  reportType: measured-assessment
- conceptId: memory
  name: Mild cognitive impairment
  direction: Variable
  evidence: Limited research
  description: Cochrane found no eligible placebo-controlled RCTs, so efficacy and safety could not be estimated.
  sourceId: hup-mci
  population: People with mild cognitive impairment
  exposure: No eligible intervention trial
  instrument: Systematic-review eligibility
  magnitude: null
  reportType: measured-assessment
- id: dr-huperzine-a-huperzine-a-outcome-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: ADAS-Cog in AD
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-outcome-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Activities of daily living
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-outcome-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Global clinical status and neuropsychiatric symptoms
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-outcome-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: MCI
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-mci
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-outcome-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Healthy cognitive enhancement
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-exercise
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-huperzine-a-huperzine-a-outcome-6
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Disease modification
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: hup-ad-us
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Reversible acetylcholinesterase inhibition
  description: HupA inhibits AChE and can increase cholinergic signaling; this is the rationale for symptomatic AD research, not proof of disease modification.
  sourceId: hup-ad-us
- title: Preclinical neuroprotective pathways
  description: NMDA antagonism, amyloid, oxidative-stress, mitochondrial and nerve-growth-factor effects are reported mainly preclinically and do not establish human neuroprotection.
  sourceId: hup-meta
- title: Brain penetration
  description: HupA is described as brain-penetrant, but human quantitative CNS exposure and clinical translation remain uncertain.
  sourceId: hup-pk
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: hup-ad-us
- title: Research mechanism
  description: Source-specific mechanism detail is preserved in the cited source.
  sourceId: hup-ad-us
```

## Cautions

```yaml
- title: Cholinergic toxicity
  description: GI upset, sweating, salivation, tremor, blurred vision, dysarthria and bradycardia are safety concerns; overdose notifications include severe cholinergic symptoms.
  sourceId: hup-rivm
- title: Long-term exposure
  description: No chronic safe intake or health-based guidance value was established; reproductive, developmental and genotoxicity data are incomplete.
  sourceId: hup-rivm
- title: Product mislabeling
  description: In a 22-product analysis, most products had at least one labeled ingredient not detected and only two declared HupA amounts were within 10% of label.
  sourceId: hup-products
- title: Evidence integrity
  description: AD trials are small and heterogeneous with possible publication bias; healthy-enhancement evidence is sparse and includes null findings.
  sourceId: hup-meta
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: hup-rivm
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: hup-rivm
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: hup-products
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: hup-meta
```

## Claims

```yaml
- id: hup-ad
  assertion: Huperzine A treats Alzheimer disease.
  relation: clinical-efficacy
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:memory
      role: outcome-domain
  context: "Clinical evidence is mixed: one U.S. phase-II primary endpoint was null while smaller trials and meta-analysis report signals."
  sourceIds:
    - hup-ad-us
    - hup-ad-cn
    - hup-meta
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No disease-modifying outcome is established.
- id: hup-healthy
  assertion: Huperzine A improves memory in healthy adults.
  relation: clinical-efficacy
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:memory
      role: outcome-domain
  context: Selected adolescent evidence and one null adult exercise trial do not establish general enhancement.
  sourceIds:
    - hup-adolescent
    - hup-exercise
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small, selected or acute studies.
- id: hup-extract
  assertion: Huperzia serrata extract is equivalent to purified HupA.
  relation: product-identity
  participants:
    - entityId: substance:huperzine-a
      role: active_alkaloid
    - entityId: tag:experimental-compound
      role: extract-context
  context: Extracts contain multiple alkaloids and labels may be inaccurate.
  sourceIds:
    - hup-chemistry
    - hup-products
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Standardization and assay are required.
- id: hup-safety
  assertion: Natural origin implies safety.
  relation: safety
  participants:
    - entityId: substance:huperzine-a
      role: exposure
    - entityId: tag:acetylcholine
      role: cholinergic-system
  context: Cholinergic toxicity and incomplete chronic data are documented.
  sourceIds:
    - hup-rivm
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Natural origin does not establish safety.
- id: dr-huperzine-a-huperzine-a-claim-1
  assertion: Improves memory and focus in healthy adults
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-adolescent
    - hup-exercise
    - hup-opss
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-huperzine-a-huperzine-a-claim-2
  assertion: Treats Alzheimer disease
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-ad-us
    - hup-ad-cn
    - hup-meta
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-huperzine-a-huperzine-a-claim-3
  assertion: Prevents or reverses neurodegeneration
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-ad-us
    - hup-meta
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-huperzine-a-huperzine-a-claim-4
  assertion: Huperzia extract is equivalent to purified HupA
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-products
    - hup-chemistry
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-huperzine-a-huperzine-a-claim-5
  assertion: Natural origin implies safety
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-rivm
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-huperzine-a-huperzine-a-claim-6
  assertion: Enhances pre-workout cognition or performance
  relation: evidence-boundary
  participants:
    - entityId: substance:huperzine-a
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - hup-exercise
  conflictingSourceIds:
    - hup-ad-us
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: hup-ache
  name: Other acetylcholinesterase inhibitors
  otherSlug: null
  summary: Potential additive cholinergic effects and bradycardia with donepezil, galantamine, rivastigmine or similar agents.
  sourceId: hup-fda-guidance
  context: Safety guidance and pharmacology; direct clinical DDI data are limited.
- id: hup-cholinergic
  name: Cholinergic agonists or precursors
  otherSlug: null
  summary: Potential additive GI, cardiovascular and muscarinic effects.
  sourceId: hup-fda-guidance
  context: General safety example, not a product-specific interaction trial.
- id: hup-anticholinergic
  name: Anticholinergics
  otherSlug: null
  summary: May oppose HupA cholinergic effects; evidence is mainly mechanistic or animal.
  sourceId: hup-rivm
  context: Human interaction quantification is limited.
- id: dr-huperzine-a-interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: hup-rivm
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - hup-ad-us
- id: dr-huperzine-a-interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: hup-rivm
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - hup-ad-us
- id: dr-huperzine-a-interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: hup-rivm
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - hup-ad-us
- id: dr-huperzine-a-interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: hup-rivm
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - hup-ad-us
- id: dr-huperzine-a-interaction-5
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: hup-rivm
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - hup-ad-us
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: hup-ad-us
  title: A phase II trial of huperzine A in mild to moderate Alzheimer disease
  authors: Michael S. Rafii; Sarah Walsh; James T. Little; et al.; Alzheimer’s Disease Cooperative Study
  year: 2011
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/
  kind: Multicenter randomized placebo-controlled dose-escalation trial
  insight: n=210; 200 µg twice daily missed the prespecified ADAS-Cog endpoint; higher-dose signal was secondary and lacked functional/global confirmation.
  limitation: Short follow-up, withdrawals and no disease-modification or chronic-safety assessment.
  funding: NIH/NIA and Neuro-Hitech, Inc.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Several authors disclosed sponsor advisory, consulting, salary-support, research-support or stock relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/
- id: hup-ad-cn
  title: Clinical efficacy and safety of huperzine Alpha in mild to moderate Alzheimer disease
  authors: Zhenxin Zhang; Xinde Wang; Qingtang Chen; Jizuo Wang; Guangliang Shan
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12181083/
  kind: Multicenter placebo-controlled trial
  insight: 202 participants; 400 µg/day for 12 weeks; reported cognitive, functional, behavioral and global improvements.
  limitation: Chinese-language report with limited public methods and funding detail.
  funding: Not stated in cited record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: "12181083"
- id: hup-meta
  title: "Huperzine A for Alzheimer’s Disease: Systematic Review and Meta-Analysis"
  authors: Gao-Yuan Yang; Yan-Ying Wang; coauthors
  year: 2013
  url: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0074916
  kind: Systematic review and meta-analysis
  insight: Pooled findings favored HupA on several AD outcomes, but trial quality, heterogeneity and publication bias reduced confidence.
  limitation: Many small, short, predominantly Chinese trials; substantial risk-of-bias uncertainty.
  funding: Beijing University of Chinese Medicine research-program grants.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No competing interests declared in article.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0074916
  doi: 10.1371/journal.pone.0074916
- id: hup-mci
  title: Huperzine A for mild cognitive impairment
  authors: Jing Yue; Bi-Rong Dong; Xia Lin; et al.
  year: 2022
  url: https://www.cochrane.org/evidence/CD008827_no-evidence-randomised-controlled-trials-or-against-use-huperzine-treatment-people-mild-cognitive
  kind: Cochrane review
  insight: No eligible placebo-controlled RCTs were found for MCI.
  limitation: Evidence was absent rather than definitively negative.
  funding: External funding not stated in public summary.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in public summary.
  conflictOfInterestStatus: not-assessed
- id: hup-adolescent
  title: Huperzine-A capsules enhance memory and learning performance in matched adolescent students
  authors: Q.Q. Sun; S.S. Xu; J.L. Pan; H.M. Guo; Q.W. Cao
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10678121/
  kind: Selected adolescent human study
  insight: 68 adolescents reporting memory inadequacy received 100 µg twice daily for four weeks; memory-quotient scores were higher.
  limitation: Small selected sample and non-generalizable outcome context.
  funding: Non-U.S. research support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: "10678121"
- id: hup-exercise
  title: Effect of Huperzine A on Cognitive Function and Perception of Effort during Exercise
  authors: Chadsley M. Wessinger; Cynthia L. Inman; Jeremiah Weinstock; Edward P. Weiss
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34567353/
  kind: Randomized double-blind crossover trial
  insight: 15 exercise-trained adults received 200 µg; cognition, performance, heart rate and perceived exertion were null.
  limitation: Very small and acute; not chronic healthy use.
  funding: Not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated.
  conflictOfInterestStatus: not-assessed
  pmid: "34567353"
- id: hup-pk
  title: Pharmacokinetics of huperzine A following oral administration to human volunteers
  authors: Y.X. Li; R.Q. Zhang; C.R. Li; X.H. Jiang
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/18348466/
  kind: Human single-dose PK study
  insight: 12 volunteers received 0.4 mg; Tmax about 58 minutes and terminal half-life about 716 minutes.
  limitation: Small, young, single-dose study; estimates vary across studies.
  funding: Not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated.
  conflictOfInterestStatus: not-assessed
  pmid: "18348466"
- id: hup-rivm
  title: Risk assessment of herbal preparations containing Huperzia serrata
  authors: National Institute for Public Health and the Environment (RIVM)
  year: 2024
  url: https://www.rivm.nl/bibliotheek/rapporten/2024-0028.pdf
  kind: Public-health risk assessment
  insight: No HBGV, ADI or ARfD could be established; adverse events, overdose and toxicology gaps reviewed.
  limitation: Secondary assessment based on heterogeneous studies.
  funding: Dutch public-health institution.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No commercial conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.rivm.nl/bibliotheek/rapporten/2024-0028.pdf
- id: hup-products
  title: The scoop on brain-health dietary supplement products containing huperzine A
  authors: Cindy Crawford; Yan-Hong Wang; Bharathi Avula; et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/31990212/
  kind: Product-content analysis
  insight: Among 22 products, only two of 13 declared HupA amounts were within 10% of label; many labeled ingredients were undetected.
  limitation: Selected products and not necessarily representative market sample.
  funding: Public/military research funding.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in cited abstract.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/31990212/
  pmid: "31990212"
- id: hup-chemistry
  title: Quantification of huperzine A in Huperzia serrata and major alkaloids
  authors: Qingqing Wu; Yuehua Gu
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16337768/
  kind: Chemical characterization
  insight: Huperzia alkaloid extracts contain HupA plus multiple other alkaloids.
  limitation: Chemical characterization does not establish clinical equivalence.
  funding: Not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: "16337768"
- id: hup-fda-guidance
  title: "Revised Draft Guidance: Dietary Supplements: New Dietary Ingredient Notifications"
  authors: U.S. Food and Drug Administration
  year: 2024
  url: https://www.fda.gov/media/99538/download
  kind: Regulatory guidance
  insight: Uses cholinesterase-inhibiting ingredients such as HupA as an example of additive risk with cholinergic agonists.
  limitation: Draft guidance, not product-specific legal determination.
  funding: U.S. government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No commercial conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/media/99538/download
- id: hup-opss
  title: "Huperzine A: Dietary Supplements for Brain Health"
  authors: Operation Supplement Safety, U.S. Department of Defense
  year: 2026
  url: https://www.opss.org/article/huperzine-dietary-supplements-brain-health
  kind: Government consumer-health summary
  insight: Describes sparse healthy-enhancement evidence and jurisdictional marketing context.
  limitation: Not a primary trial or formal legal opinion.
  funding: Public U.S. Department of Defense program.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No commercial conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.opss.org/article/huperzine-dietary-supplements-brain-health
- id: hup-dsld
  title: Huperzine A 100 mcg label
  authors: NIH Office of Dietary Supplements Dietary Supplement Label Database
  year: 2023
  url: https://dsld.od.nih.gov/label/295821
  kind: Supplement label record
  insight: Documents an example product label and cognitive claims.
  limitation: Label record is not efficacy or safety evidence.
  funding: U.S. government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No commercial conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://dsld.od.nih.gov/label/295821
- id: hup-fda-unii
  title: HUPERZINE A
  authors: U.S. FDA Substance Registration System
  year: 2026
  url: https://precision.fda.gov/uniisearch/srs/unii/0111871I23
  kind: Regulatory identity record
  insight: Identifies HupA and states that a UNII does not imply approval.
  limitation: Identity registration is not marketing authorization or safety assessment.
  funding: U.S. government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No commercial conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://precision.fda.gov/uniisearch/srs/unii/0111871I23
- id: dr-huperzine-a-s13
  title: Huperzine A — Cognitive Vitality for Researchers
  authors: Alzheimer’s Drug Discovery Foundation
  year: 2020
  url: https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Huperzine-A-Cognitive-Vitality-For-Researchers.pdf
  kind: Research evidence summary
  insight: Summarizes trial heterogeneity, publication-bias concerns, and the difference between AD evidence and healthy enhancement.
  limitation: Secondary synthesis rather than an independently registered systematic review.
  funding: Organizational publication; specific funding not stated
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary supplement marketing
  status: HupA appears in supplement label records; a UNII or label record does not imply FDA approval, and OPSS describes HupA-specific marketing legality as unclear.
  sourceUrl: https://www.opss.org/article/huperzine-dietary-supplements-brain-health
  asOf: 2026-10-11
- jurisdiction: China
  activity: Medical use
  status: OPSS describes HupA as an approved drug for cognitive disorders including Alzheimer disease.
  sourceUrl: https://www.opss.org/article/huperzine-dietary-supplements-brain-health
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Not established
  status: Sold in products labeled as dietary supplements; no FDA approval is implied by a UNII or label record; legality of HupA-specific supplement marketing is described as unclear
  sourceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/
  asOf: 2026-10-10
- jurisdiction: China
  activity: Not established
  status: Described by OPSS as an approved drug for cognitive disorders including Alzheimer disease
  sourceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/
  asOf: 2026-10-10
```
