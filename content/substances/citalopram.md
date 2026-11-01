---
slug: citalopram
name: Citalopram
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
  sourceId: reddit-index-citalopram
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-citalopram
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

Acute intravenous citalopram enhanced delayed verbal memory in healthy women; an 8-week SSRI study found BDNF increased and baseline BDNF predicted response, but that study mixed escitalopram and sertraline.

## Description

Citalopram is an SSRI. The directly linked acute study administered 10 mg IV citalopram and found improved delayed recall/recognition without attention changes. A separate depression cohort received escitalopram or sertraline for 8 weeks; results should not be attributed to citalopram alone.

## Evidence note

The evidence supports a serotonin-related memory-consolidation signal under a single 10 mg IV dose in healthy women. The depression/BDNF study used mixed SSRIs (escitalopram n=16, sertraline n=14), so it informs SSRI biology rather than citalopram-specific efficacy.

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
  sourceId: reddit-pmid-12185407
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
  sourceId: reddit-pmid-12185407
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
  sourceId: reddit-pmid-21749907
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
  sourceId: reddit-pmid-12185407
- title: BDNF as permissive SSRI marker
  description: Baseline serum BDNF was lower in depressed subjects, increased after 8 weeks of escitalopram/sertraline, and predicted response; BDNF changes did not correlate with symptom change.
  sourceId: reddit-pmid-21749907
```

## Cautions

```yaml
- title: Route and population caution
  description: The 10 mg study used intravenous citalopram in healthy women; its acute memory signal does not establish oral treatment efficacy or dosing.
  sourceId: reddit-pmid-12185407
- title: Mixed-SSRI attribution
  description: The BDNF study pooled escitalopram and sertraline, so its findings cannot be assigned specifically to citalopram.
  sourceId: reddit-pmid-21749907
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
  - reddit-pmid-12185407
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

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Citalopram
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-citalopram
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-e85e3b5323b2
  title: 'Acute administration of citalopram facilitates memory consolidation

    in healthy volunteers'
  authors: Not established
  year: 2026
  url: https://jtoomim.org/brain-training/Harmer%20et%20al.%20-%202002%20-%20Acute%20administration%20of%20citalopram%20facilitates%20mem.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21749907
  title: Serum BDNF levels before treatment predict SSRI response in depression.
  authors: Owen M Wolkowitz, Jessica Wolf, Wendy Shelly, Rebecca Rosser, Heather M Burke, George K Lerner, Victor I Reus, J Craig Nelson, Elissa S Epel, Synthia H Mellon
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21749907/
  kind: PubMed publication
  insight: In 30 depressed subjects treated with escitalopram or sertraline for 8 weeks, BDNF increased and baseline BDNF predicted response; the study was not citalopram-only.
  limitation: PubMed abstract and linked PMC full text inspected; mixed SSRI exposure and no citalopram-specific dose.
  pmid: '21749907'
  doi: 10.1016/j.pnpbp.2011.06.013
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3159044/
- id: reddit-pmid-12185407
  title: Acute administration of citalopram facilitates memory consolidation in healthy volunteers.
  authors: Catherine J Harmer, Zubin Bhagwagar, Phillip J Cowen, Guy M Goodwin
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12185407/
  kind: PubMed publication
  insight: Single 10 mg IV citalopram challenge improved delayed recall and recognition in healthy women.
  limitation: Abstract retrieved from PubMed; full text was inspected where a PMC link is provided. Funding and conflicts were not assessed in this corpus pass.
  pmid: '12185407'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  doi: 10.1007/s00213-002-1151-x
```

## Legal

```yaml
[]
```
