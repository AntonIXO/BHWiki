---
slug: pqq
name: pyrroloquinoline quinone
subtitle: Evidence-specific research record.
aliases:
  - pqq
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
  label: Not established
  low: null
  high: null
  context: Human PQQ terminal half-life was not established; acute serum peak was reported instead.
  sourceId: S5
  observationId: pqq-pk-acute
kinetics:
  onset: Not established
  peak: Serum peak about 2–3 hours after 0.2 mg/kg in a small crossover study
  duration: Not established
  bioavailability: Absolute bioavailability not established
  metabolism: Parent urinary recovery about 0.1% in the cited study
  sourceId: S5
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

Pyrroloquinoline quinone (PQQ) supplements generally provide the disodium salt. Small, short human studies at about 20–21.5 mg/day report selective cognitive or surrogate biomarker signals, while an open-label fatigue/sleep study and a controlled exercise trial do not establish broad functional benefit. Human pharmacokinetics and long-term safety remain limited. [S5][S6][S8][S10][S11]

## Description

PQQ disodium is a water-soluble quinone salt used in food supplements. Identity, hydrate state, and regulatory status are described by PubChem, USP, EFSA, FDA, and the EU novel-food act; these sources do not establish efficacy. [S1][S2][S3][S4][S14]

## Evidence note

Clinical evidence is small and product-specific: randomized studies enrolled about 20–64 participants for 12 weeks, often using manufacturer-linked products. Selective domain findings and prefrontal NIRS changes are surrogate signals; no trial establishes increased mitochondrial number, longevity, or disease treatment. Funding and affiliations are listed per source. [S6][S7][S8][S9][S11]

## Doses

```yaml
- label: Open-label stress/fatigue study
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Pyrroloquinoline quinone
  formulation: PQQ supplement
  route: oral
  frequency: once daily
  duration: 8 weeks
  population: 17 adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Open-label study of self-reported stress, fatigue, quality of life, and sleep.
  sourceId: S10
- label: Older-adult cognition RCT
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Pyrroloquinoline quinone
  formulation: BioPQQ disodium salt
  route: oral
  frequency: once daily
  duration: 12 weeks
  population: 41 healthy older adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized placebo-controlled trial; selective Stroop and Touch-M findings.
  sourceId: S6
- label: Prefrontal NIRS RCT
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Pyrroloquinoline quinone
  formulation: BioPQQ
  route: oral
  frequency: once daily
  duration: 12 weeks
  population: 20 healthy adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Randomized study of cerebral blood-flow and oxygen-metabolism surrogates.
  sourceId: S7
- label: Cognitrax RCT
  amount: 21.5 mg/day
  quantity: 21.5
  quantityMax: null
  unit: mg
  ingredient: Pyrroloquinoline quinone
  formulation: PQQ disodium salt
  route: oral
  frequency: once daily
  duration: 12 weeks
  population: 64 randomized; 58 completers
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Multiple Cognitrax-domain comparisons; small sample.
  sourceId: S8
- label: Exercise-training RCT
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: Pyrroloquinoline quinone
  formulation: PQQ supplement
  route: oral
  frequency: once daily
  duration: 6 weeks
  population: 23 untrained men
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Combined with endurance training; PGC-1α increased without performance or body-composition benefit.
  sourceId: S11
```

## Pharmacokinetics

```yaml
- id: pqq-pk-acute
  analyte: PQQ
  route: oral
  formulation: PQQ disodium salt
  population: 10 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: After 0.2 mg/kg, serum PQQ peaked at about 2–3 hours; only about 0.1% of dose was recovered as parent compound in urine. A validated terminal half-life and absolute bioavailability were not established.
  sourceId: S5
  modelEligible: false
- id: pqq-pk-regulatory
  analyte: PQQ and metabolites
  route: oral
  formulation: PQQ disodium salt
  population: Humans summarized by EFSA
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: EFSA identified incomplete human ADME and renal data; no universal human half-life can be inferred.
  sourceId: S2
  modelEligible: false
```

