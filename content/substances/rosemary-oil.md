---
slug: rosemary-oil
name: Rosemary Oil
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
  sourceId: optihealth-substance-01a08b04-2fc9-7aff-aa75-1c7f172ce9b7
  observationId: rosemary-oil-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2fc9-7aff-aa75-1c7f172ce9b7
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
x-order: 1799
---

## Summary

Rosemary Oil evidence is source-specific and endpoint-limited. Analysis of performance revealed that lavender produced a significant decrement in performance of working memory, and impaired reaction times for both memory and attention based tasks compared to controls. ChE isoforms activity was significantly decreased in brain and liver of "rosemary treated" mice.
## Description

This page links PubMed evidence for rosemary oil. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 12690999, 25910439.
## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reviewed PubMed abstracts for PMID(s) 12690999, 25910439. No rights-eligible PMC full text was available among these records.

PMC coverage in this pass: No rights-eligible full text retrieved. Rights-restricted citations checked: PMC3736918.
## Doses

```yaml
- label: Rosemary tea exposure (25910439)
  amount: 2% w/w infusion
  quantity: 2
  quantityMax: null
  unit: '% w/w'
  ingredient: Rosemary leaf infusion
  formulation: Rosemarinus officinalis leaf tea
  route: oral
  frequency: daily
  duration: 4 weeks
  population: Adult male mice
  purpose: Preclinical research exposure
  sourceCategory: research
  note: Dose and schedule from the PMID 25910439 abstract; mouse findings do not establish human dosing.
  sourceId: reddit-pmid-25910439
```

## Pharmacokinetics

```yaml
- id: rosemary-oil-identity-unassessed
  analyte: Rosemary Oil
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
  sourceId: optihealth-substance-01a08b04-2fc9-7aff-aa75-1c7f172ce9b7
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-rosemary-oil-anxiety-25910439
  conceptId: anxiety
  name: Anxiety-like behavior
  direction: Decreased
  evidence: Preclinical or in-vitro research
  description: Rosemary tea consumption affected anxiety/fear and depression-like behavior in adult male mice; memory/learning was unaffected.
  sourceId: reddit-pmid-25910439
  population: Adult male mice receiving 2% w/w rosemary tea orally for 4 weeks
  exposure: 2% w/w rosemary leaf infusion, orally daily for 4 weeks
  instrument: Elevated plus maze and passive avoidance
  magnitude: null
  reportType: measured-assessment
- id: reddit-rosemary-oil-cholinesterase-25910439
  conceptId: cognitive-performance
  name: Cholinesterase activity
  direction: Decreased
  evidence: Preclinical or in-vitro research
  description: The same mouse study found significant inhibition of cerebral and liver cholinesterase isoforms after rosemary tea consumption.
  sourceId: reddit-pmid-25910439
  population: Adult male mice
  exposure: 2% w/w rosemary tea orally for 4 weeks
  instrument: Colorimetric cholinesterase assay
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-rosemary-oil-attention-12690999
  conceptId: attention
  name: Attention and memory speed
  direction: Variable
  evidence: Human research
  description: In 144 healthy volunteers, rosemary aroma improved overall and secondary-memory quality but impaired speed-of-memory compared with no-odor control; lavender impairments were a separate comparator.
  sourceId: reddit-pmid-12690999
  population: 144 healthy volunteers randomized to rosemary, lavender or no-odor control
  exposure: Rosemary essential-oil aroma in a test cubicle
  instrument: Cognitive Drug Research computerized battery
  magnitude: null
  reportType: measured-assessment
- id: reddit-rosemary-oil-cognitive-performance-12690999
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Variable
  evidence: Human research
  description: 'Rosemary aroma produced mixed cognitive effects: better overall and secondary-memory quality with slower memory speed versus control.'
  sourceId: reddit-pmid-12690999
  population: 144 healthy volunteers
  exposure: Rosemary essential-oil aroma
  instrument: Cognitive Drug Research computerized battery
  magnitude: null
  reportType: measured-assessment
- id: reddit-rosemary-oil-episodic-memory-12690999
  conceptId: episodic-memory
  name: Memory quality
  direction: Increased
  evidence: Human research
  description: Rosemary aroma significantly enhanced overall quality of memory and secondary-memory factors in the randomized odor study.
  sourceId: reddit-pmid-12690999
  population: 144 healthy volunteers
  exposure: Rosemary essential-oil aroma
  instrument: Cognitive Drug Research computerized battery
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Cholinesterase inhibition in mice
  description: Rosemary tea reduced cerebral and liver cholinesterase activity in adult male mice; the abstract links this to phenolic constituents, but human enzyme inhibition was not tested.
  sourceId: reddit-pmid-25910439
```

