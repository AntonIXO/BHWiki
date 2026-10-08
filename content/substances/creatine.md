---
slug: creatine
name: Creatine
subtitle: An energy reserve, studied over time.
aliases:
  - Creatine monohydrate (supplement form)
formula: C4H9N3O2
molecularWeight: 131.13 g/mol
pubchemCid: 586
smiles: CN(CC(=O)O)C(=N)N
category: Amino acid derivative
tags:
  - amino-acid
  - energy-buffer
  - exercise
  - muscle-stores
accent: "#c3b093"
reviewedAt: 2026-10-08
halfLife:
  label: Tissue stores matter
  low: null
  high: null
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  observationId: creatine-elimination
kinetics:
  onset: Tissue accumulation with repeated intake
  peak: Not summarized as a single acute peak
  duration: Muscle stores change gradually after supplementation stops
  bioavailability: No absolute estimate curated here
  metabolism: The creatine–phosphocreatine system supports energy buffering; creatinine is a breakdown product
  sourceId: hultman1996
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
x-order: 2
---

## Summary

An endogenous compound used in muscle energy metabolism. Supplementation reliably raises muscle creatine stores, while evidence for cognitive enhancement is context-dependent and not established for healthy, well-rested young adults. [2018 systematic review](https://pubmed.ncbi.nlm.nih.gov/29704637/) [2024 EFSA assessment](https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.9100)

## Description

Creatine is better understood through tissue stores and repeated supplementation than through an immediate subjective effect. Research on training outcomes and research on cognition ask different questions and should not share a single benefit score. A 2023 memory meta-analysis reported a small overall effect concentrated in older adults, while controlled trials in young rested adults were mostly null. [2023 memory meta-analysis](https://pubmed.ncbi.nlm.nih.gov/35984306/) [young-adult trial](https://pubmed.ncbi.nlm.nih.gov/18579168/)

## Evidence note

This article covers muscle stores, exercise, and the tested cognitive contexts of normal rest, older age, and acute sleep deprivation. The cognitive findings are heterogeneous, and the meta-analytic estimates are sensitive to correlated-test counting; they do not establish creatine as a general nootropic. [2026 methodological commentary](https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1716285/full)

## Doses

```yaml
- label: Gradual muscle-loading study
  amount: 3 g daily for 28 days
  route: Oral
  population: Male participants in a muscle-biopsy study
  note: This exposure increased muscle creatine stores. The compound diagram shows creatine, not the monohydrate formulation.
  sourceId: hultman1996
  quantity: 3
  quantityMax: null
  unit: g
  ingredient: Creatine
  formulation: Supplement preparation; hydrate form not assessed from the abstract
  frequency: Daily total; divided schedule not assessed
  duration: 28 days
  purpose: Measure change in muscle creatine concentration
  sourceCategory: research
- label: Cognitive trial in older adults
  amount: 10 g daily for 12 weeks
  route: Oral
  population: Middle-aged and older adults in a 2026 intervention
  note: Cognitive measures were exploratory outcomes, not an established cognitive dose.
  sourceId: creatine-aging-2026
  quantity: 10
  quantityMax: null
  unit: g
  ingredient: Creatine
  formulation: Supplement formulation; exact salt not specified in the research report
  frequency: Daily
  duration: 12 weeks
  purpose: Study body composition, health markers and exploratory cognitive outcomes
  sourceCategory: research
- label: Single-dose sleep-deprivation trial
  amount: 0.2–0.35 g/kg once
  route: Oral
  population: Healthy adults undergoing acute sleep deprivation
  note: Small crossover studies reported less cognitive deterioration; this does not establish routine use during normal sleep.
  sourceId: sleep-deprivation-2024
  quantity: 0.2
  quantityMax: 0.35
  unit: g/kg
  ingredient: Creatine
  formulation: Single-dose creatine; exact salt not specified in the cited report
  frequency: Once
  duration: Acute test session
  purpose: Assess cognitive performance during sleep deprivation
  sourceCategory: research
```

## Pharmacokinetics

```yaml
- id: creatine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  analyte: Creatine
  route: Oral
  formulation: Creatine supplementation; tissue stores are the reported endpoint
  population: Men in the cited muscle-loading study
  statistic: not-established
  value: null
  low: null
  high: null
  modelEligible: false
```

## Modifiers

```yaml
- label: Starting muscle stores
  effect: Response is not uniform
  detail: Baseline stores and supplementation history are part of the interpretation of muscle-loading studies.
  sourceId: hultman1996
  observationId: creatine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- name: Muscle creatine stores
  direction: Increased
  evidence: Human research
  description: Measured muscle stores rose with repeated intake in the cited study; this is a biochemical outcome rather than a subjective sensation.
  sourceId: hultman1996
  conceptId: muscle-stores
  population: Men in a study that enrolled 31 participants across supplementation protocols
  exposure: 3 g daily over 28 days
  instrument: Muscle total creatine concentration
  magnitude: null
- name: High-intensity exercise performance
  direction: Increased
  evidence: Human research
  description: The position stand summarizes benefits in studied exercise settings; effects depend on the task and training context.
  sourceId: kreider2017
  conceptId: exercise
  population: Exercise and training populations represented in the position stand
  exposure: Varied creatine supplementation protocols
  instrument: Multiple performance tests; no shared scale
  magnitude: null
- name: Memory performance
  direction: Variable
  evidence: Human research
  description: A 2023 meta-analysis of randomized trials reported a small overall memory effect, with a larger estimate in older adults and essentially no effect in younger adults; a later commentary identified non-independent test counting as a source of uncertainty.
  sourceId: creatine-memory-2023
  conflictingSourceIds:
    - commentary-2026
  conceptId: memory
  population: Healthy adults in randomized supplementation trials
  exposure: Varied oral creatine protocols
  instrument: Multiple memory tests
  magnitude: SMD 0.29 (95% CI 0.04 to 0.53) overall; younger subgroup SMD 0.03; older subgroup SMD 0.88
  reportType: measured-assessment
  study:
    id: creatine-memory-meta-2023
    design: Systematic review and meta-analysis of randomized controlled trials
    populationLabels:
      - Healthy adults
    comparator: Placebo or control
    route: Oral
    assessmentTime: Post-intervention memory assessment
  result:
    measure: standardized-mean-difference
    estimate: 0.29
    unit: standardized mean difference
    instrument: Multiple memory tests
    comparator: Placebo or control
    assessmentTime: Post-intervention
    population: Healthy adults in randomized trials
    confidenceInterval:
      lower: 0.04
      upper: 0.53
      level: 95
- name: Timed attention and processing speed
  direction: Variable
  evidence: Human research
  description: A 2024 meta-analysis reported favorable pooled estimates for timed attention and processing speed, but the measures were heterogeneous and the pooled effective sample size may be inflated by correlated tests.
  sourceId: creatine-cognition-2024
  conflictingSourceIds:
    - efsa-creatine-2024
    - commentary-2026
  conceptId: attention
  population: Adults in mixed healthy and clinical randomized trials
  exposure: Varied oral creatine protocols
  instrument: Timed attention and processing-speed tasks
  magnitude: Timed attention SMD -0.31; processing speed SMD -0.51; direction depends on the task score
  reportType: measured-assessment
  study:
    id: creatine-cognition-meta-2024
    design: Systematic review and meta-analysis of randomized controlled trials
    populationLabels:
      - Adults in mixed healthy and clinical populations
    comparator: Placebo or control
    route: Oral
    assessmentTime: Post-intervention assessment
  result:
    measure: standardized-mean-difference
    estimate: -0.31
    unit: standardized mean difference
    instrument: Timed attention tasks
    comparator: Placebo or control
    assessmentTime: Post-intervention
    population: Adults in included randomized trials
- name: Cognitive performance during acute sleep deprivation
  direction: Increased
  evidence: Human research
  description: Small randomized crossover studies reported less deterioration on several cognitive tasks after a single high dose during sleep deprivation; this context-specific result does not establish benefit during normal sleep.
  sourceId: sleep-deprivation-2024
  conceptId: attention
  population: Healthy adults during acute sleep deprivation
  exposure: Single oral dose of 0.2–0.35 g/kg
  instrument: Multiple cognitive tasks
  magnitude: Up to approximately 12% improvement was reported in one small study
  reportType: measured-assessment
  study:
    id: creatine-sleep-deprivation-2024
    design: Randomized crossover trials
    sampleSize: 29
    populationLabels:
      - Healthy adults
    comparator: Placebo
    route: Oral
    assessmentTime: During acute sleep deprivation
- name: Cognitive performance in older adults
  direction: Variable
  evidence: Human research
  description: Reviews and a newer intervention suggest possible memory or processing benefits in older adults, but the intervention evidence is sparse and the newer trial treated cognitive outcomes as exploratory.
  sourceId: creatine-aging-2026
  conflictingSourceIds:
    - creatine-aging-2025
  conceptId: memory
  population: Middle-aged and older adults
  exposure: Daily creatine supplementation, including 10 g/day for 12 weeks in one 2026 trial
  instrument: Selected memory and processing measures
  magnitude: Exploratory improvements reported; no single validated general-cognition effect established
  reportType: measured-assessment
  study:
    id: creatine-aging-2026
    design: Randomized intervention with exploratory cognitive outcomes
    populationLabels:
      - Middle-aged adults
      - Older adults
    comparator: Control intervention
    route: Oral
    durationDays: 84
    assessmentTime: 12 weeks
```

## Mechanisms

```yaml
- title: Energy buffering
  description: Creatine availability supports the phosphocreatine system, which helps regenerate ATP during demanding activity.
  sourceId: kreider2017
  conceptId: energy-buffer
```

## Cautions

```yaml
- title: Evidence is specific to the outcome
  description: Exercise evidence should not be treated as proof of a broad cognitive or anti-aging effect. Clinical populations require separate evidence.
  sourceId: kreider2017
- title: General cognitive enhancement is not established
  description: The strongest direct evidence does not support a reliable everyday nootropic effect in healthy, well-rested young adults. Older-adult and sleep-deprivation signals remain context-specific and uncertain.
  sourceId: efsa-creatine-2024
- title: Meta-analytic estimates require caution
  description: Correlated cognitive tests and heterogeneous instruments can make pooled effects look more precise than the underlying evidence supports.
  sourceId: commentary-2026
```

## Claims

```yaml
- id: muscle-stores
  assertion: Repeated supplementation raised muscle total creatine concentration.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:muscle-stores
      role: measured-outcome
  context: Men receiving the studied supplementation protocols.
  sourceIds:
    - hultman1996
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Muscle concentration is not itself a subjective or cognitive outcome.
- id: energy-buffer
  assertion: Creatine participates in phosphocreatine energy buffering.
  relation: metabolic-pathway
  participants:
    - entityId: substance:creatine
      role: substrate
    - entityId: tag:energy-buffer
      role: mechanism
    - entityId: tag:exercise
      role: related-outcome
  context: Exercise physiology reviewed in a professional-society position stand.
  sourceIds:
    - kreider2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Individual exercise outcomes depend on task and training context.
- id: cognitive-context
  assertion: Creatine's cognitive effects, if present, depend on population and metabolic context rather than constituting a general nootropic effect.
  relation: evidence-scope
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:memory
      role: cognitive-outcome
    - entityId: tag:attention
      role: cognitive-outcome
  context: Healthy adults studied during normal rest, older age, or acute sleep deprivation.
  sourceIds:
    - efsa-creatine-2024
    - creatine-memory-2023
    - sleep-deprivation-2024
  conflictingSourceIds:
    - creatine-cognition-2024
  assessment: not-formally-assessed
  limitation: Small samples, heterogeneous tests and methodological criticism prevent a general efficacy claim.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: hultman1996
  title: Muscle creatine loading in men
  authors: Hultman et al.
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8828669/
  kind: Human supplementation study
  insight: Compared muscle accumulation with different supplementation patterns in 31 men.
  limitation: Male-only sample; muscle concentration is not itself an exercise or cognitive outcome.
  funding: Not assessed; consult the original disclosure.
  pmid: "8828669"
  doi: 10.1152/jappl.1996.81.1.232
- id: kreider2017
  title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine"
  authors: Kreider et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28615996/
  kind: Position stand / review
  insight: Summarizes muscle energy metabolism and exercise supplementation research.
  limitation: A professional-society position stand, not an independent trial; proposed clinical uses vary in evidence strength.
  funding: Not assessed; consult the original disclosure.
  pmid: "28615996"
  doi: 10.1186/s12970-017-0173-z
- id: creatine-cognition-2018
  title: "Effects of creatine supplementation on cognitive function of healthy individuals: A systematic review of randomized controlled trials"
  authors: Kyriakos I. Avgerinos, Nikolaos Spyrou, Konstantinos I. Bougioukas, Dimitrios Kapogiannis
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29704637/
  kind: Systematic review of randomized controlled trials
  insight: Found possible short-term memory and reasoning signals, with generally null findings in young participants.
  limitation: Only six trials and 281 participants were included; cognitive domains and populations were heterogeneous.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "29704637"
  doi: 10.1016/j.exger.2018.04.013
- id: creatine-memory-2023
  title: "Effects of creatine supplementation on memory in healthy individuals: a systematic review and meta-analysis of randomized controlled trials"
  authors: Konstantinos Prokopidis, Petros Giannos, Konstantinos K. Triantafyllidis, Konstantinos S. Kechagias, Scott C. Forbes, Darren G. Candow
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/35984306/
  kind: Systematic review and meta-analysis of randomized controlled trials
  insight: Reported an overall memory SMD of 0.29, with a larger older-adult estimate and near-null younger-adult subgroup estimate.
  limitation: Multiple correlated cognitive tests and heterogeneous protocols limit certainty about the pooled estimate.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "35984306"
  doi: 10.1093/nutrit/nuac064
- id: creatine-cognition-2024
  title: "The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis"
  authors: Chen Xu, Siyuan Bi, Wenxin Zhang, Lin Luo
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/39070254/
  kind: Systematic review and meta-analysis
  insight: Reported favorable pooled estimates for memory, timed attention and processing speed, but not overall cognition or executive function.
  limitation: Mixed healthy and clinical populations and correlated outcomes make the domain-specific estimates difficult to interpret.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "39070254"
  doi: 10.3389/fnut.2024.1424972
- id: efsa-creatine-2024
  title: "Creatine and improvement in cognitive function: Evaluation of a health claim pursuant to Article 13(5) of Regulation (EC) No 1924/2006"
  authors: EFSA Panel on Nutrition, Novel Foods and Food Allergens
  year: 2024
  url: https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.9100
  kind: Regulatory scientific opinion
  insight: Concluded that a cause-and-effect relationship between creatine supplementation and improved cognitive function had not been established.
  limitation: A health-claim assessment rather than a new randomized trial.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
- id: young-adults-2008
  title: Creatine supplementation does not improve cognitive function in young adults
  authors: Rae et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18579168/
  kind: Randomized controlled trial
  insight: Found no significant cognitive benefit after supplementation in young adults.
  limitation: Small sample and restricted young-adult population.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "18579168"
- id: commentary-2026
  title: "Commentary: The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis"
  authors: Thomas Citherlet
  year: 2026
  url: https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1716285/full
  kind: Methodological commentary
  insight: Reported that non-independent cognitive tests had been double-counted and that reanalysis weakened the overall effect except possibly in older adults.
  limitation: Commentary and reanalysis, not an independent randomized trial.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "42039906"
  doi: 10.3389/fnut.2026.1716285
- id: creatine-aging-2025
  title: "Creatine and Cognition in Aging: A Systematic Review of Evidence in Older Adults"
  authors: Samantha Marshall, Alexandra Kitzan, Jasmine Wright, Laura Bocicariu, Lindsay S. Nagamatsu
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12793482/
  kind: Systematic review
  insight: Found positive associations in most included studies, but much of the evidence was observational and the intervention evidence was sparse.
  limitation: Observational associations cannot establish supplementation efficacy; only a small number of interventions were available.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "40971619"
  doi: 10.1093/nutrit/nuaf135
- id: creatine-aging-2026
  title: "Effects of creatine supplementation with and without exercise and diet intervention on body composition, cognitive function, and markers of health in middle-aged and older adults"
  authors: Jisun Chun, Yuhang Liu, Giuliet L. Kibler, Hudson Lee, Khatereh Babakhani, Nathaniel Rhoades, Ian Bivins, Joungbo Ko, Broderick Dickerson, Drew E. Gonzalez, Ryan J. Sowinski
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13463452/
  kind: Randomized intervention
  insight: Reported selected memory and processing improvements after 10 g/day for 12 weeks, with cognitive outcomes treated as exploratory.
  limitation: Exploratory cognitive endpoints and limited generalizability prevent a general cognitive-enhancement claim.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
- id: sleep-deprivation-2024
  title: Single dose creatine improves cognitive performance and induces changes in cerebral high energy phosphates during sleep deprivation
  authors: Ali Gordji-Nejad, Andreas Matusch, Sophie Kleedörfer, Harshal Jayeshkumar Patel, Alexander Drzezga, David Elmenhorst, Ferdinand Binkofski, Andreas Bauer
  year: 2024
  url: https://www.nature.com/articles/s41598-024-54249-9.pdf
  kind: Randomized crossover sleep-deprivation study
  insight: Reported less deterioration on several cognitive tasks after a single high dose during acute sleep deprivation.
  limitation: Small, acute, context-specific studies do not establish benefit during normal sleep or justify routine high-dose use.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  doi: 10.1038/s41598-024-54249-9
- id: pubchem
  title: "Creatine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/586
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
```

## Legal

```yaml
[]
```
