# Research Report: Research exactly spermidine (correct alias Spermedine; slug spermidine). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover dietary spermidine versus enriched wheat-germ extracts and combination doses, placebo-controlled cognition/memory trials including negative SMARTAGE findings, observational diet/longevity associations versus interventions, autophagy evidence boundaries, safety and sponsorship/COI. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
title: Spermidine
aliases:
  - Spermedine
slug: spermidine
x-shape: compound
---

## Summary

Spermidine is an endogenous dietary polyamine found in plant foods, fermented foods, and human tissues. The strongest human signal is observational: higher dietary intake is associated with lower mortality. Intervention evidence is weaker and mixed: a small placebo-controlled memory pilot was positive, whereas the larger 12-month SMARTAGE trial found no significant improvement in its prespecified memory endpoint. Short-term trials have generally reported good tolerability, but no human trial has established lifespan extension, dementia prevention, cardiovascular-event reduction, or clinically meaningful autophagy activation. [S1][S2][S6][S9] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- sourceId: S1
- sourceId: S2
- sourceId: S6
- sourceId: S9
```

## Description

Spermidine is a naturally occurring aliphatic polyamine, chemically N-(3-aminopropyl)butane-1,4-diamine, with formula C7H19N3. It is synthesized endogenously from putrescine and is also supplied by food and gut microbial metabolism. Dietary sources include whole grains, wheat germ, legumes, vegetables, fruit, mushrooms, fermented soy, and some aged cheeses. “Spermidine” and “spermidine-rich wheat-germ extract” are not equivalent exposures: the extract is a food matrix containing variable amounts of spermidine and other polyamines. [S6][S11][S12] ([ajcn.nutrition.org](https://ajcn.nutrition.org/article/S0002-9165%2822%2902930-6/fulltext?utm_source=openai))

```yaml
- sourceId: S6
- sourceId: S11
- sourceId: S12
```

## Evidence note

The placebo-controlled cognition evidence is internally inconsistent. The 2018 phase IIa pilot randomized 30 adults with subjective cognitive decline and reported medium effect sizes, but it was small and designed around effect-size estimation. SMARTAGE randomized 100 adults for 12 months and found no significant between-group difference in mnemonic discrimination: −0.03, 95% CI −0.11 to 0.05, P=.47. A nursing-home study used a higher-spermidine wheat-germ roll against a lower-spermidine wheat-bran roll, not a spermidine-free placebo; its one-year follow-up had no control group. [S1][S2][S4][S5] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

Sponsorship is relevant. SMARTAGE received public and institutional funding, while The Longevity Labs GmbH supported extract development; several investigators reported equity, advisory, employment, or patent relationships involving spermidine-related companies or technologies. The 40-mg purified-spermidine safety study was supported by Chrysea Labs, which participated in study design, data interpretation, writing, and submission; two authors were company employees and other authors received company funding. The Pekar dementia study reported author funding and no competing interests. [S1][S4][S10] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- sourceId: S1
- sourceId: S2
- sourceId: S4
- sourceId: S5
- sourceId: S10
```

## Doses

Human research spans ordinary dietary intake, enriched food, wheat-germ extracts containing co-polyamines, and short-term purified spermidine. Extract weight must not be read as spermidine weight: SMARTAGE used 750 mg extract but only about 0.9 mg spermidine daily. Reported dietary intake varies substantially by country and food pattern. [S1][S3][S4][S9][S10] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- exposure: ordinary diet
  amount: "Approximately 4.8–17.0 mg spermidine/day across reported countries; Bruneck intake tertiles were <62.2, 62.2–79.8, and >79.8 micromol/day, approximately <9.0, 9.0–11.6, and >11.6 mg/day."
  form: mixed foods
  sourceId: [S6, S10]

- exposure: early safety/cognition pilot
  amount: "1.2 mg spermidine/day for 3 months"
  form: spermidine-rich plant or wheat-germ extract
  sourceId: S3

