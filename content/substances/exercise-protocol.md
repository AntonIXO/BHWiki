---
slug: exercise-protocol
name: Exercise
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Reddit index entry
tags:
- reddit-index
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Exercise is a non-pharmacologic exposure; the linked studies report no analyte half-life or pharmacokinetic endpoint.
  sourceId: reddit-index-exercise-protocol
kinetics:
  onset: Exercise is an acute physiologic exposure rather than a drug with an onset pharmacokinetic parameter.
  peak: No analyte peak was measured in the linked exercise protocols.
  duration: Protocol durations are recorded in Doses; no elimination duration applies.
  bioavailability: Bioavailability is not applicable to exercise.
  metabolism: No drug metabolism endpoint applies.
  sourceId: reddit-index-exercise-protocol
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
- externalWikiLinks
- references
- legal
---

## Summary

The Reddit trail links nine PubMed studies covering acute exercise, fitness, learning, executive function, BDNF, and green-exercise recovery. Findings are endpoint-specific: moderate exercise improved selected learning or working-memory measures, maximal exercise transiently impaired working memory until recovery, and higher cardiorespiratory fitness was cross-sectionally associated with better cognition. These studies do not define a universal exercise prescription.

## Description

This page records the tested exercise exposures and measured outcomes rather than treating exercise as a single dose. Protocols include 20–40 minutes at 60–80% heart-rate reserve, 30 minutes at about 70% HRmax, moderate treadmill cycling, a ~1.8 km nature walk, maximal treadmill exercise to exhaustion, and observational VO2max testing. Some links in the Reddit index are non-PubMed discovery leads.

## Evidence note

Nine PubMed abstracts (PMIDs 24149158, 27146330, 27117045, 26950138, 26706889, 25304335, 23064033, 19235422, and 26740674) were retrieved. Rights-eligible PMC full text was retrieved for PMID 27146330 (PMC4857085) and PMID 26950138 (PMC4808943); PMC records for 24149158 and 26740674 were not rights-eligible for automated retrieval. The Reddit index also links non-PubMed/secondary pages whose methods and outcomes remain unreviewed.

## Doses

```yaml
- label: BDNF intensity/duration study
  amount: 20 or 40 minutes at 60% or 80% heart-rate reserve
  quantity: 20
  quantityMax: 40
  unit: minutes
  ingredient: Aerobic exercise
  formulation: Cycle ergometer
  route: Exercise exposure
  frequency: Single session
  duration: 20 or 40 minutes
  population: 45 healthy men aged 18–25 years
  purpose: Serum BDNF response
  sourceCategory: research
  note: Four exercise conditions were compared with seated controls; intensity was 60% or 80% heart-rate reserve.
  sourceId: reddit-pmid-24149158
- label: Learning study
  amount: 30 minutes at about 70% HRmax
  quantity: 30
  quantityMax: null
  unit: minutes
  ingredient: Aerobic exercise
  formulation: Cycle ergometer
  route: Exercise exposure
  frequency: Single session
  duration: 30 minutes
  population: Young healthy male volunteers in two learning experiments
  purpose: Visual orientation and motor learning
  sourceCategory: research
  note: Control condition used 20 W cycling; post-exercise learning was assessed for about 30 minutes.
  sourceId: reddit-pmid-27146330
- label: Executive-control crossover
  amount: Moderate treadmill exercise
  unit: session
  ingredient: Aerobic exercise
  formulation: Treadmill
  route: Exercise exposure
  frequency: Single session per crossover condition
  duration: Single laboratory session
  population: 51 participants
  purpose: Stroop inhibitory control and dietary self-control
  sourceCategory: research
  note: Compared with minimal-effort treadmill walking; exact workload/duration require full text.
  sourceId: reddit-pmid-27117045
  quantity: null
  quantityMax: null
- label: Green-exercise crossover
  amount: 1.8 km walk
  quantity: 1.8
  quantityMax: null
  unit: km
  ingredient: Walking exercise
  formulation: Natural or built outdoor route
  route: Exercise exposure
  frequency: One walk per condition
  duration: Approximately 17 minutes in the full text
  population: 13 recruited; 12 with analyzable overnight HRV
  purpose: Nocturnal autonomic recovery
  sourceCategory: research
  note: Randomized counterbalanced within-subject comparison; pace and route length were similar.
  sourceId: reddit-pmid-26950138
- label: Executive-function crossover
  amount: 30 minutes moderate-intensity cycling
  quantity: 30
  quantityMax: null
  unit: minutes
  ingredient: Aerobic exercise
  formulation: Cycle ergometer
  route: Exercise exposure
  frequency: Single session per condition
  duration: 30 minutes
  population: 26 healthy young adults
  purpose: Working memory and inhibitory control
  sourceCategory: research
  note: Compared with passive motor-driven cycling in a within-subject design.
  sourceId: reddit-pmid-25304335
- label: Maximal-exercise study
  amount: Maximal treadmill exercise to VO2max/exhaustion
  unit: session
  ingredient: Aerobic exercise
  formulation: Treadmill
  route: Exercise exposure
  frequency: Single bout
  duration: Until exhaustion
  population: 18 active and sedentary young women plus 8 nonexercising controls
  purpose: Attention and working memory during recovery
  sourceCategory: research
  note: Abstract reports 18–25-year-old women; exact workload is individualized to VO2max.
  sourceId: reddit-pmid-19235422
  quantity: null
  quantityMax: null
```
## Pharmacokinetics

