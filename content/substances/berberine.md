---
slug: berberine
name: Berberine
subtitle: Short-term metabolic evidence with formulation and interaction caveats.
aliases:
  - berberine
  - Betberine
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags: []
accent: "#888888"
reviewedAt: "2026-10-11"
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: The cited sources describe low oral exposure and formulation-specific pharmacokinetics but do not establish a validated universal human terminal half-life for conventional berberine.
  sourceId: S8
  observationId: berberine-pk-summary
kinetics:
  onset: Not established
  peak: Formulation- and study-specific; no single human value was established.
  duration: Not established
  bioavailability: Reported oral bioavailability is very low and varies by formulation and assay.
  metabolism: Demethylation, demethylenation, reduction, hydroxylation, and conjugation have been described; metabolites may contribute to local or systemic activity.
  sourceId: S7
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

Berberine is a plant-derived protoberberine alkaloid studied mainly as chloride or hydrochloride, with separate evidence for sulfate, phytosome, dihydroberberine, and HTD1801 formulations. Randomized evidence supports modest short-term changes in glucose and lipids, while weight findings conflict and long-term clinical outcomes remain unestablished. [S2][S3][S4][S9][S10][S16][S20]

## Description

Berberine occurs in plants including *Berberis* and *Coptis*. Salt, complex, and reduced forms are not interchangeable exposures: their dose basis, absorption, metabolites, and human evidence differ. The records below keep formulation-specific findings separate and label mechanistic or surrogate evidence as such. [S1][S7][S8][S10][S11][S12][S19]

## Evidence note

Human randomized metabolic outcomes, formulation-specific PK, interactions, pregnancy and infant cautions, and preclinical mechanisms are covered. Glycemic and lipid estimates are heterogeneous and mostly short-term; cardiovascular, mortality, and durable obesity benefits remain unestablished. [S2][S3][S4][S5][S6]

## Doses

```yaml
- label: Conventional berberine in placebo lipid trials
  amount: 900–1,500 mg/day
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Berberine
  formulation: Conventional berberine; individual salt or extract varied
  route: Oral
  frequency: Study-specific divided dosing
  duration: 4–24 weeks
  population: Adults in randomized dyslipidemia trials
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Trials differed in salt, background treatment, and administration schedule.
  sourceId: S3
- label: Berberine hydrochloride/chloride in obesity and MASLD trial
  amount: 1 g/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Berberine hydrochloride/chloride
  formulation: Berberine hydrochloride/chloride
  route: Oral
  frequency: Study-specific
  duration: 6 months
  population: Diabetes-free adults with obesity and MASLD
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: The randomized trial was null for visceral adipose tissue and liver fat.
  sourceId: S9
- label: Berberine ursodeoxycholate (HTD1801)
  amount: 500 mg twice daily or 1,000 mg twice daily
  quantity: null
  quantityMax: null
  unit: mg per dose
  ingredient: HTD1801
  formulation: Ionic berberine–ursodeoxycholate salt
  route: Oral
  frequency: Twice daily
  duration: 12 weeks
  population: Adults with type 2 diabetes
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Product mass is not equivalent to conventional berberine mass.
  sourceId: S10
- label: Dihydroberberine crossover exposure
  amount: 100 mg or 200 mg per dose
  quantity: null
  quantityMax: null
  unit: mg per dose
  ingredient: Dihydroberberine
  formulation: Dihydroberberine
  route: Oral
  frequency: Four crossover doses
  duration: Acute pharmacokinetic pilot
  population: Five healthy men
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Higher short-window plasma exposure did not produce a significant glucose or insulin difference.
  sourceId: S12
- label: Berberine sulfate infectious-diarrhea trial
  amount: 400 mg single dose; 1,200 mg with tetracycline in one cholera comparison
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Berberine sulfate
  formulation: Berberine sulfate
  route: Oral
  frequency: Protocol-specific
  duration: Acute infectious-diarrhea treatment
  population: Patients with enterotoxigenic Escherichia coli or Vibrio cholerae diarrhea
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Historical disease-specific evidence; not evidence for metabolic use.
  sourceId: S17
```

