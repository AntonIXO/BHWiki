# Research Report: Research exactly magnesium oxide (slug magnesium-oxide). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover elemental dose, absorption compared with other forms only when directly studied, constipation/migraine/deficiency clinical contexts and actual endpoints, lower absorption versus adequacy, laxative effects, renal hypermagnesemia, and medication binding. Do not borrow sleep evidence from other salts. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: magnesium-oxide
title: Magnesium oxide
x-shape:
  kind: compound
  formula: MgO
  category: inorganic magnesium salt
  evidenceScope: direct-human-and-regulatory
  jurisdiction: United States
---

# Magnesium oxide

## Summary

Magnesium oxide (MgO) is an inorganic magnesium salt with a high elemental-magnesium fraction: approximately 60.3% by mass. A 400 mg tablet commonly supplies 241.3 mg elemental magnesium. Direct human comparisons generally found lower absorption than the directly tested magnesium chloride, lactate, aspartate, citrate, or amino-acid-chelate preparations, but lower relative absorption is not equivalent to zero clinical value. (MO-01, MO-02, MO-10) ([dailymed.nlm.nih.gov](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=31bc45c7-ba92-bad0-e063-6394a90a9af8))

Direct clinical evidence is strongest for short-term constipation treatment; migraine evidence is small and preliminary; deficiency evidence is context-specific, including prevention of cisplatin-associated hypomagnesemia. Unabsorbed magnesium produces an osmotic laxative effect. Reduced kidney function substantially increases the risk of MgO-associated hypermagnesemia. (MO-03–MO-09) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/?utm_source=openai))

## Description

MgO is sold in tablets, capsules, powders, antacid products, and dietary supplements. Product labels identify the compound mass and, in some products, separately state elemental magnesium. Clinical evidence for MgO should not automatically be transferred to other magnesium salts, and evidence for another salt should not be used to support a MgO-specific claim. (MO-10, MO-14) ([dailymed.nlm.nih.gov](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=31bc45c7-ba92-bad0-e063-6394a90a9af8))

## Evidence note

Absorption studies summarized here measured urinary magnesium excretion, serum magnesium, or related biomarkers rather than complete isotope-based whole-body balance. The well-known “4%” MgO absorption value came from one small study using an indirect urinary-excretion method and should not be treated as a universal absorption constant. (MO-01, MO-02) ([researchgate.net](https://www.researchgate.net/profile/Mark-Graber/publication/11563416_Bioavallability_of_US_commercial_magnesium_preparations/links/54996da00cf22a8313961916/Bioavallability-of-US-commercial-magnesium-preparations.pdf?origin=publication_detail&utm_source=openai))

The constipation trials were short, conducted in Japan, and predominantly enrolled women. The pediatric migraine study did not establish superiority over placebo, while the adult study compared MgO with valproate rather than placebo. The deficiency trial concerned cisplatin-treated cancer patients and evaluated prevention of falling serum magnesium, not all causes of deficiency. No sleep benefit is imported from studies of other magnesium salts. (MO-03–MO-07) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31587548/?utm_source=openai))

## Doses

The amounts below are study or product-label amounts, not a universal regimen. Elemental equivalents marked “derived” apply the approximately 60.3% MgO conversion shown on a current product label. (MO-03, MO-05–MO-07, MO-10) ([dailymed.nlm.nih.gov](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=31bc45c7-ba92-bad0-e063-6394a90a9af8))

```yaml
- context: elemental_conversion
  amount: "400 mg magnesium oxide"
  elemental_magnesium: "241.3 mg"
  calculation: "400 × 0.603"
  sourceId: MO-10

- context: chronic_constipation_trial
  amount: "500 mg MgO three times daily"
  total_mgo: "1.5 g/day"
  elemental_equivalent: "approximately 904.5 mg/day, derived"
  duration: "28 days"
  sourceId: MO-03

- context: adult_migraine_trial
  amount: "500 mg MgO/day"
  elemental_equivalent: "approximately 301.5 mg/day if the product was 60.3% elemental, derived"
  duration: "8 weeks per treatment period"
  sourceId: MO-06

- context: pediatric_migraine_trial
  amount: "9 mg/kg/day MgO in three divided doses with food"
  elemental_equivalent: "approximately 5.4 mg/kg/day, derived"
  duration: "16 weeks"
  sourceId: MO-05

- context: cisplatin_hypomagnesemia_prevention
  amount: "500 mg MgO per 50 mg/m2 cisplatin"
  elemental_equivalent: "approximately 301.5 mg per 50 mg/m2, derived"
  schedule: "two to three divided doses between chemotherapy cycles"
  sourceId: MO-07

- context: United_States_OTC_antacid_label
  amount: "one tablet twice daily; maximum two tablets in 24 hours on the cited label"
  elemental_magnesium: "241.3 mg/tablet"
  limitation: "product-specific labeling, not a general MgO dosing standard"
  sourceId: MO-10
```

