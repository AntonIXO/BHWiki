---
slug: taurine
name: Taurine
aliases: ["2-aminoethanesulfonic acid"]
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
sourceId: fda2015
x-shape: [slug, name, aliases, editorialStatus, reviewedAt, sourceId, x-shape]
---

## Summary

Supplemental taurine has lowered blood pressure and selected metabolic markers in some short human trials, without establishing prevention of cardiovascular events or diabetes complications. Exercise findings conflict, and cognitive effects are inconsistent or task-specific. These findings concern particular supplemental doses and populations, not the effects of eating taurine-containing foods. (`sourceId: sun2016`; `sourceId: maleki2020`; `sourceId: balshaw2013`; `sourceId: rutherford2010`; `sourceId: giles2012`)

Blood taurine is not a reliable substitute for tissue exposure or clinical benefit: supplementation can substantially increase plasma concentrations without improving insulin sensitivity or increasing muscle taurine. (`sourceId: brons2004`; `sourceId: galloway2008`)

## Description

Taurine is a sulfur-containing amino sulfonic acid produced endogenously from sulfur-amino-acid metabolism and obtained through food. It is not a protein-building amino acid. Its physiological roles include bile-acid conjugation and regulation of cellular osmotic balance. (`sourceId: vkm2015`; `sourceId: fda2015`)

Food analyses detected taurine in meats, dairy products and infant-feeding products, but not in the plant foods examined. Food composition does not establish that increasing dietary taurine produces the effects reported with isolated supplements. Capsules, dissolved taurine and caffeine-containing mixtures are distinct experimental exposures. (`sourceId: laidlaw1990`; `sourceId: balshaw2013`; `sourceId: rutherford2010`; `sourceId: giles2012`)

## Evidence note

Evidence was reviewed through 2026-10-15, prioritizing primary human studies and official regulatory documents. This is a focused synthesis, not an exhaustive meta-analysis. Randomized supplementation, dietary associations, circulating biomarkers and experimental mechanisms are distinguished below. Study doses describe research exposures, not recommendations.

One frequently cited heart-failure report is indexed in PubMed as a retracted publication and is excluded from efficacy interpretation. (`sourceId: ahmadian2017`)

Full text and disclosure statements were accessible unevenly. “Not assessed” means funding or conflicts could not be adequately verified; it does not mean funding or conflicts were absent. A named product manufacturer is not automatically a study sponsor.

## Doses

```yaml
- context: Acute running experiment
  formulationRoute: Oral taurine capsules
  dose: 1 g once, 2 hours before testing
  population: Trained male middle-distance runners
  sourceId: balshaw2013
- context: Acute cycling experiment
  formulationRoute: Taurine dissolved in a noncaloric beverage
  dose: 1.66 g once, 1 hour before exercise
  population: Endurance-trained men
  sourceId: rutherford2010
- context: Blood-pressure trial
  formulationRoute: Oral taurine
  dose: 1.6 g/day for 12 weeks
  population: Adults with prehypertension
  sourceId: sun2016
- context: Diabetic vascular-function trial
  formulationRoute: Oral study product
  dose: 0.8 g three times daily, totaling 2.4 g/day, for 12 weeks
  population: Adults with type 2 diabetes
  sourceId: li2025
- context: Metabolic trial
  formulationRoute: Oral taurine supplementation
  dose: 3 g/day for 8 weeks
  population: Adults with type 2 diabetes
  sourceId: maleki2020
- context: Pharmacokinetic experiment
  formulationRoute: Four 1-g capsules taken fasting
  dose: Single 4-g exposure
  population: Eight healthy men
  limitation: A kinetic experiment, not an efficacy or chronic-safety regimen.
  sourceId: ghandforoush2010
```

## Pharmacokinetics

```yaml
- parameter: Plasma absorption and elimination
  finding: "After 4 g orally in eight healthy men, mean Tmax was 1.5 ± 0.6 hours and the reported baseline-corrected plasma elimination half-life was 1.0 ± 0.3 hours."
  limitation: Small single-dose study; these values do not establish brain residence time or clinical effect duration.
  sourceId: ghandforoush2010
- parameter: Exposure limits
  finding: Plasma concentrations returned toward endogenous values within approximately 6–8 hours.
  limitation: Absolute oral bioavailability, a controlled food effect and chronic accumulation were not established.
  sourceId: ghandforoush2010
- parameter: Plasma versus muscle
  finding: Acute supplementation markedly increased plasma taurine, but 5 g/day for seven days did not increase skeletal-muscle taurine or change exercise carbohydrate/fat oxidation.
  limitation: Small controlled physiological experiment; the chronic comparison was not described as randomized in the abstract.
  sourceId: galloway2008
- parameter: Renal handling
  finding: Accumulation has been reported during supplementation in patients receiving dialysis.
  limitation: Healthy-volunteer kinetics cannot establish a renal-adjusted regimen.
  sourceId: suliman2002
```