## Modifiers

```yaml
- label: Age and cognitive domain
  effect: Variable
  detail: Age-stratified and domain-specific findings differed across small cognition studies; no global enhancement pattern was established.
  sourceId: S6
  observationId: pqq-pk-acute
  factorType: other
  direction: variable
- label: Product and sponsor
  effect: Variable
  detail: BioPQQ and other branded preparations were used; manufacturer affiliations or commissioning were disclosed in several trials.
  sourceId: S8
  observationId: pqq-pk-acute
  factorType: other
  direction: variable
- label: Exercise training
  effect: Variable
  detail: PQQ increased a PGC-1α marker in a six-week training study without improving aerobic performance or body composition.
  sourceId: S11
  observationId: pqq-pk-acute
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Selective attention and memory domains
  direction: Increased
  evidence: Human research
  description: The 20 mg/day older-adult trial reported selected Stroop and Touch-M findings, not a validated broad cognitive benefit.
  sourceId: S6
  population: 41 healthy older adults
  exposure: 20 mg/day BioPQQ for 12 weeks
  instrument: Stroop and Touch-M tasks
  magnitude: null
- conceptId: perception
  name: Cognitrax domain scores
  direction: Variable
  evidence: Human research
  description: The 21.5 mg/day trial reported multiple domain-level comparisons; multiplicity and sample size limit interpretation.
  sourceId: S8
  population: 64 randomized; 58 completers
  exposure: 21.5 mg/day PQQ for 12 weeks
  instrument: Cognitrax battery
  magnitude: null
- conceptId: perception
  name: Subjective stress, fatigue, and sleep
  direction: Increased
  evidence: Human research
  description: An open-label study reported self-reported improvement without placebo control or blinding.
  sourceId: S10
  population: 17 adults
  exposure: 20 mg/day for 8 weeks
  instrument: Self-report scales
  magnitude: null
- conceptId: perception
  name: Prefrontal hemodynamic surrogate
  direction: Increased
  evidence: Human research
  description: Small NIRS changes were reported after 20 mg/day; this is a surrogate physiology result, not clinical cognition.
  sourceId: S7
  population: 20 healthy adults
  exposure: 20 mg/day for 12 weeks
  instrument: Near-infrared spectroscopy
  magnitude: null
```

## Outcomes

```yaml
- conceptId: fatigue-severity
  name: Aerobic exercise performance
  direction: Variable
  evidence: Human research
  description: PQQ did not improve functional performance or body composition in untrained men during six weeks of endurance training.
  sourceId: S11
  population: 23 untrained men
  exposure: 20 mg/day plus endurance training for 6 weeks
  instrument: Exercise-performance tests
  magnitude: null
- conceptId: mitochondrial-biomarkers
  name: Inflammation and mitochondrial-related biomarkers
  direction: Variable
  evidence: Human research
  description: A small crossover study observed short-term biomarker changes; no clinical outcome or mitochondrial-count endpoint was measured.
  sourceId: S5
  population: 10 healthy adults
  exposure: 0.2 mg/kg acute PQQ exposure
  instrument: Serum biomarkers
  magnitude: null
- conceptId: memory
  name: Cognitive test outcomes
  direction: Variable
  evidence: Human research
  description: Small randomized trials provide selective domain signals with uncertain clinical importance and no evidence for disease modification.
  sourceId: S6
  population: Healthy adults in small RCTs
  exposure: 20–21.5 mg/day for 12 weeks
  instrument: Cognitive batteries
  magnitude: null
```

## Mechanisms

```yaml
- title: CREB–PGC-1α signaling
  description: Mouse hepatocyte experiments linked PQQ exposure to CREB phosphorylation, PGC-1α expression, and mitochondrial-related markers; this is preclinical mechanism evidence.
  sourceId: S12
- title: Redox and mitochondrial rationale
  description: Human biomarker studies support only indirect mitochondrial-related changes; increased mitochondrial number or human longevity is not established.
  sourceId: S5
```

