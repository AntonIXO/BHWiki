# Research Report: Research exactly berberine (correct alias Betberine; slug berberine). Return a compact complete BHWiki Markdown article only, <=4500 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; fenced yaml list for every non-prose section. Every factual claim needs a source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus, using not-assessed when unknown. Cover formulation/salts, human randomized glycemia/lipid/weight outcomes and nulls, bias/publication concerns, AMPK mechanisms without clinical inference, PK/metabolites, pregnancy/GI/drug interactions. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: berberine
alias: Betberine
x-shape: substance
---

## Summary

Berberine is a plant-derived protoberberine/isoquinoline alkaloid usually supplied as a chloride/hydrochloride salt or another formulation. Human randomized evidence indicates modest short-term changes in glycemia and lipids, but estimates are heterogeneous, largely from China and Hong Kong, and frequently low or very-low certainty. Weight effects are small and inconsistent, including null randomized trials. Oral exposure is low, metabolites may contribute to activity, gastrointestinal effects are common, and clinically documented enzyme interactions exist. Pregnancy, breastfeeding, and infant exposure carry specific safety concerns related to bilirubin. [S1][S2][S3][S4][S5][S13] ([pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride?utm_source=openai))

## Description

Berberine occurs in plants including *Berberis* and *Coptis*. Berberine chloride and berberine hydrochloride are listed as synonyms for the same chloride salt. Other studied products include berberine sulfate, berberine ursodeoxycholate (HTD1801), berberine Phytosome, and dihydroberberine. These preparations differ in chemical composition, dose basis, pharmacokinetics, and clinical evidence; findings from one should not automatically be assigned to another. [S1][S10][S11][S12][S17][S19] ([pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride?utm_source=openai))

## Evidence note ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12016319/?utm_source=openai))

```yaml
- evidence_base: "A placebo-focused glycemia meta-analysis identified 20 randomized studies and 1,761 participants."
  sourceId: S2
- glycemia_certainty: "Pooled effects were statistically favorable, but certainty was low for fasting glucose, HbA1c, fasting insulin, and HOMA-IR; fasting-glucose heterogeneity was high (I2=94%)."
  sourceId: S2
- lipid_base: "A lipid meta-analysis included 18 randomized studies and 1,788 participants; 15 of 18 studies were from mainland China or Hong Kong."
  sourceId: S3
- duration: "Lipid trials lasted 4–24 weeks; long-term clinical-outcome evidence is limited."
  sourceId: S3
- review_quality: "Among 54 systematic reviews, 45 (83.3%) were rated critically low by AMSTAR-2; among 452 assessed outcomes, 312 (69.03%) were graded very low certainty."
  sourceId: S4
- bias_concerns: "Publication bias was a downgrading factor for 70.58% of assessed outcomes; only 27.78% of reviews reported prospective registration, and 98.15% did not report funding of included studies."
  sourceId: S4
- interpretation: "Biomarker changes should not be interpreted as evidence of reduced cardiovascular events, mortality, diabetes complications, or durable obesity treatment."
  sourceId: S2
  note: "Inference from surrogate-endpoint designs and authors' calls for larger trials with clinical outcomes."
```

## Doses ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/36941490/))

```yaml
- preparation: "Conventional berberine in placebo lipid trials"
  observed_regimen: "900–1,500 mg/day"
  observed_duration: "4–24 weeks"
  status: "Research exposure; not a dosing instruction."
  sourceId: S3
- preparation: "Berberine hydrochloride/chloride"
  observed_regimen: "1 g/day"
  observed_duration: "6 months"
  population: "Diabetes-free adults with obesity and MASLD"
  sourceId: S9
- preparation: "Berberine ursodeoxycholate (HTD1801)"
  observed_regimen: "500 mg twice daily or 1,000 mg twice daily"
  observed_duration: "12 weeks"
  population: "Adults with type 2 diabetes"
  note: "The stated mass is for the HTD1801 product, an ionic berberine–ursodeoxycholate salt, not an equivalent mass of conventional berberine."
  sourceId: S10
- preparation: "Dihydroberberine"
  observed_regimen: "100 mg or 200 mg per dose; four doses in the crossover protocol"
  population: "Five healthy men"
  sourceId: S12
- preparation: "Berberine sulfate"
  observed_regimen: "400 mg single dose for acute infectious diarrhea; 1,200 mg with tetracycline in one cholera comparison"
  note: "This was an acute gastrointestinal-infection trial, not a metabolic trial."
  sourceId: S17
```

