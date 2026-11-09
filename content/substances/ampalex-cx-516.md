---
slug: ampalex-cx-516
name: Ampalex (CX-516)
subtitle: Ampalex, also called CX-516, is an ampakine that modulates AMPA-receptor signalling.
aliases:
  - CX-516
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - episodic-memory
  - ampa-receptor
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-9270067
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-9270067
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

Ampalex, also called CX-516, is an ampakine that modulates AMPA-receptor signalling. Research explores learning and memory.

## Description

CX-516 is described as a centrally active AMPA-receptor facilitator. Evidence is limited to small acute human laboratory studies with selective task effects.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: CX-516 delayed-recall study
  amount: 600–1,200 mg
  quantity: 600
  quantityMax: 1200
  unit: mg
  ingredient: CX-516 (Ampalex)
  formulation: Oral study drug
  route: Oral
  frequency: Single dose
  duration: Testing ~3 hours post-dose
  population: Healthy human subjects (36 drug; 12 placebo)
  purpose: Acute memory research
  sourceCategory: research
  note: Abstract reports range; exact allocation by dose not provided.
  sourceId: pubmed-8732309
- label: Ampalex encoding study
  amount: Not stated in abstract
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Ampalex/ampakine
  formulation: Study drug
  frequency: Single study exposure
  duration: Acute
  population: Healthy human subjects
  purpose: Memory-encoding research
  sourceCategory: research
  note: The PubMed abstract does not report the dose.
  sourceId: pubmed-9270067
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
- id: research-ampalex-cx-516-delayed-recall-8732309
  conceptId: episodic-memory
  name: Delayed recall
  direction: Increased
  evidence: Human research
  description: At 600–1,200 mg, CX-516 prevented the poorer second-session delayed-recall performance seen with placebo; immediate recall was unchanged.
  sourceId: pubmed-8732309
  population: Healthy human subjects
  exposure: 600–1,200 mg single dose
  instrument: Delayed and immediate recall
  magnitude: Delayed recall preserved
  reportType: measured-assessment
- id: research-ampalex-cx-516-encoding-9270067
  conceptId: episodic-memory
  name: Memory encoding
  direction: Increased
  evidence: Human research
  description: An ampakine improved visual associations, odor recognition, visuospatial maze acquisition and playing-card location/identity, but not cued verbal recall.
  sourceId: pubmed-9270067
  population: Healthy human subjects
  exposure: Dose not stated in abstract
  instrument: Visual/olfactory/visuospatial memory tasks
  magnitude: Selective task benefit
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: AMPA-receptor facilitation
  description: CX-516 is a centrally active compound that facilitates AMPA receptor-mediated synaptic responses; the memory effects were selective across tasks.
  sourceId: pubmed-8732309
```

## Cautions

```yaml
- title: Small acute studies
  description: The cited human experiments were small and acute, with selective task effects and no long-term safety data.
  sourceId: pubmed-8732309
- title: Unreported dose
  description: The encoding study abstract does not state the administered dose.
  sourceId: pubmed-9270067
```

## Claims

```yaml
- id: research-claim-ampalex-cx-516-8732309-0
  assertion: CX-516 preserved delayed recall in one small human study at 600–1,200 mg.
  relation: associated-with
  participants:
    - entityId: substance:ampalex-cx-516
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-8732309
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-ampalex-cx-516-9270067-1
  assertion: An ampakine improved several visual/visuospatial encoding tasks but not cued verbal recall.
  relation: associated-with
  participants:
    - entityId: substance:ampalex-cx-516
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-9270067
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
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
- id: pubmed-9270067
  title: Enhancement by an ampakine of memory encoding in humans.
  authors: M Ingvar, J Ambros-Ingerson, M Davis, R Granger, M Kessler, G A Rogers, R S Schehr, G Lynch
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9270067/
  kind: PubMed publication
  insight: An ampakine improved selected visual, olfactory and visuospatial encoding tasks but not cued verbal recall; dose was not stated in the abstract.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "9270067"
  doi: 10.1006/exnr.1997.6581
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-8732309
  title: Psychological effects of a drug that facilitates brain AMPA receptors.
  authors: G Lynch, M Kessler, G Rogers, J Ambros-Ingerson, R Granger, R S Schehr
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8732309/
  kind: PubMed publication
  insight: In healthy humans, 600–1,200 mg CX-516 prevented delayed-recall decline versus placebo; immediate recall and mood ratings were largely unchanged.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "8732309"
  doi: 10.1097/00004850-199603000-00002
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
