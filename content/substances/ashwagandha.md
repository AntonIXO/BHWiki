---
slug: ashwagandha
name: Ashwagandha
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - anxiety
  - skin
  - anxiety-symptom-severity
  - cognitive-performance
  - episodic-memory
  - cortisol-response
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-00000000-0000-4000-a001-000000000007
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-00000000-0000-4000-a001-000000000007
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
x-order: 1098
---

## Summary

Ashwagandha, or Withania somnifera, is a plant studied for stress, sleep and cognitive performance.

## Description

Ashwagandha, or Withania somnifera, is a plant studied for stress, sleep and cognitive performance.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Naturopathic anxiety trial
  amount: 300 mg twice daily
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Ashwagandha root extract
  formulation: Extract standardized to 1.5% withanolides
  route: Oral
  frequency: Twice daily
  duration: 12 weeks
  population: Employees with moderate-to-severe anxiety
  purpose: Anxiety and quality-of-life research
  sourceCategory: research
  note: Part of a naturopathic-care package with counseling, breathing and multivitamin.
  sourceId: pubmed-19718255
- label: Ethanolic-extract anxiety trial
  amount: Not stated in abstract
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Withania somnifera ethanolic extract
  formulation: Ethanolic extract
  route: Oral
  frequency: Study-specific
  duration: 6 weeks
  population: Patients with ICD-10 anxiety disorders
  purpose: Anxiolytic efficacy research
  sourceCategory: research
  note: Dose not reported in the PubMed abstract.
  sourceId: pubmed-21407960
- label: Stress trial
  amount: 300 mg twice daily
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Ashwagandha root extract
  formulation: High-concentration full-spectrum root extract
  route: Oral
  frequency: Twice daily
  duration: 60 days
  population: Adults with chronic stress
  purpose: Stress and cortisol research
  sourceCategory: research
  note: One capsule twice daily.
  sourceId: pubmed-23439798
- label: Bipolar cognition adjunct
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Withania somnifera extract
  formulation: Standardized extract adjunct
  route: Oral
  frequency: Daily
  duration: 8 weeks
  population: Euthymic adults with bipolar disorder
  purpose: Cognitive research
  sourceCategory: research
  note: Added to maintenance medication.
  sourceId: pubmed-24330893
- label: Sleep-deprived rat study
  amount: 140 mg/kg
  quantity: 140
  quantityMax: null
  unit: mg/kg
  ingredient: Withania somnifera leaf extract
  formulation: Aqueous leaf extract
  route: Oral
  frequency: Daily
  duration: 15 days
  population: Adult Wistar rats
  purpose: Sleep-deprivation neuroprotection
  sourceCategory: research
  note: Animal dose; not a human-equivalent recommendation.
  sourceId: pubmed-27037574
- label: Fixed-drug eruption case
  amount: 5 g/day; 1 g rechallenge
  quantity: 5
  quantityMax: 5
  unit: g/day
  ingredient: Ashwagandha powder
  formulation: Ayurvedic powder
  route: Oral
  frequency: Daily then oral provocation
  duration: 10 days; rechallenge flare within 12 h
  population: 28-year-old man
  purpose: Safety case report
  sourceCategory: research
  note: Rechallenge reproduced lesion at prior site.
  sourceId: pubmed-22324179
- label: Thyrotoxicosis case report
  amount: Increased capsule dose; quantity not stated
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Ashwagandha extract
  formulation: Capsules containing ashwagandha extract
  route: Oral
  frequency: Increased dose after intermittent use
  duration: First few weeks then symptomatic escalation
  population: 32-year-old healthy woman
  purpose: Safety case report
  sourceCategory: research
  note: Dose was not reported; thyrotoxicosis resolved after discontinuation and laboratory values normalized.
  sourceId: pubmed-16355578
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
- id: research-ashwagandha-anxiety-19718255
  conceptId: anxiety
  name: Anxiety symptoms
  direction: Decreased
  evidence: Human research
  description: A naturopathic-care package including 300 mg twice-daily ashwagandha reduced Beck Anxiety Inventory scores more than psychotherapy over 12 weeks; component-specific attribution is uncertain.
  sourceId: pubmed-19718255
  population: 81 randomized employees; 75 followed ≥8 weeks
  exposure: Ashwagandha 300 mg BID plus naturopathic care
  instrument: Beck Anxiety Inventory
  magnitude: BAI −56.5% vs −30.5%
  reportType: measured-assessment
- id: research-ashwagandha-stress-23439798
  conceptId: anxiety
  name: Stress and anxiety scales
  direction: Decreased
  evidence: Human research
  description: A 300 mg twice-daily high-concentration root extract reduced all reported stress-assessment scores versus placebo at day 60.
  sourceId: pubmed-23439798
  population: 64 adults with chronic stress
  exposure: 300 mg BID for 60 days
  instrument: Stress questionnaires
  magnitude: P<0.0001 on scales
  reportType: measured-assessment
