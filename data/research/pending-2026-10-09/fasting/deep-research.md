# Research Report: Research exactly fasting as a protocol family (slug fasting). Return a compact complete BHWiki Markdown article only, <=4500 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; fenced yaml list for every non-prose section. Define time-restricted eating, alternate-day fasting, and prolonged fasting separately with exact windows and calorie comparators. Use controlled human weight, glycemic, blood-pressure, lean-mass outcomes; distinguish calorie restriction and adherence, and mark autophagy/longevity claims as unproven. Every factual claim needs a source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus, using not-assessed when unknown. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: fasting
title: Fasting
x-shape:
  kind: protocol-family
  axes:
    - fasting_window
    - eating_window
    - energy_intake
  members:
    - time-restricted-eating
    - alternate-day-fasting
    - prolonged-fasting
  evidence_scope: controlled-human-outcomes
---

## Summary

```yaml
- statement: "Fasting is a family of schedules that restrict food, caloric beverages, or energy intake for defined periods; its best-established human effects are modest weight and cardiometabolic changes."
  sourceId: [S1, S2, S3]
- statement: "When energy intake is matched, fasting protocols generally produce outcomes similar to continuous calorie restriction (CER), although alternate-day fasting (ADF) has a small average weight advantage over CER in one 2025 network meta-analysis."
  sourceId: [S2, S6]
- statement: "Human evidence is strongest for time-restricted eating (TRE) and ADF; comparative controlled evidence for multi-day water-only prolonged fasting is sparse and mostly non-randomized."
  sourceId: [S2, S8]
- statement: "Autophagy at a specified fasting hour, human lifespan extension, detoxification, and disease-cure claims remain unproven in humans."
  sourceId: [S12, S15]
```

## Description

```yaml
- term: fasting
  definition: "Voluntary abstinence from some or all foods, or from foods and beverages."
  sourceId: [S1]
- term: calorie_restriction
  abbreviation: CR
  definition: "Energy intake below the amount required to maintain current body weight without malnutrition; daily CR is also called continuous energy restriction (CER)."
  sourceId: [S1]
- term: time_restricted_eating
  abbreviation: TRE
  exact_window: "A consistent daily eating period leaving at least 14 consecutive fasting hours in each 24-hour cycle; therefore the eating window is no more than 10 hours. A common studied schedule is 16:8: 16 hours fasting and 8 hours eating."
  calories: "No explicit calorie ceiling during the eating window; trials may be ad libitum, calorie-counted, or calorie-matched."
  comparator: "Usual/ad-libitum eating or CER, commonly about 25% below estimated or baseline energy needs."
  sourceId: [S1, S3, S4]
- term: alternate_day_fasting
  abbreviation: ADF
  exact_window: "A repeating 48-hour cycle consisting of one 24-hour water-only fast followed by one 24-hour ad-libitum eating day."
  calories: "0 kcal on the water-only fast day; alternate-day modified fasting (ADMF) permits up to 25% of daily energy needs on the fast day, often approximately 500–800 kcal depending on individual requirements."
  comparator: "Ad-libitum diet or CER, commonly 75% of baseline or estimated daily energy on every day."
  sourceId: [S1, S5, S6]
- term: prolonged_fasting
  abbreviation: PF
  exact_window: "At least 4 consecutive days under the international fasting terminology consensus; studies commonly examine approximately 5–20 days."
  calories: "Water-only or complete fasting: 0 kcal; fluid-only modified fasting: up to 500 kcal/day. A fasting-mimicking diet (FMD), commonly up to approximately 1,000 kcal/day for 3–7 days, is a separate protocol and is not water-only PF."
  comparator: "No universal CER comparator; controlled comparisons are uncommon for true water-only PF."
  sourceId: [S1, S8, S9]
- term: related_protocol
  name: 5:2
  definition: "Two nonconsecutive modified-fasting days per week alternating with five eating days; fasting-day energy is commonly no more than 25% of usual needs."
  sourceId: [S1, S6]
```

## Evidence note

