---
slug: urolithin-a
name: Urolithin A
subtitle: Gut microbiome-derived ellagitannin metabolite studied as a direct oral mitochondrial-health intervention
aliases:
  - Urolithin A
  - UA
  - UroA
  - 3,8-Dihydroxybenzo[c]chromen-6-one
  - Mitopure
formula: C13H8O4
molecularWeight: 228.20 g/mol
pubchemCid: 5488186
smiles: C1=CC2=C(C=C1O)C(=O)OC3=C2C=CC(=C3)O
category: postbiotic metabolite
tags: []
accent: "#7C3AED"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Approximately 24 hours, publication-level statement
  low: null
  high: null
  context: NOURISH cites approximately 24 hours for generic UA and 3–4 days for elimination, but sparse analyte-specific sampling does not establish a universal parent or conjugate terminal half-life.
  sourceId: singh-2022-bioavailability
  observationId: ua-direct-vs-precursor
kinetics:
  onset: Not established
  peak: UA-glucuronide highest at sampled 6-hour point after direct 500 mg dosing
  duration: UA-glucuronide remained elevated at 24 hours; generic elimination described over 3–4 days
  bioavailability: Direct UA produced more than sixfold higher glucuronide exposure than pomegranate juice in NOURISH
  metabolism: Extensive phase-II conjugation; parent UA, glucuronide, and sulfate detected
  sourceId: singh-2022-bioavailability
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

Urolithin A is a direct oral metabolite intervention designed to bypass variable gut-microbiome conversion. Human trials establish exposure and short-term tolerability, while muscle, immune, vascular, and exercise findings are endpoint-specific. The largest synthesis found a low-certainty, non-significant pooled 6-minute-walk result; no human longevity outcome is established. [andreux-2019-first-human][singh-2022-bioavailability][liu-2022-energize][dao-2026-meta]

## Description

Direct synthetic urolithin A and pomegranate-juice precursor exposure are different interventions. Product, dose, population, microbiome producer status, and sponsor context materially affect interpretation. The evidence below separates concentration/biomarker observations from functional outcomes and records Amazentis sponsorship where reported. [singh-2022-bioavailability][singh-2022-atlas][whitfield-2025-runners]

## Evidence note

Phase I tested 250–2,000 mg single doses and 250–1,000 mg/day for 28 days; later trials used 500 or 1,000 mg/day for 4–16 weeks. ENERGIZE, ATLAS, runner, immune and obesity trials reported null primary endpoints. Product trials were Amazentis-linked; the 2026 meta-analysis reported public funding and no commercial conflict. [andreux-2019-first-human][liu-2022-energize][singh-2022-atlas][dao-2026-meta]

## Doses

```yaml
- label: First-in-human single ascending dose
  amount: 250–2,000 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: Direct synthetic urolithin A
  formulation: Direct synthetic urolithin A
  route: oral
  frequency: single dose
  duration: Single administration
  population: Healthy sedentary older adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Phase I safety, tolerability, and PK cohorts; range is not a recommended dose.
  sourceId: andreux-2019-first-human
- label: First-in-human repeated dose
  amount: 250, 500, or 1,000 mg/day
  quantity: 250
  quantityMax: null
  unit: mg/day
  ingredient: Direct synthetic urolithin A
  formulation: Direct synthetic urolithin A
  route: oral
  frequency: once daily
  duration: 28 days
  population: Healthy sedentary older adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Discrete dose cohorts with mitochondrial-associated biomarkers.
  sourceId: andreux-2019-first-human
- label: NOURISH direct-UA challenge
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Mitopure powder in yogurt
  formulation: Mitopure powder in yogurt
  route: oral
  frequency: single dose
  duration: Single crossover period
  population: 100 healthy adults aged 18–80
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Compared with approximately 240 mL pomegranate juice containing precursors; direct UA produced higher conjugate exposure.
  sourceId: singh-2022-bioavailability
- label: ENERGIZE
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Urolithin A supplement
  formulation: Urolithin A supplement
  route: oral
  frequency: once daily
  duration: 4 months
  population: Adults aged 65–90
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized placebo-controlled trial of muscle endurance, 6-minute walk, ATP production, and biomarkers.
  sourceId: liu-2022-energize
- label: ATLAS
  amount: 500 or 1,000 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Mitopure
  formulation: Mitopure
  route: oral
  frequency: once daily
  duration: 120 days
  population: Middle-aged adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Peak-power primary endpoint was null; selected hamstring and aerobic signals were secondary.
  sourceId: singh-2022-atlas
- label: Resistance-trained athletes
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Urolithin A supplement
  formulation: Urolithin A supplement
  route: oral
  frequency: once daily
  duration: 8 weeks
  population: Male resistance-trained athletes
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Selected MVC/fatigue findings; 1RM endpoint was null.
  sourceId: zhao-2024-athletes
- label: Trained runners
  amount: 1,000 mg/day
  quantity: 1000
  quantityMax: null
  unit: mg/day
  ingredient: Urolithin A supplement
  formulation: Urolithin A supplement
  route: oral
  frequency: once daily
  duration: 4 weeks
  population: Highly trained male distance runners
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: No 3,000-m or mitochondrial-function primary benefit; recovery signals exploratory.
  sourceId: whitfield-2025-runners
```

