---
slug: magnesium-taurate
name: Magnesium taurate
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
x-shape: [slug, name, subtitle, summary, description, aliases, formula, molecularWeight, pubchemCid, smiles, category, tags, accent, evidenceNote, reviewedAt, editorialStatus, halfLife, pkObservations, kinetics, modifiers, doses, effects, outcomes, claims, mechanisms, cautions, interactions, experienceLinks, references, legal]
---

## Summary

No isolated-taurate randomized trial for deficiency, sleep, blood pressure, glycemia or cardiovascular events was identified. This evidence gap does not establish ineffectiveness. (sourceId: pubmed-search-2026)

A 2026 uncontrolled study reported blood-pressure improvements with magnesium taurate **plus potassium citrate and lifestyle counselling**; it cannot establish a taurate-specific treatment effect. (sourceId: dereli-2026)

## Description

Magnesium taurate, also called magnesium taurinate or magnesium ditaurate, contains magnesium and two taurinate anions. Its anhydrous formula is C4H12MgN2O6S2; molecular weight is 272.58 g/mol. Magnesium acetyl taurate is a different compound. (sourceId: efsa-2009)

“Elemental magnesium” describes magnesium quantity, not the total mass of its salt. (sourceId: ods-2026)

## Evidence note

PubMed/PMC searches through October 15, 2026 included taurate, taurinate and ditaurate. Case reports and combination studies are not isolated-ingredient randomized evidence. Other-salt trials below are indirect context only. (sourceId: pubmed-search-2026)

The exact-name ClinicalTrials.gov search returned no records. This does not exclude unregistered studies, differently indexed interventions or studies in other registries. Missing funding or conflict statements are recorded as unavailable, not as declarations of independence. (sourceId: ctgov-search-2026)

## Doses

```yaml
- id: compound-versus-elemental
  context: Chemical conversion, not a treatment dose.
  detail: >-
    Anhydrous magnesium taurate is approximately 8.9% magnesium:
    1000 mg compound supplies approximately 89 mg elemental magnesium.
    EFSA calculated 250 mg magnesium as 2804 mg compound, including
    2554 mg taurate. Assays can differ.
  sourceId: efsa-2009
- id: taurate-combination-exposure
  context: Observed human exposure; not an established effective dose.
  formulation: Magnesium taurate plus potassium citrate.
  elementalMagnesiumMgPerDay: 121
  elementalPotassiumMgPerDay: 180
  duration: Three months.
  cointervention: Lifestyle counselling.
  sourceId: dereli-2026
- id: assessed-use
  context: Regulatory safety assessment, not efficacy evidence.
  detail: >-
    EFSA found no safety concern for proposed adult exposure up to 250 mg
    magnesium/day, matching the SCF supplemental upper level.
  sourceId: efsa-2009
- id: us-upper-level
  context: Population reference limit, not a therapeutic target.
  detail: >-
    The US adult upper level is 350 mg/day from supplements and medications;
    magnesium naturally present in food is excluded.
  sourceId: ods-2026
```

## Pharmacokinetics

```yaml
- id: expected-dissociation
  finding: >-
    EFSA expected dissociation into magnesium and taurine, with magnesium
    availability similar to other dissociable dietary sources. This was
    not a human demonstration of superior absorption.
  sourceId: efsa-2009
- id: human-parameters
  population: Humans receiving isolated oral magnesium taurate.
  absoluteBioavailability: Not established in the retrieved evidence.
  tmax: Not established.
  cmax: Not established.
  eliminationHalfLife: Not established.
  limitation: >-
    Magnesium biomarkers do not establish intact-compound kinetics.
    Taurine-only, acetyl-taurate and animal kinetics are not transferable.
  sourceId: pubmed-search-2026
- id: other-salt-absorption-proxies
  finding: >-
    Citrate produced greater urinary magnesium increases than oxide or
    sulfate in one equal-elemental-dose human trial; plasma responses were
    similar. No taurate arm was included.
  limitation: Urinary excretion is not an absolute-bioavailability measurement.
  sourceId: schutten-2022
```

## Modifiers

