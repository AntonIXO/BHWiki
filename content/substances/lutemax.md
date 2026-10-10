---
slug: lutemax
name: Lutemax branded carotenoid mixtures
subtitle: Evidence-specific research record.
aliases:
  - lutemax
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags: []
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Exact-product Lutemax trials report serum and MPOD timing but no validated terminal half-life.
  sourceId: S3
  observationId: lutemax-pk-1
kinetics:
  onset: Serum lutein/zeaxanthin increases were reported by week 2.
  peak: Serum and MPOD peaks depend on dose and duration; no universal Tmax was reported.
  duration: MPOD changes were detectable by about week 4 and functional measures were assessed over weeks to months.
  bioavailability: Meal context, excipients, isomer ratio and formulation matrix affect exposure.
  metabolism: Lutemax provides carotenoids that are transported in lipoproteins and deposited in retinal tissue.
  sourceId: S3
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

Lutemax 2020 is a branded marigold-derived mixture of lutein, RR-zeaxanthin and meso-zeaxanthin. Exact-product trials consistently raise serum carotenoids and MPOD; small sponsor-linked studies also report visual, sleep, stress, skin and cognitive signals. No exact-product trial establishes prevention or treatment of AMD, cognitive disease, insomnia or screen injury.

## Description

Lutemax 2020 is distinct from generic lutein or zeaxanthin and from other finished products carrying the Lutemax name. Product ratio, dose, excipients, study population and co-ingredients are retained per trial.

## Evidence note

The most reproducible exact-product result is serum carotenoid and MPOD increase. Functional findings are small, often secondary, and commercially linked; the adult stress and cognition papers likely reuse one cohort. Patent and manufacturer claims are not clinical replication.

## Doses

```yaml
- sourceCategory: research
  label: LAMA I dose-ranging study
  amount: 6 mg lutein + 1 mg zeaxanthin isomers; 10 + 2; or 20 + 4 mg/day
  quantity: 6
  quantityMax: 20
  unit: mg lutein/day
  ingredient: Lutemax 2020 carotenoid mixture
  formulation: Marigold-derived Lutemax 2020
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 28 healthy adults
  purpose: Assess serum carotenoids and MPOD
  note: Dose arms are not interchangeable with finished products.
  sourceId: S3
- sourceCategory: research
  label: Adult stress program
  amount: Approximately 13 or 27 mg total macular carotenoids/day
  quantity: 13
  quantityMax: 27
  unit: mg total carotenoids/day
  ingredient: Lutemax 2020
  formulation: Published dose description; registry reports different 10/2 and 20/3 mg arms
  route: oral
  frequency: daily
  duration: 12 months
  population: Healthy adults
  purpose: Assess stress, cortisol and health questionnaires
  note: Registry and publication dose descriptions do not fully match.
  sourceId: S4
- sourceCategory: research
  label: B.L.U.E. screen-time study
  amount: 24 mg/day
  quantity: 24
  quantityMax: null
  unit: mg/day
  ingredient: Lutemax 2020
  formulation: Capsule independently analyzed as approximately 83% lutein, 10% RR-zeaxanthin and 7% meso-zeaxanthin
  route: oral
  frequency: daily
  duration: 6 months
  population: 48 young adults with high screen exposure
  purpose: Assess visual performance, sleep and eye strain
  note: Exact-product study with commercial involvement.
  sourceId: S5
- sourceCategory: research
  label: Lutemax Kids study
  amount: 10 mg lutein + 2 mg zeaxanthin isomers/day
  quantity: 10
  quantityMax: null
  unit: mg lutein/day
  ingredient: Lutemax Kids
  formulation: Gummy manufactured by OmniActive
  route: oral
  frequency: daily
  duration: 180 days
  population: 60 children aged 5–12 years
  purpose: Assess MPOD, visual/cognitive measures and sleep
  note: MPOD was the primary endpoint; sleep was null.
  sourceId: S7
- sourceCategory: research
  label: Skin trial
  amount: 10 mg lutein + 2 mg zeaxanthin isomers/day
  quantity: 10
  quantityMax: null
  unit: mg lutein/day
  ingredient: Lutemax 2020
  formulation: Marigold-derived mixture
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 50 recruited adults; 46 completed
  purpose: Assess skin tone and erythema response
  note: Two authors were OmniActive employees.
  sourceId: S8
- sourceCategory: research
  label: High-dose combination study
  amount: 20 mg lutein + 4 mg zeaxanthin/day with vitamins/minerals
  quantity: 20
  quantityMax: null
  unit: mg lutein/day
  ingredient: Lutemax 2020 plus vitamin C, vitamin E, zinc and copper
  formulation: Combination supplement
  route: oral
  frequency: daily
  duration: 16 weeks
  population: 16 adults
  purpose: Assess MPOD and skin carotenoids
  note: Open-label, single-arm; effects cannot be attributed to Lutemax alone.
  sourceId: S9
```