## Pharmacokinetics

```yaml
- id: ua-direct-vs-precursor
  analyte: Urolithin A glucuronide
  route: oral
  formulation: 500 mg direct UA versus pomegranate juice
  population: 100 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Direct UA produced more than sixfold higher incremental glucuronide exposure than juice; sparse 0-, 6-, and 24-hour sampling does not establish a terminal half-life.
  sourceId: singh-2022-bioavailability
  modelEligible: false
- id: ua-six-hour
  analyte: Urolithin A and conjugates
  route: oral
  formulation: Direct UA
  population: Healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Mean glucuronide concentration was highest at the 6-hour sampled point and remained elevated at 24 hours; exact Tmax and terminal half-life were not established.
  sourceId: singh-2022-bioavailability
  modelEligible: false
- id: ua-microbiome
  analyte: Urolithin metabolites
  route: oral
  formulation: Pomegranate ellagitannin precursors
  population: Healthy adults with variable microbiome conversion
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Producer status varied after precursor exposure; direct UA bypassed this conversion step.
  sourceId: singh-2022-bioavailability
  modelEligible: false
```

## Modifiers

```yaml
- label: Microbiome producer status
  effect: Variable
  detail: Pomegranate precursors require gut conversion; direct UA produced more consistent circulating conjugate exposure.
  sourceId: singh-2022-bioavailability
  observationId: ua-direct-vs-precursor
  factorType: other
  direction: variable
- label: Dose and product
  effect: Variable
  detail: 500 and 1,000 mg/day Mitopure trials used product-specific preparations; results cannot be transferred to pomegranate juice or dietary ellagitannins.
  sourceId: singh-2022-atlas
  observationId: ua-direct-vs-precursor
  factorType: other
  direction: variable
- label: Population and exclusions
  effect: Variable
  detail: Trials often excluded severe renal, hepatic, or other disease and were conducted in selected older adults, athletes, or healthy volunteers.
  sourceId: liu-2022-energize
  observationId: ua-direct-vs-precursor
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Mitochondrial and cellular-health biomarkers
  direction: Increased
  evidence: Human research
  description: First-in-human and immune studies reported selected mitochondrial, fatty-acid-oxidation, or cellular-health biomarker changes; these are surrogate endpoints.
  sourceId: andreux-2019-first-human
  population: Healthy sedentary older adults and healthy adults
  exposure: 250–1,000 mg/day
  instrument: Blood and muscle biomarker panels
  magnitude: null
- conceptId: perception
  name: Muscle endurance and fatigue resistance
  direction: Variable
  evidence: Human research
  description: ENERGIZE reported a month-2 fatigue-resistance signal that was not maintained at month 4; ATLAS and athlete studies reported selected secondary signals.
  sourceId: liu-2022-energize
  population: Older adults and trained athletes
  exposure: 500–1,000 mg/day
  instrument: Endurance and fatigue tests
  magnitude: null
- conceptId: perception
  name: Recovery and soreness
  direction: Variable
  evidence: Human research
  description: Runner and soccer studies reported exploratory recovery or CK/perceived-exertion signals alongside null primary performance endpoints.
  sourceId: whitfield-2025-runners
  population: Highly trained runners and soccer players
  exposure: 1,000 mg/day
  instrument: Recovery, CK, and perceived exertion
  magnitude: null
- conceptId: perception
  name: Cerebrovascular surrogate
  direction: Variable
  evidence: Human research
  description: An obesity trial reported a cerebrovascular hemodynamic change while task performance remained null.
  sourceId: dr-urolithin-a-s31
  population: Adults with obesity
  exposure: 1,000 mg/day for 4 weeks
  instrument: Cerebrovascular hemodynamics and task performance
  magnitude: null
```