## Modifiers

```yaml
- modifier: Baseline metabolic population
  finding: Overweight, nondiabetic men with familial diabetes risk had higher plasma taurine without improved clamp-measured insulin sensitivity.
  interpretation: Supplement exposure and presumed deficiency correction are not interchangeable.
  sourceId: brons2004
- modifier: Exercise protocol and population
  finding: A positive result in eight trained runners concerned a treadmill 3-km test.
  limitation: It does not establish equivalent effects in other sports, women, untrained adults or chronic training.
  sourceId: balshaw2013
- modifier: Caffeine exposure and withdrawal
  finding: An ingredient-separation cognition study enrolled habitual caffeine users after 24-hour abstinence.
  limitation: Withdrawal and ingredient interactions limit generalization to caffeine-naive people or taurine alone.
  sourceId: giles2012
- modifier: Anemia in cirrhosis
  finding: A non-anemic subgroup appeared to benefit despite a null overall fatigue result.
  limitation: The subgroup analysis was post hoc and cannot establish a validated responder-selection rule.
  sourceId: sasidharan2026
```

## Effects

```yaml
- effect: Blood-pressure reduction
  evidenceLevel: Human randomized trial
  interpretation: A measurable physiological effect in prehypertension, not demonstrated prevention of stroke or myocardial infarction.
  sourceId: sun2016
- effect: Metabolic changes
  evidenceLevel: Human randomized trial
  interpretation: Fasting glucose and insulin-resistance estimates improved in one diabetes trial while HbA1c and several other outcomes did not.
  sourceId: maleki2020
- effect: Exercise performance
  evidenceLevel: Human randomized crossover trial
  interpretation: A cycling study found no time-trial benefit despite increased total fat oxidation during preceding exercise.
  sourceId: rutherford2010
- effect: Cognitive performance
  evidenceLevel: Human randomized ingredient-separation study
  interpretation: Faster responses on some working-memory tasks coexisted with slower choice reaction time; this is not uniform cognitive enhancement.
  sourceId: giles2012
```

## Outcomes

