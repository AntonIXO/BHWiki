---
slug: vitamin-d
name: Vitamin D
subtitle: Vitamin D forms, deficiency repletion, and clinical outcome evidence.
aliases:
  - Vitamin D2
  - Ergocalciferol
  - Vitamin D3
  - Cholecalciferol
category: vitamin
tags: []
accent: "#d6a647"
formula: "Not established"
molecularWeight: "Not established"
pubchemCid: null
smiles: "Not established"
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
halfLife:
  label: Human terminal half-life is formulation- and metabolite-specific; no universal page-level value is assigned.
  low: null
  high: null
  context: Parent vitamin D and 25-hydroxyvitamin D have different kinetics; values are not interchangeable.
  sourceId: nih-2025
  observationId: vitamin-d-pk-1
kinetics:
  onset: Clinical effects depend on deficiency status and endpoint; not inferred from status-marker kinetics.
  peak: 25-hydroxyvitamin D is a status marker, not the active hormone.
  duration: Study-specific; no universal clinical duration established.
  bioavailability: Formulation and dietary fat affect absorption.
  metabolism: Hepatic 25-hydroxylation and renal activation are distinct steps.
  sourceId: nih-2025
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
---

## Summary

Vitamin D has an established nutritional role in preventing deficiency-related rickets and osteomalacia. Correcting deficiency is a different question from adding supplements to an already adequately supplied population. (sourceId: nih-2025)

Large randomized trials in generally vitamin-D-sufficient or unselected older adults found no significant reduction in fractures, major cardiovascular events, or depression with the regimens tested. These results do not establish what happens when treating symptomatic deficiency. (sourceId: vital-fractures-2022; sourceId: vital-2019; sourceId: vital-dep-2020)

Results also depend on formulation, schedule, population, and outcome: D3 outperformed D2 on a blood-status marker in one head-to-head trial, while annual 500,000-IU D3 increased falls and fractures. Neither a higher blood concentration nor a larger administered dose necessarily means greater clinical benefit. (sourceId: tripkovic-2017; sourceId: sanders-2010)

## Description

Vitamin D comprises fat-soluble precursors, principally ergocalciferol, D2, and cholecalciferol, D3. They are distinct compounds, not interchangeable names for a single molecular structure. Circulating 25-hydroxyvitamin D, abbreviated 25(OH)D, is the usual status marker; it is distinct from the active hormone 1,25-dihydroxyvitamin D. (sourceId: nih-2025)

For vitamin D, 1 microgram equals 40 IU; a 50,000-IU ergocalciferol capsule contains 1.25 mg. Capsule strength does not specify an administration schedule. (sourceId: ergocalciferol-label-2026)

## Evidence note

This article separates biochemical repletion, skeletal surrogate measurements, and patient-important outcomes. VITAL publications share participants and are not independent replications; the same applies to the D-Health reports. VITAL registered cancer and major cardiovascular events as primary endpoints, whereas the D-Health cardiovascular analysis examined a prespecified tertiary endpoint. (sourceId: vital-registry; sourceId: dhealth-cv-2023)

Low measured 25(OH)D is not synonymous with symptomatic deficiency disease: the Mongolian fracture trial enrolled children with widespread low concentrations but excluded clinical rickets. Its null fracture result therefore does not test treatment of rickets. (sourceId: ganmaa-2024)

The evidence selection emphasizes primary randomized reports, not an exhaustive systematic review. Full-text and disclosure access varied. References distinguish verified funding, reported conflicts, and information that remained unassessed; an unavailable declaration is not treated as absence of conflicts.

## Doses

```yaml
- label: Nutritional reference amounts
  population: Generally healthy adults
  amount: "NIH reports 600 IU/day through age 70 and 800 IU/day after age 70."
  purpose: Population nutritional reference intake, not a deficiency-repletion protocol
  sourceId: nih-2022

- label: Daily D2 versus D3 biochemical comparison
  population: Adults aged 18–84 years
  amount: "1000 IU/day D2, 1000 IU/day D3, or 500 IU/day of each"
  route: oral
  duration: 11 weeks
  comparator: placebo
  purpose: Measured 25(OH)D response
  sourceId: holick-2008

- label: VITAL prevention exposure
  population: Men aged at least 50 and women aged at least 55 years
  amount: 2000 IU/day D3
  route: oral
  duration: Median 5.3 years
  comparator: Matching placebo within an omega-3 factorial trial
  purpose: Primary prevention, not targeted deficiency treatment
  sourceId: vital-2019

- label: D-Health intermittent exposure
  population: Australians aged 60–84 years
  amount: 60000 IU D3 once monthly
  route: oral
  duration: Up to 5 years
  comparator: placebo
  purpose: Population prevention trial; monthly exposure is not assumed equivalent to daily dosing
  sourceId: dhealth-mortality-2022

- label: Annual regimen associated with harm
  population: Community-dwelling women aged at least 70 years
  amount: 500000 IU D3 once annually in autumn or winter
  route: oral
  duration: 3–5 years
  comparator: placebo
  purpose: Trial exposure that increased falls and fractures
  sourceId: sanders-2010

- label: Prescription formulation strength
  amount: 50000 IU ergocalciferol per capsule
  ingredient: Vitamin D2
  formulation: Oil-filled capsule
  route: oral
  frequency: Not inferred from capsule strength
  purpose: Product-specific prescription label; not a universal replacement course
  sourceId: ergocalciferol-label-2026
```

