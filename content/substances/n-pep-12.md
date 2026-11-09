---
slug: n-pep-12
name: N-PEP-12
subtitle: Peptide and protein
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Peptide and protein
tags:
  - episodic-memory
  - cognitive-performance
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-15729085
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-15729085
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

N-PEP-12 is a peptide preparation studied for memory and cognitive performance.

## Description

N-PEP-12 is a peptide preparation studied for memory and cognitive performance.

## Evidence note

Study findings and methods are linked to their original publications.

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
  sourceId: pubmed-15729085
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
- id: research-n-pep-12-episodic-memory-15729085
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: The primary ADAS-cog Memory score favored N-PEP-12 over placebo after 30 days.
  sourceId: pubmed-15729085
  population: 54 adults aged 50 years or older with age-related memory loss
  exposure: Oral N-PEP-12 for 30 days; amount not reported in abstract.
  instrument: ADAS-cog Memory
  magnitude: Effect size not reported in abstract.
  reportType: measured-assessment
- id: research-n-pep-12-cognitive-performance-15729085
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: SKT and clinical ratings favored N-PEP-12, whereas digit cancellation, digit span, verbal fluency, and other tests were not uniformly improved.
  sourceId: pubmed-15729085
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
  sourceId: pubmed-15729085
```

## Cautions

```yaml
- title: Limited population and duration
  description: The trial enrolled 54 healthy adults aged 50 years or older and lasted 30 days; it does not establish long-term efficacy or safety.
  sourceId: pubmed-15729085
- title: Incomplete secondary outcome consistency
  description: The abstract states that some, but not all, cognitive tests improved versus placebo.
  sourceId: pubmed-15729085
```

## Claims

```yaml
- id: research-claim-n-pep-12-15729085-0
  assertion: In one 30-day randomized trial, N-PEP-12 was associated with better ADAS-cog Memory and selected secondary cognitive outcomes than placebo.
  relation: associated-with
  participants:
    - entityId: substance:n-pep-12
      role: intervention
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Healthy adults aged 50 years or older with age-related memory loss; abstract reports selective improvements.
  sourceIds:
    - pubmed-15729085
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
- id: pubmed-15729085
  title: Effects of N-PEP-12 on memory among older adults.
  authors: Thomas H Crook, Steven H Ferris, X Anton Alvarez, Martha Laredo, Herbert Moessler
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15729085/
  kind: PubMed publication
  insight: N-PEP-12 is a derivative of cerebrolysin, a brain-derived neuropeptide compound that has been approved for the treatment of Alzheimer's disease (AD) in more than 30 countries.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15729085"
  doi: 10.1097/00004850-200503000-00006
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
