---
slug: phenylpiracetam
name: Phenylpiracetam
subtitle: Source-linked research profile.
aliases:
  - Fonturacetam
  - Phenotropil
  - Фенотропил
  - 4-Phenylpiracetam
  - Carphedon
  - Actitropil
formula: C12H14N2O2
molecularWeight: 218.25 g/mol
pubchemCid: 132441
smiles: C1C(CN(C1=O)CC(=O)N)C2=CC=CC=C2
category: Nootropic
tags:
  - nootropic-research
accent: "#a9b993"
reviewedAt: "2026-10-04"
editorialStatus: sourced-draft
halfLife:
  label: 3–5 h (Russian prescribing information)
  low: 3
  high: 5
  context: The current Actitropil prescribing information reports a 3–5 hour elimination half-life after oral use; the supporting PK study and population are not identified in the label.
  sourceId: actitropil-label
  observationId: fonturacetam-label-half-life
kinetics:
  onset: Not established
  peak: Blood Tmax is reported as 1 hour after oral administration in the Russian prescribing information.
  duration: Subjective or clinical-effect duration is not established from the elimination half-life.
  bioavailability: Absolute oral bioavailability is reported as 100% in the Russian prescribing information; the supporting study is not identified.
  metabolism: The label states that fonturacetam is not metabolized and is excreted unchanged, approximately 40% in urine and 60% in bile and sweat.
  sourceId: actitropil-label
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
x-order: 246
---

## Summary

Phenylpiracetam (fonturacetam; racemic Phenotropil) is a chiral phenyl-substituted racetam used as a medicinal product in Russia. Patient studies report cognitive and fatigue-related signals, but healthy-person enhancement remains unestablished; a 2026 healthy-volunteer trial is registered without posted results.

## Description

Fonturacetam is the INN for phenylpiracetam; Phenotropil and Actitropil are trade names used for racemic drug products. The molecule has one stereocenter, and R- and S-enantiomers show different preclinical activity; R-phenylpiracetam is also studied as MRZ-9547. Russian studies include randomized placebo-controlled work in chronic cerebral ischemia and epilepsy plus controlled stroke rehabilitation research, but reporting is largely Russian-language and often lacks modern effect estimates or transparent disclosures. The current Russian label reports oral Tmax of 1 hour and a 3–5 hour half-life. R-enantiomer studies support dopamine-transporter inhibition in rodents and in vitro; human DAT occupancy for the racemate is not established.

## Evidence note

Human evidence is concentrated in Russian clinical populations, not healthy users. A 2010 double-blind placebo-controlled trial reported improvements in MMSE, Schulte and MFI-20 measures but null depression/sleep findings and six discontinuations; its tables contain minor MMSE inconsistencies. A 2026 healthy-volunteer study was first registered after completion and has no posted results. Label PK values lack an identified source study. Preclinical DAT findings are enantiomer-specific. Funding/COI declarations were unavailable for several older clinical reports, limiting bias assessment.

## Doses