- id: research-ashwagandha-eruption-22324179
  conceptId: skin
  name: Fixed-drug eruption
  direction: Increased
  evidence: Human research
  description: A reproducible burning/itching and dusky eroded plaque occurred with 5 g/day and flared within 12 hours after 1 g oral rechallenge.
  sourceId: pubmed-22324179
  population: One 28-year-old man
  exposure: 5 g/day then 1 g rechallenge
  instrument: Clinical examination and provocation
  magnitude: Positive rechallenge
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: research-ashwagandha-anxiety-severity-21407960
  conceptId: anxiety-symptom-severity
  name: Anxiety response
  direction: Increased
  evidence: Human research
  description: At six weeks, 88.2% of ethanolic-extract recipients met prespecified response criteria versus 50% of placebo recipients; statistical trends favored treatment at weeks 2 and 6.
  sourceId: pubmed-21407960
  population: 39 patients with ICD-10 anxiety disorders
  exposure: Ethanolic extract; dose not stated
  instrument: Prespecified response criteria
  magnitude: 88.2% vs 50% responders
  reportType: measured-assessment
- id: research-ashwagandha-cognition-24330893
  conceptId: cognitive-performance
  name: Working memory and reaction time
  direction: Increased
  evidence: Human research
  description: In bipolar disorder, adjunctive WSE improved digit-span backward, Flanker neutral response time and a social-cognition rating; other tasks were not significantly different.
  sourceId: pubmed-24330893
  population: 60 randomized; 53 completers
  exposure: 500 mg/day WSE for 8 weeks
  instrument: Digit span, Flanker, Penn Emotional Acuity Test
  magnitude: Digit-span Cohen d 0.51
  reportType: measured-assessment
- id: research-ashwagandha-sleep-memory-27037574
  conceptId: episodic-memory
  name: Learning and memory after sleep deprivation
  direction: Increased
  evidence: Limited research
  description: In sleep-deprived rats, 140 mg/kg/day aqueous leaf extract for 15 days improved behavioral performance and suppressed molecular markers of hippocampal stress/apoptosis.
  sourceId: pubmed-27037574
  population: Adult Wistar rats
  exposure: 140 mg/kg/day for 15 days
  instrument: Behavioral tests and hippocampal proteins
  magnitude: Improved vs sleep-deprived vehicle
  reportType: measured-assessment
- id: research-ashwagandha-cortisol-23439798
  conceptId: cortisol-response
  name: Serum cortisol
  direction: Decreased
  evidence: Human research
  description: The 300 mg twice-daily root extract produced a greater serum-cortisol reduction than placebo at day 60.
  sourceId: pubmed-23439798
  population: 64 adults with chronic stress
  exposure: 300 mg BID for 60 days
  instrument: Serum cortisol
  magnitude: P=0.0006
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Stress-axis and symptom measures
  description: The stress trial measured serum cortisol alongside validated stress scales; the abstract supports an association with reduced stress/cortisol but does not establish a molecular mechanism.
  sourceId: pubmed-23439798
- title: Sleep-deprivation cellular stress
  description: In rats, leaf extract suppressed sleep-deprivation-associated changes in synaptic-plasticity, survival and apoptosis proteins in hippocampus.
  sourceId: pubmed-27037574
```

## Cautions

```yaml
- title: Product and population heterogeneity
  description: Different extracts, doses and populations were used; results cannot be generalized to all ashwagandha products.
  sourceId: pubmed-23439798
- title: Fixed-drug eruption
  description: A case report documented a reproducible mucocutaneous fixed-drug eruption after 5 g/day and 1 g rechallenge.
  sourceId: pubmed-22324179
- title: Adjunctive and package effects
  description: The strongest anxiety result came from a naturopathic-care package, so the independent contribution of ashwagandha is uncertain.
  sourceId: pubmed-19718255
- title: Small preliminary cognition trial
  description: The bipolar study had 53 completers and several cognitive outcomes were null; authors called results preliminary.
  sourceId: pubmed-24330893
- title: Thyrotoxicosis case report
  description: A 32-year-old woman developed laboratory-confirmed thyrotoxicosis after increasing an ashwagandha capsule; symptoms and laboratory values normalized after discontinuation. Dose and product composition were not established in the abstract.
  sourceId: pubmed-16355578
