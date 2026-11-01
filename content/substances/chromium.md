---
slug: chromium
name: Chromium
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
  sourceId: optihealth-substance-01a08b04-2eed-75f1-8bf3-49eafc13d2b8
  observationId: chromium-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2eed-75f1-8bf3-49eafc13d2b8
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
x-order: 1365
---

## Summary

Chromium picolinate studies show mixed, endpoint-specific signals in cognition and atypical depression; most evidence is small, short or open-label.

## Description

The linked human trials used elemental chromium doses around 400–600 µg/day. One 26-person older-adult trial found reduced semantic interference without faster learning or retention; depression trials found either carbohydrate-craving improvements or mixed/null global mood effects. Mechanistic work implicates insulin sensitivity and 5-HT2A signaling.

## Evidence note

Evidence ranges from a 26-person 12-week cognition trial to small depression pilots and a 113-person 8-week trial. The 600 µg/day atypical-depression replication was null on primary HAM-D/CGI outcomes but improved appetite/craving items, with a high-craving subgroup signal. No PK or universal cognitive dose is established.

## Doses

```yaml
- label: Chromium picolinate atypical-depression trial
  amount: 600 µg/day elemental chromium
  quantity: 600
  quantityMax: null
  unit: µg/day
  ingredient: Chromium
  formulation: Chromium picolinate
  route: Oral
  frequency: Daily
  duration: 8 weeks
  population: 113 adults with atypical depression
  purpose: Depression and carbohydrate-craving research
  sourceCategory: research
  note: Primary HAM-D-29 and CGI-I outcomes were not significantly different overall.
  sourceId: reddit-pmid-16184071
- label: Chromium picolinate pilot
  amount: 600 µg/day
  quantity: 600
  quantityMax: null
  unit: µg/day
  ingredient: Chromium
  formulation: Chromium picolinate
  route: Oral
  frequency: Daily
  duration: 8 weeks
  population: 15 adults with atypical depression
  purpose: Depression research
  sourceCategory: research
  note: Small pilot; 7/10 chromium participants versus 0/5 placebo met responder criteria.
  sourceId: reddit-pmid-12559660
- label: Chromium 5-HT2A study
  amount: 400 µg/day
  quantity: 400
  quantityMax: null
  unit: µg/day
  ingredient: Chromium
  formulation: Chromium supplement
  route: Oral
  frequency: Daily
  duration: Short-term crossover
  population: Human and rat models
  purpose: Tryptophan availability and 5-HT2A response
  sourceCategory: research
  note: The linked abstract discusses 400 µg/day case-series dosing but does not provide complete human protocol details.
  sourceId: reddit-pmid-11823896
```

## Pharmacokinetics

```yaml
- id: chromium-identity-unassessed
  analyte: Chromium
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2eed-75f1-8bf3-49eafc13d2b8
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
- id: chromium-cognitive-20423560
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Chromium picolinate did not improve learning rate or retention but reduced semantic interference and increased task-related activation in several brain regions.
  sourceId: reddit-pmid-20423560
  population: 26 older adults with cognitive decline
  exposure: Chromium picolinate versus placebo for 12 weeks
  instrument: Learning, recall and recognition tasks; fMRI
  magnitude: null
  reportType: measured-assessment
- id: chromium-depression-16184071
  conceptId: depression-severity
  name: Depression Severity
  direction: Variable
  evidence: Human research
  description: In 113 randomized adults, 600 µg/day chromium did not separate from placebo on primary HAM-D-29 or CGI-I overall, but improved appetite and carbohydrate-craving items and a high-craving subgroup.
  sourceId: reddit-pmid-16184071
  population: Adults with atypical depression; ITT n=110
  exposure: 600 µg/day elemental chromium for 8 weeks
  instrument: HAM-D-29 and CGI-I
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Insulin and 5-HT2A pathways
  description: The linked studies propose insulin-sensitivity effects and report reduced 5-HT2A-mediated cortisol response after chromium, but mechanisms remain provisional.
  sourceId: reddit-pmid-11823896
```

## Cautions

```yaml
- title: Mixed mood efficacy
  description: Small pilots suggested antidepressant effects, while the larger replication was null on global primary outcomes; do not treat chromium as an established antidepressant.
  sourceId: reddit-pmid-16184071
```

## Claims