## Pharmacokinetics

```yaml
- parameter: Oral absorption
  finding: Dietary fat enhances intestinal absorption, although some vitamin D is absorbed without accompanying fat.
  limitation: No universal absolute bioavailability or time-to-peak value is assigned across formulations.
  sourceId: nih-2025

- parameter: Metabolic activation
  finding: Ergocalciferol undergoes hepatic 25-hydroxylation followed by renal formation of active 1,25-dihydroxy metabolites.
  limitation: Parent vitamin, circulating status metabolites, and active hormone have different disposition.
  sourceId: ergocalciferol-label-2026

- parameter: Human tracer half-lives
  population: 36 healthy men, divided between the United Kingdom and The Gambia
  exposure: Oral deuterated 25(OH)D2 and 25(OH)D3 tracers, with 33-day follow-up
  finding: "Mean half-life was 13.9 ± 2.6 days for 25(OH)D2 and 15.1 ± 3.1 days for 25(OH)D3."
  limitation: These are metabolite half-lives, not parent D2/D3 half-lives or subjective-effect durations; the between-metabolite difference was not significant in the UK subgroup alone.
  sourceId: jones-2014
```

## Modifiers

```yaml
- modifier: Baseline status
  finding: NIH/FNB associates 25(OH)D below 12 ng/mL with deficiency risk and considers at least 20 ng/mL adequate for most people’s bone health.
  limitation: These are not validated universal targets for every extraskeletal outcome.
  sourceId: nih-2025

- modifier: Binding protein and genotype
  finding: Vitamin-D-binding-protein concentration and genotype influenced measured 25(OH)D tracer half-life.
  limitation: This observation does not establish genotype-specific clinical dosing.
  sourceId: jones-2014

- modifier: Absorption and body composition
  finding: Fat-malabsorption conditions and obesity can affect vitamin D status.
  limitation: A lower status marker does not by itself demonstrate benefit from a particular intensified regimen.
  sourceId: nih-2022

- modifier: Calcium cointervention
  finding: The positive Chapuy fracture trial administered calcium and D3 together.
  limitation: Its benefit cannot be assigned to vitamin D alone.
  sourceId: chapuy-1992
```

## Effects

```yaml
- effect: Greater 25(OH)D response with D3 in a fortification trial
  evidence: Human randomized biochemical outcome
  population: 335 healthy South Asian and white European women in the United Kingdom
  exposure: 600 IU/day D2 or D3 in juice or biscuits for 12 winter weeks
  comparator: Matched food vehicles and placebo
  result: D3 produced a greater increase in total 25(OH)D than D2.
  interpretation: Demonstrates a status-marker difference, not superior prevention of fractures, infections, or cardiovascular events.
  sourceId: tripkovic-2017

- effect: Similar D2 and D3 responses in another daily-dose trial
  evidence: Human randomized biochemical outcome
  population: Adults aged 18–84; 60% met the study’s deficiency definition
  exposure: 1000 IU/day D2 or D3 for 11 weeks
  comparator: Placebo and a mixed D2/D3 arm
  result: "Mean 25(OH)D increased from 16.9 to 26.8 ng/mL with D2 and from 19.6 to 28.9 ng/mL with D3."
  interpretation: Both forms increased the marker; this trial found similar effectiveness under its conditions, preserving disagreement with other head-to-head findings.
  sourceId: holick-2008

- effect: Higher doses and lower volumetric bone density
  evidence: Human randomized surrogate outcome
  population: 311 adults aged 55–70 without osteoporosis
  exposure: 400, 4000, or 10000 IU/day D3 for 3 years
  comparator: 400-IU/day arm; calcium supplied when dietary intake was below 1200 mg/day
  result: "Radial volumetric bone density changed by -1.2%, -2.4%, and -3.5%, respectively."
  interpretation: Higher-dose groups lost more radial density; estimated bone strength did not significantly differ. These measurements do not directly establish fracture effects.
  sourceId: burt-2019
```

## Outcomes

