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
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: Human half-life not independently established
  low: null
  high: null
  context: Current label supplies dosing and safety but not a verified quantitative human PK profile in the retrieved material.
  sourceId: dr-phenylpiracetam-s20
  observationId: phenylpiracetam-pk-1
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established; label-provenance claims require the professional SmPC
  sourceId: dr-phenylpiracetam-s20
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

Phenylpiracetam/fonturacetam is a racemic prescription drug in the Russian evidence base; R- and S-enantiomer findings are preclinical and must not be substituted for racemate clinical evidence. Human signals concern stroke rehabilitation, epilepsy add-on therapy and asthenia, while healthy-user cognition and athletic enhancement remain unconfirmed. [dr-phenylpiracetam-s1][dr-phenylpiracetam-s20]

## Description

The current Fonturacetam-Akrikhin label describes 100 mg tablets and adult regimens, but label indications are not equivalent to high-certainty randomized evidence. Online products marketed as Phenotropil, phenylpiracetam or R-phenylpiracetam are not assumed to match registered tablets. [dr-phenylpiracetam-s20]

## Evidence note

The strongest evidence-quality limitation is a small, predominantly Russian literature with incomplete design and disclosure reporting. The 2026 healthy-volunteer registry had no posted results at the cutoff; no modern human PK study for racemate or isolated enantiomers was located. [dr-phenylpiracetam-s1][nct07852130]

## Doses

```yaml
- label: Fonturacetam-Akrikhin label
  amount: 100–250 mg single; 200–300 mg/day average; maximum 750 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Fonturacetam
  formulation: Prescription 100 mg tablet
  route: Oral
  frequency: Up to 100 mg once in morning; higher doses split
  duration: 2 weeks to 3 months; average about 30 days
  population: Adults covered by the Russian label
  purpose: Approved-label context
  sourceCategory: approved-label
  note: Take after food; avoid after 15:00 because of insomnia risk. These are label instructions, not healthy-athlete efficacy evidence.
  sourceId: dr-phenylpiracetam-s20
- label: Stroke rehabilitation study
  amount: 400 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Phenotropil/fonturacetam
  formulation: Study tablets
  route: Oral
  frequency: Three courses during first year
  duration: Rehabilitation follow-up
  population: 400 patients after ischemic stroke
  purpose: Controlled rehabilitation research
  sourceCategory: research
  note: Allocation/blinding and monotherapy contribution are incompletely reported.
  sourceId: dr-phenylpiracetam-s3
- label: Residual cerebrovascular/brain injury study
  amount: 200 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Phenotropil/fonturacetam
  formulation: Study tablets
  route: Oral
  frequency: Not established
  duration: 1 month
  population: 99 patients with residual cerebrovascular, traumatic or postsurgical encephalopathy
  purpose: Comparative clinical research
  sourceCategory: research
  note: Mixed etiologies and limited comparator detail.
  sourceId: dr-phenylpiracetam-s4
- label: Asthenia meta-analysis
  amount: 200 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Fonturacetam
  formulation: Various study formulations
  route: Oral
  frequency: Not established
  duration: About 1 month
  population: 549 patients across 11 publications
  purpose: Asthenia/fatigue research
  sourceCategory: research
  note: The pooled estimate is largely change during treatment, not a robust placebo-controlled difference.
  sourceId: dr-phenylpiracetam-s1
- label: Epilepsy add-on trial
  amount: 100 or 200 mg/day
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Phenotropil/fonturacetam
  formulation: Study tablets
  route: Oral
  frequency: With antiseizure therapy
  duration: Trial-specific
  population: 90 adults with symptomatic focal epilepsy
  purpose: Add-on epilepsy research
  sourceCategory: research
  note: Add-on evidence does not justify replacing established antiseizure treatment.
  sourceId: dr-phenylpiracetam-s7
```
## Pharmacokinetics

```yaml
- id: phenylpiracetam-pk-1
  analyte: Racemic fonturacetam
  route: Oral
  formulation: Russian tablet
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No modern primary human PK publication meeting the source policy established Cmax, Tmax, bioavailability, half-life or clearance; commonly repeated online values remain unverified.
  sourceId: dr-phenylpiracetam-s20
  modelEligible: false
```

## Modifiers

