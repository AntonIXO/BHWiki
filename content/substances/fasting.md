---
slug: fasting
name: fasting as a protocol family
subtitle: Evidence-specific research record.
aliases:
  - fasting
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags:
  - behavioral-scheduling
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established for a fasting protocol; no exogenous-drug half-life
  low: null
  high: null
  context: Not established for a fasting protocol. Physiological substrate changes evolve with fasting duration and vary with prior intake, exercise, body composition, and health status (S1, S8, S14).
  sourceId: S1
  observationId: fasting-pk
kinetics:
  onset: Protocol-dependent; substrate switching evolves over hours to days
  peak: No universal fasting peak
  duration: Defined by fasting window or consecutive fasting days
  bioavailability: Not applicable
  metabolism: Glycogen use transitions toward lipolysis, gluconeogenesis, and ketone production
  sourceId: S1
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
x-order: 9007199254740991
---

## Summary

Fasting is a family of schedules that restrict food, caloric beverages, or energy intake for defined periods. Controlled human evidence supports modest weight and cardiometabolic changes, generally similar to continuous calorie restriction when energy intake is matched; autophagy-hour, detoxification, and lifespan claims remain unproven (S1, S2, S12, S15).

## Description

Time-restricted eating (TRE) uses a daily eating window, alternate-day fasting (ADF) alternates a fast day with an eating day, and prolonged fasting (PF) lasts at least four consecutive days under the international terminology consensus. Fasting-mimicking diets and modified fasting are distinct protocols with non-zero energy intake (S1).

## Evidence note

The strongest evidence comes from randomized TRE and ADF trials. A 2025 network meta-analysis included 99 trials and 6,582 adults; calorie-matched comparisons generally found similar outcomes to continuous energy restriction, while direct controlled evidence for multi-day water-only fasting remains sparse and mostly non-randomized (S2, S6, S8).

## Doses

```yaml
- label: Time-restricted eating
  amount: 14–20 hours fasting daily; 4–10 hours eating
  quantity: null
  quantityMax: null
  unit: hours
  ingredient: Fasting
  formulation: TRE protocol
  route: Dietary schedule
  frequency: Daily
  duration: Study-specific
  population: Adults in randomized trials
  purpose: Research protocol; not a personal recommendation.
  note: A common schedule is 16:8. Eating-window calories may be ad libitum, counted, or calorie-matched (S1, S3, S4).
  sourceCategory: research
  sourceId: S1
- label: Alternate-day fasting
  amount: 24-hour fast day alternating with 24-hour eating day
  quantity: null
  quantityMax: null
  unit: hours
  ingredient: Fasting
  formulation: ADF or modified ADF
  route: Dietary schedule
  frequency: Every other day
  duration: Study-specific
  population: Adults with overweight or obesity
  purpose: Research protocol; not a personal recommendation.
  note: Strict ADF uses 0 kcal on fast days; ADMF permits up to 25% of daily energy (often 500–800 kcal) (S1, S5, S6).
  sourceCategory: research
  sourceId: S5
- label: Prolonged fasting
  amount: At least 4 consecutive days
  quantity: 4
  quantityMax: null
  unit: days
  ingredient: Fasting
  formulation: Water-only or modified fluid-only protocol
  route: Dietary schedule
  frequency: Protocol-specific
  duration: Commonly 5–20 days in reviewed studies
  population: Adults in heterogeneous mostly uncontrolled studies
  purpose: Research protocol; not a personal recommendation.
  note: Water-only PF is distinct from fluid-only modified fasting and from fasting-mimicking diets; refeeding is part of many supervised programs (S1, S8, S13).
  sourceCategory: research
  sourceId: S8
- label: Fasting-mimicking diet
  amount: Up to approximately 1,000 kcal/day
  quantity: 1000
  quantityMax: null
  unit: kcal/day
  ingredient: Fasting
  formulation: FMD; non-zero energy protocol
  route: Dietary schedule
  frequency: 3–7 days per cycle
  duration: Study-specific
  population: Adults in FMD trials
  purpose: Research protocol; not a personal recommendation.
  note: FMD results cannot be used as controlled evidence for zero-calorie water-only PF (S1, S9).
  sourceCategory: research
  sourceId: S9
```

