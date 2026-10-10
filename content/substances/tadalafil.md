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
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: 17.5 h mean in healthy subjects
  low: null
  high: null
  context: "Different populations: 15 h in healthy Adcirca context and 35 h in pulmonary hypertension without bosentan."
  sourceId: cialis-label
  observationId: tadalafil-pk-1
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

Tadalafil has established indication-specific evidence for erectile dysfunction, BPH/LUTS and WHO Group 1 pulmonary arterial hypertension. Small healthy-athlete and disease-cognition studies do not support a general exercise or nootropic use claim.

## Description

Cialis and Adcirca contain the same PDE5 inhibitor but use different dosing, populations and regulatory indications. This page separates patient-reported sexual or urinary outcomes, PAH functional outcomes, laboratory biomarkers, healthy-person trials and disease-specific cognition studies.

## Evidence note

The strongest evidence is for labeled disease treatment. The healthy-athlete evidence is mostly null for meaningful performance endpoints; CSVD cognition trials are disease-specific and largely negative. Long exposure makes nitrate, riociguat, alpha-blocker and CYP3A4 interaction precautions clinically important.

## Doses

```yaml
- label: Erectile dysfunction on-demand trial exposure
  amount: 10–20 mg
  quantity: 10
  quantityMax: 20
  unit: mg
  ingredient: Tadalafil
  formulation: Oral tablets
  route: Oral
  frequency: On demand
  duration: Trial-specific
  population: Men with erectile dysfunction
  purpose: Erectile-function endpoint
  sourceCategory: research
  note: Study exposure, not a personal regimen.
  sourceId: salonia2026
- label: BPH/LUTS randomized-trial exposure
  amount: 5 mg/day
  quantity: 5
  quantityMax: null
  unit: mg/day
  ingredient: Tadalafil
  formulation: Oral tablet
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: Men with LUTS/BPH
  purpose: Symptom-score and safety endpoints
  sourceCategory: research
  note: Meta-analysis exposure; objective urinary-flow benefit was not established.
  sourceId: cui2021
- label: PAH pivotal-trial exposure
  amount: 40 mg/day
  quantity: 40
  quantityMax: null
  unit: mg/day
  ingredient: Tadalafil
  formulation: Oral tablets
  route: Oral
  frequency: Daily
  duration: 16 weeks
  population: Patients with WHO Group 1 pulmonary arterial hypertension
  purpose: Six-minute walk and clinical-worsening endpoints
  sourceCategory: research
  note: Disease-specific dose; not evidence for healthy athletic enhancement.
  sourceId: galie2009
- label: Healthy-athlete crossover exposure
  amount: 20 mg
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Tadalafil
  formulation: Oral tablet
  route: Oral
  frequency: Single acute dose
  duration: Exercise testing after dosing
  population: 14 healthy trained men
  purpose: VO2max and exercise-threshold endpoints
  sourceCategory: research
  note: Small acute performance study; no meaningful improvement was found.
  sourceId: diluigi2008
```

## Pharmacokinetics

```yaml
- id: tadalafil-pk-1
  analyte: Tadalafil
  route: Oral
  formulation: Immediate-release oral tablet
  population: Healthy adults represented in the U.S. label
  endpoint: elimination-half-life
  statistic: approximate
  value: 17.5
  low: null
  high: null
  unit: hours
  context: Median Tmax is approximately 2 hours with a reported range of 0.5–6 hours. Food does not meaningfully change absorption; metabolism is predominantly CYP3A4 and metabolites are eliminated mainly in feces and urine.
  sourceId: cialis-label
  modelEligible: true
```

## Duration

```yaml
- id: tadalafil-plasma-tmax
  route: Oral
  formulation: Immediate-release tablet
  measurement: plasma
  analyte: Tadalafil
  population: Healthy adults
  sourceId: cialis-label
  note: Median Tmax approximately 2 hours; range 0.5–6 hours. This is plasma timing, not a subjective erection duration.
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
- label: Potent CYP3A4 inhibition
  effect: Higher tadalafil exposure
  detail: Ketoconazole, ritonavir and itraconazole increase exposure; the Cialis label imposes indication-specific dose and interval caps.
  sourceId: cialis-label
  observationId: tadalafil-pk-1
  factorType: enzyme
  direction: slower
- label: Renal impairment
  effect: Dose and interval restrictions
  detail: Severe renal impairment or hemodialysis changes recommended ED/BPH dosing; PAH dosing has separate renal rules.
  sourceId: cialis-label
  observationId: tadalafil-pk-1
  factorType: other
  direction: slower
```

