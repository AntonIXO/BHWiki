---
slug: quercetin
name: Quercetin
subtitle: Formulation-dependent flavonol evidence.
aliases:
  - quercetine
formula: C15H10O7
molecularWeight: 302.24 g/mol
pubchemCid: 5280343
smiles: C1=CC(=C(C=C1C2=C(C(=O)C3=C(C2=CC(=C3O)O)O)O)O)O
category: Polyphenol
tags: []
accent: "#a57c65"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Approximately 11 hours in one glycoside crossover study
  low: null
  high: null
  context: This study-specific estimate describes measured quercetin-related plasma species and is not a universal human half-life across aglycone, glycoside, phytosome, or micellar products.
  sourceId: S14
  observationId: quercetin-pk-glycosides
kinetics:
  onset: Not established as a clinical effect
  peak: About 0.7 hours for onion and quercetin-4'-O-glucoside, and about 7 hours for rutin in one crossover study
  duration: Formulation-specific plasma persistence; micellar concentrations were followed for up to 72 hours in a pilot
  bioavailability: Glycoside, food-matrix, phytosome, and micellar preparations produce different exposure
  metabolism: Phase-II glucuronidation, sulfation, methylation, biliary recycling, and microbiota metabolism yield circulating conjugates
  sourceId: S14
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

Quercetin is a dietary flavonol studied as an aglycone, glycoside, onion matrix, phytosome, and micellar product. Formulation changes human exposure more consistently than it changes respiratory, exercise, blood-pressure, or metabolic outcomes; clinical findings are mixed and often short-term.[S1][S4][S10][S14][S16][S17]

## Description

Quercetin is 3,3′,4′,5,7-pentahydroxyflavone (C15H10O7). Plants commonly provide sugar-bound forms such as glucosides and rutin; aglycone, glycoside, phytosome, and micellar products are not milligram-for-milligram interchangeable because absorption and circulating species differ.[S14][S16][S17][S24]

## Evidence note

This page separates primary human trials, human pharmacokinetic studies, pooled analyses, mechanistic evidence, and regulatory context. Many studies are small or brief and measure biomarkers or symptoms rather than patient-important outcomes; subgroup findings and formulation-specific exposure should not be generalized across products.[S1][S4][S10][S14][S17]

## Doses

```yaml
- label: Estimated dietary exposure
  amount: 5–100 mg/day commonly estimated
  quantity: 5
  quantityMax: 100
  unit: mg/day
  ingredient: Quercetin from foods
  formulation: Food matrices; glycosides predominate
  route: Oral
  frequency: Usual diet
  duration: Habitual intake
  population: General dietary estimates
  purpose: Reference exposure, not a treatment schedule
  sourceCategory: reference
  note: Unusually quercetin-rich diets can provide more; food estimates are not supplement dosing guidance.
  sourceId: S24
- label: Respiratory-trial exposure
  amount: 500–1000 mg/day
  quantity: 500
  quantityMax: 1000
  unit: mg/day
  ingredient: Quercetin
  formulation: Study supplement; exact preparation varied by trial
  route: Oral
  frequency: Daily
  duration: 12 weeks, or 3 weeks before and 2 weeks after intensive exercise
  population: Community adults or trained cyclists
  purpose: Test upper-respiratory outcomes
  sourceCategory: research
  note: No overall community URTI benefit was found; one fit older subgroup signal does not define a general dose.
  sourceId: S1
- label: Exercise-trial exposure
  amount: 1000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Quercetin
  formulation: Study supplement
  route: Oral
  frequency: Daily
  duration: 3–6 weeks
  population: Trained cyclists or endurance runners
  purpose: Test exercise performance and oxidative-stress endpoints
  sourceCategory: research
  note: Biomarker changes occurred without consistent performance improvement.
  sourceId: S4
- label: Blood-pressure trial exposure
  amount: 150–730 mg/day
  quantity: 150
  quantityMax: 730
  unit: mg/day
  ingredient: Quercetin or quercetin-rich onion extract
  formulation: Isolated quercetin or onion-skin extract
  route: Oral
  frequency: Daily
  duration: 4–6 weeks
  population: Overweight adults, prehypertension, or stage-1 hypertension
  purpose: Test blood pressure and vascular endpoints
  sourceCategory: research
  note: Effects were larger in selected hypertensive groups and were not uniform across studies.
  sourceId: S6
- label: Metabolic-trial exposure
  amount: 500–1000 mg/day
  quantity: 500
  quantityMax: 1000
  unit: mg/day
  ingredient: Quercetin
  formulation: Study supplement
  route: Oral
  frequency: Daily
  duration: 12–32 weeks
  population: Women with PCOS or adults with type-2 diabetes
  purpose: Test glycemic and endocrine biomarkers
  sourceCategory: research
  note: Disease-specific trials reported selected improvements, while pooled evidence remained heterogeneous.
  sourceId: S12
- label: Formulation pharmacokinetic exposure
  amount: 100–1000 mg single dose in formulation studies
  quantity: 100
  quantityMax: 1000
  unit: mg
  ingredient: Quercetin
  formulation: Glycoside, onion-skin matrix, phytosome, or micellar product
  route: Oral
  frequency: Single dose or short repeated dosing
  duration: Acute sampling through 72 hours
  population: Healthy adults
  purpose: Compare exposure across formulations
  sourceCategory: research
  note: Exposure comparisons do not establish superior clinical efficacy or safety.
  sourceId: S14
```

## Pharmacokinetics

