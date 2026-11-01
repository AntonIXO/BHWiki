---
slug: dhea
name: DHEA
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2f0d-7f38-97b4-58a1fae652ef
  observationId: dhea-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f0d-7f38-97b4-58a1fae652ef
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
- externalWikiLinks
x-order: 1423
---
## Summary

DHEA (dehydroepiandrosterone) is a neurosteroid with receptor and brain-network effects reported in small human studies. The linked evidence is mixed and acute: one 7-day trial reported improved episodic recollection, mood and lower evening cortisol in healthy young men; 400 mg fMRI studies altered emotion circuitry and reduced emotional-memory accuracy; a 500 mg sleep study increased REM sleep and sigma-band EEG power. These results do not establish general cognitive benefit or long-term safety.

## Description

The 7-day randomized crossover study gave 150 mg twice daily to 24 healthy young men and reported improved VAS mood/memory, episodic recollection accuracy and lower evening cortisol (PMID 16231168). Single 400 mg fMRI studies in healthy participants (N=14 DHEA, N=15 placebo) found reduced amygdala/hippocampal activity, enhanced amygdala–hippocampus connectivity and reduced emotional-memory accuracy (PMID 23552182), while a resting-state study found reduced amygdala connectivity with periamygdala and insula (PMID 24302681). A 500 mg single oral dose in 10 healthy young men increased REM sleep and sigma EEG power during early REM sleep (PMID 7840167). Receptor assays report AR antagonism and preferential ERβ agonism at micromolar concentrations (PMID 15994348).

## Evidence note

Reviewed five PubMed abstracts and retained the Reddit-linked PDF and Cochrane links as unverified source leads. PMCID records were identified for PMID 23552182 (PMC3717538) and PMID 24302681 (PMC4739102), but full-text retrieval was rate-limited in this pass. PMID 16231168 and 7840167 had no PMC full text available. Human studies are small, acute/short-term and endpoint-specific; the 1997 PDF and Cochrane summary were not independently extracted.

## Doses

```yaml
- label: Episodic-memory crossover course
  amount: 150 mg twice daily
  quantity: 150
  quantityMax: 300
  unit: mg/day
  ingredient: DHEA
  formulation: Oral DHEA
  route: Oral
  frequency: Twice daily
  duration: 7 days
  population: 24 healthy young men
  purpose: Episodic memory, mood and cortisol study
  sourceCategory: research
  note: Dose and duration reported in the PubMed abstract.
  sourceId: reddit-pmid-16231168
- label: Emotion-regulation fMRI challenge
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: DHEA
  formulation: Oral DHEA
  route: Oral
  frequency: Single dose
  duration: Acute fMRI experiment
  population: 14 DHEA-treated participants; 15 placebo
  purpose: Emotion appraisal and memory study
  sourceCategory: research
  note: Single-dose exposure reported in the PubMed abstract.
  sourceId: reddit-pmid-23552182
- label: Resting-state connectivity challenge
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: DHEA
  formulation: Oral DHEA
  route: Oral
  frequency: Single dose
  duration: Acute fMRI experiment
  population: 14 DHEA-treated participants; 15 placebo
  purpose: Resting-state amygdala connectivity
  sourceCategory: research
  note: Single-dose exposure reported in the PubMed abstract.
  sourceId: reddit-pmid-24302681
- label: Sleep-stage study
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: DHEA
  formulation: Oral DHEA
  route: Oral
  frequency: Single dose
  duration: Overnight sleep recording
  population: 10 healthy young men
  purpose: Sleep and EEG study
  sourceCategory: research
  note: Single dose reported in the PubMed abstract.
  sourceId: reddit-pmid-7840167
```

## Pharmacokinetics