```yaml
- label: Russian prescribing-information regimen
  amount: 200–300 mg/day average; maximum 750 mg/day
  quantity: 200
  quantityMax: 300
  unit: mg/day
  ingredient: Fonturacetam
  formulation: Actitropil 50 mg or 100 mg tablets
  route: Oral
  frequency: Up to 100 mg once in the morning; doses above 100 mg divided into two administrations
  duration: 2 weeks to 3 months; average 30 days
  population: Adults covered by the Russian prescribing information
  purpose: Labeled therapeutic use across the listed neurologic, asthenic and related indications
  sourceCategory: approved-label
  note: Physician-selected regimen; the maximum 750 mg/day is a ceiling, not the stated average daily dose.
  sourceId: actitropil-label
- label: Chronic cerebral ischemia randomized trial
  amount: 100 mg/day or 200 mg/day
  quantity: 100
  quantityMax: 200
  unit: mg/day
  ingredient: Phenylpiracetam
  formulation: Phenotropil tablets
  route: Oral
  frequency: Once daily in the morning
  duration: 30 days
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  purpose: Cognitive, fatigue and neuropsychological outcomes
  sourceCategory: research
  note: Two active-dose groups were compared with placebo; 75 were randomized and 69 completed treatment.
  sourceId: fedin-2010
- label: Epilepsy add-on randomized trial
  amount: 100 mg/day or 200 mg/day
  quantity: 100
  quantityMax: 200
  unit: mg/day
  ingredient: Phenylpiracetam
  formulation: Phenotropil; formulation details not reported in the accessible abstract
  route: Not reported in the accessible abstract
  frequency: Daily; schedule not reported in the accessible abstract
  duration: Not reported in the accessible abstract
  population: 90 adults with symptomatic locally induced epilepsy receiving standard antiepileptic drugs
  purpose: Add-on efficacy and safety, including cognitive and fatigue assessments
  sourceCategory: research
  note: Double-blind randomized placebo-controlled study; the accessible English abstract does not provide arm sizes or numeric endpoint estimates.
  sourceId: grebeniuk-2014
- label: Healthy-volunteer registered study
  amount: 100, 200 or 300 mg/day
  quantity: 100
  quantityMax: 300
  unit: mg/day
  ingredient: Phenylpiracetam
  formulation: Formulation not specified in registry
  route: Oral
  frequency: Pre-test at study assessment sessions; registry also describes the assigned levels as mg/day
  duration: Seven assessment sessions across 6 months; exact dosing days are not fully specified
  population: Healthy adults aged 18–35 years
  purpose: Psychometric performance and response-initiation research
  sourceCategory: research
  note: Completed study with approximately nine participants per active compound; no posted results as of 2026-10-04.
  sourceId: nct07852130
```

## Pharmacokinetics

