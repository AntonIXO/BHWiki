---
slug: vitamin-d
name: Vitamin D
subtitle: D2/D3 forms, deficiency repletion, and clinical outcome evidence.
aliases:
  - vitamin d
  - "- Vitamin D2"
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags: []
accent: "#888888"
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: The returned report does not establish a validated universal human terminal half-life.
  sourceId: S1
  observationId: vitamin-d-pk-1
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: S1
x-shape:
  - slug
  - name
  - subtitle
  - summary
  - description
  - evidenceNote
  - aliases
  - formula
  - molecularWeight
  - pubchemCid
  - smiles
  - category
  - tags
  - accent
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

Vitamin D has an established nutritional role in preventing deficiency-related rickets and osteomalacia. Correcting deficiency is a different question from adding supplements to an already adequately supplied population. (sourceId: nih-2025)

Large randomized trials in generally vitamin-D-sufficient or unselected older adults found no significant reduction in fractures, major cardiovascular events, or depression with the regimens tested. These results do not establish what happens when treating symptomatic deficiency. (sourceId: vital-fractures-2022; sourceId: vital-2019; sourceId: vital-dep-2020)

Results also depend on formulation, schedule, population, and outcome: D3 outperformed D2 on a blood-status marker in one head-to-head trial, while annual 500,000-IU D3 increased falls and fractures. Neither a higher blood concentration nor a larger administered dose necessarily means greater clinical benefit. (sourceId: tripkovic-2017; sourceId: sanders-2010)
## Description

Vitamin D comprises fat-soluble precursors, principally ergocalciferol, D2, and cholecalciferol, D3. They are distinct compounds, not interchangeable names for a single molecular structure. Circulating 25-hydroxyvitamin D, abbreviated 25(OH)D, is the usual status marker; it is distinct from the active hormone 1,25-dihydroxyvitamin D. (sourceId: nih-2025)

For vitamin D, 1 microgram equals 40 IU; a 50,000-IU ergocalciferol capsule contains 1.25 mg. Capsule strength does not specify an administration schedule. (sourceId: ergocalciferol-label-2026)
## Evidence note

This article separates biochemical repletion, skeletal surrogate measurements, and patient-important outcomes. VITAL publications share participants and are not independent replications; the same applies to the D-Health reports. VITAL registered cancer and major cardiovascular events as primary endpoints, whereas the D-Health cardiovascular analysis examined a prespecified tertiary endpoint. (sourceId: vital-registry; sourceId: dhealth-cv-2023)

Low measured 25(OH)D is not synonymous with symptomatic deficiency disease: the Mongolian fracture trial enrolled children with widespread low concentrations but excluded clinical rickets. Its null fracture result therefore does not test treatment of rickets. (sourceId: ganmaa-2024)

The evidence selection emphasizes primary randomized reports, not an exhaustive systematic review. Full-text and disclosure access varied. References distinguish verified funding, reported conflicts, and information that remained unassessed; an unavailable declaration is not treated as absence of conflicts.
## Doses

