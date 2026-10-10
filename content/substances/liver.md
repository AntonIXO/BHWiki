---
slug: liver
name: Liver
subtitle: Animal liver as food and desiccated tissue supplement
aliases:
  - Beef liver
  - Calf liver
  - Chicken liver
  - Desiccated liver
  - Liver powder
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: food
tags: []
accent: "#7A3434"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established and not meaningful for liver as a food mixture
  low: null
  high: null
  context: Vitamin A, B12, folate, iron, copper and zinc have nutrient-specific kinetics; no unitary liver half-life exists.
  sourceId: ref-fdc-documentation
  observationId: liver-pk-1
kinetics:
  onset: Not established for liver as a whole-food mixture.
  peak: Nutrient-specific and preparation-specific; no unitary Tmax.
  duration: Nutrient stores and biomarkers have different time courses.
  bioavailability: Depends on nutrient form, species, cooking, meal matrix and individual status.
  metabolism: Liver tissue has no single parent compound or common metabolic pathway.
  sourceId: ref-fdc-documentation
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

Animal liver is a heterogeneous food or desiccated tissue mixture, not a single active molecule. Nutrient content varies by species, serving and processing; vitamin A and copper can be high. Historical pernicious-anemia diets and modern liver-containing foods are not equivalent to a standardized liver supplement, and no evidence establishes liver for energy, cognition, detoxification or liver-disease treatment.

## Description

Whole beef, calf and chicken liver, cooked or raw, desiccated powder/capsules and multi-ingredient organ products are separated. Nutrient-specific absorption and safety must be interpreted from the actual food or batch assay.

## Evidence note

Liver has nutrient-density and food-safety implications rather than a unitary PK profile. Historical and modern intervention evidence is formulation-specific, with mixed anemia outcomes and clear raw poultry-liver infection risk.

## Doses

```yaml
- sourceCategory: research
  label: Historical pernicious-anemia diet
  amount: 120–240 g/day cooked calf or beef liver
  quantity: 120
  quantityMax: 240
  unit: g/day
  ingredient: Animal liver
  formulation: Cooked liver within a special diet
  route: oral
  frequency: daily
  duration: Historical treatment period
  population: Patients with pernicious anemia
  purpose: Historical treatment observation
  note: Uncontrolled multi-food diet; liver-specific causal effect cannot be isolated.
  sourceId: ref-minot-murphy-1926
- sourceCategory: research
  label: Chicken-liver sausage study
  amount: Study-specific serving; exact liver mass not verified
  quantity: null
  quantityMax: null
  unit: serving
  ingredient: Chicken liver
  formulation: Chicken-liver sausage
  route: oral
  frequency: Study-specific
  duration: 4 weeks
  population: Anemic adolescent girls
  purpose: Assess serum iron and hemoglobin
  note: Small formulation-specific study; do not generalize to liver capsules.
  sourceId: ref-zuraida-2025
- sourceCategory: research
  label: SISTIK pregnancy cluster trial
  amount: Nominal 75 g/day cracker; actual median approximately 103 g/week
  quantity: 75
  quantityMax: null
  unit: g/day intended product
  ingredient: Chicken liver and eggshell cracker
  formulation: Multi-ingredient fortified cracker
  route: oral
  frequency: Intended daily; adherence lower
  duration: Pregnancy through 5 months postpartum
  population: Pregnant women and mother–infant dyads in Indonesian villages
  purpose: Assess growth and micronutrient outcomes
  note: The product was not 75 g/day pure chicken liver; the control contained fortified wheat flour.
  sourceId: ref-sistik-2025
- sourceCategory: research
  label: Beef-liver infant study
  amount: Study-specific food exposure
  quantity: null
  quantityMax: null
  unit: food serving
  ingredient: Beef liver
  formulation: Liver-containing complementary food
  route: oral
  frequency: Study-specific
  duration: Study-specific
  population: Infants with anemia
  purpose: Assess anemia-related outcomes
  note: Thesis/report evidence; exact standardized liver dose not established.
  sourceId: ref-franca-2025
- sourceCategory: research
  label: Whole Package registry
  amount: Product-specific; not liver-only
  quantity: null
  quantityMax: null
  unit: product serving
  ingredient: Beef liver plus testicle and whole-blood extract
  formulation: Heart & Soil Whole Package
  route: oral
  frequency: Study-specific
  duration: Open-label before/after study
  population: Adult men
  purpose: Assess testosterone-related blood tests and aging-male symptoms
  note: Combination product; registry has no liver-specific efficacy result.
  sourceId: ref-ctgov-whole-package-2026
```

