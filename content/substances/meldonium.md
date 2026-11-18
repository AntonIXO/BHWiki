---
slug: meldonium
name: Meldonium
subtitle: Carnitine-modulating cardiovascular drug
aliases:
  - Mildronate
  - Mildronāts
  - mildonium
  - мельдоний
  - Милдронат
  - MET-88
  - THP
formula: C6H14N2O2
molecularWeight: 146.19 g/mol
pubchemCid: 123868
smiles: C[N+](C)(C)NCCC(=O)[O-]
category: Cardiovascular drug
tags:
  - bbox1
  - octn2
  - exercise-tolerance
  - stroke-recovery
  - plasma-carnitine
accent: "#c39b64"
reviewedAt: "2026-11-18"
editorialStatus: sourced-draft
halfLife:
  label: Depends on route and dosing history
  low: null
  high: null
  context: Plasma estimates vary across single and repeated dosing. Extended urinary detection is a separate measurement.
  sourceId: zhang2013
kinetics:
  onset: Subjective onset was not established in the cited pharmacokinetic studies.
  peak: Oral peak plasma concentration increased with dose in healthy volunteers.
  duration: Repeated oral dosing led to plasma accumulation in the capsule study.
  bioavailability: The single-dose oral study measured dose-dependent plasma exposure without an IV comparison.
  metabolism: The oral study measured the parent drug in plasma.
  sourceId: zhang2013
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
x-order: 9007199254740991
---

## Summary

