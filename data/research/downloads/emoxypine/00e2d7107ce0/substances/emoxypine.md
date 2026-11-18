---
slug: emoxypine
name: Emoxypine
subtitle: Hydroxypyridine studied mainly as the succinate drug Mexidol
aliases:
- Methylethylpyridinol
- 2-Ethyl-6-methylpyridin-3-ol
- Mexidol
- Mexidol Forte 250
- Emoxypine succinate
- Emoxipin
formula: C8H11NO
molecularWeight: 137.18 g/mol
pubchemCid: 114681
smiles: CCC1=C(C=CC(=N1)C)O
category: 3-Hydroxypyridine derivative
tags:
- stroke-recovery
- cognitive-performance
- oxidative-stress
accent: '#a1bea6'
reviewedAt: "2026-11-18"
editorialStatus: sourced-draft
halfLife:
  label: 2.0–2.6 hours (oral Mexidol Forte 250 label)
  low: 2.0
  high: 2.6
  context: The Russian prescribing information reports this half-life for the oral succinate product. It does not identify the underlying cohort or assay.
  sourceId: forte-label
  observationId: oral-mexidol-label-half-life
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: The oral succinate label describes glucuronidation in the liver with urinary excretion mainly as metabolites.
  sourceId: forte-label
x-shape:
- slug
- name
- subtitle
- aliases
- formula
- molecularWeight
- pubchemCid
- smiles
- category
- tags
- accent
- reviewedAt
- editorialStatus
- halfLife
- kinetics
- summary
- description
- evidenceNote
- doses
- pkObservations
- modifiers
- effects
- outcomes
- mechanisms
- cautions
- claims
- interactions
- experienceLinks
- references
- legal
---

## Summary

Emoxypine is a hydroxypyridine compound used in distinct succinate and hydrochloride drug formulations. Clinical studies of the succinate, marketed as Mexidol, have mainly assessed recovery after ischemic stroke and cognition in chronic cerebral ischemia.

## Description

