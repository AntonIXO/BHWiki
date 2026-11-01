---
slug: zinc
name: Zinc
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-3003-7fdc-a6dc-2a1febe005f2
  observationId: zinc-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-3003-7fdc-a6dc-2a1febe005f2
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
x-order: 1925
---

## Summary

Zinc has 3 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 3 retrieved PubMed records out of 3 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 3 PubMed records linked from this Reddit index entry; 0 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

## Doses

```yaml
- label: 'PMID 17010236 study exposure: 30 mg'
  amount: 30 mg
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Zinc
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: 387 healthy adults aged 55-87 years
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: ing memory, attention and reaction time were obtained using the Cambridge Automated Neuropsychological Test Battery at baseline and then after 3 and 6 months of 0 (placebo), 15 or 30 mg Zn/d
  sourceId: reddit-pmid-17010236
- label: 'PMID 24621065 study exposure: 30 mg'
  amount: 30 mg
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Zinc
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: 46 subjects
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: 'METHODS: Fifty overweight or obese subjects were randomly assigned into two groups and received either 30 mg zinc or placebo daily for 12 weeks'
  sourceId: reddit-pmid-24621065
```

## Pharmacokinetics

```yaml
- id: zinc-identity-unassessed
  analyte: Zinc
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
  sourceId: optihealth-substance-01a08b04-3003-7fdc-a6dc-2a1febe005f2
  modelEligible: false
- id: zinc-pk-20368377
  analyte: Zinc
  population: Hemoglobin, serum ferritin, and plasma zinc were estimated on a fasting blood sample.
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'METHODS: Using zinc-rich food items, snacks were prepared by adopting food-processing methods that enhance zinc bioavailability.'
  sourceId: reddit-pmid-20368377
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
- id: reddit-zinc-cognitive-performance-17010236
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Younger adults (< 70 years) performed significantly better on all tests than older adults (> 70 years), and performance improved with practice on some measures. For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one measure of spatial working memory and a detrimental effect of 15 mg/d on one measure of attention.
  sourceId: reddit-pmid-17010236
  population: 387 healthy adults aged 55-87 years
  exposure: For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one measure of spatial working memory and a detrimental effect of 15 mg/d on one measure of attention.
  instrument: reaction time were obtained using the Cambridge Automated Neuropsychological Test Battery at baseline a
  magnitude: Younger adults (< 70 years) performed significantly better on all tests than older adults (> 70 years), and performance improved with practice on some measures. For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one m
  reportType: measured-assessment
- id: reddit-zinc-memory-20368377
  conceptId: memory
  name: Memory
  direction: Variable
  evidence: Human research
  description: A higher increase in plasma zinc (61.3%) was observed in the J group than in the D group (9.9%) (p < 0.01), whereas plasma zinc declined in the control group (-2.2%) over baseline (p > 0.1). Hemoglobin showed no change in all 3 groups (p > 0.1). Percent increment in scores for memory and RPM was significantly more in the D and J groups (24.5%-29.6%) than in the C group (6.5%) (p < 0.05). Mean SRT and RRT were reduced more in the D and J groups (5%-16%) than in the C group (1.6%) (p < 0.05). A significant fall in median RTS from 5 to 2.5 mmol/L was noted after both diet and zinc supplementation (p < 0.01); however, it remained the same at 5 mmol/L in the Control group after 10 weeks. Supplementation of ayurvedic zinc and zinc-rich foods are effective in improving cognitive performance and the recognition threshold for salt of adolescent girls.
  sourceId: reddit-pmid-20368377
  population: Hemoglobin, serum ferritin, and plasma zinc were estimated on a fasting blood sample.
  exposure: Using zinc-rich food items, snacks were prepared by adopting food-processing methods that enhance zinc bioavailability. Ayurvedic zinc tablet (jasad bhasma) was chosen as a natural elemental zinc supplement. Efficacy of snacks and the tablet was assessed in 180 schoolgirls (12.5 +/- 0.85 years) from Pune City, India, who were randomly allocated to any of the 3
  instrument: reaction time (SRT), recognition reaction time (RRT), visual memory, and Raven's Progressive Matrices (
  magnitude: A higher increase in plasma zinc (61.3%) was observed in the J group than in the D group (9.9%) (p < 0.01), whereas plasma zinc declined in the control group (-2.2%) over baseline (p > 0.1). Hemoglobin showed no change in all 3 groups (p > 0.1). Percent increment in scores for memory and RPM was significantly more in t
  reportType: measured-assessment
- id: reddit-zinc-depression-severity-24621065
  conceptId: depression-severity
  name: Depression Severity
  direction: Variable
  evidence: Human research
  description: The trial was completed with 46 subjects. After a 12-week supplementation, serum zinc and BDNF levels increased significantly in the zinc-supplemented group compared with the placebo group. BDI scores declined in both the groups at the end of the study, but reduction in the zinc-supplemented group was significantly higher than the placebo group. More analysis revealed that following supplementation, BDI scores decreased in subgroup of subjects with depressive symptoms (BDI ≥ 10) (n = 30), but did not change in the subgroup of non-depressed subjects (BDI < 10) (n = 16). Moreover, a significant inverse correlation was observed between serum BDNF levels and depression severity in all participants. Interestingly, a significant positive correlation was found between serum BDNF and zinc levels at baseline. Zinc monotherapy improves mood in overweight or obese subjects most likely through increasing BDNF levels.
  sourceId: reddit-pmid-24621065
  population: 46 subjects
  exposure: Fifty overweight or obese subjects were randomly assigned into two groups and received either 30 mg zinc or placebo daily for 12 weeks. At baseline and post-intervention, depression severity was assessed using Beck depression inventory II (BDI II), and serum BDNF and zinc levels were determined by enzyme-linked immunosorbent assay and atomic absorption spectrophotometry, respectively.
  instrument: null
  magnitude: The trial was completed with 46 subjects. After a 12-week supplementation, serum zinc and BDNF levels increased significantly in the zinc-supplemented group compared with the placebo group. BDI scores declined in both the groups at the end of the study, but reduction in the zinc-supplemented group was significantly hig
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Explicit mechanistic or disposition finding (PMID 24621065)
  description: The aim of the present study was to determine the effects of zinc monotherapy on depressive symptoms and serum brain-derived neurotrophic factor (BDNF) levels in overweight or obese subjects.
  sourceId: reddit-pmid-24621065
```

