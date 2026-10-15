---
slug: amphetamine
name: Amphetamine
subtitle: "Racemic parent compound and product-specific clinical evidence"
aliases: ["Racemic amphetamine", "dl-amphetamine", "d,l-amphetamine"]
formula: C9H13N
molecularWeight: 135.21
category: stimulant
tags: [prescription, ADHD, narcolepsy]
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
x-shape: [slug, name, subtitle, summary, description, aliases, formula, molecularWeight, pubchemCid, smiles, category, tags, accent, evidenceNote, reviewedAt, editorialStatus, halfLife, pkObservations, kinetics, modifiers, doses, effects, outcomes, claims, mechanisms, cautions, interactions, experienceLinks, references, legal]
---

## Summary

Racemic amphetamine contains equal proportions of dextroamphetamine and levoamphetamine. Oral immediate-release racemic sulfate improved ADHD symptoms and classroom performance versus placebo in a pediatric randomized crossover trial. An investigational racemic sulfate formulation, AR19, also improved adult ADHD symptom scores in a five-week randomized trial. These findings establish formulation-specific, short-term symptomatic benefits—not improved intelligence, permanent disease modification, or equivalent effects across amphetamine products. (sourceId: childress-2015; sourceId: faraone-2021)

Evidence commonly described simply as “amphetamine” often concerns mixed amphetamine salts or pure dextroamphetamine instead. Healthy-volunteer findings include task-specific improvements and broadly null cognitive results; subjective enhancement can exceed measured improvement. A recent randomized hypersomnolence study tested mixed salts, not the racemate, and did not establish its prespecified primary noninferiority endpoint. (sourceId: macqueen-2018; sourceId: ilieva-2013; sourceId: trotti-2024)

Current racemic amphetamine labeling includes cardiovascular and psychiatric warnings and a boxed warning for abuse, misuse, addiction, overdose, and death. Physical dependence and tolerance can occur; their presence is not synonymous with addiction. (sourceId: evekeo-label)

## Description

The parent amphetamine molecule has formula C9H13N and molecular weight approximately 135.21 g/mol. This differs from the sulfate salt formula and molecular weight printed on sulfate-product labels. Evekeo conventional tablets contain racemic amphetamine sulfate, with equal d- and l-enantiomers; tablet strengths describe salt mass. The two enantiomers are pharmacologically distinct. (sourceId: dyanavel-label; sourceId: evekeo-label; sourceId: childress-2015)

**Mixed amphetamine salts**, exemplified by Adderall tablets, combine four salts and provide an approximately 3:1 d:l ratio—not the 1:1 racemate. **Dextroamphetamine** is the d-enantiomer rather than racemic amphetamine. **Lisdexamfetamine** is a chemically distinct prodrug of dextroamphetamine; its milligram strength does not represent the same substance as an equal milligram strength of amphetamine sulfate. (sourceId: adderall-label; sourceId: macqueen-2018; sourceId: vyvanse-label)

A product labeled simply “amphetamine” need not be racemic. **Dyanavel XR** contains a 3.2:1 d:l mixture, while **Adzenys XR-ODT** contains a 3:1 mixture; both express strengths as amphetamine base. Adzenys efficacy was established through studies of mixed-salts extended-release capsules, rather than a separate racemic-amphetamine efficacy trial. (sourceId: dyanavel-label; sourceId: adzenys-label)

## Evidence note

Randomized symptom ratings, laboratory task performance, subjective experiences, pharmacokinetic measurements, and observational adverse-event associations are separated below. The principal pediatric racemate trial randomized participants only after open-label dose optimization; its results are not an unselected starting-treatment response rate. Its commercial sponsorship and short randomized period constrain interpretation of tolerability and longer-term outcomes. (sourceId: childress-2015; sourceId: evekeo-registry)

No contemporary randomized trial specifically establishing racemic amphetamine’s narcolepsy efficacy or broad cognitive enhancement in healthy people was verified for this article. The narcolepsy indication is documented in labeling, but the recent randomized comparator study concerns mixed salts and a combined narcolepsy-type-2/idiopathic-hypersomnia population. Absence of a verified trial here is not proof that historical evidence does not exist. (sourceId: evekeo-label; sourceId: trotti-2024)

Funding and conflicts are recorded separately. Unavailable full disclosures remain unassessed rather than being classified as absent. AR19 publication access was limited to the accessible abstract, affiliations, and registry information; several other publications also had incomplete accessible disclosure text.

## Doses