## Effects

```yaml
- id: tadalafil-athlete-bp
  conceptId: perception
  name: Exercise-associated blood-pressure change
  direction: Decreased
  evidence: Human research
  description: In a small healthy-athlete crossover trial, 20 mg lowered systolic blood pressure before and after exercise without improving VO2max or ventilatory thresholds.
  sourceId: diluigi2008
  population: 14 healthy trained men
  exposure: 20 mg tadalafil before maximal cycle exercise
  instrument: Exercise blood pressure and cardiopulmonary testing
  magnitude: Lower systolic pressure; no VO2max or threshold benefit
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: tadalafil-ed-recovery-20
  conceptId: erectile-function
  name: IIEF-EF recovery, 20 mg
  direction: Increased
  evidence: Human research
  description: A network meta-analysis found greater odds of attaining IIEF-EF >26 with on-demand tadalafil 20 mg versus placebo. This is an endpoint-specific ED result, not general sexual enhancement.
  sourceId: salonia2026
  population: Men with erectile dysfunction
  exposure: 20 mg on demand in placebo-controlled trials
  instrument: IIEF-EF >26
  magnitude: OR 7.13, 95% CI 4.61–11.03
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-ipss
  conceptId: lower-urinary-tract-symptoms
  name: Total IPSS
  direction: Decreased
  evidence: Human research
  description: A systematic review found a small improvement in total IPSS after 5 mg/day for 12 weeks versus placebo. The pooled Qmax result was not significant.
  sourceId: cui2021
  population: Men with LUTS/BPH
  exposure: 5 mg tadalafil daily for 12 weeks
  instrument: IPSS
  magnitude: Mean difference −1.97 points, 95% CI −2.24 to −1.70
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-qmax-null
  conceptId: maximum-urinary-flow
  name: Maximum urinary flow
  direction: Variable
  evidence: Human research
  description: The same 12-week synthesis did not establish a significant maximum urinary-flow advantage. Symptom relief should not be presented as proven mechanical obstruction reversal.
  sourceId: cui2021
  population: Men with LUTS/BPH
  exposure: 5 mg tadalafil daily for 12 weeks
  instrument: Qmax
  magnitude: No statistically significant pooled difference
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-pah-walk
  conceptId: walking-capacity
  name: Six-minute walk distance in PAH
  direction: Increased
  evidence: Human research
  description: The PHIRST trial found a placebo-adjusted improvement in six-minute walk distance at tadalafil 40 mg/day after 16 weeks. This is a PAH functional outcome, not healthy-athlete enhancement.
  sourceId: galie2009
  population: Patients with PAH
  exposure: 40 mg tadalafil daily for 16 weeks
  instrument: Six-minute walk distance
  magnitude: +33 m, 95% CI 15–50 m
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-pah-worsening
  conceptId: pah-clinical-worsening
  name: PAH clinical worsening
  direction: Decreased
  evidence: Human research
  description: The pivotal PAH trial reported fewer clinical-worsening events at 40 mg/day, while WHO functional-class change was not statistically significant.
  sourceId: galie2009
  population: Patients with PAH
  exposure: 40 mg tadalafil daily for 16 weeks
  instrument: Trial-defined clinical-worsening composite
  magnitude: Reported 68% relative risk reduction; p=0.038
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-exercise-null
  conceptId: exercise
  name: Healthy-athlete exercise performance
  direction: Variable
  evidence: Human research
  description: Acute 20 mg tadalafil did not improve VO2max, ventilatory threshold or anaerobic threshold in trained men. A separate Wingate study likewise found no substantial power enhancement.
  sourceId: diluigi2008
  population: Healthy trained men
  exposure: 20 mg tadalafil before exercise testing
  instrument: VO2max, ventilatory thresholds and cycle power
  magnitude: No meaningful performance improvement
  reportType: measured-assessment
  conflictingSourceIds: []
- id: tadalafil-cognition-null
  conceptId: cognitive-performance
  name: Cognition in cerebral small-vessel disease
  direction: Variable
  evidence: Human research
  description: PASTIS and ETLAS-2 studied disease populations rather than healthy volunteers and did not establish cognitive benefit. A reaction-time difference in ETLAS-2 was considered potentially spurious by the investigators.
  sourceId: ref-etlas-cognition-2025
  population: Patients with cerebral small-vessel disease or vascular cognitive impairment
  exposure: 20 mg tadalafil acutely or daily for 3 months, study-specific
  instrument: Cognitive testing and MRI perfusion measures
  magnitude: No overall cognitive improvement
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: PDE5 inhibition
  description: Tadalafil inhibits phosphodiesterase-5 and preserves cyclic-GMP signaling in vascular smooth muscle.
  sourceId: cialis-label
  conceptId: pde5
- title: Cyclic-GMP-mediated smooth-muscle relaxation
  description: PDE5 inhibition supports nitric-oxide/cyclic-GMP vasodilation; disease-specific clinical benefit depends on the treated vascular bed and population.
  sourceId: adcirca-label
  conceptId: cgmp-signaling
```

