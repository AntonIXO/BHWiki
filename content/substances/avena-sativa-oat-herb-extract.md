---
slug: avena-sativa-oat-herb-extract
name: Avena sativa (oat herb extract)
subtitle: Reddit index evidence trail.
aliases:
- oat herb extract
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
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: reddit-index-avena-sativa-oat-herb-extract
  observationId: avena-sativa-oat-herb-extract-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-avena-sativa-oat-herb-extract
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

Wild-green oat (Avena sativa/Neuravena) extracts produced task-specific attention, processing-speed and vascular responses in small randomized human studies. Effects varied by dose: 1,600 mg improved Stroop errors in older adults, while 800 mg improved several timed tasks in middle-aged adults.

## Description

The cited studies used different oat-herb preparations, doses and endpoints; findings should not be generalized to all oat products.

## Evidence note

Four PubMed abstracts were retrieved; no rights-eligible PMC full text was available. No oat-extract PK or elimination parameter was reported. Full-text retrieval status is recorded per reference; 0 of 4 PubMed records had a PMC identifier in this set.

## Doses

```yaml
- label: EEG/concentration study
  amount: 1,250 or 2,500 mg
  quantity: 1250
  quantityMax: 2500
  unit: mg
  ingredient: Avena sativa herba extract
  formulation: Neuravena
  route: Oral
  frequency: Single dose
  duration: Acute crossover
  population: Healthy subjects
  purpose: EEG and concentration research
  sourceCategory: research
  note: Compared with placebo.
  sourceId: reddit-pmid-21563962
- label: Older-adult Stroop study
  amount: 1,600 or 2,400 mg
  quantity: 1600
  quantityMax: 2400
  unit: mg
  ingredient: Avena sativa herb extract
  formulation: Neuravena
  route: Oral
  frequency: Single dose at weekly intervals
  duration: Acute crossover
  population: Older volunteers with below-average cognition
  purpose: Attention and concentration research
  sourceCategory: research
  note: 1,600 mg improved errors; 2,400 mg did not.
  sourceId: reddit-pmid-21711204
- label: Older-adult vascular study
  amount: 1,500 mg/day
  quantity: 1500
  quantityMax: null
  unit: mg/day
  ingredient: Wild green oat extract
  formulation: Encapsulated Neuravena
  route: Oral
  frequency: Daily
  duration: 24 weeks (12-week arms)
  population: Healthy adults >60 years
  purpose: Cerebrovascular and brachial FMD research
  sourceCategory: research
  note: Dose well tolerated in the study.
  sourceId: reddit-pmid-23221935
- label: Middle-aged cognitive study
  amount: 800 or 1,600 mg
  quantity: 800
  quantityMax: 1600
  unit: mg
  ingredient: Wild green-oat extract
  formulation: Neuravena
  route: Oral
  frequency: Single dose repeated across six visits
  duration: Acute crossover
  population: Healthy adults aged 40–65 years
  purpose: Attention, memory and executive-function research
  sourceCategory: research
  note: 800 mg produced the clearest task improvements.
  sourceId: reddit-pmid-26618715
```

## Pharmacokinetics

```yaml
- id: avena-sativa-oat-herb-extract-reddit-pk-unestablished
  analyte: Avena Sativa Oat Herb Extract
  route: Not established from abstract
  formulation: Study formulation not reported as a PK parameter
  population: Not established
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated elimination or concentration parameter was reported in the
    retrieved linked abstracts.
  sourceId: reddit-index-avena-sativa-oat-herb-extract
  modelEligible: false
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
- id: reddit-avena-sativa-attention-21711204
  conceptId: attention
  name: Stroop attention and concentration
  direction: Increased
  evidence: Human research
  description: In older volunteers, 1,600 mg produced fewer color-naming errors than
    placebo or 2,400 mg; interference improved in a seven-person suspected-impairment
    subgroup.
  sourceId: reddit-pmid-21711204
  population: Older volunteers with below-average cognitive performance
  exposure: 1,600 mg single dose
  instrument: Stroop Color-Word test
  magnitude: F(1,36)=18.85, p<0.001 for color naming
  reportType: measured-assessment
- id: reddit-avena-sativa-processing-26618715
  conceptId: cognitive-performance
  name: Timed cognitive performance
  direction: Increased
  evidence: Human research
  description: In adults aged 40–65, 800 mg increased global speed across timed tasks
    and improved delayed word recall and executive-task completion times; some working-memory
    benefit appeared only on the second occasion.
  sourceId: reddit-pmid-26618715
  population: Healthy adults aged 40–65 with self-reported memory decline
  exposure: 800 mg single dose
  instrument: Computerized attention, memory and executive tasks
  magnitude: Task-specific; optimal dose at or below 800 mg
  reportType: measured-assessment
- id: reddit-avena-sativa-vascular-23221935
  conceptId: vascular-function
  name: Cerebrovascular and brachial vasodilator responsiveness
  direction: Increased
  evidence: Human research
  description: 1,500 mg/day wild green oat extract for 12-week intervention arms increased
    middle-cerebral-artery CVR by 42% and brachial FMD by 41% versus placebo.
  sourceId: reddit-pmid-23221935
  population: 37 healthy adults >60 years
  exposure: 1,500 mg/day
  instrument: Flow-mediated dilation and hypercapnia CVR
  magnitude: 42% and 41%, P<0.01
  reportType: measured-assessment
- id: reddit-avena-sativa-eeg-21563962
  conceptId: attention
  name: EEG spectral changes during concentration
  direction: Variable
  evidence: Human research
  description: 1,250 or 2,500 mg altered regional EEG δ/θ power during rest and d2
    concentration testing; no P300 effect was observed.
  sourceId: reddit-pmid-21563962
  population: Healthy subjects
  exposure: 1,250 or 2,500 mg
  instrument: Quantitative EEG, d2 and mental arithmetic
  magnitude: Spectral changes; behavioral inference limited
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Dose-specific effects
  description: The 1,600 mg Stroop benefit was not reproduced at 2,400 mg, and the
    middle-aged study favored 800 mg; dose-response is not monotonic.
  sourceId: reddit-pmid-21711204
- title: Small samples and subgroup analysis
  description: The studies were small; some findings came from a seven-person subgroup
    or repeated within-subject testing.
  sourceId: reddit-pmid-21711204
- title: Product heterogeneity
  description: Neuravena and wild-green-oat preparations differ across studies, limiting
    cross-study pooling.
  sourceId: reddit-pmid-23221935
```

