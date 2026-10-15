---
slug: magnesium-chloride
label: Magnesium chloride
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
x-shape:
  - slug
  - label
  - editorialStatus
  - reviewedAt
  - summary
  - description
  - evidenceNote
  - doses
  - pharmacokinetics
  - modifiers
  - effects
  - outcomes
  - mechanisms
  - cautions
  - claims
  - interactions
  - experienceLinks
  - references
  - legal
---

## Summary

```yaml
- text: "Magnesium chloride supplies magnesium. Small human comparisons found greater absorption than the tested magnesium oxide preparations, but not superiority to every other salt."
  sourceId: firoz-2001
- text: "Oral trials in selected people with hypomagnesemia reported improvements in magnesium status and some glycemic or blood-pressure measurements. These findings do not establish equivalent benefits in magnesium-replete people or prevention of cardiovascular events."
  sourceId: guerrero-2015
- text: "Direct chloride evidence includes null sleep and overall stress findings, an unblinded positive depression trial, and a small exercise trial with detrimental and null performance findings. Formulation, population and comparator materially affect interpretation."
  sourceId: macian-2022
  supportingSourceIds: [tarleton-2017, bomar-2025]
- text: "Prescription intravenous magnesium chloride is an electrolyte-replacement product, distinct from oral supplementation. Its label includes renal contraindications and potentially serious cardiovascular and respiratory adverse effects."
  sourceId: mylan-2021
```

## Description

```yaml
- identity: "Magnesium chloride"
  formula: "MgCl2"
  anhydrousMolarMass: "95.21 g/mol"
  distinction: "An inorganic magnesium salt; hydrated forms contain additional water mass."
  sourceId: pubchem-mgcl2
- term: "Elemental magnesium"
  meaning: "Magnesium mass, not whole-salt mass. Supplement Facts panels declare elemental magnesium; this is not a comparison with metallic magnesium."
  sourceId: ods-2026
- formulation: "Magnesium chloride hexahydrate"
  formula: "MgCl2·6H2O"
  context: "The inspected injection contains this hydrate. Its concentration cannot be interpreted as an equal concentration of elemental magnesium."
  sourceId: mylan-2021
- formulationBoundary: "Oral liquids, tablets and modified-release products"
  interpretation: "A study of a particular oral preparation does not establish equivalent absorption, tolerability or efficacy for every chloride product, or for topical sprays and baths."
  sourceId: firoz-2001
```

## Evidence note

```yaml
- scope: "Salt-specific human evidence"
  interpretation: "Chloride trials are distinguished from studies of other magnesium salts. Changes in serum magnesium, fasting glucose, HOMA-IR or blood pressure are not automatically clinical-event benefits."
  sourceId: rodriguez-2003
- replication: "Several positive metabolic studies share investigators"
  interpretation: "Rodríguez-Morán and Guerrero-Romero recur across the cited diabetes, hypertension, prediabetes and metabolic-syndrome trials. Multiple publications therefore do not represent wholly independent research-team replications."
  sourceId: rodriguez-2018
  supportingSourceIds: [rodriguez-2003, guerrero-2009, guerrero-2015]
- access: "Disclosure and formulation limitations"
  interpretation: "Several older studies were assessable principally through abstracts. Unavailable funding, conflicts, hydration state or product assay information is recorded as unknown, not inferred to be absent."
  sourceId: guerrero-2009
- registration: "SeMAFor, NCT03887000"
  interpretation: "The registry identifies a completed study with 75 participants and links the fibromyalgia publication. No tabular results were posted in the retrieved record. Its structured masking field reads NONE despite the title and publication describing double-blinding; this discrepancy was not resolved."
  sourceId: semafor-registry
```

## Doses

