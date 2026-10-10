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
accent: "#888888"
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
x-order: 9007199254740991
---

## Summary

Long-chain omega-3 evidence depends on molecule, formulation, dose, population, and endpoint. Prescription icosapent ethyl reduced cardiovascular events in REDUCE-IT, whereas STRENGTH and several primary-prevention or post-MI trials were null. High-dose prescription omega-3 can increase atrial-fibrillation risk; fish intake, OTC fish oil, and prescription products are not interchangeable. [S1][S6][S9][S15][S18][S52]

## Description

EPA and DHA occur as free fatty acids, triglycerides, re-esterified triglycerides, or ethyl esters. Absorption differs with food and formulation; prescription labels specify ingredients and dosing while FDA does not preapprove dietary supplements for efficacy. [S39][S47][S49]

## Evidence note

The strongest positive cardiovascular result is product-specific: REDUCE-IT used icosapent ethyl 4 g/day in statin-treated hypertriglyceridemia and had industry sponsorship. STRENGTH, VITAL, ASCEND, OMEMI, and other trials do not support a universal capsule benefit. Cognition, depression, pregnancy, inflammation, exercise, and bleeding results are endpoint- and formulation-specific. [S1][S6][S9][S12][S15][S24][S53]

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
```

## Mechanisms

```yaml
- title: EPA/DHA membrane and mediator biology
  description: EPA and DHA alter membrane fatty acids and lipid mediator substrates; mechanism does not predict a universal clinical outcome across formulations.
  sourceId: S32
- title: Triglyceride lowering
  description: Prescription omega-3 products lower triglycerides at pharmacologic doses, while event reduction depends on molecule, comparator, and population.
  sourceId: S1
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
  title: "Direct source link: https://doi.org/10.1056/NEJMoa1812792"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01492361"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/42070013/"
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
  title: "Direct source link: https://doi.org/10.1007/s40256-026-00798-5"
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
  title: "Effect of Omega-3 Fatty Acids on Cardiovascular Outcomes: STRENGTH"
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
  title: "Direct source link: https://doi.org/10.1001/jama.2020.22258"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT02104817"
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
  title: "Direct source link: https://doi.org/10.1056/NEJMoa1811403"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01169259"
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
  title: "Direct source link: https://doi.org/10.1056/NEJMoa1804989"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT00135226"
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
  title: "Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.120.052209"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01841944"
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
  title: "Direct source link: https://doi.org/10.1016/S0140-6736(07"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT00231738"
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
  title: "Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.123.065520"
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
  title: "Direct source link: https://www.umin.ac.jp/ctr/"
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
  title: "Effect of omega-3 fatty acids on cardiovascular outcomes: systematic review and meta-analysis"
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
  title: "Direct source link: https://doi.org/10.1016/j.eclinm.2021.100997"
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
  title: "Direct source link: https://doi.org/10.1161/CIRCULATIONAHA.121.055654"
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
  title: "Direct source link: https://doi.org/10.1001/jama.2010.1510"
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
  title: "Direct source link: https://clinicaltrials.gov/study/NCT00440050"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/17030655/"
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
  title: "Direct source link: https://doi.org/10.1001/archneur.63.10.1402"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/22696350/"
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
  title: "Direct source link: https://doi.org/10.1002/14651858.CD005379.pub3"
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
  title: "Direct source link: https://doi.org/10.3390/nu18091447"
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
  title: "PROVIGIL: prescribing information"
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
  title: "PROVIGIL: prescribing information"
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
  title: "Comparison of omega-3 fatty acid formulations: ECLIPSE study"
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
  title: "Direct source link: https://doi.org/10.1016/j.jacl.2012.01.002"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/20959577/"
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
  title: "Direct source link: https://doi.org/10.1001/jama.2010.1507"
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
  title: "Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/31509674/"
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
  title: "Direct source link: https://doi.org/10.1056/NEJMoa1816832"
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
  title: "Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=830"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/20638827/"
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
  title: "Direct source link: https://doi.org/10.1016/j.plefa.2010.06.007"
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
  title: "FDA 101: Dietary Supplements"
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
  title: "Direct source link: https://www.ema.europa.eu/en/medicines/human/referrals/omega-3-acid-ethyl-esters-containing-medicinal-products-oral-use-secondary-prevention-after-myocardial-infarction"
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
  title: "Direct source link: https://www.fda.gov/food/consumers/advice-about-eating-fish"
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
  title: "Direct source link: https://www.ema.europa.eu/en/documents/dhpc/direct-healthcare-professional-communication-dhpc-omega-3-acid-ethyl-ester-medicines-dose-dependent-increased-risk-atrial-fibrillation-patients-established-cardiovascular-diseases-or-cardiovascular_en.pdf"
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
  title: "Omega-3 fatty acids and bleeding risk: systematic review and meta-analysis"
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
  title: "Direct source link: https://doi.org/10.1161/JAHA.123.032390"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/34817851/"
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
  title: "Direct source link: https://doi.org/10.1002/14651858.CD004692.pub5"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/30480773/"
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
  title: "Direct source link: https://doi.org/10.1002/14651858.CD003402.pub3"
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
  title: "Direct source link: https://doi.org/10.1093/advances/nmaa086"
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
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/35108375/"
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
  title: "Direct source link: https://doi.org/10.1093/advances/nmac006"
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
  title: "Direct source link: https://doi.org/10.1016/S0140-6736(07)60527-3"
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
  title: "Direct source link: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c1a2828-1583-4414-ab22-a60480e8e508"
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
  title: "Direct source link: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21cfa4ce-0b05-47ed-b268-339eb1b83b75"
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
  title: "Direct source link: https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=363687"
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