## Outcomes

```yaml
- conceptId: fatigue-severity
  name: Six-minute walk distance
  direction: Variable
  evidence: Human research
  description: The 2026 meta-analysis pooled +17.03 m (95% CI −5.33 to 39.40; P=.135; I²=0), graded low certainty.
  sourceId: dao-2026-meta
  population: Adults across five randomized trials
  exposure: 500–1,000 mg/day
  instrument: 6-minute walk test
  magnitude: null
- conceptId: fatigue-severity
  name: Peak power and strength
  direction: Variable
  evidence: Human research
  description: ATLAS had a null peak-power primary endpoint but selected hamstring-torque improvements; resistance-athlete 1RM was null.
  sourceId: singh-2022-atlas
  population: Middle-aged adults and resistance-trained men
  exposure: 500–1,000 mg/day
  instrument: Peak power, torque, and 1RM
  magnitude: null
- conceptId: fatigue-severity
  name: Running performance
  direction: Variable
  evidence: Human research
  description: A 4-week runner trial found no 3,000-m or mitochondrial-function primary benefit; recovery measures were exploratory.
  sourceId: whitfield-2025-runners
  population: Highly trained male distance runners
  exposure: 1,000 mg/day
  instrument: 3,000-m time trial and mitochondrial function
  magnitude: null
- conceptId: attention
  name: Heart-failure outcomes
  direction: Variable
  evidence: Human research
  description: A small HFrEF crossover study found no cardiac, glucose, or CRP benefit; HDL changed in isolation.
  sourceId: dr-urolithin-a-s28
  population: 10 adults with HFrEF
  exposure: 500 mg twice daily for 4 weeks
  instrument: Cardiac, glucose, CRP, HDL endpoints
  magnitude: null
- conceptId: mitochondrial-biomarkers
  name: Immune and metabolic biomarkers
  direction: Variable
  evidence: Human research
  description: A randomized immune-aging study changed immune-cell or fatty-acid-oxidation biomarkers without a clinical aging outcome.
  sourceId: denk-2025-immune
  population: 50 adults
  exposure: 1,000 mg/day for 4 weeks
  instrument: Immune-cell and metabolic biomarkers
  magnitude: null
```

## Mechanisms

```yaml
- title: Mitophagy and mitochondrial quality control
  description: Preclinical work supports a mitophagy rationale; human trials measure biomarkers rather than proving increased mitophagic flux in target tissues.
  sourceId: ryu-2016-mitophagy
- title: Microbiome bypass
  description: Direct UA supplementation bypasses variable conversion of ellagitannin precursors by gut microbiota.
  sourceId: singh-2022-bioavailability
```

## Cautions

```yaml
- title: Low-certainty functional evidence
  description: The pooled 6-minute-walk estimate was not statistically significant and was graded low certainty.
  sourceId: dao-2026-meta
- title: Industry sponsorship
  description: Most product trials were Amazentis-linked and several disclose sponsor employees or industry relationships; this is relevant to interpretation.
  sourceId: whitfield-2025-runners
- title: Renal and hepatic exclusions
  description: Trials and registries commonly excluded severe renal or hepatic disease; dedicated safety evidence in these groups is lacking.
  sourceId: dr-urolithin-a-s16
- title: Renal-calculus signal
  description: A small 2026 case series found urolithin A in kidney-stone composition, but direct supplement causality and incidence are unknown.
  sourceId: dr-urolithin-a-s32
```

## Claims

