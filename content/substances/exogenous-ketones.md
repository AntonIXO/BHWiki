---
slug: exogenous-ketones
name: exogenous ketones
subtitle: Evidence-specific research record.
aliases:
  - exogenous ketones
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags:
  - energy-buffer
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established; ketone-formulation kinetics are product-specific
  low: null
  high: null
  context: "No universal terminal half-life was established. Acute human studies instead report formulation-specific D-/R-βHB concentration curves: monoester and salt differ in peak, stereochemistry, food effects, and duration (EK-01, EK-12, EK-17)."
  sourceId: EK-01
  observationId: exogenous-ketones-pk
kinetics:
  onset: Formulation-specific; direct monoester rises faster than the studied salt
  peak: D-/R-βHB peaks within minutes to hours in acute trials
  duration: Most studied D-/R-βHB curves approached baseline within about 2–4 hours; L-/S-βHB persisted longer after racemic salts
  bioavailability: Formulation-dependent
  metabolism: D-/R-βHB is oxidized; R-1,3-butanediol precursors are converted to βHB
  sourceId: EK-01
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

Exogenous ketones are oral β-hydroxybutyrate salts, monoesters, or precursors that produce transient ketonemia without requiring fasting. Acute glucose lowering is more reproducible than performance or cognition benefits, and higher blood βHB is a biomarker rather than proof of durable clinical benefit (EK-01, EK-03).

## Description

Ketone salts bind βHB to sodium, potassium, calcium, or magnesium and may contain both D-/R- and L-/S-βHB. Monoesters and R-1,3-butanediol precursors have different absorption and metabolic paths, so results do not transfer automatically across products (EK-01, EK-02, EK-13).

## Evidence note

The evidence is mainly acute crossover work in healthy adults, with small short trials in obesity or type 2 diabetes. Product, stereochemistry, cation burden, carbohydrate co-ingestion, and assay choice materially affect interpretation. The Avela study had industry funding and disclosed paid consultancy; the GI study had an HVMN affiliation (EK-17, EK-19).

## Doses

```yaml
- label: Ketone monoester, acute range
  amount: 0.3–0.75 g/kg body mass (including 25 g, 0.5 g/kg, 590–750 mg/kg protocols)
  quantity: null
  quantityMax: null
  unit: g/kg
  ingredient: Exogenous ketones
  formulation: Ketone monoester
  route: Oral
  frequency: Single administration in most trials
  duration: Acute assessment
  population: Healthy adults or athletes
  purpose: Research exposure; not a dosing recommendation.
  note: Lower-dose product studies also used 5 or 10 g R-βHB (EK-07, EK-12).
  sourceCategory: research
  sourceId: EK-07
- label: Pre-meal monoester
  amount: 12 g βHB
  quantity: 12
  quantityMax: null
  unit: g
  ingredient: Exogenous ketones
  formulation: Ketone monoester
  route: Oral
  frequency: 15 minutes before each meal, three times daily
  duration: 14 days
  population: Adults with obesity
  purpose: Research exposure; not a dosing recommendation.
  note: The trial assessed glucose and vascular surrogate outcomes (EK-14).
  sourceCategory: research
  sourceId: EK-14
- label: Type 2 diabetes mixed-meal challenge
  amount: 0.5 g/kg body mass
  quantity: 0.5
  quantityMax: null
  unit: g/kg
  ingredient: Exogenous ketones
  formulation: Ketone monoester
  route: Oral
  frequency: Single dose before a mixed-meal tolerance test
  duration: Acute postprandial assessment
  population: 10 adults with type 2 diabetes
  purpose: Research exposure; not a dosing recommendation.
  note: The study lowered postprandial glucose exposure; it was not a diabetes treatment trial (EK-16).
  sourceCategory: research
  sourceId: EK-16
- label: Ketone salts
  amount: Approximately 12 or 24 g βHB in matched PK experiments
  quantity: null
  quantityMax: null
  unit: g βHB
  ingredient: Exogenous ketones
  formulation: Sodium/potassium ketone salt; cation ratio varies
  route: Oral
  frequency: Single matched exposure
  duration: Acute PK assessment
  population: Healthy adults
  purpose: Research exposure; not a dosing recommendation.
  note: The βHB-to-cation ratio and D/L composition are product-specific (EK-01).
  sourceCategory: research
  sourceId: EK-01
- label: R-1,3-butanediol precursor
  amount: 11.5 g at 0, 30, and 60 minutes; 34.5 g total
  quantity: 11.5
  quantityMax: null
  unit: g per serving
  ingredient: Exogenous ketones
  formulation: Avela R-1,3-butanediol
  route: Oral
  frequency: Three servings in one day
  duration: Acute 300-minute assessment
  population: 26 adults
  purpose: Research exposure; not a dosing recommendation.
  note: Open-label, home-based product PK/tolerability study with Genomatica funding (EK-17).
  sourceCategory: research
  sourceId: EK-17
```

