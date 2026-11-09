---
slug: b-vitamin-complex
name: B Vitamin Complex
subtitle: B vitamin complexes combine several vitamins involved in energy metabolism and nervous-system function.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Vitamin and mineral
tags:
  - personal-strain
  - confusion
  - vigour
  - memory-performance
  - mood
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-21905094
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-21905094
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

B vitamin complexes combine several vitamins involved in energy metabolism and nervous-system function. Studies explore cognition and memory.

## Description

A 35-day randomized trial in 211 healthy women found small improvements on some memory measures after folate, B12 or B6 supplementation, without mood effects. A separate 90-day B-complex trial in 60 adults under work stress reported lower personal strain and less confusion/depressed mood, while most mood and anxiety measures did not change.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Folate arm (PMID 12042457)
  amount: 750 microg/day
  quantity: 750
  quantityMax: null
  unit: microg/day
  ingredient: Folic acid
  formulation: Oral supplement; formulation not specified in abstract
  route: Oral
  frequency: Daily
  duration: 35 days
  population: 211 healthy younger, middle-aged and older women
  purpose: Memory and mood research exposure
  sourceCategory: research
  note: Trial arm; not a general dosing recommendation.
  sourceId: pubmed-12042457
- label: Vitamin B12 arm (PMID 12042457)
  amount: 15 microg/day
  quantity: 15
  quantityMax: null
  unit: microg/day
  ingredient: Vitamin B12
  formulation: Oral supplement; formulation not specified in abstract
  route: Oral
  frequency: Daily
  duration: 35 days
  population: 211 healthy women across three age groups
  purpose: Memory and mood research exposure
  sourceCategory: research
  note: Trial arm; no mood benefit was found overall.
  sourceId: pubmed-12042457
- label: Vitamin B6 arm (PMID 12042457)
  amount: 75 mg/day
  quantity: 75
  quantityMax: null
  unit: mg/day
  ingredient: Pyridoxine (vitamin B6)
  formulation: Oral supplement; formulation not specified in abstract
  route: Oral
  frequency: Daily
  duration: 35 days
  population: 211 healthy women across three age groups
  purpose: Memory and mood research exposure
  sourceCategory: research
  note: Trial arm; do not infer safety for prolonged high-dose use.
  sourceId: pubmed-12042457
- label: Berocca high-dose B-complex plus vitamin C/minerals (PMID 20454891)
  amount: 1 effervescent tablet/day
  quantity: 1
  quantityMax: null
  unit: tablet/day
  ingredient: Berocca B-complex, vitamin C and mineral supplement
  formulation: Effervescent tablet; B1 15 mg, B2 15 mg, B6 10 mg, B12 10 microg, C 500 mg, biotin 150 microg, folic acid 400 microg, nicotinamide 50 mg, pantothenic acid 23 mg, calcium 100 mg, magnesium 100 mg and zinc 10 mg
  route: Oral
  frequency: Daily with water
  duration: 33 (plus or minus 2) days
  population: 215 healthy employed men aged 30–55 years
  purpose: Mood, stress and cognitive-performance research exposure
  sourceCategory: research
  note: Full text reports one tablet/day; this is a trial exposure, not a general recommendation.
  sourceId: pubmed-20454891
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
- id: b-vitamin-complex-personal-strain-21905094
  conceptId: personal-strain
  name: Personal strain
  direction: Decreased
  evidence: Human research
  description: After 12 weeks, participants assigned to a high-dose vitamin B-complex reported significantly lower personal strain than placebo after adjustment for personality and work demands.
  sourceId: pubmed-21905094
  population: 60 adults completing a 3-month double-blind randomized placebo-controlled trial
  exposure: High-dose vitamin B-complex; exact formulation and dose not stated in abstract
  instrument: Personality, work-demand, mood, anxiety and strain assessments
  magnitude: Significant between-group reduction; numeric effect size not reported in abstract
  reportType: measured-assessment
- id: b-vitamin-complex-confusion-21905094
  conceptId: confusion
  name: Confusion
  direction: Decreased
  evidence: Human research
  description: The same 12-week trial reported reduced confusion and depressed/dejected mood, with no treatment-related changes in other mood or anxiety measures.
  sourceId: pubmed-21905094
  population: 60 adults under chronic occupational stress
  exposure: High-dose vitamin B-complex; exact formulation and dose not stated in abstract
  instrument: Mood and psychological-strain scales
  magnitude: Significant reduction; numeric effect size not reported in abstract
  reportType: measured-assessment