```yaml
- outcome: Fractures with combined calcium and D3
  study: Chapuy
  design: Double-blind randomized trial
  population: 3270 older women; mean age 84 years
  intervention: 800 IU/day D3 plus 1200 mg/day elemental calcium as tricalcium phosphate
  comparator: Double placebo
  duration: 18 months
  instrument: Radiologically identified fractures
  result: Among completers, hip fractures were 43% lower and nonvertebral fractures 32% lower; intention-to-treat findings were reported as similar.
  limitation: Combined intervention in very old women; the quoted percentages are completer results, not isolated D3 effects.
  sourceId: chapuy-1992

- outcome: Fractures and kidney stones with combined supplementation
  study: Women’s Health Initiative
  design: Randomized placebo-controlled trial
  population: 36282 postmenopausal women aged 50–79
  intervention: 400 IU/day D3 plus 1000 mg/day elemental calcium as calcium carbonate
  duration: Mean 7 years
  result: "Hip-fracture HR 0.88 (95% CI 0.72–1.08); total-fracture HR 0.96 (0.91–1.02); kidney-stone HR 1.17 (1.02–1.34)."
  interpretation: Primary intention-to-treat fracture results were null despite slightly higher hip density.
  limitation: Adherence-censored hip-fracture analysis favored supplementation, HR 0.71 (0.52–0.97), but no longer preserves the complete randomized comparison.
  sourceId: whi-2006

- outcome: Fractures with routine D3
  study: VITAL fracture ancillary study
  design: Randomized placebo-controlled trial
  population: 25871 adults not selected for deficiency, osteoporosis, or low bone mass
  intervention: 2000 IU/day D3
  duration: Median 5.3 years
  instrument: Adjudicated incident fractures
  result: "Total-fracture HR 0.98 (95% CI 0.89–1.08); nonvertebral HR 0.97 (0.87–1.07); hip HR 1.01 (0.70–1.47)."
  limitation: Few participants had severe deficiency; this was not treatment of symptomatic deficiency disease.
  sourceId: vital-fractures-2022

- outcome: Fractures despite higher achieved 25(OH)D
  study: Finnish Vitamin D Trial
  design: Randomized placebo-controlled trial
  population: 2495 older Finnish adults; baseline mean 25(OH)D 74.8 nmol/L in the measured subcohort
  intervention: 1600 or 3200 IU/day D3, assigned for 5 years
  instrument: National health-register fracture diagnoses
  result: "During mean 4.1-year supplementation, fracture counts were 49 with placebo, 73 with 1600 IU/day, and 52 with 3200 IU/day; respective active-versus-placebo HRs were 1.52 (95% CI 1.06–2.18) and 1.07 (0.72–1.58)."
  interpretation: Neither dose reduced fractures; the lower-dose arm showed an excess without a monotonic dose-response.
  sourceId: find-2026

- outcome: Childhood fractures in a population with low 25(OH)D
  study: Mongolian schoolchildren trial
  design: Double-blind randomized placebo-controlled trial
  population: 8851 randomized children aged 6–13; 8348 in fracture analyses; 95.5% of that analysis population had baseline 25(OH)D below 50 nmol/L
  intervention: 14000 IU/week oral D3
  duration: 3 years
  instrument: Fracture questionnaires
  result: "At least one fracture occurred in 6.4% versus 6.1%; adjusted risk ratio 1.10 (95% CI 0.93–1.29)."
  limitation: Clinical rickets was excluded; fractures were a secondary outcome.
  sourceId: ganmaa-2024

- outcome: Falls and fractures after annual bolus dosing
  study: Sanders
  design: Double-blind randomized placebo-controlled trial
  population: 2256 women aged at least 70 with elevated fracture risk
  intervention: 500000 IU oral D3 annually
  duration: 3–5 years
  instrument: Monthly fall calendars and radiologically confirmed fractures
  result: "Fall incidence-rate ratio 1.15 (95% CI 1.02–1.30); fracture incidence-rate ratio 1.26 (1.00–1.59)."
  limitation: Harm concerns this annual regimen; averaging it into a nominal daily amount obscures the tested exposure.
  sourceId: sanders-2010

- outcome: Falls in older adults with low status
  study: STURDY
  design: Two-stage response-adaptive randomized trial
  population: 688 adults aged at least 70; elevated fall risk and 25(OH)D 10–29 ng/mL
  intervention: Initially 1000, 2000, or 4000 IU/day D3; 1000 IU/day selected for the confirmatory stage
  comparator: 200 IU/day D3, not placebo
  duration: Up to 2 years
  result: "First fall or death HR 0.94 (95% CI 0.76–1.15) for experience with the selected dose versus control."
  safety: "Secondary analyses suggested more serious falls, HR 1.87 (1.03–3.41), and hospitalized falls, HR 2.48 (1.13–5.46)."
  limitation: Adaptive dose changes and secondary safety analyses complicate interpretation.
  sourceId: sturdy-2021

- outcome: Winter respiratory infections in markedly deficient children
  study: Camargo
  design: Cluster-randomized, double-blind comparison
  population: 247 Mongolian schoolchildren within a larger trial; baseline median 25(OH)D 7 ng/mL
  intervention: Milk fortified with 300 IU/day D3
  comparator: Unfortified milk
  duration: Approximately 3 winter months
  instrument: Parent-reported acute respiratory infections
  result: "Mean infection count 0.45 versus 0.80; rate ratio 0.52 (95% CI 0.31–0.89)."
  limitation: Small, population-specific comparison using reported rather than laboratory-confirmed infections.
  sourceId: camargo-2012

- outcome: Respiratory infection and COVID-19 prevention
  study: CORONAVIT
  design: Open-label randomized test-and-treat trial
  population: 6200 UK participants aged at least 16
  intervention: Offer of testing and 800 or 3200 IU/day D3 when 25(OH)D was below 75 nmol/L
  comparator: No testing or supplementation offer
  duration: 6 months
  instrument: Doctor- or swab-confirmed respiratory infections
  result: "Infection occurred in 5.7%, 5.0%, and 4.6% in lower-dose, higher-dose, and control groups; odds ratios 1.26 (95% CI 0.96–1.66) and 1.09 (0.82–1.46). COVID-19 prevention was also null."
  limitation: An implementation strategy, not a blinded pill-versus-placebo comparison; the threshold included people without severe deficiency.
  sourceId: coronavit-2022

- outcome: Respiratory infections in older Australians
  study: D-Health
  design: Randomized placebo-controlled ancillary analysis
  population: 15373 survey respondents and 2598 diary participants from the parent trial
  intervention: 60000 IU/month D3
  duration: Up to 5 years
  instrument: Annual symptom surveys and winter diaries
  result: "Survey odds ratio 0.98 (95% CI 0.93–1.02); diary odds ratio 0.98 (0.83–1.15)."
  interpretation: No reduction in infection risk; small symptom-duration differences were judged unlikely to be clinically important.
  sourceId: dhealth-ari-2021

- outcome: Depression prevention and mood
  study: VITAL-DEP
  design: Randomized placebo-controlled ancillary trial
  population: 18353 adults without clinically relevant depressive symptoms at baseline
  intervention: 2000 IU/day D3
  duration: Median 5.3 years
  instrument: Incident or recurrent depression/symptom events and PHQ-8
  result: "609 versus 625 events; HR 0.97 (95% CI 0.87–1.09). PHQ-8 change differed by 0.01 points (-0.04 to 0.05)."
  limitation: Prevention trial, not treatment of active major depression or a trial restricted to severe deficiency.
  sourceId: vital-dep-2020

- outcome: Major cardiovascular events and invasive cancer
  study: VITAL
  design: Randomized double-blind factorial trial
  population: 25871 adults; baseline mean 25(OH)D 30.8 ng/mL in those measured
  intervention: 2000 IU/day D3
  comparator: placebo
  duration: Median 5.3 years
  instrument: Adjudicated cancer and cardiovascular events
  result: "Major cardiovascular events: HR 0.97 (95% CI 0.85–1.12). Invasive cancer: HR 0.96 (0.88–1.06)."
  limitation: Cardiovascular composite comprised myocardial infarction, stroke, or cardiovascular death; not targeted deficiency treatment.
  sourceId: vital-2019

- outcome: Possible cardiovascular signal
  study: D-Health
  design: Randomized placebo-controlled analysis of a prespecified tertiary endpoint
  population: 21302 older adults included in analysis
  intervention: 60000 IU/month D3
  duration: Median 5 years
  instrument: Linked hospitalization, procedure, and mortality records
  result: "Major events occurred in 6.0% versus 6.6%; HR 0.91 (95% CI 0.81–1.01). Absolute difference: -5.8 per 1000 participants (-12.2 to 0.5)."
  secondaryResult: "Myocardial-infarction HR 0.81 (0.67–0.98); stroke HR 0.99 (0.80–1.23)."
  limitation: Main confidence interval includes no effect; composite included revascularization and differs from VITAL’s.
  sourceId: dhealth-cv-2023

- outcome: Mortality
  study: D-Health
  design: Randomized placebo-controlled trial
  population: 21315 older Australians randomized
  intervention: 60000 IU/month D3 for 5 years
  duration: Median mortality follow-up 5.7 years
  result: "All-cause mortality HR 1.04 (95% CI 0.93–1.18); cancer mortality HR 1.15 (0.96–1.39)."
  exploratoryResult: "Excluding the first 2 years, cancer-mortality HR was 1.24 (1.01–1.54)."
  limitation: The exploratory cancer signal is not a confirmed causal cancer-harm conclusion.
  sourceId: dhealth-mortality-2022
```

