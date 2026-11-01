---
slug: blueberry
name: Blueberry
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
  sourceId: reddit-index-blueberry
  observationId: blueberry-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-blueberry
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

Blueberry interventions show preliminary, task-specific memory signals in small human studies and supportive animal findings; extract, dose and timing vary.

## Description

In 21 children, acute 15 or 30 g freeze-dried wild-blueberry powder improved selected memory and interference outcomes with a dose-response pattern. In nine older adults with early memory changes, 12 weeks of wild-blueberry juice improved paired-associate learning and word-list recall. Rat and mouse studies provide mechanistic or aging-model support but do not establish human efficacy.

## Evidence note

Reviewed PMIDs 26437830, 20047325, 22569815 and 27093246; retrieved rights-eligible PMC full text for PMID 20047325 (PMC2850944). Human samples were small and one older-adult trial was preliminary; animal findings are labeled separately.

## Doses

```yaml
- label: Acute wild-blueberry child trial (PMID 26437830)
  amount: 15 or 30 g freeze-dried wild-blueberry powder
  quantity: 15
  quantityMax: 30
  unit: g
  ingredient: Wild blueberry powder
  formulation: Blueberry drink
  route: Oral
  frequency: Single dose
  duration: Assessments at 1.15, 3 and 6 hours
  population: 21 children aged 7–10 years
  purpose: Acute cognition research exposure
  sourceCategory: research
  note: Double-blind crossover; 30 g performed best across measures.
  sourceId: reddit-pmid-26437830
- label: Older-adult blueberry juice study (PMID 20047325)
  amount: Daily wild-blueberry juice; volume not stated in abstract
  quantity: null
  quantityMax: null
  unit: not-established
  ingredient: Wild blueberry juice
  formulation: Juice
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: 9 older adults with early memory changes
  purpose: Memory research exposure
  sourceCategory: research
  note: Abstract does not report juice volume.
  sourceId: reddit-pmid-20047325
- label: Young-rat blueberry diet (PMID 22569815)
  amount: 2% w/w blueberry diet
  quantity: 2
  quantityMax: null
  unit: percent w/w
  ingredient: Blueberry-rich diet
  formulation: Diet admixture
  route: Oral
  frequency: Ad libitum diet
  duration: 7 weeks
  population: 2-month-old rats
  purpose: Spatial-memory and mechanism research exposure
  sourceCategory: research
  note: Animal exposure; not a human dose.
  sourceId: reddit-pmid-22569815
```

## Pharmacokinetics

```yaml
- id: blueberry-reddit-pk-unestablished
  analyte: blueberry
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination-half-life observation was established in the inspected linked publications.
  sourceId: reddit-index-blueberry
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: blueberry-memory-26437830
  conceptId: memory-performance-effect
  name: Memory and interference-task performance
  direction: Increased
  evidence: Human research
  description: Acute wild-blueberry drinks improved final immediate recall, delayed word recognition and accuracy on demanding incongruent trials in children; effects followed a dose-response pattern.
  sourceId: reddit-pmid-26437830
  population: 21 children aged 7–10 years
  exposure: 15 or 30 g freeze-dried wild-blueberry powder
  instrument: Verbal memory, word recognition and response-interference tasks
  magnitude: Best performance generally followed 30 g; numeric effect sizes not reported in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: blueberry-memory-older-adults-20047325
  conceptId: episodic-memory
  name: Paired-associate learning and word-list recall
  direction: Increased
  evidence: Human research
  description: Twelve weeks of daily wild-blueberry juice improved paired-associate learning and word-list recall in nine older adults with early memory changes.
  sourceId: reddit-pmid-20047325
  population: 9 older adults with early memory changes
  exposure: Daily wild-blueberry juice for 12 weeks; volume not stated in abstract
  instrument: Paired-associate learning and word-list recall
  magnitude: P=0.009 and P=0.04 respectively
  reportType: measured-assessment
- id: blueberry-hippocampal-bdnf-22569815
  conceptId: hippocampal-bdnf
  name: Hippocampal BDNF expression
  direction: Increased
  evidence: Limited research
  description: A 2% w/w blueberry diet improved spatial working memory in young rats and increased hippocampal BDNF, CREB and ERK1/2 signaling.
  sourceId: reddit-pmid-22569815
  population: Young healthy rats
  exposure: 2% w/w blueberry diet for 7 weeks
  instrument: Radial-maze delayed non-match task and hippocampal molecular assays
  magnitude: Increased BDNF mRNA in dentate gyrus and CA1; numeric effect not stated in abstract
  reportType: measured-assessment
- id: blueberry-aging-memory-27093246
  conceptId: aging-memory
  name: Episodic-like and working memory in aged mice
  direction: Increased
  evidence: Limited research
  description: Chronic wild-blueberry full-spectrum powder or extract improved contextual episodic-like memory in aged mice; only the full-spectrum powder improved spatial and working memory versus untreated aged mice.
  sourceId: reddit-pmid-27093246
  population: 18-month-old aged mice compared with young mice
  exposure: Daily wild-blueberry extract or full-spectrum powder for up to 75 days
  instrument: Contextual serial discrimination, Morris water maze and sequential alternation
  magnitude: Significant improvement versus untreated aged mice; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: ERK–CREB–BDNF signaling in rats
  description: In young rats, blueberry-associated spatial-memory improvement tracked activation of ERK1/2, increased CREB and elevated hippocampal BDNF.
  sourceId: reddit-pmid-22569815
```