```yaml
- context: "Labeled pediatric ADHD treatment"
  formulation: "Evekeo conventional immediate-release tablets; 1:1 racemic amphetamine sulfate"
  route: oral
  population: "Children aged 3 years and older"
  reportedDose: "Label starting doses: 2.5 mg/day at ages 3–5; 5 mg once or twice daily from age 6."
  doseBasis: "Amphetamine sulfate salt, not amphetamine base"
  qualification: "The label states that exceeding 40 mg/day is rarely necessary. This is descriptive labeling information, not a universal safe-dose threshold."
  sourceId: evekeo-label

- context: "Labeled narcolepsy treatment"
  formulation: "Evekeo conventional immediate-release tablets"
  route: oral
  reportedDose: "The labeled usual range is 5–60 mg/day in divided doses."
  doseBasis: "Racemic amphetamine sulfate salt"
  qualification: "The narcolepsy range is indication-specific and is not the pediatric ADHD range."
  sourceId: evekeo-label

- context: "Pediatric randomized classroom study"
  formulation: "Evekeo; 1:1 racemic sulfate"
  population: "Children aged 6–12 with ADHD"
  reportedDose: "Dose-optimized 10–40 mg/day, normally divided twice daily."
  duration: "Eight-week open-label optimization followed by two one-week randomized crossover periods."
  qualification: "Only the individual morning dose, not the entire daily amount, was given on laboratory assessment days."
  sourceId: childress-2015

- context: "Adult randomized trial"
  formulation: "AR19 investigational immediate-release racemic sulfate pellets-in-capsule"
  population: "Adults aged 18–55 with ADHD"
  reportedDose: "20 or 40 mg/day, divided into morning and later doses."
  duration: "Five weeks"
  qualification: "Investigational-formulation exposure; not evidence that currently marketed formulations share every outcome."
  sourceId: faraone-2021

- context: "Separately labeled nonracemic amphetamine product"
  formulation: "Dyanavel XR oral suspension or extended-release tablets; d:l ratio 3.2:1"
  population: "Patients aged 6 years and older with ADHD"
  reportedDose: "Label starting dose 2.5 or 5 mg once daily; labeled maximum 20 mg once daily."
  doseBasis: "Amphetamine base"
  qualification: "Not numerically interchangeable with milligrams of racemic sulfate or mixed salts."
  sourceId: dyanavel-label

- context: "Cross-product dose interpretation"
  formulation: "Adzenys XR-ODT versus mixed-salts products"
  finding: "Adzenys strengths express amphetamine base; mixed-salts strengths express salt mass."
  qualification: "Release characteristics and enantiomer composition also matter; equal printed milligrams do not establish equivalent exposure."
  sourceId: adzenys-label
```

## Pharmacokinetics

```yaml
- parameter: "Immediate-release racemate absorption and formulation comparison"
  evidenceType: "Primary human crossover pharmacokinetic studies"
  formulation: "AR19 versus reference racemic amphetamine sulfate"
  population: "Healthy adults; 36 participants in the bioequivalence study"
  exposure: "Single 20 mg oral doses"
  finding: "Reference-racemate mean Tmax was 2.52 hours for d-amphetamine and 2.75 hours for l-amphetamine. AR19 values were 2.84 and 3.05 hours."
  comparison: "The 90% confidence intervals for AR19/reference Cmax and AUC ratios were within 80–125%."
  limitation: "Bioequivalence concerns measured exposure, not proof of equal real-world effectiveness or reduced misuse."
  sourceId: caras-2020

- parameter: "Racemate elimination half-life"
  formulation: "Evekeo ODT; historical 2019 FDA label"
  population: "Healthy adult volunteers"
  finding: "Mean plasma elimination half-lives were approximately 10.0 hours for d-amphetamine and 11.7 hours for l-amphetamine."
  limitation: "Formulation- and population-specific estimates; the historical document does not establish current ODT availability."
  sourceId: evekeo-odt-label

- parameter: "Food effect"
  formulation: "AR19 investigational immediate-release capsule"
  population: "Healthy adults"
  exposure: "20 mg orally"
  finding: "A high-fat meal delayed mean Tmax to about 5.6 hours from approximately 2.9 hours fasting, without materially changing the measured extent of exposure."
  limitation: "This AR19 food result cannot be assigned automatically to conventional Evekeo tablets."
  sourceId: caras-2020

- parameter: "Nonracemic extended-release pharmacokinetics"
  formulation: "Dyanavel XR; d:l ratio 3.2:1"
  population: "Healthy adults"
  exposure: "Single 18.8 mg-base suspension or 20 mg-base tablet doses"
  finding: "Suspension terminal half-lives were 12.4 hours for d-amphetamine and 15.1 hours for l-amphetamine; tablet estimates were 13.5 and 17.3 hours."
  qualification: "These are not universal half-lives for the 1:1 racemate. Terminal half-life is distinct from the duration of demonstrated symptom benefit."
  sourceId: dyanavel-label

- parameter: "Metabolism and elimination"
  evidenceType: "Amphetamine pharmacology summarized in official product labeling"
  finding: "CYP2D6 contributes to 4-hydroxylation but is not the sole metabolic pathway. Renal elimination is substantial and strongly affected by urinary pH."
  modifier: "Alkaline urine reduces renal elimination; acidic urine increases it. Renal or hepatic dysfunction can prolong exposure."
  limitation: "Dyanavel-specific renal- and hepatic-impairment pharmacokinetic studies were not conducted."
  sourceId: dyanavel-label
```

## Duration

```yaml
- formulation: "Immediate-release racemic sulfate, Evekeo"
  endpoint: "Observed ADHD behavior and mathematics-task performance"
  finding: "Separation from placebo was present at measured assessments from 45 minutes through 10 hours after the morning dose."
  limitation: "Ten hours was the last assessment, not a guaranteed individual duration or proof of superiority over other products."
  sourceId: childress-2015

- formulation: "Nonracemic Dyanavel XR suspension"
  endpoint: "Pediatric classroom SKAMP scores"
  finding: "Significant placebo separation occurred at assessed times from 1 through 13 hours."
  limitation: "A different formulation, population selection, and study design prevent direct duration comparisons with Evekeo."
  sourceId: dyanavel-label
```

## Modifiers

