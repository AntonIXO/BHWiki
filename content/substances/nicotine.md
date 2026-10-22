---
slug: nicotine
name: Nicotine
subtitle: Cholinergic signaling with dependence risk.
aliases:
  - (S)-nicotine
formula: C10H14N2
molecularWeight: 162.23 g/mol
pubchemCid: 89594
smiles: CN1CCCC1C2=CN=CC=C2
category: Stimulant
tags:
  - stimulant
  - nicotinic-agonist
  - acetylcholine
  - cyp2a6
  - nicotinic-receptor
  - craving
accent: "#c8a18f"
reviewedAt: 2026-10-22
halfLife:
  label: Approximately 2 hours for plasma nicotine
  low: 2
  high: 2
  context: The cited pharmacology review describes approximately 2 hours for plasma nicotine elimination, with route, pregnancy, renal function and metabolic phenotype affecting exposure. This is not a subjective duration estimate.
  sourceId: benowitz2009
  observationId: nicotine-elimination
kinetics:
  onset: Minutes after pulmonary or fast mucosal delivery; slower with gum, lozenges and patches
  peak: Approximately 3–8 minutes for cigarette exposure, about 30–66 minutes for gum/lozenge, and 3–7 hours for patches in cited studies
  duration: Plasma elimination half-life is approximately 2 hours; repeated dosing and cotinine persistence extend exposure
  bioavailability: Route- and product-dependent; values from different products are not interchangeable
  metabolism: Primarily CYP2A6-mediated oxidation to cotinine, with additional glucuronidation and nicotine N-oxide formation
  sourceId: benowitz2009
editorialStatus: sourced-draft
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
  - halfLife
  - kinetics
  - modifiers
  - doses
  - effects
  - mechanisms
  - cautions
  - references
  - legal
  - editorialStatus
  - pkObservations
  - outcomes
  - claims
  - interactions
  - experienceLinks
x-order: 4
---

## Summary

Nicotine is the dependence-producing pharmacological agent in tobacco. It activates nicotinic acetylcholine receptors and can produce small, task-dependent acute attention effects, but evidence does not establish reliable enhancement of memory, athletic performance, mood, sleep, longevity or dementia outcomes in healthy nonusers. Combustible tobacco adds toxicants and disease risks that should not be assigned to nicotine alone; medicinal nicotine-replacement products are safer than continued smoking but remain physiologically active and dependence-forming (benowitz2009; benowitz2010; majdi2021; pasetes2020; fda-nicotine).

## Description

The naturally occurring active enantiomer is (S)-nicotine. Pulmonary delivery produces rapid arterial exposure, while gum, lozenges and patches produce slower peaks. Nicotine is metabolized mainly by CYP2A6 to cotinine; pregnancy, age, genotype, renal or hepatic impairment, meals, menthol and some co-exposures can alter clearance (pubchem; benowitz2009). Cigarette smoke contains carbon monoxide, particulates, oxidants, aldehydes and tobacco-specific nitrosamines in addition to nicotine. NRT delivers nicotine without combustion toxicants and is used to reduce withdrawal during smoking cessation (fda-nicotine; fda-cessation).

## Evidence note

This draft integrates human systematic reviews, randomized trials, pharmacology reviews, official labels and regulatory sources available on 2026-10-22. Acute attention signals are small and heterogeneous; apparent benefits in dependent users may be withdrawal reversal. No human trial located here demonstrates lifespan extension, dementia prevention or durable cognitive enhancement. Several included studies had tobacco, pharmaceutical or nicotine-product involvement; inaccessible or abstract-only disclosures remain marked as not assessed rather than treated as independent.

## Doses