## Pharmacokinetics

```yaml
- id: fasting-pk
  analyte: Physiological substrate markers
  route: Dietary protocol
  formulation: TRE, ADF, and prolonged fasting
  population: Human fasting studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Not established for a fasting protocol; fasting is not an exogenous drug and has no single-compartment PK or clearance curve. Glycogen use, lipolysis, gluconeogenesis, and ketone production evolve with protocol duration and individual context; no validated 16-, 24-, or 72-hour autophagy threshold exists in humans (S1, S8, S12, S15).
  sourceId: S1
  modelEligible: false
```

## Modifiers

```yaml
- label: Achieved energy intake
  effect: Weight change tracks realized energy deficit more consistently than the fasting label.
  detail: In a 12-month no-calorie-counting trial, TRE reduced reported intake by about 425 kcal/day and continuous restriction by about 405 kcal/day.
  sourceId: S4
  observationId: fasting-pk
  factorType: other
  direction: variable
- label: Comparator design
  effect: Ad-libitum comparators combine schedule and energy effects; calorie-matched restriction isolates timing better.
  detail: Network and meta-analytic estimates were broadly similar between fasting and continuous restriction.
  sourceId: S2
  observationId: fasting-pk
  factorType: other
  direction: variable
- label: Timing
  effect: Early and late TRE may produce different metabolic responses.
  detail: Independent clock-time effects remain less certain than total energy intake effects.
  sourceId: S7
  observationId: fasting-pk
  factorType: other
  direction: variable
- label: Baseline risk and adherence
  effect: Obesity, diabetes, baseline blood pressure, and adherence alter observed outcomes.
  detail: Many trials enrolled adults with overweight or obesity, and adherence is heterogeneous rather than consistently superior to continuous restriction.
  sourceId: S2
  observationId: fasting-pk
  factorType: other
  direction: variable
- label: Lean-mass measurement
  effect: Glycogen and water shifts can change DXA-derived fat-free mass.
  detail: Prolonged-fasting reviews identify body-composition measurement as a major limitation.
  sourceId: S8
  observationId: fasting-pk
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: fasting-effect-hunger
  conceptId: perception
  name: Hunger and fatigue
  direction: Variable
  evidence: Subjective reports
  description: Hunger, fatigue, headache, dizziness, constipation, nausea, and diarrhea are reported, but randomized evidence has not shown a consistent overall adverse-event excess versus control.
  sourceId: S2
  population: Adults in randomized fasting trials
  exposure: TRE, ADF, or intermittent restriction
  instrument: Adverse-event reports
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: fasting-effect-ketosis
  conceptId: perception
  name: Ketosis during longer fasts
  direction: Increased
  evidence: Human research
  description: Longer fasts increase circulating ketones; this physiological shift is not evidence of superior clinical outcomes or longevity.
  sourceId: S8
  population: Adults in prolonged-fasting studies
  exposure: Multi-day fasting
  instrument: Blood ketone measurement
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: fasting-outcome-tre-weight
  conceptId: body-fat-mass
  name: 8-hour TRE plus calorie restriction
  direction: Decreased
  evidence: Human research
  description: In 139 adults with obesity over 12 months, 8-hour TRE plus calorie restriction lost 8.0 kg versus 6.3 kg with the same calorie restriction alone; the net difference was −1.8 kg (95% CI −4.0 to 0.4; P=.11).
  sourceId: S3
  population: 139 adults with obesity; 118 completers
  exposure: 08:00–16:00 eating plus 1,500–1,800 kcal/day for men or 1,200–1,500 for women
  instrument: Body weight and body composition
  magnitude: −1.8 kg, CI crosses zero
  reportType: measured-assessment
  conflictingSourceIds: []
  study:
    id: fasting-tre-cr
    design: 12-month randomized controlled trial
    comparator: Same calorie restriction without time window
    route: Dietary protocol
    formulation: 8-hour TRE
    assessmentTime: 12 months
    sampleSize: 139
    durationDays: 365
- id: fasting-outcome-adf
  conceptId: body-fat-mass
  name: Alternate-day fasting versus daily restriction
  direction: Decreased
  evidence: Human research
  description: In a one-year trial, ADF and daily calorie restriction each lost about 6.8% at month 6; at month 12 ADF lost 6.0% and daily restriction 5.3%, without practical superiority.
  sourceId: S5
  population: Adults with obesity
  exposure: ADF with about 25% of energy on fast days
  instrument: Body weight
  magnitude: No significant practical superiority
  reportType: measured-assessment
  conflictingSourceIds: []
- id: fasting-outcome-meta
  conceptId: body-fat-mass
  name: Intermittent protocols versus continuous restriction
  direction: Variable
  evidence: Human research
  description: Across 28 randomized trials, intermittent protocols versus continuous restriction produced weight −0.42 kg (95% CI −0.96 to 0.13), fat-free mass −0.20 kg (95% CI −0.39 to −0.01), and no overall glycemic, lipid, or blood-pressure advantage.
  sourceId: S6
  population: Adults in 28 randomized trials
  exposure: TRE, ADF, or 5:2 versus continuous restriction
  instrument: Weight, fat mass, fat-free mass, cardiometabolic markers
  magnitude: Small or null pooled differences
  reportType: measured-assessment
  conflictingSourceIds: []
- id: fasting-outcome-glycemia
  conceptId: fasting-glucose
  name: Glycemia
  direction: Decreased
  evidence: Human research
  description: TRE can modestly lower fasting glucose versus non-TRE controls, while HbA1c and glycemic outcomes generally do not differ consistently from continuous restriction.
  sourceId: S2
  population: Adults in randomized fasting trials
  exposure: Protocol-specific fasting schedules
  instrument: Fasting glucose and HbA1c
  magnitude: Comparator-dependent
  reportType: measured-assessment
  conflictingSourceIds: []
- id: fasting-outcome-bp
  conceptId: blood-pressure
  name: Blood pressure
  direction: Variable
  evidence: Human research
  description: Blood pressure may fall with weight loss or fasting, but a consistent advantage over continuous restriction has not been established.
  sourceId: S7
  population: Adults in TRE trials and reviews
  exposure: Protocol-specific fasting schedules
  instrument: Systolic and diastolic blood pressure
  magnitude: No consistent pooled advantage
  reportType: measured-assessment
  conflictingSourceIds: []
- id: fasting-outcome-pf
  conceptId: body-fat-mass
  name: Prolonged water-only fasting
  direction: Variable
  evidence: Limited research
  description: Direct comparative evidence for multi-day water-only fasting remains sparse; available studies are predominantly uncontrolled, medically supervised, or heterogeneous in refeeding and diet composition.
  sourceId: S8
  population: Adults in heterogeneous prolonged-fasting studies
  exposure: 4+ consecutive days, often 5–20 days
  instrument: Weight and body composition
  magnitude: Comparative effect not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Energy balance
  description: Restricting eating opportunities can reduce total energy intake; fasting and continuous restriction can produce similar weight loss when energy intake is similar.
  sourceId: S2
- title: Metabolic switch
  description: Fasting shifts substrate use from glycogen and glucose toward lipolysis, gluconeogenesis, and ketone bodies, with associated nutrient-sensing changes.
  sourceId: S1
- title: Circadian alignment
  description: Earlier eating windows may align food intake with circadian metabolic rhythms, but independent benefits beyond energy reduction are mixed.
  sourceId: S7
- title: Autophagy
  description: Autophagy is biologically plausible and supported in model organisms, but human tissue flux and an hour threshold are not validated.
  sourceId: S12
- title: Longevity
  description: No human fasting trial has demonstrated lifespan extension or mortality reduction attributable to fasting or autophagy.
  sourceId: S15
```