The structure shown is the unsalted parent. Mexidol contains a 1:1 emoxypine succinate. Emoxipin eye drops contain methylethylpyridinol hydrochloride. [Parent structure](https://pubchem.ncbi.nlm.nih.gov/compound/114681), [Succinate structure](https://pubchem.ncbi.nlm.nih.gov/compound/122298), [Hydrochloride eye-drop label](https://emoxypin.ru/instruction/)

## Evidence note

Placebo-controlled stroke trials reported lower disability scores at about two months. Independent replication and applicability after reperfusion remain uncertain. MEMO reported larger gains on a cognitive screening test over 74 days. Evidence on sustained function, healthy-person performance, and uncommon harms is limited. The MIR and MEMO registry entries appeared after trial completion and give different adverse-event counts from their publications. [MIR](https://doi.org/10.17116/jnevro202512508240), [EPICA](https://pubmed.ncbi.nlm.nih.gov/28665371/), [MEMO](https://doi.org/10.17116/jnevro20211211117), [MIR registry](https://clinicaltrials.gov/study/NCT06437626?tab=results), [MEMO registry](https://clinicaltrials.gov/study/NCT06834490?tab=results)

## Doses

```yaml
- label: MIR · intravenous phase
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 50 mg/mL injection
  route: Intravenous infusion
  frequency: Twice daily
  duration: 10 days
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  purpose: Adjunct to standard acute stroke care
  sourceCategory: research
  note: Followed by oral Mexidol 250 mg three times daily. The control group received matching placebo.
  sourceId: mir
- label: MIR · oral phase
  amount: 250 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol Forte 250 film-coated tablets
  route: Oral
  frequency: Three times daily
  duration: 60 days
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  purpose: Adjunct to standard acute stroke care
  sourceCategory: research
  note: Began after 10 days of the intravenous study phase. The control group received matching placebo.
  sourceId: mir
- label: EPICA · intravenous phase
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 50 mg/mL injection
  route: Intravenous infusion
  frequency: Once daily
  duration: 10 days
  population: Adults with acute hemispheric ischemic stroke
  purpose: Adjunct to standard acute stroke care
  sourceCategory: research
  note: Followed by oral Mexidol 125 mg three times daily. The control group received matching placebo.
  sourceId: epica
- label: EPICA · oral phase
  amount: 125 mg
  quantity: 125
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 125 mg tablets
  route: Oral
  frequency: Three times daily
  duration: 8 weeks
  population: Adults with acute hemispheric ischemic stroke
  purpose: Adjunct to standard acute stroke care
  sourceCategory: research
  note: Began after 10 days of the intravenous study phase. The control group received matching placebo.
  sourceId: epica
- label: MEMO · intravenous phase
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 50 mg/mL injection
  route: Intravenous infusion
  frequency: Once daily
  duration: 14 days
  population: Adults diagnosed with chronic cerebral ischemia
  purpose: Cognitive and functional outcomes in chronic cerebral ischemia
  sourceCategory: research
  note: Followed by oral Mexidol 250 mg three times daily. The control group received matching placebo.
  sourceId: memo
- label: MEMO · oral phase
  amount: 250 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol Forte 250 film-coated tablets
  route: Oral
  frequency: Three times daily
  duration: 60 days
  population: Adults diagnosed with chronic cerebral ischemia
  purpose: Cognitive and functional outcomes in chronic cerebral ischemia
  sourceCategory: research
  note: Began after 14 days of the intravenous study phase. The control group received matching placebo.
  sourceId: memo
- label: Combined-injury rehabilitation
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol injection (Ellara)
  route: Intramuscular
  frequency: Once daily
  duration: Follow-up at days 7 and 14
  population: Hospitalized military personnel with asthenia after combined injuries
  purpose: Asthenia after combined injuries
  sourceCategory: research
  note: Mexidol, Cortexin and Vinpotropil were evaluated in separate arms. The standard-care comparison included intramuscular B vitamins.
  sourceId: khabarov2008
- label: Urinary excretion study
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol tablets
  route: Oral
  frequency: Single dose
  duration: 11.5-hour urine collection
  population: 16 patients with neurosis or traumatic central nervous system injury
  purpose: Measure unchanged drug and glucuronide in urine
  sourceCategory: research
  note: The study reports cumulative urinary recovery with substantial interindividual variability.
  sourceId: sariev1999
- label: MEGA · once daily
  amount: 125 mg
  quantity: 125
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 125 mg tablets
  route: Oral
  frequency: Once daily, with a matching placebo tablet at the other administration
  duration: 42 days
  population: Children aged 6–12 years diagnosed with ADHD
  purpose: ADHD symptom scores
  sourceCategory: research
  note: The placebo-only arm received matching tablets twice daily.
  sourceId: mega
- label: MEGA · twice daily
  amount: 125 mg
  quantity: 125
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 125 mg tablets
  route: Oral
  frequency: Twice daily
  duration: 42 days
  population: Children aged 6–12 years diagnosed with ADHD
  purpose: ADHD symptom scores
  sourceCategory: research
  note: The placebo-only arm received matching tablets twice daily.
  sourceId: mega
- label: Older-adult cognitive study
  amount: Not established
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol injection followed by oral Mexidol
  route: Intravenous then oral
  frequency: Not established
  duration: 74 days
  population: Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
  purpose: Add-on therapy in chronic cerebral ischemia
  sourceCategory: research
  note: The comparison group received standard care alone. The abstract provides the total course length. Dose amounts and phase lengths require the full report.
  sourceId: osipova2026
- label: Emoxipin eye drops
  amount: 10 mg/mL
  quantity: 10
  quantityMax: null
  unit: mg/mL
  ingredient: Methylethylpyridinol hydrochloride
  formulation: Emoxipin 1% eye drops
  route: Ophthalmic
  frequency: Formulation strength
  duration: Product labeling
  population: Adults
  purpose: Identify the separately labeled hydrochloride formulation
  sourceCategory: approved-label
  note: This figure is the concentration in the bottle. The stroke and cognition trials used succinate.
  sourceId: emoxipin-label
- label: 2006 acute stroke study · intravenous phase
  amount: 300 mg
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 5% solution
  route: Intravenous infusion
  frequency: Total per day
  duration: First 3 days
  population: Adults admitted within 24 hours of acute ischemic stroke
  purpose: Adjunct to acute stroke care
  sourceCategory: research
  note: The comparator received matching placebo. This phase was followed by intramuscular administration.
  sourceId: skvortsova2006
- label: 2006 acute stroke study · intramuscular phase
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 5% solution
  route: Intramuscular
  frequency: Three times daily
  duration: After day 3 through day 14
  population: Adults admitted within 24 hours of acute ischemic stroke
  purpose: Adjunct to acute stroke care
  sourceCategory: research
  note: Began after the initial IV phase. The comparator received matching placebo.
  sourceId: skvortsova2006
- label: Mixed-etiology rehabilitation · intravenous phase
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol 50 mg/mL injection
  route: Intravenous
  frequency: Once daily
  duration: 10 days
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  purpose: Adjunct to standard rehabilitation
  sourceCategory: research
  note: Followed by the oral study phase. The comparator received standard rehabilitation alone.
  sourceId: belkin2024
- label: Mixed-etiology rehabilitation · oral phase
  amount: 250 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: Ethylmethylhydroxypyridine succinate
  formulation: Mexidol Forte 250 film-coated tablets
  route: Oral
  frequency: Three times daily
  duration: 8 weeks
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  purpose: Adjunct to standard rehabilitation
  sourceCategory: research
  note: Began after the intravenous phase. The comparator received standard rehabilitation alone.
  sourceId: belkin2024
```

## Pharmacokinetics

```yaml
- id: oral-mexidol-label-half-life
  analyte: Mexidol active ingredient, as described in the label
  route: Oral
  formulation: Mexidol Forte 250 film-coated tablets
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 2.0
  high: 2.6
  unit: hours
  context: The product label reports an oral half-life of 2.0–2.6 hours. The label also gives an oral peak concentration of 3.5–4.0 µg/mL after 400–500 mg.
  sourceId: forte-label
  modelEligible: true
- id: oral-mexidol-urinary-recovery
  analyte: Mexidol and its glucuronide in urine
  route: Oral
  formulation: Mexidol tablets
  population: 16 patients with neurosis or traumatic central nervous system injury
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: After a single 500 mg dose, 0.31% of the dose (parent drug) and 49.6% (glucuronide) were measured in urine over 11.5 hours. These are cumulative recovery fractions.
  sourceId: sariev1999
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
- id: mir-mrs-day71
  conceptId: stroke-recovery
  name: Disability at day 71 in MIR
  direction: Decreased
  evidence: Human research
  description: Primary endpoint. The per-protocol analysis included **141 Mexidol and 138 placebo** recipients. Intention-to-treat estimates were −2.32 vs −1.90 points (p=0.00384). The registry labels the primary estimate as a mean, while the abstract and Table 3 label it as a median statistic.
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Modified Rankin Scale (mRS)
  magnitude: Reported change −2.45 vs −2.01 points (p=0.00313, per protocol)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: &id001
    - Adults with first-ever moderate ischemic stroke who did not receive reperfusion
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
  conflictingSourceIds:
  - mir-registry
- id: mir-mrs-early
  conceptId: stroke-recovery
  name: Disability after the intravenous phase in MIR
  direction: Variable
  evidence: Human research
  description: The early disability assessment showed no clear between-group difference.
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Modified Rankin Scale (mRS)
  magnitude: Median change −1 point in each group (p=0.8)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: End of the 10-day IV phase
- id: mir-mrs-low-disability
  conceptId: stroke-recovery
  name: Minimal or no disability in MIR
  direction: Increased
  evidence: Human research
  description: Per-protocol count at end of treatment. In the intention-to-treat analysis, 57% vs 39% reached mRS 0–1 (p=0.002).
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Modified Rankin Scale (mRS)
  magnitude: mRS 0–1 in 85/141 vs 57/138 (60% vs 41%, p=0.002)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
- id: mir-mrs-higher-disability
  conceptId: stroke-recovery
  name: Higher disability scores in MIR
  direction: Decreased
  evidence: Human research
  description: Table 3 used a threshold of mRS ≥3. The intention-to-treat proportions at day 71 were 20% vs 32% (p=0.019).
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Modified Rankin Scale (mRS)
  magnitude: mRS ≥3 in 16% vs 28% (p=0.016, per protocol)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
- id: mir-nihss
  conceptId: stroke-recovery
  name: Neurological deficit in MIR
  direction: Decreased
  evidence: Human research
  description: Medians were equal in the per-protocol analysis. The rank-based test compared the distributions of change scores.
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: National Institutes of Health Stroke Scale (NIHSS)
  magnitude: Median change −7 (IQR −9 to −6) vs −7 (IQR −8 to −5), p<0.001
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
- id: mir-rivermead
  conceptId: stroke-recovery
  name: Mobility in MIR
  direction: Increased
  evidence: Human research
  description: The secondary mobility scale favored Mexidol in the per-protocol analysis.
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Rivermead Mobility Index
  magnitude: Median change +10 vs +9 points (p=0.014)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
- id: mir-adverse-events
  conceptId: adverse-events
  name: Participants with adverse events in MIR
  direction: Variable
  evidence: Human research
  description: The paper counted 42 events on Mexidol and 43 on placebo. The registry lists nonserious events in 36 vs 39 participants. The sources do not reconcile those counts.
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Adverse-event reports
  magnitude: 35/152 in each group (23%, p=1.000) in the journal
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: During treatment and follow-up
  conflictingSourceIds:
  - mir-registry
- id: mir-serious-adverse-events
  conceptId: adverse-events
  name: Serious adverse events in MIR
  direction: Variable
  evidence: Human research
  description: The registry also lists 2 vs 1 deaths. The small event counts leave the comparative risk uncertain.
  sourceId: mir-registry
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Serious adverse-event tabulation
  magnitude: 6/152 vs 4/152
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: During treatment and follow-up
- id: epica-mrs
  conceptId: stroke-recovery
  name: Disability in EPICA
  direction: Decreased
  evidence: Human research
  description: The primary end-of-treatment analysis included **61 Mexidol and 63 placebo** recipients.
  sourceId: epica
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Modified Rankin Scale (mRS)
  magnitude: Mean 1.10 vs 1.46 points (p=0.04)
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: &id002
    - Adults with acute hemispheric ischemic stroke
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
  result:
    measure: mean
    estimate: 1.1
    unit: mRS points
    instrument: Modified Rankin Scale (mRS)
    comparator: Placebo arm mean 1.46 points
    assessmentTime: Days 67–71
    population: Adults with acute hemispheric ischemic stroke
- id: epica-mrs-independent
  conceptId: stroke-recovery
  name: mRS scores of 0–2 in EPICA
  direction: Increased
  evidence: Human research
  description: This threshold includes participants able to manage their own affairs despite some disability.
  sourceId: epica-english
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Modified Rankin Scale (mRS)
  magnitude: 59/61 (96.7%) vs 53/63 (84.1%), p=0.039
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
- id: epica-nihss
  conceptId: stroke-recovery
  name: Neurological deficit in EPICA
  direction: Decreased
  evidence: Human research
  description: Mean end-of-treatment neurological deficit score in the per-protocol group.
  sourceId: epica-english
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: National Institutes of Health Stroke Scale (NIHSS)
  magnitude: Mean 1.7 vs 2.2 points (p=0.035)
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
  result:
    measure: mean
    estimate: 1.7
    unit: NIHSS points
    instrument: National Institutes of Health Stroke Scale (NIHSS)
    comparator: Placebo arm mean 2.2 points
    assessmentTime: Days 67–71
    population: Adults with acute hemispheric ischemic stroke
- id: epica-barthel
  conceptId: stroke-recovery
  name: Activities of daily living in EPICA
  direction: Variable
  evidence: Human research
  description: No clear between-group difference in the Barthel Index. Registry means were 96.1 vs 93.6.
  sourceId: epica-english
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Barthel Index
  magnitude: No statistically significant between-group difference
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
- id: epica-frontal-assessment
  conceptId: cognitive-performance
  name: Frontal assessment in EPICA
  direction: Variable
  evidence: Human research
  description: The journal reported no clear between-group difference on this cognitive measure.
  sourceId: epica-english
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Frontal Assessment Battery
  magnitude: No statistically significant between-group difference
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
- id: epica-cognitive-screen
  conceptId: cognitive-performance
  name: Cognitive screening in EPICA
  direction: Variable
  evidence: Human research
  description: The journal reported no clear between-group difference on the cognitive screening questionnaire.
  sourceId: epica-english
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Cognitive screening questionnaire
  magnitude: No statistically significant between-group difference
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: Days 67–71
- id: epica-serious-adverse-events
  conceptId: adverse-events
  name: Serious adverse events in EPICA
  direction: Variable
  evidence: Human research
  description: There were no deaths in either arm. The serious adverse-event counts are too small to estimate rare harms reliably.
  sourceId: epica-registry
  population: Adults with acute hemispheric ischemic stroke
  exposure: 500 mg IV daily for 10 days, then 125 mg orally three times daily for 8 weeks
  instrument: Serious adverse-event tabulation
  magnitude: 1/75 vs 3/75
  reportType: measured-assessment
  study:
    id: nct02793687
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 150
    populationLabels: *id002
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol 125 mg tablets
    durationDays: 66
    assessmentTime: During treatment and follow-up
- id: memo-moca
  conceptId: cognitive-performance
  name: Cognitive screening in MEMO
  direction: Increased
  evidence: Human research
  description: Table 3 includes **157 Mexidol and 155 placebo** recipients at the final assessment. The trial was designed around cognitive score change and had no long-term disability follow-up.
  sourceId: memo
  population: Adults diagnosed with chronic cerebral ischemia
  exposure: 500 mg IV daily for 14 days, then 250 mg orally three times daily for 60 days
  instrument: Montreal Cognitive Assessment (MoCA)
  magnitude: Mean change +4.22 vs +2.17 points (p<0.000001)
  reportType: measured-assessment
  study:
    id: nct06834490
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 318
    populationLabels: &id003
    - Adults diagnosed with chronic cerebral ischemia
    comparator: Matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 74
    assessmentTime: Final visit, around day 75
  result:
    measure: mean-difference
    estimate: 2.05
    unit: MoCA points
    instrument: Montreal Cognitive Assessment (MoCA)
    comparator: Mexidol minus matching placebo
    assessmentTime: Final visit, around day 75
    population: Adults diagnosed with chronic cerebral ischemia
    confidenceInterval:
      lower: 1.51
      upper: 2.58
      level: 95
- id: memo-digit-symbol
  conceptId: cognitive-performance
  name: Digit symbol substitution in MEMO
  direction: Increased
  evidence: Human research
  description: A secondary cognitive task measuring speed and accuracy of symbol matching.
  sourceId: memo
  population: Adults diagnosed with chronic cerebral ischemia
  exposure: 500 mg IV daily for 14 days, then 250 mg orally three times daily for 60 days
  instrument: Digit Symbol Substitution Test
  magnitude: Median change +8 vs +5 points
  reportType: measured-assessment
  study:
    id: nct06834490
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 318
    populationLabels: *id003
    comparator: Matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 74
    assessmentTime: Final visit, around day 75
- id: memo-fatigue
  conceptId: fatigue-severity
  name: Fatigue severity in MEMO
  direction: Decreased
  evidence: Human research
  description: Fatigue was quantified with a patient-completed clinical inventory.
  sourceId: memo
  population: Adults diagnosed with chronic cerebral ischemia
  exposure: 500 mg IV daily for 14 days, then 250 mg orally three times daily for 60 days
  instrument: Multidimensional Fatigue Inventory (MFI-20)
  magnitude: Change −8.33 vs −4.80 points (p=0.010)
  reportType: measured-assessment
  study:
    id: nct06834490
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 318
    populationLabels: *id003
    comparator: Matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 74
    assessmentTime: Final visit, around day 75
- id: memo-adverse-events
  conceptId: adverse-events
  name: Adverse events in MEMO
  direction: Variable
  evidence: Human research
  description: Both sources report no serious adverse events. The registry lists nonserious events in 19/159 and 32/159 participants. The source totals do not reconcile.
  sourceId: memo
  population: Adults diagnosed with chronic cerebral ischemia
  exposure: 500 mg IV daily for 14 days, then 250 mg orally three times daily for 60 days
  instrument: Adverse-event reports
  magnitude: 15/159 (9.4%) vs 21/159 (13.2%) in the journal (p=0.288)
  reportType: measured-assessment
  study:
    id: nct06834490
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 318
    populationLabels: *id003
    comparator: Matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 74
    assessmentTime: During treatment and follow-up
  conflictingSourceIds:
  - memo-registry
- id: osipova-mmse
  conceptId: cognitive-performance
  name: MMSE in older adults with chronic cerebral ischemia
  direction: Increased
  evidence: Limited research
  description: An open study compared **43** patients receiving add-on Mexidol with **47** receiving standard care alone. The abstract does not establish randomized allocation.
  sourceId: osipova2026
  population: Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
  exposure: Sequential IV and oral Mexidol for 74 days alongside standard care
  instrument: Mini-Mental State Examination (MMSE)
  magnitude: Median 27 vs 26 points (p<0.001)
  reportType: measured-assessment
  study:
    id: osipova-cci-2026
    design: Prospective open comparative study
    sampleSize: 90
    populationLabels: &id004
    - Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
    comparator: Standard care alone
    route: Intravenous then oral
    formulation: Mexidol injection and oral formulation
    durationDays: 74
    assessmentTime: 3 months
- id: osipova-stroop
  conceptId: cognitive-performance
  name: Stroop words named
  direction: Increased
  evidence: Limited research
  description: The abstract reports arm-level confidence intervals for change. Open treatment allocation limits interpretation of the comparison.
  sourceId: osipova2026
  population: Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
  exposure: Sequential IV and oral Mexidol for 74 days alongside standard care
  instrument: Stroop word task
  magnitude: Change +7 (95% CI +5 to +8) vs +2 (95% CI 0 to +3) words
  reportType: measured-assessment
  study:
    id: osipova-cci-2026
    design: Prospective open comparative study
    sampleSize: 90
    populationLabels: *id004
    comparator: Standard care alone
    route: Intravenous then oral
    formulation: Mexidol injection and oral formulation
    durationDays: 74
    assessmentTime: 3 months
- id: osipova-schulte
  conceptId: attention-speed
  name: Schulte task completion time
  direction: Decreased
  evidence: Limited research
  description: The add-on group completed the task faster. The accessible abstract does not describe the estimator in enough detail to put the contrast on a mean-difference plot.
  sourceId: osipova2026
  population: Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
  exposure: Sequential IV and oral Mexidol for 74 days alongside standard care
  instrument: Schulte tables
  magnitude: Change −8.0 vs −2.0 seconds. Reported difference −6.0 seconds (95% CI −9.2 to −2.8).
  reportType: measured-assessment
  study:
    id: osipova-cci-2026
    design: Prospective open comparative study
    sampleSize: 90
    populationLabels: *id004
    comparator: Standard care alone
    route: Intravenous then oral
    formulation: Mexidol injection and oral formulation
    durationDays: 74
    assessmentTime: 3 months
- id: osipova-mental-stability
  conceptId: cognitive-performance
  name: Mental stability on Schulte testing
  direction: Variable
  evidence: Limited research
  description: The confidence interval for the reported difference includes zero.
  sourceId: osipova2026
  population: Older adults with chronic cerebral ischemia and cognitive impairment (mean age 81 years)
  exposure: Sequential IV and oral Mexidol for 74 days alongside standard care
  instrument: Schulte-derived mental stability index
  magnitude: Difference in change −3.0% (95% CI −6.2% to +0.2%, p>0.05)
  reportType: measured-assessment
  study:
    id: osipova-cci-2026
    design: Prospective open comparative study
    sampleSize: 90
    populationLabels: *id004
    comparator: Standard care alone
    route: Intravenous then oral
    formulation: Mexidol injection and oral formulation
    durationDays: 74
    assessmentTime: 3 months
- id: cp-motor
  conceptId: motor-function-in-rehabilitation
  name: Motor task performance in spastic cerebral palsy
  direction: Increased
  evidence: Limited research
  description: The comparison included **24** children in the combined therapy group and **23** in robotic rehabilitation alone. The ranges summarize multiple motor measures.
  sourceId: gaynetdinova2026
  population: Children aged 6–8 years with spastic cerebral palsy
  exposure: Mexidol added to 6 weeks of robotic rehabilitation
  instrument: Exoskeleton platform motor measures
  magnitude: Improvement across measures 37.6–58.7% vs 24–39% (p<0.05, reported comparison)
  reportType: measured-assessment
  study:
    id: gaynetdinova-cp-2026
    design: Parallel add-on comparison reported in publisher abstract
    sampleSize: 47
    populationLabels: &id005
    - Children aged 6–8 years with spastic cerebral palsy
    comparator: Robotic rehabilitation with biofeedback alone
    formulation: Mexidol
    durationDays: 42
    assessmentTime: 6 weeks
- id: cp-cognitive
  conceptId: cognitive-performance
  name: Cognitive task performance in spastic cerebral palsy
  direction: Increased
  evidence: Limited research
  description: The abstract gives a range across assessments and does not identify individual test scores.
  sourceId: gaynetdinova2026
  population: Children aged 6–8 years with spastic cerebral palsy
  exposure: Mexidol added to 6 weeks of robotic rehabilitation
  instrument: Functional cognitive measures
  magnitude: Improvement across measures 14.4–52.6% vs 5–22% (p<0.05, reported comparison)
  reportType: measured-assessment
  study:
    id: gaynetdinova-cp-2026
    design: Parallel add-on comparison reported in publisher abstract
    sampleSize: 47
    populationLabels: *id005
    comparator: Robotic rehabilitation with biofeedback alone
    formulation: Mexidol
    durationDays: 42
    assessmentTime: 6 weeks
- id: trauma-ham-a
  conceptId: anxiety-symptom-severity
  name: Anxiety severity after combined injuries
  direction: Variable
  evidence: Limited research
  description: The dissertation abstract describes **60 analyzed in four groups of 15** after 16 early discharges. It gives pre- and post-treatment scores, with no clear statistical comparison for the Mexidol arm versus standard care.
  sourceId: khabarov2008
  population: Hospitalized military personnel with asthenia after combined injuries
  exposure: 100 mg intramuscular Mexidol once daily
  instrument: Hamilton Anxiety Rating Scale
  magnitude: 15.8 to 9.8 with Mexidol vs 15.5 to 12.5 with standard care
  reportType: measured-assessment
  study:
    id: khabarov-trauma-2008
    design: Dissertation abstract describes four randomized double-blind groups
    sampleSize: 76
    populationLabels: &id006
    - Hospitalized military personnel with asthenia after combined injuries
    comparator: Standard care including B vitamins
    route: Intramuscular
    formulation: Mexidol injection (Ellara)
    assessmentTime: Day 14
- id: trauma-side-effects
  conceptId: adverse-events
  name: Side-effect ratings after combined injuries
  direction: Variable
  evidence: Limited research
  description: The author’s abstract reports no significant difference across arms. It provides no comprehensive participant-level adverse-event table.
  sourceId: khabarov2008
  population: Hospitalized military personnel with asthenia after combined injuries
  exposure: 100 mg intramuscular Mexidol once daily
  instrument: Physician Withdrawal Checklist (PWC)
  magnitude: No significant difference reported
  reportType: measured-assessment
  study:
    id: khabarov-trauma-2008
    design: Dissertation abstract describes four randomized double-blind groups
    sampleSize: 76
    populationLabels: *id006
    comparator: Standard care including B vitamins
    route: Intramuscular
    formulation: Mexidol injection (Ellara)
    assessmentTime: Day 14
- id: skvortsova-nih
  conceptId: stroke-recovery
  name: Early neurological recovery in the 2006 trial
  direction: Decreased
  evidence: Limited research
  description: The abstract reports faster neurological improvement on the NIH scale. The full report describes the significant day-14 finding in patients admitted within six hours.
  sourceId: skvortsova2006
  population: Adults admitted within 24 hours of acute ischemic stroke
  exposure: 300 mg/day Mexidol, IV for 3 days then IM through day 14
  instrument: NIH Stroke Scale
  magnitude: p<0.05 in the reported early-admission comparison
  reportType: measured-assessment
  study:
    id: skvortsova-acute-stroke-2006
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 51
    populationLabels: &id007
    - Adults admitted within 24 hours of acute ischemic stroke
    comparator: Placebo
    formulation: Mexidol 5% solution
    route: Intravenous then intramuscular
    durationDays: 14
    assessmentTime: Day 14
- id: skvortsova-barthel
  conceptId: stroke-recovery
  name: Early functional recovery in the 2006 trial
  direction: Increased
  evidence: Limited research
  description: The reported difference applied to patients enrolled within six hours. The subgroup analysis had limited precision.
  sourceId: skvortsova2006
  population: Adults admitted within 24 hours of acute ischemic stroke
  exposure: 300 mg/day Mexidol, IV for 3 days then IM through day 14
  instrument: Barthel Index
  magnitude: p<0.05 in the reported early-admission subgroup
  reportType: measured-assessment
  study:
    id: skvortsova-acute-stroke-2006
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 51
    populationLabels: *id007
    comparator: Placebo
    formulation: Mexidol 5% solution
    route: Intravenous then intramuscular
    durationDays: 14
    assessmentTime: Day 21
- id: mega-snap-once
  conceptId: adhd-symptom-severity
  name: ADHD symptoms in MEGA · once daily
  direction: Decreased
  evidence: Human research
  description: Three-arm trial with **111 randomized per group**. The posted confidence interval applies to change within the active arm.
  sourceId: mega-registry
  population: Children aged 6–12 years diagnosed with ADHD
  exposure: 125 mg oral Mexidol once daily for 42 days
  instrument: SNAP-IV combined inattention and hyperactivity/impulsivity score
  magnitude: Mean change -7.31 vs −3.93 points with placebo
  reportType: measured-assessment
  study:
    id: nct06854601
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 333
    populationLabels: &id008
    - Children aged 6–12 years diagnosed with ADHD
    comparator: Matching oral placebo
    route: Oral
    formulation: Mexidol 125 mg tablets
    durationDays: 42
    assessmentTime: Week 6
  result:
    measure: mean
    estimate: -7.31
    unit: SNAP-IV points
    instrument: SNAP-IV combined inattention and hyperactivity/impulsivity score
    comparator: Placebo arm mean change −3.93 points
    assessmentTime: Week 6
    population: Children aged 6–12 years diagnosed with ADHD
    confidenceInterval:
      lower: -8.44
      upper: -6.17
      level: 95
- id: mega-snap-twice
  conceptId: adhd-symptom-severity
  name: ADHD symptoms in MEGA · twice daily
  direction: Decreased
  evidence: Human research
  description: Three-arm trial with **111 randomized per group**. The posted confidence interval applies to change within the active arm.
  sourceId: mega-registry
  population: Children aged 6–12 years diagnosed with ADHD
  exposure: 125 mg oral Mexidol twice daily for 42 days
  instrument: SNAP-IV combined inattention and hyperactivity/impulsivity score
  magnitude: Mean change -9.33 vs −3.93 points with placebo
  reportType: measured-assessment
  study:
    id: nct06854601
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 333
    populationLabels: *id008
    comparator: Matching oral placebo
    route: Oral
    formulation: Mexidol 125 mg tablets
    durationDays: 42
    assessmentTime: Week 6
  result:
    measure: mean
    estimate: -9.33
    unit: SNAP-IV points
    instrument: SNAP-IV combined inattention and hyperactivity/impulsivity score
    comparator: Placebo arm mean change −3.93 points
    assessmentTime: Week 6
    population: Children aged 6–12 years diagnosed with ADHD
    confidenceInterval:
      lower: -10.59
      upper: -8.07
      level: 95
- id: mega-serious-events
  conceptId: adverse-events
  name: Serious adverse events in MEGA
  direction: Variable
  evidence: Human research
  description: The registry reports no deaths. Nonserious adverse events affected 14, 26 and 20 participants, respectively. The trial offers limited information on long-term use.
  sourceId: mega-registry
  population: Children aged 6–12 years diagnosed with ADHD
  exposure: 125 mg oral Mexidol once or twice daily for 42 days
  instrument: Serious adverse-event tabulation
  magnitude: 0/111 once daily, 1/111 twice daily, 1/111 placebo
  reportType: measured-assessment
  study:
    id: nct06854601
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 333
    populationLabels: *id008
    comparator: Matching oral placebo
    route: Oral
    formulation: Mexidol 125 mg tablets
    durationDays: 42
    assessmentTime: Through end of trial
- id: mir-moca
  conceptId: cognitive-performance
  name: Cognitive screening in MIR
  direction: Variable
  evidence: Human research
  description: The per-protocol secondary cognitive comparison did not meet the 0.05 threshold. The intention-to-treat comparison was nominally significant (p=0.044).
  sourceId: mir
  population: Adults with first-ever moderate ischemic stroke who did not receive reperfusion
  exposure: 500 mg IV twice daily for 10 days, then 250 mg orally three times daily for 60 days
  instrument: Montreal Cognitive Assessment (MoCA)
  magnitude: Median change +4 vs +3 points (p=0.052, per protocol)
  reportType: measured-assessment
  study:
    id: nct06437626
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 304
    populationLabels: *id001
    comparator: Standard care plus matching IV and oral placebo
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 70
    assessmentTime: Day 71
- id: belkin-moca
  conceptId: cognitive-performance
  name: Cognitive screening in mixed-etiology rehabilitation
  direction: Variable
  evidence: Limited research
  description: Both groups improved during rehabilitation. There was no clear difference at the final visit.
  sourceId: belkin2024
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  exposure: 500 mg IV daily for 10 days, then 250 mg orally three times daily for 8 weeks
  instrument: Montreal Cognitive Assessment (MoCA)
  magnitude: 23.8 vs 22.9 points (p=0.227)
  reportType: measured-assessment
  study:
    id: nct06221826
    design: Single-center randomized open-label comparison
    sampleSize: 60
    populationLabels: &id009
    - Adults in neurological rehabilitation after stroke or traumatic brain injury
    comparator: Standard rehabilitation alone
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 66
    assessmentTime: Day 66
- id: belkin-hads
  conceptId: anxiety-symptom-severity
  name: Anxiety in mixed-etiology rehabilitation
  direction: Decreased
  evidence: Limited research
  description: The open-label comparison included **30 participants per arm** across both diagnoses.
  sourceId: belkin2024
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  exposure: 500 mg IV daily for 10 days, then 250 mg orally three times daily for 8 weeks
  instrument: Hospital Anxiety and Depression Scale (HADS)
  magnitude: 2.6 vs 4.4 points (p=0.004)
  reportType: measured-assessment
  study:
    id: nct06221826
    design: Single-center randomized open-label comparison
    sampleSize: 60
    populationLabels: *id009
    comparator: Standard rehabilitation alone
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 66
    assessmentTime: Visit 4
- id: belkin-bdi
  conceptId: depression-severity
  name: Depressive symptoms in mixed-etiology rehabilitation
  direction: Decreased
  evidence: Limited research
  description: An intermediate assessment favored the add-on group in the pooled analysis.
  sourceId: belkin2024
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  exposure: 500 mg IV daily for 10 days, then 250 mg orally three times daily for 8 weeks
  instrument: Beck Depression Inventory
  magnitude: 7.5 vs 11.4 points (p=0.005)
  reportType: measured-assessment
  study:
    id: nct06221826
    design: Single-center randomized open-label comparison
    sampleSize: 60
    populationLabels: *id009
    comparator: Standard rehabilitation alone
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 66
    assessmentTime: Visit 3
- id: belkin-mobility
  conceptId: motor-function-in-rehabilitation
  name: Mobility in mixed-etiology rehabilitation
  direction: Increased
  evidence: Limited research
  description: The authors report a larger mean change with the adjunct. The main report pools both diagnoses.
  sourceId: belkin2024
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  exposure: 500 mg IV daily for 10 days, then 250 mg orally three times daily for 8 weeks
  instrument: Rivermead Mobility Index
  magnitude: Mean improvement +5.4 vs +3.4 points (p<0.001)
  reportType: measured-assessment
  study:
    id: nct06221826
    design: Single-center randomized open-label comparison
    sampleSize: 60
    populationLabels: *id009
    comparator: Standard rehabilitation alone
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 66
    assessmentTime: Day 66
- id: belkin-adverse-events
  conceptId: adverse-events
  name: Adverse events in mixed-etiology rehabilitation
  direction: Variable
  evidence: Limited research
  description: No events were recorded in this open-label study of 60 people.
  sourceId: belkin2024
  population: Adults in neurological rehabilitation after stroke or traumatic brain injury
  exposure: 500 mg IV daily for 10 days, then 250 mg orally three times daily for 8 weeks
  instrument: Adverse-event reports
  magnitude: 0 events reported
  reportType: measured-assessment
  study:
    id: nct06221826
    design: Single-center randomized open-label comparison
    sampleSize: 60
    populationLabels: *id009
    comparator: Standard rehabilitation alone
    route: Intravenous then oral
    formulation: Mexidol 50 mg/mL injection then Mexidol Forte 250 film-coated tablets
    durationDays: 66
    assessmentTime: Through final visit
```

## Mechanisms

```yaml
- title: Glutamate-associated cell injury and lipid oxidation
  description: In vitro, Mexidol reduced glutamate-associated injury and iron-induced lipid peroxidation. Selenium-dependent glutathione peroxidase activity increased, while catalase and glutathione S-transferase activity were unchanged in the reported assays.
  sourceId: shchulkin2012
  conceptId: oxidative-stress
- title: Neuronal survival under glutamate stress
  description: In a cerebellar granule-cell culture, neuronal survival after glutamate was reported to improve by 8–10%. The experiment measured cell survival under induced stress.
  sourceId: gromova2017
- title: Mitochondrial measurements in experimental ischemia
  description: A Wistar-rat experiment found dose- and salt-dependent changes in brain mitochondrial respiration. Succinate and malate groups showed reductions in mitochondrial hydrogen peroxide and apoptosis-inducing factor after focal ischemia.
  sourceId: pozdnyakov2023
  conceptId: mitochondrial-biomarkers
- title: Parent compound and succinate in a stress model
  description: A mouse study tested Mexidol, the isolated pyridinol component and sodium succinate under acute stress. It measured hepatic carbohydrate content and lipid peroxidation.
  sourceId: deviatkina1999
```

## Cautions

```yaml
- title: Oral succinate contraindications
  description: The Russian Mexidol Forte 250 label lists hypersensitivity to the ingredient or excipients, acute hepatic or renal failure, pregnancy and breastfeeding among its contraindications.
  sourceId: forte-label
- title: Oral succinate adverse reactions
  description: The label lists very rare reactions including somnolence, headache, gastrointestinal symptoms, rash, urticaria and angioedema.
  sourceId: forte-label
- title: Ophthalmic hydrochloride reactions
  description: The Emoxipin eye-drop label lists local reactions such as burning, itching and short-lived conjunctival redness.
  sourceId: emoxipin-label
- title: Limited information on rare harms
  description: MIR had few serious adverse events and deaths. Its published event tabulation and the registry’s nonserious event counts differ.
  sourceId: mir-registry
```

## Claims

```yaml
- id: mexidol-stroke-disability
  assertion: Sequential IV and oral emoxypine succinate yielded better short-term disability scores than matching placebo in MIR and EPICA.
  relation: Clinical association
  participants:
  - entityId: substance:emoxypine
    role: studied succinate formulation
  - entityId: tag:stroke-recovery
    role: measured outcome
  context: Adjunctive treatment in the acute and early recovery phases of ischemic stroke, with assessments at about two months.
  sourceIds:
  - mir
  - epica
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Both studies used primary per-protocol analyses. MIR excluded patients who received reperfusion, and its earlier disability assessment showed no clear difference.
- id: mexidol-lipid-peroxidation-assay
  assertion: Mexidol reduced iron-induced lipid peroxidation in a laboratory assay.
  relation: Experimental inhibition
  participants:
  - entityId: substance:emoxypine
    role: tested succinate formulation
  - entityId: tag:oxidative-stress
    role: measured lipid oxidation
  context: Preclinical in vitro lipid-peroxidation experiment.
  sourceIds:
  - shchulkin2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The assay does not establish target engagement or clinical benefit in humans.
```

## Interactions

```yaml
- id: mexidol-benzodiazepine-label
  name: Benzodiazepines
  otherSlug: null
  targetClassId: benzodiazepine
  summary: The Russian oral succinate label states that Mexidol Forte 250 can intensify benzodiazepine effects. It supplies no size estimate or dose-response data for this combination.
  context: Mexidol Forte 250 oral product information, section 4.5.
  sourceId: forte-label
- id: mexidol-other-label-interactions
  name: Other medicines listed in the oral product label
  otherSlug: null
  summary: The label describes possible potentiation of antidepressants, anxiolytics, antiseizure medicines and antiparkinsonian medicines. It also says its clinical and postmarketing review detected no drug–drug interaction signal.
  context: Mexidol Forte 250 oral product information, section 4.5.
  sourceId: forte-label
- id: mexidol-concomitant-stroke-medicines
  name: Concomitant medicines in MIR and EPICA
  otherSlug: null
  summary: A secondary analysis of 454 patients found no significant adverse-event differences associated with the concomitant treatments assessed, which included common antihypertensive and antithrombotic medicines.
  context: Reanalysis of MIR and EPICA. Co-medications were not randomized by this analysis.
  sourceId: shikh2026
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: 6-Methyl-2-ethyl-3-hydroxypyridine
  authors: NCBI PubChem
  year: 2005
  url: https://pubchem.ncbi.nlm.nih.gov/compound/114681
  kind: Chemical identity
  insight: Defines the neutral emoxypine entity shown in the identity card.
  limitation: The record describes the parent structure. The hydrochloride and succinate have separate identities.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: pubchem-succinate
  title: Mexidol
  authors: NCBI PubChem
  year: 2005
  url: https://pubchem.ncbi.nlm.nih.gov/compound/122298
  kind: Chemical identity
  insight: Defines the 1:1 emoxypine–succinic acid composition, C12H17NO5, 255.27 g/mol.
  limitation: The record does not establish bioequivalence across products.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: mir
  title: Results of the international multicenter randomized, double-blind, placebo-controlled clinical trial for the evaluation of the efficacy and safety of the sequential therapy with ethylmethylhydroxypyridine succinate in patients in the acute and early recovery periods of ischemic stroke (MIR)
  authors: N. A. Shamalov, A. I. Fedin, G. S. Rakhimbaeva, et al.
  year: 2025
  url: https://doi.org/10.17116/jnevro202512508240
  kind: Randomized controlled trial
  insight: Phase 3 MIR trial. At day 71 the published per-protocol mRS change was −2.45 versus −2.01 points. The intention-to-treat comparison also favored Mexidol.
  limitation: Use was adjunctive in first-ever moderate stroke without reperfusion. The primary analysis excluded 25 of 304 randomized participants. Table 3 and the registry label the primary statistic differently.
  funding: The article acknowledges support from Pharmasoft, the manufacturer and registered trial sponsor.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The publication discloses company support for the study.
  conflictOfInterestStatus: declared
  pmid: '40898634'
  doi: 10.17116/jnevro202512508240
  disclosureUrl: https://app.rlsnet.ru/api/storage/dossier/pdf/193_rezultaty-mezdunarodnogo-mnogocentrovogo-randomizirovannogo-dvoinogo-slepogo-placebo-kontroliruemogo-issledovaniya-ocenki-effektivnosti-i-bezopasnosti-posledovatelnoi-terapii-preparatom-etilmetilgidroksipiridina-sukcinata-pacientov-v-ostrom-i-rannem-vosstanovitelnom-periodax-isemiceskogo-insulta-mir.pdf
- id: epica
  title: Results of a randomized double blind multicenter placebo-controlled, in parallel groups trial of the efficacy and safety of prolonged sequential therapy with mexidol in the acute and early recovery stages of hemispheric ischemic stroke (EPICA)
  authors: L. V. Stakhovskaya, N. A. Shamalov, D. R. Khasanova, et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28665371/
  kind: Randomized controlled trial
  insight: At days 67–71, mean modified Rankin Scale (mRS) scores were 1.10 versus 1.46 on Mexidol versus placebo.
  limitation: Per-protocol analysis included 124 of 150 randomized participants. The English translation and age subgroup analyses come from this same cohort.
  funding: Pharmasoft is the lead sponsor in the EPICA trial registry.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '28665371'
  doi: 10.17116/jnevro20171173255-65
  disclosureUrl: https://clinicaltrials.gov/study/NCT02793687
- id: epica-english
  title: Results of a Randomized, Double-Blind, Multicenter, Placebo-Controlled, Parallel-Group Study of the Efficacy and Safety of Mexidol in Prolonged Sequential Therapy of Patients in the Acute and Early Recovery Stages of Hemispheric Stroke (the EPICA study)
  authors: L. V. Stakhovskaya, N. A. Shamalov, D. R. Khasanova, et al.
  year: 2018
  url: https://mexidol.ru/wp-content/uploads/2024/11/mexidol-rezults-of-epica-english.pdf
  kind: Trial publication (English translation)
  insight: Full methods and endpoint tables for the EPICA trial.
  limitation: This translation reports the same participants as the 2017 Russian article.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  doi: 10.1007/s11055-018-0652-y
- id: memo
  title: Результаты международного многоцентрового рандомизированного двойного слепого плацебо-контролируемого исследования оценки эффективности и безопасности последовательной терапии пациентов с хронической ишемией мозга препаратами Мексидол и Мексидол ФОРТЕ 250
  authors: A. I. Fedin, V. V. Zakharov, M. M. Tanashyan, et al.
  year: 2021
  url: https://doi.org/10.17116/jnevro20211211117
  kind: Randomized controlled trial
  insight: The MEMO trial reported a 2.05-point mean between-group difference in MoCA change (95% CI 1.51–2.58) at the final visit.
  limitation: Short follow-up in patients diagnosed with chronic cerebral ischemia. Cognitive test scores do not establish sustained independence or efficacy for acute stroke.
  funding: Pharmasoft was the registered trial sponsor. The article states that Vectorpharm supported its preparation.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The authors disclose Vectorpharm support in the conflict-of-interest statement.
  conflictOfInterestStatus: declared
  doi: 10.17116/jnevro20211211117
  disclosureUrl: https://www.mediasphera.ru/issues/zhurnal-nevrologii-i-psikhiatrii-im-s-s-korsakova/2021/11/1199772982021111007
- id: mir-registry
  title: Efficacy and Safety of Mexidol® in Stroke Therapy
  authors: Pharmasoft (ClinicalTrials.gov submission)
  year: 2024
  url: https://clinicaltrials.gov/study/NCT06437626?tab=results
  kind: Trial registry
  insight: Reports MIR protocols, arm-level endpoints and adverse events. Pharmasoft was lead sponsor.
  limitation: The record was first posted after trial completion. The posted nonserious adverse-event counts differ from the adverse-event counts in the journal.
  funding: Pharmasoft is the lead sponsor in the trial record.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT06437626?tab=results
- id: epica-registry
  title: Study of Efficacy and Safety of MEXIDOL® in Ischemic Stroke Therapy
  authors: Pharmasoft (ClinicalTrials.gov submission)
  year: 2016
  url: https://clinicaltrials.gov/study/NCT02793687?tab=results
  kind: Trial registry
  insight: Reports EPICA arm sizes, mean clinical scale scores and serious adverse events.
  limitation: The record was first posted after trial completion. This is the same cohort as the EPICA publications.
  funding: Pharmasoft is the lead sponsor in the trial record.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT02793687?tab=results
- id: memo-registry
  title: Safety and Efficacy of Sequential Therapy With Mexidol® in Patients With Chronic Cerebral Ischemia
  authors: Pharmasoft (ClinicalTrials.gov submission)
  year: 2025
  url: https://clinicaltrials.gov/study/NCT06834490?tab=results
  kind: Trial registry
  insight: Records the MEMO sponsor, schedule and posted results, including adverse-event categories.
  limitation: The record was first posted more than four years after trial completion. It reports the same cohort as the 2021 article.
  funding: Pharmasoft is the lead sponsor in the trial record.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT06834490?tab=results
- id: osipova2026
  title: Оценка состояния когнитивного статуса у пациентов старческого возраста с хронической ишемией головного мозга при применении Мексидола
  authors: O. A. Osipova, E. V. Gosteva, U. S. Moskvitina
  year: 2026
  url: https://doi.org/10.17116/jnevro202612609184
  kind: Open comparative study
  insight: Open add-on comparison in 90 older adults with chronic cerebral ischemia. MMSE, Stroop and Schulte results favored the Mexidol group at three months.
  limitation: The accessible abstract leaves allocation and the dose schedule unclear. Differences in test scores do not establish a durable clinical benefit.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  doi: 10.17116/jnevro202612609184
  pmid: '42899921'
- id: gaynetdinova2026
  title: 'Системное воспаление при спастических формах детского церебрального паралича: патогенетическая роль и возможности модуляции с применением препарата Мексидол в двигательной реабилитации педиатрических пациентов'
  authors: D. D. Gaynetdinova, L. Z. Afandieva
  year: 2026
  url: https://doi.org/10.17116/jnevro202612605174
  kind: Comparative rehabilitation study
  insight: Motor and cognitive measures improved more after six weeks of robotic rehabilitation plus Mexidol than with rehabilitation alone in a 47-child comparison.
  limitation: Abstract only. Reported ranges span multiple measures, and the abstract does not specify individual endpoint values, allocation, masking or drug dosing.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  doi: 10.17116/jnevro202612605174
  pmid: '42246529'
- id: khabarov2008
  title: Астенические расстройства у военнослужащих с сочетанными травмами
  authors: I. Yu. Khabarov
  year: 2008
  url: https://medical-diss.com/medicina/astenicheskie-rasstroystva-u-voennosluzhaschih-s-sochetannymi-travmami
  kind: Dissertation author’s abstract
  insight: Four-arm inpatient trauma comparison with a distinct 100 mg intramuscular Mexidol arm. The report gives Hamilton anxiety scores for that arm.
  limitation: An OCR transcription of the author’s abstract is available. Arm-level attrition and masking across administration routes could not be verified from the full dissertation.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: forte-label
  title: Общая характеристика лекарственного препарата Мексидол ФОРТЕ 250
  authors: RPC Pharmasoft LLC
  year: 2025
  url: https://mexidol.ru/kak-primenyat/instruktsiya-po-meditsinskomu-primeneniyu-lekarstvennogo-preparata-meksidol-tabletki-forte-250-mg-40/
  kind: Russian prescribing information
  insight: Lists the 250 mg oral succinate formulation, label pharmacokinetics, contraindications and interaction language.
  limitation: The label does not identify the cohort or full methods behind the quoted oral half-life range.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: emoxipin-label
  title: Инструкция по медицинскому применению лекарственного препарата Эмоксипин
  authors: Pharmstandard-UfaVITA
  year: 2024
  url: https://emoxypin.ru/instruction/
  kind: Russian prescribing information
  insight: Describes methylethylpyridinol hydrochloride 10 mg/mL eye drops and the local administration route.
  limitation: Formulation-specific information for the ophthalmic product.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ru-mexidol-registry
  title: Государственный реестр лекарственных средств Минздрава России
  authors: Russian Ministry of Health
  year: 2022
  url: https://pots.minzdrav.gov.ru/public_price_limits?page=1304&per_page=45
  kind: Official price register
  insight: Lists Mexidol Forte 250, registration ЛП-№(000066)-(РГ-RU), and its succinate ingredient.
  limitation: This entry documents the named Russian product and presentation.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: sariev1999
  title: The kinetics of the urinary excretion of mexidol and its glucuronate conjugate in patients
  authors: A. K. Sariev, V. P. Zherdev, A. A. Litvin, et al.
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10572752/
  kind: Human pharmacokinetic study
  insight: After a 500 mg oral dose in 16 patients, 0.31% and 49.6% of the dose were recovered in urine as parent drug and glucuronide, respectively, over 11.5 hours.
  limitation: Small clinical cohort with variable recovery. Urinary recovery is a different endpoint from plasma half-life or absolute oral bioavailability.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '10572752'
- id: pozdnyakov2023
  title: An effect of ethylmethylhydroxypyridine succinate and ethylmethylhydroxypyridine malate on changes in mitochondrial function under conditions of focal cerebral ischemia
  authors: D. I. Pozdnyakov, D. S. Zolotykh, A. A. Vihor
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37994896/
  kind: Animal experiment
  insight: Compared Mexidol and the malate formulation in separate groups in a model of focal cerebral ischemia and assessed mitochondrial function.
  limitation: Experimental brain-tissue endpoints. The succinate group findings do not establish a mechanism of clinical benefit in humans.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '37994896'
- id: voznyuk2023
  title: 'The impact of therapy with Mexidol on neurological deficit and functional outcome in patients with ischemic stroke: a systematic review and meta-analysis'
  authors: I. A. Voznyuk, S. V. Kolomentsev, E. M. Morozova
  year: 2023
  url: https://app.rlsnet.ru/api/storage/dossier/pdf/117_vliyanie-terapii-preparatom-meksidol-na-regress-nevrologiceskogo-deficita-i-funkcionalnyi-isxod-u-pacientov-s-isemiceskim-insultom-sistematizirovannyi-obzor-i-metaanaliz.pdf
  kind: Systematic review and meta-analysis
  insight: Pooled stroke scale data from 11 reports published in Russian, of which two were randomized controlled studies.
  limitation: Nine studies were unblinded, nonrandomized cohorts. Heterogeneity limits the pooled estimates, and this review predates MIR.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '38148698'
- id: skvortsova2006
  title: The randomized double-blind placebo-controlled study of efficacy and safety of mexidol in the complex therapy of ischemic stroke in the acute period
  authors: V. I. Skvortsova, L. V. Stakhovskaya, Y. R. Nartsissov, et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/39320346/
  kind: Randomized controlled trial
  insight: Early 51-person acute stroke trial with short-term NIH and Barthel scale assessments.
  limitation: The reported improvement in functional recovery applies to an early-admission subgroup. The active arm was younger on average (65.8 vs 73.0 years). The abstract provides no precise between-group effect estimate.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '39320346'
- id: mega
  title: Results of a multicentre double-blind randomised placebo-controlled clinical trial evaluating the efficacy and safety of Mexidol in the treatment of Attention Deficit Hyperactivity Disorder in Children (MEGA)
  authors: N. N. Zavadenko, N. Y. Suvorinova, T. T. Batysheva, et al.
  year: 2022
  url: https://doi.org/10.17116/jnevro202212204175
  kind: Randomized controlled trial
  insight: The six-week MEGA trial compared two oral Mexidol schedules with placebo in 333 children with ADHD.
  limitation: Short follow-up, no active treatment comparator and no evidence about adult ADHD or sustained benefit.
  funding: Pharmasoft was the registered trial sponsor. The article reports that Vectorpharm supported its preparation.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The publication discloses support from Vectorpharm.
  conflictOfInterestStatus: declared
  pmid: '35485068'
  doi: 10.17116/jnevro202212204175
  disclosureUrl: https://app.rlsnet.ru/api/storage/dossier/pdf/121_rezultaty-mnogocentrovogo-dvoinogo-slepogo-randomizirovannogo-placebo-kontroliruemogo-issledovaniya-po-ocenke-effektivnosti-i-bezopasnosti-preparata-meksidol-v-lecenii-sindroma-deficita-vnimaniya-s-giperaktivnostyu-u-detei-mega.pdf
- id: mega-registry
  title: Safety and Efficacy of Mexidol® for ADHD in Children Aged 6-12
  authors: Pharmasoft (ClinicalTrials.gov submission)
  year: 2025
  url: https://clinicaltrials.gov/study/NCT06854601?tab=results
  kind: Trial registry
  insight: Reports group-level means and confidence intervals for change in SNAP-IV scores, and adverse-event categories.
  limitation: The record was first posted after the trial completed and reports the same participants as the 2022 article.
  funding: Pharmasoft is the lead sponsor in the trial record.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT06854601?tab=results
- id: pubchem-hydrochloride
  title: 6-Methyl-2-ethyl-3-hydroxypyridine hydrochloride
  authors: NCBI PubChem
  year: 2005
  url: https://pubchem.ncbi.nlm.nih.gov/compound/128852
  kind: Chemical identity
  insight: Defines the methylethylpyridinol hydrochloride entity as CID 128852 and C8H12ClNO.
  limitation: Product labels specify formulation and route.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: shchulkin2012
  title: Effect of mexidol on the development of the phenomenon of the neuronal excitotoxicity in vitro
  authors: A. V. Shchul’kin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22677663/
  kind: In vitro experiment
  insight: Mexidol reduced glutamate-associated injury and iron-induced lipid peroxidation under the experimental conditions.
  limitation: The concentrations and endpoints are specific to the experimental system.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '22677663'
- id: gromova2017
  title: A study of the neuroprotective effect of mexidol on the cell model of glutamate stress
  authors: O. A. Gromova, I. Yu. Torshin, E. V. Stelmashuk, et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29376987/
  kind: Cell culture experiment
  insight: Reported an 8–10% increase in neuronal survival after glutamate exposure in a cerebellar granule-cell model.
  limitation: Cell survival is an experimental endpoint.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '29376987'
  doi: 10.17116/jnevro201711712171-77
- id: deviatkina1999
  title: Effect of mexidol and its structural components on carbohydrate level and lipid peroxidation in acute stress
  authors: T. A. Deviatkina, R. V. Lutsenko, E. M. Vazhnichaia, et al.
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10432561/
  kind: Animal experiment
  insight: Compared Mexidol with the parent pyridinol and sodium succinate in a mouse stress model. The abstract reports higher hepatic glycogen with Mexidol relative to the stress condition.
  limitation: Liver biomarkers in stressed mice cannot establish clinical equivalence of the chemical forms.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '10432561'
- id: belkin2024
  title: Results of a cohort single-center randomized study of the modulating effect of the drug Mexidol in the rehabilitation of patients who suffered acute cerebral insufficiency
  authors: A. A. Belkin, V. A. Belkin, I. E. Vasilchenko, et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38676685/
  kind: Open-label randomized study
  insight: Pooled mixed post-stroke and post-traumatic brain injury rehabilitation cohort. End-of-course cognition did not differ clearly, while some mood and mobility measures favored the adjunct.
  limitation: Single-center, open treatment allocation and multiple outcomes. The publication reports pooled results across both diagnoses.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '38676685'
  doi: 10.17116/jnevro2024124041108
- id: belkin-registry
  title: MEXIDOL® in the Rehabilitation Treatment of Patients With Acute Cerebral Failure
  authors: Pharmasoft (ClinicalTrials.gov submission)
  year: 2024
  url: https://clinicaltrials.gov/study/NCT06221826
  kind: Trial registry
  insight: Reports the intervention schedule and unmasked randomized design, with Pharmasoft as lead sponsor.
  limitation: Eligibility summary lists acute ischemic stroke. The linked publication describes a mixed stroke and traumatic brain injury cohort.
  funding: Pharmasoft is the lead sponsor in the trial record.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT06221826
- id: shikh2026
  title: 'Drug-drug interactions with Mexidol in patients with ischemic stroke: Analysis of data from randomized clinical trials'
  authors: E. V. Shikh, N. A. Shamalov, S. N. Yanishevsky, et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41984565/
  kind: Secondary trial analysis
  insight: Event-frequency analysis in the 454 MIR and EPICA participants found no significant changes associated with the evaluated concomitant therapies.
  limitation: Co-medications were not assigned by this analysis. Clinical adverse-event comparisons do not substitute for dedicated interaction or pharmacokinetic tests.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: '41984565'
  doi: 10.17116/jnevro2026126031141
```

## Legal

```yaml
- jurisdiction: Russia
  activity: Prescription dispensing of Mexidol Forte 250 tablets
  status: Registered prescription medicinal product, ЛП-№(000066)-(РГ-RU).
  sourceUrl: https://mexidol.ru/kak-primenyat/instruktsiya-po-meditsinskomu-primeneniyu-lekarstvennogo-preparata-meksidol-tabletki-forte-250-mg-40/
  asOf: '2026-11-18'
- jurisdiction: Russia
  activity: Prescription dispensing of Emoxipin 1% eye drops
  status: Registered prescription eye drops, ЛП-№(005938)-(РГ-RU).
  sourceUrl: https://emoxypin.ru/instruction/
  asOf: '2026-11-18'
```