## Pharmacokinetics

```yaml
- id: berberine-pk-summary
  analyte: Berberine and reported metabolites
  route: Oral
  formulation: Conventional berberine preparations; formulation differs by study
  population: Humans represented in pharmacology and bioavailability reviews
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated universal terminal half-life was established. Reviews describe very low parent-drug exposure, limited solubility and permeability, P-glycoprotein efflux, first-pass metabolism, and conjugated or reduced metabolites.
  sourceId: S8
  modelEligible: false
- id: berberine-pk-phytosome
  analyte: Berberine
  route: Oral
  formulation: Berberine Phytosome versus unformulated berberine
  population: Healthy human volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Approximately tenfold higher molar AUC was reported for berberine Phytosome; this is an exposure comparison, not a half-life estimate or efficacy result.
  sourceId: S11
  modelEligible: false
- id: berberine-pk-dihydroberberine
  analyte: Plasma berberine after dihydroberberine
  route: Oral
  formulation: Dihydroberberine versus conventional berberine
  population: Five healthy men in a randomized crossover pilot
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Dihydroberberine 100 mg and 200 mg produced greater two-hour plasma berberine exposure than 500 mg conventional berberine; glucose and insulin did not differ significantly.
  sourceId: S12
  modelEligible: false
- id: berberine-pk-htd1801
  analyte: Berberine and ursodeoxycholate
  route: Oral
  formulation: HTD1801 (berberine ursodeoxycholate/BUDCA)
  population: Patients with hyperlipidemia
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: HTD1801 is an ionic salt with dissociation-related exposure; ursodeoxycholate appears earlier and at much higher plasma concentrations than berberine. Findings cannot be generalized to conventional berberine chloride.
  sourceId: S19
  modelEligible: false
```

## Modifiers