## Pharmacokinetics ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/38888754/?utm_source=openai))

```yaml
- oral_bioavailability: "Review literature reports very low oral bioavailability, commonly described as below 1%; the value depends on species, assay, dose, and formulation."
  sourceId: S8
- absorption_limits: "Poor solubility, low intestinal permeability, P-glycoprotein efflux, and intestinal/hepatic first-pass metabolism limit parent-drug exposure."
  sourceId: S8
- metabolism: "Reported pathways include demethylation, demethylenation, reduction, hydroxylation, and subsequent glucuronide or sulfate conjugation."
  sourceId: S7
- metabolites: "Reported circulating or experimentally active metabolites include berberrubine, demethyleneberberine, columbamine, palmatine, and jatrorrhizine."
  sourceId: S7
- metabolite_interpretation: "Low parent-plasma exposure has led reviews to propose that metabolites and local intestinal effects may contribute materially to observed pharmacology."
  sourceId: S7
  note: "This is a pharmacokinetic interpretation, not proof of clinical efficacy."
- phytosome: "A human pharmacokinetic study reported approximately tenfold higher molar AUC for berberine Phytosome than for unformulated berberine."
  sourceId: S11
- dihydroberberine: "In a five-person crossover study, 100 mg and 200 mg dihydroberberine produced greater two-hour plasma berberine exposure than 500 mg conventional berberine; glucose and insulin did not differ significantly."
  sourceId: S12
- HTD1801: "HTD1801 is an ionic berberine–ursodeoxycholate salt; pharmacokinetic studies report dissociation-related exposure patterns in which ursodeoxycholate appears earlier and at much higher plasma concentrations than berberine."
  sourceId: S19
```

## Modifiers ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/37598753/?utm_source=openai))

```yaml
- sex: "Glycemic subgroup analyses suggested larger fasting-glucose and HOMA-IR reductions in women than in men, but the comparison involved few studies and requires replication."
  sourceId: S2
- sex_and_lipids: "HDL-C increased in women in the lipid meta-analysis but not clearly in men."
  sourceId: S3
- baseline_status: "Larger fasting-glucose effects were reported in participants with diabetes and in Asian study populations; these subgroup findings are observational across trials, not definitive effect modifiers."
  sourceId: S2
- formulation: "Chloride/hydrochloride, sulfate, HTD1801, Phytosome, and dihydroberberine should be treated as separate evidence categories."
  sourceId: S1
  note: "Inference from differing chemical forms and study protocols."
- dose_and_duration: "Trials varied in daily dose, number of administrations, treatment duration, background medication, and whether doses were taken with meals."
  sourceId: S3
- genotype: "A human CYP study found substantial individual variability and suggested that genotype may modify berberine-related enzyme inhibition."
  sourceId: S5
- geography: "Concentration of trials in China and Hong Kong limits generalizability to other populations."
  sourceId: S3
```

## Effects ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/37598753/?utm_source=openai))