```yaml
- id: quercetin-pk-glycosides
  analyte: Quercetin and circulating conjugates
  route: Oral
  formulation: Onion, quercetin-4'-O-glucoside, or rutin
  population: 12 healthy adults in a crossover study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 11
  low: null
  high: null
  unit: hours
  context: Onion and glucoside reached Cmax of about 2.3 and 2.1 micrograms/mL at about 0.7 hours, while rutin reached about 0.3 micrograms/mL at about 7 hours. The reported terminal half-life was approximately 11 hours across tested glycoside preparations; free aglycone was not the sole circulating species.
  sourceId: S14
  modelEligible: false
- id: quercetin-pk-onion-matrix
  analyte: Total plasma quercetin
  route: Oral
  formulation: Onion-skin extract versus quercetin dihydrate
  population: Healthy adults in a randomized crossover PK study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The onion-skin matrix produced approximately 4.8-fold higher AUC and 5.4-fold higher Cmax than quercetin dihydrate at similar nominal aglycone exposure; a universal half-life was not established.
  sourceId: S15
  modelEligible: false
- id: quercetin-pk-phytosome
  analyte: Total plasma quercetin
  route: Oral
  formulation: Quercetin phytosome with lecithin
  population: 12 adults in a fasting crossover study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The phytosome produced markedly higher exposure than unformulated quercetin; the formulation-specific study does not provide a transferable terminal half-life.
  sourceId: S16
  modelEligible: false
- id: quercetin-pk-micellar
  analyte: Total plasma quercetin and metabolites
  route: Oral
  formulation: LipoMicel micellar quercetin
  population: 10 healthy adults in a diet-controlled pilot
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: A 500 mg micellar product produced about 7-fold higher AUC and 7.7-fold higher Cmax than standard quercetin, with sampling extended to 72 hours; the open-label pilot does not establish a universal half-life.
  sourceId: S17
  modelEligible: false
- id: dr-quercetin-quercetin-pk-1
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated universal terminal half-life was established in the returned report.
  sourceId: dr-quercetin-s1
  modelEligible: false
```

## Modifiers

```yaml
- label: Sugar moiety
  effect: Variable exposure
  detail: Glucosides generally absorbed faster and more extensively than rutin; aglycone, glucoside, and rutinoside doses are not interchangeable.
  sourceId: S14
  observationId: quercetin-pk-glycosides
  factorType: other
  direction: variable
- label: Food matrix
  effect: Higher exposure in one matrix comparison
  detail: Onion or onion-skin matrices increased AUC and Cmax relative to isolated quercetin dihydrate in a small crossover study.
  sourceId: S15
  observationId: quercetin-pk-onion-matrix
  factorType: other
  direction: variable
- label: Delivery system
  effect: Higher and more persistent exposure
  detail: Lecithin phytosome and micellar delivery changed AUC, Cmax, Tmax, and persistence versus unformulated quercetin.
  sourceId: S16
  observationId: quercetin-pk-phytosome
  factorType: other
  direction: variable
- label: Baseline blood pressure
  effect: Greater response in selected hypertension
  detail: One trial found larger blood-pressure reductions in stage-1 hypertension than in prehypertension; this is a subgroup result, not a universal modifier.
  sourceId: S6
  observationId: quercetin-pk-glycosides
  factorType: other
  direction: variable
- label: Analytical hydrolysis
  effect: Apparent parent concentration changes
  detail: Enzymatic hydrolysis can convert conjugates before assay and report total quercetin as apparent aglycone.
  sourceId: S14
  observationId: quercetin-pk-glycosides
  factorType: other
  direction: variable
- label: Person-to-person metabolism
  effect: Variable exposure
  detail: Age, sex, BMI, gut microbiota, phase-II enzymes, transporters, and diet are plausible contributors to PK variation; the cited studies do not support a precise individual prediction.
  sourceId: S17
  observationId: quercetin-pk-micellar
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: quercetin-effect-respiratory-symptoms
  conceptId: perception
  name: Respiratory symptom experience
  direction: Variable
  evidence: Human research
  description: In a 1002-person community trial, quercetin did not reduce overall URTI rates or symptoms; a fit subgroup aged 40 years or older had fewer sick days and lower symptom severity with 1000 mg/day.
  sourceId: S1
  population: Community adults; prespecified fitness and age subgroup
  exposure: 500 or 1000 mg/day for 12 weeks
  instrument: Wisconsin Upper Respiratory Symptom Survey and sick-day reports
  magnitude: No overall effect; subgroup reported 31% fewer sick days and 36% lower severity
  reportType: measured-assessment
  conflictingSourceIds:
    - S3
- id: quercetin-effect-exercise-illness
  conceptId: perception
  name: Post-exercise illness experience
  direction: Variable
  evidence: Human research
  description: A trained-cyclist study reported fewer post-exercise URTI episodes, but an ultramarathon trial found no postrace illness benefit and no counteracting immune-marker effect.
  sourceId: S2
  population: Trained cyclists and ultramarathon runners in separate trials
  exposure: Quercetin around intensive exercise or a 160-km race
  instrument: Illness surveillance and immune assays
  magnitude: Cyclist signal was 1/20 versus 9/20; ultramarathon result was null
  reportType: measured-assessment
  conflictingSourceIds:
    - S3
- id: quercetin-effect-exercise-perception
  conceptId: perception
  name: Perceived exercise response
  direction: Variable
  evidence: Human research
  description: Three to six weeks of quercetin did not consistently change perceived exertion, cycling efficiency, running economy, or time-trial performance despite a reduction in malondialdehyde in one runner study.
  sourceId: S4
  population: Trained cyclists or endurance runners
  exposure: 1000 mg/day for 3–6 weeks
  instrument: Perceived exertion and exercise-performance testing
  magnitude: No consistent perceptual or performance benefit
  reportType: measured-assessment
  conflictingSourceIds:
    - S5
```

## Outcomes