```yaml
- label: Sex subgroup
  effect: Variable
  detail: Glycemic subgroup analyses suggested larger fasting-glucose and HOMA-IR reductions in women than in men, but few studies contributed and replication is needed.
  sourceId: S2
  observationId: berberine-pk-summary
  factorType: other
  direction: variable
- label: Diabetes status and study population
  effect: Variable
  detail: Larger fasting-glucose effects were reported in participants with diabetes and in Asian study populations; these are cross-trial subgroup observations, not definitive effect modifiers.
  sourceId: S2
  observationId: berberine-pk-summary
  factorType: other
  direction: variable
- label: Formulation
  effect: Variable
  detail: Chloride or hydrochloride, sulfate, HTD1801, Phytosome, and dihydroberberine represent separate evidence categories with different exposure data.
  sourceId: S1
  observationId: berberine-pk-summary
  factorType: other
  direction: variable
- label: Dose and treatment duration
  effect: Variable
  detail: Trials varied in total daily dose, divided dosing, duration, background medication, and meal timing, limiting direct comparisons.
  sourceId: S3
  observationId: berberine-pk-summary
  factorType: other
  direction: variable
- label: Genotype and CYP activity
  effect: Variable
  detail: The human CYP study found substantial individual variability and suggested that genotype may modify berberine-related enzyme inhibition.
  sourceId: S5
  observationId: berberine-pk-summary
  factorType: genotype
  direction: variable
- label: Geography
  effect: Variable
  detail: Most dyslipidemia studies came from mainland China or Hong Kong, limiting generalizability to other populations.
  sourceId: S3
  observationId: berberine-pk-summary
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: berberine-effect-gastrointestinal
  conceptId: perception
  name: Gastrointestinal tolerability
  direction: Variable
  evidence: Human research
  description: Nausea, diarrhea, bloating, constipation, abdominal pain, and vomiting were reported in randomized lipid studies; rates varied by trial and placebo exposure.
  sourceId: S3
  population: Adults in randomized dyslipidemia trials
  exposure: Berberine preparations at study-specific doses
  instrument: Adverse-event reporting
  magnitude: Approximately 2–23% with berberine versus 2–15% with placebo across reviewed trials
  reportType: measured-assessment
  conflictingSourceIds: []
- id: berberine-effect-subjective-gap
  conceptId: perception
  name: Subjective benefit evidence gap
  direction: Variable
  evidence: Limited research
  description: The cited evidence base does not establish a reproducible subjective cognitive, mood, or general-well-being effect; most human studies measured metabolic or pharmacokinetic endpoints.
  sourceId: S18
  population: Populations summarized in a government evidence overview
  exposure: Varied berberine products and doses
  instrument: Not assessed
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: berberine-outcome-glycemia
  conceptId: glycemic-control
  name: Glycemic biomarkers
  direction: Decreased
  evidence: Human research
  description: A meta-analysis of 20 randomized studies involving 1,761 participants found pooled reductions in fasting glucose, HbA1c, fasting insulin, HOMA-IR, and two-hour postprandial glucose, with low certainty for most outcomes and high fasting-glucose heterogeneity.
  sourceId: S2
  population: Adults in placebo-controlled randomized trials
  exposure: Study-specific berberine formulations and doses
  instrument: Fasting glucose, HbA1c, fasting insulin, HOMA-IR, and two-hour postprandial glucose
  magnitude: Fasting glucose -0.52 mmol/L; HbA1c -4.48 mmol/mol (-0.41%); HOMA-IR -0.85
  reportType: measured-assessment
  conflictingSourceIds: []
- id: berberine-outcome-lipids
  conceptId: ldl-cholesterol
  name: Lipid biomarkers
  direction: Decreased
  evidence: Human research
  description: A meta-analysis of 18 randomized placebo-controlled studies involving 1,788 participants found modest reductions in LDL-C, total cholesterol, triglycerides, and ApoB; HDL-C increased slightly overall.
  sourceId: S3
  population: Adults in randomized dyslipidemia trials
  exposure: Conventional berberine products at approximately 900–1,500 mg/day in many studies
  instrument: LDL-C, total cholesterol, triglycerides, ApoB, and HDL-C
  magnitude: LDL-C -0.46 mmol/L; total cholesterol -0.48 mmol/L; triglycerides -0.34 mmol/L; ApoB -0.25 g/L; HDL-C +0.06 mmol/L
  reportType: measured-assessment
  conflictingSourceIds: []
- id: berberine-outcome-weight-old
  conceptId: glycemic-control
  name: Body weight in earlier meta-analysis
  direction: Variable
  evidence: Human research
  description: The 2020 obesity meta-analysis found no significant pooled body-weight change despite small pooled reductions in BMI and waist circumference.
  sourceId: S16
  population: Participants in 10 randomized studies
  exposure: Heterogeneous berberine preparations and doses
  instrument: Body weight, BMI, and waist circumference
  magnitude: Body weight -0.11 kg (95% CI -0.99 to 0.76; P=.79)
  reportType: measured-assessment
  conflictingSourceIds: [S20]
- id: berberine-outcome-weight-updated
  conceptId: glycemic-control
  name: Body-size indices in updated meta-analysis
  direction: Decreased
  evidence: Human research
  description: An updated meta-analysis of 23 randomized trial articles reported small pooled reductions in body weight, BMI, and waist circumference, while waist-to-hip ratio was null; reporting, blinding, randomization, and formulation-standardization concerns were noted.
  sourceId: S20
  population: Participants in 23 randomized trial articles
  exposure: Heterogeneous berberine formulations
  instrument: Body weight, BMI, waist circumference, and waist-to-hip ratio
  magnitude: Body weight -0.88 kg; BMI -0.48 kg/m2; waist circumference -1.32 cm; waist-to-hip ratio null
  reportType: measured-assessment
  conflictingSourceIds: [S16]
- id: berberine-outcome-adiposity-null
  conceptId: glycemic-control
  name: Visceral adipose tissue and liver fat
  direction: Variable
  evidence: Human research
  description: In a six-month randomized trial among diabetes-free adults with obesity and MASLD, 1 g/day berberine did not reduce visceral adipose tissue or liver fat.
  sourceId: S9
  population: Diabetes-free adults with obesity and MASLD
  exposure: Berberine hydrochloride/chloride, 1 g/day for six months
  instrument: Visceral adipose tissue and liver-fat measurements
  magnitude: Placebo-adjusted VAT difference 1.38% (97.5% CI -2.43% to 5.18%; P=.42)
  reportType: measured-assessment
  conflictingSourceIds: [S20]
- id: berberine-outcome-htd1801
  conceptId: hba1c
  name: HTD1801 glycemic and lipid biomarkers
  direction: Decreased
  evidence: Human research
  description: A 12-week phase 2 randomized trial found dose-dependent HbA1c reductions with HTD1801; the higher dose also reduced LDL-C and total cholesterol in the reported model estimates.
  sourceId: S10
  population: 113 adults with type 2 diabetes
  exposure: HTD1801 500 mg twice daily or 1,000 mg twice daily
  instrument: HbA1c, LDL-C, and total cholesterol
  magnitude: HbA1c -0.4 percentage points at 500 mg twice daily and -0.7 points at 1,000 mg twice daily; higher-dose LDL-C -11.2 mg/dL and total cholesterol -15.1 mg/dL
  reportType: measured-assessment
  conflictingSourceIds: []
- id: berberine-outcome-diarrhea
  conceptId: diarrhea-duration
  name: Acute infectious diarrhea
  direction: Decreased
  evidence: Human research
  description: A historical randomized trial studied berberine sulfate for enterotoxigenic Escherichia coli and Vibrio cholerae diarrhea; this disease-specific result does not establish metabolic or general gastrointestinal benefit.
  sourceId: S17
  population: Patients with acute bacterial diarrhea
  exposure: Berberine sulfate under protocol-specific regimens
  instrument: Diarrhea duration and clinical response
  magnitude: Exact estimate not normalized in the returned report
  reportType: measured-assessment
  conflictingSourceIds: []
- id: berberine-outcome-clinical-events
  conceptId: glycemic-control
  name: Long-term clinical events
  direction: Variable
  evidence: Limited research
  description: The cited randomized evidence has not established reductions in cardiovascular events, mortality, diabetes complications, or long-term disease progression.
  sourceId: S3
  population: Populations represented in short randomized biomarker trials
  exposure: Heterogeneous berberine products
  instrument: Clinical events were not adequately assessed
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: AMPK and energy metabolism
  description: Cellular and animal literature describes AMPK activation with downstream effects on energy sensing, glycolysis, fatty-acid oxidation, and lipid synthesis; this does not establish a human clinical benefit.
  sourceId: S14
- title: Glucose-handling pathways
  description: Preclinical reviews discuss GLUT4, insulin-receptor-substrate signaling, glycolysis, intestinal carbohydrate handling, and pancreatic-cell signaling. These observations are not validated causal explanations for every human trial result.
  sourceId: S14
- title: Lipid-regulation pathways
  description: Experimental literature discusses AMPK, SREBP-related lipid synthesis, PCSK9, and hepatic lipid pathways; molecular pathway findings cannot be converted directly into cardiovascular-event claims.
  sourceId: S14
- title: Metabolite pharmacology
  description: Berberine metabolites can show pharmacology in experimental systems, but human exposure–response relationships remain incompletely defined.
  sourceId: S7
- title: Gut–liver contribution
  description: Low parent-drug exposure and formulation-specific pharmacokinetics support possible intestinal and gut–liver contributions; this remains a mechanistic hypothesis rather than proof of a distinct clinical mechanism.
  sourceId: S7
```

