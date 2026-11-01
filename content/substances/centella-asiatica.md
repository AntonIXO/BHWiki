---
slug: centella-asiatica
name: Centella asiatica
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
  sourceId: reddit-index-centella-asiatica
  observationId: centella-asiatic-acid-pk-2329813
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-centella-asiatica
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

Centella asiatica studies report anxiety, mood and cognitive outcomes at specific extract doses; an older PK study measured asiatic acid, and case reports describe hepatotoxicity.

## Description

Human trials used hydro-ethanolic or unspecified Centella extracts. A 500 mg twice-daily regimen for 60 days improved anxiety and stress ratings in a small uncontrolled clinical study, while a randomized elderly trial found dose-related working-memory and mood signals at 250–750 mg/day. Animal studies of water extract and asiatic acid are mechanistic support only.

## Evidence note

The linked evidence spans a 33-person anxiety study, a 28-person randomized elderly trial, mouse/rat studies, one 12-volunteer PK crossover study, and three hepatotoxicity cases. The clinical signals are formulation- and population-specific; no universal dose or half-life is established.

## Doses

```yaml
- label: Hydro-ethanolic Centella extract
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Centella asiatica extract
  formulation: 70% hydro-ethanolic extract
  route: Oral
  frequency: Twice daily after meals
  duration: 60 days
  population: 33 adults with generalized anxiety disorder
  purpose: Anxiety and stress research
  sourceCategory: research
  note: Clinical study without a placebo arm in the abstract.
  sourceId: reddit-pmid-20677602
- label: Centella extract elderly trial
  amount: 250–750 mg once daily
  quantity: 250
  quantityMax: 750
  unit: mg/day
  ingredient: Centella asiatica extract
  formulation: Plant extract
  route: Oral
  frequency: Once daily
  duration: 2 months
  population: 28 healthy elderly volunteers
  purpose: Cognition and mood research
  sourceCategory: research
  note: High dose enhanced working memory in the randomized placebo-controlled study.
  sourceId: reddit-pmid-18191355
- label: Asiatic acid rat study
  amount: 30 mg/kg
  quantity: 30
  quantityMax: null
  unit: mg/kg
  ingredient: Asiatic acid
  formulation: Purified triterpene
  route: Oral
  frequency: Daily
  duration: 14 or 28 days
  population: Male Sprague-Dawley rats
  purpose: Spatial-memory and neurogenesis research
  sourceCategory: research
  note: Animal dose; not a human recommendation.
  sourceId: reddit-pmid-26445061
```

## Pharmacokinetics

```yaml
- id: centella-asiatic-acid-pk-2329813
  analyte: Asiatic acid
  route: Oral
  formulation: Total triterpenic fraction of Centella asiatica
  population: 12 healthy volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Single 30 or 60 mg doses and 7-day twice-daily treatment were studied. Repeated dosing increased Cmax, AUC0–24 and half-life versus corresponding single doses; no numeric half-life was available in the abstract.
  sourceId: reddit-pmid-2329813
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
- id: centella-anxiety-20677602
  conceptId: anxiety-symptom-severity
  name: Anxiety
  direction: Decreased
  evidence: Human research
  description: A 500 mg twice-daily hydro-ethanolic extract regimen attenuated anxiety and stress ratings over 60 days in 33 participants.
  sourceId: reddit-pmid-20677602
  population: 33 adults, mean age 33 years, with generalized anxiety disorder
  exposure: 500 mg Centella extract twice daily for 60 days
  instrument: Psychological rating scales and stress queries
  magnitude: null
  reportType: measured-assessment
- id: centella-attention-18191355
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: The 250–750 mg/day randomized elderly trial reported improved working memory and mood at the high dose.
  sourceId: reddit-pmid-18191355
  population: 28 healthy elderly participants
  exposure: 250, 500 or 750 mg/day extract for 2 months
  instrument: Computerized cognitive battery and event-related potential
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Mitochondrial and antioxidant response
  description: In mice, 2 mg/mL water extract improved Morris-water-maze performance in aged animals and increased mitochondrial, antioxidant and synaptic-marker expression.
  sourceId: reddit-pmid-26785167
- title: Hippocampal neurogenesis
  description: Asiatic acid 30 mg/kg orally increased Ki-67/DCX/Notch1 markers and novel-object-location discrimination in rats after 14 or 28 days.
  sourceId: reddit-pmid-26445061
```

## Cautions

```yaml
- title: Asiatic-acid pharmacokinetics
  description: In 12 healthy volunteers, 30 or 60 mg total-triterpene doses produced measurable asiatic-acid exposure; repeated 7-day dosing increased Cmax, AUC0–24 and half-life versus single doses, but the abstract gives no numeric half-life.
  sourceId: reddit-pmid-2329813
```