```yaml
[]
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: reddit-exercise-bdnf-24149158
  conceptId: bdnf
  name: Serum BDNF
  direction: Increased
  evidence: Human research
  description: Exercise increased serum BDNF by about 32% from baseline and produced concentrations about 45% higher than seated control; 40-minute vigorous exercise had the greatest modeled BDNF integral and probability of a meaningful rise.
  sourceId: reddit-pmid-24149158
  population: 45 healthy men aged 18–25 years
  exposure: 20 or 40 minutes at 60% or 80% heart-rate reserve
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-exercise-cortical-map-26706889
  conceptId: cognitive-task-performance
  name: Motor-cortical map excitability
  direction: Increased
  evidence: Human research
  description: Combining an acute aerobic bout with bimanual motor training increased excitability within the trained-muscle cortical map more than training alone, but motor performance did not differ between groups.
  sourceId: reddit-pmid-26706889
  population: 25 young healthy right-handed adults
  exposure: Acute moderate-intensity aerobic exercise with or without motor training
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-exercise-green-hrv-26950138
  conceptId: exercise-recovery
  name: Nocturnal HRV/vagal markers
  direction: Increased
  evidence: Human research
  description: After a ~1.8 km lunchtime walk, SDNN, rMSSD, and SD1 during early sleep were significantly higher after the natural-route walk than after an equivalent built-route walk; sleep duration was not significantly different.
  sourceId: reddit-pmid-26950138
  population: 12 analyzable adults from 13 recruited
  exposure: Counterbalanced natural versus built 1.8 km walks
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-exercise-meta-cognition-23064033
  conceptId: cognitive-performance
  name: Cognitive processing speed
  direction: Variable
  evidence: Limited research
  description: Across acute-exercise studies, the pooled effect on cognition was small (g=0.14); moderate intensity produced larger speed effects than low or high intensity, while accuracy effects were very limited.
  sourceId: reddit-pmid-23064033
  population: Meta-analysis of acute exercise studies
  exposure: Differing exercise intensities
  magnitude: g=0.14 overall
  instrument: null
  reportType: measured-assessment
- id: reddit-exercise-fitness-cognition-26740674
  conceptId: cognitive-performance
  name: Global, memory, executive, and motor cognition
  direction: Increased
  evidence: Limited research
  description: In 877 adults (mean age 65 years), higher treadmill VO2max was associated with better global cognition, memory, executive function, and motor skills after adjustment for age, sex, education, and selected cardiovascular medications.
  sourceId: reddit-pmid-26740674
  population: 877 Austrian Stroke Prevention Study participants aged 65 ± 7 years
  exposure: Cardiorespiratory fitness measured by VO2max
  instrument: null
  magnitude: null
  reportType: measured-assessment

- id: reddit-exercise-learning-27146330
  conceptId: cognitive-task-performance
  name: Visual and motor learning
  direction: Increased
  evidence: Human research
  description: A single 30-minute bout at about 70% HRmax facilitated orientation-discrimination and thumb-abduction motor learning, with positive effects persisting for at least 30 minutes after exercise.
  sourceId: reddit-pmid-27146330
  population: Young healthy male volunteers
  exposure: 30-minute cycle exercise at about 70% HRmax
  instrument: Orientation-discrimination and motor-learning tasks
  magnitude: null
  reportType: measured-assessment
- id: reddit-exercise-stroop-27117045
  conceptId: cognitive-task-performance
  name: Stroop inhibitory control and snack intake
  direction: Increased
  evidence: Human research
  description: Moderate treadmill exercise improved Stroop performance and reduced consumption of appetitive calorie-dense snacks versus minimal-effort walking; the Stroop gain mediated the dietary effect.
  sourceId: reddit-pmid-27117045
  population: 51 crossover participants
  exposure: Moderate treadmill exercise
  instrument: Stroop task and laboratory taste test
  magnitude: null
  reportType: measured-assessment
- id: reddit-exercise-working-memory-25304335
  conceptId: memory
  name: Working-memory accuracy
  direction: Increased
  evidence: Human research
  description: Thirty minutes of moderate cycling increased 2-back facial-task accuracy by 6.4% ± 1.1% versus passive motor-driven cycling; flanker inhibitory control was unchanged.
  sourceId: reddit-pmid-25304335
  population: 26 healthy young adults
  exposure: 30-minute moderate cycling
  instrument: Facial n-back and flanker tasks
  magnitude: 6.4% ± 1.1% increase in 2-back accuracy
  reportType: measured-assessment
- id: reddit-exercise-exhaustion-19235422
  conceptId: memory
  name: Working memory after maximal exercise
  direction: Variable
  evidence: Limited research
  description: Working memory declined during and immediately after maximal treadmill exercise but improved after recovery; simple reaction time was not changed by exercise.
  sourceId: reddit-pmid-19235422
  population: Active and sedentary women aged 18–25 years
  exposure: Maximal treadmill exercise to exhaustion
  instrument: Working-memory and reaction-time tasks
  magnitude: null
  reportType: measured-assessment
```
## Mechanisms