```yaml
- label: Nutritional reference amounts
  amount: NIH reports 600 IU/day through age 70 and 800 IU/day after age 70.
  quantity: 600
  quantityMax: null
  unit: not established
  ingredient: vitamin-d
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Generally healthy adults
  purpose: Population nutritional reference intake, not a deficiency-repletion protocol
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
- label: Daily D2 versus D3 biochemical comparison
  amount: 1000 IU/day D2, 1000 IU/day D3, or 500 IU/day of each
  quantity: 1000
  quantityMax: null
  unit: not established
  ingredient: vitamin-d
  formulation: Not established
  route: oral
  frequency: Not established
  duration: 11 weeks
  population: Adults aged 18–84 years
  purpose: Measured 25(OH)D response
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
- label: VITAL prevention exposure
  amount: 2000 IU/day D3
  quantity: 2000
  quantityMax: null
  unit: not established
  ingredient: vitamin-d
  formulation: Not established
  route: oral
  frequency: Not established
  duration: Median 5.3 years
  population: Men aged at least 50 and women aged at least 55 years
  purpose: Primary prevention, not targeted deficiency treatment
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
- label: D-Health intermittent exposure
  amount: 60000 IU D3 once monthly
  quantity: 60000
  quantityMax: null
  unit: not established
  ingredient: vitamin-d
  formulation: Not established
  route: oral
  frequency: Not established
  duration: Up to 5 years
  population: Australians aged 60–84 years
  purpose: Population prevention trial; monthly exposure is not assumed equivalent to daily dosing
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
- label: Annual regimen associated with harm
  amount: 500000 IU D3 once annually in autumn or winter
  quantity: 500000
  quantityMax: null
  unit: not established
  ingredient: vitamin-d
  formulation: Not established
  route: oral
  frequency: Not established
  duration: 3–5 years
  population: Community-dwelling women aged at least 70 years
  purpose: Trial exposure that increased falls and fractures
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
- label: Prescription formulation strength
  amount: 50000 IU ergocalciferol per capsule
  quantity: 50000
  quantityMax: null
  unit: not established
  ingredient: Vitamin D2
  formulation: Oil-filled capsule
  route: oral
  frequency: Not inferred from capsule strength
  duration: Not established
  population: Not established
  purpose: Product-specific prescription label; not a universal replacement course
  sourceCategory: research
  note: 'Source-specific research exposure details are preserved in the cited source.'
  sourceId: S1
```

## Pharmacokinetics

```yaml
- id: vitamin-d-pk-1
  analyte: Oral absorption
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Source-specific pharmacokinetic detail is preserved in the cited source.'
  sourceId: S1
  modelEligible: false
- id: vitamin-d-pk-2
  analyte: Metabolic activation
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Source-specific pharmacokinetic detail is preserved in the cited source.'
  sourceId: S1
  modelEligible: false
- id: vitamin-d-pk-3
  analyte: Human tracer half-lives
  route: Not established
  formulation: Not established
  population: 36 healthy men, divided between the United Kingdom and The Gambia
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Source-specific pharmacokinetic detail is preserved in the cited source.'
  sourceId: S1
  modelEligible: false
```

## Modifiers

