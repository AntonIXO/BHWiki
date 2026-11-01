---
slug: curcumin
name: Curcumin
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
  sourceId: optihealth-substance-01a08b04-2eff-7cac-aff5-7db464d450ef
  observationId: curcumin-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2eff-7cac-aff5-7db464d450ef
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
x-order: 1397
---

## Summary

Curcumin evidence is formulation- and population-specific. In older adults, 400 mg Longvida improved selected attention and working-memory measures acutely and after four weeks, while a 12-month 1500 mg/day Biocurcumax trial mainly found a MoCA time-by-treatment interaction driven by placebo decline. An 8-week 500 mg twice-daily trial provided partial support for antidepressant effects in major depressive disorder. [PMID 25277322](https://pubmed.ncbi.nlm.nih.gov/25277322/) [PMID 27102361](https://pubmed.ncbi.nlm.nih.gov/27102361/) [PMID 25046624](https://pubmed.ncbi.nlm.nih.gov/25046624/)

## Description

Curcuminoid delivery matters: poor solubility, rapid intestinal/hepatic metabolism, and low systemic bioavailability vary substantially by formulation. A review of commercial products reported up to 45.9-fold relative bioavailability for a hydrophilic carrier versus standard 95% curcuminoids, but this is a pharmacokinetic comparison and does not establish clinical benefit. [PMID 25856323](https://pubmed.ncbi.nlm.nih.gov/25856323/) [PMC4536942](https://pmc.ncbi.nlm.nih.gov/articles/PMC4536942/)

## Evidence note

Reviewed seven PubMed abstracts and retrieved complete PMC full text for PMC4754352 and PMC4536942. PMC4367473 retrieval returned a connector error, so that paper is represented from its PubMed abstract. Human findings are separated from rat and cell studies below.

## Doses

```yaml
- label: Longvida older-adult cognition trial
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Solid-lipid curcumin (Longvida)
  formulation: Longvida solid-lipid formulation
  route: Oral
  frequency: Single dose and daily chronic treatment
  duration: Acute 1 or 3 hours; chronic 4 weeks; acute-on-chronic follow-up
  population: 60 healthy adults aged 60–85
  purpose: Cognition, mood, and blood biomarkers
  sourceCategory: research
  sourceId: reddit-pmid-25277322
  note: Dose context was not described in the retrieved abstract.
- label: Biocurcumax older-adult trial
  amount: 1500 mg/day
  quantity: 1500
  quantityMax: null
  unit: mg/day
  ingredient: Biocurcumax curcumin formulation
  formulation: Biocurcumax
  route: Oral
  frequency: Daily
  duration: 12 months
  population: 96 community-dwelling older adults
  purpose: Prevention of cognitive decline
  sourceCategory: research
  sourceId: reddit-pmid-27102361
  note: Dose context was not described in the retrieved abstract.
- label: Major-depression trial
  amount: 500 mg twice daily
  quantity: 500
  quantityMax: null
  unit: mg per dose
  ingredient: Patented curcumin extract
  formulation: Patented curcumin extract; exact product name not stated in abstract
  route: Oral
  frequency: Twice daily
  duration: 8 weeks
  population: 56 people with major depressive disorder
  purpose: Depressive symptoms and anxiety
  sourceCategory: research
  sourceId: reddit-pmid-25046624
  note: Dose context was not described in the retrieved abstract.
- label: Rodent fear-memory diet
  amount: 1.5% dietary curcumin
  quantity: 1.5
  quantityMax: null
  unit: percent of diet
  ingredient: Curcumin
  formulation: Enriched diet
  route: Oral dietary exposure
  frequency: Dietary exposure
  duration: Study-specific
  population: Rodent Pavlovian fear-memory model
  purpose: Fear-memory consolidation and reconsolidation
  sourceCategory: research
  sourceId: reddit-pmid-25430781
  note: Dose context was not described in the retrieved abstract.
- label: Rodent DHA-synthesis study
  amount: 250 or 500 ppm dietary curcumin
  quantity: 250
  quantityMax: 500
  unit: ppm
  ingredient: Curcumin
  formulation: Diet with or without ALA
  route: Oral dietary exposure
  frequency: Ad libitum
  duration: 3.5 weeks
  population: Male Sprague-Dawley rats
  purpose: Brain DHA synthesis and anxiety-like behavior
  sourceCategory: research
  sourceId: reddit-pmid-25550171
  note: Dose context was not described in the retrieved abstract.
```

## Pharmacokinetics

```yaml
- id: curcumin-identity-unassessed
  analyte: Curcumin
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity record does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2eff-7cac-aff5-7db464d450ef
  modelEligible: false
- id: curcumin-bioavailability-25856323
  analyte: Curcuminoids
  route: Oral
  formulation: Commercial formulations compared in review
  population: Human bioavailability studies summarized by review
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Hydrophilic-carrier dispersed formula in the reviewed comparison; total formula mass and individual curcuminoid behavior affect interpretation.
  sourceId: reddit-pmid-25856323
  modelEligible: false
```

## Modifiers

```yaml
- label: Formulation
  effect: Bioavailability varies
  detail: Poor solubility and rapid metabolism are major constraints; delivery systems such as hydrophilic carriers or cyclodextrin complexes changed exposure in comparative studies.
  sourceId: reddit-pmid-25856323
  factorType: other
  direction: variable
  observationId: curcumin-bioavailability-25856323
- label: Population and indication
  effect: Outcome varies
  detail: Cognitive signals were observed in healthy older adults, while antidepressant findings came from people with major depressive disorder; these are not interchangeable contexts.
  sourceId: reddit-pmid-25277322
  factorType: other
  direction: variable
  observationId: curcumin-bioavailability-25856323
```

## Effects

```yaml
- id: curcumin-working-memory-25277322
  conceptId: working-memory-state
  name: Working memory
  direction: Increased
  evidence: Human research
  description: Acute and chronic Longvida treatment improved working-memory performance in this older-adult trial.
  sourceId: reddit-pmid-25277322
  population: 60 healthy adults aged 60–85
  exposure: 400 mg Longvida
  instrument: Working-memory tasks
  reportType: measured-assessment
  magnitude: null
```

## Outcomes

```yaml
- id: curcumin-moca-27102361
  conceptId: cognitive-performance
  name: Montreal Cognitive Assessment
  direction: Variable
  evidence: Human research
  description: In a 12-month 1500 mg/day Biocurcumax trial (n=96), a significant time-by-treatment interaction was driven by placebo decline at 6 months; no between-group differences appeared for other clinical or cognitive measures.
  sourceId: reddit-pmid-27102361
  population: 96 community-dwelling older adults
  exposure: 1500 mg/day Biocurcumax for 12 months
  instrument: Montreal Cognitive Assessment and cognitive battery
  reportType: measured-assessment
  magnitude: null
- id: curcumin-biomarkers-25523883
  conceptId: biomarker
  name: Peripheral biomarker changes
  direction: Variable
  evidence: Limited research
  description: In a secondary analysis of 50 participants from the depression trial, curcumin was associated with higher urinary thromboxane B2 and substance P versus placebo; multiple comparisons increase type-I-error risk.
  sourceId: reddit-pmid-25523883
  population: 50 participants with major depressive disorder
  exposure: 500 mg twice daily for 8 weeks
  instrument: Urinary, salivary, and blood biomarkers
  reportType: measured-assessment
  magnitude: null
- id: curcumin-fear-memory-25430781
  conceptId: fear-memory
  name: Fear-memory consolidation and reconsolidation
  direction: Decreased
  evidence: Limited research
  description: A 1.5% curcumin diet in rodents impaired long-term fear-memory consolidation and reconsolidation while short-term memory remained intact.
  sourceId: reddit-pmid-25430781
  population: Rodent Pavlovian fear-memory model
  exposure: 1.5% dietary curcumin
  instrument: Auditory fear conditioning
  reportType: measured-assessment
  magnitude: null
- id: curcumin-dha-25550171
  conceptId: brain-dha
  name: Brain DHA content
  direction: Increased
  evidence: Limited research
  description: In rats receiving ALA plus curcumin, brain DHA increased and FADS2/Elovl2-related synthesis pathways were elevated; ALA or curcumin alone did not reproduce the same DHA increase.
  sourceId: reddit-pmid-25550171
  population: Male Sprague-Dawley rats
  exposure: 250 or 500 ppm dietary curcumin with 2.7% ALA
  instrument: Brain lipid analysis and immunoblotting
  reportType: measured-assessment
  magnitude: null
- id: curcumin-attention-25277322
  conceptId: attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: One hour after a 400 mg Longvida dose, sustained-attention performance improved versus placebo in healthy older adults; chronic treatment also improved selected cognitive and mood measures.
  sourceId: reddit-pmid-25277322
  population: 60 healthy adults aged 60–85
  exposure: 400 mg Longvida, acute and 4-week protocols
  instrument: Sustained-attention and working-memory tasks
  reportType: measured-assessment
  magnitude: null
- id: curcumin-depressive-symptoms-25046624
  conceptId: depression-severity
  name: Depressive symptoms
  direction: Decreased
  evidence: Limited research
  description: In 56 participants with major depressive disorder, 500 mg twice daily for 8 weeks was more effective than placebo from weeks 4–8 on IDS-SR30 total and mood scores; the authors described the support as partial.
  sourceId: reddit-pmid-25046624
  population: 56 people with major depressive disorder
  exposure: 500 mg twice daily for 8 weeks
  instrument: IDS-SR30; STAI secondary outcome
  reportType: measured-assessment
  magnitude: null
```

## Mechanisms

```yaml
- title: Limited oral bioavailability
  description: Curcuminoids have poor water solubility, rapid intestinal/hepatic metabolism, and conjugation; formulation changes can alter exposure.
  sourceId: reddit-pmid-25856323
- title: DHA-synthesis pathway modulation
  description: In rat brain and liver, curcumin increased FADS2 and elongase-2-related DHA synthesis when combined with ALA.
  sourceId: reddit-pmid-25550171
- title: Multi-pathway depression hypothesis
  description: The depression trial introduction and biomarker analysis involve monoaminergic, inflammatory, oxidative/nitrosative, HPA-axis, leptin, endothelin-1, thromboxane B2, and substance-P pathways; these are mechanistic correlates, not proof of causality.
  sourceId: reddit-pmid-25046624
```

## Cautions

```yaml
- title: Formulation-specific evidence
  description: Results for Longvida, Biocurcumax, and a patented extract cannot be transferred to generic turmeric or another curcumin product.
  sourceId: reddit-pmid-25277322
- title: Mixed human results
  description: The 12-month older-adult study found a MoCA interaction but no differences on other clinical or cognitive measures; human efficacy remains limited and context-specific.
  sourceId: reddit-pmid-27102361
- title: Preclinical findings are not clinical treatment evidence
  description: Fear-memory and DHA-synthesis findings came from rodents, and the fear-memory study reported memory impairment rather than enhancement.
  sourceId: reddit-pmid-25430781
- title: Biomarker analysis is exploratory
  description: The biomarker paper used multiple comparisons and explicitly notes increased type-I-error risk; larger studies are needed.
  sourceId: reddit-pmid-25523883
```

## Claims

```yaml
- id: curcumin-human-cognition
  assertion: Selected cognitive measures improved with specific curcumin formulations in older adults.
  relation: measured-outcome
  participants:
  - entityId: substance:curcumin
    role: intervention
  - entityId: tag:attention
    role: endpoint
  context: 400 mg Longvida trial in 60 healthy adults aged 60–85.
  sourceIds:
  - reddit-pmid-25277322
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single formulation and older-adult sample.
- id: curcumin-depression-partial
  assertion: Curcumin provided partial antidepressant support in an 8-week randomized trial.
  relation: measured-outcome
  participants:
  - entityId: substance:curcumin
    role: intervention
  - entityId: tag:depression-severity
    role: endpoint
  context: 500 mg twice daily in 56 people with major depressive disorder; benefit emerged in weeks 4–8.
  sourceIds:
  - reddit-pmid-25046624
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small trial and formulation-specific result.
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
- id: optihealth-substance-01a08b04-2eff-7cac-aff5-7db464d450ef
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/7db464d450ef
  kind: catalog-identity
  insight: Canonical identity provenance retained for the existing article record.
  limitation: Catalog identity does not establish current efficacy, dosing, safety, or pharmacokinetics.
- id: reddit-index-curcumin
  title: Reddit Nootropics index entry for Black Currant
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The index links seven curcumin publications.
  limitation: Community indexing is a discovery aid.
- id: reddit-pmid-25277322
  title: Investigation of the effects of solid lipid curcumin on cognition and mood in a healthy older population.
  authors: Adrian L Lopresti; Stephen J Hood; Peter D Drummond; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25277322/
  kind: PubMed publication
  insight: Randomized trial of 400 mg Longvida in 60 healthy adults aged 60–85; acute and chronic cognitive/mood effects were reported.
  pmid: '25277322'
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-25046624
  title: 'Curcumin for the treatment of major depression: a randomised, double-blind, placebo controlled study.'
  authors: Adrian L Lopresti; Michael Maes; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25046624/
  kind: PubMed publication
  insight: 500 mg twice daily for 8 weeks produced partial antidepressant support in 56 people with major depressive disorder.
  pmid: '25046624'
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-25430781
  title: A diet enriched with curcumin impairs newly acquired and reactivated fear memories.
  authors: Melissa S Monsey; Danielle M Gerhard; Lara M Boyle; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25430781/
  kind: PubMed/PMC publication
  insight: A 1.5% curcumin diet impaired long-term fear-memory consolidation and reconsolidation in rodents.
  pmid: '25430781'
  pmcid: PMC4367473
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-25523883
  title: 'Curcumin and major depression: a randomised, double-blind, placebo-controlled trial investigating peripheral biomarkers.'
  authors: Adrian L Lopresti; Michael Maes; Marc J M Meddens; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25523883/
  kind: PubMed publication
  insight: Secondary biomarker analysis from the 8-week 500 mg twice-daily depression trial.
  pmid: '25523883'
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-25550171
  title: 'Curcumin boosts DHA in the brain: Implications for the prevention of anxiety disorders.'
  authors: Aiguo Wu; Emily E Noble; Ethika Tyagi; et al.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25550171/
  kind: PubMed/PMC publication
  insight: In rats, ALA plus dietary curcumin increased brain DHA and reduced anxiety-like behavior.
  pmid: '25550171'
  pmcid: PMC4754352
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-25856323
  title: 'Beyond Yellow Curry: Assessing Commercial Curcumin Absorption Technologies.'
  authors: Brad J Douglass; Dallas L Clouatre
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25856323/
  kind: PubMed/PMC publication
  insight: Review comparing commercial formulations; hydrophilic-carrier formula showed 45.9-fold relative bioavailability versus standard 95% curcuminoids.
  pmid: '25856323'
  pmcid: PMC4536942
  doi: 10.1080/07315724.2014.950392
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
- id: reddit-pmid-27102361
  title: 'Curcumin and cognition: a randomised, placebo-controlled, double-blind study of community-dwelling older adults.'
  authors: Stephanie R Rainey-Smith; Belinda M Brown; Hamid R Sohrabi; et al.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27102361/
  kind: PubMed publication
  insight: 1500 mg/day Biocurcumax for 12 months (n=96) produced a MoCA time-by-treatment interaction driven by placebo decline, with no other clinical or cognitive differences.
  pmid: '27102361'
  limitation: Full-text limitation was not available in the retrieved record; interpretation remains abstract-level.
```

## Legal

```yaml
[]
```
