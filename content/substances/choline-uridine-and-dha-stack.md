---
slug: choline-uridine-and-dha-stack
name: Choline, Uridine and DHA stack
subtitle: Synaptic-precursor combination studied mainly in animals and medical-food trials.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Combination intervention
tags: []
accent: '#a9b993'
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established for the combination
  low: null
  high: null
  context: The linked studies did not establish a combination half-life.
  sourceId: reddit-pmid-19262950
  observationId: choline-uridine-dha-stack-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established for the combination
  metabolism: Components feed phosphatidylcholine and synaptic-membrane precursor pathways; combination PK was not reported.
  sourceId: reddit-pmid-19262950
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
x-order: 1953
---

## Summary

Choline, uridine and DHA combinations have preclinical synaptogenesis and cognitive findings; human evidence in the linked record is limited to medical-food safety and exploratory memory outcomes.

## Description

The stack supplies choline, uridine/UMP and DHA, substrates for the Kennedy phosphatidylcholine cycle and synaptic-membrane synthesis. Rodent studies report increased dendritic spines, synaptic proteins and selected cognitive behaviors; Souvenaid (Fortasyn Connect) studies combine these nutrients with additional vitamins, antioxidants and phospholipids, so they are not tests of the three-ingredient stack alone.

## Evidence note

The strongest mechanistic publication (PMID 19262950; PMC12876292) is a review of rodent work and a briefly described phase-2 trial. Uridine plus omega-3 fatty acids reduced immobility in rats, a multi-target diet attenuated deficits in an olfactory-bulbectomy model, and a 24-week open-label Souvenaid extension reported tolerability and exploratory memory changes. No standalone human dose-response, PK or definitive efficacy estimate for choline+uridine+DHA was established.

## Doses

```yaml
- label: Uridine stimulant-interaction study
  amount: 16 mg/kg
  quantity: 16
  quantityMax: null
  unit: mg/kg
  ingredient: Uridine
  formulation: Experimental uridine solution
  route: Intraperitoneal
  frequency: Daily
  duration: Chronic preclinical exposure
  population: Female Sprague-Dawley rats
  purpose: Stimulant-induced motor activity research
  sourceCategory: research
  note: Uridine alone, not the full stack; animal dose only.
  sourceId: reddit-pmid-8372096
- label: Souvenaid extension
  amount: Once daily (product dose not stated in abstract)
  quantity: null
  quantityMax: null
  unit: not reported
  ingredient: Fortasyn Connect medical food
  formulation: Souvenaid beverage containing DHA, uridine source, choline and additional nutrients
  route: Oral
  frequency: Once daily
  duration: 24-week open-label extension; pooled exposure up to 48 weeks
  population: 201 patients with mild Alzheimer disease
  purpose: Tolerability and exploratory memory research
  sourceCategory: research
  note: Multi-ingredient medical food; not an isolated three-component stack.
  sourceId: reddit-pmid-25322923
```

## Pharmacokinetics

```yaml
- id: choline-uridine-dha-stack-pk-unestablished
  analyte: Choline + uridine/UMP + DHA combination
  route: Oral
  formulation: Combination intervention
  population: Human and animal studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The linked publications describe behavioral, synaptic and safety outcomes but do not establish a combination concentration-time profile.
  sourceId: reddit-pmid-19262950
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
- id: choline-uridine-dha-cognition-19262950
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: The review summarizes rodent findings in which oral uridine plus DHA (with choline in many protocols) increased dendritic spines and selected cognitive behaviors; a human phase-2 trial is only briefly described.
  sourceId: reddit-pmid-19262950
  population: Primarily normal rodents; human phase-2 trial described without full results
  exposure: Oral uridine/UMP, DHA and choline precursor combinations
  instrument: Rodent cognitive tasks and synaptic markers
  magnitude: Not established for humans
  reportType: measured-assessment
- id: choline-uridine-dha-memory-25322923
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: In a 24-week open-label Souvenaid extension, pooled 48-week data showed an exploratory memory-domain z-score increase during Souvenaid intervention; the product contains additional nutrients and lacks a placebo comparator in the extension.
  sourceId: reddit-pmid-25322923
  population: 201 patients with mild Alzheimer disease
  exposure: Once-daily Souvenaid medical food
  instrument: Revised neuropsychological memory battery
  magnitude: Exploratory increase; no controlled effect estimate in abstract
  reportType: measured-assessment
- id: choline-uridine-dha-depression-15705349
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Limited research
  description: Uridine and omega-3 fatty acids reduced immobility in rat forced-swim tests, with potentiation when sub-effective doses were combined.
  sourceId: reddit-pmid-15705349
  population: Sprague-Dawley rats
  exposure: Uridine plus dietary omega-3 fatty acids
  instrument: Forced-swim test
  magnitude: Not reported in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Kennedy-cycle phosphatidylcholine synthesis
  description: Choline, uridine-derived CTP and DHA-containing diacylglycerol provide substrates for phosphatidylcholine and synaptic-membrane synthesis; uridine products can activate neuronal P2Y receptors.
  sourceId: reddit-pmid-19262950
- title: Synaptic structural markers
  description: The review summarizes increases in dendritic spines, neurite markers and proteins such as PSD-95, synapsin-1 and syntaxin-3 in rodent or cellular models.
  sourceId: reddit-pmid-19262950
- title: Dopaminergic interaction in rats
  description: Chronic uridine altered stimulant-induced activity and blunted amphetamine-induced striatal dopamine increases in a rat study.
  sourceId: reddit-pmid-8372096
```