```yaml
- domain: glycemia
  findings: "Across placebo-controlled RCTs, fasting glucose changed by -0.52 mmol/L, HbA1c by -4.48 mmol/mol (-0.41%), fasting insulin by -2.36 mU/L, HOMA-IR by -0.85, and 2-hour postprandial glucose by -1.81 mmol/L."
  evidence: "20 studies; 1,761 participants; low certainty for most outcomes."
  sourceId: S2
- domain: lipids
  findings: "LDL-C -0.46 mmol/L, total cholesterol -0.48 mmol/L, triglycerides -0.34 mmol/L, apolipoprotein B -0.25 g/L, and HDL-C +0.06 mmol/L."
  evidence: "18 studies; 1,788 participants; treatment generally 4–24 weeks."
  sourceId: S3
- domain: weight_old_meta_analysis
  findings: "A 2020 meta-analysis found no significant body-weight change: -0.11 kg (95% CI -0.99 to 0.76; P=.79), despite small pooled reductions in BMI and waist circumference."
  sourceId: S16
- domain: weight_updated_meta_analysis
  findings: "A 2026 meta-analysis of 23 RCT articles found pooled reductions of -0.88 kg in body weight, -0.48 kg/m2 in BMI, and -1.32 cm in waist circumference; waist-to-hip ratio was null."
  limitation: "The review itself identified reporting, blinding, randomization, and formulation-standardization concerns."
  sourceId: S20
- domain: adiposity_null_trial
  findings: "In a six-month, 1-g/day RCT in diabetes-free adults with obesity and MASLD, berberine did not reduce visceral adipose tissue or liver fat; the placebo-adjusted VAT difference was 1.38% (97.5% CI -2.43% to 5.18%; P=.42)."
  sourceId: S9
- domain: HTD1801
  findings: "In a 12-week 113-person RCT, HTD1801 reduced HbA1c versus placebo by -0.4 percentage points at 500 mg twice daily and -0.7 points at 1,000 mg twice daily. The 1,000-mg group also reduced LDL-C by 11.2 mg/dL and total cholesterol by 15.1 mg/dL versus baseline-model estimates."
  sourceId: S10
```

## Outcomes ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/36941490/))

```yaml
- outcome_type: "surrogate biomarkers"
  assessment: "The best-supported human effects are modest changes in glucose and lipid measurements over weeks to months."
  sourceId: S2
  sourceId_2: S3
- outcome_type: "body weight"
  assessment: "Evidence ranges from null body-weight effects to small pooled reductions; the large recent adiposity trial found no VAT or liver-fat benefit."
  sourceId: S9
  sourceId_2: S16
  sourceId_3: S20
- outcome_type: "clinical events"
  assessment: "Randomized evidence has not established reductions in cardiovascular events, mortality, diabetes complications, or long-term disease progression."
  sourceId: S3
  note: "Inference from the short, surrogate-endpoint trial base and the meta-analysis call for trials assessing clinical outcomes."
- outcome_type: "weight-loss-drug equivalence"
  assessment: "The available data do not establish equivalence to GLP-1 receptor agonists, metformin, or approved obesity pharmacotherapies."
  sourceId: S2
  sourceId_2: S9
  note: "Inference; the cited trials were not designed as equivalence trials."
```

## Mechanisms ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/28290706/?utm_source=openai))

```yaml
- pathway: AMPK
  evidence: "Cell and animal literature describes AMPK activation and downstream effects on energy sensing, glycolysis, fatty-acid oxidation, and lipid synthesis."
  clinical_inference: "AMPK activation alone does not establish a human clinical benefit."
  sourceId: S14
- pathway: glucose_handling
  evidence: "Preclinical reviews describe effects involving GLUT4, insulin-receptor-substrate signaling, glycolysis, intestinal carbohydrate handling, and pancreatic-cell signaling."
  clinical_inference: "These are mechanistic observations, not validated causal explanations for every human RCT result."
  sourceId: S14
- pathway: lipid_regulation
  evidence: "Experimental literature discusses AMPK, SREBP-related lipid synthesis, PCSK9, and hepatic lipid pathways."
  clinical_inference: "Molecular pathway findings cannot be converted directly into cardiovascular-event claims."
  sourceId: S14
- pathway: metabolites
  evidence: "Berberine metabolites can show pharmacology in cellular and animal models, including effects overlapping with the parent compound."
  clinical_inference: "Human exposure–response relationships for individual metabolites remain incompletely defined."
  sourceId: S7
- pathway: gut_liver
  evidence: "Low systemic parent-drug exposure and formulation-specific pharmacokinetics support possible intestinal and gut–liver contributions."
  clinical_inference: "This remains a mechanistic hypothesis rather than proof of a distinct clinical mechanism."
  sourceId: S7
  sourceId_2: S8
```

