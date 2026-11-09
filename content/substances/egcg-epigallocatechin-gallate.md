---
slug: egcg-epigallocatechin-gallate
name: EGCG (Epigallocatechin Gallate)
subtitle: EGCG is a catechin found in green tea.
aliases:
  - Epigallocatechin Gallate
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Plant compound
tags:
  - stress-response
  - cognitive-performance
  - bioavailability
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: 1.31 hours (fasted 500 mg study mean)
  low: null
  high: null
  context: In four adults, free-EGCG half-life was 78.6 ± 94.2 minutes after 500 mg capsules without breakfast; half-life did not differ significantly across food conditions.
  sourceId: pubmed-26783711
  observationId: egcg-food-fast-half-life-26783711
kinetics:
  onset: Plasma EGCG peaked at about 60 minutes fasted and 120 minutes with food or sorbet.
  peak: Fasted 500 mg capsules reached mean Cmax 824.2 ng/mL.
  duration: Eight-hour sampling; mean half-life 78.6 minutes fasted, 136.2 minutes with breakfast, and 228.6 minutes in sorbet.
  bioavailability: Fasted capsules produced 2.7-fold higher AUC than capsules with breakfast and 3.9-fold higher AUC than sorbet.
  metabolism: The study quantified free plasma EGCG but did not characterize metabolic pathways.
  sourceId: pubmed-26783711
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
x-order: 9007199254740991
---

## Summary

EGCG is a catechin found in green tea. Research explores its effects on brain function and cognition.

## Description

This page separates acute human findings from in-vitro enzyme data. Doses range from 100–300 mg in controlled human experiments; the open-access food study used 500 mg after an overnight fast and directly measured plasma EGCG. None of these small studies establishes long-term clinical efficacy or safety.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: Caffeine-interaction crossover
  amount: 100 and 200 mg EGCG
  quantity: 100
  quantityMax: 200
  unit: mg
  ingredient: EGCG
  formulation: Tablets
  route: Oral
  frequency: Single dose, 30 minutes before caffeine
  duration: Acute session
  population: Healthy men aged 25–35 years
  purpose: Caffeine hemodynamics and catecholamines
  sourceCategory: research
  note: Each EGCG dose was followed by 200 mg caffeine; the abstract reports BP and catecholamine outcomes.
  sourceId: pubmed-27457068
- label: Acute neurocognitive crossover
  amount: 300 mg
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: EGCG
  formulation: Oral EGCG preparation
  route: Oral
  frequency: Single dose
  duration: 120-minute post-dose assessment
  population: Healthy adults in a double-blind placebo-controlled crossover study
  purpose: EEG, mood, and neurocognitive measures
  sourceCategory: research
  note: Matched placebo was used; the abstract does not state sample size.
  sourceId: pubmed-22127270
- label: CBF/cognition crossover
  amount: 135 and 270 mg EGCG
  quantity: 135
  quantityMax: 270
  unit: mg
  ingredient: EGCG
  formulation: Oral EGCG
  route: Oral
  frequency: Single dose on separate crossover days
  duration: 45-minute absorption plus 42-minute task period
  population: 27 healthy adults
  purpose: Frontal CBF, cognitive performance, and mood
  sourceCategory: research
  note: Double-blind, placebo-controlled, counterbalanced crossover.
  sourceId: pubmed-22389082
- label: Food-effect pharmacokinetic crossover
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: EGCG
  formulation: Two 250 mg capsules or 500 mg in 200 g strawberry sorbet
  route: Oral
  frequency: Single dose after an overnight fast
  duration: 8-hour plasma sampling
  population: 4 healthy adults (3 men, 1 woman; mean age 31.3 years)
  purpose: Plasma EGCG bioavailability and food effect
  sourceCategory: research
  note: The full text reports capsules with water, capsules with a light breakfast, and sorbet conditions; each participant completed all three.
  sourceId: pubmed-26783711
```

## Pharmacokinetics

```yaml
- id: egcg-food-fast-half-life-26783711
  analyte: Plasma free EGCG
  route: Oral
  formulation: 500 mg capsules without breakfast
  population: 4 healthy adults
  endpoint: elimination-half-life
  statistic: study-mean
  value: 1.31
  low: null
  high: null
  unit: hours
  context: Full text reports 78.6 ± 94.2 minutes; no significant half-life difference was detected across food conditions.
  sourceId: pubmed-26783711
  modelEligible: false
- id: egcg-food-breakfast-half-life-26783711
  analyte: Plasma free EGCG
  route: Oral
  formulation: 500 mg capsules with light breakfast
  population: 4 healthy adults
  endpoint: elimination-half-life
  statistic: study-mean
  value: 2.27
  low: null
  high: null
  unit: hours
  context: Full text reports 136.2 ± 85.2 minutes; no significant half-life difference was detected across food conditions.
  sourceId: pubmed-26783711
  modelEligible: false
