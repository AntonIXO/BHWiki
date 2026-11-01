---
slug: coffee
name: Coffee
subtitle: Coffee studies separate caffeine from the broader beverage matrix.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Beverage
tags: []
accent: '#a9b993'
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established for coffee as a mixture
  low: null
  high: null
  context: The linked studies tested coffee extracts or coffee diets rather than a single analyte; no coffee-mixture half-life was reported.
  sourceId: reddit-pmid-23312069
  observationId: coffee-mixture-pk-unestablished
kinetics:
  onset: Not established for coffee as a mixture
  peak: Not established
  duration: Not established
  bioavailability: Depends on coffee composition and preparation; no validated value was reported in the linked studies.
  metabolism: Coffee contains caffeine and other compounds; beta-carbolines in brewed coffee inhibited MAO in vitro.
  sourceId: reddit-pmid-16139309
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
x-order: 1952
---

## Summary

Coffee is a complex beverage; linked evidence suggests coffee-matrix effects can differ from caffeine alone, but human cognitive efficacy is not established by these studies.

## Description

The Reddit-linked publications include a single-dose coffee-fruit extract study in humans, in-vitro MAO and opioid-receptor assays, and an 8-week coffee-diet study in aged rats. These findings should not be treated as equivalent to ordinary coffee intake or as evidence for a therapeutic dose.

## Evidence note

One human randomized study gave 100 mg of several extracts and found a transient plasma BDNF increase with whole-coffee-fruit concentrate. A rat study found improved working-memory and rotarod performance with a 0.55% coffee diet, while caffeine alone did not account for the effect. MAO inhibition and opioid-receptor binding were ex-vivo or in-vitro findings. No human PK, clinical dose-response or safety profile was established.

## Doses

```yaml
- label: Whole coffee fruit concentrate study
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Whole coffee fruit concentrate powder
  formulation: Extract powder
  route: Oral
  frequency: Single dose
  duration: Sampling to 120 minutes
  population: Healthy human subjects; n=10 for whole coffee fruit concentrate arm
  purpose: Plasma BDNF research
  sourceCategory: research
  note: The same study also tested 100 mg caffeine, grape-seed and green-coffee-bean extracts.
  sourceId: reddit-pmid-23312069
- label: Coffee diet in aged rats
  amount: 0.165–0.825% of diet
  quantity: 0.165
  quantityMax: 0.825
  unit: percent of diet
  ingredient: Coffee
  formulation: Coffee-supplemented diet
  route: Oral diet
  frequency: Daily
  duration: 8 weeks
  population: 19-month-old F344 rats
  purpose: Psychomotor and working-memory research
  sourceCategory: research
  note: The 0.55% coffee diet was reported as optimal in the rat study; not a human dose.
  sourceId: reddit-pmid-23344884
```

## Pharmacokinetics

```yaml
- id: coffee-mixture-pk-unestablished
  analyte: Coffee mixture
  route: Oral
  formulation: Beverage or extract
  population: Human and animal studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The linked publications report BDNF, behavioral and in-vitro biochemical outcomes but do not provide a validated coffee-mixture concentration-time profile.
  sourceId: reddit-pmid-23312069
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
- id: coffee-bdnf-23312069
  conceptId: bdnf
  name: BDNF
  direction: Increased
  evidence: Human research
  description: A single 100 mg whole-coffee-fruit concentrate dose increased plasma BDNF by about 143% from baseline under the study conditions.
  sourceId: reddit-pmid-23312069
  population: Healthy fasted human subjects; whole-coffee-fruit arm n=10
  exposure: Single 100 mg dose with sampling every 30 minutes to 120 minutes
  instrument: Plasma BDNF assay
  magnitude: About 143% above baseline
  reportType: measured-assessment
- id: coffee-cognition-23344884
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: In aged rats, a 0.55% coffee diet improved rotarod performance and Morris-water-maze working memory; caffeine alone did not reproduce the effect.
  sourceId: reddit-pmid-23344884
  population: 19-month-old F344 rats
  exposure: Coffee-supplemented diet for 8 weeks
  instrument: Rotarod and Morris water maze
  magnitude: Not reported in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Coffee beta-carbolines inhibit MAO in vitro
  description: Brewed coffee reversibly and competitively inhibited recombinant human MAO-A and MAO-B; norharman and harman were identified as active beta-carbolines.
  sourceId: reddit-pmid-16139309
- title: Coffee-matrix effect beyond caffeine in rats
  description: In aged rats, coffee improved cognition and psychomotor behavior whereas caffeine alone did not account for the effect, suggesting contributions from non-caffeine constituents.
  sourceId: reddit-pmid-23344884
- title: Opiate-receptor binding assay
  description: Instant coffee extracts, including decaffeinated coffee, competed with naloxone for rat-brain opioid-receptor binding in an old in-vitro assay; this does not establish an in-vivo human effect.
  sourceId: reddit-pmid-6296693
```

