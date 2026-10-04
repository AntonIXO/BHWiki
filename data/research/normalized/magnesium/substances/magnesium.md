---
slug: magnesium
name: Magnesium
subtitle: Essential mineral and Mg2+ cofactor in human physiology
aliases:
  - Mg
  - elemental magnesium
  - Mg2+
  - magnesium ion
formula: Mg
molecularWeight: 24.305 g/mol
pubchemCid: 5462224
smiles: "[Mg]"
category: mineral
tags: []
accent: "#8C9AA8"
reviewedAt: 2026-10-04
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Magnesium is an essential element distributed among bone, soft tissues, extracellular fluid, and multiple chemical species; homeostatic intestinal and renal handling does not support one drug-like elimination half-life for "magnesium" across salts, routes, or compartments.
  sourceId: nih-ods-2026
  observationId: pk-total-body-not-established
kinetics:
  onset: Not established for magnesium as a nutrient across formulations and clinical endpoints.
  peak: Not established as a formulation-independent value; serum and urinary responses vary by salt, dose, food, baseline status, and renal handling.
  duration: Not established as a single nutrient-level duration; tissue pools and renal conservation operate on different timescales.
  bioavailability: About 30% to 40% of dietary magnesium is typically absorbed; supplemental absorption varies with solubility, dose, formulation, and baseline status, with citrate and chloride generally better absorbed than oxide in comparative human studies.
  metabolism: Elemental magnesium is not assigned a metabolic conversion pathway in this article; absorbed Mg2+ is distributed, bound or complexed, incorporated into tissue pools, and excreted primarily through renal homeostatic handling.
  sourceId: nih-ods-2026
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

Magnesium is an essential mineral; deficiency correction differs from additional supplementation in adequately nourished people. Sleep, blood-pressure, metabolic and cognitive findings depend on baseline status, clinical context and formulation.

## Description

This overview separates elemental magnesium from salt mass and formulation-specific evidence. Absorption or a magnesium biomarker does not alone prove clinical benefit. Different salt forms require their own source-specific assessments; they are not interchangeable interventions.

## Evidence note

Human trials and authoritative nutrient sources are summarized by endpoint. A nutrient overview has no single drug elimination model. Renal impairment, excess exposure and binding interactions require the cited context; uninspected funding or conflicts remain unknown.

## Doses

```yaml
- label: Older-adult insomnia trial
  amount: 500 mg elemental magnesium/day as magnesium oxide; two tablets each supplied about 250 mg elemental magnesium
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: magnesium
  formulation: magnesium oxide tablets
  route: oral
  frequency: twice daily
  duration: 8 weeks
  population: adults age 60–75 years with primary insomnia and low dietary magnesium intake in the trial
  purpose: randomized placebo-controlled sleep study
  sourceCategory: research
  note: This research exposure exceeds the U.S. adult supplemental magnesium UL of 350 mg/day; it is not a dosing recommendation.
  sourceId: abbasi-2012
- label: Magnesium bisglycinate sleep trial
  amount: 250 mg elemental magnesium/day as magnesium bisglycinate; the tested product also supplied about 1,523 mg glycine/day
  quantity: 250
  quantityMax: null
  unit: mg/day
  ingredient: magnesium
  formulation: magnesium bisglycinate capsules
  route: oral
  frequency: once daily, two capsules taken together 30–60 minutes before bedtime
  duration: 28 days
  population: adults age 18–65 years reporting poor sleep quality
  purpose: randomized placebo-controlled insomnia-symptom study
  sourceCategory: research
  note: Glycine co-exposure prevents complete attribution of the formulation's effect to magnesium alone.
  sourceId: schuster-2025
- label: Magnesium L-threonate cognition/sleep trial
  amount: 2 g/day magnesium L-threonate salt, providing about 145 mg/day elemental magnesium
  quantity: 145
  quantityMax: null
  unit: mg/day elemental magnesium
  ingredient: magnesium
  formulation: branded magnesium L-threonate (Magtein)
  route: oral
  frequency: twice daily
  duration: 42 days
  population: adults age 18–45 years reporting dissatisfaction with sleep
  purpose: randomized placebo-controlled cognition and sleep study
  sourceCategory: research
  note: Formulation-specific, industry-funded research; one dose was taken in the morning and one in the evening.
  sourceId: lopresti-smith-2026
- label: Hypomagnesemic insulin-resistance trial
  amount: 2.5 g/day magnesium chloride salt; the accessible abstract reports salt mass rather than an elemental-magnesium amount
  quantity: 2.5
  quantityMax: null
  unit: g/day magnesium chloride
  ingredient: magnesium
  formulation: magnesium chloride
  route: oral
  frequency: once daily
  duration: 3 months
  population: non-diabetic adults with insulin resistance and hypomagnesemia
  purpose: randomized placebo-controlled insulin-sensitivity study
  sourceCategory: research
  note: Do not convert the reported 2.5 g salt mass into 2.5 g elemental magnesium.
  sourceId: guerrero-ir-2004
- label: Comparative citrate bioavailability trial
  amount: 300 mg elemental magnesium/day
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: magnesium
  formulation: magnesium citrate
  route: oral
  frequency: once daily
  duration: 60 days
  population: healthy adults
  purpose: randomized double-blind comparative bioavailability study
  sourceCategory: research
  note: Citrate produced greater absorption-related biomarker responses than oxide in this study.
  sourceId: walker-2003
```

## Pharmacokinetics

```yaml
- id: pk-total-body-not-established
  analyte: magnesium as a total-body essential nutrient pool
  route: oral
  formulation: dietary magnesium and supplemental magnesium salts
  population: humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: A single elimination half-life is not established or appropriate for elemental magnesium across salts and compartments because Mg is distributed among bone, soft tissues, extracellular fluid, protein/anion-bound species, and tightly regulated renal pools. Salt-specific or parenteral pharmacokinetic observations must not be relabeled as a universal magnesium half-life.
  sourceId: nih-ods-2026
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: alertness-hausenblas-2024
  conceptId: alertness
  name: Mental alertness after sleep
  direction: Increased
  evidence: Limited research
  description: In a 21-day magnesium-L-threonate trial, the Restorative Sleep Questionnaire mental-alertness item showed a significant condition-by-time interaction, while the primary Insomnia Severity Index interaction was not significant. The study was commercially funded and formulation-specific, so the alertness signal is not evidence for magnesium generally.
  sourceId: hausenblas-2024
  population: 80 adults age 35–55 years with self-reported sleep problems
  exposure: 1 g/day magnesium L-threonate, approximately 75 mg/day elemental magnesium, for 21 days
  instrument: Restorative Sleep Questionnaire mental-alertness item
  magnitude: Condition-by-time p=0.003; post-hoc differences favored active treatment at later assessments; no confidence interval for this item was reported.
  reportType: measured-assessment
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  study:
    id: ISRCTN14728094
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 80
    populationLabels:
      - adults with self-reported nonclinical sleep problems
    comparator: rice-protein placebo
    route: oral
    formulation: magnesium L-threonate
    durationDays: 21
    assessmentTime: weekly through day 21
```