```yaml
- id: quercetin-outcome-common-cold-incidence
  conceptId: common-cold-incidence
  name: Community URTI incidence
  direction: Variable
  evidence: Human research
  description: The large community RCT found no overall reduction in URTI incidence with 500 or 1000 mg/day; the positive finding was confined to a fit older subgroup.
  sourceId: S1
  population: 1002 community adults
  exposure: 500 or 1000 mg/day for 12 weeks
  instrument: Daily symptom and illness records
  magnitude: Overall null; age and fitness subgroup signal
  reportType: measured-assessment
  conflictingSourceIds:
    - S2
    - S3
- id: quercetin-outcome-common-cold-duration
  conceptId: common-cold-duration
  name: Post-exercise illness duration
  direction: Variable
  evidence: Human research
  description: "Post-exercise illness results differed by protocol: one cycling study suggested fewer episodes, while the ultramarathon study did not reduce postrace illness."
  sourceId: S2
  population: Trained cyclists and ultramarathon runners
  exposure: Quercetin around intensive exercise or race completion
  instrument: Illness surveillance
  magnitude: Protocol-dependent; no stable duration effect
  reportType: measured-assessment
  conflictingSourceIds:
    - S3
- id: quercetin-outcome-exercise
  conceptId: exercise
  name: Exercise performance
  direction: Variable
  evidence: Human research
  description: Trials found no consistent improvement in power, cycling efficiency, substrate use, VO2peak, running economy, 10-km performance, heart rate, or perceived exertion.
  sourceId: S4
  population: Trained cyclists and endurance runners
  exposure: 1000 mg/day for 3–6 weeks
  instrument: Cycling efficiency, VO2peak, running economy, and time trial
  magnitude: Null performance findings despite one oxidative-stress biomarker change
  reportType: measured-assessment
  conflictingSourceIds:
    - S5
- id: quercetin-outcome-blood-pressure
  conceptId: blood-pressure
  name: Blood pressure
  direction: Decreased
  evidence: Human research
  description: A 730 mg/day trial lowered stage-1-hypertensive systolic and diastolic pressure by about 7 and 5 mmHg, while other onion-extract and pooled studies showed smaller or subgroup-specific effects with high heterogeneity.
  sourceId: S6
  population: Stage-1 hypertension, prehypertension, or overweight adults across trials
  exposure: 150–730 mg/day for 4–6 weeks
  instrument: Clinic or ambulatory systolic and diastolic blood pressure
  magnitude: About −7/−5 mmHg in one stage-1-hypertension trial; pooled SBP estimates approximately −1.9 to −3.1 mmHg
  reportType: measured-assessment
  conflictingSourceIds:
    - S8
    - S9
    - S10
    - S11
  result:
    measure: mean-difference
    estimate: -7
    unit: mmHg systolic
    instrument: Clinic blood pressure
    comparator: Placebo
    assessmentTime: 28 days
    population: Stage-1 hypertension
- id: quercetin-outcome-insulin-sensitivity
  conceptId: insulin-sensitivity
  name: Insulin sensitivity and glycemic biomarkers
  direction: Variable
  evidence: Human research
  description: PCOS and type-2-diabetes trials reported selected improvements in HOMA-IR, adiponectin, HbA1c, or systolic pressure, but pooled cardiometabolic evidence was largely null or heterogeneous for glucose, lipids, inflammation, and anthropometry.
  sourceId: S10
  population: PCOS, type-2 diabetes, and mixed cardiometabolic trial populations
  exposure: 500–1000 mg/day for 12–32 weeks
  instrument: HOMA-IR, adiponectin, HbA1c, glucose, lipid, and inflammatory assays
  magnitude: Disease-specific positive findings coexist with pooled null findings
  reportType: measured-assessment
  conflictingSourceIds:
    - S11
- id: quercetin-outcome-hba1c
  conceptId: hba1c
  name: Glycated hemoglobin
  direction: Decreased
  evidence: Human research
  description: One adjunctive type-2-diabetes RCT reported HbA1c improvement with 500 mg/day over its protocol; this single trial does not establish a general diabetes treatment effect.
  sourceId: S13
  population: Adults with type-2 diabetes receiving standard care
  exposure: 500 mg/day adjunctive quercetin for 32 weeks
  instrument: HbA1c assay
  magnitude: Trial-level improvement; estimate not reported in the returned source summary
  reportType: measured-assessment
  conflictingSourceIds:
    - S10
    - S11
```

## Mechanisms

```yaml
- title: Conjugation and recycling
  description: Glycoside hydrolysis, intestinal uptake, phase-II conjugation, biliary recycling, and microbiota metabolism determine which quercetin-related species reach plasma.
  sourceId: S14
- title: Redox and inflammatory signaling
  description: Cell and animal studies support antioxidant, NF-kB, Nrf2, mast-cell, and cytokine effects; these mechanisms do not establish human clinical efficacy.
  sourceId: S24
- title: Vascular signaling
  description: Vasorelaxation, endothelial signaling, and altered redox tone are plausible contributors to blood-pressure findings, although human vascular biomarkers were often unchanged.
  sourceId: S6
- title: Metabolic signaling
  description: Adiponectin and insulin-sensitivity changes may contribute to findings in PCOS or diabetes cohorts but have not generalized consistently across mixed populations.
  sourceId: S10
- title: Enzyme and transporter hypotheses
  description: Quercetin and metabolites can affect CYP enzymes, albumin binding, and uptake or efflux transporters in experimental systems; human probe studies show direction-specific results.
  sourceId: S18
- title: Warfarin binding and metabolism hypothesis
  description: In-vitro albumin displacement and CYP2C9 inhibition provide a possible mechanism for the isolated warfarin case, but tube findings do not quantify clinical risk.
  sourceId: S23
```

## Cautions

```yaml
- title: Short-term tolerability only
  description: Small oral trials generally reported acceptable short-term tolerability; the 10-person micellar PK pilot reported no adverse events or gastrointestinal intolerance.
  sourceId: S17
- title: Long-term and special-population uncertainty
  description: Long-term high-dose exposure, pregnancy, lactation, pediatric use, and substantial renal or hepatic impairment were not characterized by the cited RCT set.
  sourceId: S1
- title: Formulation-specific exposure
  description: Phytosome and micellar products can produce substantially higher exposure than standard aglycone, so safety and interaction assumptions are not interchangeable.
  sourceId: S16
- title: Warfarin case signal
  description: A 79-year-old man had INR 7.5 after starting a supplement containing 250 mg quercetin plus 500 mg vitamin C; INR returned to 2.5 after discontinuation, but attribution to quercetin alone is unresolved.
  sourceId: S22
- title: Preclinical evidence boundary
  description: In-vitro mutagenicity, antioxidant, antiviral, or enzyme findings do not establish equivalent human effects or a treatment indication.
  sourceId: S24
```