```yaml
- id: ua-muscle
  assertion: Urolithin A improves muscle performance
  relation: evidence-boundary
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Some secondary endurance or strength signals exist, but primary endpoints and pooled 6-minute-walk evidence are inconsistent.
  sourceIds:
    - liu-2022-energize
    - singh-2022-atlas
    - dao-2026-meta
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small selected trials, surrogate endpoints, and low-certainty meta-analysis.
- id: ua-longevity
  assertion: Urolithin A extends human lifespan
  relation: evidence-boundary
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: No human longevity endpoint has been demonstrated.
  sourceIds:
    - ryu-2016-mitophagy
    - dr-urolithin-a-s30
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical lifespan findings cannot be transferred to human supplementation.
- id: ua-mitophagy
  assertion: Urolithin A activates human mitophagy
  relation: evidence-boundary
  participants:
    - entityId: substance:urolithin-a
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Biomarker changes are compatible with the mechanism but do not establish target engagement or clinical benefit.
  sourceIds:
    - andreux-2019-first-human
    - denk-2025-immune
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human tissue flux measurements and clinical mediation are limited.
```

## Interactions

```yaml
- id: ua-microbiome
  name: Ellagitannin precursor conversion
  otherSlug: null
  summary: Pomegranate juice and dietary precursors require microbiome conversion and are not equivalent to direct UA dosing.
  sourceId: singh-2022-bioavailability
  context: NOURISH crossover
- id: ua-renal-hepatic
  name: Renal or hepatic impairment
  otherSlug: null
  summary: Dedicated coadministration and impairment interaction data are limited because severe disease was commonly excluded.
  sourceId: dr-urolithin-a-s16
  context: Clinical-trial eligibility
- id: ua-drugs
  name: Prescription-drug combinations
  otherSlug: null
  summary: No validated human drug-interaction profile was established in the cited trials; mechanistic pathway overlap remains uncertain.
  sourceId: dr-urolithin-a-s15
  context: Registry and trial evidence
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem-urolithin-a
  title: Urolithin A
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5488186
  kind: chemical database record
  insight: Authoritative chemical identity record supporting PubChem CID, formula, molecular weight and canonical structure information.
  limitation: Chemical identity database; does not establish human efficacy or clinical safety.
  funding: Not assessed; government chemical database record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: ryu-2016-mitophagy
  title: Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents
  authors: Ryu D, et al.
  year: 2016
  url: https://www.nature.com/articles/nm.4132
  kind: preclinical mechanistic study
  insight: Established UA-induced mitophagy and functional effects in C. elegans and rodent muscle models.
  limitation: Predominantly preclinical evidence; lifespan and muscle effects cannot be directly extrapolated to humans.
  pmid: "27400265"
  doi: 10.1038/nm.4132
  funding: Funding details were not fully reassessed from the primary declaration during this run.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Primary conflict declaration was not fully reassessed during this run.
  conflictOfInterestStatus: not-assessed
- id: heilman-2017-safety
  title: Safety assessment of Urolithin A, a metabolite produced by the human gut microbiota upon dietary intake of plant derived ellagitannins and ellagic acid
  authors: Heilman J, Andreux P, Tran N, Rinsch C, Blanco-Bose W
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28757461/
  kind: preclinical toxicology and safety assessment
  insight: Genotoxicity and repeated-dose toxicology testing did not identify target-organ toxicity at the highest tested rat exposures and supported subsequent regulatory safety assessment.
  limitation: Animal toxicology cannot be converted into a human therapeutic dose or long-term human safety guarantee.
  pmid: "28757461"
  doi: 10.1016/j.fct.2017.07.050
  funding: The underlying data were associated with commercial development of UA; complete publication funding wording was not independently reassessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author affiliations include Amazentis-associated investigators; the exact primary conflict statement was not independently reassessed.
  conflictOfInterestStatus: not-assessed
- id: fda-grn-791
  title: GRN No. 791 — Urolithin A
  authors: U.S. Food and Drug Administration
  year: 2018
  url: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=791&order=DESC&search=13&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  kind: official regulatory record
  insight: FDA lists Amazentis SA as notifier and records a December 20, 2018 'FDA has no questions' response for specified food uses of urolithin A.
  limitation: GRAS notice status concerns specified food uses and is not FDA drug approval or proof of clinical efficacy.
  funding: Not applicable to a regulatory database record; classified as not-assessed under the article schema.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a regulatory database record; classified as not-assessed under the article schema.
  conflictOfInterestStatus: not-assessed
- id: andreux-2019-first-human
  title: The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans
  authors: Pénélope A Andreux, William Blanco-Bose, Dongryeol Ryu, Frédéric Burdet, Mark Ibberson, Patrick Aebischer, Johan Auwerx, Anurag Singh, Chris Rinsch
  year: 2019
  url: https://www.nature.com/articles/s42255-019-0073-4
  kind: first-in-human randomized phase I study
  insight: Single and repeated oral UA was bioavailable and had a favorable short-term safety profile; 500 and 1,000 mg/day for 28 days altered plasma acylcarnitines and skeletal-muscle mitochondrial gene expression.
  limitation: Small early-phase study emphasizing safety and molecular biomarkers rather than clinical efficacy; detailed analyte-specific PK values were in supplementary information not independently retrievable in this review.
  pmid: "32694802"
  doi: 10.1038/s42255-019-0073-4
  funding: Amazentis SA was the clinical-study sponsor; the publication also acknowledged grant support from Fondation Suisse de Recherche sur les Maladies Musculaires and Fondation Marcel Levaillant.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: A.S., P.A.A., W.B. and C.R. were Amazentis employees; P.A. and C.R. were board members; J.A. and P.A. were members of the Amazentis scientific advisory board.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nature.com/articles/s42255-019-0073-4
- id: singh-2022-bioavailability
  title: Direct supplementation with Urolithin A overcomes limitations of dietary exposure and gut microbiome variability in healthy adults to achieve consistent levels across the population
  authors: Anurag Singh, Davide D'Amico, Pénélope A Andreux, Gillian Dunngalvin, Timo Kern, William Blanco-Bose, Johan Auwerx, Patrick Aebischer, Chris Rinsch
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8821002/
  kind: randomized crossover bioavailability study
  insight: Among 100 healthy adults, direct 500 mg UA produced far greater and more consistent circulating exposure than pomegranate juice; only a subset efficiently generated UA from dietary precursors.
  limitation: Open-label acute bioavailability study; it establishes exposure differences, not comparative clinical benefit of UA versus pomegranate.
  pmid: "34117375"
  doi: 10.1038/s41430-021-00950-1
  funding: Amazentis SA was the registered lead sponsor of NCT04160312.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The publication disclosed Amazentis employment and leadership/advisory relationships among several authors.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8821002/
- id: liu-2022-energize
  title: "Effect of Urolithin A Supplementation on Muscle Endurance and Mitochondrial Health in Older Adults: A Randomized Clinical Trial"
  authors: Sophia Liu, Davide D'Amico, Eric Shankland, Saakshi Bhayana, Jose M Garcia, Patrick Aebischer, Chris Rinsch, Anurag Singh, David J Marcinek
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8777576/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day for four months improved selected muscle-endurance and plasma biomarker measures, while 6-minute-walk distance and maximal ATP-production primary outcomes were not significantly better than placebo.
  limitation: Only 66 participants; all participants were White and approximately three quarters were women; positive findings were predominantly secondary outcomes.
  pmid: "35050355"
  doi: 10.1001/jamanetworkopen.2021.44279
  funding: Research was supported by Amazentis SA; the funder was reported to have roles in study design/conduct, data handling and analysis/interpretation, manuscript activities and the decision to submit.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Disclosures included Amazentis employment, company leadership/shareholding, and UA-related issued or pending patents; outside relationships were also disclosed by some investigators.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8777576/
- id: singh-2022-atlas
  title: Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults
  authors: Anurag Singh, Davide D'Amico, Pénélope A Andreux, Andréane M Fouassier, William Blanco-Bose, Mal Evans, Patrick Aebischer, Johan Auwerx, Chris Rinsch
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Selected hamstring-strength measures improved with 500 and 1,000 mg/day UA, and muscle molecular analyses showed mitochondrial/mitophagy-associated changes; the prespecified peak-power endpoint was not significantly improved.
  limitation: Proof-of-concept trial with 88 randomized participants, multiple exploratory/secondary outcomes and some favorable changes driven partly by deterioration in placebo; several whole-body comparisons did not reach significance.
  pmid: "35584623"
  doi: 10.1016/j.xcrm.2022.100633
  funding: The study was funded by Amazentis SA.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Multiple authors were Amazentis employees; P.A. and C.R. were board members and J.A./P.A. had scientific-advisory relationships with the company.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/
- id: zhao-2024-athletes
  title: "Assessment of Urolithin A effects on muscle endurance, strength, inflammation, oxidative stress, and protein metabolism in male athletes with resistance training: an 8-week randomized, double-blind, placebo-controlled study"
  authors: Haotian Zhao, Hongkang Zhu, Hezhang Yun, Jingqi Liu, Ge Song, Jin Teng, Dixin Zou, Naiyan Lu, Chang Liu
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11536656/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: In 20 resistance-trained men, 1,000 mg/day improved MVIC and repetitions to failure versus placebo, whereas bench-press and squat 1RM changes were not significant.
  limitation: Very small single-sex study; multiple endpoints and no reported confidence intervals for the principal between-group findings.
  pmid: "39487653"
  doi: 10.1080/15502783.2024.2419388
  funding: Supported by the 14th Five-Year Education Plan of Jiangsu Province (C/2022/01/78).
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors explicitly reported no potential conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11536656/
- id: whitfield-2025-runners
  title: Evaluating the Impact of Urolithin A Supplementation on Running Performance, Recovery, and Mitochondrial Biomarkers in Highly Trained Male Distance Runners
  authors: Jamie Whitfield, Alannah K A McKay, Nicolin Tee, Rachel McCormick, Aimee Morabito, Leonidas G Karagounis, Andréane M Fouassier, Davide D'Amico, Anurag Singh, Louise M Burke, John A Hawley
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12628386/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day during a four-week altitude camp reduced selected muscle-damage/recovery signals and altered muscle proteomic pathways but did not significantly improve 3,000 m time-trial performance.
  limitation: Only 42 male elite runners; time-trial and biopsy analyses used still smaller subsets and concurrent altitude training strongly influenced physiological adaptation.
  pmid: "40839339"
  doi: 10.1007/s40279-025-02292-5
  funding: Research funding from Amazentis SA was disclosed to senior investigators.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The paper disclosed Amazentis employees and other company-related support or relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12628386/
- id: denk-2025-immune
  title: "Effect of the mitophagy inducer urolithin A on age-related immune decline: a randomized, placebo-controlled trial"
  authors: Dominic Denk, Anurag Singh, Herbert G Kasler, Davide D'Amico, Julia Rey, Lucía Alcober-Boquet, Johanna M Gorol, Christoph Steup, Ritesh Tiwari, Ryan Kwok, Rafael J Argüello, Julie Faitg, Kathrin Sprinzl, Stefan Zeuzem, Valentina Nekljudova, Sibylle Loibl, Eric Verdin, Chris Rinsch, Florian R Greten
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12618261/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: 1,000 mg/day for four weeks altered CD8 T-cell phenotype and fatty-acid-oxidation capacity and changed additional immune-cell functional and transcriptional endpoints.
  limitation: Short 50-person trial focused on cellular immune phenotypes and ex-vivo functions rather than infection rates or other patient-centered clinical endpoints.
  pmid: "41174221"
  doi: 10.1038/s43587-025-00996-x
  funding: Amazentis SA funded the study and supplied the investigational product.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Disclosures included Amazentis employment and company leadership; additional consulting, travel and patent-related interests were reported by individual authors.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12618261/
- id: dao-2026-meta
  title: Effects of Urolithin A supplementation on muscle health outcomes in humans from randomized controlled trials
  authors: Tam Dao, Thanh T Nguyen, Karim Gariani, Hyun Jin Kim, Dongryeol Ryu
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13440176/
  kind: systematic review and meta-analysis
  insight: Five RCTs with 236 participants were identified. Pooled 6-minute-walk improvement was +17.03 m (95% CI -5.33 to 39.40) and statistically inconclusive; GRADE certainty was low, while other outcomes were too heterogeneous for quantitative pooling.
  limitation: Only two studies contributed to the pooled 6-minute-walk analysis and the included populations, outcomes and training states were heterogeneous.
  pmid: "42559151"
  doi: 10.3389/fnut.2026.1834344
  funding: The full funding declaration was not independently extracted during this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The full conflict-of-interest declaration was not independently extracted during this review.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC13440176/
- id: patent-us10028932
  title: Compositions and methods for improving mitochondrial function and treating neurodegenerative diseases and cognitive disorders
  authors: Amazentis SA (assignee); Christopher L. Rinsch et al. (inventors)
  year: 2018
  url: https://patents.google.com/patent/US10028932B2/en
  kind: patent
  insight: Amazentis-assigned patent family covering urolithin-related mitochondrial-function and therapeutic claims; representative of the commercial intellectual-property interests disclosed around UA research.
  limitation: A patent establishes claimed intellectual property, not clinical efficacy, regulatory approval or confirmation that every claim is valid in practice.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The patent itself documents inventor/assignee commercial interests rather than a journal conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: patent-us11020373
  title: Enhancing autophagy or increasing longevity by administration of urolithins or precursors thereof
  authors: Amazentis SA (assignee)
  year: 2021
  url: https://patents.google.com/patent/US11020373B2/en
  kind: patent
  insight: Amazentis patent covering claimed uses of urolithins or precursors in autophagy/longevity-related applications.
  limitation: Patent claims are not evidence that human longevity is increased.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Patent ownership represents a commercial interest but is not a clinical-study COI declaration.
  conflictOfInterestStatus: not-assessed
- id: patent-us10906883
  title: Process-scale synthesis of urolithin A
  authors: Amazentis SA (assignee); Wolfgang Skranc, George Yiannikouros, Alexander Trofimov, Zhixing Shan, Christopher Goss (inventors)
  year: 2021
  url: https://patents.google.com/patent/US10906883B2/en
  kind: patent
  insight: Patent covering scalable preparation of urolithin A, relevant to proprietary manufacturing and commercial supply rather than evidence of biological efficacy.
  limitation: Manufacturing intellectual property does not establish clinical effectiveness.
  funding: Not assessed for patent record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Patent ownership represents a commercial interest but is not a clinical-study COI declaration.
  conflictOfInterestStatus: not-assessed
- id: amazentis-manufacturer-2026
  title: Amazentis
  authors: Amazentis SA
  year: 2026
  url: https://www.amazentis.com/
  kind: manufacturer disclosure
  insight: Manufacturer source identifying Amazentis as the company behind proprietary Mitopure urolithin A and describing its commercial research and intellectual-property program.
  limitation: Commercial manufacturer source; marketing statements are not treated as independent efficacy evidence.
  funding: Corporate self-publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial manufacturer source with direct financial interest in Mitopure.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.amazentis.com/
- id: ec-urolithin-a-novel-food-application
  title: "Novel Food application: Urolithin A — Amazentis SA"
  authors: European Commission
  year: 2018
  url: https://food.ec.europa.eu/document/download/8f10d273-65cb-4450-85cb-4bf389d8670c_en?filename=novel-food_sum_ongoing-app_2018-0538.pdf
  kind: official regulatory application record
  insight: Official European Commission application summary documenting an Amazentis novel-food application for urolithin A submitted in 2018.
  limitation: An application record is not itself a final EU authorization; a final authorization was not established from the official material inspected in this research run.
  funding: Not applicable to regulatory record; classified as not-assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to regulatory record; classified as not-assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s1
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/32694802/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/32694802/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s2
  title: "Direct source link: https://doi.org/10.1038/s42255-019-0073-4"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1038/s42255-019-0073-4
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s3
  title: "Direct source link: https://clinicaltrials.gov/study/NCT02655393"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT02655393
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s4
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/34117375/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/34117375/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s5
  title: "Direct source link: https://doi.org/10.1038/s41430-021-00950-1"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1038/s41430-021-00950-1
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s6
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/35050355/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/35050355/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s7
  title: "Direct source link: https://doi.org/10.1001/jamanetworkopen.2021.44279"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/jamanetworkopen.2021.44279
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s8
  title: "Direct source link: https://clinicaltrials.gov/study/NCT03283462"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT03283462
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s9
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/35584623/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/35584623/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s10
  title: "Direct source link: https://doi.org/10.1016/j.xcrm.2022.100633"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.xcrm.2022.100633
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s11
  title: "Direct source link: https://clinicaltrials.gov/study/NCT03464500"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT03464500
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s12
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/39487653/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/39487653/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s13
  title: "Direct source link: https://doi.org/10.1080/15502783.2024.2419388"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1080/15502783.2024.2419388
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s14
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/38415449/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/38415449/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s15
  title: "Direct source link: https://doi.org/10.2174/0115748871279354240209101604"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.2174/0115748871279354240209101604
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s16
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/40839339/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/40839339/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s17
  title: "Direct source link: https://doi.org/10.1007/s40279-025-02292-5"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1007/s40279-025-02292-5
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s18
  title: "Direct source link: https://clinicaltrials.gov/study/NCT04783207"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT04783207
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s19
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/41174221/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41174221/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s20
  title: "Direct source link: https://doi.org/10.1038/s43587-025-00996-x"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1038/s43587-025-00996-x
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s21
  title: "Direct source link: https://clinicaltrials.gov/study/NCT05735886"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT05735886
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s22
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/41245402/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/41245402/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s23
  title: "Direct source link: https://doi.org/10.3389/fnut.2025.1674446"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.3389/fnut.2025.1674446
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s24
  title: "Direct source link: https://pubmed.ncbi.nlm.nih.gov/42853569/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42853569/
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s25
  title: "Direct source link: https://doi.org/10.1001/jamanetworkopen.2026.38047"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1001/jamanetworkopen.2026.38047
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s26
  title: "Direct source link: https://clinicaltrials.gov/study/NCT05921266"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT05921266
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s27
  title: Effects of Urolithin A supplementation on muscle health outcomes in humans from randomized controlled trials
  authors: Dao T, Nguyen TT, Gariani K, Kim HJ, Ryu D
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42559151/
  kind: Systematic review and meta-analysis
  insight: Five randomized trials and 236 participants; pooled 6-minute-walk effect was +17.03 m with 95% CI −5.33 to 39.40 and low certainty.
  limitation: Heterogeneous small trials and low GRADE certainty; no longevity endpoint.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s28
  title: Effects of Urolithin A supplementation on muscle health outcomes in humans from randomized controlled trials
  authors: Dao T, Nguyen TT, Gariani K, Kim HJ, Ryu D
  year: 2026
  url: https://doi.org/10.3389/fnut.2026.1834344
  kind: Systematic review and meta-analysis DOI record
  insight: DOI link for the 2026 pooled muscle-health analysis.
  limitation: Review-level evidence; pooled estimates remain low certainty.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s29
  title: "Direct source link: https://www.crd.york.ac.uk/PROSPERO/view/CRD420251270987"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.crd.york.ac.uk/PROSPERO/view/CRD420251270987
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s30
  title: "Targeting aging with urolithin A in humans: A systematic review"
  authors: Hodzic Kuerec A, Lim XK, Khoo AL, et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/39002645/
  kind: Systematic review
  insight: Reviews human urolithin A trials and evidence boundaries for aging-related outcomes.
  limitation: Heterogeneous short trials and no human longevity endpoint.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s31
  title: "Targeting aging with urolithin A in humans: A systematic review"
  authors: Hodzic Kuerec A, Lim XK, Khoo AL, et al.
  year: 2026
  url: https://doi.org/10.1016/j.arr.2024.102406
  kind: Systematic review DOI record
  insight: DOI link for the 2024 human urolithin A systematic review.
  limitation: Review-level synthesis with heterogeneous short trials.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s32
  title: "Urolithin A in kidney stones: a case series"
  authors: Best et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42058113/
  kind: Case series
  insight: Eight kidney-stone cases contained urolithin A in 5–80% of stone composition; direct supplement causality was not established.
  limitation: Small case series with no exposure or incidence denominator.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s33
  title: "Direct source link: https://doi.org/10.1016/j.ekir.2026.106515"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://doi.org/10.1016/j.ekir.2026.106515
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s34
  title: "Direct source link: https://www.fda.gov/food/food-ingredients-packaging/generally-recognized-safe-gras"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://www.fda.gov/food/food-ingredients-packaging/generally-recognized-safe-gras
  kind: Research source link
  insight: Direct source link preserved from the returned Deep Research bibliography.
  limitation: The capture did not recover a complete title, author list, funding, or disclosure statement for this link.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: dr-urolithin-a-s35
  title: "Direct source link: https://clinicaltrials.gov/"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/
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
  activity: Specified food uses under GRAS notice 791
  status: FDA no-questions response for specified food uses; not a drug or efficacy approval.
  sourceUrl: https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=791&order=DESC&search=13&set=GRASNotices&sort=GRN_No&startrow=1&type=basic
  asOf: 2018-12-20
- jurisdiction: European Union
  activity: Novel-food application
  status: Application and product authorization context do not establish clinical efficacy or longevity benefit.
  sourceUrl: https://food.ec.europa.eu/document/download/8f10d273-65cb-4450-85cb-4bf389d8670c_en?filename=novel-food_sum_ongoing-app_2018-0538.pdf
  asOf: 2018-01-01
```
