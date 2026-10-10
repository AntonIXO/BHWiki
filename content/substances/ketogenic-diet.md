---
slug: ketogenic-diet
name: the ketogenic diet as a dietary protocol
subtitle: Evidence-specific research record.
aliases:
  - ketogenic diet
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags:
  - behavioral-scheduling
  - energy-buffer
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established for a dietary protocol; no drug-style half-life
  low: null
  high: null
  context: Not established for a dietary protocol. Blood βHB reflects changing dietary substrate, insulin, hepatic ketogenesis, tissue use, renal handling, and measurement timing (S1, S12, S16).
  sourceId: S1
  observationId: ketogenic-diet-pk
kinetics:
  onset: Usually develops over several days of carbohydrate restriction
  peak: No universal peak; BHB varies with meals, fasting, exercise, and insulin
  duration: Maintained only while dietary and metabolic conditions sustain ketosis
  bioavailability: Not applicable
  metabolism: Liver converts fatty-acid-derived acetyl-CoA to acetoacetate and βHB; tissues oxidize ketones
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

The ketogenic diet is a high-fat, carbohydrate-restricted, protein-adequate dietary protocol intended to induce endogenous ketone production. The strongest controlled indication is adjunctive treatment of drug-resistant epilepsy, especially in children; weight and short-term glycemic changes are not uniquely superior to other calorie-reducing diets over 1–2 years (S1, S2, S4, S6).

## Description

Classical epilepsy protocols commonly use a 3:1 or 4:1 gram ratio of fat to protein plus carbohydrate. Lifestyle trials often use less than 50 g carbohydrate/day or less than 10% of energy, with more variable protein and calories. Blood βHB ≥0.5 mmol/L is an operational ketosis threshold, not a universal target for cognition, weight, or longevity (S1, S6, S12).

## Evidence note

Epilepsy has randomized trials and Cochrane synthesis, but certainty is low or very low and protocols are unblinded. Weight, diabetes, cognition, athletic, and longevity evidence is heterogeneous; LDL-C, nutrient, kidney, bone, and gastrointestinal effects require separate interpretation (S1, S2, S4, S6, S12, S15).

## Doses

```yaml
- label: Classical epilepsy ketogenic diet
  amount: 3:1 or 4:1 grams fat per gram protein plus carbohydrate
  quantity: null
  quantityMax: null
  unit: ratio
  ingredient: Ketogenic diet
  formulation: Classical therapeutic KD
  route: Dietary protocol
  frequency: Daily
  duration: Individualized
  population: Children and adults with drug-resistant epilepsy
  purpose: Research or therapeutic protocol description; not a personal prescription.
  note: Calories, protein, fluid, and initiation are individualized to age, growth, feeding route, and clinical status (S1).
  sourceCategory: research
  sourceId: S1
- label: Modified Atkins diet
  amount: Approximately 10–15 g carbohydrate/day initially; sometimes up to 20 g/day
  quantity: 15
  quantityMax: 20
  unit: g carbohydrate/day
  ingredient: Ketogenic diet
  formulation: Modified Atkins
  route: Dietary protocol
  frequency: Daily
  duration: Individualized
  population: Therapeutic epilepsy programs
  purpose: Research or therapeutic protocol description; not a personal prescription.
  note: Protein, calories, and fluid are less fixed than in classical KD (S1).
  sourceCategory: research
  sourceId: S1
- label: Low-glycemic-index treatment
  amount: Carbohydrate allowance emphasizing foods with glycemic index below 50
  quantity: null
  quantityMax: null
  unit: protocol
  ingredient: Ketogenic diet
  formulation: LGIT
  route: Dietary protocol
  frequency: Daily
  duration: Individualized
  population: Therapeutic epilepsy programs
  purpose: Research or therapeutic protocol description; not a personal prescription.
  note: LGIT is a therapeutic variant, not a classical 4:1 ratio (S1).
  sourceCategory: research
  sourceId: S1
- label: Lifestyle very-low-carbohydrate ketogenic diet
  amount: Less than 50 g carbohydrate/day or less than 10% of energy
  quantity: 50
  quantityMax: null
  unit: g carbohydrate/day
  ingredient: Ketogenic diet
  formulation: Lifestyle VLCK
  route: Dietary protocol
  frequency: Daily
  duration: Study-specific
  population: Adults with overweight, obesity, or type 2 diabetes in trials
  purpose: Research protocol description; not a personal prescription.
  note: Protein and total calories vary substantially; labels such as keto and low-carbohydrate are not interchangeable (S6).
  sourceCategory: research
  sourceId: S6
- label: Operational ketosis measure
  amount: Blood βHB ≥0.5 mmol/L
  quantity: 0.5
  quantityMax: null
  unit: mmol/L
  ingredient: Ketogenic diet
  formulation: Blood βHB measurement
  route: Capillary blood
  frequency: Study-specific
  duration: Point measurement
  population: People following dietary protocols
  purpose: Biomarker threshold; not an efficacy target.
  note: The relationship between a higher BHB value and better non-epilepsy outcomes is not established (S1, S12).
  sourceCategory: reference
  sourceId: S1
```

