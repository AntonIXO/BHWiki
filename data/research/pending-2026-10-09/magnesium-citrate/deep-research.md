# Research Report: Research exactly magnesium citrate (slug magnesium-citrate). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover elemental magnesium versus citrate mass, oral bioavailability compared with oxide, documented GI/laxative uses, and evidence boundaries for sleep/cognition; renal risk and medication binding. Do not borrow evidence from other magnesium salts. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: magnesium-citrate
title: "Magnesium citrate"
x-shape:
  entity: "magnesium citrate"
  class: "oral magnesium salt"
  evidence_scope: "citrate-specific evidence; magnesium oxide used only as comparator"
---

# Magnesium citrate

## Summary

```yaml
- statement: "Magnesium citrate is a magnesium–citrate salt. The clinically relevant mineral quantity is elemental magnesium, not the total mass of the salt."
  sourceId: [S1, S3]
- statement: "The established U.S. OTC use is short-term saline/osmotic laxation for occasional constipation; labeled onset is approximately 0.5–6 hours."
  sourceId: [S1, S2]
- statement: "Small human comparisons found greater solubility and higher urinary-magnesium or serum-magnesium responses from magnesium citrate than magnesium oxide, but these are absorption surrogates rather than proof of superior clinical outcomes."
  sourceId: [S4, S5]
- statement: "Citrate-specific sleep evidence is limited and not magnesium-specific overall; citrate-specific cognition benefit is not established."
  sourceId: [S6, S8, S9]
```

## Description

```yaml
- property: "USP reference form"
  value: "Trimagnesium dicitrate, Mg3(C6H5O7)2; formula C12H10Mg3O14; molecular weight 451.11."
  sourceId: [S3]
- property: "Elemental-magnesium fraction"
  value: "Theoretical anhydrous 3:2 material is approximately 16.2% elemental Mg and 83.8% citrate moiety by mass; the USP assay permits 14.5–16.4% Mg on a dried basis."
  evidenceType: "calculation from USP formula and assay"
  sourceId: [S3]
- property: "Product-label example"
  value: "A current OTC liquid lists 1.745 g magnesium citrate per fluid ounce and separately declares 290 mg magnesium per fluid ounce; 1.745 g is therefore not 1.745 g elemental magnesium."
  sourceId: [S1]
- property: "Interpretation"
  value: "Hydration state, stoichiometry, assay basis, and formulation can alter compound-to-elemental conversion; the product's declared elemental-magnesium amount controls dose interpretation."
  sourceId: [S1, S3]
```

## Evidence note

```yaml
- scope: "Included clinical and pharmacokinetic evidence identifies magnesium citrate specifically."
  sourceId: [S4, S5, S6, S7]
- comparator_rule: "Magnesium oxide is used only to answer the requested relative-bioavailability question; oxide studies are not used to infer citrate effects on sleep, cognition, or disease outcomes."
  sourceId: [S4, S5]
- mixed_form_reviews: "Mixed-form magnesium reviews are used only to define evidence boundaries, not as citrate efficacy evidence."
  sourceId: [S8, S9]
- limitation: "The citrate-specific literature is small, often short-term, and frequently uses urinary or serum magnesium as surrogate endpoints."
  sourceId: [S4, S5]
```

## Doses

```yaml
- use: "OTC occasional constipation; adults and children ≥12 years"
  labeledDose: "6.5–10 fluid ounces; maximum 10 fluid ounces in 24 hours for the cited product."
  labeledElementalMg: "Approximately 1,885–2,900 mg elemental Mg using the label's 290 mg/fluid-ounce declaration."
  sourceId: [S1]
- use: "OTC occasional constipation; children 6 to <12 years"
  labeledDose: "3–7 fluid ounces; maximum 7 fluid ounces in 24 hours for the cited product."
  sourceId: [S1]
- use: "OTC occasional constipation; children 2 to <6 years"
  labeledDose: "2–3 fluid ounces; maximum 3 fluid ounces in 24 hours for the cited product."
  sourceId: [S1]
- use: "Research exposure for poor sleep"
  dose: "320 mg magnesium/day as magnesium citrate for 7 weeks; 96 of 100 randomized participants completed the study as designed."
  sourceId: [S6]
- use: "Research exposure for restless legs syndrome"
  dose: "200 mg magnesium citrate/day for 8 weeks."
  sourceId: [S7]
- regulatoryRange: "FDA M007 lists adult oral magnesium-citrate compound doses of 11–25 g for saline-laxative products; individual labels may use narrower ranges."
  sourceId: [S2]
```