## Cautions

```yaml
- title: Small and heterogeneous evidence base
  description: Human studies were small, used different blueberry products and schedules, and do not establish a general dose or long-term preventive effect.
  sourceId: reddit-pmid-26437830
```

## Claims

```yaml
- id: blueberry-claim-memory-26437830
  assertion: Acute wild-blueberry powder improved selected memory and interference outcomes in one small crossover study of children.
  relation: associated-with
  participants:
  - entityId: substance:blueberry
    role: intervention
  - entityId: tag:memory-performance
    role: reported endpoint
  context: 21-child dose-response crossover study.
  sourceIds:
  - reddit-pmid-26437830
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single small pediatric study; product-specific dosing.
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
- id: reddit-index-blueberry
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-26437830
  title: Cognitive effects following acute wild blueberry supplementation in 7- to 10-year-old children.
  authors: Adrian R Whyte, Graham Schafer, Claire M Williams
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26437830/
  kind: PubMed publication
  insight: 'PURPOSE: Previously, anthocyanin-rich blueberry treatments have shown positive effects on cognition in both animals and human adults.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '26437830'
  doi: 10.1007/s00394-015-1029-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20047325
  title: Blueberry supplementation improves memory in older adults.
  authors: Robert Krikorian, Marcelle D Shidler, Tiffany A Nash, Wilhelmina Kalt, Melinda R Vinqvist-Tymchuk, Barbara Shukitt-Hale, James A Joseph
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20047325/
  kind: PubMed publication
  insight: The prevalence of dementia is increasing with expansion of the older adult population.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '20047325'
  doi: 10.1021/jf9029332
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27093246
  title: Intake of Wild Blueberry Powder Improves Episodic-Like and Working Memory during Normal Aging in Mice.
  authors: Daniel Beracochea, Ali Krazem, Nadia Henkouss, Guillaume Haccard, Marc Roller, Emilie Fromentin
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27093246/
  kind: PubMed publication
  insight: The number of Americans older than 65 years old is projected to more than double in the next 40 years.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '27093246'
  doi: 10.1055/s-0042-104419
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22569815
  title: Blueberry supplementation induces spatial memory improvements and region-specific regulation of hippocampal BDNF mRNA expression in young rats.
  authors: Catarina Rendeiro, David Vauzour, Rebecca J Kean, Laurie T Butler, Marcus Rattray, Jeremy P E Spencer, Claire M Williams
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22569815/
  kind: PubMed publication
  insight: 'RATIONALE: Flavonoid-rich foods have been shown to be able to reverse age-related cognitive deficits in memory and learning in both animals and humans.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22569815'
  doi: 10.1007/s00213-012-2719-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
