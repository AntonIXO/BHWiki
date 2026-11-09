---
slug: cocoa-flavanols
name: Cocoa Flavanols
subtitle: Cocoa flavanols are polyphenols found in cocoa.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Food and nutrient
tags:
  - attention
  - cognitive-performance
  - memory
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-29502273
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-29502273
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

Cocoa flavanols are polyphenols found in cocoa. Human studies explore blood-flow responses and cognitive performance.

## Description

Human studies used acute drinks or 8-week supplementation from 48 to 994 mg flavanols/day. Visual-search speed, sustained mental-effort performance and some elderly executive tests improved, while temporal attention and some global cognitive outcomes were null. Animal and in-vitro studies provide mechanistic context only.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Acute cocoa-flavanol cognitive-demand study
  amount: 520 or 994 mg flavanols
  quantity: 520
  quantityMax: 994
  unit: mg
  ingredient: Cocoa flavanols
  formulation: Flavanol drink
  route: Oral
  frequency: Single dose per crossover period
  duration: Acute 1-hour testing
  population: 30 healthy adults
  purpose: Mental-effort cognition and fatigue research
  sourceCategory: research
  note: Both doses improved Serial Threes; 994 mg also sped RVIP responses with more Serial Sevens errors.
  sourceId: pubmed-19942640
- label: CoCoA elderly trial
  amount: 48, 520 or 993 mg/day
  quantity: 48
  quantityMax: 993
  unit: mg/day
  ingredient: Cocoa flavanols
  formulation: Cocoa-flavanol drink
  route: Oral
  frequency: Daily
  duration: 8 weeks
  population: 90 cognitively intact elderly adults
  purpose: Cognitive, blood pressure and metabolic research
  sourceCategory: research
  note: High/intermediate doses improved Trail Making times and some metabolic measures versus low dose; MMSE was null.
  sourceId: pubmed-25733639
- label: Cocoa polyphenol mood trial
  amount: 250 or 500 mg/day
  quantity: 250
  quantityMax: 500
  unit: mg/day
  ingredient: Cocoa polyphenols
  formulation: Dark-chocolate drink mix
  route: Oral
  frequency: Daily
  duration: 30 days
  population: 72 healthy middle-aged participants
  purpose: Mood and cognition research
  sourceCategory: research
  note: 500 mg/day improved calmness/contentedness after 30 days; cognition was unaffected.
  sourceId: pubmed-23364814
- label: Dark chocolate rat study
  amount: 500 mg/kg/day
  quantity: 500
  quantityMax: null
  unit: mg/kg/day
  ingredient: Dark chocolate
  formulation: 70% cocoa solids, 4% polyphenols
  route: Oral
  frequency: Daily
  duration: 3 months
  population: 17-month-old monosodium-glutamate-treated rats
  purpose: Cognition and cholinesterase research
  sourceCategory: research
  note: Animal dose; not a human recommendation.
  sourceId: pubmed-26673833
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
- id: cocoa-attention-29502273
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: In 48 students, cocoa flavanols reduced visual-search reaction time but did not improve temporal attention/integration.
  sourceId: pubmed-29502273
  population: 48 university students
  exposure: Low/high cocoa-flavanol drinks versus placebo and baseline
  instrument: Rapid serial visual presentation and visual-search tasks
  magnitude: null
  reportType: measured-assessment
- id: cocoa-cognitive-19942640
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: 520 and 994 mg flavanol drinks improved Serial Threes during sustained mental effort; 994 mg sped RVIP responses but increased Serial Sevens errors.
  sourceId: pubmed-19942640
  population: 30 healthy adults
  exposure: 520 or 994 mg cocoa flavanols versus control
  instrument: Cognitive Demand Battery
  magnitude: null
  reportType: measured-assessment
