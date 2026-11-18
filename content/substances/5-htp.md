---
slug: 5-htp
name: 5-HTP
subtitle: L-5-hydroxytryptophan, a serotonin precursor
aliases:
  - L-5-Hydroxytryptophan
  - 5-Hydroxy-L-tryptophan
  - Oxitriptan
formula: C11H12N2O3
molecularWeight: 220.22 g/mol
pubchemCid: 439280
smiles: C1=CC2=C(C=C1O)C(=CN2)C[C@@H](C(=O)O)N
category: Amino acid and derivative
tags:
  - sleep
  - serotonin
accent: "#a9b993"
reviewedAt: "2026-11-18"
editorialStatus: sourced-draft
halfLife:
  label: 2.2–3.0 hours
  low: 2.2
  high: 3
  context: Small single-dose oral series, including observations with or without decarboxylase inhibitor pretreatment.
  sourceId: pubmed-309271
  observationId: magnussen-single-oral
kinetics:
  onset: Not established
  peak: Double peaks observed after oral administration with carbidopa in most volunteers
  duration: Not established
  bioavailability: 48% ± 15% (mean ± SD) after oral dosing with carbidopa in five volunteers
  metabolism: Aromatic L-amino acid decarboxylase converts 5-HTP to serotonin. Carbidopa alters peripheral metabolism.
  sourceId: pubmed-6187038
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
  - externalWikiLinks
x-order: 1115
---

## Summary

5-HTP is an amino acid intermediate in serotonin synthesis. Small trials report signals for some sleep and mood outcomes. Effects vary by population, and combining 5-HTP with serotonergic medicines raises safety concerns.

## Description