## Pharmacokinetics

```yaml
- finding: "In vitro solubility"
  result: "In one human-oriented comparison, magnesium citrate was 55% soluble in water, whereas magnesium oxide was virtually insoluble; oxide reached only 43% solubility under simulated peak gastric acid."
  sourceId: [S4]
- finding: "Urinary-magnesium surrogate"
  result: "After a 25 mmol oral load, the 4-hour urinary-magnesium increment was 0.22 versus 0.006 mg/mg creatinine for citrate versus oxide; the subsequent 2-hour values were 0.035 versus 0.008."
  sourceId: [S4]
- finding: "Randomized crossover study"
  result: "In 20 magnesium-replete healthy men, 24-hour urinary Mg excretion was higher after citrate than oxide; adjusted mean difference was 0.565 mmol, 95% CI 0.212–0.918, p=0.0034. Serum Mg was higher at several post-dose time points, but intracellular Mg did not differ."
  sourceId: [S5]
- interpretation: "The available evidence supports higher oral bioavailability of citrate than oxide under the tested conditions, not a universal absorption percentage or superior clinical effect."
  sourceId: [S4, S5]
- limitation: "The cited studies do not provide a clinically useful citrate-specific plasma half-life; they primarily measure urinary excretion, serum Mg, or intracellular Mg."
  sourceId: [S4, S5]
- elimination: "Renal handling is clinically important because magnesium-containing bowel preparations are cautioned or avoided in renal insufficiency/failure."
  sourceId: [S1, S11]
```

## Modifiers

```yaml
- modifier: "Compound formulation"
  effect: "3:2, dibasic, hydrated, and commercial preparations can differ in elemental-Mg fraction; label declarations supersede generic arithmetic."
  sourceId: [S1, S3]
- modifier: "Baseline magnesium status"
  effect: "In the citrate sleep trial, the subgroup with serum Mg below 1.8 mg/dL showed a serum-Mg response; the full cohort did not show a significant serum-Mg difference versus placebo."
  sourceId: [S6]
- modifier: "Magnesium-pool saturation"
  effect: "The 2017 citrate-versus-oxide crossover study used a five-day magnesium-saturation phase, which affects interpretation of urinary-excretion endpoints."
  sourceId: [S5]
- modifier: "Dose and intestinal retention"
  effect: "Large laxative doses leave a substantial osmotic load in the gut and are pharmacologically different from lower supplement exposures."
  sourceId: [S1, S10]
- modifier: "Renal function and bowel transit"
  effect: "Reduced renal clearance and obstructive or abnormal bowel states increase the safety concern associated with magnesium-citrate exposure."
  sourceId: [S1, S11]
- modifier: "Hydration and co-administered drugs"
  effect: "The OTC label specifies an 8-ounce liquid with each dose and warns that laxatives can alter how other drugs work."
  sourceId: [S1]
```

## Effects

```yaml
- effect: "Laxation"
  description: "Retains water in the gastrointestinal tract, softens stool, increases bowel movements, and can produce watery diarrhea at purgative exposure."
  sourceId: [S1, S10]
- effect: "Serum magnesium"
  description: "Can raise circulating Mg after oral dosing; citrate produced higher post-dose serum responses than oxide in one crossover study."
  sourceId: [S5]
- effect: "Sleep"
  description: "In a placebo-controlled trial, PSQI improved from 10.4 to 6.6 overall, but improvement occurred regardless of citrate or sodium-citrate assignment."
  sourceId: [S6]
- effect: "Restless legs symptoms"
  description: "An open-label 12-person pilot using magnesium citrate reported lower symptom scores and improved quality-of-life scores, without a significant serum-Mg change."
  sourceId: [S7]
- effect: "Cognition"
  description: "No citrate-specific cognitive enhancement effect is established by the cited evidence."
  sourceId: [S9]
```