## Claims

```yaml
- id: quercetin-claim-antioxidant
  assertion: Quercetin is an antioxidant and anti-inflammatory treatment.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:immune-inflammatory-modulation
      role: reported-outcome-context
  context: Mechanistically plausible and supported in preclinical systems; human clinical outcome support is insufficient.
  sourceIds:
    - S24
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The cited review mixes preclinical, animal, and human evidence.
- id: quercetin-claim-respiratory
  assertion: Quercetin prevents colds or strengthens immunity.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:common-cold-incidence
      role: reported-outcome-context
  context: Not supported as a general effect; selected exercise-stress or fitness subgroup findings coexist with null trials.
  sourceIds:
    - S1
    - S2
    - S3
    - S27
  conflictingSourceIds:
    - S3
  assessment: not-formally-assessed
  limitation: Respiratory evidence is heterogeneous and partly subgroup-based.
- id: quercetin-claim-blood-pressure
  assertion: Quercetin lowers blood pressure.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:blood-pressure
      role: reported-outcome-context
  context: Small average systolic reductions are plausible, especially in some hypertensive groups, but effects are heterogeneous and diastolic results are inconsistent.
  sourceIds:
    - S6
    - S7
    - S8
    - S10
    - S11
  conflictingSourceIds:
    - S8
    - S9
  assessment: not-formally-assessed
  limitation: Pooled certainty is limited by heterogeneity and short follow-up.
- id: quercetin-claim-exercise
  assertion: Quercetin improves athletic performance.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:exercise
      role: reported-outcome-context
  context: Not reliable; biomarker changes have occurred without improvements in performance, VO2peak, economy, or time trials.
  sourceIds:
    - S4
    - S5
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trials were small and limited to trained participants.
- id: quercetin-claim-metabolic
  assertion: Quercetin treats diabetes, insulin resistance, or obesity.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:insulin-sensitivity
      role: reported-outcome-context
  context: Selected PCOS and diabetes trials are positive, while pooled cardiometabolic evidence is largely null outside modest blood-pressure and insulin signals.
  sourceIds:
    - S10
    - S11
    - S12
    - S13
  conflictingSourceIds:
    - S10
    - S11
  assessment: not-formally-assessed
  limitation: Disease-specific single trials do not establish a general treatment effect.
- id: quercetin-claim-covid-cancer-aging
  assertion: Quercetin treats COVID-19, cancer, or aging.
  relation: evidence-boundary
  participants:
    - entityId: substance:quercetin
      role: intervention
    - entityId: tag:common-cold-incidence
      role: reported-outcome-context
  context: Not established by the cited human evidence; respiratory and COVID-19 reviews describe insufficient or low-certainty evidence.
  sourceIds:
    - S24
    - S26
    - S27
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Regulatory enforcement and rapid review do not establish efficacy.
```

## Interactions

