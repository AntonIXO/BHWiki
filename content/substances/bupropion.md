---
slug: bupropion
name: Bupropion
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
  sourceId: reddit-index-bupropion
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-bupropion
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

In one acute healthy-adult study, 150 mg bupropion reduced attention lapses without changing impulsivity measures; 300 mg increased arousal ratings.

## Description

Twenty-two nonsmokers and 11 smokers completed four sessions receiving placebo, 150 or 300 mg bupropion, or 20 mg d-amphetamine. Testing 90 minutes after dosing found fewer simple-reaction-time lapses with 150 mg bupropion, no effect on stop-task, delay/probability-discounting or risk-taking measures, and increased arousal with 300 mg.

## Evidence note

Reviewed PMID 18489015 abstract. PMC4270475 was not rights-eligible for automated full-text retrieval; formulation and full methods remain abstract-bounded.

## Doses

```yaml
- label: Bupropion acute healthy-adult study (PMID 18489015)
  amount: 150 or 300 mg
  quantity: 150
  quantityMax: 300
  unit: mg
  ingredient: Bupropion
  formulation: Capsule; formulation not specified in abstract
  route: Oral
  frequency: Single dose per session
  duration: Testing 90 minutes post-dose
  population: 33 adults (22 nonsmokers, 11 smokers)
  purpose: Attention and impulsivity research exposure
  sourceCategory: research
  note: Trial doses; not a general dosing recommendation.
  sourceId: reddit-pmid-18489015
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
- id: bupropion-impulsivity-null-18489015
  conceptId: impulsive-behavior
  name: Impulsivity and risk taking
  direction: Variable
  evidence: Human research
  description: Acute 150 or 300 mg bupropion did not change stop-task, delay/probability-discounting or balloon-risk-task performance.
  sourceId: reddit-pmid-18489015
  population: 33 healthy adults
  exposure: 150 or 300 mg bupropion
  instrument: Stop task, delay/probability discounting and BART
  magnitude: No significant effect reported
  reportType: measured-assessment
- id: bupropion-arousal-18489015
  conceptId: arousal-response
  name: Subjective arousal
  direction: Increased
  evidence: Human research
  description: The 300 mg bupropion condition increased ratings of arousal.
  sourceId: reddit-pmid-18489015
  population: 33 healthy adults
  exposure: 300 mg bupropion
  instrument: Mood questionnaires
  magnitude: Increase reported; numeric effect not stated in abstract
  reportType: measured-assessment
- id: bupropion-attention-18489015
  conceptId: attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: Bupropion 150 mg decreased lapses on a simple reaction-time task in healthy adults.
  sourceId: reddit-pmid-18489015
  population: 33 healthy adults, smokers and nonsmokers
  exposure: 150 mg bupropion, single dose
  instrument: Simple reaction-time task
  magnitude: Fewer lapses; numeric effect not reported in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Attention effect without impulsivity change
  description: The study supports a selective acute attention signal, but it did not show parallel changes in response inhibition, discounting or risk-taking behavior.
  sourceId: reddit-pmid-18489015
```

## Cautions

```yaml
- title: Acute healthy-volunteer evidence
  description: Findings come from a single short study in healthy adults and do not establish therapeutic efficacy, long-term safety or individual response.
  sourceId: reddit-pmid-18489015
```

## Claims

```yaml
- id: bupropion-claim-attention-18489015
  assertion: A single 150 mg bupropion dose reduced attention lapses in healthy adults without changing measured impulsivity tasks.
  relation: associated-with
  participants:
  - entityId: substance:bupropion
    role: intervention
  - entityId: tag:attention
    role: reported endpoint
  context: Four-session randomized acute study with placebo, 150/300 mg bupropion and d-amphetamine.
  sourceIds:
  - reddit-pmid-18489015
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute study; PMC full text unavailable for automated retrieval.
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
- id: reddit-index-bupropion
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-18489015
  title: Bupropion improves attention but does not affect impulsive behavior in healthy young adults.
  authors: Ashley Acheson, Harriet de Wit
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18489015/
  kind: PubMed publication
  insight: Bupropion is an effective abstinence aid for cessation of smoking and possibly other drug use as well.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18489015'
  doi: 10.1037/1064-1297.16.2.113
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