```yaml
- modifier: "Population and treatment selection"
  finding: "The pediatric racemate study excluded important psychiatric and medical comorbidities and randomized participants after dose optimization."
  implication: "Its efficacy and adverse-event frequencies may not represent unselected patients beginning treatment."
  sourceId: childress-2015

- modifier: "Age"
  formulation: "Dyanavel XR"
  finding: "Children younger than 6 had higher exposure and more adverse reactions at the same dosage; the current indication begins at age 6."
  limitation: "This product-specific age restriction must not replace the separate conventional Evekeo label."
  sourceId: dyanavel-label

- modifier: "Renal function, hepatic function, urinary pH, and metabolic variation"
  finding: "These can alter amphetamine exposure. CYP2D6 polymorphism is a possible contributor to variability."
  limitation: "The label does not establish a validated genotype-based method for predicting an individual's cognitive response."
  sourceId: dyanavel-label

- modifier: "Baseline cognitive ability"
  formulation: "Mixed amphetamine salts, not racemic sulfate"
  finding: "Exploratory analyses suggested benefits in lower-performing participants on a minority of tasks despite no general group-level enhancement."
  limitation: "Subgroup findings do not establish a dependable method for selecting healthy cognitive-enhancement responders."
  sourceId: ilieva-2013
```

## Effects

```yaml
- effect: "Short-term symptomatic ADHD improvement"
  formulation: "Racemic amphetamine sulfate"
  finding: "Behavior ratings and laboratory mathematics performance improved relative to placebo."
  boundary: "Observed task output is not equivalent to increased intelligence, durable educational attainment, or disease modification."
  sourceId: childress-2015

- effect: "Appetite, sleep, and other tolerability effects"
  formulation: "Racemic sulfate, Evekeo"
  finding: "During open-label optimization, decreased appetite occurred in 27.6% and upper abdominal pain in 14.3%. In the randomized phase, any treatment-emergent adverse event occurred in 21.6% on active treatment versus 14.4% on placebo."
  limitation: "Open-label percentages are not placebo-adjusted; randomized tolerability was measured after optimization."
  sourceId: childress-2015

- effect: "Cardiovascular stimulation"
  evidenceType: "Class warning in the current Evekeo label"
  finding: "Mean increases cited for CNS stimulants are approximately 2–4 mmHg in blood pressure and 3–6 beats/minute in heart rate."
  limitation: "Some individuals have larger increases; these averages are neither racemate-specific event rates nor evidence excluding serious outcomes."
  sourceId: evekeo-label

- effect: "Subjective enhancement"
  formulation: "Mixed amphetamine salts"
  finding: "Healthy participants perceived enhanced performance despite largely absent objective cognitive enhancement."
  boundary: "Perceived effectiveness and measured cognitive effectiveness are distinct outcomes."
  sourceId: ilieva-2013
```

## Outcomes