```yaml
- label: Single cigarette systemic exposure
  amount: Approximately 1 to 1.5 mg absorbed nicotine
  quantity: null
  quantityMax: null
  unit: mg absorbed
  ingredient: Nicotine
  formulation: Combustible cigarette smoke
  route: pulmonary inhalation
  frequency: Per cigarette
  duration: Acute
  population: Adult smokers in pharmacokinetic studies
  purpose: Exposure characterization
  sourceCategory: research
  note: Absorption varies with puffing, cigarette design and smoking topography; labeled nicotine content is higher than absorbed dose.
  sourceId: benowitz2009
- label: Nicotine transdermal patch label
  amount: 7, 14 or 21 mg delivered over 24 hours
  quantity: 7
  quantityMax: 21
  unit: mg/24 h
  ingredient: Nicotine
  formulation: Transdermal nicotine patch
  route: transdermal
  frequency: Once daily
  duration: Label taper over 8–12 weeks for smoking cessation
  population: Adults who smoke, according to the OTC label
  purpose: Smoking cessation
  sourceCategory: approved-label
  note: A product label, not a cognitive-enhancement dose and not a recommendation for nicotine-naive people.
  sourceId: dailymed-patch
- label: Nicotine polacrilex gum label
  amount: 2 or 4 mg per piece
  quantity: 2
  quantityMax: 4
  unit: mg/piece
  ingredient: Nicotine
  formulation: Nicotine polacrilex gum
  route: buccal
  frequency: Every 1–2 hours initially; maximum 24 pieces/day on the cited label
  duration: Up to 12 weeks on the cited label
  population: Adults who smoke, according to the OTC label
  purpose: Smoking cessation
  sourceCategory: approved-label
  note: The label selects 4 mg when the first cigarette is within 30 minutes of waking and 2 mg otherwise.
  sourceId: dailymed-gum
- label: Healthy-nonsmoker patch meta-analysis exposures
  amount: Various patch doses across 31 publications
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Nicotine
  formulation: Transdermal patch
  route: transdermal
  frequency: Single or short repeated exposure
  duration: Acute laboratory studies
  population: 978 healthy nonsmoking adults
  purpose: Cognitive outcomes
  sourceCategory: research
  note: The evidence does not establish a safe or effective enhancement dose.
  sourceId: majdi2021
- label: MCI pilot trial
  amount: 15 mg/day
  quantity: 15
  quantityMax: null
  unit: mg/day
  ingredient: Nicotine
  formulation: Transdermal patch
  route: transdermal
  frequency: Daily
  duration: 6 months
  population: 74 nonsmoking adults with amnestic mild cognitive impairment
  purpose: Cognitive-test outcomes
  sourceCategory: research
  note: Pilot trial with multiple outcomes; not evidence for dementia prevention or lifespan extension.
  sourceId: newhouse2012
```

## Pharmacokinetics

```yaml
- id: nicotine-elimination
  analyte: Nicotine
  route: inhalation or intravenous
  formulation: Cigarette smoke or intravenous nicotine in reviewed kinetic studies
  population: Adults represented in the pharmacology review
  endpoint: elimination-half-life
  statistic: approximate
  value: 2
  low: null
  high: null
  unit: hours
  context: Approximate plasma elimination half-life; route, pregnancy, renal function and metabolic phenotype alter exposure.
  sourceId: benowitz2009
  modelEligible: true
- id: cotinine-elimination
  analyte: Cotinine
  route: systemic nicotine exposure
  formulation: Nicotine exposure with cotinine as metabolite
  population: Adults represented in the pharmacology review
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 8
  high: 30
  unit: hours
  context: Cotinine persists longer than nicotine; the cited review gives an approximate 16-hour value with a reported range of about 8–30 hours.
  sourceId: benowitz2009
  modelEligible: false
```

## Duration

```yaml
- route: pulmonary inhalation
  population: Adult smokers in pharmacokinetic studies
  sourceId: benowitz2009
  measurement: plasma
  analyte: Nicotine
  note: Venous peak is usually about 5–8 minutes and arterial peak about 3–5 minutes after smoking; subjective duration is not inferred from these values.
  total: null
  phases: []
- route: transdermal
  formulation: Nicotine patch
  population: Adults in cited pharmacokinetic studies
  sourceId: benowitz2009
  measurement: plasma
  analyte: Nicotine
  note: Patch peaks were approximately 3–7 hours in the cited product studies and provide a flatter exposure profile.
  total: null
  phases: []
- route: systemic nicotine exposure
  population: People with established nicotine dependence after cessation
  sourceId: nci-withdrawal
  measurement: subjective
  note: Withdrawal commonly begins within 4–24 hours, is often worst during the first week with a peak around the first three days, and declines over about three to four weeks; craving and cue reactivity may persist longer.
  total: null
  phases: []
```

## Modifiers