- id: cocoa-memory-27088635
  conceptId: memory
  name: Memory
  direction: Increased
  evidence: Human research
  description: Flavanol-rich chocolate preserved working-memory accuracy in women after total sleep deprivation and improved vascular measures.
  sourceId: pubmed-27088635
  population: 32 healthy participants
  exposure: Flavanol-rich versus poor-flavanol chocolate after sleep deprivation
  instrument: Working-memory task and vascular tests
  magnitude: null
  reportType: measured-assessment
- id: cocoa-mood-23364814
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: 500 mg/day cocoa polyphenols improved calmness/contentedness after 30 days, but cognition was unaffected acutely and chronically.
  sourceId: pubmed-23364814
  population: 72 healthy middle-aged adults
  exposure: 0, 250 or 500 mg/day cocoa polyphenols for 30 days
  instrument: Cognitive Drug Research battery and Bond-Lader mood scales
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Endothelial and cerebral blood-flow hypothesis
  description: The sustained-effort study links acute cognition effects to cocoa-flavanol effects on endothelial function and blood flow; this is a proposed mechanism, not a measured PK endpoint.
  sourceId: pubmed-19942640
- title: Insulin-sensitivity association
  description: In the CoCoA trial, changes in insulin resistance explained about 17% of composite cognitive-score changes; this does not prove mediation.
  sourceId: pubmed-25733639
- title: BDNF pathway in vitro
  description: Cocoa polyphenols activated BDNF survival signaling and reduced neurite dystrophy in an in-vitro human Alzheimer model.
  sourceId: pubmed-23554028
```

## Cautions

```yaml
- title: Mixed cognitive endpoints
  description: Cocoa flavanols improved some attention, working-memory or sustained-effort measures but left temporal attention, MMSE and some cognition measures unchanged.
  sourceId: pubmed-29502273
- title: Animal and in-vitro evidence is not human efficacy
  description: Dark-chocolate rat and human-cell model findings do not establish a human cognitive dose or preventive effect.
  sourceId: pubmed-26673833
