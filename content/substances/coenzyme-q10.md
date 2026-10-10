---
slug: coenzyme-q10
name: Coenzyme Q10
subtitle: Evidence-specific research record.
aliases:
  - coenzyme q10
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
  label: Study-specific tracer estimate
  low: 33.2
  high: 33.2
  context: Mean terminal half-life 33.2 ± 5.3 hours after 100 mg labelled CoQ10 in 16 healthy men; not a universal personal prediction.
  sourceId: S30
  observationId: coenzyme-q10-tracer
kinetics:
  onset: Not established
  peak: About 6.5 ± 1.5 hours in a tracer study
  duration: Not established
  bioavailability: Formulation-dependent plasma exposure
  metabolism: Mitochondrial redox cycling and redistribution; clinical implications vary
  sourceId: S30
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

Coenzyme Q10 (ubiquinone and ubiquinol) has formulation-dependent pharmacokinetics and mixed clinical evidence. Q-SYMBIO reported a long-term heart-failure signal, but systematic review certainty is limited; a blinded statin-rechallenge trial was null despite large serum exposure, while a smaller water-soluble trial was positive. Migraine and metabolic findings are selective, and healthy-person enhancement evidence is largely null. [S1][S4][S6][S9][S12][S14]

## Description

Ubiquinone and ubiquinol are redox forms of CoQ10. Human absorption varies with carrier lipids, solubilization, oil versus crystalline powder, dose splitting, and fed administration. These formulation effects do not prove greater clinical benefit for one form. [S1][S26][S28][S30]

## Evidence note

Evidence is disease- and endpoint-specific: Q-SYMBIO reported a heart-failure signal, whereas a confirmed-statin-myopathy crossover trial was null. A 2025 meta-analysis found borderline pain benefit with extreme heterogeneity. Tracer data support a study-specific half-life near 33 hours, not a universal personal value; disclosures are retained in references. [S4][S6][S9][S14][S30]

## Doses

```yaml
- label: Coenzyme Q10
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Ubiquinone
  formulation: Ubiquinone
  route: oral
  frequency: 100 mg three times daily
  duration: 2 years
  population: Patients with chronic heart failure
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Q-SYMBIO randomized clinical exposure; clinical outcome signal reported.
  sourceId: S4
- label: Confirmed statin myopathy
  amount: 600 mg/day
  quantity: 600
  quantityMax: null
  unit: mg
  ingredient: Ubiquinol softgels
  formulation: Ubiquinol softgels
  route: oral
  frequency: daily
  duration: 8 weeks after loading
  population: Adults with blinded statin-rechallenge-confirmed myopathy
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Serum CoQ10 rose substantially but symptoms and performance did not improve.
  sourceId: S9
- label: Statin-related mild/moderate symptoms
  amount: 100 mg/day
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Water-soluble CoQ10
  formulation: Water-soluble CoQ10
  route: oral
  frequency: 50 mg twice daily
  duration: 30 days
  population: Adults with statin-related muscle symptoms
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Small randomized trial reported lower symptom scores.
  sourceId: S12
- label: Migraine prophylaxis
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: CoQ10
  formulation: CoQ10
  route: oral
  frequency: 100 mg three times daily
  duration: 3 months
  population: Adults with migraine
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized trial and later meta-analysis assessed attack outcomes.
  sourceId: S16
- label: Healthy exercise study
  amount: 90 mg/day
  quantity: 90
  quantityMax: null
  unit: mg
  ingredient: CoQ10
  formulation: CoQ10
  route: oral
  frequency: daily
  duration: 8 weeks
  population: 23 moderately trained healthy men
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: No significant VO2max or lactate-threshold improvement.
  sourceId: S20
- label: Cognition/aging trial
  amount: 200 mg/day
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Ubiquinol
  formulation: Ubiquinol
  route: oral
  frequency: daily
  duration: 90 days
  population: Older adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized study of cognitive function and cardiometabolic biomarkers.
  sourceId: S24
```