```yaml
- outcome: Running performance
  design: Randomized, double-blind, placebo-controlled crossover
  population: Eight trained male middle-distance runners
  intervention: 1 g taurine in capsules, 2 hours before testing
  comparator: Placebo
  instrument: Treadmill 3-km time trial
  result: "646.6 ± 52.8 versus 658.5 ± 58.2 seconds; reported improvement 1.7%, p=0.013."
  nullFindings: Oxygen uptake, heart rate, perceived exertion and lactate did not differ.
  limitation: Very small acute experiment.
  sourceId: balshaw2013

- outcome: Cycling performance and substrate use
  design: Randomized, blinded crossover
  population: Eleven endurance-trained men
  intervention: 1.66 g taurine in a beverage, 1 hour before exercise
  comparator: Control and expectancy-placebo conditions
  instrument: Ninety minutes of cycling followed by a work-matched time trial
  result: No time-trial improvement; total fat oxidation during the preceding ride increased by approximately 5 g.
  interpretation: Acute fuel oxidation is neither demonstrated weight loss nor improved endurance performance.
  sourceId: rutherford2010

- outcome: Anaerobic, strength and cognitive performance
  design: Double-blind, randomized, placebo-controlled crossover
  population: Thirty-two trained young men
  intervention: Taurine 10 mg/kg, caffeine 2 mg/kg, their combination, or placebo; capsules 60 minutes before testing
  instrument: Handgrip, Wingate and Go/No-Go tests
  result: Taurine alone did not significantly improve performance. No condition significantly improved cognition, peak power, perceived exertion or lactate.
  combinationFinding: Some handgrip and mean-power advantages occurred with the combination.
  limitation: Combination findings cannot establish taurine-alone efficacy; registration was retrospective.
  sourceId: kose2026

- outcome: Blood pressure in prehypertension
  design: Randomized, double-blind, placebo-controlled trial
  population: 120 adults
  intervention: 1.6 g/day for 12 weeks
  instrument: Clinic and 24-hour ambulatory blood pressure
  result: "Clinic systolic/diastolic reductions were 7.2/4.7 mmHg with taurine versus 2.6/1.3 with placebo; ambulatory reductions were 3.8/3.5 versus 0.3/0.6 mmHg."
  interpretation: These are within-arm reductions, not placebo-adjusted effect sizes.
  limitation: Short-term blood-pressure outcomes, not cardiovascular events.
  sourceId: sun2016

- outcome: Vascular function in type 2 diabetes
  design: Randomized, double-blind, placebo-controlled trial
  population: 165 randomized; 144 completed
  intervention: 2.4 g/day for 12 weeks
  comparator: Matched placebo
  instrument: Brachial-ankle pulse-wave velocity, blood pressure and vasodilation testing
  result: Reported improvements in systolic pressure, pulse-wave velocity and endothelium-dependent/independent vasodilation.
  limitation: Single center, unequal attrition and multiple endpoints; no demonstrated reduction in amputations or cardiovascular events.
  sourceId: li2025

- outcome: Glycemic and lipid markers in type 2 diabetes
  design: Randomized, double-blind, placebo-controlled trial
  population: Forty-five participants reported
  intervention: 3 g/day for 8 weeks
  comparator: Microcrystalline-cellulose placebo
  result: Fasting glucose, insulin, HOMA-IR, total cholesterol and LDL cholesterol improved relative to placebo.
  nullFindings: No significant changes in HbA1c, triglycerides, HDL cholesterol or anthropometric measures.
  limitation: Short duration and multiple laboratory endpoints; no complication or diabetes-prevention outcome.
  sourceId: maleki2020

- outcome: Insulin secretion and sensitivity before diabetes
  design: Randomized, double-blind crossover; two 8-week periods
  population: Twenty overweight, nondiabetic men with first-degree relatives with type 2 diabetes
  intervention: 1.5 g/day
  comparator: Placebo
  instrument: Intravenous glucose-tolerance testing and euglycemic hyperinsulinemic clamp
  result: Plasma taurine increased substantially, but insulin secretion, insulin sensitivity and blood lipids did not improve.
  limitation: Small, selected male population; nevertheless a direct null physiological result.
  sourceId: brons2004

- outcome: Heart-failure symptoms
  design: Randomized, double-blind, placebo-controlled crossover
  population: Fourteen patients receiving conventional heart-failure treatment
  intervention: Add-on taurine for four weeks; dose not recoverable from the accessed abstract
  result: Improvements in NYHA functional class, pulmonary crackles and chest-film abnormalities were reported.
  limitation: Small historical study under older background treatment; no established hospitalization or survival benefit.
  sourceId: azuma1985

- outcome: Acute cognition
  design: Randomized, double-blind mixed design
  population: Forty-eight habitual caffeine consumers after 24-hour caffeine abstinence
  intervention: 2 g taurine with or without 200 mg caffeine; glucose was separately varied
  comparator: Corresponding placebo conditions
  instrument: Attention, working-memory and reaction-time tasks 30–60 minutes after ingestion
  result: Taurine slowed choice reaction time but shortened responses on working-memory tasks; caffeine produced broader benefits.
  limitation: Multiple tasks and interactions; no demonstrated sustained improvement in everyday cognition.
  sourceId: giles2012

- outcome: Cognition in older women
  design: Four-group intervention indexed as a randomized controlled trial
  population: Forty-eight women, mean age approximately 84 years
  intervention: 1.5 g/day for 14 weeks, exercise, their combination, or control
  instrument: Mini-Mental State Examination and peripheral biomarkers
  result: MMSE increased only in the exercise-plus-taurine group.
  limitation: Small groups and reported within-group changes do not establish an independent taurine cognitive effect; blood biomarkers are not direct measurements of brain-barrier integrity.
  sourceId: chupel2018

- outcome: Sleep-related evidence boundary
  design: Single-blind crossover after sleep deprivation
  population: Eighteen surgical novices
  intervention: 150 mg caffeine, 150 mg caffeine plus 2 g taurine, or placebo
  instrument: Simulated laparoscopy, reaction time and subjective sleepiness
  result: Some performance and sleepiness measures improved; errors were not eliminated.
  limitation: No taurine-alone arm and no insomnia, sleep-duration or sleep-architecture efficacy test. A sleep-deprivation performance study is not evidence that taurine improves sleep.
  sourceId: aggarwal2011

- outcome: Muscle cramps in chronic liver disease
  design: Double-blind randomized crossover; four weeks per condition
  population: Forty-nine enrolled; thirty completed and were analyzed
  intervention: Dose-variable oral taurine; reported benefit at 2 g/day
  comparator: Placebo
  instrument: Participant-recorded cramp frequency, duration and severity
  result: Approximately seven fewer cramps and 89 fewer cramp-minutes per fortnight, with severity 1.4 scale units lower.
  limitation: Substantial attrition and completer analysis; not proof of liver-disease reversal or insomnia treatment.
  sourceId: vidot2018

- outcome: Fatigue in decompensated cirrhosis
  design: Open-label randomized parallel trial
  population: 220 randomized; 202 completed
  intervention: 1 g/day plus standard care for 12 weeks
  comparator: Standard care without placebo
  instrument: Fatigue Assessment Scale
  result: "Between-group change difference −1.25 points, 95% CI −3.55 to 1.05; p=0.288."
  nullFindings: Quality of life, handgrip strength and six-minute walking distance did not significantly improve.
  limitation: Primary outcome null; favorable post hoc non-anemic subgroup is hypothesis-generating.
  sourceId: sasidharan2026

- outcome: Early recovery after liver transplantation
  design: Double-blind randomized trial
  population: 169 analyzed transplant recipients
  intervention: 2 g/day for 30 days beginning on transplant day
  comparator: Placebo
  result: Improvements in AST, bilirubin and INR were reported, together with shorter hospitalization and a secondary mortality signal.
  limitation: Twenty-seven deaths within 72 hours were excluded; the accessed abstract does not adequately resolve exclusion timing relative to randomization or provide absolute mortality counts. Survival benefit remains uncertain.
  sourceId: mottaghi2026

- outcome: Dietary taurine and dementia
  design: Prospective observational cohort, not supplementation trial
  population: 27,786 participants; plasma subset 3,693
  exposure: Estimated habitual dietary taurine and baseline plasma concentration
  assessmentTime: Median 25-year follow-up
  result: No significant association with all-cause dementia, Alzheimer disease or vascular dementia.
  limitation: Dietary measurement and observational confounding limit causal interpretation; this does not test gram-dose supplementation.
  sourceId: zhang2025
```

