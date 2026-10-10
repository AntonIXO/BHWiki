---
slug: spermidine
name: spermidine
subtitle: Evidence-specific research record.
aliases:
  - spermidine
  - "- Spermedine"
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
  context: Short PK studies found polyamine changes but did not establish a validated human terminal half-life.
  sourceId: S9
  observationId: spermidine-pk-15mg
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Oral spermidine may be converted to spermine before systemic circulation
  sourceId: S9
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

Spermidine is an endogenous dietary polyamine supplied by foods, wheat-germ extracts, and purified salts. Observational cohorts associate higher dietary intake with lower mortality, but intervention evidence is mixed: the larger SMARTAGE trial was null for its prespecified memory endpoint after a small positive pilot. No trial establishes lifespan extension, dementia prevention, or clinically meaningful human autophagy activation. [S1][S2][S6][S9]

## Description

Dietary spermidine occurs in whole grains, wheat germ, legumes, vegetables, fruit, mushrooms, fermented soy, and aged cheeses. Wheat-germ extracts also contain spermine, putrescine, and other matrix components; extract weight is not spermidine weight. [S6][S11][S13]

## Evidence note

SMARTAGE randomized 100 adults for 12 months and found no mnemonic-discrimination benefit (difference −0.03, 95% CI −0.11 to 0.05; P=.47). A 30-person pilot was suggestive, while nursing-home and uncontrolled studies have major comparator and causal limits. Commercial support and investigator relationships are disclosed where reported. [S1][S2][S4][S5][S10]

## Doses

```yaml
- label: SMARTAGE extract
  amount: 0.9 mg spermidine/day
  quantity: 0.9
  quantityMax: null
  unit: mg
  ingredient: Spermidine
  formulation: 750 mg wheat-germ extract capsules
  route: oral
  frequency: daily
  duration: 12 months
  population: 100 adults aged 60–90 with subjective cognitive decline
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Extract also supplied spermine, putrescine, cadaverine, and ornithine; primary memory endpoint was null.
  sourceId: S1
- label: Cognition pilot
  amount: 1.2 mg/day
  quantity: 1.2
  quantityMax: null
  unit: mg
  ingredient: Spermidine
  formulation: Spermidine-rich plant or wheat-germ extract
  route: oral
  frequency: daily
  duration: 3 months
  population: 30 adults aged 60–80 with subjective cognitive decline
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Small placebo-controlled phase IIa pilot with preliminary memory signal.
  sourceId: S2
- label: Nursing-home dose comparison
  amount: 3.3 mg/day vs 1.9 mg/day
  quantity: 3.3
  quantityMax: null
  unit: mg
  ingredient: Spermidine
  formulation: Wheat-germ roll vs wheat-bran roll
  route: oral
  frequency: daily
  duration: 3 months
  population: 85 nursing-home residents aged 60–96
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Comparator still contained spermidine; highlighted MMSE result did not meet the reported Bonferroni threshold.
  sourceId: S4
- label: Purified-spermidine safety study
  amount: 40 mg/day
  quantity: 40
  quantityMax: null
  unit: mg
  ingredient: Spermidine
  formulation: Spermidine trihydrochloride
  route: oral
  frequency: daily
  duration: Up to 28 days
  population: 37 healthy older men
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Minimal serum and urinary polyamine changes; sponsor involvement disclosed.
  sourceId: S10
- label: PK crossover
  amount: 15 mg/day
  quantity: 15
  quantityMax: null
  unit: mg
  ingredient: Spermidine
  formulation: Spermidine supplement
  route: oral
  frequency: daily
  duration: Two 5-day periods with 9-day washout
  population: 12 healthy volunteers
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Plasma spermidine did not increase; plasma spermine increased.
  sourceId: S9
```

## Pharmacokinetics