## Outcomes

```yaml
- outcome: "Occasional constipation"
  status: "Established labeled use"
  evidence: "U.S. OTC saline-laxative labeling."
  sourceId: [S1, S2]
- outcome: "Colorectal cleansing"
  status: "Documented clinical use, formulation-dependent"
  evidence: "Guidelines discuss magnesium-citrate bowel cleansing, while some approved preparations combine magnesium citrate formation with sodium picosulfate; combination-product efficacy is not pure-citrate evidence."
  sourceId: [S10, S11]
- outcome: "Sleep or insomnia"
  status: "Not established"
  evidence: "The citrate-specific randomized trial did not show a magnesium-specific overall PSQI effect; a later RCT review found inconsistent, low- or very-low-certainty evidence and no direct formulation comparisons."
  sourceId: [S6, S8]
- outcome: "Restless legs syndrome"
  status: "Preliminary"
  evidence: "Positive signal from a small uncontrolled pilot requiring placebo-controlled replication."
  sourceId: [S7]
- outcome: "Cognition or memory"
  status: "Not established"
  evidence: "A 2024 magnesium cognitive-health review found too few randomized trials for conclusions; its mixed-form evidence cannot be assigned to magnesium citrate."
  sourceId: [S9]
```

## Mechanisms

```yaml
- mechanism: "Osmotic laxation"
  description: "Magnesium citrate acts as an osmotic agent that retains water in the gastrointestinal tract; increased luminal volume promotes bowel evacuation."
  sourceId: [S1, S10]
- mechanism: "Solubility-related absorption"
  description: "Relative to oxide, citrate remains more soluble across simulated gastric conditions, providing more dissolved magnesium for intestinal absorption."
  sourceId: [S4, S5]
- mechanism: "Active moiety"
  description: "Chemical and pharmacokinetic interpretation indicates that absorbed magnesium is the relevant systemic mineral moiety, while citrate changes the salt's mass, solubility, and luminal osmotic contribution."
  evidenceType: "inference from formula and comparative studies"
  sourceId: [S3, S4, S5]
- mechanism: "Medication complexation"
  description: "Divalent magnesium can form poorly absorbed complexes with susceptible oral medicines, including tetracyclines and fluoroquinolones."
  sourceId: [S12, S13]
```

## Cautions

```yaml
- risk: "Renal impairment"
  detail: "The OTC label flags kidney disease; gastroenterology guidance states that magnesium citrate should be avoided in renal insufficiency or renal failure because magnesium is renally cleared."
  sourceId: [S1, S11]
- risk: "Hypermagnesemia"
  detail: "Repeated or high-dose laxative exposure is more hazardous when renal clearance is reduced or bowel transit is abnormal."
  sourceId: [S1, S11]
- risk: "Gastrointestinal red flags"
  detail: "The label flags abdominal pain, nausea, vomiting, persistent bowel-habit change, rectal bleeding, and failure to have a bowel movement after use."
  sourceId: [S1]
- risk: "Fluid and electrolyte disturbance"
  detail: "Purgative exposure can produce watery diarrhea; bowel-cleansing guidance emphasizes risk in people vulnerable to dehydration or electrolyte imbalance."
  sourceId: [S1, S11]
- risk: "Duration"
  detail: "The cited OTC label limits unsupervised laxative use to no longer than one week."
  sourceId: [S1]
- population: "Pregnancy and breastfeeding"
  detail: "The cited OTC label places these situations under health-professional review."
  sourceId: [S1]
```

## Claims

