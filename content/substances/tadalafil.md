---
slug: tadalafil
name: Tadalafil
subtitle: PDE5 inhibitor with indication-specific clinical evidence.
aliases:
  - Cialis
  - Adcirca
  - IC351
  - Тадалафил
formula: C22H19N3O4
molecularWeight: 389.4 g/mol
pubchemCid: 110635
smiles: CN1CC(=O)N2[C@@H](C1=O)CC3=C([C@H]2C4=CC5=C(C=C4)OCO5)NC6=CC=CC=C36
category: PDE5 inhibitor
tags:
  - pde5
  - cgmp-signaling
  - smooth-muscle-relaxation
accent: "#8189aa"
reviewedAt: 2026-10-04
editorialStatus: sourced-draft
halfLife:
  label: 17.5 h mean in healthy subjects
  low: null
  high: null
  context: "Different populations: 15 h in healthy Adcirca context and 35 h in pulmonary hypertension without bosentan."
  sourceId: cialis-label
  observationId: tadalafil-pk-0
kinetics:
  onset: No universal felt onset established
  peak: Median plasma Tmax 2 h; range 0.5–6 h
  duration: Plasma half-life does not define clinical duration
  bioavailability: Absolute bioavailability undetermined
  metabolism: Predominantly CYP3A4
  sourceId: cialis-label
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
x-order: 295
---

## Summary

Tadalafil improves selected ED, LUTS/BPH and PAH endpoints. Those findings do not establish healthy-person athletic enhancement.

## Description

Cialis and Adcirca use the same molecule in different clinical contexts. Erectile-function recovery, urinary symptoms, walking capacity and clinical worsening remain separate outcomes. Null urinary-flow and healthy-athlete results constrain broader claims.

## Evidence note

Separate Tadalafil Deep Research, locally converted because generated download links were empty. Selected numerical findings and labels were rechecked; this is a sourced draft. Publication-specific funding is retained. Unrecovered original author declarations remain unassessed. Coverage is selective, not an independently reviewed systematic review.

## Doses

```yaml
- label: "Research exposure: Men with ED"
  amount: 10–20 mg
  quantity: 10
  quantityMax: 20
  unit: mg
  ingredient: Tadalafil
  formulation: Oral tablets
  route: Oral
  frequency: On demand
  duration: Trial-specific
  population: Men with ED
  purpose: Published clinical endpoint
  sourceCategory: research
  note: Study context; not a personal regimen.
  sourceId: salonia2026
- label: "Research exposure: Men with LUTS/BPH"
  amount: 5 mg
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Tadalafil
  formulation: Oral tablets
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: Men with LUTS/BPH
  purpose: Published clinical endpoint
  sourceCategory: research
  note: Study context; not a personal regimen.
  sourceId: cui2021
- label: "Research exposure: Patients with PAH"
  amount: 40 mg
  quantity: 40
  quantityMax: null
  unit: mg
  ingredient: Tadalafil
  formulation: Oral tablets
  route: Oral
  frequency: Daily
  duration: 16 weeks
  population: Patients with PAH
  purpose: Published clinical endpoint
  sourceCategory: research
  note: Study context; not a personal regimen.
  sourceId: galie2009
```

## Pharmacokinetics

```yaml
- id: tadalafil-pk-0
  analyte: Tadalafil
  route: Oral
  formulation: Cialis oral tablets
  population: Healthy subjects
  endpoint: elimination-half-life
  statistic: study-mean
  value: 17.5
  low: null
  high: null
  unit: hours
  context: Label-reported mean; population-specific, not felt duration.
  sourceId: cialis-label
  modelEligible: true
- id: tadalafil-pk-1
  analyte: Tadalafil
  route: Oral
  formulation: 40 mg oral
  population: Healthy subjects
  endpoint: elimination-half-life
  statistic: study-mean
  value: 15
  low: null
  high: null
  unit: hours
  context: Label-reported mean; population-specific, not felt duration.
  sourceId: adcirca-label
  modelEligible: true
- id: tadalafil-pk-2
  analyte: Tadalafil
  route: Oral
  formulation: Oral Adcirca context
  population: Pulmonary-hypertension patients without bosentan
  endpoint: elimination-half-life
  statistic: study-mean
  value: 35
  low: null
  high: null
  unit: hours
  context: Label-reported mean; population-specific, not felt duration.
  sourceId: adcirca-label
  modelEligible: true
```