## Pharmacokinetics

```yaml
- sourceId: ref-fdc-documentation
  id: liver-pk-1
  analyte: Nutrient-specific analytes
  route: oral
  formulation: Whole liver or desiccated liver mixture
  population: Food exposure
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Liver contains multiple nutrients with different absorption, transport, storage and clearance; a unitary half-life is not scientifically meaningful.
  modelEligible: false
- sourceId: ref-ods-b12
  id: liver-pk-b12
  analyte: Vitamin B12
  route: oral
  formulation: Food-bound cobalamin in liver
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Food-bound B12 requires intrinsic-factor-dependent absorption; this is nutrient handling, not liver-compound PK.
  modelEligible: false
- sourceId: ref-ods-iron
  id: liver-pk-iron
  analyte: Iron
  route: oral
  formulation: Heme and non-heme iron in liver tissue
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Absorption depends on iron status and meal matrix; total food iron is not equivalent to absorbed heme iron.
  modelEligible: false
```

## Modifiers

```yaml
- label: Species and preparation
  effect: Nutrient content varies materially
  detail: Beef, calf and chicken liver, cooking and desiccation produce different retinol, iron, copper and B12 profiles.
  sourceId: ref-fdc-documentation
  observationId: liver-pk-1
  factorType: other
  direction: variable
- label: Meal matrix and nutrient status
  effect: Absorption is nutrient-specific
  detail: Iron status and meal composition affect iron absorption; intrinsic factor governs B12 uptake.
  sourceId: ref-ods-iron
  observationId: liver-pk-iron
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- sourceId: ref-minot-murphy-1926
  id: liver-outcome-pernicious-anemia
  conceptId: red-blood-cell-count
  name: Historical pernicious-anemia response
  direction: Increased
  evidence: Human research
  description: A 1926 special diet containing 120–240 g/day liver was associated with increased red-cell counts in pernicious anemia, but the intervention contained multiple foods and had no randomized concurrent control.
  population: Patients with pernicious anemia
  exposure: Cooked liver within a special diet
  instrument: Red-blood-cell count
  magnitude: Historical association; liver-specific effect unknown
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-zuraida-2025
  id: liver-outcome-serum-iron
  conceptId: serum-iron
  name: Serum iron
  direction: Increased
  evidence: Human research
  description: A small chicken-liver sausage study reported improved serum iron but no significant hemoglobin advantage over control.
  population: Anemic adolescent girls
  exposure: Chicken-liver sausage for 4 weeks
  instrument: Serum iron and hemoglobin
  magnitude: Serum iron signal; hemoglobin comparison not significant
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-sistik-2025
  id: liver-outcome-sistik-hgb
  conceptId: hemoglobin-concentration
  name: Pregnancy hemoglobin
  direction: Variable
  evidence: Human research
  description: The SISTIK cluster trial found no significant growth or anemia benefit from a chicken-liver/eggshell cracker versus a fortified wheat-cracker control; actual adherence was low and both groups used supplements.
  population: Indonesian pregnant women and mother–infant dyads
  exposure: Nominal 75 g/day multi-ingredient cracker; actual median approximately 103 g/week
  instrument: Maternal hemoglobin and anemia prevalence
  magnitude: Late-pregnancy Hb approximately 12.0 versus 12.3 g/dL; anemia 11.9% versus 11.3%
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-franca-2025
  id: liver-outcome-infant-anemia
  conceptId: hemoglobin-concentration
  name: Infant anemia
  direction: Variable
  evidence: Human research
  description: A beef-liver infant study is formulation- and report-specific; standardized dose and independently verified effect estimates were not available in the inspected record.
  population: Infants with anemia
  exposure: Liver-containing complementary food
  instrument: Hemoglobin
  magnitude: Evidence not sufficiently documented for a precise effect estimate
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-ctgov-whole-package-2026
  id: liver-outcome-whole-package
  conceptId: cognitive-performance
  name: Whole Package registry outcomes
  direction: Variable
  evidence: Limited research
  description: NCT07256639 studies a combination of beef liver, testicle and whole-blood extract in adult men; it is open-label and has no posted outcome results, so no liver-specific efficacy claim can be drawn.
  population: Adult men in an estimated 100-person registry
  exposure: Heart & Soil Whole Package combination
  instrument: Testosterone-related blood tests and Aging Male Symptoms scale
  magnitude: Results not posted
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Nutrient density
  description: Liver supplies preformed vitamin A, B12, folate, iron, copper, zinc and protein; each nutrient has separate absorption and physiological roles.
  sourceId: ref-fdc-documentation
- title: Nutrient-specific storage and handling
  description: Retinol, cobalamin, iron and copper are stored or transported differently, so their presence does not create a unitary liver pharmacology.
  sourceId: ref-ods-b12
```