## Pharmacokinetics

MgO has high elemental content but relatively low solubility. In direct human comparisons, urinary-excretion measures generally favored the more soluble preparations tested. The clinical meaning of a lower fractional absorption depends on dose, baseline magnesium status, ongoing losses, intestinal function, and renal clearance. (MO-01, MO-02, MO-08, MO-09) ([researchgate.net](https://www.researchgate.net/profile/Mark-Graber/publication/11563416_Bioavallability_of_US_commercial_magnesium_preparations/links/54996da00cf22a8313961916/Bioavallability-of-US-commercial-magnesium-preparations.pdf?origin=publication_detail&utm_source=openai))

```yaml
- parameter: fractional_absorption
  finding: "Approximately 4% for MgO in 16 healthy volunteers given about 21 mEq/day, measured by incremental urinary magnesium excretion"
  comparison: "Magnesium chloride, lactate, and aspartate showed significantly higher and approximately equivalent bioavailability in that study"
  limitation: "Indirect urinary endpoint; small healthy-volunteer study; commercial preparations"
  sourceId: MO-01

- parameter: sixty_day_relative_bioavailability
  finding: "At 300 mg elemental magnesium/day for 60 days, citrate and amino-acid chelate produced greater urinary magnesium excretion than MgO"
  additional_endpoint: "Citrate produced higher mean serum magnesium than the other groups; MgO did not differ from placebo on several measured biomarkers"
  limitation: "46 healthy participants; surrogate absorption markers"
  sourceId: MO-02

- parameter: systemic_adequacy
  finding: "Lower relative absorption does not prove clinical inadequacy"
  direct_example: "In a cisplatin trial, MgO reduced the fall in serum magnesium and lowered the final prevalence of hypomagnesemia"
  interpretation: "This is context-specific evidence, not proof that MgO corrects every deficiency state"
  sourceId:
    - MO-01
    - MO-07

- parameter: renal_elimination
  finding: "Accumulated absorbed magnesium becomes clinically important when renal excretion is impaired"
  evidence: "MgO-associated hypermagnesemia occurred disproportionately in patients with reduced eGFR, high BUN, advanced age, or prolonged use"
  sourceId:
    - MO-08
    - MO-09

- parameter: luminal_fraction
  finding: "The incompletely absorbed fraction remains in the intestinal lumen and contributes to osmotic water retention"
  sourceId: MO-04
```

## Modifiers

```yaml
- modifier: formulation
  effect: "Solubility and the accompanying anion influence urinary and serum bioavailability"
  directly_studied_forms: "chloride, lactate, aspartate, citrate, amino-acid chelate"
  sourceId:
    - MO-01
    - MO-02

- modifier: kidney_function
  effect: "Lower eGFR and higher BUN increase the probability of MgO-associated hypermagnesemia"
  sourceId: MO-08

- modifier: dose_and_duration
  effect: "Risk increased with MgO doses at or above 1,650 mg/day and administration lasting at least 36 days in one cohort"
  sourceId: MO-08

- modifier: intestinal_transit
  effect: "Severe constipation or bowel dysfunction may prolong luminal magnesium contact; the hypermagnesemia literature proposes this as a contributor, but it is not quantitatively established"
  sourceId: MO-09

- modifier: ongoing_magnesium_loss
  effect: "Cisplatin and some diuretics can increase magnesium loss, changing the amount needed to maintain serum magnesium"
  sourceId: MO-07

- modifier: medication_status
  effect: "Long-term proton-pump inhibitors can cause hypomagnesemia; loop and thiazide diuretics increase urinary magnesium loss, while potassium-sparing diuretics can reduce it"
  sourceId: MO-11
```

## Effects

```yaml
- effect: osmotic_laxation
  description: "Nonabsorbed Mg creates an intestinal osmotic gradient, increasing net water and electrolyte secretion and softening stool"
  evidence: "Directly described in the chronic-constipation guideline"
  sourceId: MO-04

- effect: antacid_action
  description: "OTC MgO products are labeled to relieve acid indigestion and upset stomach"
  sourceId: MO-10

- effect: serum_magnesium_support
  description: "MgO can reduce chemotherapy-associated serum-magnesium decline in a defined cisplatin-treated population"
  sourceId: MO-07

- effect: gastrointestinal_adverse_effects
  description: "Loose stool, diarrhea, abdominal cramping, nausea, and gas are plausible or reported effects; the product label specifically warns of a laxative effect"
  sourceId:
    - MO-04
    - MO-10

- effect: sleep
  status: "No MgO-specific sleep outcome is asserted here"
  limitation: "Evidence from citrate, glycinate, chloride, or other salts is not substituted for MgO evidence"
  sourceId: MO-03
```

## Outcomes

Direct clinical endpoints were favorable for constipation and cisplatin-associated hypomagnesemia, while migraine findings were less definitive. (MO-03, MO-05–MO-07) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/31587548/?utm_source=openai))