## Cautions

```yaml
- title: Safety or adverse-event finding (PMID 17010236)
  description: For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one measure of spatial working memory and a detrimental effect of 15 mg/d on one measure of attention.
  sourceId: reddit-pmid-17010236
- title: Safety or adverse-event finding (PMID 20368377)
  description: A significant fall in median RTS from 5 to 2.5 mmol/L was noted after both diet and zinc supplementation (p < 0.01); however, it remained the same at 5 mmol/L in the Control group after 10 weeks.
  sourceId: reddit-pmid-20368377
```

## Claims

```yaml
- id: reddit-claim-zinc-17010236
  assertion: Younger adults (< 70 years) performed significantly better on all tests than older adults (> 70 years), and performance improved with practice on some measures. For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one measure of spatial working memory and a detrimental effect of 15 mg/d on one measure of attention.
  relation: associated-with
  participants:
  - entityId: substance:zinc
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: PMID 17010236 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-17010236
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
- id: reddit-claim-zinc-20368377
  assertion: A higher increase in plasma zinc (61.3%) was observed in the J group than in the D group (9.9%) (p < 0.01), whereas plasma zinc declined in the control group (-2.2%) over baseline (p > 0.1). Hemoglobin showed no change in all 3 groups (p > 0.1). Percent increment in scores for memory and RPM was significantly more in the D and J groups (24.5%-29.6%) than in the C group (6.5%) (p < 0.05). Mean SRT and RRT were reduced more in the D and J groups (5%-16%) than in the C group (1.6%) (p < 0.05). A significant fall in median RTS from 5 to 2.5 mmol/L was noted after both diet and zinc supplementation (p < 0.01); however, it remained the same at 5 mmol/L in the Control group after 10 weeks. Supplementation of ayurvedic zinc and zinc-rich foods are effective in improving cognitive performance and the recognition threshold for salt of adolescent girls.
  relation: associated-with
  participants:
  - entityId: substance:zinc
    role: intervention or exposure
  - entityId: tag:memory
    role: reported endpoint
  context: PMID 20368377 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-20368377
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
- id: reddit-claim-zinc-24621065
  assertion: The trial was completed with 46 subjects. After a 12-week supplementation, serum zinc and BDNF levels increased significantly in the zinc-supplemented group compared with the placebo group. BDI scores declined in both the groups at the end of the study, but reduction in the zinc-supplemented group was significantly higher than the placebo group. More analysis revealed that following supplementation, BDI scores decreased in subgroup of subjects with depressive symptoms (BDI ≥ 10) (n = 30), but did not change in the subgroup of non-depressed subjects (BDI < 10) (n = 16). Moreover, a significant inverse correlation was observed between serum BDNF levels and depression severity in all participants. Interestingly, a significant positive correlation was found between serum BDNF and zinc levels at baseline. Zinc monotherapy improves mood in overweight or obese subjects most likely through increasing BDNF levels.
  relation: associated-with
  participants:
  - entityId: substance:zinc
    role: intervention or exposure
  - entityId: tag:depression-severity
    role: reported endpoint
  context: PMID 24621065 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-24621065
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single publication; the abstract does not establish general efficacy or safety.
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
  url: https://en.wikipedia.org/wiki/Zinc
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Zinc
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-3003-7fdc-a6dc-2a1febe005f2
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-3003-7fdc-a6dc-2a1febe005f2
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-17010236
  title: 'Effects of zinc supplementation on cognitive function in healthy middle-aged and older adults: the ZENITH study.'
  authors: Elizabeth A Maylor, Ellen E A Simpson, David L Secker, Nathalie Meunier, Maud Andriollo-Sanchez, Angela Polito, Barbara Stewart-Knox, Chris McConville, Jacqueline M O'Connor, Charles Coudray
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/17010236/
  kind: PubMed publication
  insight: Younger adults (< 70 years) performed significantly better on all tests than older adults (> 70 years), and performance improved with practice on some measures. For two out of eight dependent variables, there were significant interactions indicating a beneficial effect (at 3 months only) of both 15 and 30 mg/d on one measure of spatial working memory and a detrimental effect of 15 mg/d on one measure of attention.
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '17010236'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20368377
  title: Zinc supplementation improved cognitive performance and taste acuity in Indian adolescent girls.
  authors: Rama P Tupe, Shashi A Chiplonkar
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/20368377/
  kind: PubMed publication
  insight: A higher increase in plasma zinc (61.3%) was observed in the J group than in the D group (9.9%) (p < 0.01), whereas plasma zinc declined in the control group (-2.2%) over baseline (p > 0.1). Hemoglobin showed no change in all 3 groups (p > 0.1). Percent increment in scores for memory and RPM was significantly more in the D and J groups (24.5%-29.6%) than in the C group (6.5%) (p < 0.05). Mean SRT and RRT were reduced more in the D and J groups (5%-16%) than in the C group (1.6%) (p < 0.05). A significant fall in median RTS from 5 to 2.5 mmol/L was noted after both diet and zinc supplementation (p < 0.01); however, it remained the same at 5 mmol/L in the Control group after 10 weeks. Suppleme
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '20368377'
  doi: 10.1080/07315724.2009.10718101
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24621065
  title: 'Zinc monotherapy increases serum brain-derived neurotrophic factor (BDNF) levels and decreases depressive symptoms in overweight or obese subjects: a double-blind, randomized, placebo-controlled trial.'
  authors: Zahra Solati, Shima Jazayeri, Mehdi Tehrani-Doost, Salma Mahmoodianfard, Mahmood Reza Gohari
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/24621065/
  kind: PubMed publication
  insight: The trial was completed with 46 subjects. After a 12-week supplementation, serum zinc and BDNF levels increased significantly in the zinc-supplemented group compared with the placebo group. BDI scores declined in both the groups at the end of the study, but reduction in the zinc-supplemented group was significantly higher than the placebo group. More analysis revealed that following supplementation, BDI scores decreased in subgroup of subjects with depressive symptoms (BDI ≥ 10) (n = 30), but did not change in the subgroup of non-depressed subjects (BDI < 10) (n = 16). Moreover, a significant inverse correlation was observed between serum BDNF levels and depression severity in all participan
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: '24621065'
  doi: 10.1179/1476830513Y.0000000105
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
