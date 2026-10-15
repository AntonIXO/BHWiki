---
slug: magnesium-oxide
name: Magnesium oxide
subtitle: A high-elemental-magnesium salt with lower indirect absorption and clinically important renal risk.
aliases:
  - magnesium oxide
  - MgO
formula: MgO
molecularWeight: 40.305 g/mol
pubchemCid: 14792
smiles: O=[Mg]
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
  context: MgO studies provide indirect absorption or status measures rather than a valid analyte-specific elimination half-life.
  sourceId: mgo-bioavail
  observationId: magnesium-oxide-pk-unestablished
kinetics:
  onset: Laxative and antacid effects are formulation- and dose-dependent.
  peak: Serum magnesium may change after dosing; no MgO-specific peak profile was standardized.
  duration: Constipation trials lasted four weeks; duration of subjective effects is not a half-life.
  bioavailability: Lower indirect absorption than several comparator salts in small studies; the oft-repeated 4% is not universal.
  metabolism: Magnesium is renally handled; MgO-specific systemic metabolism was not established.
  sourceId: mgo-bioavail
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

Magnesium oxide contains about 60.3% elemental magnesium by mass. Small human studies found lower indirect absorption than several comparator salts, but the familiar 4% value is not universal. Direct clinical evidence is strongest for short-term constipation, with smaller migraine and cisplatin-specific studies. Renal dysfunction increases hypermagnesemia risk. [mgo-bioavail] [mgo-constipation] [mgo-risk]

## Description

Product labels may state both MgO mass and elemental magnesium. Evidence for MgO should not be transferred to other salts, and product-specific formulations matter. [mgo-label] [mgo-ods]

## Evidence note

This page separates constipation, migraine and cisplatin outcomes from indirect bioavailability studies. No analyte-specific MgO terminal half-life was established. [mgo-bioavail] [mgo-guideline] [mgo-risk]

## Doses

```yaml
- label: Chronic constipation trial
  amount: 500 mg MgO three times daily
  quantity: 500
  quantityMax: null
  unit: mg/dose
  ingredient: Magnesium oxide
  formulation: Study tablets
  route: Oral
  frequency: Three times daily
  duration: 28 days
  population: Adults with chronic constipation
  purpose: Research exposure
  sourceCategory: research
  note: Total MgO 1.5 g/day; not a universal regimen.
  sourceId: mgo-constipation
- label: Adult migraine trial
  amount: 500 mg MgO/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Magnesium oxide
  formulation: Study tablets
  route: Oral
  frequency: Daily
  duration: 8 weeks per treatment period
  population: Adults with migraine
  purpose: Research exposure
  sourceCategory: research
  note: Active comparator trial without placebo.
  sourceId: mgo-migraine
- label: Pediatric migraine trial
  amount: 9 mg/kg/day MgO
  quantity: 9
  quantityMax: null
  unit: mg/kg/day
  ingredient: Magnesium oxide
  formulation: Study tablets
  route: Oral
  frequency: Three divided doses with food
  duration: 16 weeks
  population: Children with frequent migraine
  purpose: Research exposure
  sourceCategory: research
  note: Pediatric trial with high attrition.
  sourceId: mgo-pediatric
- label: Cisplatin hypomagnesemia prevention
  amount: 500 mg MgO per 50 mg/m² cisplatin
  quantity: 500
  quantityMax: null
  unit: mg per 50 mg/m²
  ingredient: Magnesium oxide
  formulation: Study tablets
  route: Oral
  frequency: Two or three divided doses between chemotherapy cycles
  duration: Chemotherapy cycles
  population: Cancer patients receiving cisplatin
  purpose: Research exposure
  sourceCategory: research
  note: Prevention of chemotherapy-associated decline, not generalized deficiency treatment.
  sourceId: mgo-cisplatin
- label: OTC antacid label
  amount: 400 mg magnesium oxide
  quantity: 400
  quantityMax: null
  unit: mg/tablet
  ingredient: Magnesium oxide
  formulation: OTC tablet; 241.3 mg elemental magnesium/tablet
  route: Oral
  frequency: One tablet twice daily; max two tablets/24 h on cited label
  duration: Short-term labeled use
  population: Adults using OTC antacid
  purpose: Approved-label
  sourceCategory: approved-label
  note: Product-specific label.
  sourceId: mgo-label
- label: magnesium-oxide research exposure 1
  amount: 400 mg magnesium oxide
  quantity: 400
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mgo-label
- label: magnesium-oxide research exposure 2
  amount: 500 mg MgO three times daily
  quantity: 500
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 28 days
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- label: magnesium-oxide research exposure 3
  amount: 500 mg MgO/day
  quantity: 500
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 8 weeks per treatment period
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- label: magnesium-oxide research exposure 4
  amount: 9 mg/kg/day MgO in three divided doses with food
  quantity: 9
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 16 weeks
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- label: magnesium-oxide research exposure 5
  amount: 500 mg MgO per 50 mg/m2 cisplatin
  quantity: 500
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- label: magnesium-oxide research exposure 6
  amount: one tablet twice daily; maximum two tablets in 24 hours on the cited label
  quantity: 24
  quantityMax: null
  unit: not established
  ingredient: magnesium-oxide
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Source-specific research exposure details are preserved in the cited source.
  sourceId: mgo-label
```