```yaml
- id: fonturacetam-label-half-life
  analyte: Fonturacetam
  route: Oral
  formulation: Actitropil tablets
  population: Population not specified in the prescribing information
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 3
  high: 5
  unit: hours
  context: The Russian prescribing information reports a 3–5 hour half-life, 1-hour blood Tmax and 100% absolute oral bioavailability, but does not identify the underlying PK study or population.
  sourceId: actitropil-label
  modelEligible: true
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: first-dose-drowsiness-label
  conceptId: drowsiness
  name: Drowsiness or strong need for sleep
  direction: Increased
  evidence: Limited research
  description: The Russian prescribing information warns that a first dose can cause a pronounced need for sleep in people with marked psychoemotional exhaustion, chronic stress, fatigue or chronic insomnia.
  sourceId: actitropil-label
  population: Adults with severe exhaustion, chronic stress/fatigue or chronic insomnia as described in the label
  exposure: Single first dose; dose not specified for this warning
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- id: fedin-mmse-cognition
  study:
    id: fedin-2010-chronic-cerebral-ischemia
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Chronic cerebral ischemia
      - Mild cognitive impairment
      - Age 60–90 years
    comparator: Placebo
    route: Oral
    formulation: Phenotropil tablets
    durationDays: 30
    assessmentTime: Day 30
  conceptId: cognitive-task-performance
  name: Global cognitive screening performance
  direction: Increased
  evidence: Human research
  reportType: measured-assessment
  description: Both 100 and 200 mg/day groups improved on MMSE relative to placebo at day 30; 69 of 75 randomized participants completed the study.
  sourceId: fedin-2010
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  exposure: Phenotropil 100 or 200 mg/day for 30 days
  instrument: Mini-Mental State Examination (MMSE)
  magnitude: Active groups were reported significantly better than placebo (p<0.05); two article tables give slightly different MMSE endpoint means, so no structured mean is encoded.
- id: fedin-schulte-attention
  study:
    id: fedin-2010-chronic-cerebral-ischemia
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Chronic cerebral ischemia
      - Mild cognitive impairment
      - Age 60–90 years
    comparator: Placebo
    route: Oral
    formulation: Phenotropil tablets
    durationDays: 30
    assessmentTime: Day 30
  conceptId: attention
  name: Schulte-table performance
  direction: Increased
  evidence: Human research
  reportType: measured-assessment
  description: Schulte-table completion measures improved in both active groups while the placebo group did not improve; the 200 mg/day group was also reported better than the 100 mg/day group.
  sourceId: fedin-2010
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  exposure: Phenotropil 100 or 200 mg/day for 30 days
  instrument: Schulte tables
  magnitude: Total values changed 71.6→67.1 at 100 mg/day, 69.9→65.2 at 200 mg/day and 70.2→70.9 with placebo; active vs placebo p<0.05.
- id: fedin-mfi20-fatigue
  study:
    id: fedin-2010-chronic-cerebral-ischemia
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Chronic cerebral ischemia
      - Mild cognitive impairment
      - Age 60–90 years
    comparator: Placebo
    route: Oral
    formulation: Phenotropil tablets
    durationDays: 30
    assessmentTime: Day 30
  conceptId: fatigue-severity
  name: MFI-20 fatigue/asthenia burden
  direction: Decreased
  evidence: Human research
  reportType: measured-assessment
  description: MFI-20 total scores decreased in both active groups, with a larger reported reduction at 200 mg/day than 100 mg/day, while placebo was essentially unchanged.
  sourceId: fedin-2010
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  exposure: Phenotropil 100 or 200 mg/day for 30 days
  instrument: Multidimensional Fatigue Inventory (MFI-20)
  magnitude: Total score changed 73.5→67.6 at 100 mg/day, 73.2→64.6 at 200 mg/day and 72.8→73.3 with placebo; active vs placebo p<0.05.
- id: fedin-depression-null
  study:
    id: fedin-2010-chronic-cerebral-ischemia
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Chronic cerebral ischemia
      - Mild cognitive impairment
      - Age 60–90 years
    comparator: Placebo
    route: Oral
    formulation: Phenotropil tablets
    durationDays: 30
    assessmentTime: Day 30
  conceptId: depression-severity
  name: Geriatric depression symptoms
  direction: Variable
  evidence: Human research
  reportType: measured-assessment
  description: The trial did not find a significant between-group effect on the geriatric depression scale.
  sourceId: fedin-2010
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  exposure: Phenotropil 100 or 200 mg/day for 30 days
  instrument: Geriatric Depression Scale
  magnitude: No significant between-group difference (p>0.05).
- id: fedin-sleep-null
  study:
    id: fedin-2010-chronic-cerebral-ischemia
    design: Randomized double-blind placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Chronic cerebral ischemia
      - Mild cognitive impairment
      - Age 60–90 years
    comparator: Placebo
    route: Oral
    formulation: Phenotropil tablets
    durationDays: 30
    assessmentTime: Day 30
  conceptId: sleep
  name: Sleep questionnaire outcome
  direction: Variable
  evidence: Human research
  reportType: measured-assessment
  description: The trial did not find a significant between-group effect on its sleep questionnaire.
  sourceId: fedin-2010
  population: Adults aged 60–90 years with chronic cerebral ischemia and mild cognitive impairment
  exposure: Phenotropil 100 or 200 mg/day for 30 days
  instrument: Study sleep questionnaire
  magnitude: No significant between-group difference (p>0.05).
- id: grebeniuk-cognition
  study:
    id: grebeniuk-2014-epilepsy
    design: Randomized double-blind placebo-controlled add-on trial
    sampleSize: 90
    populationLabels:
      - Symptomatic locally induced epilepsy
      - Adults
    comparator: Placebo plus standard antiepileptic drugs
    assessmentTime: Not reported in accessible abstract
  conceptId: cognitive-task-performance
  name: Cognitive function during epilepsy add-on therapy
  direction: Increased
  evidence: Human research
  reportType: measured-assessment
  description: The English abstract reports improved cognitive function with phenotropil add-on treatment, alongside MMSE, HAM-D, MFI-20 and P300/EEG assessments, but provides no arm-specific estimates.
  sourceId: grebeniuk-2014
  population: Adults with symptomatic locally induced epilepsy receiving standard antiepileptic drugs
  exposure: Phenotropil 100 or 200 mg/day versus placebo; treatment duration not reported in the accessible abstract
  instrument: MMSE and P300 were among reported assessments
  magnitude: Improvement reported without an effect estimate in the accessible abstract.
- id: kovalchuk-stroke-recovery
  study:
    id: kovalchuk-2010-stroke-rehabilitation
    design: Controlled clinical trial; allocation and blinding not reported in the accessible abstract
    sampleSize: 400
    populationLabels:
      - Ischemic stroke
      - Rehabilitation
    comparator: Control rehabilitation group
    formulation: Phenotropil; formulation not reported in accessible abstract
    assessmentTime: During the first year after stroke
  conceptId: stroke-recovery
  name: Neurologic and activities-of-daily-living recovery
  direction: Increased
  evidence: Human research
  reportType: measured-assessment
  description: Two hundred of 400 patients received three phenotropil courses as part of rehabilitation; the treatment group was reported to have better neurologic and daily-living recovery than the control group.
  sourceId: kovalchuk-2010
  population: Patients undergoing rehabilitation after ischemic stroke
  exposure: Phenotropil 400 mg/day in three courses during the first year after stroke, added to complex rehabilitation
  instrument: Barthel, Lindmark, Scandinavian, and Merton and Sutton scales
  magnitude: Better recovery reported in the phenotropil group (p<0.0001); no effect estimate is given in the accessible abstract.
```