```yaml
- label: Racemate versus enantiomers
  effect: Clinical evidence is not interchangeable
  detail: Phenotropil/fonturacetam clinical studies concern the racemate; R/MRZ-9547 and S-phenylpiracetam findings are preclinical.
  sourceId: dr-phenylpiracetam-s12
  observationId: phenylpiracetam-pk-1
  factorType: other
  direction: variable
- label: Administration time
  effect: Late dosing may worsen insomnia
  detail: The current label discourages administration after 15:00.
  sourceId: dr-phenylpiracetam-s20
  observationId: phenylpiracetam-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: phenylpiracetam-asthenia-symptoms
  name: Asthenia symptoms
  direction: Decreased
  evidence: Human research
  description: The 2025 meta-analysis reported lower MFI-20 scores during treatment, but most underlying studies were observational or open-label.
  sourceId: dr-phenylpiracetam-s1
  population: Patients with asthenia
  exposure: About 200 mg/day
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenylpiracetam-insomnia-and-psychomotor-activation
  name: Insomnia and psychomotor activation
  direction: Variable
  evidence: Human research
  description: The official leaflet lists insomnia after late dosing, psychomotor agitation, flushing, warmth and blood-pressure increase; frequency is unknown.
  sourceId: dr-phenylpiracetam-s20
  population: Adults using the labeled product
  exposure: Label exposure
  conceptId: drowsiness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: phenylpiracetam-asthenia-mfi-20
  name: Asthenia MFI-20
  direction: Increased
  evidence: Human research
  description: The 2025 synthesis of 549 patients reported a mean MFI-20 reduction of 16.3 points after about one month, but the estimate is not a pooled placebo-controlled difference.
  sourceId: dr-phenylpiracetam-s1
  population: 549 patients across 11 publications
  exposure: Fonturacetam about 200 mg/day
  conceptId: cognitive-task-performance
  instrument: MFI-20
  magnitude: Mean change −16.3; CI 8.85–23.85
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenylpiracetam-stroke-rehabilitation
  name: Stroke rehabilitation
  direction: Increased
  evidence: Human research
  description: A 400-person controlled study reported better neurologic and activities-of-daily-living recovery with phenotropil added to rehabilitation; randomization and blinding are not clear.
  sourceId: dr-phenylpiracetam-s3
  population: Patients after ischemic stroke
  exposure: Phenotropil 400 mg/day plus rehabilitation
  conceptId: cognitive-task-performance
  instrument: Barthel, Lindmark, Scandinavian and Merton/Sutton scales
  magnitude: p<0.0001 reported
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenylpiracetam-epilepsy-add-on-outcomes
  name: Epilepsy add-on outcomes
  direction: Increased
  evidence: Human research
  description: Small add-on trials report lower seizure burden and improved cognitive/EEG measures, but numerical treatment effects and design details are limited.
  sourceId: dr-phenylpiracetam-s7
  population: Adults with symptomatic focal epilepsy
  exposure: Phenotropil 100 or 200 mg/day plus antiseizure treatment
  conceptId: cognitive-task-performance
  instrument: Seizure frequency and EEG
  magnitude: Direction reported; effect size not established
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenylpiracetam-healthy-user-cognition
  name: Healthy-user cognition
  direction: Variable
  evidence: Human research
  description: The completed NCT07852130 registry arm had no posted results; it supplies no usable efficacy result at the cutoff.
  sourceId: nct07852130
  population: Healthy adults aged 18–35
  exposure: 100, 200 or 300 mg/day registry arms
  conceptId: cognitive-task-performance
  instrument: Registry results module
  magnitude: No posted results
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: DAT-active enantiomer evidence
  conceptId: dopamine-transporter
  description: R/MRZ-9547 and S-phenylpiracetam DAT findings are preclinical; they do not establish human DAT occupancy, abuse liability or cognition.
  sourceId: dr-phenylpiracetam-s14
```

## Cautions

```yaml
- title: Blood pressure and psychiatric activation
  description: The label lists blood-pressure elevation, psychomotor agitation, panic/hallucination/delusion concerns and insomnia, especially with late dosing.
  sourceId: dr-phenylpiracetam-s20
- title: Pregnancy, lactation and pediatrics
  description: Current labeling contraindicates use in pregnancy, breastfeeding and ages 0–17; no adequate human safety studies were identified.
  sourceId: dr-phenylpiracetam-s20
- title: Dependence and long-term cardiovascular uncertainty
  description: No dedicated primary human abuse-liability, dependence, withdrawal, organ-impairment PK or long-term cardiovascular trial was located.
  sourceId: dr-phenylpiracetam-s20
```

## Claims

