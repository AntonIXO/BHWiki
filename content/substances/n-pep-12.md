---
slug: n-pep-12
name: N-PEP-12
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
  sourceId: reddit-index-n-pep-12
  observationId: n-pep-12-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-n-pep-12
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

N-PEP-12 was tested orally for 30 days in 54 healthy adults aged 50 years or older with subjective and objective age-related memory loss. In a randomized double-blind placebo comparison, the prespecified ADAS-cog Memory score and several secondary measures favored N-PEP-12, while some tests did not; the study does not establish a dose-response, durability, or safety profile. [reddit-pmid-15729085]

## Description

This page imports the Reddit index source trail for N-PEP-12. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed abstract retrieved for PMID 15729085. No PMC full text was available through the PubMed identifier conversion, so detailed methods, funding, and adverse-event tables remain unreviewed. The abstract supports a 30-day oral randomized trial in 54 older adults, not a general efficacy or safety claim.

## Doses

```yaml
- label: N-PEP-12 randomized trial
  amount: Not reported in abstract
  quantity: null
  quantityMax: null
  unit: not-reported
  ingredient: N-PEP-12
  formulation: Oral N-PEP-12
  route: oral
  frequency: daily
  duration: 30 days
  population: 54 adults aged 50 years or older with subjective and objective age-related memory loss
  purpose: Research exposure; amount not reported in the PubMed abstract.
  sourceCategory: research
  note: Randomized double-blind placebo-controlled trial; not a dosing recommendation.
  sourceId: reddit-pmid-15729085
```

## Pharmacokinetics

```yaml
- id: n-pep-12-reddit-pk-unestablished
  analyte: N-PEP-12
  route: oral
  formulation: N-PEP-12
  population: 54 adults aged 50 years or older
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The PubMed abstract reports a 30-day oral trial but no concentration, absorption, or elimination measurements.
  sourceId: reddit-pmid-15729085
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
- id: reddit-n-pep-12-episodic-memory-15729085
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: The primary ADAS-cog Memory score favored N-PEP-12 over placebo after 30 days.
  sourceId: reddit-pmid-15729085
  population: 54 adults aged 50 years or older with age-related memory loss
  exposure: Oral N-PEP-12 for 30 days; amount not reported in abstract.
  instrument: ADAS-cog Memory
  magnitude: Effect size not reported in abstract.
  reportType: measured-assessment
- id: reddit-n-pep-12-cognitive-performance-15729085
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: SKT and clinical ratings favored N-PEP-12, whereas digit cancellation, digit span, verbal fluency, and other tests were not uniformly improved.
  sourceId: reddit-pmid-15729085
  population: 54 adults aged 50 years or older
  exposure: Oral N-PEP-12 for 30 days; amount not reported in abstract.
  instrument: SKT, digit cancellation, digit span, verbal fluency, clinical ratings
  magnitude: Selective secondary benefits; effect sizes not reported in abstract.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Compound relationship described in PMID 15729085
  description: N-PEP-12 is described as an oral derivative of cerebrolysin; the abstract does not establish a molecular mechanism for the observed memory findings.
  sourceId: reddit-pmid-15729085
```

## Cautions

```yaml
- title: Limited population and duration
  description: The trial enrolled 54 healthy adults aged 50 years or older and lasted 30 days; it does not establish long-term efficacy or safety.
  sourceId: reddit-pmid-15729085
- title: Incomplete secondary outcome consistency
  description: The abstract states that some, but not all, cognitive tests improved versus placebo.
  sourceId: reddit-pmid-15729085
```

## Claims

```yaml
- id: reddit-claim-n-pep-12-15729085-0
  assertion: In one 30-day randomized trial, N-PEP-12 was associated with better ADAS-cog Memory and selected secondary cognitive outcomes than placebo.
  relation: associated-with
  participants:
  - entityId: substance:n-pep-12
    role: intervention
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Healthy adults aged 50 years or older with age-related memory loss; abstract reports selective improvements.
  sourceIds:
  - reddit-pmid-15729085
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single small trial; dose, full methods, and long-term outcomes are not available in the abstract.
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
- id: reddit-index-n-pep-12
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-15729085
  title: Effects of N-PEP-12 on memory among older adults.
  authors: Thomas H Crook, Steven H Ferris, X Anton Alvarez, Martha Laredo, Herbert Moessler
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15729085/
  kind: PubMed publication
  insight: N-PEP-12 is a derivative of cerebrolysin, a brain-derived neuropeptide compound that has been approved for the treatment of Alzheimer's disease (AD) in more than 30 countries.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15729085'
  doi: 10.1097/00004850-200503000-00006
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