```yaml
- id: magnesium-status
  detail: Serum magnesium is an imperfect marker of total-body magnesium stores.
  sourceId: ods-2026
- id: biochemical-versus-clinical-repletion
  detail: >-
    Low serum magnesium did not predict benefit in the gluconate trial,
    despite biochemical correction.
  applicability: Other-salt evidence.
  sourceId: drenthen-2024
- id: renal-function
  detail: >-
    Severe kidney disease, acute kidney injury, dialysis and transplantation
    materially limit extrapolation from routine magnesium-replacement evidence.
  applicability: General magnesium safety; no taurate-specific renal dose model.
  sourceId: sps-2024
```

## Effects

```yaml
- id: established-versus-assumed
  effect: Taurate-specific acute effects remain unquantified.
  evidence: No isolated-ingredient randomized evidence identified.
  sourceId: pubmed-search-2026
- id: magnesium-physiology
  effect: Magnesium participates in enzymatic energy metabolism and neuromuscular function.
  limitation: Nutrient physiology does not establish benefit from supplementation in replete people.
  sourceId: ods-2026
```

## Outcomes

```yaml
- id: direct-containing-blood-pressure-study
  formulation: Taurate-potassium combination; exposure detailed under Doses.
  design: Prospective single-arm study; 121 enrolled, 110 analyzed per protocol.
  population: Low-risk adults with elevated blood pressure or stage 1 hypertension.
  comparator: None.
  result: >-
    Within-person BP fell 12/9 mmHg at work and 11/8 mmHg at home and
    on ambulatory monitoring; PWV fell 0.9 m/s and augmentation index 4.0%.
    Serum magnesium increased 0.1 mg/dL.
  nullAndSafety: Sodium, potassium and renal function were unchanged; no serious adverse events.
  limitation: Lifestyle change, potassium, selection and regression to the mean prevent causal attribution.
  sourceId: dereli-2026
- id: sleep-citrate-null
  formulation: Magnesium citrate, not taurate.
  elementalMagnesiumMgPerDay: 320
  duration: Seven weeks.
  design: Randomized trial; 100 adults aged 51-85 with poor sleep; 96 completed.
  comparator: Sodium citrate placebo.
  result: >-
    Overall sleep-quality scores improved in both groups, without a
    magnesium-specific benefit. Serum magnesium increased in the low-baseline
    subgroup, not significantly across the entire sample.
  limitation: Biochemical subgroup improvement did not demonstrate better sleep.
  sourceId: nielsen-2010
- id: sleep-bisglycinate-small-benefit
  formulation: Magnesium bisglycinate, not taurate; approximately 1.523 g/day glycine content.
  elementalMagnesiumMgPerDay: 250
  duration: Four weeks.
  design: Double-blind randomized trial; 155 adults reporting poor sleep.
  comparator: Cellulose placebo.
  result: >-
    Insomnia Severity Index decreased 3.9 versus 2.3 points; p=0.049,
    Cohen's d=0.2. Other psychological outcomes were not significantly improved.
  limitation: Self-report, short duration, small effect; magnesium and glycine contributions were not separated.
  sourceId: schuster-2025
- id: glycemia-chloride-positive
  formulation: Magnesium chloride solution, not taurate.
  dose: 50 mL/day containing 2.5 g magnesium chloride.
  elementalDose:
    mgPerDay: 300
    qualification: Elemental quantity reported by NIH; not inferred from an assumed hydration state.
    sourceId: ods-2026
  duration: Sixteen weeks.
  design: Double-blind randomized trial; 63 people with type 2 diabetes on glibenclamide.
  baselineMagnesium: Serum magnesium at or below 0.74 mmol/L.
  comparator: Placebo.
  result: >-
    Endpoint serum magnesium was 0.74 versus 0.65 mmol/L; HOMA-IR 3.8 versus
    5.0; fasting glucose 8.0 versus 10.3 mmol/L; HbA1c 8.0% versus 10.1%.
    Between-group differences were statistically significant.
  limitation: Selected low-magnesium population; surrogate outcomes, not diabetes-complication prevention.
  sourceId: rodriguez-moran-2003
- id: glycemia-gluconate-null
  formulation: Magnesium gluconate liquid, not taurate.
  dose: 15 mmol/day, reported by the investigators as 360 mg elemental magnesium/day.
  duration: Six weeks per treatment period.
  design: Double-blind placebo-controlled crossover; 14 insulin-treated adults with type 2 diabetes.
  baselineMagnesium: Serum magnesium at or below 0.79 mmol/L.
  result: >-
    Serum magnesium increased, but clamp-measured insulin sensitivity,
    HbA1c, continuous-glucose-monitoring outcomes, insulin dose and BP did not improve.
    HDL cholesterol was slightly lower, 1.14 versus 1.20 mmol/L.
  limitation: Small, short trial; the HDL finding was exploratory without multiplicity correction.
  sourceId: drenthen-2024
- id: arterial-stiffness-citrate-positive
  formulation: Magnesium citrate, not taurate.
  elementalMagnesiumMgPerDay: 350
  duration: Twenty-four weeks.
  design: Double-blind randomized trial; 52 overweight or mildly obese adults.
  comparator: Placebo capsules.
  result: >-
    Carotid-femoral PWV improved by 1.0 m/s versus placebo at week 24
    (95% CI 0.4-1.6), but not at week 12. Office and ambulatory BP were unchanged.
  limitation: Arterial-stiffness surrogate, not myocardial infarction or stroke prevention.
  sourceId: joris-2016
- id: arterial-stiffness-nonreplication
  formulation: Citrate, oxide or sulfate, each supplying 450 mg elemental magnesium/day; no taurate.
  duration: Twenty-four weeks.
  design: Double-blind randomized trial; 164 overweight or mildly obese adults.
  comparator: Starch placebo and equal-elemental-dose active formulations.
  result: >-
    None improved arterial stiffness or BP versus placebo, despite increases
    in magnesium biomarkers. This did not replicate the earlier citrate benefit.
  sourceId: schutten-2022
- id: clinical-cardiovascular-events
  finding: >-
    Randomized isolated-taurate evidence for cardiovascular events, arrhythmia
    prevention or mortality was not identified; surrogates are insufficient.
  sourceId: pubmed-search-2026
```