- id: b-vitamin-complex-vigour-20454891
  conceptId: vigour
  name: Vigour and mental fatigue
  direction: Increased
  evidence: Human research
  description: In 215 healthy employed men, 33 days of Berocca supplementation improved POMS vigour and reduced self-rated mental tiredness before and after a cognitive-demand battery.
  sourceId: pubmed-20454891
  population: 215 healthy men aged 30–55 years
  exposure: One Berocca effervescent tablet/day for 33 days
  instrument: Profile of Mood States and cognitive-demand battery ratings
  magnitude: Significant improvements; numeric effect sizes not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: b-vitamin-complex-memory-12042457
  conceptId: memory-performance
  name: Memory performance
  direction: Increased
  evidence: Human research
  description: Supplementation with folate, vitamin B12 or vitamin B6 produced significant positive effects on some memory measures, but not mood, after 35 days.
  sourceId: pubmed-12042457
  population: 211 healthy younger, middle-aged and older women
  exposure: 750 microg folate/day, 15 microg vitamin B12/day, 75 mg vitamin B6/day, or placebo for 35 days
  instrument: Standardized tests of processing resources, memory, executive function and verbal ability
  magnitude: Some measures improved; the abstract does not quantify a common effect size
  reportType: measured-assessment
- id: b-vitamin-complex-mood-null-12042457
  conceptId: mood
  name: Mood
  direction: Variable
  evidence: Human research
  description: The 35-day vitamin-specific trial found no effect on self-reported mood.
  sourceId: pubmed-12042457
  population: 211 healthy women
  exposure: Folate, vitamin B12 or vitamin B6 supplementation
  instrument: Self-report mood measures
  magnitude: No significant effect reported
  reportType: measured-assessment
- id: b-vitamin-complex-serial-subtraction-20454891
  conceptId: cognitive-performance
  name: Serial-3s subtraction
  direction: Increased
  evidence: Human research
  description: The Berocca group performed better on the Serial 3s subtraction task during the final assessment after 33 days.
  sourceId: pubmed-20454891
  population: 215 healthy employed men
  exposure: One tablet/day Berocca for 33 days
  instrument: Serial 3s subtraction within a 60-minute cognitive-demand battery
  magnitude: Significant between-group improvement; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Prolonged pyridoxine doses above 50 mg/day
  description: A review concluded that evidence is limited but supplementation above 50 mg/day for an extended duration may cause harmful sensory neuropathy and should be discouraged.
  sourceId: pubmed-25137514
```

## Claims

```yaml
- id: b-vitamin-complex-claim-strain-21905094
  assertion: A high-dose vitamin B-complex was associated with lower personal strain and reduced confusion/depressed mood after 12 weeks in adults under work stress.
  relation: associated-with
  participants:
    - entityId: substance:b-vitamin-complex
      role: intervention
    - entityId: tag:personal-strain
      role: reported endpoint
  context: Randomized placebo-controlled trial; exact formulation and dose were not available in the abstract.
  sourceIds:
    - pubmed-21905094
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single trial with 60 completers; no generalized formulation or dose claim.
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
- id: pubmed-21905094
  title: The effect of 90 day administration of a high dose vitamin B-complex on work stress.
  authors: Con Stough, Andrew Scholey, Jenny Lloyd, Jo Spong, Stephen Myers, Luke A Downey
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21905094/
  kind: PubMed publication
  insight: "OBJECTIVE: Occupational stress is increasing in Western societies and the impact is significant at a personal, organisational and community level."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21905094"
  doi: 10.1002/hup.1229
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-6fe0d3ce433a
  title: Effects of high-dose B vitamin complex with vitamin C and minerals on subjective mood and performance in healthy males.
  authors: David O Kennedy; Rachel Veasey; Anthony Watson; et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20454891/
  kind: PubMed publication
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "20454891"
  doi: 10.1007/s00213-010-1870-3
- id: pubmed-12042457
  title: Short-term folate, vitamin B-12 or vitamin B-6 supplementation slightly affects memory performance but not mood in women of various ages.
  authors: Janet Bryan, Eva Calvaresi, Donna Hughes
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12042457/
  kind: PubMed publication
  insight: Based on research demonstrating associations between folate, B-12 and B-6 vitamins and cognition and mood, we investigated the effects of short-term supplementation in 211 healthy younger, middle-aged and older women who took either 750 microg of folate, 15 microg of vitamin B-12, 75 mg of vitamin B-6 or a placebo daily for 35 d.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12042457"
  doi: 10.1093/jn/132.6.1345
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25137514
  title: Revisiting the evidence for neuropathy caused by pyridoxine deficiency and excess.
  authors: Amer A Ghavanini, Kurt Kimpinski
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25137514/
  kind: PubMed publication
  insight: Pyridoxine deficiency and excess have been implicated as a cause for peripheral neuropathy.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25137514"
  doi: 10.1097/CND.0000000000000049
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-20454891
  title: Effects of high-dose B vitamin complex with vitamin C and minerals on subjective mood and performance in healthy males.
  authors: David O Kennedy; Rachel Veasey; Anthony Watson; et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20454891/
  kind: PubMed publication
  insight: In 215 healthy men, one Berocca effervescent tablet daily for 33 days improved stress, mental health, vigour, Serial 3s performance and mental-fatigue ratings.
  limitation: Product-specific formulation and healthy male sample; does not establish effects for other B-complex products or populations.
  pmid: "20454891"
  pmcid: PMC2885294
  doi: 10.1007/s00213-010-1870-3
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/B_complex
  title: Wikipedia
```