## Cautions

```yaml
- title: Renal and ADME uncertainty
  description: EFSA noted incomplete human ADME and renal evidence; special-population safety is not established.
  sourceId: S2
- title: Food authorization is not efficacy approval
  description: FDA and EU decisions cover specified food or supplement uses and do not establish treatment efficacy.
  sourceId: S3
- title: Small, short, product-linked trials
  description: Most human studies were small and short, with selective endpoints and disclosed manufacturer affiliations or commissioning.
  sourceId: S8
```

## Claims

```yaml
- id: pqq-cognition
  assertion: PQQ improves cognition
  relation: evidence-boundary
  participants:
    - entityId: substance:pqq
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Small RCTs reported selective domain findings; no broad or durable enhancement has been established.
  sourceIds:
    - S6
    - S8
    - S9
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small samples, multiple outcomes, short duration, and product-linked studies limit inference.
- id: pqq-mitochondria
  assertion: PQQ increases human mitochondrial number
  relation: evidence-boundary
  participants:
    - entityId: substance:pqq
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Only cell and surrogate biomarker evidence is available; human mitochondrial-count benefit is unproven.
  sourceIds:
    - S5
    - S11
    - S12
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanistic and biomarker findings do not establish tissue-level clinical benefit.
- id: pqq-safety
  assertion: PQQ is proven safe at any dose
  relation: evidence-boundary
  participants:
    - entityId: substance:pqq
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Regulatory reviews support specified uses but do not establish indefinite or high-dose safety.
  sourceIds:
    - S2
    - S3
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human exposure data are limited and renal/special-population evidence is incomplete.
```

## Interactions