## Cautions

```yaml
- title: Nitrate and riociguat contraindications
  description: Organic nitrates and soluble guanylate-cyclase stimulators are contraindicated because combined cyclic-GMP signaling can cause excessive hypotension.
  sourceId: cialis-label
- title: Blood-pressure and cardiovascular context
  description: Mean blood-pressure change is small in healthy men, but additive hypotension can occur with alpha-blockers, antihypertensives or substantial alcohol. High-risk cardiovascular patients were excluded from pivotal ED trials.
  sourceId: cialis-label
- title: Priapism and sensory emergencies
  description: An erection lasting more than four hours requires emergency care. Sudden visual or hearing loss has been reported postmarketing and warrants prompt evaluation; causality is not established for every report.
  sourceId: cialis-label
- title: Renal and hepatic impairment
  description: ED/BPH and PAH labels contain different renal and hepatic restrictions. Severe renal impairment, dialysis and severe hepatic disease require avoidance or specialist dosing rather than extrapolation from healthy subjects.
  sourceId: adcirca-label
- title: Healthy-person claims
  description: Small athlete trials and disease-cognition studies do not establish tadalafil as a general exercise enhancer or nootropic.
  sourceId: diluigi2008
```

## Claims

```yaml
- id: tadalafil-disease-specific
  assertion: Tadalafil improves selected ED, LUTS/BPH and PAH endpoints at indication-specific doses.
  relation: indication-specific-treatment
  participants:
    - entityId: substance:tadalafil
      role: intervention
    - entityId: tag:erectile-function
      role: ED-outcome
    - entityId: tag:lower-urinary-tract-symptoms
      role: BPH-outcome
    - entityId: tag:walking-capacity
      role: PAH-outcome
  context: Approved disease-treatment populations
  sourceIds:
    - cialis-label
    - cui2021
    - galie2009
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Disease-specific outcomes cannot be generalized to healthy enhancement.
- id: tadalafil-no-healthy-enhancement
  assertion: Available healthy-athlete evidence does not establish improved meaningful exercise performance.
  relation: no-established-performance-enhancement
  participants:
    - entityId: substance:tadalafil
      role: exposure
    - entityId: tag:exercise
      role: measured-outcome
  context: Small acute normoxic exercise studies
  sourceIds:
    - diluigi2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small samples and short exposure cannot exclude every possible context-specific effect.
```

## Interactions