```yaml
- id: spermidine-pk-15mg
  analyte: Spermidine and spermine
  route: oral
  formulation: Spermidine supplement
  population: 12 healthy adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 15 mg/day did not increase plasma spermidine but increased plasma spermine, consistent with presystemic conversion; no validated half-life or brain exposure was established.
  sourceId: S9
  modelEligible: false
- id: spermidine-pk-40mg
  analyte: Serum and urinary polyamines
  route: oral
  formulation: Purified spermidine trihydrochloride
  population: 37 healthy men
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 40 mg/day for up to 28 days produced minimal serum and urinary polyamine changes, consistent with homeostatic control.
  sourceId: S10
  modelEligible: false
- id: spermidine-food-matrix
  analyte: Spermidine
  route: oral
  formulation: Wheat-germ and wheat-bran rolls
  population: Nursing-home residents
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Food matrix and baking altered measured spermidine exposure; this does not establish a terminal half-life.
  sourceId: S4
  modelEligible: false
```

## Modifiers

```yaml
- label: Food matrix and processing
  effect: Variable
  detail: Dietary foods, wheat-germ extracts, purified salts, and baked rolls are not pharmacologically equivalent; cooking changed measured exposure.
  sourceId: S4
  observationId: spermidine-pk-15mg
  factorType: other
  direction: variable
- label: Co-polyamines
  effect: Variable
  detail: Extract studies co-delivered spermine, putrescine, cadaverine, and ornithine, preventing attribution to isolated spermidine.
  sourceId: S1
  observationId: spermidine-pk-15mg
  factorType: other
  direction: variable
- label: Presystemic metabolism
  effect: Variable
  detail: Oral spermidine may be converted to spermine before systemic circulation.
  sourceId: S9
  observationId: spermidine-pk-15mg
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Mnemonic discrimination
  direction: Variable
  evidence: Human research
  description: SMARTAGE was null for the prespecified primary endpoint, while a smaller pilot reported a preliminary effect-size signal.
  sourceId: S1
  population: 100 adults aged 60–90 with subjective cognitive decline
  exposure: 0.9 mg/day extract for 12 months
  instrument: Mnemonic discrimination task
  magnitude: null
- conceptId: perception
  name: Memory and MMSE tests
  direction: Variable
  evidence: Human research
  description: A nursing-home dose-comparison reported some improvements, but both arms received spermidine and the highlighted MMSE result missed the corrected threshold.
  sourceId: S4
  population: 85 nursing-home residents
  exposure: 3.3 vs 1.9 mg/day wheat products
  instrument: MMSE and cognitive tests
  magnitude: null
- conceptId: perception
  name: Uncontrolled follow-up cognition
  direction: Increased
  evidence: Human research
  description: A one-year uncontrolled follow-up reported a 5-point MMSE increase; causal attribution is not possible.
  sourceId: S5
  population: 45 nursing-home residents
  exposure: At least 3.3 mg/day food exposure for 1 year
  instrument: MMSE
  magnitude: null
```

## Outcomes

```yaml
- conceptId: fatigue-severity
  name: All-cause mortality association
  direction: Decreased
  evidence: Human research
  description: In the Bruneck cohort, adjusted mortality hazard was 0.76 per 1-SD higher dietary spermidine; this is observational evidence.
  sourceId: S6
  population: 829 adults followed 1995–2015
  exposure: Estimated dietary spermidine intake
  instrument: Mortality registry and dietary assessment
  magnitude: null
- conceptId: fatigue-severity
  name: Cardiovascular mortality association
  direction: Decreased
  evidence: Human research
  description: NHANES and UK Biobank analyses reported inverse associations for dietary spermidine or combined polyamines, with residual confounding.
  sourceId: S7
  population: U.S. and UK observational cohorts
  exposure: Questionnaire-derived diet exposure
  instrument: Mortality and cardiovascular outcomes
  magnitude: null
- conceptId: memory
  name: Intervention longevity
  direction: Variable
  evidence: Human research
  description: No completed randomized intervention demonstrates longer human survival or reduced dementia or cardiovascular events.
  sourceId: S1
  population: Human intervention evidence
  exposure: Extract or purified spermidine
  instrument: Clinical endpoints
  magnitude: null
```

## Mechanisms