## Mechanisms

```yaml
- mechanism: Osmoregulation and bile-acid conjugation
  evidenceType: Established physiological roles summarized in an official assessment
  interpretation: Physiological necessity does not establish benefit from additional taurine in adequately supplied adults.
  sourceId: vkm2015
- mechanism: Hydrogen-sulfide and vascular-calcium pathways
  evidenceType: Human vascular measurements plus platelet and experimental mechanistic work
  finding: Taurine supplementation increased circulating taurine and hydrogen sulfide; platelet calcium-handling changes were also reported.
  limitation: Correlated biomarkers and laboratory experiments do not establish the complete causal pathway or clinical antithrombotic efficacy.
  sourceId: li2025
- mechanism: Tumor-cell taurine uptake
  evidenceType: Mouse models and patient-derived leukemia cells
  finding: Taurine-transporter dependence supported glycolysis and myeloid-leukemia growth in experimental systems.
  limitation: Not a human oral-supplement intervention or cancer-incidence study.
  sourceId: sharma2025
```

## Cautions

```yaml
- issue: Renal impairment
  finding: A small dialysis report described taurine accumulation and dizziness/vertigo during supplementation.
  uncertainty: The report cannot quantify risk by kidney-function stage or establish a safe adjusted dose.
  sourceId: suliman2002
- issue: Pregnancy and breastfeeding
  finding: The diabetic vascular trial excluded pregnant or lactating participants and those planning pregnancy, as well as patients with liver or kidney failure.
  uncertainty: Its tolerability findings therefore do not establish safety in these populations; adequate gram-dose pregnancy/lactation safety was not established in the reviewed evidence.
  sourceId: li2025
- issue: Hepatic disease and tolerability
  finding: "In the cirrhosis-fatigue trial, 12/102 taurine recipients reported mild events: reflux symptoms in eight, diarrhea in two and oral ulcers in two."
  uncertainty: These short-term observations do not establish long-term hepatic safety across diseases or doses.
  sourceId: sasidharan2026
- issue: Supplemental-dose safety uncertainty
  finding: VKM's 2015 assessment judged 750–1000 mg/day unlikely to cause harm in adults but considered 2000 mg/day potentially concerning under its conservative exposure-margin approach.
  interpretation: This was not an observed human toxicity threshold or a universal tolerable upper limit.
  sourceId: vkm2015
- issue: Exposure-specific safety assessments
  finding: EFSA found no safety concern for taurine at the energy-drink exposures evaluated in its 2009 assessment.
  limitation: The conclusion concerned assessed ingredient exposure, not unrestricted supplemental dosing or the complete safety of energy drinks.
  sourceId: efsa2009safety
- issue: Cancer uncertainty
  finding: Experimental myeloid-leukemia work identified a taurine uptake dependency.
  interpretation: It neither establishes that oral supplements cause leukemia nor demonstrates safety during active malignancy.
  sourceId: sharma2025
```

## Claims

