---
slug: astaxanthin
name: Astaxanthin
subtitle: Xanthophyll carotenoid with formulation-sensitive pharmacokinetics and endpoint-specific human evidence
aliases:
  - AST
  - ASX
  - astaxanthine
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: carotenoid
tags: []
accent: "#D7471E"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Formulation-specific estimates 15.9–52 h in small human PK studies
  low: null
  high: null
  context: These estimates differ by free versus esterified material, meal context and formulation; no universal terminal half-life is established.
  sourceId: ref-odeberg-2003
  observationId: pk-odeberg-40mg
kinetics:
  onset: Plasma appearance occurs within hours after oral administration; a universal first-detectable time is not established.
  peak: Reported Tmax was 6.7 h for free astaxanthin and 11.5 h for fatty-acyl diesters in n=3 studies.
  duration: Clinical-effect duration is not established; PK studies sampled approximately 72–168 h.
  bioavailability: Lipid formulation and taking extract after a meal increased exposure in small human studies.
  metabolism: Plasma contained unesterified astaxanthin after diester dosing, consistent with hydrolysis during absorption.
  sourceId: ref-odeberg-2003
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

Astaxanthin is a lipid-soluble carotenoid whose human exposure depends strongly on formulation and meal context. Small trials suggest modest changes in selected skin and digital-eye-strain measures, while cognition, exercise performance, cardiometabolic treatment, retinal disease treatment, and fertility benefits remain unestablished. Each finding below names its population and source.

## Description

Human studies used free or esterified astaxanthin, algal extracts, oils, micellar products, and multi-carotenoid combinations. Combination studies cannot establish an astaxanthin-specific effect, and biomarker changes are kept separate from clinical outcomes.

## Evidence note

The strongest recurring signals are formulation-sensitive plasma exposure and small, endpoint-specific skin findings. The exercise meta-analysis found no reliable performance benefit, and no qualifying human trial establishes disease treatment. Short safety trials do not characterize rare or chronic toxicity.

## Doses