```yaml
- basis: "Pure anhydrous MgCl2"
  elementalFraction: "Approximately 25.53% by mass."
  conversion: "Calculated: 1 g × 24.305/95.21 ≈ 255 mg elemental magnesium."
  limitation: "A chemical mass conversion, not an absorbed dose or a product assay."
  sourceId: pubchem-mgcl2
- basis: "Pure MgCl2·6H2O"
  elementalFraction: "Approximately 11.96% by mass."
  conversion: "Calculated from the hydrate formula: 1 g contains approximately 120 mg elemental magnesium."
  clinicalUnits: "1 mmol magnesium ≈ 24.305 mg; 1 mEq magnesium ≈ 12.15 mg."
  limitation: "Hydrate and anhydrous salt masses are not interchangeable."
  sourceId: mylan-2021
- study: "2003 type 2 diabetes trial"
  elementalDose: "NIH describes 300 mg/day; the primary abstract specifies 2.5 g/day MgCl2 without hydration details."
  sourceId: ods-2026
  supportingSourceIds: [rodriguez-2003]
- study: "2009 hypertension trial"
  reportedDose: "2.5 g MgCl2/day, described by the authors as 450 mg elemental magnesium."
  unresolved: "This equivalence matches neither pure anhydrous salt, approximately 638 mg, nor pure hexahydrate, approximately 299 mg. The reported 450 mg is retained; formulation or assay reconciliation was unavailable."
  sourceId: guerrero-2009
- study: "2015 prediabetes and 2018 metabolic-syndrome trials"
  reportedDose: "30 mL/day of 5% MgCl2 solution, reported as 382 mg elemental magnesium/day, for four months or 16 weeks."
  interpretation: "Consistent with approximately 1.5 g anhydrous MgCl2; not transferable to an unspecified 5% hydrated-salt solution."
  sourceId: guerrero-2015
  supportingSourceIds: [rodriguez-2018]
- formulation: "Inspected prescription injection"
  concentration: "200 mg magnesium chloride hexahydrate/mL; 1.97 mEq magnesium/mL, approximately 23.9 mg elemental magnesium/mL."
  route: "Intravenous use after dilution."
  distinction: "The stated 200 mg/mL is salt concentration, not elemental-magnesium concentration."
  sourceId: mylan-2021
```

## Pharmacokinetics

```yaml
- study: "Comparative oral bioavailability"
  exposure: "Approximately 21 mEq/day, or 255 mg elemental magnesium, in healthy volunteers."
  measurement: "Increment in urinary magnesium excretion."
  finding: "Chloride, lactate and aspartate had greater and approximately equivalent measured bioavailability; oxide performed poorly, with an estimated fractional absorption of 4%."
  limitation: "Urinary recovery is a proxy affected by retention and renal handling. The result is not a universal absolute absorption percentage for chloride."
  sourceId: firoz-2001
- study: "Single-dose liquid magnesium chloride pilot"
  design: "Randomized, single-blind crossover study in 17 healthy adults; 300 mg elemental magnesium as ReMag versus placebo, with 24-hour sampling."
  finding: "Ionized-magnesium exposure and peak concentration increased. Total-serum and urinary-magnesium exposure and peak measures were not significantly different."
  limitation: "No alternative magnesium preparation comparator; no demonstration of superior clinical outcomes."
  sourceId: zhan-2020
- disposition: "Magnesium pools and renal regulation"
  text: "Kidneys regulate magnesium excretion. Serum magnesium poorly reflects total-body stores; normal serum values do not exclude depletion."
  sourceId: ods-2026
- parameter: "Half-life and timing"
  assessment: "The inspected chloride bioavailability studies do not establish a generally applicable oral elimination half-life, fixed absorption percentage or product-independent time to peak. Magnesium is an endogenous ion, not an intact circulating MgCl2 drug molecule."
  sourceId: zhan-2020
  supportingSourceIds: [firoz-2001, ods-2026]
```

## Modifiers

```yaml
- modifier: "Baseline magnesium status and concurrent treatment"
  relevance: "The positive 2003 diabetes trial enrolled people with serum magnesium at or below 0.74 mmol/L receiving glibenclamide, and excluded reduced renal function. It was neither a healthy-user enhancement trial nor a test of replacing diabetes medication."
  sourceId: rodriguez-2003
- modifier: "Population and comparator"
  relevance: "The hypertension trial tested supplementation alongside captopril in hypomagnesemic adults with diabetes, without diuretic treatment. Its blood-pressure changes are not estimates for untreated, magnesium-replete hypertension."
  sourceId: guerrero-2009
- modifier: "Renal eligibility"
  relevance: "SeMAFor excluded creatinine clearance below 30 mL/min. An exclusion threshold is not evidence that every person above it can safely use any magnesium dose."
  sourceId: semafor-registry
- modifier: "Low serum magnesium does not guarantee a clinical response"
  relevance: "A separate magnesium-gluconate trial increased serum magnesium without significantly improving clamp-measured insulin sensitivity. This is other-salt evidence, not a chloride failure or a head-to-head comparison."
  sourceId: drenthen-2024
```