```yaml
- label: Modifier 1
  effect: Variable
  detail: '{"modifier":"Baseline status","finding":"NIH/FNB associates 25(OH)D below 12 ng/mL with deficiency risk and considers at least 20 ng/mL adequate for most people’s bone health.","limitation":"These are not validated universal targets for every extraskeletal outcome.","sourceId":"nih-2025"}'
  sourceId: S1
  observationId: vitamin-d-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: Variable
  detail: '{"modifier":"Binding protein and genotype","finding":"Vitamin-D-binding-protein concentration and genotype influenced measured 25(OH)D tracer half-life.","limitation":"This observation does not establish genotype-specific clinical dosing.","sourceId":"jones-2014"}'
  sourceId: S1
  observationId: vitamin-d-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: Variable
  detail: '{"modifier":"Absorption and body composition","finding":"Fat-malabsorption conditions and obesity can affect vitamin D status.","limitation":"A lower status marker does not by itself demonstrate benefit from a particular intensified regimen.","sourceId":"nih-2022"}'
  sourceId: S1
  observationId: vitamin-d-pk-1
  factorType: other
  direction: variable
- label: Modifier 4
  effect: Variable
  detail: '{"modifier":"Calcium cointervention","finding":"The positive Chapuy fracture trial administered calcium and D3 together.","limitation":"Its benefit cannot be assigned to vitamin D alone.","sourceId":"chapuy-1992"}'
  sourceId: S1
  observationId: vitamin-d-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: vitamin-d-effect-1
  study:
    id: vitamin-d-effects-1
    populationLabels:
      - 335 healthy South Asian and white European women in the United Kingdom
    comparator: Matched food vehicles and placebo
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: vitamin-d effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: S1
  population: 335 healthy South Asian and white European women in the United Kingdom
  exposure: 600 IU/day D2 or D3 in juice or biscuits for 12 winter weeks
  instrument: null
  magnitude: null
- id: vitamin-d-effect-2
  study:
    id: vitamin-d-effects-2
    populationLabels:
      - Adults aged 18–84; 60% met the study’s deficiency definition
    comparator: Placebo and a mixed D2/D3 arm
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: vitamin-d effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: S1
  population: Adults aged 18–84; 60% met the study’s deficiency definition
  exposure: 1000 IU/day D2 or D3 for 11 weeks
  instrument: null
  magnitude: null
- id: vitamin-d-effect-3
  study:
    id: vitamin-d-effects-3
    populationLabels:
      - 311 adults aged 55–70 without osteoporosis
    comparator: 400-IU/day arm; calcium supplied when dietary intake was below 1200 mg/day
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: vitamin-d effect
  direction: Variable
  evidence: Human research
  description: Source-specific effect evidence is preserved in the cited reference.
  sourceId: S1
  population: 311 adults aged 55–70 without osteoporosis
  exposure: 400, 4000, or 10000 IU/day D3 for 3 years
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- id: vitamin-d-outcome-1
  study:
    id: vitamin-d-outcomes-1
    design: Double-blind randomized trial
    populationLabels:
      - 3270 older women; mean age 84 years
    comparator: Double placebo
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Fractures with combined calcium and D3
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 3270 older women; mean age 84 years
  exposure: Not established
  instrument: Radiologically identified fractures
  magnitude: null
- id: vitamin-d-outcome-2
  study:
    id: vitamin-d-outcomes-2
    design: Randomized placebo-controlled trial
    populationLabels:
      - 36282 postmenopausal women aged 50–79
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Fractures and kidney stones with combined supplementation
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 36282 postmenopausal women aged 50–79
  exposure: Not established
  instrument: null
  magnitude: null
- id: vitamin-d-outcome-3
  study:
    id: vitamin-d-outcomes-3
    design: Randomized placebo-controlled trial
    populationLabels:
      - 25871 adults not selected for deficiency, osteoporosis, or low bone mass
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Fractures with routine D3
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 25871 adults not selected for deficiency, osteoporosis, or low bone mass
  exposure: Not established
  instrument: Adjudicated incident fractures
  magnitude: null
- id: vitamin-d-outcome-4
  study:
    id: vitamin-d-outcomes-4
    design: Randomized placebo-controlled trial
    populationLabels:
      - 2495 older Finnish adults; baseline mean 25(OH)D 74.8 nmol/L in the measured subcohort
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Fractures despite higher achieved 25(OH)D
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 2495 older Finnish adults; baseline mean 25(OH)D 74.8 nmol/L in the measured subcohort
  exposure: Not established
  instrument: National health-register fracture diagnoses
  magnitude: null
- id: vitamin-d-outcome-5
  study:
    id: vitamin-d-outcomes-5
    design: Double-blind randomized placebo-controlled trial
    populationLabels:
      - 8851 randomized children aged 6–13; 8348 in fracture analyses; 95.5% of that analysis population had baseline 25(OH)D below 50 nmol/L
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Childhood fractures in a population with low 25(OH)D
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 8851 randomized children aged 6–13; 8348 in fracture analyses; 95.5% of that analysis population had baseline 25(OH)D below 50 nmol/L
  exposure: Not established
  instrument: Fracture questionnaires
  magnitude: null
- id: vitamin-d-outcome-6
  study:
    id: vitamin-d-outcomes-6
    design: Double-blind randomized placebo-controlled trial
    populationLabels:
      - 2256 women aged at least 70 with elevated fracture risk
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Falls and fractures after annual bolus dosing
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 2256 women aged at least 70 with elevated fracture risk
  exposure: Not established
  instrument: Monthly fall calendars and radiologically confirmed fractures
  magnitude: null
- id: vitamin-d-outcome-7
  study:
    id: vitamin-d-outcomes-7
    design: Two-stage response-adaptive randomized trial
    populationLabels:
      - 688 adults aged at least 70; elevated fall risk and 25(OH)D 10–29 ng/mL
    comparator: 200 IU/day D3, not placebo
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Falls in older adults with low status
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 688 adults aged at least 70; elevated fall risk and 25(OH)D 10–29 ng/mL
  exposure: Not established
  instrument: null
  magnitude: null
- id: vitamin-d-outcome-8
  study:
    id: vitamin-d-outcomes-8
    design: Cluster-randomized, double-blind comparison
    populationLabels:
      - 247 Mongolian schoolchildren within a larger trial; baseline median 25(OH)D 7 ng/mL
    comparator: Unfortified milk
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Winter respiratory infections in markedly deficient children
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 247 Mongolian schoolchildren within a larger trial; baseline median 25(OH)D 7 ng/mL
  exposure: Not established
  instrument: Parent-reported acute respiratory infections
  magnitude: null
- id: vitamin-d-outcome-9
  study:
    id: vitamin-d-outcomes-9
    design: Open-label randomized test-and-treat trial
    populationLabels:
      - 6200 UK participants aged at least 16
    comparator: No testing or supplementation offer
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Respiratory infection and COVID-19 prevention
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 6200 UK participants aged at least 16
  exposure: Not established
  instrument: Doctor- or swab-confirmed respiratory infections
  magnitude: null
- id: vitamin-d-outcome-10
  study:
    id: vitamin-d-outcomes-10
    design: Randomized placebo-controlled ancillary analysis
    populationLabels:
      - 15373 survey respondents and 2598 diary participants from the parent trial
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Respiratory infections in older Australians
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 15373 survey respondents and 2598 diary participants from the parent trial
  exposure: Not established
  instrument: Annual symptom surveys and winter diaries
  magnitude: null
- id: vitamin-d-outcome-11
  study:
    id: vitamin-d-outcomes-11
    design: Randomized placebo-controlled ancillary trial
    populationLabels:
      - 18353 adults without clinically relevant depressive symptoms at baseline
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Depression prevention and mood
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 18353 adults without clinically relevant depressive symptoms at baseline
  exposure: Not established
  instrument: Incident or recurrent depression/symptom events and PHQ-8
  magnitude: null
- id: vitamin-d-outcome-12
  study:
    id: vitamin-d-outcomes-12
    design: Randomized double-blind factorial trial
    populationLabels:
      - 25871 adults; baseline mean 25(OH)D 30.8 ng/mL in those measured
    comparator: placebo
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Major cardiovascular events and invasive cancer
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 25871 adults; baseline mean 25(OH)D 30.8 ng/mL in those measured
  exposure: Not established
  instrument: Adjudicated cancer and cardiovascular events
  magnitude: null
- id: vitamin-d-outcome-13
  study:
    id: vitamin-d-outcomes-13
    design: Randomized placebo-controlled analysis of a prespecified tertiary endpoint
    populationLabels:
      - 21302 older adults included in analysis
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Possible cardiovascular signal
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 21302 older adults included in analysis
  exposure: Not established
  instrument: Linked hospitalization, procedure, and mortality records
  magnitude: null
- id: vitamin-d-outcome-14
  study:
    id: vitamin-d-outcomes-14
    design: Randomized placebo-controlled trial
    populationLabels:
      - 21315 older Australians randomized
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: Mortality
  direction: Variable
  evidence: Human research
  description: Source-specific outcome evidence is preserved in the cited reference.
  sourceId: S1
  population: 21315 older Australians randomized
  exposure: Not established
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Calcium and phosphate regulation
  description: Active vitamin D metabolites increase intestinal calcium and phosphate absorption, supporting bone mineralization; parathyroid hormone regulates renal activation.
  sourceId: S1
- title: Immune-related biological rationale
  description: Proposed immune benefits motivated respiratory-infection trials, but correcting the measured status marker in CORONAVIT did not produce the anticipated infection reduction.
  sourceId: S1
```