```yaml
- sourceCategory: research
  label: UV-response trial
  amount: 4 mg/day
  quantity: 4
  quantityMax: null
  unit: mg/day
  ingredient: Astaxanthin
  formulation: Haematococcus pluvialis ASTOTS/FUJIFILM preparation
  route: oral
  frequency: daily
  duration: 9 weeks
  population: 23 healthy Japanese adults
  purpose: Assess UV-related skin endpoints
  note: Treatment exposure; the product and investigators were commercially affiliated.
  sourceId: ref-ito-2018
- sourceCategory: research
  label: Pediatric digital-eye-strain trial
  amount: 4 mg/day
  quantity: 4
  quantityMax: null
  unit: mg/day
  ingredient: Astaxanthin
  formulation: AstaReal soft capsule
  route: oral
  frequency: daily
  duration: 84 days
  population: 64 children aged 10–14 years with high screen exposure
  purpose: Assess digital-eye-strain symptoms and visual measures
  note: The trial reported symptom improvement but null findings for several objective ophthalmic endpoints; not a myopia treatment dose.
  sourceId: ref-hecht-2025
- sourceCategory: research
  label: Cognition trial
  amount: 6 or 12 mg/day
  quantity: 6
  quantityMax: 12
  unit: mg/day
  ingredient: Astaxanthin
  formulation: H. pluvialis extract
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 96 middle-aged or older adults reporting forgetfulness
  purpose: Assess CogHealth and maze-task measures
  note: Within-group changes were reported, but the small trial was not powered to establish superiority to placebo.
  sourceId: ref-katagiri-2012
- sourceCategory: research
  label: Exercise metabolism trial
  amount: 6 mg/day
  quantity: 6
  quantityMax: null
  unit: mg/day
  ingredient: Astaxanthin
  formulation: Supplement formulation not fully characterized in the article
  route: oral
  frequency: daily
  duration: 4 weeks
  population: 14 active young men
  purpose: Assess substrate use and oxidative-stress markers during exercise
  note: Glutathione increased, but fat oxidation and several oxidative markers did not improve.
  sourceId: ref-res-2013
- sourceCategory: research
  label: Short exercise trial
  amount: 28 mg/day
  quantity: 28
  quantityMax: null
  unit: mg/day
  ingredient: Astaxanthin
  formulation: Study supplement
  route: oral
  frequency: daily
  duration: 4 days
  population: 10 physically active men
  purpose: Assess cycling time to exhaustion and muscle-damage biomarkers
  note: Very small hypothesis-generating study; the larger exercise synthesis found no reliable performance effect.
  sourceId: ref-tsao-2025
- sourceCategory: research
  label: Lipid-formulation PK trial
  amount: 40 mg single dose
  quantity: 40
  quantityMax: null
  unit: mg
  ingredient: Astaxanthin
  formulation: Reference product and three lipid-based formulations
  route: oral
  frequency: single dose
  duration: Plasma sampling over the study PK window
  population: 32 healthy men
  purpose: Compare formulation-dependent bioavailability
  note: The formulations produced approximately 1.7–3.7-fold differences in exposure; this is a PK study, not a routine dosing recommendation.
  sourceId: ref-odeberg-2003
- sourceCategory: research
  label: Free-astaxanthin isomer PK study
  amount: 100 mg single dose
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Astaxanthin
  formulation: Free astaxanthin with a meal; mixed E/Z and R/S isomers
  route: oral
  frequency: single dose
  duration: Plasma sampling to approximately 72 hours
  population: 3 men aged 37–43 years
  purpose: Characterize plasma appearance and distribution
  note: Extreme dose and n=3 make this mechanistic PK evidence rather than routine supplementation guidance.
  sourceId: ref-osterlie-2000
- sourceCategory: research
  label: Fatty-acyl-diesters PK study
  amount: 100 mg astaxanthin-equivalent single dose
  quantity: 100
  quantityMax: null
  unit: mg-equivalent
  ingredient: Astaxanthin
  formulation: Fatty-acyl diesters with a meal
  route: oral
  frequency: single dose
  duration: Plasma sampling to approximately 168 hours
  population: 3 men aged 41–50 years
  purpose: Compare plasma appearance of esterified material
  note: Intact esters were not detected in plasma; the reported half-life is not a universal value.
  sourceId: ref-coral-2004
```

## Pharmacokinetics

```yaml
- sourceId: ref-odeberg-2003
  id: pk-odeberg-40mg
  analyte: astaxanthin
  route: oral
  formulation: 40 mg; reference and three lipid-based formulations
  population: 32 healthy men
  endpoint: elimination-half-life
  statistic: study-mean
  value: 15.9
  low: null
  high: null
  unit: hours
  context: Mean 15.9 h (SD 5.3 h); formulation changed bioavailability by approximately 1.7–3.7-fold.
  modelEligible: true
- sourceId: ref-osterlie-2000
  id: pk-osterlie-100mg-free
  analyte: astaxanthin
  route: oral
  formulation: 100 mg free astaxanthin with a meal
  population: 3 men aged 37–43 years
  endpoint: elimination-half-life
  statistic: study-mean
  value: 21
  low: null
  high: null
  unit: hours
  context: Mean 21 h (SD 11 h); Tmax 6.7 h. Small, extreme-dose study; model not used.
  modelEligible: false
- sourceId: ref-coral-2004
  id: pk-coral-100mg-diesters
  analyte: astaxanthin
  route: oral
  formulation: 100 mg-equivalent fatty-acyl diesters with a meal
  population: 3 men aged 41–50 years
  endpoint: elimination-half-life
  statistic: study-mean
  value: 52
  low: null
  high: null
  unit: hours
  context: Mean 52 h (SD 40 h); Tmax 11.5 h; intact esters were not detected in plasma.
  modelEligible: false
- sourceId: ref-okada-2009
  id: pk-okada-meal-smoking
  analyte: astaxanthin
  route: oral
  formulation: H. pluvialis extract before or after a meal
  population: Nonsmokers and smokers in small groups
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: After-meal nonsmoker AUC0–168 was 7,219 ± 3,118 versus 2,968 ± 959 μg·h/L before a meal; the abstract reports shorter elimination in smokers without numeric values.
  modelEligible: false
```

## Modifiers