```yaml
- condition: chronic_constipation
  trial: "Mori et al., randomized double-blind placebo-controlled trial"
  population: "34 Japanese women with mild-to-moderate chronic constipation; 16 placebo and 17 MgO analyzed"
  regimen: "1.5 g MgO/day for 28 days"
  primary_endpoint: "Overall symptomatic improvement"
  result: "70.6% improved with MgO versus 25.0% with placebo; P=0.015"
  secondary_endpoints: "Spontaneous bowel movements improved; Bristol stool form, colonic transit time, and constipation-related quality of life improved; complete spontaneous bowel movement response was not significantly different, P=0.76"
  limitation: "Small, short, single-site study"
  sourceId: MO-03

- condition: chronic_constipation
  evidence_summary: "AGA/ACG evidence synthesis of two randomized trials"
  regimen: "1.5 g MgO/day for 4 weeks"
  pooled_result: "Complete spontaneous bowel movements increased by 4.29/week and spontaneous bowel movements by 3.59/week versus placebo; response RR 3.93"
  harm_signal: "Diarrhea leading to dose change or discontinuation was not clearly different from placebo; RR 1.07"
  certainty: "Very low for stool-frequency estimates; moderate for responder rate and diarrhea"
  sourceId: MO-04

- condition: pediatric_migraine
  trial: "Wang et al., randomized double-blind placebo-controlled trial"
  population: "118 children aged 3–17 years randomized; 86 completed"
  regimen: "9 mg/kg/day MgO for 16 weeks"
  endpoint: "Headache days per two-week interval, severity, and associated features"
  result: "Headache frequency decreased over time in the MgO group, P=0.0037; the between-group slope was not significant, P=0.88; severity was lower with MgO, P=0.0029"
  interpretation: "The authors stated that superiority to placebo was not unequivocally established"
  sourceId: MO-05

- condition: adult_migraine
  trial: "Karimi, Razian, and Heidari, randomized double-blind crossover trial"
  population: "70 randomized; 63 analyzed"
  regimen: "500 mg MgO/day versus sodium valproate 800 mg/day, 8 weeks per period with a 4-week washout"
  endpoint: "Monthly migraine attacks, moderate/severe headache days, and headache hours"
  result: "Mean attacks/month were 1.72 with MgO and 1.27 with valproate; mean headache days/month were 2.09 and 2.22; mean duration was 15.50 and 13.38 hours, respectively; no significant clinical difference was reported"
  limitation: "Small single-center active-comparator study without placebo"
  sourceId: MO-06

- condition: cisplatin_associated_hypomagnesemia
  trial: "Yeganeh et al., open-label randomized controlled trial"
  population: "62 adults with cancer receiving cisplatin; 31 MgO and 31 control"
  regimen: "500 mg MgO per 50 mg/m2 cisplatin, divided two to three times between cycles"
  endpoint: "Serum magnesium change and hypomagnesemia prevalence"
  result: "Serum magnesium differed between groups, P=0.01; final hypomagnesemia prevalence was 10.7% with MgO versus 23.1% in controls"
  limitation: "Open-label, small, chemotherapy-specific prevention study"
  sourceId: MO-07
```

