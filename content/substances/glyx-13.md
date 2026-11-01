---
slug: glyx-13
name: GLYX-13
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
  sourceId: reddit-index-glyx-13
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-glyx-13
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

GLYX-13 has 1 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for GLYX-13. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review covered 1 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
- label: GLYX-13 rat study dose (PMID 19446371)
  amount: 1 mg/kg
  quantity: 1
  quantityMax: null
  unit: mg/kg
  ingredient: GLYX-13
  formulation: Experimental peptide
  route: Intravenous
  frequency: Before behavioral training
  duration: Acute dosing
  population: Young adult and aged FBNF1 rats
  purpose: Learning, memory, and hippocampal plasticity
  sourceCategory: research
  note: Animal dose; no human dose or safety inference.
  sourceId: reddit-pmid-19446371
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
- id: reddit-glyx-13-learning-memory-19446371
  conceptId: learning-memory
  name: Learning and memory
  direction: Increased
  evidence: Limited research
  description: In young adult and aged rats, 1 mg/kg IV GLYX-13 enhanced Morris water-maze and alternating T-maze learning and increased trace-eyeblink conditioning in aged animals.
  sourceId: reddit-pmid-19446371
  population: 3-month and 27–32-month FBNF1 rats
  exposure: 1 mg/kg IV GLYX-13 before training
  instrument: Morris water maze, alternating T-maze, trace eyeblink conditioning
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NMDAR glycine-site modulation and LTP (PMID 19446371; PMCID PMC3035742)
  description: GLYX-13 is a tetrapeptide partial agonist at the NMDA receptor glycine site; the study found enhanced Schaffer collateral–CA1 long-term potentiation without altering LTD, linking the preclinical learning effects to synaptic plasticity.
  sourceId: reddit-pmid-19446371
```

## Cautions

```yaml
- title: Animal-only evidence (PMID 19446371)
  description: The linked study used rats and an intravenous experimental dose; it does not establish human efficacy, pharmacokinetics, or safety.
  sourceId: reddit-pmid-19446371
```

## Claims

```yaml
- id: reddit-claim-glyx-13-19446371-0
  assertion: In young and aged rats, 1 mg/kg IV GLYX-13 improved several learning tasks and enhanced hippocampal LTP.
  relation: reported-in
  participants:
  - entityId: substance:glyx-13
    role: intervention
  - entityId: tag:learning-memory
    role: reported endpoint
  context: Preclinical publication abstract and PMC full text.
  sourceIds:
  - reddit-pmid-19446371
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal findings cannot establish human benefit or safety.
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
  url: https://en.wikipedia.org/wiki/GLYX-13
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-glyx-13
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-link-245348d7bfdd
  title: The N-methyl-D-aspartate receptor modulator GLYX-13 enhances learning and memory, in young adult and learning impaired aging rats
  authors: Not established
  year: 2026
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3035742/
  kind: PubMed Central publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19446371
  title: The N-methyl-D-aspartate receptor modulator GLYX-13 enhances learning and memory, in young adult and learning impaired aging rats.
  authors: Jeffrey Burgdorf, Xiao-lei Zhang, Craig Weiss, Elizabeth Matthews, John F Disterhoft, Patric K Stanton, Joseph R Moskal
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/19446371/
  kind: PubMed Central publication
  insight: In young and aged rats, 1 mg/kg IV GLYX-13 improved maze and trace-eyeblink learning and enhanced hippocampal LTP; GLYX-13 acts as a partial agonist at the NMDA receptor glycine site.
  limitation: Full text retrieved from PMCID PMC3035742; all outcomes are preclinical and do not establish human dosing or safety.
  pmid: '19446371'
  pmcid: PMC3035742
  doi: 10.1016/j.neurobiolaging.2009.04.012
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