This article covers L-5-hydroxytryptophan (oxitriptan), the naturally occurring stereoisomer ([PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/439280)). In a small trial of older adults, 5-HTP raised serum serotonin and showed a sleep signal in participants with poor sleep at baseline. The same trial found no clear between-group improvement in global cognition or mood scores. [Sleep report](https://pubmed.ncbi.nlm.nih.gov/38309227/) · [Cognition and mood report](https://pmc.ncbi.nlm.nih.gov/articles/PMC12430700/)

## Evidence note

Small samples, differing formulations and outcome measures, and limited follow-up constrain the evidence. An observed effect in Parkinson’s disease or a pediatric parasomnia cannot be applied directly to primary depression or adult insomnia. Carbidopa materially alters 5-HTP exposure. [Meloni et al.](https://pubmed.ncbi.nlm.nih.gov/32067288/) · [Bruni et al.](https://pubmed.ncbi.nlm.nih.gov/15146330/) · [Westenberg et al.](https://pubmed.ncbi.nlm.nih.gov/6187038/)

## Doses

```yaml
- label: Singapore older-adult trial
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: L-5-HTP
  route: Oral
  formulation: 5-HTP capsule
  frequency: Once daily
  duration: 12 weeks
  population: 30 older adults in Singapore (15 per arm)
  purpose: Sleep, cognition and mood
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-38309227
- label: Parkinson’s disease crossover trial
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: L-5-HTP
  route: Oral
  formulation: L-5-HTP
  frequency: Once daily
  duration: 4 weeks per intervention period
  population: 25 participants with Parkinson’s disease
  purpose: Depressive symptoms and apathy
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-32067288
- label: Open pediatric sleep-terror trial
  amount: 2 mg/kg/day
  quantity: 2
  quantityMax: null
  unit: mg/kg/day
  ingredient: L-5-HTP
  route: Oral
  formulation: L-5-HTP
  frequency: Once daily at bedtime
  duration: 20 consecutive days
  population: 45 children aged 3.2–10.6 years with sleep terrors
  purpose: Sleep-terror frequency
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-15146330
- label: Obesity and eating behavior trial
  amount: 900 mg/day
  quantity: 900
  quantityMax: null
  unit: mg/day
  ingredient: L-5-HTP
  route: Oral
  formulation: L-5-HTP
  frequency: Daily total
  duration: Two consecutive six-week periods
  population: 20 adults with obesity
  purpose: Weight, food intake and satiety
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-1384305
- label: Iowa Gambling Task experiment
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: L-5-HTP
  route: Oral
  formulation: Two 50 mg capsules
  frequency: Single dose
  duration: Single administration
  population: 46 undergraduates
  purpose: Decision-making and mood
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-20737522
- label: Tower of London experiment
  amount: 150 mg
  quantity: 150
  quantityMax: null
  unit: mg
  ingredient: L-5-HTP
  route: Oral
  formulation: Three 50 mg capsules
  frequency: Single dose
  duration: Single administration
  population: 68 undergraduates
  purpose: Planning time and accuracy
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-23609610
- label: Salivary cortisol challenge
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: L-5-HTP
  route: Oral
  formulation: L-5-HTP
  frequency: Single dose
  duration: Single administration
  population: 24 panic disorder patients and 24 healthy volunteers
  purpose: Neuroendocrine response
  sourceCategory: research
  note: Exposure used in the cited study.
  sourceId: pubmed-12073163
```

## Pharmacokinetics

```yaml
- id: magnussen-single-oral
  route: Oral
  formulation: Single-dose 5-HTP with or without decarboxylase inhibitor pretreatment
  population: Five subjects
  low: 2.2
  high: 3
  context: Reported range across the single-dose oral observations. The abstract does not report separate ranges by pretreatment.
  sourceId: pubmed-309271
  analyte: Plasma L-5-hydroxytryptophan
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  unit: hours
  modelEligible: false
- id: westenberg-iv-carbidopa
  route: Intravenous
  formulation: 5-HTP infusion after carbidopa pretreatment
  population: Five healthy volunteers in the oral/IV PK experiment
  low: 2.2
  high: 7.4
  context: Reported biological half-life after a 20-minute infusion. Plasma disposition was biexponential.
  sourceId: pubmed-6187038
  analyte: Plasma L-5-hydroxytryptophan
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  unit: hours
  modelEligible: false
```

## Modifiers

```yaml
- label: Carbidopa or benserazide pretreatment
  effect: Higher plasma 5-HTP exposure
  detail: Plasma concentrations rose about tenfold with decarboxylase inhibitor pretreatment in a five-subject study. One subject on long-term carbidopa had a measured half-life of 5.5 hours. Exposure changes and clearance changes are distinct.
  sourceId: pubmed-309271
  observationId: magnussen-single-oral
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: 5-htp-older-psqi
  conceptId: sleep
  name: Global Pittsburgh Sleep Quality Index score
  direction: Decreased
  evidence: Human research
  description: The 12-week sleep report found a lower self-reported global sleep score in the 5-HTP subgroup with poor baseline sleep. The no-supplement design and small subgroup limit inference.
  sourceId: pubmed-38309227
  population: 30 older adults in Singapore (15 per arm); subgroup with baseline PSQI >5
  exposure: 100 mg oral 5-HTP daily for 12 weeks
  instrument: Pittsburgh Sleep Quality Index
  magnitude: null
  reportType: measured-assessment
  study:
    id: NCT04078724
    design: Randomized parallel trial with a no-supplement control
    sampleSize: 30
    comparator: No supplement
    route: Oral
    formulation: 5-HTP capsule
    durationDays: 84
    assessmentTime: Week 12
- id: 5-htp-older-moca
  conceptId: cognitive-performance
  name: Global cognitive test score
  direction: Variable
  evidence: Human research
  description: Global MoCA scores improved over time, with no clear difference in the trend between study arms.
  sourceId: lee-2025-nct04078724
  population: 30 older adults in Singapore (15 per arm)
  exposure: 100 mg oral 5-HTP daily for 12 weeks
  instrument: Montreal Cognitive Assessment
  magnitude: Group × time p = 0.9343. Week 12 means 27.6 (5-HTP) and 27.3 (control), in points.
  reportType: measured-assessment
  study:
    id: NCT04078724
    design: Randomized parallel trial with a no-supplement control
    sampleSize: 30
    comparator: No supplement
    route: Oral
    formulation: 5-HTP capsule
    durationDays: 84
    assessmentTime: Weeks 0, 4, 8 and 12
  result:
    measure: mean
    estimate: 27.6
    unit: points
    instrument: Montreal Cognitive Assessment
    comparator: Mean for the 5-HTP arm; no-supplement mean was 27.3
    assessmentTime: Week 12
    population: 30 older adults in Singapore (15 per arm)
- id: 5-htp-older-gds
  conceptId: depression-severity
  name: Depressive symptom score in older adults
  direction: Variable
  evidence: Human research
  description: A within-group improvement at week 8 did not translate into a clear treatment-by-time difference.
  sourceId: lee-2025-nct04078724
  population: 30 older adults in Singapore (15 per arm)
  exposure: 100 mg oral 5-HTP daily for 12 weeks
  instrument: Geriatric Depression Scale
  magnitude: Group × time p = 0.3851.
  reportType: measured-assessment
  study:
    id: NCT04078724
    design: Randomized parallel trial with a no-supplement control
    sampleSize: 30
    comparator: No supplement
    route: Oral
    formulation: 5-HTP capsule
    durationDays: 84
    assessmentTime: Weeks 0, 4, 8 and 12
- id: 5-htp-older-serum-serotonin
  conceptId: serum-serotonin
  name: Serum serotonin concentration
  direction: Increased
  evidence: Human research
  description: Serum serotonin increased in the intervention arm. This peripheral biomarker does not establish a change in serotonin in the brain.
  sourceId: lee-2025-nct04078724
  population: 30 older adults in Singapore (15 per arm)
  exposure: 100 mg oral 5-HTP daily for 12 weeks
  instrument: Serum serotonin assay
  magnitude: Mean change +45.8 ng/mL with 5-HTP versus −20.2 ng/mL without supplement. Group × time p = 0.0197.
  reportType: measured-assessment
  study:
    id: NCT04078724
    design: Randomized parallel trial with a no-supplement control
    sampleSize: 30
    comparator: No supplement
    route: Oral
    formulation: 5-HTP capsule
    durationDays: 84
    assessmentTime: Week 12 versus baseline
  result:
    measure: mean
    estimate: 45.8
    unit: ng/mL
    instrument: Serum serotonin assay
    comparator: Mean change in 5-HTP arm; no-supplement change −20.2 ng/mL
    assessmentTime: Week 12 versus baseline
    population: 30 older adults in Singapore (15 per arm)
- id: 5-htp-parkinson-hdrs
  conceptId: depression-severity
  name: Depressive symptoms in Parkinson’s disease
  direction: Decreased
  evidence: Human research
  description: The investigator-rated Hamilton scale favored 5-HTP over placebo in a small crossover trial.
  sourceId: pubmed-32067288
  population: 25 participants with Parkinson’s disease
  exposure: 50 mg 5-HTP daily for four weeks
  instrument: Hamilton Depression Rating Scale
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-32067288
    design: Single-center double-blind randomized crossover trial
    sampleSize: 25
    comparator: Placebo
    route: Oral
    durationDays: 28
    assessmentTime: End of each 4-week treatment period
- id: 5-htp-parkinson-apathy
  conceptId: apathy
  name: Apathy in Parkinson’s disease
  direction: Variable
  evidence: Human research
  description: No treatment effect on apathy was detected in the crossover trial.
  sourceId: pubmed-32067288
  population: 25 participants with Parkinson’s disease
  exposure: 50 mg 5-HTP daily for four weeks
  instrument: Apathy Scale
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-32067288
    design: Single-center double-blind randomized crossover trial
    sampleSize: 25
    comparator: Placebo
    route: Oral
    durationDays: 28
    assessmentTime: End of each 4-week treatment period
- id: 5-htp-pediatric-sleep-terrors
  conceptId: sleep-terror-episodes
  name: Persistent sleep terrors at follow-up
  direction: Decreased
  evidence: Human research
  description: Fewer children continued to have sleep terrors after 5-HTP in the open comparison. Participants and assessors could have been influenced by treatment assignment.
  sourceId: pubmed-15146330
  population: 45 children aged 3.2–10.6 years with sleep terrors
  exposure: 2 mg/kg/day at bedtime for 20 days
  instrument: Structured follow-up interview
  magnitude: 5/31 treated children (16.1%) and 10/14 untreated children (71.4%) still had sleep terrors at six months.
  reportType: measured-assessment
  study:
    id: pubmed-15146330
    design: Open trial with randomized selection for treatment
    sampleSize: 45
    comparator: No drug treatment
    route: Oral
    durationDays: 20
    assessmentTime: Six-month follow-up
- id: 5-htp-adult-obesity-weight
  conceptId: body-weight
  name: Body weight in adults with obesity
  direction: Decreased
  evidence: Human research
  description: Weight declined in the 5-HTP arm during both six-week periods. The second period included a calorie-restricted diet recommendation.
  sourceId: pubmed-1384305
  population: 20 adults with obesity
  exposure: 900 mg/day for two consecutive six-week periods
  instrument: Body weight
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-1384305
    design: Double-blind randomized trial
    sampleSize: 20
    comparator: Placebo
    route: Oral
    durationDays: 84
    assessmentTime: End of each six-week period
- id: 5-htp-salivary-cortisol
  conceptId: cortisol-response
  name: Acute salivary cortisol response
  direction: Increased
  evidence: Human research
  description: Cortisol rose after the challenge in both the panic disorder and healthy groups. This is a laboratory hormone response.
  sourceId: pubmed-12073163
  population: 24 panic disorder patients and 24 healthy volunteers
  exposure: Single oral 200 mg dose
  instrument: Salivary cortisol
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-12073163
    design: Placebo-controlled acute challenge
    sampleSize: 48
    comparator: Placebo
    route: Oral
    assessmentTime: After challenge
- id: 5-htp-iowa-gambling-task
  conceptId: cognitive-performance
  name: Decision-making under ambiguity
  direction: Decreased
  evidence: Human research
  description: Performance was poorer on the first 20 trials in the 5-HTP group. Later trials and mood measures showed no significant group difference.
  sourceId: pubmed-20737522
  population: 46 undergraduates
  exposure: Single oral 100 mg dose
  instrument: Iowa Gambling Task
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-20737522
    design: Placebo-controlled acute challenge
    sampleSize: 46
    comparator: Placebo
    route: Oral
    assessmentTime: First 20 trials after absorption
- id: 5-htp-tower-of-london
  conceptId: cognitive-performance
  name: Planning-task completion time
  direction: Increased
  evidence: Human research
  description: Average time per trial increased with 5-HTP. Accuracy was unchanged and the task did not directly measure dopamine release.
  sourceId: pubmed-23609610
  population: 68 undergraduates
  exposure: Single oral 150 mg dose
  instrument: Tower of London
  magnitude: null
  reportType: measured-assessment
  study:
    id: pubmed-23609610
    design: Placebo-controlled acute challenge
    sampleSize: 68
    comparator: Placebo
    route: Oral
    assessmentTime: Ten trials after absorption
```

## Mechanisms

```yaml
- title: Serotonin biosynthesis
  description: Aromatic L-amino acid decarboxylase converts L-5-HTP into serotonin. Giving 5-HTP bypasses the upstream hydroxylation of tryptophan.
  sourceId: lee-2025-nct04078724
  conceptId: serotonin
- title: Peripheral decarboxylase inhibition
  description: Carbidopa reduces peripheral conversion and raises circulating unchanged 5-HTP. In the oral/IV PK study, plasma exposure to the serotonin metabolite 5-HIAA fell with carbidopa pretreatment.
  sourceId: pubmed-6187038
```

## Cautions

```yaml
- title: Nausea and vomiting
  description: A crossover challenge in 15 healthy men reported more nausea, vomiting and dropout at higher 5-HTP doses given with carbidopa. The trial does not estimate adverse-event rates for 5-HTP alone.
  sourceId: pubmed-18308795
- title: Serotonin toxicity case report
  description: A case report attributed serotonin toxicity with severe rhabdomyolysis to co-exposure to sertraline and a 5-HTP supplement. Multiple co-exposures and strenuous exercise complicate attribution.
  sourceId: pubmed-28839121
- title: Eosinophilia–myalgia-like illness and product impurities
  description: A family cluster included one case of eosinophilia–myalgia syndrome and two cases of eosinophilia. Investigators found an impurity in the shared product. This report cannot estimate incidence or establish that pure L-5-HTP caused the illness.
  sourceId: pubmed-7699627
```

## Claims

```yaml
- id: 5-htp-older-serotonin
  assertion: Daily 5-HTP increased serum serotonin in a small older-adult trial.
  relation: associated-with
  participants:
    - entityId: substance:5-htp
      role: Intervention
    - entityId: tag:serum-serotonin
      role: Peripheral biomarker
  context: NCT04078724, 12 weeks against no supplementation.
  sourceIds:
    - lee-2025-nct04078724
    - pubmed-38309227
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Both publications report the same trial. Serum levels cannot establish a central serotonergic effect.
- id: 5-htp-parkinson-depressive-symptoms
  assertion: 5-HTP reduced clinician-rated depressive symptoms in a small Parkinson’s disease crossover trial.
  relation: associated-with
  participants:
    - entityId: substance:5-htp
      role: Intervention
    - entityId: tag:depression-severity
      role: Rating-scale endpoint
  context: Four-week treatment compared with placebo.
  sourceIds:
    - pubmed-32067288
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The study was small and did not test primary major depression.
```

## Interactions

```yaml
- id: 5-htp-antidepressants
  name: Antidepressants
  otherSlug: null
  summary: Health Canada’s 5-HTP natural health product monograph lists antidepressant use as a contraindication. A published case involved sertraline and a 5-HTP supplement.
  context: Canadian natural health product labelling and a clinically confounded single case.
  sourceId: health-canada-5-htp-monograph
- id: 5-htp-dextromethorphan
  name: Dextromethorphan
  otherSlug: dextromethorphan
  summary: Health Canada lists dextromethorphan-containing cough medicines among products requiring clinical consultation before use with 5-HTP.
  context: Canadian monograph precaution for combined serotonergic exposure.
  sourceId: health-canada-5-htp-monograph
- id: 5-htp-carbidopa
  name: Carbidopa and benserazide
  otherSlug: null
  summary: Peripheral decarboxylase inhibitors increased plasma 5-HTP concentrations in a small human PK study.
  mechanism: Reduced peripheral decarboxylation of 5-HTP.
  sourceId: pubmed-309271
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: optihealth-substance-019fe218-4402-73f8-9046-c4ccae708f4f
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-4402-73f8-9046-c4ccae708f4f
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-23609610
  title: "Effects of oral 5-hydroxytryptophan on a standardized planning task: insight into possible dopamine/serotonin interactions in the forebrain."
  authors: Mathew H Gendle, Erica L Young, Alexandra C Romano
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23609610/
  kind: PubMed publication
  insight: 150 mg prolonged Tower of London trial completion time. Accuracy was unchanged.
  limitation: Acute task in undergraduates. The study did not directly measure dopamine.
  pmid: "23609610"
  doi: 10.1002/hup.2314
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-20737522
  title: "Oral administration of 5-hydroxytryptophan (5-HTP) impairs decision making under ambiguity but not under risk: evidence from the Iowa Gambling Task."
  authors: Mathew H Gendle, Abbe C Golding
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20737522/
  kind: PubMed publication
  insight: 100 mg acutely impaired early Iowa Gambling Task performance, with no group difference in later trials or mood.
  limitation: Acute laboratory task. No direct neurochemical measure.
  pmid: "20737522"
  doi: 10.1002/hup.1139
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-12073163
  title: L-5-hydroxytryptophan induced increase in salivary cortisol in panic disorder patients and healthy volunteers.
  authors: Koen Schruers, Rob van Diest, Nancy Nicolson, Eric Griez
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12073163/
  kind: PubMed publication
  insight: A single 200 mg challenge increased salivary cortisol in participants with panic disorder and healthy controls.
  limitation: Biomarker challenge rather than a treatment trial.
  pmid: "12073163"
  doi: 10.1007/s00213-002-1072-8
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-15146330
  title: L -5-Hydroxytryptophan treatment of sleep terrors in children.
  authors: Oliviero Bruni, Raffaele Ferri, Silvia Miano, Elisabetta Verrillo
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15146330/
  kind: PubMed publication
  insight: Fewer treated children had persistent sleep terrors at six months.
  limitation: Open no-treatment comparison. Small and specific to pediatric sleep terrors.
  pmid: "15146330"
  doi: 10.1007/s00431-004-1444-7
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubchem-439280
  title: Oxitriptan
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/439280
  kind: Chemical identity record
  insight: Structure and identifiers of L-5-hydroxytryptophan.
  limitation: Chemical identity only.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-38309227
  title: "The impact of 5-hydroxytryptophan supplementation on sleep quality and gut microbiota composition in older adults: A randomized controlled trial"
  authors: Clarinda Nataria Sutanto, Xuejuan Xia, Chin Wee Heng, Yue Shuian Tan, Delia Pei Shan Lee, Johnson Fam, Jung Eun Kim
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38309227/
  kind: Randomized parallel trial
  insight: A sleep-quality signal was reported in participants with poor sleep at baseline.
  limitation: Small subgroup and no placebo. The abstract mixes the global sleep-score label with minutes, so the numeric value was not assigned to PSQI.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "38309227"
  doi: 10.1016/j.clnu.2024.01.010
- id: lee-2025-nct04078724
  title: "The Impact of 5-Hydroxytryptophan Supplementation on Cognitive Function and Mood in Singapore Older Adults: A Randomized Controlled Trial"
  authors: Sumin Lee, Clarinda Nataria Sutanto, Xuejuan Xia, Jung Eun Kim
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12430700/
  kind: Secondary outcomes from a randomized parallel trial
  insight: Serum serotonin increased. MoCA and GDS showed no significant group-by-time interactions.
  limitation: Small trial with no placebo. Uses the same NCT04078724 cohort as the sleep report.
  sponsorshipStatus: non-industry-funded
  conflictOfInterestStatus: none-declared
  funding: National University of Singapore iHealthtech Microbiome in Health, Disease, and Ageing (R-160-000-A89-133 and R-160-000-A89-733).
  conflictsOfInterest: The authors declared no conflicts of interest.
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12430700/
- id: pubmed-32067288
  title: "Efficacy and safety of 5-hydroxytryptophan on depression and apathy in Parkinson's disease: a preliminary finding"
  authors: M Meloni, M Puligheddu, M Carta, A Cannas, M Figorilli, G Defazio
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32067288/
  kind: Randomized double-blind crossover trial
  insight: Clinician-rated depression scores improved versus placebo. Apathy did not.
  limitation: Small Parkinson’s disease trial with short treatment periods.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "32067288"
  doi: 10.1111/ene.14179
- id: pubmed-1384305
  title: Eating behavior and adherence to dietary prescriptions in obese adult subjects treated with 5-hydroxytryptophan.
  authors: C Cangiano, F Ceci, A Cascino, M Del Ben, A Laviano, M Muscaritoli, F Antonucci, F Rossi-Fanelli
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1384305/
  kind: Randomized double-blind trial
  insight: Weight fell in the 5-HTP arm in both periods. Reduced carbohydrate intake and early satiety were reported.
  limitation: Small study, with a diet intervention in the second six-week period.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "1384305"
  doi: 10.1093/ajcn/56.5.863
- id: pubmed-309271
  title: The effects of aromatic amino acid decarboxylase inhibitors on plasma concentrations of 5-hydroxytryptophan in man.
  authors: I Magnussen, F Engbaek
  year: 1978
  url: https://pubmed.ncbi.nlm.nih.gov/309271/
  kind: Human pharmacokinetic study
  insight: Single-dose oral half-lives ranged from 2.2 to 3.0 hours and decarboxylase inhibitor pretreatment increased plasma concentrations.
  limitation: Five subjects; the abstract does not separate half-life estimates by pretreatment.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "309271"
- id: pubmed-6187038
  title: Kinetics of l-5-hydroxytryptophan in healthy subjects.
  authors: H G Westenberg, T W Gerritsen, B A Meijer, H M van Praag
  year: 1982
  url: https://pubmed.ncbi.nlm.nih.gov/6187038/
  kind: Human pharmacokinetic study
  insight: Carbidopa-conditioned oral and IV experiments characterized plasma exposure and metabolic disposition.
  limitation: Five volunteers contributed to the IV and oral PK comparison. Carbidopa changes exposure.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "6187038"
  doi: 10.1016/0165-1781(82)90074-9
- id: pubmed-18308795
  title: Pharmacology of rising oral doses of 5-hydroxytryptophan with carbidopa.
  authors: L J C A Smarius, G E Jacobs, D H M Hoeberechts-Lefrandt, M L de Kam, J P van der Post, R de Rijk, J van Pelt, R C Schoemaker, F G Zitman, J M A van Gerven, H J Gijsman
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18308795/
  kind: Double-blind crossover challenge study
  insight: Nausea and vomiting increased with dose during combined 5-HTP and carbidopa exposure.
  limitation: Acute challenge in 15 healthy men; findings are regimen-specific.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "18308795"
  doi: 10.1177/0269881107082025
- id: pubmed-7699627
  title: An eosinophilia-myalgia syndrome related disorder associated with exposure to L-5-hydroxytryptophan.
  authors: D Michelson, S W Page, R Casey, M W Trucksess, L A Love, S Milstien, C Wilson, S G Massaquoi, L J Crofford, M Hallett
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/7699627/
  kind: Case series and impurity analysis
  insight: The product used by the affected family contained an impurity absent from comparator samples.
  limitation: Small cluster. Causation and incidence remain uncertain.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "7699627"
- id: pubmed-28839121
  title: Dietary Supplement-Drug Interaction-Induced Serotonin Syndrome Progressing to Acute Compartment Syndrome
  authors: Yesha A Patel, Nino Marzella
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28839121/
  kind: Case report
  insight: Suspected serotonin toxicity with rhabdomyolysis followed co-exposure to sertraline and a 5-HTP supplement.
  limitation: Other drugs, supplements and strenuous exercise complicate causal attribution.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "28839121"
- id: health-canada-5-htp-monograph
  title: 5-HTP
  authors: Health Canada
  year: 2024
  url: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/atReq?atid=5htp&lang=eng
  kind: Natural health product monograph
  insight: The monograph specifies precautions and contraindications for Canadian licence applications and product labelling.
  limitation: Scope is oral natural health products in Canada.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: health-canada-5-htp-foods
  title: Decision on 5-hydroxytryptophan (5-HTP) as a supplemental ingredient in foods
  authors: Health Canada
  year: 2024
  url: https://www.canada.ca/en/health-canada/services/food-nutrition/supplemented-foods/list-permitted-food-ingredients/information-ingredients-foods/decision-5-hydroxytryptophan.html
  kind: Regulatory decision
  insight: Health Canada concluded the evidence did not support including 5-HTP on the list of permitted supplemental ingredients in foods.
  limitation: Scope is supplemented foods in Canada.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: Canada
  activity: Licence application and labelling for oral natural health products
  status: Health Canada publishes a 5-HTP monograph for product licence applications. Food and food-like forms are outside its scope.
  sourceUrl: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/atReq?atid=5htp&lang=eng
  asOf: 2026-11-18
- jurisdiction: Canada
  activity: Use as an added ingredient in supplemented foods
  status: 5-HTP is not on the list of permitted supplemental ingredients in foods. Health Canada published data requirements for reconsideration.
  sourceUrl: https://www.canada.ca/en/health-canada/services/food-nutrition/supplemented-foods/list-permitted-food-ingredients/information-ingredients-foods/decision-5-hydroxytryptophan.html
  asOf: 2026-11-18
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/5htp
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/5-HTP
  title: Examine
```