## Pharmacokinetics

```yaml
- id: coenzyme-q10-tracer
  analyte: Deuterium-labelled CoQ10
  route: oral
  formulation: 100 mg labelled CoQ10
  population: 16 healthy men
  endpoint: elimination-half-life
  statistic: study-mean
  value: 33.2
  low: null
  high: null
  unit: hours
  context: Mean terminal half-life 33.2 ± 5.3 hours; peak plasma concentration about 6.5 ± 1.5 hours and a second peak around 24 hours were reported. This is a study-specific tracer estimate, not a universal personal half-life.
  sourceId: S30
  modelEligible: true
- id: coenzyme-q10-formulation
  analyte: Plasma total CoQ10
  route: oral
  formulation: Ubiquinone, ubiquinol, oil, crystalline, and solubilized products
  population: Healthy adults in crossover and randomized studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Formulation, carrier lipids, meal timing, and dose splitting changed plasma exposure; a single comparable terminal half-life was not established.
  sourceId: S26
  modelEligible: false
```

## Modifiers

```yaml
- label: Redox form
  effect: Variable
  detail: Ubiquinol produced higher plasma CoQ10 than ubiquinone in one older-male crossover study, but individual responses varied and clinical superiority was not shown.
  sourceId: S1
  observationId: coenzyme-q10-tracer
  factorType: other
  direction: variable
- label: Carrier and solubilization
  effect: Variable
  detail: Oil, softgel, crystalline, and solubilized products produced different plasma exposure profiles.
  sourceId: S26
  observationId: coenzyme-q10-tracer
  factorType: other
  direction: variable
- label: Meal and dose schedule
  effect: Variable
  detail: Trials commonly administered CoQ10 with meals; split dosing raised serum concentrations more than one dose in one study, without a quantitative universal food-effect estimate.
  sourceId: S28
  observationId: coenzyme-q10-tracer
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Exercise capacity
  direction: Variable
  evidence: Human research
  description: In healthy trained men, 90 mg/day did not significantly improve VO2max, workload at lactate threshold, or related exercise markers.
  sourceId: S20
  population: 23 moderately trained healthy men
  exposure: 90 mg/day for 8 weeks
  instrument: VO2max and lactate-threshold testing
  magnitude: null
- conceptId: perception
  name: Statin muscle symptoms
  direction: Variable
  evidence: Human research
  description: The confirmed-statin-myopathy trial found no symptom or performance benefit at 600 mg/day ubiquinol, whereas a smaller water-soluble trial reported lower symptoms.
  sourceId: S9
  population: Adults with confirmed or reported statin symptoms
  exposure: 100–600 mg/day across different formulations
  instrument: Muscle symptom scales and performance
  magnitude: null
- conceptId: perception
  name: Cognitive performance
  direction: Variable
  evidence: Human research
  description: A 2026 elderly trial assessed cognition and biomarkers; evidence does not establish general cognitive enhancement.
  sourceId: S24
  population: Older adults
  exposure: 200 mg/day ubiquinol for 90 days
  instrument: Cognitive tests
  magnitude: null
- conceptId: perception
  name: Migraine symptoms
  direction: Increased
  evidence: Human research
  description: A randomized migraine trial reported fewer or less severe attacks; later pooled evidence remained limited by small heterogeneous studies.
  sourceId: S16
  population: Adults with migraine
  exposure: 300 mg/day for 3 months
  instrument: Migraine frequency and severity
  magnitude: null
```

## Outcomes