```yaml
- label: Lipid formulation
  effect: Systemic exposure varied by formulation
  detail: Three lipid-based vehicles produced approximately 1.7–3.7-fold higher bioavailability than a reference product after 40 mg.
  sourceId: ref-odeberg-2003
  observationId: pk-odeberg-40mg
  factorType: other
  direction: variable
- label: Meal timing
  effect: After-meal administration increased exposure
  detail: In a small H. pluvialis study, nonsmoker AUC0–168 was higher after a meal than before it.
  sourceId: ref-okada-2009
  observationId: pk-okada-meal-smoking
  factorType: other
  direction: variable
- label: Smoking
  effect: Elimination was shorter in smokers in one small study
  detail: The accessible abstract does not provide numerical smoker half-lives, so the size of the effect is unknown.
  sourceId: ref-okada-2009
  observationId: pk-okada-meal-smoking
  factorType: smoking
  direction: faster
```

## Effects

```yaml
- sourceId: ref-ito-2018
  id: astaxanthin-effect-skin
  conceptId: perception
  name: Skin appearance
  direction: Variable
  evidence: Human research
  description: A 4 mg/day, 9-week trial reported favorable change in minimal erythema dose and attenuation of UV-related moisture loss, while transepidermal water loss and several subjective endpoints were null.
  population: 23 healthy Japanese adults
  exposure: 4 mg/day H. pluvialis astaxanthin for 9 weeks
  instrument: Minimal erythema dose and skin measurements
  magnitude: Direction favored astaxanthin for selected endpoints; several endpoints null
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-hecht-2025
  id: astaxanthin-effect-eye-strain
  conceptId: perception
  name: Digital-eye-strain symptoms
  direction: Increased
  evidence: Human research
  description: Children receiving 4 mg/day for 84 days improved questionnaire-based digital-eye-strain and visual-fatigue scores more than placebo; visual acuity and several objective measures were not significantly different.
  population: 64 children aged 10–14 years with high screen exposure
  exposure: 4 mg/day astaxanthin soft capsule for 84 days
  instrument: Computer Vision Syndrome Questionnaire and visual-fatigue score
  magnitude: Between-group symptom improvement; objective endpoint pattern mixed
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-katagiri-2012
  id: astaxanthin-effect-cognition
  conceptId: perception
  name: Subjective cognitive function
  direction: Variable
  evidence: Human research
  description: A 12-week trial reported within-group improvement in the 12 mg/day group, but investigators stated that the sample was too small to show significant superiority to placebo.
  population: 96 middle-aged or older adults reporting forgetfulness
  exposure: 6 or 12 mg/day H. pluvialis extract for 12 weeks
  instrument: CogHealth and Groton Maze tasks
  magnitude: Within-group signal; placebo superiority not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- sourceId: ref-ng-2021
  id: astaxanthin-outcome-skin-hydration
  conceptId: skin-hydration
  name: Skin hydration
  direction: Increased
  evidence: Human research
  description: A systematic review/meta-analysis of 11 human studies found improved skin moisture, SMD 0.53 (95% CI 0.05–1.01), with moderate heterogeneity.
  population: Adults in 11 human studies
  exposure: Oral astaxanthin at study-specific doses
  instrument: Study-specific skin-moisture measures
  magnitude: SMD 0.53 (95% CI 0.05–1.01)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-ng-2021
  id: astaxanthin-outcome-skin-elasticity
  conceptId: skin-elasticity
  name: Skin elasticity
  direction: Increased
  evidence: Human research
  description: The same review found improved elasticity, but heterogeneity was high and studies were small.
  population: Adults in 11 human studies
  exposure: Oral astaxanthin at study-specific doses
  instrument: Study-specific elasticity measures
  magnitude: SMD 0.77 (95% CI 0.19–1.35; I² 75%)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-ng-2021
  id: astaxanthin-outcome-wrinkle-depth
  conceptId: wrinkle-depth
  name: Wrinkle depth
  direction: Variable
  evidence: Human research
  description: Wrinkle depth did not improve significantly in the skin meta-analysis.
  population: Adults in included human studies
  exposure: Oral astaxanthin at study-specific doses
  instrument: Study-specific wrinkle measures
  magnitude: SMD −0.26 (95% CI −0.58 to 0.06)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-exercise-meta-2026
  id: astaxanthin-outcome-vo2max
  conceptId: exercise
  name: VO₂max
  direction: Variable
  evidence: Human research
  description: A 2026 meta-analysis of 24 RCTs found no significant effect on VO₂max, time-trial performance or maximal workload/power.
  population: Athletes and physically active or healthy participants in 24 RCTs
  exposure: Approximately 4–28 mg/day for 4 days to 16 weeks
  instrument: Exercise performance tests
  magnitude: VO₂max SMD −0.14 (95% CI −0.78 to 0.50)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-exercise-meta-2026
  id: astaxanthin-outcome-ck
  conceptId: creatine-kinase
  name: Creatine kinase
  direction: Decreased
  evidence: Human research
  description: The exercise meta-analysis found a modest pooled CK reduction, while performance endpoints remained null.
  population: Athletes and physically active or healthy participants in 24 RCTs
  exposure: Approximately 4–28 mg/day for 4 days to 16 weeks
  instrument: Blood creatine kinase
  magnitude: SMD −0.45 (95% CI −0.83 to −0.07)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-leung-2022
  id: astaxanthin-outcome-metabolic
  conceptId: fasting-glucose
  name: Cardiometabolic surrogate outcomes
  direction: Variable
  evidence: Human research
  description: A 2020 synthesis was null for fasting glucose, HbA1c, LDL-C, triglycerides, body weight and blood pressure; later meta-analyses differed, so disease treatment is not established.
  population: Adults at risk of metabolic syndrome in randomized trials
  exposure: Astaxanthin at study-specific doses
  instrument: Blood glucose, lipids and blood pressure
  magnitude: Mostly null; small HDL/CRP subgroup signals
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Lipid-mediated absorption
  description: Astaxanthin is lipid-soluble; carrier lipids, surfactants and meal context change micellarization and systemic exposure. This PK mechanism does not establish clinical benefit.
  sourceId: ref-odeberg-2003
- title: Plasma hydrolysis and lipoprotein transport
  description: After fatty-acyl-diesters, circulating unesterified astaxanthin was detected and intact esters were not, consistent with hydrolysis during absorption and transport in lipoprotein fractions.
  sourceId: ref-coral-2004
- title: Antioxidant/redox hypothesis
  description: Selected redox and inflammatory biomarkers changed in some trials, but exercise and clinical-outcome studies show that biomarker shifts do not reliably translate to performance or disease benefit.
  sourceId: ref-exercise-meta-2026
```