## Cautions

```yaml
- title: Preformed vitamin A
  description: A typical 3-oz beef-liver serving can exceed the adult UL of 3,000 μg RAE/day; pregnancy guidance advises avoiding liver and liver products because of retinol exposure.
  sourceId: ref-ods-pregnancy
- title: Copper burden
  description: Beef liver can exceed the adult copper UL in one serving; people with Wilson disease are advised to limit high-copper foods including liver.
  sourceId: ref-ods-copper
- title: Iron overload
  description: Liver contributes iron but food-composition iron is not absorbed iron; caution is appropriate in hereditary hemochromatosis and other iron-loading disorders.
  sourceId: ref-ods-iron
- title: Raw or undercooked poultry liver
  description: Human outbreak investigations link raw or lightly cooked chicken liver or pâté to Campylobacter and Salmonella; validated thorough cooking is required.
  sourceId: ref-tahvonen-kumpulainen-1994
- title: Desiccated product quality
  description: Drying or freeze-drying does not by itself prove pathogen-kill validation; batch assays for retinol, copper, iron, contaminants and microbiology are needed.
  sourceId: ref-csiro-desiccated-2018
```

## Claims

```yaml
- id: liver-claim-anemia
  assertion: Liver is a standardized treatment for anemia
  relation: evidence-boundary
  participants:
    - entityId: substance:liver
      role: food exposure
    - entityId: tag:hemoglobin-concentration
      role: outcome
  context: Historical and modern liver-containing interventions differ in species, formulation, adherence and co-ingredients; modern hemoglobin results are mixed.
  sourceIds:
    - ref-minot-murphy-1926
    - ref-sistik-2025
    - ref-zuraida-2025
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Historical special diets and mixed foods cannot establish a liver-only dose or mechanism.
- id: liver-claim-detox
  assertion: Liver food detoxifies or treats liver disease
  relation: evidence-boundary
  participants:
    - entityId: substance:liver
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: No qualifying direct human evidence established liver food or desiccated liver for detoxification or liver-disease treatment.
  sourceIds:
    - ref-fdc-documentation
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Nutrient content is not evidence of treatment efficacy.
- id: liver-claim-energy
  assertion: Desiccated liver reliably improves energy, cognition or recovery
  relation: evidence-boundary
  participants:
    - entityId: substance:liver
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: No persuasive direct controlled evidence with a standardized liver-only product established these outcomes.
  sourceIds:
    - ref-ctgov-whole-package-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Combination products and unposted registries cannot support the claim.
```

## Interactions

