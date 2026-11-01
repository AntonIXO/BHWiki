---
slug: medium-chain-triacylglycerols
name: Medium-Chain Triacylglycerols
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
  sourceId: reddit-index-medium-chain-triacylglycerols
  observationId: mct-pk-23274095
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-medium-chain-triacylglycerols
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

Medium-chain triacylglycerol supplementation produced mild ketonemia in an eight-person metabolic study; the estimated brain-energy contribution was model-based.

## Description

This record summarizes the 4-week human MCT protocol, including dose, ketone measurements, isotope oxidation, and the limits of its small sample.

## Evidence note

PubMed abstract PMID 23274095 was retrieved and used to replace heuristic dose/effect records. The study was an 8-person, 4-week metabolic protocol; no formulation-independent pharmacokinetic or clinical cognitive conclusion was established.


## Doses

```yaml
- label: MCT supplementation protocol
  amount: 20 g/day for 1 week, then 30 g/day for 3 weeks
  quantity: 20
  quantityMax: 30
  unit: g/day
  ingredient: Medium-chain triacylglycerols
  formulation: MCT supplement divided four times daily
  route: oral
  frequency: 4 times daily
  duration: 4 weeks
  population: 8 healthy adults (mean age 26 years)
  purpose: Metabolic study of ketonemia and substrate oxidation
  sourceCategory: research
  note: Research exposure; not a general dosing recommendation.
  sourceId: reddit-pmid-23274095
```

## Pharmacokinetics

```yaml
- id: mct-pk-23274095
  analyte: Medium-chain triacylglycerols
  route: oral
  formulation: MCT supplement
  population: 8 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Metabolic time-course measured over 8–12 hours before and after 4-week supplementation; no elimination half-life was reported.
  sourceId: reddit-pmid-23274095
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: mct-ketonemia-23274095
  conceptId: ketosis
  name: Mild ketonemia
  direction: Increased
  evidence: Human research
  description: After 4 weeks of MCT supplementation, plasma beta-hydroxybutyrate plus acetoacetate peaked at 476 micromolar
    and averaged 290 micromolar during the metabolic study day.
  sourceId: reddit-pmid-23274095
  population: 8 healthy adults
  exposure: 20 g/day for 1 week then 30 g/day for 3 weeks
  instrument: Plasma ketones
  magnitude: Peak 476 micromolar; mean 290 micromolar
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: mct-brain-energy-23274095
  conceptId: brain-energy-metabolism
  name: Estimated brain energy contribution
  direction: Increased
  evidence: Human research
  description: The achieved ketonemia was estimated to contribute up to 8–9% of brain energy metabolism; this was a model-based
    estimate rather than direct brain measurement.
  sourceId: reddit-pmid-23274095
  population: 8 healthy adults
  exposure: 4-week MCT supplementation
  instrument: Isotope and metabolic measurements with theoretical estimate
  magnitude: Estimated up to 8–9%
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: MCT-derived ketone production
  description: MCT supplementation increased circulating ketones; isotope tracing showed time-dependent trioctanoate beta-oxidation
    without changing beta-hydroxybutyrate oxidation.
  sourceId: reddit-pmid-23274095
```

## Cautions

```yaml
- title: Small metabolic study
  description: The study enrolled only eight healthy adults and reported no side effects under its protocol; tolerability
    and efficacy cannot be generalized to other doses or populations.
  sourceId: reddit-pmid-23274095
```

## Claims

```yaml
- id: mct-claim-ketonemia-23274095
  assertion: Four weeks of divided MCT supplementation produced mild sustained ketonemia in eight healthy adults.
  relation: supported-by
  participants:
  - entityId: substance:medium-chain-triacylglycerols
    role: intervention
  - entityId: tag:ketosis
    role: measured endpoint
  context: 20 g/day for one week followed by 30 g/day for three weeks.
  sourceIds:
  - reddit-pmid-23274095
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small metabolic study; brain-energy contribution was estimated rather than directly measured.
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
  url: https://en.wikipedia.org/wiki/Medium-chain_triglyceride
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-medium-chain-triacylglycerols
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-23274095
  title: 'Stimulation of mild, sustained ketonemia by medium-chain triacylglycerols in healthy humans: estimated potential contribution to brain energy metabolism.'
  authors: Alexandre Courchesne-Loyer, Mélanie Fortier, Jennifer Tremblay-Mercier, Raphaël Chouinard-Watkins, Maggie Roy, Scott Nugent, Christian-Alexandre Castellano, Stephen C Cunnane
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23274095/
  kind: PubMed publication
  insight: 'OBJECTIVE: In humans consuming a normal diet, we investigated 1) the capacity of a medium-chain triacylglycerol (MCT) supplement to stimulate and sustain ketonemia, 2) ¹³C-β-hydroxybutyrate and ¹³C-trioctanoate metabolism, and 3) the theoretical contribution of the degree of ketonemia achieved to brain energy metabolism.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: '23274095'
  doi: 10.1016/j.nut.2012.09.009
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