```yaml
- id: chromium-claim-20423560
  assertion: Chromium picolinate reduced semantic interference but did not improve learning rate or retention in a 12-week trial of 26 older adults.
  relation: associated-with
  participants:
  - entityId: substance:chromium
    role: intervention
  - entityId: tag:cognitive-performance
    role: measured endpoint
  context: Double-blind placebo-controlled trial.
  sourceIds:
  - reddit-pmid-20423560
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample and endpoint-specific effect.
- id: chromium-claim-16184071
  assertion: In atypical depression, 600 µg/day chromium showed no overall HAM-D/CGI benefit but improved appetite and carbohydrate-craving items.
  relation: associated-with
  participants:
  - entityId: substance:chromium
    role: intervention
  - entityId: tag:depression-severity
    role: measured endpoint
  context: 8-week randomized trial of 113 adults.
  sourceIds:
  - reddit-pmid-16184071
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Primary outcomes were null overall; subgroup signal requires replication.
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
  url: https://en.wikipedia.org/wiki/Chromium
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Chromium
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-2eed-75f1-8bf3-49eafc13d2b8
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2eed-75f1-8bf3-49eafc13d2b8
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-20423560
  title: Improved cognitive-cerebral function in older adults with chromium supplementation.
  authors: Robert Krikorian, James C Eliassen, Erin L Boespflug, Tiffany A Nash, Marcelle D Shidler
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20423560/
  kind: PubMed publication
  insight: Insulin resistance is implicated in the pathophysiological changes associated with Alzheimer's disease, and pharmaceutical treatments that overcome insulin resistance improve memory function in subjects with mild cognitive impairment (MCI) and early Alzheimer's disease.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '20423560'
  doi: 10.1179/147683010X12611460764084
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17224731
  title: A 2-year, open-label pilot study of adjunctive chromium in patients with treatment-resistant rapid-cycling bipolar disorder.
  authors: Benedikt L Amann, Roland Mergl, Eduard Vieta, Christoph Born, Igor Hermisson, Florian Seemueller, Sandra Dittmann, Heinz Grunze
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17224731/
  kind: PubMed publication
  insight: PubMed publication linked from the Reddit index.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '17224731'
  doi: 10.1097/JCP.0b013e31802e744b
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10221284
  title: Chromium potentiation of antidepressant pharmacotherapy for dysthymic disorder in 5 patients.
  authors: M N McLeod, B N Gaynes, R N Golden
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10221284/
  kind: PubMed publication
  insight: 'BACKGROUND: Dysthymic disorder is a relatively common illness that is often treated with antidepressants.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '10221284'
  doi: 10.4088/jcp.v60n0406
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16184071
  title: 'A double-blind, placebo-controlled, exploratory trial of chromium picolinate in atypical depression: effect on carbohydrate craving.'
  authors: John P Docherty, David A Sack, Mark Roffman, Manley Finch, James R Komorowski
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16184071/
  kind: PubMed publication
  insight: 'BACKGROUND: : In a small pilot trial, patients with atypical depression demonstrated significant positive therapeutic response to chromium picolinate.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16184071'
  doi: 10.1097/00131746-200509000-00004
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12559660
  title: 'Effectiveness of chromium in atypical depression: a placebo-controlled trial.'
  authors: Jonathan R T Davidson, Kurian Abraham, Kathryn M Connor, Malcolm N McLeod
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12559660/
  kind: PubMed publication
  insight: 'BACKGROUND: Chromium picolinate (CP) has been reported to benefit patients with symptoms of atypical depression.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '12559660'
  doi: 10.1016/s0006-3223(02)01500-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-7838011
  title: Longevity effect of chromium picolinate--'rejuvenation' of hypothalamic function?
  authors: M F McCarty
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/7838011/
  kind: PubMed publication
  insight: The first rodent longevity study with the insulin-sensitizing nutrient chromium picolinate has reported a dramatic increase in both median and maximal lifespan.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '7838011'
  doi: 10.1016/0306-9877(94)90076-0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11823896
  title: Chromium treatment decreases the sensitivity of 5-HT2A receptors.
  authors: M-J Attenburrow, J Odontiadis, B J Murray, P J Cowen, M Franklin
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11823896/
  kind: PubMed publication
  insight: 'RATIONALE: Recent case series suggest that chromium picolinate in doses of 400 microg daily may have antidepressant properties, perhaps through increasing the peripheral availability of tryptophan for brain serotonin (5-HT) synthesis.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '11823896'
  doi: 10.1007/s00213-001-0960-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
