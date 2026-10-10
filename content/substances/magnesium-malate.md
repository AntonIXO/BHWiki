---
slug: magnesium-malate
name: Magnesium malate
subtitle: A magnesium salt with mixed-formulation fibromyalgia and status evidence.
aliases:
- magnesium malate
- magnesium 2-hydroxybutanedioate
formula: C4H4MgO5
molecularWeight: 156.38 g/mol
pubchemCid: 164748
smiles: C(C(C(=O)[O-])O)C(=O)[O-].[Mg+2]
category: Magnesium salt
tags:
- magnesium-homeostasis
accent: '#8090a0'
reviewedAt: '2026-10-11'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No analyte-specific human terminal half-life for magnesium malate was established;
    available studies measured magnesium status or animal AUC.
  sourceId: mmm-weiss
  observationId: magnesium-malate-pk-unestablished
kinetics:
  onset: Not established.
  peak: Serum and red-cell magnesium changed in a product-specific multinutrient study.
  duration: Fibromyalgia reports used 4–8 weeks; no validated salt-specific duration.
  bioavailability: An unpublished EFSA-reviewed crossover reported comparable availability
    of di-magnesium malate to permitted sources but had identity and data gaps.
  metabolism: Magnesium and malate handling are not represented by a single validated
    elimination curve.
  sourceId: mmm-efsa
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

Magnesium malate is a 1:1 magnesium salt with about 15.5% theoretical elemental magnesium. Human fibromyalgia studies mostly used magnesium plus malic acid or multinutrient di-magnesium-malate products, so they do not establish isolated-salt efficacy. Absorption and safety remain formulation-specific. [mmm-pubchem] [mmm-russell] [mmm-ferreira]

## Description

Retail names include mono-, hydrated and di-magnesium malate materials. The published Super Malic trial used a combination product, and the timed-release study added vitamins. Compound mass therefore cannot be treated as elemental magnesium mass. [mmm-efsa] [mmm-weiss]

## Evidence note

The page separates combination-product outcomes from isolated magnesium malate claims. Evidence is small, partly uncontrolled and partly industry-linked; no analyte-specific human terminal half-life was established. [mmm-russell] [mmm-ferreira] [mmm-weiss]

## Doses

```yaml
- label: Preliminary fibromyalgia report
  amount: 300–600 mg magnesium plus 1,200–2,400 mg malate/day
  quantity: 300
  quantityMax: 600
  unit: mg/day
  ingredient: Magnesium plus malic acid
  formulation: Formulation not adequately characterized
  route: Oral
  frequency: Daily
  duration: Approximately 8 weeks
  population: 15 people with fibromyalgia
  purpose: Research exposure
  sourceCategory: research
  note: Not an isolated magnesium-malate salt trial; elemental basis unclear.
  sourceId: mmm-abraham
- label: Super Malic blinded phase
  amount: 3 tablets twice daily; reported 50 mg magnesium and 200 mg malic acid/tablet
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: Super Malic combination
  formulation: Magnesium hydroxide plus malic acid; publication descriptions differ
  route: Oral
  frequency: Twice daily
  duration: 4 weeks
  population: Adults with fibromyalgia
  purpose: Research exposure
  sourceCategory: research
  note: Elemental amount cannot be recovered confidently; blinded phase had no clear
    treatment effect.
  sourceId: mmm-russell
- label: Super Malic open-label escalation
  amount: Up to 6 tablets twice daily; reported 600 mg magnesium plus 2,400 mg malic
    acid/day
  quantity: 600
  quantityMax: null
  unit: mg/day
  ingredient: Super Malic combination
  formulation: Magnesium hydroxide plus malic acid
  route: Oral
  frequency: Twice daily
  duration: Uncontrolled extension
  population: Adults with fibromyalgia
  purpose: Research exposure
  sourceCategory: research
  note: Dose escalation was uncontrolled and not isolated magnesium malate.
  sourceId: mmm-russell
- label: Timed-release di-magnesium malate study
  amount: 500 mg/day elemental magnesium
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Di-magnesium malate
  formulation: Timed-release product with vitamin C, B6, folate and B12
  route: Oral
  frequency: 4 tablets/day
  duration: 30–90 days
  population: Standard adult clinical population
  purpose: Research exposure
  sourceCategory: research
  note: Multinutrient product; attribution to malate alone is not possible.
  sourceId: mmm-weiss
- label: EFSA crossover absorption study
  amount: 150 mg magnesium bolus
  quantity: 150
  quantityMax: null
  unit: mg
  ingredient: Di-magnesium malate and comparator supplements
  formulation: Applicant-submitted tested supplements
  route: Oral
  frequency: Single dose
  duration: Single crossover session
  population: 14 participants
  purpose: Research exposure
  sourceCategory: research
  note: Unpublished study reviewed by EFSA; identity and safety data had gaps.
  sourceId: mmm-efsa
```