## Cautions

```yaml
- title: Evidence is endpoint-specific
  description: Skin and digital-eye-strain signals come from small studies; no robust human evidence establishes retinal disease, diabetes, cardiovascular, fertility or nootropic treatment.
  sourceId: ref-ng-2021
- title: Short-term safety only
  description: An 8-week randomized safety trial supports tolerability at 6 mg/day in healthy adults, but sample size and duration cannot detect rare or chronic harms.
  sourceId: ref-efsa-2020
- title: Pregnancy and lactation evidence gap
  description: No dedicated qualifying human supplementation trial in pregnancy or lactation was identified in the reviewed evidence.
  sourceId: ref-ito-2018
- title: Renal impairment evidence gap
  description: No dedicated renal-impairment PK or dose-adjustment study was identified; normal short-term findings in healthy adults do not establish CKD safety.
  sourceId: ref-ito-2018
- title: Commercial sponsorship
  description: Several product and formulation studies involved manufacturer products, funding or affiliated investigators; sponsorship is recorded in the references and limits independent replication.
  sourceId: ref-ito-2018
- title: Co-loaded nanoparticle evidence is preclinical
  description: A 2026 study used an astaxanthin co-loaded nanoparticle with a marine peptide and reported immunosuppression-related endpoint changes in an animal model. The abstract itself limits the evidence to animal endpoints and calls for direct mechanistic validation.
  sourceId: pmid-42929794
```

## Claims

