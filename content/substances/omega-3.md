---
slug: omega-3
name: Omega-3 long-chain fatty acids — BHWiki deep-research report
subtitle: Evidence-specific research record.
aliases:
- omega 3
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags: []
accent: '#888888'
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: 89 hours for EPA in VASCEPA label
  low: 89
  high: 89
  context: Product-specific EPA plasma elimination half-life; not a universal omega-3 estimate.
  sourceId: S40
  observationId: omega3-icosapent
kinetics:
  onset: Not established
  peak: About 5 hours for EPA in VASCEPA label
  duration: Not established
  bioavailability: Formulation- and food-dependent
  metabolism: Icosapent ethyl is de-esterified to EPA; other formulations differ
  sourceId: S40
x-shape:
- slug
- name
- subtitle
- summary
- description
- evidenceNote
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
- externalWikiLinks
x-order: 9007199254740991
---

## Summary

Long-chain omega-3 evidence depends on molecule, formulation, dose, population, and endpoint. Prescription icosapent ethyl reduced cardiovascular events in REDUCE-IT, whereas STRENGTH and several primary-prevention or post-MI trials were null. High-dose prescription omega-3 can increase atrial-fibrillation risk; fish intake, OTC fish oil, and prescription products are not interchangeable. [S1][S6][S9][S15][S18][S52]

## Description

EPA and DHA occur as free fatty acids, triglycerides, re-esterified triglycerides, or ethyl esters. Absorption differs with food and formulation; prescription labels specify ingredients and dosing while FDA does not preapprove dietary supplements for efficacy. [S39][S47][S49]

## Evidence note

PubMed abstracts retrieved for all 13 linked PMIDs. PMC full text was retrieved for PMIDs 26812512 (PMC12877669), 21784145 (PMC3191260), 18620024 (PMC3208643), and 21471279 (PMC3095504); other records had no PMC match. Existing product- and formulation-specific dose, outcome, caution, and PK records are retained.

## Doses

```yaml
- label: REDUCE-IT
  amount: 4 g/day
  quantity: 4
  quantityMax: null
  unit: g
  ingredient: Icosapent ethyl (EPA ethyl ester)
  formulation: Icosapent ethyl (EPA ethyl ester)
  route: oral
  frequency: 2 g twice daily
  duration: Median 4.9 years
  population: Statin-treated adults with elevated triglycerides and cardiovascular risk
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  foodRelation: with-food
  note: Event-reduction trial; product-specific prescription exposure.
  sourceId: S1
- label: STRENGTH
  amount: 4 g/day
  quantity: 4
  quantityMax: null
  unit: g
  ingredient: Omega-3 carboxylic acids (EPA/DHA)
  formulation: Omega-3 carboxylic acids (EPA/DHA)
  route: oral
  frequency: daily
  duration: Trial follow-up
  population: High-risk adults with dyslipidemia
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  foodRelation: with-food
  note: Trial stopped for futility; no cardiovascular benefit.
  sourceId: S6
- label: VITAL
  amount: 1 g/day
  quantity: 1
  quantityMax: null
  unit: g
  ingredient: EPA+DHA fish-oil formulation
  formulation: EPA+DHA fish-oil formulation
  route: oral
  frequency: daily
  duration: Median 5.3 years
  population: 25,871 generally healthy adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  foodRelation: with-food
  note: Primary prevention trial; major cardiovascular outcome null.
  sourceId: S9
- label: ECLIPSE formulation study
  amount: 4 g single dose
  quantity: 4
  quantityMax: null
  unit: g
  ingredient: Free-fatty-acid omega-3 versus ethyl esters
  formulation: Free-fatty-acid omega-3 versus ethyl esters
  route: oral
  frequency: single dose
  duration: 24-hour PK assessment
  population: 54 overweight adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  foodRelation: with-food
  note: Formulation and fat-content altered EPA+DHA exposure.
  sourceId: S39
- label: Prescription triglyceride treatment
  amount: 4 g/day
  quantity: 4
  quantityMax: null
  unit: g
  ingredient: Icosapent ethyl or omega-3 ethyl esters
  formulation: Icosapent ethyl or omega-3 ethyl esters
  route: oral
  frequency: daily
  duration: Label-defined
  population: Patients with hypertriglyceridemia
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  foodRelation: with-food
  note: Prescription labels specify administration with food; OTC products are not equivalent.
  sourceId: S40
- label: PubMed study exposure (26890759)
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-26890759
- label: PubMed study exposure (26812512)
  amount: 2.4 g
  quantity: 2.4
  quantityMax: null
  unit: g
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-26812512
- label: PubMed study exposure (23515006)
  amount: 1.16 g
  quantity: 1.16
  quantityMax: null
  unit: g
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-23515006
- label: PubMed study exposure (22250656)
  amount: 480 mg
  quantity: 480
  quantityMax: null
  unit: mg
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: assigned to active (n = 20, 5 men
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-22250656
- label: PubMed study exposure (21864417)
  amount: 1 g
  quantity: 1
  quantityMax: null
  unit: g
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-21864417
- label: PubMed study exposure (21784145)
  amount: 2.5 g
  quantity: 2.5
  quantityMax: null
  unit: g
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-21784145
- label: PubMed study exposure (9637947)
  amount: 1.25 g
  quantity: 1.25
  quantityMax: null
  unit: g
  ingredient: Omega-3 long-chain fatty acids — BHWiki deep-research report
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-9637947
```

