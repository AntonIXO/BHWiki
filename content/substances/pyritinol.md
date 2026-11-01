---
slug: pyritinol
name: Pyritinol
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: '#a9b993'
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
  observationId: pyritinol-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
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
- references
- legal
- externalWikiLinks
x-order: 1776
---

## Summary

Pyritinol evidence is source-specific and endpoint-limited. Significant improvements in CFFT and CRT were found after pyritinol. The auto-immune hypoglycemic syndrome is characterized by the association of hypoglycemia (clinical and/or biological) and anti-insulin antibodies in patients who have never received exogenous insulin.
## Description

This page links PubMed evidence for pyritinol. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 2135070, 3066650, 9679051.
## Evidence note

The structured records below summarize the linked publication abstracts and any retrieved full text; they do not establish broad efficacy or safety beyond the reported populations and endpoints.

Reviewed PubMed abstracts for PMID(s) 2135070, 3066650, 9679051. No rights-eligible PMC full text was available among these records.

PMC coverage in this pass: No rights-eligible full text retrieved. Rights-restricted citations checked: PMC381054.
## Doses

```yaml
- label: PubMed study exposure (2135070)
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Pyritinol
  formulation: Formulation as described in PMID 2135070
  route: oral or as stated in abstract
  frequency: Study schedule not stated in abstract
  duration: 3 days
  population: Twelve healthy male volunteers received pyritinol 600 or 1,200 mg or placebo for 3 days according to a randomised, double-blind crossover design.
  purpose: Research exposure
  sourceCategory: research
  note: Dose and schedule transcribed from PMID 2135070 abstract; formulation and population are source-specific to this study.
  sourceId: reddit-pmid-2135070
```

## Pharmacokinetics

```yaml
- id: pyritinol-identity-unassessed
  analyte: Pyritinol
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
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
- id: reddit-pyritinol-episodic-memory-2135070
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: Significant improvements in CFFT and CRT were found after pyritinol.
  sourceId: reddit-pmid-2135070
  population: Twelve healthy male volunteers received pyritinol 600 or 1,200 mg or placebo for 3 days according to a randomised, double-blind crossover design.
  exposure: Twelve healthy male volunteers received pyritinol 600 or 1,200 mg or placebo for 3 days according to a randomised, double-blind crossover design.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 3066650
  description: However, the exact mechanism of hypoglycemia linked with the presence of anti-insulin auto-antibodies is not yet clear as is the predisposition of a drug with a sulfydril group to induce such an auto-immune phenomenon.
  sourceId: reddit-pmid-3066650
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: reddit-claim-pyritinol-2135070-0
  assertion: 'PMID 2135070 reported: Significant improvements in CFFT and CRT were found after pyritinol.'
  relation: associated-with
  participants:
  - entityId: substance:pyritinol
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Source-specific result from PMID 2135070; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-2135070
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 2135070; this single study does not establish general efficacy or safety.
- id: reddit-claim-pyritinol-9679051-1
  assertion: 'PMID 9679051 reported: A 23-year-old man experiencing three episodes of acute pancreatitis of undetermined etiology is described.'
  relation: associated-with
  participants:
  - entityId: substance:pyritinol
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Source-specific result from PMID 9679051; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-9679051
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 9679051; this single study does not establish general efficacy or safety.
- id: reddit-claim-pyritinol-3066650-2
  assertion: 'PMID 3066650 reported: The auto-immune hypoglycemic syndrome is characterized by the association of hypoglycemia (clinical and/or biological) and anti-insulin antibodies in patients who have never received exogenous insulin.'
  relation: associated-with
  participants:
  - entityId: substance:pyritinol
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Source-specific result from PMID 3066650; applies to the population and design described in that abstract.
  sourceIds:
  - reddit-pmid-3066650
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 3066650; this single study does not establish general efficacy or safety.
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
  url: https://en.wikipedia.org/wiki/Pyritinol
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Pyritinol
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-2135070
  title: Psychopharmacological effects of pyritinol in normal volunteers.
  authors: I Hindmarch, D M Coleston, J S Kerr
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2135070/
  kind: PubMed publication
  insight: Significant improvements in CFFT and CRT were found after pyritinol.
  limitation: PubMed abstract for PMID 2135070 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '2135070'
  doi: 10.1159/000119478
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-6563664bc58a
  title: Severe cholestatic hepatitis induced by pyritinol.
  authors: Vasco Maria, Adriana Albuquerque, Ana Loureiro, Ana Sousa, Rui Victorino
  year: 2004
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC381054/
  kind: PubMed publication with PMC citation
  insight: PubMed record returned no abstract; full-text citation was checked separately.
  limitation: PubMed abstract for PMID 15001508 was reviewed; PMC citation PMC381054 is rights-restricted and full-text retrieval was unavailable in this pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: '15001508'
  pmcid: PMC381054
- id: reddit-pmid-9679051
  title: 'Acute pancreatitis due to pyritinol: an immune-mediated phenomenon.'
  authors: A Straumann, M Bauer, W J Pichler, M Pirovino
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9679051/
  kind: PubMed publication
  insight: A 23-year-old man experiencing three episodes of acute pancreatitis of undetermined etiology is described.
  limitation: PubMed abstract for PMID 9679051 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '9679051'
  doi: 10.1016/s0016-5085(98)70212-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-3066650
  title: '[Auto-immune hypoglycemic syndrome induced by pyritinol].'
  authors: B Faguer de Moustier, M Burgard, C Boitard, N Desplanque, J Fanjoux, G Tchobroutsky
  year: 1988
  url: https://pubmed.ncbi.nlm.nih.gov/3066650/
  kind: PubMed publication
  insight: The auto-immune hypoglycemic syndrome is characterized by the association of hypoglycemia (clinical and/or biological) and anti-insulin antibodies in patients who have never received exogenous insulin.
  limitation: PubMed abstract for PMID 3066650 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '3066650'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