```yaml
- conceptId: attention
  name: Heart-failure composite outcome
  direction: Increased
  evidence: Human research
  description: Q-SYMBIO reported a favorable composite morbidity/mortality signal with 300 mg/day over two years; later review certainty and replication remain limited.
  sourceId: S4
  population: Patients with chronic heart failure
  exposure: 300 mg/day ubiquinone for 2 years
  instrument: Composite morbidity/mortality outcome
  magnitude: null
- conceptId: attention
  name: SAMS pain score
  direction: Variable
  evidence: Human research
  description: A 2025 meta-analysis reported borderline pooled pain improvement with extreme heterogeneity and instability to study selection.
  sourceId: S14
  population: Statin-treated patients in pooled trials
  exposure: Varied CoQ10 doses and formulations
  instrument: Pain scores
  magnitude: null
- conceptId: attention
  name: Blood pressure and glycemic markers
  direction: Variable
  evidence: Human research
  description: A controlled diabetes trial reported blood-pressure and glycemic-control changes; these are disease-specific endpoints, not healthy-person enhancement.
  sourceId: S31
  population: Adults with type 2 diabetes
  exposure: CoQ10 trial exposure
  instrument: Blood pressure and glycemic measures
  magnitude: null
- conceptId: memory
  name: Healthy-person cognition
  direction: Variable
  evidence: Human research
  description: Available healthy-aging evidence is short and does not establish durable improvement in broad cognition or longevity.
  sourceId: S24
  population: Older adults
  exposure: 200 mg/day ubiquinol for 90 days
  instrument: Cognitive and biomarker endpoints
  magnitude: null
```

## Mechanisms

```yaml
- title: Redox and mitochondrial electron transport
  description: CoQ10 participates in mitochondrial electron transport and redox chemistry; mechanistic plausibility does not establish a clinical outcome.
  sourceId: S6
- title: Formulation-dependent exposure
  description: Carrier lipids, solubilization, and redox form alter plasma exposure and may explain inconsistent trial results.
  sourceId: S26
```

## Cautions

```yaml
- title: Warfarin interaction evidence
  description: A small randomized crossover trial found no clear CoQ10 effect on warfarin dosage, while NIH/NCCIH still lists warfarin and insulin as possible interaction contexts.
  sourceId: S33
- title: Pregnancy and organ impairment
  description: A pregnancy trial and regulatory safety summaries do not establish safety in all pregnancy, renal, or hepatic contexts; advanced impairment remains an evidence gap.
  sourceId: S34
- title: Short-term tolerability
  description: Reported adverse effects are usually mild gastrointestinal upset or insomnia; pharmacovigilance and long-term data remain limited.
  sourceId: S39
```

## Claims

```yaml
- id: coq10-heart-failure
  assertion: CoQ10 improves heart-failure outcomes
  relation: evidence-boundary
  participants:
    - entityId: substance:coenzyme-q10
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Q-SYMBIO reported a favorable composite signal, but replication and review certainty remain limited.
  sourceIds:
    - S4
    - S6
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: One trial cannot establish universal benefit; populations and background therapy matter.
- id: coq10-sams
  assertion: CoQ10 treats statin myalgia
  relation: evidence-boundary
  participants:
    - entityId: substance:coenzyme-q10
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: "Evidence is conflicting: a confirmed-rechallenge trial was null while a smaller water-soluble trial was positive."
  sourceIds:
    - S9
    - S12
    - S14
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulation, phenotype, and small-study heterogeneity limit certainty.
- id: coq10-cognition
  assertion: CoQ10 is a general cognitive enhancer
  relation: evidence-boundary
  participants:
    - entityId: substance:coenzyme-q10
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Short studies have not established broad healthy-person cognitive benefit.
  sourceIds:
    - S24
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Domain-specific endpoints and small samples do not support a general claim.
```

## Interactions