```yaml
- evidence_base: "A 2025 network meta-analysis included 99 randomized clinical trials and 6,582 adults; 720 were healthy and 5,862 had existing health conditions."
  sourceId: [S2]
- comparator_finding: "All fasting strategies and CER reduced weight versus ad-libitum eating; ADF was the only fasting strategy with a statistically significant additional weight reduction versus CER, mean difference -1.29 kg (95% CI -1.99 to -0.59), moderate certainty."
  sourceId: [S2]
- clinical_context: "The reported ADF advantage was small, and the same review used 2.0 kg as a minimally important difference for weight change."
  sourceId: [S2]
- calorie_confounding: "Trials with an ad-libitum comparator combine fasting schedule effects with any resulting energy deficit; calorie-matched trials more directly test timing or distribution."
  sourceId: [S2, S3, S4, S6]
- adherence: "Adherence and retention vary by regimen and duration; longer-term trials are limited, and participant completion is not equivalent to adherence to the prescribed fasting window."
  sourceId: [S2, S3, S4, S6]
- prolonged_fasting_gap: "A review identified eight human prolonged-fasting trials but noted limited controlled evidence and inadequate robust body-composition measurement."
  sourceId: [S8]
- longevity_gap: "Human fasting trials generally last weeks or months and focus on weight or biomarkers rather than mortality, lifespan, or validated aging endpoints."
  sourceId: [S12, S15]
```

## Doses

```yaml
- protocol: TRE
  studied_schedule: "14–20 hours fasting daily; 4–10 hours eating daily; 16:8 is common."
  fast_day_calories: "0 kcal from food and caloric beverages during the fasting window."
  eating_window_calories: "Ad libitum or prescribed calories; no calorie limit is intrinsic to TRE."
  comparator_calories: "Usual intake, or CER such as 25% below baseline or estimated maintenance."
  sourceId: [S1, S3, S4]
- protocol: ADF
  studied_schedule: "24-hour fast day alternating with 24-hour eating day."
  fast_day_calories: "0 kcal for strict ADF; up to 25% of daily energy for ADMF."
  eating_day_calories: "Usually ad libitum; some trials prescribe a compensatory intake."
  comparator_calories: "CER commonly targets approximately 75% of daily baseline or estimated needs on every day."
  sourceId: [S1, S5, S6]
- protocol: PF
  studied_schedule: "At least 4 consecutive days; human studies commonly span 5–20 days."
  fast_calories: "0 kcal for water-only fasting; up to 500 kcal/day for fluid-only modified fasting."
  refeeding: "Refeeding is part of the studied clinical protocol in many prolonged-fasting programs and is not equivalent to the fasting dose."
  sourceId: [S1, S8, S13]
- protocol: FMD
  studied_schedule: "Approximately 3–7 days per cycle."
  calories: "Usually up to approximately 1,000 kcal/day with restricted protein and refined carbohydrate; this is fasting-mimicking, not complete fasting."
  sourceId: [S1, S9]
```

## Pharmacokinetics

```yaml
- scope: "Fasting has no conventional pharmacokinetic dose, half-life, or clearance profile because it is a behavioral and physiological state rather than an exogenous drug."
  sourceId: [S1]
- physiological_time_course: "With increasing fasting duration, glycogen use is followed by greater lipolysis, free-fatty-acid availability, gluconeogenesis, and ketone-body production; the timing varies with prior carbohydrate intake, activity, body composition, and health status."
  sourceId: [S1, S8, S14]
- medication_interaction: "Food absence can alter the pharmacodynamic risk of glucose-lowering medicines and diuretics even when drug pharmacokinetics are unchanged."
  sourceId: [S11]
- autophagy_timing: "No validated human pharmacokinetic-style clock identifies an autophagy threshold such as 16, 24, or 72 hours."
  sourceId: [S12, S15]
```

## Modifiers