```yaml
- title: Polyamine homeostasis
  description: Spermidine participates in cellular growth, translation, mitochondrial biology, inflammation, and proteostasis.
  sourceId: S11
- title: Autophagy signaling
  description: Cell and model-organism studies link spermidine to autophagy-related pathways including reduced protein acetylation; human target engagement is unproven.
  sourceId: S12
- title: Spermine conversion
  description: A short human PK study found increased plasma spermine without increased plasma spermidine after oral dosing.
  sourceId: S9
```

## Cautions

```yaml
- title: Short-term trial tolerability
  description: SMARTAGE, the 1.2 mg/day pilot, and the 40 mg/day study reported no clear product-related safety signal under trial conditions.
  sourceId: S1
- title: Long-term safety
  description: High-dose and multi-year safety, pregnancy, lactation, and medically complex-population evidence remain limited.
  sourceId: S10
- title: Polyamine biology and malignancy
  description: A theoretical concern exists for polyamine-dependent growth in existing malignancy; human cancer outcomes were not tested.
  sourceId: S11
- title: Commercial sponsorship
  description: Several efficacy and safety studies disclosed product-development or sponsor relationships, including company employees or patents.
  sourceId: S1
```

## Claims

```yaml
- id: spermidine-memory
  assertion: Spermidine improves memory
  relation: evidence-boundary
  participants:
    - entityId: substance:spermidine
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: A small pilot was followed by a larger negative SMARTAGE primary outcome.
  sourceIds:
    - S1
    - S2
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small samples, heterogeneous extracts, and endpoint multiplicity limit certainty.
- id: spermidine-autophagy
  assertion: Spermidine activates human autophagy
  relation: evidence-boundary
  participants:
    - entityId: substance:spermidine
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Evidence is mainly cellular and preclinical; human target engagement is not established.
  sourceIds:
    - S11
    - S12
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanistic plausibility does not establish clinical benefit.
- id: spermidine-longevity
  assertion: Spermidine extends human lifespan
  relation: evidence-boundary
  participants:
    - entityId: substance:spermidine
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Dietary intake is associated with lower mortality in cohorts, but intervention evidence is absent.
  sourceIds:
    - S6
    - S7
    - S8
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Observational exposure and confounding prevent causal inference.
- id: spermidine-pure-equivalence
  assertion: Wheat-germ extract is equivalent to pure spermidine
  relation: evidence-boundary
  participants:
    - entityId: substance:spermidine
      role: intervention
    - entityId: tag:mitophagy
      role: reported-outcome
  context: Extracts contain matrix components and co-polyamines and are not chemically equivalent.
  sourceIds:
    - S1
    - S4
    - S13
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulation and food-matrix differences alter exposure.
```

## Interactions