## Pharmacokinetics

```yaml
- id: magnesium-malate-pk-unestablished
  analyte: Magnesium ion
  route: Oral
  formulation: Magnesium malate or di-magnesium-malate products
  population: Humans; no analyte-specific terminal half-life study located
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Human studies measured serum, red-cell or urinary magnesium; no valid magnesium-malate
    terminal half-life was established. Animal AUC findings are not half-life data.
  sourceId: mmm-weiss
  modelEligible: false
```

## Modifiers

```yaml
- label: Formulation identity
  effect: Variable elemental dose and coingredients
  detail: Mono-, hydrated and di-magnesium malate products are not interchangeable
    by compound mass; the Super Malic studies used a combination product.
  sourceId: mmm-efsa
  observationId: magnesium-malate-pk-unestablished
  factorType: other
  direction: variable
- label: Attribution
  effect: Combination products confound clinical effects
  detail: Magnesium, malic acid, placebo response and added vitamins cannot be separated
    in the reported interventions.
  sourceId: mmm-weiss
  observationId: magnesium-malate-pk-unestablished
  factorType: other
  direction: variable
- label: Renal function
  effect: Reduced clearance increases magnesium risk
  detail: Magnesium-class renal warnings apply, but isolated malate-specific safety
    data are limited.
  sourceId: mmm-ods
  observationId: magnesium-malate-pk-unestablished
  factorType: other
  direction: slower
```

## Effects

```yaml
- conceptId: perception
  name: Fibromyalgia pain and tenderness
  direction: Variable
  evidence: Limited research
  description: Small uncontrolled reports suggested improvement, while the blinded
    Super Malic phase did not show a clear treatment effect.
  sourceId: mmm-russell
  population: Adults with fibromyalgia
  exposure: Magnesium/malic-acid combination for 4 weeks plus uncontrolled escalation
  instrument: Tender-point and pain scores
  magnitude: null
  reportType: measured-assessment
- conceptId: perception
  name: Fatigue
  direction: Variable
  evidence: Limited research
  description: A timed-release multinutrient di-magnesium-malate product reported
    symptom and status changes, but attribution to malate is unresolved.
  sourceId: mmm-weiss
  population: Adults in product study
  exposure: 500 mg/day elemental magnesium as di-magnesium malate plus vitamins
  instrument: Questionnaire and symptom reports
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- conceptId: fatigue-severity
  name: Fibromyalgia fatigue
  direction: Variable
  evidence: Limited research
  description: The combination trial evidence is small and inconsistent; later uncontrolled
    or multinutrient findings do not establish isolated magnesium-malate efficacy.
  sourceId: mmm-ferreira
  population: Adults with fibromyalgia
  exposure: Magnesium plus malic acid combination
  instrument: Fatigue and depressive-symptom measures
  magnitude: Little or no difference in evidence synthesis
  reportType: measured-assessment
- conceptId: memory
  name: Serum and red-cell magnesium status
  direction: Increased
  evidence: Limited research
  description: The timed-release multinutrient study reported higher serum and red-cell
    magnesium; this is a status outcome, not proof of energy or pain benefit.
  sourceId: mmm-weiss
  population: Standard adult clinical population
  exposure: Di-magnesium malate plus vitamins
  instrument: Serum and red-cell magnesium
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Elemental magnesium contribution
  description: The magnesium ion is the mineral component measured in supplementation
    studies; malate changes salt identity and mass.
  sourceId: mmm-ods
- title: Malate metabolic rationale
  description: Malate participates in cellular metabolism, but this biochemical rationale
    does not establish that oral magnesium malate increases energy or reduces pain.
  sourceId: mmm-abraham
- title: Relative absorption signal
  description: A rat comparison and an unpublished human crossover suggest product-specific
    absorption differences, but neither establishes a human clinical advantage.
  sourceId: mmm-efsa
```

## Cautions