## Pharmacokinetics

```yaml
- id: omega3-icosapent
  analyte: EPA
  route: oral
  formulation: Icosapent ethyl
  population: Adults receiving VASCEPA
  endpoint: elimination-half-life
  statistic: approximate
  value: 89
  low: null
  high: null
  unit: hours
  context: U.S. label reports EPA plasma elimination half-life about 89 hours and peak plasma concentration around 5 hours; label-specific, not a universal omega-3 half-life.
  sourceId: S40
  modelEligible: true
- id: omega3-formulation
  analyte: EPA+DHA
  route: oral
  formulation: Free fatty acid, triglyceride, re-esterified triglyceride, or ethyl ester
  population: Human formulation studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Acute exposure differs by formulation and fat content; a common terminal half-life was not established.
  sourceId: S39
  modelEligible: false
```

## Modifiers

```yaml
- label: Molecule and formulation
  effect: Variable
  detail: Icosapent ethyl, EPA/DHA mixtures, free fatty acids, triglycerides, and ethyl esters have different exposure and outcome evidence.
  sourceId: S39
  observationId: omega3-icosapent
  factorType: other
  direction: variable
- label: Food intake
  effect: Variable
  detail: Prescription products are labeled with food; the ECLIPSE study found larger formulation differences under low-fat conditions.
  sourceId: S39
  observationId: omega3-icosapent
  factorType: other
  direction: variable
- label: Baseline cardiovascular risk
  effect: Variable
  detail: Event effects differed between statin-treated hypertriglyceridemia and primary-prevention or post-MI populations.
  sourceId: S1
  observationId: omega3-icosapent
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Exercise soreness and recovery
  direction: Variable
  evidence: Human research
  description: A 2026 review reported less DOMS and CK at peak impairment but judged the literature equivocal and methodologically limited.
  sourceId: S35
  population: Exercise studies in healthy adults
  exposure: Varied EPA/DHA exposures
  instrument: Soreness, CK, swelling, strength
  magnitude: null
- conceptId: perception
  name: Inflammatory biomarkers
  direction: Variable
  evidence: Human research
  description: EPA and DHA produced broadly similar CRP, IL-6, TNF-α, and adiponectin effects in a biomarker meta-analysis; biomarkers are not clinical outcomes.
  sourceId: S59
  population: Adults in biomarker trials
  exposure: EPA or DHA supplementation
  instrument: CRP, IL-6, TNF-α, adiponectin
  magnitude: null
- conceptId: perception
  name: Cognition and dementia
  direction: Variable
  evidence: Human research
  description: DHA trials and reviews did not show consistent slowing of cognitive decline; subgroup signals were small and exploratory.
  sourceId: S28
  population: Adults with or at risk for cognitive decline
  exposure: DHA or EPA/DHA supplementation
  instrument: ADAS-cog and cognitive batteries
  magnitude: null
- conceptId: perception
  name: Atrial fibrillation
  direction: Increased
  evidence: Human research
  description: High-dose prescription omega-3 communication and meta-analysis identify a dose-dependent AF risk context in established cardiovascular disease.
  sourceId: S52
  population: Patients with cardiovascular disease
  exposure: High-dose prescription omega-3
  instrument: Atrial-fibrillation events
  magnitude: null
- id: reddit-omega-3-anxiety-21784145
  conceptId: anxiety
  name: Anxiety
  direction: Decreased
  evidence: Human research
  description: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  sourceId: reddit-pmid-21784145
  population: Population described in the PubMed abstract
  exposure: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- conceptId: attention
  name: REDUCE-IT cardiovascular events
  direction: Increased
  evidence: Human research
  description: Icosapent ethyl 4 g/day reduced the primary composite event rate versus placebo in statin-treated hypertriglyceridemia; Amarin sponsored the trial.
  sourceId: S1
  population: High-risk statin-treated adults
  exposure: 4 g/day icosapent ethyl
  instrument: Cardiovascular composite events
  magnitude: null
- conceptId: attention
  name: STRENGTH cardiovascular events
  direction: Variable
  evidence: Human research
  description: The 4 g/day EPA/DHA carboxylic-acid trial was stopped for futility and did not reduce major cardiovascular events.
  sourceId: S6
  population: High-risk dyslipidemia population
  exposure: 4 g/day EPA/DHA carboxylic acids
  instrument: MACE composite
  magnitude: null
- conceptId: attention
  name: Primary prevention and post-MI outcomes
  direction: Variable
  evidence: Human research
  description: VITAL, ASCEND, and OMEMI did not show a consistent major cardiovascular benefit; JELIS and RESPECT-EPA were product- and population-specific.
  sourceId: S9
  population: Generally healthy, diabetic, or post-MI adults
  exposure: Approximately 1–1.8 g/day EPA/DHA or EPA
  instrument: MACE and coronary outcomes
  magnitude: null
- conceptId: stress-response
  name: Bleeding events
  direction: Variable
  evidence: Human research
  description: A 2024 meta-analysis found no clear overall major-bleeding increase, but high-dose therapy and anticoagulant context require product-specific assessment.
  sourceId: S53
  population: Patients in omega-3 trials
  exposure: Varied EPA/DHA doses
  instrument: Major bleeding
  magnitude: null
- id: reddit-omega-3-cognitive-performance-26890759
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: As the process of Alzheimer's disease (AD) begins years before disease onset, searching for prevention strategies is of major medical and economic importance.
  sourceId: reddit-pmid-26890759
  population: Population described in the PubMed abstract
  exposure: As the process of Alzheimer's disease (AD) begins years before disease onset, searching for prevention strategies is of major medical and economic importance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-26890759
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: As the process of Alzheimer's disease (AD) begins years before disease onset, searching for prevention strategies is of major medical and economic importance.
  sourceId: reddit-pmid-26890759
  population: Population described in the PubMed abstract
  exposure: As the process of Alzheimer's disease (AD) begins years before disease onset, searching for prevention strategies is of major medical and economic importance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-26812512
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  sourceId: reddit-pmid-26812512
  population: Population described in the PubMed abstract
  exposure: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-26812512
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  sourceId: reddit-pmid-26812512
  population: Population described in the PubMed abstract
  exposure: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-attention-22715808
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: The grey matter of the brain contains high levels of the essential nutrient DHA.
  sourceId: reddit-pmid-22715808
  population: Population described in the PubMed abstract
  exposure: The grey matter of the brain contains high levels of the essential nutrient DHA.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-attention-23515006
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  sourceId: reddit-pmid-23515006
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-23515006
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  sourceId: reddit-pmid-23515006
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-23515006
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  sourceId: reddit-pmid-23515006
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-22250656
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  sourceId: reddit-pmid-22250656
  population: assigned to active (n = 20, 5 men
  exposure: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-22250656
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  sourceId: reddit-pmid-22250656
  population: assigned to active (n = 20, 5 men
  exposure: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-21864417
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: The n-3 PUFA are a unique class of fatty acids that cannot be manufactured by the body, and must be acquired via dietary sources.
  sourceId: reddit-pmid-21864417
  population: Population described in the PubMed abstract
  exposure: The n-3 PUFA are a unique class of fatty acids that cannot be manufactured by the body, and must be acquired via dietary sources.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-fatigue-severity-21864417
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Variable
  evidence: Human research
  description: The n-3 PUFA are a unique class of fatty acids that cannot be manufactured by the body, and must be acquired via dietary sources.
  sourceId: reddit-pmid-21864417
  population: Population described in the PubMed abstract
  exposure: The n-3 PUFA are a unique class of fatty acids that cannot be manufactured by the body, and must be acquired via dietary sources.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-depression-severity-21784145
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Human research
  description: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  sourceId: reddit-pmid-21784145
  population: Population described in the PubMed abstract
  exposure: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-anxiety-symptom-severity-21784145
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Decreased
  evidence: Human research
  description: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  sourceId: reddit-pmid-21784145
  population: Population described in the PubMed abstract
  exposure: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-18620024
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: Omega-3 fatty acids (i.e.
  sourceId: reddit-pmid-18620024
  population: Population described in the PubMed abstract
  exposure: Omega-3 fatty acids (i.e.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-18620024
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: Omega-3 fatty acids (i.e.
  sourceId: reddit-pmid-18620024
  population: Population described in the PubMed abstract
  exposure: Omega-3 fatty acids (i.e.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-22005286
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 'UNLABELLED: With increasing awareness of the effects of nutrition on physical and mental health, researchers have begun to further investigate the benefits of omega-3 polyunsaturated fatty acids (n-3 PUFA) on health and the brain; however, these benefits remain unclear across different age groups.'
  sourceId: reddit-pmid-22005286
  population: Population described in the PubMed abstract
  exposure: 'UNLABELLED: With increasing awareness of the effects of nutrition on physical and mental health, researchers have begun to further investigate the benefits of omega-3 polyunsaturated fatty acids (n-3 PUFA) on health and the brain; however, these benefits remain unclear across different age groups.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-attention-9637947
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: A diet including 2-3 portions of fatty fish per week, which corresponds to the intake of 1.25 g EPA (20:5n-3) + DHA (22:6n-3) per day, has been officially recommended on the basis of epidemiological findings showing a beneficial role of these n-3 long-chain PUFA in the prevention of cardiovascular and inflammatory diseases.
  sourceId: reddit-pmid-9637947
  population: Population described in the PubMed abstract
  exposure: A diet including 2-3 portions of fatty fish per week, which corresponds to the intake of 1.25 g EPA (20:5n-3) + DHA (22:6n-3) per day, has been officially recommended on the basis of epidemiological findings showing a beneficial role of these n-3 long-chain PUFA in the prevention of cardiovascular and inflammatory diseases.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-9637947
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: A diet including 2-3 portions of fatty fish per week, which corresponds to the intake of 1.25 g EPA (20:5n-3) + DHA (22:6n-3) per day, has been officially recommended on the basis of epidemiological findings showing a beneficial role of these n-3 long-chain PUFA in the prevention of cardiovascular and inflammatory diseases.
  sourceId: reddit-pmid-9637947
  population: Population described in the PubMed abstract
  exposure: A diet including 2-3 portions of fatty fish per week, which corresponds to the intake of 1.25 g EPA (20:5n-3) + DHA (22:6n-3) per day, has been officially recommended on the basis of epidemiological findings showing a beneficial role of these n-3 long-chain PUFA in the prevention of cardiovascular and inflammatory diseases.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-23265497
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: Fish oil during early postnatal period may modulate the impact of oxidative stress in the developing brain and thus improve memory and cognitive behaviour.
  sourceId: reddit-pmid-23265497
  population: Population described in the PubMed abstract
  exposure: Fish oil during early postnatal period may modulate the impact of oxidative stress in the developing brain and thus improve memory and cognitive behaviour.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-23265497
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: Fish oil during early postnatal period may modulate the impact of oxidative stress in the developing brain and thus improve memory and cognitive behaviour.
  sourceId: reddit-pmid-23265497
  population: Population described in the PubMed abstract
  exposure: Fish oil during early postnatal period may modulate the impact of oxidative stress in the developing brain and thus improve memory and cognitive behaviour.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-depression-severity-21471279
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Limited research
  description: 'BACKGROUND: The associations between different sources of dietary n-3 (omega-3) and n-6 (omega-6) fatty acids and the risk of depression have not been prospectively studied.'
  sourceId: reddit-pmid-21471279
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: The associations between different sources of dietary n-3 (omega-3) and n-6 (omega-6) fatty acids and the risk of depression have not been prospectively studied.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-attention-22305186
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Limited research
  description: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  sourceId: reddit-pmid-22305186
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-cognitive-performance-22305186
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Limited research
  description: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  sourceId: reddit-pmid-22305186
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-omega-3-episodic-memory-22305186
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  sourceId: reddit-pmid-22305186
  population: Population described in the PubMed abstract
  exposure: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: EPA/DHA membrane and mediator biology
  description: EPA and DHA alter membrane fatty acids and lipid mediator substrates; mechanism does not predict a universal clinical outcome across formulations.
  sourceId: S32
- title: Triglyceride lowering
  description: Prescription omega-3 products lower triglycerides at pharmacologic doses, while event reduction depends on molecule, comparator, and population.
  sourceId: S1
- title: Source-specific finding from PMID 18620024
  description: Omega-3 fatty acids (i.e.
  sourceId: reddit-pmid-18620024
```