```yaml
- modifier: achieved_energy_intake
  effect: "Weight change tracks the realized energy deficit more consistently than the fasting label; in a 12-month no-calorie-counting trial, TRE reduced reported intake by approximately 425 kcal/day and CER by approximately 405 kcal/day."
  sourceId: [S4]
- modifier: comparator_design
  effect: "A fasting schedule compared with ad-libitum eating tests both timing and energy reduction; a calorie-matched CER comparator isolates timing more effectively."
  sourceId: [S2, S6]
- modifier: timing
  effect: "Early versus late TRE may produce different glucose and blood-pressure responses, but the independent effect of clock timing remains less certain than the effect of total energy intake."
  sourceId: [S2, S7]
- modifier: baseline_risk
  effect: "Observed effects vary with obesity, diabetes, metabolic syndrome, baseline blood pressure, and baseline glycemia; many trials enrolled adults with overweight or obesity."
  sourceId: [S2, S3, S6]
- modifier: lean_mass_measurement
  effect: "DXA-derived fat-free mass can change with glycogen and water shifts; prolonged-fasting reviews identify body-composition measurement as a major evidence limitation."
  sourceId: [S6, S8]
- modifier: adherence
  effect: "Fasting may simplify meal decisions for some participants, but adherence is heterogeneous and not consistently superior to CER."
  sourceId: [S2, S4, S6]
```

## Effects

```yaml
- outcome: body_weight
  effect: "Fasting usually lowers weight relative to ad-libitum eating when it reduces energy intake; average superiority over CER is small and inconsistent."
  evidence: "ADF -1.29 kg versus CER in the 2025 network meta-analysis; no superiority of TRE over CER in 12-month randomized trials."
  sourceId: [S2, S3, S4, S5]
- outcome: glycemia
  effect: "TRE can modestly lower fasting glucose versus non-TRE controls, while HbA1c and glycemic outcomes generally do not differ consistently from CER."
  sourceId: [S2, S6, S10]
- outcome: blood_pressure
  effect: "Blood pressure may fall with weight loss or fasting, but a consistent advantage over CER has not been established; an earlier TRE meta-analysis found no significant pooled systolic or diastolic difference versus controls."
  sourceId: [S2, S7, S10]
- outcome: lean_mass
  effect: "Lean mass is not reliably preserved by fasting; pooled intermittent-energy-restriction trials showed a small additional fat-free-mass reduction versus CER, while a major 12-month TRE trial found no material between-group difference."
  magnitude: "Fat-free mass difference -0.20 kg (95% CI -0.39 to -0.01) for combined intermittent protocols versus CER."
  sourceId: [S3, S6]
- outcome: subjective_and_gastrointestinal_effects
  effect: "Reported effects include hunger, fatigue, headache, dizziness, constipation, nausea, and diarrhea; randomized evidence has not shown a significant overall increase in fatigue, headache, dizziness, or dropout versus control, although dizziness may be numerically higher in some non-early TRE subgroups."
  sourceId: [S2, S16]
- outcome: ketosis
  effect: "Longer fasts increase circulating ketones; this physiological shift is not evidence of superior clinical outcomes or longevity."
  sourceId: [S8, S14]
```

## Outcomes