Meldonium is a cardiovascular drug marketed as Mildronate. Two controlled trials found longer bicycle exercise times with adjunctive meldonium in adults with stable angina. Evidence for better athletic performance is limited. ([4](https://pubmed.ncbi.nlm.nih.gov/22186118/), [5](https://seminarsincardiology.com/pdf/SeminarsCVMed-2010-16-3.pdf), [13](https://doi.org/10.26787/nydha-2618-8783-2021-6-4-37-44))

## Description

The molecular record describes anhydrous meldonium. Each capsule in the Irish Mildronate 500 mg label contains **500 mg of meldonium dihydrate**, equivalent to **401.14 mg of meldonium**. Lithuania lists a separate intravenous solution containing **100 mg/mL of meldonium dihydrate**. ([1](https://pubchem.ncbi.nlm.nih.gov/compound/123868), [2](https://www.hpra.ie/img/uploaded/swedocuments/Licence_PA22992-025-001_22052024102443.pdf), [3](https://vapris.vvkt.lt/vvkt-web/public/medications/view/13047))

## Evidence note

The angina trials measured exercise-test performance on background therapy. The MILSS II registry lists JSC Grindeks as commercial sponsor. The right-heart-failure pilot had no concurrent control group. Evidence that meldonium reduces cardiovascular events, hospitalization or death remains insufficient. ([4](https://pubmed.ncbi.nlm.nih.gov/22186118/), [5](https://seminarsincardiology.com/pdf/SeminarsCVMed-2010-16-3.pdf), [6](https://www.clinicaltrialsregister.eu/ctr-search/trial/2004-001611-58/LV), [11](https://www.mdpi.com/2077-0383/14/21/7787))

In acute ischemic stroke, the trial against cinepazide found no statistically significant difference in three-month disability. The small athlete study used nonrandom allocation and had baseline imbalances. Long-term safety, withdrawal and subjective duration remain uncertain. Oral exposure studies documented prolonged urinary excretion. ([7](https://pubmed.ncbi.nlm.nih.gov/23949899/), [13](https://doi.org/10.26787/nydha-2618-8783-2021-6-4-37-44), [2](https://www.hpra.ie/img/uploaded/swedocuments/Licence_PA22992-025-001_22052024102443.pdf), [12](https://pubmed.ncbi.nlm.nih.gov/28213178/), [16](https://pubmed.ncbi.nlm.nih.gov/30328291/))

## Doses

```yaml
- label: Ireland, oral product label
  amount: 500–1000 mg meldonium dihydrate per day
  quantity: 500
  quantityMax: 1000
  unit: mg/day
  ingredient: Meldonium dihydrate
  formulation: Mildronate 500 mg hard capsule
  route: Oral
  frequency: Daily, with the 1000 mg daily amount optionally divided into two doses
  duration: 4–6 weeks
  population: Adults with mild chronic cardiac insufficiency
  purpose: Adjunctive treatment in the Irish label
  sourceCategory: approved-label
  note: Each capsule corresponds to 401.14 mg anhydrous meldonium.
  sourceId: hpra2024
  absorptionNote: The label permits administration with food to reduce gastrointestinal symptoms.
- label: MILSS I dose-ranging trial
  amount: 100, 300, 1000 or 3000 mg/day, in four discrete arms
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium, as reported
  formulation: Mildronate oral study product
  route: Oral
  frequency: Twice daily in equal divided doses
  duration: 12 weeks
  population: Adults with stable angina and exercise-limiting ischemia
  purpose: Dose-ranging adjunct to background therapy
  sourceCategory: research
  note: Separate study groups received 50, 150, 500 or 1500 mg per administration. The paper reports product doses without an anhydrous-equivalent conversion.
  sourceId: milss1
- label: MILSS II stable angina trial
  amount: 1000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium, as reported
  formulation: Mildronate 500 mg capsules
  route: Oral
  frequency: 500 mg twice daily
  duration: 12 months
  population: Adults with CCS class II–III stable angina and exercise-limiting ischemia
  purpose: Adjunct to background therapy versus placebo
  sourceCategory: research
  note: Form verified in EudraCT 2004-001611-58. Study mass basis retained as reported.
  sourceId: milss2
- label: Post-infarction heart failure study
  amount: 1000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium, as reported
  formulation: Idrinol injection
  route: Intravenous
  frequency: Daily
  duration: 10–14 days
  population: Adults aged 45–75 with class II–III heart failure, 3–4 weeks after myocardial infarction
  purpose: Adjunct to usual treatment after myocardial infarction
  sourceCategory: research
  note: The comparison group received background therapy.
  sourceId: statsenko2014
- label: Healthy volunteer oral pharmacokinetics
  amount: Single 250, 500, 1000, 1250 or 1500 mg, then 500 mg per administration in the repeat-dose cohort
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Meldonium, as reported
  formulation: Mildronate capsules
  route: Oral
  frequency: Single exposure, followed by three times daily in the 500 mg cohort
  duration: 13 days in the repeated-dose phase
  population: 40 healthy Chinese volunteers in the single-dose study
  purpose: Plasma pharmacokinetics
  sourceCategory: research
  note: Only the 500 mg group continued to repeat dosing.
  sourceId: zhang2013
- label: Healthy volunteer injection pharmacokinetics
  amount: Single 250, 500 or 1000 mg, or repeated 500 mg per administration
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Meldonium, as reported
  formulation: Mildronate injection
  route: Intravenous
  frequency: Single dose or 500 mg twice daily
  duration: Single-dose and repeated-dose phases
  population: Healthy Chinese volunteers
  purpose: Plasma pharmacokinetics
  sourceCategory: research
  note: Elimination estimates apply to the injected study formulation.
  sourceId: peng2010
- label: Acute ischemic stroke trial
  amount: 500 mg per day as registered
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium, as reported
  formulation: Mildronate infusion
  route: Intravenous
  frequency: Once daily
  duration: 14 days
  population: Adults with acute ischemic stroke
  purpose: Comparison with cinepazide on background aspirin
  sourceCategory: research
  note: Exposure is from NCT01831011. The publication confirms an active comparator.
  sourceId: stroke-registry
- label: Human carnitine biomarker study
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg per dose
  ingredient: Meldonium dihydrate
  formulation: Mildronate
  route: Oral
  frequency: Twice daily between meals
  duration: 4 weeks
  population: 17 healthy nonvegetarian adults
  purpose: Plasma and urinary carnitine measurements
  sourceCategory: research
  note: Compared with the same participants at baseline.
  sourceId: liepinsh2011
- label: Post-infarction chronic heart failure trial
  amount: 1000 mg dihydrate per day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium dihydrate
  formulation: 3-TMHP, study product
  frequency: Daily
  duration: 6 months
  population: Adults with chronic heart failure and LVEF below 40%, more than 6 months after myocardial infarction
  purpose: Comparison with trimetazidine or usual care
  sourceCategory: research
  note: Twenty-five participants were assigned meldonium alongside basic therapy.
  sourceId: vasiuk2007
- label: Pulmonary arterial hypertension with right ventricular failure pilot
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg per dose
  ingredient: Meldonium, as reported
  formulation: 500 mg meldonium capsules supplied by Grindeks
  route: Oral
  frequency: Twice daily
  duration: 30 days
  population: Adults with pulmonary arterial hypertension and right ventricular failure
  purpose: Before-and-after functional assessment
  sourceCategory: research
  note: The study followed participants for a further 30 days after treatment.
  sourceId: kigitovica2025
- label: Repeat-dose athlete excretion study
  amount: 1000 or 2000 mg/day in separate cohorts
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Meldonium, as reported
  formulation: Cardionate 250 mg capsules
  route: Oral
  frequency: Daily
  duration: 3 weeks
  population: 32 healthy trained volunteers
  purpose: Plasma and urine follow-up after repeat exposure
  sourceCategory: research
  note: The Russian report gives cohort sizes of 14 and 18. The study did not test athletic enhancement.
  sourceId: rabin-russian2019
```

## Pharmacokinetics

```yaml
- id: meldonium-iv-single-250
  analyte: Meldonium in plasma
  route: Intravenous
  formulation: Mildronate injection
  population: Healthy Chinese volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 5.56
  low: null
  high: null
  unit: hours
  context: Reported half-life after a single 250 mg dose, measured by LC–MS/MS.
  sourceId: peng2010
  modelEligible: false
- id: meldonium-iv-single-500
  analyte: Meldonium in plasma
  route: Intravenous
  formulation: Mildronate injection
  population: Healthy Chinese volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 6.46
  low: null
  high: null
  unit: hours
  context: Reported half-life after a single 500 mg dose, measured by LC–MS/MS.
  sourceId: peng2010
  modelEligible: false
- id: meldonium-iv-single-1000
  analyte: Meldonium in plasma
  route: Intravenous
  formulation: Mildronate injection
  population: Healthy Chinese volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 6.55
  low: null
  high: null
  unit: hours
  context: Reported half-life after a single 1000 mg dose, measured by LC–MS/MS.
  sourceId: peng2010
  modelEligible: false
- id: meldonium-iv-repeated-500
  analyte: Meldonium in plasma
  route: Intravenous
  formulation: Mildronate injection
  population: Healthy Chinese volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 15.34
  low: null
  high: null
  unit: hours
  context: The authors observed plasma accumulation after repeated IV meldonium at 500 mg twice daily.
  sourceId: peng2010
  modelEligible: false
```

## Modifiers

```yaml
- label: Repeated intravenous exposure
  effect: Longer measured plasma half-life
  detail: In one study, mean half-life was 6.46 hours after a single 500 mg injection and 15.34 hours after repeated 500 mg injections twice daily.
  sourceId: peng2010
  observationId: meldonium-iv-repeated-500
  factorType: other
  direction: slower
```

## Effects

```yaml
- id: skiers-subjective-reports
  conceptId: mood-response
  name: Spontaneously reported changes during the athlete study
  direction: Variable
  evidence: Subjective reports
  description: Placebo participants reported the greatest number of positive subjective changes, including mood, sleep and general well-being. The paper gives no comparable count for meldonium.
  sourceId: goloborodko2021
  population: Competitive ski-sport athletes
  exposure: Mildronate over the 15-day study period, dose and route unclear
  instrument: null
  magnitude: 7 of 10 reported positive changes on placebo
  study:
    id: goloborodko-razinkin-2021
    design: Nonrandomized placebo-controlled study, allocated by baseline test performance
    sampleSize: 20
    populationLabels:
      - Competitive ski-sport athletes
    comparator: Placebo
    assessmentTime: Day 15
    formulation: Mildronate, formulation unspecified
    durationDays: 15
  reportType: informal-account
```

## Outcomes

```yaml
- id: milss-i-exercise-100
  conceptId: exercise-tolerance
  name: MILSS I bicycle exercise time (100 mg/day)
  direction: Variable
  evidence: Human research
  description: Mean change from baseline in the 100 mg/day arm versus a −7.10-second change in the placebo arm. No statistically significant difference from placebo.
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 100 mg/day as Mildronate, divided twice daily on standard therapy
  instrument: Bicycle ergometry, change from baseline
  magnitude: -2.12 s versus −7.10 s (placebo)
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
  result:
    measure: mean
    estimate: -2.12
    unit: s
    instrument: Bicycle ergometry, change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    population: Adults with stable angina and exercise-limiting myocardial ischemia
- id: milss-i-exercise-300
  conceptId: exercise-tolerance
  name: MILSS I bicycle exercise time (300 mg/day)
  direction: Variable
  evidence: Human research
  description: Mean change from baseline in the 300 mg/day arm versus a −7.10-second change in the placebo arm. No statistically significant difference from placebo.
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 300 mg/day as Mildronate, divided twice daily on standard therapy
  instrument: Bicycle ergometry, change from baseline
  magnitude: +11.48 s versus −7.10 s (placebo)
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
  result:
    measure: mean
    estimate: 11.48
    unit: s
    instrument: Bicycle ergometry, change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    population: Adults with stable angina and exercise-limiting myocardial ischemia
- id: milss-i-exercise-1000
  conceptId: exercise-tolerance
  name: MILSS I bicycle exercise time (1000 mg/day)
  direction: Increased
  evidence: Human research
  description: Mean change from baseline in the 1000 mg/day arm versus a −7.10-second change in the placebo arm. The between-group comparison favored Mildronate (p = 0.002).
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate, divided twice daily on standard therapy
  instrument: Bicycle ergometry, change from baseline
  magnitude: +35.18 s versus −7.10 s (placebo)
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
  result:
    measure: mean
    estimate: 35.18
    unit: s
    instrument: Bicycle ergometry, change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    population: Adults with stable angina and exercise-limiting myocardial ischemia
- id: milss-i-exercise-3000
  conceptId: exercise-tolerance
  name: MILSS I bicycle exercise time (3000 mg/day)
  direction: Increased
  evidence: Human research
  description: Mean change from baseline in the 3000 mg/day arm versus a −7.10-second change in the placebo arm. The report describes a significant comparison with placebo. The observed improvement was smaller than in the 1000 mg/day arm.
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 3000 mg/day as Mildronate, divided twice daily on standard therapy
  instrument: Bicycle ergometry, change from baseline
  magnitude: +28.08 s versus −7.10 s (placebo)
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
  result:
    measure: mean
    estimate: 28.08
    unit: s
    instrument: Bicycle ergometry, change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    population: Adults with stable angina and exercise-limiting myocardial ischemia
- id: milss-i-workload-1000
  conceptId: exercise-tolerance
  name: MILSS I maximum bicycle workload
  direction: Increased
  evidence: Human research
  description: At 1000 mg/day, workload change favored meldonium (p = 0.026). The other doses did not differ significantly from placebo. The secondary analyses were not adjusted for multiplicity.
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate on standard therapy
  instrument: Bicycle ergometry, maximum load change from baseline
  magnitude: +5.63 W versus +0.37 W (placebo)
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
  result:
    measure: mean
    estimate: 5.63
    unit: W
    instrument: Bicycle ergometry, maximum load change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    population: Adults with stable angina and exercise-limiting myocardial ischemia
- id: milss-i-angina-onset
  conceptId: angina-symptoms
  name: MILSS I time to exercise-induced angina
  direction: Variable
  evidence: Human research
  description: None of the doses differed significantly from placebo at week 12.
  sourceId: milss1
  population: Adults with stable angina and exercise-limiting myocardial ischemia
  exposure: 100, 300, 1000 or 3000 mg/day as Mildronate on standard therapy
  instrument: Time to angina during bicycle ergometry
  magnitude: At 1000 mg/day, the week-12 mean was 382.49 s versus 359.57 s (placebo).
  study:
    id: milss-i
    design: Multicenter randomized double-blind placebo-controlled phase II trial
    sampleSize: 512
    populationLabels:
      - Adults with stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Week 12
    route: Oral
    formulation: Mildronate
    durationDays: 84
- id: milss-ii-time
  conceptId: exercise-tolerance
  name: MILSS II bicycle exercise time
  direction: Increased
  evidence: Human research
  description: Change from baseline favored meldonium (p < 0.001). Table 2 lists 253 available month-12 observations in the 278-patient analysis population.
  sourceId: milss2
  population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate on standard therapy
  instrument: Bicycle ergometry, change from baseline
  magnitude: +55.05 s versus +0.79 s (placebo)
  study:
    id: eudract-2004-001611-58
    design: Multicenter randomized double-blind placebo-controlled phase III trial
    sampleSize: 278
    populationLabels:
      - Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    route: Oral
    formulation: Mildronate 500 mg capsules
  result:
    measure: mean
    estimate: 55.05
    unit: s
    instrument: Bicycle ergometry, change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
- id: milss-ii-workload
  conceptId: exercise-tolerance
  name: MILSS II maximum bicycle workload
  direction: Increased
  evidence: Human research
  description: Change in maximum achieved load favored meldonium (p < 0.001).
  sourceId: milss2
  population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate on standard therapy
  instrument: Bicycle ergometry, maximum load change from baseline
  magnitude: +7.78 W versus +0.10 W (placebo)
  study:
    id: eudract-2004-001611-58
    design: Multicenter randomized double-blind placebo-controlled phase III trial
    sampleSize: 278
    populationLabels:
      - Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    route: Oral
    formulation: Mildronate 500 mg capsules
  result:
    measure: mean
    estimate: 7.78
    unit: W
    instrument: Bicycle ergometry, maximum load change from baseline
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
- id: milss-ii-st-deviation
  conceptId: exercise-ischemia-threshold
  name: MILSS II time to 1 mm st-segment deviation
  direction: Increased
  evidence: Human research
  description: The month-12 comparison favored meldonium (p = 0.01). This ECG threshold is a measured exercise endpoint.
  sourceId: milss2
  population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate on standard therapy
  instrument: Exercise ECG during bicycle ergometry
  magnitude: 483.83 s versus 425.98 s (placebo)
  study:
    id: eudract-2004-001611-58
    design: Multicenter randomized double-blind placebo-controlled phase III trial
    sampleSize: 278
    populationLabels:
      - Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    route: Oral
    formulation: Mildronate 500 mg capsules
  result:
    measure: mean
    estimate: 483.83
    unit: s
    instrument: Exercise ECG during bicycle ergometry
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
- id: milss-ii-angina-onset
  conceptId: angina-symptoms
  name: MILSS II time to exercise-induced angina
  direction: Increased
  evidence: Human research
  description: The raw month-12 mean time to chest pain was longer with meldonium (p = 0.044).
  sourceId: milss2
  population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
  exposure: 1000 mg/day as Mildronate on standard therapy
  instrument: Time to angina during bicycle ergometry
  magnitude: 490.50 s versus 443.06 s (placebo)
  study:
    id: eudract-2004-001611-58
    design: Multicenter randomized double-blind placebo-controlled phase III trial
    sampleSize: 278
    populationLabels:
      - Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    route: Oral
    formulation: Mildronate 500 mg capsules
  result:
    measure: mean
    estimate: 490.5
    unit: s
    instrument: Time to angina during bicycle ergometry
    comparator: Placebo plus standard therapy
    assessmentTime: Month 12
    population: Adults with CCS class II–III stable angina and exercise-limiting myocardial ischemia
- id: zhu-stroke-mrs
  conceptId: stroke-recovery
  name: Stroke recovery on the Modified Rankin Scale
  direction: Variable
  evidence: Human research
  description: The reported thresholds did not differ statistically between groups. The comparison does not establish clinical equivalence.
  sourceId: zhu2013
  population: Adults with acute ischemic stroke
  exposure: Mildronate injection plus background aspirin
  instrument: Modified Rankin Scale
  magnitude: mRS 0–1, p = 0.52. mRS 0–2, p = 0.07.
  study:
    id: nct01831011
    design: Multicenter randomized double-blind active-controlled phase II trial
    sampleSize: 227
    populationLabels:
      - Adults with acute ischemic stroke
    comparator: Cinepazide injection plus aspirin
    assessmentTime: 3 months
    route: Intravenous
    formulation: Mildronate infusion
    durationDays: 14
- id: zhu-stroke-nihss
  conceptId: stroke-recovery
  name: Stroke recovery on the National Institutes of Health Stroke Scale
  direction: Variable
  evidence: Human research
  description: The reported thresholds did not differ statistically between groups. The comparison does not establish clinical equivalence.
  sourceId: zhu2013
  population: Adults with acute ischemic stroke
  exposure: Mildronate injection plus background aspirin
  instrument: National Institutes of Health Stroke Scale
  magnitude: NIHSS >5, p = 0.98. NIHSS >8, p = 0.97.
  study:
    id: nct01831011
    design: Multicenter randomized double-blind active-controlled phase II trial
    sampleSize: 227
    populationLabels:
      - Adults with acute ischemic stroke
    comparator: Cinepazide injection plus aspirin
    assessmentTime: Day 15
    route: Intravenous
    formulation: Mildronate infusion
    durationDays: 14
- id: zhu-stroke-barthel
  conceptId: stroke-recovery
  name: Stroke recovery on the Barthel Index
  direction: Variable
  evidence: Human research
  description: The reported thresholds did not differ statistically between groups. The comparison does not establish clinical equivalence.
  sourceId: zhu2013
  population: Adults with acute ischemic stroke
  exposure: Mildronate injection plus background aspirin
  instrument: Barthel Index
  magnitude: Scores >75, p = 0.49. Scores >95, p = 0.47.
  study:
    id: nct01831011
    design: Multicenter randomized double-blind active-controlled phase II trial
    sampleSize: 227
    populationLabels:
      - Adults with acute ischemic stroke
    comparator: Cinepazide injection plus aspirin
    assessmentTime: Day 15
    route: Intravenous
    formulation: Mildronate infusion
    durationDays: 14
- id: statsenko-angina-frequency
  conceptId: angina-symptoms
  name: Angina frequency after myocardial infarction
  direction: Decreased
  evidence: Human research
  description: Attack frequency fell more in the meldonium group during short inpatient follow-up. Background medication was adjusted in both groups.
  sourceId: statsenko2014
  population: Adults aged 45–75 with class II–III heart failure, 3–4 weeks after myocardial infarction
  exposure: 1000 mg/day IV as an add-on
  instrument: null
  magnitude: −78.7% versus −20.3% with background therapy alone
  study:
    id: statsenko-2014-post-infarction
    design: Randomized parallel comparison with usual care
    sampleSize: 60
    populationLabels:
      - Adults aged 45–75 with class II–III heart failure, 3–4 weeks after myocardial infarction
    comparator: Background coronary disease therapy alone
    assessmentTime: Days 10–14
    route: Intravenous
    formulation: Idrinol injection
- id: statsenko-ejection-fraction
  conceptId: left-ventricular-ejection-fraction
  name: Left ventricular ejection fraction after myocardial infarction
  direction: Variable
  evidence: Human research
  description: The study did not find a statistically significant difference in ejection fraction changes between groups.
  sourceId: statsenko2014
  population: Adults aged 45–75 with class II–III heart failure, 3–4 weeks after myocardial infarction
  exposure: 1000 mg/day IV as an add-on
  instrument: Echocardiography, Simpson method
  magnitude: 43.9% to 46.2% versus 44.3% to 44.8% with background therapy alone
  study:
    id: statsenko-2014-post-infarction
    design: Randomized parallel comparison with usual care
    sampleSize: 60
    populationLabels:
      - Adults aged 45–75 with class II–III heart failure, 3–4 weeks after myocardial infarction
    comparator: Background coronary disease therapy alone
    assessmentTime: Days 10–14
    route: Intravenous
    formulation: Idrinol injection
- id: vasiuk-walking
  conceptId: exercise-tolerance
  name: Six-minute walk distance in chronic post-infarction heart failure
  direction: Increased
  evidence: Human research
  description: Walking distance increased in both active arms. The abstract does not quantify an incremental meldonium effect over usual care.
  sourceId: vasiuk2007
  population: Adults more than 6 months after myocardial infarction with chronic heart failure and LVEF below 40%
  exposure: 1000 mg/day meldonium dihydrate on background therapy
  instrument: Six-minute walk test
  magnitude: null
  study:
    id: vasiuk-2007-heart-failure
    design: Three-arm randomized comparison
    sampleSize: 65
    populationLabels:
      - Adults more than 6 months after myocardial infarction with chronic heart failure and LVEF below 40%
    comparator: Trimetazidine plus basic therapy or basic therapy alone
    assessmentTime: Month 6
    formulation: Meldonium dihydrate
- id: vasiuk-ef
  conceptId: left-ventricular-ejection-fraction
  name: Ejection fraction in chronic post-infarction heart failure
  direction: Variable
  evidence: Human research
  description: The investigators reported a significant LVEF increase only in the trimetazidine group.
  sourceId: vasiuk2007
  population: Adults more than 6 months after myocardial infarction with chronic heart failure and LVEF below 40%
  exposure: 1000 mg/day meldonium dihydrate on background therapy
  instrument: Dobutamine stress echocardiography
  magnitude: null
  study:
    id: vasiuk-2007-heart-failure
    design: Three-arm randomized comparison
    sampleSize: 65
    populationLabels:
      - Adults more than 6 months after myocardial infarction with chronic heart failure and LVEF below 40%
    comparator: Trimetazidine plus basic therapy or basic therapy alone
    assessmentTime: Month 6
    formulation: Meldonium dihydrate
- id: rvf-walk-day30
  conceptId: exercise-tolerance
  name: Six-minute walk distance in right ventricular failure
  direction: Increased
  evidence: Human research
  description: Walk distance increased at the end of treatment (paired comparison p = 0.021). There was no concurrent control group.
  sourceId: kigitovica2025
  population: Adults with pulmonary arterial hypertension and right ventricular failure
  exposure: 500 mg twice daily for 30 days on background treatment
  instrument: Six-minute walk test
  magnitude: 398.9 m versus 352.2 m at baseline
  study:
    id: kigitovica-2025-rvf
    design: Prospective uncontrolled before-and-after pilot
    sampleSize: 20
    populationLabels:
      - Adults with pulmonary arterial hypertension and right ventricular failure
    comparator: Within-participant baseline
    assessmentTime: Day 30
    route: Oral
    formulation: 500 mg meldonium capsules
    durationDays: 30
  result:
    measure: mean
    estimate: 398.9
    unit: m
    instrument: Six-minute walk test
    comparator: Within-participant baseline
    assessmentTime: Day 30
    population: Adults with pulmonary arterial hypertension and right ventricular failure
- id: rvf-walk-day60
  conceptId: exercise-tolerance
  name: Six-minute walk distance after treatment ended
  direction: Variable
  evidence: Human research
  description: Thirty days after the end of treatment, the study found no significant difference from baseline.
  sourceId: kigitovica2025
  population: Adults with pulmonary arterial hypertension and right ventricular failure
  exposure: 500 mg twice daily for 30 days on background treatment
  instrument: Six-minute walk test
  magnitude: 376.7 m versus 352.2 m at baseline (p > 0.05)
  study:
    id: kigitovica-2025-rvf
    design: Prospective uncontrolled before-and-after pilot
    sampleSize: 20
    populationLabels:
      - Adults with pulmonary arterial hypertension and right ventricular failure
    comparator: Within-participant baseline
    assessmentTime: Day 60
    route: Oral
    formulation: 500 mg meldonium capsules
    durationDays: 30
  result:
    measure: mean
    estimate: 376.7
    unit: m
    instrument: Six-minute walk test
    comparator: Within-participant baseline
    assessmentTime: Day 60
    population: Adults with pulmonary arterial hypertension and right ventricular failure
- id: rvf-dyspnea-day30
  conceptId: dyspnea-severity
  name: Post-walk breathlessness in right ventricular failure
  direction: Decreased
  evidence: Human research
  description: The authors reported a lower dyspnea score at the end of treatment (p = 0.003) and at day 60 (p = 0.004).
  sourceId: kigitovica2025
  population: Adults with pulmonary arterial hypertension and right ventricular failure
  exposure: 500 mg twice daily for 30 days on background treatment
  instrument: Borg dyspnea scale after six-minute walk
  magnitude: 3.4 points at day 30 and 3.7 at day 60 versus 5.4 at baseline
  study:
    id: kigitovica-2025-rvf
    design: Prospective uncontrolled before-and-after pilot
    sampleSize: 20
    populationLabels:
      - Adults with pulmonary arterial hypertension and right ventricular failure
    comparator: Within-participant baseline
    assessmentTime: Day 30
    route: Oral
    formulation: 500 mg meldonium capsules
    durationDays: 30
  result:
    measure: mean
    estimate: 3.4
    unit: points
    instrument: Borg dyspnea scale after six-minute walk
    comparator: Within-participant baseline
    assessmentTime: Day 30
    population: Adults with pulmonary arterial hypertension and right ventricular failure
- id: skiers-exercise
  conceptId: exercise-tolerance
  name: Roller-ski treadmill time
  direction: Variable
  evidence: Human research
  description: Treadmill duration changed little in either arm. The small nonrandomized comparison provides limited evidence about performance effects.
  sourceId: goloborodko2021
  population: Competitive ski-sport athletes
  exposure: Mildronate over the 15-day study period, dose and route unclear
  instrument: Roller-ski treadmill ergospirometry
  magnitude: 9.05 to 9.22 min versus 9.02 to 9.00 min (placebo)
  study:
    id: goloborodko-razinkin-2021
    design: Nonrandomized placebo-controlled study, allocated by baseline test performance
    sampleSize: 20
    populationLabels:
      - Competitive ski-sport athletes
    comparator: Placebo
    assessmentTime: Day 15
    formulation: Mildronate, formulation unspecified
    durationDays: 15
- id: skiers-vo2max
  conceptId: vo2-max
  name: Maximal oxygen uptake in ski-sport athletes
  direction: Variable
  evidence: Human research
  description: The groups already differed at baseline. VO₂max fell from a higher baseline in the meldonium group, with no clear evidence of a treatment advantage.
  sourceId: goloborodko2021
  population: Competitive ski-sport athletes
  exposure: Mildronate over the 15-day study period, dose and route unclear
  instrument: Roller-ski treadmill ergospirometry
  magnitude: 66.14 to 58.49 mL/kg/min versus 56.48 to 57.33 mL/kg/min (placebo)
  study:
    id: goloborodko-razinkin-2021
    design: Nonrandomized placebo-controlled study, allocated by baseline test performance
    sampleSize: 20
    populationLabels:
      - Competitive ski-sport athletes
    comparator: Placebo
    assessmentTime: Day 15
    formulation: Mildronate, formulation unspecified
    durationDays: 15
- id: skiers-mood-scale
  conceptId: mood
  name: Self-rated mood score in ski-sport athletes
  direction: Decreased
  evidence: Human research
  description: The SAN mood subscale favored placebo at day 15 in the small nonrandomized study (p < 0.05).
  sourceId: goloborodko2021
  population: Competitive ski-sport athletes
  exposure: Mildronate over the 15-day study period, dose and route unclear
  instrument: SAN mood subscale
  magnitude: 5.77 points versus 6.40 (placebo)
  study:
    id: goloborodko-razinkin-2021
    design: Nonrandomized placebo-controlled study, allocated by baseline test performance
    sampleSize: 20
    populationLabels:
      - Competitive ski-sport athletes
    comparator: Placebo
    assessmentTime: Day 15
    formulation: Mildronate, formulation unspecified
    durationDays: 15
  result:
    measure: mean
    estimate: 5.77
    unit: points
    instrument: SAN mood subscale
    comparator: Placebo
    assessmentTime: Day 15
    population: Competitive ski-sport athletes
- id: healthy-plasma-carnitine
  conceptId: plasma-carnitine
  name: Circulating L-carnitine
  direction: Decreased
  evidence: Human research
  description: Plasma L-carnitine fell over four weeks. Higher meat intake was associated with a smaller decrease in this uncontrolled study.
  sourceId: liepinsh2011
  population: Healthy adults eating a nonvegetarian diet
  exposure: 500 mg twice daily for 4 weeks
  instrument: Plasma UPLC–MS/MS
  magnitude: Mean 18% reduction from baseline
  study:
    id: liepinsh-2011-carnitine
    design: Uncontrolled before-and-after biomarker study
    sampleSize: 17
    populationLabels:
      - Healthy adults eating a nonvegetarian diet
    comparator: Within-participant baseline
    assessmentTime: Week 4
    route: Oral
    formulation: Mildronate dihydrate
    durationDays: 28
- id: healthy-plasma-gbb
  conceptId: plasma-gamma-butyrobetaine
  name: Circulating γ-butyrobetaine
  direction: Increased
  evidence: Human research
  description: The carnitine precursor increased in both sexes after four weeks. The trial had no parallel control group.
  sourceId: liepinsh2011
  population: Healthy adults eating a nonvegetarian diet
  exposure: 500 mg twice daily for 4 weeks
  instrument: Plasma UPLC–MS/MS
  magnitude: Approximately twofold increase from baseline
  study:
    id: liepinsh-2011-carnitine
    design: Uncontrolled before-and-after biomarker study
    sampleSize: 17
    populationLabels:
      - Healthy adults eating a nonvegetarian diet
    comparator: Within-participant baseline
    assessmentTime: Week 4
    route: Oral
    formulation: Mildronate dihydrate
    durationDays: 28
```

## Mechanisms

```yaml
- title: Inhibition of carnitine synthesis
  description: Meldonium inhibited γ-butyrobetaine hydroxylase (BBOX1) in biochemical assays. BBOX1 catalyzes the last step in endogenous L-carnitine synthesis.
  sourceId: tars2014
  conceptId: bbox1
- title: Competition for carnitine transport
  description: Transport assays found competition with L-carnitine at OCTN2. The mouse experiments investigated how this pathway affects tissue retention and excretion.
  sourceId: liepinsh2017
  conceptId: octn2
```

## Cautions

```yaml
- title: Hypersensitivity and labeled adverse reactions
  description: The Irish capsule label contraindicates use in people with hypersensitivity to the drug or its excipients. It lists allergic reactions, headache and gastrointestinal symptoms as common. Tachycardia and hypotension are listed as very rare.
  sourceId: hpra2024
- title: Chronic kidney or liver disease
  description: The Irish capsule label calls for caution and dose reduction in renal or hepatic disorders and notes limited evidence in these higher-risk groups.
  sourceId: hpra2024
- title: Pregnancy, breastfeeding and children
  description: The Irish label recommends avoiding use during pregnancy as a precaution and weighing breastfeeding against treatment because infant risk cannot be excluded. It advises against pediatric use due to limited safety and efficacy data.
  sourceId: hpra2024
```

## Claims

```yaml
- id: meldonium-bbox-inhibition
  assertion: Meldonium inhibits γ-butyrobetaine hydroxylase in biochemical assays.
  relation: inhibits
  participants:
    - entityId: substance:meldonium
      role: Inhibitor
    - entityId: tag:bbox1
      role: Enzyme
  context: Experimental enzyme inhibition
  sourceIds:
    - tars2014
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The assay does not estimate a clinical effect.
- id: meldonium-octn2-competition
  assertion: Meldonium competes with L-carnitine for OCTN2-mediated transport.
  relation: competes for transport by
  participants:
    - entityId: substance:meldonium
      role: Competing substrate
    - entityId: tag:octn2
      role: Transporter
  context: Transport assays and experimental animal work
  sourceIds:
    - grigat2009
    - liepinsh2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The experimental studies do not quantify the importance of this pathway in patients.
```

## Interactions

```yaml
- id: meldonium-nitroglycerin
  name: Glyceryl trinitrate (nitroglycerin)
  otherSlug: null
  summary: The Irish capsule label reports possible potentiation of glyceryl trinitrate. The source does not quantify its frequency or magnitude.
  sourceId: hpra2024
  context: Oral meldonium dihydrate capsule labeling lists this named drug.
- id: meldonium-nifedipine
  name: Nifedipine
  otherSlug: null
  summary: The Irish capsule label identifies nifedipine as an example of a cardiovascular medicine whose effects meldonium may intensify.
  sourceId: hpra2024
  context: Oral meldonium dihydrate capsule labeling. An estimate from a dedicated interaction study was unavailable.
- id: meldonium-blood-pressure-lowering-agents
  name: Beta-blockers and other blood-pressure-lowering agents
  otherSlug: null
  summary: The Irish capsule label warns of possible potentiation of beta-blockers, other blood-pressure-lowering medicines and peripheral vasodilators.
  sourceId: hpra2024
  context: The label identifies classes and provides no quantitative estimates for specific pairs.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem123868
  title: Meldonium (PubChem CID 123868)
  authors: National Center for Biotechnology Information
  year: 2005
  url: https://pubchem.ncbi.nlm.nih.gov/compound/123868
  kind: Chemical database
  insight: Identifies the anhydrous zwitterionic structure, formula and molecular weight.
  limitation: Chemical identity record.
- id: hpra2024
  title: "Mildronate 500 mg hard capsules: Summary of Product Characteristics"
  authors: Health Products Regulatory Authority
  year: 2024
  url: https://www.hpra.ie/img/uploaded/swedocuments/Licence_PA22992-025-001_22052024102443.pdf
  kind: Official product information
  insight: Gives the Irish indication, dihydrate mass, adverse-reaction frequencies and named interactions.
  limitation: Applies to this capsule product. Much of the kinetic detail in section 5.2 comes from animal studies.
- id: vvkt-mildronate
  title: MILDRONATE 100 mg/ml injekcinis tirpalas
  authors: Lithuanian State Medicines Control Agency
  year: 1997
  url: https://vapris.vvkt.lt/vvkt-web/public/medications/view/13047
  kind: Official medicine register
  insight: Lists the concentration, dihydrate form, intravenous route and prescription status.
  limitation: National product registration. Year refers to initial registration.
- id: milss1
  title: 'A dose-dependent improvement in exercise tolerance in patients with stable angina treated with mildronate: a clinical trial "MILSS I"'
  authors: Vilnis Dzerve and the MILSS I Study Group
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22186118/
  kind: Randomized placebo-controlled trial
  insight: The 1000 mg/day arm had the largest mean improvement in bicycle exercise time at week 12. Lower-dose arms did not differ statistically from placebo.
  limitation: Phase II adjunctive study with exercise-test endpoints and limited follow-up.
  pmid: "22186118"
  funding: The inspected article does not identify a study funder.
  sponsorshipStatus: not-reported
  conflictsOfInterest: The authors declared no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pdfs.semanticscholar.org/9b30/10299ace2b9e833d5eae73a2313a041c5fb0.pdf
- id: milss2
  title: "Mildronate improves the exercise tolerance in patients with stable angina: results of a long term clinical trial"
  authors: Vilnis Dzerve, Dace Matisone, Yury Pozdnyakov and Rafael Oganov
  year: 2010
  url: https://seminarsincardiology.com/pdf/SeminarsCVMed-2010-16-3.pdf
  kind: Randomized placebo-controlled trial
  insight: At 12 months bicycle exercise time and maximum achieved load increased more with meldonium than with placebo.
  limitation: The report lists 317 screened and 278 in its analysis population, with 253 observations at month 12 in Table 2. Exercise-test endpoints do not establish a reduction in major cardiovascular events.
  funding: The EU trial registry lists the manufacturer JSC Grindeks as the commercial sponsor. The registry leaves the monetary and material support fields unfilled.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The inspected article contains no conflict-of-interest statement.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://www.clinicaltrialsregister.eu/ctr-search/trial/2004-001611-58/LV
- id: milss2-registry
  title: Mildronate-efficacy and safety in treatment for chronic coronary heart Disease (stable angina) II
  authors: EU Clinical Trials Register and JSC Grindeks
  year: 2005
  url: https://www.clinicaltrialsregister.eu/ctr-search/trial/2004-001611-58/LV
  kind: Trial registration
  insight: Verifies the commercial sponsor, oral capsule formulation and primary exercise endpoint.
  limitation: The registry identifies the sponsor but does not specify the amounts or sources of support.
- id: zhu2013
  title: "Efficacy and safety of mildronate for acute ischemic stroke: a randomized, double-blind, active-controlled phase II multicenter trial"
  authors: Yi Zhu, Guangyun Zhang, Jun Zhao et al.
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23949899/
  kind: Randomized active-controlled trial
  insight: Found no statistically significant between-group differences on the reported disability or neurological thresholds.
  limitation: The publisher abstract does not give an equivalence margin or group event counts. Publication disclosures could not be checked.
  pmid: "23949899"
  doi: 10.1007/s40261-013-0121-x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: stroke-registry
  title: Mildronate for Acute Ischemic Stroke (NCT01831011)
  authors: Xijing Hospital and ClinicalTrials.gov
  year: 2013
  url: https://clinicaltrials.gov/study/NCT01831011
  kind: Trial registration
  insight: Identifies Xijing Hospital as lead sponsor and describes the 500 mg daily meldonium infusion arm for 14 days.
  limitation: The comparator arm is labeled cinepazide, but one intervention alias says placebo. The publication reports actual cinepazide treatment.
- id: statsenko2014
  title: Use of meldonium in the combination treatment of patients with heart failure in the early post-infarction period
  authors: M. E. Statsenko, N. N. Shilina and S. V. Turkina
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24864465/
  kind: Randomized comparison
  insight: Reported exercise, symptom, Holter ECG and echocardiographic endpoints after short-term adjunctive IV meldonium.
  limitation: Small short-term study against usual care, with changes to background therapy during follow-up. No mortality or hospitalization estimate.
  pmid: "24864465"
  funding: The inspected article does not identify a study funder.
  sponsorshipStatus: not-reported
  conflictsOfInterest: The inspected article contains no conflict-of-interest statement.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://omnidoctor.ru/upload/iblock/e9d/e9dd84525ab2dd452ed0af9db8a5249e.pdf
- id: vasiuk2007
  title: Comparative trial of efficacy of trimethasidine MB and 3-(2,2,2-trimethylhydrasine) propionate dihydrate in chronic heart failure
  authors: Iu. A. Vasiuk, E. N. Iushchuk, E. L. Shkol’nik et al.
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17460970/
  kind: Randomized comparative study
  insight: A 65-patient trial in post-infarction heart failure reported improvement on walking and functional endpoints in both active arms.
  limitation: The accessible abstract provides no between-group estimates for walking, quality of life or ejection fraction and no funding or conflict declaration.
  pmid: "17460970"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: kigitovica2025
  title: Meldonium Improves Functional Capacity in Patients with Right Ventricular Failure
  authors: Dana Kigitovica, Krisjanis Dzirnieks, Aivars Lejnieks, Maija Dambrova, Andris Skride and Reinis Vilskersts
  year: 2025
  url: https://www.mdpi.com/2077-0383/14/21/7787
  kind: Prospective uncontrolled pilot study
  insight: Assessed walking, breathlessness and quality of life in right ventricular failure due to pulmonary arterial hypertension.
  limitation: Twenty participants completed follow-up. A small before-and-after study cannot isolate a treatment effect or estimate benefits on survival or hospitalization.
  pmid: "41227182"
  doi: 10.3390/jcm14217787
  funding: European Social Fund and Latvian state budget support, a L’Oréal Latvian fellowship, and an EU Horizon 2020 grant for two authors. JSC Grindeks supplied study drug in kind.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: The authors declared no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.mdpi.com/2077-0383/14/21/7787
- id: gorgens2017
  title: "The atypical excretion profile of meldonium: Comparison of urinary detection windows after single- and multiple-dose application in healthy volunteers"
  authors: Christian Görgens, Sven Guddat, Christina Bosse, Hans Geyer, Valentin Pop, Wilhelm Schänzer and Mario Thevis
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28213178/
  kind: Human urinary excretion study
  insight: Observed biphasic urinary excretion after single and repeated oral exposure.
  limitation: Urinary detectability is assay and exposure specific and does not measure duration of effect.
  pmid: "28213178"
  doi: 10.1016/j.jpba.2017.02.011
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: goloborodko2021
  title: Results of placebo-controlled evaluation of efficacy Mildronat preparation by functional readiness parameters
  authors: E. V. Goloborodko and S. M. Razinkin
  year: 2021
  url: https://doi.org/10.26787/nydha-2618-8783-2021-6-4-37-44
  kind: Nonrandomized placebo-controlled study
  insight: The researchers allocated 20 ski-sport athletes by baseline exercise duration. Exercise testing showed no clear performance advantage, and mood scores favored placebo.
  limitation: Ten per arm, baseline imbalances on several physiological outcomes, and limited detail about drug exposure and assessment.
  doi: 10.26787/nydha-2618-8783-2021-6-4-37-44
  funding: The inspected article does not identify a study funder.
  sponsorshipStatus: not-reported
  conflictsOfInterest: The authors declared no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://doi.org/10.26787/nydha-2618-8783-2021-6-4-37-44
- id: zhang2013
  title: "Nonlinear pharmacokinetic properties of mildronate capsules: a randomized, open-label, single- and multiple-dose study in healthy volunteers"
  authors: Jun Zhang, Li-Jing Cai, Jian Yang, Qi-Zhi Zhang and Wen-Xing Peng
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/21679246/
  kind: Human pharmacokinetic study
  insight: Single oral exposure was dose-dependent for half-life. Repeated capsules produced plasma accumulation.
  limitation: Healthy volunteers and a single repeated-dose arm. The indexed abstract omits numerical half-life estimates.
  pmid: "21679246"
  doi: 10.1111/j.1472-8206.2011.00962.x
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: peng2010
  title: Determination of mildronate by LC-MS/MS and its application to a pharmacokinetic study in healthy Chinese volunteers
  authors: Ye Peng, Jing Yang, Zhirui Wang, Jingwen Wang, Yu Liu, Zhuojing Luo and AiDong Wen
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20116348/
  kind: Human pharmacokinetic study
  insight: Estimates plasma half-life after single and repeated intravenous exposures.
  limitation: Plasma half-life is separate from urinary detection and subjective duration. The indexed abstract does not specify repeated-course duration.
  pmid: "20116348"
  doi: 10.1016/j.jchromb.2009.12.030
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: rabin2019
  title: Meldonium long-term excretion period and pharmacokinetics in blood and urine of healthy athlete volunteers
  authors: Olivier Rabin, Vladimir Uiba, Yulia Miroshnikova et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30328291/
  kind: Open-label human excretion study
  insight: Repeated oral exposure was followed by prolonged and variable urinary excretion.
  limitation: Urine detectability depends on the observed exposure and assay. It cannot be used as a clinical half-life.
  pmid: "30328291"
  doi: 10.1002/dta.2521
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: rabin-russian2019
  title: Результаты исследования фармакокинетики и продолжительности экскреции мельдония по показателям содержания в плазме крови и в моче здоровых добровольцев-спортсменов при длительном приеме больших доз препарата
  authors: Olivier Rabin, Vladimir Uiba, Yulia Miroshnikova et al.
  year: 2019
  url: https://j-mes.ru/user_files/3/MES_4-2019.pdf
  kind: Open-label human excretion study
  insight: Describes the Cardionate formulation, groups and sampling in the Russian-language report of the same cohort.
  limitation: Shares participants with the English-language report. The methods give 14 and 18 participants per group, although the abstract describes equal groups.
  funding: The Russian-language article states that the study had no sponsorship.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: The authors declared no conflicts of interest in this report.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://j-mes.ru/user_files/3/MES_4-2019.pdf
- id: tars2014
  title: "Targeting carnitine biosynthesis: discovery of new inhibitors against γ-butyrobetaine hydroxylase"
  authors: Kaspars Tars, Janis Leitans, Andris Kazaks et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24571165/
  kind: Biochemical study
  insight: Tests inhibition of BBOX by meldonium and structurally related compounds.
  limitation: Enzyme assays do not show that BBOX inhibition causes clinical benefit.
  pmid: "24571165"
  doi: 10.1021/jm401603e
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: grigat2009
  title: The carnitine transporter SLC22A5 is not a general drug transporter, but it efficiently translocates mildronate
  authors: Silke Grigat, Christian Fork, Matthias Bach et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/18981167/
  kind: Cell transporter study
  insight: Demonstrates uptake of meldonium through OCTN2 in an expression system.
  limitation: Does not quantify pharmacological effects or clinical interactions in humans.
  pmid: "18981167"
  doi: 10.1124/dmd.108.023929
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: liepinsh2017
  title: Carnitine and γ-Butyrobetaine Stimulate Elimination of Meldonium due to Competition for OCTN2-mediated Transport
  authors: Edgars Liepinsh, Elina Makarova, Eduards Sevostjanovs et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27983775/
  kind: Transport assay and animal study
  insight: Assays support competition for OCTN2-mediated transport. The experimental clearance component was in mice.
  limitation: Does not establish a human drug interaction or predict individual clearance.
  pmid: "27983775"
  funding: Latvian State Research Program BIOMEDICINE and individual support from the FP7 InnovaBalt project.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://download.s21i.faimallusr.com/11871494/0/0/ABUIABA9GAAgtuKEjgYo0O6awwQ.pdf
- id: liepinsh2011
  title: Mildronate treatment alters γ-butyrobetaine and L-carnitine concentrations in healthy volunteers
  authors: Edgars Liepinsh, Ilze Konrade, Elina Skapare et al.
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21827492/
  kind: Human pre–post biomarker study
  insight: Measured lower plasma L-carnitine and higher plasma γ-butyrobetaine after 4 weeks of treatment.
  limitation: Uncontrolled study of 17 adults. Biomarker changes do not establish a patient or performance benefit.
  pmid: "21827492"
  doi: 10.1111/j.2042-7158.2011.01325.x
  funding: Latvian State Research Program, European Social Foundation and European Regional Development Fund grants. Grindeks supplied the meldonium in kind.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://science.rsu.lv/files/26715783/Mildronate_treatment_alters_g_butyrobetaine.pdf
```

## Legal

```yaml
- jurisdiction: World Anti-Doping Code
  activity: Use in sports governed by the 2026 WADA Prohibited List
  status: Listed under S4.4.3 as a non-specified metabolic modulator prohibited both in and out of competition.
  sourceUrl: https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf
  asOf: 2026-11-18
- jurisdiction: Ireland
  activity: Supply of Mildronate 500 mg hard capsules, PA22992/025/001
  status: The HPRA lists the capsules as authorised, prescription-only, pharmacy-supplied and currently not marketed.
  sourceUrl: https://www.hpra.ie/find-a-medicine/for-human-use/withdrawn-medicines/details/39124
  asOf: 2026-11-18
- jurisdiction: Lithuania
  activity: Supply of Mildronate 100 mg/mL solution for intravenous injection
  status: Listed as a registered prescription medicine by the Lithuanian State Medicines Control Agency.
  sourceUrl: https://vapris.vvkt.lt/vvkt-web/public/medications/view/13047
  asOf: 2026-11-18
```