## Mechanisms

```yaml
- id: proposed-magnesium-taurine-complementarity
  evidenceType: Mechanistic hypothesis, not a clinical trial.
  detail: >-
    McCarty proposed complementary effects of magnesium and taurine on
    cellular calcium handling and vascular physiology. The proposal does not
    establish clinically meaningful synergy in magnesium taurate.
  sourceId: mccarty-1996
- id: toxin-model-cardioprotection
  evidenceType: Animal experiment.
  detail: >-
    In cadmium-exposed rats, oral magnesium taurate at 2 or 4 mg/kg/day
    improved BP, oxidative-stress measures and cardiac histology compared
    with toxin controls; amlodipine was a reference treatment.
  limitation: >-
    Six animals per group; toxin-induced disease. Doses were reported as
    magnesium taurate, not verified elemental magnesium. No matched magnesium-only
    or taurine-only comparison established synergy, and no human dose is inferred.
  sourceId: shrivastava-2019
```

## Cautions

```yaml
- id: gastrointestinal-and-systemic-toxicity
  detail: >-
    Supplemental magnesium can cause diarrhea, nausea and cramping. Severe
    accumulation can cause hypotension, weakness, respiratory depression
    and cardiac rhythm disturbances; impaired renal clearance increases risk.
  sourceId: ods-2026
- id: renal-evidence-boundary
  detail: >-
    NHS guidance identifies CKD stages 4-5, acute kidney injury, dialysis and
    kidney transplantation as specialist contexts with inadequate replacement
    data. General supplemental upper levels do not establish safety here.
  limitation: No validated taurate-specific renal adjustment or safe eGFR threshold was identified.
  sourceId: sps-2024
- id: excluded-renal-population
  detail: The gluconate diabetes trial excluded eGFR below 45 mL/min/1.73 m².
  limitation: Study exclusions do not define universal safety thresholds.
  sourceId: drenthen-2024
- id: special-populations-and-duration
  detail: >-
    Pregnancy, breastfeeding, pediatric and multi-year isolated-taurate safety
    remain unestablished in the retrieved evidence.
  sourceId: pubmed-search-2026
```

