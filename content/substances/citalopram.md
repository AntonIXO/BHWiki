---
slug: citalopram
name: Citalopram
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - episodic-memory
  - depression-severity
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-21749907
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-21749907
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

Citalopram inhibits serotonin reuptake. Research explores its effects on mood, emotional processing and cognition.

## Description

Citalopram is an SSRI. The directly linked acute study administered 10 mg IV citalopram and found improved delayed recall/recognition without attention changes. A separate depression cohort received escitalopram or sertraline for 8 weeks; results should not be attributed to citalopram alone.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Acute citalopram memory study
  amount: 10 mg IV
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Citalopram
  formulation: Intravenous citalopram
  route: Intravenous
  frequency: Single challenge
  duration: Acute testing
  population: Healthy non-depressed female volunteers
  purpose: Memory consolidation research
  sourceCategory: research
  note: Immediate recall was unchanged; delayed recall and recognition improved versus placebo.
  sourceId: pubmed-12185407
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
- id: citalopram-memory-12185407
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: A single 10 mg IV citalopram challenge improved delayed verbal recall and recognition but not immediate recall.
  sourceId: pubmed-12185407
  population: Healthy non-depressed female volunteers
  exposure: 10 mg IV citalopram versus placebo
  instrument: Auditory Verbal Learning Test
  magnitude: null
  reportType: measured-assessment
- id: citalopram-depression-21749907
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Human research
  description: Depression ratings improved after 8 weeks of SSRI treatment in a cohort receiving escitalopram or sertraline; this was not a citalopram-only trial.
  sourceId: pubmed-21749907
  population: 30 unmedicated depressed subjects; 25 completers
  exposure: Escitalopram (n=16) or sertraline (n=14) for 8 weeks
  instrument: Depression rating scales
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Serotonergic memory consolidation
  description: The acute citalopram study interpreted delayed-memory improvement as increased consolidation from augmented serotonergic neurotransmission.
  sourceId: pubmed-12185407
- title: BDNF as permissive SSRI marker
  description: Baseline serum BDNF was lower in depressed subjects, increased after 8 weeks of escitalopram/sertraline, and predicted response; BDNF changes did not correlate with symptom change.
  sourceId: pubmed-21749907
```

## Cautions

```yaml
- title: Route and population caution
  description: The 10 mg study used intravenous citalopram in healthy women; its acute memory signal does not establish oral treatment efficacy or dosing.
  sourceId: pubmed-12185407
- title: Mixed-SSRI attribution
  description: The BDNF study pooled escitalopram and sertraline, so its findings cannot be assigned specifically to citalopram.
  sourceId: pubmed-21749907
```

## Claims

```yaml
- id: citalopram-claim-12185407
  assertion: A single 10 mg IV citalopram challenge improved delayed verbal recall and recognition in healthy women.
  relation: associated-with
  participants:
    - entityId: substance:citalopram
      role: intervention
    - entityId: tag:episodic-memory
      role: measured endpoint
  context: Double-blind placebo-controlled acute challenge.
  sourceIds:
    - pubmed-12185407
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: IV route and acute healthy-volunteer design.
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
- id: publication-link-e85e3b5323b2
  title: |-
    Acute administration of citalopram facilitates memory consolidation
    in healthy volunteers
  authors: Not established
  year: 2026
  url: https://jtoomim.org/brain-training/Harmer%20et%20al.%20-%202002%20-%20Acute%20administration%20of%20citalopram%20facilitates%20mem.pdf
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-21749907
  title: Serum BDNF levels before treatment predict SSRI response in depression.
  authors: Owen M Wolkowitz, Jessica Wolf, Wendy Shelly, Rebecca Rosser, Heather M Burke, George K Lerner, Victor I Reus, J Craig Nelson, Elissa S Epel, Synthia H Mellon
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21749907/
  kind: PubMed publication
  insight: In 30 depressed subjects treated with escitalopram or sertraline for 8 weeks, BDNF increased and baseline BDNF predicted response; the study was not citalopram-only.
  limitation: PubMed abstract and linked PMC full text inspected; mixed SSRI exposure and no citalopram-specific dose.
  pmid: "21749907"
  doi: 10.1016/j.pnpbp.2011.06.013
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3159044/
- id: pubmed-12185407
  title: Acute administration of citalopram facilitates memory consolidation in healthy volunteers.
  authors: Catherine J Harmer, Zubin Bhagwagar, Phillip J Cowen, Guy M Goodwin
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12185407/
  kind: PubMed publication
  insight: Single 10 mg IV citalopram challenge improved delayed recall and recognition in healthy women.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: "12185407"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  doi: 10.1007/s00213-002-1151-x
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Citalopram
  title: Wikipedia
```