## Mechanisms

```yaml
- mechanism: Calcium and phosphate regulation
  evidence: Established physiological and label-described action
  description: Active vitamin D metabolites increase intestinal calcium and phosphate absorption, supporting bone mineralization; parathyroid hormone regulates renal activation.
  limitation: Nutritional necessity does not imply continuously increasing benefit above adequacy.
  sourceId: ergocalciferol-label-2026

- mechanism: Immune-related biological rationale
  evidence: Mechanistic rationale evaluated against a human clinical trial
  description: Proposed immune benefits motivated respiratory-infection trials, but correcting the measured status marker in CORONAVIT did not produce the anticipated infection reduction.
  limitation: Mechanistic plausibility is not an infection-prevention effect estimate.
  sourceId: coronavit-2022
```

## Cautions

```yaml
- caution: Excess exposure and hypercalcemia
  description: Toxicity can include nausea, constipation, weakness, excessive urination and thirst, hypercalciuria, renal injury, and soft-tissue calcification.
  sourceId: ergocalciferol-label-2026

- caution: Persistence after overdose
  description: The ergocalciferol label states that effects can persist for two or more months after treatment stops.
  limitation: This warning concerns excessive exposure; it is not a measured parent-drug half-life or routine subjective duration.
  sourceId: ergocalciferol-label-2026

- caution: Upper intake level
  description: NIH reports an adult tolerable upper intake level of 4000 IU/day from all sources.
  limitation: This population safety reference is neither a benefit threshold nor a universal ceiling for supervised treatment.
  sourceId: nih-2022

- caution: Product-specific contraindications
  description: The reviewed ergocalciferol label lists hypercalcemia, hypervitaminosis D, abnormal sensitivity to vitamin D toxicity, and malabsorption syndrome.
  limitation: These are the contraindications of this particular prescription product, not a complete treatment framework for all vitamin D formulations.
  sourceId: ergocalciferol-label-2026

- caution: Limits of large-trial safety generalization
  description: VITAL excluded renal failure or dialysis, cirrhosis, hypercalcemia, and sarcoidosis or other granulomatous disease.
  limitation: Its prevention results do not establish safety in these excluded populations.
  sourceId: vital-registry
```

