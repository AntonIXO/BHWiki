---
slug: donepezil
name: Donepezil
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - perceptual-cognitive-learning
  - paired-associate-memory
  - visual-processing
  - eeg-power
  - sustained-attention
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-28377707
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-28377707
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
x-order: 9007199254740991
---

## Summary

Donepezil inhibits acetylcholinesterase, increasing acetylcholine signalling. Studies explore memory and attention, with mixed results in healthy volunteers.

## Description

A 2011 randomized study in 42 healthy young men compared placebo, donepezil 5 mg and 7.5 mg; both doses improved sustained attention, reaction times, dual-task performance and the executive component of digit span, with effects not explained by arousal or visuomotor vigilance (PMID 21262858). A 2017 study randomized 17 young adults to 5 mg donepezil or placebo 3 hours before each of five weekly 3-D multiple-object-tracking sessions; learning emerged in the donepezil group by session 4, but there was no significant drug effect on performance level versus placebo and no effect on basic motion/orientation discrimination (PMID 28377707). In healthy older adults, 5 mg/day for up to four weeks and a single 5 mg dose produced significant negative effects on paired-associate learning and EEG bands, with hippocampal and network correlates (PMID 21931653).

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Acute executive-function study
  amount: 5-7.5 mg
  quantity: 5
  quantityMax: 7.5
  unit: mg
  ingredient: Donepezil
  formulation: Oral donepezil
  route: Oral
  frequency: Single acute treatment
  duration: Acute testing
  population: 42 healthy young men
  purpose: Executive-function and attention study
  sourceCategory: research
  note: Randomized placebo-controlled study used separate 5 mg and 7.5 mg groups.
  sourceId: pubmed-21262858
- label: Perceptual-cognitive training study
  amount: 5 mg
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Donepezil
  formulation: Oral donepezil
  route: Oral
  frequency: Before each weekly session
  duration: Five sessions over five weeks
  population: 17 young adults in the donepezil group
  purpose: 3-D multiple-object-tracking training
  sourceCategory: research
  note: 5 mg was administered 3 hours before each session.
  sourceId: pubmed-28377707
- label: Healthy older-adult study
  amount: 5 mg/day
  quantity: 5
  quantityMax: null
  unit: mg/day
  ingredient: Donepezil
  formulation: Oral donepezil
  route: Oral
  frequency: Daily or single dose by experiment
  duration: 6-hour, 2-week and 4-week follow-ups; separate single-dose experiment
  population: Healthy older adults
  purpose: Memory and EEG/fMRI study
  sourceCategory: research
  note: Abstract reports 5 mg/day chronic experiment and single 5 mg acute experiment.
  sourceId: pubmed-21931653
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
- id: donepezil-training-learning-28377707
  conceptId: perceptual-cognitive-learning
  name: Perceptual-cognitive training learning
  direction: Increased
  evidence: Human research
  description: Repeated 5 mg donepezil was associated with significant learning in the 3-D multiple-object-tracking task by session 4, although no significant drug effect on performance level versus placebo was found.
  sourceId: pubmed-28377707
  population: Young adults; n=17 donepezil group
  exposure: Donepezil 5 mg 3 hours before each weekly training session
  instrument: 3-D multiple-object tracking
  magnitude: Learning significant in donepezil group by session 4; subgroup follow-up n=9 suggested persistence
  reportType: measured-assessment
- id: donepezil-older-memory-21931653
  conceptId: paired-associate-memory
  name: Paired-associate memory in healthy older adults
  direction: Decreased
  evidence: Human research
  description: Both the chronic and single-dose healthy-older-adult experiments found significant negative effects of donepezil on paired-associate learning.
  sourceId: pubmed-21931653
  population: Healthy older participants
  exposure: Donepezil 5 mg/day chronic or single 5 mg dose
  instrument: Paired associates learning (CPAL)
  magnitude: Significant negative effect reported; exact estimates not in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: donepezil-basic-visual-processing-28377707
  conceptId: visual-processing
  name: Basic motion/orientation discrimination
  direction: Variable
  evidence: Human research
  description: Donepezil had no effect on basic visual processing in the independent motion and orientation discrimination task.
  sourceId: pubmed-28377707
  population: Young adults; one-time pre/post study n=10 without placebo control
  exposure: Donepezil 5 mg
  instrument: Motion and orientation discrimination
  magnitude: No drug effect reported
  reportType: measured-assessment
- id: donepezil-eeg-21931653
  conceptId: eeg-power
  name: Resting EEG power
  direction: Variable
  evidence: Human research
  description: Healthy older adults showed negative alpha and beta power effects and additional delta increases after donepezil, with fMRI correlates in hippocampal and frontoparietal/default-mode regions.
  sourceId: pubmed-21931653
  population: Healthy older participants
  exposure: Donepezil 5 mg/day or single 5 mg dose
  instrument: Resting EEG and simultaneous EEG/fMRI
  magnitude: Direction-specific band changes reported; exact estimates not in abstract
  reportType: measured-assessment