## Pharmacokinetics

```yaml
- id: exogenous-ketones-pk
  analyte: D-/R- and L-/S-βHB
  route: Oral
  formulation: Ketone monoester, ketone salts, and R-1,3-butanediol products
  population: Healthy adults in acute PK studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: A universal terminal half-life is not established. In one matched study D-βHB Cmax was about 2.8 mmol/L with monoester versus 1.0 mmol/L with salt and generally approached baseline within 3–4 hours; L-βHB remained elevated for more than 8 hours. Food reduced monoester D-βHB Cmax by about 33%; Avela produced slower, delayed βHB exposure (EK-01, EK-17).
  sourceId: EK-01
  modelEligible: false
```

## Modifiers

```yaml
- label: Fed versus fasted state
  effect: Food lowers and may delay D-βHB exposure after monoester ingestion.
  detail: A meal reduced monoester D-βHB Cmax from about 3.3 to 2.2 mmol/L in the cited crossover study.
  sourceId: EK-01
  observationId: exogenous-ketones-pk
  factorType: other
  direction: variable
- label: Formulation and stereochemistry
  effect: Cation ratio, D/L composition, ester hydrolysis, and precursor metabolism alter Cmax, Tmax, duration, taste, and tolerability.
  detail: Results from monoesters, salts, free D-βHB, and R-1,3-butanediol are not interchangeable.
  sourceId: EK-01
  observationId: exogenous-ketones-pk
  factorType: other
  direction: variable
- label: Carbohydrate co-ingestion
  effect: Performance findings vary when ketones are combined with carbohydrate.
  detail: Monoester without carbohydrate improved running economy in one study, while other studies found benefit with combined carbohydrate; null and negative exercise trials also exist.
  sourceId: EK-07
  observationId: exogenous-ketones-pk
  factorType: other
  direction: variable
- label: Exercise and metabolic status
  effect: Exercise, body size, sex, obesity, impaired glucose tolerance, and type 2 diabetes can change βHB kinetics or tolerability.
  detail: Small product-specific studies do not support an individualized prediction model.
  sourceId: EK-16
  observationId: exogenous-ketones-pk
  factorType: other
  direction: variable
- label: Assay choice
  effect: Blood βHB, urine ketones, and breath acetone can imply different exposure magnitude and duration.
  detail: Common handheld meters quantify D-/R-βHB and can underrepresent total exposure after racemic salts.
  sourceId: EK-01
  observationId: exogenous-ketones-pk
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: exogenous-ketones-effect-tolerability
  conceptId: perception
  name: Taste and gastrointestinal tolerability
  direction: Variable
  evidence: Subjective reports
  description: Taste, aftertaste, appetite change, nausea, bloating, headache, reflux, and diarrhea vary by compound, dose, timing, and exercise.
  sourceId: EK-12
  population: Healthy adults in crossover tolerability studies
  exposure: 5–10 g KME or KME/salt products
  instrument: Participant symptom report
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-effect-exercise-sensation
  conceptId: perception
  name: Exercise sensations
  direction: Variable
  evidence: Subjective reports
  description: Acid-base and gastrointestinal effects can alter perceived exertion or comfort in some exercise protocols; this does not establish performance benefit.
  sourceId: EK-05
  population: Endurance-trained adults and athletes
  exposure: Acute ketone ester or diester before exercise
  instrument: RPE and symptom reports
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-effect-appetite
  conceptId: perception
  name: Appetite response
  direction: Variable
  evidence: Subjective reports
  description: Appetite reports differ across products and doses; short tolerability trials cannot establish sustained appetite control or weight loss.
  sourceId: EK-12
  population: 14 healthy adults
  exposure: 5 or 10 g KME/KMES
  instrument: Appetite ratings
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: exogenous-ketones-outcome-glucose
  conceptId: glycemic-control
  name: Acute blood glucose
  direction: Decreased
  evidence: Human research
  description: A meta-analysis found mean glucose lower by about 0.54 mmol/L, with larger pooled lowering for monoesters than salts; durable diabetes outcomes were not tested.
  sourceId: EK-03
  population: Human acute exogenous-ketone trials
  exposure: Formulation-specific oral ketone exposure
  instrument: Blood glucose
  magnitude: −0.54 mmol/L pooled mean
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-outcome-exercise-positive
  conceptId: exercise
  name: Selected endurance tests
  direction: Increased
  evidence: Human research
  description: Some studies reported approximately 2% faster cycling or 2.1% faster sustained rugby tests with ketone ester plus carbohydrate, but sprint and power tests did not improve.
  sourceId: EK-04
  population: Athletes
  exposure: Ketone ester with carbohydrate; acute
  instrument: Time trial or simulated match test
  magnitude: Approximately 2–2.1% in selected tests
  reportType: measured-assessment
  conflictingSourceIds: []
  study:
    id: ek-exercise-positive
    design: Randomized crossover exercise trials
    comparator: Carbohydrate or placebo
    route: Oral
    formulation: Ketone ester
    assessmentTime: Acute exercise test
    sampleSize: 9
- id: exogenous-ketones-outcome-exercise-null
  conceptId: exercise
  name: 10-km running performance
  direction: Variable
  evidence: Human research
  description: In eight endurance-trained runners, monoester raised βHB but did not improve 10-km performance, running economy, lactate, RPE, reaction time, or multitasking.
  sourceId: EK-05
  population: 8 endurance-trained runners
  exposure: Acute ketone monoester
  instrument: 10-km time trial and exercise measures
  magnitude: "Null"
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-outcome-cognition
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Variable
  evidence: Human research
  description: One small mental-fatigue study attenuated a decline in choice-reaction accuracy, while salt and low-dose monoester studies found no cognitive benefit despite βHB elevation.
  sourceId: EK-09
  population: Healthy men, college-aged men, and trained women in small trials
  exposure: 25 g or low-dose ketone products; acute
  instrument: Choice reaction, cognitive test batteries
  magnitude: Mixed; most measures null
  reportType: measured-assessment
  conflictingSourceIds: []
  study:
    id: ek-cognition
    design: Randomized crossover trials
    comparator: Placebo or salt
    route: Oral
    formulation: Ketone ester or salt
    assessmentTime: During or after exercise
    sampleSize: 9
- id: exogenous-ketones-outcome-obesity
  conceptId: glycemic-control
  name: Postprandial glucose in obesity
  direction: Decreased
  evidence: Human research
  description: Fourteen days of 12 g pre-meal KME lowered postprandial glucose by 8.0% and 24-hour average glucose by 7.8% versus placebo.
  sourceId: EK-14
  population: 14 adults with obesity
  exposure: 12 g KME before each meal for 14 days
  instrument: Postprandial and continuous glucose measures
  magnitude: −8.0% postprandial; −7.8% 24-hour average
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-outcome-t2d
  conceptId: glycemic-control
  name: Postprandial glucose in type 2 diabetes
  direction: Decreased
  evidence: Human research
  description: In 10 adults with type 2 diabetes, 0.5 g/kg KME lowered 2-hour glucose by about 18% and 4-hour glucose by about 12% after a mixed meal; the acute design did not establish treatment benefit.
  sourceId: EK-16
  population: 10 adults with type 2 diabetes
  exposure: 0.5 g/kg KME before mixed-meal tolerance test
  instrument: Postprandial glucose and glucose appearance
  magnitude: −18% at 2 hours; −12% at 4 hours
  reportType: measured-assessment
  conflictingSourceIds: []
- id: exogenous-ketones-outcome-clinical
  conceptId: glycemic-control
  name: Durable clinical endpoints
  direction: Variable
  evidence: Limited research
  description: The cited human trials did not establish durable HbA1c, cardiovascular, seizure, neurodegeneration, mortality, or sustained weight-loss benefits.
  sourceId: EK-03
  population: Human exogenous-ketone studies
  exposure: Mostly acute or 14-day product-specific exposure
  instrument: Clinical endpoint follow-up
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: βHB oxidation as alternative fuel
  description: D-βHB is transported into tissues, converted to acetoacetate and acetyl-CoA, and oxidized in brain, heart, skeletal muscle, and kidney.
  sourceId: EK-02
- title: Suppression of adipose lipolysis
  description: βHB signaling through HCAR2/GPR109A can lower cAMP-dependent lipolysis, so exogenous ketones may reduce free-fatty-acid release and endogenous ketogenesis rather than simply increase whole-body fat mobilization.
  sourceId: EK-01
- title: Formulation-specific glucose effects
  description: Glucose lowering may involve reduced hepatic glucose output, altered insulin dynamics, delayed intestinal glucose appearance, or reduced lipolysis; the dominant pathway differs by meal and population.
  sourceId: EK-16
- title: Supplement ketosis differs from dietary ketosis
  description: A ketone drink raises blood βHB without reproducing the low-insulin, high-free-fatty-acid state of fasting or ketogenic diets; equal βHB values therefore do not imply equal physiology.
  sourceId: EK-01
```