- exposure: SMARTAGE
  amount: "0.9 mg spermidine/day from 750 mg extract, plus approximately 0.5 mg spermine, 0.2 mg putrescine, <0.004 mg cadaverine, and 0.12 mg L-ornithine"
  form: six 125-mg wheat-germ-extract capsules
  sourceId: S1

- exposure: dementia dose-comparison study
  amount: "3.3 mg/day from a wheat-germ roll versus 1.9 mg/day from a wheat-bran roll, six days/week"
  form: enriched food; comparator still contained spermidine
  sourceId: S4

- exposure: pharmacokinetic study
  amount: "15 mg/day for two 5-day periods separated by a 9-day washout"
  form: spermidine-rich supplement
  sourceId: S9

- exposure: purified-spermidine safety study
  amount: "40 mg/day for up to 28 days"
  form: high-purity spermidine trihydrochloride
  sourceId: S10
```

## Pharmacokinetics

In 12 healthy volunteers receiving 15 mg/day, plasma spermidine and salivary polyamines did not increase versus placebo, while plasma spermine increased. The authors interpreted this as presystemic conversion of orally supplied spermidine to spermine; their conclusion that doses below 15 mg/day are unlikely to produce short-term systemic effects is study-specific, not a therapeutic threshold. [S9] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/37111071/?utm_source=openai))

In the 40-mg/day trial, 37 healthy men showed minimal changes in circulating serum and urinary polyamines after 7- and 28-day exposure, consistent with substantial homeostatic control. In the food study, the 3.3-mg roll increased serum spermidine, whereas the 1.9-mg roll did not; baking reduced measured spermidine concentrations in the finished rolls. A validated human half-life, cerebrospinal-fluid exposure, and brain target-engagement profile remain undefined in the cited clinical literature. [S4][S9][S10][S11] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8116233/))

```yaml
- finding: "15 mg/day did not raise plasma spermidine but increased plasma spermine"
  sourceId: S9

- finding: "40 mg/day produced minimal serum and urinary polyamine changes over 28 days"
  sourceId: S10

- finding: "Food matrix and cooking altered measurable exposure"
  sourceId: S4

- boundary: "Human half-life, CSF exposure, and brain target engagement are not established"
  sourceId: [S9, S11]
```

## Modifiers

Exposure is modified by food matrix, cooking, extract composition, baseline diet, gastrointestinal metabolism, and individual polyamine homeostasis. The SMARTAGE extract delivered spermidine together with spermine, putrescine, cadaverine, and ornithine; therefore its clinical results cannot be assigned exclusively to isolated spermidine. In Bruneck, major dietary contributors included whole grains, apples and pears, salad, vegetable sprouts, and potatoes. SMARTAGE exploratory subgroup signals varied by age, sex, baseline dietary intake, and severity of subjective complaints, but these were not confirmatory findings. [S1][S4][S6][S9][S11] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- modifier: food_matrix
  implication: "Dietary food, wheat-germ extract, and purified salt are pharmacologically non-equivalent"
  sourceId: [S1, S4, S10]

- modifier: co_polyamines
  implication: "Extract trials co-delivered spermine and putrescine"
  sourceId: S1

- modifier: processing
  implication: "Baking reduced measured spermidine in one food study"
  sourceId: S4

- modifier: baseline_diet
  implication: "Observed effects may depend on pre-existing dietary intake"
  sourceId: [S1, S6]

- modifier: presystemic_metabolism
  implication: "Oral spermidine may be converted to spermine before systemic circulation"
  sourceId: S9
```

## Effects

Human cognition and memory findings are mixed. The 2018 placebo-controlled pilot reported a contrast effect size of Cohen’s d=.77, with mnemonic-discrimination improvement within the spermidine group, but the between-group confidence interval included no effect. SMARTAGE was the larger, longer, prespecified test and was negative for its primary memory endpoint and intention-to-treat secondary outcomes. [S1][S2] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/30388439/))