```yaml
- label: CYP2A6 genotype and phenotype
  effect: Changes nicotine clearance and cotinine formation
  detail: Faster metabolism is associated in some studies with greater dependence and poorer cessation response; relationships are not uniform.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: genotype
  direction: variable
- label: Pregnancy
  effect: Faster nicotine and cotinine clearance
  detail: The cited review reports approximately 60% higher nicotine clearance and approximately 140% higher cotinine clearance during pregnancy than postpartum; fetal exposure and developmental concern remain.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: pregnancy
  direction: faster
- label: Renal or hepatic impairment
  effect: Reduced clearance can increase exposure
  detail: Severe renal impairment and reduced hepatic function alter nicotine disposition; label warnings call for clinician supervision in relevant conditions.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: other
  direction: slower
- label: Prior dependence and abstinence
  effect: Modifies apparent cognitive and mood effects
  detail: Improvement after nicotine in dependent users may be reversal of withdrawal rather than enhancement above a nicotine-free baseline.
  sourceId: pasetes2020
  observationId: nicotine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: effect-attention
  name: Acute attention performance
  direction: Increased
  evidence: Human research
  description: A 2021 meta-analysis of 31 patch publications in 978 healthy nonsmokers found a small attention benefit, while another systematic review found positive, mixed and null attention studies without a consistent overall effect.
  sourceId: majdi2021
  conflictingSourceIds:
    - pasetes2020
  reportType: measured-assessment
  conceptId: alertness
  population: Healthy nonsmoking adults in short randomized laboratory studies
  exposure: Transdermal nicotine, varied study doses
  instrument: Heterogeneous attention tasks
  magnitude: SMD 0.231 (95% CI 0.106 to 0.356) in the meta-analysis; memory was not significant.
  study:
    id: majdi2021-meta
    design: Meta-analysis of randomized clinical-trial publications
    sampleSize: 978
    populationLabels:
      - healthy nonsmokers
    comparator: Placebo
    route: transdermal
    formulation: nicotine patch
    assessmentTime: Acute laboratory assessments
  result:
    measure: standardized-mean-difference
    estimate: 0.231
    unit: SMD
    instrument: attention tasks
    comparator: placebo
    assessmentTime: acute assessment
    population: healthy nonsmoking adults
    confidenceInterval:
      lower: 0.106
      upper: 0.356
      level: 95
- id: effect-craving
  name: Craving during abstinence
  direction: Variable
  evidence: Human research
  description: Dependence can produce craving during abstinence; renewed nicotine can relieve withdrawal without demonstrating enhancement above baseline.
  sourceId: benowitz2010
  conceptId: craving
  population: People with established tobacco dependence
  exposure: Repeated nicotine exposure followed by abstinence
  instrument: null
  magnitude: null
- id: effect-sleep-disruption
  name: Sleep disruption after overnight nicotine
  direction: Increased
  evidence: Human research
  description: Overnight nicotine patches in healthy nonsmokers increased sleep latency and wake after sleep onset and reduced total sleep time, sleep efficiency and REM sleep; in abstinent smokers, a 24-hour patch can instead reduce withdrawal-related sleep disruption.
  sourceId: choi2017
  conflictingSourceIds:
    - staner2006
  conceptId: alertness
  population: Healthy nonsmoking men in one crossover study; dependent smokers in a separate cessation study
  exposure: 14 mg overnight patch or 24-hour patch during cessation
  instrument: Polysomnography
  magnitude: Direction differs by dependence and abstinence context.
- id: effect-cardiovascular-stimulation
  name: Acute cardiovascular stimulation
  direction: Increased
  evidence: Human research
  description: Sublingual nicotine increased heart rate, mean blood pressure and muscle sympathetic nerve activity in healthy smokers; nicotine-containing aerosol also produces acute sympathoexcitatory effects.
  sourceId: najem2006
  conceptId: alertness
  population: Healthy smokers and human e-cigarette studies
  exposure: 4 mg sublingual nicotine or nicotine-containing aerosol
  instrument: Heart rate, blood pressure and muscle sympathetic nerve activity
  magnitude: Quantitative pooled estimate not established in the reviewed sources.
- id: effect-metabolic
  name: Insulin sensitivity
  direction: Variable
  evidence: Human research
  description: A small older study found reduced insulin sensitivity during six weeks of NRT, while a randomized crossover study found no significant acute glucose or insulin change with a 14 mg patch.
  sourceId: assali2009
  conflictingSourceIds: []
  conceptId: anxiety
  population: Adult smokers in small NRT studies
  exposure: Nicotine replacement, including 14 mg patch
  instrument: Insulin-sensitivity indices
  magnitude: Conflicting small-study findings; no durable clinical metabolic effect established.
```