```yaml
- protocol: TRE
  study: "Liu et al., 2022; 139 adults with obesity; 12 months."
  intervention: "Eating from 08:00 to 16:00 plus calorie restriction: 1,500–1,800 kcal/day for men and 1,200–1,500 kcal/day for women."
  comparator: "The same calorie restriction without a time window."
  weight: "Mean loss -8.0 kg versus -6.3 kg; net difference -1.8 kg (95% CI -4.0 to 0.4; P=0.11)."
  glycemia_blood_pressure_lean_mass: "Waist circumference, body fat, lean mass, blood pressure, and metabolic-risk outcomes were consistent with no significant between-group advantage."
  completion: "118 of 139 participants completed the 12-month assessment."
  sourceId: [S3]
- protocol: TRE
  study: "12-month randomized trial; 90 adults with obesity."
  intervention: "8-hour TRE from 12:00 to 20:00 without calorie counting."
  comparator: "25% daily CR and a control eating over at least 10 hours/day."
  weight: "Compared with control, TRE lost -4.61 kg and CR lost -5.42 kg; TRE versus CR difference 0.81 kg (95% CI -3.07 to 4.69; P=0.68)."
  energy_intake: "Reported intake fell approximately 425 kcal/day with TRE and 405 kcal/day with CR."
  sourceId: [S4]
- protocol: ADF
  study: "Trepanowski et al., 2017; one-year randomized trial in adults with obesity."
  intervention: "ADF with approximately 25% of energy on fast days and ad-libitum intake on alternate days."
  comparator: "Daily CR and a weight-stable control."
  weight: "At month 6, ADF and daily CR each lost -6.8% relative to control; at month 12, ADF lost -6.0% and daily CR -5.3%, indicating no significant practical superiority."
  sourceId: [S5]
- protocol: intermittent_energy_restriction
  study: "28 randomized trials, 2–52 weeks; TRE, ADF, and 5:2 versus CER."
  outcomes: "Combined intermittent protocols versus CER: weight -0.42 kg (95% CI -0.96 to 0.13), fat mass -0.31 kg (95% CI -0.98 to 0.36), fat-free mass -0.20 kg (95% CI -0.39 to -0.01), and waist circumference -0.91 cm (95% CI -1.76 to -0.06). Glucose, insulin, HOMA-IR, lipids, and blood pressure did not differ overall."
  sourceId: [S6]
- protocol: fasting_strategies
  study: "99 randomized trials, 6,582 adults."
  outcomes: "All fasting strategies reduced weight versus ad-libitum eating; ADF was the only strategy with a statistically significant additional weight reduction versus CER, -1.29 kg (95% CI -1.99 to -0.59). No consistent HbA1c or HDL advantage was found across fasting, CER, and ad-libitum comparisons."
  interpretation: "Network estimates support broadly similar clinical effects between fasting and CER, with a small short-term ADF signal."
  sourceId: [S2]
- protocol: FMD_not_PF
  study: "60 women with obesity; 2-month randomized trial."
  intervention: "Five-day FMD cycles versus a continuous approximately 500-kcal/day energy deficit."
  weight: "FMD -1.13 kg versus CER -2.29 kg; P=0.06."
  body_composition_glycemia: "Favorable fat-mass and muscle-mass findings occurred in the FMD group; adjusted insulin-resistance findings were not statistically significant."
  interpretation: "These results cannot be used as controlled evidence for zero-calorie water-only PF."
  sourceId: [S9]
- protocol: PF
  controlled_human_evidence: "Direct comparative evidence for multi-day water-only PF remains sparse; available human studies are predominantly uncontrolled, pre–post, medically supervised, or heterogeneous in refeeding and diet composition."
  sourceId: [S8]
```

## Mechanisms

```yaml
- mechanism: energy_balance
  status: "best-supported practical mechanism"
  description: "Restricting eating opportunities can reduce total energy intake, while fasting and CER can produce similar weight loss when energy intake is similar."
  sourceId: [S2, S3, S4, S6]
- mechanism: metabolic_switch
  status: "physiologically established; clinical superiority unproven"
  description: "Fasting shifts substrate use from glycogen and glucose toward lipolysis, free fatty acids, gluconeogenesis, and ketone bodies, with associated changes in insulin, mTOR, AMPK, and related nutrient-sensing pathways."
  sourceId: [S1, S14]
- mechanism: circadian_alignment
  status: "plausible; human outcome evidence mixed"
  description: "Earlier eating windows may align food intake with circadian metabolic rhythms, but independent benefits beyond energy reduction are not consistently demonstrated."
  sourceId: [S2, S7]
- mechanism: autophagy
  status: "unproven in humans as a protocol-specific clinical mechanism"
  description: "Fasting-related autophagy is strongly supported in model organisms and is biologically plausible in humans, but validated tissue-specific autophagic flux and a human hour threshold have not been established."
  sourceId: [S12, S15]
- mechanism: longevity
  status: "unproven in humans"
  description: "Fasting can extend lifespan in some laboratory organisms, but no human fasting trial has demonstrated lifespan extension or mortality reduction attributable to fasting or autophagy."
  sourceId: [S1, S12, S15]
```

## Cautions

