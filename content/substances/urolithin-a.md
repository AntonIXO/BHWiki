---
slug: urolithin-a
name: Urolithin A
subtitle: Gut microbiome-derived ellagitannin metabolite studied as a direct oral mitochondrial-health intervention
aliases:
  - Urolithin A
  - UA
  - UroA
  - 3,8-Dihydroxybenzo[c]chromen-6-one
  - Mitopure
formula: C13H8O4
molecularWeight: 228.20 g/mol
pubchemCid: 5488186
smiles: C1=CC2=C(C=C1O)C(=O)OC3=C2C=CC(=C3)O
category: postbiotic metabolite
tags: []
accent: "#7C3AED"
reviewedAt: 2026-10-04
editorialStatus: sourced-draft
halfLife:
  label: Approximately 24 hours as a generic publication-level statement; analyte-specific half-life was not independently verified from accessible primary-study PK tables
  low: null
  high: null
  context: The NOURISH primary paper states that UA has an approximately 24-hour half-life and is eliminated after roughly 3–4 days, citing the earlier first-in-human trial. Because the accessible primary first-in-human article did not expose its detailed supplementary analyte-specific PK table during this review, this value should not be treated as an exact parent-UA, UA-glucuronide, or UA-sulfate estimate.
  sourceId: singh-2022-bioavailability
  observationId: ua-generic-half-life-approx
kinetics:
  onset: After a direct 500 mg oral dose in NOURISH, parent UA, UA-glucuronide and UA-sulfate were measurable in plasma; UA-glucuronide was substantially elevated by the 6-hour sampling point.
  peak: In NOURISH, the highest mean UA-glucuronide concentration among the sampled 0-, 6- and 24-hour time points occurred at 6 hours. Sparse sampling does not establish an exact Tmax.
  duration: UA-glucuronide remained elevated at 24 hours after direct 500 mg dosing. The publication describes generic UA elimination over approximately 3–4 days based on prior human work.
  bioavailability: Direct 500 mg UA supplementation produced substantially more consistent exposure than pomegranate-juice precursor exposure; UA-glucuronide exposure was more than sixfold higher by incremental AUC in NOURISH.
  metabolism: Absorbed UA undergoes extensive phase-II metabolism; parent UA, UA-glucuronide and UA-sulfate are detected in human plasma, with conjugated forms contributing substantially to circulating exposure.
  sourceId: singh-2022-bioavailability
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

Urolithin A has been studied in controlled human trials of muscle performance and mitochondrial biomarkers. Secondary or surrogate improvements do not by themselves establish a broad anti-aging benefit.

## Description

Direct supplementation differs from microbiome conversion of dietary ellagitannins. Published trials retain their actual product, population, comparator, primary and secondary endpoints, including null findings. Pharmacokinetic measurements identify the sampled analyte.

## Evidence note

The human evidence includes manufacturer-funded research and declared interests, retained per source. Cohort overlap and endpoint selection matter. Animal mechanisms and biomarker changes are not clinical longevity evidence, and independent editorial review remains pending.

## Doses

```yaml
- label: First-in-human single ascending doses
  amount: 250–2,000 mg
  quantity: 250
  quantityMax: 2000
  unit: mg
  ingredient: urolithin A
  formulation: direct synthetic urolithin A
  route: oral
  frequency: single dose
  duration: single administration
  population: healthy sedentary older adults
  purpose: phase I safety, tolerability and pharmacokinetic assessment
  sourceCategory: research
  note: Separate dose cohorts were studied; the range is not a recommended dose range.
  sourceId: andreux-2019-first-human
- label: First-in-human repeated-dose phase
  amount: 250, 500 or 1,000 mg/day
  quantity: 250
  quantityMax: 1000
  unit: mg/day
  ingredient: urolithin A
  formulation: direct synthetic urolithin A
  route: oral
  frequency: once daily
  duration: 28 days
  population: healthy sedentary older adults
  purpose: safety, exposure and mitochondrial-associated pharmacodynamic biomarkers
  sourceCategory: research
  note: Participants received discrete 250, 500 or 1,000 mg dose levels; this is not a continuous recommended range.
  sourceId: andreux-2019-first-human
- label: NOURISH direct-UA challenge
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: urolithin A
  formulation: Mitopure powder mixed into yogurt
  route: oral
  frequency: single dose during each crossover intervention period
  duration: single administration
  population: 100 healthy adults aged 18–80 years
  purpose: bioavailability comparison with pomegranate juice and assessment of microbiome-dependent UA producer status
  sourceCategory: research
  note: Direct UA was compared with approximately 240 mL 100% pomegranate juice containing UA precursors rather than UA itself.
  sourceId: singh-2022-bioavailability
- label: ENERGIZE
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: oral urolithin A supplement
  route: oral
  frequency: once daily
  duration: 4 months
  population: adults aged 65–90 years
  purpose: muscle endurance, 6-minute-walk performance, skeletal-muscle ATP production and cellular-health biomarkers
  sourceCategory: research
  note: Randomized double-blind placebo-controlled trial; research exposure, not a clinical recommendation.
  sourceId: liu-2022-energize
- label: ATLAS 500 mg arm
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: Mitopure
  route: oral
  frequency: once daily
  duration: 120 days
  population: untrained, overweight, middle-aged adults with low aerobic endurance
  purpose: muscle strength, exercise performance and mitochondrial-associated biomarkers
  sourceCategory: research
  note: One of two active-dose groups in the randomized placebo-controlled ATLAS trial.
  sourceId: singh-2022-atlas
- label: ATLAS 1,000 mg arm
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: Mitopure
  route: oral
  frequency: once daily
  duration: 120 days
  population: untrained, overweight, middle-aged adults with low aerobic endurance
  purpose: muscle strength, exercise performance and mitochondrial-associated biomarkers
  sourceCategory: research
  note: One of two active-dose groups in the randomized placebo-controlled ATLAS trial.
  sourceId: singh-2022-atlas
- label: Resistance-trained athlete trial
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: oral urolithin A supplement
  route: oral
  frequency: once daily
  duration: 8 weeks
  population: 20 resistance-trained male athletes
  purpose: muscle strength, endurance, inflammation, oxidative stress and protein-metabolism outcomes
  sourceCategory: research
  note: Small independent randomized double-blind placebo-controlled study.
  sourceId: zhao-2024-athletes
- label: Competitive distance-runner trial
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: oral urolithin A supplement
  route: oral
  frequency: once daily
  duration: 4 weeks
  population: 42 highly trained male distance runners during an altitude training camp
  purpose: running performance, recovery, aerobic capacity and mitochondrial biomarkers
  sourceCategory: research
  note: Randomized double-blind placebo-controlled trial conducted during concurrent altitude training.
  sourceId: whitfield-2025-runners
- label: Immune-aging trial
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: urolithin A
  formulation: Mitopure
  route: oral
  frequency: once daily
  duration: 4 weeks
  population: 50 healthy middle-aged adults
  purpose: immune-cell composition, metabolism and function
  sourceCategory: research
  note: Randomized double-blind placebo-controlled trial; immune outcomes were predominantly cellular and biomarker endpoints.
  sourceId: denk-2025-immune
```