## Cautions

```yaml
- title: Preclinical translation boundary
  description: The anxiolytic, antidepressant-like and cholinesterase findings came from adult male mice receiving rosemary tea; they do not establish human efficacy, safety or equivalent dosing.
  sourceId: reddit-pmid-25910439
```

## Claims

```yaml
- id: reddit-claim-rosemary-oil-12690999-0
  assertion: 'In 144 healthy volunteers, rosemary aroma produced mixed memory effects: improved memory quality but slower memory speed versus no-odor control.'
  relation: associated-with
  participants:
  - entityId: substance:rosemary-oil
    role: intervention or exposure
  - entityId: tag:episodic-memory
    role: reported endpoint
  context: Randomized human odor study; lavender was a separate comparator.
  sourceIds:
  - reddit-pmid-12690999
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute olfactory exposure does not establish effects of oral rosemary products.
- id: reddit-claim-rosemary-oil-25910439-1
  assertion: In adult male mice, 2% w/w rosemary tea for 4 weeks altered anxiety/depression-like behavior and inhibited cerebral and liver cholinesterase activity.
  relation: associated-with
  participants:
  - entityId: substance:rosemary-oil
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Preclinical mouse study; memory/learning was unaffected.
  sourceIds:
  - reddit-pmid-25910439
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal findings cannot establish human efficacy or safety.
- id: reddit-claim-rosemary-oil-25910439-2
  assertion: In adult male mice, 2% w/w rosemary tea for 4 weeks altered anxiety/depression-like behavior and inhibited cerebral and liver cholinesterase activity.
  relation: associated-with
  participants:
  - entityId: substance:rosemary-oil
    role: intervention or exposure
  - entityId: tag:anxiety-symptom-severity
    role: reported endpoint
  context: Preclinical mouse study; memory/learning was unaffected.
  sourceIds:
  - reddit-pmid-25910439
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Animal findings cannot establish human efficacy or safety.
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
  url: https://en.wikipedia.org/wiki/Rosemary
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Rosmarinic+Acid
  title: Examine
```

## References

```yaml
- id: optihealth-substance-01a08b04-2fc9-7aff-aa75-1c7f172ce9b7
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2fc9-7aff-aa75-1c7f172ce9b7
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-link-2dd346996818
  title: Plasma 1,8-cineole correlates with cognitive performance following exposure to rosemary essential oil aroma.
  authors: Mark Moss, Lorraine Oliver
  year: 2012
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3736918/
  kind: PubMed publication with PMC citation
  insight: Here we show for the first time that performance on cognitive tasks is significantly related to concentration of absorbed 1,8-cineole following exposure to rosemary aroma, with improved performance at higher concentrations.
  limitation: PubMed abstract for PMID 23983963 was reviewed; PMC citation PMC3736918 is rights-restricted and full-text retrieval was unavailable in this pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: '23983963'
  pmcid: PMC3736918
  doi: ''
- id: reddit-pmid-12690999
  title: Aromas of rosemary and lavender essential oils differentially affect cognition and mood in healthy adults.
  authors: Mark Moss, Jenny Cook, Keith Wesnes, Paul Duckett
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12690999/
  kind: PubMed publication
  insight: Analysis of performance revealed that lavender produced a significant decrement in performance of working memory, and impaired reaction times for both memory and attention based tasks compared to controls.
  limitation: PubMed abstract for PMID 12690999 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '12690999'
  doi: 10.1080/00207450390161903
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25910439
  title: Rosemary tea consumption results to anxiolytic- and anti-depressant-like behavior of adult male mice and inhibits all cerebral area and liver cholinesterase activity; phytochemical investigation and in silico studies.
  authors: Anastasia-Varvara Ferlemi, Antigoni Katsikoudi, Vassiliki G Kontogianni, Tahsin F Kellici, Grigoris Iatrou, Fotini N Lamari, Andreas G Tzakos, Marigoula Margarity
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25910439/
  kind: PubMed publication
  insight: ChE isoforms activity was significantly decreased in brain and liver of "rosemary treated" mice.
  limitation: PubMed abstract for PMID 25910439 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: '25910439'
  doi: 10.1016/j.cbi.2015.04.013
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