## Pharmacokinetics

```yaml
- id: magnesium-oxide-pk-unestablished
  analyte: Magnesium ion
  route: Oral
  formulation: Magnesium oxide tablets or preparations
  population: Humans; indirect urinary and serum studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Human MgO studies measured urinary excretion, serum magnesium or status outcomes; they do not provide a validated MgO-specific plasma terminal half-life.
  sourceId: mgo-bioavail
  modelEligible: false
- id: dr-magnesium-oxide-magnesium-oxide-pk-1
  analyte: fractional_absorption
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
  sourceId: dr-magnesium-oxide-s1
  modelEligible: false
- id: dr-magnesium-oxide-magnesium-oxide-pk-2
  analyte: sixty_day_relative_bioavailability
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
  sourceId: dr-magnesium-oxide-s1
  modelEligible: false
- id: dr-magnesium-oxide-magnesium-oxide-pk-3
  analyte: systemic_adequacy
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
  sourceId: dr-magnesium-oxide-s1
  modelEligible: false
- id: dr-magnesium-oxide-magnesium-oxide-pk-4
  analyte: renal_elimination
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
  sourceId: dr-magnesium-oxide-s1
  modelEligible: false
- id: dr-magnesium-oxide-magnesium-oxide-pk-5
  analyte: luminal_fraction
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
  sourceId: dr-magnesium-oxide-s1
  modelEligible: false
```

## Modifiers