## Pharmacokinetics

```yaml
- id: ua-generic-half-life-approx
  analyte: urolithin A (generic publication-level statement; not analyte-resolved)
  route: oral
  formulation: direct urolithin A
  population: healthy adults
  endpoint: elimination-half-life
  statistic: approximate
  value: 24
  low: null
  high: null
  unit: hours
  context: The NOURISH primary publication states that UA has a half-life of approximately 24 hours, citing the earlier first-in-human trial, and describes elimination after approximately 3–4 days. Because that sentence is not analyte-resolved, this value is not suitable for an analyte-specific PK model.
  sourceId: singh-2022-bioavailability
  modelEligible: false
- id: ua-parent-half-life-not-established
  analyte: parent urolithin A
  route: oral
  formulation: direct synthetic urolithin A
  population: healthy sedentary older adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The accessible first-in-human primary article confirms pharmacokinetic assessment and dose-dependent systemic exposure, but the detailed analyte-specific half-life estimate was contained in supplementary material that was not independently retrievable during this review.
  sourceId: andreux-2019-first-human
  modelEligible: false
- id: ua-glucuronide-half-life-not-established
  analyte: urolithin A glucuronide
  route: oral
  formulation: direct synthetic urolithin A
  population: healthy sedentary older adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: UA-glucuronide is a major circulating conjugate. An exact primary-source analyte-specific half-life was not independently verified from the accessible first-in-human full text in this review.
  sourceId: andreux-2019-first-human
  modelEligible: false
- id: ua-sulfate-half-life-not-established
  analyte: urolithin A sulfate
  route: oral
  formulation: direct synthetic urolithin A
  population: healthy sedentary older adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: UA-sulfate is a circulating phase-II conjugate. Secondary reviews report an analyte-specific range, but it is deliberately not copied here because the underlying supplementary PK table was not independently verified.
  sourceId: andreux-2019-first-human
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
- id: andreux-mitochondrial-biomarker-signature
  conceptId: mitochondrial-biomarkers
  name: Skeletal-muscle and plasma mitochondrial-associated biomarkers
  direction: Variable
  evidence: Human research
  description: After 28 days, 500 and 1,000 mg/day UA altered plasma acylcarnitines and skeletal-muscle mitochondrial gene-expression patterns. These are pharmacodynamic biomarkers rather than demonstrated clinical outcomes.
  sourceId: andreux-2019-first-human
  population: healthy sedentary older adults
  exposure: 500 or 1,000 mg/day for 28 days
  instrument: plasma metabolomics and skeletal-muscle gene-expression profiling
  magnitude: Molecular changes were reported at 500 and 1,000 mg/day; the primary objective of the trial was safety.
  reportType: measured-assessment
  study:
    id: NCT02655393
    design: first-in-human randomized placebo-controlled single- and multiple-dose study
    populationLabels:
      - older adults
      - sedentary
    comparator: placebo
    route: oral
    formulation: direct synthetic urolithin A
    durationDays: 28
    assessmentTime: end of repeated-dose period
- id: energize-six-minute-walk
  conceptId: walking-capacity
  name: 6-minute walk distance
  direction: Variable
  evidence: Human research
  description: Walking distance increased in both groups, but the improvement with UA was not statistically significant versus placebo, so the trial did not establish superiority on this primary functional endpoint.
  sourceId: liu-2022-energize
  population: adults aged 65–90 years
  exposure: 1,000 mg/day for 4 months
  instrument: 6-minute walk test
  magnitude: "Mean change: +60.8 m with UA versus +42.5 m with placebo; between-group superiority was not significant."
  reportType: measured-assessment
  study:
    id: NCT03283462
    design: randomized double-blind placebo-controlled trial
    sampleSize: 66
    populationLabels:
      - older adults
    comparator: placebo
    route: oral
    formulation: urolithin A
    assessmentTime: 4 months
- id: energize-fdi-atp-production
  conceptId: skeletal-muscle-atp-production
  name: Maximal ATP production in first dorsal interosseus muscle
  direction: Variable
  evidence: Human research
  description: UA did not significantly improve maximal ATP production versus placebo, one of the trial's primary endpoints.
  sourceId: liu-2022-energize
  population: adults aged 65–90 years
  exposure: 1,000 mg/day for 4 months
  instrument: magnetic resonance spectroscopy
  magnitude: Mean change was +0.07 mM/s with UA versus +0.06 mM/s with placebo; no significant between-group benefit.
  reportType: measured-assessment
  study:
    id: NCT03283462
    design: randomized double-blind placebo-controlled trial
    sampleSize: 66
    populationLabels:
      - older adults
    comparator: placebo
    route: oral
    formulation: urolithin A
    assessmentTime: 4 months
- id: energize-fdi-muscle-endurance
  conceptId: muscle-endurance
  name: First dorsal interosseus muscle endurance
  direction: Increased
  evidence: Human research
  description: UA increased contractions to fatigue relative to placebo at the 2-month assessment. The advantage was not consistently significant across later assessments, so this is best treated as a secondary endurance signal rather than a replicated durable effect.
  sourceId: liu-2022-energize
  population: adults aged 65–90 years
  exposure: 1,000 mg/day
  instrument: repeated first dorsal interosseus contractions to fatigue
  magnitude: At 2 months, change was +95.3 contractions with UA versus +11.6 with placebo.
  reportType: measured-assessment
  study:
    id: NCT03283462
    design: randomized double-blind placebo-controlled trial
    sampleSize: 66
    populationLabels:
      - older adults
    comparator: placebo
    route: oral
    formulation: urolithin A
    assessmentTime: 2 months
- id: atlas-hamstring-average-peak-torque
  conceptId: muscle-strength
  name: Hamstring average peak torque
  direction: Increased
  evidence: Human research
  description: Both UA dose groups showed better hamstring average peak torque changes than placebo. Interpretation is tempered by a decline in the placebo group and by the fact that peak power, the trial's prespecified primary endpoint, was not significantly improved.
  sourceId: singh-2022-atlas
  population: untrained overweight adults aged 40–64 years with low aerobic endurance
  exposure: 500 or 1,000 mg/day for 120 days
  instrument: isokinetic Biodex dynamometry
  magnitude: "Change from baseline: approximately +12% at 500 mg/day and +9.8% at 1,000 mg/day versus -9.8% with placebo; reported comparisons versus placebo p=0.027 and p=0.029."
  reportType: measured-assessment
  study:
    id: NCT03464500
    design: randomized double-blind placebo-controlled three-arm trial
    sampleSize: 88
    populationLabels:
      - middle-aged
      - overweight
      - untrained
    comparator: placebo
    route: oral
    formulation: Mitopure
    durationDays: 120
    assessmentTime: 120 days
- id: atlas-peak-power-output
  conceptId: exercise
  name: Peak power output
  direction: Variable
  evidence: Human research
  description: Peak power output was the prespecified primary performance endpoint and was not significantly improved by either UA dose versus placebo.
  sourceId: singh-2022-atlas
  population: untrained overweight adults aged 40–64 years with low aerobic endurance
  exposure: 500 or 1,000 mg/day for 120 days
  instrument: incremental exercise-tolerance test
  magnitude: UA groups increased approximately 4% from baseline, but the between-group comparison was not significant.
  reportType: measured-assessment
  study:
    id: NCT03464500
    design: randomized double-blind placebo-controlled three-arm trial
    sampleSize: 88
    populationLabels:
      - middle-aged
      - overweight
      - untrained
    comparator: placebo
    route: oral
    formulation: Mitopure
    durationDays: 120
    assessmentTime: 120 days
- id: zhao-mvic
  conceptId: muscle-strength
  name: Maximum voluntary isometric contraction
  direction: Increased
  evidence: Human research
  description: In a small independent trial of resistance-trained men, UA improved maximum voluntary isometric contraction versus placebo, while dynamic 1RM bench-press and squat changes were not significant.
  sourceId: zhao-2024-athletes
  population: 20 resistance-trained male athletes
  exposure: 1,000 mg/day for 8 weeks
  instrument: maximum voluntary isometric contraction
  magnitude: Reported between-group change +43.50 Nm, p=0.048; no confidence interval was reported.
  reportType: measured-assessment
  study:
    id: zhao-2024-urolithin-a-athletes
    design: randomized double-blind placebo-controlled study
    sampleSize: 20
    populationLabels:
      - resistance-trained
      - male athletes
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 56
    assessmentTime: 8 weeks
- id: zhao-repetitions-to-failure
  conceptId: muscle-endurance
  name: Repetitions to failure
  direction: Increased
  evidence: Human research
  description: The small resistance-trained-athlete trial reported a higher repetitions-to-failure change with UA than placebo.
  sourceId: zhao-2024-athletes
  population: 20 resistance-trained male athletes
  exposure: 1,000 mg/day for 8 weeks
  instrument: repetitions-to-failure exercise test
  magnitude: Reported between-group difference +2.00 repetitions, p=0.011; no confidence interval was reported.
  reportType: measured-assessment
  study:
    id: zhao-2024-urolithin-a-athletes
    design: randomized double-blind placebo-controlled study
    sampleSize: 20
    populationLabels:
      - resistance-trained
      - male athletes
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 56
    assessmentTime: 8 weeks
- id: runners-3000m-performance
  conceptId: exercise
  name: 3,000 m running performance
  direction: Variable
  evidence: Human research
  description: UA did not significantly improve 3,000 m time-trial performance during the altitude-training study, despite signals in perceived exertion, creatine kinase and skeletal-muscle molecular pathways.
  sourceId: whitfield-2025-runners
  population: highly trained male distance runners
  exposure: 1,000 mg/day for 4 weeks during altitude training
  instrument: 3,000 m track time trial
  magnitude: Time-trial performance did not significantly improve with UA; UA within-group p=0.116.
  reportType: measured-assessment
  study:
    id: NCT04783207
    design: randomized double-blind parallel placebo-controlled trial
    sampleSize: 42
    populationLabels:
      - competitive distance runners
      - male
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 28
    assessmentTime: 4 weeks
- id: runners-postexercise-ck
  conceptId: exercise-recovery
  name: Post-exercise creatine kinase response
  direction: Decreased
  evidence: Human research
  description: UA reduced the post-race creatine-kinase response, an indirect marker of exercise-associated muscle damage, without establishing faster clinical recovery or improved race performance.
  sourceId: whitfield-2025-runners
  population: highly trained male distance runners
  exposure: 1,000 mg/day for 4 weeks during altitude training
  instrument: capillary-blood creatine kinase after 3,000 m time trial
  magnitude: The publication reported a significant time-by-treatment interaction for race CK total area under the curve; this biomarker result did not translate into significant 3,000 m performance improvement.
  reportType: measured-assessment
  study:
    id: NCT04783207
    design: randomized double-blind parallel placebo-controlled trial
    sampleSize: 42
    populationLabels:
      - competitive distance runners
      - male
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 28
    assessmentTime: 4 weeks
- id: immune-cd8-naive-like
  conceptId: immune-function
  name: Naive-like, less terminally exhausted CD8+ T-cell proportion
  direction: Increased
  evidence: Human research
  description: Four weeks of UA increased a peripheral CD8+ T-cell phenotype interpreted by the investigators as more naive-like and less terminally exhausted. This is an immune-cell phenotype, not a demonstrated reduction in infection or other clinical events.
  sourceId: denk-2025-immune
  population: 50 healthy middle-aged adults
  exposure: 1,000 mg/day for 4 weeks
  instrument: peripheral-blood flow-cytometric CD8+ T-cell phenotyping
  magnitude: Treatment difference +0.50 percentage points; 95% CI 0.16 to 0.83.
  reportType: measured-assessment
  study:
    id: NCT05735886
    design: randomized double-blind placebo-controlled trial
    sampleSize: 50
    populationLabels:
      - healthy
      - middle-aged
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 28
    assessmentTime: day 28
  result:
    measure: mean-difference
    estimate: 0.5
    unit: percentage points
    instrument: Peripheral naive-like, less terminally exhausted CD8+ T-cell proportion by flow cytometry
    comparator: placebo
    assessmentTime: day 28
    population: healthy middle-aged adults
    confidenceInterval:
      lower: 0.16
      upper: 0.83
      level: 95
- id: immune-cd8-fatty-acid-oxidation
  conceptId: immune-function
  name: CD8+ T-cell fatty-acid oxidation capacity
  direction: Increased
  evidence: Human research
  description: UA increased ex-vivo CD8+ T-cell fatty-acid-oxidation capacity, a cellular metabolic endpoint rather than a direct clinical-health outcome.
  sourceId: denk-2025-immune
  population: 50 healthy middle-aged adults
  exposure: 1,000 mg/day for 4 weeks
  instrument: CD8+ T-cell metabolic functional assessment
  magnitude: Treatment difference +14.72 percentage points; 95% CI 6.46 to 22.99.
  reportType: measured-assessment
  study:
    id: NCT05735886
    design: randomized double-blind placebo-controlled trial
    sampleSize: 50
    populationLabels:
      - healthy
      - middle-aged
    comparator: placebo
    route: oral
    formulation: urolithin A
    durationDays: 28
    assessmentTime: day 28
  result:
    measure: mean-difference
    estimate: 14.72
    unit: percentage points
    instrument: CD8+ T-cell fatty-acid oxidation capacity
    comparator: placebo
    assessmentTime: day 28
    population: healthy middle-aged adults
    confidenceInterval:
      lower: 6.46
      upper: 22.99
      level: 95
```