## Outcomes

```yaml
- id: sleep-abbasi-2012
  conceptId: sleep
  name: Insomnia severity and sleep efficiency
  direction: Increased
  evidence: Human research
  description: In older adults with primary insomnia and low magnesium intake, magnesium oxide improved several subjective sleep measures versus placebo, including insomnia severity, sleep efficiency, and sleep-onset latency. Total sleep time did not significantly differ between groups, so the result is not uniformly positive across sleep endpoints.
  sourceId: abbasi-2012
  population: older adults age 60–75 years with primary insomnia and low dietary magnesium intake
  exposure: 500 mg/day elemental magnesium as magnesium oxide for 8 weeks
  instrument: Insomnia Severity Index and sleep log
  magnitude: Between-group p=0.006 for ISI, p=0.03 for sleep efficiency, and p=0.02 for sleep-onset latency; total sleep time between groups was not significant (p=0.37).
  reportType: measured-assessment
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  study:
    id: abbasi-insomnia-2012
    design: randomized double-blind placebo-controlled trial
    sampleSize: 46
    populationLabels:
      - older adults
      - primary insomnia
      - low magnesium intake
    comparator: placebo
    route: oral
    formulation: magnesium oxide
    durationDays: 56
    assessmentTime: baseline and 8 weeks
- id: sleep-schuster-2025
  conceptId: sleep
  name: Insomnia severity
  direction: Increased
  evidence: Human research
  description: Magnesium bisglycinate produced a statistically significant but small improvement in Insomnia Severity Index change versus placebo after four weeks. Other psychological and sleep-related secondary outcomes did not show significant between-group interactions. The formulation also delivered glycine, which limits attribution to magnesium alone.
  sourceId: schuster-2025
  population: 155 adults age 18–65 years with self-reported poor sleep
  exposure: 250 mg/day elemental magnesium as bisglycinate plus about 1.523 g/day glycine for 4 weeks
  instrument: Insomnia Severity Index
  magnitude: "Adjusted change: magnesium -3.9 points (95% CI -5.8 to -2.0) versus placebo -2.3 (95% CI -4.1 to -0.4); time-by-group p=0.049; Cohen's d=0.20."
  reportType: measured-assessment
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  study:
    id: DRKS00031494
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 155
    populationLabels:
      - adults reporting poor sleep
    comparator: cellulose placebo
    route: oral
    formulation: magnesium bisglycinate
    durationDays: 28
    assessmentTime: week 4
- id: sleep-hausenblas-2024
  conceptId: sleep
  name: Sleep quality across subjective and wearable outcomes
  direction: Variable
  evidence: Limited research
  description: The primary Insomnia Severity Index condition-by-time interaction was not significant, while selected Leeds/Restorative questionnaire items and Oura-derived deep-sleep, REM-sleep, light-sleep, activity, and readiness metrics favored magnesium L-threonate. The large endpoint set, proprietary wearable algorithms, short duration, and commercial sponsorship limit interpretation.
  sourceId: hausenblas-2024
  population: adults age 35–55 years with self-reported sleep problems
  exposure: 1 g/day magnesium L-threonate for 21 days
  instrument: Insomnia Severity Index, Leeds Sleep Evaluation Questionnaire, Restorative Sleep Questionnaire, and Oura Ring
  magnitude: Primary ISI condition-by-time interaction p=0.39; selected secondary interactions were significant.
  reportType: measured-assessment
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  study:
    id: ISRCTN14728094
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 80
    populationLabels:
      - adults with nonclinical sleep complaints
    comparator: placebo
    route: oral
    formulation: magnesium L-threonate
    durationDays: 21
    assessmentTime: through day 21
- id: sleep-lopresti-smith-2026
  conceptId: sleep
  name: Subjective versus wearable sleep outcomes
  direction: Variable
  evidence: Limited research
  description: Six weeks of magnesium L-threonate improved a subjective sleep-related-impairment measure, but sleep disturbance, restorative sleep, and objective Oura sleep outcomes were not significantly different from placebo. This commercially funded trial therefore does not show a consistent sleep effect across measurement modalities.
  sourceId: lopresti-smith-2026
  population: 100 adults age 18–45 years dissatisfied with sleep
  exposure: 2 g/day magnesium L-threonate providing about 145 mg/day elemental magnesium for 6 weeks
  instrument: PROMIS sleep measures, restorative-sleep questionnaire, and Oura Ring
  magnitude: Subjective sleep-related impairment p=0.043; sleep disturbance p=0.316; restorative sleep p=0.439; objective Oura sleep endpoints were not significantly improved.
  reportType: measured-assessment
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  study:
    id: lopresti-magtein-2026
    design: randomized double-blind placebo-controlled trial
    sampleSize: 100
    populationLabels:
      - adults dissatisfied with sleep
    comparator: placebo
    route: oral
    formulation: magnesium L-threonate
    durationDays: 42
    assessmentTime: 6 weeks
- id: systolic-blood-pressure-meta-2025
  conceptId: blood-pressure
  name: Systolic blood pressure
  direction: Decreased
  evidence: Human research
  description: A 2025 meta-analysis of 38 randomized controlled trials found a small average reduction in systolic blood pressure, with larger reductions in hypomagnesemic and treated-hypertensive subgroups and no statistically significant effect in normotensive groups. Heterogeneity was high.
  sourceId: argeros-2025
  population: 2,709 participants across hypertensive and normotensive RCT populations
  exposure: elemental magnesium 82.3–637 mg/day for at least 4 weeks; median dose 365 mg/day and median duration 12 weeks
  instrument: systolic blood pressure as reported by included RCTs
  magnitude: Pooled mean difference -2.81 mmHg (95% CI -4.32 to -1.29); hypomagnesemic subgroup approximately -5.97 mmHg.
  reportType: measured-assessment
  result:
    measure: mean-difference
    estimate: -2.81
    unit: mmHg
    instrument: systolic blood pressure as reported across included randomized controlled trials
    comparator: placebo or control
    assessmentTime: at least 4 weeks; median intervention duration 12 weeks
    population: mixed hypertensive and normotensive adults across 38 randomized controlled trials
    confidenceInterval:
      lower: -4.32
      upper: -1.29
      level: 95
- id: diastolic-blood-pressure-meta-2025
  conceptId: blood-pressure
  name: Diastolic blood pressure
  direction: Decreased
  evidence: Human research
  description: The same 2025 meta-analysis found a small average decrease in diastolic blood pressure, again with larger effects in hypomagnesemia and high heterogeneity.
  sourceId: argeros-2025
  population: 2,709 participants across hypertensive and normotensive RCT populations
  exposure: elemental magnesium 82.3–637 mg/day for at least 4 weeks
  instrument: diastolic blood pressure as reported by included RCTs
  magnitude: Pooled mean difference -2.05 mmHg (95% CI -3.23 to -0.88).
  reportType: measured-assessment
  result:
    measure: mean-difference
    estimate: -2.05
    unit: mmHg
    instrument: diastolic blood pressure as reported across included randomized controlled trials
    comparator: placebo or control
    assessmentTime: at least 4 weeks; median intervention duration 12 weeks
    population: mixed hypertensive and normotensive adults across 38 randomized controlled trials
    confidenceInterval:
      lower: -3.23
      upper: -0.88
      level: 95
- id: blood-pressure-hypomagnesemia-2009
  conceptId: blood-pressure
  name: Blood pressure in diabetic hypertension with hypomagnesemia
  direction: Decreased
  evidence: Human research
  description: In adults with diabetes, hypertension, and low serum magnesium who were taking captopril, oral magnesium chloride produced larger falls in systolic and diastolic pressure than placebo over four months. This is a deficiency-enriched clinical context and should not be generalized to magnesium-replete normotensive adults.
  sourceId: guerrero-bp-2009
  population: adults age 40–75 years with diabetes, hypertension, and hypomagnesemia
  exposure: magnesium chloride solution reported as 2.5 g MgCl2/day, equivalent in the publication to 450 mg/day elemental magnesium, for 4 months
  instrument: systolic and diastolic blood pressure
  magnitude: SBP change -20.4±15.9 vs -4.7±12.7 mmHg (p=0.03); DBP change -8.7±16.3 vs -1.2±12.6 mmHg (p=0.02).
  reportType: measured-assessment
  study:
    id: guerrero-bp-2009
    design: randomized double-blind placebo-controlled clinical trial
    sampleSize: 82
    populationLabels:
      - diabetes
      - hypertension
      - hypomagnesemia
    comparator: placebo
    route: oral
    formulation: magnesium chloride solution
    durationDays: 120
    assessmentTime: 4 months
- id: insulin-sensitivity-guerrero-2004
  conceptId: insulin-sensitivity
  name: Insulin sensitivity
  direction: Increased
  evidence: Human research
  description: In non-diabetic adults selected for both insulin resistance and hypomagnesemia, magnesium chloride increased serum magnesium and substantially reduced HOMA-IR while placebo did not. Clinical-outcome implications beyond the metabolic marker were not established.
  sourceId: guerrero-ir-2004
  population: non-diabetic adults with HOMA-IR at least 3.0 and serum magnesium at or below 0.74 mmol/L
  exposure: 2.5 g/day magnesium chloride salt for 3 months
  instrument: HOMA-IR
  magnitude: Active group HOMA-IR 4.6±2.8 to 2.6±1.1 (p<0.0001); placebo 5.2±1.9 to 5.3±2.9 (p=0.087).
  reportType: measured-assessment
  study:
    id: guerrero-ir-2004
    design: randomized double-blind placebo-controlled trial
    populationLabels:
      - insulin resistance
      - hypomagnesemia
      - non-diabetic
    comparator: placebo
    route: oral
    formulation: magnesium chloride
    durationDays: 90
    assessmentTime: 3 months
- id: fasting-glucose-meta-2026
  conceptId: glycemic-control
  name: Fasting blood glucose
  direction: Decreased
  evidence: Human research
  description: A 2026 dose-response meta-analysis of randomized trials found a modest reduction in fasting blood glucose with magnesium supplementation; the authors emphasized that overall clinical relevance was uncertain and evidence certainty varied by endpoint.
  sourceId: mohammadi-2026
  population: adults across randomized controlled trials included in a 78-trial cardiometabolic review
  exposure: varied oral magnesium formulations and doses; most trials used at least 300 mg/day and lasted at least 12 weeks
  instrument: fasting blood glucose
  magnitude: Weighted mean difference -3.60 mg/dL (95% CI -6.13 to -1.06).
  reportType: measured-assessment
  result:
    measure: mean-difference
    estimate: -3.6
    unit: mg/dL
    instrument: fasting blood glucose across included randomized controlled trials
    comparator: placebo or control
    assessmentTime: variable by trial
    population: adults in magnesium-supplementation randomized controlled trials
    confidenceInterval:
      lower: -6.13
      upper: -1.06
      level: 95
- id: hba1c-meta-2026
  conceptId: glycemic-control
  name: Glycated hemoglobin
  direction: Decreased
  evidence: Human research
  description: The 2026 cardiometabolic meta-analysis found a small pooled reduction in HbA1c. The magnitude is modest and should not be interpreted as a substitute for standard diabetes care.
  sourceId: mohammadi-2026
  population: adults across randomized controlled trials included in a 78-trial cardiometabolic review
  exposure: varied oral magnesium formulations and doses
  instrument: HbA1c
  magnitude: Weighted mean difference -0.15 percentage points (95% CI -0.26 to -0.03).
  reportType: measured-assessment
  result:
    measure: mean-difference
    estimate: -0.15
    unit: percentage points
    instrument: HbA1c across included randomized controlled trials
    comparator: placebo or control
    assessmentTime: variable by trial
    population: adults in magnesium-supplementation randomized controlled trials
    confidenceInterval:
      lower: -0.26
      upper: -0.03
      level: 95
- id: cognitive-performance-liu-2016
  conceptId: cognitive-performance
  name: Composite cognitive performance in older adults
  direction: Increased
  evidence: Limited research
  description: A 12-week magnesium-L-threonate-containing formulation improved a composite of executive function, working memory, attention, and episodic memory versus placebo in older adults selected for cognitive complaints, sleep disturbance, and anxiety. The trial was small, per-protocol for efficacy, commercially funded, and did not control study-wide type-I error across efficacy endpoints.
  sourceId: liu-2016
  population: adults age 50–70 years with cognitive complaints plus sleep disturbance and anxiety
  exposure: 1.5 or 2 g/day MMFS-01 containing magnesium L-threonate for 12 weeks
  instrument: composite z-score from Trail Making Test B, Digit Span, Flanker, and Face-Name Association
  magnitude: Week-12 composite improvement versus placebo p=0.003; Cohen's d=0.91.
  reportType: measured-assessment
  study:
    id: NCT02363634
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 51
    populationLabels:
      - older adults with cognitive impairment symptoms
      - sleep disturbance
      - anxiety
    comparator: placebo
    route: oral
    formulation: MMFS-01 containing magnesium L-threonate
    durationDays: 84
    assessmentTime: week 12
- id: attention-liu-2016
  conceptId: attention
  name: Flanker-test attention
  direction: Variable
  evidence: Limited research
  description: Although Flanker-test performance improved from baseline in the active arm, improvement was not significantly different from placebo at week 6 or week 12 and no overall treatment effect was found.
  sourceId: liu-2016
  population: adults age 50–70 years with cognitive complaints plus sleep disturbance and anxiety
  exposure: MMFS-01 containing magnesium L-threonate for 12 weeks
  instrument: Eriksen Flanker congruent/incongruent test
  magnitude: No statistically significant active-versus-placebo difference at week 6 or week 12.
  reportType: measured-assessment
  study:
    id: NCT02363634
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 51
    populationLabels:
      - older adults with cognitive impairment symptoms
    comparator: placebo
    route: oral
    formulation: MMFS-01 containing magnesium L-threonate
    durationDays: 84
    assessmentTime: week 12
- id: episodic-memory-liu-2016
  conceptId: episodic-memory
  name: Face-name episodic memory
  direction: Variable
  evidence: Limited research
  description: Face-Name Association performance improved within the active group at week 12, but the between-group difference versus placebo did not reach statistical significance. This negative comparison is important because it prevents treating the positive composite score as proof that every cognitive domain improved.
  sourceId: liu-2016
  population: adults age 50–70 years with cognitive complaints plus sleep disturbance and anxiety
  exposure: MMFS-01 containing magnesium L-threonate for 12 weeks
  instrument: Face-Name Association test
  magnitude: Week-12 active-versus-placebo p=0.089; Cohen's d=0.44.
  reportType: measured-assessment
  study:
    id: NCT02363634
    design: randomized double-blind placebo-controlled parallel trial
    sampleSize: 51
    populationLabels:
      - older adults with cognitive impairment symptoms
    comparator: placebo
    route: oral
    formulation: MMFS-01 containing magnesium L-threonate
    durationDays: 84
    assessmentTime: week 12
- id: cognitive-performance-lopresti-2026
  conceptId: cognitive-performance
  name: Total cognition in adults with sleep dissatisfaction
  direction: Increased
  evidence: Limited research
  description: An industry-funded six-week trial of branded magnesium L-threonate reported a statistically significant improvement in its total-cognition composite and selected memory/reaction-time measures. Objective Oura sleep outcomes were null, and the result is formulation-specific rather than evidence for all magnesium salts.
  sourceId: lopresti-smith-2026
  population: 100 adults age 18–45 years with dissatisfaction with sleep
  exposure: 2 g/day magnesium L-threonate providing about 145 mg/day elemental magnesium for 6 weeks
  instrument: study composite of cognitive measures
  magnitude: Primary total-cognition comparison p=0.043; no single formulation-independent effect size can be inferred.
  reportType: measured-assessment
  study:
    id: lopresti-magtein-2026
    design: randomized double-blind placebo-controlled trial
    sampleSize: 100
    populationLabels:
      - adults dissatisfied with sleep
    comparator: placebo
    route: oral
    formulation: magnesium L-threonate
    durationDays: 42
    assessmentTime: 6 weeks
```