- id: egcg-food-sorbet-half-life-26783711
  analyte: Plasma free EGCG
  route: Oral
  formulation: 500 mg EGCG in strawberry sorbet
  population: 4 healthy adults
  endpoint: elimination-half-life
  statistic: study-mean
  value: 3.81
  low: null
  high: null
  unit: hours
  context: Full text reports 228.6 ± 97.2 minutes; no significant half-life difference was detected across food conditions.
  sourceId: pubmed-26783711
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
- id: research-egcg-catecholamines-27457068
  conceptId: stress-response
  name: Caffeine-induced catecholamines
  direction: Decreased
  evidence: Human research
  description: EGCG inhibited caffeine-induced increases in noradrenaline, adrenaline, and dopamine; the additional heart-rate reduction was not significant.
  sourceId: pubmed-27457068
  population: Healthy men aged 25–35 years
  exposure: 100 or 200 mg EGCG with 200 mg caffeine
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-egcg-cognition-null-22389082
  conceptId: cognitive-performance
  name: Cognitive performance and mood
  direction: Variable
  evidence: Human research
  description: Neither the 135 mg nor 270 mg EGCG condition produced significant differences in computerized cognitive performance or mood versus placebo.
  sourceId: pubmed-22389082
  population: 27 healthy adults
  exposure: Single oral EGCG dose
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-egcg-food-absorption-26783711
  conceptId: bioavailability
  name: Oral EGCG absorption
  direction: Decreased
  evidence: Human research
  description: In four healthy adults, taking 500 mg EGCG with a light breakfast or in strawberry sorbet reduced AUC, Cmax, and average plasma concentration versus capsules with water after an overnight fast; AUC was 2.7- and 3.9-fold lower, respectively.
  sourceId: pubmed-26783711
  population: 4 healthy adults
  exposure: 500 mg oral EGCG under three food conditions
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-egcg-eeg-calmness-22127270
  conceptId: cognitive-performance
  name: EEG activity and calmness
  direction: Increased
  evidence: Human research
  description: A single 300 mg EGCG dose increased alpha, beta, and theta EEG activity and was accompanied by higher self-rated calmness and lower self-rated stress at 120 minutes versus placebo.
  sourceId: pubmed-22127270
  population: Healthy adults in a double-blind placebo-controlled crossover
  exposure: 300 mg oral EGCG
  instrument: Resting-state EEG and self-rated mood scales
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Catecholamine and hemodynamic attenuation
  description: In the human caffeine-interaction study, EGCG attenuated caffeine-induced blood pressure and catecholamine increases; isolated rat-heart experiments also reduced epinephrine/isoproterenol-stimulated hemodynamics.
  sourceId: pubmed-27457068
- title: EEG state modulation
  description: The acute 300 mg crossover study found increased alpha, beta, and theta activity alongside greater calmness and lower self-rated stress, consistent with altered cortical arousal rather than a demonstrated cognitive gain.
  sourceId: pubmed-22127270
- title: DOPA decarboxylase inhibition in vitro
  description: EGCG and EGC time- and concentration-dependently inactivated DOPA decarboxylase, with active-site protection by D-DOPA and k(inact)/K(i) reported for the purified enzyme system.
  sourceId: pubmed-11374875
- title: Food-dependent absorption
  description: The open-access 500 mg study found substantially greater plasma exposure when capsules were taken with water after an overnight fast; food delayed Tmax and reduced AUC/Cmax without a significant change in clearance half-life.
  sourceId: pubmed-26783711
```

## Cautions

```yaml
- title: Small acute human samples
  description: The human EGCG studies were small (including n=4 for the food-effect PK study) and acute; they do not establish long-term efficacy or safety.
  sourceId: pubmed-26783711
- title: Food changes systemic exposure
  description: In the 500 mg crossover, food reduced systemic exposure by roughly 2.7–3.9 fold versus fasted capsules. This is a pharmacokinetic interaction, not evidence that fasting improves clinical outcomes.
  sourceId: pubmed-26783711
- title: DOPA decarboxylase finding is preclinical
  description: Irreversible DOPA decarboxylase inhibition was demonstrated in an enzyme preparation, not as a clinical interaction in treated people.
  sourceId: pubmed-11374875