```yaml
- id: phenylpiracetam-claim-1
  assertion: Phenylpiracetam is a proven healthy cognitive or athletic enhancer.
  relation: evidence-boundary
  participants:
    - entityId: substance:phenylpiracetam
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: No published primary human healthy-volunteer efficacy trial and no posted results from the 2026 registry were identified.
  sourceIds:
    - dr-phenylpiracetam-s20
    - nct07852130
    - dr-phenylpiracetam-s22
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Russian label language and anti-doping classification do not establish controlled efficacy.
- id: phenylpiracetam-claim-2
  assertion: R-phenylpiracetam/MRZ-9547 clinical evidence can be inferred from racemic Phenotropil.
  relation: evidence-boundary
  participants:
    - entityId: substance:phenylpiracetam
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: The R/S literature in the eligible set is preclinical and chemically distinct from racemic clinical products.
  sourceIds:
    - dr-phenylpiracetam-s12
    - dr-phenylpiracetam-s14
    - dr-phenylpiracetam-s16
    - dr-phenylpiracetam-s18
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Do not merge enantiomer and racemate evidence.
```

## Interactions

```yaml
- id: phenylpiracetam-cns-stimulants
  name: CNS stimulants and nootropics
  otherSlug: null
  summary: The current leaflet asks patients to report concomitant CNS stimulants, nootropics, antidepressants and neuroleptics; quantitative DDI evidence is not provided.
  sourceId: dr-phenylpiracetam-s20
  context: Label precaution
  conflictingSourceIds: []
- id: phenylpiracetam-ethanol
  name: Ethanol
  otherSlug: null
  summary: The leaflet asks patients to report ethanol use; no controlled interaction magnitude was located.
  sourceId: dr-phenylpiracetam-s20
  context: Label precaution
  conflictingSourceIds: []
- id: phenylpiracetam-antiseizure
  name: Antiseizure medicines
  otherSlug: null
  summary: Clinical studies have coadministered phenotropil with antiseizure drugs, but these were not formal PK interaction trials.
  sourceId: dr-phenylpiracetam-s7
  context: Add-on trial context
  conflictingSourceIds: []
```

## Experience links

```yaml
- title: Phenylpiracetam on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Phenylpiracetam
  publisher: PsychonautWiki
```

## References