## Cautions ([ncbi.nlm.nih.gov](https://www.ncbi.nlm.nih.gov/books/NBK600384/?utm_source=openai))

```yaml
- pregnancy: "Human pregnancy evidence is sparse. MotherToBaby reports that birth-defect risk, miscarriage risk, and pregnancy outcomes are not established; one report involved 218 pregnancies exposed to huang lian, with six reported birth defects, but causality was not demonstrated."
  sourceId: S13
- breastfeeding_and_infants: "Berberine can pass into breast milk in an unknown amount and may increase neonatal bilirubin-related risk. NCCIH identifies pregnancy, breastfeeding, and infancy as contexts in which berberine should not be used."
  sourceId: S13
  sourceId_2: S18
- neonatal_risk: "Berberine can alter bilirubin binding; neonatal bilirubin accumulation can cause kernicterus and brain injury."
  sourceId: S13
  sourceId_2: S18
- gastrointestinal: "Reported effects include nausea, diarrhea, bloating, constipation, abdominal pain, and vomiting. In lipid RCTs, gastrointestinal events were reported in roughly 2–23% with berberine versus 2–15% with placebo."
  sourceId: S3
- formulation_specific_tolerability: "In the HTD1801 RCT, treatment-emergent adverse events occurred in 71.1% at 1,000 mg twice daily versus 39.5% with placebo; this result is specific to HTD1801 and its study population."
  sourceId: S10
- long_term_safety: "Most metabolic trials were short; long-term safety, sustained efficacy, and effects in people with major comorbidity remain incompletely characterized."
  sourceId: S3
  sourceId_2: S4
- product_variability: "Different studies used different salts, extracts, complexes, doses, and analytical specifications, limiting direct product-to-product comparison."
  sourceId: S4
```

## Claims ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/37598753/?utm_source=openai))

```yaml
- claim: "Berberine lowers blood sugar."
  assessment: "Partly supported as a modest short-term biomarker effect in RCTs, with low certainty and substantial heterogeneity."
  sourceId: S2
- claim: "Berberine lowers cholesterol and triglycerides."
  assessment: "Supported for modest short-term LDL-C, total-cholesterol, and triglyceride changes; clinical-event benefit is unestablished."
  sourceId: S3
- claim: "Berberine is a reliable weight-loss drug or 'nature's Ozempic.'"
  assessment: "Not established. Weight meta-analyses conflict, and a recent six-month adiposity RCT was null for VAT and liver fat."
  sourceId: S9
  sourceId_2: S16
  sourceId_3: S20
- claim: "Berberine can replace metformin or GLP-1 therapy."
  assessment: "Unsupported by equivalence trials or clinical-outcome evidence."
  sourceId: S2
  sourceId_2: S9
- claim: "AMPK activation proves clinical effectiveness."
  assessment: "Mechanistically invalid; AMPK findings are primarily preclinical and do not substitute for clinical outcomes."
  sourceId: S14
- claim: "Natural means safe."
  assessment: "Incomplete: gastrointestinal effects, CYP interactions, product variability, and pregnancy/infant concerns are documented."
  sourceId: S3
  sourceId_2: S5
  sourceId_3: S13
- claim: "Berberine prevents cardiovascular disease, extends lifespan, or treats cancer."
  assessment: "Not established by the cited human randomized outcome evidence."
  sourceId: S3
  sourceId_2: S4
```

## Interactions ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC4898966))