## Cautions

```yaml
- title: Atrial fibrillation
  description: High-dose prescription omega-3 products have a dose-dependent AF risk signal in established cardiovascular disease.
  sourceId: S52
- title: Bleeding and anticoagulants
  description: Overall major-bleeding risk was not clearly increased in a 2024 meta-analysis, but clinical context and concomitant antithrombotics matter.
  sourceId: S53
- title: Prescription versus supplement
  description: REDUCE-IT results cannot be transferred to arbitrary OTC fish oil; ingredients, dose, purity, and regulatory controls differ.
  sourceId: S49
- title: Pregnancy and infant outcomes
  description: Prenatal DHA trials have mixed endpoints and do not support an unrestricted recommendation across products or populations.
  sourceId: S41
- title: Source-specific finding from PMID 26812512
  description: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  sourceId: reddit-pmid-26812512
- title: Source-specific finding from PMID 23515006
  description: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  sourceId: reddit-pmid-23515006
- title: Source-specific finding from PMID 22250656
  description: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  sourceId: reddit-pmid-22250656
- title: Source-specific finding from PMID 21471279
  description: 'BACKGROUND: The associations between different sources of dietary n-3 (omega-3) and n-6 (omega-6) fatty acids and the risk of depression have not been prospectively studied.'
  sourceId: reddit-pmid-21471279
- title: Source-specific finding from PMID 22305186
  description: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  sourceId: reddit-pmid-22305186
```