```yaml
- context: diabetes_with_insulin_or_secretagogues
  concern: "Fasting increases hypoglycemia risk with insulin, sulfonylureas, and meglitinides; excessive medication reduction can instead produce hyperglycemia or ketoacidosis."
  sourceId: [S11]
- context: type_1_diabetes_or_insulin_deficiency
  concern: "Fasting can increase risks of hypoglycemia, dehydration, and diabetic ketoacidosis, especially when insulin coverage is inadequate."
  sourceId: [S11]
- context: SGLT2_inhibitors_or_diuretics
  concern: "Reduced food and fluid intake can compound diuresis, dehydration, ketosis, and euglycemic ketoacidosis risks."
  sourceId: [S11]
- context: prolonged_fasting_and_refeeding
  concern: "Rapid nutritional replenishment after prolonged fasting or severe undernutrition can produce refeeding syndrome involving electrolyte and metabolic disturbances."
  sourceId: [S8, S13]
- context: pregnancy_lactation_minors_frailty_low_weight_or_eating_disorder_history
  concern: "These populations are underrepresented or excluded in the cited adult weight-loss trials, so efficacy and safety findings do not generalize."
  sourceId: [S2, S6]
- context: dry_fasting
  concern: "Dry fasting excludes water as well as food and is physiologically distinct from water-only fasting; dehydration risk is therefore not comparable."
  sourceId: [S1]
- context: common_adverse_events
  concern: "Across randomized trials, commonly reported events included fatigue, headache, dizziness, constipation, and diarrhea; severe events were rarely reported, but trial durations and adverse-event ascertainment were limited."
  sourceId: [S2, S16]
```

## Claims

```yaml
- claim: "Fasting is superior to calorie restriction for weight loss."
  verdict: "Not established."
  evidence: "ADF showed a -1.29 kg advantage over CER in a 2025 network meta-analysis, but TRE showed no superiority in 12-month RCTs and pooled intermittent protocols were broadly similar to CER."
  sourceId: [S2, S3, S4, S5, S6]
- claim: "TRE causes weight loss without reducing calories."
  verdict: "Misleading."
  evidence: "No-calorie-counting TRE trials recorded substantial reductions in energy intake; the schedule can facilitate a deficit but does not demonstrate calorie-independent weight loss."
  sourceId: [S4]
- claim: "Fasting preserves muscle."
  verdict: "Unproven and protocol-dependent."
  evidence: "Pooled intermittent protocols showed a small fat-free-mass reduction versus CER, while individual FMD and exercise studies cannot establish preservation during water-only PF."
  sourceId: [S6, S8, S9]
- claim: "Autophagy begins at exactly 16 hours, 24 hours, or 72 hours."
  verdict: "Unproven in humans."
  evidence: "Human autophagic flux is difficult to measure and no validated fasting-hour threshold is established."
  sourceId: [S12, S15]
- claim: "Fasting extends human lifespan."
  verdict: "Unproven."
  evidence: "Human trials lack lifespan or mortality endpoints; organismal longevity findings are predominantly preclinical."
  sourceId: [S1, S12, S15]
- claim: "Fasting detoxes or cures disease."
  verdict: "Unsupported by the cited controlled human evidence."
  evidence: "Controlled trials primarily assess weight, glycemia, blood pressure, lipids, body composition, and symptoms rather than detoxification or disease cure."
  sourceId: [S2, S8, S10]
```

## Interactions

```yaml
- agent_or_class: insulin
  interaction: "Fasting increases hypoglycemia risk when exogenous insulin is continued without an appropriate individualized plan."
  sourceId: [S11]
- agent_or_class: sulfonylureas_and_meglitinides
  interaction: "These insulin-secretagogue classes have fasting-related hypoglycemia risk because they can stimulate insulin release despite reduced food intake."
  sourceId: [S11]
- agent_or_class: SGLT2_inhibitors
  interaction: "Reduced intake or prolonged fasting can interact with the drug's diuretic and ketone-related effects, increasing dehydration and ketoacidosis concern."
  sourceId: [S11]
- agent_or_class: diuretics
  interaction: "Fluid restriction or reduced fluid obtained from food can compound diuresis and volume depletion."
  sourceId: [S11]
- agent_or_class: glucose_lowering_regimens
  interaction: "Medication timing and total exposure may need individualized reassessment when meal frequency or fasting duration changes; self-directed dose changes are not evaluated by these trials."
  sourceId: [S11]
```

## Experience links