## Cautions

```yaml
- title: Gastrointestinal and taste burden
  description: Nausea, bloating, abdominal discomfort, diarrhea, reflux, belching, headache, and strong aftertaste vary by product and dose; short trials generally describe mild symptoms.
  sourceId: EK-19
- title: Mineral and acid-base exposure
  description: Salt products can deliver substantial sodium, potassium, calcium, or magnesium; monoesters may transiently lower blood pH, while the studied salt increased urinary pH.
  sourceId: EK-01
- title: Racemic βHB measurement
  description: L-/S-βHB persists longer and is less characterized; D-/R-βHB meters do not quantify total exposure after racemic salts.
  sourceId: EK-01
- title: High-risk populations and unknown duration
  description: Renal disease, diabetes, pregnancy, chronic disease, repeated high-dose mineral exposure, and hard clinical outcomes are underrepresented or unstudied.
  sourceId: EK-12
- title: Ketonemia is not protection from ketoacidosis
  description: Transient hyperketonemia should not be interpreted as therapeutic adaptation or protection from ketoacidosis.
  sourceId: EK-01
```

## Claims

```yaml
- id: exogenous-ketones-claim-ketonemia
  assertion: Exogenous ketones induce ketosis
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Accurate only as a blood-ketonemia statement; they raise βHB but generally suppress endogenous lipolysis and ketogenesis.
  sourceIds:
    - EK-01
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A biomarker increase does not establish nutritional adaptation or clinical benefit.
- id: exogenous-ketones-claim-fat-loss
  assertion: They burn more body fat
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Not established; free fatty acids and glycerol commonly fall after ingestion, consistent with suppressed adipose lipolysis.
  sourceIds:
    - EK-01
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute substrate use is not sustained fat loss.
- id: exogenous-ketones-claim-endurance
  assertion: They improve endurance
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Not established as a general effect because positive, null, and negative exercise trials coexist.
  sourceIds:
    - EK-05
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulation, carbohydrate, intensity, and timing differ between studies.
- id: exogenous-ketones-claim-glucose
  assertion: They lower glucose
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Supported acutely, especially for monoesters and post-meal testing; durable diabetes treatment benefit remains unproven.
  sourceIds:
    - EK-03
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Most studies were acute and small.
- id: exogenous-ketones-claim-weight
  assertion: They cause weight loss
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Insufficient human evidence for sustained weight loss attributable to exogenous ketones.
  sourceIds:
    - EK-03
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Ketone drinks also provide metabolizable energy.
- id: exogenous-ketones-claim-safe
  assertion: They are free of gastrointestinal effects
  relation: evidence-assessment
  participants:
    - entityId: substance:exogenous-ketones
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: False as a blanket claim; GI effects and palatability problems are documented and product-dependent.
  sourceIds:
    - EK-19
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Tolerability varies by compound and dose.
```