## Mechanisms

```yaml
- title: Magnesium-nucleotide coupling in energy-dependent biochemistry
  description: Human physiology and biochemical literature identify Mg2+ as a required cofactor for many enzymes and for energy-production pathways. ATP-dependent reactions commonly involve magnesium-complexed nucleotide species. This biochemical requirement establishes essentiality but does not by itself prove that extra magnesium improves performance in magnesium-replete people.
  sourceId: nih-ods-2026
  conceptId: mg-atp-complex
- title: TRPM6-dependent epithelial magnesium homeostasis
  description: Human positional-genetic studies found biallelic TRPM6 mutations in hereditary hypomagnesemia with secondary hypocalcemia. TRPM6 is expressed in intestinal epithelia and kidney tubules, making the human genetic evidence directly relevant to transepithelial Mg2+ homeostasis.
  sourceId: schlingmann-2002
  conceptId: trpm6
- title: TRPM7 and cellular magnesium balance
  description: In vertebrate cell experiments, TRPM7 deletion caused cellular magnesium deficiency and growth arrest, and extracellular magnesium rescued viability. This supports TRPM7 as a cellular Mg2+-permeable homeostatic pathway, but it is cell-mechanistic evidence rather than a magnesium-supplement efficacy trial.
  sourceId: schmitz-2003
  conceptId: trpm7
- title: SLC41A1-mediated sodium-dependent magnesium extrusion
  description: In HEK293 overexpression experiments, SLC41A1 increased Mg2+ efflux in a strongly extracellular-Na+-dependent manner, supporting a Na+/Mg2+ exchange function. The result is a cellular transport experiment and should not be converted into a clinical supplementation claim.
  sourceId: kolisek-2012
  conceptId: slc41a1
- title: CNNM2 in renal basolateral magnesium handling
  description: Human CNNM2 mutations were identified in families with dominant hypomagnesemia, and CNNM2 localized to basolateral membranes of distal renal tubular segments. These data establish a critical role in epithelial Mg2+ handling while leaving aspects of the exact molecular transport mechanism open.
  sourceId: stuiver-2011
  conceptId: cnnm2
- title: Renal conservation and toxicity control
  description: "Kidneys are the principal homeostatic regulator of circulating magnesium: urinary excretion falls when status is low, while impaired renal function reduces the capacity to eliminate an excess. This same physiology explains both resilience against short-term low intake and the disproportionate hypermagnesemia risk in renal failure."
  sourceId: nih-ods-2026
  conceptId: magnesium-homeostasis
```