## Claims

```yaml
- id: reddit-claim-avena-sativa-oat-herb-extract-21711204-0
  assertion: Avena extract improved selected attention and processing-speed tasks
    in older and middle-aged adults at study-specific doses.
  relation: associated-with
  participants:
  - entityId: substance:avena-sativa-oat-herb-extract
    role: intervention or exposure
  - entityId: tag:attention
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-21711204
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-avena-sativa-oat-herb-extract-23221935-1
  assertion: 1,500 mg/day wild-green-oat extract improved brachial FMD and cerebral
    vasodilator responsiveness in older adults.
  relation: associated-with
  participants:
  - entityId: substance:avena-sativa-oat-herb-extract
    role: intervention or exposure
  - entityId: tag:vascular-function
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-23221935
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-avena-sativa-oat-herb-extract-21563962-2
  assertion: Acute extract doses altered EEG spectral power, but P300 was unchanged.
  relation: associated-with
  participants:
  - entityId: substance:avena-sativa-oat-herb-extract
    role: intervention or exposure
  - entityId: tag:attention
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-21563962
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
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
- id: reddit-index-avena-sativa-oat-herb-extract
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Reddit index discovery link; it does not establish efficacy, dose or safety.
  limitation: Community index used as a discovery aid; publication evidence is evaluated in the linked records.
- id: reddit-pmid-26618715
  title: 'Acute effects of a wild green-oat (Avena sativa) extract on cognitive function in middle-aged adults: A double-blind, placebo-controlled, within-subjects trial.'
  authors: David O Kennedy, Philippa A Jackson, Joanne Forster, Julie Khan, Torsten Grothe, Tania Perrinjaquet-Moccetti, Crystal F Haskell-Ramsay
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/26618715/
  kind: PubMed publication
  insight: In adults aged 40–65, 800 mg acute Neuravena improved timed performance, delayed word recall and some executive/working-memory measures.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '26618715'
  doi: 10.1080/1028415X.2015.1101304
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21711204
  title: Acute effects of an Avena sativa herb extract on responses to the Stroop Color-Word test.
  authors: Narelle M Berry, Matthew J Robinson, Janet Bryan, Jonathan D Buckley, Karen J Murphy, Peter R C Howe
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21711204/
  kind: PubMed publication
  insight: In older adults, 1,600 mg reduced Stroop color-naming errors; 2,400 mg did not.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '21711204'
  doi: 10.1089/acm.2010.0450
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-f2d0bab436b3
  title: 'Neuravena® and the brain: first clinical data (2009)'
  authors: Not established
  year: 2009
  url: https://www.thieme-connect.com/products/ejournals/abstract/10.1055/s-0029-1239918
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21563962
  title: Ingested oat herb extract (Avena sativa) changes EEG spectral frequencies in healthy subjects.
  authors: Wilfried Dimpfel, Charlotte Storni, Marian Verbruggen
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21563962/
  kind: PubMed publication
  insight: Single 1,250/2,500 mg Neuravena altered EEG δ/θ power during rest/concentration; P300 unchanged.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '21563962'
  doi: 10.1089/acm.2010.0143
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-909507297b12
  title: 'EFFECTS OF A WILD GREEN OAT EXTRACT ON MENTAL PERFORMANCE: A HUMAN CLINICAL STUDY USING SOURCE DENSITY ANALYSIS OF THE HUMAN EEG'
  authors: Not established
  year: 2026
  url: https://journals.sfu.ca/africanem/index.php/ajtcam/article/view/931
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23221935
  title: Chronic consumption of a wild green oat extract (Neuravena) improves brachial flow-mediated dilatation and cerebrovascular responsiveness in older adults.
  authors: Rachel H X Wong, Peter R C Howe, Alison M Coates, Jonathan D Buckley, Narelle M Berry
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23221935/
  kind: PubMed publication
  insight: 1,500 mg/day wild-green-oat extract for 12 weeks improved cerebral CVR and brachial FMD by ~42% and 41%.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '23221935'
  doi: 10.1097/HJH.0b013e32835b04d4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