## Outcomes

```yaml
- id: outcome-cessation
  name: Smoking cessation abstinence
  direction: Increased
  evidence: Human research
  description: Cochrane evidence found any NRT increased long-term abstinence versus control; this supports NRT as a cessation medicine in people who smoke, not nicotine use by nonusers.
  sourceId: hartmann-boyce2018
  conceptId: attention
  population: Motivated adult smokers in cessation trials
  exposure: Nicotine replacement therapy
  instrument: Long-term abstinence
  magnitude: RR 1.55 (95% CI 1.49 to 1.61; 133 studies, 64,640 participants).
  study:
    id: hartmann-boyce2018
    design: Cochrane systematic review
    sampleSize: 64640
    populationLabels:
      - adult smokers
    comparator: placebo or control
    route: multiple NRT routes
    formulation: patch, gum, lozenge, inhaler or nasal spray
    assessmentTime: long-term follow-up
  result:
    measure: risk-ratio
    estimate: 1.55
    unit: RR
    instrument: biochemically or self-reported abstinence as defined by included trials
    comparator: control
    assessmentTime: long-term follow-up
    population: adult smokers
    confidenceInterval:
      lower: 1.49
      upper: 1.61
      level: 95
- id: outcome-cardiovascular-events
  name: Major cardiovascular events in randomized nicotine studies
  direction: Variable
  evidence: Human research
  description: A systematic review of 42 randomized studies found no statistically significant differences in arrhythmia, nonfatal myocardial infarction, nonfatal stroke or cardiovascular death, but events were rare and follow-up short.
  sourceId: kim2023
  conceptId: cardiovascular
  population: Participants in randomized nicotine or NRT studies
  exposure: Nicotine products compared with non-nicotine controls
  instrument: Clinical cardiovascular events
  magnitude: No significant pooled difference; precision and long-term generalizability were limited.
- id: outcome-mci
  name: Cognitive tests in amnestic mild cognitive impairment
  direction: Increased
  evidence: Human research
  description: A six-month pilot trial in 74 nonsmoking adults with amnestic MCI improved several cognitive-test outcomes but not clinician-rated global impression; the two-year MIND trial top-line report found no significant cognitive or functional benefit.
  sourceId: newhouse2012
  conflictingSourceIds:
    - andrews2026
  conceptId: attention
  population: Older nonsmoking adults with amnestic MCI
  exposure: 15 mg/day transdermal nicotine for six months
  instrument: Continuous Performance Test and secondary cognitive measures
  magnitude: Pilot positive signal; no dementia or mortality endpoint.
- id: outcome-pregnancy-cessation
  name: NRT-assisted cessation during pregnancy
  direction: Variable
  evidence: Human research
  description: |
    Pregnancy evidence is low certainty: overall NRT abstinence was higher, but the placebo-controlled subgroup crossed the null and adherence was low.
  sourceId: claire2020
  conceptId: cardiovascular
  population: Pregnant smokers in 11 trials
  exposure: Nicotine replacement therapy
  instrument: Abstinence and birth outcomes
  magnitude: Overall RR 1.37 (95% CI 1.08 to 1.74); placebo-controlled subgroup RR 1.21 (95% CI 0.95 to 1.55).
```

## Mechanisms

```yaml
- title: Nicotinic receptor agonism and reward
  description: Nicotine activates neuronal and peripheral nicotinic acetylcholine receptors, including alpha4beta2-containing receptors central to reward and dependence, and increases mesolimbic dopamine signaling.
  sourceId: benowitz2010
  conceptId: nicotinic-receptor
- title: Neuroadaptation and withdrawal
  description: Repeated exposure causes receptor desensitization, compensatory upregulation and altered reward thresholds; falling nicotine concentrations contribute to craving, irritability, dysphoria, poor concentration and insomnia.
  sourceId: nci-withdrawal
  conceptId: craving
- title: Sympathetic stimulation
  description: Peripheral receptor activation stimulates catecholamine release and increases heart rate, vascular tone and usually blood pressure. Combustible smoke adds oxidative, inflammatory and endothelial injury not reproduced by medicinal nicotine alone.
  sourceId: najem2006
  conceptId: cardiovascular
- title: CYP2A6 metabolism
  description: CYP2A6-mediated oxidation forms nicotine-iminium intermediates and cotinine; glucuronidation and nicotine N-oxide formation are additional pathways.
  sourceId: benowitz2009
  conceptId: cyp2a6
```