The 85-person analyzed dementia study reported a 2.23-point MMSE increase in the mild-dementia subgroup of the higher-dose arm, P=.026; the article’s stated Bonferroni threshold was .0167, and both dose groups improved on some measures. Its lower-dose comparator contained 1.9 mg/day, so placebo effects and nonspecific food or care effects cannot be excluded. The later 45-person one-year follow-up reported a 5-point MMSE improvement without a concurrent control group. [S4][S5] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8116233/))

```yaml
- trial: Wirth_2018
  population: "30 adults aged 60–80 with subjective cognitive decline"
  design: "3-month randomized, double-blind, placebo-controlled phase IIa pilot"
  result: "Positive medium effect-size signal; not a definitive efficacy test"
  sourceId: S2

- trial: SMARTAGE_2022
  population: "100 adults aged 60–90 with subjective cognitive decline"
  design: "12-month randomized, double-masked, placebo-controlled phase IIb trial"
  result: "Primary mnemonic-discrimination difference −0.03; 95% CI −0.11 to 0.05; P=.47"
  sourceId: S1

- trial: Pekar_2021
  population: "85 nursing-home residents aged 60–96, with mixed cognitive status"
  design: "3-month randomized dose-comparison study"
  result: "Higher-dose arm showed some improvements, but comparator contained 1.9 mg spermidine and corrected significance was not met for the highlighted MMSE result"
  sourceId: S4

- follow_up: Pekar_2024
  population: "45 nursing-home residents"
  design: "Uncontrolled 1-year pre-post follow-up"
  result: "Reported 5-point MMSE improvement; causal attribution is not possible"
  sourceId: S5
```

## Outcomes

The Bruneck prospective cohort followed 829 adults from 1995 through 2015 and recorded 341 deaths. Mortality rates fell across increasing spermidine-intake thirds from 40.5 to 23.7 to 15.1 deaths per 1,000 person-years; the fully adjusted hazard ratio per 1-SD higher intake was 0.76, 95% CI 0.67–0.86. The top-versus-bottom intake contrast was statistically comparable to the mortality difference associated with being 5.7 years younger, but this is an observational analogy, not years of life gained by supplementation. [S6] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/29955838/?utm_source=openai))

U.S. NHANES and UK Biobank analyses also reported inverse associations between dietary spermidine or total dietary polyamines and mortality or cardiovascular outcomes. UK Biobank exposure estimates included spermidine, spermine, and putrescine and were derived from dietary questionnaires. No completed randomized intervention has demonstrated longer human survival, reduced dementia incidence, or reduced cardiovascular or cancer events. [S6][S7][S8] ([frontiersin.org](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.949170/full?utm_source=openai))

```yaml
- outcome: observational_all_cause_mortality
  evidence: "Inverse association in Bruneck; adjusted HR 0.76 per 1-SD higher intake"
  interpretation: "Association, not causal proof"
  sourceId: S6

- outcome: observational_cardiovascular_mortality
  evidence: "Inverse associations reported in U.S. NHANES and UK Biobank analyses"
  interpretation: "Dietary exposure and confounding limit causal inference"
  sourceId: [S7, S8]

- outcome: intervention_longevity
  evidence: "No completed human RCT demonstrates lifespan extension"
  sourceId: [S1, S6, S11]
```

## Mechanisms

Spermidine supports polyamine-dependent cellular functions involving translation, growth control, mitochondrial biology, inflammation, and proteostasis. In cells and model organisms, it can promote macroautophagy partly through reduced protein acetylation and inhibition of acetyltransferase activity, including EP300-related signaling. Autophagy is a plausible mechanism for some preclinical longevity and neuroprotection findings, not a demonstrated human clinical outcome. [S11][S12] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/35478379/))