```yaml
- id: tadalafil-nitrates
  name: Organic nitrates
  otherSlug: null
  summary: Contraindicated because tadalafil potentiates nitrate-mediated hypotension; label timing precautions extend beyond the plasma peak.
  sourceId: cialis-label
  severity:
    label: Contraindicated
    sourceId: cialis-label
- id: tadalafil-riociguat
  name: Riociguat and soluble guanylate-cyclase stimulators
  otherSlug: null
  summary: Contraindicated because combined cyclic-GMP signaling can cause excessive hypotension.
  sourceId: adcirca-label
  severity:
    label: Contraindicated
    sourceId: adcirca-label
- id: tadalafil-cyp3a4
  name: Potent CYP3A4 inhibitors
  otherSlug: null
  summary: Increase tadalafil exposure and trigger indication-specific dose or interval caps.
  sourceId: cialis-label
- id: tadalafil-alpha-blockers
  name: Alpha-blockers and antihypertensives
  otherSlug: null
  summary: Additive blood-pressure lowering; label requires stability and low starting doses or avoids combinations in BPH.
  sourceId: cialis-label
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: "Tadalafil: compound identity"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/110635
  kind: Chemical database
  insight: Provides CID 110635 and stereochemical identity.
  limitation: Chemical identity does not establish clinical efficacy.
  funding: Not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: not-assessed
- id: cialis-label
  title: CIALIS tadalafil tablets — U.S. prescribing information
  authors: Eli Lilly and Company; DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bcd8f8ab-81a2-4891-83db-24a0b0e25895
  kind: Official prescription label
  insight: Covers ED/BPH dosing, pharmacokinetics, contraindications, interactions and warnings.
  limitation: Indication-specific regulatory source; no healthy enhancement approval.
  funding: Manufacturer regulatory label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer-label source.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bcd8f8ab-81a2-4891-83db-24a0b0e25895
- id: adcirca-label
  title: ADCIRCA tadalafil — U.S. prescribing information
  authors: United Therapeutics Corporation; DailyMed
  year: 2025
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
  kind: Official prescription label
  insight: Covers PAH dosing, renal/hepatic adjustment and PAH-specific safety.
  limitation: PAH functional benefit cannot be generalized to athletic enhancement.
  funding: Manufacturer regulatory label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer-label source.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff61b237-be8e-461b-8114-78c52a8ad0ae
- id: salonia2026
  title: A comparative evaluation of on-demand phosphodiesterase-5 inhibitor efficacy in erectile dysfunction treatment
  authors: Salonia A et al.
  year: 2026
  url: https://academic.oup.com/jsm/article/23/7/qdag176/8708262
  doi: 10.1093/jsxmed/qdag176
  kind: Systematic review and network meta-analysis
  insight: On-demand tadalafil improved odds of reaching the selected IIEF-EF threshold.
  limitation: Indirect network comparisons and heterogeneous commercial involvement.
  funding: Viatris funded the study; partial public academic support also reported.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Industry employment, consulting and other author interests disclosed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://academic.oup.com/jsm/article/23/7/qdag176/8708262
- id: cui2021
  title: Efficacy and Safety of 12-week Monotherapy With Once Daily 5 mg Tadalafil for Lower Urinary Tract Symptoms of Benign Prostatic Hyperplasia
  authors: Cui J et al.
  year: 2021
  url: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2021.744012/full
  doi: 10.3389/fmed.2021.744012
  pmid: "34712682"
  kind: Systematic review and meta-analysis
  insight: Found a small IPSS improvement without established pooled Qmax benefit.
  limitation: Twelve-week outcomes and limited urodynamic data.
  funding: National Natural Science Foundation of China and academic grants.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no commercial or financial relationships.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2021.744012/full
- id: galie2009
  title: Tadalafil therapy for pulmonary arterial hypertension
  authors: Galiè N et al.; PHIRST Study Group
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19470885/
  doi: 10.1161/CIRCULATIONAHA.108.839274
  pmid: "19470885"
  kind: Randomized placebo-controlled trial
  insight: Tadalafil 40 mg/day improved six-minute walk distance and clinical-worsening outcomes in PAH.
  limitation: Disease-specific endpoints and industry-sponsored pivotal program.
  funding: Eli Lilly and Company lead sponsor; ICOS collaborator.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Sponsor-linked author relationships reported; full declaration not independently recovered.
  conflictOfInterestStatus: declared
  disclosureUrl: https://clinicaltrials.gov/study/NCT00125918
- id: diluigi2008
  title: The long-acting phosphodiesterase inhibitor tadalafil does not influence athletes' VO2max, aerobic, and anaerobic thresholds in normoxia
  authors: Di Luigi L et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/17614028/
  doi: 10.1055/s-2007-965131
  pmid: "17614028"
  kind: Double-blind crossover trial
  insight: A 20 mg acute exposure did not improve VO2max or exercise thresholds in 14 trained men.
  limitation: Small, short normoxic experiment; not evidence about all exercise contexts.
  funding: Not stated in retrieved publication metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
- id: ref-etlas-cognition-2025
  title: "Cognitive outcomes after tadalafil treatment in patients with cerebral small vessel disease: ETLAS-2 sub-study"
  authors: Ölmestig J et al.
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/41332889/
  doi: 10.1016/j.cccb.2025.100520
  pmid: "41332889"
  kind: Randomized-trial cognitive substudy
  insight: Found no overall cognitive benefit after three months of tadalafil in a disease population.
  limitation: Does not test healthy-person nootropic use; disease population and adherence limits apply.
  funding: ETLAS-2 program sponsors and collaborators listed in registry; exact substudy allocation not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure not recovered.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT05173896
```

## Legal

```yaml
- jurisdiction: United States
  activity: Prescription tadalafil use
  status: Cialis is labeled for ED/BPH and Adcirca for WHO Group 1 PAH; indications, formulations and dose rules are product-specific.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bcd8f8ab-81a2-4891-83db-24a0b0e25895
  asOf: 2026-10-10
```
