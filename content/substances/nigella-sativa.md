---
slug: nigella-sativa
name: Nigella sativa
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - memory
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-23707331
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-23707331
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

Nigella sativa, or black seed, contains thymoquinone and other compounds. Research explores memory and cognitive performance.

## Description

Nigella sativa, or black seed, contains thymoquinone and other compounds. Research explores memory and cognitive performance.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Older-adult cognition trial
  amount: 1,000 mg/day
  quantity: 500
  quantityMax: null
  unit: mg per capsule
  ingredient: Nigella sativa seed
  formulation: Seed capsule
  route: oral
  frequency: twice daily
  duration: 9 weeks
  population: 40 healthy elderly volunteers (20 per group)
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Compared with placebo.
  sourceId: pubmed-23707331
- label: Adolescent mood/cognition trial
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Nigella sativa seed
  formulation: Seed capsule
  route: oral
  frequency: once daily
  duration: 4 weeks
  population: 48 healthy males aged 14–17 years
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Between-group results were limited; long-term safety not established.
  sourceId: pubmed-24412554
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
- id: research-nigella-sativa-memory-23707331
  conceptId: memory
  name: Memory
  direction: Increased
  evidence: Human research
  description: Logical memory, digit span, delayed recall, and Rey-Osterrieth figure scores improved in the 9-week older-adult trial.
  sourceId: pubmed-23707331
  population: 40 healthy older adults
  exposure: 500 mg twice daily for 9 weeks
  instrument: Logical memory; digit span; 30-min delayed recall; Rey-Osterrieth figure
  magnitude: Multiple significant changes; exact effect sizes unavailable in abstract.
  reportType: measured-assessment
- id: research-nigella-sativa-cognition-24412554
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: The adolescent study found selected short- and long-term recall differences, but not a consistent between-group effect across cognition, mood, and anxiety measures.
  sourceId: pubmed-24412554
  population: 48 healthy males aged 14–17 years
  exposure: 500 mg/day for 4 weeks
  instrument: Modified CVLT-II, Bond-Lader, STAI
  magnitude: Selected memory contrasts only; quantitative effect sizes not reported.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Phytochemical preparation; mechanism not established
  description: The linked trials used whole Nigella sativa seed capsules; neither abstract establishes which constituent or molecular pathway produced the observed cognitive changes.
  sourceId: pubmed-23707331
```

## Cautions

```yaml
- title: Small, population-specific trials
  description: Evidence comes from 40 older adults and 48 adolescent males; results should not be generalized to disease treatment or other ages.
  sourceId: pubmed-23707331
- title: Between-group null findings in adolescents
  description: The adolescent study reported several within-group changes but no significant between-group state-anxiety effect and limited between-group cognitive differences.
  sourceId: pubmed-24412554
```

## Claims

```yaml
- id: research-claim-nigella-sativa-23707331-0
  assertion: Nigella sativa seed capsules were associated with improved selected memory and attention tests in a 9-week randomized study of healthy older adults.
  relation: associated-with
  participants:
    - entityId: substance:nigella-sativa
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: 500 mg twice daily versus placebo; 40 volunteers.
  sourceIds:
    - pubmed-23707331
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small single study; full text and long-term safety not reviewed.
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
- id: pubmed-23707331
  title: The effect of Nigella sativa Linn. seed on memory, attention and cognition in healthy human volunteers.
  authors: Muhammad Shahdaat Bin Sayeed, Md Asaduzzaman, Helal Morshed, Md Monir Hossain, Mohammad Fahim Kadir, Md Rezowanur Rahman
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23707331/
  kind: PubMed publication
  insight: "BACKGROUND: Experimental evidences have demonstrated that Nigella sativa Linn."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23707331"
  doi: 10.1016/j.jep.2013.05.004
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-24412554
  title: Nigella sativa L. seeds modulate mood, anxiety and cognition in healthy adolescent males.
  authors: Muhammad Shahdaat Bin Sayeed, Tahiatul Shams, Sarder Fahim Hossain, Md Rezowanur Rahman, Agm Mostofa, Mohammad Fahim Kadir, Sharif Mahmood, Md Asaduzzaman
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24412554/
  kind: PubMed publication
  insight: "ETHNOPHARMACOLOGICAL RELEVANCE: Previous studies conducted on animals linked consumption of Nigella sativa L."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24412554"
  doi: 10.1016/j.jep.2013.12.050
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Examine
  url: https://examine.com/supplements/nigella-sativa
  title: Wikipedia
```