## Cautions

```yaml
- title: Renal impairment and hypermagnesemia
  description: The risk of magnesium toxicity rises substantially when kidney function is impaired because renal elimination is reduced. Very high magnesium exposure can cause hypotension, vomiting, respiratory depression, arrhythmia, and cardiac arrest; magnesium-containing laxatives and antacids are important non-supplement sources.
  sourceId: nih-ods-2026
- title: Gastrointestinal dose limitation
  description: Supplemental magnesium commonly causes diarrhea, nausea, and abdominal cramping through unabsorbed osmotic magnesium salts. Tolerability varies by dose and formulation and is not equivalent to systemic toxicity.
  sourceId: nih-ods-2026
- title: Supplemental UL is not the RDA
  description: The U.S. adult UL is 350 mg/day from supplements and medications only; it excludes magnesium naturally present in food. Adult RDAs of 310–420 mg/day refer to total intake. Trial doses above 350 mg/day are research exposures and should not be presented as self-treatment recommendations.
  sourceId: nih-ods-2026
- title: Serum magnesium can miss depletion
  description: Less than 1% of total body magnesium is in serum, and serum magnesium correlates poorly with total-body or tissue stores. A normal serum result therefore does not prove adequate tissue status; interpretation should integrate clinical context and, when indicated, renal and urinary data.
  sourceId: nih-ods-2026
- title: Pregnancy and lactation
  description: U.S. magnesium intake targets change with age and pregnancy/lactation, while the supplemental UL remains 350 mg/day for ages 14 years and older. Injectable magnesium sulfate for prevention or treatment of eclamptic seizures is a separate medical therapy requiring clinical protocols and must not be conflated with oral dietary supplementation.
  sourceId: nih-ods-2026
- title: Pediatric considerations
  description: "U.S. supplemental magnesium ULs are age-specific: none is established for infants, 65 mg/day for ages 1–3, 110 mg/day for ages 4–8, and 350 mg/day from age 9 onward. Pediatric hypermagnesemia has occurred with excessive magnesium-containing products, so adult supplement exposures should not be extrapolated to children."
  sourceId: nih-ods-2026
- title: Geriatric considerations
  description: Older adults tend to have lower dietary intake, reduced intestinal absorption, and greater urinary magnesium loss, increasing deficiency risk. At the same time, declining renal function can increase toxicity risk from supplements and magnesium-containing medications, so deficiency and excess risks can coexist.
  sourceId: nih-ods-2026
- title: Formulation and co-ingredient confounding
  description: Clinical outcomes cannot be assigned to elemental magnesium alone when the tested product has a distinctive ligand, co-ingredient, or proprietary formulation. Magnesium bisglycinate delivers glycine, and magnesium-L-threonate trials test a specific salt and often a branded product.
  sourceId: schuster-2025
- title: Commercial sponsorship in magnesium-L-threonate evidence
  description: Several prominent magnesium-L-threonate cognition/sleep trials were funded by companies with commercial interests in the tested ingredient, with author employment, consulting, or sponsor involvement disclosed in the publication or correction. These trials are not invalidated by sponsorship, but independent replication is limited.
  sourceId: lopresti-smith-2026
```