```yaml
- resource: "ClinicalTrials.gov: Calorie Restriction With or Without Time-Restricted Eating in Weight Loss"
  type: participant_and_trial_record
  url: "https://clinicaltrials.gov/study/NCT03745612"
  interpretation: "Registry information for the 8-hour TRE versus daily-calorie-restriction trial; not anecdotal evidence."
  sourceId: [S3]
- resource: "ClinicalTrials.gov: Time-Restricted Eating Without Calorie Counting for Weight Loss in a Racially Diverse Population"
  type: participant_and_trial_record
  url: "https://clinicaltrials.gov/study/NCT04692532"
  interpretation: "Registry information for TRE, CER, and control groups; not a treatment recommendation."
  sourceId: [S4]
- experience_signal: "Participant-reported fasting experiences in randomized trials most often involve hunger, fatigue, headache, dizziness, constipation, nausea, or diarrhea."
  sourceId: [S2, S16]
```

## References

```yaml
- sourceId: S1
  title: "International consensus on fasting terminology"
  authorsOrOrganization: "Daniela A. Koppold, Carolin Breinlinger, Etienne Hanslian, Christian Kessler, et al.; international fasting terminology consensus panel; Charité—Universitätsmedizin Berlin"
  year: 2024
  url: "https://edoc.mdc-berlin.de/id/eprint/24572/1/24572oa.pdf"
  kind: "expert Delphi consensus"
  insight: "Defines fasting, TRE, ADF, ADMF, short-term fasting, prolonged fasting, fluid-only fasting, and FMD."
  limitation: "Terminology consensus; not an efficacy or safety trial."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "Author disclosures are reported in the article; complete individual assessment not performed here."
  conflictOfInterestStatus: "reported; not-assessed"

- sourceId: S2
  title: "Intermittent fasting strategies and their effects on body weight and other cardiometabolic risk factors: systematic review and network meta-analysis of randomised clinical trials"
  authorsOrOrganization: "Zhila Semnani-Azad et al.; European Association for the Study of Diabetes and Diabetes and Nutrition Study Group"
  year: 2025
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12175170/"
  kind: "systematic review and network meta-analysis of randomized trials"
  insight: "Includes 99 trials and 6,582 adults; finds broadly similar fasting and CER outcomes with a small ADF weight signal."
  limitation: "Network comparisons, heterogeneous protocols, limited long-term trials, and variable adherence."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S3
  title: "Calorie Restriction with or without Time-Restricted Eating in Weight Loss"
  authorsOrOrganization: "Deying Liu et al.; Nanfang Hospital, Southern Medical University, and Tulane University"
  year: 2022
  url: "https://pubmed.ncbi.nlm.nih.gov/35443107/"
  kind: "12-month randomized controlled trial"
  insight: "8-hour TRE plus CR was not significantly better than the same CR without time restriction."
  limitation: "139 adults with obesity, unblinded, 118 completers, and both groups received calorie restriction."
  funding: "National Key Research and Development Project 2018YFA0800404 and others"
  sponsorshipStatus: "government/academic and other; exact mix not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S4
  title: "Time-Restricted Eating Without Calorie Counting for Weight Loss in a Racially Diverse Population: A Randomized Controlled Trial"
  authorsOrOrganization: "University of Illinois Chicago trial team"
  year: 2023
  url: "https://pubmed.ncbi.nlm.nih.gov/37364268/"
  kind: "12-month randomized controlled trial"
  insight: "TRE without calorie counting reduced reported intake and weight versus control but was not better than 25% CER."
  limitation: "90 participants, 77 completers, unblinded, and not powered for large between-diet differences."
  funding: "U.S. National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases"
  sponsorshipStatus: "government"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S5
  title: "Effect of Alternate-Day Fasting on Weight Loss, Weight Maintenance, and Cardioprotection Among Metabolically Healthy Obese Adults: A Randomized Clinical Trial"
  authorsOrOrganization: "John F. Trepanowski et al.; University of Illinois Chicago"
  year: 2017
  url: "https://pubmed.ncbi.nlm.nih.gov/28459931/"
  kind: "12-month randomized controlled trial"
  insight: "ADF and daily CR produced similar one-year weight loss."
  limitation: "Single-center study in metabolically healthy adults with obesity; adherence and generalizability limit interpretation."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S6
  title: "Effects of Intermittent Energy Restriction Compared with Those of Continuous Energy Restriction on Body Composition and Cardiometabolic Risk Markers: A Systematic Review and Meta-Analysis of Randomized Controlled Trials in Adults"
  authorsOrOrganization: "Maite M. Schroor et al.; Maastricht University"
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/37827491/"
  kind: "systematic review and meta-analysis"
  insight: "Across 28 trials, intermittent protocols were broadly similar to CER for weight and cardiometabolic outcomes."
  limitation: "Trials lasted 2–52 weeks; energy intake was not always matched; fat-free-mass differences were small."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S8
  title: "Efficacy and safety of prolonged water fasting: a narrative review of human trials"
  authorsOrOrganization: "Mark Ezpeleta, Sofia Cienfuegos, Shuhao Lin, Vasiliki Pavlou et al.; University of Illinois Chicago"
  year: 2023
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11494232/"
  kind: "narrative review of human trials"
  insight: "Summarizes prolonged water-only fasting studies, metabolic changes, safety signals, and body-composition limitations."
  limitation: "The underlying studies are few, heterogeneous, and predominantly uncontrolled."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S9
  title: "Effect of Fasting-Mimicking Diet or Continuous Energy Restriction on Weight Loss, Body Composition, and Appetite-Regulating Hormones Among Metabolically Healthy Women with Obesity: a Randomized Controlled, Parallel Trial"
  authorsOrOrganization: "Mehdi Sadeghian et al.; Ahvaz Jundishapur University of Medical Sciences"
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/33420673/"
  kind: "randomized controlled trial"
  insight: "A low-energy FMD was not significantly better than CER for weight loss over two months."
  limitation: "Small study of 60 women; FMD is not zero-calorie water-only PF."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S10
  title: "Intermittent fasting and health outcomes: an umbrella review of systematic reviews and meta-analyses of randomised controlled trials"
  authorsOrOrganization: "Ming-Li Sun et al.; international academic collaborators"
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/38500840/"
  kind: "umbrella review"
  insight: "Summarizes 23 meta-analyses and finds possible benefits for waist circumference, fat mass, fasting insulin, lipids, and blood pressure, with weaker SBP effects than CER."
  limitation: "Nested evidence, heterogeneous fasting definitions, and multiple comparisons reduce certainty for individual outcomes."
  funding: "National Key Research and Development Program of China; Natural Science Foundation of China; Shengjing Hospital and 345 Talent Project"
  sponsorshipStatus: "government/academic"
  conflictsOfInterest: "The authors declare no competing interests."
  conflictOfInterestStatus: "none declared"

- sourceId: S11
  title: "5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2025"
  authorsOrOrganization: "American Diabetes Association Professional Practice Committee"
  year: 2025
  url: "https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/5-Facilitating-Positive-Health-Behaviors-and-Well"
  kind: "clinical practice guideline"
  insight: "Identifies fasting-related hypoglycemia risk with insulin and secretagogues and dehydration or ketoacidosis concerns with selected regimens."
  limitation: "Focused on diabetes management, especially religious fasting; not a general fasting-efficacy review."
  funding: "American Diabetes Association"
  sponsorshipStatus: "professional society"
  conflictsOfInterest: "Individual author disclosures are provided in the guideline materials; not-assessed here."
  conflictOfInterestStatus: "reported; not-assessed"

- sourceId: S12
  title: "Calorie Restriction and Fasting Diets: What Do We Know?"
  authorsOrOrganization: "National Institute on Aging, National Institutes of Health"
  year: 2018
  url: "https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
  kind: "government evidence brief"
  insight: "States that firm conclusions about fasting benefits for human health and aging were not available."
  limitation: "Public evidence brief rather than a systematic review or controlled trial."
  funding: "U.S. National Institute on Aging"
  sponsorshipStatus: "government"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S13
  title: "Refeeding syndrome: what it is, and how to prevent and treat it"
  authorsOrOrganization: "H. M. Mehanna, J. Moledina, J. Travis"
  year: 2008
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2440847/"
  kind: "clinical narrative review"
  insight: "Describes metabolic complications associated with rapid refeeding after prolonged fasting or severe undernutrition."
  limitation: "Not a randomized fasting trial; much evidence concerns hospitalized or malnourished patients."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S14
  title: "Flipping the Metabolic Switch: Understanding and Applying the Health Benefits of Fasting"
  authorsOrOrganization: "Sarah D. Anton et al."
  year: 2018
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5783752/"
  kind: "mechanistic review"
  insight: "Explains substrate switching, ketogenesis, nutrient sensing, and candidate fasting pathways."
  limitation: "Mechanistic and preclinical evidence is substantially stronger than clinical outcome evidence."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S15
  title: "The ups and downs of caloric restriction and fasting: from molecular effects to clinical application"
  authorsOrOrganization: "S. J. Hofer, D. Carmona-Gutierrez, M. I. Mueller, F. Madeo"
  year: 2022
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8749464/"
  kind: "review"
  insight: "Distinguishes fasting from CR and discusses the limits of translating molecular and animal findings to humans."
  limitation: "Narrative review; not a new controlled clinical dataset."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"

- sourceId: S16
  title: "Adverse events profile associated with intermittent fasting in adults with overweight or obesity: a systematic review and meta-analysis of randomized controlled trials"
  authorsOrOrganization: "Nutrition Journal systematic-review team"
  year: 2024
  url: "https://link.springer.com/article/10.1186/s12937-024-00975-9"
  kind: "systematic review and meta-analysis of adverse events"
  insight: "Across 15 RCTs, fatigue, headache, dizziness, constipation, and diarrhea were common, without a significant overall increase versus control."
  limitation: "Adverse-event definitions were inconsistent, trials were heterogeneous, and certainty was low for most symptoms."
  funding: "not-assessed"
  sponsorshipStatus: "not-assessed"
  conflictsOfInterest: "not-assessed"
  conflictOfInterestStatus: "not-assessed"
```