## Cautions

```yaml
- title: Pregnancy evidence is sparse
  description: MotherToBaby reports that birth-defect risk, miscarriage risk, and pregnancy outcomes are not established; a report of 218 pregnancies exposed to huang lian included six birth defects without demonstrated causality.
  sourceId: S13
- title: Breastfeeding and infancy
  description: The amount entering breast milk is unknown, and bilirubin-related neonatal risk is a concern. NCCIH identifies pregnancy, breastfeeding, and infancy as contexts in which berberine should not be used.
  sourceId: S13
- title: Neonatal bilirubin risk
  description: Berberine can alter bilirubin binding; neonatal bilirubin accumulation can cause kernicterus and brain injury.
  sourceId: S13
- title: Gastrointestinal adverse events
  description: Nausea, diarrhea, bloating, constipation, abdominal pain, and vomiting were reported; rates varied across randomized lipid studies and products.
  sourceId: S3
- title: Formulation-specific tolerability
  description: In the HTD1801 trial, treatment-emergent adverse events occurred in 71.1% at 1,000 mg twice daily versus 39.5% with placebo; this estimate is specific to HTD1801 and its study population.
  sourceId: S10
- title: Long-term safety gap
  description: Most metabolic trials were short, so sustained efficacy and long-term safety in people with major comorbidity remain incompletely characterized.
  sourceId: S3
- title: Product variability
  description: Salts, extracts, complexes, doses, and analytical specifications differed across studies, limiting direct product-to-product comparison.
  sourceId: S4
```