## Pharmacokinetics

```yaml
- id: ketogenic-diet-pk
  analyte: β-hydroxybutyrate and related ketone markers
  route: Dietary protocol
  formulation: Classical, modified, and lifestyle ketogenic diets
  population: Human KD studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Not established for a dietary protocol; a KD has no drug-style single-compartment PK. Ketosis develops over days and varies with carbohydrate and protein intake, meal timing, fasting, exercise, energy balance, hydration, insulin, and renal handling. Nutritional ketosis is distinct from diabetic ketoacidosis (S1, S12, S16).
  sourceId: S1
  modelEligible: false
```

## Modifiers

```yaml
- label: Carbohydrate, protein, and insulin
  effect: Insulin availability and carbohydrate or protein dose modify probability and magnitude of BHB elevation.
  detail: The same reported carbohydrate intake does not guarantee the same BHB concentration.
  sourceId: S1
  observationId: ketogenic-diet-pk
  factorType: other
  direction: variable
- label: Adherence
  effect: Adherence is a major effect modifier.
  detail: Loss of carbohydrate adherence is a principal limitation in diabetes studies; fewer than 10% of DIETFITS participants reached the most extreme ketogenic-like intake pattern.
  sourceId: S6
  observationId: ketogenic-diet-pk
  factorType: other
  direction: variable
- label: Food matrix and diet quality
  effect: Fat and protein sources, fiber, vegetable intake, and weight change alter lipid and gastrointestinal outcomes even when carbohydrate restriction is similar.
  detail: Carbohydrate percentage alone does not determine lipid response.
  sourceId: S10
  observationId: ketogenic-diet-pk
  factorType: other
  direction: variable
- label: Clinical context
  effect: Growth, renal function, nephrolithiasis history, hyperlipidemia, diabetes, low bone density, pregnancy, and gastrointestinal disease alter feasibility and risk.
  detail: Therapeutic programs monitor these factors explicitly.
  sourceId: S1
  observationId: ketogenic-diet-pk
  factorType: other
  direction: variable
- label: Exercise and energy balance
  effect: Exercise and energy deficit alter substrate demand and body-composition interpretation.
  detail: Ketogenic diets can increase fat oxidation while high-intensity performance remains neutral or unfavorable in meta-analysis.
  sourceId: S14
  observationId: ketogenic-diet-pk
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: ketogenic-diet-effect-gastrointestinal
  conceptId: perception
  name: Gastrointestinal tolerance
  direction: Variable
  evidence: Subjective reports
  description: Constipation, emesis, abdominal pain, and other gastrointestinal symptoms are common management issues in therapeutic pediatric practice, especially early in treatment.
  sourceId: S1
  population: Pediatric therapeutic KD practice
  exposure: Classical and related therapeutic KD protocols
  instrument: Clinical adverse-event report
  magnitude: Reported in up to 50% in cited practice context
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-effect-healthy-cognition
  conceptId: perception
  name: Subjective mood and sleep
  direction: Variable
  evidence: Human research
  description: In a small isocaloric healthy-adult crossover study, three weeks of ketosis did not differ from a high-carbohydrate diet in mood or subjective sleep.
  sourceId: S11
  population: 11 healthy normal-weight adults
  exposure: Approximately 3-week isocaloric KD
  instrument: Mood and sleep questionnaires
  magnitude: "Null"
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: ketogenic-diet-outcome-epilepsy
  conceptId: attention
  name: Seizure frequency in drug-resistant epilepsy
  direction: Decreased
  evidence: Human research
  description: In the Neal randomized trial, analyzed KD participants had seizure frequency at 62% of baseline versus 137% of baseline in controls at three months; Cochrane found child seizure-freedom RR 3.16 (95% CI 1.20–8.35) and seizure-reduction RR 5.80 (95% CI 3.48–9.65), with low or very-low certainty.
  sourceId: S2
  population: Children with drug-resistant epilepsy
  exposure: Therapeutic KD versus usual care
  instrument: Seizure frequency
  magnitude: RR 3.16 seizure freedom; RR 5.80 seizure reduction
  reportType: measured-assessment
  conflictingSourceIds: []
  study:
    id: kd-epilepsy
    design: Randomized trials and Cochrane synthesis
    comparator: Usual care
    route: Dietary protocol
    formulation: Therapeutic KD
    assessmentTime: 3 months
    sampleSize: 145
- id: ketogenic-diet-outcome-weight
  conceptId: body-fat-mass
  name: Weight management
  direction: Decreased
  evidence: Human research
  description: Low-carbohydrate diets produced small early weight advantages in pooled trials, but Cochrane judged the overall difference little to none clinically and long-term superiority over balanced calorie-reducing diets was not durable.
  sourceId: S4
  population: Adults with overweight or obesity
  exposure: Low-carbohydrate or ketogenic-like diet versus low-fat/balanced comparator
  instrument: Body weight
  magnitude: Small early differences; long-term difference generally <1 kg
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-outcome-diabetes
  conceptId: hba1c
  name: Type 2 diabetes glycemia
  direction: Decreased
  evidence: Human research
  description: Across eight VLCK trials, HbA1c favored VLCK by 0.61 percentage points at three months and 0.58 at six months, but weight advantage was absent at 12 months and durable remission or event prevention was not established.
  sourceId: S6
  population: 648 adults with type 2 diabetes
  exposure: Very-low-carbohydrate ketogenic diet versus comparator diets
  instrument: HbA1c
  magnitude: −0.61% at 3 months; −0.58% at 6 months
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-outcome-lipids
  conceptId: ldl-cholesterol
  name: Lipid response
  direction: Variable
  evidence: Human research
  description: "Lipid responses are heterogeneous: a ketogenic-like DIETFITS subgroup had a transient approximately 12% LDL-C rise, and an Alzheimer disease KD trial increased LDL-C and total cholesterol."
  sourceId: S10
  population: Adults in DIETFITS and Alzheimer disease KD trial
  exposure: Ketogenic-like diet or modified KD
  instrument: LDL-C and total cholesterol
  magnitude: Direction heterogeneous
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-outcome-healthy-cognition
  conceptId: cognitive-performance
  name: Healthy cognition
  direction: Variable
  evidence: Human research
  description: Three weeks of isocaloric KD produced BHB around 1.0 mmol/L but no difference from a high-carbohydrate diet in vigilance, visual learning, working memory, executive function, mood, or sleep.
  sourceId: S11
  population: 11 healthy normal-weight adults
  exposure: Approximately 3-week isocaloric KD
  instrument: Cognitive battery
  magnitude: "Null"
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-outcome-exercise
  conceptId: exercise
  name: Athletic performance
  direction: Variable
  evidence: Human research
  description: A meta-analysis favored carbohydrate-rich diets for time-trial and 1-RM performance, while KD favored total and fat-mass loss; KD was not a reliable high-intensity enhancement strategy.
  sourceId: S14
  population: Athletes and trained adults
  exposure: KD versus carbohydrate-rich comparator
  instrument: Time trial and 1-RM tests
  magnitude: Neutral-to-unfavorable for performance
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ketogenic-diet-outcome-longevity
  conceptId: body-fat-mass
  name: Longevity
  direction: Variable
  evidence: Limited research
  description: An adult-mouse study reported increased lifespan and healthspan, but this animal result does not establish human lifespan extension.
  sourceId: S15
  population: Adult mice
  exposure: Ketogenic diet versus standard mouse diets
  instrument: Survival and healthspan
  magnitude: Preclinical only
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Substrate shift and ketogenesis
  description: Carbohydrate restriction lowers glucose availability and insulin signaling, increasing adipose fatty-acid release, hepatic β-oxidation, and ketogenesis.
  sourceId: S12
- title: Alternative brain fuel
  description: Ketones can provide alternative brain fuel; this is a rationale for investigation in Alzheimer disease, not proof of disease modification.
  sourceId: S12
- title: Potential anticonvulsant mechanisms
  description: Proposed pathways include fuel use, adenosine signaling, neurotransmitter balance, ion-channel excitability, mitochondrial and redox effects; the clinical mechanism remains unresolved.
  sourceId: S1
- title: Weight and glycemic effects
  description: Weight change can arise from lower energy intake, satiety, fluid shifts, and adherence; reduced carbohydrate delivery can lower postprandial glucose and insulin requirements, with persistence dependent on adherence and comparator diet.
  sourceId: S6
- title: Lipid heterogeneity
  description: LDL-C and triglyceride responses depend on baseline phenotype, weight change, saturated versus unsaturated fat, and overall diet quality rather than carbohydrate percentage alone.
  sourceId: S10
```