```yaml
- id: renal-clearance
  name: Renal impairment
  otherSlug: null
  summary: Human renal handling is incompletely characterized; EFSA identified renal uncertainty rather than a quantified interaction.
  sourceId: S2
  context: Regulatory ADME assessment
- id: mitochondrial-pathways
  name: Mitochondrial or redox-active medicines
  otherSlug: null
  summary: Pathway overlap is mechanistically plausible, but controlled human coadministration data were not established.
  sourceId: S5
  context: Mechanistic and biomarker evidence
- id: food-formulation
  name: Food and formulation context
  otherSlug: null
  summary: PQQ disodium salt and branded formulations may differ in identity and excipients; comparative interaction data are absent.
  sourceId: S1
  context: Identity and formulation
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: Disodium pyrroloquinoline quinone
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/91864988
  kind: Chemical database record
  insight: Identity, formula, CAS number, molecular weight, and synonyms.
  limitation: Database record and computed descriptors; not a pharmacology or clinical study.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S2
  title: Safety of pyrroloquinoline quinone disodium salt as a novel food pursuant to Regulation (EC) No 258/97
  authors: EFSA Panel on Dietetic Products, Nutrition and Allergies
  year: 2017
  url: https://doi.org/10.2903/j.efsa.2017.5058
  kind: Regulatory scientific opinion
  insight: 20 mg/day adult intended use, toxicology, human safety-study summary, ADME limitations, renal uncertainty.
  limitation: Relied partly on applicant data and unpublished studies; human studies were not comprehensive renal assessments.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed in the opinion record
  conflictOfInterestStatus: not-assessed
- id: S3
  title: GRAS Notice-(GRN) 1118 Agency Response Letter
  authors: U.S. Food and Drug Administration, Center for Food Safety and Applied Nutrition
  year: 2023
  url: https://www.fda.gov/media/173618/download
  kind: Regulatory response letter
  insight: FDA had no questions regarding notifier-defined GRAS beverage uses and described identity and manufacturing.
  limitation: FDA did not make its own GRAS determination, evaluate health claims, or determine drug-law issues.
  funding: Notifier-sponsored submission
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Notifier and consultant interests are intrinsic to the submission
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Commission Implementing Regulation (EU) 2018/quinoline quinone disodium salt as a novel food under Regulation (EU) 2015/2283 of the European Parliament and of the Council and amending Commission Implementing Regulation (EU) 2017/2470
  authors: European Commission
  year: 2018
  url: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32018R1122
  kind: EU legal act
  insight: Union authorization, 20 mg/day maximum for adult supplements, exclusion of pregnancy/lactation, labeling requirements.
  limitation: Food-use authorization is not an efficacy or drug approval.
  funding: not-applicable
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Applicant proprietary-data interests documented in the act
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Dietary pyrroloquinoline quinone (PQQ) alters indicators of inflammation and mitochondrial-related metabolism in human subjects
  authors: Calliandra B. Harris, Winyoo Chowanadisai, Darya O. Mishchuk, Mike A. Satre, Carolyn M. Slupsky, Robert B. Rucker
  year: 2013
  url: https://doi.org/10.1016/j.jnutbio.2013.07.008
  kind: Peer-reviewed human crossover study
  insight: Serum peak around 2–3 hours, approximately 0.1% urinary parent recovery, and short-term biomarker changes in n=10.
  limitation: Very small healthy sample, brief exposure, indirect mitochondrial measures, no clinical outcomes.
  funding: Mitsubishi Gas and Chemical Company; California Vitamin Settlement Fund
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Funding and product supply disclosed; funders reported no role in design, analysis, or publication
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1016/j.jnutbio.2013.07.008
- id: S6
  title: Effect of the Antioxidant Supplement Pyrroloquinoline Quinone Disodium Salt (BioPQQ™) on Cognitive Functions
  authors: Yuji Itoh, Kyoko Hine, Hiroshi Miura, Tatsuo Uetake, Masahiko Nakano, Naohiro Takemura, Kaoru Sakatani
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26782228/
  kind: Peer-reviewed randomized placebo-controlled human trial
  insight: 41 healthy older adults; 20 mg/day for 12 weeks; selected Stroop and Touch-M findings.
  limitation: Small sample, selective endpoints, subgroup finding, limited duration.
  funding: not-assessed in the abstract
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Mitsubishi Gas and Chemical author affiliation
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/26782228/
- id: S7
  title: Effects of Antioxidant Supplements (BioPQQ™) on Cerebral Blood Flow and Oxygen Metabolism in the Prefrontal Cortex
  authors: Masahiko Nakano, Yuta Murayama, Lizhen Hu, Kazuto Ikemoto, Tatsuo Uetake, Kaoru Sakatani
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27526146/
  kind: Peer-reviewed randomized human neuroimaging study
  insight: 20 healthy adults; 20 mg/day for 12 weeks; small NIRS changes in prefrontal physiology.
  limitation: Small surrogate-endpoint study; no independent clinical outcome.
  funding: not-assessed
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Mitsubishi Gas and Chemical and CX Medical affiliations
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/27526146/
- id: S8
  title: "Effect of Dietary Pyrroloquinoline Quinone Disodium Salt on Cognitive Function in Healthy Volunteers: A Randomized, Double-Blind, Placebo-Controlled, Parallel-Group Study"
  authors: Yoshiaki Shiojima, Megumi Takahashi, Ryohei Takahashi, Hiroyoshi Moriyama, Debasis Bagchi, Manashi Bagchi, Masanori Akanuma
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/34415830/
  kind: Peer-reviewed randomized placebo-controlled human trial
  insight: 64 randomized; 58 completers; 21.5 mg/day for 12 weeks; multiple Cognitrax-domain findings.
  limitation: Small sample, multiple cognitive outcomes, short duration, industry-linked affiliations.
  funding: not-assessed
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Affiliations disclose commercial research roles
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/34415830/
- id: S9
  title: Pyrroloquinoline quinone disodium salt improves brain function in both younger and older adults
  authors: Masanori Tamakoshi, Tomomi Suzuki, Eiichiro Nishihara, Shinichiro Nakamura, Kazuto Ikemoto
  year: 2023
  url: https://doi.org/10.1039/D2FO01515C
  kind: Peer-reviewed double-blind placebo-controlled human study
  insight: 20 mg/day for 12 weeks; overall memory findings and age-stratified cognitive results.
  limitation: Small short study with multiple analyses and product-manufacturer commissioning.
  funding: Mitsubishi Gas Chemical Company commissioned the clinical contractor
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer involvement disclosed in the article
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1039/D2FO01515C
- id: S10
  title: Effects of Oral Supplementation with Pyrroloquinoline Quinone on Stress, Fatigue, and Sleep
  authors: Masahiko Nakano, Tetsuro Yamamoto, Hisayoshi Okamura, Akira Tsuda, Yasuyuki Kowatari
  year: 2012
  url: https://www.ffhdj.com/index.php/ffhd/article/view/81
  kind: Human open-label clinical study
  insight: 17 adults; 20 mg/day for 8 weeks; self-report stress, fatigue, quality-of-life, and sleep changes.
  limitation: No placebo or blinding; small sample; subjective outcomes.
  funding: not-assessed
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Mitsubishi Gas and Chemical affiliation
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.ffhdj.com/index.php/ffhd/article/view/81
- id: S11
  title: Effects of Pyrroloquinoline Quinone (PQQ) Supplementation on Aerobic Exercise Performance and Indices of Mitochondrial Biogenesis in Untrained Men
  authors: Paul S. Hwang, Steven B. Machek, Thomas D. Cardaci, Dylan T. Wilburn, Caelin S. Kim, Emiliya S. Suezaki, Darryn S. Willoughby
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/31860387/
  kind: Peer-reviewed randomized placebo-controlled exercise trial
  insight: 23 men; 20 mg/day for six weeks with endurance training; PGC-1α increased but performance and body composition did not.
  limitation: Small all-male sample, short duration, surrogate mitochondrial marker.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Pyrroloquinoline Quinone Stimulates Mitochondrial Biogenesis through cAMP Response Element-binding Protein Phosphorylation and Increased PGC-1α Expression
  authors: Winyoo Chowanadisai, Kristina A. Bauerly, Edwin Tchaparian, Alex Wong, Geoffrey A. Cortopassi, Robert B. Rucker
  year: 2010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2804159/
  kind: Peer-reviewed cell mechanistic study
  insight: Mouse hepatocyte model linking PQQ exposure to CREB, PGC-1α, respiration, and mitochondrial-related markers.
  limitation: In vitro mouse-cell exposure; does not establish human pharmacology, mitochondrial number, or clinical benefit.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S13
  title: Pyrroloquinoline Quinone Disodium
  authors: United States Pharmacopeia
  year: 2021
  url: https://doi.org/10.31003/USPNF_M10495_03_01
  kind: Pharmacopeial monograph
  insight: Anhydrous and hydrate specifications, chemical identity, and quality definition.
  limitation: Quality standard, not efficacy or clinical-safety evidence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
- id: S14
  title: Pyrroloquinoline Quinone Disodium
  authors: United States Pharmacopeia
  year: 2021
  url: https://doi.org/10.31003/USPNF_M10495_03_01
  kind: Pharmacopeial monograph
  insight: Anhydrous and hydrate specifications, chemical identity, and quality definition.
  limitation: Quality standard, not efficacy or clinical-safety evidence.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: European Union
  activity: PQQ disodium salt in adult food supplements
  status: Authorized novel-food use up to 20 mg/day; pregnancy and lactation excluded
  sourceUrl: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32018R1122
  asOf: 2018-07-23
- jurisdiction: United States
  activity: Specified beverage uses under GRAS notice 1118
  status: FDA no-questions response to notifier-defined use; not a drug or efficacy approval
  sourceUrl: https://www.fda.gov/media/173618/download
  asOf: 2023-08-01
```