## Claims

```yaml
- id: berberine-claim-glycemia
  assertion: Berberine lowers blood sugar.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:glycemic-control
      role: reported-outcome
  context: Partly supported as a modest short-term biomarker effect in randomized trials, with low certainty and substantial heterogeneity.
  sourceIds: [S2]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Biomarker changes do not establish long-term clinical benefit.
- id: berberine-claim-lipids
  assertion: Berberine lowers cholesterol and triglycerides.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:ldl-cholesterol
      role: reported-outcome
  context: Supported for modest short-term lipid changes in meta-analysis, while clinical-event benefit is unestablished.
  sourceIds: [S3]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trials were short and geographically concentrated.
- id: berberine-claim-weight-loss
  assertion: Berberine is a reliable weight-loss drug.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:glycemic-control
      role: reported-outcome-context
  context: "Not established: weight meta-analyses conflict and a six-month adiposity trial was null for visceral adipose tissue and liver fat."
  sourceIds: [S9, S16, S20]
  conflictingSourceIds: [S16, S20]
  assessment: not-formally-assessed
  limitation: Formulations and study quality varied.
- id: berberine-claim-replacement
  assertion: Berberine can replace metformin or GLP-1 therapy.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:glycemic-control
      role: comparator-context
  context: Unsupported by equivalence trials or clinical-outcome evidence.
  sourceIds: [S2, S9]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The cited studies were not equivalence trials.
- id: berberine-claim-ampk
  assertion: AMPK activation proves clinical effectiveness.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:insulin-sensitivity
      role: proposed-mechanism
  context: "Mechanistically invalid: AMPK findings are primarily preclinical and do not substitute for clinical outcomes."
  sourceIds: [S14]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Molecular pathway evidence does not quantify human benefit.
- id: berberine-claim-natural-safe
  assertion: Natural means safe.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:perception
      role: safety-claim
  context: "Incomplete: gastrointestinal effects, CYP interactions, formulation variability, and pregnancy or infant concerns are documented."
  sourceIds: [S3, S5, S13]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Safety depends on formulation, dose, co-medications, and population.
- id: berberine-claim-prevention
  assertion: Berberine prevents cardiovascular disease, extends lifespan, or treats cancer.
  relation: evidence-boundary
  participants:
    - entityId: substance:berberine
      role: intervention
    - entityId: tag:glycemic-control
      role: surrogate-evidence-context
  context: Not established by the cited human randomized outcome evidence.
  sourceIds: [S3, S4]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The evidence base is mainly short surrogate-endpoint research.
```

## Interactions