## Cautions

```yaml
- title: Dependence and loss of control
  description: Nicotine can produce tolerance, craving, cue-reactivity, compulsive use and withdrawal even without tobacco smoke; faster delivery and higher peaks generally increase reinforcement.
  sourceId: benowitz2010
- title: Acute toxicity
  description: Excess exposure can cause nausea, vomiting, dizziness, weakness, sweating, palpitations, tachycardia, confusion and hypotension at severe toxicity.
  sourceId: dailymed-patch
- title: Cardiovascular disease
  description: Nicotine raises heart rate and blood pressure. OTC labels advise clinician review for recent myocardial infarction, serious arrhythmia, worsening angina and uncontrolled hypertension.
  sourceId: dailymed-patch
- title: Pregnancy and adolescence
  description: Nicotine crosses the placenta and enters breast milk; developmental exposure is a public-health concern. NRT decisions during pregnancy are formulation-, adherence- and patient-specific when the alternative is continued smoking.
  sourceId: claire2020
- title: Sleep and product confusion
  description: Overnight patches can cause vivid dreams and insomnia. Evidence for medicinal NRT cannot be transferred directly to cigarettes, high-delivery e-cigarettes, pouches or smokeless tobacco.
  sourceId: choi2017
```

## Claims

```yaml
- id: nicotine-reliable-attention
  assertion: Nicotine reliably improves attention
  relation: cognitive-enhancement
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:attention
      role: outcome
  context: Acute patch meta-analysis versus heterogeneous acute randomized review.
  sourceIds:
    - majdi2021
  conflictingSourceIds:
    - pasetes2020
  assessment: not-formally-assessed
  limitation: Small task-dependent effects do not establish general enhancement or benefit in dependent users beyond withdrawal reversal.
- id: nicotine-antidepressant
  assertion: Nicotine is an antidepressant
  relation: mood-treatment
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:anxiety
      role: affective-outcome
  context: Small pilot studies and smoking-cessation mental-health evidence.
  sourceIds:
    - mcclernon2006
    - taylor2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cessation improvements do not isolate chronic nicotine effects and pilot mood findings are preliminary.
- id: nrt-safer-than-smoking
  assertion: Medicinal NRT is safer than continued cigarette smoking
  relation: harm-reduction
  participants:
    - entityId: substance:nicotine
      role: active-ingredient
    - entityId: tag:stimulant
      role: comparator-exposure
  context: FDA distinction between nicotine addiction and combustion toxicants.
  sourceIds:
    - fda-nicotine
    - fda-cessation
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Safer than smoking does not mean risk-free or appropriate for nicotine-naive people.
- id: nicotine-longevity
  assertion: Nicotine extends lifespan or prevents dementia
  relation: longevity
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:attention
      role: proposed-benefit
  context: No qualifying human longevity trial located.
  sourceIds:
    - newhouse2012
    - andrews2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Short cognitive studies and a conference top-line report do not establish dementia prevention, biological-age slowing or lifespan extension.
```

## Interactions