## Mechanisms

```yaml
- mechanism: dissolution_and_ion_release
  description: "In gastric acid, MgO can be converted into soluble magnesium-containing species, allowing some Mg2+ to enter the intestinal absorption pool"
  limitation: "Actual absorption varies with formulation, dose, luminal conditions, and gastrointestinal function"
  sourceId:
    - MO-01
    - MO-02

- mechanism: osmotic_laxation
  description: "Magnesium that remains unabsorbed in the lumen increases osmotic activity, causing net water and electrolyte secretion"
  clinical_consequence: "Stool softening and increased bowel movement frequency; excessive effect produces diarrhea"
  sourceId: MO-04

- mechanism: magnesium_repletion
  description: "Absorbed Mg2+ contributes to circulating and intracellular magnesium pools; serum concentration is influenced by ongoing losses and renal clearance"
  sourceId:
    - MO-07
    - MO-08

- mechanism: drug_complexation
  description: "Divalent magnesium can form poorly absorbed complexes with susceptible medicines, especially tetracyclines, quinolones, and some oral bisphosphonates"
  sourceId: MO-11

- mechanism: migraine_hypothesis
  description: "Mg2+-dependent neuronal and vascular mechanisms are biologically plausible, but the MgO trials summarized here establish clinical endpoints rather than a specific molecular mechanism"
  sourceId:
    - MO-05
    - MO-06
```

## Cautions

Reduced kidney function is the dominant MgO-specific safety modifier in the available clinical literature. (MO-08, MO-09, MO-10) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/30805197/?utm_source=openai))

```yaml
- risk: renal_impairment
  evidence: "The product label warns about kidney disease; renal dysfunction reduces magnesium clearance"
  sourceId: MO-10

- risk: hypermagnesemia_cohort
  finding: "Among 320 hospitalized MgO users, 75 (23%) developed serum magnesium >=2.5 mg/dL; 62 had grade 1 and 13 had grade 3 hypermagnesemia"
  independent_risk_factors: "eGFR <=55.4 mL/min, BUN >=22.4 mg/dL, MgO dose >=1,650 mg/day, and duration >=36 days"
  sourceId: MO-08

- risk: severe_toxicity
  finding: "A case series described four elderly patients with renal dysfunction and symptomatic MgO-associated hypermagnesemia; one had a lethal course"
  possible_manifestations: "altered consciousness, hypotension, bradycardia, respiratory failure, and neuromuscular depression"
  sourceId: MO-09

- risk: gastrointestinal_excess
  finding: "Diarrhea, abdominal cramping, nausea, gas, and excessive stool softening can occur because a substantial fraction remains luminal"
  sourceId:
    - MO-04
    - MO-10

- risk: dosing_misinterpretation
  finding: "Compound mass and elemental magnesium are different quantities; a 400 mg MgO tablet may contain about 241.3 mg elemental magnesium"
  sourceId: MO-10
```

## Claims

```yaml
- claim: "MgO provides a high amount of elemental magnesium by weight"
  status: supported
  qualification: "Approximately 60.3%; product labels must be checked"
  sourceId: MO-10

- claim: "MgO is less well absorbed than some other magnesium forms"
  status: supported_with_scope
  qualification: "Directly shown against chloride, lactate, aspartate, citrate, and amino-acid chelate in specific human studies; not a universal ranking of every magnesium product"
  sourceId:
    - MO-01
    - MO-02

- claim: "Lower absorption makes MgO clinically useless"
  status: unsupported
  qualification: "Constipation and cisplatin-associated hypomagnesemia trials showed clinically relevant endpoints despite lower relative absorption"
  sourceId:
    - MO-03
    - MO-07

- claim: "MgO treats chronic constipation"
  status: supported_but_limited
  qualification: "Short-term randomized evidence supports improved bowel frequency, stool form, transit time, and response; certainty for some outcomes is low"
  sourceId: MO-04

- claim: "MgO prevents migraine"
  status: conditional
  qualification: "Small pediatric and adult trials report benefit or similarity to valproate, but placebo superiority and generalizability remain uncertain"
  sourceId:
    - MO-05
    - MO-06

- claim: "MgO corrects any magnesium deficiency"
  status: unsupported_generalization
  qualification: "Evidence supports prevention of cisplatin-associated decline, not all deficiency causes or severe symptomatic deficiency"
  sourceId: MO-07

- claim: "MgO improves sleep"
  status: not_established_here
  qualification: "No MgO-specific sleep endpoint is used; evidence from other salts is excluded"
  sourceId: MO-05

- claim: "MgO is safe in kidney disease"
  status: contradicted
  qualification: "Renal impairment is a documented risk factor for accumulation and severe hypermagnesemia"
  sourceId:
    - MO-08
    - MO-09
```