## Effects

```yaml
- effect: "Repletion and glycemic measurements in type 2 diabetes"
  design: "Double-blind randomized trial; 63 participants; 16 weeks; MgCl2 solution versus placebo."
  findings: "Final magnesium was 0.74 versus 0.65 mmol/L; HOMA-IR 3.8 versus 5.0; fasting glucose 8.0 versus 10.3 mmol/L; HbA1c 8.0% versus 10.1%, respectively."
  interpretation: "These are final group values, not changes from baseline. Findings concern selected hypomagnesemic patients and surrogate outcomes."
  sourceId: rodriguez-2003
- effect: "Prediabetes"
  design: "Double-blind randomized trial; 116 hypomagnesemic adults; 382 mg elemental magnesium/day as MgCl2 versus inert placebo for four months."
  findings: "Final fasting glucose was 86.9 versus 98.3 mg/dL and post-load glucose 124.7 versus 136.7 mg/dL. Glycemic status improved in 50.8% versus 7.0%."
  limitation: "Short-term glucose classification, not demonstrated durable diabetes prevention."
  sourceId: guerrero-2015
- effect: "Blood pressure in diabetes with hypomagnesemia"
  design: "82 randomized, 79 completing; four months; reported 450 mg elemental magnesium/day as MgCl2 versus placebo, alongside captopril."
  findings: "Systolic changes were -20.4 versus -4.7 mmHg; diastolic changes -8.7 versus -1.2 mmHg. Between-group comparisons were statistically significant."
  limitation: "Selected treated population; unresolved salt-to-elemental dose equivalence."
  sourceId: guerrero-2009
- effect: "Metabolic syndrome"
  design: "Double-blind randomized trial; 198 participants with metabolic syndrome and hypomagnesemia; 382 mg elemental magnesium/day as MgCl2 versus placebo for 16 weeks."
  findings: "Metabolic-syndrome criteria remained present in 48% versus 77.5%. Blood pressure, glucose and triglyceride measurements improved; the HDL-cholesterol result was not statistically significant, p=0.06."
  limitation: "A risk-factor composite, not a cardiovascular-event or mortality endpoint."
  sourceId: rodriguez-2018
- effect: "Null incremental blood-pressure effect"
  design: "37 adults with mild hypertension; 32-week double-blind crossover study comparing placebo, potassium 60 mmol/day, and potassium plus magnesium 20 mmol/day as chloride salts."
  elementalMagnesium: "Approximately 486 mg/day, calculated."
  finding: "Potassium lowered blood pressure; adding magnesium provided no additional benefit."
  limitation: "No magnesium-only arm, so this does not directly test chloride monotherapy."
  sourceId: patki-1990
- effect: "Sleep, stress and fibromyalgia symptoms"
  design: "75 patients; 100 mg elemental magnesium/day as modified-release Chronomag MgCl2 versus lactose placebo for 28 days."
  nullFindings: "Overall DASS-42 stress scores did not differ, p=0.930. Sleep quality measured by PSQI, fatigue and quality of life also showed no significant advantage."
  positiveSignal: "Post-hoc mild/moderate-stress subgroup findings favored magnesium for stress and one pain-severity measure."
  limitation: "Subgroup signals do not overturn the null primary outcome or establish insomnia efficacy."
  sourceId: macian-2022
- effect: "Depressive and anxiety symptoms"
  design: "Open-label randomized crossover trial; 126 randomized, 112 analyzable; 248 mg elemental magnesium/day from four 500 mg MgCl2 tablets for six weeks versus no supplementation."
  findings: "Adjusted net PHQ-9 difference was -6.0 points, 95% CI -7.9 to -4.2; GAD-7 difference -4.5 points, 95% CI -6.6 to -2.4."
  limitation: "No placebo or blinding. Expectancy and reporting effects cannot be separated from pharmacological effects. Serum magnesium was not measured."
  sourceId: tarleton-2017
- effect: "Other-salt glycemic null"
  formulation: "Magnesium gluconate, not magnesium chloride."
  design: "14 insulin-treated adults with type 2 diabetes and low serum magnesium; randomized double-blind crossover; 15 mmol magnesium/day, approximately 365 mg, versus placebo for six weeks."
  findings: "Serum magnesium increased, but clamp-measured insulin sensitivity did not significantly improve, p=0.108. HbA1c, continuous-glucose-monitoring outcomes, insulin dose and blood pressure also showed no significant benefit."
  limitation: "Different salt, treatment background and small population; not a chloride comparison."
  sourceId: drenthen-2024
```