## Duration

```yaml
- id: plasma-tmax
  route: Oral
  formulation: Cialis tablets
  measurement: plasma
  analyte: Tadalafil
  population: Healthy subjects
  sourceId: cialis-label
  note: Reported Tmax range; not a subjective peak phase.
  total: null
  phases:
    - name: peak
      basis: elapsed-since-exposure
      min: 0.5
      max: 6
      unit: hours
```

## Modifiers

```yaml
- label: CYP3A4 inhibition
  effect: Higher exposure
  detail: Ketoconazole 400 mg/day increased tadalafil 20 mg AUC by 312%.
  sourceId: cialis-label
  observationId: tadalafil-pk-0
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- direction: Increased
  evidence: Human research
  reportType: measured-assessment
  instrument: IIEF-EF >26
  magnitude: OR 7.13; 95% CI 4.61–11.03
  id: ed-recovery-20
  conceptId: erectile-function
  name: IIEF-EF recovery, 20 mg
  description: Greater odds of attaining IIEF-EF >26; odds are not a probability or general sexual enhancement.
  sourceId: salonia2026
  population: Men with ED
  exposure: 20 mg on demand
  study:
    id: ed-nma-2026-20
    design: Network meta-analysis of placebo-controlled trials
    comparator: Placebo
    route: Oral
    assessmentTime: Trial endpoints; heterogeneous follow-up
  result:
    measure: odds-ratio
    estimate: 7.13
    unit: odds ratio
    instrument: IIEF-EF >26
    comparator: Placebo
    population: Men with ED
    assessmentTime: Trial endpoints
    confidenceInterval:
      lower: 4.61
      upper: 11.03
      level: 95
- direction: Increased
  evidence: Human research
  reportType: measured-assessment
  instrument: IIEF-EF >26
  magnitude: OR 3.14; 95% CI 1.9–5.17
  id: ed-recovery-10
  conceptId: erectile-function
  name: IIEF-EF recovery, 10 mg
  description: Greater odds of attaining IIEF-EF >26; odds are not a probability or general sexual enhancement.
  sourceId: salonia2026
  population: Men with ED
  exposure: 10 mg on demand
  study:
    id: ed-nma-2026-10
    design: Network meta-analysis of placebo-controlled trials
    comparator: Placebo
    route: Oral
    assessmentTime: Trial endpoints; heterogeneous follow-up
  result:
    measure: odds-ratio
    estimate: 3.14
    unit: odds ratio
    instrument: IIEF-EF >26
    comparator: Placebo
    population: Men with ED
    assessmentTime: Trial endpoints
    confidenceInterval:
      lower: 1.9
      upper: 5.17
      level: 95
- direction: Decreased
  evidence: Human research
  reportType: measured-assessment
  instrument: IPSS
  magnitude: MD −1.97 points; 95% CI −2.24 to −1.70
  id: ipss-total
  conceptId: lower-urinary-tract-symptoms
  name: Total IPSS
  description: Small symptom-score improvement.
  sourceId: cui2021
  population: Men with LUTS/BPH
  exposure: 5 mg daily for 12 weeks
  study:
    id: cui-2021-ipss
    design: Meta-analysis of 15 randomized trials
    sampleSize: 9525
    comparator: Placebo
    route: Oral
    durationDays: 84
    assessmentTime: Week 12
  result:
    measure: mean-difference
    estimate: -1.97
    unit: points
    instrument: IPSS
    comparator: Placebo
    population: Men with LUTS/BPH
    assessmentTime: Week 12
    confidenceInterval:
      lower: -2.24
      upper: -1.7
      level: 95
- direction: Variable
  evidence: Human research
  reportType: measured-assessment
  instrument: Qmax
  magnitude: No statistically significant difference
  id: qmax-null
  conceptId: maximum-urinary-flow
  name: Maximum urinary flow
  description: No significant pooled advantage; this does not prove equivalence.
  sourceId: cui2021
  population: Men with LUTS/BPH
  exposure: Same 12-week synthesis
- direction: Increased
  evidence: Human research
  reportType: measured-assessment
  instrument: 6-minute walk test
  magnitude: +33 m; 95% CI 15–50
  id: pah-walk
  conceptId: walking-capacity
  name: Six-minute walk distance in PAH
  description: Placebo-adjusted improvement; the bosentan subgroup CI crossed zero.
  sourceId: galie2009
  population: Patients with PAH
  exposure: 40 mg daily
  study:
    id: phirst-1
    design: Double-blind randomized placebo-controlled trial
    sampleSize: 405
    populationLabels:
      - PAH
    comparator: Placebo
    route: Oral
    durationDays: 112
    assessmentTime: Week 16
  result:
    measure: mean-difference
    estimate: 33
    unit: m
    instrument: 6-minute walk distance
    comparator: Placebo
    population: Patients with PAH
    assessmentTime: Week 16
    confidenceInterval:
      lower: 15
      upper: 50
      level: 95
- direction: Decreased
  evidence: Human research
  reportType: measured-assessment
  instrument: Trial-defined clinical worsening
  magnitude: 68% relative risk reduction reported; absolute-risk estimate not curated
  id: pah-worsening
  conceptId: pah-clinical-worsening
  name: PAH clinical worsening
  description: Secondary clinical-worsening incidence favored treatment; p=.038.
  sourceId: galie2009
  population: Patients with PAH
  exposure: 40 mg daily for 16 weeks
  study:
    id: phirst-1
    design: Double-blind randomized placebo-controlled trial
    sampleSize: 405
    populationLabels:
      - PAH
    comparator: Placebo
    route: Oral
    durationDays: 112
    assessmentTime: Week 16
- direction: Variable
  evidence: Human research
  reportType: measured-assessment
  instrument: WHO functional class
  magnitude: null
  id: who-class-null
  conceptId: pah-functional-class
  name: WHO functional class
  description: Class changes were not statistically significant.
  sourceId: galie2009
  population: Patients with PAH
  exposure: Same PHIRST trial
  study:
    id: phirst-1
    design: Double-blind randomized placebo-controlled trial
    sampleSize: 405
    populationLabels:
      - PAH
    comparator: Placebo
    route: Oral
    durationDays: 112
    assessmentTime: Week 16
- direction: Variable
  evidence: Human research
  reportType: measured-assessment
  instrument: Cycle ergometry
  magnitude: null
  id: athlete-vo2-null
  conceptId: exercise
  name: Aerobic performance in normoxia
  description: No VO2max, ventilatory or anaerobic threshold improvement.
  sourceId: diluigi2008
  population: 14 healthy male athletes
  exposure: Single 20 mg dose
  study:
    id: diluigi-2008
    design: Double-blind placebo crossover
    sampleSize: 14
    comparator: Placebo
    route: Oral
    assessmentTime: Acute exercise test
```