```yaml
- outcome: "Pediatric ADHD classroom symptoms"
  evidenceType: "Randomized, double-blind, placebo-controlled crossover trial"
  formulation: "Evekeo immediate-release racemic sulfate, d:l 1:1"
  population: "107 children aged 6–12 enrolled; 97 randomized"
  regimen: "Dose-optimized 10–40 mg/day; morning dose alone on laboratory days"
  comparator: placebo
  assessment: "SKAMP-Combined at 2 hours after dosing"
  result: "Adjusted mean scores 10.3 versus 18.1; treatment difference -7.9 points, 95% CI -10.1 to -5.6; p<0.0001."
  interpretation: "Short-term improvement in observed ADHD-related impairment."
  limitations: "Enriched population, brief randomized exposure, laboratory setting, and commercial sponsorship."
  sourceId: childress-2015

- outcome: "Adult ADHD symptom severity"
  evidenceType: "Randomized, double-blind, placebo-controlled parallel trial"
  formulation: "AR19 investigational racemic amphetamine sulfate"
  population: "320 adults aged 18–55 received randomized treatment"
  regimen: "20 or 40 mg/day in divided doses for five weeks"
  comparator: placebo
  assessment: "Adult ADHD Investigator Symptom Rating Scale"
  result: "Placebo-adjusted differences were -7.2 points with 20 mg/day, 97.5% CI -11.3 to -3.1, and -7.3 with 40 mg/day, 97.5% CI -11.4 to -3.2; both p<0.001."
  limitations: "Short forced-titration trial; similar point estimates do not prove dose equivalence. Manipulation resistance was not a demonstrated clinical addiction outcome."
  sourceId: faraone-2021

- outcome: "Pediatric ADHD symptoms with a separately labeled amphetamine product"
  evidenceType: "Randomized study reported in official labeling"
  formulation: "Dyanavel XR suspension, d:l 3.2:1"
  population: "108 children aged 6–12 entered the study"
  regimen: "Five-week open-label optimization, then one-week randomized treatment"
  comparator: placebo
  assessment: "Change from predose SKAMP-Combined at 4 hours"
  result: "Placebo-adjusted difference -14.8 points, 95% CI -17.9 to -11.6."
  limitations: "Not racemic-amphetamine evidence; cross-trial score differences cannot establish superiority over Evekeo."
  sourceId: dyanavel-label

- outcome: "Excessive sleepiness in narcolepsy type 2 or idiopathic hypersomnia"
  evidenceType: "Randomized, blinded, active-comparator noninferiority trial"
  formulation: "Amphetamine-dextroamphetamine mixed salts, not the 1:1 racemate"
  population: "44 adults across the two diagnoses"
  regimen: "Up to 20 mg twice daily for 12 weeks"
  comparator: "Modafinil up to 200 mg twice daily"
  assessment: "Epworth Sleepiness Scale change; prespecified noninferiority margin 2 points"
  result: "Mean improvement 4.4 points with mixed salts versus 5.0 with modafinil. Primary noninferiority was not demonstrated, p=0.11."
  secondaryResults: "Several secondary symptom measures met noninferiority criteria."
  limitations: "Small combined-diagnosis sample, no placebo arm, and no racemate-specific estimate. Secondary findings do not reverse the primary result."
  sourceId: trotti-2024

- outcome: "Broad cognitive enhancement in healthy people"
  evidenceType: "Double-blind, placebo-controlled crossover study"
  formulation: "Mixed amphetamine salts"
  population: "Healthy young adults"
  comparator: placebo
  assessment: "Thirteen measures spanning memory, inhibitory control, creativity, intelligence, and scholastic ability"
  result: "No general enhancement across participants; perceived enhancement nevertheless increased."
  limitations: "Small effects remain possible. Full protocol and disclosure access were incomplete for this review; no racemate-specific efficacy estimate is supplied."
  sourceId: ilieva-2013

- outcome: "Task-specific attention in healthy people"
  evidenceType: "Randomized, double-blind human experiment"
  formulation: "Pure dextroamphetamine; not racemic amphetamine"
  population: "71 healthy adults: placebo n=29, 10 mg n=17, 20 mg n=25"
  regimen: "Single oral administration"
  comparator: placebo
  assessment: "Five-choice continuous performance test"
  result: "Improved signal detection, response accuracy, and reaction-time variability."
  limitations: "An acute task-specific result, not evidence of global cognitive or academic improvement. Parallel mouse findings are not counted as human efficacy."
  sourceId: macqueen-2018

- outcome: "Incident psychosis or mania"
  evidenceType: "Observational psychiatric-hospital case-control study"
  formulation: "Prescription amphetamines grouped across products"
  population: "1,374 cases and 2,748 controls, ages 16–35"
  exposure: "Prescription exposure in the preceding month"
  comparator: "No prescription amphetamine exposure"
  result: "Adjusted odds ratio 2.68, 95% CI 1.90–3.77. Exposure above 30 mg/day in study-defined dextroamphetamine equivalents was associated with an odds ratio of 5.28."
  limitations: "Not an absolute incidence estimate, not randomized, and not racemate-specific. Hospital selection and residual confounding remain; the dose category is not a safe-use boundary."
  sourceId: moran-2024

- outcome: "Serious cardiovascular events in older patients"
  evidenceType: "Retrospective active-comparator cohort"
  formulation: "Amphetamine-dextroamphetamine, not isolated racemic sulfate"
  population: "436 veterans aged at least 50"
  comparator: methylphenidate
  assessment: "Composite myocardial infarction, stroke or transient ischemic attack, or arrhythmia"
  result: "12/241 events, 5.0%, versus 8/195, 4.1%; p=0.6635."
  limitations: "No detected between-drug difference is not evidence of no stimulant-related risk. Small event counts, confounding, and absence of an untreated comparator limit inference."
  sourceId: paulmann-2024
```

## Mechanisms

```yaml
- mechanism: "Catecholamine signaling"
  finding: "Amphetamines increase extracellular dopamine and norepinephrine through effects on monoamine release and reuptake."
  evidenceBoundary: "The exact therapeutic mechanism in ADHD remains incompletely established."
  sourceId: evekeo-odt-label

- mechanism: "Enantiomer-specific pharmacology"
  finding: "Labeling distinguishes stronger CNS excitatory activity of the d-isomer from relatively greater cardiovascular activity of the l-isomer."
  evidenceBoundary: "This distinction does not establish a superior efficacy-to-harm balance for the racemate in clinical head-to-head trials."
  sourceId: evekeo-label

- mechanism: "Prodrug distinction"
  formulation: lisdexamfetamine
  finding: "Lisdexamfetamine is a prodrug of dextroamphetamine, not a racemic amphetamine preparation."
  evidenceBoundary: "Its formulation, exposure profile, and clinical trial results require separate attribution."
  sourceId: vyvanse-label
```

## Cautions