```

## Claims

```yaml
- id: research-claim-ashwagandha-23439798-0
  assertion: Selected standardized extracts reduced anxiety or stress measures in small randomized trials.
  relation: associated-with
  participants:
    - entityId: substance:ashwagandha
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-23439798
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-ashwagandha-24330893-1
  assertion: Adjunctive WSE improved selected cognitive tasks in euthymic bipolar disorder over 8 weeks.
  relation: associated-with
  participants:
    - entityId: substance:ashwagandha
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-24330893
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: research-claim-ashwagandha-22324179-2
  assertion: A reproducible fixed-drug eruption occurred after high-dose powder and rechallenge.
  relation: associated-with
  participants:
    - entityId: substance:ashwagandha
      role: intervention or exposure
    - entityId: tag:skin
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - pubmed-22324179
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
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
- id: optihealth-substance-00000000-0000-4000-a001-000000000007
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/00000000-0000-4000-a001-000000000007
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: publication-link-ff4fc942094f
  title: Effect of standardized aqueous extract of Withania somnifera on tests of cognitive and psychomotor performance in healthy human participants (2014)
  authors: Not established
  year: 2014
  url: https://www.phcogres.com/article.asp?issn=0974-8490;year=2014;volume=6;issue=1;spage=12;epage=18;aulast=Pingali
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19718255
  title: "Naturopathic care for anxiety: a randomized controlled trial ISRCTN78958974."
  authors: Kieran Cooley, Orest Szczurko, Dan Perri, Edward J Mills, Bob Bernhardt, Qi Zhou, Dugald Seely
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19718255/
  kind: PubMed publication
  insight: A naturopathic package including 300 mg BID root extract reduced BAI more than psychotherapy; component-specific effect cannot be isolated.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: "19718255"
  doi: 10.1371/journal.pone.0006628
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcid: PMC2729375
- id: pubmed-21407960
  title: A double-blind, placebo-controlled evaluation of the anxiolytic efficacy ff an ethanolic extract of withania somnifera.
  authors: C Andrade, A Aswath, S K Chaturvedi, M Srinivasa, R Raguram
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/21407960/
  kind: PubMed publication
  insight: In 39 anxiety-disorder patients, 88.2% on ethanolic extract met response criteria versus 50% placebo at 6 weeks; dose not stated.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: "21407960"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcid: PMC2958355
- id: pubmed-27037574
  title: "Aqueous Leaf Extract of Withania somnifera as a Potential Neuroprotective Agent in Sleep-deprived Rats: a Mechanistic Study."
  authors: Shaffi Manchanda, Rachana Mishra, Rumani Singh, Taranjeet Kaur, Gurcharan Kaur
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27037574/
  kind: PubMed publication
  insight: 140 mg/kg/day aqueous leaf extract for 15 days improved behavior and reduced hippocampal stress/apoptosis markers in sleep-deprived rats.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "27037574"
  doi: 10.1007/s12035-016-9883-5
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23439798
  title: A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults.
  authors: K Chandrasekhar, Jyoti Kapoor, Sridhar Anishetty
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23439798/
  kind: PubMed publication
  insight: 300 mg BID high-concentration root extract for 60 days reduced stress scales and serum cortisol versus placebo with mild comparable adverse effects.
  limitation: Abstract reviewed; PMC full text was retrieved where rights allowed.
  pmid: "23439798"
  doi: 10.4103/0253-7176.106022
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
  pmcid: PMC3573577
- id: pubmed-24330893
  title: Randomized placebo-controlled adjunctive study of an extract of withania somnifera for cognitive dysfunction in bipolar disorder.
  authors: K N Roy Chengappa, Christopher R Bowie, Patricia J Schlicht, David Fleet, Jaspreet S Brar, Ripu Jindal
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24330893/
  kind: PubMed publication
  insight: 500 mg/day WSE adjunct for 8 weeks improved selected working-memory, reaction-time and social-cognition tasks in bipolar disorder; results preliminary.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "24330893"
  doi: 10.4088/JCP.13m08413
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22324179
  title: "Fixed-drug eruption caused by ashwagandha (Withania somnifera): a widely used Ayurvedic drug."
  authors: Virendra N Sehgal, Prashant Verma, Sambit N Bhattacharya
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22324179/
  kind: PubMed publication
  insight: 5 g/day ashwagandha caused a fixed-drug eruption in one man; 1 g rechallenge reproduced the lesion within 12 h.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "22324179"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-16355578
  title: "[Thyrotoxicosis following the use of ashwagandha]."
  authors: C S van der Hooft; A Hoekstra; A Winter; et al.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16355578/
  kind: PubMed publication
  insight: A case report described thyrotoxicosis after increased use of ashwagandha capsules, resolving after discontinuation.
  limitation: Single case report; dose, product composition and causality cannot be generalized.
  pmid: "16355578"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