## Outcomes

```yaml
- outcome: "Cardiovascular events, mortality and sustained diabetes prevention"
  assessment: "The cited oral metabolic trials do not establish reductions in myocardial infarction, stroke, mortality or long-term diabetes incidence. Improved magnesium or metabolic measurements cannot substitute for those outcomes."
  sourceId: rodriguez-2018
  supportingSourceIds: [rodriguez-2003, guerrero-2015]
- outcome: "Postoperative ventricular dysrhythmias"
  route: "Intravenous, not oral."
  design: "100 cardiac-surgery patients; double-blind randomized trial; 2 g MgCl2 after cardiopulmonary bypass versus placebo."
  finding: "Ventricular dysrhythmias occurred in 16% versus 34%, p<0.04."
  limitation: "A specific perioperative setting, not evidence for routine oral arrhythmia prevention or mortality reduction. Hydration state and elemental equivalence of the 2 g dose were not specified in the accessible abstract."
  sourceId: england-1992
- outcome: "Exercise performance"
  design: "15 regular exercisers; double-blind crossover; nine days of supplementation versus placebo."
  doseUncertainty: "The abstract reports MgCl2 300 mg twice daily. Whether this denotes elemental magnesium or salt mass was not independently resolved from accessible methods."
  findings: "VO2max was lower with magnesium, 41.3 versus 44.4 mL/kg/min, p=0.005; 30-second mean sprint power was 415 versus 439 W, p=0.03. The 10 km time trial was unchanged, p=0.89."
  interpretation: "No ergogenic benefit; small, short-term detrimental signals do not establish permanent impairment."
  sourceId: bomar-2025
```

## Mechanisms

```yaml
- mechanism: "Magnesium-dependent enzyme activity"
  interpretation: "Magnesium participates in cellular enzyme systems. Replacement can address magnesium deficiency; this does not establish a unique chloride-specific enhancement mechanism."
  sourceId: mylan-2021
- mechanism: "Insulin-related hypothesis"
  interpretation: "Improved magnesium availability could affect insulin action. The 2003 trial measured HOMA-IR rather than directly demonstrating a molecular mechanism or prevention of diabetic complications."
  sourceId: rodriguez-2003
- mechanism: "Neurobiological hypotheses"
  interpretation: "The depression paper discusses NMDA-related and inflammatory pathways, but did not measure target engagement or establish why symptom scores changed."
  sourceId: tarleton-2017
```

## Cautions

```yaml
- caution: "Renal impairment"
  description: "Reduced elimination increases accumulation risk. The inspected IV label contraindicates use in renal impairment, marked myocardial disease and comatose patients; these are product-specific clinical labeling statements."
  sourceId: mylan-2021
- caution: "Magnesium intoxication"
  description: "The IV label describes flushing, sweating, sharply lowered blood pressure, hypothermia, stupor and respiratory depression, with observation of respiration, blood pressure and reflexes."
  sourceId: mylan-2021
- caution: "Gastrointestinal effects"
  description: "Oral chloride can cause diarrhea, nausea and cramps; unabsorbed magnesium salts exert an osmotic effect."
  sourceId: ods-2026
- caution: "Upper intake level"
  description: "The U.S. adult upper level is 350 mg/day from supplements and medicines, excluding food; it is not a renal-toxicity threshold."
  sourceId: ods-2026
- caution: "Tolerability is formulation- and population-dependent"
  description: "In the 100 mg/day fibromyalgia trial, minor gastrointestinal complaints occurred in 30% with magnesium and 31% with placebo. This does not establish universal gastrointestinal tolerance."
  sourceId: macian-2022
- caution: "Pregnancy and formulation-specific uncertainty"
  description: "The inspected injection label states that fetal harm and reproductive effects are unknown. It contains 1% benzyl alcohol. These data cannot establish safety for every formulation or vulnerable population."
  sourceId: mylan-2021
```

## Claims