```yaml
- id: interaction-liver-vitamin-a
  name: Concurrent retinol sources
  otherSlug: null
  summary: Liver and retinol-containing supplements contribute additively to total preformed vitamin A, especially relevant in pregnancy.
  sourceId: ref-ods-pregnancy
  context: Nutrient total-exposure interaction.
- id: interaction-liver-copper
  name: Concurrent high-copper sources
  otherSlug: null
  summary: Liver, copper supplements and other high-copper foods can increase total copper exposure, especially in Wilson disease.
  sourceId: ref-ods-copper
  context: Nutrient total-exposure interaction.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref-minot-murphy-1926
  title: TREATMENT OF PERNICIOUS ANEMIA BY A SPECIAL DIET
  authors: George R. Minot; William P. Murphy
  year: 1926
  url: https://jamanetwork.com/journals/jama/article-abstract/242280
  kind: primary clinical case series
  insight: Forty-five patients with pernicious anemia received a special diet including 120–240 g/day cooked calf or beef liver; hematologic remission was common, but the intervention was multi-component and uncontrolled.
  limitation: No randomization or concurrent control; diet contained multiple simultaneous changes; adherence measurement varied; spontaneous remission was explicitly acknowledged.
  doi: 10.1001/jama.1926.02680070016005
  funding: A grant from the Proctor Fund, Harvard Medical School, for the Study of Chronic Disease was acknowledged.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No modern conflict-of-interest declaration was present in the inspected historical report.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://www.jameslindlibrary.org/wp-data/uploads/2010/05/Minot_GR_Murphy_WP_1926.pdf
- id: ref-minot-murphy-1927
  title: "A DIET RICH IN LIVER IN THE TREATMENT OF PERNICIOUS ANEMIA: STUDY OF ONE HUNDRED AND FIVE CASES"
  authors: George R. Minot; William P. Murphy
  year: 1927
  url: https://jamanetwork.com/journals/jama/article-abstract/249738
  kind: primary clinical follow-up series
  insight: Expanded the historical liver-rich dietary treatment experience to 105 pernicious-anemia cases.
  limitation: Historical uncontrolled evidence; the exposure was a diet rich in liver rather than a standardized isolated liver product.
  doi: 10.1001/jama.1927.02690100021007
  funding: Not assessed from an inspected full-text funding statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-murphy-howard-1952
  title: A comparison of the effect of vitamin B12 with that of liver extract in the treatment of pernicious anemia during relapse and for maintenance
  authors: W. P. Murphy; I. Howard
  year: 1952
  url: https://pubmed.ncbi.nlm.nih.gov/13002627/
  kind: comparative clinical study
  insight: Historical comparison of crystalline vitamin B12 and liver extract for pernicious anemia, illustrating the transition from organ extract to a defined active nutrient.
  limitation: The inspected PubMed record did not provide an abstract, and detailed methods/results were not independently reconstructed here.
  pmid: "13002627"
  doi: 10.1056/NEJM195211272472203
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-ods-b12
  title: Vitamin B12 - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/
  kind: authoritative nutrient reference
  insight: Lists cooked pan-fried beef liver, 3 oz, at 70.7 mcg vitamin B12 and summarizes B12 absorption physiology and dietary sources.
  limitation: Food-composition reference values do not establish clinical efficacy of liver as treatment and do not characterize every species or processed supplement.
  funding: U.S. federal health-agency reference publication; study sponsorship is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-ods-iron
  title: Iron - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/
  kind: authoritative nutrient reference
  insight: Lists cooked pan-fried beef liver, 3 oz, at approximately 5 mg iron and summarizes heme/nonheme iron absorption and iron homeostasis.
  limitation: Composition and absorption physiology do not prove that liver treats anemia of any specific cause.
  funding: U.S. federal health-agency reference publication; study sponsorship is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-ods-copper
  title: Copper - Health Professional Fact Sheet
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2026
  url: https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/
  kind: authoritative nutrient reference
  insight: Lists cooked pan-fried beef liver, 3 oz, at 12,400 mcg copper and summarizes copper intake, absorption and upper-limit context.
  limitation: The reference value is preparation-specific and does not quantify the copper content of an unspecified desiccated-liver product.
  funding: U.S. federal health-agency reference publication; study sponsorship is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-ods-pregnancy
  title: "Dietary Supplements and Life Stages: Pregnancy — Fact Sheet for Health Professionals"
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2025
  url: https://ods.od.nih.gov/factsheets/Pregnancy-HealthProfessional/
  kind: Authoritative nutrient monograph
  insight: Gives pregnancy RDAs and ULs, including a 3,000 mcg/day UL for preformed vitamin A and a 10,000 mcg/day copper UL for adults age 19–50, and notes that excessive preformed vitamin A can cause birth defects.
  limitation: The guidance is nutrient-based, not a product-specific evaluation of liver foods or supplements.
  funding: U.S. federal health-agency reference publication; study sponsorship is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-rothman-1995
  title: Teratogenicity of high vitamin A intake
  authors: K. J. Rothman; L. L. Moore; M. R. Singer; U. S. Nguyen; S. Mannino; A. Milunsky
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7477116/
  kind: prospective observational cohort
  insight: Among 22,748 pregnancies, high preformed-vitamin-A intake was associated with increased prevalence of defects involving cranial-neural-crest-derived tissues; risk was concentrated with high early-pregnancy exposure.
  limitation: Observational and not liver-specific; exposure combined food and/or supplements, so it cannot quantify the risk of any particular liver serving.
  pmid: "7477116"
  doi: 10.1056/NEJM199511233332101
  funding: Not assessed from an inspected full-text funding disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-aramouni-godber-1991
  title: FOLATE LOSSES IN BEEF LIVER DUE TO COOKING AND FROZEN STORAGE
  authors: F. M. Aramouni; J. S. Godber
  year: 1991
  url: https://doi.org/10.1111/j.1745-4557.1991.tb00077.x
  kind: food-composition experiment
  insight: Broiling and frying caused substantial folate losses in beef liver, with additional losses during some frozen-storage conditions.
  limitation: Food-science composition study; it did not test clinical outcomes or desiccated supplement products.
  doi: 10.1111/j.1745-4557.1991.tb00077.x
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-tahvonen-kumpulainen-1994
  title: Lead and cadmium contents in pork, beef and chicken, and in pig and cow liver in Finland during 1991
  authors: R. Tahvonen; J. Kumpulainen
  year: 1994
  url: https://doi.org/10.1080/02652039409374243
  kind: food-surveillance study
  insight: Measured low but detectable lead and cadmium in Finnish meats and livers, with liver concentrations varying by species and animal age.
  limitation: Country- and period-specific food monitoring; does not establish contamination of current liver supplements.
  doi: 10.1080/02652039409374243
  funding: Not assessed from an inspected funding statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-csiro-desiccated-2018
  title: Food Safety Risk Assessment of the processing of the desiccated beef liver powder
  authors: Sieh Ng; Cathy Moir; Henry Sabarez
  year: 2018
  url: https://www.researchgate.net/publication/330510907_Food_Safety_Risk_Assessment_of_the_processing_of_the_desiccated_beef_liver_powder
  kind: conference poster / pilot food-processing study
  insight: A specified cook/oil-treatment/freeze-dry/blending process materially changed vitamin A concentration and included trace-element and microbiological testing, demonstrating strong formulation dependence.
  limitation: Conference-poster-level evidence, process-specific, not a clinical trial and not a survey of commercial products.
  funding: Funded by Meat & Livestock Australia.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: No explicit conflict-of-interest declaration was identified in the inspected poster record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://www.researchgate.net/publication/330510907_Food_Safety_Risk_Assessment_of_the_processing_of_the_desiccated_beef_liver_powder
- id: ref-zuraida-2025
  title: The Effectiveness of Chicken Liver Sausage Consumption on Increasing Hemoglobin and Iron Levels in Anemic Adolescent Girls in High School
  authors: R. Zuraida; D. I. Angraini; A. E. Yunianto; T. Ernawaty; Meiyanti; R. Yana
  year: 2025
  url: https://juke.kedokteran.unila.ac.id/index.php/JK/article/view/3734
  kind: quasi-experimental human intervention study
  insight: Four weeks of a chicken-liver sausage formulation increased serum iron relative to control, while the between-group hemoglobin change was not significant.
  limitation: Small sample, short duration, quasi-experimental design, and exact liver mass per exposure was not verified from the inspected article page.
  doi: 10.23960/jkunila.v9i2.pp329-333
  funding: Not assessed from an accessible full-text funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full-text disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-sistik-2025
  title: "Chicken liver and eggshell crackers are a safe and affordable animal source food for overcoming micronutrient deficits during pregnancy and lactation in Indonesia: a double-blind, cluster randomized controlled trial (SISTIK Growth Study)"
  authors: Aly Diana; Sofa Rahmannia; Yenni Zuhairini Suhadi; Dimas Erlangga Luftimas; Haidar Rizqi; Afini Dwi Purnamasari; Ayunda Jihadillah; Mohammad Brachim Ansari; Dearly Ayu Zahrotun Haq; Aisyah Nur Pratiwi; Dina Novtyana Puspita; Yeni Intan Kusuma Dewi Affandy; Christopher M. A. Frampton; Umi Fahmida; Lisa A. Houghton; Rosalind S. Gibson
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40770284/
  kind: double-blind cluster randomized controlled trial
  insight: A chicken-liver-and-eggshell cracker intervention from early pregnancy through 5 months postpartum did not show a significant maternal hemoglobin advantage at late pregnancy; study batches underwent vitamin A, heavy-metal and microbiological safety testing.
  limitation: Multi-ingredient intervention, adherence was far below the intended 75 g/day, and results cannot be attributed to liver alone or generalized to ordinary liver servings or supplements.
  pmid: "40770284"
  doi: 10.1186/s12884-025-07899-0
  funding: Supported by Wellcome Trust and the UK Department of Health and Social Care/NIHR under grant 216447/Z/19/Z; the article reports that funders had no role in study conduct or reporting.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12330069/
- id: ref-franca-2025
  title: "Uso de fígado bovino reduz anemia em lactentes: um ensaio clínico randomizado"
  authors: Lídia Maria de Sousa França
  year: 2025
  url: https://repositorio.ufc.br/handle/riufc/84414
  kind: master's thesis / randomized clinical study
  insight: Repository abstract reports improved hemoglobin after beef-liver feeding twice weekly for 4 months in young children.
  limitation: Thesis-level evidence; substantial baseline group imbalance; exact liver mass and a verified adjusted between-group effect were not available in the inspected abstract.
  funding: Not assessed from the full thesis.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the full thesis.
  conflictOfInterestStatus: not-assessed
- id: ref-nice-b12-2024
  title: "Vitamin B12 deficiency in over 16s: diagnosis and management"
  authors: National Institute for Health and Care Excellence (NICE)
  year: 2024
  url: https://www.nice.org.uk/guidance/ng239/chapter/recommendations
  kind: clinical guideline
  insight: Recommends defined vitamin B12 replacement based on cause; lifelong intramuscular replacement is recommended for autoimmune gastritis rather than food-based liver therapy.
  limitation: Guideline for vitamin B12 deficiency management, not an evaluation of liver foods as general nutrition.
  funding: Public clinical-guideline program; trial sponsorship not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Guideline conflict-management processes apply; not coded here as a single study-level COI declaration.
  conflictOfInterestStatus: not-assessed
- id: ref-fdc-documentation
  title: Data Documentation | USDA FoodData Central
  authors: U.S. Department of Agriculture, Agricultural Research Service
  year: 2026
  url: https://fdc.nal.usda.gov/data-documentation/
  kind: authoritative food-composition database documentation
  insight: Documents the USDA food-composition data system used to characterize foods as multi-component matrices with preparation-specific nutrient records.
  limitation: Database documentation is not a clinical study and cannot supply a meaningful whole-food elimination half-life.
  funding: U.S. federal government data program.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-dietary-supplements-2026
  title: Questions and Answers on Dietary Supplements
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: official regulatory guidance
  insight: Explains that FDA does not preapprove dietary supplements before marketing, firms bear initial responsibility for safety and labeling compliance, and current good manufacturing practices apply.
  limitation: General U.S. dietary-supplement regulation; not a finding about any specific liver product's quality or efficacy.
  funding: U.S. federal regulatory publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as a clinical-study disclosure.
  conflictOfInterestStatus: not-assessed
- id: ref-ctgov-whole-package-2026
  title: Evaluating Heart & Soil's Whole Package on Men's Health
  authors: "ClinicalTrials.gov; sponsor: Efforia, Inc."
  year: 2026
  url: https://clinicaltrials.gov/study/NCT07256639
  kind: clinical-trial registry record
  insight: Registry record for a 100-participant study of a branded multi-ingredient organ supplement; it was active, not recruiting, and had no posted results when inspected.
  limitation: Multi-ingredient product, sponsor-submitted registry information, not a liver-only trial, and no posted results; cannot establish efficacy.
  funding: Commercial-product study; detailed funding role was not independently assessed beyond the registry sponsor information.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary supplement organ products
  status: Capsules marketed as dietary supplements fall under food/supplement GMP and reporting requirements; this is not FDA efficacy approval for anemia, energy, testosterone or detox claims.
  sourceUrl: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  asOf: 2026-10-10
- jurisdiction: General
  activity: Food safety
  status: Cooking and validated process controls are relevant to pathogen and contaminant risk; product-specific testing is needed for desiccated liver.
  sourceUrl: https://www.researchgate.net/publication/330510907_Food_Safety_Risk_Assessment_of_the_processing_of_the_desiccated_beef_liver_powder
  asOf: 2026-10-10
```