## Interactions

Magnesium binding is most clinically relevant when MgO is taken near medicines whose absorption depends on remaining uncomplexed in the intestinal lumen. (MO-11, MO-12) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai))

```yaml
- drug_group: tetracyclines
  examples: "doxycycline, demeclocycline, tetracycline"
  interaction: "Magnesium can form insoluble complexes and reduce antibiotic absorption"
  spacing_described_by_ods: "at least 2 hours before or 4–6 hours after a magnesium-containing product"
  sourceId: MO-11

- drug_group: quinolone_antibiotics
  examples: "ciprofloxacin, levofloxacin"
  interaction: "Magnesium-containing products can reduce quinolone absorption through polyvalent-cation complexation"
  spacing_described_by_ods: "at least 2 hours before or 4–6 hours after, depending on the antibiotic label"
  sourceId: MO-11

- drug_group: oral_bisphosphonates
  examples: "alendronate and related medicines"
  interaction: "Magnesium-rich supplements or medicines can reduce oral bisphosphonate absorption"
  spacing_described_by_ods: "at least 2 hours apart"
  sourceId: MO-11

- drug_group: levothyroxine
  interaction: "Case reports describe thyroid under-replacement during use of antacid/laxative products containing magnesium; in vitro testing in one report found no adsorption with MgO alone, so the MgO-only interaction remains mixed"
  sourceId: MO-12

- drug_group: medicines_affecting_magnesium_status
  examples: "long-term proton-pump inhibitors, loop diuretics, thiazide diuretics, potassium-sparing diuretics"
  interaction: "These medicines can respectively lower or reduce urinary magnesium handling, changing serum-magnesium response and toxicity risk"
  sourceId: MO-11

- drug_group: prescription_medicines_general
  interaction: "The cited U.S. MgO label carries a general warning that antacids may interact with prescription drugs"
  sourceId: MO-10
```

## Experience links

```yaml
- label: "Constipation trial with patient-reported quality-of-life and stool outcomes"
  url: "https://pubmed.ncbi.nlm.nih.gov/31587548/"
  sourceId: MO-03

- label: "Pediatric migraine trial with headache-day and severity outcomes"
  url: "https://pubmed.ncbi.nlm.nih.gov/12786918/"
  sourceId: MO-05

- label: "Adult migraine crossover trial with monthly attacks, headache days, and duration"
  url: "https://pubmed.ncbi.nlm.nih.gov/30798472/"
  sourceId: MO-06

- label: "Cisplatin-associated hypomagnesemia trial with serum-magnesium endpoints"
  url: "https://pubmed.ncbi.nlm.nih.gov/27057522/"
  sourceId: MO-07

- label: "No anecdotal or community experience evidence used"
  status: "not included as efficacy evidence"
```

## References