```yaml
- caution: "Current formal contraindications versus warnings"
  formulation: "Evekeo conventional tablets"
  finding: "The retrieved current label formally contraindicates amphetamine hypersensitivity and MAOI treatment during, or within 14 days before, amphetamine treatment."
  qualification: "Serious cardiac disease is addressed separately in warnings; historical contraindication lists should not be substituted for the current product document."
  sourceId: evekeo-label

- caution: "Cardiovascular and peripheral vascular harms"
  finding: "Warnings include serious cardiac disease, blood-pressure and pulse increases, and peripheral vasculopathy including Raynaud phenomenon. Sudden death has been reported in patients with serious cardiac disease receiving CNS stimulants."
  uncertainty: "Label warnings and postmarketing reports do not quantify the absolute racemate-specific risk in otherwise healthy patients."
  sourceId: evekeo-label

- caution: "Psychiatric, neurologic, growth, and sleep effects"
  finding: "Amphetamine can exacerbate psychosis, precipitate mania or new psychotic symptoms, disturb sleep, suppress appetite and growth, and worsen tics. The label also warns about lowered seizure threshold."
  qualification: "Short efficacy trials cannot reliably exclude uncommon or delayed harms."
  sourceId: evekeo-label

- caution: "Abuse, addiction, physical dependence, and tolerance"
  finding: "The boxed warning identifies high potential for abuse and misuse, including addiction. Physical dependence and tolerance can occur separately."
  withdrawal: "After prolonged exposure, abrupt cessation or substantial reduction may produce depressed or dysphoric mood, fatigue, unpleasant dreams, sleep changes, increased appetite, and psychomotor changes."
  sourceId: evekeo-label

- caution: "Overdose"
  finding: "Severe toxicity can include arrhythmias, myocardial infarction or stroke, hyperthermia, rhabdomyolysis, seizures, coma, and death."
  modifier: "Higher doses and unapproved routes increase overdose and death risk."
  sourceId: evekeo-label

- caution: "Pregnancy and lactation"
  finding: "The racemate label lacks adequate controlled pregnancy studies; amphetamine passes into milk. Reports involving amphetamine-dependent mothers cannot directly quantify risks of prescribed therapeutic exposure."
  labelPosition: "The Evekeo label advises against breastfeeding during treatment."
  sourceId: evekeo-label

- caution: "Pregnancy evidence must retain its reassuring and uncertain components"
  evidenceType: "Large observational cohort of prescribed first-trimester stimulant exposure"
  finding: "For the grouped amphetamine exposure, adjusted relative risks were 1.05, 95% CI 0.93–1.19, for major malformations and 0.96, 95% CI 0.78–1.19, for cardiac malformations."
  limitation: "No increased malformation risk was detected, but the live-birth cohort does not establish racemate-specific safety, exclude all pregnancy outcomes, or eliminate residual confounding."
  sourceId: huybrechts-2018
```

## Claims

```yaml
- claim: "All products called amphetamine are racemic and interchangeable."
  assessment: unsupported
  explanation: "Adzenys has a 3:1 d:l ratio and base-mass labeling; its efficacy evidence derives from mixed-salts extended-release studies."
  sourceId: adzenys-label

- claim: "A ten-hour laboratory effect proves racemic amphetamine lasts longer or works better than mixed salts."
  assessment: unsupported
  explanation: "The racemate trial used placebo, not a head-to-head mixed-salts comparator."
  sourceId: childress-2015

- claim: "Feeling cognitively enhanced demonstrates improved cognitive ability."
  assessment: contradicted-in-the-studied-context
  explanation: "The healthy mixed-salts study found a subjective-objective dissociation."
  sourceId: ilieva-2013

- claim: "AR19 manipulation resistance demonstrates reduced addiction or makes amphetamine nonaddictive."
  assessment: not-established
  explanation: "The adult trial measured ADHD symptoms and short-term tolerability, not real-world addiction prevention."
  sourceId: faraone-2021

- claim: "The recent hypersomnolence trial established mixed salts as noninferior to modafinil."
  assessment: incomplete
  explanation: "Noninferiority was not demonstrated for the prespecified primary sleepiness endpoint, despite favorable secondary findings."
  sourceId: trotti-2024
```

## Interactions