## Cautions

```yaml
- title: Diabetes and glucose-lowering therapy
  description: Fasting increases hypoglycemia risk with insulin, sulfonylureas, and meglitinides; excessive medication reduction can instead produce hyperglycemia or ketoacidosis.
  sourceId: S11
- title: SGLT2 inhibitors and diuretics
  description: Reduced food and fluid intake can compound diuresis, dehydration, ketosis, and euglycemic ketoacidosis risk.
  sourceId: S11
- title: Prolonged fasting and refeeding
  description: Rapid nutritional replenishment after prolonged fasting or severe undernutrition can produce refeeding syndrome involving electrolyte and metabolic disturbances.
  sourceId: S8
- title: Pregnancy, minors, frailty, low weight, and eating-disorder history
  description: These populations are underrepresented or excluded from adult weight-loss trials, so efficacy and safety findings do not generalize.
  sourceId: S2
- title: Dry fasting
  description: Dry fasting excludes water as well as food and is physiologically distinct from water-only fasting; dehydration risk is not comparable.
  sourceId: S1
```

## Claims

```yaml
- id: fasting-claim-superior
  assertion: Fasting is superior to calorie restriction for weight loss
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Not established; ADF showed a small network-meta-analysis signal while TRE and pooled intermittent protocols were broadly similar to continuous restriction.
  sourceIds:
    - S2
    - S3
    - S6
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Comparator energy intake and adherence confound schedule-specific claims.
- id: fasting-claim-calorie-free
  assertion: TRE causes weight loss without reducing calories
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Misleading; no-calorie-counting trials recorded substantial energy-intake reductions.
  sourceIds:
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A schedule can facilitate a deficit but does not demonstrate calorie-independent weight loss.
- id: fasting-claim-muscle
  assertion: Fasting preserves muscle
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Unproven and protocol-dependent; pooled intermittent protocols showed a small fat-free-mass reduction versus continuous restriction.
  sourceIds:
    - S6
    - S8
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Water and glycogen shifts complicate lean-mass measurement.
- id: fasting-claim-autophagy
  assertion: Autophagy begins at exactly 16, 24, or 72 hours
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Unproven in humans; no validated fasting-hour threshold is established.
  sourceIds:
    - S12
    - S15
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human autophagic flux is difficult to measure.
- id: fasting-claim-lifespan
  assertion: Fasting extends human lifespan
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Unproven; human trials lack lifespan or mortality endpoints.
  sourceIds:
    - S1
    - S15
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Organismal longevity findings are predominantly preclinical.
- id: fasting-claim-detox
  assertion: Fasting detoxes or cures disease
  relation: evidence-assessment
  participants:
    - entityId: substance:fasting
      role: subject
    - entityId: tag:behavioral-scheduling
      role: context
  context: Unsupported by the cited controlled human evidence.
  sourceIds:
    - S2
    - S8
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trials primarily assess weight, glycemia, blood pressure, lipids, and body composition.
```

