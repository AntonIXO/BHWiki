---
slug: magnesium-citrate
name: Magnesium citrate
subtitle: A soluble magnesium salt with established short-term laxative labeling.
aliases:
  - magnesium citrate
  - trimagnesium dicitrate
formula: C12H10Mg3O14
molecularWeight: 451.12 g/mol
pubchemCid: 6099959
smiles: C(C(=O)[O-])C(CC(=O)[O-])(C(=O)[O-])O.C(C(=O)[O-])C(CC(=O)[O-])(C(=O)[O-])O.[Mg+2].[Mg+2].[Mg+2]
category: Magnesium salt
tags:
  - magnesium-homeostasis
accent: "#8090a0"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Citrate-specific studies measured urinary or serum magnesium responses and do not establish a clinically useful human terminal half-life.
  sourceId: mc-kappeler
  observationId: magnesium-citrate-pk-unestablished
kinetics:
  onset: Laxative onset approximately 0.5–6 hours for the cited OTC liquid.
  peak: Serum magnesium rose at several post-dose time points in one citrate-versus-oxide crossover study.
  duration: Laxation is formulation- and dose-dependent.
  bioavailability: Higher urinary and serum magnesium responses than oxide in small comparisons; not a universal absorption percentage.
  metabolism: Magnesium is handled through body pools and renal excretion; citrate-specific systemic metabolism was not established.
  sourceId: mc-kappeler
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
x-order: 9007199254740991
---

## Summary

Magnesium citrate is a magnesium–citrate salt; elemental magnesium is the relevant mineral quantity. Its established U.S. use is short-term saline/osmotic laxation. Small human comparisons found higher dissolution and urinary or serum magnesium responses than magnesium oxide, but these are absorption surrogates. Citrate-specific sleep and cognition benefits remain unestablished. [mc-label] [mc-kappeler] [mc-sleep]

## Description

The USP reference form is trimagnesium dicitrate. Product hydration, stoichiometry and assay change the conversion from salt mass to elemental magnesium; the cited OTC liquid separately declares both. [mc-usp] [mc-label]

## Evidence note

The page separates citrate-specific clinical exposures from magnesium-class interactions and mixed-form reviews. The literature is small and often uses short-term surrogate endpoints; no validated citrate-specific human terminal half-life was located. [mc-lindberg] [mc-sleep-review] [mc-cognition]

## Doses

```yaml
- label: OTC saline laxative, adults and children ≥12 years
  amount: 6.5–10 fluid ounces (label maximum 10 fl oz/24 h)
  quantity: 6.5
  quantityMax: 10
  unit: fluid ounces
  ingredient: Magnesium citrate
  formulation: OTC liquid; 290 mg elemental Mg/fl oz on cited label
  route: Oral
  frequency: Single dose; maximum once daily
  duration: Short-term occasional constipation
  population: Adults and children ≥12 years
  purpose: Saline/osmotic laxation
  sourceCategory: approved-label
  note: Product label amount; 1.745 g magnesium citrate/fl oz is not 1.745 g elemental magnesium.
  sourceId: mc-label
- label: OTC saline laxative, children 6 to <12 years
  amount: 3–7 fluid ounces (label maximum 7 fl oz/24 h)
  quantity: 3
  quantityMax: 7
  unit: fluid ounces
  ingredient: Magnesium citrate
  formulation: OTC liquid
  route: Oral
  frequency: Single dose; maximum once daily
  duration: Children 6 to <12 years
  population: Children 6 to <12 years
  purpose: Saline/osmotic laxation
  sourceCategory: approved-label
  note: Product-specific label; not a universal pediatric regimen.
  sourceId: mc-label
- label: OTC saline laxative, children 2 to <6 years
  amount: 2–3 fluid ounces (label maximum 3 fl oz/24 h)
  quantity: 2
  quantityMax: 3
  unit: fluid ounces
  ingredient: Magnesium citrate
  formulation: OTC liquid
  route: Oral
  frequency: Single dose; maximum once daily
  duration: Children 2 to <6 years
  population: Children 2 to <6 years
  purpose: Saline/osmotic laxation
  sourceCategory: approved-label
  note: Product-specific label; not a universal pediatric regimen.
  sourceId: mc-label
- label: Poor-sleep trial
  amount: 320 mg magnesium/day
  quantity: 320
  quantityMax: null
  unit: mg/day
  ingredient: Magnesium citrate
  formulation: Study preparation
  route: Oral
  frequency: Daily
  duration: 7 weeks
  population: Adults >51 years with poor-quality sleep
  purpose: Research exposure
  sourceCategory: research
  note: 96 of 100 randomized participants completed the designed exposure; not a recommendation.
  sourceId: mc-sleep
- label: Restless-legs pilot
  amount: 200 mg magnesium/day
  quantity: 200
  quantityMax: null
  unit: mg/day
  ingredient: Magnesium citrate
  formulation: Study preparation
  route: Oral
  frequency: Daily
  duration: 8 weeks
  population: 12 adults with restless legs syndrome
  purpose: Research exposure
  sourceCategory: research
  note: Open-label uncontrolled pilot.
  sourceId: mc-restless
- label: magnesium-citrate research exposure 1
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-cipro
- label: magnesium-citrate research exposure 2
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-cipro
- label: magnesium-citrate research exposure 3
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-cipro
- label: magnesium-citrate research exposure 4
  amount: 320 mg magnesium/day as magnesium citrate for 7 weeks; 96 of 100 randomized participants completed the study as designed.
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-sleep
- label: magnesium-citrate research exposure 5
  amount: 200 mg magnesium citrate/day for 8 weeks.
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-restless
- label: magnesium-citrate research exposure 6
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: magnesium-citrate
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mc-fda-lax
```