```yaml
- id: berberine-interaction-cyp3a4
  name: CYP3A4 substrates
  otherSlug: null
  summary: After berberine 300 mg three times daily for 14 days in healthy men, midazolam Cmax increased 38%, AUC increased 40%, and oral clearance decreased 27%.
  sourceId: S5
  context: Direct human probe-drug evidence; extension to every CYP3A4 substrate is extrapolation.
  conflictingSourceIds: []
- id: berberine-interaction-cyp2d6
  name: CYP2D6 substrates
  otherSlug: null
  summary: The urinary dextromethorphan/dextrorphan ratio increased approximately ninefold after repeated berberine, indicating reduced CYP2D6 activity in that study.
  sourceId: S5
  context: Direct human probe-drug evidence; clinical magnitude for other substrates is not established.
  conflictingSourceIds: []
- id: berberine-interaction-cyp2c9
  name: CYP2C9 substrates
  otherSlug: null
  summary: The losartan/E-3174 ratio approximately doubled after repeated berberine, indicating reduced CYP2C9 activity in that study.
  sourceId: S5
  context: Direct human probe-drug evidence; extension to other substrates is extrapolation.
  conflictingSourceIds: []
- id: berberine-interaction-cyclosporine
  name: Cyclosporine
  otherSlug: null
  summary: In six renal-transplant recipients receiving berberine 0.2 g three times daily for 12 days, cyclosporine AUC increased 34.5% and trough concentration increased 88.3%.
  sourceId: S6
  context: Small transplant-recipient study; clinical context and therapeutic monitoring matter.
  conflictingSourceIds: []
- id: berberine-interaction-transporters
  name: P-glycoprotein and other transporters
  otherSlug: null
  summary: Transporter interactions are supported mainly by mechanistic or preclinical evidence; clinical magnitude is not established.
  sourceId: S8
  context: Mechanistic evidence does not quantify a clinical interaction for a specific co-medication.
  conflictingSourceIds: []
- id: berberine-interaction-glucose-medicines
  name: Glucose-lowering medicines
  otherSlug: null
  summary: Additive glucose-lowering effects are biologically plausible, but the randomized literature does not quantify symptomatic hypoglycemia risk across medication combinations.
  sourceId: S2
  context: Inference from biomarker effects and heterogeneous combination trials; a patient-specific risk estimate is not established.
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: Berberine chloride
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride
  kind: database record
  insight: Chemical identity; chloride/hydrochloride synonym; salt form.
  limitation: No clinical efficacy synthesis.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S2
  title: "Overall and Sex-Specific Effect of Berberine on Glycemic and Insulin-Related Traits: a Systematic Review and Meta-Analysis of Randomized Controlled Trials"
  authors: Jie V. Zhao, Xin Huang, Junmeng Zhang, Yap-Hang Chan, Hung-Fat Tse, Joseph E. Blais
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37598753/
  kind: systematic review and meta-analysis
  insight: Pooled glycemic and insulin-related effects with certainty and subgroup analyses.
  limitation: Heterogeneity, few studies for HbA1c and sex comparisons, possible publication bias.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S3
  title: "Overall and Sex-Specific Effect of Berberine for the Treatment of Dyslipidemia in Adults: A Systematic Review and Meta-Analysis of Randomized Placebo-Controlled Trials"
  authors: Joseph E. Blais, Xin Huang, Jie V. Zhao
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/36941490/
  kind: systematic review and meta-analysis
  insight: Pooled LDL-C, total cholesterol, triglyceride, ApoB, HDL-C, and adverse-event results.
  limitation: Short trials, geographic concentration, no established clinical-event outcomes.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S4
  title: "Berberine and health outcomes: an overview of systematic reviews"
  authors: Lanjun Shi, Wenya Wang, Chengyang Jing, Jing Hu, Xing Liao
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12016319/
  kind: overview of systematic reviews
  insight: Quantifies methodological weakness, publication-bias downgrading, and evidence certainty.
  limitation: Assesses reviews rather than re-analyzing every primary trial.
  funding: China Academy of Chinese Medical Sciences Innovation Fund; China Center for Evidence Based Traditional Chinese Medicine
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Repeated administration of berberine inhibits cytochromes P450 in humans
  authors: Ying Guo et al.; Central South University and University of Kansas Medical Center
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4898966
  kind: randomized human pharmacokinetic interaction study
  insight: Human CYP3A4, CYP2D6, and CYP2C9 probe-drug effects.
  limitation: Small, healthy male sample; short exposure; genotype variability.
  funding: NIH, National Natural Science Foundation of China, Hunan Provincial Innovation Foundation, and Chinese government programs
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors reported no conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4898966
- id: S6
  title: "Effects of berberine on the blood concentration of cyclosporin A in renal transplanted recipients: clinical and pharmacokinetic study"
  authors: National Library of Medicine PubMed record; authors not-assessed
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16133554/
  kind: clinical pharmacokinetic interaction study
  insight: Cyclosporine exposure increased with berberine coadministration.
  limitation: Six transplant recipients; clinical context-specific.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S7
  title: The metabolism of berberine and its contribution to the pharmacological effects
  authors: National Library of Medicine PubMed record; authors not-assessed
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28290706/
  kind: pharmacology and metabolism review
  insight: Metabolic pathways and potentially active berberine metabolites.
  limitation: Mechanistic and pharmacokinetic evidence does not establish human clinical effects.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S8
  title: Research progress on pharmacological effects and bioavailability of berberine
  authors: National Library of Medicine PubMed record; authors not-assessed
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38888754/
  kind: pharmacology and bioavailability review
  insight: Low bioavailability, solubility, permeability, P-glycoprotein, metabolism, and formulation strategies.
  limitation: Review integrates preclinical and clinical evidence with variable certainty.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S9
  title: "Berberine and Adiposity in Diabetes-Free Individuals With Obesity and MASLD: A Randomized Clinical Trial"
  authors: Lubi Lei et al.; BRAVO Collaborative Group
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41543854/
  kind: multicenter randomized clinical trial
  insight: Six-month 1-g/day berberine was null for visceral adipose tissue and liver fat.
  limitation: Population-specific; secondary weight and metabolic findings do not establish long-term obesity outcomes.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S10
  title: "Berberine Ursodeoxycholate for the Treatment of Type 2 Diabetes: A Randomized Clinical Trial"
  authors: JAMA Network Open; authors not-assessed
  year: 2025
  url: https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2830820
  kind: phase 2 randomized clinical trial
  insight: HTD1801 dose-dependent HbA1c effects and lipid changes over 12 weeks.
  limitation: Small, short, China-based trial; HTD1801 is not conventional berberine.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S11
  title: "Development of an Innovative Berberine Food-Grade Formulation with an Ameliorated Absorption: In Vitro Evidence Confirmed by Healthy Human Volunteers Pharmacokinetic Study"
  authors: National Library of Medicine PubMed record; authors not-assessed
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34904017/
  kind: formulation and human pharmacokinetic study
  insight: Berberine Phytosome showed substantially higher exposure than unformulated berberine.
  limitation: Healthy-volunteer PK study; no validated metabolic-outcome comparison.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S12
  title: "Absorption Kinetics of Berberine and Dihydroberberine and Their Impact on Glycemia: A Randomized, Controlled, Crossover Pilot Trial"
  authors: National Library of Medicine PubMed record; authors not-assessed
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35010998/
  kind: randomized crossover human pharmacokinetic pilot
  insight: Dihydroberberine produced higher short-window plasma exposure than conventional berberine.
  limitation: Five healthy men; no significant glucose or insulin effect; very short observation.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S13
  title: Berberine
  authors: MotherToBaby, Organization of Teratology Information Specialists
  year: 2025
  url: https://www.ncbi.nlm.nih.gov/books/NBK600384/
  kind: pregnancy and breastfeeding fact sheet
  insight: Human pregnancy uncertainty, breastfeeding transfer uncertainty, bilirubin concerns, and limited pregnancy reports.
  limitation: Sparse observational evidence; not a controlled safety study.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S14
  title: "Molecular mechanisms, targets and clinical potential of berberine in regulating metabolism: a review focussing on databases and molecular docking studies"
  authors: Sun et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38957396/
  kind: mechanistic review
  insight: AMPK, mTOR, SIRT1, SREBP, Nrf2, and related molecular pathways.
  limitation: Much of the mechanistic evidence is cellular, animal, database, or docking-based.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: One author was employed by China Traditional Chinese Medicine Holdings Co. Limited and Guangdong e-fong Pharmaceutical Co., Ltd.; remaining authors reported no commercial conflicts.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/38957396/
- id: S15
  title: "FOOD AND DRUG ADMINISTRATION COMPLIANCE PROGRAM 7321.008"
  authors: U.S. Food and Drug Administration
  year: 2024
  url: https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf
  kind: U.S. regulatory compliance document
  insight: Dietary-supplement disease claims and labeling requirements.
  limitation: U.S.-specific; does not determine legal status in other jurisdictions.
  funding: U.S. government
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: none stated
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf
- id: S16
  title: "The effect of berberine supplementation on obesity indices: A dose-response meta-analysis and systematic review of randomized controlled trials"
  authors: Pan Xiong et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32379652/
  kind: systematic review and meta-analysis
  insight: BMI and waist circumference changed modestly, but body weight was null.
  limitation: Only 10 studies; heterogeneous populations and formulations.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S17
  title: "Randomized controlled trial of berberine sulfate therapy for diarrhea due to enterotoxigenic Escherichia coli and Vibrio cholerae"
  authors: G. H. Rabbani, T. Butler, J. Knight, S. C. Sanyal, K. Alam
  year: 1987
  url: https://pubmed.ncbi.nlm.nih.gov/3549923/
  kind: randomized clinical trial
  insight: Human evidence for a berberine sulfate formulation in acute infectious diarrhea.
  limitation: Historical, disease-specific, and not evidence for metabolic use.
  pmid: "3549923"
  doi: 10.1093/infdis/155.5.979
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S18
  title: "In the News: Berberine"
  authors: National Center for Complementary and Integrative Health
  year: 2023
  url: https://www.nccih.nih.gov/health/in-the-news-berberine
  kind: government consumer evidence and safety summary
  insight: Summarizes modest metabolic evidence, GI effects, pregnancy/infant cautions, and interaction concerns.
  limitation: Narrative consumer summary rather than a new systematic review.
  funding: U.S. government
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: none stated
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.nccih.nih.gov/health/in-the-news-berberine
- id: S19
  title: "Pharmacokinetics and pharmacodynamics of HTD1801 (berberine ursodeoxycholate, BUDCA) in patients with hyperlipidemia"
  authors: National Library of Medicine PubMed/PMC record; authors not-assessed
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7661247/
  kind: formulation-specific pharmacokinetic/pharmacodynamic study
  insight: Characterizes the berberine–ursodeoxycholate salt and its distinct exposure profile.
  limitation: Cannot be generalized to conventional berberine chloride.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S20
  title: "The effect of berberine on obesity indices: a systematic review and meta-analysis"
  authors: Iman Elahi Vahed et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41310257/
  kind: updated systematic review and meta-analysis
  insight: Twenty-three RCT articles produced small pooled reductions in weight, BMI, and waist circumference, with null waist-to-hip ratio.
  limitation: The authors noted common reporting, blinding, randomization, and biochemical-standardization concerns.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Disease claims for dietary supplements
  status: FDA materials state that a dietary supplement cannot make claims that it diagnoses, mitigates, treats, cures, or prevents disease; structure/function claims have separate substantiation and disclaimer requirements.
  sourceUrl: https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Product-specific marketing and classification
  status: The rule addresses marketing claims and does not establish clinical efficacy, safety, or approval of a particular berberine salt, extract, or product.
  sourceUrl: https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf
  asOf: 2026-10-11
- jurisdiction: Other jurisdictions
  activity: Regulatory classification
  status: Legal treatment varies by country and by whether the item is marketed as a supplement, food, drug, or investigational formulation.
  sourceUrl: https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf
  asOf: 2026-10-11
```