## Mechanisms

```yaml
- title: Mitophagy induction in preclinical models
  description: UA induced mitophagy in C. elegans and mammalian experimental systems and was associated with improved muscle function in rodent models. This establishes a strong preclinical mitochondrial-quality-control mechanism but does not by itself establish human clinical efficacy.
  sourceId: ryu-2016-mitophagy
  conceptId: mitophagy
- title: Human skeletal-muscle mitochondrial and Parkin-associated pathway engagement
  description: ATLAS skeletal-muscle transcriptomic, proteomic and targeted protein analyses showed UA-associated enrichment of mitochondrial pathways and Parkin-mediated quality-control markers, including increased phospho-Parkin in a small biopsy subset. These are supportive pathway-engagement markers; direct whole-body mitophagy flux was not measured.
  sourceId: singh-2022-atlas
  conceptId: mitophagy
- title: Phase-II conjugation after absorption
  description: Human bioavailability studies detect parent UA together with UA-glucuronide and UA-sulfate in plasma, demonstrating extensive conjugative metabolism after direct oral exposure. Circulating conjugates should not be treated interchangeably with unconjugated parent UA in pharmacokinetic interpretation.
  sourceId: singh-2022-bioavailability
```

## Cautions

```yaml
- title: Clinical efficacy remains uncertain
  description: A 2026 systematic review found five small heterogeneous randomized muscle-related trials and low-certainty, statistically inconclusive pooled evidence for the 6-minute-walk test. Strength, endurance and biomarker findings were considered exploratory rather than reproducible proof of efficacy.
  sourceId: dao-2026-meta
- title: Several important primary or performance endpoints were null
  description: ENERGIZE did not establish significant UA superiority for its 6-minute-walk or maximal-ATP-production primary endpoints; ATLAS did not significantly improve its prespecified peak-power endpoint; and the trained-runner trial did not significantly improve 3,000 m performance.
  sourceId: dao-2026-meta
- title: Published long-term safety evidence is limited
  description: The core randomized direct-UA studies evaluated exposures lasting weeks to approximately four months. They were generally well tolerated, but this evidence does not establish safety of indefinite use or safety across unstudied populations.
  sourceId: dao-2026-meta
- title: Pregnancy, lactation and pediatric evidence is insufficient
  description: The principal direct-UA efficacy trials examined adults and frequently excluded pregnancy; the available trial set does not establish safety or benefit in pregnancy, lactation, infants or children.
  sourceId: singh-2022-bioavailability
- title: Direct UA is not equivalent to ellagitannin-rich food or extract
  description: Gut microbial conversion of ellagitannin and ellagic-acid precursors varies substantially among individuals. Direct 500 mg UA produced far more consistent exposure than pomegranate juice in NOURISH, so precursor-food studies should not be assigned the pharmacokinetics of direct UA.
  sourceId: singh-2022-bioavailability
- title: Industry sponsorship and inventor interests are common in the foundational evidence
  description: ATLAS was funded by Amazentis SA and disclosed multiple authors as company employees plus board or scientific-advisory relationships. Other pivotal trials have similar commercial involvement. These disclosures warrant attention to independent replication but do not by themselves invalidate the findings.
  sourceId: singh-2022-atlas
- title: Biomarkers are not disease-treatment evidence
  description: Changes in acylcarnitines, mitochondrial proteins, inflammatory markers or immune-cell states provide biological evidence but do not demonstrate that UA treats sarcopenia, infection, cancer, neurodegeneration or other diseases.
  sourceId: denk-2025-immune
- title: United States GRAS status is not drug approval
  description: FDA's response to GRAS Notice 791 concerns specified food uses and states that FDA had no questions regarding the notifier's GRAS conclusion. It does not constitute FDA approval of UA as a drug or authorization of disease-treatment claims.
  sourceId: fda-grn-791
```

