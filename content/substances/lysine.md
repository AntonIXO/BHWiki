---
slug: lysine
name: Lysine
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
  sourceId: reddit-index-lysine
  observationId: lysine-reddit-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-lysine
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

Lysine has 3 linked publications in the Reddit Nootropics index; abstract-supported records are listed below.

## Description

This page imports the Reddit index source trail for Lysine. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.

## Evidence note

PubMed MCP abstract review covered 3 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
- label: PubMed study exposure (17510493)
  amount: 2.64 g
  quantity: 2.64
  quantityMax: null
  unit: g
  ingredient: Lysine
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: '108 healthy Japanese adults'
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-17510493
- label: PubMed study exposure (16117182)
  amount: 3 g
  quantity: 3
  quantityMax: null
  unit: g
  ingredient: Lysine
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: '29 healthy subjects with high trait anxiety'
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-16117182
```

## Pharmacokinetics

```yaml
- id: lysine-reddit-pk-unestablished
  analyte: Lysine
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
  sourceId: reddit-index-lysine
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-lysine-anxiety-17510493
  conceptId: anxiety
  name: Anxiety
  direction: Decreased
  evidence: Human research
  description: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  sourceId: reddit-pmid-17510493
  population: '108 healthy Japanese adults'
  exposure: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lysine-anxiety-16117182
  conceptId: anxiety
  name: Anxiety
  direction: Increased
  evidence: Human research
  description: 'In 29 healthy people with high trait anxiety, 3 g/day each of L-lysine and L-arginine for 10 days increased ACTH, cortisol, adrenaline, noradrenaline and galvanic skin responses during public-speaking stress versus placebo, while heart-rate and blood-pressure responses were unchanged.'
  sourceId: reddit-pmid-16117182
  population: '29 healthy subjects with high trait anxiety'
  exposure: 'In 29 healthy people with high trait anxiety, 3 g/day each of L-lysine and L-arginine for 10 days increased ACTH, cortisol, adrenaline, noradrenaline and galvanic skin responses during public-speaking stress versus placebo, while heart-rate and blood-pressure responses were unchanged.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lysine-anxiety-15159538
  conceptId: anxiety
  name: Anxiety
  direction: Increased
  evidence: Human research
  description: 'In a 3-month randomized trial in wheat-dependent Syrian communities, lysine-fortified wheat reduced cortisol response in women, sympathetic arousal in men, and chronic anxiety in men measured by trait-anxiety inventory.'
  sourceId: reddit-pmid-15159538
  population: 'Family members in economically weak Syrian communities consuming wheat as a staple'
  exposure: 'In a 3-month randomized trial in wheat-dependent Syrian communities, lysine-fortified wheat reduced cortisol response in women, sympathetic arousal in men, and chronic anxiety in men measured by trait-anxiety inventory.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-lysine-cognitive-performance-17510493
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Decreased
  evidence: Human research
  description: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  sourceId: reddit-pmid-17510493
  population: '108 healthy Japanese adults'
  exposure: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lysine-anxiety-symptom-severity-17510493
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Decreased
  evidence: Human research
  description: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  sourceId: reddit-pmid-17510493
  population: '108 healthy Japanese adults'
  exposure: 'In 108 healthy Japanese adults, one week of 2.64 g/day L-lysine plus 2.64 g/day L-arginine significantly reduced trait and stress-induced state anxiety and lowered basal salivary cortisol and chromogranin-A in men.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lysine-anxiety-symptom-severity-16117182
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Increased
  evidence: Human research
  description: 'In 29 healthy people with high trait anxiety, 3 g/day each of L-lysine and L-arginine for 10 days increased ACTH, cortisol, adrenaline, noradrenaline and galvanic skin responses during public-speaking stress versus placebo, while heart-rate and blood-pressure responses were unchanged.'
  sourceId: reddit-pmid-16117182
  population: '29 healthy subjects with high trait anxiety'
  exposure: 'In 29 healthy people with high trait anxiety, 3 g/day each of L-lysine and L-arginine for 10 days increased ACTH, cortisol, adrenaline, noradrenaline and galvanic skin responses during public-speaking stress versus placebo, while heart-rate and blood-pressure responses were unchanged.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-lysine-anxiety-symptom-severity-15159538
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Increased
  evidence: Human research
  description: 'In a 3-month randomized trial in wheat-dependent Syrian communities, lysine-fortified wheat reduced cortisol response in women, sympathetic arousal in men, and chronic anxiety in men measured by trait-anxiety inventory.'
  sourceId: reddit-pmid-15159538
  population: 'Family members in economically weak Syrian communities consuming wheat as a staple'
  exposure: 'In a 3-month randomized trial in wheat-dependent Syrian communities, lysine-fortified wheat reduced cortisol response in women, sympathetic arousal in men, and chronic anxiety in men measured by trait-anxiety inventory.'
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Stress-axis modulation in human trials
  description: The linked trials measured anxiety and endocrine/autonomic responses to stress; the abstracts support changes in cortisol, chromogranin-A, ACTH, catecholamines, or skin conductance but do not identify a single molecular mechanism.
  sourceId: reddit-pmid-17510493