## Mechanisms

```yaml
- title: R-enantiomer dopamine-transporter inhibition
  description: MRZ-9547, identified as the R-enantiomer of phenylpiracetam, inhibited DAT in vitro and moderately increased striatal dopamine in rats; the opposite enantiomer MRZ-9546 was substantially less potent. This does not establish human DAT occupancy for racemic phenylpiracetam.
  sourceId: sommer-2014
  conceptId: dopamine-transporter
- title: R-enantiomer brain penetration and target profiling
  description: In male mice, R-phenylpiracetam reached brain tissue 15 minutes after oral or intraperitoneal 50 mg/kg dosing; target profiling found DAT as the only significant molecular target in the tested panel. These are animal and in-vitro data.
  sourceId: zvejniece-2020-rph
  conceptId: dopamine-transporter
```

## Cautions

```yaml
- title: Psychiatric and drowsiness warnings in Russian prescribing information
  description: The label contraindicates use in pregnancy, breastfeeding and under age 18, advises caution with severe hypertension and certain severe organ disease, and warns that anxiety, panic, hallucinations or delusions may worsen in susceptible patients; first-dose drowsiness can occur in marked exhaustion.
  sourceId: actitropil-label
- title: Discontinuations and tolerability in the 2010 placebo-controlled trial
  description: Six of 75 randomized participants discontinued. Active-arm reasons included dyspepsia and irritability/sleep disturbance; one placebo participant discontinued for daytime sleepiness. The trial was small and not powered for uncommon harms.
  sourceId: fedin-2010
- title: Dependence, tolerance and withdrawal are not independently established
  description: The Russian label states that dependence, tolerance and withdrawal syndrome do not develop during course use, but no dedicated human dependence or withdrawal study was identified in this review.
  sourceId: actitropil-label
- title: Illicit-market product quality is a separate risk
  description: A 2025 multi-country Official Medicines Control Laboratory surveillance study found phenylpiracetam among unauthorized Russian prescription drugs in European/Australian market samples and reported interceptions of bulk raw material near 100% purity; these findings do not establish the quality of any specific consumer product.
  sourceId: vanhee-2025-surveillance
```

## Claims