## Pharmacokinetics

```yaml
- sourceId: S3
  id: lutemax-pk-1
  analyte: lutein and zeaxanthin isomers
  route: oral
  formulation: Lutemax 2020 study products
  population: Healthy adults and children in exact-product studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Serum carotenoids rose by week 2 and MPOD changes were detectable by approximately week 4; exact-product terminal half-life and clearance were not reported.
  modelEligible: false
```

## Modifiers

```yaml
- label: Formulation matrix
  effect: Bioavailability varies
  detail: Oil suspension, beadlet technology, excipients and free-versus-esterified forms can alter xanthophyll exposure; manufacturer claims are not independent head-to-head evidence.
  sourceId: S3
  observationId: lutemax-pk-1
  factorType: other
  direction: variable
- label: Isomer ratio
  effect: Batch composition varies
  detail: RR-zeaxanthin:meso-zeaxanthin ratios vary by reported batch or formulation, so total zeaxanthin does not specify the isomer split.
  sourceId: S3
  observationId: lutemax-pk-1
  factorType: other
  direction: variable
- label: Population and baseline status
  effect: Generalizability is limited
  detail: Exact-product functional studies mostly enrolled healthy young adults or children rather than adults with AMD.
  sourceId: S7
  observationId: lutemax-pk-1
  factorType: other
  direction: variable
- label: Cohort reuse
  effect: Apparent replication may be overstated
  detail: The adult stress and cognition papers have overlapping investigators, age range and dose schedule and likely share one underlying cohort.
  sourceId: S4
  observationId: lutemax-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- sourceId: S5
  id: lutemax-effect-visual
  conceptId: perception
  name: Visual performance and eye strain
  direction: Increased
  evidence: Human research
  description: The B.L.U.E. study reported improvements in contrast sensitivity, critical flicker fusion, glare, photostress recovery and self-reported eye strain; these were small exact-product findings.
  population: 48 young adults with high screen exposure
  exposure: 24 mg/day Lutemax 2020 for 6 months
  instrument: Visual-performance tests and questionnaires
  magnitude: Multiple endpoint improvements versus placebo
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S5
  id: lutemax-effect-sleep
  conceptId: perception
  name: Sleep quality
  direction: Variable
  evidence: Human research
  description: Adult B.L.U.E. participants reported better sleep quality, while the Lutemax Kids trial found no significant sleep difference.
  population: Young adults and children in separate studies
  exposure: Exact-product Lutemax formulations
  instrument: Self-report sleep measures
  magnitude: Adult positive; pediatric null
  reportType: measured-assessment
  conflictingSourceIds:
    - S7
- sourceId: S4
  id: lutemax-effect-stress
  conceptId: perception
  name: Stress and cortisol
  direction: Decreased
  evidence: Human research
  description: One 59-person sponsor-linked adult program reported lower psychological stress and serum cortisol after 6 months, maintained or improved at 12 months.
  population: Healthy adults in one adult program
  exposure: Approximately 13 or 27 mg/day macular carotenoids
  instrument: Stress questionnaires and serum cortisol
  magnitude: Reported decrease; independent replication absent
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- sourceId: S3
  id: lutemax-outcome-mpod
  conceptId: macular-pigment-optical-density
  name: Macular pigment optical density
  direction: Increased
  evidence: Human research
  description: Exact-product dose-ranging and child trials repeatedly increased MPOD, with separation reported within weeks in some studies.
  population: Healthy adults and children in exact-product trials
  exposure: 6–24 mg/day study-specific formulations
  instrument: MPOD measurement
  magnitude: Positive biomarker signal; effect size varied
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S6
  id: lutemax-outcome-cognition
  conceptId: cognitive-performance
  name: Cognitive task performance
  direction: Increased
  evidence: Human research
  description: The adult BDNF/cognition report described improvements across several CNS Vital Signs domains, but likely reused the stress cohort and did not establish independent replication.
  population: Healthy adults in one sponsor-linked program
  exposure: Approximately 13 or 27 mg/day macular carotenoids
  instrument: CNS Vital Signs cognitive battery
  magnitude: Secondary domain signals; cohort overlap
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S7
  id: lutemax-outcome-child-mpod
  conceptId: macular-pigment-optical-density
  name: Child MPOD
  direction: Increased
  evidence: Human research
  description: Lutemax Kids increased MPOD by day 42, 90 and 180; the study's primary endpoint was the retinal biomarker.
  population: 60 children aged 5–12 years
  exposure: 10 mg lutein + 2 mg zeaxanthin isomers/day for 180 days
  instrument: MPOD measurement
  magnitude: Approximately +0.13 active versus −0.06 placebo at day 180
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S8
  id: lutemax-outcome-skin
  conceptId: skin-photoprotection
  name: Skin tone and erythema threshold
  direction: Increased
  evidence: Human research
  description: A 12-week Lutemax 2020 study reported improved skin tone, luminance, individual typological angle and minimal erythema dose.
  population: 46 adults completing the study
  exposure: 10 mg lutein + 2 mg zeaxanthin isomers/day
  instrument: Instrumental skin and erythema measures
  magnitude: Reported improvement; small sponsor-linked study
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Macular pigment filtering
  description: Lutein, RR-zeaxanthin and meso-zeaxanthin accumulate in retinal macular pigment and absorb short-wavelength light; this is a plausible mechanism for visual effects, not proof of disease protection.
  sourceId: S14
- title: Isomer-specific retinal distribution
  description: The three pigments have differing macular distributions, so total carotenoid dose does not identify the retinal exposure of each isomer.
  sourceId: S14
- title: Systemic biomarker hypotheses
  description: BDNF, cortisol and inflammatory marker changes were proposed as contributors to cognitive or stress findings, but mediation was not demonstrated.
  sourceId: S4
```