The boundary is important: model-organism lifespan effects, cell-culture autophagy markers, and dietary mortality associations do not show that an oral supplement produces therapeutically relevant autophagic flux in human brain or other target tissues. The 15-mg pharmacokinetic study also raises the possibility that spermine, rather than circulating spermidine itself, mediates some systemic effects. [S1][S9][S12] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- mechanism: polyamine_homeostasis
  status: "Established biochemical role"
  sourceId: S11

- mechanism: autophagy
  status: "Strong preclinical rationale; human clinical mediation unproven"
  sourceId: [S11, S12]

- mechanism: reduced_protein_acetylation
  status: "Mechanistic evidence mainly cellular and preclinical"
  sourceId: S12

- mechanism: spermine_conversion
  status: "Supported by short-term human pharmacokinetic data"
  sourceId: S9
```

## Cautions

In SMARTAGE, adverse events were balanced: 129 total events occurred, 58 with spermidine and 71 with placebo; 19 serious adverse events occurred, 7 with spermidine and 12 with placebo, and all were judged unrelated to the intervention. The earlier 1.2-mg/day study found no between-group differences in vital signs, weight, clinical chemistry, hematology, or self-reported health. The 40-mg/day purified-spermidine study reported no product-related adverse events over 28 days. These findings support short-term tolerability under trial conditions, not indefinite safety. [S1][S3][S10] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

Polyamines participate in cell growth, and a theoretical concern is that supplementation could support polyamine-dependent growth in an existing malignancy; human trials have not tested cancer progression or cancer mortality as outcomes. Wheat-germ extracts also carry the product-specific characteristics of a wheat-derived food matrix. The FDA GRAS dossier concerns specified food use and safety rationale, not proof of anti-aging, cognitive, or disease-treatment efficacy. [S11][S13] ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/35478379/))

```yaml
- caution: short_term_safety
  status: "Generally favorable in small trials lasting 3–12 months at extract doses and 28 days at 40 mg/day purified spermidine"
  sourceId: [S1, S3, S10]

- caution: long_term_safety
  status: "Not established for high-dose or multi-year exposure"
  sourceId: [S1, S10]

- caution: malignancy
  status: "Theoretical polyamine-biology concern; no human cancer-outcome evidence from supplementation trials"
  sourceId: [S11, S12]

- caution: wheat_matrix
  status: "Extract products are not chemically identical to purified spermidine"
  sourceId: [S1, S13]

- caution: sponsorship
  status: "Several efficacy and safety studies disclose commercial product-development or sponsor relationships"
  sourceId: [S1, S10]
```

## Claims

```yaml
- claim: "Spermidine activates autophagy"
  verdict: "Supported mainly in cells and model organisms; human target engagement is not established"
  sourceId: [S11, S12]

- claim: "Spermidine improves memory"
  verdict: "Not established; a small positive pilot was followed by a larger negative SMARTAGE primary outcome"
  sourceId: [S1, S2]

- claim: "Spermidine extends human lifespan"
  verdict: "Unsupported; dietary intake is associated with lower mortality in cohorts, but intervention evidence is absent"
  sourceId: [S6, S7, S8]

- claim: "Wheat-germ extract is equivalent to pure spermidine"
  verdict: "False; extracts contain matrix components and co-polyamines"
  sourceId: [S1, S4]

- claim: "Higher oral doses necessarily raise blood spermidine"
  verdict: "Unsupported; 15 mg/day did not raise plasma spermidine in a short PK study"
  sourceId: S9

- claim: "Spermidine is proven safe at any dose"
  verdict: "Unsupported; human safety data are small, short, and formulation-specific"
  sourceId: [S1, S3, S10]