```yaml
- id: astaxanthin-claim-skin
  assertion: Astaxanthin improves selected skin-moisture or elasticity measures
  relation: evidence-boundary
  participants:
    - entityId: substance:astaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Small human studies and a meta-analysis support endpoint-specific changes, with heterogeneity and no wrinkle-depth benefit.
  sourceIds:
    - ref-ng-2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Does not establish prevention of UV-induced disease or replacement of sunscreen.
- id: astaxanthin-claim-nootropic
  assertion: Astaxanthin is a proven nootropic
  relation: evidence-boundary
  participants:
    - entityId: substance:astaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Human cognitive accuracy and reaction-time evidence is small or non-significant.
  sourceIds:
    - ref-katagiri-2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A within-group change cannot establish placebo superiority.
- id: astaxanthin-claim-ergogenic
  assertion: Astaxanthin reliably improves exercise performance
  relation: evidence-boundary
  participants:
    - entityId: substance:astaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: The largest current exercise synthesis found no significant VO₂max, time-trial or maximal-workload effect.
  sourceIds:
    - ref-exercise-meta-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A CK change is a biomarker and not proof of better performance or recovery.
- id: astaxanthin-claim-disease
  assertion: Astaxanthin treats cardiometabolic or retinal disease
  relation: evidence-boundary
  participants:
    - entityId: substance:astaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: No qualifying robust astaxanthin-alone trial establishes a hard clinical disease benefit.
  sourceIds:
    - ref-leung-2022
    - ref-hecht-2025
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Combination studies and surrogate endpoints cannot be generalized to disease treatment.
```

## Interactions