```yaml
- id: molekul-profile
  title: "Phenotropil: Molekul research profile"
  authors: Molekul
  year: 2026
  url: https://molekul.io/compounds/phenotropil
  kind: Research atlas · accessed 2026
  insight: Provenance of the imported name, working classification and source trail.
  limitation: A secondary discovery resource. This import does not independently verify its findings or count its links as independent studies.
  funding: Not assessed in this import.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this import.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s1
  title: "Efficacy and safety of fonturacetam in asthenia: a systematic review and meta-analysis."
  authors: Devlikamova FI, Safina DR.
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/41086540/
  kind: PubMed-indexed study
  insight: Source R1 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown/not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s3
  title: Efficacy of phenotropil in the rehabilitation of stroke patients.
  authors: Koval'chuk VV, Skoromets AA, Koval'chuk IV, et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20455417/
  kind: PubMed-indexed study
  insight: Source R2 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s4
  title: The phenotropil treatment of the consequences of brain organic lesions.
  authors: Savchenko AIu, Zakharova NS, Stepanov IN.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16134352/
  kind: PubMed-indexed study
  insight: Source R3 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s5
  title: The clinical and immunological aspects of the effects of phenotropil on consequences of stroke.
  authors: Gerasimova MM, Chichanovskaia LV, Slezkina LA.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16220519/
  kind: PubMed-indexed study
  insight: Source R4 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s6
  title: Phenotropil in the treatment of vascular encephalopathy.
  authors: Gustov AA, Smirnov AA, Korshunova IuA, Andrianova EV.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16909516/
  kind: PubMed-indexed study
  insight: Source R5 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s7
  title: The efficacy of add-on treatment with phenotropil in adult patients with locally-induced epilepsy.
  authors: Grebeniuk OV, Zhukova NG, Alifirova VM.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25536874/
  kind: PubMed-indexed study
  insight: Source R6 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s8
  title: Complex treatment of epilepsy with phenotropil.
  authors: Bel'skaia GN, Ponomareva IV, Lukashevich IG, Tikhomirova IN.
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/18159894/
  kind: PubMed-indexed study
  insight: Source R7 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s9
  title: Nootropics and antioxidants in the complex therapy of symptomatic posttraumatic epilepsy.
  authors: Savenkov AA, Badalian OL, Avakian GN.
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24036345/
  kind: PubMed-indexed study
  insight: Source R8 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s10
  title: "Treatment of asthenic syndrome in patients with chronic brain ischemia: results of the non-interventional observational program TRIUMPH."
  authors: Fedin AI, Solov'eva ÉIu, Mironova OP, Fedotova AV.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25536877/
  kind: PubMed-indexed study
  insight: Source R9 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s11
  title: New possibilities of pharmacotherapy in cardiovascular patients with mental disorders.
  authors: Medvedev VE, Frolova VI, Epifanov AV.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25272731/
  kind: PubMed-indexed study
  insight: Source R10 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: sponsor unknown.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s12
  title: Investigation into stereoselective pharmacological activity of phenotropil.
  authors: Zvejniece L, Svalbe B, Veinberg G, et al.
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21636293/
  kind: PubMed-indexed study
  insight: Source R11 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s14
  title: The dopamine reuptake inhibitor MRZ-9547 increases progressive ratio responding in rats.
  authors: Sommer S, Danysz W, Russ H, Valastro B, Flik G, Hauber W.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25057732/
  kind: PubMed-indexed study
  insight: Source R12 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s16
  title: Effects of dopamine uptake inhibitor MRZ-9547 in animal models of Parkinson's disease.
  authors: Dekundy A, Mela F, Hofmann M, Danysz W.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25614362/
  kind: PubMed-indexed study
  insight: Source R13 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s18
  title: S-phenylpiracetam, a selective DAT inhibitor, reduces body weight gain without influencing locomotor activity.
  authors: Zvejniece L, Svalbe B, Vavers E, et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28380676/
  kind: PubMed-indexed study
  insight: Source R14 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s20
  title: Fonturacetam-Akrikhin 100 mg
  authors: AO Akrikhin.
  year: 2026
  url: https://akrikhin.ru/
  kind: Research source
  insight: Source R15 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: nct07852130
  title: Reliability of Standardized IQ Testing Under Modafinil, Racetam-Class Compounds, Sleep Restriction and Daily Activity.
  authors: ClinicalTrials.gov.
  year: 2026
  url: https://clinicaltrials.gov/study/NCT07852130
  kind: Regulatory or registry source
  insight: Source R16 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: not separately disclosed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: dr-phenylpiracetam-s22
  title: World Anti-Doping Agency
  authors: 2026 Prohibited List.
  year: 2026
  url: https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list
  kind: Regulatory or registry source
  insight: Source R17 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: .
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-pmid6403074
  title: "PubMed PMID 6403074 — source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/6403074/
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original publication was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-dspace
  title: "University of Tartu repository source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://dspace.ut.ee/bitstreams/54ed331b-175c-4be1-84e1-1d60f554d20c/download
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original document was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-phenotropil-article
  title: "Phenotropil article source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://phenotropil.ru/upload/articles/%D0%9B.%D0%92.%20%D0%91%D0%B0%D0%B3%D0%B8%D1%80%D1%8C_%D0%9E%D0%BF%D1%8B%D1%82%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%A4%D0%B5%D0%BD%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B0%D0%BC%D0%B1%D1%83%D0%BB%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D1%85%20%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B2%20%D1%80%D0%B0%D0%BD%D0%BD%D0%B5%D0%BC%20%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%B5%20%D0%B8%D1%88%D0%B5%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B8%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0.pdf
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original document was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-mediasphera-2014-11
  title: "Mediasphera source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://www.mediasphera.ru/issues/zhurnal-nevrologii-i-psikhiatrii-im-s-s-korsakova-2/2014/11-2/031997-729820141134
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original publication was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-mediasphera-2014-12
  title: "Mediasphera source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://www.mediasphera.ru/issues/zhurnal-nevrologii-i-psikhiatrii-im-s-s-korsakova/2014/12/031997-729820141219
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original publication was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-medi
  title: "Medi.ru source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://medi.ru/info/12177/
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original document was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-phenylpiracetam-wiley
  title: "Wiley source link captured 2026; metadata pending"
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1111/j.1742-7843.2011.00742.x
  kind: Source discovery link · capture year
  insight: This URL appeared in the Molekul phenotropil source trail. No study finding is asserted by this source record.
  limitation: The original publication was not independently appraised in this import; the link alone does not establish efficacy.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed

```

## Legal

```yaml
- jurisdiction: Russia
  activity: Fonturacetam-Akrikhin prescription tablet
  status: Current official product information describes a 100 mg prescription tablet with labeled adult indications and contraindications.
  sourceUrl: https://akrikhin.ru/
  asOf: 2026-10-11
- jurisdiction: International sport
  activity: WADA S6 stimulant
  status: Fonturacetam/4-phenylpiracetam/carphedon is prohibited in competition under the 2026 list; classification is not proof of performance efficacy.
  sourceUrl: https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list
  asOf: 2026-10-11
```