```yaml
- id: dhea-identity-unassessed
  analyte: DHEA
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This record does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2f0d-7f38-97b4-58a1fae652ef
  modelEligible: false
- id: dhea-reddit-pk-unestablished
  analyte: DHEA
  route: Oral
  formulation: Human study exposures
  population: Healthy volunteers in linked studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The linked abstracts report doses and outcomes but no validated human elimination half-life.
  sourceId: optihealth-substance-01a08b04-2f0d-7f38-97b4-58a1fae652ef
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: dhea-emotional-memory-23552182
  conceptId: emotional-memory
  name: Emotional-memory accuracy
  direction: Decreased
  evidence: Human research
  description: A single 400 mg DHEA dose reduced memory accuracy for emotional stimuli while altering emotion-regulation circuitry.
  sourceId: reddit-pmid-23552182
  population: Healthy participants in a randomized fMRI study
  exposure: DHEA 400 mg single dose
  instrument: Shifted-attention emotion appraisal task and fMRI
  magnitude: null
  reportType: measured-assessment
- id: dhea-rem-sleep-7840167
  conceptId: rem-sleep
  name: REM sleep
  direction: Increased
  evidence: Human research
  description: A single 500 mg oral DHEA dose increased REM sleep and sigma-band EEG power during the first two hours of REM sleep.
  sourceId: reddit-pmid-7840167
  population: 10 healthy young men
  exposure: DHEA 500 mg single dose
  instrument: Polysomnography and EEG spectral analysis
  magnitude: p<0.05 for reported REM/sigma effects
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: dhea-evening-cortisol-16231168
  conceptId: cortisol-response
  name: Evening cortisol
  direction: Decreased
  evidence: Human research
  description: The 7-day DHEA course reduced evening cortisol concentrations in healthy young men.
  sourceId: reddit-pmid-16231168
  population: 24 healthy young men
  exposure: DHEA 150 mg twice daily for 7 days
  instrument: Salivary cortisol
  magnitude: null
  reportType: measured-assessment
- id: dhea-negative-affect-23552182
  conceptId: negative-affect
  name: Negative affect
  direction: Decreased
  evidence: Human research
  description: Reduced amygdala/hippocampal activity and enhanced rACC activity were associated with reduced negative affect after 400 mg DHEA.
  sourceId: reddit-pmid-23552182
  population: Healthy participants
  exposure: DHEA 400 mg single dose
  instrument: Emotion appraisal task, self-report and fMRI
  magnitude: null
  reportType: measured-assessment
- id: dhea-amygdala-connectivity-24302681
  conceptId: amygdala-connectivity
  name: Resting-state amygdala connectivity
  direction: Decreased
  evidence: Human research
  description: Single-dose DHEA reduced amygdala connectivity with periamygdala and insula regions; connectivity reductions to precuneus were associated with less negative affect in the broader neurosteroid analysis.
  sourceId: reddit-pmid-24302681
  population: Healthy participants
  exposure: DHEA 400 mg single dose
  instrument: Resting-state fMRI
  magnitude: null
  reportType: measured-assessment
- id: dhea-memory-recollection-16231168
  conceptId: episodic-memory
  name: Episodic recollection accuracy
  direction: Increased
  evidence: Human research
  description: A 7-day 150 mg twice-daily DHEA course improved recollection accuracy in healthy young men.
  sourceId: reddit-pmid-16231168
  population: 24 healthy young men
  exposure: DHEA 150 mg twice daily for 7 days
  instrument: Episodic memory test with ERP/LORETA
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Steroid-receptor activity
  description: In receptor assays, DHEA bound androgen receptors with approximately 1 µM Ki and antagonized androgen-receptor transcription, while preferentially agonizing ERβ (EC50 approximately 200 nM); these concentrations and assays do not directly establish clinical effects.
  sourceId: reddit-pmid-15994348
- title: Emotion-regulation circuitry
  description: DHEA altered amygdala, hippocampal and rostral anterior cingulate activity/connectivity during emotion processing and at rest in fMRI studies.
  sourceId: reddit-pmid-23552182
```

## Cautions

```yaml
- title: Mixed cognitive direction
  description: The 7-day study reported improved episodic recollection, whereas the 400 mg fMRI study reported reduced emotional-memory accuracy; effects are task- and stimulus-specific.
  sourceId: reddit-pmid-16231168
- title: Small short-term studies
  description: Human evidence consists of small acute or 7-day experiments in healthy volunteers; no long-term cognitive or safety conclusion follows.
  sourceId: reddit-pmid-24302681
- title: Sleep alteration
  description: A single 500 mg dose increased REM sleep and sigma-band EEG power, indicating measurable sleep-architecture effects.
  sourceId: reddit-pmid-7840167
- title: Unverified conflicting links
  description: The Reddit-linked 1997 PDF and Cochrane summary were retained as leads but not independently retrieved or extracted in this pass.
  sourceId: reddit-link-1600637e0001
```

## Claims

```yaml
- id: dhea-claim-episodic-memory
  assertion: A 7-day course of oral DHEA improved episodic recollection accuracy in healthy young men.
  relation: experimental-effect
  participants:
  - entityId: substance:dhea
    role: intervention
  - entityId: tag:episodic-memory
    role: outcome
  context: Randomized double-blind crossover study; 150 mg twice daily for 7 days.
  sourceIds:
  - reddit-pmid-16231168
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small short-term study; not generalizable to long-term supplementation.
- id: dhea-claim-emotional-memory
  assertion: A single 400 mg DHEA dose altered emotion-regulation circuitry and reduced emotional-memory accuracy.
  relation: experimental-effect
  participants:
  - entityId: substance:dhea
    role: intervention
  - entityId: tag:emotional-memory
    role: outcome
  context: Randomized fMRI study in healthy participants.
  sourceIds:
  - reddit-pmid-23552182
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute fMRI study; reduced emotional-memory accuracy is not a general cognitive benefit.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Dehydroepiandrosterone
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/DHEA/
  title: Examine.com
```