```yaml
- id: r-enantiomer-dat-evidence
  assertion: Preclinical evidence supports dopamine-transporter inhibition by the R-enantiomer of phenylpiracetam, not demonstrated human target occupancy for the racemic drug.
  relation: enantiomer-specific-target-evidence
  participants:
    - entityId: substance:phenylpiracetam
      role: parent racemate containing the studied R-enantiomer
    - entityId: tag:dopamine-transporter
      role: preclinical molecular target
  context: In-vitro assays and rat/mouse experiments with MRZ-9547 or R-phenylpiracetam.
  sourceIds:
    - sommer-2014
    - zvejniece-2020-rph
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Species, stereoisomer and exposure differences prevent direct extrapolation to human racemic dosing.
- id: stereoselective-preclinical-activity
  assertion: R-phenotropil showed stronger memory-related activity than S-phenotropil in a mouse passive-avoidance model despite similar measured brain concentrations.
  relation: enantiomer-specific-preclinical-effect
  participants:
    - entityId: substance:phenylpiracetam
      role: racemate whose enantiomers were compared
    - entityId: tag:cognitive-task-performance
      role: preclinical behavioral endpoint
  context: Mouse behavioral pharmacology after single doses; not a human cognitive-enhancement study.
  sourceIds:
    - zvejniece-2011-stereo
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal passive avoidance does not establish cognitive enhancement in healthy humans.
- id: healthy-enhancement-unestablished
  assertion: The reviewed evidence does not establish cognitive enhancement in healthy people; the only current ClinicalTrials.gov phenylpiracetam healthy-volunteer study has no posted results.
  relation: evidence-gap
  participants:
    - entityId: substance:phenylpiracetam
      role: investigated substance
    - entityId: tag:cognitive-task-performance
      role: proposed healthy-person endpoint
  context: Published controlled human findings located in this review are predominantly patient studies; NCT07852130 enrolled healthy adults but has no posted results as of 2026-10-04.
  sourceIds:
    - nct07852130
    - fedin-2010
    - grebeniuk-2014
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Absence of posted registry results is not proof of no effect; unpublished or non-indexed studies may exist.
- id: regional-asthenia-synthesis
  assertion: A 2025 Russian-language meta-analysis reported lower MFI-20 asthenia/fatigue scores after one month of 200 mg/day fonturacetam, but the evidence base was highly heterogeneous and included largely noncontrolled studies.
  relation: evidence-synthesis
  participants:
    - entityId: substance:phenylpiracetam
      role: intervention
    - entityId: tag:fatigue-severity
      role: synthesized outcome
  context: Eleven regional reports; 549 patients; one-month fonturacetam exposure.
  sourceIds:
    - devlikamova-2025-meta
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The synthesis does not establish healthy-user enhancement and is constrained by underlying study design and reporting quality.
```

## Interactions

```yaml
- id: cns-stimulant-potentiation-label
  name: CNS stimulants
  otherSlug: null
  targetClassId: stimulant
  summary: Russian prescribing information states that fonturacetam can potentiate medicines that stimulate the central nervous system.
  sourceId: actitropil-label
  mechanism: Not established in the label.
  context: Label-level interaction warning; no quantified human interaction study was identified in this review.
- id: ethanol-hypnotic-effect-label
  name: Ethanol
  otherSlug: ethanol
  summary: Russian prescribing information states that fonturacetam reduces the hypnotic effect of ethanol.
  sourceId: actitropil-label
  mechanism: Functional antagonism of ethanol's hypnotic effect is described; the molecular mechanism is not specified.
  context: Label-level statement; no quantified controlled human interaction study was identified in this review.
```

## Experience links