## Claims

```yaml
- id: magnesium-sleep-claim
  assertion: Oral magnesium may improve selected sleep outcomes in some populations, but the adult randomized-trial literature is inconsistent and does not establish magnesium as a routine insomnia treatment.
  relation: may-modulate
  participants:
    - entityId: substance:magnesium
      role: intervention
    - entityId: tag:sleep
      role: measured outcome
  context: Human oral supplementation trials across multiple salts, doses, and baseline magnesium states.
  sourceIds:
    - abbasi-2012
    - schuster-2025
    - hausenblas-2024
    - lopresti-smith-2026
    - lopresti-sleep-review-2026
  conflictingSourceIds:
    - lopresti-sleep-review-2026
  assessment: not-formally-assessed
  limitation: Heterogeneous populations and formulations, frequent subjective endpoints, substantial placebo response, short trials, and low-to-very-low certainty in the 2026 systematic review.
- id: magnesium-blood-pressure-claim
  assertion: Magnesium supplementation produces a small average reduction in blood pressure across randomized trials, with larger effects reported in hypomagnesemic and hypertensive subgroups.
  relation: associated-with-reduction
  participants:
    - entityId: substance:magnesium
      role: intervention
    - entityId: tag:blood-pressure
      role: measured outcome
  context: Randomized oral supplementation trials; effect modification by baseline status is clinically important.
  sourceIds:
    - argeros-2025
    - guerrero-bp-2009
    - fda-qhc-2022
  conflictingSourceIds:
    - fda-qhc-2022
  assessment: not-formally-assessed
  limitation: Trial heterogeneity is high; normotensive groups did not show a statistically significant pooled effect in the 2025 meta-analysis, and FDA describes disease-risk evidence as inconsistent and inconclusive.
- id: magnesium-insulin-sensitivity-claim
  assertion: Repletion can improve insulin-resistance markers in selected hypomagnesemic insulin-resistant adults, while pooled glycemic effects across broader populations are generally modest.
  relation: may-improve
  participants:
    - entityId: substance:magnesium
      role: intervention
    - entityId: tag:insulin-sensitivity
      role: measured outcome
  context: Hypomagnesemic insulin-resistant primary trial plus broader randomized-trial synthesis.
  sourceIds:
    - guerrero-ir-2004
    - mohammadi-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: HOMA-IR and glucose biomarkers are not equivalent to prevention of clinical diabetes complications; benefits may depend on low baseline magnesium status.
- id: magnesium-cognition-claim
  assertion: Magnesium-L-threonate has produced positive composite cognitive findings in small randomized human studies, but evidence is formulation-specific, commercially entangled, and not sufficient to infer a general nootropic effect of magnesium.
  relation: formulation-specific-association
  participants:
    - entityId: substance:magnesium
      role: elemental component
    - entityId: tag:cognitive-performance
      role: measured outcome
  context: Branded magnesium-L-threonate randomized trials in older cognitively impaired adults and younger adults with sleep dissatisfaction.
  sourceIds:
    - liu-2016
    - lopresti-smith-2026
  conflictingSourceIds:
    - liu-2016
  assessment: not-formally-assessed
  limitation: Small samples, multiple endpoints, commercial funding, limited independent replication, and null results in individual cognitive domains prevent generalization to all magnesium formulations.
- id: magnesium-trpm6-homeostasis-claim
  assertion: TRPM6 is required for normal human magnesium homeostasis.
  relation: required-for
  participants:
    - entityId: substance:magnesium
      role: transported ion
    - entityId: tag:trpm6
      role: epithelial channel-kinase
  context: Human hereditary hypomagnesemia with secondary hypocalcemia caused by TRPM6 mutations.
  sourceIds:
    - schlingmann-2002
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human genetic causality establishes physiological necessity but does not quantify the clinical effect of magnesium supplementation in people without TRPM6 disease.
```

## Interactions