## References

```yaml
- id: optihealth-substance-01a08b04-2f0d-7f38-97b4-58a1fae652ef
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f0d-7f38-97b4-58a1fae652ef
  kind: catalog-identity
  insight: Canonical DHEA identity provenance.
  limitation: Identity record, not efficacy or safety evidence.
- id: reddit-pmid-15994348
  title: Direct agonist/antagonist functions of dehydroepiandrosterone.
  authors: Fang Chen; Kristin Knecht; Elizabeth Birzin; et al.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15994348/
  kind: PubMed publication
  insight: Receptor assays found AR antagonism and preferential ERβ agonism at reported in-vitro concentrations.
  limitation: Cell/receptor assays; not a human clinical effect.
  pmid: '15994348'
  doi: 10.1210/en.2005-0368
- id: reddit-pmid-16231168
  title: 'Effects of DHEA administration on episodic memory, cortisol and mood in healthy young men: a double-blind, placebo-controlled study.'
  authors: Hamid A Alhaj; Anna E Massey; R Hamish McAllister-Williams
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16231168/
  kind: PubMed publication
  insight: DHEA 150 mg twice daily for 7 days improved recollection, mood and reduced evening cortisol in 24 healthy young men.
  limitation: Small 7-day crossover study; no long-term safety inference.
  pmid: '16231168'
  doi: 10.1007/s00213-005-0136-y
- id: reddit-pmid-23552182
  title: DHEA enhances emotion regulation neurocircuits and modulates memory for emotional stimuli.
  authors: Rebecca K Sripada; Christine E Marx; Anthony P King; et al.
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23552182/
  kind: PubMed publication
  insight: Single 400 mg DHEA reduced amygdala/hippocampal activity, reduced negative affect and reduced emotional-memory accuracy.
  limitation: Small acute fMRI study; PMC full text identified but not retrieved due connector errors/rate limits in this pass.
  pmid: '23552182'
  pmcid: PMC3717538
  doi: 10.1038/npp.2013.79
- id: reddit-pmid-24302681
  title: The neurosteroids allopregnanolone and dehydroepiandrosterone modulate resting-state amygdala connectivity.
  authors: Rebecca K Sripada; Robert C Welsh; Christine E Marx; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24302681/
  kind: PubMed publication
  insight: Single 400 mg DHEA reduced amygdala connectivity with periamygdala and insula in resting-state fMRI.
  limitation: Small acute fMRI study; PMC full text identified but not retrieved due connector errors/rate limits in this pass.
  pmid: '24302681'
  pmcid: PMC4739102
  doi: 10.1002/hbm.22399
- id: reddit-pmid-7840167
  title: DHEA administration increases rapid eye movement sleep and EEG power in the sigma frequency range.
  authors: E Friess; L Trachsel; J Guldner; et al.
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7840167/
  kind: PubMed publication
  insight: Single 500 mg DHEA increased REM sleep and sigma-band EEG power during early REM sleep in 10 healthy young men.
  limitation: Small acute sleep study; no clinical cognitive conclusion.
  pmid: '7840167'
  doi: 10.1152/ajpendo.1995.268.1.E107
- id: reddit-link-1600637e0001
  title: A Single Administration of Dehydroepiandrosterone Does Not Enhance Memory Performance in Young Healthy Adults, but Immediately Reduces Cortisol Levels (1997)
  authors: Not established
  year: 1997
  url: https://www.cog.psy.ruhr-uni-bochum.de/papers/1997/Wolf%281997%29_BiolPsychiatry.pdf
  kind: Reddit index external link
  insight: Source lead retained from Reddit index.
  limitation: Not retrieved through PubMed/PMC in this pass.
- id: reddit-link-bc819af82bbd
  title: No current evidence for an improvement in memory or other aspects of cognitive function of non-demented older people following DHEA supplements
  authors: Cochrane
  url: https://summaries.cochrane.org/CD006221/no-current-evidence-for-an-improvement-in-memory-or-other-aspects-of-cognitive-function-of-non-demented-older-people-following-dhea-supplements
  kind: Reddit index external link
  insight: Source lead retained from Reddit index.
  limitation: Not independently retrieved in this pass. Publication year was not exposed by the linked source; the catalog year is not a publication-date claim.
  year: 2026
```

## Legal

```yaml
[]
```