```yaml
- interaction: CYP3A4 substrates
  human_evidence: "After berberine 300 mg three times daily for 14 days in healthy men, midazolam Cmax increased 38%, AUC increased 40%, and oral clearance decreased 27%."
  sourceId: S5
- interaction: CYP2D6 substrates
  human_evidence: "The urinary dextromethorphan/dextrorphan ratio increased approximately ninefold after repeated berberine, indicating reduced CYP2D6 activity."
  sourceId: S5
- interaction: CYP2C9 substrates
  human_evidence: "The losartan/E-3174 ratio approximately doubled, indicating reduced CYP2C9 activity in that study."
  sourceId: S5
- interaction: cyclosporine
  human_evidence: "In six renal-transplant recipients receiving berberine 0.2 g three times daily for 12 days, cyclosporine AUC increased 34.5% and trough concentration increased 88.3%."
  sourceId: S6
- interaction: victim_drug_scope
  evidence_tier: "Direct human evidence exists for probe drugs and cyclosporine; extension to other CYP3A4, CYP2D6, or CYP2C9 substrates is extrapolation."
  sourceId: S5
  sourceId_2: S6
- interaction: transporters
  evidence_tier: "P-glycoprotein and other transporter interactions are supported mainly by mechanistic or preclinical studies; clinical magnitude is not established."
  sourceId: S8
- interaction: glucose_lowering_medicines
  evidence_tier: "Additive glucose-lowering effects are biologically plausible, but the RCT literature does not quantify symptomatic hypoglycemia risk across medication combinations."
  sourceId: S2
  note: "Inference from glucose-lowering effects and heterogeneous combination trials."
```

## Experience links

```yaml
- label: "NCCIH consumer evidence and safety overview"
  url: "https://www.nccih.nih.gov/health/in-the-news-berberine"
  sourceId: S18
- label: "Recent randomized adiposity trial"
  url: "https://pubmed.ncbi.nlm.nih.gov/41543854/"
  sourceId: S9
- label: "Berberine ursodeoxycholate randomized diabetes trial"
  url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2830820"
  sourceId: S10
- label: "Human berberine/dihydroberberine pharmacokinetic crossover"
  url: "https://pubmed.ncbi.nlm.nih.gov/35010998/"
  sourceId: S12
- label: "Glycemic randomized-trial meta-analysis"
  url: "https://pubmed.ncbi.nlm.nih.gov/37598753/"
  sourceId: S2
- note: "Personal anecdotes are not used as efficacy or safety evidence."
  sourceId: S4
```

## References