```

## Interactions

The cited human trials did not establish a clinically validated drug-interaction profile. Product matrices can expose users to spermidine, spermine, putrescine, ornithine, wheat components, or other formulation ingredients simultaneously, making attribution of effects or adverse events difficult. Interactions with medicines that alter polyamine synthesis, cellular acetylation, autophagy, or tumor-cell proliferation remain theoretical rather than clinically characterized in these studies. [S1][S9][S11] ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/))

```yaml
- interaction: co_polyamines
  evidence: "Wheat-germ extract trials delivered spermine and putrescine with spermidine"
  status: "Clinical attribution unresolved"
  sourceId: S1

- interaction: polyamine_metabolism
  evidence: "Oral spermidine may be converted to spermine"
  status: "Biochemical interaction; clinical implications uncertain"
  sourceId: S9

- interaction: autophagy_modulators
  evidence: "Mechanistically plausible pathway overlap"
  status: "No established human coadministration data"
  sourceId: [S11, S12]

- interaction: conventional_drugs
  evidence: "No interaction profile was established by the cited trials"
  sourceId: [S1, S9, S10]
```

## Experience links

- [SMARTAGE phase IIb, NCT03094546](https://clinicaltrials.gov/study/NCT03094546) — 12-month placebo-controlled cognition trial (S1).
- [SMARTAGE phase IIa, NCT02755246](https://clinicaltrials.gov/study/NCT02755246) — 3-month placebo-controlled cognition pilot (S2).
- [Spermidine intake and all-cause mortality, NCT03378843](https://clinicaltrials.gov/study/NCT03378843) — observational cohort registration (S6).
- [Autophagy and molecular profiling during spermidine supplementation, NCT04739852](https://clinicaltrials.gov/study/NCT04739852) — exploratory mechanistic study (S12).

```yaml
- label: SMARTAGE_phase_IIb
  url: https://clinicaltrials.gov/study/NCT03094546
  sourceId: S1

- label: SMARTAGE_phase_IIa
  url: https://clinicaltrials.gov/study/NCT02755246
  sourceId: S2

- label: mortality_cohort
  url: https://clinicaltrials.gov/study/NCT03378843
  sourceId: S6

- label: autophagy_profiling
  url: https://clinicaltrials.gov/study/NCT04739852
  sourceId: S12
```

## References

```yaml
- sourceId: S1
  title: "Effects of Spermidine Supplementation on Cognition and Biomarkers in Older Adults With Subjective Cognitive Decline: A Randomized Clinical Trial"
  authors: "Claudia Schwarz, Gloria S. Benson, Nora Horn, et al.; SmartAge investigators"
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/
  kind: "Phase IIb randomized clinical trial"
  insight: "0.9 mg/day spermidine-rich wheat-germ extract for 12 months did not improve mnemonic discrimination versus placebo; safety events were balanced."
  limitation: "Single-center, n=100, subjective cognitive decline, low extract dose, and no disease or lifespan endpoint."
  funding: "German Federal Ministry of Education and Research, Hans Gerhard Creutzfeldt scholarship, DFG, BIH; The Longevity Labs supported extract development."
  sponsorshipStatus: "Mixed public, institutional, and industry product-development support"
  conflictsOfInterest: "Several investigators disclosed TLL equity/advisory/employment relationships or spermidine-related patents."
  conflictOfInterestStatus: "Declared material conflicts"