## Claims

```yaml
- id: claim-urolithin-a-mitophagy
  assertion: Urolithin A induces mitophagy in preclinical models and produces human molecular signatures compatible with mitochondrial quality-control pathway engagement.
  relation: supports-mechanism
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:mitophagy
      role: mechanism
  context: Direct UA exposure; strong preclinical evidence with supportive but indirect human tissue biomarkers.
  sourceIds:
    - ryu-2016-mitophagy
    - andreux-2019-first-human
    - singh-2022-atlas
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human studies measured molecular markers and omics signatures rather than a validated whole-body measure of mitophagy flux.
- id: claim-urolithin-a-muscle-endurance
  assertion: Direct oral urolithin A has produced positive signals in selected human muscle-endurance measurements.
  relation: associated-with-increased
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:muscle-endurance
      role: outcome
  context: Older adults and a small resistance-trained male cohort.
  sourceIds:
    - liu-2022-energize
    - zhao-2024-athletes
  conflictingSourceIds:
    - dao-2026-meta
  assessment: not-formally-assessed
  limitation: Endpoints and populations were heterogeneous, effects were often secondary outcomes, and the 2026 systematic review judged non-6MWT evidence exploratory rather than reproducibly established.
- id: claim-urolithin-a-exercise-performance
  assertion: Urolithin A has not demonstrated a consistent improvement in integrated exercise performance across randomized human trials.
  relation: mixed-effect-on
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:exercise
      role: outcome
  context: Middle-aged low-fitness adults, older adults and highly trained runners.
  sourceIds:
    - singh-2022-atlas
    - liu-2022-energize
    - whitfield-2025-runners
    - dao-2026-meta
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Selected secondary strength, endurance, perceived-exertion and biomarker endpoints improved, but key primary or integrated performance endpoints were frequently not significant.
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
- id: pubchem-urolithin-a
  title: Urolithin A
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5488186
  kind: chemical database record
  insight: Authoritative chemical identity record supporting PubChem CID, formula, molecular weight and canonical structure information.
  limitation: Chemical identity database; does not establish human efficacy or clinical safety.
  funding: Not assessed; government chemical database record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: ryu-2016-mitophagy
  title: Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents
  authors: Ryu D, et al.
  year: 2016
  url: https://www.nature.com/articles/nm.4132
  kind: preclinical mechanistic study
  insight: Established UA-induced mitophagy and functional effects in C. elegans and rodent muscle models.
  limitation: Predominantly preclinical evidence; lifespan and muscle effects cannot be directly extrapolated to humans.
  pmid: "27400265"
  doi: 10.1038/nm.4132
  funding: Funding details were not fully reassessed from the primary declaration during this run.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Primary conflict declaration was not fully reassessed during this run.
  conflictOfInterestStatus: not-assessed
- id: heilman-2017-safety
  title: Safety assessment of Urolithin A, a metabolite produced by the human gut microbiota upon dietary intake of plant derived ellagitannins and ellagic acid
  authors: Heilman J, Andreux P, Tran N, Rinsch C, Blanco-Bose W
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28757461/
  kind: preclinical toxicology and safety assessment
  insight: Genotoxicity and repeated-dose toxicology testing did not identify target-organ toxicity at the highest tested rat exposures and supported subsequent regulatory safety assessment.
  limitation: Animal toxicology cannot be converted into a human therapeutic dose or long-term human safety guarantee.
  pmid: "28757461"
  doi: 10.1016/j.fct.2017.07.050
  funding: The underlying data were associated with commercial development of UA; complete publication funding wording was not independently reassessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author affiliations include Amazentis-associated investigators; the exact primary conflict statement was not independently reassessed.
  conflictOfInterestStatus: not-assessed
- id: fda-grn-791
  title: GRN No. 791 — Urolithin A
  authors: U.S. Food and Drug Administration
  year: 2018
  url: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=791&order=DESC&search=13&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  kind: official regulatory record
  insight: FDA lists Amazentis SA as notifier and records a December 20, 2018 'FDA has no questions' response for specified food uses of urolithin A.
  limitation: GRAS notice status concerns specified food uses and is not FDA drug approval or proof of clinical efficacy.
  funding: Not applicable to a regulatory database record; classified as not-assessed under the article schema.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a regulatory database record; classified as not-assessed under the article schema.
  conflictOfInterestStatus: not-assessed
- id: andreux-2019-first-human
  title: The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans
  authors: Pénélope A Andreux, William Blanco-Bose, Dongryeol Ryu, Frédéric Burdet, Mark Ibberson, Patrick Aebischer, Johan Auwerx, Anurag Singh, Chris Rinsch
  year: 2019
  url: https://www.nature.com/articles/s42255-019-0073-4
  kind: first-in-human randomized phase I study
  insight: Single and repeated oral UA was bioavailable and had a favorable short-term safety profile; 500 and 1,000 mg/day for 28 days altered plasma acylcarnitines and skeletal-muscle mitochondrial gene expression.
  limitation: Small early-phase study emphasizing safety and molecular biomarkers rather than clinical efficacy; detailed analyte-specific PK values were in supplementary information not independently retrievable in this review.
  pmid: "32694802"
  doi: 10.1038/s42255-019-0073-4
  funding: Amazentis SA was the clinical-study sponsor; the publication also acknowledged grant support from Fondation Suisse de Recherche sur les Maladies Musculaires and Fondation Marcel Levaillant.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: A.S., P.A.A., W.B. and C.R. were Amazentis employees; P.A. and C.R. were board members; J.A. and P.A. were members of the Amazentis scientific advisory board.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nature.com/articles/s42255-019-0073-4
- id: singh-2022-bioavailability
  title: Direct supplementation with Urolithin A overcomes limitations of dietary exposure and gut microbiome variability in healthy adults to achieve consistent levels across the population
  authors: Anurag Singh, Davide D'Amico, Pénélope A Andreux, Gillian Dunngalvin, Timo Kern, William Blanco-Bose, Johan Auwerx, Patrick Aebischer, Chris Rinsch
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8821002/
  kind: randomized crossover bioavailability study
  insight: Among 100 healthy adults, direct 500 mg UA produced far greater and more consistent circulating exposure than pomegranate juice; only a subset efficiently generated UA from dietary precursors.
  limitation: Open-label acute bioavailability study; it establishes exposure differences, not comparative clinical benefit of UA versus pomegranate.
  pmid: "34117375"
  doi: 10.1038/s41430-021-00950-1
  funding: Amazentis SA was the registered lead sponsor of NCT04160312.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The publication disclosed Amazentis employment and leadership/advisory relationships among several authors.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8821002/
- id: liu-2022-energize
  title: "Effect of Urolithin A Supplementation on Muscle Endurance and Mitochondrial Health in Older Adults: A Randomized Clinical Trial"
  authors: Sophia Liu, Davide D'Amico, Eric Shankland, Saakshi Bhayana, Jose M Garcia, Patrick Aebischer, Chris Rinsch, Anurag Singh, David J Marcinek
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8777576/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day for four months improved selected muscle-endurance and plasma biomarker measures, while 6-minute-walk distance and maximal ATP-production primary outcomes were not significantly better than placebo.
  limitation: Only 66 participants; all participants were White and approximately three quarters were women; positive findings were predominantly secondary outcomes.
  pmid: "35050355"
  doi: 10.1001/jamanetworkopen.2021.44279
  funding: Research was supported by Amazentis SA; the funder was reported to have roles in study design/conduct, data handling and analysis/interpretation, manuscript activities and the decision to submit.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Disclosures included Amazentis employment, company leadership/shareholding, and UA-related issued or pending patents; outside relationships were also disclosed by some investigators.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8777576/
- id: singh-2022-atlas
  title: Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults
  authors: Anurag Singh, Davide D'Amico, Pénélope A Andreux, Andréane M Fouassier, William Blanco-Bose, Mal Evans, Patrick Aebischer, Johan Auwerx, Chris Rinsch
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Selected hamstring-strength measures improved with 500 and 1,000 mg/day UA, and muscle molecular analyses showed mitochondrial/mitophagy-associated changes; the prespecified peak-power endpoint was not significantly improved.
  limitation: Proof-of-concept trial with 88 randomized participants, multiple exploratory/secondary outcomes and some favorable changes driven partly by deterioration in placebo; several whole-body comparisons did not reach significance.
  pmid: "35584623"
  doi: 10.1016/j.xcrm.2022.100633
  funding: The study was funded by Amazentis SA.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Multiple authors were Amazentis employees; P.A. and C.R. were board members and J.A./P.A. had scientific-advisory relationships with the company.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/
- id: zhao-2024-athletes
  title: "Assessment of Urolithin A effects on muscle endurance, strength, inflammation, oxidative stress, and protein metabolism in male athletes with resistance training: an 8-week randomized, double-blind, placebo-controlled study"
  authors: Haotian Zhao, Hongkang Zhu, Hezhang Yun, Jingqi Liu, Ge Song, Jin Teng, Dixin Zou, Naiyan Lu, Chang Liu
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11536656/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: In 20 resistance-trained men, 1,000 mg/day improved MVIC and repetitions to failure versus placebo, whereas bench-press and squat 1RM changes were not significant.
  limitation: Very small single-sex study; multiple endpoints and no reported confidence intervals for the principal between-group findings.
  pmid: "39487653"
  doi: 10.1080/15502783.2024.2419388
  funding: Supported by the 14th Five-Year Education Plan of Jiangsu Province (C/2022/01/78).
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors explicitly reported no potential conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11536656/
- id: whitfield-2025-runners
  title: Evaluating the Impact of Urolithin A Supplementation on Running Performance, Recovery, and Mitochondrial Biomarkers in Highly Trained Male Distance Runners
  authors: Jamie Whitfield, Alannah K A McKay, Nicolin Tee, Rachel McCormick, Aimee Morabito, Leonidas G Karagounis, Andréane M Fouassier, Davide D'Amico, Anurag Singh, Louise M Burke, John A Hawley
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12628386/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day during a four-week altitude camp reduced selected muscle-damage/recovery signals and altered muscle proteomic pathways but did not significantly improve 3,000 m time-trial performance.
  limitation: Only 42 male elite runners; time-trial and biopsy analyses used still smaller subsets and concurrent altitude training strongly influenced physiological adaptation.
  pmid: "40839339"
  doi: 10.1007/s40279-025-02292-5
  funding: Research funding from Amazentis SA was disclosed to senior investigators.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The paper disclosed Amazentis employees and other company-related support or relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12628386/
- id: denk-2025-immune
  title: "Effect of the mitophagy inducer urolithin A on age-related immune decline: a randomized, placebo-controlled trial"
  authors: Dominic Denk, Anurag Singh, Herbert G Kasler, Davide D'Amico, Julia Rey, Lucía Alcober-Boquet, Johanna M Gorol, Christoph Steup, Ritesh Tiwari, Ryan Kwok, Rafael J Argüello, Julie Faitg, Kathrin Sprinzl, Stefan Zeuzem, Valentina Nekljudova, Sibylle Loibl, Eric Verdin, Chris Rinsch, Florian R Greten
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12618261/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day for four weeks altered CD8 T-cell phenotype and fatty-acid-oxidation capacity and changed additional immune-cell functional and transcriptional endpoints.
  limitation: Short 50-person trial focused on cellular immune phenotypes and ex-vivo functions rather than infection rates or other patient-centered clinical endpoints.
  pmid: "41174221"
  doi: 10.1038/s43587-025-00996-x
  funding: Amazentis SA funded the study and supplied the investigational product.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Disclosures included Amazentis employment and company leadership; additional consulting, travel and patent-related interests were reported by individual authors.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12618261/
- id: dao-2026-meta
  title: Effects of Urolithin A supplementation on muscle health outcomes in humans from randomized controlled trials
  authors: Tam Dao, Thanh T Nguyen, Karim Gariani, Hyun Jin Kim, Dongryeol Ryu
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13440176/
  kind: systematic review and meta-analysis
  insight: Five RCTs with 236 participants were identified. Pooled 6-minute-walk improvement was +17.03 m (95% CI -5.33 to 39.40) and statistically inconclusive; GRADE certainty was low, while other outcomes were too heterogeneous for quantitative pooling.
  limitation: Only two studies contributed to the pooled 6-minute-walk analysis and the included populations, outcomes and training states were heterogeneous.
  pmid: "42559151"
  doi: 10.3389/fnut.2026.1834344
  funding: The full funding declaration was not independently extracted during this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The full conflict-of-interest declaration was not independently extracted during this review.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC13440176/
- id: patent-us10028932
  title: Compositions and methods for improving mitochondrial function and treating neurodegenerative diseases and cognitive disorders
  authors: Amazentis SA (assignee); Christopher L. Rinsch et al. (inventors)
  year: 2018
  url: https://patents.google.com/patent/US10028932B2/en
  kind: patent
  insight: Amazentis-assigned patent family covering urolithin-related mitochondrial-function and therapeutic claims; representative of the commercial intellectual-property interests disclosed around UA research.
  limitation: A patent establishes claimed intellectual property, not clinical efficacy, regulatory approval or confirmation that every claim is valid in practice.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The patent itself documents inventor/assignee commercial interests rather than a journal conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: patent-us11020373
  title: Enhancing autophagy or increasing longevity by administration of urolithins or precursors thereof
  authors: Amazentis SA (assignee)
  year: 2021
  url: https://patents.google.com/patent/US11020373B2/en
  kind: patent
  insight: Amazentis patent covering claimed uses of urolithins or precursors in autophagy/longevity-related applications.
  limitation: Patent claims are not evidence that human longevity is increased.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Patent ownership represents a commercial interest but is not a clinical-study COI declaration.
  conflictOfInterestStatus: not-assessed
- id: patent-us10906883
  title: Process-scale synthesis of urolithin A
  authors: Amazentis SA (assignee); Wolfgang Skranc, George Yiannikouros, Alexander Trofimov, Zhixing Shan, Christopher Goss (inventors)
  year: 2021
  url: https://patents.google.com/patent/US10906883B2/en
  kind: patent
  insight: Patent covering scalable preparation of urolithin A, relevant to proprietary manufacturing and commercial supply rather than evidence of biological efficacy.
  limitation: Manufacturing intellectual property does not establish clinical effectiveness.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Patent ownership represents a commercial interest but is not a clinical-study COI declaration.
  conflictOfInterestStatus: not-assessed
- id: amazentis-manufacturer-2026
  title: Amazentis
  authors: Amazentis SA
  year: 2026
  url: https://www.amazentis.com/
  kind: manufacturer disclosure
  insight: Manufacturer source identifying Amazentis as the company behind proprietary Mitopure urolithin A and describing its commercial research and intellectual-property program.
  limitation: Commercial manufacturer source; marketing statements are not treated as independent efficacy evidence.
  funding: Corporate self-publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial manufacturer source with direct financial interest in Mitopure.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.amazentis.com/
- id: ec-urolithin-a-novel-food-application
  title: "Novel Food application: Urolithin A — Amazentis SA"
  authors: European Commission
  year: 2018
  url: https://food.ec.europa.eu/document/download/8f10d273-65cb-4450-85cb-4bf389d8670c_en?filename=novel-food_sum_ongoing-app_2018-0538.pdf
  kind: official regulatory application record
  insight: Official European Commission application summary documenting an Amazentis novel-food application for urolithin A submitted in 2018.
  limitation: An application record is not itself a final EU authorization; a final authorization was not established from the official material inspected in this research run.
  funding: Not applicable to regulatory record; classified as not-assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to regulatory record; classified as not-assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Use as a food ingredient under GRAS Notice GRN 791 for the specified notified food categories and use levels
  status: FDA record closed 2018-12-20 with 'FDA has no questions' regarding the notifier's GRAS conclusion; this is not FDA approval of urolithin A as a drug.
  sourceUrl: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=791&order=DESC&search=13&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  asOf: 2026-10-04
- jurisdiction: European Union
  activity: Novel-food application
  status: European Commission materials document an Amazentis urolithin A novel-food application submitted in 2018; final authorization status was not established from the official source set inspected in this research run.
  sourceUrl: https://food.ec.europa.eu/document/download/8f10d273-65cb-4450-85cb-4bf389d8670c_en?filename=novel-food_sum_ongoing-app_2018-0538.pdf
  asOf: 2026-10-04
```