```yaml
- sourceId: MO-01
  title: "Bioavailability of US commercial magnesium preparations"
  authors: "Muhammad Firoz; Mark Graber"
  year: 2001
  url: "https://pubmed.ncbi.nlm.nih.gov/11794633/"
  kind: "Human open-label randomized crossover bioavailability study"
  insight: "MgO fractional absorption was approximately 4%; chloride, lactate, and aspartate were higher and approximately equivalent."
  limitation: "Small healthy-volunteer study using urinary magnesium excretion as an indirect endpoint and commercial preparations."
  funding: "Not reported in the cited record"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-02
  title: "Mg citrate found more bioavailable than other Mg preparations in a randomised, double-blind study"
  authors: "Ann F Walker; Georgios Marakis; Samantha Christie; Martyn Byng"
  year: 2003
  url: "https://pubmed.ncbi.nlm.nih.gov/14596323/"
  kind: "Randomized double-blind placebo-controlled human trial"
  insight: "At 300 mg elemental magnesium/day for 60 days, citrate and amino-acid chelate produced greater urinary magnesium excretion than MgO."
  limitation: "46 healthy participants; surrogate bioavailability outcomes rather than clinical deficiency correction."
  funding: "Research Support, Non-U.S. Gov't indexed; specific funder not stated"
  sponsorshipStatus: "Not specified"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-03
  title: "A Randomized Double-blind Placebo-controlled Trial on the Effect of Magnesium Oxide in Patients With Chronic Constipation"
  authors: "Sumire Mori; Toshihiko Tomita; Kazuki Fujimura; Haruki Asano; Tomohiro Ogawa; Takahisa Yamasaki; Takashi Kondo; Tomoaki Kono; Katsuyuki Tozawa; Tadayuki Oshima; Hirokazu Fukui; Takeshi Kimura; Jiro Watari; Hiroto Miwa"
  year: 2019
  url: "https://pubmed.ncbi.nlm.nih.gov/31587548/"
  kind: "Randomized double-blind placebo-controlled clinical trial"
  insight: "1.5 g/day MgO for 4 weeks improved overall constipation response, spontaneous bowel movements, stool form, transit time, and constipation-related quality of life."
  limitation: "Small Japanese single-site sample, predominantly female, short duration."
  funding: "Not reported in the cited record"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-04
  title: "American Gastroenterological Association-American College of Gastroenterology Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic Constipation"
  authors: "American Gastroenterological Association and American College of Gastroenterology"
  year: 2023
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/"
  kind: "Clinical practice guideline and evidence synthesis"
  insight: "Pooled MgO trials showed increased spontaneous and complete spontaneous bowel movements and higher response rates; renal insufficiency is a key caution."
  limitation: "Very low certainty for some frequency estimates; trials were short and largely Japanese."
  funding: "Guideline-specific funding not reproduced in the cited summary"
  sponsorshipStatus: "Professional-society guideline"
  conflictsOfInterest: "Article disclosures are reported in the source"
  conflictOfInterestStatus: "Not independently adjudicated here"

- sourceId: MO-05
  title: "Oral magnesium oxide prophylaxis of frequent migrainous headache in children: a randomized, double-blind, placebo-controlled trial"
  authors: "Fong Wang; Stephen K. Van Den Eeden; Lynn M. Ackerson; Susan E. Salk; Robyn H. Reince; Ronald J. Elin"
  year: 2003
  url: "https://pubmed.ncbi.nlm.nih.gov/12786918/"
  kind: "Pediatric randomized double-blind placebo-controlled trial"
  insight: "9 mg/kg/day MgO reduced headache frequency over time and reduced severity, but did not establish a significant between-group frequency slope."
  limitation: "High attrition and incomplete placebo superiority; pediatric population only."
  funding: "Not reported in the cited abstract"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-06
  title: "The efficacy of magnesium oxide and sodium valproate in prevention of migraine headache: a randomized, controlled, double-blind, crossover study"
  authors: "Narges Karimi; Azadeh Razian; Mohammad Heidari"
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/30798472/"
  kind: "Randomized double-blind active-comparator crossover trial"
  insight: "500 mg/day MgO produced migraine outcomes similar to sodium valproate in the analyzed sample."
  limitation: "Small single-center trial, active comparator without placebo, 7 dropouts."
  funding: "Grant 791/Mazandaran University of Medical Sciences"
  sponsorshipStatus: "Academic grant"
  conflictsOfInterest: "Not reported in the cited record"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-07
  title: "Effect of Oral Magnesium Oxide Supplementation on Cisplatin-Induced Hypomagnesemia in Cancer Patients: A Randomized Controlled Trial"
  authors: "Maryam Zarif Yeganeh; Masoud Vakili; Ali Shahriari-Ahmadi; Marzieh Nojomi"
  year: 2016
  url: "https://pubmed.ncbi.nlm.nih.gov/27057522/"
  kind: "Open-label randomized controlled prevention trial"
  insight: "Dose-linked MgO reduced serum-magnesium decline and final hypomagnesemia prevalence during cisplatin chemotherapy."
  limitation: "Small open-label cancer-specific study; prevention rather than treatment of generalized deficiency."
  funding: "Not reported in the cited record"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-08
  title: "Risk factors for the development of hypermagnesemia in patients prescribed magnesium oxide: a retrospective cohort study"
  authors: "Eri Wakai; Kenji Ikemura; Hiroko Sugimoto; Takuya Iwamoto; Masahiro Okuda"
  year: 2019
  url: "https://pubmed.ncbi.nlm.nih.gov/30805197/"
  kind: "Retrospective hospital cohort"
  insight: "Hypermagnesemia occurred in 23% of the analyzed MgO users; lower eGFR, higher BUN, higher dose, and longer duration were independent risk factors."
  limitation: "Hospital-based retrospective design; applicability to healthy supplement users is limited."
  funding: "Not reported in the cited record"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-09
  title: "Severe hypermagnesemia induced by magnesium oxide ingestion: a case series"
  authors: "Hiroki Yamaguchi; Hisaki Shimada; Kazuhiro Yoshita; Yutaka Tsubata; Kouzou Ikarashi; Tetsuo Morioka; Noriko Saito; Shinji Sakai; Ichiei Narita"
  year: 2019
  url: "https://pubmed.ncbi.nlm.nih.gov/30136128/"
  kind: "Case series"
  insight: "Four elderly patients with renal dysfunction developed symptomatic MgO-associated hypermagnesemia; one course was fatal."
  limitation: "Small uncontrolled case series; cannot estimate incidence."
  funding: "Not reported"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Authors declared that no conflict of interest existed"
  conflictOfInterestStatus: "None declared"

- sourceId: MO-10
  title: "MAGNESIUM OXIDE tablet"
  authors: "U.S. National Library of Medicine, DailyMed; Belleview Biosciences LLC"
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3aba26ec-5ebe-433e-9524-fb355c5a0198&version=104"
  kind: "Current U.S. OTC product label"
  insight: "400 mg MgO supplies 241.3 mg elemental magnesium; label includes antacid use, kidney-disease warning, prescription-drug interaction warning, and laxative-effect warning."
  limitation: "Product-specific labeling; not an efficacy trial."
  funding: "Not applicable"
  sponsorshipStatus: "Manufacturer label in regulatory database"
  conflictsOfInterest: "Not applicable"
  conflictOfInterestStatus: "Not applicable"

- sourceId: MO-11
  title: "Magnesium - Health Professional Fact Sheet"
  authors: "National Institutes of Health, Office of Dietary Supplements"
  year: 2026
  url: "https://ods.od.nih.gov/factsheets/magnesium-healthprofessional/"
  kind: "Government evidence and interaction fact sheet"
  insight: "Summarizes relative bioavailability, laxative effects, and interactions with antibiotics, bisphosphonates, diuretics, proton-pump inhibitors, and zinc."
  limitation: "Secondary synthesis; web content is periodically updated."
  funding: "U.S. federal government"
  sponsorshipStatus: "Government publication"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not applicable to the cited government fact sheet"

- sourceId: MO-12
  title: "Intestinal adsorption of levothyroxine by antacids and laxatives: case stories and in vitro experiments"
  authors: "H. Mersebach; A. K. Rasmussen; L. Kirkegaard; U. Feldt-Rasmussen"
  year: 1999
  url: "https://pubmed.ncbi.nlm.nih.gov/10193669/"
  kind: "Case reports and in vitro interaction study"
  insight: "Reported levothyroxine under-replacement with magnesium-containing laxative use, but in vitro MgO alone did not show the same adsorption signal."
  limitation: "Two cases and in vitro data; product combinations and mechanisms differed."
  funding: "Not reported"
  sponsorshipStatus: "Not reported"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Not ascertainable from the cited record"

- sourceId: MO-13
  title: "Questions and Answers on Dietary Supplements"
  authors: "U.S. Food and Drug Administration"
  year: 2026
  url: "https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements"
  kind: "U.S. regulatory guidance"
  insight: "A dietary supplement represented as treating, preventing, or curing a specific disease is regulated as a drug; structure/function claims require the statutory disclaimer."
  limitation: "U.S.-specific regulatory information; not clinical evidence."
  funding: "U.S. federal government"
  sponsorshipStatus: "Government publication" conflictOfInterestStatus: "Not applicable"

- sourceId: MO-14
  title: "OTC Monograph M001: Antacid Products for Over-the-Counter Human Use"
  authors: "U.S. Food and Drug Administration"
  year: 2022
  url: "https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf"
  kind: "U.S. OTC monograph"
  insight: "Lists magnesium oxide among magnesium-containing antacid active ingredients."
  limitation: "Regulatory monograph, not a clinical efficacy comparison of MgO formulations."
  funding: "U.S. federal government"
  sponsorshipStatus: "Government regulatory document"
  conflictsOfInterest: "Not applicable"
  conflictOfInterestStatus: "Not applicable"
```