```yaml
- id: smoke-cyp1a2
  name: Smoking cessation and CYP1A2 substrates
  otherSlug: null
  targetClassId: stimulant
  summary: Combustible smoke induces CYP1A2; stopping smoking can raise concentrations of clozapine, olanzapine, theophylline, caffeine and some other medicines. This interaction is caused primarily by smoke, not nicotine replacement.
  sourceId: schaffer2009
  mechanism: Reversal of smoke-induced hepatic CYP1A2 induction
  context: Transition from combustible smoking to abstinence or NRT
- id: additive-sympathomimetic
  name: Nicotine with other stimulants or sympathomimetics
  otherSlug: null
  targetClassId: stimulant
  summary: Additive increases in heart rate, blood pressure, tremor, palpitations or anxiety are pharmacologically plausible; direct quantitative interaction data are limited.
  sourceId: najem2006
  mechanism: Pharmacodynamic sympathetic stimulation
  context: Product- and dose-specific
- id: multiple-nicotine-products
  name: Concurrent nicotine products
  otherSlug: null
  summary: Simultaneous cigarette, vape, pouch and NRT use can increase total nicotine exposure and make nausea, dizziness and palpitations more likely; no universal combined safe exposure is established.
  sourceId: dailymed-patch
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: benowitz2009
  title: Nicotine chemistry, metabolism, kinetics and biomarkers
  authors: Benowitz NL, Hukkanen J, Jacob P
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19184645/
  kind: Pharmacology review
  insight: Route-specific pharmacokinetics, CYP2A6, cotinine, half-life and modifiers.
  limitation: Older underlying studies use different products and protocols.
  pmid: "19184645"
  doi: 10.1007/978-3-540-69248-5_2
  funding: NIH support is listed in PubMed; complete disclosure was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: benowitz2010
  title: Nicotine addiction
  authors: Benowitz NL
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20554984/
  kind: Clinical review
  insight: Receptor signaling, reinforcement, dependence, withdrawal, cardiovascular effects and NRT context.
  limitation: Narrative review, not a trial of enhancement in nonusers.
  pmid: "20554984"
  doi: 10.1056/NEJMra0809890
  funding: NIH and government support are listed; complete conflict statement was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: pubchem
  title: Nicotine compound record and molecular structure
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/89594
  kind: Chemical database
  insight: Molecular identity, formula, molecular weight and structure.
  limitation: Does not establish product purity, safety or clinical benefit.
  funding: Public database maintained by NCBI.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: pasetes2020
  title: "Cognitive performance effects of nicotine and industry affiliation: a systematic review"
  authors: Pasetes SV, Ling PM, Apollonio DE
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32547048/
  kind: Systematic review
  insight: 32 acute randomized studies showed positive, mixed and null attention findings without a consistent overall cognitive effect.
  limitation: Short heterogeneous studies; included literature had substantial tobacco or pharmaceutical affiliation.
  pmid: "32547048"
  doi: 10.1177/1178221820926545
  funding: NIH and UCSF School of Pharmacy grants; included-study funding varied.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors declared no conflicts; included-study affiliations were heterogeneous.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC7271274/
- id: majdi2021
  title: "Effects of transdermal nicotine delivery on cognitive outcomes: A meta-analysis"
  authors: Majdi A, Sadigh-Eteghad S, Gjedde A
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33899218/
  kind: Meta-analysis
  insight: 31 publications and 978 healthy nonsmokers; small attention benefit and nonsignificant memory estimate.
  limitation: Patch-only, short trials and heterogeneous measures.
  pmid: "33899218"
  doi: 10.1111/ane.13436
  funding: Tabriz University Neurosciences Research Center, Danish Alzheimer Research Foundation and Aarhus Translational Neuropsychiatry Unit.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no conflicts.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/33899218/
- id: mcclernon2006
  title: "Transdermal nicotine attenuates depression symptoms in nonsmokers: a double-blind, placebo-controlled trial"
  authors: McClernon FJ, Hiott FB, Westman EC, Rose JE, Levin ED
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16977477/
  kind: Randomized trial
  insight: Very small nonsmoker study with transient CES-D change and no acute mood change.
  limitation: 11 participants and short duration.
  pmid: "16977477"
  doi: 10.1007/s00213-006-0516-y
  funding: Not available in the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: taylor2021
  title: Smoking cessation for improving mental health
  authors: Taylor GMJ, Lindson N, Farley A, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33687070/
  kind: Cochrane systematic review
  insight: Smoking cessation was associated with improved anxiety, depression and stress in 102 studies.
  limitation: Serious potential time-varying confounding; depression evidence very low certainty.
  pmid: "33687070"
  doi: 10.1002/14651858.CD013522.pub2
  funding: Cancer Research UK and NIHR support reported.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No tobacco-industry funding was disclosed in the inspected PubMed record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/33687070/
- id: choi2017
  title: Transdermal nicotine patch effects on EEG power spectra and heart rate variability during sleep of healthy male adults
  authors: Choi JB, Lee YJG, Jeong DU
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28845178/
  kind: Randomized crossover study
  insight: Overnight 14 mg patch disrupted sleep architecture in healthy nonsmoking men.
  limitation: Small acute male-only study.
  pmid: "28845178"
  doi: 10.4306/pi.2017.14.4.499
  funding: Patch supplied by Sam Yang Pharmaceutical.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Complete disclosure requires the full article.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5561409/
- id: staner2006
  title: Sleep effects of a 24-h versus a 16-h nicotine patch during smoking cessation
  authors: Staner L, Luthringer R, Dupont C, Aubin HJ, Lagrue G
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16458598/
  kind: Crossover cessation study
  insight: A 24-hour patch reduced withdrawal-related sleep disruption in abstinent heavy smokers.
  limitation: Small dependent-smoker study; cannot isolate nicotine from withdrawal relief.
  pmid: "16458598"
  doi: 10.1016/j.sleep.2005.09.008
  funding: Non-U.S. government support listed in PubMed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the abstract.
  conflictOfInterestStatus: not-assessed
- id: najem2006
  title: Acute cardiovascular and sympathetic effects of nicotine replacement therapy
  authors: Najem B, Chanudet X, Dallel R, et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16651463/
  kind: Human physiological study
  insight: 4 mg sublingual nicotine increased heart rate, mean blood pressure and muscle sympathetic nerve activity.
  limitation: 16 healthy smokers and one dose.
  pmid: "16651463"
  doi: 10.1161/01.HYP.0000219284.47970.34
  funding: Non-U.S. government support listed in PubMed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the abstract.
  conflictOfInterestStatus: not-assessed
- id: assali2009
  title: Weight gain and insulin resistance during nicotine replacement therapy
  authors: Assali AR, et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/10326169/
  kind: Small human metabolic study
  insight: Insulin sensitivity decreased during six weeks of NRT and increased after nicotine-free follow-up.
  limitation: 11 heavy smokers; old and small study.
  pmid: "10326169"
  doi: 10.1002/clc.4960220512
  funding: Full disclosure was not retrievable through the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: hartmann-boyce2018
  title: Nicotine replacement therapy versus control for smoking cessation
  authors: Hartmann-Boyce J, Chepkin SC, Ye W, et al.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29852054/
  kind: Cochrane systematic review
  insight: Any NRT increased long-term abstinence; product-specific relative risks were reported.
  limitation: Cessation context, heterogeneous products and variable adverse-event reporting.
  pmid: "29852054"
  doi: 10.1002/14651858.CD000146.pub5
  funding: Cochrane review; study-level disclosures were not fully inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: kim2023
  title: A systematic review of RCTs to examine the risk of adverse cardiovascular events with nicotine use
  authors: Kim MM, Steffensen I, Miguel RTD, et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37025687/
  kind: Systematic review of randomized trials
  insight: 42 randomized studies found no statistically significant difference in major cardiovascular events between nicotine and non-nicotine groups.
  limitation: Rare events, short follow-up and heterogeneous products; review externally performed for Reynolds American with industry authors.
  pmid: "37025687"
  doi: 10.3389/fcvm.2023.1111673
  funding: Externally performed for Reynolds American.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Authors included Reynolds American and BAT employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10071010/
- id: newhouse2012
  title: "Nicotine treatment of mild cognitive impairment: A 6-month double-blind pilot clinical trial"
  authors: Newhouse P, Kellar K, Aisen P, et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22232050/
  kind: Randomized pilot trial
  insight: 15 mg/day patch improved several cognitive tests in 74 nonsmoking adults with amnestic MCI but not clinician-rated global impression.
  limitation: Pilot, six months, multiple outcomes and no dementia or mortality endpoint.
  pmid: "22232050"
  doi: 10.1212/WNL.0b013e31823efcbb
  funding: NIH and public support; Pfizer supplied patches.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Patch supply and public support were reported.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3466669/
- id: andrews2026
  title: "Long-term nicotine treatment of mild cognitive impairment: The MIND Trial"
  authors: Andrews P, Reman R, Armenta B, et al.
  year: 2026
  url: https://www.ajgponline.org/article/S1064-7481(26)00126-0/fulltext
  kind: Conference supplement randomized trial report
  insight: Top-line two-year data in 348 adults with MCI did not show significant cognitive or functional benefit.
  limitation: Conference supplement, high discontinuation and incomplete full disclosure.
  doi: 10.1016/j.jagp.2026.03.032
  funding: NIH, Alzheimer’s Drug Discovery Foundation and university support reported; no tobacco-company involvement reported in the available abstract.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Incomplete full publication and disclosure.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.ajgponline.org/article/S1064-7481(26)00126-0/fulltext
- id: claire2020
  title: Pharmacological interventions for promoting smoking cessation during pregnancy
  authors: Claire R, Chamberlain C, Davey MA, et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32129504/
  kind: Cochrane systematic review
  insight: Eleven trials in 2,412 pregnant smokers found low-certainty overall NRT abstinence benefit and no clear birth-outcome differences.
  limitation: Low adherence, risk of bias, imprecision and sparse child follow-up.
  pmid: "32129504"
  doi: 10.1002/14651858.CD010078.pub3
  funding: Cochrane review; full disclosures were not visible in the abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: dailymed-patch
  title: Nicotine Transdermal System Patch U.S. Drug Facts label
  authors: Strategic Sourcing Services LLC
  year: 2024
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c0b5b5c-cc76-6e48-c364-4db0e081557d
  kind: Official drug label
  insight: Patch strengths, schedules and warnings for cardiovascular disease, pregnancy, dreams, overdose, children and pets.
  limitation: One U.S. OTC product label, not a comparative clinical trial.
  funding: Manufacturer label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer labeler; no independent comparative estimate.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c0b5b5c-cc76-6e48-c364-4db0e081557d
- id: dailymed-gum
  title: Perrigo Nicotine Gum Drug Facts label
  authors: L. Perrigo Company
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fac52e0d-7a02-451e-a36b-30d49e929d3e
  kind: Official drug label
  insight: 2 mg and 4 mg strengths, schedule, maximum use and warnings.
  limitation: Product label; no independent comparative safety estimate.
  funding: Manufacturer label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer labeler.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fac52e0d-7a02-451e-a36b-30d49e929d3e
- id: fda-nicotine
  title: Nicotine Is Why Tobacco Products Are Addictive
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/tobacco-products/health-effects-tobacco-use/nicotine-why-tobacco-products-are-addictive
  kind: Official public-health source
  insight: Distinguishes nicotine addiction from tobacco-smoke toxicants and identifies approved NRT as the least harmful cessation category.
  limitation: Regulatory communication, not a systematic review.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: fda-cessation
  title: Want to Quit Smoking? FDA-Approved and FDA-Cleared Cessation Products Can Help
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://www.fda.gov/consumers/consumer-updates/want-quit-smoking-fda-approved-and-fda-cleared-cessation-products-can-help
  kind: Official public-health source
  insight: Lists FDA-approved and cleared cessation products and explains NRT avoids cigarette-smoke toxicants.
  limitation: Consumer regulatory guidance, not a new clinical trial.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: nci-withdrawal
  title: Tobacco Withdrawal
  authors: National Cancer Institute
  year: 2026
  url: https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet
  kind: Official educational source
  insight: Withdrawal is usually worst during the first week, peaks during the first three days and declines during the first month.
  limitation: Educational summary, not a new clinical trial.
  funding: Official NIH resource.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: schaffer2009
  title: "A review of smoking cessation: potentially risky effects on prescribed medications"
  authors: Schaffer SD, Yoon S, Zadezensky I
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19490292/
  kind: Clinical pharmacology review
  insight: Stopping smoke exposure reverses CYP1A2 induction and can raise concentrations of several medicines; NRT does not reproduce this induction.
  limitation: Older literature including case reports.
  pmid: "19490292"
  doi: 10.1111/j.1365-2702.2008.02724.x
  funding: Not assessed from the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: tobacco21
  title: Tobacco 21
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21
  kind: Official legal source
  insight: U.S. federal tobacco-product sale age is 21, including e-cigarettes, liquid nicotine and non-tobacco nicotine products; medicinal NRT is separate.
  limitation: U.S.-specific rule.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: eu-tpd
  title: Directive 2014/40/EU consolidated text, Article 20
  authors: European Union
  year: 2023
  url: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02014L0040-20231023
  kind: Official legal source
  insight: Consumer nicotine e-liquids are regulated under Article 20 with a 20 mg/mL concentration limit and packaging requirements.
  limitation: Member-state implementation and medicinal classification can differ.
  funding: Official EUR-Lex text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Sale and marketing of tobacco, e-cigarette, liquid and non-tobacco nicotine products
  status: Federal sale age is 21; medicinal NRT is regulated separately as a drug. Non-tobacco nicotine products require applicable FDA tobacco-product authorization to be lawfully marketed.
  sourceUrl: https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21
  asOf: 2026-10-22
- jurisdiction: European Union
  activity: Consumer nicotine e-liquids
  status: Directive 2014/40/EU Article 20 sets a 20 mg/mL nicotine limit and packaging, notification and warning requirements; national implementation varies.
  sourceUrl: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02014L0040-20231023
  asOf: 2026-10-22
```