## Claims

```yaml
- id: omega3-prevents-cardiovascular-events
  assertion: Omega-3 prevents cardiovascular events
  relation: evidence-boundary
  participants:
  - entityId: substance:omega-3
    role: intervention
  - entityId: tag:major-cardiovascular-events
    role: reported-outcome
  context: Event reduction is established only for specific prescription products and enrolled populations, notably REDUCE-IT.
  sourceIds:
  - S1
  - S6
  - S9
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulation, dose, comparator, and baseline risk limit generalization.
- id: omega3-improves-cognition
  assertion: Omega-3 prevents dementia or cognitive decline
  relation: evidence-boundary
  participants:
  - entityId: substance:omega-3
    role: intervention
  - entityId: tag:memory
    role: reported-outcome
  context: Large or systematic evidence is null or inconsistent, with small subgroup signals.
  sourceIds:
  - S28
  - S31
  - S33
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cognition studies differ in disease stage, dose, and formulation.
- id: omega3-safe-high-dose
  assertion: High-dose omega-3 is risk-free
  relation: evidence-boundary
  participants:
  - entityId: substance:omega-3
    role: intervention
  - entityId: tag:major-cardiovascular-events
    role: reported-outcome
  context: High-dose products have AF and bleeding safety contexts.
  sourceIds:
  - S52
  - S53
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Prescription labels and regulator communications identify product-specific risks.
- id: reddit-claim-omega-3-26890759-0
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-26890759
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-26812512-1
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-26812512
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22715808-2
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:attention
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22715808
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-23515006-3
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23515006
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22250656-4
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22250656
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-21864417-5
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported fatigue severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:fatigue-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-21864417
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-21784145-6
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-21784145
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-21784145-7
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety symptom severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety-symptom-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-21784145
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-18620024-8
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-18620024
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-18620024-9
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-18620024
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22005286-10
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22005286
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22005286-11
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22005286
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-9637947-12
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-9637947
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-9637947-13
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-9637947
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-23265497-14
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23265497
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-23265497-15
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23265497
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-21471279-16
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-21471279
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-21471279-17
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported depression severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:depression-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-21471279
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22305186-18
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22305186
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-omega-3-22305186-19
  assertion: Omega-3 long-chain fatty acids — BHWiki deep-research report is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:omega-3
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22305186
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
```

## Interactions