- sourceId: S2
  title: "The effect of spermidine on memory performance in older adults at risk for dementia: A randomized controlled trial"
  authors: "Miranka Wirth, Gloria Benson, Claudia Schwarz, Theresa Köbe, Ulrike Grittner, Dietmar Schmitz, Stephan J. Sigrist, Jens Bohlken, Slaven Stekovic, Frank Madeo, Agnes Flöel"
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/30388439/
  kind: "Randomized, double-blind, placebo-controlled pilot trial"
  insight: "A 3-month, 1.2-mg/day extract intervention produced a preliminary medium effect-size memory signal."
  limitation: "n=30, short duration, and not powered for definitive efficacy."
  funding: "Not stated in the accessible PubMed record."
  sponsorshipStatus: "Not fully assessable from the accessible record"
  conflictsOfInterest: "Not fully reproduced in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S3
  title: "Safety and tolerability of spermidine supplementation in mice and older adults with subjective cognitive decline"
  authors: "Claudia Schwarz et al.; Charité–Universitätsmedizin Berlin and University of Graz"
  year: 2018
  url: https://doi.org/10.18632/aging.101354
  kind: "Translational animal and human safety study"
  insight: "Thirty older adults received 1.2 mg/day for 3 months without meaningful safety-parameter differences versus placebo."
  limitation: "Small sample, short duration, and not a clinical-efficacy study."
  funding: "Sponsor details are not stated in the accessible abstract."
  sponsorshipStatus: "Not fully assessable from the accessible record"
  conflictsOfInterest: "Not fully reproduced in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S4
  title: "The positive effect of spermidine in older adults suffering from dementia: First results of a 3-month trial"
  authors: "Thomas Pekar et al.; University of Applied Sciences Wiener Neustadt and Gepflegt Wohnen"
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8116233/
  kind: "Randomized two-group dose-comparison study"
  insight: "Compared 3.3-mg wheat-germ rolls with 1.9-mg wheat-bran rolls; both groups received spermidine."
  limitation: "No true placebo, small heterogeneous nursing-home sample, dietary coexposures, and multiple-testing concerns."
  funding: "Open-access funding from University of Applied Sciences Wiener Neustadt; authors reported self-funding."
  sponsorshipStatus: "Investigator-driven"
  conflictsOfInterest: "Authors declared no competing interests."
  conflictOfInterestStatus: "None declared"

- sourceId: S5
  title: "The positive effect of spermidine in older adults suffering from dementia after 1 year"
  authors: "Thomas Pekar, Aribert Wendzel, Reinhart Jarisch"
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10776733/
  kind: "Uncontrolled follow-up short report"
  insight: "Forty-five nursing-home residents receiving at least 3.3 mg/day had a reported 5-point MMSE improvement after one year."
  limitation: "No concurrent control, blinding, randomization, or protection from practice effects and regression to the mean."
  funding: "Not stated in the accessible abstract."
  sponsorshipStatus: "Not fully assessable"
  conflictsOfInterest: "Not stated in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S6
  title: "Higher spermidine intake is linked to lower mortality: a prospective population-based study"
  authors: "Stefan Kiechl et al.; Medical University of Innsbruck and collaborating institutions"
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29955838/
  kind: "Prospective community cohort"
  insight: "In 829 adults followed through 2015, higher dietary spermidine was associated with lower all-cause mortality; fully adjusted HR 0.76 per 1-SD increase."
  limitation: "Dietary observational design, food-frequency measurement, and residual confounding."
  funding: "Multiple public and institutional European grants reported in the article."
  sponsorshipStatus: "Primarily public/institutional observational research"
  conflictsOfInterest: "No material conflict is emphasized in the accessible record."
  conflictOfInterestStatus: "No material conflict identified in accessible record"

