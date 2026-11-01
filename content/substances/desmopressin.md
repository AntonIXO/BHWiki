---
slug: desmopressin
name: Desmopressin
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
  sourceId: reddit-index-desmopressin
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-desmopressin
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

Desmopressin (DDAVP) is a vasopressin analogue. The two linked healthy-volunteer studies found no significant memory benefit: 20 µg/day intranasally for 15 days did not change multiple memory tests, and a single 60 µg intranasal post-trial dose did not improve 24-hour prose recall.

## Description

In the 40-student double-blind study, 10 participants received desmopressin 0.2 ml (20 µg) once daily intranasally for 15 days, 10 received lysine vasopressin and 20 placebo; statistical testing found no significant change in verbal or visual memory scores (PMID 3762902). In a separate double-blind study, healthy young men received 60 µg intranasal DDAVP after learning prose passages; recall after 24 hours was unchanged (PMID 8745039).

## Evidence note

Reviewed both linked PubMed abstracts. No PMC full text was available through the connector in this pass. Both records are old, small healthy-volunteer experiments and do not establish nootropic efficacy or a human PK estimate.

## Doses

```yaml
- label: 15-day memory study
  amount: 20 µg/day
  quantity: 20
  quantityMax: null
  unit: µg/day
  ingredient: Desmopressin
  formulation: Intranasal solution (0.2 ml)
  route: Intranasal
  frequency: Once daily
  duration: 15 days
  population: 10 healthy student volunteers
  purpose: Memory testing
  sourceCategory: research
  note: Dose and schedule reported in the PubMed abstract.
  sourceId: reddit-pmid-3762902
- label: Post-trial recall study
  amount: 60 µg
  quantity: 60
  quantityMax: null
  unit: µg
  ingredient: Desmopressin (DDAVP)
  formulation: Intranasal DDAVP
  route: Intranasal
  frequency: Single post-learning dose
  duration: 24-hour recall test
  population: Healthy young male volunteers
  purpose: Memory consolidation experiment
  sourceCategory: research
  note: Single dose reported in the PubMed abstract.
  sourceId: reddit-pmid-8745039
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
- id: desmopressin-memory-3762902
  conceptId: memory
  name: Verbal and visual memory test performance
  direction: Variable
  evidence: Human research
  description: Fifteen days of intranasal desmopressin did not significantly change verbal span, verbal retention, visual retention, visual learning or verbal learning scores versus placebo.
  sourceId: reddit-pmid-3762902
  population: 40 healthy student volunteers across desmopressin, vasopressin and placebo groups
  exposure: Desmopressin 20 µg/day intranasally for 15 days
  instrument: Verbal and visual memory tests
  magnitude: No significant between-group or pre/post differences reported
  reportType: measured-assessment
- id: desmopressin-prose-recall-8745039
  conceptId: episodic-memory
  name: Delayed prose recall
  direction: Variable
  evidence: Human research
  description: A single 60 µg intranasal DDAVP dose given after prose learning did not affect recall after 24 hours.
  sourceId: reddit-pmid-8745039
  population: Healthy young male volunteers
  exposure: 60 µg intranasal DDAVP post-trial
  instrument: Prose passage recall
  magnitude: No treatment effect reported
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Vasopressin-analogue timing hypothesis
  description: The post-trial DDAVP study interpreted the null 24-hour recall result as consistent with vasopressin effects on acquisition rather than consolidation; this is an interpretation of that experiment, not a demonstrated mechanism for desmopressin generally.
  sourceId: reddit-pmid-8745039
```

## Cautions

```yaml
- title: Null memory findings
  description: Neither linked healthy-volunteer study found a significant memory benefit.
  sourceId: reddit-pmid-3762902
- title: Narrow evidence base
  description: The studies are old, small and use specific intranasal protocols; they do not establish efficacy, safety or PK for unsupervised use.
  sourceId: reddit-pmid-8745039
- title: Compound identity in PMID 1523161
  description: The linked study tested des-glycinamide-[Arg8]vasopressin (DGAVP) and oxytocin, not desmopressin; its memory findings should not be transferred to desmopressin.
  sourceId: reddit-pmid-1523161
```

## Claims

```yaml
- id: desmopressin-claim-no-memory-benefit
  assertion: The linked healthy-volunteer studies did not show a significant desmopressin memory benefit.
  relation: null-finding
  participants:
  - entityId: substance:desmopressin
    role: intervention
  - entityId: tag:memory
    role: outcome
  context: 20 µg/day intranasal for 15 days and single 60 µg post-trial intranasal protocols.
  sourceIds:
  - reddit-pmid-3762902
  - reddit-pmid-8745039
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small, older studies with specific protocols and healthy samples.
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
- id: reddit-index-desmopressin
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Discovery index linking two desmopressin memory studies.
  limitation: Community indexing is not efficacy or safety evidence.
- id: reddit-pmid-3762902
  title: Effects of vasopressin and desmopressin on memory. A double-blind study in 40 healthy volunteers.
  authors: O Guard; G Marchal; A Graule; et al.
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3762902/
  kind: PubMed publication
  insight: Intranasal desmopressin 20 µg/day for 15 days did not significantly change verbal or visual memory scores.
  limitation: Small older healthy-volunteer study; full text not retrieved in this pass.
  pmid: '3762902'
  doi: 10.1159/000118246
- id: reddit-pmid-8745039
  title: Failure of posttrial administration of vasopressin analogue (DDAVP) to influence memory in healthy, young, male volunteers.
  authors: B E Beckwith; T V Petros; P J Bergloff; et al.
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/8745039/
  kind: PubMed publication
  insight: Single 60 µg intranasal DDAVP after prose learning did not affect 24-hour recall.
  limitation: Small healthy-male study; full text not retrieved in this pass.
  pmid: '8745039'
  doi: 10.1016/0196-9781(95)02029-2
- id: reddit-pmid-1523161
  title: Effect of a single dose of des-glycinamide-[Arg8]vasopressin or oxytocin on cognitive processes in young healthy subjects.
  authors: J Bruins; R Hijman; J M Van Ree
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1523161/
  kind: PubMed publication
  insight: DGAVP 2 mg intranasal improved delayed recognition of abstract words in a small placebo-controlled study; this was not a desmopressin exposure.
  limitation: Different vasopressin analogue and small healthy-volunteer study; no direct desmopressin inference.
  pmid: '1523161'
  doi: 10.1016/0196-9781(92)90075-e
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