## Interactions

```yaml
- id: exogenous-ketones-interaction-food
  name: Food and mixed meals
  otherSlug: null
  summary: Meals reduce monoester D-βHB Cmax; pre-meal dosing lowered postprandial glucose in small obesity and diabetes trials, but timing effects are not standardized.
  sourceId: EK-01
  context: Human evidence
- id: exogenous-ketones-interaction-carbohydrate
  name: Carbohydrate during exercise
  otherSlug: null
  summary: Carbohydrate co-ingestion changes glucose availability, acid-base load, and performance findings; positive and null results coexist.
  sourceId: EK-07
  context: Human evidence
- id: exogenous-ketones-interaction-glucose-drugs
  name: Glucose-lowering medication
  otherSlug: null
  summary: Additive glucose lowering or hypoglycemia is plausible, but controlled supplement–drug interaction studies were not established in the cited trials.
  sourceId: EK-16
  context: Evidence gap
- id: exogenous-ketones-interaction-sglt2
  name: SGLT2 inhibitors
  otherSlug: null
  summary: Direct coadministration studies were not established; SGLT2 inhibitors are already ketone-raising and ketoacidosis-relevant contexts.
  sourceId: EK-03
  context: Evidence gap
- id: exogenous-ketones-interaction-minerals
  name: Renal, potassium, sodium, or blood-pressure pharmacology
  otherSlug: null
  summary: Salt products add cations, so interaction potential depends on mineral composition and renal handling; direct clinical data are limited.
  sourceId: EK-01
  context: Plausibility, not demonstrated
```