## Legal

```yaml
- scope: "This is a descriptive evidence article about dietary protocol definitions and controlled human outcomes."
- claim_boundary: "It does not establish a medical indication, individualized dose, disease-treatment claim, or lifespan claim."
- jurisdiction: "Regulation of fasting clinics, commercial fasting products, advertising, and medical practice varies by jurisdiction and is not assessed."
```

## Research Metadata
- **Total research steps**: 63
- **Search queries executed**: 8
- **Citations found**: 17
- **Task ID**: resp_089f422baf34b049016ac948fb04a487d2839e4fe6c858e11d
- **Execution time**: 648.31 seconds

## Citations
1. [Source 1](https://clinicaltrials.gov/study/NCT03745612")
2. [Source 2](https://clinicaltrials.gov/study/NCT04692532")
3. [Source 3](https://edoc.mdc-berlin.de/id/eprint/24572/1/24572oa.pdf")
4. [Source 4](https://pmc.ncbi.nlm.nih.gov/articles/PMC12175170/")
5. [Source 5](https://pubmed.ncbi.nlm.nih.gov/35443107/")
6. [Source 6](https://pubmed.ncbi.nlm.nih.gov/37364268/")
7. [Source 7](https://pubmed.ncbi.nlm.nih.gov/28459931/")
8. [Source 8](https://pubmed.ncbi.nlm.nih.gov/37827491/")
9. [Source 9](https://pmc.ncbi.nlm.nih.gov/articles/PMC11494232/")
10. [Source 10](https://pubmed.ncbi.nlm.nih.gov/33420673/")
11. [Source 11](https://pubmed.ncbi.nlm.nih.gov/38500840/")
12. [Source 12](https://diabetesjournals.org/care/article/48/Supplement_1/S86/157563/5-Facilitating-Positive-Health-Behaviors-and-Well")
13. [Source 13](https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know")
14. [Source 14](https://pmc.ncbi.nlm.nih.gov/articles/PMC2440847/")
15. [Source 15](https://pmc.ncbi.nlm.nih.gov/articles/PMC5783752/")
16. [Source 16](https://pmc.ncbi.nlm.nih.gov/articles/PMC8749464/")
17. [Source 17](https://link.springer.com/article/10.1186/s12937-024-00975-9")