```yaml
- title: BDNF-linked plasticity
  description: The BDNF study measured a ~32% serum increase after exercise. The learning study discusses BDNF and activity-dependent plasticity as a plausible mechanism, but did not measure brain BDNF directly.
  sourceId: reddit-pmid-24149158
- title: Activity-dependent learning
  description: A 30-minute bout at about 70% HRmax enhanced visual and motor learning for at least 30 minutes, consistent with transient exercise-related plasticity; the publication presents this as a mechanistic interpretation rather than proof of a single pathway.
  sourceId: reddit-pmid-27146330
- title: Executive-control transfer
  description: In the treadmill crossover, exercise-related Stroop improvement statistically mediated lower appetitive snack intake, supporting transfer from inhibitory control to dietary self-control in that task.
  sourceId: reddit-pmid-27117045
- title: Autonomic restoration after green exercise
  description: The open-access walk study found higher nocturnal SDNN, rMSSD, and SD1 after the natural route despite similar distance, pace, and perceived exertion, indicating greater vagal HRV during early sleep.
  sourceId: reddit-pmid-26950138
```

## Cautions

```yaml
- title: Acute maximal exercise can transiently impair working memory
  description: The exhaustion study found working-memory decline during and immediately after maximal exercise, with improvement only after recovery; acute high-intensity exercise should not be treated as uniformly cognitive-enhancing.
  sourceId: reddit-pmid-19235422
- title: Small and exploratory green-exercise study
  description: The natural-versus-built walk comparison analyzed overnight HRV in 12 participants, had a significant age imbalance by walk order, and did not show a significant sleep-duration benefit.
  sourceId: reddit-pmid-26950138
- title: Fitness association is not causal
  description: The 877-person Austrian study was cross-sectional/observational; higher VO2max associations with cognition do not establish that an exercise intervention would produce the same changes.
  sourceId: reddit-pmid-26740674
- title: Selective endpoint effects
  description: Moderate cycling improved 2-back accuracy but did not improve flanker inhibitory control, and cortical excitability gains did not translate into better motor-task performance in the cited studies.
  sourceId: reddit-pmid-25304335
```

## Claims