## Interactions

```yaml
- id: fasting-interaction-insulin
  name: Insulin
  otherSlug: null
  summary: Continuing exogenous insulin while food intake falls can increase hypoglycemia risk; inadequate insulin coverage can instead increase hyperglycemia or ketoacidosis risk.
  sourceId: S11
  context: Documented pharmacodynamic concern
- id: fasting-interaction-secretagogues
  name: Sulfonylureas and meglitinides
  otherSlug: null
  summary: These insulin-secretagogue classes can cause fasting-related hypoglycemia because insulin release may continue despite reduced food intake.
  sourceId: S11
  context: Documented pharmacodynamic concern
- id: fasting-interaction-sglt2
  name: SGLT2 inhibitors
  otherSlug: null
  summary: Reduced intake or prolonged fasting can interact with diuretic and ketone-related effects, increasing dehydration and ketoacidosis concern.
  sourceId: S11
  context: Documented risk context
- id: fasting-interaction-diuretics
  name: Diuretics
  otherSlug: null
  summary: Fluid restriction or reduced fluid obtained from food can compound diuresis and volume depletion.
  sourceId: S11
  context: Pharmacodynamic plausibility
```

## Experience links

```yaml
[]
```

## References

```yaml
- title: International consensus on fasting terminology
  year: 2024
  url: https://edoc.mdc-berlin.de/id/eprint/24572/1/24572oa.pdf
  kind: expert Delphi consensus
  insight: Defines fasting, TRE, ADF, ADMF, short-term fasting, prolonged fasting, fluid-only fasting, and FMD.
  limitation: Terminology consensus; not an efficacy or safety trial.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosures are reported in the article; complete individual assessment not performed here.
  conflictOfInterestStatus: declared
  id: S1
  authors: Daniela A. Koppold, Carolin Breinlinger, Etienne Hanslian, Christian Kessler, et al.; international fasting terminology consensus panel; Charité—Universitätsmedizin Berlin
  disclosureUrl: https://edoc.mdc-berlin.de/id/eprint/24572/1/24572oa.pdf
- title: "Intermittent fasting strategies and their effects on body weight and other cardiometabolic risk factors: systematic review and network meta-analysis of randomised clinical trials"
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12175170/
  kind: systematic review and network meta-analysis of randomized trials
  insight: Includes 99 trials and 6,582 adults; finds broadly similar fasting and CER outcomes with a small ADF weight signal.
  limitation: Network comparisons, heterogeneous protocols, limited long-term trials, and variable adherence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S2
  authors: Zhila Semnani-Azad et al.; European Association for the Study of Diabetes and Diabetes and Nutrition Study Group
- title: Calorie Restriction with or without Time-Restricted Eating in Weight Loss
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35443107/
  kind: 12-month randomized controlled trial
  insight: 8-hour TRE plus CR was not significantly better than the same CR without time restriction.
  limitation: 139 adults with obesity, unblinded, 118 completers, and both groups received calorie restriction.
  funding: National Key Research and Development Project 2018YFA0800404 and others
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S3
  authors: Deying Liu et al.; Nanfang Hospital, Southern Medical University, and Tulane University
- title: "Time-Restricted Eating Without Calorie Counting for Weight Loss in a Racially Diverse Population: A Randomized Controlled Trial"
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37364268/
  kind: 12-month randomized controlled trial
  insight: TRE without calorie counting reduced reported intake and weight versus control but was not better than 25% CER.
  limitation: 90 participants, 77 completers, unblinded, and not powered for large between-diet differences.
  funding: U.S. National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S4
  authors: University of Illinois Chicago trial team
- title: "Effect of Alternate-Day Fasting on Weight Loss, Weight Maintenance, and Cardioprotection Among Metabolically Healthy Obese Adults: A Randomized Clinical Trial"
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28459931/
  kind: 12-month randomized controlled trial
  insight: ADF and daily CR produced similar one-year weight loss.
  limitation: Single-center study in metabolically healthy adults with obesity; adherence and generalizability limit interpretation.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S5
  authors: John F. Trepanowski et al.; University of Illinois Chicago
- title: "Effects of Intermittent Energy Restriction Compared with Those of Continuous Energy Restriction on Body Composition and Cardiometabolic Risk Markers: A Systematic Review and Meta-Analysis of Randomized Controlled Trials in Adults"
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/37827491/
  kind: systematic review and meta-analysis
  insight: Across 28 trials, intermittent protocols were broadly similar to CER for weight and cardiometabolic outcomes.
  limitation: Trials lasted 2–52 weeks; energy intake was not always matched; fat-free-mass differences were small.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S6
  authors: Maite M. Schroor et al.; Maastricht University
- title: "Efficacy and safety of prolonged water fasting: a narrative review of human trials"
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11494232/
  kind: narrative review of human trials
  insight: Summarizes prolonged water-only fasting studies, metabolic changes, safety signals, and body-composition limitations.
  limitation: The underlying studies are few, heterogeneous, and predominantly uncontrolled.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S8
  authors: Mark Ezpeleta, Sofia Cienfuegos, Shuhao Lin, Vasiliki Pavlou et al.; University of Illinois Chicago
- title: "Effect of Fasting-Mimicking Diet or Continuous Energy Restriction on Weight Loss, Body Composition, and Appetite-Regulating Hormones Among Metabolically Healthy Women with Obesity: a Randomized Controlled, Parallel Trial"
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33420673/
  kind: randomized controlled trial
  insight: A low-energy FMD was not significantly better than CER for weight loss over two months.
  limitation: Small study of 60 women; FMD is not zero-calorie water-only PF.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S9
  authors: Mehdi Sadeghian et al.; Ahvaz Jundishapur University of Medical Sciences
- title: "Intermittent fasting and health outcomes: an umbrella review of systematic reviews and meta-analyses of randomised controlled trials"
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38500840/
  kind: umbrella review
  insight: Summarizes 23 meta-analyses and finds possible benefits for waist circumference, fat mass, fasting insulin, lipids, and blood pressure, with weaker SBP effects than CER.
  limitation: Nested evidence, heterogeneous fasting definitions, and multiple comparisons reduce certainty for individual outcomes.
  funding: National Key Research and Development Program of China; Natural Science Foundation of China; Shengjing Hospital and 345 Talent Project
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The authors declare no competing interests.
  conflictOfInterestStatus: none-declared
  id: S10
  authors: Ming-Li Sun et al.; international academic collaborators
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/38500840/
- title: "5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2025"
  year: 2025
  url: https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/5-Facilitating-Positive-Health-Behaviors-and-Well
  kind: clinical practice guideline
  insight: Identifies fasting-related hypoglycemia risk with insulin and secretagogues and dehydration or ketoacidosis concerns with selected regimens.
  limitation: Focused on diabetes management, especially religious fasting; not a general fasting-efficacy review.
  funding: American Diabetes Association
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Individual author disclosures are provided in the guideline materials; not-assessed here.
  conflictOfInterestStatus: not-assessed
  id: S11
  authors: American Diabetes Association Professional Practice Committee
- title: "Calorie Restriction and Fasting Diets: What Do We Know?"
  year: 2018
  url: https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know
  kind: government evidence brief
  insight: States that firm conclusions about fasting benefits for human health and aging were not available.
  limitation: Public evidence brief rather than a systematic review or controlled trial.
  funding: U.S. National Institute on Aging
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S12
  authors: National Institute on Aging, National Institutes of Health
- title: "Refeeding syndrome: what it is, and how to prevent and treat it"
  year: 2008
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2440847/
  kind: clinical narrative review
  insight: Describes metabolic complications associated with rapid refeeding after prolonged fasting or severe undernutrition.
  limitation: Not a randomized fasting trial; much evidence concerns hospitalized or malnourished patients.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S13
  authors: H. M. Mehanna, J. Moledina, J. Travis
- title: "Flipping the Metabolic Switch: Understanding and Applying the Health Benefits of Fasting"
  year: 2018
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5783752/
  kind: mechanistic review
  insight: Explains substrate switching, ketogenesis, nutrient sensing, and candidate fasting pathways.
  limitation: Mechanistic and preclinical evidence is substantially stronger than clinical outcome evidence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S14
  authors: Sarah D. Anton et al.
- title: "The ups and downs of caloric restriction and fasting: from molecular effects to clinical application"
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8749464/
  kind: review
  insight: Distinguishes fasting from CR and discusses the limits of translating molecular and animal findings to humans.
  limitation: Narrative review; not a new controlled clinical dataset.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S15
  authors: S. J. Hofer, D. Carmona-Gutierrez, M. I. Mueller, F. Madeo
- title: "Adverse events profile associated with intermittent fasting in adults with overweight or obesity: a systematic review and meta-analysis of randomized controlled trials"
  year: 2024
  url: https://link.springer.com/article/10.1186/s12937-024-00975-9
  kind: systematic review and meta-analysis of adverse events
  insight: Across 15 RCTs, fatigue, headache, dizziness, constipation, and diarrhea were common, without a significant overall increase versus control.
  limitation: Adverse-event definitions were inconsistent, trials were heterogeneous, and certainty was low for most symptoms.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: S16
  authors: Nutrition Journal systematic-review team
- id: S7
  title: "Efficacy and safety of prolonged water fasting: a narrative review of human trials"
  authors: Mark Ezpeleta, Sofia Cienfuegos, Shuhao Lin, Vasiliki Pavlou et al.; University of Illinois Chicago
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11494232/
  kind: narrative review of human trials
  insight: Summarizes prolonged water-only fasting studies, metabolic changes, safety signals, and body-composition limitations.
  limitation: The underlying studies are few, heterogeneous, and predominantly uncontrolled.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: General
  activity: Dietary protocol terminology
  status: This article describes research protocols and does not establish a legal classification or recommendation; rules for fasting-related products and clinical services vary by jurisdiction.
  sourceUrl: https://edoc.mdc-berlin.de/id/eprint/24572/1/24572oa.pdf
  asOf: 2026-10-10
```