```yaml
- id: magnesium-oral-bisphosphonates
  name: Oral bisphosphonates
  otherSlug: null
  summary: Magnesium-containing supplements or medications can reduce absorption of some oral bisphosphonates when taken too close together.
  sourceId: nih-ods-2026
  mechanism: Gastrointestinal binding/absorption interference.
  context: NIH ODS advises separating oral bisphosphonates and magnesium-containing products by at least 2 hours.
- id: magnesium-tetracycline-quinolone-antibiotics
  name: Tetracycline and quinolone antibiotics
  otherSlug: null
  summary: Magnesium can form poorly absorbed complexes with tetracycline-class and quinolone-class antibiotics and reduce antibiotic absorption.
  sourceId: nih-ods-2026
  mechanism: Chelation/complex formation in the gastrointestinal tract.
  context: NIH ODS advises taking these antibiotics at least 2 hours before or 4–6 hours after a magnesium-containing supplement.
- id: magnesium-loop-thiazide-diuretics
  name: Loop and thiazide diuretics
  otherSlug: null
  summary: Chronic treatment with loop or thiazide diuretics can increase urinary magnesium loss, whereas potassium-sparing diuretics reduce magnesium excretion.
  sourceId: nih-ods-2026
  mechanism: Altered renal tubular magnesium handling.
  context: Relevant to interpretation of low magnesium status and repletion requirements.
- id: magnesium-proton-pump-inhibitors
  name: Proton-pump inhibitors
  otherSlug: null
  summary: Prolonged proton-pump-inhibitor use can cause hypomagnesemia; in some FDA-reviewed cases magnesium supplementation alone did not correct the abnormality until the PPI was discontinued.
  sourceId: nih-ods-2026
  mechanism: Long-term PPI exposure can impair magnesium balance through mechanisms that are not fully resolved.
  context: Consider medication exposure when evaluating otherwise unexplained hypomagnesemia.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem-magnesium-2026
  title: Magnesium | Mg | CID 5462224
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5462224
  kind: official chemical database
  insight: Identifies elemental magnesium as PubChem CID 5462224 with formula Mg, molecular weight 24.305 g/mol, and SMILES [Mg].
  limitation: Chemical identity record does not establish nutritional efficacy or a clinically meaningful universal pharmacokinetic half-life.
  funding: Not applicable; U.S. government chemical database.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical study; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: nih-ods-2026
  title: Magnesium - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
  kind: official nutrient monograph
  insight: Current U.S. reference source for magnesium physiology, dietary sources, RDAs/AIs, supplemental ULs, status assessment, deficiency, toxicity, and major medication interactions.
  limitation: Narrative government fact sheet synthesizing multiple evidence types; individual therapeutic questions require inspection of the underlying trials and current clinical guidance.
  funding: Not applicable; U.S. government health information.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical trial; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: efsa-drv-2015
  title: "Dietary Reference Values: Magnesium and phosphorus"
  authors: European Food Safety Authority
  year: 2015
  url: https://www.efsa.europa.eu/en/press/news/150728
  kind: official dietary-reference guidance
  insight: Reports EFSA adult Adequate Intakes of 350 mg/day for men and 300 mg/day for women and age-dependent child values.
  limitation: European Adequate Intakes are reference values, not treatment doses and not interchangeable with U.S. RDAs or supplement upper limits.
  funding: Not applicable; EU agency guidance.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical study; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: fda-qhc-2022
  title: FDA Announces Qualified Health Claim for Magnesium and Reduced Risk of High Blood Pressure
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://www.fda.gov/food/hfp-constituent-updates/fda-announces-qualified-health-claim-magnesium-and-reduced-risk-high-blood-pressure
  kind: official regulatory statement
  insight: FDA exercises enforcement discretion for specified qualified magnesium-hypertension claims while explicitly characterizing the evidence as inconsistent and inconclusive.
  limitation: A qualified health claim is not an approval of magnesium as a hypertension treatment and is subject to labeling conditions.
  funding: Not applicable; U.S. regulatory agency.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical study.
  conflictOfInterestStatus: not-assessed
- id: eurlex-magnesium-2025
  title: Directive 2002/46/EC of the European Parliament and of the Council on the approximation of the laws of the Member States relating to food supplements
  authors: European Parliament and Council of the European Union
  year: 2002
  url: https://eur-lex.europa.eu/eli/dir/2002/46
  kind: official EU legislation
  insight: Establishes the EU food-supplement framework and lists permitted vitamins/minerals and source compounds through subsequent amendments.
  limitation: The consolidated legal text and national implementation should be checked for the exact source compound and current market conditions in a specific Member State.
  funding: Not applicable; legislation.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: not-assessed
- id: who-preeclampsia-2025
  title: Pre-eclampsia
  authors: World Health Organization
  year: 2025
  url: https://www.who.int/news-room/fact-sheets/detail/pre-eclampsia
  kind: official clinical public-health guidance
  insight: States that magnesium sulfate injections in pre-eclampsia reduce risk of progression to eclampsia by more than half, illustrating a medical use distinct from oral dietary supplementation.
  limitation: Addresses pre-eclampsia/eclampsia medical care, not routine oral magnesium supplementation in pregnancy.
  funding: Not applicable; WHO guidance.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a trial.
  conflictOfInterestStatus: not-assessed
- id: lindberg-1990
  title: Magnesium bioavailability from magnesium citrate and magnesium oxide.
  authors: J S Lindberg, M M Zobitz, J R Poindexter, C Y Pak
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2407766/
  kind: controlled human bioavailability study
  insight: Magnesium citrate was more soluble in vitro and produced a larger urinary-magnesium response than magnesium oxide after oral loading in healthy volunteers.
  limitation: Small older study using urinary response rather than long-term clinical outcomes; exact modern commercial formulations may differ.
  pmid: "2407766"
  doi: 10.1080/07315724.1990.10720349
  funding: Full funding declaration was not inspected in accessible full text during this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: walker-2003
  title: Mg citrate found more bioavailable than other Mg preparations in a randomised, double-blind study.
  authors: Ann F Walker, Georgios Marakis, Samantha Christie, Martyn Byng
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14596323/
  kind: randomized double-blind placebo-controlled comparative bioavailability trial
  insight: At 300 mg/day elemental magnesium, citrate and an amino-acid chelate produced greater absorption-related responses than oxide over 60 days; citrate had the strongest serum response.
  limitation: Forty-six healthy participants; biomarker bioavailability differences do not establish superiority for clinical outcomes.
  pmid: "14596323"
  funding: Full funding declaration was not inspected in accessible full text during this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: abbasi-2012
  title: "The effect of magnesium supplementation on primary insomnia in elderly: A double-blind placebo-controlled clinical trial."
  authors: Behnood Abbasi, Masud Kimiagar, Khosro Sadeghniiat, Minoo M Shirazi, Mehdi Hedayati, Bahram Rashidkhani
  year: 2012
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3703169/
  kind: randomized double-blind placebo-controlled trial
  insight: In older adults with primary insomnia and low magnesium intake, 500 mg/day elemental magnesium as oxide improved ISI, sleep efficiency, and sleep-onset latency, but not between-group total sleep time.
  limitation: Small sample, short duration, largely subjective sleep measures, and a research dose above the U.S. supplemental UL.
  pmid: "23853635"
  funding: Funded by the National Nutrition and Food Technology Research Institute, Shahid Beheshti University of Medical Sciences.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The full-text article states that the authors had no conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3703169/
- id: schuster-2025
  title: "Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial."
  authors: Julius Schuster, Igor Cycelskij, Adrian Lopresti, Andreas Hahn
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
  kind: randomized double-blind placebo-controlled trial
  insight: Four weeks of magnesium bisglycinate providing 250 mg/day elemental magnesium modestly improved ISI versus placebo (Cohen's d=0.20); secondary psychological outcomes were not significantly different.
  limitation: Self-reported poor sleep, no objective sleep measure, short duration, nonvalidated exploratory dietary-magnesium question, and 1.523 g/day glycine co-exposure.
  pmid: "40918053"
  doi: 10.2147/NSS.S524348
  funding: Reported academic/noncommercial support from the Institute of Food and One Health, Leibniz University Hannover; the tested product was manufactured by Biogena.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Adrian Lopresti disclosed commercial nutraceutical research/honoraria through his clinical research organization; the other authors reported no relevant conflicts in the inspected article.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- id: hausenblas-2024
  title: "Magnesium-L-threonate improves sleep quality and daytime functioning in adults with self-reported sleep problems: A randomized controlled trial."
  authors: Heather A Hausenblas, Tarah Lynch, Stephanie Hooper, Aahana Shrestha, Doug Rosendale, Jennifer Gu
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11381753/
  kind: randomized double-blind placebo-controlled trial
  insight: Selected subjective and Oura-derived secondary sleep/daytime metrics favored 1 g/day magnesium L-threonate over 21 days, while the primary ISI condition-by-time interaction was not significant.
  limitation: Short study, many outcomes, strong placebo response, proprietary wearable-derived sleep stages, and commercial sponsorship; a later correction addressed disclosure/registration information.
  pmid: "39252819"
  doi: 10.1016/j.sleepx.2024.100121
  funding: Funded by AIDP Inc.; the tested Magtein ingredient was supplied by a commercial manufacturer.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Corrected disclosures report commercial relationships involving the sponsor/ingredient interests; sponsor-linked authors included employees/consultants. This is relevant because the original article's disclosure record was corrected.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11381753/
- id: lopresti-sleep-review-2026
  title: "Magnesium Supplementation for Sleep in Adults: A Systematic Review of Randomized Controlled Trials."
  authors: Adrian L Lopresti, Stephen J Smith, Peter D Drummond
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42661485/
  kind: systematic review of randomized controlled trials
  insight: Twelve adult sleep RCTs were heterogeneous and inconsistent; certainty was rated low to very low and the review did not support routine oral magnesium for insomnia.
  limitation: Narrative synthesis was required because populations, salts, doses, durations, and outcome methods were too heterogeneous for a single pooled estimate.
  pmid: "42661485"
  doi: 10.1080/19390211.2026.2719670
  funding: Full funding declaration was not available in the inspected PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest declaration was not available in the inspected PubMed record.
  conflictOfInterestStatus: not-assessed
- id: lopresti-smith-2026
  title: "The effects of magnesium L-threonate (Magtein®) on cognitive performance and sleep quality in adults: a randomised, double-blind, placebo-controlled trial"
  authors: Adrian L Lopresti, Stephen J Smith
  year: 2026
  url: https://doi.org/10.3389/fnut.2025.1729164
  kind: randomized double-blind placebo-controlled trial
  insight: Six weeks of 2 g/day magnesium L-threonate improved the study's total-cognition composite and some subjective outcomes, while objective Oura sleep outcomes were not improved.
  limitation: Product-specific, multiple outcomes, commercial funding and author commercial research relationships, and no independent replication sufficient to generalize to other magnesium forms.
  doi: 10.3389/fnut.2025.1729164
  funding: Funded by Threotech Inc., which supplied the product and had disclosed involvement in study conceptualization.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Authors disclosed employment/relationships with a clinical research organization conducting nutraceutical studies and receiving industry research funding/honoraria.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.3389/fnut.2025.1729164
- id: liu-2016
  title: "Efficacy and Safety of MMFS-01, a Synapse Density Enhancer, for Treating Cognitive Impairment in Older Adults: A Randomized, Double-Blind, Placebo-Controlled Trial."
  authors: Guosong Liu, Jason G Weinger, Zhong-Lin Lu, Feng Xue, Safa Sadeghpour
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4927823/
  kind: randomized double-blind placebo-controlled trial
  insight: MMFS-01 containing magnesium L-threonate improved a composite cognitive score at 12 weeks, while attention and episodic-memory domain comparisons were not uniformly significant.
  limitation: Small single-site trial, per-protocol efficacy analysis, multiple endpoints without study-wide type-I-error control, selected symptomatic population, and commercial sponsor involvement.
  pmid: "26519439"
  doi: 10.3233/JAD-150538
  funding: Funded by Neurocentria Inc.; Neurocentria participated in design, analyzed cognitive/body-magnesium outcomes, and wrote the paper through iterative review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial sponsor involvement and author affiliations were inspected, but a complete standalone conflict declaration was not available in the extracted text.
  conflictOfInterestStatus: not-assessed
- id: argeros-2025
  title: "Magnesium Supplementation and Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials."
  authors: Zoe Argeros, Xiaoye Xu, Buna Bhandari, Katie Harris, Rhian M Touyz, Aletta E Schutte
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12529988/
  kind: systematic review and meta-analysis of randomized controlled trials
  insight: Across 38 RCTs and 2,709 participants, magnesium reduced SBP by 2.81 mmHg and DBP by 2.05 mmHg on average, with larger reductions in hypomagnesemic and treated-hypertensive subgroups.
  limitation: High between-study heterogeneity and no clear dose-response; normotensive groups did not reach statistical significance.
  pmid: "41000008"
  doi: 10.1161/HYPERTENSIONAHA.125.25129
  funding: Funding declaration was not independently extracted for this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Conflict declaration was not independently extracted for this review.
  conflictOfInterestStatus: not-assessed
- id: mohammadi-2026
  title: "Comprehensive Effects of Magnesium Supplementation on Cardiometabolic Risk Factors: A Systematic Review and Dose-Response Meta-Analysis."
  authors: Shooka Mohammadi, Andrea Palermo, Pantea Ojani, Navid Alaghemand, Pouyan Sanjari Pirayvatlou, Mohammadreza Mirkarimi, Sara Ayazian Mavi, Kia Tahouri, Shokoufeh Shokouhifar, Yeganeh Ettehad, Aida Borzabadi, Damoon Ashtary-Larky, Katsuhiko Suzuki, Cristina Bouzas, Daniela Rodrigues, Josep A Tur
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13468553/
  kind: systematic review and dose-response meta-analysis
  insight: Across 78 RCTs, pooled effects included modest reductions in SBP, DBP, fasting glucose, HOMA-IR, and HbA1c; authors cautioned that clinical relevance was uncertain and certainty varied.
  limitation: Substantial clinical and intervention heterogeneity; higher-dose and longer-term evidence was comparatively sparse.
  pmid: "42588058"
  doi: 10.3390/nu18152435
  funding: Funding declaration was not independently extracted for this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Conflict declaration was not independently extracted for this review.
  conflictOfInterestStatus: not-assessed
- id: guerrero-ir-2004
  title: Oral magnesium supplementation improves insulin sensitivity in non-diabetic subjects with insulin resistance. A double-blind placebo-controlled randomized trial.
  authors: F Guerrero-Romero, H E Tamez-Perez, G González-González, A M Salinas-Martínez, J Montes-Villarreal, J H Treviño-Ortiz, M Rodríguez-Morán
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15223977/
  kind: randomized double-blind placebo-controlled trial
  insight: In hypomagnesemic non-diabetic adults with insulin resistance, magnesium chloride increased serum magnesium and reduced HOMA-IR over three months.
  limitation: Selected deficiency-enriched population; the abstract does not establish downstream clinical outcomes or provide a generalizable elemental dose for all MgCl2 preparations.
  pmid: "15223977"
  doi: 10.1016/S1262-3636(07)70116-7
  funding: Full funding statement was not inspected in accessible full text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest statement was not inspected.
  conflictOfInterestStatus: not-assessed
- id: guerrero-bp-2009
  title: "The effect of lowering blood pressure by magnesium supplementation in diabetic hypertensive adults with low serum magnesium levels: a randomized, double-blind, placebo-controlled clinical trial."
  authors: F Guerrero-Romero, M Rodríguez-Morán
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19020533/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Magnesium chloride reduced systolic and diastolic blood pressure more than placebo over four months in diabetic hypertensive adults with hypomagnesemia.
  limitation: Small, selected population receiving captopril; effect size should not be extrapolated to normotensive or magnesium-replete people.
  pmid: "19020533"
  doi: 10.1038/jhh.2008.129
  funding: Full funding statement was not inspected in accessible full text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest statement was not inspected.
  conflictOfInterestStatus: not-assessed
- id: schlingmann-2002
  title: Hypomagnesemia with secondary hypocalcemia is caused by mutations in TRPM6, a new member of the TRPM gene family.
  authors: Karl P Schlingmann, Stefanie Weber, Melanie Peters, Lene Niemann Nejsum, Helga Vitzthum, Karin Klingel, Markus Kratz, Elie Haddad, Ellinor Ristoff, Dganit Dinour, Maria Syrrou, Søren Nielsen, Martin Sassen, Siegfried Waldegger, Hannsjörg W Seyberth, Martin Konrad
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12032568/
  kind: human genetic and molecular study
  insight: Identified TRPM6 mutations causing hereditary hypomagnesemia with secondary hypocalcemia and demonstrated intestinal/kidney expression, establishing a critical role in human Mg homeostasis.
  limitation: Rare monogenic disease establishes physiological necessity but does not predict supplementation effects in the general population.
  pmid: "12032568"
  doi: 10.1038/ng889
  funding: Full funding disclosure was not independently inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict declaration was not independently inspected.
  conflictOfInterestStatus: not-assessed
- id: schmitz-2003
  title: Regulation of vertebrate cellular Mg2+ homeostasis by TRPM7.
  authors: Carsten Schmitz, Anne-Laure Perraud, Catherine O Johnson, Kazunori Inabe, Megan K Smith, Reinhold Penner, Tomohiro Kurosaki, Andrea Fleig, Andrew M Scharenberg
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12887921/
  kind: cellular mechanism study
  insight: TRPM7-deficient cells became magnesium deficient and growth-arrested, and extracellular magnesium rescued viability, supporting a central cellular Mg-homeostasis role.
  limitation: Cell-model evidence does not establish a clinical effect of oral magnesium supplementation.
  pmid: "12887921"
  doi: 10.1016/S0092-8674(03)00556-7
  funding: Full funding disclosure was not independently inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict declaration was not independently inspected.
  conflictOfInterestStatus: not-assessed
- id: kolisek-2012
  title: Human gene SLC41A1 encodes for the Na+/Mg2+ exchanger.
  authors: Martin Kolisek, Axel Nestler, Jürgen Vormann, Monika Schweigel-Röntgen
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22031603/
  kind: cellular transport study
  insight: SLC41A1 overexpression in HEK293 cells produced strongly sodium-dependent Mg2+ extrusion consistent with Na+/Mg2+ exchange.
  limitation: Overexpression-cell findings do not by themselves define whole-body flux or clinical supplementation responses.
  pmid: "22031603"
  doi: 10.1152/ajpcell.00289.2011
  funding: Full funding disclosure was not independently inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict declaration was not independently inspected.
  conflictOfInterestStatus: not-assessed
- id: stuiver-2011
  title: CNNM2, encoding a basolateral protein required for renal Mg2+ handling, is mutated in dominant hypomagnesemia.
  authors: Marchel Stuiver, Sergio Lainez, Constanze Will, Sara Terryn, Dorothee Günzel, Huguette Debaix, Kerstin Sommer, Kathrin Kopplin, Julia Thumfart, Nicole B Kampik, Uwe Querfeld, Thomas E Willnow, Vladimír Němec, Carsten A Wagner, Joost G Hoenderop, Olivier Devuyst, Nine V A M Knoers, René J Bindels, Iwan C Meij, Dominik Müller
  year: 2011
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3059432/
  kind: human genetic and renal-transport study
  insight: CNNM2 mutations caused dominant hypomagnesemia and the protein localized basolaterally in distal renal tubules, supporting an essential role in renal magnesium handling.
  limitation: The genetic/functional evidence supports physiological importance but does not settle every proposed molecular transport mechanism for CNNM2.
  pmid: "21397062"
  doi: 10.1016/j.ajhg.2011.02.005
  funding: Full funding disclosure was not independently inspected for this article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict declaration was not independently inspected.
  conflictOfInterestStatus: not-assessed
- id: ctgov-athletes-2025
  title: Effects of Magnesium L-Threonate on Sleep, Recovery, and Athletic Performance in Collegiate Athletes
  authors: University of California, Los Angeles
  year: 2025
  url: https://clinicaltrials.gov/study/NCT07015047
  kind: ClinicalTrials.gov registry record
  insight: Registered active-not-recruiting magnesium-L-threonate trial in collegiate athletes with sleep/recovery endpoints and no posted efficacy results in the record inspected on 2026-10-04.
  limitation: Sponsor-submitted registry information does not establish efficacy, safety, or publication quality.
  funding: Registry sponsor listed as University of California, Los Angeles; full funding relationships were not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the registry record.
  conflictOfInterestStatus: not-assessed
- id: ctgov-saudi-2026
  title: Effect of Magnesium Supplementation on Sleep Quality and Cognitive Function in Saudi Adults
  authors: Umm Al-Qura University
  year: 2026
  url: https://clinicaltrials.gov/study/NCT07515417
  kind: ClinicalTrials.gov registry record
  insight: Completed magnesium-citrate sleep/cognition study with 41 participants; the inspected registry record did not contain posted efficacy results.
  limitation: Completion without posted results cannot be interpreted as a positive or negative finding.
  funding: Registry sponsor listed as Umm Al-Qura University; full funding relationships were not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the registry record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: dietary-supplement and conventional-food qualified health claims
  status: FDA exercises enforcement discretion for specified qualified magnesium/high-blood-pressure claims when wording and other conditions are met; the permitted language explicitly states that the evidence is inconsistent and inconclusive. This is not approval of magnesium as a hypertension treatment.
  sourceUrl: https://www.fda.gov/food/hfp-constituent-updates/fda-announces-qualified-health-claim-magnesium-and-reduced-risk-high-blood-pressure
  asOf: 2026-10-04
- jurisdiction: European Union
  activity: use of magnesium as a mineral in food supplements
  status: Magnesium is within the EU food-supplement framework under Directive 2002/46/EC; permitted source compounds are specified in Annex II and amended over time, including a 2025 amendment for magnesium L-threonate. National implementation and the current consolidated annex should be checked for a specific product/form.
  sourceUrl: https://eur-lex.europa.eu/eli/dir/2002/46
  asOf: 2026-10-04
```