```yaml
- id: interaction-astaxanthin-drugs
  name: Prescription drug interactions
  otherSlug: null
  summary: No dedicated human clinical drug–drug interaction study was identified; interactions with anticoagulants, glucose-lowering drugs, antihypertensives and CYP substrates remain uncharacterized.
  sourceId: ref-efsa-2020
  context: Evidence gap; absence of a study is not proof of universal safety.
- id: interaction-astaxanthin-meal
  name: Meal and lipid formulation
  otherSlug: null
  summary: Taking an H. pluvialis extract after a meal and using lipid-based formulations increased exposure in small human PK studies.
  sourceId: ref-okada-2009
  context: Pharmacokinetic modifier rather than a demonstrated clinical interaction.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pmid-42929794
  title: "Layered glycoprotein nanoparticles co-delivering <i>Meretrix meretrix</i>-derived peptide and astaxanthin attenuate cyclophosphamide-induced immunosuppression."
  authors: Wu W, Cai J, Wu Z, Cao W, Lin H, Gao J, Fan X, Qin X, Zheng H.
  year: 2026
  pmid: "42929794"
  doi: 10.1039/d6fo04163a
  url: https://pubmed.ncbi.nlm.nih.gov/42929794/
  kind: Preclinical nanoparticle study
  insight: In an animal model, oral HLC10 nanoparticles co-delivering astaxanthin and a marine peptide improved co-encapsulation and bioaccessibility and attenuated cyclophosphamide-induced immunosuppression-related endpoints.
  limitation: Combination formulation and animal-only endpoint evidence; it does not establish astaxanthin-alone efficacy, human benefit, or clinical dosing.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: ref-osterlie-2000
  title: Plasma appearance and distribution of astaxanthin E/Z and R/S isomers in plasma lipoproteins of men after single dose administration of astaxanthin
  authors: M Østerlie; B Bjerkeng; S Liaaen-Jensen
  year: 2000
  url: https://doi.org/10.1016/S0955-2863(00)00104-2
  kind: human-pharmacokinetic-study
  insight: Three men received a 100 mg single meal dose. Mean Cmax was 1.3±0.1 mg/L, Tmax 6.7±1.2 h and plasma elimination half-life 21±11 h; astaxanthin distributed among VLDL/chylomicron, LDL and HDL fractions and showed selective geometric-isomer uptake.
  limitation: Only three men; unusually high single dose; not an efficacy or population-safety study.
  pmid: "11120445"
  doi: 10.1016/S0955-2863(00)00104-2
  funding: Full funding disclosure not inspected in the accessible record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest disclosure not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-odeberg-2003
  title: Oral bioavailability of the antioxidant astaxanthin in humans is enhanced by incorporation of lipid based formulations
  authors: Johanna Mercke Odeberg; Ake Lignell; Annette Pettersson; Peter Höglund
  year: 2003
  url: https://doi.org/10.1016/S0928-0987(03)00135-0
  kind: human-pharmacokinetic-study
  insight: In 32 healthy men receiving a single 40 mg dose, mean elimination half-life was 15.9±5.3 h and three lipid-based formulations produced approximately 1.7-3.7 times the bioavailability of the reference formulation.
  limitation: Single-dose, male-only pharmacokinetic study; efficacy and chronic safety were not tested.
  pmid: "12885395"
  doi: 10.1016/S0928-0987(03)00135-0
  funding: Full funding disclosure not inspected in the accessible record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest disclosure not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-coral-2004
  title: Plasma appearance of unesterified astaxanthin geometrical E/Z and optical R/S isomers in men given single doses of a mixture of optical 3 and 3'R/S isomers of astaxanthin fatty acyl diesters
  authors: Gladis N Coral-Hinostroza; Trine Ytrestøyl; Bente Ruyter; Bjørn Bjerkeng
  year: 2004
  url: https://doi.org/10.1016/j.cca.2004.09.011
  kind: human-pharmacokinetic-study
  insight: Three men received astaxanthin-equivalent fatty-acyl diesters. After the 100 mg-equivalent dose, Cmax was 0.28±0.1 mg/L, Tmax 11.5 h and elimination half-life 52±40 h; intact astaxanthin esters were not detected in plasma.
  limitation: Only three participants; high single-dose exposure; half-life estimate has very large dispersion.
  pmid: "15556071"
  doi: 10.1016/j.cca.2004.09.011
  funding: PubMed indexes non-U.S.-government research support; detailed funder role was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest disclosure not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-okada-2009
  title: "Bioavailability of astaxanthin in Haematococcus algal extract: the effects of timing of diet and smoking habits"
  authors: Yumika Okada; Masaharu Ishikura; Takashi Maoka
  year: 2009
  url: https://doi.org/10.1271/bbb.90078
  kind: human-pharmacokinetic-study
  insight: Post-meal administration produced much greater AUC0-168 than pre-meal administration in nonsmokers, and smoking significantly shortened elimination half-life.
  limitation: Small groups; numeric smoking-specific half-life estimates are not available in the accessible abstract.
  pmid: "19734684"
  doi: 10.1271/bbb.90078
  funding: Full funding statement not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest statement not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-katagiri-2012
  title: "Effects of astaxanthin-rich Haematococcus pluvialis extract on cognitive function: a randomised, double-blind, placebo-controlled study"
  authors: Mikiyuki Katagiri; Akira Satoh; Shinji Tsuji; Takuji Shirasawa
  year: 2012
  url: https://doi.org/10.3164/jcbn.D-11-00017
  kind: randomized-controlled-trial
  insight: Ninety-six adults with subjective age-related forgetfulness were randomized to placebo, 6 mg/day or 12 mg/day for 12 weeks. Some within-group cognitive changes occurred, but a significant between-group cognitive benefit was not established.
  limitation: Modest sample, repeated cognitive testing and product-specific intervention.
  pmid: "22962526"
  doi: 10.3164/jcbn.D-11-00017
  funding: Full funding declaration was not established from the inspected text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial product identity is reported, but a complete conflict-of-interest declaration was not established from the inspected source.
  conflictOfInterestStatus: not-assessed
- id: ref-res-2013
  title: Astaxanthin supplementation does not augment fat use or improve endurance performance
  authors: Peter T Res; Naomi M Cermak; Rudi Stinkens; T J Tollakson; Guido R Haenen; Aalt Bast; Luc J C Van Loon
  year: 2013
  url: https://doi.org/10.1249/MSS.0b013e31827fddc4
  kind: randomized-controlled-trial
  insight: Thirty-two well-trained male cyclists/triathletes received 20 mg/day for four weeks; no improvement occurred in fat oxidation, total plasma antioxidant capacity, malondialdehyde or time-trial performance.
  limitation: Male trained-athlete population and four-week intervention.
  pmid: "23274592"
  doi: 10.1249/MSS.0b013e31827fddc4
  funding: Full funding disclosure not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict-of-interest disclosure not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-ito-2018
  title: The Protective Role of Astaxanthin for UV-Induced Skin Deterioration in Healthy People—A Randomized, Double-Blind, Placebo-Controlled Trial
  authors: Naoki Ito; Shinobu Seki; Fumitaka Ueda
  year: 2018
  url: https://doi.org/10.3390/nu10070817
  kind: randomized-controlled-trial
  insight: Four mg/day for nine weeks favored change in minimal erythema dose and attenuated UV-related moisture loss, while raw post-treatment MED and TEWL comparisons did not show a significant between-group difference.
  limitation: Twenty-two analyzed participants, predominantly women; per-protocol analysis; proprietary formulation.
  pmid: "29941810"
  doi: 10.3390/nu10070817
  funding: FUJIFILM preparation and FUJIFILM-affiliated investigators were reported; publication stated no external funding.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Product and author affiliation create a material commercial conflict for independent efficacy interpretation.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.3390/nu10070817
- id: ref-ng-2021
  title: "Effects of Astaxanthin Supplementation on Skin Health: A Systematic Review of Clinical Studies"
  authors: Qin Xiang Ng; Michelle Lee Zhi Qing De Deyn; Wayren Loke; Nadine Xinhui Foo; Hwei Wuen Chan; Wee Song Yeo
  year: 2021
  url: https://doi.org/10.1080/19390211.2020.1739187
  kind: systematic-review
  insight: The review identified eleven human skin studies, including six randomized placebo-controlled double-blind trials, and noted generally small samples and frequent commercial involvement in the underlying literature.
  limitation: Includes heterogeneous open-label and randomized evidence and does not by itself establish efficacy for individual outcomes.
  pmid: "32202443"
  doi: 10.1080/19390211.2020.1739187
  funding: Review funding disclosure not inspected in full.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The review explicitly notes commercial funding and potential conflicts in the underlying astaxanthin skin literature.
  conflictOfInterestStatus: not-assessed
- id: ref-leung-2022
  title: "Astaxanthin Influence on Health Outcomes of Adults at Risk of Metabolic Syndrome: A Systematic Review and Meta-Analysis"
  authors: Leona Yuen-Ling Leung; Sidney Man-Ngai Chan; Hon-Lon Tam; Emily Sze-Wan Wong
  year: 2022
  url: https://doi.org/10.3390/nu14102050
  kind: systematic-review-meta-analysis
  insight: Seven RCTs were synthesized for metabolic-syndrome risk factors, with generally small trials and heterogeneous populations.
  limitation: The article contains apparent internal inconsistencies in direction/sign for portions of the lipid results; those estimates were not used as plot-ready outcomes here.
  pmid: "35631193"
  doi: 10.3390/nu14102050
  funding: Full disclosure not reassessed for the final extraction.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full disclosure not reassessed for the final extraction.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9148008/
- id: ref-hecht-2025
  title: "Astaxanthin (AstaReal®) Improved Acute and Chronic Digital Eye Strain in Children: A Randomized Double-Blind Placebo-Controlled Trial"
  authors: Karen A Hecht; Megha Marwah; Vincent Wood; Yasuhiro Nishida; Austin E Bach; Jeffry Gerson; Milton M Hom; Joerg Schnackenberg; Sonal Raote; Shalini Srivastava; Pankaj Negi; Eric Caston
  year: 2025
  url: https://doi.org/10.1007/s12325-025-03125-7
  kind: randomized-controlled-trial
  insight: Sixty-four children received 4 mg/day or placebo for 84 days. CVS-Q and visual-fatigue scores favored astaxanthin; several other visual measures were null.
  limitation: Single modest-sized pediatric trial with many secondary endpoints; independent replication is needed.
  pmid: "40014233"
  doi: 10.1007/s12325-025-03125-7
  funding: PubMed indexes non-U.S.-government research support; complete funder role was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete author conflict-of-interest disclosures were not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-tsao-2025
  title: "Effect of astaxanthin supplementation on cycling performance, muscle damage biomarkers and oxidative stress in young adults: a randomized controlled trial"
  authors: Jung-Piao Tsao; Pei-Yu Wu; Hsu-Tung Kuo; Wei-Hsien Hong; Chih-Chieh Chen; Min-Yu Wang; Mallikarjuna Korivi; I-Shiung Cheng
  year: 2025
  url: https://doi.org/10.1186/s13102-025-01221-3
  kind: randomized-controlled-trial
  insight: Ten active young men completed an astaxanthin/placebo crossover; 28 mg/day for four days increased cycling time to exhaustion and altered selected muscle-damage/oxidative-stress biomarkers.
  limitation: Extremely small sample and short exposure; the ClinicalTrials.gov record was posted after study completion.
  pmid: "40615903"
  doi: 10.1186/s13102-025-01221-3
  funding: ClinicalTrials.gov lists China Medical University Hospital as lead sponsor, with National Science and Technology Council and China Medical University as collaborators.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Publication conflict-of-interest statement not inspected.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT06593535
- id: ref-exercise-meta-2026
  title: "The Effects of Astaxanthin Supplementation on Exercise Recovery Biomarkers and Exercise Performance: A Systematic Review and Meta-Analysis"
  authors: Shuning Liu; Wenqian Yao; Yan Wei; Samuhaer Azhati; Yutong Wu; Wen Zhong; Pengda Wang; Heping Dai; Kai Zhao; Chang Liu
  year: 2026
  url: https://doi.org/10.3390/nu18101570
  kind: systematic-review-meta-analysis
  insight: Twenty-four RCTs were included. CK and LDH favored astaxanthin, whereas malondialdehyde, IL-6, VO2max, time-trial performance and maximal workload/power did not show significant pooled benefits.
  limitation: Dose, duration, training status and exercise protocol varied; LDH heterogeneity was substantial.
  pmid: "42197030"
  doi: 10.3390/nu18101570
  funding: Full review funding declaration not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full review conflict-of-interest declaration not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-efsa-2020
  title: Safety of astaxanthin for its use as a novel food in food supplements
  authors: EFSA Panel on Nutrition, Novel Foods and Food Allergens
  year: 2020
  url: https://doi.org/10.2903/j.efsa.2020.5993
  kind: regulatory-safety-opinion
  insight: EFSA derived an acceptable daily intake of 0.2 mg/kg body weight/day and evaluated supplemental astaxanthin exposure together with background dietary intake.
  limitation: Population food-safety assessment, not clinical efficacy evidence or individualized medical guidance.
  doi: 10.2903/j.efsa.2020.5993
  funding: European Food Safety Authority scientific assessment.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: EFSA scientific-panel conflict-management procedures apply; individual declarations were not reproduced in this extraction.
  conflictOfInterestStatus: not-assessed
- id: ref-eu-2023
  title: Commission Implementing Regulation (EU) 2023/1581 of 1 August 2023 amending Implementing Regulation (EU) 2017/2470 as regards the conditions of use of the novel food ‘astaxanthin-rich oleoresin from Haematococcus pluvialis algae’
  authors: European Commission
  year: 2023
  url: https://eur-lex.europa.eu/eli/reg_impl/2023/1581/oj
  kind: official-regulation
  insight: Sets EU conditions of use for astaxanthin-rich oleoresin from H. pluvialis in food supplements, including age-dependent permitted exposure.
  limitation: Food-law authorization is not a medicinal-product efficacy authorization.
  funding: Official European Union legal act.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a legal act.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Food ingredient use
  status: FDA GRAS notices concern defined H. pluvialis ingredients and food conditions; they are not drug approval or efficacy evidence.
  sourceUrl: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=294&set=GRASNotices
  asOf: 2026-10-10
- jurisdiction: European Union
  activity: Novel-food astaxanthin
  status: EFSA and EU conditions apply to specified astaxanthin-rich oleoresins and intakes; they are food-safety determinations, not therapeutic authorization.
  sourceUrl: https://eur-lex.europa.eu/eli/reg_impl/2023/1581/oj
  asOf: 2026-10-10
```