## Legal

In the United States, MgO may appear in OTC antacid products under the FDA antacid monograph and may also be marketed as a dietary supplement. The regulatory category depends on product labeling, intended use, and claims. A dietary supplement cannot legally be represented as treating, preventing, or curing a specific disease unless regulated as a drug. (MO-10, MO-13, MO-14) ([dps-admin.fda.gov](https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf))

```yaml
- jurisdiction: United_States
  status: "Magnesium oxide is listed as an OTC antacid active ingredient under FDA Monograph M001"
  sourceId: MO-14

- product_category: dietary_supplement
  status: "Dietary-supplement labeling may use nutrient-content or structure/function claims subject to FDA requirements and disclaimer rules"
  sourceId: MO-13

- disease_claims
  status: "A product sold as a supplement and represented as treating, preventing, or curing a specific disease meets the regulatory definition of a drug"
  sourceId: MO-13

- scope_note
  status: "This legal summary is U.S.-specific; other jurisdictions may classify MgO differently"
  sourceId:
    - MO-13
    - MO-14
```

## Research Metadata
- **Total research steps**: 66
- **Search queries executed**: 9
- **Citations found**: 12
- **Task ID**: resp_0617e3147c0b868a016ac94e8ba2c487d290044fa12b484b6c
- **Execution time**: 639.68 seconds