```

## Claims

```yaml
- id: cocoa-claim-19942640
  assertion: Acute 520–994 mg cocoa-flavanol drinks improved selected sustained-effort tasks, with dose-specific errors on another task.
  relation: associated-with
  participants:
    - entityId: substance:cocoa-flavanols
      role: intervention
    - entityId: tag:cognitive-performance
      role: measured endpoint
  context: Randomized double-blind crossover study in 30 adults.
  sourceIds:
    - pubmed-19942640
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Task-specific acute effects.
- id: cocoa-claim-25733639
  assertion: Eight weeks of 520 or 993 mg/day cocoa flavanols improved Trail Making performance versus 48 mg/day in elderly adults, while MMSE did not differ.
  relation: associated-with
  participants:
    - entityId: substance:cocoa-flavanols
      role: intervention
    - entityId: tag:cognitive-performance
      role: measured endpoint
  context: Double-blind parallel CoCoA trial; n=90.
  sourceIds:
    - pubmed-25733639
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Specific drink formulation and elderly population.
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
- id: pubmed-29502273
  title: The acute effects of cocoa flavanols on temporal and spatial attention.
  authors: Aytaç Karabay, Jefta D Saija, David T Field, Elkan G Akyürek
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29502273/
  kind: PubMed publication
  insight: In this study, we investigated how the acute physiological effects of cocoa flavanols might result in specific cognitive changes, in particular in temporal and spatial attention.
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: "29502273"
  doi: 10.1007/s00213-018-4861-4
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5920121/
- id: publication-link-6bdd416544d3
  title: "Acute effects of brewed cocoa consumption on attention, motivation to perform cognitive work and feelings of anxiety, energy and fatigue: a randomized, placebo-controlled crossover experiment"
  authors: Not established
  year: 2026
  url: https://bmcnutr.biomedcentral.com/articles/10.1186/s40795-016-0117-z
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-27088635
  title: Flavanol-rich chocolate acutely improves arterial function and working memory performance counteracting the effects of sleep deprivation in healthy individuals.
  authors: Davide Grassi, Valentina Socci, Daniela Tempesta, Claudio Ferri, Luigi De Gennaro, Giovambattista Desideri, Michele Ferrara
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27088635/
  kind: PubMed publication
  insight: "BACKGROUND: Sleep deprivation is a risk factor for cardiovascular disease."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "27088635"
  doi: 10.1097/HJH.0000000000000926
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-25733639
  title: "Cocoa flavanol consumption improves cognitive function, blood pressure control, and metabolic profile in elderly subjects: the Cocoa, Cognition, and Aging (CoCoA) Study--a randomized controlled trial."
  authors: Daniela Mastroiacovo, Catherine Kwik-Uribe, Davide Grassi, Stefano Necozione, Angelo Raffaele, Luana Pistacchio, Roberta Righetti, Raffaella Bocale, Maria Carmela Lechiara, Carmine Marini, Claudio Ferri, Giovambattista Desideri
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25733639/
  kind: PubMed publication
  insight: "BACKGROUND: Recent evidence has indicated that flavanol consumption may have many health benefits in humans, including improved cognitive activities."
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: "25733639"
  doi: 10.3945/ajcn.114.092189
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4340060/
- id: pubmed-23364814
  title: "Cocoa polyphenols enhance positive mood states but not cognitive performance: a randomized, placebo-controlled trial."
  authors: Matthew P Pase, Andrew B Scholey, Andrew Pipingas, Marni Kras, Karen Nolidin, Amy Gibbs, Keith Wesnes, Con Stough
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23364814/
  kind: PubMed publication
  insight: This study aimed to examine the acute and sub-chronic effects of cocoa polyphenols on cognition and mood.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23364814"
  doi: 10.1177/0269881112473791
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19942640
  title: Consumption of cocoa flavanols results in acute improvements in mood and cognitive performance during sustained mental effort.
  authors: Andrew B Scholey, Stephen J French, Penelope J Morris, David O Kennedy, Anthea L Milne, Crystal F Haskell
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19942640/
  kind: PubMed publication
  insight: Cocoa flavanols (CF) positively influence physiological processes in ways that suggest their consumption may improve aspects of cognitive function.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19942640"
  doi: 10.1177/0269881109106923
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-0c1d5efcbd7a
  title: "A double-blind, placebo-controlled, randomized trial of the effects of dark chocolate and cocoa on variables associated with neuropsychological functioning and cardiovascular health: clinical findings from a sample of healthy, cognitively intact older adults (2008)"
  authors: Not established
  year: 2008
  url: https://ajcn.nutrition.org/content/87/4/872/T2.expansion.html
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26673833
  title: "The Neuroprotective Effect of Dark Chocolate in Monosodium Glutamate-Induced Nontransgenic Alzheimer Disease Model Rats: Biochemical, Behavioral, and Histological Studies."
  authors: Sowmya Madhavadas, Vijaya Kumar Kapgal, Bindu M Kutty, Sarada Subramanian
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26673833/
  kind: PubMed publication
  insight: The vulnerability to oxidative stress and cognitive decline continue to increase during both normal and pathological aging.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26673833"
  doi: 10.3109/19390211.2015.1108946
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23554028
  title: Cocoa powder triggers neuroprotective and preventive effects in a human Alzheimer's disease model by modulating BDNF signaling pathway.
  authors: Annamaria Cimini, Roberta Gentile, Barbara D'Angelo, Elisabetta Benedetti, Loredana Cristiano, Maria Laura Avantaggiati, Antonio Giordano, Claudio Ferri, Giovambattista Desideri
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23554028/
  kind: PubMed publication
  insight: The molecular mechanisms linking Aβ to the onset of neurotoxicity are still largely unknown, but several lines of evidence point to reactive oxygen species, which are produced even under the effect of nanomolar concentrations of soluble Aβ-oligomers.
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: "23554028"
  doi: 10.1002/jcb.24548
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4170833/
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Examine
  url: https://examine.com/supplements/Cocoa+Extract
  title: Examine
```