## Mechanisms

```yaml
- title: PDE5 inhibition
  description: Inhibits cyclic-GMP breakdown.
  sourceId: adcirca-label
  conceptId: pde5
- title: Cyclic-GMP signaling
  description: Preserves cyclic-GMP-mediated signaling.
  sourceId: adcirca-label
  conceptId: cgmp-signaling
- title: Smooth-muscle relaxation
  description: Pulmonary vascular signaling supports vasodilation; BPH symptom mechanism is not established.
  sourceId: adcirca-label
  conceptId: smooth-muscle-relaxation
```

## Cautions

```yaml
- title: Common adverse effects
  description: Headache, dyspepsia, back pain, myalgia and flushing occur in trials.
  sourceId: cialis-label
- title: Urgent labeled warnings
  description: Priapism and sudden vision or hearing loss require urgent medical assessment.
  sourceId: cialis-label
- title: Renal and hepatic impairment
  description: Restrictions depend on indication and regimen; dialysis does not meaningfully clear tadalafil.
  sourceId: adcirca-label
- title: Postmarketing causality
  description: Spontaneous reports do not establish incidence or causation.
  sourceId: adcirca-label
```

## Claims

```yaml
- id: indication-specific
  assertion: Disease-specific outcomes cannot establish healthy-person athletic enhancement.
  relation: studied-for
  participants:
    - entityId: substance:tadalafil
      role: intervention
    - entityId: tag:walking-capacity
      role: PAH endpoint
    - entityId: tag:exercise
      role: healthy-athlete endpoint
  context: Different populations and endpoints
  sourceIds:
    - galie2009
    - diluigi2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute athlete trial; no generalized enhancement conclusion.
```