## Cautions

```yaml
- title: Human evidence is limited
  description: The BDNF study was a small single-dose extract experiment and the cognition study was in aged rats; neither establishes that ordinary coffee improves human cognition.
  sourceId: reddit-pmid-23312069
- title: In-vitro mechanisms are not clinical interactions
  description: MAO inhibition and opioid-receptor binding were measured in biochemical or rat-membrane assays and should not be used to infer clinical MAOI or opioid effects.
  sourceId: reddit-pmid-16139309
```

## Claims

```yaml
- id: coffee-claim-23312069
  assertion: A single 100 mg whole-coffee-fruit concentrate dose increased plasma BDNF in a small human study.
  relation: associated-with
  participants:
  - entityId: substance:coffee
    role: intervention
  - entityId: tag:bdnf
    role: measured endpoint
  context: Randomized single-dose extract study with 120-minute sampling.
  sourceIds:
  - reddit-pmid-23312069
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small arm and extract-specific result; not ordinary coffee.
- id: coffee-claim-23344884
  assertion: Coffee-supplemented diets improved psychomotor and working-memory performance in aged rats, while caffeine alone did not account for the effect.
  relation: associated-with
  participants:
  - entityId: substance:coffee
    role: dietary intervention
  - entityId: tag:cognitive-performance
    role: animal endpoint
  context: Eight-week rat diet study.
  sourceIds:
  - reddit-pmid-23344884
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal study; dose expressed as percent of diet.
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
  url: https://en.wikipedia.org/wiki/Coffee
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Coffee
  title: Examine
```

## References

```yaml
- id: reddit-pmid-23312069
  title: Modulatory effect of coffee fruit extract on plasma levels of brain-derived neurotrophic factor in healthy subjects.
  authors: Tania Reyes-Izquierdo, Boris Nemzer, Cynthia Shu, Lan Huynh, Ruby Argumedo, Robert Keller, Zb Pietrzkowski
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23312069/
  kind: PubMed publication
  insight: A single 100 mg whole-coffee-fruit concentrate dose increased plasma BDNF by about 143% from baseline in a small human arm.
  limitation: PubMed abstract retrieved; full text was not available in the connector. Funding and conflicts were not assessed in this pass.
  pmid: '23312069'
  doi: 10.1017/S0007114512005338
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16139309
  title: Human monoamine oxidase enzyme inhibition by coffee and beta-carbolines norharman and harman isolated from coffee.
  authors: Tomas Herraiz, Carolina Chaparro
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16139309/
  kind: PubMed publication
  insight: Brewed coffee reversibly and competitively inhibited recombinant human MAO-A and MAO-B in vitro; beta-carbolines were identified as active compounds.
  limitation: In-vitro enzymatic assay; no human clinical efficacy or interaction inference was established. Funding and conflicts were not assessed in this pass.
  pmid: '16139309'
  doi: 10.1016/j.lfs.2005.05.074
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-6296693
  title: Coffee contains potent opiate receptor binding activity.
  authors: J H Boublik, M J Quinn, J A Clements, A C Herington, K N Wynne, J W Funder
  year: 1983
  url: https://pubmed.ncbi.nlm.nih.gov/6296693/
  kind: PubMed publication
  insight: Instant and decaffeinated coffee extracts competed with naloxone for rat-brain opioid-receptor binding in vitro; activity was distinct from caffeine and morphine.
  limitation: Rat-membrane assay from 1983; no in-vivo human effect was established. Funding and conflicts were not assessed in this pass.
  pmid: '6296693'
  doi: 10.1038/301246a0
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23344884
  title: Coffee, but not caffeine, has positive effects on cognition and psychomotor behavior in aging.
  authors: Barbara Shukitt-Hale, Marshall G Miller, Yi-Fang Chu, Barbara J Lyle, James A Joseph
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23344884/
  kind: PubMed publication
  insight: In aged rats, an 8-week coffee diet improved rotarod and working-memory performance; caffeine alone did not account for the effect.
  limitation: PMC link is available, but the full-text connector returned an internal error in this pass; abstract retrieved. Funding and conflicts were not assessed.
  pmid: '23344884'
  doi: 10.1007/s11357-012-9509-4
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3824984/
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