## Experience links

```yaml
[]
```

## References

```yaml
- title: On the Metabolism of Exogenous Ketones in Humans
  authors: Brianna J. Stubbs, Patrick J. Cox, Robert D. Evans, Peter Santer, James J. Miller, Oliver K. Faull, et al.
  year: 2017
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5670148/
  kind: peer-reviewed human randomized crossover pharmacokinetic study
  insight: Direct comparison of ketone ester and sodium/potassium ketone salt; D/L kinetics, food effect, acid-base effects, urinary excretion, and repeated dosing.
  limitation: Small, healthy, acute, formulation-specific sample.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-01
- title: Why a d-β-hydroxybutyrate monoester?
  authors: Arianna Soto-Mota, Hanne Vansant, Robert D. Evans, Kieran Clarke
  year: 2020
  url: https://doi.org/10.1042/BST20190240
  kind: peer-reviewed biochemical review
  insight: Explains D-/R-βHB monoester chemistry, precursor metabolism, stereochemistry, and physiological rationale.
  limitation: Review; not a new clinical efficacy trial.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-02
- title: "Effects of Exogenous Ketone Supplementation on Blood Glucose: A Systematic Review and Meta-analysis"
  authors: Kaja Falkenhain, Ali Daraei, Shelby C. Forbes, Jonathan P. Little
  year: 2022
  url: https://doi.org/10.1093/advances/nmac036
  kind: systematic review and meta-analysis of human trials
  insight: Pooled βHB increase and glucose reduction; stronger glucose effect for monoesters than salts.
  limitation: Mostly acute studies; aggregate data limit mediation and long-term clinical inference.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-03
- title: Nutritional Ketosis Alters Fuel Preference and Thereby Endurance Performance in Athletes
  authors: Patrick J. Cox, Tim Kirk, Thomas Ashmore, Kim Willerton, Robert Evans, Alan Smith, et al.
  year: 2016
  url: https://doi.org/10.1016/j.cmet.2016.07.010
  kind: peer-reviewed human exercise trial
  insight: Early positive ketone-ester-plus-carbohydrate cycling result.
  limitation: Athlete sample, acute protocol, and product/formulation-specific findings.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-04
- title: No Benefit of Ingestion of a Ketone Monoester Supplement on 10-km Running Performance
  authors: Mark Evans, Fionn T. McSwiney, Aidan J. Brady, Brendan Egan
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31730565/
  kind: peer-reviewed double-blind randomized crossover exercise trial
  insight: Null 10-km performance and cognition result despite increased βHB.
  limitation: n=8 and acute running protocol.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-05
- title: Ketone Diester Ingestion Impairs Time-Trial Performance in Professional Cyclists
  authors: J. J. Leckey, M. L. Ross, M. Quod, J. A. Hawley, Louise M. Burke
  year: 2017
  url: https://doi.org/10.3389/fphys.2017.00806
  kind: peer-reviewed human exercise trial
  insight: Negative performance result relevant to claims of universal ergogenicity.
  limitation: Acute diester protocol and professional-cyclist sample.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-06
- title: Acute Ingestion of a Ketone Monoester without Co-ingestion of Carbohydrate Improves Running Economy in Male Endurance Runners
  authors: Aidan J. Brady, Brendan Egan
  year: 2023
  url: https://doi.org/10.1249/MSS.0000000000003278
  kind: peer-reviewed randomized crossover exercise trial
  insight: 4.1% running-economy improvement without carbohydrate but no time-to-exhaustion benefit.
  limitation: n=11, all male, acute ramp exercise.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-07
- title: Ketone Monoester Ingestion Alters Metabolism and Simulated Rugby Performance in Professional Players
  authors: Oliver Peacock, Javier T. Gonzalez, Simon Roberts, Alan A. Smith, Scott Drawer, Keith Stokes
  year: 2022
  url: https://doi.org/10.1123/ijsnem.2021-0346
  kind: peer-reviewed randomized crossover team-sport trial
  insight: 2.1% faster sustained high-intensity tests, with no sprint or power improvement.
  limitation: n=9 professional male rugby players; simulated match protocol.
  funding: PepsiCo, British Heart Foundation, MRC, BBSRC, and related institutional sources reported in the publication record.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-08
  disclosureUrl: https://doi.org/10.1123/ijsnem.2021-0346
- title: Ketone Ester Supplementation Improves Some Aspects of Cognitive Function during a Simulated Soccer Match after Induced Mental Fatigue
  authors: Manuel D. Quinones, Peter W. R. Lemon
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9607595/
  kind: peer-reviewed double-blind randomized crossover trial
  insight: ΔG product, 25 g, attenuated one cognitive decline measure during intermittent exercise.
  limitation: n=9 men; most cognitive outcomes were null.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-09
- title: Exogenous Ketone Salts Do Not Improve Cognitive Responses after a High-Intensity Exercise Protocol in Healthy College-Aged Males
  authors: Hunter S. Waldman, Steven A. Basham, F. Gregory Price, James W. Smith, Hasan Chander, Aaron C. Knight, et al.
  year: 2018
  url: https://doi.org/10.1139/apnm-2017-0724
  kind: peer-reviewed human exercise-cognition trial
  insight: Null cognition result with ketone salts.
  limitation: Healthy young male sample and salt-specific formulation.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-10
- title: No Benefit of Ingesting a Low-Dose Ketone Monoester Supplement on Markers of Cognitive Performance in Females
  authors: Anna K. Huber, Eric K. O’Neal, Gaven A. Barker, Craig R. Witt, David A. Lara, Valerie N. Forsythe, Andrew P. Koutnik, Dominic P. D’Agostino, Walter Staiano, Brendan Egan, Hunter S. Waldman
  year: 2023
  url: https://doi.org/10.1007/s41465-023-00275-w
  kind: peer-reviewed randomized crossover cognition trial
  insight: No improvement in cognitive tests in trained females despite βHB elevation.
  limitation: Small sample and acute low-dose protocol.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-11
- title: Tolerability and Acceptability of an Exogenous Ketone Monoester and Ketone Monoester/Salt Formulation in Humans
  authors: Mickey L. Bolyard, Christina M. Graziano, Kevin R. Fontaine, R. Drew Sayer, Gordon Fisher, Eric P. Plaisance
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10708260/
  kind: peer-reviewed randomized crossover tolerability and PK study
  insight: KetoneAid KME/KMES 5- and 10-g products produced dose-responsive R-βHB with mild GI, appetite, headache, and taste effects.
  limitation: n=14 healthy young adults; short-term tolerability only.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-12
- title: The Effect of Novel Exogenous Ketone Supplements on Blood Beta-Hydroxybutyrate and Glucose
  authors: Kaja Falkenhain, Ali Daraei, Jonathan P. Little
  year: 2023
  url: https://doi.org/10.1080/19390211.2023.2179152
  kind: peer-reviewed randomized crossover pilot
  insight: Compared KE4, Ketone-IQ, and Kenetik; monoester produced the largest and fastest βHB response.
  limitation: n=12, no inert placebo, acute exposure.
  funding: Natural Sciences and Engineering Research Council of Canada reported in the publication record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-13
- title: "14-Day Ketone Supplementation Lowers Glucose and Improves Vascular Function in Obesity: A Randomized Crossover Trial"
  authors: Jeremy J. Walsh, Helena Neudorf, Jonathan P. Little
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7993591/
  kind: peer-reviewed randomized crossover metabolic trial
  insight: Pre-meal HVMN/ΔG KME lowered postprandial and 24-hour glucose and improved FMD in adults with obesity.
  limitation: n=14, 14 days, surrogate vascular and ex-vivo inflammatory outcomes.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Jonathan P. Little was identified as Chief Scientific Officer of a not-for-profit institute; no commercial conflict was stated in the cited record.
  conflictOfInterestStatus: declared
  id: EK-14
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC7993591/
- title: "Short-term Ketone Monoester Supplementation Improves Cerebral Blood Flow and Cognition in Obesity: A Randomized Cross-over Trial"
  authors: Jeremy J. Walsh, Hannah G. Caldwell, Helena Neudorf, Philip N. Ainslie, Jonathan P. Little
  year: 2021
  url: https://doi.org/10.1113/JP281988
  kind: peer-reviewed randomized crossover cognition and cerebrovascular trial
  insight: Fourteen days of 12-g thrice-daily βHB improved DSST and extracranial cerebrovascular measures.
  limitation: n=14, surrogate outcomes, no proof of durable cognitive benefit.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-15
- title: "A Ketone Monoester Drink Reduces Postprandial Blood Glucose Concentrations in Adults with Type 2 Diabetes: A Randomised Controlled Trial"
  authors: Alistair J. Monteyne, Kaja Falkenhain, Gráinne Whelehan, et al.
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11058041/
  kind: peer-reviewed double-blind randomized crossover type 2 diabetes trial
  insight: 0.5 g/kg KME lowered early and total postprandial glucose exposure through delayed glucose appearance.
  limitation: n=10 and single-meal acute design.
  funding: CIHR, NSERC, and Exeter–UBCO Sports Health Science Fund reported in the publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-16
- title: An Open-label, Acute Clinical Trial in Adults to Assess Ketone Levels, Gastrointestinal Tolerability, and Sleepiness Following Consumption of (R)-1,3-butanediol (Avela™)
  authors: James Lowder, Shafagh Fallah, Carolina Venditti, Kathy Musa-Veloso, Vassili Kotlov
  year: 2023
  url: https://doi.org/10.3389/fphys.2023.1195702
  kind: peer-reviewed open-label uncontrolled product PK/tolerability study
  insight: Avela R-1,3-butanediol produced delayed βHB elevation and generally mild GI symptoms.
  limitation: n=26, no placebo, home-based self-measurement, product-specific.
  funding: Genomatica Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Three authors were Intertek employees and paid consultants to Genomatica; the funder participated in design and publication decision.
  conflictOfInterestStatus: declared
  id: EK-17
  disclosureUrl: https://doi.org/10.3389/fphys.2023.1195702
- title: Gastrointestinal Effects of Exogenous Ketone Drinks Are Infrequent, Mild, and Vary According to Ketone Compound and Dose
  authors: Brianna J. Stubbs, Patrick J. Cox, Tim Kirk, Robert D. Evans, Kieran Clarke
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31034254/
  kind: peer-reviewed human tolerability study
  insight: GI symptoms vary by ketone compound, dose, and exercise; symptoms were generally mild.
  limitation: Short-term and product-specific; PubMed record includes an HVMN affiliation.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: HVMN Inc. affiliation appears in the publication record.
  conflictOfInterestStatus: declared
  id: EK-19
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/31034254/
- title: Compositions and Methods for Producing Elevated and Sustained Ketosis
  authors: Dominic Paul D’Agostino, Patrick Arnold, Shannon Kesl; University of South Florida
  year: 2015
  url: https://digitalcommons.usf.edu/usf_patents/58/
  kind: patent record
  insight: Claims mineral βHB compositions, including combinations with medium-chain fatty acids, for sustained ketosis.
  limitation: Patent claims are not clinical efficacy evidence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
  id: EK-P1
- title: Ketone Body and Ketone Body Ester for Reducing Muscle Breakdown
  authors: Kieran Clarke, Peter J. Cox, et al.; TΔS Ltd
  year: 2020
  url: https://patents.google.com/patent/EP3030231B1/en
  kind: European patent record
  insight: Claims ketone bodies and esters for muscle-protein or muscle-breakdown applications.
  limitation: Patent scope and inventorship do not validate performance or recovery outcomes.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial patent ownership is explicit.
  conflictOfInterestStatus: declared
  id: EK-P2
  disclosureUrl: https://patents.google.com/patent/EP3030231B1/en
- title: "FDA 101: Dietary Supplements"
  authors: U.S. Food and Drug Administration
  year: 2025
  url: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  kind: official U.S. regulatory information
  insight: FDA does not preapprove dietary supplements for safety, effectiveness, or labeling before sale.
  limitation: U.S.-specific; product classification depends on formulation and claims.
  funding: U.S. government
  sponsorshipStatus: not-assessed
  conflictsOfInterest: none stated
  conflictOfInterestStatus: none-declared
  id: EK-L1
  disclosureUrl: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
- title: "Dietary Supplement Labeling Guide: Chapter VI. Claims"
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims
  kind: official U.S. regulatory guidance
  insight: Structure/function claims are not preapproved but require substantiation, notification, and the required disclaimer; disease claims can change regulatory status.
  limitation: Guidance is not a product-specific legal opinion.
  funding: U.S. government
  sponsorshipStatus: not-assessed
  conflictsOfInterest: none stated
  conflictOfInterestStatus: none-declared
  id: EK-L2
  disclosureUrl: https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary supplement marketing
  status: FDA does not preapprove dietary supplements for safety or effectiveness before marketing; product classification and claims remain formulation- and claim-dependent.
  sourceUrl: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Structure/function and disease claims
  status: Structure/function claims require substantiation and applicable notification; disease claims can change regulatory status. Patents do not establish approval or clinical efficacy.
  sourceUrl: https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims
  asOf: 2026-10-10
```