```yaml
- title: Combination-product attribution
  description: Super Malic and timed-release products include malic acid, magnesium
    hydroxide or vitamins; observed outcomes cannot be assigned to isolated magnesium
    malate.
  sourceId: mmm-russell
- title: Renal impairment
  description: General magnesium toxicity risk rises with reduced kidney function;
    isolated malate-specific safety data are limited.
  sourceId: mmm-ods
- title: Evidence quality
  description: Fibromyalgia evidence is small, short, mixed-form and partly manufacturer-linked;
    no robust isolated-salt efficacy trial was identified.
  sourceId: mmm-ferreira
- title: Product characterization
  description: EFSA found the proposed di-magnesium-malate material insufficiently
    characterized to establish that it differed from authorized magnesium malate.
  sourceId: mmm-efsa
```

## Claims

```yaml
- id: mmm-fibromyalgia
  assertion: Magnesium malate treats fibromyalgia.
  relation: clinical-efficacy
  participants:
  - entityId: substance:magnesium-malate
    role: intervention
  - entityId: tag:fatigue-severity
    role: outcome-domain
  context: Human evidence mainly studied magnesium plus malic-acid combinations, not
    isolated magnesium malate.
  sourceIds:
  - mmm-russell
  - mmm-ferreira
  conflictingSourceIds: &id001 []
  assessment: not-formally-assessed
  limitation: No isolated, adequately controlled efficacy trial establishes treatment
    benefit.
- id: mmm-identity
  assertion: Di-magnesium malate product mass is interchangeable with elemental magnesium
    mass.
  relation: dose-interpretation
  participants:
  - entityId: substance:magnesium-malate
    role: salt
  - entityId: tag:magnesium-homeostasis
    role: mineral-system
  context: Salt stoichiometry, hydration and product composition affect elemental-magnesium
    interpretation.
  sourceIds:
  - mmm-pubchem
  - mmm-efsa
  conflictingSourceIds: *id001
  assessment: not-formally-assessed
  limitation: Product assay and label declarations are required.
- id: mmm-energy
  assertion: Magnesium malate increases energy through malate metabolism.
  relation: mechanistic-rationale
  participants:
  - entityId: substance:magnesium-malate
    role: compound
  - entityId: tag:magnesium-homeostasis
    role: mineral-system
  context: Metabolic participation is a mechanistic rationale, not a demonstrated
    clinical outcome.
  sourceIds:
  - mmm-abraham
  conflictingSourceIds: *id001
  assessment: not-formally-assessed
  limitation: Human efficacy remains unestablished.
```

## Interactions