```yaml
- id: omega3-anticoagulants
  name: Anticoagulants and antiplatelets
  otherSlug: null
  summary: Bleeding evidence is broadly reassuring at common doses but remains product- and dose-specific with concurrent antithrombotics.
  sourceId: S53
  context: Bleeding meta-analysis
- id: omega3-af
  name: Atrial-fibrillation risk context
  otherSlug: null
  summary: High-dose prescription omega-3 can increase AF risk in established cardiovascular disease; this is not a simple drug-pair interaction.
  sourceId: S52
  context: EMA safety communication
- id: omega3-food
  name: Food and formulation
  otherSlug: null
  summary: Absorption depends on meal fat and formulation; labels for VASCEPA and LOVAZA specify administration with food.
  sourceId: S40
  context: Prescription labels
```

## Experience links

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Omega_3
  title: Wikipedia
```

## References

```yaml
- id: S1
  title: Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia
  authors: Bhatt DL, Steg PG, Miller M, et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30415628/
  kind: Randomized cardiovascular-outcomes trial
  insight: Icosapent ethyl 4 g/day reduced major cardiovascular events in statin-treated hypertriglyceridemia.
  limitation: Product-specific trial with Amarin sponsorship; not OTC fish-oil evidence.
  funding: Amarin Pharma.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosures require article-level review.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: 'Direct source link: https://doi.org/10.1056/NEJMoa1812792'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1056/NEJMoa1812792
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S3
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT01492361'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01492361
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S4
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/42070013/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42070013/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S5
  title: 'Direct source link: https://doi.org/10.1007/s40256-026-00798-5'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1007/s40256-026-00798-5
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S6
  title: 'Effect of Omega-3 Fatty Acids on Cardiovascular Outcomes: STRENGTH'
  authors: Nicholls SJ, Lincoff AM, Garcia M, et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/33190147/
  kind: Randomized cardiovascular-outcomes trial
  insight: 4 g/day EPA/DHA carboxylic acids did not reduce cardiovascular events and the trial stopped for futility.
  limitation: Industry-sponsored trial; formulation differs from icosapent ethyl.
  funding: AstraZeneca.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Detailed author disclosures not re-extracted.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: 'Direct source link: https://doi.org/10.1001/jama.2020.22258'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/jama.2020.22258
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S8
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT02104817'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT02104817
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S9
  title: Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer
  authors: Manson JE, Cook NR, Lee IM, et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30415637/
  kind: Randomized primary-prevention trial
  insight: VITAL found no significant major cardiovascular benefit from 1 g/day fish oil in generally healthy adults.
  limitation: Primary-prevention population and combined EPA/DHA dose.
  funding: NIH/public.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully re-extracted.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: 'Direct source link: https://doi.org/10.1056/NEJMoa1811403'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1056/NEJMoa1811403
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S11
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT01169259'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01169259
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus
  authors: ASCEND Study Collaborative Group
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30146932/
  kind: Randomized trial
  insight: 1 g/day n-3 supplementation did not significantly reduce serious vascular events in diabetes.
  limitation: Diabetes population and modest dose.
  funding: British Heart Foundation and collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Detailed statement not re-extracted.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: 'Direct source link: https://doi.org/10.1056/NEJMoa1804989'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1056/NEJMoa1804989
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S14
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT00135226'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00135226
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S15
  title: Effects of n-3 Fatty Acid Supplements in Elderly Patients After Myocardial Infarction
  authors: Kalstad AA, Myhre PL, Laake K, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33191772/
  kind: Randomized post-MI trial
  insight: OMEMI did not show a significant cardiovascular benefit from n-3 supplementation after myocardial infarction.
  limitation: Post-MI population and dose/formulation-specific result.
  funding: Non-U.S.-government support indexed; exact funder not extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Incomplete/unknown.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: 'Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.120.052209'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1161/CIRCULATIONAHA.120.052209
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S17
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT01841944'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01841944
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S18
  title: Effects of eicosapentaenoic acid on major coronary events in hypercholesterolaemic patients
  authors: Yokoyama M, Origasa H, Matsuzaki M, et al.
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17398308/
  kind: Randomized cardiovascular trial
  insight: JELIS evaluated 1.8 g/day EPA added to statin therapy and reported a coronary-event reduction in its enrolled population.
  limitation: Open-label Japanese trial with product- and population-specific applicability.
  funding: Non-U.S.-government support indexed; exact funding not re-extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S19
  title: 'Direct source link: https://doi.org/10.1016/S0140-6736(07'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/S0140-6736(07
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S20
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT00231738'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00231738
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S21
  title: Effect of Eicosapentaenoic Acid on Cardiovascular Events in Patients With Coronary Artery Disease
  authors: Miyauchi K, et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38873793/
  kind: Randomized cardiovascular trial
  insight: RESPECT-EPA primary result was borderline and requires product/population-specific interpretation.
  limitation: Trial-specific formulation and endpoint; funding/COI incompletely extracted.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S22
  title: 'Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.123.065520'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1161/CIRCULATIONAHA.123.065520
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S23
  title: 'Direct source link: https://www.umin.ac.jp/ctr/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.umin.ac.jp/ctr/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S24
  title: 'Effect of omega-3 fatty acids on cardiovascular outcomes: systematic review and meta-analysis'
  authors: Khan SU, Lone AN, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34505026/
  kind: Systematic review and meta-analysis
  insight: Pooled cardiovascular effects varied by formulation and endpoint.
  limitation: Heterogeneous trials and products.
  funding: None reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosures not re-extracted.
  conflictOfInterestStatus: not-assessed
- id: S25
  title: 'Direct source link: https://doi.org/10.1016/j.eclinm.2021.100997'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.eclinm.2021.100997
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S26
  title: Effect of Long-Term Marine Omega-3 Fatty Acid Supplementation on the Risk of Atrial Fibrillation
  authors: Gencer B, Djousse L, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34612056/
  kind: Meta-analysis
  insight: Long-term marine omega-3 exposure was associated with an atrial-fibrillation risk signal in some dose contexts.
  limitation: Dose and population heterogeneity.
  funding: Public/NIH support indexed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S27
  title: 'Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.121.055654'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1161/CIRCULATIONAHA.121.055654
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S28
  title: Effect of Docosahexaenoic Acid Supplementation on Cognitive Decline in Alzheimer Disease
  authors: Quinn JF, Raman R, Thomas RG, et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/21045096/
  kind: Randomized Alzheimer-disease trial
  insight: DHA supplementation did not slow cognitive or functional decline overall.
  limitation: Disease-stage and subgroup limits; no general prevention inference.
  funding: Not re-extracted.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S29
  title: 'Direct source link: https://doi.org/10.1001/jama.2010.1510'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/jama.2010.1510
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S30
  title: 'Direct source link: https://clinicaltrials.gov/study/NCT00440050'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00440050
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S31
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/17030655/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/17030655/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S32
  title: 'Direct source link: https://doi.org/10.1001/archneur.63.10.1402'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/archneur.63.10.1402
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S33
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/22696350/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/22696350/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S34
  title: 'Direct source link: https://doi.org/10.1002/14651858.CD005379.pub3'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1002/14651858.CD005379.pub3
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S35
  title: Long-chain n-3 polyunsaturated fatty acids and exercise-induced muscle pain, function, and damage
  authors: Yaghoobi E, et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42124047/
  kind: Systematic review and meta-analysis
  insight: Possible reductions in DOMS and CK were reported, but overall evidence was equivocal and methodologically limited.
  limitation: Small heterogeneous exercise trials.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S36
  title: 'Direct source link: https://doi.org/10.3390/nu18091447'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.3390/nu18091447
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S37
  title: 'PROVIGIL: prescribing information'
  authors: Teva Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b8d1c32-dac9-50e6-e063-6394a90aa5a5
  kind: Official prescribing label
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S38
  title: 'PROVIGIL: prescribing information'
  authors: Teva Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b8d1c32-dac9-50e6-e063-6394a90aa5a5
  kind: Official prescribing label
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S39
  title: 'Comparison of omega-3 fatty acid formulations: ECLIPSE study'
  authors: Davidson MH, Johnson J, Rooney MW, et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23312053/
  kind: Human formulation bioavailability study
  insight: Free-fatty-acid and ethyl-ester exposure differed by meal fat and formulation.
  limitation: Acute bioavailability does not establish chronic clinical superiority.
  funding: Product-development context; exact funder unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S40
  title: 'Direct source link: https://doi.org/10.1016/j.jacl.2012.01.002'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.jacl.2012.01.002
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S41
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/20959577/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/20959577/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S42
  title: 'Direct source link: https://doi.org/10.1001/jama.2010.1507'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/jama.2010.1507
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S43
  title: 'Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S44
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/31509674/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/31509674/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S45
  title: 'Direct source link: https://doi.org/10.1056/NEJMoa1816832'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1056/NEJMoa1816832
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S46
  title: 'Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S47
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/20638827/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/20638827/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S48
  title: 'Direct source link: https://doi.org/10.1016/j.plefa.2010.06.007'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.plefa.2010.06.007
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S49
  title: 'FDA 101: Dietary Supplements'
  authors: U.S. Food and Drug Administration
  year: 2025
  url: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  kind: official U.S. regulatory information
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S50
  title: 'Direct source link: https://www.ema.europa.eu/en/medicines/human/referrals/omega-3-acid-ethyl-esters-containing-medicinal-products-oral-use-secondary-prevention-after-myocardial-infarction'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.ema.europa.eu/en/medicines/human/referrals/omega-3-acid-ethyl-esters-containing-medicinal-products-oral-use-secondary-prevention-after-myocardial-infarction
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S51
  title: 'Direct source link: https://www.fda.gov/food/consumers/advice-about-eating-fish'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.fda.gov/food/consumers/advice-about-eating-fish
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S52
  title: 'Direct source link: https://www.ema.europa.eu/en/documents/dhpc/direct-healthcare-professional-communication-dhpc-omega-3-acid-ethyl-ester-medicines-dose-dependent-increased-risk-atrial-fibrillation-patients-established-cardiovascular-diseases-or-cardiovascular_en.pdf'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.ema.europa.eu/en/documents/dhpc/direct-healthcare-professional-communication-dhpc-omega-3-acid-ethyl-ester-medicines-dose-dependent-increased-risk-atrial-fibrillation-patients-established-cardiovascular-diseases-or-cardiovascular_en.pdf
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S53
  title: 'Omega-3 fatty acids and bleeding risk: systematic review and meta-analysis'
  authors: Javaid M, et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38742535/
  kind: Systematic review and meta-analysis
  insight: No clear overall major-bleeding increase was found across omega-3 trials.
  limitation: Dose, anticoagulant, and product heterogeneity.
  funding: Incomplete/unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Incomplete/unknown.
  conflictOfInterestStatus: not-assessed
- id: S54
  title: 'Direct source link: https://doi.org/10.1161/JAHA.123.032390'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1161/JAHA.123.032390
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S55
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/34817851/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/34817851/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S56
  title: 'Direct source link: https://doi.org/10.1002/14651858.CD004692.pub5'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1002/14651858.CD004692.pub5
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S57
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/30480773/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/30480773/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S58
  title: 'Direct source link: https://doi.org/10.1002/14651858.CD003402.pub3'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1002/14651858.CD003402.pub3
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S59
  title: Effects of EPA and DHA on inflammatory biomarkers
  authors: Vors C, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/32790827/
  kind: Systematic review and meta-analysis
  insight: EPA and DHA had broadly similar effects on CRP, IL-6, TNF-alpha, and adiponectin biomarkers.
  limitation: Biomarkers are not clinical outcomes; funding/COI incomplete.
  funding: Non-U.S.-government support indexed; exact funder unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Incomplete.
  conflictOfInterestStatus: not-assessed
- id: S60
  title: 'Direct source link: https://doi.org/10.1093/advances/nmaa086'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1093/advances/nmaa086
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S61
  title: 'Direct source link: https://pubmed.ncbi.nlm.nih.gov/35108375/'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/35108375/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S62
  title: 'Direct source link: https://doi.org/10.1093/advances/nmac006'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1093/advances/nmac006
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-omega-3-link-1
  title: 'Direct source link: https://doi.org/10.1016/S0140-6736(07)60527-3'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/S0140-6736(07)60527-3
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-omega-3-link-1-dup2
  title: 'Direct source link: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c1a2828-1583-4414-ab22-a60480e8e508'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c1a2828-1583-4414-ab22-a60480e8e508
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-omega-3-link-2
  title: 'Direct source link: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21cfa4ce-0b05-47ed-b268-339eb1b83b75'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21cfa4ce-0b05-47ed-b268-339eb1b83b75
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-omega-3-link-3
  title: 'Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=363687'
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=363687
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26890759
  title: Impact of Omega-3 Fatty Acid Supplementation on Memory Functions in Healthy Older Adults.
  authors: Nadine Külzow, A Veronica Witte, Lucia Kerti, Ulrike Grittner, Jan Philipp Schuchardt, Andreas Hahn, Agnes Flöel
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26890759/
  kind: PubMed publication
  insight: As the process of Alzheimer's disease (AD) begins years before disease onset, searching for prevention strategies is of major medical and economic importance.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26890759'
  doi: 10.3233/JAD-150886
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26812512
  title: Fish Oil Supplementation Increases Event-Related Posterior Cingulate Activation in Older Adults with Subjective Memory Impairment.
  authors: E L Boespflug, R K McNamara, J C Eliassen, M D Schidler, R Krikorian
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26812512/
  kind: PubMed publication
  insight: 'OBJECTIVES: To determine the effects of long-chain omega-3 (LCn-3) fatty acids found in fish oil, including eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), on cortical blood oxygen level-dependent (BOLD) activity during a working memory task in older adults with subjective memory impairment.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26812512'
  pmcid: PMC12877669
  doi: 10.1007/s12603-015-0609-6
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22715808
  title: Supplementation with DHA and the psychological functioning of young adults.
  authors: D Benton, R T Donohoe, D E Clayton, S J Long
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22715808/
  kind: PubMed publication
  insight: The grey matter of the brain contains high levels of the essential nutrient DHA.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22715808'
  doi: 10.1017/S0007114512000566
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23515006
  title: 'DHA supplementation improved both memory and reaction time in healthy young adults: a randomized controlled trial.'
  authors: Welma Stonehouse, Cathryn A Conlon, John Podd, Stephen R Hill, Anne M Minihane, Crystal Haskell, David Kennedy
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23515006/
  kind: PubMed publication
  insight: 'BACKGROUND: Docosahexaenoic acid (DHA) is important for brain function, and its status is dependent on dietary intakes.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23515006'
  doi: 10.3945/ajcn.112.053371
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22250656
  title: Omega-3 polyunsaturated fatty acids and cognition in a college-aged population.
  authors: Justin E Karr, Tyler R Grindstaff, Joel E Alexander
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22250656/
  kind: PubMed publication
  insight: The cognitive influences of omega-3 polyunsaturated fatty acids (n-3 PUFA) remain unclear throughout the life span.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22250656'
  doi: 10.1037/a0026945
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-0d936111b963
  title: 'Cognitive and physiological effects of Omega-3

    polyunsaturated fatty acid supplementation in healthy

    subjects'
  authors: Not established
  year: 2026
  url: https://www.tohtoritolonen.fi/files/pdf/fontani_2005.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21864417
  title: No effect of 12 weeks' supplementation with 1 g DHA-rich or EPA-rich fish oil on cognitive function or mood in healthy young adults aged 18-35 years.
  authors: Philippa A Jackson, Michael E Deary, Jonathon L Reay, Andrew B Scholey, David O Kennedy
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/21864417/
  kind: PubMed publication
  insight: The n-3 PUFA are a unique class of fatty acids that cannot be manufactured by the body, and must be acquired via dietary sources.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '21864417'
  doi: 10.1017/S000711451100403X
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21784145
  title: 'Omega-3 supplementation lowers inflammation and anxiety in medical students: a randomized controlled trial.'
  authors: Janice K Kiecolt-Glaser, Martha A Belury, Rebecca Andridge, William B Malarkey, Ronald Glaser
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21784145/
  kind: PubMed publication
  insight: Observational studies have linked lower omega-3 (n-3) polyunsaturated fatty acids (PUFAs) and higher omega-6 (n-6) PUFAs with inflammation and depression, but randomized controlled trial (RCT) data have been mixed.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '21784145'
  pmcid: PMC3191260
  doi: 10.1016/j.bbi.2011.07.229
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-c0660f401d81
  title: Cognitive and mood effects of 8 weeks’ supplementation with 400 mg or 1000 mg of the omega-3 essential fatty acid docosahexaenoic acid (DHA) in healthy children aged 10–12 years
  authors: Not established
  year: 2026
  url: https://www.maneyonline.com/doi/abs/10.1179/147683009X388887
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-12c4384632bc
  title: Fish oils for the prevention of dementia in older people (No benefit)
  authors: Not established
  year: 2026
  url: https://summaries.cochrane.org/CD005379/fish-oils-for-the-prevention-of-dementia-in-older-people
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18620024
  title: Docosahexaenoic acid dietary supplementation enhances the effects of exercise on synaptic plasticity and cognition.
  authors: A Wu, Z Ying, F Gomez-Pinilla
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18620024/
  kind: PubMed publication
  insight: Omega-3 fatty acids (i.e.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18620024'
  pmcid: PMC3208643
  doi: 10.1016/j.neuroscience.2008.05.061
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22005286
  title: 'Omega-3 polyunsaturated fatty acids and cognition throughout the lifespan: a review.'
  authors: Justin E Karr, Joel E Alexander, Robert G Winningham
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22005286/
  kind: PubMed publication
  insight: 'UNLABELLED: With increasing awareness of the effects of nutrition on physical and mental health, researchers have begun to further investigate the benefits of omega-3 polyunsaturated fatty acids (n-3 PUFA) on health and the brain; however, these benefits remain unclear across different age groups.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22005286'
  doi: 10.1179/1476830511Y.0000000012
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-5a404160a250
  title: 'Dietary intake and status of n−3 polyunsaturated fatty acids in a population of fish-eating and non-fish-eating meat-eaters, vegetarians, and vegans and the precursor-product ratio of α-linolenic acid to long-chain n−3 polyunsaturated fatty acids: results from the EPIC-Norfolk cohort'
  authors: Not established
  year: 2026
  url: https://ajcn.nutrition.org/content/92/5/1040.full
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9637947
  title: 'Can adults adequately convert alpha-linolenic acid (18:3n-3) to eicosapentaenoic acid (20:5n-3) and docosahexaenoic acid (22:6n-3)?'
  authors: H Gerster
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9637947/
  kind: PubMed publication
  insight: A diet including 2-3 portions of fatty fish per week, which corresponds to the intake of 1.25 g EPA (20:5n-3) + DHA (22:6n-3) per day, has been officially recommended on the basis of epidemiological findings showing a beneficial role of these n-3 long-chain PUFA in the prevention of cardiovascular and inflammatory diseases.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '9637947'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23265497
  title: Docosahexaenoic acid and phosphatidylserine improves the antioxidant activities in vitro and in vivo and cognitive functions of the developing brain.
  authors: Hso-Chi Chaung, Chin-Dong Chang, Pi-Hang Chen, Chia-Jung Chang, Shyh-Hwa Liu, Chih-Cheng Chen
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23265497/
  kind: PubMed publication
  insight: Fish oil during early postnatal period may modulate the impact of oxidative stress in the developing brain and thus improve memory and cognitive behaviour.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23265497'
  doi: 10.1016/j.foodchem.2012.10.082
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-92792c4c4c3b
  title: Oxidative stability of flaxseed lipids during baking
  authors: Not established
  year: 2026
  url: https://link.springer.com/article/10.1007/BF02540591
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21471279
  title: 'Dietary intake of n-3 and n-6 fatty acids and the risk of clinical depression in women: a 10-y prospective follow-up study.'
  authors: Michel Lucas, Fariba Mirzaei, Eilis J O'Reilly, An Pan, Walter C Willett, Ichiro Kawachi, Karestan Koenen, Alberto Ascherio
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21471279/
  kind: PubMed publication
  insight: 'BACKGROUND: The associations between different sources of dietary n-3 (omega-3) and n-6 (omega-6) fatty acids and the risk of depression have not been prospectively studied.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '21471279'
  pmcid: PMC3095504
  doi: 10.3945/ajcn.111.011817
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22305186
  title: 'Effects of ω-3 fatty acids on cognitive performance: a meta-analysis.'
  authors: Graham Mazereeuw, Krista L Lanctôt, Sarah A Chau, Walter Swardfager, Nathan Herrmann
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22305186/
  kind: PubMed publication
  insight: 'BACKGROUND: Higher intake of omega-3 fatty acids (n-3 FAs) is associated with a reduced risk of Alzheimer''s disease (AD) and milder forms of cognitive impairment (e.g.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22305186'
  doi: 10.1016/j.neurobiolaging.2011.12.014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Icosapent ethyl prescription use
  status: FDA-approved prescription product with product-specific indication and labeling; REDUCE-IT evidence does not approve OTC fish oil.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c1a2828-1583-4414-ab22-a60480e8e508
  asOf: 2024-01-01
- jurisdiction: United States
  activity: Dietary omega-3 supplements
  status: FDA does not preapprove dietary supplements for safety or effectiveness before marketing.
  sourceUrl: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  asOf: 2024-01-01
```