## Pharmacokinetics

```yaml
- id: magnesium-citrate-pk-unestablished
  analyte: Magnesium ion
  route: Oral
  formulation: Magnesium citrate formulations vary
  population: Humans; no citrate-specific analyte half-life study located
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Citrate studies measured urinary or serum magnesium responses, not a validated plasma elimination half-life for the absorbed magnesium ion.
  sourceId: mc-kappeler
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-1
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-magnesium-citrate-s4
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-2
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-magnesium-citrate-s4
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-3
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: mc-kappeler
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-4
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-magnesium-citrate-s4
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-5
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: dr-magnesium-citrate-s4
  modelEligible: false
- id: dr-magnesium-citrate-magnesium-citrate-pk-6
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Source-specific pharmacokinetic detail is preserved in the cited source.
  sourceId: mc-cipro
  modelEligible: false
```

## Modifiers

```yaml
- label: Elemental-magnesium fraction
  effect: Variable by salt form and product
  detail: USP 3:2 chemistry and hydration/assay basis mean total compound mass is not elemental magnesium mass; label declarations control interpretation.
  sourceId: mc-usp
  observationId: magnesium-citrate-pk-unestablished
  factorType: other
  direction: variable
- label: Baseline magnesium status
  effect: Response may differ
  detail: A subgroup with serum magnesium below 1.8 mg/dL showed a serum response in the sleep trial; the full cohort did not show a significant overall serum difference.
  sourceId: mc-sleep
  observationId: magnesium-citrate-pk-unestablished
  factorType: other
  direction: variable
- label: Renal function
  effect: Slower clearance increases risk
  detail: Reduced renal clearance and abnormal bowel states increase concern with high magnesium-citrate exposure.
  sourceId: mc-bowel
  observationId: magnesium-citrate-pk-unestablished
  factorType: other
  direction: slower
- label: Dose and intestinal retention
  effect: Higher laxative exposure changes gastrointestinal effect
  detail: Large purgative doses leave an osmotic load in the gut and differ pharmacologically from lower supplement exposures.
  sourceId: mc-label
  observationId: magnesium-citrate-pk-unestablished
  factorType: other
  direction: variable
- label: Modifier 1
  effect: 3:2, dibasic, hydrated, and commercial preparations can differ in elemental-Mg fraction; label declarations supersede generic arithmetic.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-cipro
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: In the citrate sleep trial, the subgroup with serum Mg below 1.8 mg/dL showed a serum-Mg response; the full cohort did not show a significant serum-Mg difference versus placebo.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-sleep
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: The 2017 citrate-versus-oxide crossover study used a five-day magnesium-saturation phase, which affects interpretation of urinary-excretion endpoints.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-kappeler
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
- label: Modifier 4
  effect: Large laxative doses leave a substantial osmotic load in the gut and are pharmacologically different from lower supplement exposures.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-cipro
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
- label: Modifier 5
  effect: Reduced renal clearance and obstructive or abnormal bowel states increase the safety concern associated with magnesium-citrate exposure.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-cipro
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
- label: Modifier 6
  effect: The OTC label specifies an 8-ounce liquid with each dose and warns that laxatives can alter how other drugs work.
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: mc-cipro
  observationId: dr-magnesium-citrate-magnesium-citrate-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Laxation
  direction: Increased
  evidence: Human research
  description: Magnesium citrate retains water in the intestinal lumen and can soften stool or cause watery diarrhea at purgative exposure.
  sourceId: mc-label
  population: Adults and children using an OTC liquid
  exposure: OTC saline-laxative exposure
  instrument: Bowel movement and stool observation
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Sleep quality
  direction: Variable
  evidence: Human research
  description: PSQI improved in both treatment groups; the citrate-specific trial did not establish a magnesium-specific sleep effect.
  sourceId: mc-sleep
  population: Adults over 51 years with poor-quality sleep
  exposure: 320 mg magnesium/day as citrate for 7 weeks
  instrument: Pittsburgh Sleep Quality Index
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Restless-legs symptoms
  direction: Increased
  evidence: Limited research
  description: A 12-person open-label pilot reported lower symptom scores and improved quality of life, without a significant serum-magnesium change.
  sourceId: mc-restless
  population: Adults with restless legs syndrome
  exposure: 200 mg magnesium citrate/day for 8 weeks
  instrument: Symptom and quality-of-life scores
  magnitude: null
  reportType: measured-assessment
- id: dr-magnesium-citrate-magnesium-citrate-effect-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-citrate effect
  direction: Variable
  evidence: Human research
  description: Retains water in the gastrointestinal tract, softens stool, increases bowel movements, and can produce watery diarrhea at purgative exposure.
  sourceId: mc-cipro
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-effect-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-citrate effect
  direction: Variable
  evidence: Human research
  description: Can raise circulating Mg after oral dosing; citrate produced higher post-dose serum responses than oxide in one crossover study.
  sourceId: mc-kappeler
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-effect-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-citrate effect
  direction: Variable
  evidence: Human research
  description: In a placebo-controlled trial, PSQI improved from 10.4 to 6.6 overall, but improvement occurred regardless of citrate or sodium-citrate assignment.
  sourceId: mc-sleep
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-effect-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-citrate effect
  direction: Variable
  evidence: Human research
  description: An open-label 12-person pilot using magnesium citrate reported lower symptom scores and improved quality-of-life scores, without a significant serum-Mg change.
  sourceId: mc-restless
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-effect-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-citrate effect
  direction: Variable
  evidence: Human research
  description: No citrate-specific cognitive enhancement effect is established by the cited evidence.
  sourceId: mc-cognition
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- conceptId: sleep
  name: Sleep quality score
  direction: Variable
  evidence: Human research
  description: The placebo-controlled trial improved PSQI overall, but the citrate-versus-placebo difference was not magnesium-specific.
  sourceId: mc-sleep
  population: Adults over 51 years with poor-quality sleep
  exposure: 320 mg magnesium/day as citrate for 7 weeks
  instrument: Pittsburgh Sleep Quality Index
  magnitude: Within-group improvement in both groups
  reportType: measured-assessment
- conceptId: fatigue-severity
  name: Restless-legs symptom burden
  direction: Increased
  evidence: Limited research
  description: The uncontrolled pilot reported lower symptom scores; placebo-controlled replication is absent.
  sourceId: mc-restless
  population: 12 adults with restless legs syndrome
  exposure: 200 mg magnesium citrate/day for 8 weeks
  instrument: Symptom score and quality-of-life measures
  magnitude: null
  reportType: measured-assessment
- id: dr-magnesium-citrate-magnesium-citrate-outcome-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Occasional constipation
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: mc-cipro
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-outcome-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Colorectal cleansing
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-citrate-s10
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-outcome-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Sleep or insomnia
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: mc-sleep
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-outcome-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Restless legs syndrome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: mc-restless
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-citrate-magnesium-citrate-outcome-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Cognition or memory
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: mc-cognition
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Osmotic laxation
  description: Magnesium citrate retains water in the gastrointestinal tract; increased luminal volume promotes bowel evacuation.
  sourceId: mc-label
- title: Relative dissolution and absorption
  description: Citrate was more soluble and produced higher urinary or serum magnesium responses than oxide in small comparative studies; the measurements are surrogates, not clinical outcomes.
  sourceId: mc-lindberg
- title: Magnesium-ion complexation
  description: Divalent magnesium can reduce absorption of susceptible oral medicines by forming poorly absorbed complexes.
  sourceId: mc-cipro
- title: Osmotic laxation
  description: Magnesium citrate acts as an osmotic agent that retains water in the gastrointestinal tract; increased luminal volume promotes bowel evacuation.
  sourceId: mc-cipro
- title: Solubility-related absorption
  description: Relative to oxide, citrate remains more soluble across simulated gastric conditions, providing more dissolved magnesium for intestinal absorption.
  sourceId: dr-magnesium-citrate-s4
- title: Active moiety
  description: Chemical and pharmacokinetic interpretation indicates that absorbed magnesium is the relevant systemic mineral moiety, while citrate changes the salt's mass, solubility, and luminal osmotic contribution.
  sourceId: mc-usp
- title: Medication complexation
  description: Divalent magnesium can form poorly absorbed complexes with susceptible oral medicines, including tetracyclines and fluoroquinolones.
  sourceId: mc-cipro
```