```yaml
- interaction: "Monoamine oxidase inhibitors"
  evidenceType: "Formal label contraindication"
  finding: "Concurrent exposure or exposure within the preceding 14 days can cause hypertensive crisis and serious toxicity."
  scope: "Includes relevant non-antidepressant MAOI exposures; this is not limited to older psychiatric drugs."
  sourceId: evekeo-label

- interaction: "Serotonergic drugs"
  examples: [SSRIs, SNRIs, triptans, tramadol, fentanyl, lithium, buspirone]
  finding: "Combined exposure increases the risk of serotonin syndrome."
  uncertainty: "The label does not provide a reliable absolute risk for every combination."
  sourceId: evekeo-label

- interaction: "CYP2D6 inhibitors"
  examples: [fluoxetine, paroxetine, quinidine, ritonavir]
  finding: "These may increase amphetamine exposure and serotonin-syndrome risk."
  qualification: "The magnitude is not established uniformly across drugs, doses, and formulations."
  sourceId: evekeo-label

- interaction: "Acidifying and alkalinizing agents"
  finding: "Gastrointestinal or urinary pH changes can alter absorption or elimination. Alkalinizing agents can increase exposure; acidifying agents can reduce it."
  qualification: "These label interactions do not establish a predictable exposure change from an ordinary food serving."
  sourceId: evekeo-label

- interaction: "Other sympathomimetics, tricyclic antidepressants, and antihypertensives"
  finding: "Sympathomimetic or tricyclic effects on the cardiovascular system can be potentiated; amphetamine may oppose antihypertensive effects."
  uncertainty: "Product labeling describes interaction potential rather than a single numerical risk."
  sourceId: evekeo-label

- interaction: "Alcohol and extended-release formulation integrity"
  formulation: "Dyanavel XR suspension versus tablets"
  finding: "In vitro testing found dose-dumping potential for the suspension at 40% alcohol but not for the tablet under the same test condition."
  limitation: "No corresponding in vivo alcohol-exposure study was conducted; these findings are formulation-specific laboratory observations."
  sourceId: dyanavel-label
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: evekeo-label
  title: "EVEKEO® (amphetamine sulfate tablets, USP) CII"
  authors: ["Azurity Pharmaceuticals, Inc."]
  year: 2025
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f469fb38-0380-4621-9db3-a4f429126156"
  kind: official-label
  insight: "Racemic sulfate indications, dosing, contraindications, interactions, and current safety warnings."
  limitation: "Version 9, effective October 10, 2025; many warnings are stimulant-class findings rather than racemate-specific incidence estimates."
  funding: "Manufacturer-submitted prescribing information."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "The labeler has a commercial interest in the product; this is not an independent clinical study."
  conflictOfInterestStatus: institutional-interest-identified

- id: evekeo-odt-label
  title: "EVEKEO ODT (amphetamine sulfate) orally disintegrating tablets, CII"
  authors: ["Arbor Pharmaceuticals, LLC", "U.S. Food and Drug Administration"]
  year: 2019
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/209905s000lbl.pdf"
  kind: historical-official-label
  insight: "Racemate-specific adult elimination estimates and pharmacodynamics."
  limitation: "Historical ODT document; not current availability verification."
  funding: "Manufacturer regulatory submission."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "Commercial product interest."
  conflictOfInterestStatus: institutional-interest-identified

- id: childress-2015
  title: "The Efficacy and Safety of Evekeo, Racemic Amphetamine Sulfate, for Treatment of Attention-Deficit/Hyperactivity Disorder Symptoms: A Multicenter, Dose-Optimized, Double-Blind, Randomized, Placebo-Controlled Crossover Laboratory Classroom Study."
  authors: ["Ann C Childress", "Matthew Brams", "Andrew J Cutler", "Scott H Kollins", "Jo Northcutt", "Americo Padilla", "John M Turnbow"]
  year: 2015
  url: "https://pubmed.ncbi.nlm.nih.gov/25692608/"
  kind: randomized-trial
  insight: "Direct placebo-controlled evidence for 1:1 racemic sulfate in pediatric ADHD."
  limitation: "Open-label enrichment, brief randomized periods, and excluded comorbidities."
  funding: "Arbor Pharmaceuticals."
  sponsorshipStatus: industry-funded
  conflictsOfInterest: "Accessible disclosures identify pharmaceutical consulting, speaking, and research relationships for Childress; complete author-by-author declarations were not fully retrievable."
  conflictOfInterestStatus: partially-assessed

- id: evekeo-registry
  title: "A Multicenter, Dose-Optimized, Double-Blind, Randomized, Placebo-Controlled, Crossover Study to Evaluate the Efficacy of AR11 (Amphetamine Sulfate) in Pediatric Patients (Ages 6-12) With ADHD in a Laboratory Classroom"
  authors: ["Arbor Pharmaceuticals, Inc.", "ClinicalTrials.gov"]
  year: 2020
  url: "https://clinicaltrials.gov/study/NCT01986062"
  kind: trial-registry
  insight: "Completed study conducted December 2013–May 2014; registered outcomes and posted results."
  limitation: "Sponsor-submitted information; registry enrollment of 97 reflects the randomized sample."
  funding: "Lead sponsor Arbor Pharmaceuticals, Inc."
  sponsorshipStatus: industry-sponsored
  conflictsOfInterest: "Sponsor is the product developer; individual author disclosures are not established by registration."
  conflictOfInterestStatus: institutional-interest-identified

- id: faraone-2021
  title: "A Randomized, Double-Blind, Placebo-Controlled Trial to Evaluate the Efficacy and Safety of AR19, a Manipulation-Resistant Formulation of Amphetamine Sulfate, in Adults With Attention-Deficit/Hyperactivity Disorder."
  authors: ["Stephen V Faraone", "Ann Childress", "Steve Caras", "Valerie K Arnold", "C Brendan Montano", "Elias H Sarkis", "Andrew J Cutler", "Joel L Young"]
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/34428356/"
  kind: randomized-trial
  insight: "Adult symptom improvement with investigational racemic sulfate."
  limitation: "Five weeks; full publication access limited; not a real-world abuse-outcome study."
  funding: "Registry identifies Arbor Pharmaceuticals as sponsor; detailed publication funding statement was not accessible."
  sponsorshipStatus: industry-sponsored
  conflictsOfInterest: "Caras is affiliated with Arbor Clinical Development; complete disclosures were inaccessible."
  conflictOfInterestStatus: partially-assessed

- id: ar19-registry
  title: "A Multicenter, Fixed-Dose, Double-Blind, Randomized Study to Evaluate the Efficacy and Safety of AR19 (Amphetamine Sulfate) in Adult Subjects (Ages 18-55) With Attention Deficit Hyperactivity Disorder (ADHD)"
  authors: ["Arbor Pharmaceuticals, Inc.", "ClinicalTrials.gov"]
  year: 2024
  url: "https://clinicaltrials.gov/study/NCT03659929"
  kind: trial-registry
  insight: "Completed phase 3 study, September 2018–April 2019; 320 participants and posted results."
  limitation: "Registration does not establish approval or independent validation."
  funding: "Arbor Pharmaceuticals, Inc."
  sponsorshipStatus: industry-sponsored
  conflictsOfInterest: "Industry sponsor and sponsor-affiliated study director."
  conflictOfInterestStatus: institutional-interest-identified

- id: caras-2020
  title: "Pharmacokinetics of AR19, an Immediate-Release Amphetamine Sulfate Formulation Designed to Deter Manipulation for Administration Via Nonoral Routes: Bioequivalence to Reference Racemic Amphetamine Sulfate, Dose Proportionality, and Food Effect."
  authors: ["Steven Caras", "Terrilyn Sharpe"]
  year: 2020
  url: "https://pubmed.ncbi.nlm.nih.gov/31809216/"
  kind: human-pharmacokinetic-study
  insight: "Direct racemic-formulation comparison, dose proportionality, and AR19 food effect."
  limitation: "Healthy-volunteer exposure measurements, not comparative clinical or addiction outcomes."
  funding: "Arbor Pharmaceuticals, LLC."
  sponsorshipStatus: industry-funded
  conflictsOfInterest: "Both authors affiliated with Arbor Clinical Development; complete declaration text was not assessed."
  conflictOfInterestStatus: partially-assessed

- id: dyanavel-label
  title: "DYANAVEL XR (amphetamine) extended-release oral suspension; DYANAVEL XR (amphetamine) extended-release tablets"
  authors: ["NextWave Pharmaceuticals, Inc."]
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ae304b29-0b40-40ec-ad0d-76b742d4a9b9"
  kind: official-label
  insight: "Nonracemic 3.2:1 composition, base-strength dosing, clinical study, and formulation-specific pharmacokinetics."
  limitation: "Version 14; not evidence for the 1:1 parent racemate."
  funding: "Manufacturer-submitted prescribing information."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "Commercial product interest."
  conflictOfInterestStatus: institutional-interest-identified

- id: adzenys-label
  title: "ADZENYS XR-ODT (amphetamine) extended-release orally disintegrating tablets, CII"
  authors: ["Neos Therapeutics Brands, LLC"]
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1179269-00b5-48ea-972d-31e614e99b7e"
  kind: official-label
  insight: "3:1 composition, base-strength distinction, and efficacy bridging from mixed-salts extended-release studies."
  limitation: "Version 16; bridged evidence is not a new racemate trial."
  funding: "Manufacturer-submitted prescribing information."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "Commercial product interest."
  conflictOfInterestStatus: institutional-interest-identified

- id: adderall-label
  title: "Adderall® CII (Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate Tablets (Mixed Salts of a Single Entity Amphetamine Product))"
  authors: ["Teva Pharmaceuticals USA, Inc."]
  year: 2024
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f22635fe-821d-4cde-aa12-419f8b53db81"
  kind: official-label
  insight: "Mixed-salts composition, 3:1 enantiomer ratio, and ADHD/narcolepsy indications."
  limitation: "Conventional tablets; neither pure dextroamphetamine nor 1:1 racemate."
  funding: "Manufacturer-submitted prescribing information."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "Commercial product interest."
  conflictOfInterestStatus: institutional-interest-identified

- id: vyvanse-label
  title: "VYVANSE® (lisdexamfetamine dimesylate) capsules; VYVANSE® (lisdexamfetamine dimesylate) chewable tablets"
  authors: ["Takeda Pharmaceuticals America, Inc."]
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=704e4378-ca83-445c-8b45-3cfa51c1ecad"
  kind: official-label
  insight: "Establishes the distinct dextroamphetamine-prodrug identity and product indications."
  limitation: "Not racemic-amphetamine evidence."
  funding: "Manufacturer-submitted prescribing information."
  sponsorshipStatus: manufacturer-authored
  conflictsOfInterest: "Commercial product interest."
  conflictOfInterestStatus: institutional-interest-identified

- id: trotti-2024
  title: "Modafinil Versus Amphetamine-Dextroamphetamine For Idiopathic Hypersomnia and Narcolepsy Type 2: A Randomized, Blinded, Non-inferiority Trial."
  authors: ["Lynn Marie Trotti", "Tyler Blake", "Romy Hoque", "David B Rye", "Surina Sharma", "Donald L Bliwise"]
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/39306601/"
  kind: randomized-trial
  insight: "Primary noninferiority not demonstrated; several secondary outcomes favored a noninferiority interpretation."
  limitation: "44 participants across two diagnoses; mixed salts, not racemate; no placebo."
  funding: "American Academy of Sleep Medicine Foundation; NIH UL1TR002378 and R01 NS111280."
  sponsorshipStatus: nonprofit-and-government-funded
  conflictsOfInterest: "Trotti joined relevant sleep-medicine boards after funding was awarded. Rye reported Jazz and Takeda consulting fees; other authors reported no relevant conflicts."
  conflictOfInterestStatus: disclosed

- id: narcolepsy-registry
  title: "Informing Treatment Decisions in the Central Disorders of Hypersomnolence: A Pragmatic Clinical Trial of Modafinil Versus Amphetamines"
  authors: ["Emory University", "ClinicalTrials.gov"]
  year: 2024
  url: "https://clinicaltrials.gov/study/NCT03772314"
  kind: trial-registry
  insight: "Completed April 2019–May 2023 study identifies the intervention as amphetamine-dextroamphetamine/Adderall; results posted."
  limitation: "Sponsor-submitted registration, not independent outcome adjudication."
  funding: "Emory University sponsorship; American Academy of Sleep Medicine collaboration."
  sponsorshipStatus: academic-sponsored
  conflictsOfInterest: "Individual conflicts require the publication disclosures."
  conflictOfInterestStatus: not-assessed

- id: ilieva-2013
  title: "Objective and subjective cognitive enhancing effects of mixed amphetamine salts in healthy people."
  authors: ["Irena Ilieva", "Joseph Boland", "Martha J Farah"]
  year: 2013
  url: "https://pubmed.ncbi.nlm.nih.gov/22884611/"
  kind: randomized-crossover-study
  insight: "Broadly null objective enhancement alongside perceived benefit."
  limitation: "Mixed salts, not racemate; small effects and exploratory subgroup differences remain possible."
  funding: "PubMed indexes U.S. government non-PHS support; exact funding declaration not verified."
  sponsorshipStatus: incompletely-assessed
  conflictsOfInterest: "Complete declaration unavailable in accessible material."
  conflictOfInterestStatus: not-assessed

- id: macqueen-2018
  title: "Amphetamine improves mouse and human attention in the 5-choice continuous performance test."
  authors: ["David A MacQueen", "Arpi Minassian", "Johnny A Kenton", "Mark A Geyer", "William Perry", "Jonathan L Brigman", "Jared W Young"]
  year: 2018
  url: "https://pubmed.ncbi.nlm.nih.gov/29859849/"
  kind: randomized-human-experiment
  insight: "Acute dextroamphetamine improved selected attention-task measures."
  limitation: "Pure d-enantiomer; combined human/animal paper; no broad academic outcome."
  funding: "PubMed indexes NIH extramural and additional support; exact funding statement not verified."
  sponsorshipStatus: incompletely-assessed
  conflictsOfInterest: "Complete declaration not retrieved."
  conflictOfInterestStatus: not-assessed

- id: moran-2024
  title: "Risk of Incident Psychosis and Mania With Prescription Amphetamines."
  authors: ["Lauren V Moran", "Joseph P Skinner", "Ann K Shinn", "Kathryn Nielsen", "Vinod Rao", "S Trevor Taylor", "Talia R Cohen", "Cemre Erkol", "Jaisal Merchant", "Christin A Mujica", "Roy H Perlis", "Dost Ongur"]
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/39262211/"
  kind: observational-case-control-study
  insight: "Prescription amphetamine exposure and higher dose categories associated with psychosis/mania."
  limitation: "Grouped formulations, hospitalized controls, selection bias, and residual confounding."
  funding: "Funding declaration not verified."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "Complete declaration not retrieved."
  conflictOfInterestStatus: not-assessed

- id: paulmann-2024
  title: "Cardiovascular Safety of Amphetamine/Dextroamphetamine versus Methylphenidate in Older Adults."
  authors: ["Rachel Paulmann", "Randi Stouffer", "Monica Mathys", "Rick Weideman", "Carlos Alvarez", "Hui Yang"]
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/38237603/"
  kind: retrospective-cohort
  insight: "No detected difference in composite cardiovascular events between stimulant groups."
  limitation: "Small observational veteran cohort; no untreated comparator or racemate-specific estimate."
  funding: "Funding declaration not available in the retrieved abstract."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "Declaration not available in the retrieved abstract."
  conflictOfInterestStatus: not-assessed

- id: huybrechts-2018
  title: "Association Between Methylphenidate and Amphetamine Use in Pregnancy and Risk of Congenital Malformations: A Cohort Study From the International Pregnancy Safety Study Consortium."
  authors: ["Krista F Huybrechts", "Gabriella Bröms", "Lotte Brix Christensen", "Kristjana Einarsdóttir", "Anders Engeland", "Kari Furu", "Mika Gissler", "Sonia Hernandez-Diaz", "Pär Karlsson", "Øystein Karlstad", "Helle Kieler", "Anna-Maria Lahesmaa-Korpinen", "Helen Mogun", "Mette Nørgaard", "Johan Reutfors", "Henrik Toft Sørensen", "Helga Zoega", "Brian T Bateman"]
  year: 2018
  url: "https://pubmed.ncbi.nlm.nih.gov/29238795/"
  kind: observational-pregnancy-cohort
  insight: "No adjusted increase in major or cardiac malformations detected for prescribed amphetamines."
  limitation: "Live-birth cohort, grouped exposure, residual confounding, and restricted outcome scope."
  funding: "NIH extramural support indexed; complete funding statement not verified."
  sponsorshipStatus: incompletely-assessed
  conflictsOfInterest: "Complete declaration not retrieved."
  conflictOfInterestStatus: not-assessed

- id: cfr-1308
  title: "21 CFR § 1308.12 — Schedule II."
  authors: ["Drug Enforcement Administration", "Office of the Federal Register"]
  year: 2026
  url: "https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12"
  kind: official-regulation
  insight: "Federal Schedule II listing covers amphetamine, salts, optical isomers, and their salts."
  limitation: "U.S. federal scheduling only; not a determination of another jurisdiction's rules."
  funding: "Government regulatory publication."
  sponsorshipStatus: government
  conflictsOfInterest: "Research-style disclosure not applicable to the regulatory text."
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: "United States, federal"
  status: "Schedule II controlled substance"
  scope: "21 CFR 1308.12(d)(1) covers amphetamine, its salts, optical isomers, and salts of its optical isomers."
  qualification: "Controlled status does not mean absence of authorized medical uses. Other national and cross-border rules are not determined here."
  checkedAt: "2026-10-15"
  sourceId: cfr-1308

- jurisdiction: "United States, product labeling"
  formulation: "Evekeo conventional racemic sulfate tablets"
  status: "Prescription product labeled for narcolepsy, ADHD, and a short-term adjunctive role in refractory exogenous obesity."
  qualification: "The obesity indication is limited to a few weeks; it is not evidence for long-term weight management. Indications are not automatically shared by other formulations."
  sourceId: evekeo-label

- jurisdiction: "United States, product distinction"
  formulation: lisdexamfetamine
  status: "Vyvanse is labeled for ADHD in adults and children aged 6 years and older, and moderate-to-severe binge eating disorder in adults."
  qualification: "These are lisdexamfetamine indications, not additional indications established for racemic amphetamine."
  sourceId: vyvanse-label
```