---
slug: valerian
name: Valerian
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - sleep
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2ff9-7d4d-8c61-439dccc543f5
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2ff9-7d4d-8c61-439dccc543f5
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
x-order: 1903
---

## Summary

Valerian is a plant whose root preparations are studied for sleep and their effects on next-day performance.

## Description

Valerian is a plant whose root preparations are studied for sleep and their effects on next-day performance.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 14696021 study exposure: 500 mg"
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Valerian (Valeriana officinalis)
  formulation: Study formulation as stated in the abstract
  route: oral
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: "METHODS: In a double-blind, placebo-controlled, four-way crossover study nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0"
  sourceId: pubmed-14696021
- label: "PMID 14696021 study exposure: 1000 mg"
  amount: 1000 mg
  quantity: 1000
  quantityMax: null
  unit: mg
  ingredient: Valerian (Valeriana officinalis)
  formulation: Study formulation as stated in the abstract
  route: oral
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: "METHODS: In a double-blind, placebo-controlled, four-way crossover study nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0"
  sourceId: pubmed-14696021
- label: "PMID 14696021 study exposure: 0.25 mg"
  amount: 0.25 mg
  quantity: 0.25
  quantityMax: null
  unit: mg
  ingredient: Valerian (Valeriana officinalis)
  formulation: Study formulation as stated in the abstract
  route: oral
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: "S: In a double-blind, placebo-controlled, four-way crossover study nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0.25 mg and placebo"
  sourceId: pubmed-14696021
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
- id: research-valerian-sleep-14696021
  conceptId: sleep
  name: Sleep
  direction: Variable
  evidence: Human research
  description: Repeated measures ANOVA was used to examine the changes in performance on tests over time and significant effects were further analysed using simple main effects analysis with least significant difference corrections. Statistically significant differences were only noted These data confirm that at recommended therapeutic doses, triazolam has detrimental effects on cognitive processes in healthy volunteers as found in previous studies. Valerian was without effect on either cognitive or psychomotor performance in healthy volunteers at the doses used in this study. Should the hypnotic activity of valerian be confirmed in randomized double-blind trials it may be a less troublesome alternative to benzodiazepines in the treatment of insomnia.
  sourceId: pubmed-14696021
  population: nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0
  exposure: "In a double-blind, placebo-controlled, four-way crossover study nine healthy subjects (5 males, 4 females) received in random order valerian 500 mg, valerian 1000 mg, triazolam 0.25 mg and placebo. Doses were separated by a wash-out period of at least 1 week. Subjects were tested before each dose and at 2, 4 and 8 h after the dose of each compound using the critical flicker fusion (CFF), choice reaction time (CRT), digit symbol substitution test (DSST), symbol search test (SST), digit span test "
  instrument: reaction time (CRT), digit symbol substitution test (DSST), symbol search test (SST), digit span test (
  magnitude: Repeated measures ANOVA was used to examine the changes in performance on tests over time and significant effects were further analysed using simple main effects analysis with least significant difference corrections. Statistically significant differences were only noted These data confirm that at recommended therapeut
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-valerian-14696021
  assertion: Repeated measures ANOVA was used to examine the changes in performance on tests over time and significant effects were further analysed using simple main effects analysis with least significant difference corrections. Statistically significant differences were only noted These data confirm that at recommended therapeutic doses, triazolam has detrimental effects on cognitive processes in healthy volunteers as found in previous studies. Valerian was without effect on either cognitive or psychomotor performance in healthy volunteers at the doses used in this study. Should the hypnotic activity of valerian be confirmed in randomized double-blind trials it may be a less troublesome alternative to benzodiazepines in the treatment of insomnia.
  relation: associated-with
  participants:
    - entityId: substance:valerian
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: PMID 14696021 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-14696021
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

## References

```yaml
- id: optihealth-substance-01a08b04-2ff9-7d4d-8c61-439dccc543f5
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2ff9-7d4d-8c61-439dccc543f5
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-14696021
  title: Comparative cognitive and psychomotor effects of single doses of Valeriana officianalis and triazolam in healthy volunteers.
  authors: Karen T Hallam, James S Olver, Caroline McGrath, Trevor R Norman
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14696021/
  kind: PubMed publication
  insight: Repeated measures ANOVA was used to examine the changes in performance on tests over time and significant effects were further analysed using simple main effects analysis with least significant difference corrections. Statistically significant differences were only noted These data confirm that at recommended therapeutic doses, triazolam has detrimental effects on cognitive processes in healthy volunteers as found in previous studies. Valerian was without effect on either cognitive or psychomotor performance in healthy volunteers at the doses used in this study. Should the hypnotic activity of valerian be confirmed in randomized double-blind trials it may be a less troublesome alternative to
  limitation: PubMed abstract retrieved 2026-11-01. No PubMed Central full text identifier was returned.
  pmid: "14696021"
  doi: 10.1002/hup.542
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Valerian_%28herb%29
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Valerian
  title: Examine
```