## Claims

```yaml
- id: centella-claim-20677602
  assertion: A 500 mg twice-daily hydro-ethanolic Centella extract was associated with lower anxiety and stress ratings over 60 days in a small clinical study.
  relation: associated-with
  participants:
  - entityId: substance:centella-asiatica
    role: intervention
  - entityId: tag:anxiety-symptom-severity
    role: measured endpoint
  context: 33-participant clinical study; abstract does not report placebo control.
  sourceIds:
  - reddit-pmid-20677602
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small, formulation-specific study.
- id: centella-claim-18191355
  assertion: In healthy elderly volunteers, 750 mg/day Centella extract improved working-memory and mood measures over 2 months versus lower doses/placebo.
  relation: associated-with
  participants:
  - entityId: substance:centella-asiatica
    role: intervention
  - entityId: tag:cognitive-performance
    role: measured endpoint
  context: Randomized placebo-controlled trial; n=28.
  sourceIds:
  - reddit-pmid-18191355
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample and extract not chemically standardized in abstract.
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
  url: https://en.wikipedia.org/wiki/Centella_asiatica
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/centella-asiatica
  title: Examine.com
```

## References

```yaml
- id: reddit-index-centella-asiatica
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-20677602
  title: A clinical study on the management of generalized anxiety disorder with Centella asiatica.
  authors: U Jana, T K Sur, L N Maity, P K Debnath, D Bhattacharyya
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20677602/
  kind: PubMed publication
  insight: Centella asiatica is reputed for its beneficial effects in various neurological disorders.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '20677602'
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18191355
  title: Positive modulation of cognition and mood in the healthy elderly volunteer following the administration of Centella asiatica.
  authors: Jintanaporn Wattanathorn, Lugkana Mator, Supaporn Muchimapura, Terdthai Tongun, Orapin Pasuriwong, Nawanant Piyawatkul, Kwanchanok Yimtae, Bungorn Sripanidkulchai, Jintana Singkhoraard
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18191355/
  kind: PubMed publication
  insight: 'AIMS OF THIS STUDY: Centella asiatica has a reputation to restore decline cognitive function in traditional medicine and in animal model.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '18191355'
  doi: 10.1016/j.jep.2007.11.038
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26785167
  title: Centella asiatica modulates antioxidant and mitochondrial pathways and improves cognitive function in mice.
  authors: Nora E Gray, Christopher J Harris, Joseph F Quinn, Amala Soumyanath
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26785167/
  kind: PubMed publication
  insight: 'ETHNOPHARMACOLOGICAL RELEVANCE: This study investigates the cognitive enhancing effects of the plant Centella asiatica which is widely used Ayurvedic and traditional Chinese medicine.'
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: '26785167'
  doi: 10.1016/j.jep.2016.01.013
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4764102/
- id: reddit-pmid-26445061
  title: Effects of Asiatic Acid on Spatial Working Memory and Cell Proliferation in the Adult Rat Hippocampus.
  authors: Apiwat Sirichoat, Wunnee Chaijaroonkhanarak, Parichat Prachaney, Wanassanan Pannangrong, Ratana Leksomboon, Amnart Chaichun, Peter Wigmore, Jariya Umka Welbat
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26445061/
  kind: PubMed publication
  insight: Asiatic acid is a pentacyclic triterpene from Centella asiatica.
  limitation: PubMed abstract and linked PMC full text inspected; funding and conflicts were not assessed in this pass.
  pmid: '26445061'
  doi: 10.3390/nu7105401
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmcUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4632421/
- id: reddit-pmid-2329813
  title: Pharmacokinetics of the total triterpenic fraction of Centella asiatica after single and multiple administrations to healthy volunteers. A new assay for asiatic acid.
  authors: R Grimaldi, F De Ponti, L D'Angelo, M Caravaggi, G Guidi, S Lecchini, G M Frigo, A Crema
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2329813/
  kind: PubMed publication
  insight: A new HPLC assay method was used to investigate the pharmacokinetics of asiatic acid after oral administration of the total triterpenic fraction of Centella asiatica in single doses (30 or 60 mg) and after a 7-day treatment (30 or 60 mg twice daily).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '2329813'
  doi: 10.1016/0378-8741(90)90033-p
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15801887
  title: Hepatotoxicity associated with the ingestion of Centella asiatica.
  authors: O A Jorge, A D Jorge
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15801887/
  kind: PubMed publication
  insight: 'BACKGROUND: Hepatotoxicity due to herbal remedies is being increasingly recognized.'
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: '15801887'
  doi: 10.4321/s1130-01082005000200006
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
