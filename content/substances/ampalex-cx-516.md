---
slug: ampalex-cx-516
name: Ampalex (CX-516)
subtitle: Reddit index evidence trail.
aliases:
- CX-516
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
  sourceId: reddit-index-ampalex-cx-516
  observationId: ampalex-cx-516-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-ampalex-cx-516
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

Human CX-516 (Ampalex) studies reported selective memory effects: 600–1,200 mg prevented delayed-recall decline in one small trial, while another ampakine improved several visual/visuospatial encoding tasks but not cued verbal recall. Dose details for the latter publication are not stated in its abstract.

## Description

CX-516 is described as a centrally active AMPA-receptor facilitator. Evidence is limited to small acute human laboratory studies with selective task effects.

## Evidence note

Two PubMed abstracts were retrieved; neither publication had rights-eligible PMC full text. No elimination half-life or broader safety profile was established. Full-text retrieval status is recorded per reference; 0 of 2 PubMed records had a PMC identifier in this set.

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
  sourceId: reddit-pmid-8732309
- label: Ampalex encoding study
  amount: Not stated in abstract
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Ampalex/ampakine
  formulation: Study drug
  route: Not established from abstract
  frequency: Single study exposure
  duration: Acute
  population: Healthy human subjects
  purpose: Memory-encoding research
  sourceCategory: research
  note: The PubMed abstract does not report the dose.
  sourceId: reddit-pmid-9270067
```

## Pharmacokinetics

```yaml
- id: ampalex-cx-516-reddit-pk-unestablished
  analyte: Ampalex Cx 516
  route: Not established from abstract
  formulation: Study formulation not reported as a PK parameter
  population: Not established
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No validated elimination or concentration parameter was reported in the
    retrieved linked abstracts.
  sourceId: reddit-index-ampalex-cx-516
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
- id: reddit-ampalex-cx-516-delayed-recall-8732309
  conceptId: episodic-memory
  name: Delayed recall
  direction: Increased
  evidence: Human research
  description: At 600–1,200 mg, CX-516 prevented the poorer second-session delayed-recall
    performance seen with placebo; immediate recall was unchanged.
  sourceId: reddit-pmid-8732309
  population: Healthy human subjects
  exposure: 600–1,200 mg single dose
  instrument: Delayed and immediate recall
  magnitude: Delayed recall preserved
  reportType: measured-assessment
- id: reddit-ampalex-cx-516-encoding-9270067
  conceptId: episodic-memory
  name: Memory encoding
  direction: Increased
  evidence: Human research
  description: An ampakine improved visual associations, odor recognition, visuospatial
    maze acquisition and playing-card location/identity, but not cued verbal recall.
  sourceId: reddit-pmid-9270067
  population: Healthy human subjects
  exposure: Dose not stated in abstract
  instrument: Visual/olfactory/visuospatial memory tasks
  magnitude: Selective task benefit
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: AMPA-receptor facilitation
  description: CX-516 is a centrally active compound that facilitates AMPA receptor-mediated
    synaptic responses; the memory effects were selective across tasks.
  sourceId: reddit-pmid-8732309
```

## Cautions

```yaml
- title: Small acute studies
  description: The cited human experiments were small and acute, with selective task
    effects and no long-term safety data.
  sourceId: reddit-pmid-8732309
- title: Unreported dose
  description: The encoding study abstract does not state the administered dose.
  sourceId: reddit-pmid-9270067
```

## Claims

```yaml
- id: reddit-claim-ampalex-cx-516-8732309-0
  assertion: CX-516 preserved delayed recall in one small human study at 600–1,200
    mg.
  relation: associated-with
  participants:
  - entityId: substance:ampalex-cx-516
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-8732309
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
- id: reddit-claim-ampalex-cx-516-9270067-1
  assertion: An ampakine improved several visual/visuospatial encoding tasks but not
    cued verbal recall.
  relation: associated-with
  participants:
  - entityId: substance:ampalex-cx-516
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy
    estimate.
  sourceIds:
  - reddit-pmid-9270067
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend
    on the cited study.
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
- id: reddit-index-ampalex-cx-516
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Reddit index discovery link; it does not establish efficacy, dose or safety.
  limitation: Community index used as a discovery aid; publication evidence is evaluated in the linked records.
- id: reddit-pmid-9270067
  title: Enhancement by an ampakine of memory encoding in humans.
  authors: M Ingvar, J Ambros-Ingerson, M Davis, R Granger, M Kessler, G A Rogers, R S Schehr, G Lynch
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9270067/
  kind: PubMed publication
  insight: An ampakine improved selected visual, olfactory and visuospatial encoding tasks but not cued verbal recall; dose was not stated in the abstract.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '9270067'
  doi: 10.1006/exnr.1997.6581
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-8732309
  title: Psychological effects of a drug that facilitates brain AMPA receptors.
  authors: G Lynch, M Kessler, G Rogers, J Ambros-Ingerson, R Granger, R S Schehr
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8732309/
  kind: PubMed publication
  insight: In healthy humans, 600–1,200 mg CX-516 prevented delayed-recall decline versus placebo; immediate recall and mood ratings were largely unchanged.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: '8732309'
  doi: 10.1097/00004850-199603000-00002
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