## Claims

```yaml
- claim: D3 is clinically superior to D2 for every outcome
  assessment: Not established by the cited head-to-head trial.
  explanation: Its advantage concerned total 25(OH)D, not fractures, cardiovascular events, or mood.
  sourceId: tripkovic-2017

- claim: Higher vitamin D levels necessarily produce stronger bones
  assessment: Contradicted as a general rule by the high-dose bone-density trial.
  explanation: Higher doses produced greater radial density loss without significant improvement in estimated strength.
  sourceId: burt-2019

- claim: D-Health proves cardiovascular protection in people taking cardiovascular medication
  assessment: Subgroup evidence is insufficient.
  explanation: The apparent difference by baseline cardiovascular-drug use had an interaction P value of 0.12.
  sourceId: dhealth-cv-2023

- claim: Vitamin D has an established cancer-mortality benefit
  assessment: Not established by VITAL’s overall result.
  explanation: Overall cancer-mortality HR was 0.83 (95% CI 0.67–1.02); a favorable analysis excluding the first 2 years was post hoc.
  sourceId: vital-2019

- claim: USP verification proves clinical effectiveness
  assessment: Incorrect.
  explanation: USP verification addresses product quality and does not comprehensively establish supplement efficacy.
  sourceId: usp-verification
```

## Interactions

