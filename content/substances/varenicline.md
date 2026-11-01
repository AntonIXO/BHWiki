---
slug: varenicline
name: Varenicline
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
  sourceId: reddit-index-varenicline
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-varenicline
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

Varenicline has 1 linked PubMed publication records in the Reddit Nootropics index. Structured observations below are limited to source-specific abstract results and explicitly identified pharmacokinetic or safety findings.

## Description

This page links the legacy Reddit Nootropics index to 1 retrieved PubMed records out of 1 linked PMID records. Doses, outcomes, mechanisms, cautions, and claims cite the matching publication reference; a PMC link is retained when PubMed supplied one.

## Evidence note

PubMed/PMC review: retrieved 1 PubMed records linked from this Reddit index entry; 1 returned PMCID identifiers. Structured records cite the matching publication reference. Full-text retrieval was attempted for the identified PMC records; unavailable or partial retrieval is left explicit in the citation limitation. Funding and conflicts remain unassessed unless the source record reports them.

PMC full-text retrieval for this page returned body text for 0/1 identified PMCID records; 1 returned no retrievable body or a tool error.

## Doses

```yaml
- label: 'PMID 23072834 study exposure: 0.5 mg'
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
  sourceId: reddit-pmid-23072834
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
- id: reddit-varenicline-smoking-abstinence-23072834
  conceptId: smoking-abstinence
  name: Smoking Abstinence
  direction: Variable
  evidence: Limited research
  description: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  sourceId: reddit-pmid-23072834
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
- id: reddit-claim-varenicline-23072834
  assertion: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  relation: associated-with
  participants:
  - entityId: substance:varenicline
    role: intervention or exposure
  - entityId: tag:smoking-abstinence
    role: reported endpoint
  context: PMID 23072834 abstract result/conclusion; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-23072834
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
- id: reddit-index-varenicline
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-23072834
  title: 'Effects of short-term varenicline administration on emotional and cognitive processing in healthy, non-smoking adults: a randomized, double-blind, study.'
  authors: Roel J T Mocking, C Patrick Pflanz, Abbie Pringle, Elizabeth Parsons, Sarah F McTavish, Phil J Cowen, Catherine J Harmer
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23072834/
  kind: PubMed publication
  insight: Varenicline is an effective and increasingly prescribed drug for smoking cessation, but has been associated with depressive symptoms and suicidal behavior. We used a randomized, double-blind design, in which we administered varenicline or placebo to healthy subjects over 7 days (0.5 mg/day first 3 days, then 1 mg/day). The varenicline group did not differ from placebo in terms of negative biases in emotional processing or mood.
  limitation: PubMed abstract retrieved 2026-11-01. PMC full text identifier PMC3547198 is available at https://pmc.ncbi.nlm.nih.gov/articles/PMC3547198/; methods and disclosures are not inferred beyond the retrieved source.
  pmid: '23072834'
  doi: 10.1038/npp.2012.205
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