```yaml
- id: reddit-claim-exercise-24149158
  assertion: In healthy young men, a single 20–40 minute aerobic session at 60–80% heart-rate reserve increased serum BDNF, with the greatest modeled integral after 40 minutes of vigorous exercise.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:bdnf
    role: reported endpoint
  context: Randomized exercise-condition study with seated controls.
  sourceIds:
  - reddit-pmid-24149158
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Serum BDNF is a peripheral biomarker; cognitive benefit was not tested in this study.
- id: reddit-claim-exercise-27146330
  assertion: A single 30-minute aerobic bout at about 70% HRmax facilitated visual and motor learning for at least 30 minutes in young male volunteers.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:cognitive-task-performance
    role: reported endpoint
  context: Two controlled learning experiments with 20 W cycling controls.
  sourceIds:
  - reddit-pmid-27146330
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Young male sample and task-specific learning outcomes.
- id: reddit-claim-exercise-27117045
  assertion: Moderate treadmill exercise improved Stroop performance and reduced appetitive snack intake in a 51-person crossover study.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:cognitive-task-performance
    role: reported endpoint
  context: Exercise versus minimal-effort walking crossover.
  sourceIds:
  - reddit-pmid-27117045
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute laboratory taste-test outcome; exact protocol dose requires full text.
- id: reddit-claim-exercise-26950138
  assertion: A short natural-environment walk produced higher nocturnal vagal HRV markers than an equivalent built-environment walk in a small crossover study.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:exercise-recovery
    role: reported endpoint
  context: Open-access randomized counterbalanced 1.8 km walk study.
  sourceIds:
  - reddit-pmid-26950138
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Exploratory sample; sleep duration did not differ significantly.
- id: reddit-claim-exercise-25304335
  assertion: Thirty minutes of moderate cycling increased 2-back accuracy by 6.4% ± 1.1% but did not significantly change flanker inhibitory control.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:memory
    role: reported endpoint
  context: Within-subject moderate-cycling versus passive-cycling study.
  sourceIds:
  - reddit-pmid-25304335
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute task-specific effect.
- id: reddit-claim-exercise-23064033
  assertion: A meta-analysis found a small overall acute-exercise effect on cognition (g=0.14), with speed benefits largest at moderate intensity and limited accuracy effects.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Meta-analysis of acute exercise studies.
  sourceIds:
  - reddit-pmid-23064033
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Heterogeneous protocols and outcome tasks.
- id: reddit-claim-exercise-19235422
  assertion: Maximal treadmill exercise transiently reduced working memory during and immediately after exercise but performance improved after recovery in young women.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:memory
    role: reported endpoint
  context: Individualized VO2max/exhaustion protocol.
  sourceIds:
  - reddit-pmid-19235422
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small young-women sample.
- id: reddit-claim-exercise-26740674
  assertion: Higher treadmill VO2max was cross-sectionally associated with better global, memory, executive, and motor cognition in 877 older adults.
  relation: associated-with
  participants:
  - entityId: substance:exercise-protocol
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Austrian Stroke Prevention Study observational analysis.
  sourceIds:
  - reddit-pmid-26740674
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Association does not establish intervention causality.
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
- id: reddit-index-exercise-protocol
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-24149158
  title: The effects of aerobic exercise intensity and duration on levels of brain-derived neurotrophic factor in healthy men.
  authors: Matthew T Schmolesky, David L Webb, Rodney A Hansen
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24149158/
  kind: PubMed publication
  insight: In 45 healthy young men, 20–40 minutes at 60–80% heart-rate reserve increased serum BDNF by about 32%; vigorous 40-minute exercise had the greatest modeled integral.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '24149158'
  pmcid: PMC3772595
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-68d04ed3ca2d
  title: Skeletal Muscle PGC-1α1 Modulates Kynurenine Metabolism and Mediates Resilience to Stress-Induced Depression (2014)
  authors: Not established
  year: 2014
  url: https://www.reddit.com/r/Nootropics/comments/2hiuz0/skeletal_muscle_pgc1%CE%B11_modulates_kynurenine/
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27146330
  title: Acute effects of aerobic exercise promote learning.
  authors: Renza Perini, Marta Bortoletto, Michela Capogrosso, Anna Fertonani, Carlo Miniussi
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27146330/
  kind: PubMed publication
  insight: A single 30-minute aerobic bout at about 70% HRmax facilitated visual and motor learning for at least 30 minutes in young male volunteers.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '27146330'
  pmcid: PMC4857085
  doi: 10.1038/srep25440
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27117045
  title: An exploration of exercise-induced cognitive enhancement and transfer effects to dietary self-control.
  authors: Cassandra J Lowe, Dimitar Kolev, Peter A Hall
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27117045/
  kind: PubMed publication
  insight: Moderate treadmill exercise improved Stroop performance and reduced appetitive snack intake in a 51-person crossover study.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '27117045'
  doi: 10.1016/j.bandc.2016.04.008
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26950138
  title: 'A Lunchtime Walk in Nature Enhances Restoration of Autonomic Control during Night-Time Sleep: Results from a Preliminary Study.'
  authors: Valerie F Gladwell, Pekka Kuoppa, Mika P Tarvainen, Mike Rogerson
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26950138/
  kind: PubMed publication
  insight: In a small crossover, a ~1.8 km natural-route walk increased nocturnal SDNN, rMSSD, and SD1 versus a built-route walk; sleep duration did not differ significantly.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26950138'
  pmcid: PMC4808943
  doi: 10.3390/ijerph13030280
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26706889
  title: Aerobic exercise enhances neural correlates of motor skill learning.
  authors: Amaya M Singh, Jason L Neva, W Richard Staines
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26706889/
  kind: PubMed publication
  insight: Combining acute aerobic exercise with motor training increased trained-muscle cortical-map excitability more than training alone, without a performance difference.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26706889'
  doi: 10.1016/j.bbr.2015.12.020
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25304335
  title: Differential Effects of Acute Exercise on Distinct Aspects of Executive Function.
  authors: Timothy B Weng, Gary L Pierce, Warren G Darling, Michelle W Voss
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25304335/
  kind: PubMed publication
  insight: Thirty minutes of moderate cycling increased 2-back accuracy by 6.4% ± 1.1% versus passive cycling, while flanker inhibitory control did not change.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '25304335'
  doi: 10.1249/MSS.0000000000000542
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23064033
  title: 'Differential effects of differing intensities of acute exercise on speed and accuracy of cognition: a meta-analytical investigation.'
  authors: Terry McMorris, Beverley J Hale
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23064033/
  kind: PubMed publication
  insight: A meta-analysis found a small acute-exercise cognitive effect (g=0.14); moderate intensity produced larger speed effects and accuracy effects were limited.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23064033'
  doi: 10.1016/j.bandc.2012.09.001
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-73828d02a8fd
  title: 'Physical exercise and executive functions in preadolescent children, adolescents and young adults: a meta-analysis (2013)'
  authors: Not established
  year: 2013
  url: https://bjsm.bmj.com/content/early/2013/02/13/bjsports-2012-091441
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-8aaa1504d62b
  title: 'Effect of Aerobic Training on Cognitive Function and Arterial Stiffness in Sedentary Young Adults: A Pilot Randomized Controlled Trial (2013)'
  authors: Not established
  year: 2013
  url: https://www.hindawi.com/journals/phj/2013/847325/abs/
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e08f7bbd70c1
  title: Effects of acute exercise on executive processing, short-term and long-term memory (2008)
  authors: Not established
  year: 2008
  url: https://www.tandfonline.com/doi/abs/10.1080/02640410701591417?journalCode=rjsp20
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19235422
  title: Short-term exercise to exhaustion and its effects on cognitive function in young women.
  authors: Christine Lo Bue-Estes, Barry Willer, Harold Burton, John J Leddy, Gregory E Wilding, Peter J Horvath
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19235422/
  kind: PubMed publication
  insight: Maximal treadmill exercise transiently reduced working memory during and immediately after exercise, with improvement after recovery in young women.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '19235422'
  doi: 10.2466/pms.107.3.933-945
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26740674
  title: 'Fitness and cognition in the elderly: The Austrian Stroke Prevention Study.'
  authors: Paul Freudenberger, Katja Petrovic, Abhijit Sen, Anna Maria Töglhofer, André Fixa, Edith Hofer, Sabine Perl, Robert Zweiker, Sudha Seshadri, Reinhold Schmidt, Helena Schmidt
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26740674/
  kind: PubMed publication
  insight: In 877 adults, higher treadmill VO2max was cross-sectionally associated with better global, memory, executive, and motor cognition after covariate adjustment.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26740674'
  pmcid: PMC4773949
  doi: 10.1212/WNL.0000000000002329
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-6a7a93ad2fc7
  title: Physical activity and enhanced fitness to improve cognitive function in older people without known cognitive impairment (2008)
  authors: Not established
  year: 2008
  url: https://summaries.cochrane.org/CD005381/physical-activity-and-enhanced-fitness-to-improve-cognitive-function-in-older-people-without-known-cognitive-impairment
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