```yaml
- claim: "Magnesium citrate is more bioavailable than magnesium oxide."
  assessment: "Supported for higher solubility and higher urinary-Mg or serum-Mg response in small comparative studies; not proof of better clinical outcomes."
  sourceId: [S4, S5]
- claim: "Magnesium citrate is a reliable sleep aid."
  assessment: "Not established; the citrate-specific placebo-controlled trial was null for the overall magnesium-versus-placebo sleep comparison."
  sourceId: [S6, S8]
- claim: "Magnesium citrate improves cognition or memory."
  assessment: "Not established; no citrate-specific cognitive outcome is demonstrated in the cited evidence."
  sourceId: [S9]
- claim: "Magnesium citrate is non-laxative when used as a supplement."
  assessment: "Dose-dependent and misleading; the same salt is an OTC saline laxative at larger oral exposures."
  sourceId: [S1, S2]
- claim: "A stated mass of magnesium citrate equals the same mass of elemental Mg."
  assessment: "False; elemental Mg is only a fraction of the salt mass."
  sourceId: [S1, S3]
```

## Interactions

```yaml
- interaction: "General oral medicines"
  detail: "The OTC magnesium-citrate label specifies at least a 2-hour separation before or after other drugs because laxatives may alter drug action."
  sourceId: [S1]
- interaction: "Ciprofloxacin"
  detail: "Ciprofloxacin labeling requires administration at least 2 hours before or 6 hours after magnesium-containing antacids or other multivalent-cation products; citrate-specific product trials are not required for the Mg2+-binding mechanism."
  sourceId: [S12]
- interaction: "Doxycycline and tetracyclines"
  detail: "Doxycycline labeling states that tetracycline absorption is impaired by antacids containing magnesium."
  sourceId: [S13]
- interaction: "Levofloxacin and other fluoroquinolones"
  detail: "Fluoroquinolone labeling describes reduced gastrointestinal absorption with magnesium-containing products and specifies drug-specific separation intervals."
  sourceId: [S12]
- interaction: "Oral bisphosphonates"
  detail: "Alendronate labeling requires dosing before other medicines; simultaneous magnesium exposure is therefore incompatible with the labeled administration sequence."
  evidenceType: "timing inference; label is not a citrate-specific interaction trial"
  sourceId: [S14]
```

## Experience links

```yaml
- label: "Magnesium citrate versus magnesium oxide bioavailability"
  url: "https://pubmed.ncbi.nlm.nih.gov/2407766/"
  role: "human comparative study; not anecdotal experience"
  sourceId: [S4]
- label: "Magnesium citrate and poor sleep"
  url: "https://pubmed.ncbi.nlm.nih.gov/21199787/"
  role: "placebo-controlled human trial; not anecdotal experience"
  sourceId: [S6]
- label: "Magnesium citrate and restless legs syndrome"
  url: "https://pubmed.ncbi.nlm.nih.gov/38738598/"
  role: "open-label human pilot; not anecdotal experience"
  sourceId: [S7]
```

## References