```yaml
- title: Phenylpiracetam on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Phenylpiracetam
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem
  title: Fonturacetam
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/132441
  kind: Chemical database
  insight: Confirms CID 132441, formula, molecular weight, connectivity SMILES, INN Fonturacetam, synonyms and one undefined stereocenter for the racemic record.
  limitation: Database identity does not establish clinical efficacy, formulation quality or pharmacokinetics.
  funding: U.S. National Library of Medicine database; not a clinical study.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a chemical database record.
  conflictOfInterestStatus: not-assessed
- id: actitropil-label
  title: Актитропил — инструкция по медицинскому применению
  authors: Pharmstandard-Leksredstva
  year: 2025
  url: https://actitropil.ru/instructions
  kind: Russian prescribing information
  insight: Current product information for registered fonturacetam tablets, including PK, dosing, contraindications, warnings and interactions.
  limitation: Manufacturer-hosted prescribing information; underlying PK and several pharmacodynamic claims are not linked to primary studies.
  funding: Not applicable to prescribing information.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to prescribing information.
  conflictOfInterestStatus: not-assessed
- id: fedin-2010
  title: Применение Фенотропила у больных с хронической ишемией мозга и умеренными когнитивными нарушениями. Результаты рандомизированного двойного слепого плацебоконтролируемого исследования
  authors: A.I. Fedin, E.V. Amcheslavskaya, E.N. Krasnoperov, A.V. Belopasova
  year: 2010
  url: https://medi.ru/info/2694/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: In 75 randomized older patients, 100 or 200 mg/day for 30 days improved MMSE, Schulte and MFI-20 measures versus placebo; depression and sleep measures were null.
  limitation: Small regional study; 69 completed, MMSE endpoint values differ slightly between tables, and the accessible full text is a Russian-language mirror.
  funding: No funding declaration identified in the inspected full-text mirror.
  sponsorshipStatus: not-reported
  conflictsOfInterest: No conflict-of-interest declaration identified in the inspected full-text mirror.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://medi.ru/info/2694/
- id: kovalchuk-2010
  title: "[Efficacy of phenotropil in the rehabilitation of stroke patients]"
  authors: V.V. Koval'chuk, A.A. Skoromets, I.V. Koval'chuk, E.G. Stoianova, M.L. Vysotskaia, E.V. Melikhova, E.V. Il'iaĭnen
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/21626817/
  kind: Controlled clinical trial
  insight: Among 400 ischemic-stroke patients, the 200 receiving phenotropil 400 mg/day in three rehabilitation courses had better neurologic and daily-living recovery than controls.
  limitation: Accessible English abstract lacks allocation/blinding details, course lengths, effect estimates and disclosure statements.
  pmid: "21626817"
  funding: Not assessed from the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: zvejniece-2011-stereo
  title: Investigation into Stereoselective Pharmacological Activity of Phenotropil
  authors: Liga Zvejniece, Baiba Svalbe, Grigory Veinberg, Solveiga Grinberga, Maksims Vorona, Ivars Kalvinsh, Maija Dambrova
  year: 2011
  url: https://onlinelibrary.wiley.com/doi/10.1111/j.1742-7843.2011.00742.x
  kind: Preclinical stereoisomer pharmacology study
  insight: R-phenotropil was more active than S-phenotropil in mouse memory testing despite similar brain concentrations; racemic and enantiopure forms were directly compared.
  limitation: Animal behavioral findings do not establish human cognitive benefit or the clinical activity of either purified enantiomer.
  pmid: "21689376"
  doi: "10.1111/j.1742-7843.2011.00742.x"
  funding: European Regional Development Fund and European Social Fund support was declared; funder roles were not stated.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No conflict-of-interest declaration identified in the inspected Wiley full text.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://onlinelibrary.wiley.com/doi/10.1111/j.1742-7843.2011.00742.x
- id: sommer-2014
  title: The dopamine reuptake inhibitor MRZ-9547 increases progressive ratio responding in rats
  authors: S. Sommer, W. Danysz, H. Russ, B. Valastro, G. Flik, W. Hauber
  year: 2014
  url: https://academic.oup.com/ijnp/article/17/12/2045/2910067
  kind: Preclinical mechanism and behavior study
  insight: R-phenylpiracetam/MRZ-9547 was a selective DAT inhibitor, increased striatal dopamine and effort-related responding in rats, while the opposite enantiomer was less potent.
  limitation: Rat/in-vitro findings cannot establish racemic human DAT occupancy, efficacy or abuse liability.
  pmid: "24964269"
  doi: "10.1017/S1461145714000996"
  funding: Supported by Merz Pharmaceuticals.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Three authors were Merz employees, one was a Brains On-Line employee, and two authors reported Merz consulting compensation; one author declared no potential conflict.
  conflictOfInterestStatus: declared
  disclosureUrl: https://academic.oup.com/ijnp/article/17/12/2045/2910067
- id: grebeniuk-2014
  title: "[The efficacy of add-on treatment with phenotropil in adult patients with locally-induced epilepsy]"
  authors: O.V. Grebeniuk, N.G. Zhukova, V.M. Alifirova
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25591651/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: In 90 adults receiving antiepileptic drugs, 100 or 200 mg phenotropil versus placebo was reported to improve cognitive function and reduce seizure frequency.
  limitation: The accessible English abstract provides no arm sizes, duration, effect estimates, adverse-event counts or disclosure statements.
  pmid: "25591651"
  doi: "10.17116/jnevro201411411227-31"
  funding: Not assessed from the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: zvejniece-2020-rph
  title: Neuroprotective and anti-inflammatory activity of DAT inhibitor R-phenylpiracetam in experimental models of inflammation in male mice
  authors: Liga Zvejniece, Baiba Zvejniece, Melita Videja, Gundega Stelfa, Edijs Vavers, Solveiga Grinberga, Baiba Svalbe, Maija Dambrova
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32279140/
  kind: Preclinical pharmacokinetic and target-profiling study
  insight: R-phenylpiracetam reached mouse brain within 15 minutes after oral or intraperitoneal dosing, and DAT was the only significant target in the tested profiling panel.
  limitation: Mouse exposure and target profiling do not provide a human half-life or demonstrate clinical effects of racemic phenylpiracetam.
  pmid: "32279140"
  doi: "10.1007/s10787-020-00705-7"
  funding: Institutional metadata reports partial support from a Latvian Institute of Organic Synthesis internal grant and target-profiling data supplied by JSC Olainfarm; publisher disclosure was not independently inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: devlikamova-2025-meta
  title: "[Efficacy and safety of fonturacetam in asthenia: a systematic review and meta-analysis]"
  authors: F.I. Devlikamova, D.R. Safina
  year: 2025
  url: https://www.mediasphera.ru/issues/zhurnal-nevrologii-i-psikhiatrii-im-s-s-korsakova/2025/2/1199772982025021069
  kind: Systematic review and meta-analysis
  insight: Eleven reports involving 549 patients were synthesized; 200 mg/day for one month was associated with a 16.3-point average MFI-20 reduction, but heterogeneity was very high.
  limitation: Underlying studies were heterogeneous and often uncontrolled; the synthesis cannot establish healthy-person enhancement.
  pmid: "40047835"
  doi: "10.17116/jnevro202512502169"
  funding: No funding declaration identified in the inspected full-text page.
  sponsorshipStatus: not-reported
  conflictsOfInterest: No conflict-of-interest declaration identified in the inspected full-text page.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://www.mediasphera.ru/issues/zhurnal-nevrologii-i-psikhiatrii-im-s-s-korsakova/2025/2/1199772982025021069
- id: vanhee-2025-surveillance
  title: "The Occurrence of Illicit Smart Drugs or Nootropics in Europe and Australia and Their Associated Dangers: Results from a Market Surveillance Study by 12 Official Medicines Control Laboratories"
  authors: Celine Vanhee, Eric Deconinck, Mark George, Andrew Hansen, Andreas Hackl, Uwe Wollein, Oliver El-Atma, Nico Beerbaum, Federica Aureli, Anna Borioni, Magdalena Poplawska, Agata Blazewicz, Karin Roschel, Claude Marson, Magnolia Mendoza Barrios, Birgit Hakkarainen, Andreas Blomgren, Ingrid Bakker-'t Hart, Marta Miquel
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/
  kind: Official Medicines Control Laboratory market-surveillance study
  insight: Multi-country surveillance found phenylpiracetam among unauthorized Russian prescription drugs and reported bulk raw-material interceptions in European/Australian markets.
  limitation: Targeted surveillance of suspect products cannot estimate prevalence in the general market or establish the quality of any specific product.
  pmid: "40558871"
  doi: "10.3390/jox15030088"
  funding: The authors declared that the research received no external funding.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: One author disclosed employment by the Austrian Agency for Health and Food Safety; the remaining authors declared no commercial or financial relationships that could be construed as conflicts.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/
- id: nct07852130
  title: Reliability of Standardized IQ Testing Under Modafinil, Racetam-Class Compounds, Sleep Restriction and Daily Activity
  authors: Reserology Research Foundation; Abdulraheem Mohamed Gouda
  year: 2026
  url: https://clinicaltrials.gov/study/NCT07852130
  kind: ClinicalTrials.gov registry record
  insight: Completed 70-person healthy-volunteer study included an oral phenylpiracetam arm at 100, 200 or 300 mg/day, but had no posted results as of 2026-10-04.
  limitation: Sponsor-submitted record first posted after study completion; active conditions were small and no outcome results were posted.
  funding: Registry record does not provide an inspected publication funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Registry record does not provide an inspected publication conflict-of-interest declaration.
  conflictOfInterestStatus: not-assessed
- id: fda-2019-peak
  title: Peak Nootropics LLC aka Advanced Nootropics - 557887 - 02/05/2019
  authors: U.S. Food and Drug Administration
  year: 2019
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peak-nootropics-llc-aka-advanced-nootropics-557887-02052019
  kind: Official regulatory warning letter
  insight: FDA treated phenylpiracetam products marketed with disease and structure/function claims as unapproved new drugs and misbranded drugs for those intended uses.
  limitation: A warning letter addresses specific marketed products and claims; it does not itself define a general federal possession prohibition.
  funding: Not applicable to an official regulatory document.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official regulatory document.
  conflictOfInterestStatus: not-assessed
- id: suek-2026
  title: KAMU medicine search — substances and methods prohibited in-competition
  authors: Finnish Center for Integrity in Sports (FINCIS/SUEK)
  year: 2026
  url: https://kamu.suek.fi/en/dopingsubstances/
  kind: Official anti-doping list implementation
  insight: The WADA 2026-based KAMU list places fonturacetam (4-phenylpiracetam; carphedon) in S6.A non-specified stimulants prohibited in-competition, including relevant optical isomers.
  limitation: Anti-doping status governs sport participation and is not a general criminal-law classification.
  funding: Not applicable to an official anti-doping list.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official anti-doping list.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: Russia
  activity: Registered medicinal-product use and dispensing
  status: Actitropil is a registered fonturacetam tablet product (LP-006278); the current manufacturer-hosted instruction cites the Russian state medicines register instruction dated 2025-04-01.
  sourceUrl: https://actitropil.ru/instructions
  asOf: "2026-10-04"
- jurisdiction: United States
  activity: Interstate marketing with therapeutic or structure/function drug claims
  status: FDA's 2019 warning letter treated the cited phenylpiracetam product as an unapproved new drug and misbranded drug for the claims at issue; this record does not establish a general possession ban.
  sourceUrl: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peak-nootropics-llc-aka-advanced-nootropics-557887-02052019
  asOf: "2026-10-04"
- jurisdiction: WADA-code sport / Finland FINCIS implementation
  activity: In-competition use
  status: Fonturacetam (4-phenylpiracetam; carphedon) is listed under S6.A non-specified stimulants and is prohibited in-competition; relevant optical isomers are included.
  sourceUrl: https://kamu.suek.fi/en/dopingsubstances/
  asOf: "2026-10-04"
```
