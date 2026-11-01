---
slug: farampator
name: Farampator
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
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: reddit-index-farampator
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-farampator
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

Farampator (1-(benzofurazan-5-ylcarbonyl)piperidine) was tested as a single 500 mg oral dose in 16 healthy older volunteers. The crossover study reported improved short-term memory but apparent impairment of episodic memory; headache, somnolence, and nausea occurred and were associated with higher plasma levels.



## Description

Farampator is an ampakine positive allosteric modulator of AMPA-type glutamate receptors. The Reddit-linked human study was a small randomized double-blind placebo-controlled crossover trial in healthy older adults; it does not establish clinical benefit or safety for patients.



## Evidence note

One Reddit-linked publication was resolved to PMID 17119538 and its PubMed abstract was reviewed. The study provides one acute human exposure with memory and tolerability findings; no PMC full text was available through PubMed for this record.



## Doses

```yaml
- label: Acute healthy-elderly crossover study
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Farampator
  formulation: Oral farampator
  route: Oral
  frequency: Single dose
  duration: Single experimental session
  population: 16 healthy elderly volunteers (8 male, 8 female; mean age 66.1 years)
  purpose: Memory and information-processing assessment
  sourceCategory: research
  note: Testing began 1 hour after intake, around the reported Tmax.
  sourceId: reddit-pmid-17119538
```



## Pharmacokinetics

```yaml
- id: farampator-plasma-levels-side-effects
  analyte: Farampator
  route: Oral
  formulation: 500 mg single oral dose
  population: 16 healthy elderly volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Participants reporting headache, somnolence or nausea had significantly higher plasma farampator levels than participants without side effects; the abstract does not provide a half-life or numeric concentration values.
  sourceId: reddit-pmid-17119538
  modelEligible: false
```



## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: farampator-short-term-memory
  conceptId: short-term-memory
  name: Short-term memory
  direction: Increased
  evidence: Human research
  description: A single 500 mg dose unequivocally improved short-term memory task performance in the reported crossover study.
  sourceId: reddit-pmid-17119538
  population: 16 healthy elderly volunteers
  exposure: Single 500 mg oral farampator dose
  instrument: Symbol recall and N-back tasks
  magnitude: Direction reported in abstract; numeric effect estimate not provided
  reportType: measured-assessment
- id: farampator-switching-errors
  conceptId: executive-function-state
  name: Switching errors
  direction: Decreased
  evidence: Human research
  description: Farampator tended to reduce switching errors on the continuous trail-making test; this was reported as a trend rather than a definitive efficacy result.
  sourceId: reddit-pmid-17119538
  population: 16 healthy elderly volunteers
  exposure: Single 500 mg oral farampator dose
  instrument: Continuous trail-making test
  magnitude: Trend only; numeric effect estimate not provided
  reportType: measured-assessment
- id: farampator-adverse-effects
  conceptId: adverse-effects
  name: Headache, somnolence and nausea
  direction: Increased
  evidence: Human research
  description: Drug-induced side effects included headache, somnolence and nausea; participants with side effects had higher plasma concentrations.
  sourceId: reddit-pmid-17119538
  population: 16 healthy elderly volunteers
  exposure: Single 500 mg oral farampator dose
  instrument: Adverse-event reporting and plasma levels
  magnitude: Incidence not provided in abstract
  reportType: measured-assessment
```



## Outcomes

```yaml
- id: farampator-memory-17119538
  study:
    id: farampator-17119538-trial
    design: Randomized double-blind placebo-controlled crossover study
    sampleSize: 16
    populationLabels:
    - Healthy elderly volunteers
    comparator: Placebo
    route: Oral
    formulation: Farampator
    assessmentTime: 1 hour after dosing
  reportType: measured-assessment
  conceptId: short-term-memory-outcome
  name: Short-term memory
  direction: Increased
  evidence: Human research
  description: The abstract reports unequivocal improvement in short-term memory after 500 mg farampator, with apparent impairment of episodic memory in the same participants.
  sourceId: reddit-pmid-17119538
  population: 16 healthy elderly volunteers
  exposure: Single 500 mg oral dose
  instrument: Symbol recall and N-back tasks
  magnitude: Numeric effect size not provided in abstract
- id: farampator-episodic-memory
  conceptId: episodic-memory
  name: Episodic memory
  direction: Decreased
  evidence: Human research
  description: The same acute dose appeared to impair episodic memory on word-list learning and picture-memory tasks.
  sourceId: reddit-pmid-17119538
  population: 16 healthy elderly volunteers
  exposure: Single 500 mg oral farampator dose
  instrument: Word-list learning and picture-memory tasks
  magnitude: Direction reported in abstract; numeric effect estimate not provided
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: AMPA receptor positive allosteric modulation
  description: Farampator is described as an ampakine that positively modulates AMPA-type glutamate receptors and facilitates hippocampal long-term potentiation, a mechanism associated with memory storage and consolidation.
  sourceId: reddit-pmid-17119538
```



## Cautions

```yaml
- title: Acute adverse effects and exposure relationship
  description: Headache, somnolence and nausea were reported after the 500 mg dose; participants with side effects had significantly higher plasma farampator levels. The small healthy-elderly study does not define broader safety.
  sourceId: reddit-pmid-17119538
- title: Mixed memory findings
  description: Short-term memory improved while episodic memory appeared impaired, so the result does not support a general cognitive-enhancement claim.
  sourceId: reddit-pmid-17119538
```

## Claims

```yaml
- id: farampator-short-term-memory-claim
  assertion: In a small acute crossover study of healthy older adults, 500 mg farampator improved short-term-memory task performance.
  relation: associated-with
  participants:
  - entityId: substance:farampator
    role: intervention
  - entityId: tag:short-term-memory
    role: reported endpoint
  context: Single-dose randomized placebo-controlled crossover study; not evidence of clinical benefit.
  sourceIds:
  - reddit-pmid-17119538
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small healthy-elderly sample and mixed memory effects; no clinical population studied.
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
  url: https://en.wikipedia.org/wiki/Farampator
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-farampator
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index links the farampator publication reviewed below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-17119538
  title: Acute effects of the ampakine farampator on memory and information processing in healthy elderly volunteers
  authors: Elke Wezenberg, Robert Jan Verkes, Ge S F Ruigt, Wouter Hulstijn, Bernard G C Sabbe
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17119538/
  kind: PubMed randomized crossover trial
  insight: In 16 healthy elderly volunteers, a single 500 mg dose improved short-term memory, appeared to impair episodic memory, and produced headache, somnolence and nausea; side-effect reporters had higher plasma levels.
  limitation: Small acute study; no numeric effect sizes or half-life were available in the abstract, and no PMC full text was available through PubMed.
  pmid: '17119538'
  doi: 10.1038/sj.npp.1301257
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