## Cautions

```yaml
- title: Renal impairment
  description: Magnesium-containing bowel preparations should be avoided or used only with professional review in renal insufficiency or failure because magnesium is renally cleared.
  sourceId: mc-bowel
- title: Hypermagnesemia and fluid loss
  description: High or repeated laxative exposures can cause diarrhea, dehydration, electrolyte disturbance and hypermagnesemia, with greater risk when renal clearance is reduced.
  sourceId: mc-label
- title: Gastrointestinal red flags
  description: The cited label flags abdominal pain, nausea, vomiting, persistent bowel-habit change, rectal bleeding and failure to have a bowel movement after use.
  sourceId: mc-label
- title: Short-term labeled use
  description: The cited OTC label limits unsupervised laxative use to no longer than one week.
  sourceId: mc-label
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mc-cipro
```

## Claims

```yaml
- id: mc-relative-bioavailability
  assertion: Magnesium citrate produces higher absorption surrogates than magnesium oxide in small comparative studies.
  relation: relative-bioavailability
  participants:
    - entityId: substance:magnesium-citrate
      role: salt
    - entityId: tag:magnesium-homeostasis
      role: measured-mineral-system
  context: Healthy-volunteer urinary and serum endpoints; this does not establish superior clinical outcomes.
  sourceIds:
    - mc-lindberg
    - mc-kappeler
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Indirect surrogate outcomes and small samples do not establish a universal absorption ranking.
- id: mc-sleep
  assertion: Magnesium citrate is a reliable sleep aid.
  relation: clinical-efficacy
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:sleep
      role: outcome-domain
  context: Citrate-specific placebo-controlled evidence.
  sourceIds:
    - mc-sleep
    - mc-sleep-review
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Overall sleep improvement was not magnesium-specific and mixed-form reviews remain inconsistent.
- id: mc-elemental-dose
  assertion: The mass of magnesium citrate equals the mass of elemental Mg.
  relation: dose-interpretation
  participants:
    - entityId: substance:magnesium-citrate
      role: salt
    - entityId: tag:magnesium-homeostasis
      role: elemental-mineral
  context: Elemental magnesium is only a fraction of the salt mass.
  sourceIds:
    - mc-usp
    - mc-label
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Hydration and product assay can change the exact fraction.
- id: dr-magnesium-citrate-magnesium-citrate-claim-1
  assertion: Magnesium citrate is more bioavailable than magnesium oxide.
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-citrate-s4
    - mc-kappeler
  conflictingSourceIds:
    - mc-cipro
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-citrate-magnesium-citrate-claim-2
  assertion: Magnesium citrate is a reliable sleep aid.
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - mc-sleep
    - dr-magnesium-citrate-s8
  conflictingSourceIds:
    - mc-cipro
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-citrate-magnesium-citrate-claim-3
  assertion: Magnesium citrate improves cognition or memory.
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - mc-cognition
  conflictingSourceIds:
    - mc-cipro
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-citrate-magnesium-citrate-claim-4
  assertion: Magnesium citrate is non-laxative when used as a supplement.
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - mc-cipro
    - mc-fda-lax
  conflictingSourceIds:
    - mc-cipro
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-citrate-magnesium-citrate-claim-5
  assertion: A stated mass of magnesium citrate equals the same mass of elemental Mg.
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-citrate
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - mc-cipro
    - mc-usp
  conflictingSourceIds:
    - mc-cipro
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: mc-cipro
  name: Ciprofloxacin
  otherSlug: null
  summary: Magnesium-containing products can reduce ciprofloxacin absorption; the cited label requires separation.
  sourceId: mc-cipro
  context: Documented class interaction from ciprofloxacin labeling; not a citrate-specific trial.
- id: mc-doxy
  name: Doxycycline and tetracyclines
  otherSlug: null
  summary: Magnesium-containing antacids impair tetracycline absorption; follow the drug label separation instructions.
  sourceId: mc-doxy
  context: Documented class interaction; citrate-specific product testing was not required.
- id: mc-alendronate
  name: Oral bisphosphonates
  otherSlug: null
  summary: Magnesium coadministration can disrupt the labeled alendronate administration sequence and may reduce absorption.
  sourceId: mc-alendronate
  context: Timing inference from the drug label, not a citrate-specific interaction trial.
- id: dr-magnesium-citrate-interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mc-cipro
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - mc-cipro
- id: dr-magnesium-citrate-interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mc-cipro
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - mc-cipro
- id: dr-magnesium-citrate-interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mc-doxy
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - mc-cipro
- id: dr-magnesium-citrate-interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mc-cipro
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - mc-cipro
- id: dr-magnesium-citrate-interaction-5
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mc-alendronate
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - mc-cipro
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: mc-label
  title: MAGNESIUM CITRATE liquid
  authors: Chain Drug Marketing Association; DailyMed, U.S. National Library of Medicine
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4
  kind: U.S. OTC drug label
  insight: Elemental-magnesium declaration, laxative indication, onset, dose ranges, kidney warning, hydration and drug-separation language.
  limitation: Product-specific labeling, not an independent efficacy trial.
  funding: Commercial product labeling; no research funding statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Labeler has a commercial interest in the marketed product.
  conflictOfInterestStatus: not-assessed
- id: mc-fda-lax
  title: "OTC Monograph M007: Laxative Drug Products for Over-the-Counter Human Use"
  authors: U.S. Food and Drug Administration
  year: 2023
  url: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2023-05/OTC%20Monograph_M007-Laxative%20Drug%20Products%20for%20OTC%20Human%20Use%2005.02.2023.pdf
  kind: Regulatory monograph
  insight: Classifies oral magnesium citrate as a saline laxative and specifies monograph dose and warnings.
  limitation: Regulatory conditions are not individualized clinical guidance.
  funding: U.S. government
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No conflict stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2023-05/OTC%20Monograph_M007-Laxative%20Drug%20Products%20for%20OTC%20Human%20Use%2005.02.2023.pdf
- id: mc-usp
  title: Magnesium Citrate
  authors: United States Pharmacopeial Convention
  year: 2022
  url: https://doi.org/10.31003/USPNF_M46730_05_01
  kind: Pharmacopeial monograph
  insight: Defines the USP 3:2 form, formula, molecular weight and dried-basis magnesium assay.
  limitation: Quality standard, not clinical efficacy evidence.
  funding: USP standards program
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No clinical-study conflict statement.
  conflictOfInterestStatus: not-assessed
  doi: 10.31003/USPNF_M46730_05_01
- id: mc-lindberg
  title: Magnesium bioavailability from magnesium citrate and magnesium oxide.
  authors: J S Lindberg, M M Zobitz, J R Poindexter, C Y Pak
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2407766/
  kind: controlled human bioavailability study
  insight: Citrate was more soluble and produced higher urinary-magnesium increments than oxide.
  limitation: Small healthy-volunteer study using an indirect urinary endpoint and short observation window.
  funding: U.S. Public Health Service research support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No conflict reported in the PubMed record.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/2407766/
  pmid: "2407766"
- id: mc-kappeler
  title: Higher bioavailability of magnesium citrate as compared to magnesium oxide shown by evaluation of urinary excretion and serum levels after single-dose administration in a randomized cross-over study
  authors: Dominik Kappeler; Irene Heimbeck; Christiane Herpich; Natalie Naue; Josef Höfler; Wolfgang Timmer; Bernhard Michalke; et al.
  year: 2017
  url: https://doi.org/10.1186/s40795-016-0121-3
  kind: Randomized crossover human study
  insight: Citrate produced higher 24-hour urinary Mg excretion and higher short-term serum Mg than oxide.
  limitation: Twenty healthy men; single dose after magnesium saturation; surrogate endpoints and branded products.
  funding: Not stated in the reviewed article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the reviewed article record.
  conflictOfInterestStatus: not-assessed
  doi: 10.1186/s40795-016-0121-3
- id: mc-sleep
  title: Magnesium supplementation improves indicators of low magnesium status and inflammatory stress in adults older than 51 years with poor quality sleep
  authors: Forrest H. Nielsen; LuAnn K. Johnson; Huawei Zeng
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/21199787/
  kind: Randomized placebo-controlled human trial
  insight: 320 mg/day magnesium as citrate for seven weeks did not show a magnesium-specific overall PSQI benefit; both groups improved.
  limitation: Older adults with poor sleep, short duration, self-reported sleep outcome, and no cognition endpoint.
  funding: USDA Agricultural Research Service affiliation; separate grant not specified in abstract.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/21199787/
  pmid: "21199787"
- id: mc-restless
  title: Magnesium citrate monotherapy improves restless legs syndrome symptoms and multiple suggested immobilization test scores in an open-label pilot study
  authors: Sasikanth Gorantla; Ashwath Ravisankar; Lynn Marie Trotti
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38738598/
  kind: Open-label human pilot
  insight: Twelve adults receiving 200 mg/day for eight weeks had lower symptom and quality-of-life scores.
  limitation: Very small, uncontrolled and unblinded study.
  funding: OSF HealthCare Illinois Neurological Institute.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No study-specific conflict reported; one author serves on the AASM board.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/38738598/
  pmid: "38738598"
- id: mc-sleep-review
  title: "Magnesium Supplementation for Sleep in Adults: A Systematic Review of Randomized Controlled Trials."
  authors: Adrian L Lopresti, Stephen J Smith, Peter D Drummond
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42661485/
  kind: systematic review of randomized controlled trials
  insight: Magnesium-citrate trials did not show consistent magnesium-specific sleep benefits; formulations were not directly compared.
  limitation: Mixed forms, doses, populations and outcomes; not citrate-only.
  funding: No specific external funding.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author employment and trial involvement disclosed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1080/19390211.2026.2719670
  doi: 10.1080/19390211.2026.2719670
- id: mc-cognition
  title: "Magnesium and Cognitive Health in Adults: A Systematic Review and Meta-Analysis"
  authors: Fan Chen; Jifan Wang; Yijie Cheng; Ruogu Li; Katherine L. Tucker; et al.
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11362647/
  kind: Systematic review and meta-analysis
  insight: RCT evidence was insufficient for conclusions about magnesium supplements and cognition.
  limitation: Mixed supplement forms, dietary exposure and biomarkers cannot establish a citrate-specific effect.
  funding: NIH grants P50HL105185 and P01AG023394.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No relevant conflicts reported.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11362647/
- id: mc-bowel
  title: Bowel preparation before colonoscopy
  authors: American Society for Gastrointestinal Endoscopy
  year: 2015
  url: https://www.asge.org/home/resources/publications/guidelines/2015_bowel-preparation-before-colonoscopy
  kind: Professional-society guideline
  insight: Notes renal excretion of magnesium and avoidance of magnesium citrate in renal insufficiency or failure in bowel-preparation use.
  limitation: Colonoscopy-preparation context, not a low-dose supplement study.
  funding: Society publication; separate grant not specified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated on cited landing page.
  conflictOfInterestStatus: not-assessed
- id: mc-cipro
  title: CIPROFLOXACIN tablet, film coated
  authors: Aurobindo Pharma USA; U.S. Food and Drug Administration
  year: 2024
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=36d6c27d-45dc-3081-e063-6394a90a87e9
  kind: Drug label
  insight: Specifies separation from magnesium-containing products because of reduced ciprofloxacin absorption.
  limitation: Label examples use magnesium-containing antacids rather than pure citrate.
  funding: Commercial product labeling.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Manufacturer has product interest.
  conflictOfInterestStatus: not-assessed
- id: mc-doxy
  title: DOXYCYCLINE HYCLATE tablet
  authors: Epic Pharma; U.S. Food and Drug Administration
  year: 2023
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2cffb084-2b25-4e1b-846b-8681de7ea666
  kind: Drug label
  insight: States tetracycline absorption is impaired by magnesium-containing antacids.
  limitation: Not a citrate-specific interaction trial.
  funding: Commercial product labeling.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Manufacturer has product interest.
  conflictOfInterestStatus: not-assessed
- id: mc-alendronate
  title: ALENDRONATE SODIUM tablet
  authors: Teva Pharmaceuticals USA; Aidarex Pharmaceuticals
  year: 2012
  url: https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2f5d8719-d7b1-4f8f-8315-8b8e59798175
  kind: Drug label
  insight: Requires alendronate before other medicines; co-administered medicines can reduce absorption.
  limitation: Does not quantify a magnesium-citrate-specific interaction.
  funding: Commercial product labeling.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Manufacturers have commercial product interest.
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-citrate-s4
  title: Magnesium bioavailability from magnesium citrate and magnesium oxide.
  authors: J S Lindberg, M M Zobitz, J R Poindexter, C Y Pak
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2407766/
  kind: controlled human bioavailability study
  insight: Citrate was more soluble and produced higher urinary-magnesium increments than oxide.
  limitation: Small healthy-volunteer study using an indirect urinary endpoint and short observation window.
  funding: PubMed lists U.S. Public Health Service research support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No conflict reported in the PubMed record.
  conflictOfInterestStatus: not-assessed
  pmid: "2407766"
  doi: 10.1080/07315724.1990.10720349
- id: dr-magnesium-citrate-s8
  title: "Magnesium Supplementation for Sleep in Adults: A Systematic Review of Randomized Controlled Trials"
  authors: Adrian L. Lopresti; Stephen J. Smith; Peter D. Drummond
  year: 2026
  url: https://doi.org/10.1080/19390211.2026.2719670
  kind: Systematic review of randomized controlled trials
  insight: Magnesium-citrate trials did not show consistent magnesium-specific sleep benefits; no formulation was directly compared with another.
  limitation: Mixed formulations, doses, populations, and outcome measures; not a citrate-only review.
  funding: No specific external funding.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: One author is a Clinical Research Australia employee; author trial involvement was disclosed and independently checked.
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-citrate-s10
  title: Sodium picosulfate, magnesium oxide and anhydrous citric acid for oral solution
  authors: U.S. Food and Drug Administration
  year: 2019
  url: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/209589s005lbl.pdf
  kind: FDA prescribing label
  insight: Describes magnesium citrate formed in solution as an osmotic agent that retains water in the gastrointestinal tract.
  limitation: Combination bowel-preparation product; mechanism evidence is not pure-citrate supplement efficacy evidence.
  funding: Regulatory labeling for a commercial product.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial sponsor has a product interest.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: OTC oral saline laxative marketing
  status: Magnesium citrate oral solution is marketed as a human OTC drug under the cited laxative monograph and product label.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Unlisted sleep, cognition or chronic-supplement claims
  status: The cited laxative label and monograph do not establish authorization for these outcomes.
  sourceUrl: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2023-05/OTC%20Monograph_M007-Laxative%20Drug%20Products%20for%20OTC%20Human%20Use%2005.02.2023.pdf
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Not established
  status: Magnesium citrate oral solution is marketed as a human OTC drug and labeled as a saline laxative under OTC Monograph M007.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: The U.S. laxative label does not establish authorization for sleep, cognition, chronic supplementation, or other unlisted outcomes.
  status: Source-specific legal detail is preserved in the cited source.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4
  asOf: 2026-10-10
```