```yaml
- sourceId: S1
  title: "Berberine chloride"
  authorsOrOrganization: "National Center for Biotechnology Information, PubChem"
  year: 2026
  url: "https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride"
  kind: "database record"
  insight: "Chemical identity; chloride/hydrochloride synonym; salt form."
  limitation: "No clinical efficacy synthesis."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S2
  title: "Overall and Sex-Specific Effect of Berberine on Glycemic and Insulin-Related Traits: a Systematic Review and Meta-Analysis of Randomized Controlled Trials"
  authorsOrOrganization: "Jie V. Zhao, Xin Huang, Junmeng Zhang, Yap-Hang Chan, Hung-Fat Tse, Joseph E. Blais"
  year: 2023
  url: "https://pubmed.ncbi.nlm.nih.gov/37598753/"
  kind: "systematic review and meta-analysis"
  insight: "Pooled glycemic and insulin-related effects with certainty and subgroup analyses."
  limitation: "Heterogeneity, few studies for HbA1c and sex comparisons, possible publication bias."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S3
  title: "Overall and Sex-Specific Effect of Berberine for the Treatment of Dyslipidemia in Adults: A Systematic Review and Meta-Analysis of Randomized Placebo-Controlled Trials"
  authorsOrOrganization: "Joseph E. Blais, Xin Huang, Jie V. Zhao"
  year: 2023
  url: "https://pubmed.ncbi.nlm.nih.gov/36941490/"
  kind: "systematic review and meta-analysis"
  insight: "Pooled LDL-C, total cholesterol, triglyceride, ApoB, HDL-C, and adverse-event results."
  limitation: "Short trials, geographic concentration, no established clinical-event outcomes."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S4
  title: "Berberine and health outcomes: an overview of systematic reviews"
  authorsOrOrganization: "Lanjun Shi, Wenya Wang, Chengyang Jing, Jing Hu, Xing Liao"
  year: 2025
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12016319/"
  kind: "overview of systematic reviews"
  insight: "Quantifies methodological weakness, publication-bias downgrading, and evidence certainty."
  limitation: "Assesses reviews rather than re-analyzing every primary trial."
  funding: "China Academy of Chinese Medical Sciences Innovation Fund; China Center for Evidence Based Traditional Chinese Medicine"
  sponsorshipStatus: "academic/government-affiliated"
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S5
  title: "Repeated administration of berberine inhibits cytochromes P450 in humans"
  authorsOrOrganization: "Ying Guo et al.; Central South University and University of Kansas Medical Center"
  year: 2016
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4898966/"
  kind: "randomized human pharmacokinetic interaction study"
  insight: "Human CYP3A4, CYP2D6, and CYP2C9 probe-drug effects."
  limitation: "Small, healthy male sample; short exposure; genotype variability."
  funding: "NIH, National Natural Science Foundation of China, Hunan Provincial Innovation Foundation, and Chinese government programs"
  sponsorshipStatus: "mixed governmental/academic"
  conflictsOfInterest: "Authors reported no conflict of interest."
  conflictOfInterestStatus: "no conflict reported"

- sourceId: S6
  title: "Effects of berberine on the blood concentration of cyclosporin A in renal transplanted recipients: clinical and pharmacokinetic study"
  authorsOrOrganization: "National Library of Medicine PubMed record; authors not-assessed"
  year: 2005
  url: "https://pubmed.ncbi.nlm.nih.gov/16133554/"
  kind: "clinical pharmacokinetic interaction study"
  insight: "Cyclosporine exposure increased with berberine coadministration."
  limitation: "Six transplant recipients; clinical context-specific."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S7
  title: "The metabolism of berberine and its contribution to the pharmacological effects"
  authorsOrOrganization: "National Library of Medicine PubMed record; authors not-assessed"
  year: 2017
  url: "https://pubmed.ncbi.nlm.nih.gov/28290706/"
  kind: "pharmacology and metabolism review"
  insight: "Metabolic pathways and potentially active berberine metabolites."
  limitation: "Mechanistic and pharmacokinetic evidence does not establish human clinical effects."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S8
  title: "Research progress on pharmacological effects and bioavailability of berberine"
  authorsOrOrganization: "National Library of Medicine PubMed record; authors not-assessed"
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/38888754/"
  kind: "pharmacology and bioavailability review"
  insight: "Low bioavailability, solubility, permeability, P-glycoprotein, metabolism, and formulation strategies."
  limitation: "Review integrates preclinical and clinical evidence with variable certainty."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S9
  title: "Berberine and Adiposity in Diabetes-Free Individuals With Obesity and MASLD: A Randomized Clinical Trial"
  authorsOrOrganization: "Lubi Lei et al.; BRAVO Collaborative Group"
  year: 2026
  url: "https://pubmed.ncbi.nlm.nih.gov/41543854/"
  kind: "multicenter randomized clinical trial"
  insight: "Six-month 1-g/day berberine was null for visceral adipose tissue and liver fat."
  limitation: "Population-specific; secondary weight and metabolic findings do not establish long-term obesity outcomes."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S10
  title: "Berberine Ursodeoxycholate for the Treatment of Type 2 Diabetes: A Randomized Clinical Trial"
  authorsOrOrganization: "JAMA Network Open; authors not-assessed"
  year: 2025
  url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2830820"
  kind: "phase 2 randomized clinical trial"
  insight: "HTD1801 dose-dependent HbA1c effects and lipid changes over 12 weeks."
  limitation: "Small, short, China-based trial; HTD1801 is not conventional berberine."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S11
  title: "Development of an Innovative Berberine Food-Grade Formulation with an Ameliorated Absorption: In Vitro Evidence Confirmed by Healthy Human Volunteers Pharmacokinetic Study"
  authorsOrOrganization: "National Library of Medicine PubMed record; authors not-assessed"
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/34904017/"
  kind: "formulation and human pharmacokinetic study"
  insight: "Berberine Phytosome showed substantially higher exposure than unformulated berberine."
  limitation: "Healthy-volunteer PK study; no validated metabolic-outcome comparison."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S12
  title: "Absorption Kinetics of Berberine and Dihydroberberine and Their Impact on Glycemia: A Randomized, Controlled, Crossover Pilot Trial"
  authorsOrOrganization: "National Library of Medicine PubMed record; authors not-assessed"
  year: 2022
  url: "https://pubmed.ncbi.nlm.nih.gov/35010998/"
  kind: "randomized crossover human pharmacokinetic pilot"
  insight: "Dihydroberberine produced higher short-window plasma exposure than conventional berberine."
  limitation: "Five healthy men; no significant glucose or insulin effect; very short observation."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S13
  title: "Berberine"
  authorsOrOrganization: "MotherToBaby, Organization of Teratology Information Specialists"
  year: 2025
  url: "https://www.ncbi.nlm.nih.gov/books/NBK600384/"
  kind: "pregnancy and breastfeeding fact sheet"
  insight: "Human pregnancy uncertainty, breastfeeding transfer uncertainty, bilirubin concerns, and limited pregnancy reports."
  limitation: "Sparse observational evidence; not a controlled safety study."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S14
  title: "Molecular mechanisms, targets and clinical potential of berberine in regulating metabolism: a review focussing on databases and molecular docking studies"
  authorsOrOrganization: "Sun et al."
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/38957396/"
  kind: "mechanistic review"
  insight: "AMPK, mTOR, SIRT1, SREBP, Nrf2, and related molecular pathways."
  limitation: "Much of the mechanistic evidence is cellular, animal, database, or docking-based."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "One author was employed by China Traditional Chinese Medicine Holdings Co. Limited and Guangdong e-fong Pharmaceutical Co., Ltd.; remaining authors reported no commercial conflicts."
  conflictOfInterestStatus: "partially disclosed"

- sourceId: S15
  title: "FOOD AND DRUG ADMINISTRATION COMPLIANCE PROGRAM 7321.008"
  authorsOrOrganization: "U.S. Food and Drug Administration"
  year: 2024
  url: "https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf"
  kind: "U.S. regulatory compliance document"
  insight: "Dietary-supplement disease claims and labeling requirements."
  limitation: "U.S.-specific; does not determine legal status in other jurisdictions."
  funding: "U.S. government"
  sponsorshipStatus: "governmental"
  conflictsOfInterest: "none stated"
  conflictOfInterestStatus: "no conflict stated"

- sourceId: S16
  title: "The effect of berberine supplementation on obesity indices: A dose-response meta-analysis and systematic review of randomized controlled trials"
  authorsOrOrganization: "Pan Xiong et al."
  year: 2020
  url: "https://pubmed.ncbi.nlm.nih.gov/32379652/"
  kind: "systematic review and meta-analysis"
  insight: "BMI and waist circumference changed modestly, but body weight was null."
  limitation: "Only 10 studies; heterogeneous populations and formulations."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S17
  title: "Randomized controlled trial of berberine sulfate therapy for diarrhea due to enterotoxigenic Escherichia coli and Vibrio cholerae"
  authorsOrOrganization: "G. H. Rabbani, T. Butler, J. Knight, S. C. Sanyal, K. Alam"
  year: med.ncbi.nlm.nih.gov/3549923/"
  kind: "randomized clinical trial"
  insight: "Human evidence for a berberine sulfate formulation in acute infectious diarrhea."
  limitation: "Historical, disease-specific, and not evidence for metabolic use."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S18
  title: "In the News: Berberine"
  authorsOrOrganization: "National Center for Complementary and Integrative Health"
  year: 2023
  url: "https://www.nccih.nih.gov/health/in-the-news-berberine"
  kind: "government consumer evidence and safety summary"
  insight: "Summarizes modest metabolic evidence, GI effects, pregnancy/infant cautions, and interaction concerns."
  limitation: "Narrative consumer summary rather than a new systematic review."
  funding: "U.S. government"
  sponsorshipStatus: "governmental"
  conflictsOfInterest: "none stated"
  conflictOfInterestStatus: "no conflict stated"

- sourceId: S19
  title: "Pharmacokinetics and pharmacodynamics of HTD1801 (berberine ursodeoxycholate, BUDCA) in patients with hyperlipidemia"
  authorsOrOrganization: "National Library of Medicine PubMed/PMC record; authors not-assessed"
  year: 2020
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7661247/"
  kind: "formulation-specific pharmacokinetic/pharmacodynamic study"
  insight: "Characterizes the berberine–ursodeoxycholate salt and its distinct exposure profile."
  limitation: "Cannot be generalized to conventional berberine chloride."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- sourceId: S20
  title: "The effect of berberine on obesity indices: a systematic review and meta-analysis"
  authorsOrOrganization: "Iman Elahi Vahed et al."
  year: 2026
  url: "https://pubmed.ncbi.nlm.nih.gov/41310257/"
  kind: "updated systematic review and meta-analysis"
  insight: "Twenty-three RCT articles produced small pooled reductions in weight, BMI, and waist circumference, with null waist-to-hip ratio."
  limitation: "The authors noted common reporting, blinding, randomization, and biochemical-standardization concerns."
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal ([fda.gov](https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf))

```yaml
- jurisdiction: "United States"
  rule: "FDA materials state that a dietary supplement cannot make claims that it diagnoses, mitigates, treats, cures, or prevents disease; structure/function claims have separate substantiation and disclaimer requirements."
  sourceId: S15