## Cautions

```yaml
- title: Exact-product boundary
  description: A Lutemax trademark does not guarantee the exact tested isomer ratio, dose, excipients or finished product.
  sourceId: S1
- title: Sponsor-linked evidence
  description: Core trials involved OmniActive product supply, funding, employee authorship, consultancy or patent ownership; independent replication is limited.
  sourceId: S3
- title: Child and pregnancy evidence limits
  description: The child trial was in healthy 5–12-year-olds; no exact-product pregnancy or lactation safety trial was identified.
  sourceId: S7
- title: Biomarker versus disease
  description: MPOD or serum carotenoid increases do not establish prevention or treatment of AMD, retinal disease, cognitive disease or screen injury.
  sourceId: S1
```

## Claims

```yaml
- id: lutemax-claim-mpod
  assertion: Lutemax 2020 raises macular pigment
  relation: evidence-boundary
  participants:
    - entityId: substance:lutemax
      role: intervention
    - entityId: tag:macular-pigment-optical-density
      role: outcome
  context: Exact-product human trials repeatedly report serum carotenoid and MPOD increases.
  sourceIds:
    - S3
    - S5
    - S7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Biomarker response does not establish disease prevention.
- id: lutemax-claim-visual
  assertion: Lutemax improves visual performance
  relation: evidence-boundary
  participants:
    - entityId: substance:lutemax
      role: intervention
    - entityId: tag:contrast-sensitivity
      role: outcome
  context: Small exact-product studies report visual-performance signals.
  sourceIds:
    - S5
    - S7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Results are not independent replications and do not establish improved acuity or disease modification.
- id: lutemax-claim-cognition
  assertion: Lutemax improves cognition
  relation: evidence-boundary
  participants:
    - entityId: substance:lutemax
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: Preliminary positive signals occur in one likely repeated adult cohort and one child trial, mostly as secondary outcomes.
  sourceIds:
    - S6
    - S7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No large independent long-term replication or clinical cognitive-disease endpoint.
- id: lutemax-claim-fda
  assertion: Lutemax is an FDA-approved treatment
  relation: evidence-boundary
  participants:
    - entityId: substance:lutemax
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Manufacturer pages describe food-ingredient/GRAS context rather than drug approval.
  sourceIds:
    - S1
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Patent or food-use status does not establish clinical efficacy.
```