## Cautions

```yaml
- title: Mostly preclinical evidence
  description: Synaptogenesis and antidepressant-like findings are primarily rodent or cell results; they do not establish a human nootropic dose.
  sourceId: reddit-pmid-19262950
- title: Multi-ingredient Souvenaid attribution
  description: The Souvenaid extension tested Fortasyn Connect plus vitamins, antioxidants and phospholipids, so safety or memory findings cannot be attributed to choline, uridine and DHA alone.
  sourceId: reddit-pmid-25322923
```

## Claims

```yaml
- id: choline-uridine-dha-claim-19262950
  assertion: Oral uridine and DHA, often with choline, increased synaptic markers and selected cognitive behaviors in animal studies summarized by the review.
  relation: associated-with
  participants:
  - entityId: substance:choline-uridine-and-dha-stack
    role: combination intervention
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Review of rodent, cellular and briefly described human trial evidence.
  sourceIds:
  - reddit-pmid-19262950
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Human efficacy and standalone stack dosing remain unestablished.
- id: choline-uridine-dha-claim-25322923
  assertion: Souvenaid was well tolerated over up to 48 weeks and showed an exploratory memory increase in an open-label extension.
  relation: associated-with
  participants:
  - entityId: substance:choline-uridine-and-dha-stack
    role: related medical-food intervention
  - entityId: tag:episodic-memory
    role: exploratory endpoint
  context: 24-week open-label extension to a prior trial in mild Alzheimer disease.
  sourceIds:
  - reddit-pmid-25322923
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Multi-ingredient product and no placebo comparator in the extension.
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
- id: reddit-pmid-19262950
  title: Synapse formation is enhanced by oral administration of uridine and DHA, the circulating precursors of brain phosphatides.
  authors: R J Wurtman, M Cansev, I H Ulus
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19262950/
  kind: PubMed publication
  insight: Review of rodent and early clinical evidence linking uridine, DHA and choline precursors to synaptic-membrane synthesis.
  limitation: PubMed abstract and PMC full text inspected; review and preclinical evidence do not establish standalone human efficacy. Funding and conflicts were not assessed.
  pmid: '19262950'
  doi: 10.1007/s12603-009-0056-3
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12876292/
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15705349
  title: Antidepressant-like effects of uridine and omega-3 fatty acids are potentiated by combined treatment in rats.
  authors: William A Carlezon, Stephen D Mague, Aimee M Parow, Andrew L Stoll, Bruce M Cohen, Perry F Renshaw
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15705349/
  kind: PubMed publication
  insight: Uridine and omega-3 fatty acids each reduced forced-swim immobility in rats, with potentiation when combined.
  limitation: Animal study; no human dose or efficacy established. Funding and conflicts were not assessed.
  pmid: '15705349'
  doi: 10.1016/j.biopsych.2004.11.038
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-8372096
  title: Uridine and stimulant-induced motor activity.
  authors: C S Myers, M Napolitano, H Fisher, G C Wagner
  year: 1993
  url: https://pubmed.ncbi.nlm.nih.gov/8372096/
  kind: PubMed publication
  insight: Chronic intraperitoneal uridine altered stimulant-induced activity, rotation and striatal dopamine responses in rats.
  limitation: Animal study; no human interaction or PK conclusion established. Funding and conflicts were not assessed.
  pmid: '8372096'
  doi: 10.3181/00379727-204-43633
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24286859
  title: Neuroprotective and cognitive enhancing effects of a multi-targeted food intervention in an animal model of neurodegeneration and depression.
  authors: Yuliya E Borre, Theodora Panagaki, Pim J Koelink, Mary E Morgan, Hendrikus Hendriksen, Johan Garssen, Aletta D Kraneveld, Berend Olivier, Ronald S Oosting
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24286859/
  kind: PubMed publication
  insight: A multi-target diet containing uridine, choline and DHA attenuated behavioral and cognitive deficits in an olfactory-bulbectomy rat model.
  limitation: Multi-ingredient animal diet; no human efficacy or standalone stack dose established. Funding and conflicts were not assessed.
  pmid: '24286859'
  doi: 10.1016/j.neuropharm.2013.11.009
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25322923
  title: 'Tolerability and safety of Souvenaid in patients with mild Alzheimer''s disease: results of multi-center, 24-week, open-label extension study.'
  authors: Marcel G M Olde Rikkert, Frans R Verhey, Rafael Blesa, Christine A F von Arnim, Anke Bongers, John Harrison, John Sijben, Elio Scarpini, Maurits F J Vandewoude, Bruno Vellas, Renger Witkamp, Patrick J G H Kamphuis, Philip Scheltens
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25322923/
  kind: PubMed publication
  insight: In 201 patients with mild Alzheimer disease, once-daily Souvenaid was well tolerated over 24 weeks; pooled 48-week data showed an exploratory memory increase.
  limitation: Open-label extension and multi-ingredient medical food; no isolated stack efficacy estimate. Funding and conflicts were not assessed.
  pmid: '25322923'
  doi: 10.3233/JAD-141305
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