- sourceId: S7
  title: "The association of dietary spermidine with all-cause mortality and CVD mortality: The U.S. National Health and Nutrition Examination Survey, 2003 to 2014"
  authors: "Wu H et al.; collaborating U.S. academic institutions"
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9554131/
  kind: "NHANES-linked observational mortality analysis"
  insight: "Higher estimated dietary spermidine was associated with lower all-cause and cardiovascular mortality."
  limitation: "Dietary estimation and residual confounding prevent causal inference."
  funding: "Not stated in the accessible abstract."
  sponsorshipStatus: "Not fully assessable"
  conflictsOfInterest: "Not stated in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S8
  title: "The Association of Dietary Polyamines with Mortality and the Risk of Cardiovascular Disease: A Prospective Study in UK Biobank"
  authors: "Su Han, Mingxia Qian, Na Zhang, Rui Zhang, Min Liu, Jiangbo Wang, Furong Li, Liqiang Zheng, Zhaoqing Sun"
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11678356/
  kind: "Prospective UK Biobank cohort"
  insight: "Estimated total dietary polyamines were associated with lower mortality and incident cardiovascular disease."
  limitation: "Exposure combined spermidine, spermine, and putrescine and was questionnaire-derived."
  funding: "See article funding statement; not stated in the accessible abstract."
  sponsorshipStatus: "Observational cohort; sponsor status not fully assessable"
  conflictsOfInterest: "Not stated in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S9
  title: "High-Dose Spermidine Supplementation Does Not Increase Spermidine Levels in Blood Plasma and Saliva of Healthy Adults: A Randomized Placebo-Controlled Pharmacokinetic and Metabolomic Study"
  authors: "Stefan Senekowitsch, Eliza Wietkamp, Michael Grimm, Franziska Schmelter, Philipp Schick, Anna Kordowski, Christian Sina, Hans Otzen, Werner Weitschies, Martin Smollich"
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10143675/
  kind: "Triple-blinded randomized crossover pharmacokinetic study"
  insight: "15 mg/day increased plasma spermine but not plasma spermidine or salivary polyamines."
  limitation: "Only 12 healthy volunteers and two 5-day exposure periods."
  funding: "No sponsor is identified in the accessible PubMed abstract."
  sponsorshipStatus: "Not fully assessable from the accessible record"
  conflictsOfInterest: "Not stated in the accessible abstract."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S10
  title: "Supplementation of spermidine at 40 mg/day has minimal effects on circulating polyamines: An exploratory double-blind randomized controlled trial in older men"
  authors: "Patrick Keohane, Jeremy R. Everett, Rui Pereira, Chad M. Cook, Traci M. Blonquist, Eunice Mah"
  year: 2024
  url: https://doi.org/10.1016/j.nutres.2024.09.012
  kind: "Double-blind randomized placebo-controlled safety and pharmacokinetic trial"
  insight: "Thirty-seven healthy men tolerated 40 mg/day for up to 28 days with minimal serum and urinary polyamine changes."
  limitation: "Small, short, male-only sample and sponsor involvement in design, analysis interpretation, writing, and submission."
  funding: "Chrysea Labs, grant BIO2203."
  sponsorshipStatus: "Industry-sponsored"
  conflictsOfInterest: "Two authors were Chrysea employees; other authors received Chrysea funding."
  conflictOfInterestStatus: "Declared material sponsor-related conflicts"

- sourceId: S11
  title: "A comprehensive review of spermidine: Safety, health effects, absorption and metabolism, food materials evaluation, physical and chemical processing, and bioprocessing"
  authors: "Dian Zou, Ziyue Zhao, Lu Li, Yu Min, Daiyuan Zhang, Anying Ji, Cong Jiang, Xuetuan Wei, Xian Wu"
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35478379/
  kind: "Narrative scientific review"
  insight: "Summarizes spermidine sources, metabolism, mechanisms, safety, and translational evidence."
  limitation: "Review-level synthesis of heterogeneous preclinical, observational, and clinical data."
  funding: "Not stated in the accessible PubMed record."
  sponsorshipStatus: "Not fully assessable"
  conflictsOfInterest: "Not stated in the accessible PubMed record."
  conflictOfInterestStatus: "Not fully assessable"

- sourceId: S12
  title: "Spermidine in health and disease"
  authors: "Frank Madeo, Tobias Eisenberg, Fabrizio Pietrocola, Guido Kroemer"
  year: 2018
  url: https://doi.org/10.1126/science.aan2788
  kind: "Mechanistic review"
  insight: "Explains polyamine biology, autophagy-related mechanisms, and preclinical longevity findings."
  limitation: "Mechanistic and preclinical rationale does not establish human clinical efficacy."
  funding: "See article disclosures."
  sponsorshipStatus: "Review article"
  conflictsOfInterest: "Not summarized here; some authors are linked to the spermidine research ecosystem."
  conflictOfInterestStatus: "Requires article-level disclosure review"