```yaml
- id: co-polyamines
  name: Co-polyamines in extracts
  otherSlug: null
  summary: Wheat-germ products deliver spermine, putrescine, and other polyamines with spermidine, making clinical attribution difficult.
  sourceId: S1
  context: SMARTAGE extract composition
- id: polyamine-metabolism
  name: Polyamine metabolism
  otherSlug: null
  summary: Oral spermidine may be converted to spermine; clinical implications of this biochemical interaction remain uncertain.
  sourceId: S9
  context: Human PK study
- id: autophagy-pathways
  name: Autophagy-modulating medicines
  otherSlug: null
  summary: Pathway overlap is mechanistically plausible, but no established human coadministration dataset was identified.
  sourceId: S12
  context: Mechanistic review
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Effects of Spermidine Supplementation on Cognition and Biomarkers in Older Adults With Subjective Cognitive Decline: A Randomized Clinical Trial"
  authors: Claudia Schwarz, Gloria S. Benson, Nora Horn, et al.; SmartAge investigators
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/
  kind: Phase IIb randomized clinical trial
  insight: 0.9 mg/day spermidine-rich wheat-germ extract for 12 months did not improve mnemonic discrimination versus placebo; safety events were balanced.
  limitation: Single-center, n=100, subjective cognitive decline, low extract dose, and no disease or lifespan endpoint.
  funding: German Federal Ministry of Education and Research, Hans Gerhard Creutzfeldt scholarship, DFG, BIH; The Longevity Labs supported extract development.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Several investigators disclosed TLL equity/advisory/employment relationships or spermidine-related patents.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/
- id: S2
  title: "The effect of spermidine on memory performance in older adults at risk for dementia: A randomized controlled trial"
  authors: Miranka Wirth, Gloria Benson, Claudia Schwarz, Theresa Köbe, Ulrike Grittner, Dietmar Schmitz, Stephan J. Sigrist, Jens Bohlken, Slaven Stekovic, Frank Madeo, Agnes Flöel
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30388439/
  kind: Randomized, double-blind, placebo-controlled pilot trial
  insight: A 3-month, 1.2-mg/day extract intervention produced a preliminary medium effect-size memory signal.
  limitation: n=30, short duration, and not powered for definitive efficacy.
  funding: Not stated in the accessible PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully reproduced in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S3
  title: Safety and tolerability of spermidine supplementation in mice and older adults with subjective cognitive decline
  authors: Claudia Schwarz et al.; Charité–Universitätsmedizin Berlin and University of Graz
  year: 2018
  url: https://doi.org/10.18632/aging.101354
  kind: Translational animal and human safety study
  insight: Thirty older adults received 1.2 mg/day for 3 months without meaningful safety-parameter differences versus placebo.
  limitation: Small sample, short duration, and not a clinical-efficacy study.
  funding: Sponsor details are not stated in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully reproduced in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: "The positive effect of spermidine in older adults suffering from dementia: First results of a 3-month trial"
  authors: Thomas Pekar et al.; University of Applied Sciences Wiener Neustadt and Gepflegt Wohnen
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8116233/
  kind: Randomized two-group dose-comparison study
  insight: Compared 3.3-mg wheat-germ rolls with 1.9-mg wheat-bran rolls; both groups received spermidine.
  limitation: No true placebo, small heterogeneous nursing-home sample, dietary coexposures, and multiple-testing concerns.
  funding: Open-access funding from University of Applied Sciences Wiener Neustadt; authors reported self-funding.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: The positive effect of spermidine in older adults suffering from dementia after 1 year
  authors: Thomas Pekar, Aribert Wendzel, Reinhart Jarisch
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10776733/
  kind: Uncontrolled follow-up short report
  insight: Forty-five nursing-home residents receiving at least 3.3 mg/day had a reported 5-point MMSE improvement after one year.
  limitation: No concurrent control, blinding, randomization, or protection from practice effects and regression to the mean.
  funding: Not stated in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S6
  title: "Higher spermidine intake is linked to lower mortality: a prospective population-based study"
  authors: Stefan Kiechl et al.; Medical University of Innsbruck and collaborating institutions
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29955838/
  kind: Prospective community cohort
  insight: In 829 adults followed through 2015, higher dietary spermidine was associated with lower all-cause mortality; fully adjusted HR 0.76 per 1-SD increase.
  limitation: Dietary observational design, food-frequency measurement, and residual confounding.
  funding: Multiple public and institutional European grants reported in the article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No material conflict is emphasized in the accessible record.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: "The association of dietary spermidine with all-cause mortality and CVD mortality: The U.S. National Health and Nutrition Examination Survey, 2003 to 2014"
  authors: Wu H et al.; collaborating U.S. academic institutions
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9554131/
  kind: NHANES-linked observational mortality analysis
  insight: Higher estimated dietary spermidine was associated with lower all-cause and cardiovascular mortality.
  limitation: Dietary estimation and residual confounding prevent causal inference.
  funding: Not stated in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: "The Association of Dietary Polyamines with Mortality and the Risk of Cardiovascular Disease: A Prospective Study in UK Biobank"
  authors: Su Han, Mingxia Qian, Na Zhang, Rui Zhang, Min Liu, Jiangbo Wang, Furong Li, Liqiang Zheng, Zhaoqing Sun
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11678356/
  kind: Prospective UK Biobank cohort
  insight: Estimated total dietary polyamines were associated with lower mortality and incident cardiovascular disease.
  limitation: Exposure combined spermidine, spermine, and putrescine and was questionnaire-derived.
  funding: See article funding statement; not stated in the accessible abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S9
  title: "High-Dose Spermidine Supplementation Does Not Increase Spermidine Levels in Blood Plasma and Saliva of Healthy Adults: A Randomized Placebo-Controlled Pharmacokinetic and Metabolomic Study"
  authors: Stefan Senekowitsch, Eliza Wietkamp, Michael Grimm, Franziska Schmelter, Philipp Schick, Anna Kordowski, Christian Sina, Hans Otzen, Werner Weitschies, Martin Smollich
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10143675/
  kind: Triple-blinded randomized crossover pharmacokinetic study
  insight: 15 mg/day increased plasma spermine but not plasma spermidine or salivary polyamines.
  limitation: Only 12 healthy volunteers and two 5-day exposure periods.
  funding: No sponsor is identified in the accessible PubMed abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the accessible abstract.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: "Supplementation of spermidine at 40 mg/day has minimal effects on circulating polyamines: An exploratory double-blind randomized controlled trial in older men"
  authors: Patrick Keohane, Jeremy R. Everett, Rui Pereira, Chad M. Cook, Traci M. Blonquist, Eunice Mah
  year: 2024
  url: https://doi.org/10.1016/j.nutres.2024.09.012
  kind: Double-blind randomized placebo-controlled safety and pharmacokinetic trial
  insight: Thirty-seven healthy men tolerated 40 mg/day for up to 28 days with minimal serum and urinary polyamine changes.
  limitation: Small, short, male-only sample and sponsor involvement in design, analysis interpretation, writing, and submission.
  funding: Chrysea Labs, grant BIO2203.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Two authors were Chrysea employees; other authors received Chrysea funding.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.1016/j.nutres.2024.09.012
- id: S11
  title: "A comprehensive review of spermidine: Safety, health effects, absorption and metabolism, food materials evaluation, physical and chemical processing, and bioprocessing"
  authors: Dian Zou, Ziyue Zhao, Lu Li, Yu Min, Daiyuan Zhang, Anying Ji, Cong Jiang, Xuetuan Wei, Xian Wu
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35478379/
  kind: Narrative scientific review
  insight: Summarizes spermidine sources, metabolism, mechanisms, safety, and translational evidence.
  limitation: Review-level synthesis of heterogeneous preclinical, observational, and clinical data.
  funding: Not stated in the accessible PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Spermidine in health and disease
  authors: Frank Madeo, Tobias Eisenberg, Fabrizio Pietrocola, Guido Kroemer
  year: 2018
  url: https://doi.org/10.1126/science.aan2788
  kind: Mechanistic review
  insight: Explains polyamine biology, autophagy-related mechanisms, and preclinical longevity findings.
  limitation: Mechanistic and preclinical rationale does not establish human clinical efficacy.
  funding: See article disclosures.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not summarized here; some authors are linked to the spermidine research ecosystem.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: GRAS Notice 889, Wheat germ extract
  authors: "U.S. Food and Drug Administration; notifier: The Longevity Labs GmbH"
  year: 2020
  url: https://www.fda.gov/media/138730/download?attachment=
  kind: Regulatory GRAS notice
  insight: Describes proposed food uses and a safety rationale for spermidine-rich wheat-germ extract, including a notifier-estimated exposure up to 12 mg spermidine/day.
  limitation: Notifier-submitted food-safety dossier; it does not demonstrate efficacy or approval for disease treatment.
  funding: Commercial submission by The Longevity Labs GmbH.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Notifier had a direct commercial interest in the ingredient.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Spermidine-rich wheat-germ extract food use
  status: GRAS notice describes specified food uses and safety rationale; it is not efficacy or disease-treatment approval.
  sourceUrl: https://www.fda.gov/media/138730/download?attachment=
  asOf: 2020-06-01
```