- id: donepezil-sustained-attention-21262858
  conceptId: sustained-attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: Acute donepezil improved sustained attention, reaction times, dual-task performance and the executive component of digit span in healthy young men.
  sourceId: pubmed-21262858
  population: 42 healthy young men
  exposure: Donepezil 5 mg or 7.5 mg orally
  instrument: Executive-function and attention test battery
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Cholinergic potentiation
  description: Donepezil inhibits acetylcholinesterase and enhances cholinergic transmission; the linked studies tested whether this changes executive attention, perceptual learning and memory in healthy volunteers.
  sourceId: pubmed-21262858
- title: Network and oscillatory modulation
  description: In healthy older adults, donepezil-related EEG changes mapped to left hippocampus, right frontoparietal network and default-mode network activity.
  sourceId: pubmed-21931653
```

## Cautions

```yaml
- title: Healthy older adults showed memory impairment
  description: The 5 mg studies reported significant negative effects on paired-associate memory in healthy older participants.
  sourceId: pubmed-21931653
- title: Task-specific benefit
  description: Young-adult benefits were selective for sustained attention, reaction time, dual-task performance or training learning; basic visual processing and overall performance level were not improved.
  sourceId: pubmed-21262858
- title: Unverified additional links
  description: The visual short-term-memory and acute-mood links from the research index were retained as leads but not independently retrieved in this pass.
  sourceId: publication-link-a3bb0811c71b
```

## Claims

```yaml
- id: donepezil-claim-young-attention
  assertion: Acute donepezil 5-7.5 mg improved selected sustained-attention and executive measures in healthy young men.
  relation: experimental-effect
  participants:
    - entityId: substance:donepezil
      role: intervention
    - entityId: tag:sustained-attention
      role: outcome
  context: Double-blind placebo-controlled study in 42 healthy young men.
  sourceIds:
    - pubmed-21262858
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute small healthy-volunteer study; effects were domain-specific.
- id: donepezil-claim-older-memory-impairment
  assertion: Donepezil 5 mg impaired paired-associate memory in healthy older participants.
  relation: adverse-cognitive-effect
  participants:
    - entityId: substance:donepezil
      role: intervention
    - entityId: tag:paired-associate-memory
      role: outcome
  context: Double-blind placebo-controlled chronic and single-dose experiments.
  sourceIds:
    - pubmed-21931653
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Healthy older sample; does not address treatment of dementia.
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
- id: pubmed-28377707
  title: Cholinergic Potentiation Improves Perceptual-Cognitive Training of Healthy Young Adults in Three Dimensional Multiple Object Tracking.
  authors: Mira Chamoun; Frédéric Huppé-Gourgues; Isabelle Legault; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28377707/
  kind: PubMed publication
  insight: Donepezil 5 mg before weekly training sessions was associated with delayed 3-D tracking learning, without basic visual-processing or performance-level benefit.
  limitation: Small study; full text was retrieved from PMC5359296.
  pmid: "28377707"
  pmcid: PMC5359296
  doi: 10.3389/fnhum.2017.00128
- id: pubmed-21262858
  title: Acute effects of donepezil in healthy young adults underline the fractionation of executive functioning.
  authors: G E Ginani; S Tufik; O F A Bueno; et al.
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21262858/
  kind: PubMed publication
  insight: Acute 5 or 7.5 mg donepezil improved sustained attention, reaction times, dual-task performance and executive digit span in healthy young men.
  limitation: Small acute study; no general cognitive-enhancement conclusion.
  pmid: "21262858"
  doi: 10.1177/0269881110391832
- id: pubmed-21931653
  title: "Donepezil impairs memory in healthy older subjects: behavioural, EEG and simultaneous EEG/fMRI biomarkers."
  authors: Joshua H Balsters; Redmond G O'Connell; Mary P Martin; et al.
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21931653/
  kind: PubMed publication
  insight: Donepezil 5 mg/day and single 5 mg dosing impaired paired-associate learning and altered EEG/fMRI markers in healthy older adults.
  limitation: Healthy older sample; full text was retrieved from PMC3169575.
  pmid: "21931653"
  pmcid: PMC3169575
  doi: 10.1371/journal.pone.0024126
- id: publication-link-a3bb0811c71b
  title: Cholinergic enhancement improves visual short-term memory performance
  authors: Not established
  url: https://ww.journalofvision.org/content/13/9/161.short
  kind: research index external link
  insight: External source lead retained from research index.
  limitation: Not retrieved through PubMed/PMC in this pass. Publication year was not exposed by the linked source; the catalog year is not a publication-date claim.
  year: 2026
- id: publication-link-694be80d5bfb
  title: Acute mood effect of donepezil in young, healthy volunteers
  authors: Not established
  url: https://onlinelibrary.wiley.com/doi/10.1002/hup.2319/abstract
  kind: research index external link
  insight: External source lead retained from research index.
  limitation: Not retrieved through PubMed/PMC in this pass. Publication year was not exposed by the linked source; the catalog year is not a publication-date claim.
  year: 2026
```

## Legal

```yaml
[]
```