```yaml
- claim: Taurine reliably improves sleep.
  assessment: Not established by the reviewed sleep-related human experiment, which tested caffeine-containing interventions after sleep deprivation rather than sleep treatment.
  sourceId: aggarwal2011
- claim: Taurine prevents dementia.
  assessment: A large dietary cohort found no protective association; observational results cannot determine the effects of isolated high-dose supplementation.
  sourceId: zhang2025
- claim: Low circulating taurine is a universal marker of aging, so raising it proves rejuvenation.
  assessment: A 2025 investigation found circulating taurine increased or remained unchanged with age across several cohorts. Neither association nor concentration correction demonstrates human lifespan extension.
  sourceId: fernandez2025
- claim: Increased plasma taurine proves functional benefit.
  assessment: Directly contradicted as a general rule by a trial showing substantial plasma increases without improved insulin secretion or sensitivity.
  sourceId: brons2004
```

## Interactions

```yaml
- substanceClass: Antihypertensive medication
  interactionType: Potential pharmacodynamic addition
  assessment: Blood-pressure lowering makes additive hypotension biologically plausible.
  uncertainty: The blood-pressure efficacy trial was not a dedicated interaction study and does not quantify risk for particular drug combinations.
  sourceId: sun2016
- substanceClass: Glucose-lowering medication
  interactionType: Potential pharmacodynamic addition
  assessment: Changes in fasting glucose make an additional glucose-lowering effect plausible.
  uncertainty: Clinical hypoglycemia risk and medication-specific interactions were not established by the small metabolic trial.
  sourceId: maleki2020
- substanceClass: Caffeine
  interactionType: Directly studied coadministration
  assessment: Combined effects differed by endpoint, while taurine alone was ineffective in the 2026 low-dose performance experiment.
  uncertainty: These findings establish neither universal synergy nor protection from caffeine adverse effects.
  sourceId: kose2026
- substanceClass: Other medicines
  interactionType: Incompletely characterized
  assessment: The official safety assessment explicitly distinguished missing interaction information from evidence that interactions do not occur.
  limitation: This is not a validated comprehensive interaction list.
  sourceId: vkm2015
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: laidlaw1990
  title: "The taurine content of common foodstuffs."
  authors: "Laidlaw SA; Grosvenor M; Kopple JD"
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2352336/
  kind: Food-composition study
  insight: Direct measurements distinguish dietary sources from supplemental exposure.
  limitation: Composition data, not clinical efficacy.
  funding: PubMed indexes governmental and other support; full declaration not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: ghandforoush2010
  title: "Pharmacokinetics of oral taurine in healthy volunteers."
  authors: "Ghandforoush-Sattari M; Mashayekhi S; Krishna CV; Thompson JP; Routledge PA"
  year: 2010
  url: https://doi.org/10.4061/2010/346237
  kind: Human pharmacokinetic study
  insight: Direct single-dose oral plasma kinetics.
  limitation: Eight healthy men; no absolute bioavailability or tissue-duration determination.
  funding: Funding statement not identified in retrieved text; Life Extension manufactured the capsules.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No explicit declaration identified in retrieved text.
  conflictOfInterestStatus: not-assessed

- id: galloway2008
  title: "Seven days of oral taurine supplementation does not increase muscle taurine content or alter substrate metabolism during prolonged exercise in humans."
  authors: "Galloway SDR; Talanian JL; Shoveller AK; Heigenhauser GJF; Spriet LL"
  year: 2008
  url: https://doi.org/10.1152/japplphysiol.90525.2008
  kind: Controlled human physiology study
  insight: Plasma elevation did not imply increased muscle stores.
  limitation: Small, short experiment; randomization not established from accessed abstract.
  funding: Full funding declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: balshaw2013
  title: "The effect of acute taurine ingestion on 3-km running performance in trained middle-distance runners."
  authors: "Balshaw TG; Bampouras TM; Barry TJ; Sparks SA"
  year: 2013
  url: https://doi.org/10.1007/s00726-012-1372-1
  kind: Randomized crossover trial
  insight: Small positive running-performance result.
  limitation: Eight men and one acute testing protocol.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: rutherford2010
  title: "The effect of acute taurine ingestion on endurance performance and metabolism in well-trained cyclists."
  authors: "Rutherford JA; Spriet LL; Stellingwerff T"
  year: 2010
  url: https://doi.org/10.1123/ijsnem.20.4.322
  kind: Randomized crossover trial
  insight: Null performance finding despite altered total fat oxidation.
  limitation: Eleven trained men; acute exposure.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: kose2026
  title: "Effects of combined low-dose caffeine and taurine on anaerobic, neuromuscular, and cognitive performance: a double-blind randomized placebo-controlled crossover study."
  authors: "Köse Y; Ulaş M; Atay E"
  year: 2026
  url: https://doi.org/10.1186/s13102-026-01863-x
  kind: Randomized crossover trial
  insight: Taurine-alone and cognitive outcomes were null.
  limitation: Acute low dose, young men and retrospective registration.
  funding: Authors reported no funding; MyProtein products were used. Donation status was not established.
  sponsorshipStatus: none-reported
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: none-declared

- id: sun2016
  title: "Taurine Supplementation Lowers Blood Pressure and Improves Vascular Function in Prehypertension: Randomized, Double-Blind, Placebo-Controlled Study."
  authors: "Sun Q; Wang B; Li Y; Sun F; Li P; Xia W; Zhou X; Li Q; Wang X; Chen J; Zeng X; Zhao Z; He H; Liu D; Zhu Z"
  year: 2016
  url: https://doi.org/10.1161/HYPERTENSIONAHA.115.06624
  kind: Randomized controlled trial
  insight: Clinic and ambulatory blood-pressure effects.
  limitation: Twelve weeks; no cardiovascular-event endpoint.
  funding: Publisher identifies National Basic Research Program of China support; complete grant list not verified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Publisher disclosure states none.
  conflictOfInterestStatus: none-declared

- id: li2025
  title: "Taurine ameliorates blood pressure and vascular function in patients with type 2 diabetes: Randomized, double-blind, placebo-controlled trial."
  authors: "Li Y; Wang Q; Liu Y; Li Q; Xia W; Lin S; Yang Q; Scholze A; Zhao Z; He H; Zhang H; Yan Z; Tepel M; Mu H; Zhu Z; Liu D"
  year: 2025
  url: https://doi.org/10.1016/j.isci.2025.112719
  kind: Randomized controlled trial
  insight: Vascular surrogate improvements in diabetes.
  limitation: Single center, differential attrition and excluded high-risk populations.
  funding: NSFC grants 82070441 and 82495173; National Key R&D Program 2022YFA1104204. Disha manufactured study products.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: none-declared

- id: maleki2020
  title: "The effects of taurine supplementation on glycemic control and serum lipid profile in patients with type 2 diabetes: a randomized, double-blind, placebo-controlled trial."
  authors: "Maleki V; Alizadeh M; Esmaeili F; Mahdavi R"
  year: 2020
  url: https://doi.org/10.1007/s00726-020-02859-8
  kind: Randomized controlled trial
  insight: Positive fasting markers with null HbA1c and anthropometric findings.
  limitation: Small, eight-week study.
  funding: Vice Chancellor for Research, Nutrition Research Center, Tabriz University of Medical Sciences.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Authors declared none.
  conflictOfInterestStatus: none-declared

- id: brons2004
  title: "Effect of taurine treatment on insulin secretion and action, and on serum lipid levels in overweight men with a genetic predisposition for type II diabetes mellitus."
  authors: "Brøns C; Spohr C; Storgaard H; Dyerberg J; Vaag A"
  year: 2004
  url: https://doi.org/10.1038/sj.ejcn.1601955
  kind: Randomized crossover trial
  insight: Null clamp and insulin-secretion results despite higher plasma taurine.
  limitation: Twenty selected men.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: azuma1985
  title: "Therapeutic effect of taurine in congestive heart failure: a double-blind crossover trial."
  authors: "Azuma J; Sawamura A; Awata N; Ohta H; Hamaguchi T; Harada H; Takihara K; Hasegawa H; Yamagami T; Ishiyama T"
  year: 1985
  url: https://doi.org/10.1002/clc.4960080507
  kind: Randomized crossover trial
  insight: Historical symptomatic heart-failure signal.
  limitation: Fourteen patients; dose and complete methods unavailable in accessed abstract.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: ahmadian2017
  title: "Taurine Supplementation Improves Functional Capacity, Myocardial Oxygen Consumption, and Electrical Activity in Heart Failure."
  authors: "Ahmadian M; Dabidi Roshan V; Ashourpore E"
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28118062/
  kind: Retracted publication
  insight: PubMed retraction indexing supports exclusion from efficacy interpretation.
  limitation: Retraction grounds were not independently assessed here.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed

- id: giles2012
  title: "Differential cognitive effects of energy drink ingredients: caffeine, taurine, and glucose."
  authors: "Giles GE; Mahoney CR; Brunyé TT; Gardony AL; Taylor HA; Kanarek RB"
  year: 2012
  url: https://doi.org/10.1016/j.pbb.2012.07.004
  kind: Randomized ingredient-separation study
  insight: Mixed taurine effects contrasted with broader caffeine effects.
  limitation: Caffeine withdrawal, multiple tasks and ingredient interactions.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: chupel2018
  title: "Exercise and taurine in inflammation, cognition, and peripheral markers of blood-brain barrier integrity in older women."
  authors: "Chupel MU; Minuzzi LG; Furtado G; Santos ML; Hogervorst E; Filaire E; Teixeira AM"
  year: 2018
  url: https://doi.org/10.1139/apnm-2017-0775
  kind: Controlled trial indexed as randomized
  insight: Cognitive improvement was reported only with combined exercise and taurine.
  limitation: Small groups; peripheral biomarkers do not directly establish brain protection.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: aggarwal2011
  title: "Effect of caffeine and taurine on simulated laparoscopy performed following sleep deprivation."
  authors: "Aggarwal R; Mishra A; Crochet P; Sirimanna P; Darzi A"
  year: 2011
  url: https://doi.org/10.1002/bjs.7600
  kind: Randomized crossover trial
  insight: Separates sleep-deprivation performance research from sleep-treatment claims.
  limitation: No taurine-alone arm or actual sleep-efficacy endpoint.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: vidot2018
  title: "Randomised clinical trial: oral taurine supplementation versus placebo reduces muscle cramps in patients with chronic liver disease."
  authors: "Vidot H; Cvejic E; Carey S; Strasser SI; McCaughan GW; Allman-Farinelli M; Shackel NA"
  year: 2018
  url: https://doi.org/10.1111/apt.14950
  kind: Randomized crossover trial
  insight: Patient-reported cramp improvement.
  limitation: Nineteen of forty-nine participants did not complete the protocol.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: sasidharan2026
  title: "A randomized controlled trial of L-taurine for fatigue in decompensated cirrhosis."
  authors: "Sasidharan S; Philips CA; Tharakan A; Ahamed R; Oommen TT; Menachery J; Varghese R; Augustine P"
  year: 2026
  url: https://doi.org/10.1097/HC9.0000000000000938
  kind: Open-label randomized trial
  insight: Overall fatigue, quality-of-life and physical-function findings were null.
  limitation: Unblinded patient reporting and exploratory subgroup findings.
  funding: Declaration not available in retrieved portions.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not available in retrieved portions.
  conflictOfInterestStatus: not-assessed

- id: mottaghi2026
  title: "Could taurine supplementation improve graft functions after liver transplantation? A randomized clinical trial among liver transplant recipients."
  authors: "Mottaghi S; Vazin A; Nikoupour H; Firoozifar SM; Haem E; Heidari R; Shafiekhani M"
  year: 2026
  url: https://doi.org/10.1016/j.clnesp.2026.102920
  kind: Randomized controlled trial
  insight: Biochemical and early recovery signals after transplantation.
  limitation: Early-death exclusions and abstract-only access restrict mortality interpretation.
  funding: Full declaration not accessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: zhang2025
  title: "Taurine Intake, Plasma Taurine Concentration, and Dementia Risk: Findings From the Malmö Diet and Cancer Study."
  authors: "Zhang N; Borné Y; Hagberg E; Palmqvist S; Glans I; Ottosson F; Samuelsson J; Nägga K; Hansson O; Duarte JMN; Sonestedt E"
  year: 2025
  url: https://doi.org/10.1111/jnc.70298
  kind: Prospective observational cohort
  insight: No dietary or plasma-taurine association with dementia.
  limitation: Not randomized and not a supplement trial.
  funding: PubMed indexes non-US support; complete declaration not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: suliman2002
  title: "Accumulation of taurine in patients with renal failure."
  authors: "Suliman ME; Bárány P; Divino Filho JC; Lindholm B; Bergström J"
  year: 2002
  url: https://doi.org/10.1093/ndt/17.3.528
  kind: Clinical letter
  insight: Accumulation and neurological symptoms in dialysis patients.
  limitation: Small uncontrolled report; indexing and publisher excerpts were accessible, not the complete dataset.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed

- id: fernandez2025
  title: "Is taurine an aging biomarker?"
  authors: "Fernandez ME; Bernier M; Price NL; Camandola S; Aon MA; Vaughan K; Mattison JA; Preston JD; Jones DP; Tanaka T; Tian Q; González-Freire M; Ferrucci L; de Cabo R"
  year: 2025
  url: https://doi.org/10.1126/science.adl2116
  kind: Human-cohort and comparative biomarker study
  insight: Challenges a universal age-related decline in circulating taurine.
  limitation: Does not test human supplementation or lifespan extension.
  funding: PubMed indexes NIH intramural and other support; complete declaration not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: sharma2025
  title: "Taurine from tumour niche drives glycolysis to promote leukaemogenesis."
  authors: "Sharma S; Rodems BJ; Baker CD; Kaszuba CM; Franco EI; Smith BR; Ito T; Swovick K; Welle K; Zhang Y; Rock P; Chaves FA; Ghaemmaghami S; Calvi LM; Ganguly A; Burack WR; Becker MW; Liesveld JL; Brookes PS; Munger JC; Jordan CT; Ashton JM; Bajaj J"
  year: 2025
  url: https://doi.org/10.1038/s41586-025-09018-7
  kind: Experimental oncology study
  insight: Identifies a taurine-transporter dependency in myeloid leukemia models.
  limitation: Not a clinical supplement-safety study.
  funding: PubMed indexes NIH extramural support; full declaration not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration not accessed.
  conflictOfInterestStatus: not-assessed

- id: vkm2015
  title: 'Risk assessment of "other substances" – Taurine'
  organization: Norwegian Scientific Committee for Food Safety
  year: 2015
  url: https://vkm.no/download/18.5387be10161937390293e0f/1518616535578/Risk%20assessment%20of%20other%20substances%20%E2%80%93%20Taurine.pdf
  kind: Official risk assessment
  insight: Exposure-dependent conclusions and explicit uncertainty.
  limitation: Historical assessment, partly animal-based; not a clinical efficacy review.
  funding: Prepared at the Norwegian Food Safety Authority's request.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Expert-independence framework described; individual declarations not assessed.
  conflictOfInterestStatus: not-assessed

- id: efsa2009safety
  title: "EFSA adopts opinion on two ingredients commonly used in some energy drinks"
  organization: European Food Safety Authority
  year: 2009
  url: https://www.efsa.europa.eu/en/news/efsa-adopts-opinion-two-ingredients-commonly-used-some-energy-drinks
  kind: Official assessment summary
  insight: No concern at assessed taurine exposures.
  limitation: Not an unrestricted supplement-safety conclusion.
  funding: Official agency assessment.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Individual panel declarations not assessed.
  conflictOfInterestStatus: not-assessed

- id: efsa2009claims
  title: "Scientific Opinion on the substantiation of health claims related to taurine and protection of DNA, proteins and lipids from oxidative damage (ID 612, 1658, 1959), energy-yielding metabolism (ID 614), and delay in the onset of fatigue and enhancement of physical performance (ID 1660) pursuant to Article 13(1) of Regulation (EC) No 1924/2006"
  organization: EFSA Panel on Dietetic Products, Nutrition and Allergies
  year: 2009
  url: https://doi.org/10.2903/j.efsa.2009.1260
  kind: Official health-claim assessment
  insight: Specified cause-and-effect claims were not substantiated.
  limitation: Historical evidence assessment, not a prohibition on taurine.
  funding: Official agency assessment.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Individual declarations not assessed.
  conflictOfInterestStatus: not-assessed

- id: fda2015
  title: "Agency Response Letter GRAS Notice No. GRN 000586"
  organization: U.S. Food and Drug Administration
  year: 2015
  url: https://www.fda.gov/food/gras-notice-inventory/agency-response-letter-gras-notice-no-grn-000586
  kind: Regulatory response letter
  insight: Records a no-questions response for a specific notified food use.
  limitation: Neither FDA's own GRAS determination nor therapeutic approval.
  funding: Agency review of an Intertek-submitted dossier; not independent trial funding.
  sponsorshipStatus: not-applicable
  conflictsOfInterest: Notifier-selected GRAS panel; individual financial disclosures not assessed.
  conflictOfInterestStatus: not-assessed

- id: fda2026
  title: "Questions and Answers on Dietary Supplements"
  organization: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: Current regulatory guidance
  insight: Supplements are not FDA-approved before marketing.
  limitation: General framework, not product-specific compliance clearance.
  funding: Official agency publication.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Individual declarations not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  context: Dietary-supplement regulation
  statement: FDA does not approve dietary supplements for safety and effectiveness before marketing; manufacturers remain responsible for applicable safety and labeling requirements.
  limitation: Market availability is not therapeutic approval.
  sourceId: fda2026
- jurisdiction: United States
  context: GRAS Notice 000586
  statement: The 2015 no-questions letter concerned taurine at 0.0045% in noncarbonated flavored water-based beverages.
  limitation: FDA explicitly did not make its own GRAS determination; the letter does not approve gram-dose treatment or associated health claims.
  sourceId: fda2015
- jurisdiction: European Union
  context: Historical EFSA health-claim assessment
  statement: The 2009 opinion did not substantiate the specified oxidative-protection, energy-metabolism or fatigue/performance claims.
  limitation: An EFSA scientific opinion is not a blanket statement of current product legality in every European jurisdiction.
  sourceId: efsa2009claims
```