## Cautions

```yaml
- title: Research caution
  description: Toxicity can include nausea, constipation, weakness, excessive urination and thirst, hypercalciuria, renal injury, and soft-tissue calcification.
  sourceId: S1
- title: Research caution
  description: The ergocalciferol label states that effects can persist for two or more months after treatment stops.
  sourceId: S1
- title: Research caution
  description: NIH reports an adult tolerable upper intake level of 4000 IU/day from all sources.
  sourceId: S1
- title: Research caution
  description: The reviewed ergocalciferol label lists hypercalcemia, hypervitaminosis D, abnormal sensitivity to vitamin D toxicity, and malabsorption syndrome.
  sourceId: S1
- title: Research caution
  description: VITAL excluded renal failure or dialysis, cirrhosis, hypercalcemia, and sarcoidosis or other granulomatous disease.
  sourceId: S1
```

## Claims

```yaml
- id: vitamin-d-claim-1
  assertion: D3 is clinically superior to D2 for every outcome
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-d
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: vitamin-d-claim-2
  assertion: Higher vitamin D levels necessarily produce stronger bones
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-d
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: vitamin-d-claim-3
  assertion: D-Health proves cardiovascular protection in people taking cardiovascular medication
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-d
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: vitamin-d-claim-4
  assertion: Vitamin D has an established cancer-mortality benefit
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-d
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: vitamin-d-claim-5
  assertion: USP verification proves clinical effectiveness
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-d
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Source-specific research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Source-specific interaction evidence is preserved in the cited source.'
  sourceId: S1
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Source-specific interaction evidence is preserved in the cited source.'
  sourceId: S1
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Source-specific interaction evidence is preserved in the cited source.'
  sourceId: S1
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Source-specific interaction evidence is preserved in the cited source.'
  sourceId: S1
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-5
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Source-specific interaction evidence is preserved in the cited source.'
  sourceId: S1
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01169259"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01169259
  kind: Research source link
  insight: Registered design, primary endpoints, eligibility, and intervention.
  limitation: Registry provenance, not independent efficacy evidence; intervention completion differs from ongoing follow-up.
  funding: Brigham and Women’s Hospital lead sponsorship with NIH collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Registry does not replace author financial-disclosure forms.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: Vitamin D - Consumer
  authors: NIH Office of Dietary Supplements
  year: 2022
  url: https://ods.od.nih.gov/factsheets/VitaminD-Consumer/
  kind: Deep Research source
  insight: Reference intakes, upper limits, susceptible groups, and medicine interactions.
  limitation: General nutritional information, not individualized replacement evidence.
  funding: NIH institutional publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No individual conflict declaration located.
  conflictOfInterestStatus: not-assessed
- id: S3
  title: "Daily supplementation with 15 μg vitamin D2 compared with vitamin D3 to increase wintertime 25-hydroxyvitamin D status in healthy South Asian and white European women: a 12-wk randomized, placebo-controlled food-fortification trial"
  authors: Laura Tripkovic; Louise R. Wilson; Kathryn Hart; et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28679555/
  kind: Deep Research source
  insight: D3 produced the greater status-marker response.
  limitation: Short biochemical trial; full disclosure text was only partly accessible.
  funding: BBSRC grant BB/I006192/1, independently confirmed in the UKRI award record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Susan Lanham-New disclosed a D3Tex research-director role and associated patent interests.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Vitamin D2 is as effective as vitamin D3 in maintaining circulating concentrations of 25-hydroxyvitamin D
  authors: Michael F. Holick; Rachael M. Biancuzzo; Tai C. Chen; et al.
  year: 2008
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2266966/
  kind: Deep Research source
  insight: Similar biochemical responses to the tested daily D2 and D3 doses.
  limitation: No clinical-outcome superiority test.
  funding: NIH support indexed; complete funding and supply arrangements were not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Holick disclosed pharmaceutical speaker and consulting relationships, including Merck, Eli Lilly, Amgen, and Novartis.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: 25(OH)D2 half-life is shorter than 25(OH)D3 half-life and is influenced by DBP concentration and genotype
  authors: K. S. Jones; S. Assar; D. Harnpanich; et al.
  year: 2014
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4207933/
  kind: Deep Research source
  insight: Direct human tracer estimates for circulating metabolites.
  limitation: Small male-only study; not parent-vitamin pharmacokinetics.
  funding: UK Medical Research Council support indexed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared nothing to disclose.
  conflictOfInterestStatus: not-assessed
- id: S6
  title: Vitamin D3 and calcium to prevent hip fractures in elderly women
  authors: M. C. Chapuy; M. E. Arlot; F. Duboeuf; et al.
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1331788/
  kind: Deep Research source
  insight: Positive combined calcium–D3 fracture trial.
  limitation: Abstract retrieved; full funding and disclosure statements unavailable.
  funding: Not verified from accessible original material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Original declaration unavailable.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: Calcium plus vitamin D supplementation and the risk of fractures
  authors: Rebecca D. Jackson; Andrea Z. LaCroix; Margery Gass; et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16481635/
  kind: Deep Research source
  insight: Null intention-to-treat fracture results and increased kidney stones.
  limitation: Combined intervention; abstract access did not establish complete financial disclosures.
  funding: Study-specific funding statement not verified in retrieved material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full author declarations unavailable.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease
  authors: JoAnn E. Manson; Nancy R. Cook; I-Min Lee; et al.
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6425757/
  kind: Deep Research source
  insight: Large null primary cancer and cardiovascular trial.
  limitation: Mostly adequate baseline status; post hoc cancer-mortality findings require caution.
  funding: NIH support; Pharmavite and Pronova/BASF supplied study products; Quest performed 25(OH)D assays.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete original individual disclosure forms were not retrieved; product support is not treated as absence of conflicts.
  conflictOfInterestStatus: not-assessed
- id: S9
  title: Supplemental Vitamin D and Incident Fractures in Midlife and Older Adults
  authors: Meryl S. LeBoff; Sharon H. Chou; Kristin A. Ratliff; et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9716639/
  kind: Deep Research source
  insight: No reduction in total, nonvertebral, or hip fractures.
  limitation: Ancillary analysis of VITAL, not an independent cohort or severe-deficiency treatment trial.
  funding: NIH/NIAMS support; parent VITAL included donated study products.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete individual disclosure forms not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: "Effect of Long-term Vitamin D3 Supplementation vs Placebo on Risk of Depression or Clinically Relevant Depressive Symptoms and on Change in Mood Scores: A Randomized Clinical Trial"
  authors: Olivia I. Okereke; Charles F. Reynolds III; David Mischoulon; et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32749491/
  kind: Deep Research source
  insight: Null depression-prevention and PHQ-8 results.
  limitation: Does not test treatment of active depression.
  funding: NIH support, including NIMH R01MH091448; parent VITAL product donations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosures included Buring’s Pharmavite fees and spouse’s advisory role, Mischoulon’s supplement-company relationships, and Manson’s Mars Symbioscience grants.
  conflictOfInterestStatus: not-assessed
- id: S11
  title: "Annual high-dose oral vitamin D and falls and fractures in older women: a randomized controlled trial"
  authors: Kerrie M. Sanders; Amanda L. Stuart; Elizabeth J. Williamson; et al.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20460620/
  kind: Deep Research source
  insight: Annual 500000-IU D3 increased falls and fractures.
  limitation: Regimen-specific harm; full original financial disclosures were not retrieved.
  funding: Complete original funding statement not verified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full declaration unavailable.
  conflictOfInterestStatus: not-assessed
- id: S12
  title: "The Effects of Four Doses of Vitamin D Supplements on Falls in Older Adults: A Response-Adaptive, Randomized Clinical Trial"
  authors: Lawrence J. Appel; Erin D. Michos; Christine M. Mitchell; et al.
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8240534/
  kind: Deep Research source
  insight: Higher daily doses did not prevent falls compared with 200 IU/day.
  limitation: Adaptive design, active control, and secondary safety findings.
  funding: National Institute on Aging and additional NIH support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: NIH/NIA support disclosed; complete individual forms were not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: "Effect of High-Dose Vitamin D Supplementation on Volumetric Bone Density and Bone Strength: A Randomized Clinical Trial"
  authors: Lauren A. Burt; Emma O. Billington; Marianne S. Rose; et al.
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6714464/
  kind: Deep Research source
  insight: Higher doses produced greater radial bone-density loss.
  limitation: Surrogate endpoints, not a fracture-powered trial.
  funding: Investigator-initiated grant from Pure North S’Energy Foundation.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Billington disclosed Amgen and Eli Lilly relationships; additional author financial relationships were reported.
  conflictOfInterestStatus: not-assessed
- id: S14
  title: "Vitamin D supplements for fracture prevention in schoolchildren in Mongolia: analysis of secondary outcomes from a multicentre, double-blind, randomised, placebo-controlled trial"
  authors: Davaasambuu Ganmaa; Polyna Khudyakov; Uyanga Buyanjargal; et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38048799/
  kind: Deep Research source
  insight: Null fracture result despite widespread low baseline 25(OH)D.
  limitation: Clinical rickets excluded; secondary questionnaire outcome.
  funding: US National Institutes of Health.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full original declaration not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S15
  title: Randomized trial of vitamin D supplementation and risk of acute respiratory infection in Mongolia
  authors: Carlos A. Camargo Jr; Davaasambuu Ganmaa; A. Lindsay Frazier; et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22908115/
  kind: Deep Research source
  insight: Positive respiratory-infection finding in markedly deficient children.
  limitation: Small cluster-randomized comparison; parent-reported outcome; full text restricted.
  funding: Original funding statement not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Publisher’s article disclosure states no relevant financial relationships.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: "Effect of a test-and-treat approach to vitamin D supplementation on risk of all cause acute respiratory tract infection and covid-19: phase 3 randomised controlled trial (CORONAVIT)"
  authors: David A. Jolliffe; Hayley Holt; Matthew Greenig; et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9449358/
  kind: Deep Research source
  insight: No infection reduction from the tested population test-and-treat strategy.
  limitation: Open-label implementation comparison, not blinded supplementation alone.
  funding: Support included Barts Charity, Pharma Nord, Fischer Family Foundation, and DSM Nutritional Products.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Martineau disclosed vitamin D research support from companies manufacturing or selling vitamin D products; complete declarations only partly recovered.
  conflictOfInterestStatus: not-assessed
- id: S17
  title: "The effect of vitamin D supplementation on acute respiratory tract infection in older Australian adults: an analysis of data from the D-Health Trial"
  authors: Hai Pham; Mary Waterhouse; Catherine Baxter; et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33444565/
  kind: Deep Research source
  insight: Monthly supplementation did not reduce respiratory-infection risk.
  limitation: Survey and diary subsets; small duration differences.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full individual declarations not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S18
  title: "Vitamin D supplementation and major cardiovascular events: D-Health randomised controlled trial"
  authors: Bridie Thompson; Mary Waterhouse; Dallas R. English; et al.
  year: 2023
  url: https://www.bmj.com/content/381/bmj-2023-075230
  kind: Deep Research source
  insight: Cardiovascular point estimate favored D3, but the main interval included no effect.
  limitation: Prespecified tertiary endpoint among numerous outcomes; subgroup interaction tests were nonsignificant.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Disclosure statement identified, but its complete individual details were not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S19
  title: "The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality"
  authors: Rachel E. Neale; Catherine Baxter; Briony Duarte Romero; et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35026158/
  kind: Deep Research source
  insight: No reduction in the trial’s primary all-cause mortality endpoint.
  limitation: Monthly regimen; exploratory cancer-mortality signal is not definitive.
  funding: Australian National Health and Medical Research Council.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full original individual declarations not retrieved.
  conflictOfInterestStatus: not-assessed
- id: S20
  title: The effect of vitamin D3 supplementation on fracture incidence in an aging population - The Finnish vitamin D trial
  authors: Toni Rikkonen; Sari Hantunen; Heikki Kröger; et al.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42704968/
  kind: Deep Research source
  insight: No fracture benefit at either dose; excess fractures in the 1600-IU arm.
  limitation: Abstract and competing-interest statement reviewed; online September 7, 2026, ahead of the December issue.
  funding: Disclosed support included the Research Council of Finland, Finnish foundations, and NIH author support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Virtanen disclosed Abiogen Pharma travel reimbursement; Manson disclosed outside-work Mars Edge grants; other institutional and guideline roles were reported.
  conflictOfInterestStatus: not-assessed
- id: S21
  title: Full Prescribing Information
  authors: use, C-IV — Full Prescribing Information. Apotex Corp.; DailyMed/National Library of Medicine. 2026; SPL v21, effective July 21, 2026. [Direct regulator URL](
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=944daf47-49a6-93ca-e348-4a0f1b6d937e
  kind: Regulatory or registry source
  insight: Official formulation, metabolism, contraindications, interactions, and toxicity warnings.
  limitation: September 2026 product-specific prescription label; legacy disease regimens are not general repletion evidence.
  funding: Manufacturer labeling; no independent study funding statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Manufacturer is the product’s commercial stakeholder; individual declarations not applicable.
  conflictOfInterestStatus: not-assessed
- id: S22
  title: "Direct source link: https://clinicaltrials.gov/study/NCT01169259"
  authors: Publication metadata not assessed in the returned report
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01169259
  kind: Research source link
  insight: Registered design, primary endpoints, eligibility, and intervention.
  limitation: Registry provenance, not independent efficacy evidence; intervention completion differs from ongoing follow-up.
  funding: Brigham and Women’s Hospital lead sponsorship with NIH collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Registry does not replace author financial-disclosure forms.
  conflictOfInterestStatus: not-assessed
- id: S23
  title: "FAQs: USP Verification Services"
  authors: United States Pharmacopeia
  year: 2026
  url: https://www.usp.org/frequently-asked-questions/usp-verification-services
  kind: Deep Research source
  insight: Product-quality verification is distinct from comprehensive efficacy assessment.
  limitation: Undated institutional page; some access was limited to indexed official text.
  funding: USP institutional program description; project-specific funding not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: USP describes its own verification service; no individual declaration located.
  conflictOfInterestStatus: not-assessed
- id: S24
  title: Questions and Answers on Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: official regulatory guidance
  insight: US supplement regulation does not include routine FDA premarket approval.
  limitation: General US category rules, not a worldwide vitamin D legal determination.
  funding: FDA institutional publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Individual research disclosures not applicable to this regulatory explanation.
  conflictOfInterestStatus: not-assessed
- id: S25
  title: Questions and Answers on Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: official regulatory guidance
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Not established
  status: Vitamin-containing products can fall within the dietary-supplement framework; FDA does not approve dietary supplements before marketing.
  sourceUrl: https://clinicaltrials.gov/study/NCT01169259
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Not established
  status: The reviewed Torrent 50000-IU capsule label is marked Rx Only.
  sourceUrl: https://clinicaltrials.gov/study/NCT01169259
  asOf: 2026-10-10
```