```yaml
- id: mmm-antibiotics
  name: Magnesium-class oral antibiotic interaction
  otherSlug: null
  summary: Magnesium can reduce absorption of susceptible oral antibiotics; follow
    the antibiotic label.
  sourceId: mmm-ods
  context: Class-level interaction; no malate-specific DDI trial.
- id: mmm-bisphosphonates
  name: Oral bisphosphonates
  otherSlug: null
  summary: Magnesium can reduce absorption of oral bisphosphonates when coadministered.
  sourceId: mmm-ods
  context: Class-level interaction; no malate-specific DDI trial.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: mmm-pubchem
  title: Magnesium Malate | C4H4MgO5 | CID 164748
  authors: NCBI PubChem
  year: 2025
  url: https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-malate
  kind: Chemical identity database
  insight: Formula C4H4MgO5, molecular weight 156.38 g/mol, CAS 869-06-7 and 1:1 identity.
  limitation: Identity record, not product assay or clinical trial.
  funding: Public NCBI/NIH infrastructure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: mmm-fda
  title: MAGNESIUM MALATE
  authors: U.S. FDA Global Substance Registration System
  year: 2026
  url: https://precision.fda.gov/uniisearch/srs/unii/LA9X9UJA2Z
  kind: Regulatory substance identity record
  insight: FDA UNII record and synonym mapping.
  limitation: A UNII does not imply regulatory review or approval.
  funding: U.S. federal public program.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://precision.fda.gov/uniisearch/srs/unii/LA9X9UJA2Z
- id: mmm-ods
  title: Magnesium - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/magnesium-healthprofessional/
  kind: Official nutrient monograph
  insight: Elemental-magnesium labeling, adult supplemental upper limit, toxicity,
    renal risk and interactions.
  limitation: General magnesium evidence, not malate-specific efficacy.
  funding: NIH Office of Dietary Supplements.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/
- id: mmm-abraham
  title: 'Management of Fibromyalgia: Rationale for the Use of Magnesium and Malic
    Acid'
  authors: Guy E. Abraham; Jorge D. Flechas
  year: 1992
  url: https://doi.org/10.3109/13590849208997961
  kind: Preliminary open-label report
  insight: Fifteen people received reported magnesium and malate doses; tender-point
    scores declined during about eight weeks.
  limitation: Uncontrolled, small, poorly characterized formulation and not isolated
    magnesium malate.
  funding: Not clearly stated; Optimox affiliation reported.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Authors were affiliated with Optimox; formal statement unavailable.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.3109/13590849208997961
  doi: 10.3109/13590849208997961
- id: mmm-russell
  title: 'Treatment of fibromyalgia syndrome with Super Malic: randomized, double
    blind, placebo controlled, crossover pilot'
  authors: I. J. Russell; J. E. Michalek; J. D. Flechas; G. E. Abraham
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/8587088/
  kind: Randomized crossover pilot with open-label extension
  insight: Blinded combination phase showed no clear treatment effect; uncontrolled
    dose escalation was associated with lower pain and tenderness scores.
  limitation: Small combination product, manufacturer involvement, uncontrolled extension
    and attrition.
  funding: Grant from Optimox; manufacturer provided placebo.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: G. E. Abraham was Medical Director of Optimox; manufacturer
    involvement disclosed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/8587088/
  pmid: '8587088'
- id: mmm-ferreira
  title: Magnesium and malic acid supplement for fibromyalgia
  authors: Isadora Ferreira; Ángela Ortigoza; Philippa Moore
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31150373/
  kind: Evidence synthesis
  insight: Identified one randomized trial and concluded little or no difference in
    fibromyalgia pain or depressive symptoms.
  limitation: Does not isolate the salt or either ingredient.
  funding: Epistemonikos Foundation evidence-synthesis project.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no relevant interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/31150373/
  pmid: '31150373'
- id: mmm-efsa
  title: Evaluation of di-magnesium malate as a novel food ingredient and magnesium
    source
  authors: EFSA Panel on Food Additives and Nutrient Sources added to Food
  year: 2018
  url: https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5292
  kind: Regulatory scientific opinion
  insight: Reviewed an unpublished 14-person crossover absorption study and identified
    identity and safety-data gaps.
  limitation: Applicant-submitted unpublished data; distinction from magnesium malate
    not adequately demonstrated.
  funding: EFSA assessment of applicant dossier.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Applicant commercial interest inherent; panel declarations
    not summarized.
  conflictOfInterestStatus: not-assessed
  doi: 10.2903/j.efsa.2018.5292
- id: mmm-weiss
  title: 'Scottsdale Magnesium Study: Absorption, Cellular Uptake, and Clinical Effectiveness
    of a Timed-Release Magnesium Supplement'
  authors: Decker Weiss; Debra K. Brunk; Dennis A. Goodman
  year: 2018
  url: https://doi.org/10.1080/07315724.2017.1398686
  kind: Human intervention study
  insight: Timed-release di-magnesium-malate plus vitamins increased serum and red-cell
    magnesium and improved a status questionnaire over 30–90 days.
  limitation: Product-specific multinutrient formulation, incomplete control and disclosed
    consultant/advisory-board ties.
  funding: Artis International; Jigsaw Health supplied supplements.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Three authors were consultants or advisory-board members.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1080/07315724.2017.1398686
  doi: 10.1080/07315724.2017.1398686
- id: mmm-rat
  title: Timeline (Bioavailability) of Magnesium Compounds in Hours
  authors: Nazan Uysal; Servet Kizildag; Zeynep Yuce; et al.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/29679349/
  kind: Animal pharmacokinetic comparison
  insight: In rats, magnesium malate produced the highest AUC among tested preparations.
  limitation: Single-dose rat study; no human absorption or efficacy inference.
  funding: Not stated.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: mmm-claims
  title: Label Claims for Conventional Foods and Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2024
  url: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements
  kind: U.S. regulatory guidance
  insight: Distinguishes health and structure/function claims and disease-claim restrictions.
  limitation: U.S.-specific regulatory information, not clinical efficacy.
  funding: U.S. federal program.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None stated.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary supplement structure/function claims
  status: Magnesium-malate supplement claims must follow FDA structure/function rules
    and cannot be presented as disease treatment without drug regulation.
  sourceUrl: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements
  asOf: '2026-10-11'
- jurisdiction: United States
  activity: Substance identity registration
  status: An FDA UNII identifies magnesium malate but does not imply FDA approval
    for safety or effectiveness.
  sourceUrl: https://precision.fda.gov/uniisearch/srs/unii/LA9X9UJA2Z
  asOf: '2026-10-11'
```