```yaml
- claim: "Chloride is better than every organic magnesium salt"
  assessment: "Unsupported by the cited comparison: chloride, lactate and aspartate had similar measured bioavailability. Absorption differences also do not prove superior clinical outcomes."
  sourceId: firoz-2001
- claim: "Magnesium chloride is an established sleep treatment"
  assessment: "Not established by the direct trial inspected; its sleep-quality outcome was null."
  sourceId: macian-2022
- claim: "Adequate magnesium intake reduces hypertension risk"
  regulatoryContext: "FDA permits a qualified health claim under specified conditions, while characterizing the evidence as inconsistent and inconclusive. This concerns magnesium adequacy, not approval of chloride as an antihypertensive treatment."
  sourceId: fda-claim-2022
```

## Interactions

```yaml
- interaction: "Medication binding"
  description: "Magnesium can reduce absorption of tetracyclines, quinolones and oral bisphosphonates through binding or complex formation."
  sourceId: ods-2026
- interaction: "Drugs affecting magnesium balance"
  description: "Loop/thiazide diuretics increase magnesium loss; potassium-sparing diuretics reduce excretion. Prolonged proton-pump-inhibitor use can cause magnesium depletion."
  sourceId: ods-2026
- interaction: "Dolutegravir"
  description: "The TIVICAY label documents reduced exposure with polyvalent-cation products, including magnesium-containing antacids or laxatives, and specifies dolutegravir two hours before or six hours after them."
  limitation: "Label-based cation interaction; not a quantified study of every MgCl2 supplement. The calcium/iron-with-food exception is not a blanket magnesium exception."
  sourceId: tivicay-2026
- interaction: "Levothyroxine"
  description: "The SYNTHROID label documents impaired absorption with magnesium-hydroxide antacids, among other agents."
  limitation: "Magnesium hydroxide is a different formulation. This label does not quantify an MgCl2-specific interaction, and antacid-related gastric-pH effects cannot automatically be assigned to chloride."
  sourceId: synthroid-2024
```

## Experience links

```yaml
- label: "Participant-reported experience in the depression trial"
  url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0180067"
  context: "61% reported willingness to use magnesium again. This is an unblinded acceptability report, not independent confirmation of efficacy."
  sourceId: tarleton-2017
- label: "SeMAFor study record"
  url: "https://clinicaltrials.gov/study/NCT03887000"
  context: "Registered study information and linked publication; not a testimonial or evidence that registration itself establishes efficacy."
  sourceId: semafor-registry
```

## References