- sourceId: S13
  title: "GRAS Notice 889, Wheat germ extract"
  authors: "U.S. Food and Drug Administration; notifier: The Longevity Labs GmbH"
  year: 2020
  url: https://www.fda.gov/media/138730/download?attachment=
  kind: "Regulatory GRAS notice"
  insight: "Describes proposed food uses and a safety rationale for spermidine-rich wheat-germ extract, including a notifier-estimated exposure up to 12 mg spermidine/day."
  limitation: "Notifier-submitted food-safety dossier; it does not demonstrate efficacy or approval for disease treatment."
  funding: "Commercial submission by The Longevity Labs GmbH."
  sponsorshipStatus: "Industry-submitted regulatory dossier"
  conflictsOfInterest: "Notifier had a direct commercial interest in the ingredient."
  conflictOfInterestStatus: "Inherent commercial interest disclosed by submission context"
```

## Legal

In the United States, the cited FDA document is a GRAS notice for specified food uses of spermidine-rich wheat-germ extract. It is not an FDA approval of spermidine as a drug, cognitive enhancer, anti-aging treatment, or longevity intervention. Product labels may report extract mass rather than elemental spermidine mass, and legal status, labeling, and permitted claims vary by jurisdiction. [S1][S13] ([fda.gov](https://www.fda.gov/media/138730/download?attachment=))

```yaml
- jurisdiction: United States
  status: "FDA GRAS notice exists for specified food uses of spermidine-rich wheat-germ extract"
  sourceId: S13

- distinction: "GRAS food-use status is not drug approval or efficacy evidence"
  sourceId: S13

- labeling: "Extract mass and actual spermidine mass are distinct quantities"
  sourceId: S1
```

## Research Metadata
- **Total research steps**: 66
- **Search queries executed**: 9
- **Citations found**: 9
- **Task ID**: resp_07e89aad7072fac6016ac94e77fad487d2aca7ca2a50eb4e24
- **Execution time**: 503.54 seconds

## Citations
1. [Effects of Spermidine Supplementation on Cognition and Biomarkers in Older Adults With Subjective Cognitive Decline: A Randomized Clinical Trial - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9136623/)
2. [Higher spermidine intake is linked to lower mortality: a prospective population-based study - The American Journal of Clinical Nutrition](https://ajcn.nutrition.org/article/S0002-9165%2822%2902930-6/fulltext?utm_source=openai)
3. [High-Dose Spermidine Supplementation Does Not Increase Spermidine Levels in Blood Plasma and Saliva of Healthy Adults: A Randomized Placebo-Controlled Pharmacokinetic and Metabolomic Study - PubMed](https://pubmed.ncbi.nlm.nih.gov/37111071/?utm_source=openai)
4. [The positive effect of spermidine in older adults suffering from dementia: First results of a 3-month trial - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8116233/)
5. [The effect of spermidine on memory performance in older adults at risk for dementia: A randomized controlled trial - PubMed](https://pubmed.ncbi.nlm.nih.gov/30388439/)
6. [Higher spermidine intake is linked to lower mortality: a prospective population-based study - PubMed](https://pubmed.ncbi.nlm.nih.gov/29955838/?utm_source=openai)
7. [Frontiers | The association of dietary spermidine with all-cause mortality and CVD mortality: The U.S. National Health and Nutrition Examination Survey, 2003 to 2014](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.949170/full?utm_source=openai)
8. [A comprehensive review of spermidine: Safety, health effects, absorption and metabolism, food materials evaluation, physical and chemical processing, and bioprocessing - PubMed](https://pubmed.ncbi.nlm.nih.gov/35478379/)
9. [GRAS Notice 889, Wheat germ extract](https://www.fda.gov/media/138730/download?attachment=)