## Cautions

```yaml
- title: Metabolic contraindications
  description: Fatty-acid oxidation defects, primary carnitine deficiency, pyruvate-carboxylase deficiency, and porphyria are among contraindication contexts in therapeutic KD guidance.
  sourceId: S1
- title: Ketoacidosis and glucose-lowering therapy
  description: Nutritional ketosis is distinct from diabetic ketoacidosis; SGLT2 inhibitors, insulin reduction, fasting, dehydration, illness, surgery, and low-carbohydrate intake can combine to produce euglycemic ketoacidosis.
  sourceId: S16
- title: Renal, bone, and micronutrient monitoring
  description: Therapeutic protocols monitor kidney stones, calcium/vitamin D, bone health, acid-base status, growth, selenium, gastrointestinal tolerance, and restricted food-group micronutrients.
  sourceId: S1
- title: Pregnancy and growth
  description: Pregnancy safety and efficacy were not established sufficiently for the epilepsy consensus to recommend KD as safe and effective during pregnancy; pediatric growth requires active monitoring.
  sourceId: S1
- title: Lipid response
  description: LDL-C and total cholesterol can rise in some KD trials, so lipid response should not be inferred from weight or BHB alone.
  sourceId: S12
```

## Claims

```yaml
- id: ketogenic-diet-claim-cure
  assertion: Keto cures epilepsy
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Unsupported; KD is an adjunctive seizure-reduction treatment for some people with drug-resistant epilepsy, not a universal cure.
  sourceIds:
    - S1
    - S2
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trial certainty is low or very low and response is heterogeneous.
- id: ketogenic-diet-claim-weight
  assertion: Keto always causes more weight loss
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Unsupported; early differences can occur, but long-term advantages are small or absent versus balanced calorie-reducing diets.
  sourceIds:
    - S4
    - S5
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Adherence and energy intake vary.
- id: ketogenic-diet-claim-diabetes
  assertion: Keto reverses type 2 diabetes
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Overstated; short-term HbA1c, weight, and medication improvements occur in some trials, but durable remission and cardiovascular superiority are not established.
  sourceIds:
    - S6
    - S7
    - S8
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: VLCK evidence is adherence-sensitive and heterogeneous.
- id: ketogenic-diet-claim-clarity
  assertion: Keto reliably improves mental clarity in healthy people
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Not established; a controlled healthy-adult trial found no benefit across cognitive, mood, or sleep endpoints.
  sourceIds:
    - S11
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample and short duration.
- id: ketogenic-diet-claim-performance
  assertion: Keto enhances athletic performance
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Not established; evidence is neutral-to-unfavorable for high-intensity performance and strength despite increased fat oxidation.
  sourceIds:
    - S14
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Performance depends on test, adaptation, and comparator.
- id: ketogenic-diet-claim-longevity
  assertion: Keto extends human lifespan
  relation: evidence-assessment
  participants:
    - entityId: substance:ketogenic-diet
      role: subject
    - entityId: tag:energy-buffer
      role: context
  context: Unproven; mouse longevity evidence cannot establish human benefit.
  sourceIds:
    - S15
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal translation is uncertain.
```