```yaml
- id: warfarin
  name: Warfarin
  otherSlug: null
  summary: Small randomized evidence found no clear dosage effect, but official safety summaries still flag a possible interaction context.
  sourceId: S33
  context: Warfarin crossover trial and NCCIH safety summary
- id: insulin
  name: Insulin and glucose-lowering therapy
  otherSlug: null
  summary: NCCIH lists insulin as a possible interaction context; controlled clinical magnitude is not established.
  sourceId: S39
  context: Official safety summary
- id: cancer-treatment
  name: Some cancer treatments
  otherSlug: null
  summary: NCCIH cautions that CoQ10 may be incompatible with some cancer treatments; specific pairwise evidence is limited.
  sourceId: S39
  context: Official safety summary
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: Ubiquinol is superior to ubiquinone to enhance Coenzyme Q10 status in older men
  authors: Zhang Y, Liu J, Chen XQ, Chen CYO
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30302465/
  kind: Randomized crossover study
  insight: Ubiquinol increased plasma CoQ10 more strongly in older men, with variable individual responses.
  limitation: Plasma exposure does not establish greater clinical benefit.
  funding: Unknown in retrieved publication record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: "Direct source link: https://doi.org/10.1039/c8fo00971f"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1039/c8fo00971f
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S3
  title: "Direct source link: https://clinicaltrials.gov/study/NCT03020680"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT03020680
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S4
  title: "The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO"
  authors: Mortensen SA, Rosenfeldt F, Kumar A, et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25282031/
  kind: Randomized double-blind trial
  insight: Q-SYMBIO reported a favorable composite morbidity/mortality signal with 300 mg/day.
  limitation: Single trial and later review uncertainty limit generalization.
  funding: Unknown in retrieved record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown disclosure.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: "Direct source link: https://doi.org/10.1016/j.jchf.2014.06.008"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.jchf.2014.06.008
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S6
  title: "Coenzyme Q10 to manage chronic heart failure with a reduced ejection fraction: a systematic review and economic evaluation"
  authors: Claxton L, Simmonds M, Beresford L, et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35076012/
  kind: Systematic review and economic evaluation
  insight: Reviewed efficacy and cost-effectiveness evidence for chronic heart failure.
  limitation: Heterogeneous trials and incomplete author-disclosure extraction.
  funding: NIHR Health Technology Assessment programme.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosure incompletely extracted.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: "Direct source link: https://doi.org/10.3310/KVOU6959"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.3310/KVOU6959
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S8
  title: "Direct source link: https://www.journalslibrary.nihr.ac.uk/hta/KVOU6959"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.journalslibrary.nihr.ac.uk/hta/KVOU6959
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S9
  title: A randomized trial of coenzyme Q10 in patients with confirmed statin myopathy
  authors: Taylor BA, Lorson L, White CM, Thompson PD
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25545331/
  kind: Randomized statin-rechallenge trial
  insight: 600 mg/day ubiquinol did not improve symptoms or performance despite increased serum CoQ10.
  limitation: Short duration and product-supplier involvement.
  funding: Unknown; matching softgels supplied by Tishcon Corporation.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Financial disclosure unknown; product supplier involved.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: "Direct source link: https://doi.org/10.1016/j.atherosclerosis.2014.12.016"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.atherosclerosis.2014.12.016
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S11
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01140308"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01140308
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Coenzyme Q10 supplementation decreases statin-related mild-to-moderate muscle symptoms
  authors: Skarlovnik A, Janić M, Lunder M, Turk M, Šabovič M
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25375075/
  kind: Randomized clinical study
  insight: Water-soluble CoQ10 50 mg twice daily reduced reported muscle symptoms in a small trial.
  limitation: Small study and product-specific formulation.
  funding: Unknown/not clearly disclosed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: "Direct source link: https://doi.org/10.12659/MSM.890777"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.12659/MSM.890777
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S14
  title: "Effects of coenzyme Q10 supplementation on myopathy in statin-treated patients: a systematic review and meta-analysis"
  authors: Kovacic S, Habicht SD, Eckert GP
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/41158831/
  kind: Systematic review and meta-analysis
  insight: Borderline pooled pain improvement with extreme heterogeneity.
  limitation: Results unstable to study selection and formulation differences.
  funding: Society for Applied Vitamin Research.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors reported no competing interests.
  conflictOfInterestStatus: not-assessed
- id: S15
  title: "Direct source link: https://doi.org/10.1017/jns.2025.10043"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1017/jns.2025.10043
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S16
  title: "Efficacy of coenzyme Q10 in migraine prophylaxis: a randomized controlled trial"
  authors: Sándor PS, Di Clemente L, Coppola G, et al.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15728298/
  kind: Randomized controlled trial
  insight: CoQ10 100 mg three times daily was assessed for migraine prophylaxis.
  limitation: Small trial and limited replication.
  funding: Non-U.S.-government support indexed; exact agency unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S17
  title: "Direct source link: https://doi.org/10.1212/01.WNL.0000151975.03598.ED"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1212/01.WNL.0000151975.03598.ED
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S18
  title: Coenzyme Q10 supplementation for prophylaxis in adult patients with migraine—a meta-analysis
  authors: Sazali S, Badrin S, Norhayati MN, Idris NS
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33402403/
  kind: Meta-analysis
  insight: Pooled evidence for migraine prophylaxis remains limited and heterogeneous.
  limitation: Small underlying trials and uncertain funding.
  funding: Not established in retrieved record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: None declared.
  conflictOfInterestStatus: not-assessed
- id: S19
  title: "Direct source link: https://doi.org/10.1136/bmjopen-2020-039358"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1136/bmjopen-2020-039358
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S20
  title: Coenzyme Q10 supplementation and exercise-induced oxidative stress in humans
  authors: Ostman B, Sjödin A, Michaëlsson K, Byberg L
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22079391/
  kind: Human exercise study
  insight: Assessed exercise-induced oxidative stress after CoQ10 supplementation.
  limitation: Exercise surrogate endpoints and limited sample.
  funding: Non-U.S.-government support indexed; exact funder unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S21
  title: "Direct source link: https://doi.org/10.1016/j.nut.2011.07.010"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.nut.2011.07.010
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S22
  title: Antifatigue effects of coenzyme Q10 during physical fatigue
  authors: Mizuno K, Tanaka M, Nozaki S, et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18272335/
  kind: Human fatigue study
  insight: Assessed fatigue-related outcomes after CoQ10 exposure.
  limitation: Short study and subjective or surrogate endpoints.
  funding: Non-U.S.-government support indexed; precise source unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S23
  title: "Direct source link: https://doi.org/10.1016/j.nut.2007.12.007"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.nut.2007.12.007
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S24
  title: "Effect of Ubiquinol on Cognitive Function, Blood Pressure, Arterial Stiffness, and Biomarkers of Oxidative Stress and Inflammation in the Elderly: A Randomized Trial"
  authors: Nankivell MC, Rosenfeldt F, Reddan JM, et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42510537/
  kind: Randomized trial
  insight: Assessed cognition, vascular measures, and oxidative-stress biomarkers in older adults.
  limitation: Short study; funding and COI not established in retrieved record.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S25
  title: "Direct source link: https://doi.org/10.3390/antiox15070806"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.3390/antiox15070806
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S26
  title: Bioavailability of coenzyme Q10 supplements depends on carrier lipids and solubilization
  authors: López-Lluch G, Del Pozo-Cruz J, Sánchez-Cuesta A, et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30153575/
  kind: Human formulation study
  insight: Carrier lipids and solubilization materially changed CoQ10 exposure.
  limitation: Bioavailability does not establish clinical superiority.
  funding: Unknown in retrieved record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S27
  title: "Direct source link: https://doi.org/10.1016/j.nut.2018.05.020"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.nut.2018.05.020
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S28
  title: Effect on absorption and oxidative stress of different oral Coenzyme Q10 dosages and intake strategy in healthy men
  authors: Singh RB, Niaz MA, Kumar A, et al.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16873950/
  kind: Randomized human absorption study
  insight: Dose splitting and formulation changed serum CoQ10 exposure.
  limitation: Healthy-men study and named commercial softgel.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown; named product involvement.
  conflictOfInterestStatus: not-assessed
- id: S29
  title: "Direct source link: https://doi.org/10.1002/biof.5520250127"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1002/biof.5520250127
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S30
  title: Pharmacokinetic study of deuterium-labelled coenzyme Q10 in man
  authors: Tomono Y, Hasegawa J, Seki T, et al.
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3781673/
  kind: Human pharmacokinetic study
  insight: Tracer study reported mean terminal half-life 33.2 ± 5.3 hours.
  limitation: Older small study; modern disclosure details unavailable.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S31
  title: "Coenzyme Q10 improves blood pressure and glycaemic control: a controlled trial in subjects with type 2 diabetes"
  authors: Hodgson JM, Watts GF, Playford DA, et al.
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12428181/
  kind: Controlled clinical trial
  insight: Assessed blood pressure and glycemic-control endpoints.
  limitation: Disease-specific trial; not healthy enhancement evidence.
  funding: Australian NHMRC.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosure unknown.
  conflictOfInterestStatus: not-assessed
- id: S32
  title: "Direct source link: https://doi.org/10.1038/sj.ejcn.1601464"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1038/sj.ejcn.1601464
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S33
  title: Effect of Coenzyme Q10 and Ginkgo biloba on warfarin dosage in patients on long-term warfarin treatment
  authors: Engelsen J, Nielsen JD, Hansen KFW
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12772396/
  kind: Randomized double-blind crossover trial
  insight: Assessed CoQ10 and Ginkgo effects on warfarin dosage.
  limitation: Small interaction study.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S34
  title: Coenzyme Q10 supplementation during pregnancy reduces the risk of pre-eclampsia
  authors: Teran E, Hernandez I, Nieto B, et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19154996/
  kind: Pregnancy clinical trial
  insight: Assessed pre-eclampsia risk with CoQ10 supplementation.
  limitation: Mixed academic and industry collaborators; general pregnancy safety remains limited.
  funding: FUNDACYT, Universidad Central del Ecuador, and Jarrow Formulas collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author financial COI unknown.
  conflictOfInterestStatus: not-assessed
- id: S35
  title: "Direct source link: https://doi.org/10.1016/j.ijgo.2008.11.033"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.ijgo.2008.11.033
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S36
  title: "Direct source link: https://clinicaltrials.gov/study/NCT00300937"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00300937
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S37
  title: "The effects of coenzyme Q10 supplementation on glycemic control in diabetic and non-diabetic individuals: a systematic review and meta-analysis"
  authors: Collares LDN, Messenburger GP, Nuñez FF, Pieniz S
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41630501/
  kind: Systematic review and meta-analysis
  insight: Pooled glycemic-control evidence across diabetic and non-diabetic participants.
  limitation: Heterogeneous studies and unknown funding.
  funding: Unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Unknown.
  conflictOfInterestStatus: not-assessed
- id: S38
  title: "Direct source link: https://doi.org/10.1080/10408398.2026.2624477"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1080/10408398.2026.2624477
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S39
  title: Coenzyme Q10
  authors: National Center for Complementary and Integrative Health, NIH
  year: 2026
  url: https://www.nccih.nih.gov/health/coenzyme-q10
  kind: Official safety information
  insight: Summarizes mild adverse effects and possible warfarin, insulin, and cancer-treatment interactions.
  limitation: Institutional safety summary rather than a comparative efficacy trial.
  funding: U.S. federal government.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as federal source.
  conflictOfInterestStatus: not-assessed
- id: S40
  title: Spontaneously reported adverse reactions in association with complementary and alternative medicine substances in Sweden
  authors: Jacobsson I, Jönsson AK, Gerdén B, Hägg S
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19650152/
  kind: Pharmacovigilance study
  insight: Analyzed spontaneously reported adverse reactions in Swedish regulatory data.
  limitation: Spontaneous reports cannot estimate incidence or causality reliably.
  funding: Non-U.S.-government support indexed; exact source unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author disclosures incomplete.
  conflictOfInterestStatus: not-assessed
- id: S41
  title: "Direct source link: https://doi.org/10.1002/pds.1818"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1002/pds.1818
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
[]
```