```yaml
- sourceId: S1
  title: "MAGNESIUM CITRATE liquid"
  authors: "Chain Drug Marketing Association"
  organization: "DailyMed; U.S. National Library of Medicine"
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4"
  kind: "U.S. OTC drug label"
  insight: "Elemental-magnesium declaration, constipation indication, onset, dose ranges, kidney warning, hydration, and drug-separation language."
  limitation: "Product-specific labeling, not an independent clinical trial."
  funding: "Commercial product labeling; no research funding statement."
  sponsorshipStatus: "Commercial"
  conflictsOfInterest: "Labeler has a commercial interest in the marketed product."
  conflictOfInterestStatus: "Commercial interest inherent; no research COI statement."

- sourceId: S2
  title: "U.S. Food and Drug Administration Over-the-Counter (OTC) Monograph M007: Laxative Drug Products for Over-the-Counter Human Use"
  authors: "U.S. Food and Drug Administration"
  organization: "FDA"
  year: 2023
  url: "https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2023-05/OTC%20Monograph_M007-Laxative%20Drug%20Products%20for%20OTC%20Human%20Use%2005.02.2023.pdf"
  kind: "Regulatory monograph"
  insight: "Classifies oral magnesium citrate as a saline-laxative active ingredient and specifies monograph dose and warning conditions."
  limitation: "Regulatory conditions are not individualized clinical guidance."
  funding: "U.S. government"
  sponsorshipStatus: "Public-sector"
  conflictsOfInterest: "None reported."
  conflictOfInterestStatus: "No conflict reported."

- sourceId: S3
  title: "Magnesium Citrate"
  authors: "United States Pharmacopeial Convention"
  organization: "USP-NF"
  year: 2022
  url: "https://doi.org/10.31003/USPNF_M46730_05_01"
  kind: "Pharmacopeial monograph"
  insight: "Defines the USP 3:2 form, formula, molecular weight, and dried-basis magnesium assay."
  limitation: "A quality standard, not clinical efficacy evidence."
  funding: "USP publication and standards program."
  sponsorshipStatus: "Standards organization"
  conflictsOfInterest: "No clinical-study COI statement."
  conflictOfInterestStatus: "Not applicable to clinical efficacy."

- sourceId: S4
  title: "Magnesium bioavailability from magnesium citrate and magnesium oxide"
  authors: "J. S. Lindberg; M. M. Zobitz; J. R. Poindexter; C. Y. Pak"
  organization: "University of Texas Southwestern Medical Center"
  year: 1990
  url: "https://pubmed.ncbi.nlm.nih.gov/2407766/"
  kind: "Controlled clinical trial with in-vitro comparison"
  insight: "Citrate was more soluble and produced higher urinary-magnesium increments than oxide."
  limitation: "Small healthy-volunteer study using an indirect urinary endpoint and short observation window."
  funding: "PubMed lists U.S. Public Health Service research support."
  sponsorshipStatus: "Public-sector research support"
  conflictsOfInterest: "No conflict reported in the PubMed record."
  conflictOfInterestStatus: "None reported."

- sourceId: S5
  title: "Higher bioavailability of magnesium citrate as compared to magnesium oxide shown by evaluation of urinary excretion and serum levels after single-dose administration in a randomized cross-over study"
  authors: "Dominik Kappeler; Irene Heimbeck; Christiane Herpich; Natalie Naue; Josef Höfler; Wolfgang Timmer; Bernhard Michalke; et al."
  organization: "BMC Nutrition; study conducted in Germany"
  year: 2017
  url: "https://doi.org/10.1186/s40795-016-0121-3"
  kind: "Randomized open-label two-period crossover study"
  insight: "Citrate produced higher 24-hour urinary Mg excretion and higher short-term serum Mg than oxide."
  limitation: "Only 20 healthy men; single dose after magnesium saturation; no placebo or blinding; surrogate endpoints and branded products."
  funding: "Not stated in the reviewed article record."
  sponsorshipStatus: "Unclear; branded study products used."
  conflictsOfInterest: "Not stated in the reviewed article record."
  conflictOfInterestStatus: "Unclear."

- sourceId: S6
  title: "Magnesium supplementation improves indicators of low magnesium status and inflammatory stress in adults older than 51 years with poor quality sleep"
  authors: "Forrest H. Nielsen; LuAnn K. Johnson; Huawei Zeng"
  organization: "U.S. Department of Agriculture, Agricultural Research Service"
  year: 2010
  url: "https://pubmed.ncbi.nlm.nih.gov/21199787/"
  kind: "Randomized controlled trial"
  insight: "320 mg/day magnesium as citrate for seven weeks did not produce a magnesium-specific overall PSQI benefit; both groups improved."
  limitation: "Older adults with poor sleep, short duration, self-reported sleep outcome, and no cognition endpoint."
  funding: "USDA Agricultural Research Service affiliation; separate grant not specified in the abstract."
  sponsorshipStatus: "Public-institution trial; no commercial sponsor reported."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Not reported."

- sourceId: S7
  title: "Magnesium citrate monotherapy improves restless legs syndrome symptoms and multiple suggested immobilization test scores in an open-label pilot study"
  authors: "Sasikanth Gorantla; Ashwath Ravisankar; Lynn Marie Trotti"
  organization: "OSF HealthCare Illinois Neurological Institute; American Academy of Sleep Medicine"
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/38738598/"
  kind: "Open-label pilot clinical trial"
  insight: "Twelve adults receiving 200 mg/day for eight weeks had lower symptom scores and improved quality-of-life scores."
  limitation: "Very small, uncontrolled, unblinded study."
  funding: "OSF HealthCare Illinois Neurological Institute."
  sponsorshipStatus: "Institutional"
  conflictsOfInterest: "Supplement manufacturer was not involved; authors reported no study-specific conflicts; one author serves on the AASM board."
  conflictOfInterestStatus: "Disclosed; no study-specific conflict reported."

- sourceId: S8
  title: "Magnesium Supplementation for Sleep in Adults: A Systematic Review of Randomized Controlled Trials"
  authors: "Adrian L. Lopresti; Stephen J. Smith; Peter D. Drummond"
  organization: "Clinical Research Australia; Murdoch University"
  year: 2026
  url: "https://doi.org/10.1080/19390211.2026.2719670"
  kind: "Systematic review of randomized controlled trials"
  insight: "Magnesium-citrate trials did not show consistent magnesium-specific sleep benefits; no formulation was directly compared with another."
  limitation: "Mixed formulations, doses, populations, and outcome measures; not a citrate-only review."
  funding: "No specific external funding."
  sponsorshipStatus: "No specific external sponsorship stated."
  conflictsOfInterest: "One author is a Clinical Research Australia employee; author trial involvement was disclosed and independently checked."
  conflictOfInterestStatus: "Disclosed and managed."

- sourceId: S9
  title: "Magnesium and Cognitive Health in Adults: A Systematic Review and Meta-Analysis"
  authors: "Fan Chen; Jifan Wang; Yijie Cheng; Ruogu Li; Katherine L. Tucker; et al."
  organization: "American Society for Nutrition; University of Massachusetts Lowell and collaborating institutions"
  year: 2024
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11362647/"
  kind: "Systematic review and meta-analysis"
  insight: "Only three RCTs and twelve cohort studies were included; RCT evidence was insufficient for conclusions about magnesium supplements and cognition."
  limitation: "Mixed supplement forms, dietary exposure, and biomarkers; it cannot establish a citrate-specific effect."
  funding: "NIH grants P50HL105185 and P01AG023394."
  sponsorshipStatus: "Government-funded academic research"
  conflictsOfInterest: "No relevant conflicts reported."
  conflictOfInterestStatus: "None reported."

- sourceId: S10
  title: "Sodium picosulfate, magnesium oxide and anhydrous citric acid for oral solution"
  authors: "U.S. Food and Drug Administration"
  organization: "FDA prescribing information"
  year: 2019
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/209589s005lbl.pdf"
  kind: "FDA prescribing label"
  insight: "Describes magnesium citrate formed in solution as an osmotic agent that retains water in the gastrointestinal tract."
  limitation: "Combination bowel-preparation product; mechanism evidence is not pure-citrate supplement efficacy evidence."
  funding: "Regulatory labeling for a commercial product."
  sponsorshipStatus: "Commercial product/regulatory"
  conflictsOfInterest: "Commercial sponsor has a product interest."
  conflictOfInterestStatus: "Commercial context."

- sourceId: S11
  title: "Bowel preparation before colonoscopy"
  authors: "American Society for Gastrointestinal Endoscopy"
  organization: "ASGE"
  year: 2015
  url: "https://www.asge.org/home/resources/publications/guidelines/2015_bowel-preparation-before-colonoscopy"
  kind: "Clinical practice guideline"
  insight: "Notes renal excretion of magnesium and states that magnesium citrate should be avoided in renal insufficiency or renal failure in bowel-preparation use."
  limitation: "Colonoscopy-preparation context; not a low-dose supplement study."
  funding: "Society publication; source page does not specify a separate grant."
  sponsorshipStatus: "Professional-society guideline"
  conflictsOfInterest: "Not stated on the cited landing page."
  conflictOfInterestStatus: "Not stated."

- sourceId: S12
  title: "CIPROFLOXACIN tablet, film coated"
  authors: "Aurobindo Pharma USA, Inc.; U.S. Food and Drug Administration"
  organization: "DailyMed"
  year: 2024
  url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=36d6c27d-45dc-3081-e063-6394a90a87e9"
  kind: "Prescription-drug label"
  insight: "Specifies separation from magnesium-containing antacids and multivalent-cation products because of reduced ciprofloxacin absorption."
  limitation: "Label examples use magnesium-containing antacids rather than a pure magnesium-citrate product."
  funding: "Commercial product labeling."
  sponsorshipStatus: "Manufacturer/regulatory"
  conflictsOfInterest: "Manufacturer has a commercial product interest."
  conflictOfInterestStatus: "Commercial context."

- sourceId: S13
  title: "DOXYCYCLINE HYCLATE- doxyclycline hyclate tablet, coated"
  authors: "Epic Pharma, LLC; U.S. Food and Drug Administration"
  organization: "DailyMed"
  year: 2023
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2cffb084-2b25-4e1b-846b-8681de7ea666"
  kind: "Prescription-drug label"
  insight: "States that tetracycline absorption is impaired by antacids containing magnesium."
  limitation: "Not a magnesium-citrate-specific clinical interaction trial."
  funding: "Commercial product labeling."
  sponsorshipStatus: "Manufacturer/regulatory"
  conflictsOfInterest: "Manufacturer has a commercial product interest."
  conflictOfInterestStatus: "Commercial context."

- sourceId: S14
  title: "ALENDRONATE SODIUM tablet"
  authors: "Teva Pharmaceuticals USA; Aidarex Pharmaceuticals"
  organization: "DailyMed"
  year: 2012
  url: "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2f5d8719-d7b1-4f8f-8315-8b8e59798175"
  kind: "Prescription-drug label"
  insight: "Requires alendronate before other medicines and notes that co-administered medicines can reduce absorption."
  limitation: "The cited label does not quantify a magnesium-citrate-specific interaction."
  funding: "Commercial product labeling."
  sponsorshipStatus: "Manufacturer/regulatory"
  conflictsOfInterest: "Manufacturers have a commercial product interest."
  conflictOfInterestStatus: "Commercial context."
```