## Interactions

```yaml
- id: nitrates
  name: Organic nitrates
  otherSlug: null
  summary: "Contraindicated: potentiated hypotension."
  sourceId: adcirca-label
  severity:
    label: Contraindicated
    sourceId: adcirca-label
- id: riociguat
  name: Riociguat
  otherSlug: null
  summary: "Contraindicated: additive cyclic-GMP-mediated hypotension."
  sourceId: adcirca-label
  severity:
    label: Contraindicated
    sourceId: adcirca-label
- id: bp-lowering
  name: Alpha-blockers and antihypertensives
  otherSlug: null
  summary: Additive blood-pressure lowering.
  sourceId: adcirca-label
- id: alcohol
  name: Substantial alcohol
  otherSlug: null
  summary: Increased orthostatic symptoms.
  sourceId: adcirca-label
- id: cyp3a4-inhibitors
  name: Potent CYP3A4 inhibitors
  otherSlug: null
  summary: Higher systemic exposure; indication-specific restrictions apply.
  sourceId: cialis-label
```

## Experience links

```yaml
[]
```

## References

```yaml
- funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: pubchem
  title: "Tadalafil: compound identity"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/110635
  kind: Chemical database
  insight: CID 110635; stereochemical identifier retained.
  limitation: Chemical identity does not establish clinical efficacy.
- funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: cialis-label
  title: "CIALIS: US prescribing information"
  authors: Eli Lilly and Company; DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bcd8f8ab-81a2-4891-83db-24a0b0e25895
  kind: Official prescription label
  insight: ED/BPH indications, pharmacokinetics and warnings.
  limitation: Indication-specific labeling; no healthy-person enhancement approval.
- funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: adcirca-label
  title: "ADCIRCA: US prescribing information"
  authors: Eli Lilly and Company; DailyMed
  year: 2025
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
  kind: Official prescription label
  insight: PAH indication and population-specific elimination.
  limitation: PAH exercise ability is distinct from athletic enhancement.
- funding: Viatris funded the study; EAJ also received partial Italian Ministry of University PRIN support.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: TH declared Viatris employment and possible stockholding. Other declarations include travel, grants, consulting, royalties, patents and professional leadership; full statements are linked.
  conflictOfInterestStatus: declared
  id: salonia2026
  title: "A comparative evaluation of on-demand phosphodiesterase-5 inhibitor efficacy in erectile dysfunction treatment: a systematic review and network meta-analysis of double-blind, placebo-controlled, randomized trials"
  authors: Andrea Salonia et al.
  year: 2026
  url: https://academic.oup.com/jsm/article/23/7/qdag176/8708262
  doi: 10.1093/jsxmed/qdag176
  kind: Systematic review and network meta-analysis
  insight: On-demand tadalafil favored attaining IIEF-EF >26.
  limitation: Indirect network comparison; endpoint-specific recovery, heterogeneous trials and commercial involvement.
  disclosureUrl: https://academic.oup.com/jsm/article/23/7/qdag176/8708262
- funding: National Natural Science Foundation of China; West China Hospital/Sichuan University postdoctoral project; Health Commission of Sichuan Province.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no commercial or financial relationships that could constitute a potential conflict.
  conflictOfInterestStatus: none-declared
  id: cui2021
  title: "Efficacy and Safety of 12-week Monotherapy With Once Daily 5 mg Tadalafil for Lower Urinary Tract Symptoms of Benign Prostatic Hyperplasia: Evidence-based Analysis"
  authors: Jianwei Cui; Dehong Cao; Yunjin Bai; Jiahao Wang; Shan Yin; Wuran Wei; Yunfei Xiao; Jia Wang; Qiang Wei
  year: 2021
  url: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2021.744012/full
  doi: 10.3389/fmed.2021.744012
  pmid: "34712682"
  kind: Systematic review and meta-analysis
  insight: Small pooled IPSS improvement; urinary-flow improvement not established.
  limitation: Twelve-week outcomes and placebo comparisons; limited Qmax/PVR data.
  disclosureUrl: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2021.744012/full
- funding: Eli Lilly sponsored PHIRST; corroborated by the sponsor disclosure linked here.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: galie2009
  title: Tadalafil therapy for pulmonary arterial hypertension
  authors: Nazzareno Galiè et al.; PHIRST Study Group
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19470885/
  doi: 10.1161/CIRCULATIONAHA.108.839274
  pmid: "19470885"
  kind: Randomized placebo-controlled trial
  insight: Six-minute walking distance improved at 40 mg; WHO functional-class change was not significant.
  limitation: Disease-specific endpoint; bosentan subgroup uncertain. Abstract inspected; original author declarations not independently recovered.
  disclosureUrl: https://investor.lilly.com/news-releases/news-release-details/study-results-present-efficacy-and-safety-findings-phirst-1
- funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: diluigi2008
  title: The long-acting phosphodiesterase inhibitor tadalafil does not influence athletes' VO2max, aerobic, and anaerobic thresholds in normoxia
  authors: L Di Luigi et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/17614028/
  doi: 10.1055/s-2007-965131
  pmid: "17614028"
  kind: Double-blind crossover trial
  insight: No VO2max or threshold improvement in 14 healthy male athletes.
  limitation: Small acute normoxic experiment; abstract-only disclosure access.
- funding: Eli Lilly corporate release.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Declaration not inspected.
  conflictOfInterestStatus: not-assessed
  id: phirst-sponsor
  title: Study Results Present Efficacy and Safety Findings from the PHIRST-1 Study of Patients with Pulmonary Arterial Hypertension Taking Tadalafil Tablets Once Daily
  authors: Eli Lilly and Company; United Therapeutics
  year: 2009
  url: https://investor.lilly.com/news-releases/news-release-details/study-results-present-efficacy-and-safety-findings-phirst-1
  kind: Sponsor press release
  insight: Documents Lilly sponsorship of the PHIRST program.
  limitation: Commercial communication used for provenance, not independent efficacy assessment.
  disclosureUrl: https://investor.lilly.com/news-releases/news-release-details/study-results-present-efficacy-and-safety-findings-phirst-1
```

## Legal

```yaml
- jurisdiction: United States
  activity: Prescription medicinal use
  status: "Cialis: ED/BPH; Adcirca: WHO Group 1 PAH. Indications are product-specific."
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bcd8f8ab-81a2-4891-83db-24a0b0e25895
  asOf: 2026-10-04
```