```yaml
- substance: Thiazide diuretics
  interaction: Hypercalcemia can occur in hypoparathyroid patients receiving ergocalciferol concurrently.
  evidence: Product-label interaction
  sourceId: ergocalciferol-label-2026

- substance: Mineral oil
  interaction: Can interfere with absorption of fat-soluble vitamins, including vitamin D preparations.
  evidence: Product-label interaction
  sourceId: ergocalciferol-label-2026

- substance: Orlistat
  interaction: Can reduce vitamin D absorption and lower status.
  evidence: NIH interaction summary
  sourceId: nih-2025

- substance: Glucocorticoids
  interaction: Can impair calcium absorption and vitamin D metabolism.
  evidence: NIH interaction summary
  sourceId: nih-2022

- substance: Supplemental calcium
  interaction: The WHI calcium-plus-D3 regimen increased kidney-stone incidence.
  limitation: The trial cannot attribute the excess specifically to D3 or quantify every calcium–vitamin D combination.
  sourceId: whi-2006
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: nih-2025
  title: "Vitamin D - Health Professional Fact Sheet"
  organization: NIH Office of Dietary Supplements
  year: 2025
  url: https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/
  insight: Nutritional physiology, status interpretation, absorption, and interactions.
  limitation: Institutional synthesis, not a primary randomized trial.
  funding: NIH institutional publication; study-specific sponsorship not applicable.
  sponsorshipStatus: institutional
  conflictsOfInterest: No individual conflict declaration located on the fact sheet.
  conflictOfInterestStatus: not-assessed

- id: nih-2022
  title: "Vitamin D - Consumer"
  organization: NIH Office of Dietary Supplements
  year: 2022
  url: https://ods.od.nih.gov/factsheets/VitaminD-Consumer/
  insight: Reference intakes, upper limits, susceptible groups, and medicine interactions.
  limitation: General nutritional information, not individualized replacement evidence.
  funding: NIH institutional publication.
  sponsorshipStatus: institutional
  conflictsOfInterest: No individual conflict declaration located.
  conflictOfInterestStatus: not-assessed

- id: tripkovic-2017
  title: "Daily supplementation with 15 μg vitamin D2 compared with vitamin D3 to increase wintertime 25-hydroxyvitamin D status in healthy South Asian and white European women: a 12-wk randomized, placebo-controlled food-fortification trial"
  authors: Laura Tripkovic; Louise R. Wilson; Kathryn Hart; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28679555/
  insight: D3 produced the greater status-marker response.
  limitation: Short biochemical trial; full disclosure text was only partly accessible.
  funding: BBSRC grant BB/I006192/1, independently confirmed in the UKRI award record.
  fundingUrl: https://gtr.ukri.org/projects?ref=BB%2FI006192%2F1
  sponsorshipStatus: reported
  conflictsOfInterest: Susan Lanham-New disclosed a D3Tex research-director role and associated patent interests.
  conflictOfInterestStatus: reported

- id: holick-2008
  title: "Vitamin D2 is as effective as vitamin D3 in maintaining circulating concentrations of 25-hydroxyvitamin D"
  authors: Michael F. Holick; Rachael M. Biancuzzo; Tai C. Chen; et al.
  year: 2008
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2266966/
  insight: Similar biochemical responses to the tested daily D2 and D3 doses.
  limitation: No clinical-outcome superiority test.
  funding: NIH support indexed; complete funding and supply arrangements were not recovered.
  sponsorshipStatus: partially-assessed
  conflictsOfInterest: Holick disclosed pharmaceutical speaker and consulting relationships, including Merck, Eli Lilly, Amgen, and Novartis.
  conflictOfInterestStatus: reported

- id: jones-2014
  title: "25(OH)D2 half-life is shorter than 25(OH)D3 half-life and is influenced by DBP concentration and genotype"
  authors: K. S. Jones; S. Assar; D. Harnpanich; et al.
  year: 2014
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4207933/
  insight: Direct human tracer estimates for circulating metabolites.
  limitation: Small male-only study; not parent-vitamin pharmacokinetics.
  funding: UK Medical Research Council support indexed.
  sponsorshipStatus: reported
  conflictsOfInterest: Authors declared nothing to disclose.
  conflictOfInterestStatus: none-declared

- id: chapuy-1992
  title: "Vitamin D3 and calcium to prevent hip fractures in elderly women"
  authors: M. C. Chapuy; M. E. Arlot; F. Duboeuf; et al.
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1331788/
  insight: Positive combined calcium–D3 fracture trial.
  limitation: Abstract retrieved; full funding and disclosure statements unavailable.
  funding: Not verified from accessible original material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Original declaration unavailable.
  conflictOfInterestStatus: not-assessed

- id: whi-2006
  title: "Calcium plus vitamin D supplementation and the risk of fractures"
  authors: Rebecca D. Jackson; Andrea Z. LaCroix; Margery Gass; et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16481635/
  insight: Null intention-to-treat fracture results and increased kidney stones.
  limitation: Combined intervention; abstract access did not establish complete financial disclosures.
  funding: Study-specific funding statement not verified in retrieved material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full author declarations unavailable.
  conflictOfInterestStatus: not-assessed

- id: vital-2019
  title: "Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease"
  authors: JoAnn E. Manson; Nancy R. Cook; I-Min Lee; et al.
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6425757/
  insight: Large null primary cancer and cardiovascular trial.
  limitation: Mostly adequate baseline status; post hoc cancer-mortality findings require caution.
  funding: NIH support; Pharmavite and Pronova/BASF supplied study products; Quest performed 25(OH)D assays.
  sponsorshipStatus: reported
  conflictsOfInterest: Complete original individual disclosure forms were not retrieved; product support is not treated as absence of conflicts.
  conflictOfInterestStatus: not-assessed

- id: vital-fractures-2022
  title: "Supplemental Vitamin D and Incident Fractures in Midlife and Older Adults"
  authors: Meryl S. LeBoff; Sharon H. Chou; Kristin A. Ratliff; et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9716639/
  insight: No reduction in total, nonvertebral, or hip fractures.
  limitation: Ancillary analysis of VITAL, not an independent cohort or severe-deficiency treatment trial.
  funding: NIH/NIAMS support; parent VITAL included donated study products.
  sponsorshipStatus: reported
  conflictsOfInterest: Complete individual disclosure forms not retrieved.
  conflictOfInterestStatus: not-assessed

- id: vital-dep-2020
  title: "Effect of Long-term Vitamin D3 Supplementation vs Placebo on Risk of Depression or Clinically Relevant Depressive Symptoms and on Change in Mood Scores: A Randomized Clinical Trial"
  authors: Olivia I. Okereke; Charles F. Reynolds III; David Mischoulon; et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32749491/
  insight: Null depression-prevention and PHQ-8 results.
  limitation: Does not test treatment of active depression.
  funding: NIH support, including NIMH R01MH091448; parent VITAL product donations.
  sponsorshipStatus: reported
  conflictsOfInterest: Disclosures included Buring’s Pharmavite fees and spouse’s advisory role, Mischoulon’s supplement-company relationships, and Manson’s Mars Symbioscience grants.
  conflictOfInterestStatus: reported

- id: sanders-2010
  title: "Annual high-dose oral vitamin D and falls and fractures in older women: a randomized controlled trial"
  authors: Kerrie M. Sanders; Amanda L. Stuart; Elizabeth J. Williamson; et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20460620/
  insight: Annual 500000-IU D3 increased falls and fractures.
  limitation: Regimen-specific harm; full original financial disclosures were not retrieved.
  funding: Complete original funding statement not verified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration unavailable.
  conflictOfInterestStatus: not-assessed

- id: sturdy-2021
  title: "The Effects of Four Doses of Vitamin D Supplements on Falls in Older Adults: A Response-Adaptive, Randomized Clinical Trial"
  authors: Lawrence J. Appel; Erin D. Michos; Christine M. Mitchell; et al.
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8240534/
  insight: Higher daily doses did not prevent falls compared with 200 IU/day.
  limitation: Adaptive design, active control, and secondary safety findings.
  funding: National Institute on Aging and additional NIH support.
  sponsorshipStatus: reported
  conflictsOfInterest: NIH/NIA support disclosed; complete individual forms were not retrieved.
  conflictOfInterestStatus: partially-assessed

- id: burt-2019
  title: "Effect of High-Dose Vitamin D Supplementation on Volumetric Bone Density and Bone Strength: A Randomized Clinical Trial"
  authors: Lauren A. Burt; Emma O. Billington; Marianne S. Rose; et al.
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6714464/
  insight: Higher doses produced greater radial bone-density loss.
  limitation: Surrogate endpoints, not a fracture-powered trial.
  funding: Investigator-initiated grant from Pure North S’Energy Foundation.
  sponsorshipStatus: reported
  conflictsOfInterest: Billington disclosed Amgen and Eli Lilly relationships; additional author financial relationships were reported.
  conflictOfInterestStatus: reported

- id: ganmaa-2024
  title: "Vitamin D supplements for fracture prevention in schoolchildren in Mongolia: analysis of secondary outcomes from a multicentre, double-blind, randomised, placebo-controlled trial"
  authors: Davaasambuu Ganmaa; Polyna Khudyakov; Uyanga Buyanjargal; et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38048799/
  insight: Null fracture result despite widespread low baseline 25(OH)D.
  limitation: Clinical rickets excluded; secondary questionnaire outcome.
  funding: US National Institutes of Health.
  sponsorshipStatus: reported
  conflictsOfInterest: Full original declaration not retrieved.
  conflictOfInterestStatus: not-assessed

- id: camargo-2012
  title: "Randomized trial of vitamin D supplementation and risk of acute respiratory infection in Mongolia"
  authors: Carlos A. Camargo Jr; Davaasambuu Ganmaa; A. Lindsay Frazier; et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22908115/
  insight: Positive respiratory-infection finding in markedly deficient children.
  limitation: Small cluster-randomized comparison; parent-reported outcome; full text restricted.
  funding: Original funding statement not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Publisher’s article disclosure states no relevant financial relationships.
  conflictOfInterestStatus: none-declared

- id: coronavit-2022
  title: "Effect of a test-and-treat approach to vitamin D supplementation on risk of all cause acute respiratory tract infection and covid-19: phase 3 randomised controlled trial (CORONAVIT)"
  authors: David A. Jolliffe; Hayley Holt; Matthew Greenig; et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9449358/
  insight: No infection reduction from the tested population test-and-treat strategy.
  limitation: Open-label implementation comparison, not blinded supplementation alone.
  funding: Support included Barts Charity, Pharma Nord, Fischer Family Foundation, and DSM Nutritional Products.
  sponsorshipStatus: reported
  conflictsOfInterest: Martineau disclosed vitamin D research support from companies manufacturing or selling vitamin D products; complete declarations only partly recovered.
  conflictOfInterestStatus: reported

- id: dhealth-ari-2021
  title: "The effect of vitamin D supplementation on acute respiratory tract infection in older Australian adults: an analysis of data from the D-Health Trial"
  authors: Hai Pham; Mary Waterhouse; Catherine Baxter; et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33444565/
  insight: Monthly supplementation did not reduce respiratory-infection risk.
  limitation: Survey and diary subsets; small duration differences.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: reported
  conflictsOfInterest: Full individual declarations not retrieved.
  conflictOfInterestStatus: not-assessed

- id: dhealth-cv-2023
  title: "Vitamin D supplementation and major cardiovascular events: D-Health randomised controlled trial"
  authors: Bridie Thompson; Mary Waterhouse; Dallas R. English; et al.
  year: 2023
  url: https://www.bmj.com/content/381/bmj-2023-075230
  insight: Cardiovascular point estimate favored D3, but the main interval included no effect.
  limitation: Prespecified tertiary endpoint among numerous outcomes; subgroup interaction tests were nonsignificant.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: reported
  conflictsOfInterest: Disclosure statement identified, but its complete individual details were not retrieved.
  conflictOfInterestStatus: not-assessed

- id: dhealth-mortality-2022
  title: "The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality"
  authors: Rachel E. Neale; Catherine Baxter; Briony Duarte Romero; et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35026158/
  insight: No reduction in the trial’s primary all-cause mortality endpoint.
  limitation: Monthly regimen; exploratory cancer-mortality signal is not definitive.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: reported
  conflictsOfInterest: Full original individual declarations not retrieved.
  conflictOfInterestStatus: not-assessed

- id: find-2026
  title: "The effect of vitamin D3 supplementation on fracture incidence in an aging population - The Finnish vitamin D trial"
  authors: Toni Rikkonen; Sari Hantunen; Heikki Kröger; et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42704968/
  insight: No fracture benefit at either dose; excess fractures in the 1600-IU arm.
  limitation: Abstract and competing-interest statement reviewed; online September 7, 2026, ahead of the December issue.
  funding: Disclosed support included the Research Council of Finland, Finnish foundations, and NIH author support.
  sponsorshipStatus: reported
  conflictsOfInterest: Virtanen disclosed Abiogen Pharma travel reimbursement; Manson disclosed outside-work Mars Edge grants; other institutional and guideline roles were reported.
  conflictOfInterestStatus: reported

- id: ergocalciferol-label-2026
  title: "Ergocalciferol capsules, USP 50,000 IU Capsules"
  organization: Torrent Pharmaceuticals Limited; DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ae38744-020d-4c37-a6f1-88f55c2f1047
  insight: Official formulation, metabolism, contraindications, interactions, and toxicity warnings.
  limitation: September 2026 product-specific prescription label; legacy disease regimens are not general repletion evidence.
  funding: Manufacturer labeling; no independent study funding statement.
  sponsorshipStatus: manufacturer
  conflictsOfInterest: Manufacturer is the product’s commercial stakeholder; individual declarations not applicable.
  conflictOfInterestStatus: organizational-interest

- id: vital-registry
  title: "Vitamin D and Omega-3 Trial (VITAL)"
  organization: Brigham and Women’s Hospital; ClinicalTrials.gov
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01169259
  insight: Registered design, primary endpoints, eligibility, and intervention.
  limitation: Registry provenance, not independent efficacy evidence; intervention completion differs from ongoing follow-up.
  funding: Brigham and Women’s Hospital lead sponsorship with NIH collaborators.
  sponsorshipStatus: reported
  conflictsOfInterest: Registry does not replace author financial-disclosure forms.
  conflictOfInterestStatus: not-assessed

- id: usp-verification
  title: "FAQs: USP Verification Services"
  organization: United States Pharmacopeia
  year: null
  accessedAt: "2026-10-15"
  url: https://www.usp.org/frequently-asked-questions/usp-verification-services
  insight: Product-quality verification is distinct from comprehensive efficacy assessment.
  limitation: Undated institutional page; some access was limited to indexed official text.
  funding: USP institutional program description; project-specific funding not stated.
  sponsorshipStatus: institutional
  conflictsOfInterest: USP describes its own verification service; no individual declaration located.
  conflictOfInterestStatus: not-assessed

- id: fda-supplements
  title: "Questions and Answers on Dietary Supplements"
  organization: US Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  insight: US supplement regulation does not include routine FDA premarket approval.
  limitation: General US category rules, not a worldwide vitamin D legal determination.
  funding: FDA institutional publication.
  sponsorshipStatus: institutional
  conflictsOfInterest: Individual research disclosures not applicable to this regulatory explanation.
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: United States
  category: Dietary supplements
  status: Vitamin-containing products can fall within the dietary-supplement framework; FDA does not approve dietary supplements before marketing.
  limitation: Supplement availability or labeling does not establish clinical efficacy, and individual products remain subject to applicable safety and labeling requirements.
  sourceId: fda-supplements

- jurisdiction: United States
  category: Specific prescription ergocalciferol product
  status: The reviewed Torrent 50000-IU capsule label is marked Rx Only.
  labeledIndications: Hypoparathyroidism, refractory vitamin-D-resistant rickets, and familial hypophosphatemia
  limitation: This product’s label does not determine the status of all D2/D3 products or their legality in other jurisdictions.
  sourceId: ergocalciferol-label-2026
```