## Interactions

```yaml
- id: ketogenic-diet-interaction-insulin
  name: Insulin and secretagogues
  otherSlug: null
  summary: Reduced carbohydrate intake can lower glucose requirements; continuing insulin or insulin-secretagogue therapy without adjustment can increase hypoglycemia risk.
  sourceId: S7
  context: Documented pharmacodynamic concern
- id: ketogenic-diet-interaction-sglt2
  name: SGLT2 inhibitors
  otherSlug: null
  summary: SGLT2 inhibitors combined with low carbohydrate, insulin reduction, dehydration, illness, or surgery can increase euglycemic ketoacidosis concern.
  sourceId: S16
  context: Documented risk context
- id: ketogenic-diet-interaction-propofol
  name: Propofol and metabolic disease
  otherSlug: null
  summary: Therapeutic KD guidance identifies propofol co-use and chronic metabolic acidosis as protocol-level considerations.
  sourceId: S1
  context: Therapeutic guidance
- id: ketogenic-diet-interaction-diuretics
  name: Diuretics and renal handling
  otherSlug: null
  summary: Fluid, electrolyte, and kidney-stone management can interact with diuretic use and renal risk; direct universal interaction estimates are unavailable.
  sourceId: S1
  context: Clinical monitoring context
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Optimal clinical management of children receiving dietary therapies for epilepsy: Updated recommendations of the International Ketogenic Diet Study Group"
  authors: Eric H. Kossoff et al.; Charlie Foundation; Matthew's Friends; Practice Committee of the Child Neurology Society
  year: 2018
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5983110/
  kind: International consensus statement
  insight: Therapeutic indications, ketogenic variants, macronutrient ratios, initiation, monitoring, contraindications, supplementation, adverse effects, and medication considerations.
  limitation: Pediatric-focused consensus; much supporting evidence is Class III or IV and several practices are expert consensus rather than high-certainty trial evidence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S2
  title: Ketogenic diets for drug-resistant epilepsy
  authors: Kirsty J. Martin-McGill; Rebecca Bresnahan; Robert G. Levy; Peter N. Cooper
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32588435/
  kind: Cochrane systematic review and meta-analysis
  insight: 13 studies and 932 participants; seizure outcomes favored KD in children, while adult evidence was sparse and uncertain.
  limitation: All trials were unblinded; performance and detection bias were high; certainty was low or very low.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S3
  title: "The ketogenic diet for the treatment of childhood epilepsy: a randomised controlled trial"
  authors: Elizabeth G. Neal; Hannah Chaffe; Ruby H. Schwartz; Margaret S. Lawson; Nicole Edwards; Geogianna Fitzsimmons; Andrea Whitney; J. Helen Cross
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18456557/
  kind: Randomized controlled trial
  insight: 145 children were randomized; seizure frequency at 3 months favored immediate KD over delayed treatment.
  limitation: Open-label design, substantial attrition, and only 103 children contributed usable endpoint data.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Low-carbohydrate versus balanced-carbohydrate diets for reducing weight and cardiovascular risk
  authors: Catherine E. Naude; A. Brand; A. Schoonees; K. A. Nguyen; M. Chaplin; J. Volmink
  year: 2022
  url: https://www.cochrane.org/evidence/CD013334_low-carbohydrate-diets-or-balanced-carbohydrate-diets-which-works-better-weight-loss-and-heart
  kind: Cochrane systematic review
  insight: 61 randomized trials and 6,925 participants; low-carbohydrate diets produced little-to-no long-term weight advantage and little-to-no difference in LDL-C, HbA1c, or diastolic pressure.
  limitation: Diet definitions and adherence varied; many studies had missing outcome data and short follow-up.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S5
  title: "Effect of Low-Fat vs Low-Carbohydrate Diet on 12-Month Weight Loss in Overweight Adults and the Association With Genotype Pattern or Insulin Secretion: The DIETFITS Randomized Clinical Trial"
  authors: Christopher D. Gardner et al.
  year: 2018
  url: https://jamanetwork.com/journals/jama/fullarticle/2673150
  kind: Randomized clinical trial
  insight: Among 609 adults without diabetes, healthy low-fat and healthy low-carbohydrate diets produced no significant difference in 12-month weight loss.
  limitation: The low-carbohydrate intervention was not continuously verified as a strict KD; results reflect a behavioral diet program.
  funding: NIDDK, NHLBI, Stanford Clinical and Translational Science Award, and Nutrition Science Initiative
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors reported none; funders reported no role in design, analysis, or publication.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/2673150
- id: S6
  title: "Effect of a very low-carbohydrate ketogenic diet vs recommended diets in patients with type 2 diabetes: a meta-analysis"
  authors: Mohamed Rafiullah et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/34338787/
  kind: Systematic review and meta-analysis of randomized trials
  insight: Eight RCTs and 648 participants; HbA1c and weight favored VLCK through 6 months, but weight superiority was absent at 12 months.
  limitation: Low-to-moderate certainty, heterogeneous diets, adherence problems, and limited long-term data.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S7
  title: Twelve-month outcomes of a randomized trial of a moderate-carbohydrate versus very low-carbohydrate diet in overweight adults with type 2 diabetes mellitus or prediabetes
  authors: Sarah J. Hallberg et al.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29269731/
  kind: Small randomized controlled trial
  insight: In 34 adults, the low-carbohydrate ketogenic arm had greater 12-month HbA1c, weight, and medication-use reductions than the moderate-carbohydrate comparator.
  limitation: Small sample, open-label behavioral intervention, intensive support, and Virta Health affiliation.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Stephen Phinney reported Atkins Scientific Advisory Board membership, Virta Health founding, and book authorship; Frederick Hecht reported Virta Health advisory-board membership.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/29269731/
- id: S8
  title: "Comparison of the Effectiveness of Low Carbohydrate Versus Low Fat Diets, in Type 2 Diabetes: Systematic Review and Meta-Analysis of Randomized Controlled Trials"
  authors: Tanefa A. Apekey; Maria J. Maynard; Monia Kittana; Setor K. Kunutsor
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/36297075/
  kind: Systematic review and meta-analysis
  insight: 22 RCTs and 1,391 participants; short/intermediate-term glycemic and adiposity outcomes favored low-carbohydrate diets, while total cholesterol and HDL-C also increased.
  limitation: Low-carbohydrate diets were broader than strict KD and follow-up was uneven.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/36297075/
- id: S10
  title: "Weight, insulin resistance, blood lipids, and diet quality changes associated with ketogenic and ultra low-fat dietary patterns: a secondary analysis of the DIETFITS randomized clinical trial"
  authors: Lara Aronica; Matthew J. Landry; Joseph Rigdon; Christopher D. Gardner
  year: 2023
  url: https://doi.org/10.3389/fnut.2023.1220020
  kind: Secondary analysis of a randomized clinical trial
  insight: Among small extreme-intake subgroups, ketogenic-like and ultra-low-fat patterns produced similar weight and insulin-resistance changes; ketogenic-like intake showed a transient LDL-C rise and lower triglyceride/HDL ratio.
  limitation: Participants were not randomized to the extreme intake patterns; fewer than 10% of the parent trial reached those patterns.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S11
  title: "Three consecutive weeks of nutritional ketosis has no effect on cognitive function, sleep, and mood compared with a high-carbohydrate, low-fat diet in healthy individuals: a randomized, crossover, controlled trial"
  authors: Stella Iacovides; David Goble; Bronwyn Paterson; Rebecca M. Meiring
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31098615/
  kind: Randomized crossover controlled trial
  insight: In 11 healthy normal-weight adults, sustained BHB elevation did not improve cognitive, mood, or subjective-sleep endpoints.
  limitation: Very small sample and approximately 3-week exposure.
  funding: Faculty Research Council, Faculty of Health Sciences, University of the Witwatersrand; Brain Function Research Group; Movement Physiology Research Laboratory
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Randomized crossover trial of a modified ketogenic diet in Alzheimer’s disease
  authors: Matthew C. L. Phillips et al.
  year: 2021
  url: https://alzres.biomedcentral.com/articles/10.1186/s13195-021-00783-x
  kind: Assessor-blinded randomized crossover trial
  insight: Among 26 randomized Alzheimer disease patients, KD improved daily function and quality of life but not ACE-III cognition; LDL-C and total cholesterol increased.
  limitation: Small single-site trial, short periods, participant unblinding, and possible crossover or period effects.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S13
  title: "Ketogenic diet, epilepsy and cognition: what do we know so far? A systematic review"
  authors: Maiara Cristina Lima et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35535020/
  kind: Systematic review
  insight: Among 24 epilepsy-cognition studies, many reported improvement, but heterogeneous tests, self-report, seizure effects, medication changes, and inconsistent methods prevented attribution to KD itself.
  limitation: Mostly nonrandomized or methodologically heterogeneous evidence; no definitive causal estimate.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S14
  title: "Effects of the ketogenic diet on performance and body composition in athletes and trained adults: a systematic review and Bayesian multivariate multilevel meta-analysis and meta-regression"
  authors: Ana Clara C. Koerich et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/35757868/
  kind: Systematic review and Bayesian meta-analysis
  insight: Across 18 studies, carbohydrate-rich diets were more favorable for time-trial and 1-RM performance, while KD was more favorable for total and fat-mass loss.
  limitation: Included randomized and nonrandomized studies with substantial variation in athletes, protocols, duration, and performance tests.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S15
  title: A Ketogenic Diet Extends Longevity and Healthspan in Adult Mice
  authors: Megan N. Roberts et al.; Jon J. Ramsey et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28877457/
  kind: Animal lifespan and healthspan study
  insight: A ketogenic diet increased median lifespan, survival, and selected healthspan measures in adult mice.
  limitation: Animal-only evidence; translation is uncertain and depends on strain, sex, energy intake, diet composition, and comparator.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S16
  title: Euglycemic Ketoacidosis as a Complication of SGLT2 Inhibitor Therapy
  authors: Biff F. Palmer; Deborah J. Clegg
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33563658/
  kind: Clinical mechanistic review
  insight: Explains SGLT2-associated ketogenesis and euglycemic ketoacidosis, including low-carbohydrate intake, insulin reduction, illness, surgery, and dehydration as risk contexts.
  limitation: Review evidence does not provide a universal absolute risk for every KD user.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S9
  title: "Weight, insulin resistance, blood lipids, and diet quality changes associated with ketogenic and ultra low-fat dietary patterns: a secondary analysis of the DIETFITS randomized clinical trial"
  authors: Lara Aronica; Matthew J. Landry; Joseph Rigdon; Christopher D. Gardner
  year: 2023
  url: https://doi.org/10.3389/fnut.2023.1220020
  kind: Secondary analysis of a randomized clinical trial
  insight: Among small extreme-intake subgroups, ketogenic-like and ultra-low-fat patterns produced similar weight and insulin-resistance changes; ketogenic-like intake showed a transient LDL-C rise and lower triglyceride/HDL ratio.
  limitation: Participants were not randomized to the extreme intake patterns; fewer than 10% of the parent trial reached those patterns.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: General
  activity: Dietary protocol
  status: This article describes dietary research and therapeutic guidance; legal status and clinical availability of ketogenic programs vary by jurisdiction and healthcare setting.
  sourceUrl: https://www.ilae.org/guidelines/guidelines-and-reports/optimal-clinical-management-of-children-receiving-dietary-therapies-for-epilepsy
  asOf: 2026-10-10
```
