---
slug: eicosanoyl-5-hydroxytryptamide
name: Eicosanoyl-5-Hydroxytryptamide
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
  context: PMID 23296837 reported mouse neuroprotection but no human pharmacokinetic or elimination measurement.
  sourceId: reddit-pmid-23296837
  observationId: eicosanoyl-5-hydroxytryptamide-pk-unestablished
kinetics:
  onset: No human onset observation was reported.
  peak: No plasma peak was measured.
  duration: No human duration or exposure window was reported.
  bioavailability: Human oral bioavailability was not studied.
  metabolism: Mouse and cell metabolism were not characterized.
  sourceId: reddit-pmid-23296837
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

Eicosanoyl-5-Hydroxytryptamide (EHT) is supported here by one PubMed preclinical study (PMID 23296837). In mice, four weeks of dietary EHT produced dose-dependent protection against MPTP-induced nigrostriatal injury; no human dose, efficacy, safety, or pharmacokinetic evidence is established.

## Description

EHT is a coffee component studied in alpha-synuclein and MPTP mouse models. The linked publication reports dopaminergic-neuron preservation, reduced neuroinflammation and oxidative stress, and cellular anti-inflammatory effects. These are preclinical findings and do not establish a human supplement protocol.

## Evidence note

PubMed abstract PMID 23296837 was retrieved and used for the records below. The linked article is indexed as PMC3557367, but PubMed copyright status marked automated full-text retrieval as not permitted; methods, exact dietary concentrations, and disclosures therefore remain unreviewed. The Reddit index contains one duplicated title/PMID trail, which is represented once.

## Doses

```yaml
[]
```

## Pharmacokinetics

```yaml
- id: eicosanoyl-5-hydroxytryptamide-pk-unestablished
  analyte: Eicosanoyl-5-Hydroxytryptamide
  route: Preclinical dietary exposure
  formulation: Mouse diet
  population: MPTP-challenged mice
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: PMID 23296837 did not report an elimination measurement; no human pharmacokinetic observation is available.
  sourceId: reddit-pmid-23296837
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
- id: reddit-eicosanoyl-5-hydroxytryptamide-dopaminergic-neurons-23296837
  conceptId: cognitive-performance
  name: Nigral dopaminergic-neuron integrity
  direction: Increased
  evidence: Limited research
  description: EHT preserved nigral dopaminergic neurons after MPTP challenge in a dose-dependent manner; the study also reported less loss of striatal dopamine and tyrosine hydroxylase.
  sourceId: reddit-pmid-23296837
  population: MPTP-challenged mice
  exposure: Four-week dietary EHT
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-eicosanoyl-5-hydroxytryptamide-oxidative-stress-23296837
  conceptId: mitochondrial-biomarkers
  name: Oxidative-stress indices
  direction: Decreased
  evidence: Limited research
  description: EHT significantly prevented indices of oxidative stress and JNK activation in the MPTP mouse model; the abstract does not provide human biomarker data.
  sourceId: reddit-pmid-23296837
  population: MPTP-challenged mice
  exposure: Dietary EHT
  instrument: null
  magnitude: null
  reportType: measured-assessment
```
## Mechanisms

```yaml
- title: Anti-inflammatory and antioxidant activity in MPTP model
  description: The abstract attributes EHT protection to attenuation of neuroinflammation and oxidative stress; cultured-cell experiments showed repression of lipopolysaccharide-induced NF-kappaB, iNOS, and nitric oxide, plus robust antioxidant activity.
  sourceId: reddit-pmid-23296837
- title: PP2A methylation and cytotoxicity modulation
  description: In SH-SY5Y cells, EHT ameliorated MPP(+)-induced demethylation of phosphoprotein phosphatase 2A and cytotoxicity, suggesting an additional PP2A-regulatory mechanism.
  sourceId: reddit-pmid-23296837
```

## Cautions

```yaml
- title: Animal and cell evidence only
  description: PMID 23296837 used MPTP-challenged mice and cultured cells. It does not establish a human dose, brain exposure, clinical benefit, interaction profile, or long-term safety for EHT.
  sourceId: reddit-pmid-23296837
```

## Claims

```yaml
- id: reddit-claim-eicosanoyl-5-hydroxytryptamide-23296837
  assertion: In MPTP-challenged mice, four weeks of dietary EHT was associated with dose-dependent preservation of nigral dopaminergic neurons and attenuation of neuroinflammatory and oxidative-stress markers.
  relation: associated-with
  participants:
  - entityId: substance:eicosanoyl-5-hydroxytryptamide
    role: intervention or exposure
  - entityId: tag:cognitive-performance
    role: reported endpoint
  context: Preclinical mouse and cell experiments in the linked publication; no human inference is made.
  sourceIds:
  - reddit-pmid-23296837
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: One preclinical publication; exact dietary concentration and full-text methods were not retrievable through the PubMed connector.
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
- id: reddit-index-eicosanoyl-5-hydroxytryptamide
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-23296837
  title: Neuroprotective and anti-inflammatory properties of a coffee component in the MPTP model of Parkinson's disease.
  authors: Kang-Woo Lee, Joo-Young Im, Jong-Min Woo, Hilary Grosso, Yoon-Seong Kim, Ana Clara Cristovao, Patricia K Sonsalla, David S Schuster, Marla M Jalbut, Jose R Fernandez, Michael Voronkov, Eunsung Junn, Steven P Braithwaite, Jeffry B Stock, M Maral Mouradian
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23296837/
  kind: PubMed publication
  insight: In MPTP-challenged mice, four weeks of dietary EHT produced dose-dependent dopaminergic-neuron preservation and reduced neuroinflammation, oxidative stress, and PP2A demethylation.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '23296837'
  pmcid: PMC3557367
  doi: 10.1007/s13311-012-0165-2
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
