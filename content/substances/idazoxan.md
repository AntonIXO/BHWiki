---
slug: idazoxan
name: Idazoxan
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
  sourceId: reddit-index-idazoxan
  observationId: idazoxan-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-idazoxan
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

Idazoxan has 1 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Idazoxan. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review: 1 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: idazoxan-reddit-pk-unestablished
  analyte: Idazoxan
  route: Not assessed
  formulation: Index entry
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This corpus import does not establish a pharmacokinetic observation.
  sourceId: reddit-index-idazoxan
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
- id: reddit-idazoxan-attention-22291383
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: 'Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  sourceId: reddit-pmid-22291383
  population: tested 3 days before starting the drug, on days 3 and 17 while on the drug, and after they had stopped taking the drug (4 days after and 24 days after)
  exposure: 'Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-idazoxan-episodic-memory-22291383
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: 'Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  sourceId: reddit-pmid-22291383
  population: tested 3 days before starting the drug, on days 3 and 17 while on the drug, and after they had stopped taking the drug (4 days after and 24 days after)
  exposure: 'Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Source-specific finding from PMID 22291383
  description: 'Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  sourceId: reddit-pmid-22291383
```

## Claims

```yaml
- id: reddit-claim-idazoxan-22291383-0
  assertion: 'PMID 22291383 reports: Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.'
  relation: associated-with
  participants:
  - entityId: substance:idazoxan
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-22291383
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
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
  url: https://en.wikipedia.org/wiki/Idazoxan
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-idazoxan
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-22291383
  title: The effects and after effects of the α2-adrenoceptor antagonist idazoxan on mood, memory and attention in normal volunteers.
  authors: A P Smith, S J Wilson, P Glue, D J Nutt
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/22291383/
  kind: PubMed publication
  insight: Idazoxan, an α( 2)-adrenoceptor antagonist, is an effective antidepressant with a mode of action different from that of conventional antidepressants. As it is used as an antidepressant it is important to know whether there are any unwanted CNS side effects.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '22291383'
  doi: 10.1177/026988119200600306
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
