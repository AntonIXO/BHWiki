---
slug: pyritinol
name: Pyritinol
subtitle: Research profile
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research profile
tags:
  - episodic-memory
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2fbf-70c0-94a2-1ba8a51a57fd
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

Pyritinol is a compound derived from vitamin B6. Studies explore memory and cognitive performance.

## Description

This page links PubMed evidence for pyritinol. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 2135070, 3066650, 9679051.

## Evidence note

Study findings and methods are linked to their original publications.

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
  sourceId: pubmed-2135070
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
- id: research-pyritinol-episodic-memory-2135070
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: Significant improvements in CFFT and CRT were found after pyritinol.
  sourceId: pubmed-2135070
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
  sourceId: pubmed-3066650
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-pyritinol-2135070-0
  assertion: "PMID 2135070 reported: Significant improvements in CFFT and CRT were found after pyritinol."
  relation: associated-with
  participants:
    - entityId: substance:pyritinol
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 2135070; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-2135070
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 2135070; this single study does not establish general efficacy or safety.
- id: research-claim-pyritinol-9679051-1
  assertion: "PMID 9679051 reported: A 23-year-old man experiencing three episodes of acute pancreatitis of undetermined etiology is described."
  relation: associated-with
  participants:
    - entityId: substance:pyritinol
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 9679051; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-9679051
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 9679051; this single study does not establish general efficacy or safety.
- id: research-claim-pyritinol-3066650-2
  assertion: "PMID 3066650 reported: The auto-immune hypoglycemic syndrome is characterized by the association of hypoglycemia (clinical and/or biological) and anti-insulin antibodies in patients who have never received exogenous insulin."
  relation: associated-with
  participants:
    - entityId: substance:pyritinol
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 3066650; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-3066650
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
- id: pubmed-2135070
  title: Psychopharmacological effects of pyritinol in normal volunteers.
  authors: I Hindmarch, D M Coleston, J S Kerr
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2135070/
  kind: PubMed publication
  insight: Significant improvements in CFFT and CRT were found after pyritinol.
  limitation: PubMed abstract for PMID 2135070 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "2135070"
  doi: 10.1159/000119478
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-6563664bc58a
  title: Severe cholestatic hepatitis induced by pyritinol.
  authors: Vasco Maria, Adriana Albuquerque, Ana Loureiro, Ana Sousa, Rui Victorino
  year: 2004
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC381054/
  kind: PubMed publication with PMC citation
  insight: PubMed record returned no abstract; full-text citation was checked separately.
  limitation: PubMed abstract for PMID 15001508 was reviewed; PMC citation PMC381054 is rights-restricted and full-text retrieval was unavailable in this pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmid: "15001508"
  pmcid: PMC381054
- id: pubmed-9679051
  title: "Acute pancreatitis due to pyritinol: an immune-mediated phenomenon."
  authors: A Straumann, M Bauer, W J Pichler, M Pirovino
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9679051/
  kind: PubMed publication
  insight: A 23-year-old man experiencing three episodes of acute pancreatitis of undetermined etiology is described.
  limitation: PubMed abstract for PMID 9679051 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "9679051"
  doi: 10.1016/s0016-5085(98)70212-4
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-3066650
  title: "[Auto-immune hypoglycemic syndrome induced by pyritinol]."
  authors: B Faguer de Moustier, M Burgard, C Boitard, N Desplanque, J Fanjoux, G Tchobroutsky
  year: 1988
  url: https://pubmed.ncbi.nlm.nih.gov/3066650/
  kind: PubMed publication
  insight: The auto-immune hypoglycemic syndrome is characterized by the association of hypoglycemia (clinical and/or biological) and anti-insulin antibodies in patients who have never received exogenous insulin.
  limitation: PubMed abstract for PMID 3066650 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "3066650"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

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