- title: Dietary fortification context
  description: The Syrian trial tested lysine fortification of wheat in communities consuming cereal-based diets; results are nutritional-intervention findings and may not transfer to isolated high-dose lysine supplementation.
  sourceId: reddit-pmid-15159538
```

## Cautions

```yaml
- title: Combination and population limits
  description: The anxiety studies used lysine with arginine, and the fortification study was conducted in nutritionally vulnerable Syrian communities; these designs do not establish lysine monotherapy efficacy for the general population.
  sourceId: reddit-pmid-17510493
- title: Stress-response direction differs by study
  description: The 10-day high-trait-anxiety study increased several stress hormones during psychosocial stress despite an anxiolytic interpretation, so endocrine responses should not be summarized as uniformly reduced.
  sourceId: reddit-pmid-16117182
```

## Claims

```yaml
- id: reddit-claim-lysine-17510493-0
  assertion: Lysine is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-17510493
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-lysine-17510493-1
  assertion: Lysine is associated with the reported anxiety symptom severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety-symptom-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-17510493
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-lysine-16117182-2
  assertion: Lysine is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-16117182
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-lysine-16117182-3
  assertion: Lysine is associated with the reported anxiety symptom severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety-symptom-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-16117182
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-lysine-15159538-4
  assertion: Lysine is associated with the reported anxiety finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-15159538
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-lysine-15159538-5
  assertion: Lysine is associated with the reported anxiety symptom severity finding in this publication.
  relation: associated-with
  participants:
  - entityId: substance:lysine
    role: intervention or exposure
  - entityId: tag:anxiety-symptom-severity
    role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
  - reddit-pmid-15159538
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
  url: https://en.wikipedia.org/wiki/Lysine
  title: Wikipedia
```

## References

```yaml
- id: reddit-index-lysine
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-17510493
  title: Oral treatment with L-lysine and L-arginine reduces anxiety and basal cortisol levels in healthy humans.
  authors: Miro Smriga, Toshihiko Ando, Masahisa Akutsu, Yasushi Furukawa, Kiyoshi Miwa, Yasushi Morinaga
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17510493/
  kind: PubMed publication
  insight: Dietary supplementation with an essential amino acid L-lysine has been shown to reduce chronic anxiety in humans with low dietary intake of L-lysine.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '17510493'
  doi: 10.2220/biomedres.28.85
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16117182
  title: Subchronic treatment with amino acid mixture of L-lysine and L-arginine modifies neuroendocrine activation during psychosocial stress in subjects with high trait anxiety.
  authors: Daniela Jezova, Aikaterini Makatsori, Miro Smriga, Yasushi Morinaga, Roman Duncko
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16117182/
  kind: PubMed publication
  insight: The aim of the present study was to evaluate possible modulatory effect of the treatment with L-lysine and L-arginine on neuroendocrine activation during psychosocial stress in healthy subjects with relatively high trait anxiety in a randomized, double blind placebo controlled trial.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '16117182'
  doi: 10.1080/10284150500162937
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15159538
  title: Lysine fortification reduces anxiety and lessens stress in family members in economically weak communities in Northwest Syria.
  authors: Miro Smriga, Shibani Ghosh, Youssef Mouneimne, Peter L Pellett, Nevin S Scrimshaw
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15159538/
  kind: PubMed publication
  insight: Lysine is a limiting amino acid in diets based on wheat as the staple.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15159538'
  doi: 10.1073/pnas.0402550101
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