```yaml
- id: quercetin-interaction-fexofenadine
  name: Fexofenadine
  otherSlug: null
  summary: In 12 volunteers receiving quercetin 500 mg three times daily for 7 days, oral fexofenadine clearance decreased by 37%; renal clearance and half-life did not differ.
  sourceId: S19
  context: Controlled human pharmacokinetic study using a probe drug.
  conflictingSourceIds: []
- id: quercetin-interaction-midazolam
  name: Midazolam
  otherSlug: null
  summary: A single 1500 mg quercetin dose did not significantly change oral midazolam PK; after 1 week of 1500 mg/day, oral exposure tended lower with geometric AUC ratio 0.82 and 90% CI 0.61–1.10, while an intravenous substudy pointed in the opposite direction in three subjects.
  sourceId: S18
  context: Controlled human PK study with a small intravenous substudy.
  conflictingSourceIds: []
- id: quercetin-interaction-saquinavir
  name: Saquinavir
  otherSlug: null
  summary: Quercetin 500 mg three times daily did not materially change plasma saquinavir AUC, Cmax, or trough concentration in 10 healthy adults; intracellular measurements were highly variable.
  sourceId: S20
  context: Human prospective PK interaction study.
  conflictingSourceIds: []
- id: quercetin-interaction-talinolol
  name: Talinolol
  otherSlug: null
  summary: Short-term quercetin produced a tendency toward lower talinolol bioavailability, contrary to a simple P-glycoprotein-inhibition prediction.
  sourceId: S21
  context: Human PK interaction study with uncertain transporter attribution.
  conflictingSourceIds: []
- id: quercetin-interaction-warfarin
  name: Warfarin
  otherSlug: null
  summary: One case report associated a quercetin-containing supplement with INR elevation from 2.5 to 7.5; the supplement also contained vitamin C and no controlled rechallenge occurred.
  sourceId: S22
  context: Single case report; causality possible or probable but unresolved.
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: 'Quercetin supplementation and upper respiratory tract infection: A randomized
    community clinical trial'
  authors: Serena A. Heinz; Dru A. Henson; Melanie D. Austin; Fuxia Jin; David C.
    Nieman
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20478383/
  kind: Primary randomized controlled trial
  insight: N=1002; no overall URTI benefit; selected fit older subgroup improved.
  limitation: Subgroup and self-reported symptom findings.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: Quercetin reduces illness but not immune perturbations after intensive exercise
  authors: David C. Nieman; Dru A. Henson; Sarah J. Gross; et al.
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17805089/
  kind: Primary randomized controlled trial
  insight: URTI incidence fell after intensive cycling without changes in measured
    immune markers.
  limitation: Small trained-male exercise cohort.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S3
  title: Post-160-km race illness rates and decreases in granulocyte respiratory burst
    and salivary IgA output are not countered by quercetin ingestion
  authors: David C. Nieman; et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18213545/
  kind: Primary randomized controlled trial
  insight: No postrace illness or immune benefit in ultramarathoners.
  limitation: Only 39 of 63 randomized participants completed the race.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Quercetin's effect on cycling efficiency and substrate utilization
  authors: Charles L. Dumke; David C. Nieman; Alan C. Utter; et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/20029506/
  kind: Primary randomized controlled trial
  insight: No effect on power, efficiency, substrate use, or perceived effort.
  limitation: Small, well-trained cyclist sample.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Long-term quercetin supplementation reduces lipid peroxidation but does not
    improve performance in endurance runners
  authors: Shane D. Scholten; Igor N. Sergeev
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24379709/
  kind: Primary randomized controlled trial
  insight: MDA decreased, but performance and aerobic outcomes did not.
  limitation: Young male runners; six-week duration.
  funding: P20 RR016479/RR/NCRR NIH HHS
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/24379709/
- id: S6
  title: Quercetin reduces blood pressure in hypertensive subjects
  authors: R. L. Edwards; T. Lyon; S. E. Litwin; A. Rabovsky; J. D. Symons; T. Jalili
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17951477/
  kind: Primary randomized crossover trial
  insight: 730 mg/day lowered stage-1-hypertensive BP but not prehypertensive BP.
  limitation: N=41 and 28-day intervention.
  funding: PHS HHS grant 085226
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/17951477/
- id: S7
  title: 'Quercetin reduces systolic blood pressure and plasma oxidised low-density
    lipoprotein concentrations in overweight subjects with a high-cardiovascular disease
    risk phenotype: a double-blinded, placebo-controlled cross-over study'
  authors: Sarah Egert; Christine Boesch-Saadatmandi; Siegfried Wolffram; et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19402938/
  kind: Primary randomized crossover trial
  insight: 150 mg/day lowered SBP by about 2.6 mmHg in 93 overweight adults.
  limitation: Short crossover study; clinical events not assessed.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: 'Effects of a quercetin-rich onion skin extract on 24 h ambulatory blood
    pressure and endothelial function in overweight-to-obese patients with (pre-)hypertension:
    a randomised double-blinded placebo-controlled cross-over trial'
  authors: Verena Brüll; Constanze Burak; Birgit Stoffel-Wagner; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26328470/
  kind: Primary randomized crossover trial
  insight: No total-group ABP effect; smaller hypertensive-subgroup SBP effect.
  limitation: Extract formulation and subgroup analysis.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S9
  title: 'Acute intake of quercetin from onion skin extract does not influence postprandial
    blood pressure and endothelial function in overweight-to-obese adults with hypertension:
    a randomized, double-blind, placebo-controlled, crossover trial'
  authors: Verena Brüll; Constanze Burak; Birgit Stoffel-Wagner; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26924303/
  kind: Primary randomized crossover trial
  insight: A single 54 mg dose did not modify postprandial vascular or metabolic responses.
  limitation: N=22 and acute exposure.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: 'The effects of Quercetin supplementation on cardiometabolic outcomes: An
    umbrella review of meta-analyses of randomized controlled trials'
  authors: Seyyed Mostafa Arabi; et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37654199/
  kind: Umbrella review
  insight: Small SBP and insulin signals; no consistent DBP, lipid, glucose, inflammation,
    or anthropometric effects.
  limitation: High heterogeneity; certainty very low to moderate.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S11
  title: 'Effect of quercetin supplementation on plasma lipid profiles, blood pressure,
    and glucose levels: a systematic review and meta-analysis'
  authors: Haohai Huang; Dan Liao; Yong Dong; Rong Pu
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/31940027/
  kind: Systematic review and meta-analysis
  insight: BP decreased in 17 trials; pooled glucose and lipid effects were generally
    null.
  limitation: Subgroup effects depended on design and duration.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S12
  title: 'Effects of Quercetin on Adiponectin-Mediated Insulin Sensitivity in Polycystic
    Ovary Syndrome: A Randomized Placebo-Controlled Double-Blind Clinical Trial'
  authors: N. Rezvan; A. Moini; L. Janani; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27824398/
  kind: Primary randomized controlled trial
  insight: 1 g/day for 12 weeks improved HOMA-IR, adiponectin, testosterone, and LH
    in 84 women with PCOS.
  limitation: Single disease-specific cohort.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: 'Benefits of Quercetin on Glycated Hemoglobin, Blood Pressure, PiKo-6 Readings,
    Night-Time Sleep, Anxiety, and Quality of Life in Patients with Type 2 Diabetes
    Mellitus: A Randomized Controlled Trial'
  authors: Aikaterini E. Mantadaki; et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38930033/
  kind: Primary randomized controlled trial
  insight: Adjunctive 500 mg/day was associated with HbA1c and SBP improvements over
    the study protocol.
  limitation: 88 completers, single trial, and standard-care control.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S14
  title: Pharmacokinetics and Bioavailability of Quercetin Glycosides in Humans
  authors: E. U. Graefe; J. Wittig; S. Mueller; et al.
  year: 2001
  url: https://accp1.onlinelibrary.wiley.com/doi/abs/10.1177/00912700122010366
  kind: Human randomized four-way crossover PK study
  insight: Sugar moiety strongly influenced Cmax, Tmax, and apparent bioavailability.
  limitation: N=12 and single-dose design.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S15
  title: Higher plasma quercetin levels following oral administration of an onion
    skin extract compared with pure quercetin dihydrate in humans
  authors: Sarah Egert; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26482244/
  kind: Human randomized crossover PK study
  insight: Onion-skin matrix increased AUC about 4.8-fold and Cmax about 5.4-fold.
  limitation: N=12 and one-dose comparison.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: Improved Oral Absorption of Quercetin from Quercetin Phytosome®, a New Delivery
    System Based on Food Grade Lecithin
  authors: Antonella Riva; Massimo Ronchi; Giovanna Petrangolini; Stefania Bosisio;
    Pietro Allegrini
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30328058/
  kind: Human randomized crossover PK study
  insight: Lecithin phytosome produced markedly higher exposure than unformulated
    quercetin.
  limitation: N=12; all authors were affiliated with Indena SpA.
  funding: Not assessed in the returned report.
  sponsorshipStatus: industry-funded
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/30328058/
  conflictsOfInterest: Company affiliation disclosed; formal statement not assessed.
  conflictOfInterestStatus: declared
- id: S17
  title: 'A Pharmacokinetic Study of Different Quercetin Formulations in Healthy Participants:
    A Diet-Controlled, Crossover, Single- and Multiple-Dose Pilot Study'
  authors: Julie Solnier; et al.
  year: 2023
  url: https://onlinelibrary.wiley.com/doi/10.1155/2023/9727539
  kind: Human crossover PK pilot
  insight: Micellar LipoMicel increased AUC and Cmax and sustained concentrations
    over 72 hours.
  limitation: N=10, open-label, formulation-specific pilot.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S18
  title: The Influence of Single-Dose and Short-Term Administration of Quercetin on
    the Pharmacokinetics of Midazolam in Humans
  authors: University Medical Center Mainz clinical pharmacology group
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25988261/
  kind: Human randomized PK interaction study
  insight: Single-dose quercetin was null; repeated high-dose exposure tended to lower
    oral midazolam exposure.
  limitation: Small sample; intravenous substudy included three subjects.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S19
  title: Short-term effect of quercetin on the pharmacokinetics of fexofenadine, a
    substrate of P-glycoprotein, in healthy volunteers
  authors: Kyoung-Ah Kim; Pil-Whan Park; Ji-Young Park
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19221726/
  kind: Human randomized PK interaction study
  insight: 500 mg three times daily for seven days reduced fexofenadine oral clearance
    by 37%.
  limitation: N=12 healthy volunteers; probe-drug result.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S20
  title: Effect of quercetin on the plasma and intracellular concentrations of saquinavir
    in healthy adults
  authors: Robert DiCenzo; Valerie Frerichs; Panupong Larppanichpoonphol; et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16945047/
  kind: Human prospective PK interaction study
  insight: Plasma saquinavir PK was unchanged; intracellular findings were inconclusive.
  limitation: N=10 and high variability.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S21
  title: Effect of single-dose and short-term administration of quercetin on the pharmacokinetics
    of talinolol in humans – Implications for the evaluation of transporter-mediated
    flavonoid–drug interactions
  authors: German Research Foundation-supported human PK study group
  year: 2014
  url: https://www.sciencedirect.com/science/article/abs/pii/S0928098714000189
  kind: Human PK interaction study
  insight: Talinolol exposure tended to decrease rather than increase.
  limitation: Transporter attribution was uncertain and intersubject variability was
    high.
  funding: Grant LA563/7-1, German Research Foundation
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.sciencedirect.com/science/article/abs/pii/S0928098714000189
- id: S22
  title: Enhanced Anticoagulant Effect of Warfarin When Co-administered With Quercetin
  authors: Ruchit Patel; Allison Stine; Kimberly Zitko
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9608098/
  kind: Case report
  insight: INR rose to 7.5 after a quercetin-containing supplement and normalized
    after discontinuation.
  limitation: One case; supplement also contained vitamin C; no controlled rechallenge.
  funding: No financial support
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: No potential conflicts declared
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9608098/
- id: S23
  title: 'Interaction of quercetin and its metabolites with warfarin: displacement
    of warfarin from serum albumin and inhibition of CYP2C9 enzyme'
  authors: M. Poór; G. Boda; P. W. Needs; et al.
  year: 2017
  url: https://doi.org/10.1016/j.biopha.2017.01.092
  kind: In-vitro mechanistic study
  insight: Quercetin and metabolites bound albumin and inhibited CYP2C9 in experimental
    systems.
  limitation: Tube findings do not quantify clinical interaction risk.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: S24
  title: 'The Pharmacological Activity, Biochemical Properties, and Pharmacokinetics
    of the Major Natural Polyphenolic Flavonoid: Quercetin'
  authors: G. S. Batiha; A. M. Beshbishy; L. G. Wasef; et al.
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7143931/
  kind: Narrative review
  insight: Summarizes chemistry, metabolism, mechanisms, safety, and interaction hypotheses.
  limitation: Mixes preclinical, animal, and human evidence.
  funding: No external funding
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: No conflict declared
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC7143931/
- id: S25
  title: 'GRAS Notice GRN No. 341: Quercetin'
  authors: U.S. Food and Drug Administration
  year: 2010
  url: https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=341&set=GRASNotices
  kind: Regulatory food-ingredient notice
  insight: Lists specified food uses up to 500 mg per serving and an FDA no-questions
    letter.
  limitation: Food-use determination, not therapeutic efficacy approval.
  funding: Not applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable
  conflictOfInterestStatus: not-assessed
- id: S26
  title: FRS International, LLC - 606701 - 06/15/2020
  authors: U.S. Food and Drug Administration
  year: 2020
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/frs-international-llc-606701-06152020
  kind: Regulatory warning letter
  insight: COVID-19 treatment and prevention claims involving quercetin were treated
    as disease claims.
  limitation: Enforcement example, not a clinical efficacy review.
  funding: Not applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable
  conflictOfInterestStatus: not-assessed
- id: S27
  title: 'The effect of quercetin on the prevention or treatment of COVID-19 and other
    respiratory tract infections in humans: A rapid review'
  authors: University of California, Los Angeles and Griffith University evidence-review
    team
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32837891/
  kind: Rapid review
  insight: Human respiratory evidence was limited and insufficient to establish COVID-19
    treatment or prevention efficacy.
  limitation: Search and evidence base predated later trials.
  funding: Not assessed in the returned report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned report.
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s1
  title: 'Quercetin supplementation and upper respiratory tract infection: A randomized
    community clinical trial'
  authors: Serena A. Heinz; Dru A. Henson; Melanie D. Austin; Fuxia Jin; David C.
    Nieman
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20478383/"
  kind: Primary randomized controlled trial
  insight: N=1002; no overall URTI benefit; selected fit older subgroup improved.
  limitation: Subgroup and self-reported symptom findings.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s2
  title: Quercetin reduces illness but not immune perturbations after intensive exercise
  authors: David C. Nieman; Dru A. Henson; Sarah J. Gross; et al.
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17805089/"
  kind: Primary randomized controlled trial
  insight: URTI incidence fell after intensive cycling without changes in measured
    immune markers.
  limitation: Small trained-male exercise cohort.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s3
  title: Post-160-km race illness rates and decreases in granulocyte respiratory burst
    and salivary IgA output are not countered by quercetin ingestion
  authors: David C. Nieman; et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18213545/"
  kind: Primary randomized controlled trial
  insight: No postrace illness or immune benefit in ultramarathoners.
  limitation: Only 39 of 63 randomized participants completed the race.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s4
  title: Quercetin's effect on cycling efficiency and substrate utilization
  authors: Charles L. Dumke; David C. Nieman; Alan C. Utter; et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/20029506/"
  kind: Primary randomized controlled trial
  insight: No effect on power, efficiency, substrate use, or perceived effort.
  limitation: Small, well-trained cyclist sample.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s5
  title: Long-term quercetin supplementation reduces lipid peroxidation but does not
    improve performance in endurance runners
  authors: Shane D. Scholten; Igor N. Sergeev
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24379709/"
  kind: Primary randomized controlled trial
  insight: MDA decreased, but performance and aerobic outcomes did not.
  limitation: Young male runners; six-week duration.
  funding: P20 RR016479/RR/NCRR NIH HHS
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s6
  title: Quercetin reduces blood pressure in hypertensive subjects
  authors: R. L. Edwards; T. Lyon; S. E. Litwin; A. Rabovsky; J. D. Symons; T. Jalili
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17951477/"
  kind: Primary randomized crossover trial
  insight: 730 mg/day lowered stage-1-hypertensive BP but not prehypertensive BP.
  limitation: N=41 and 28-day intervention.
  funding: PHS HHS grant 085226
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s7
  title: 'Quercetin reduces systolic blood pressure and plasma oxidised low-density
    lipoprotein concentrations in overweight subjects with a high-cardiovascular disease
    risk phenotype: a double-blinded, placebo-controlled cross-over study'
  authors: Sarah Egert; Christine Boesch-Saadatmandi; Siegfried Wolffram; et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19402938/"
  kind: Primary randomized crossover trial
  insight: 150 mg/day lowered SBP by about 2.6 mmHg in 93 overweight adults.
  limitation: Short crossover study; clinical events not assessed.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s8
  title: 'Effects of a quercetin-rich onion skin extract on 24 h ambulatory blood
    pressure and endothelial function in overweight-to-obese patients with (pre-)hypertension:
    a randomised double-blinded placebo-controlled cross-over trial'
  authors: Verena Brüll; Constanze Burak; Birgit Stoffel-Wagner; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26328470/"
  kind: Primary randomized crossover trial
  insight: No total-group ABP effect; smaller hypertensive-subgroup SBP effect.
  limitation: Extract formulation and subgroup analysis.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s9
  title: 'Acute intake of quercetin from onion skin extract does not influence postprandial
    blood pressure and endothelial function in overweight-to-obese adults with hypertension:
    a randomized, double-blind, placebo-controlled, crossover trial'
  authors: Verena Brüll; Constanze Burak; Birgit Stoffel-Wagner; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26924303/"
  kind: Primary randomized crossover trial
  insight: A single 54 mg dose did not modify postprandial vascular or metabolic responses.
  limitation: N=22 and acute exposure.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s10
  title: 'The effects of Quercetin supplementation on cardiometabolic outcomes: An
    umbrella review of meta-analyses of randomized controlled trials'
  authors: Seyyed Mostafa Arabi; et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37654199/"
  kind: Umbrella review
  insight: Small SBP and insulin signals; no consistent DBP, lipid, glucose, inflammation,
    or anthropometric effects.
  limitation: High heterogeneity; certainty very low to moderate.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s11
  title: 'Effect of quercetin supplementation on plasma lipid profiles, blood pressure,
    and glucose levels: a systematic review and meta-analysis'
  authors: Haohai Huang; Dan Liao; Yong Dong; Rong Pu
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/31940027/"
  kind: Systematic review and meta-analysis
  insight: BP decreased in 17 trials; pooled glucose and lipid effects were generally
    null.
  limitation: Subgroup effects depended on design and duration.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s12
  title: 'Effects of Quercetin on Adiponectin-Mediated Insulin Sensitivity in Polycystic
    Ovary Syndrome: A Randomized Placebo-Controlled Double-Blind Clinical Trial'
  authors: N. Rezvan; A. Moini; L. Janani; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27824398/"
  kind: Primary randomized controlled trial
  insight: 1 g/day for 12 weeks improved HOMA-IR, adiponectin, testosterone, and LH
    in 84 women with PCOS.
  limitation: Single disease-specific cohort.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s13
  title: 'Benefits of Quercetin on Glycated Hemoglobin, Blood Pressure, PiKo-6 Readings,
    Night-Time Sleep, Anxiety, and Quality of Life in Patients with Type 2 Diabetes
    Mellitus: A Randomized Controlled Trial'
  authors: Aikaterini E. Mantadaki; et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38930033/"
  kind: Primary randomized controlled trial
  insight: Adjunctive 500 mg/day was associated with HbA1c and SBP improvements over
    the study protocol.
  limitation: 88 completers, single trial, and standard-care control.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s14
  title: Pharmacokinetics and Bioavailability of Quercetin Glycosides in Humans
  authors: E. U. Graefe; J. Wittig; S. Mueller; et al.
  year: 2001
  url: https://accp1.onlinelibrary.wiley.com/doi/abs/10.1177/00912700122010366"
  kind: Human randomized four-way crossover PK study
  insight: Sugar moiety strongly influenced Cmax, Tmax, and apparent bioavailability.
  limitation: N=12 and single-dose design.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s15
  title: Higher plasma quercetin levels following oral administration of an onion
    skin extract compared with pure quercetin dihydrate in humans
  authors: Sarah Egert; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26482244/"
  kind: Human randomized crossover PK study
  insight: Onion-skin matrix increased AUC about 4.8-fold and Cmax about 5.4-fold.
  limitation: N=12 and one-dose comparison.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s16
  title: Improved Oral Absorption of Quercetin from Quercetin Phytosome®, a New Delivery
    System Based on Food Grade Lecithin
  authors: Antonella Riva; Massimo Ronchi; Giovanna Petrangolini; Stefania Bosisio;
    Pietro Allegrini
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30328058/"
  kind: Human randomized crossover PK study
  insight: Lecithin phytosome produced markedly higher exposure than unformulated
    quercetin.
  limitation: N=12; all authors were affiliated with Indena SpA.
  funding: No specific grant stated
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Company affiliation disclosed; formal statement not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s17
  title: 'A Pharmacokinetic Study of Different Quercetin Formulations in Healthy Participants:
    A Diet-Controlled, Crossover, Single- and Multiple-Dose Pilot Study'
  authors: Julie Solnier; et al.
  year: 2023
  url: https://onlinelibrary.wiley.com/doi/10.1155/2023/9727539"
  kind: Human crossover PK pilot
  insight: Micellar LipoMicel increased AUC and Cmax and sustained concentrations
    over 72 hours.
  limitation: N=10, open-label, formulation-specific pilot.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s18
  title: The Influence of Single-Dose and Short-Term Administration of Quercetin on
    the Pharmacokinetics of Midazolam in Humans
  authors: University Medical Center Mainz clinical pharmacology group
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25988261/"
  kind: Human randomized PK interaction study
  insight: Single-dose quercetin was null; repeated high-dose exposure tended to lower
    oral midazolam exposure.
  limitation: Small sample; intravenous substudy included three subjects.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s19
  title: Short-term effect of quercetin on the pharmacokinetics of fexofenadine, a
    substrate of P-glycoprotein, in healthy volunteers
  authors: Kyoung-Ah Kim; Pil-Whan Park; Ji-Young Park
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19221726/"
  kind: Human randomized PK interaction study
  insight: 500 mg three times daily for seven days reduced fexofenadine oral clearance
    by 37%.
  limitation: N=12 healthy volunteers; probe-drug result.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s20
  title: Effect of quercetin on the plasma and intracellular concentrations of saquinavir
    in healthy adults
  authors: Robert DiCenzo; Valerie Frerichs; Panupong Larppanichpoonphol; et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16945047/"
  kind: Human prospective PK interaction study
  insight: Plasma saquinavir PK was unchanged; intracellular findings were inconclusive.
  limitation: N=10 and high variability.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s21
  title: Effect of single-dose and short-term administration of quercetin on the pharmacokinetics
    of talinolol in humans – Implications for the evaluation of transporter-mediated
    flavonoid–drug interactions
  authors: German Research Foundation-supported human PK study group
  year: 2014
  url: https://www.sciencedirect.com/science/article/abs/pii/S0928098714000189"
  kind: Human PK interaction study
  insight: Talinolol exposure tended to decrease rather than increase.
  limitation: Transporter attribution was uncertain and intersubject variability was
    high.
  funding: Grant LA563/7-1, German Research Foundation
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s22
  title: Enhanced Anticoagulant Effect of Warfarin When Co-administered With Quercetin
  authors: Ruchit Patel; Allison Stine; Kimberly Zitko
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9608098/"
  kind: Case report
  insight: INR rose to 7.5 after a quercetin-containing supplement and normalized
    after discontinuation.
  limitation: One case; supplement also contained vitamin C; no controlled rechallenge.
  funding: No financial support
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No potential conflicts declared
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s23
  title: 'Interaction of quercetin and its metabolites with warfarin: displacement
    of warfarin from serum albumin and inhibition of CYP2C9 enzyme'
  authors: M. Poór; G. Boda; P. W. Needs; et al.
  year: 2017
  url: https://doi.org/10.1016/j.biopha.2017.01.092"
  kind: In-vitro mechanistic study
  insight: Quercetin and metabolites bound albumin and inhibited CYP2C9 in experimental
    systems.
  limitation: Tube findings do not quantify clinical interaction risk.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s24
  title: 'The Pharmacological Activity, Biochemical Properties, and Pharmacokinetics
    of the Major Natural Polyphenolic Flavonoid: Quercetin'
  authors: G. S. Batiha; A. M. Beshbishy; L. G. Wasef; et al.
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7143931/"
  kind: Narrative review
  insight: Summarizes chemistry, metabolism, mechanisms, safety, and interaction hypotheses.
  limitation: Mixes preclinical, animal, and human evidence.
  funding: No external funding
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No conflict declared
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s26
  title: FRS International, LLC - 606701 - 06/15/2020
  authors: U.S. Food and Drug Administration
  year: 2020
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/frs-international-llc-606701-06152020"
  kind: Regulatory warning letter
  insight: COVID-19 treatment and prevention claims involving quercetin were treated
    as disease claims.
  limitation: Enforcement example, not a clinical efficacy review.
  funding: not-applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-applicable
  conflictOfInterestStatus: not-assessed
- id: dr-quercetin-s27
  title: 'The effect of quercetin on the prevention or treatment of COVID-19 and other
    respiratory tract infections in humans: A rapid review'
  authors: University of California, Los Angeles and Griffith University evidence-review
    team
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32837891/"
  kind: Rapid review
  insight: Human respiratory evidence was limited and insufficient to establish COVID-19
    treatment or prevention efficacy.
  limitation: Search and evidence base predated later trials.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Food-ingredient status
  status: FDA GRN 341 lists quercetin as a food ingredient for specified categories at up to 500 mg per serving; the notice is not a drug approval.
  sourceUrl: https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=341&set=GRASNotices
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Disease-claim enforcement
  status: FDA enforcement materials treated web claims that quercetin could prevent or treat COVID-19 as disease claims.
  sourceUrl: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/frs-international-llc-606701-06152020
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Evidence boundary
  status: The cited regulatory sources do not establish quercetin as an approved treatment for respiratory infection, cancer, hypertension, diabetes, or aging.
  sourceUrl: https://pubmed.ncbi.nlm.nih.gov/32837891/
  asOf: 2026-10-10
- jurisdiction: Outside the United States
  activity: Jurisdictional scope
  status: Labeling and legal status outside the United States were not assessed in this record.
  sourceUrl: https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=341&set=GRASNotices
  asOf: 2026-10-10
```