```yaml
- label: Solubility and anion
  effect: Lower indirect absorption than several comparator salts
  detail: Comparative studies used urinary excretion and serum measures; they do not establish a universal percentage.
  sourceId: mgo-bioavail
  observationId: magnesium-oxide-pk-unestablished
  factorType: other
  direction: variable
- label: Renal function
  effect: Lower eGFR and higher BUN increase hypermagnesemia risk
  detail: Hospital cohort risk rose with lower renal function, higher dose and longer duration.
  sourceId: mgo-risk
  observationId: magnesium-oxide-pk-unestablished
  factorType: other
  direction: slower
- label: Dose and duration
  effect: Risk increased at higher daily doses and longer administration
  detail: One cohort identified ≥1,650 mg/day and ≥36 days as risk-associated thresholds; this is observational, not a safe cutoff.
  sourceId: mgo-risk
  observationId: magnesium-oxide-pk-unestablished
  factorType: other
  direction: variable
- label: Bowel dysfunction
  effect: Possible increased retention
  detail: Severe constipation or bowel dysfunction may prolong luminal magnesium contact, but the contribution is not quantitatively established.
  sourceId: mgo-risk
  observationId: magnesium-oxide-pk-unestablished
  factorType: other
  direction: variable
- label: Modifier 1
  effect: Solubility and the accompanying anion influence urinary and serum bioavailability
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: Lower eGFR and higher BUN increase the probability of MgO-associated hypermagnesemia
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: Risk increased with MgO doses at or above 1,650 mg/day and administration lasting at least 36 days in one cohort
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
- label: Modifier 4
  effect: Severe constipation or bowel dysfunction may prolong luminal magnesium contact; the hypermagnesemia literature proposes this as a contributor, but it is not quantitatively established
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
- label: Modifier 5
  effect: Cisplatin and some diuretics can increase magnesium loss, changing the amount needed to maintain serum magnesium
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
- label: Modifier 6
  effect: Long-term proton-pump inhibitors can cause hypomagnesemia; loop and thiazide diuretics increase urinary magnesium loss, while potassium-sparing diuretics can reduce it
  detail: Source-specific modifier evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s11
  observationId: dr-magnesium-oxide-magnesium-oxide-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Laxation
  direction: Increased
  evidence: Human research
  description: MgO can increase bowel movements and soften stool in constipation treatment; unabsorbed magnesium contributes to osmotic effects.
  sourceId: mgo-constipation
  population: Adults with chronic constipation
  exposure: 500 mg MgO three times daily for 28 days
  instrument: Bowel movements, stool form and transit
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Headache symptoms
  direction: Variable
  evidence: Human research
  description: Migraine trials found mixed or preliminary signals, with pediatric frequency superiority not established and adult active-comparator similarity.
  sourceId: mgo-migraine
  population: Adults with migraine
  exposure: 500 mg MgO/day for eight-week periods
  instrument: Migraine frequency and severity
  magnitude: null
  reportType: measured-assessment
- id: dr-magnesium-oxide-magnesium-oxide-effect-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-oxide effect
  direction: Variable
  evidence: Human research
  description: Nonabsorbed Mg creates an intestinal osmotic gradient, increasing net water and electrolyte secretion and softening stool
  sourceId: dr-magnesium-oxide-s1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-effect-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-oxide effect
  direction: Variable
  evidence: Human research
  description: OTC MgO products are labeled to relieve acid indigestion and upset stomach
  sourceId: mgo-label
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-effect-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-oxide effect
  direction: Variable
  evidence: Human research
  description: MgO can reduce chemotherapy-associated serum-magnesium decline in a defined cisplatin-treated population
  sourceId: dr-magnesium-oxide-s1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-effect-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-oxide effect
  direction: Variable
  evidence: Human research
  description: Loose stool, diarrhea, abdominal cramping, nausea, and gas are plausible or reported effects; the product label specifically warns of a laxative effect
  sourceId: dr-magnesium-oxide-s1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-effect-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: magnesium-oxide effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- conceptId: diarrhea-duration
  name: Constipation response
  direction: Increased
  evidence: Human research
  description: A randomized trial reported improved constipation response, spontaneous bowel movements, stool form, transit time and quality of life.
  sourceId: mgo-constipation
  population: Adults with chronic constipation
  exposure: 1.5 g/day MgO for 28 days
  instrument: Constipation response and bowel measures
  magnitude: null
  reportType: measured-assessment
- conceptId: memory
  name: Migraine frequency
  direction: Variable
  evidence: Human research
  description: Pediatric MgO reduced severity and time trends but did not establish a significant between-group frequency slope; adult trial lacked placebo.
  sourceId: mgo-pediatric
  population: Children with frequent migraine; adults in separate active-comparator trial
  exposure: 9 mg/kg/day pediatric or 500 mg/day adult MgO
  instrument: Headache frequency and severity
  magnitude: null
  reportType: measured-assessment
- conceptId: fatigue-severity
  name: Serum magnesium during cisplatin therapy
  direction: Increased
  evidence: Human research
  description: An open-label randomized trial found MgO reduced serum-magnesium decline and final hypomagnesemia prevalence during cisplatin chemotherapy.
  sourceId: mgo-cisplatin
  population: Cancer patients receiving cisplatin
  exposure: 500 mg MgO per 50 mg/m² cisplatin
  instrument: Serum magnesium
  magnitude: null
  reportType: measured-assessment
- id: dr-magnesium-oxide-magnesium-oxide-outcome-1
  study:
    id: magnesium-oxide-outcomes-1
    populationLabels:
      - 34 Japanese women with mild-to-moderate chronic constipation; 16 placebo and 17 MgO analyzed
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: magnesium-oxide outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: 34 Japanese women with mild-to-moderate chronic constipation; 16 placebo and 17 MgO analyzed
  exposure: 1.5 g MgO/day for 28 days
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-outcome-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: magnesium-oxide outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: Not established
  exposure: 1.5 g MgO/day for 4 weeks
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-outcome-3
  study:
    id: magnesium-oxide-outcomes-3
    populationLabels:
      - 118 children aged 3–17 years randomized; 86 completed
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: magnesium-oxide outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: 118 children aged 3–17 years randomized; 86 completed
  exposure: 9 mg/kg/day MgO for 16 weeks
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-outcome-4
  study:
    id: magnesium-oxide-outcomes-4
    populationLabels:
      - 70 randomized; 63 analyzed
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: magnesium-oxide outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: 70 randomized; 63 analyzed
  exposure: 500 mg MgO/day versus sodium valproate 800 mg/day, 8 weeks per period with a 4-week washout
  instrument: null
  magnitude: null
- id: dr-magnesium-oxide-magnesium-oxide-outcome-5
  study:
    id: magnesium-oxide-outcomes-5
    populationLabels:
      - 62 adults with cancer receiving cisplatin; 31 MgO and 31 control
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: magnesium-oxide outcome
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: dr-magnesium-oxide-s1
  population: 62 adults with cancer receiving cisplatin; 31 MgO and 31 control
  exposure: 500 mg MgO per 50 mg/m2 cisplatin, divided two to three times between cycles
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Osmotic magnesium effect
  description: Unabsorbed MgO contributes to osmotic water retention and laxation in the intestinal lumen.
  sourceId: mgo-constipation
- title: Relative dissolution
  description: MgO is less soluble than several tested salts; lower dissolution can reduce the absorbed fraction under particular study conditions.
  sourceId: mgo-bioavail
- title: Renal magnesium homeostasis
  description: Systemic magnesium is primarily regulated by renal handling, making reduced eGFR a major context for toxicity.
  sourceId: mgo-risk
- title: dissolution_and_ion_release
  description: In gastric acid, MgO can be converted into soluble magnesium-containing species, allowing some Mg2+ to enter the intestinal absorption pool
  sourceId: dr-magnesium-oxide-s1
- title: osmotic_laxation
  description: Magnesium that remains unabsorbed in the lumen increases osmotic activity, causing net water and electrolyte secretion
  sourceId: dr-magnesium-oxide-s1
- title: magnesium_repletion
  description: Absorbed Mg2+ contributes to circulating and intracellular magnesium pools; serum concentration is influenced by ongoing losses and renal clearance
  sourceId: dr-magnesium-oxide-s1
- title: drug_complexation
  description: Divalent magnesium can form poorly absorbed complexes with susceptible medicines, especially tetracyclines, quinolones, and some oral bisphosphonates
  sourceId: dr-magnesium-oxide-s11
- title: migraine_hypothesis
  description: Mg2+-dependent neuronal and vascular mechanisms are biologically plausible, but the MgO trials summarized here establish clinical endpoints rather than a specific molecular mechanism
  sourceId: dr-magnesium-oxide-s1
```