- applicability: "The rule applies to marketing claims and does not establish clinical efficacy, safety, or approval of a particular berberine salt, extract, or product."
  sourceId: S15
- jurisdictional_scope: "Legal treatment varies by country and by whether the item is marketed as a supplement, food, drug, or investigational formulation."
  sourceId: S15
```

## Research Metadata
- **Total research steps**: 70
- **Search queries executed**: 11
- **Citations found**: 15
- **Task ID**: resp_048d10217f22ea19016ac948f332ec87d2abff6e831f2d2392
- **Execution time**: 640.90 seconds

## Citations
1. [Berberine chloride | C20H18ClNO4 | CID 12456 - PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride?utm_source=openai)
2. [Berberine and health outcomes: an overview of systematic reviews - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12016319/?utm_source=openai)
3. [Overall and Sex-Specific Effect of Berberine for the Treatment of Dyslipidemia in Adults: A Systematic Review and Meta-Analysis of Randomized Placebo-Controlled Trials - PubMed](https://pubmed.ncbi.nlm.nih.gov/36941490/)
4. [Research progress on pharmacological effects and bioavailability of berberine - PubMed](https://pubmed.ncbi.nlm.nih.gov/38888754/?utm_source=openai)
5. [Overall and Sex-Specific Effect of Berberine on Glycemic and Insulin-Related Traits: a Systematic Review and Meta-Analysis of Randomized Controlled Trials - PubMed](https://pubmed.ncbi.nlm.nih.gov/37598753/?utm_source=openai)
6. [The metabolism of berberine and its contribution to the pharmacological effects - PubMed](https://pubmed.ncbi.nlm.nih.gov/28290706/?utm_source=openai)
7. [Berberine - MotherToBaby | Fact Sheets - NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK600384/?utm_source=openai)
8. [Repeated administration of berberine inhibits cytochromes P450 in humans - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4898966)
9. [FOOD AND DRUG ADMINISTRATION COMPLIANCE PROGRAM 7321.008](https://www.fda.gov/files/food/published/CP7321.008-DietarySupplements-09182024.pdf)
10. [Berberine chloride | C20H18ClNO4 | CID 12456 - PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/Berberine-Chloride)
11. [Berberine and health outcomes: an overview of systematic reviews - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12016319/)
12. [Research progress on pharmacological effects and bioavailability of berberine - PubMed](https://pubmed.ncbi.nlm.nih.gov/38888754/)
13. [Overall and Sex-Specific Effect of Berberine on Glycemic and Insulin-Related Traits: a Systematic Review and Meta-Analysis of Randomized Controlled Trials - PubMed](https://pubmed.ncbi.nlm.nih.gov/37598753/)
14. [The metabolism of berberine and its contribution to the pharmacological effects - PubMed](https://pubmed.ncbi.nlm.nih.gov/28290706/)
15. [Berberine - MotherToBaby | Fact Sheets - NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK600384/)