## Legal

```yaml
- jurisdiction: "United States"
  status: "Magnesium citrate oral solution is marketed as a human OTC drug and labeled as a saline laxative under OTC Monograph M007."
  sourceId: [S1, S2]
- regulatoryIdentity: "The cited label lists OTC Monograph Drug M007 and DEA Schedule None."
  sourceId: [S1]
- scope: "The U.S. laxative label does not establish authorization for sleep, cognition, chronic supplementation, or other unlisted outcomes."
  sourceId: [S1, S2, S8, S9]
```

## Research Metadata
- **Total research steps**: 68
- **Search queries executed**: 11
- **Citations found**: 14
- **Task ID**: resp_095cdc56a8fb21af016ac94e7e0b2487d2900c02782b9797fb
- **Execution time**: 402.15 seconds

## Citations
1. [Source 1](https://pubmed.ncbi.nlm.nih.gov/2407766/")
2. [Source 2](https://pubmed.ncbi.nlm.nih.gov/21199787/")
3. [Source 3](https://pubmed.ncbi.nlm.nih.gov/38738598/")
4. [Source 4](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ef163b24-ce92-4cbc-b45a-4fae3b511949&version=4")
5. [Source 5](https://dps-admin.fda.gov/omuf/sites/omuf/files/monograph-documents/2023-05/OTC%20Monograph_M007-Laxative%20Drug%20Products%20for%20OTC%20Human%20Use%2005.02.2023.pdf")
6. [Source 6](https://doi.org/10.31003/USPNF_M46730_05_01")
7. [Source 7](https://doi.org/10.1186/s40795-016-0121-3")
8. [Source 8](https://doi.org/10.1080/19390211.2026.2719670")
9. [Source 9](https://pmc.ncbi.nlm.nih.gov/articles/PMC11362647/")
10. [Source 10](https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/209589s005lbl.pdf")
11. [Source 11](https://www.asge.org/home/resources/publications/guidelines/2015_bowel-preparation-before-colonoscopy")
12. [Source 12](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=36d6c27d-45dc-3081-e063-6394a90a87e9")
13. [Source 13](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2cffb084-2b25-4e1b-846b-8681de7ea666")
14. [Source 14](https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2f5d8719-d7b1-4f8f-8315-8b8e59798175")