## Cautions

```yaml
- title: Hypermagnesemia with renal dysfunction
  description: Lower eGFR, higher BUN, higher dose and longer use increased risk in a hospital cohort; severe symptomatic cases and a fatal course were reported in elderly patients with renal dysfunction.
  sourceId: mgo-risk
- title: Indirect absorption estimate
  description: The approximately 4% absorption estimate came from an indirect urinary-excretion method and should not be treated as a universal MgO constant.
  sourceId: mgo-bioavail
- title: GI and electrolyte effects
  description: Higher MgO exposure can cause laxation, diarrhea and fluid/electrolyte problems; antacid and laxative labels carry product-specific warnings.
  sourceId: mgo-label
- title: Population limits
  description: Migraine and cisplatin findings are condition-specific and cannot be generalized to healthy users or other magnesium salts.
  sourceId: mgo-pediatric
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mgo-label
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s1
- title: Research caution
  description: Source-specific caution detail is preserved in the cited source.
  sourceId: mgo-label
```

## Claims

```yaml
- id: mgo-absorption
  assertion: Magnesium oxide is absorbed at a universal 4% rate.
  relation: bioavailability
  participants:
    - entityId: substance:magnesium-oxide
      role: salt
    - entityId: tag:magnesium-homeostasis
      role: measured-mineral-system
  context: The 4% value came from one small indirect urinary study.
  sourceIds:
    - mgo-bioavail
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: It is not a universal isotope-based absorption constant.
- id: mgo-constipation
  assertion: Magnesium oxide improves chronic constipation.
  relation: clinical-efficacy
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:fatigue-severity
      role: outcome-proxy
  context: One short Japanese randomized trial supports a constipation signal, with guideline support of low certainty.
  sourceIds:
    - mgo-constipation
    - mgo-guideline
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Short duration, small sample and limited generalizability.
- id: mgo-migraine
  assertion: Magnesium oxide prevents migraine in all populations.
  relation: clinical-efficacy
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:memory
      role: outcome-domain
  context: Pediatric and adult trials had different designs and incomplete placebo evidence.
  sourceIds:
    - mgo-pediatric
    - mgo-migraine
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No universal preventive effect established.
- id: mgo-safety
  assertion: Magnesium oxide is safe regardless of kidney function.
  relation: safety
  participants:
    - entityId: substance:magnesium-oxide
      role: exposure
    - entityId: tag:magnesium-homeostasis
      role: risk-system
  context: Renal dysfunction is a major hypermagnesemia context.
  sourceIds:
    - mgo-risk
    - mgo-case
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Safety depends on renal function, dose and duration.
- id: dr-magnesium-oxide-magnesium-oxide-claim-1
  assertion: MgO provides a high amount of elemental magnesium by weight
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - mgo-label
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-2
  assertion: MgO is less well absorbed than some other magnesium forms
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-3
  assertion: Lower absorption makes MgO clinically useless
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-4
  assertion: MgO treats chronic constipation
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-5
  assertion: MgO prevents migraine
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-6
  assertion: MgO corrects any magnesium deficiency
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-7
  assertion: MgO improves sleep
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: dr-magnesium-oxide-magnesium-oxide-claim-8
  assertion: MgO is safe in kidney disease
  relation: evidence-boundary
  participants:
    - entityId: substance:magnesium-oxide
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - dr-magnesium-oxide-s1
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: mgo-levothyroxine
  name: Levothyroxine
  otherSlug: null
  summary: Magnesium-containing laxatives have been associated with levothyroxine under-replacement in case reports; MgO-alone adsorption was not reproduced in vitro.
  sourceId: mgo-levothyroxine
  context: Case and in-vitro evidence; product combinations differed.
- id: mgo-antibiotics
  name: Tetracycline and quinolone antibiotics
  otherSlug: null
  summary: Magnesium can reduce absorption of susceptible antibiotics.
  sourceId: mgo-ods
  context: Magnesium-class interaction.
- id: mgo-bisphosphonates
  name: Oral bisphosphonates
  otherSlug: null
  summary: Magnesium can reduce absorption of oral bisphosphonates.
  sourceId: mgo-ods
  context: Magnesium-class interaction.
- id: dr-magnesium-oxide-interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s11
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
- id: dr-magnesium-oxide-interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s11
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
- id: dr-magnesium-oxide-interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s11
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
- id: dr-magnesium-oxide-interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s12
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
- id: dr-magnesium-oxide-interaction-5
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: dr-magnesium-oxide-s11
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
- id: dr-magnesium-oxide-interaction-6
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: Source-specific interaction detail is preserved in the cited source.
  sourceId: mgo-label
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - dr-magnesium-oxide-s1
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: mgo-bioavail
  title: Bioavailability of US commercial magnesium preparations
  authors: Muhammad Firoz; Mark Graber
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11794633/
  kind: Human crossover bioavailability study
  insight: MgO fractional absorption was approximately 4% by indirect urinary excretion;
    chloride, lactate and aspartate were higher.
  limitation: Small healthy-volunteer study using an indirect endpoint and commercial
    preparations.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/30798472/
  pmid: '11794633'
- id: mgo-walker
  title: Mg citrate found more bioavailable than other Mg preparations in a randomised,
    double-blind study.
  authors: Ann F Walker, Georgios Marakis, Samantha Christie, Martyn Byng
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14596323/
  kind: randomized double-blind placebo-controlled comparative bioavailability trial
  insight: At 300 mg elemental Mg/day for 60 days, citrate and amino-acid chelate
    produced greater urinary magnesium excretion than MgO.
  limitation: Surrogate bioavailability outcomes, 46 healthy participants.
  funding: Research support, non-U.S. government indexed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '14596323'
- id: mgo-constipation
  title: A Randomized Double-blind Placebo-controlled Trial on the Effect of Magnesium
    Oxide in Patients With Chronic Constipation
  authors: Sumire Mori; Toshihiko Tomita; Kazuki Fujimura; et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31587548/
  kind: Randomized placebo-controlled clinical trial
  insight: 1.5 g/day MgO for four weeks improved constipation response, bowel movements,
    stool form, transit time and quality of life.
  limitation: Small Japanese single-site sample, predominantly female and short duration.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '31587548'
- id: mgo-guideline
  title: 'AGA-ACG Clinical Practice Guideline: Pharmacological Management of Chronic
    Idiopathic Constipation'
  authors: American Gastroenterological Association; American College of Gastroenterology
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/
  kind: Clinical practice guideline
  insight: Pooled MgO trials improved bowel-movement outcomes; renal insufficiency
    is a key caution.
  limitation: Very low certainty for some frequency estimates; trials were short and
    largely Japanese.
  funding: Guideline-specific funding not reproduced in summary.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Article disclosures reported in source.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/
- id: mgo-pediatric
  title: Oral magnesium oxide prophylaxis of frequent migrainous headache in children
  authors: Fong Wang; Stephen K. Van Den Eeden; Lynn M. Ackerson; et al.
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12786918/
  kind: Pediatric randomized placebo-controlled trial
  insight: 9 mg/kg/day MgO reduced headache severity and time trends, but did not
    establish a significant between-group frequency slope.
  limitation: High attrition and incomplete placebo superiority.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '12786918'
- id: mgo-migraine
  title: The efficacy of magnesium oxide and sodium valproate in prevention of migraine
    headache
  authors: Narges Karimi; Azadeh Razian; Mohammad Heidari
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/30798472/
  kind: Randomized active-comparator crossover trial
  insight: 500 mg/day MgO produced migraine outcomes similar to sodium valproate in
    the analyzed sample.
  limitation: Small single-center trial, active comparator without placebo and seven
    dropouts.
  funding: Grant 791/Mazandaran University of Medical Sciences.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/30798472/
  pmid: '30798472'
- id: mgo-cisplatin
  title: Effect of Oral Magnesium Oxide Supplementation on Cisplatin-Induced Hypomagnesemia
  authors: Maryam Zarif Yeganeh; Masoud Vakili; Ali Shahriari-Ahmadi; Marzieh Nojomi
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27057522/
  kind: Open-label randomized prevention trial
  insight: Dose-linked MgO reduced serum-magnesium decline during cisplatin chemotherapy.
  limitation: Small open-label cancer-specific study; prevention rather than generalized
    deficiency treatment.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '27057522'
- id: mgo-risk
  title: Risk factors for development of hypermagnesemia in patients prescribed magnesium
    oxide
  authors: Eri Wakai; Kenji Ikemura; Hiroko Sugimoto; et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30805197/
  kind: Retrospective hospital cohort
  insight: Hypermagnesemia occurred in 23%; lower eGFR, higher BUN, dose and duration
    were independent risk factors.
  limitation: Hospital retrospective design; limited generalizability.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '30805197'
- id: mgo-case
  title: 'Severe hypermagnesemia induced by magnesium oxide ingestion: a case series'
  authors: Hiroki Yamaguchi; Hisaki Shimada; Kazuhiro Yoshita; et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30136128/
  kind: Case series
  insight: Four elderly patients with renal dysfunction developed symptomatic MgO-associated
    hypermagnesemia; one course was fatal.
  limitation: Small uncontrolled case series; incidence cannot be estimated.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no conflict.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/30136128/
  pmid: '30136128'
- id: mgo-label
  title: MAGNESIUM OXIDE tablet
  authors: U.S. National Library of Medicine, DailyMed; Belleview Biosciences LLC
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3aba26ec-5ebe-433e-9524-fb355c5a0198&version=104
  kind: Current U.S. OTC label
  insight: 400 mg MgO supplies 241.3 mg elemental magnesium; label includes antacid
    use, kidney warning and drug-interaction warning.
  limitation: Product-specific labeling, not an efficacy trial.
  funding: Manufacturer label in regulatory database.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Manufacturer has commercial product interest.
  conflictOfInterestStatus: not-assessed
- id: mgo-ods
  title: Magnesium - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/magnesium-healthprofessional/
  kind: Official nutrient monograph
  insight: Summarizes relative bioavailability, laxative effects and interactions.
  limitation: Secondary synthesis; periodically updated.
  funding: U.S. federal government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://ods.od.nih.gov/factsheets/magnesium-healthprofessional/
- id: mgo-levothyroxine
  title: Intestinal adsorption of levothyroxine by antacids and laxatives
  authors: H. Mersebach; A. K. Rasmussen; L. Kirkegaard; U. Feldt-Rasmussen
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10193669/
  kind: Case reports and in vitro interaction study
  insight: Reported levothyroxine under-replacement with magnesium-containing laxative
    use; MgO alone did not show same in vitro signal.
  limitation: Two cases and in vitro data; product combinations differed.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
  pmid: '10193669'
- id: mgo-fda-supp
  title: Questions and Answers on Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: official regulatory guidance
  insight: Disease-treatment claims can make a supplement a drug; structure/function
    claims require disclaimer.
  limitation: U.S.-specific.
  funding: U.S. federal government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- id: mgo-fda-antacid
  title: 'OTC Monograph M001: Antacid Products for Over-the-Counter Human Use'
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf
  kind: U.S. OTC monograph
  insight: Lists magnesium oxide among antacid active ingredients.
  limitation: Regulatory monograph, not clinical comparison.
  funding: U.S. federal government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf
- id: dr-magnesium-oxide-s1
  title: Bioavailability of US commercial magnesium preparations
  authors: Muhammad Firoz; Mark Graber
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11794633/"
  kind: Human open-label randomized crossover bioavailability study
  insight: MgO fractional absorption was approximately 4%; chloride, lactate, and
    aspartate were higher and approximately equivalent.
  limitation: Small healthy-volunteer study using urinary magnesium excretion as an
    indirect endpoint and commercial preparations.
  funding: Not reported in the cited record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s2
  title: Mg citrate found more bioavailable than other Mg preparations in a randomised,
    double-blind study
  authors: Ann F Walker; Georgios Marakis; Samantha Christie; Martyn Byng
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14596323/"
  kind: Randomized double-blind placebo-controlled human trial
  insight: At 300 mg elemental magnesium/day for 60 days, citrate and amino-acid chelate
    produced greater urinary magnesium excretion than MgO.
  limitation: 46 healthy participants; surrogate bioavailability outcomes rather than
    clinical deficiency correction.
  funding: Research Support, Non-U.S. Gov't indexed; specific funder not stated
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s3
  title: A Randomized Double-blind Placebo-controlled Trial on the Effect of Magnesium
    Oxide in Patients With Chronic Constipation
  authors: Sumire Mori; Toshihiko Tomita; Kazuki Fujimura; Haruki Asano; Tomohiro
    Ogawa; Takahisa Yamasaki; Takashi Kondo; Tomoaki Kono; Katsuyuki Tozawa; Tadayuki
    Oshima; Hirokazu Fukui; Takeshi Kimura; Jiro Watari; Hiroto Miwa
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31587548/"
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: 1.5 g/day MgO for 4 weeks improved overall constipation response, spontaneous
    bowel movements, stool form, transit time, and constipation-related quality of
    life.
  limitation: Small Japanese single-site sample, predominantly female, short duration.
  funding: Not reported in the cited record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s4
  title: 'American Gastroenterological Association-American College of Gastroenterology
    Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic
    Constipation'
  authors: American Gastroenterological Association and American College of Gastroenterology
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/"
  kind: Clinical practice guideline and evidence synthesis
  insight: Pooled MgO trials showed increased spontaneous and complete spontaneous
    bowel movements and higher response rates; renal insufficiency is a key caution.
  limitation: Very low certainty for some frequency estimates; trials were short and
    largely Japanese.
  funding: Guideline-specific funding not reproduced in the cited summary
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Article disclosures are reported in the source
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s5
  title: 'Oral magnesium oxide prophylaxis of frequent migrainous headache in children:
    a randomized, double-blind, placebo-controlled trial'
  authors: Fong Wang; Stephen K. Van Den Eeden; Lynn M. Ackerson; Susan E. Salk; Robyn
    H. Reince; Ronald J. Elin
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12786918/"
  kind: Pediatric randomized double-blind placebo-controlled trial
  insight: 9 mg/kg/day MgO reduced headache frequency over time and reduced severity,
    but did not establish a significant between-group frequency slope.
  limitation: High attrition and incomplete placebo superiority; pediatric population
    only.
  funding: Not reported in the cited abstract
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s6
  title: 'The efficacy of magnesium oxide and sodium valproate in prevention of migraine
    headache: a randomized, controlled, double-blind, crossover study'
  authors: Narges Karimi; Azadeh Razian; Mohammad Heidari
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/30798472/"
  kind: Randomized double-blind active-comparator crossover trial
  insight: 500 mg/day MgO produced migraine outcomes similar to sodium valproate in
    the analyzed sample.
  limitation: Small single-center trial, active comparator without placebo, 7 dropouts.
  funding: Grant 791/Mazandaran University of Medical Sciences
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the cited record
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s7
  title: 'Effect of Oral Magnesium Oxide Supplementation on Cisplatin-Induced Hypomagnesemia
    in Cancer Patients: A Randomized Controlled Trial'
  authors: Maryam Zarif Yeganeh; Masoud Vakili; Ali Shahriari-Ahmadi; Marzieh Nojomi
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27057522/"
  kind: Open-label randomized controlled prevention trial
  insight: Dose-linked MgO reduced serum-magnesium decline and final hypomagnesemia
    prevalence during cisplatin chemotherapy.
  limitation: Small open-label cancer-specific study; prevention rather than treatment
    of generalized deficiency.
  funding: Not reported in the cited record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s8
  title: 'Risk factors for the development of hypermagnesemia in patients prescribed
    magnesium oxide: a retrospective cohort study'
  authors: Eri Wakai; Kenji Ikemura; Hiroko Sugimoto; Takuya Iwamoto; Masahiro Okuda
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30805197/"
  kind: Retrospective hospital cohort
  insight: Hypermagnesemia occurred in 23% of the analyzed MgO users; lower eGFR,
    higher BUN, higher dose, and longer duration were independent risk factors.
  limitation: Hospital-based retrospective design; applicability to healthy supplement
    users is limited.
  funding: Not reported in the cited record
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s9
  title: 'Severe hypermagnesemia induced by magnesium oxide ingestion: a case series'
  authors: Hiroki Yamaguchi; Hisaki Shimada; Kazuhiro Yoshita; Yutaka Tsubata; Kouzou
    Ikarashi; Tetsuo Morioka; Noriko Saito; Shinji Sakai; Ichiei Narita
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/30136128/"
  kind: Case series
  insight: Four elderly patients with renal dysfunction developed symptomatic MgO-associated
    hypermagnesemia; one course was fatal.
  limitation: Small uncontrolled case series; cannot estimate incidence.
  funding: Not reported
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared that no conflict of interest existed
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s11
  title: Magnesium - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/magnesium-healthprofessional/"
  kind: Government evidence and interaction fact sheet
  insight: Summarizes relative bioavailability, laxative effects, and interactions
    with antibiotics, bisphosphonates, diuretics, proton-pump inhibitors, and zinc.
  limitation: Secondary synthesis; web content is periodically updated.
  funding: U.S. federal government
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s12
  title: 'Intestinal adsorption of levothyroxine by antacids and laxatives: case stories
    and in vitro experiments'
  authors: H. Mersebach; A. K. Rasmussen; L. Kirkegaard; U. Feldt-Rasmussen
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10193669/"
  kind: Case reports and in vitro interaction study
  insight: Reported levothyroxine under-replacement with magnesium-containing laxative
    use, but in vitro MgO alone did not show the same adsorption signal.
  limitation: Two cases and in vitro data; product combinations and mechanisms differed.
  funding: Not reported
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s13
  title: Questions and Answers on Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements"
  kind: U.S. regulatory guidance
  insight: A dietary supplement represented as treating, preventing, or curing a specific
    disease is regulated as a drug; structure/function claims require the statutory
    disclaimer.
  limitation: U.S.-specific regulatory information; not clinical evidence.
  funding: U.S. federal government
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: dr-magnesium-oxide-s14
  title: 'OTC Monograph M001: Antacid Products for Over-the-Counter Human Use'
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf"
  kind: U.S. OTC monograph
  insight: Lists magnesium oxide among magnesium-containing antacid active ingredients.
  limitation: Regulatory monograph, not a clinical efficacy comparison of MgO formulations.
  funding: U.S. federal government
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: OTC antacid marketing
  status: Magnesium oxide is listed as an OTC antacid active ingredient under FDA Monograph M001.
  sourceUrl: https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf
  asOf: 2026-10-11
- jurisdiction: United States
  activity: Dietary supplement marketing and disease claims
  status: Supplement category and claims depend on product labeling; disease-treatment claims trigger drug regulation.
  sourceUrl: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  asOf: 2026-10-11
```