## Interactions

```yaml
- id: interaction-lutemax-drugs
  name: Prescription medicines
  otherSlug: null
  summary: No controlled human Lutemax-specific drug-interaction study was identified.
  sourceId: S3
  context: Interaction status not assessed.
- id: interaction-lutemax-meal
  name: Food and formulation
  otherSlug: null
  summary: The tested products were taken with or after meals; dietary fat and matrix can modify xanthophyll exposure.
  sourceId: S3
  context: Pharmacokinetic modifier.
- id: interaction-lutemax-coingredients
  name: Finished-product co-ingredients
  otherSlug: null
  summary: Trials containing vitamins, minerals, omega-3s or other ingredients cannot attribute all outcomes to Lutemax alone.
  sourceId: S9
  context: Combination confounding.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Lutemax 2020: Lutein Extract for Eye & Brain Health"
  authors: OmniActive Health Technologies Ltd.
  year: 2026
  url: https://omniactives.com/product/lutemax2020/
  kind: manufacturer product page
  insight: Defines Lutemax 2020, its three-carotenoid identity, approximate 5:1 ratio, formats, portfolio variants, commercial claims, and FDA-notified-GRAS statement.
  limitation: Marketing source; does not independently validate composition, efficacy, or comparative bioavailability.
  funding: Manufacturer source; commercial product interest.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Commercial interest in the branded ingredient.
  conflictOfInterestStatus: declared
  disclosureUrl: https://omniactives.com/product/lutemax2020/
- id: S2
  title: Lutein and Zeaxanthin Supplements FAQs
  authors: Lutemax/OmniActive Health Technologies Ltd.
  year: 2026
  url: https://lutemax.com/faq/
  kind: manufacturer FAQ
  insight: Describes Lutemax 2020, Lutemax Kids, Brain, and Skinglo as marigold-derived formulations and gives manufacturer statements about dose, origin, supplement use, and pregnancy.
  limitation: Marketing/FAQ material; no controlled interaction or pregnancy evidence.
  funding: Manufacturer source; commercial product interest.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Commercial interest in the branded ingredient.
  conflictOfInterestStatus: declared
  disclosureUrl: https://lutemax.com/faq/
- id: S3
  title: "Bioavailability of lutein/zeaxanthin isomers and macular pigment optical density response to macular carotenoid supplementation: A randomized double blind placebo controlled study"
  authors: Vijaya Juturu, James P. Bowman, Nicole T. Stringham, James M. Stringham
  year: 2016
  url: https://doi.org/10.15761/NFO.1000132
  kind: primary human randomized controlled trial
  insight: Tested Lutemax 2020 at 6/1, 10/2, and 20/4 mg lutein/zeaxanthin-isomer doses for 12 weeks; reported serum, AUC, MPOD, composition, and tolerability findings.
  limitation: n=28, short duration, healthy young adults, limited clinical endpoints, and no independent replication.
  funding: not-assessed; product and placebo were supplied by OmniActive.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Vijaya Juturu was affiliated with OmniActive Health Technologies.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.15761/NFO.1000132
- id: S4
  title: Supplementation with macular carotenoids reduces psychological stress, serum cortisol, and sub-optimal symptoms of physical and emotional health in young adults
  authors: Nicole Tressa Stringham, Philip V. Holmes, James M. Stringham
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/28198205/
  kind: primary human randomized controlled trial
  insight: In 59 healthy young adults, 13- and 27-mg/day total macular-carotenoid groups improved stress, cortisol, and emotional/physical-health measures over 6–12 months.
  limitation: Small healthy cohort, questionnaire-heavy outcomes, limited independent replication, and likely overlap with the 2019 cognition paper.
  funding: OmniActive Health Technologies Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The article reports no conflict of interest.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/28198205/
- id: S5
  title: Macular Carotenoid Supplementation Improves Visual Performance, Sleep Quality, and Adverse Physical Symptoms in Those with High Screen Time Exposure
  authors: James M. Stringham, Nicole T. Stringham, Kevin J. O'Brien
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28661438/
  kind: primary human randomized controlled trial
  insight: In 48 high-screen-time young adults, a 24-mg Lutemax 2020 formulation improved MPOD, visual measures, sleep quality, headache frequency, eye strain, and eye fatigue.
  limitation: n=48, college-age sample, self-reported sleep and symptoms, no cognitive endpoint, and no independent replication.
  funding: OmniActive Health Technologies Inc.; OmniActive supplied active capsules and placebos.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: James Stringham consulted for the funding sponsor.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/28661438/
- id: S6
  title: Effects of macular xanthophyll supplementation on brain-derived neurotrophic factor, pro-inflammatory cytokines, and cognitive performance
  authors: Nicole T. Stringham, Philip V. Holmes, James M. Stringham
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31425700/
  kind: primary human randomized controlled trial
  insight: Reported 6-month improvements in BDNF, MPOD, serum macular xanthophylls, antioxidant capacity, IL-1β, and multiple CNS Vital Signs cognitive outcomes.
  limitation: The public abstract does not fully resolve product lot, endpoint hierarchy, or cohort independence; likely overlaps with the adult stress paper.
  funding: not-assessed in the PubMed abstract; associated registry/program was OmniActive-sponsored.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/31425700/
- id: S7
  title: "Lutein and Zeaxanthin Supplementation Improves Dynamic Visual and Cognitive Performance in Children: A Randomized, Double-Blind, Parallel, Placebo-Controlled Study"
  authors: Rajesh Parekh, Billy R. Hammond Jr., Divya Chandradhara
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10960892/
  kind: primary human randomized controlled trial
  insight: Tested Lutemax Kids gummies containing 10 mg lutein plus 2 mg zeaxanthin isomers in 60 children for 180 days; MPOD was primary and cognition, CFF, eye strain, BDNF, serum carotenoids, and sleep were secondary.
  limitation: n=60, single center, healthy children, 2:1 allocation, sponsor involvement, and no sleep benefit.
  funding: OmniActive Health Technologies Ltd.; product development and open-access publication were supported by OmniActive.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Billy Hammond supported as a consultant; Divya Chandradhara was an employee of the contracted CRO; Rajesh Parekh was affiliated with the study site.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10960892/
- id: S8
  title: "Overall skin tone and skin-lightening-improving effects with oral supplementation of lutein and zeaxanthin isomers: a double-blind, placebo-controlled clinical trial"
  authors: Vijaya Juturu, James P. Bowman, Jayant Deshpande
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27785083/
  kind: primary human randomized controlled trial
  insight: Tested Lutemax 2020 at 10 mg lutein plus 2 mg zeaxanthin isomers for 12 weeks and reported improved skin tone, luminance, individual typological angle, and minimal erythemal dose.
  limitation: 50 recruited/46 completed, short duration, narrow skin outcomes, and no visual, cognitive, or sleep outcomes.
  funding: not-assessed; product supplied by OmniActive.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Vijaya Juturu and Jayant Deshpande were OmniActive employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/27785083/
- id: S9
  title: Effect of an antioxidant supplement containing high dose lutein and zeaxanthin on macular pigment and skin carotenoid levels
  authors: Akihito Obana, Yasuo Gohto, Ryo Nakazawa, Toshiyuki Moriyama, Wolfgang Gellermann, Paul S. Bernstein
  year: 2020
  url: https://doi.org/10.1038/s41598-020-66962-2
  kind: primary human open-label single-arm study
  insight: Used Lutemax 2020 material in a 20-mg lutein/4-mg zeaxanthin plus antioxidant formula and found increased MPOD volume and skin carotenoids.
  limitation: n=16, no placebo, open-label, and multiple active ingredients prevent attribution to Lutemax alone.
  funding: Product material supplied by OmniActive; study funding not separately assessed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: not-assessed
  disclosureUrl: https://doi.org/10.1038/s41598-020-66962-2
- id: S10
  title: "Safety assessment of lutein and zeaxanthin (Lutemax 2020): Subchronic toxicity and mutagenicity studies"
  authors: R. Ravikrishnan, Shraddha Rusia, G. Ilamurugan, Ulhas Salunkhe, Jayant Deshpande, J. Shankaranarayanan, M. L. Shankaranarayana, Madhu G. Soni
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21872637/
  kind: primary animal toxicology study
  insight: Reported no lethality at 2,000 mg/kg acute exposure, no treatment-related toxicity at up to 400 mg/kg/day for 90 days, and negative Salmonella mutagenicity.
  limitation: Animal and bacterial data do not establish human safety, efficacy, or medication interactions.
  funding: OmniActive supplied standardized Lutemax 2020 material.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/21872637/
- id: S11
  title: Effect of Lutemax 2020 on visual and brain health markers
  authors: OmniActive Health Technologies Inc.; University of Georgia study team
  year: 2016
  url: https://www.isrctn.com/pdf/ISRCTN17604865
  kind: registered clinical-trial protocol
  insight: Registers a double-blind, placebo-controlled, one-year study of Lutemax 2020 in healthy 18–25-year-olds with MPOD, contrast, glare, photostress, cognitive, mood, stress, and health outcomes.
  limitation: Registry record is not a peer-reviewed outcome report; dose descriptions differ from some publications.
  funding: OmniActive Health Technologies Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: not stated in registry
  disclosureUrl: https://www.isrctn.com/pdf/ISRCTN17604865
- id: S12
  title: Effect of Lutemax 2020 on blue light and visual health markers
  authors: OmniActive Health Technologies Inc.; University of Georgia study team
  year: 2015
  url: https://www.isrctn.com/pdf/ISRCTN16156382
  kind: registered clinical-trial protocol
  insight: Registers a six-month study using 20 mg lutein plus 4 mg zeaxanthin isomers with visual primary outcomes and stress, health, cognitive, and biomarker secondary outcomes.
  limitation: Registry record does not itself establish published efficacy results and may not map cleanly to every later report.
  funding: OmniActive Health Technologies Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: not stated in registry
  disclosureUrl: https://www.isrctn.com/pdf/ISRCTN16156382
- id: S13
  title: Method for stress management and overall health status improvement and compositions used therein
  authors: OmniActive Health Technologies Limited
  year: 2020
  url: https://patents.google.com/patent/US10583095B2/en
  kind: patent
  insight: Claims macular-carotenoid compositions containing lutein, RR-zeaxanthin, meso-zeaxanthin, excipients, and stress/MPOD/cortisol-related uses.
  limitation: Patent claims are not randomized clinical evidence and may include prophetic or broad embodiments not identical to commercial lots.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Patent assignee has direct commercial interest in the composition and claimed uses.
  conflictOfInterestStatus: declared
  disclosureUrl: https://patents.google.com/patent/US10583095B2/en
- id: S14
  title: Lutein and Zeaxanthin Isomers in Eye Health and Disease
  authors: Julie Mares
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27431371/
  kind: peer-reviewed narrative review
  insight: Provides general retinal biology, macular distribution, disease context, and limitations of extrapolating carotenoid biomarkers to clinical outcomes.
  limitation: Not specific to Lutemax 2020 and not a product trial.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Branded carotenoid ingredient
  status: Manufacturer food/GRAS and patent statements are not FDA approval of a disease treatment; product-specific legal status requires jurisdiction review.
  sourceUrl: https://omniactives.com/product/lutemax2020/
  asOf: 2026-10-10
```
