---
slug: varenicline
name: Varenicline
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - smoking-abstinence
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-23072834
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-23072834
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

Varenicline acts on nicotinic acetylcholine receptors. Studies examine nicotine use, attention and other cognitive measures.

## Description

Varenicline acts on nicotinic acetylcholine receptors. Studies examine nicotine use, attention and other cognitive measures.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: "PMID 23072834 study exposure: 0.5 mg"
  amount: 0.5 mg
  quantity: 0.5
  quantityMax: null
  unit: mg
  ingredient: Varenicline
  formulation: Study formulation as stated in the abstract
  frequency: As stated in the abstract
  duration: Study duration as stated in the abstract
  population: 41 subjects were randomized, with 38 subjects included in the analysis
  purpose: Research exposure; not a general-use recommendation
  sourceCategory: research
  note: We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day) Full text is available via PMC.
  sourceId: pubmed-23072834
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
- id: research-varenicline-smoking-abstinence-23072834
  conceptId: smoking-abstinence
  name: Smoking Abstinence
  direction: Variable
  evidence: Limited research
  description: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  sourceId: pubmed-23072834
  population: 41 subjects were randomized, with 38 subjects included in the analysis
  exposure: However, it remains unclear whether those changes in mood and behavior are directly related to varenicline use, or caused by smoking cessation itself or reflects depression and suicidality rates in smokers, independent of treatment.
  instrument: null
  magnitude: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day).
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
- id: research-claim-varenicline-23072834
  assertion: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  relation: associated-with
  participants:
    - entityId: substance:varenicline
      role: intervention or exposure
    - entityId: tag:smoking-abstinence
      role: reported endpoint
  context: PMID 23072834 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
    - pubmed-23072834
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
- id: pubmed-23072834
  title: "Effects of short-term varenicline administration on emotional and cognitive processing in healthy, non-smoking adults: a randomized, double-blind, study."
  authors: Roel J T Mocking, C Patrick Pflanz, Abbie Pringle, Elizabeth Parsons, Sarah F McTavish, Phil J Cowen, Catherine J Harmer
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23072834/
  kind: PubMed publication
  insight: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC3547198 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC3547198/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: "23072834"
  doi: 10.1038/npp.2012.205
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