```yaml
- id: pubchem-mgcl2
  title: "Magnogene | Cl2Mg | CID 24584 - PubChem"
  organization: "National Center for Biotechnology Information"
  year: null
  accessedAt: "2026-10-15"
  url: "https://pubchem.ncbi.nlm.nih.gov/compound/Magnogene"
  insight: "Magnesium chloride identity and anhydrous molecular mass."
  limitation: "Dynamic chemical record, not clinical evidence; publication year not stated."
  funding: "U.S. government database."
  sponsorshipStatus: "government"
  conflictsOfInterest: "No author-specific disclosure applicable to this database entry."
  conflictOfInterestStatus: "not-applicable"

- id: ods-2026
  title: "Magnesium - Health Professional Fact Sheet"
  organization: "National Institutes of Health, Office of Dietary Supplements"
  year: 2026
  url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
  insight: "Elemental dosing, safety, disposition and interactions."
  limitation: "General magnesium guidance, not exclusively chloride evidence."
  funding: "U.S. government."
  sponsorshipStatus: "government"
  conflictsOfInterest: "Author-specific disclosures not applicable."
  conflictOfInterestStatus: "not-applicable"

- id: mylan-2021
  title: "MAGNESIUM CHLORIDE injection"
  organization: "Mylan Institutional LLC"
  year: 2021
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2105d1c1-54ef-4d1a-a63c-b1619e8b50db"
  version: 7
  effectiveDate: "2021-10-15"
  insight: "Hexahydrate concentration, deficiency indication, contraindications and IV hazards."
  limitation: "Product-specific labeling; not oral efficacy evidence or proof of current availability."
  funding: "Manufacturer-issued labeling."
  sponsorshipStatus: "manufacturer-authored"
  conflictsOfInterest: "Commercial product document."
  conflictOfInterestStatus: "manufacturer-interest"

- id: firoz-2001
  title: "Bioavailability of US commercial magnesium preparations."
  authors: ["M Firoz", "M Graber"]
  year: 2001
  url: "https://pubmed.ncbi.nlm.nih.gov/11794633/"
  insight: "Direct chloride, oxide, lactate and aspartate comparison."
  limitation: "Small human absorption study using urinary excretion, not clinical outcomes."
  funding: "Not identified in the accessed abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable in the accessed record."
  conflictOfInterestStatus: "unknown"

- id: zhan-2020
  title: "Circulating Ionized Magnesium as a Measure of Supplement Bioavailability: Results from a Pilot Study for Randomized Clinical Trial."
  authors: ["Jiada Zhan", "Taylor C Wallace", "Sarah J Butts", "Sisi Cao", "Velarie Ansu", "Lisa A Spence", "Connie M Weaver", "Nana Gletsu-Miller"]
  year: 2020
  url: "https://pubmed.ncbi.nlm.nih.gov/32353962/"
  insight: "Ionized-magnesium response differed from total-serum and urinary measurements."
  limitation: "Small single-dose pilot; no competing magnesium formulation."
  funding: "New Capstone Inc."
  sponsorshipStatus: "industry-funded"
  conflictsOfInterest: "Wallace disclosed Vitamin Shoppe advisory-board service and Pfizer Consumer Healthcare grants. Weaver disclosed Yogurt in Nutrition Initiative and FDA advisory service and ILSI trusteeship; other authors declared none."
  conflictOfInterestStatus: "disclosed"

- id: rodriguez-2003
  title: "Oral magnesium supplementation improves insulin sensitivity and metabolic control in type 2 diabetic subjects: a randomized double-blind controlled trial."
  authors: ["Martha Rodríguez-Morán", "Fernando Guerrero-Romero"]
  year: 2003
  url: "https://doi.org/10.2337/diacare.26.4.1147"
  insight: "Repletion and glycemic improvements in hypomagnesemic, glibenclamide-treated diabetes."
  limitation: "Small, short trial; no complication endpoints; abstract lacks hydrate specification."
  funding: "Funder and sponsor role not established from accessible material."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: guerrero-2009
  title: "The effect of lowering blood pressure by magnesium supplementation in diabetic hypertensive adults with low serum magnesium levels: a randomized, double-blind, placebo-controlled clinical trial."
  authors: ["F Guerrero-Romero", "M Rodríguez-Morán"]
  year: 2009
  url: "https://doi.org/10.1038/jhh.2008.129"
  insight: "Blood-pressure reduction in a selected deficient population receiving captopril."
  limitation: "Reported elemental equivalence unresolved; no cardiovascular-event endpoint."
  funding: "Funder and sponsor role not identified in accessible material."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: guerrero-2015
  title: "Oral magnesium supplementation improves glycaemic status in subjects with prediabetes and hypomagnesaemia: A double-blind placebo-controlled randomized trial."
  authors: ["F Guerrero-Romero", "L E Simental-Mendía", "G Hernández-Ronquillo", "M Rodriguez-Morán"]
  year: 2015
  url: "https://doi.org/10.1016/j.diabet.2015.03.010"
  insight: "Improved glucose measurements with reported 382 mg elemental magnesium/day."
  limitation: "Four-month surrogate outcomes; not durable diabetes prevention."
  funding: "Funder and sponsor role not identified in the accessed abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: rodriguez-2018
  title: "Oral Magnesium Supplementation and Metabolic Syndrome: A Randomized Double-Blind Placebo-Controlled Clinical Trial."
  authors: ["Martha Rodríguez-Morán", "Luis E Simental-Mendía", "Claudia I Gamboa-Gómez", "Fernando Guerrero-Romero"]
  year: 2018
  url: "https://doi.org/10.1053/j.ackd.2018.02.011"
  insight: "Improved metabolic-syndrome classification; HDL result not significant."
  limitation: "Short, hypomagnesemia-selected trial without event outcomes."
  funding: "Funder and sponsor role not identified in accessible material."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: patki-1990
  title: "Efficacy of potassium and magnesium in essential hypertension: a double-blind, placebo controlled, crossover study."
  authors: ["P S Patki", "J Singh", "S V Gokhale", "P M Bulakh", "D S Shrotri", "B Patwardhan"]
  year: 1990
  url: "https://doi.org/10.1136/bmj.301.6751.521"
  insight: "Magnesium added no blood-pressure advantage to potassium."
  limitation: "Small crossover study without magnesium monotherapy."
  funding: "Not identified in accessible material."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: macian-2022
  title: "Short-Term Magnesium Therapy Alleviates Moderate Stress in Patients with Fibromyalgia: A Randomized Double-Blind Clinical Trial."
  authors: ["Nicolas Macian", "Christian Dualé", "Marion Voute", "Vincent Leray", "Marion Courrent", "Paula Bodé", "Fatiha Giron", "Sylvie Sonneville", "Lise Bernard", "Fabienne Joanny", "Katell Menard", "Gilles Ducheix", "Bruno Pereira", "Gisèle Pickering"]
  year: 2022
  url: "https://doi.org/10.3390/nu14102088"
  insight: "Null overall stress and sleep outcomes; exploratory subgroup signals."
  limitation: "Short, small trial."
  funding: "No external funding stated; University Hospital Clermont-Ferrand financial support acknowledged."
  sponsorshipStatus: "institutional-support"
  conflictsOfInterest: "Authors declared none."
  conflictOfInterestStatus: "declared-none"

- id: tarleton-2017
  title: "Role of magnesium supplementation in the treatment of depression: A randomized clinical trial."
  authors: ["Emily K Tarleton", "Benjamin Littenberg", "Charles D MacLean", "Amanda G Kennedy", "Christopher Daley"]
  year: 2017
  url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0180067"
  insight: "Positive symptom-score and acceptability findings."
  limitation: "Unblinded; no placebo; magnesium status unmeasured."
  funding: "Henry and Carleen Tufo fund, University of Vermont; funders reported no study or publication role."
  sponsorshipStatus: "institutional-philanthropic"
  conflictsOfInterest: "Authors declared none."
  conflictOfInterestStatus: "declared-none"

- id: bomar-2025
  title: "Short-Term Magnesium Supplementation Has Modest Detrimental Effects on Cycle Ergometer Exercise Performance and Skeletal Muscle Mitochondria and Negligible Effects on the Gut Microbiota: A Randomized Crossover Clinical Trial."
  authors: ["Matthew C Bomar", "Taylor R Ewell", "Reagan L Brown", "David M Brown", "Beatrice S Kwarteng", "Kieran S S Abbotts", "Hannah M Butterklee", "Natasha N B Williams", "Scott D Wrigley", "Maureen A Walsh", "Karyn L Hamilton", "David P Thomson", "Tiffany L Weir", "Christopher Bell"]
  year: 2025
  url: "https://pubmed.ncbi.nlm.nih.gov/40077784/"
  insight: "Negative and null exercise findings."
  limitation: "Small, brief exposure; elemental-dose wording unresolved."
  funding: "New Capstone Inc.; no study role reported. Think Healthy Group participated in design discussions and encouraged publication."
  sponsorshipStatus: "industry-funded"
  conflictsOfInterest: "Authors declared none."
  conflictOfInterestStatus: "declared-none"

- id: drenthen-2024
  title: "Oral magnesium supplementation does not affect insulin sensitivity in people with insulin-treated type 2 diabetes and a low serum magnesium: a randomised controlled trial."
  authors: ["Linda C A Drenthen", "Jeroen H F de Baaij", "Laura Rodwell", "Antonius E van Herwaarden", "Cees J Tack", "Bastiaan E de Galan"]
  year: 2024
  url: "https://doi.org/10.1007/s00125-023-06029-9"
  insight: "Other-salt example of biochemical repletion without significant metabolic benefit."
  limitation: "Magnesium gluconate, not chloride; 14 participants."
  funding: "Dutch Diabetes Research Foundation, grant 2017-81-014; no study or publication role reported."
  sponsorshipStatus: "nonprofit-funded"
  conflictsOfInterest: "De Galan disclosed Diabetologia associate editorship and nonparticipation in handling; other authors declared none."
  conflictOfInterestStatus: "disclosed"

- id: england-1992
  title: "Magnesium administration and dysrhythmias after cardiac surgery. A placebo-controlled, double-blind, randomized trial."
  authors: ["M R England", "G Gordon", "M Salem", "B Chernow"]
  year: 1992
  url: "https://pubmed.ncbi.nlm.nih.gov/1404796/"
  insight: "Reduced postoperative ventricular dysrhythmias after IV chloride."
  limitation: "Specific perioperative setting; elemental dose unresolved from abstract."
  funding: "Funder and sponsor role not identified in accessible material."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Disclosure unavailable."
  conflictOfInterestStatus: "unknown"

- id: semafor-registry
  title: "Magnesium, Stress and Fibromyalgia"
  organization: "University Hospital, Clermont-Ferrand"
  year: 2026
  updatedAt: "2026-08-05"
  url: "https://clinicaltrials.gov/study/NCT03887000"
  insight: "Eligibility, sponsor, enrollment and study-publication linkage."
  limitation: "Sponsor-submitted record; masking inconsistency; no posted tabular results."
  funding: "Lead sponsor listed as University Hospital, Clermont-Ferrand; funding amounts not specified."
  sponsorshipStatus: "academic-institution"
  conflictsOfInterest: "Registry does not provide a publication-style disclosure."
  conflictOfInterestStatus: "unknown"

- id: tivicay-2026
  title: "TIVICAY PD (dolutegravir sodium) tablet, for suspension; TIVICAY (dolutegravir sodium) tablet, film coated"
  organization: "ViiV Healthcare Company"
  year: 2026
  version: 34
  effectiveDate: "2026-08-25"
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922"
  insight: "Section 7.3 documents polyvalent-cation interactions."
  limitation: "Not a chloride-product-specific interaction trial."
  funding: "Manufacturer-issued labeling."
  sponsorshipStatus: "manufacturer-authored"
  conflictsOfInterest: "Commercial product document."
  conflictOfInterestStatus: "manufacturer-interest"

- id: synthroid-2024
  title: "SYNTHROID (levothyroxine sodium) tablet"
  organization: "AbbVie Inc."
  year: 2024
  version: 1537
  effectiveDate: "2024-02-20"
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc"
  insight: "Section 7.1 identifies magnesium-hydroxide antacids among absorption-altering agents."
  limitation: "Different magnesium salt; no quantified chloride-specific effect."
  funding: "Manufacturer-issued labeling."
  sponsorshipStatus: "manufacturer-authored"
  conflictsOfInterest: "Commercial product document."
  conflictOfInterestStatus: "manufacturer-interest"

- id: fda-claim-2022
  title: "FDA Announces Qualified Health Claim for Magnesium and Reduced Risk of High Blood Pressure"
  organization: "U.S. Food and Drug Administration"
  year: 2022
  url: "https://www.fda.gov/food/hfp-constituent-updates/fda-announces-qualified-health-claim-magnesium-and-reduced-risk-high-blood-pressure"
  insight: "Qualified claim expressly acknowledges inconsistent and inconclusive evidence."
  limitation: "Regulatory claim framework, not chloride-specific drug approval."
  funding: "Government regulatory activity."
  sponsorshipStatus: "government"
  conflictsOfInterest: "Petition submitted on behalf of the Center for Magnesium Education and Research LLC; FDA response is a separate regulatory assessment."
  conflictOfInterestStatus: "regulatory-context-disclosed"

- id: fda-food-status
  title: "MAGNESIUM CHLORIDE"
  organization: "U.S. Food and Drug Administration, Substances Added to Food"
  year: null
  accessedAt: "2026-10-15"
  url: "https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?id=MAGNESIUMCHLORIDE&set=FoodSubstances"
  insight: "Food-substance entry links magnesium chloride to 21 CFR 184.1426."
  limitation: "Dynamic U.S. food-use record; publication year unspecified; not therapeutic authorization."
  funding: "Government database."
  sponsorshipStatus: "government"
  conflictsOfInterest: "No author-specific disclosure applicable."
  conflictOfInterestStatus: "not-applicable"
```

## Legal

```yaml
- jurisdiction: "United States"
  context: "FDA's food-substance record identifies magnesium chloride under 21 CFR 184.1426. Food-use status is subject to applicable conditions and does not establish therapeutic efficacy, pharmaceutical quality or suitability for injection."
  sourceId: fda-food-status
- jurisdiction: "United States"
  context: "The inspected magnesium chloride injection is labeled prescription-only. A DailyMed listing is a product-label record, not by itself proof of FDA approval or current commercial availability."
  sourceId: mylan-2021
- jurisdiction: "United States"
  context: "The qualified magnesium–hypertension claim is conditional and explicitly qualified; it does not authorize an unqualified claim that magnesium chloride treats hypertension."
  sourceId: fda-claim-2022
```