## Citations
1. [Magnesium Oxide](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=31bc45c7-ba92-bad0-e063-6394a90a9af8)
2. [American Gastroenterological Association-American College of Gastroenterology Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic Constipation - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/?utm_source=openai)
3. [Magnesium Research (2001) 14, 4, 257–262  ORIGINAL ARTICLE](https://www.researchgate.net/profile/Mark-Graber/publication/11563416_Bioavallability_of_US_commercial_magnesium_preparations/links/54996da00cf22a8313961916/Bioavallability-of-US-commercial-magnesium-preparations.pdf?origin=publication_detail&utm_source=openai)
4. [A Randomized Double-blind Placebo-controlled Trial on the Effect of Magnesium Oxide in Patients With Chronic Constipation - PubMed](https://pubmed.ncbi.nlm.nih.gov/31587548/?utm_source=openai)
5. [Risk factors for the development of hypermagnesemia in patients prescribed magnesium oxide: a retrospective cohort study - PubMed](https://pubmed.ncbi.nlm.nih.gov/30805197/?utm_source=openai)
6. [Magnesium - Health Professional Fact Sheet](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai)
7. [Over-the-Counter (OTC) Monograph M001: Antacid Products for Over-the-Counter Human Use](https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2022-10/OTC%20Monograph_M001-Antacid%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf)
8. [American Gastroenterological Association-American College of Gastroenterology Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic Constipation - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10544839/)
9. [Magnesium Research (2001) 14, 4, 257–262  ORIGINAL ARTICLE](https://www.researchgate.net/profile/Mark-Graber/publication/11563416_Bioavallability_of_US_commercial_magnesium_preparations/links/54996da00cf22a8313961916/Bioavallability-of-US-commercial-magnesium-preparations.pdf?origin=publication_detail)
10. [A Randomized Double-blind Placebo-controlled Trial on the Effect of Magnesium Oxide in Patients With Chronic Constipation - PubMed](https://pubmed.ncbi.nlm.nih.gov/31587548/)
11. [Risk factors for the development of hypermagnesemia in patients prescribed magnesium oxide: a retrospective cohort study - PubMed](https://pubmed.ncbi.nlm.nih.gov/30805197/)
12. [Magnesium - Health Professional Fact Sheet](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/)