```

## Claims

```yaml
- id: research-claim-egcg-22127270
  assertion: A single 300 mg oral EGCG dose increased EEG alpha, beta, and theta activity and self-rated calmness while reducing self-rated stress at 120 minutes in a small healthy-adult crossover study.
  relation: associated-with
  participants:
    - entityId: substance:egcg-epigallocatechin-gallate
      role: intervention or exposure
    - entityId: tag:stress-response
      role: reported endpoint
  context: Acute double-blind placebo-controlled crossover; no long-term claim.
  sourceIds:
    - pubmed-22127270
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single small acute study; abstract does not state sample size.
- id: research-claim-egcg-22389082
  assertion: In 27 healthy adults, single oral EGCG doses modulated frontal cerebral blood-flow parameters but did not significantly change cognitive performance or mood.
  relation: associated-with
  participants:
    - entityId: substance:egcg-epigallocatechin-gallate
      role: intervention or exposure
    - entityId: tag:cardiovascular
      role: reported endpoint
  context: Double-blind placebo-controlled crossover with 135 and 270 mg doses.
  sourceIds:
    - pubmed-22389082
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute surrogate outcomes; no clinical efficacy inference.
- id: research-claim-egcg-27457068
  assertion: In healthy men, 100 or 200 mg EGCG given before 200 mg caffeine attenuated caffeine-induced blood-pressure and catecholamine increases.
  relation: associated-with
  participants:
    - entityId: substance:egcg-epigallocatechin-gallate
      role: intervention or exposure
    - entityId: tag:blood-pressure
      role: reported endpoint
  context: Acute human interaction study with a rat-heart component.
  sourceIds:
    - pubmed-27457068
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute small study; not evidence for treatment of hypertension.
- id: research-claim-egcg-26783711
  assertion: In four healthy adults, 500 mg EGCG produced substantially higher plasma exposure when taken with water after an overnight fast than when taken with a light breakfast or in strawberry sorbet.
  relation: associated-with
  participants:
    - entityId: substance:egcg-epigallocatechin-gallate
      role: intervention or exposure
    - entityId: tag:bioavailability
      role: reported endpoint
  context: Open-access three-condition crossover with 8-hour plasma sampling.
  sourceIds:
    - pubmed-26783711
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Four participants; food effect on plasma PK does not establish clinical benefit.
- id: research-claim-egcg-11374875
  assertion: EGCG irreversibly inhibited DOPA decarboxylase in a purified enzyme system in a time- and concentration-dependent manner.
  relation: associated-with
  participants:
    - entityId: substance:egcg-epigallocatechin-gallate
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: In-vitro biochemical study.
  sourceIds:
    - pubmed-11374875
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Enzyme result; clinical interaction and in-vivo relevance were not tested.
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
- id: pubmed-27457068
  title: (-)-Epigallocatechin-3-O-gallate (EGCG) attenuates the hemodynamics stimulated by caffeine through decrease of catecholamines release.
  authors: Jin-Yi Han, Yong-Jin Moon, Jong-Hyun Han, Jong-Hoon Kim, Jae-Hoon Woo, Hwan-Soo Yoo, Jin Tae Hong, Hee-Yul Ahn, Jong-Myeon Hong, Ki-Wan Oh
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27457068/
  kind: PubMed publication
  insight: In healthy men, 100 or 200 mg EGCG before 200 mg caffeine attenuated caffeine-induced blood pressure and catecholamine increases.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "27457068"
  doi: 10.1007/s12272-016-0757-1
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22127270
  title: Acute neurocognitive effects of epigallocatechin gallate (EGCG).
  authors: Andrew Scholey, Luke A Downey, Joseph Ciorciari, Andrew Pipingas, Karen Nolidin, Melissa Finn, Melissa Wines, Sarah Catchlove, Alirra Terrens, Emma Barlow, Leanne Gordon, Con Stough
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22127270/
  kind: PubMed publication
  insight: A single 300 mg EGCG dose increased EEG alpha, beta, and theta activity, calmness, and reduced self-rated stress at 120 minutes in a placebo-controlled crossover.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22127270"
  doi: 10.1016/j.appet.2011.11.016
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22389082
  title: "Epigallocatechin gallate, cerebral blood flow parameters, cognitive performance and mood in healthy humans: a double-blind, placebo-controlled, crossover investigation."
  authors: Emma L Wightman, Crystal F Haskell, Joanne S Forster, Rachel C Veasey, David O Kennedy
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22389082/
  kind: PubMed publication
  insight: In 27 healthy adults, 135 mg EGCG reduced frontal oxygenated and total haemoglobin during task performance; cognitive performance and mood did not differ significantly.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22389082"
  doi: 10.1002/hup.1263
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-4ea15d41b2eb
  title: "Possible Controversy over Dietary Polyphenols: Benefits vs Risks"
  authors: Not established
  year: 2026
  url: https://pubs.acs.org/doi/pdf/10.1021/tx7000515
  kind: research index publication link
  insight: The research index links this non-PubMed publication; metadata and outcome details remain unverified in this corpus pass.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26783711
  title: Food Inhibits the Oral Bioavailability of the Major Green Tea Antioxidant Epigallocatechin Gallate in Humans.
  authors: Nenad Naumovski, Barbara L Blades, Paul D Roach
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26783711/
  kind: PubMed publication
  insight: In four adults, 500 mg EGCG capsules produced 2.7- to 3.9-fold higher AUC when taken with water after an overnight fast than with breakfast or strawberry sorbet.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26783711"
  pmcid: PMC4665468
  doi: 10.3390/antiox4020373
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-11374875
  title: "Green tea polyphenols: novel irreversible inhibitors of dopa decarboxylase."
  authors: M Bertoldi, M Gonsalvi, C B Voltattorni
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11374875/
  kind: PubMed publication
  insight: The green tea gallocatechins, (-)-epigallocatechin-3-O-gallate (EGCG), and (-)-epigallocatechin (EGC) were found to be inhibitors of Dopa decarboxylase (DDC).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "11374875"
  doi: 10.1006/bbrc.2001.4945
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
  url: https://en.wikipedia.org/wiki/Egcg
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Green+Tea+Catechins
  title: Examine
```