## Claims

```yaml
- claim: Taurate is the best-absorbed or gentlest magnesium salt.
  assessment: No confirming equal-elemental-dose human taurate comparison was identified.
  sourceId: pubmed-search-2026
- claim: Magnesium taurate has established sleep or cardioprotective efficacy.
  assessment: Not established by isolated-taurate randomized human outcomes.
  sourceId: pubmed-search-2026
- claim: The vascular rationale is independent clinical proof.
  assessment: >-
    A hypothesis or patent is not efficacy evidence. McCarty is named inventor
    on US5582839A, originally assigned to Nutrition 21, providing a relevant
    commercial-interest context for the taurate rationale.
  sourceId: mccarty-patent-1996
- claim: FDA recognition proves magnesium taurate treats hypertension.
  assessment: >-
    FDA's qualified claim concerns adequate magnesium intake and hypertension
    risk, explicitly acknowledging inconsistent and inconclusive evidence;
    it is not taurate-specific treatment approval.
  sourceId: fda-2022
```

## Interactions

```yaml
- substances: Tetracycline and quinolone antibiotics; oral bisphosphonates.
  interaction: Magnesium can reduce their absorption.
  evidenceBoundary: Established magnesium-class interaction; not a taurate-specific interaction trial.
  sourceId: ods-2026
- substances: Loop or thiazide diuretics; potassium-sparing diuretics; proton-pump inhibitors.
  interaction: >-
    Loop/thiazide agents increase magnesium loss; potassium-sparing agents
    reduce excretion. Long-term proton-pump inhibitors can cause hypomagnesemia.
  sourceId: ods-2026
- substances: Dolutegravir.
  interaction: Magnesium-containing polyvalent-cation products can lower dolutegravir exposure.
  evidenceBoundary: >-
    TIVICAY's label addresses cation-containing medicines; direct taurate
    testing is absent. Its food exception for calcium/iron is not a
    demonstrated exception for magnesium taurate.
  sourceId: tivicay-label-2026
- substances: Levothyroxine.
  interaction: The SYNTHROID label identifies reduced absorption with magnesium-hydroxide antacids.
  evidenceBoundary: Different magnesium formulation; direct taurate interaction magnitude is unknown.
  sourceId: synthroid-label-2024
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: efsa-2009
  title: Iron (II) taurate, magnesium taurate and magnesium acetyl taurate as sources of iron or magnesium added for nutritional purposes in food supplements
  organization: EFSA Panel on Food Additives and Nutrient Sources added to Food
  year: 2009
  url: https://efsa.onlinelibrary.wiley.com/doi/pdf/10.2903/j.efsa.2009.947
  insight: Corrected composition, expected dissociation and proposed-use safety assessment.
  limitation: Not a human comparative PK or efficacy trial.
  funding: Regulatory assessment using dossiers from Vital Cell Life and the Health Food Manufacturers Association, among others.
  sponsorshipStatus: regulatory-assessment-with-industry-dossiers
  conflictsOfInterest: Individual panel declarations were not assessed here.
  conflictOfInterestStatus: not-assessed
- id: ods-2026
  title: Magnesium - Health Professional Fact Sheet
  organization: NIH Office of Dietary Supplements
  year: 2026
  updatedAt: "2026-01-06"
  url: https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/
  insight: Elemental quantities, nutrient physiology, upper levels and interactions.
  limitation: Magnesium generally; not taurate-specific evidence.
  funding: NIH institutional publication.
  sponsorshipStatus: government-source
  conflictsOfInterest: No individual declaration assessed.
  conflictOfInterestStatus: not-assessed
- id: pubmed-search-2026
  title: PubMed
  organization: US National Library of Medicine
  year: 2026
  yearNote: Search year, not publication year of the database.
  accessedAt: "2026-10-15"
  url: https://pubmed.ncbi.nlm.nih.gov/?term=magnesium%5BTitle%2FAbstract%5D+AND+%28taurate%5BTitle%2FAbstract%5D+OR+taurinate%5BTitle%2FAbstract%5D+OR+ditaurate%5BTitle%2FAbstract%5D%29
  insight: Reproducible terminology search; results include distinct acetyl-taurate and preclinical literature.
  limitation: Indexing and abstract coverage limit exclusion of missing studies.
  funding: NLM database.
  sponsorshipStatus: government-source
  conflictsOfInterest: Database hosting does not establish independence of indexed studies.
  conflictOfInterestStatus: not-applicable
- id: ctgov-search-2026
  title: ClinicalTrials.gov
  organization: US National Library of Medicine
  year: 2026
  yearNote: Search year.
  accessedAt: "2026-10-15"
  url: https://clinicaltrials.gov/search?term=%22magnesium%20taurate%22%20OR%20%22magnesium%20taurinate%22%20OR%20%22magnesium%20ditaurate%22
  insight: No records returned by the exact-name search on the review date.
  limitation: One registry and these search terms only; not evidence that no human reports exist.
  funding: NLM institutional registry.
  sponsorshipStatus: government-source
  conflictsOfInterest: Registry hosting does not determine study conflicts.
  conflictOfInterestStatus: not-applicable
- id: dereli-2026
  title: Effects of magnesium taurate-potassium citrate on blood pressure and vascular stiffness in low-risk adults with elevated blood pressure.
  authors: [Seçkin Dereli]
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42439043/
  publisherUrl: https://stm.cairn.info/revue-magnesium-research-2025-4-page-118?lang=en
  insight: Uncontrolled combination signal.
  limitation: Abstract and indexed disclosures inspected; full text unavailable.
  funding: None declared in the publisher's indexed disclosure.
  sponsorshipStatus: none-declared
  conflictsOfInterest: None declared.
  conflictOfInterestStatus: none-declared
- id: nielsen-2010
  title: Magnesium supplementation improves indicators of low magnesium status and inflammatory stress in adults older than 51 years with poor quality sleep.
  authors: [Forrest H Nielsen, LuAnn K Johnson, Huawei Zeng]
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/21199787/
  insight: Citrate improved selected biochemical measures, without magnesium-specific sleep improvement.
  limitation: Abstract inspected; complete disclosure text unavailable.
  funding: Not established from the accessible abstract.
  sponsorshipStatus: not-retrieved
  conflictsOfInterest: Not established from the accessible abstract.
  conflictOfInterestStatus: not-retrieved
- id: schuster-2025
  title: "Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial."
  authors: [Julius Schuster, Igor Cycelskij, Adrian Lopresti, Andreas Hahn]
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
  insight: Small subjective-insomnia effect from bisglycinate; not taurate.
  limitation: Short duration, self-report and inseparable glycine content.
  funding: Institute of Food and One Health, Leibniz University Hannover; test product manufactured by Biogena.
  sponsorshipStatus: institutional-funding-commercial-product
  conflictsOfInterest: Lopresti disclosed directing Clinical Research Australia, a contract-research organization; the complete disclosure was not retrieved.
  conflictOfInterestStatus: disclosed-partially-retrieved
- id: rodriguez-moran-2003
  title: "Oral magnesium supplementation improves insulin sensitivity and metabolic control in type 2 diabetic subjects: a randomized double-blind controlled trial."
  authors: [Martha Rodríguez-Morán, Fernando Guerrero-Romero]
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12663588/
  insight: Chloride improved glycemic surrogates in selected hypomagnesemic patients.
  limitation: Abstract available; elemental-dose clarification comes from NIH, not an assumed salt conversion.
  funding: Not established from the accessible abstract.
  sponsorshipStatus: not-retrieved
  conflictsOfInterest: Not established from the accessible abstract.
  conflictOfInterestStatus: not-retrieved
- id: drenthen-2024
  title: "Oral magnesium supplementation does not affect insulin sensitivity in people with insulin-treated type 2 diabetes and a low serum magnesium: a randomised controlled trial."
  authors: [Linda C A Drenthen, Jeroen H F de Baaij, Laura Rodwell, Antonius E van Herwaarden, Cees J Tack, Bastiaan E de Galan]
  year: 2024
  publicationNote: Published online in 2023; 2024 journal issue.
  url: https://link.springer.com/article/10.1007/s00125-023-06029-9
  insight: Biochemical correction without glycemic benefit.
  limitation: Small crossover study; six-week periods.
  funding: Dutch Diabetes Research Foundation grant 2017-81-014.
  sponsorshipStatus: nonprofit-funded
  conflictsOfInterest: De Galan was a Diabetologia associate editor, excluded from handling; other authors declared no biasing relationships.
  conflictOfInterestStatus: disclosed
- id: joris-2016
  title: "Long-term magnesium supplementation improves arterial stiffness in overweight and obese adults: results of a randomized, double-blind, placebo-controlled intervention trial."
  authors: [Peter J Joris, Jogchum Plat, Stephan J L Bakker, Ronald P Mensink]
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27053384/
  publisherUrl: https://www.sciencedirect.com/science/article/pii/S0002916523118983
  insight: Citrate improved PWV but not blood pressure.
  limitation: Small study; surrogate outcome; not taurate.
  funding: Grant CH001, Top Institute of Food and Nutrition, a public-private partnership.
  sponsorshipStatus: public-private-funded
  conflictsOfInterest: Complete declaration was not retrieved.
  conflictOfInterestStatus: not-retrieved
- id: schutten-2022
  title: "Effects of Magnesium Citrate, Magnesium Oxide, and Magnesium Sulfate Supplementation on Arterial Stiffness: A Randomized, Double-Blind, Placebo-Controlled Intervention Trial."
  authors: [Joëlle C Schutten, Peter J Joris, Iris Groendijk, Coby Eelderink, Dion Groothof, Yvonne van der Veen, Ralf Westerhuis, Frans Goorman, Richard M Danel, Martin H de Borst, Stephan J L Bakker]
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9075273/
  insight: Vascular null despite magnesium-biomarker increases.
  limitation: Relatively healthy population; no taurate arm.
  funding: Nedmag Industries Mining and Manufacturing and the NIGRAM2+ public-private collaboration.
  sponsorshipStatus: industry-and-public-private-funded
  conflictsOfInterest: Commercial employment disclosed for Goorman and Danel with Nedmag/Magnesium Health Institute.
  conflictOfInterestStatus: disclosed
- id: mccarty-1996
  title: "Complementary vascular-protective actions of magnesium and taurine: a rationale for magnesium taurate."
  authors: [M F McCarty]
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8692051/
  insight: Origin of a vascular-synergy rationale.
  limitation: Hypothesis article, not a controlled human experiment.
  funding: Not established from the accessible abstract.
  sponsorshipStatus: not-retrieved
  conflictsOfInterest: Article disclosure unavailable; inventor interest independently documented in US5582839A.
  conflictSourceId: mccarty-patent-1996
  conflictOfInterestStatus: external-commercial-interest-identified
- id: mccarty-patent-1996
  title: Magnesium taurate and other mineral taurates
  authors: [Mark F McCarty]
  year: 1996
  url: https://patents.google.com/patent/US5582839A/en
  insight: Patent record identifies McCarty and original assignee Nutrition 21.
  limitation: Patent assertions are not clinical efficacy evidence; current ownership was not legally audited.
  funding: Development funding not stated in the inspected record.
  sponsorshipStatus: commercial-patent
  conflictsOfInterest: Inventor and commercial-assignee interests are explicit.
  conflictOfInterestStatus: documented
- id: shrivastava-2019
  title: Magnesium taurate attenuates progression of hypertension and cardiotoxicity against cadmium chloride-induced hypertensive albino rats.
  authors: [Parikshit Shrivastava, Rajesh Choudhary, Umashankar Nirmalkar, Amrita Singh, Jaya Shree, Prabhat Kumar Vishwakarma, Surendra H Bodakhe]
  year: 2019
  publicationNote: Earlier online publication; 2019 journal issue.
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6435948/
  insight: Direct taurate experiment in a rat toxicant model.
  limitation: Does not establish human efficacy, dose or safety.
  funding: No specific grant declared; institutional facilities acknowledged.
  sponsorshipStatus: no-specific-grant-declared
  conflictsOfInterest: Authors declared no conflicts.
  conflictOfInterestStatus: none-declared
- id: sps-2024
  title: Treating acute hypomagnesaemia in adults
  organization: NHS Specialist Pharmacy Service
  year: 2024
  url: https://sps.nhs.uk/articles/treating-acute-hypomagnesaemia-in-adults/
  insight: Renal-risk boundaries for magnesium replacement.
  limitation: Clinical guidance for replacement products, not magnesium-taurate validation.
  funding: NHS institutional publication.
  sponsorshipStatus: public-health-service-source
  conflictsOfInterest: Individual declarations were not assessed.
  conflictOfInterestStatus: not-assessed
- id: tivicay-label-2026
  title: TIVICAY PD (dolutegravir sodium) tablet, for suspension; TIVICAY (dolutegravir sodium) tablet, film coated
  organization: ViiV Healthcare Company
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922
  labelVersion: 34
  effectiveDate: "2026-08-25"
  publishedDate: "2026-10-02"
  section: 7.3; SPL section code 42229-5.
  insight: Polyvalent-cation interactions affecting dolutegravir exposure.
  limitation: Not a direct magnesium-taurate interaction study.
  funding: Manufacturer-authored prescribing information.
  sponsorshipStatus: manufacturer-label
  conflictsOfInterest: Commercial labeler identified; not an independent trial report.
  conflictOfInterestStatus: organizational-interest-explicit
- id: synthroid-label-2024
  title: SYNTHROID (levothyroxine sodium) tablet
  organization: AbbVie Inc.
  year: 2024
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc
  labelVersion: 1537
  effectiveDate: "2024-02-20"
  publishedDate: "2024-02-29"
  section: 7.1; SPL section code 42229-5.
  insight: Magnesium-hydroxide antacids can reduce levothyroxine absorption.
  limitation: Antacid evidence, not isolated-taurate PK.
  funding: Manufacturer-authored prescribing information.
  sponsorshipStatus: manufacturer-label
  conflictsOfInterest: Commercial labeler identified; not an independent trial report.
  conflictOfInterestStatus: organizational-interest-explicit
- id: fda-2022
  title: FDA Announces Qualified Health Claim for Magnesium and Reduced Risk of High Blood Pressure
  organization: US Food and Drug Administration
  year: 2022
  url: https://www.fda.gov/food/hfp-constituent-updates/fda-announces-qualified-health-claim-magnesium-and-reduced-risk-high-blood-pressure
  insight: Qualified risk claim expressly reflects inconsistent and inconclusive evidence.
  limitation: Not magnesium-taurate efficacy approval or a hypertension treatment indication.
  funding: FDA institutional assessment.
  sponsorshipStatus: government-source
  conflictsOfInterest: Regulatory publication; individual declarations not assessed.
  conflictOfInterestStatus: not-assessed
- id: eu-2002
  title: Directive 2002/46/EC of the European Parliament and of the Council of 10 June 2002 on the approximation of the laws of the Member States relating to food supplements
  organization: European Parliament and Council of the European Union
  year: 2002
  version: Consolidated text dated 2025-03-16, accessed 2026-10-15.
  url: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02002L0046-20250316
  insight: Annex II lists magnesium taurate separately from magnesium acetyl taurate.
  limitation: Ingredient listing does not establish therapeutic efficacy or every national marketing condition.
  funding: EU legislative publication.
  sponsorshipStatus: legislation
  conflictsOfInterest: Not an intervention study.
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: European Union
  status: Magnesium taurate is listed in Annex II as a permitted magnesium source for food supplements.
  qualification: >-
    This concerns ingredient eligibility, not medicine authorization or clinical
    efficacy. National marketing conditions were not individually reviewed.
  sourceId: eu-2002
- jurisdiction: United States
  status: The FDA magnesium-hypertension statement is a qualified dietary risk claim.
  qualification: It does not approve magnesium taurate as treatment for hypertension or cardiovascular disease.
  sourceId: fda-2022
```