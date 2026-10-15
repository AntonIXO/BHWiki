---
slug: mixed-amphetamine-salts
name: Mixed amphetamine salts
subtitle: Defined four-salt amphetamine products with formulation-specific evidence
aliases:
  - MAS
  - Amphetamine-dextroamphetamine
  - Adderall
  - Adderall XR
  - Mydayis
formula: null
molecularWeight: null
pubchemCid: null
smiles: null
category: stimulant
tags:
  - prescription
  - ADHD
  - narcolepsy
  - controlled-substance
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
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
---

## Summary

Mixed amphetamine salts are defined prescription mixtures delivering predominantly dextroamphetamine with a smaller levoamphetamine component. Adderall immediate-release tablets are labeled in the United States for ADHD and narcolepsy; Adderall XR and Mydayis have ADHD indications with different age limits and release systems. Their doses and time courses are not interchangeable merely because all contain amphetamine. (sourceId: adderall-ir-label; sourceId: adderall-xr-label; sourceId: mydayis-label)

Product-specific randomized trials demonstrate short-term improvement in ADHD symptoms. This does not establish general cognitive enhancement in healthy people: controlled studies found limited or inconsistent objective benefits, sometimes accompanied by stronger perceived enhancement or physiological activation. Narcolepsy-specific comparative evidence is substantially narrower than the ADHD evidence. (sourceId: weisler-2006; sourceId: ilieva-2013; sourceId: weyandt-2018; sourceId: trotti-2024)

Important risks include appetite and sleep disturbance, cardiovascular stimulation, psychiatric adverse reactions, misuse, addiction, tolerance and physical dependence. Extended release does not remove these risks. (sourceId: adderall-xr-label)

## Description

The mixture contains dextroamphetamine saccharate, dextroamphetamine sulfate, amphetamine sulfate and amphetamine aspartate, expressed using the product’s specified hydration or salt equivalents. The four components contribute equal nominal salt weights; two supply dextroamphetamine and two supply racemic amphetamine. The conventional description is approximately 3:1 dextroamphetamine to levoamphetamine, rather than a 1:1 racemate. The current Adderall XR description specifies **3.1:1 by amphetamine-base equivalents**, while other label passages retain the conventional 3:1 terminology. (sourceId: adderall-ir-label; sourceId: adderall-xr-label)

Adderall is immediate release. Adderall XR combines immediate- and delayed-release beads. Mydayis uses three bead populations: immediate release and two delayed-release populations. Mydayis is therefore treated here as a separate delivery formulation, not as another name for Adderall XR. (sourceId: adderall-ir-label; sourceId: adderall-xr-label; sourceId: mydayis-label)

Labeled milligrams describe the specified mixed salts, not an identical mass of amphetamine free base. A single molecular formula, molecular weight, PubChem identifier or SMILES would misrepresent this multi-salt product. Pure dextroamphetamine, lisdexamfetamine and methamphetamine are outside the product definition; studies pooling other amphetamines are explicitly identified below. (sourceId: adderall-ir-label; sourceId: adderall-xr-label; sourceId: moran-2024)

## Evidence note

This record separates prescribing information, primary randomized outcomes, registry records, laboratory cognition and observational safety. The cited ADHD trials mainly evaluate weeks of symptom treatment, not lifelong educational or occupational outcomes. Industry involvement is substantial in several pivotal trials; unavailable disclosures are recorded as unknown rather than conflict-free. Registry entries establish registration and submitted status, not independent confirmation of efficacy. The studies listed are representative, not an exhaustive inventory. (sourceId: biederman-2002; sourceId: weisler-2006; sourceId: weisler-2017; sourceId: registry-shp465; sourceId: registry-hypersomnia)

## Doses

```yaml
- id: dose-units
  formulation: "Adderall immediate-release tablets"
  observation: "Strengths are 5, 7.5, 10, 12.5, 15, 20 and 30 mg of labeled mixed salts."
  distinction: "The IR label lists 20 mg mixed salts as 12.6 mg total amphetamine-base equivalent. This is not 20 mg pure dextroamphetamine."
  sourceId: adderall-ir-label

- id: ir-adhd-label
  context: "U.S. prescribing-information doses, not an individualized regimen"
  formulation: "Adderall immediate release"
  population: "Pediatric ADHD"
  dose: "Ages 3–5: label starting dose 2.5 mg daily, with 2.5 mg weekly increments. Ages 6 and older: 5 mg once or twice daily initially, with 5 mg weekly increments."
  qualification: "The pediatric ADHD paragraph states that exceeding 40 mg/day is rarely necessary. Additional daily doses are separated by 4–6 hours. These instructions do not establish preschool efficacy for extended-release products."
  sourceId: adderall-ir-label

- id: ir-narcolepsy-label
  context: "U.S. labeled narcolepsy dosing"
  formulation: "Adderall immediate release"
  dose: "Usual labeled range is 5–60 mg/day in divided doses, individualized in the label by response."
  qualification: "The narcolepsy range is not an ADHD dose recommendation or evidence for healthy-user cognitive enhancement."
  sourceId: adderall-ir-label

- id: xr-adhd-label
  context: "U.S. labeled ADHD dosing"
  formulation: "Adderall XR, once daily"
  dose: "Ages 6–12: initial 10 mg each morning, or 5 mg when a lower initial dose is appropriate; maximum 30 mg/day. Ages 13–17: initial 10 mg/day, with an increase to 20 mg/day described after one week. Adults: labeled recommended dose 20 mg/day."
  qualification: "Adult trials testing 40 or 60 mg/day are research evidence, not a replacement for the labeled recommended dose."
  sourceId: adderall-xr-label

- id: mydayis-adhd-label
  context: "U.S. labeled ADHD dosing"
  formulation: "Mydayis, triple-bead extended release"
  dose: "Adults 18–55: initial 12.5 mg each morning; the label also permits considering 25 mg initially for some patients. Adjustments are in 12.5 mg increments no sooner than weekly, to a maximum of 50 mg/day. Ages 13–17: initial 12.5 mg/day; maximum 25 mg/day."
  qualification: "The label states that doses above 50 mg/day showed no additional clinically meaningful benefit in adults. Milligram-for-milligram substitution from other amphetamine products is not supported."
  sourceId: mydayis-label
```

## Pharmacokinetics

```yaml
- id: ir-human-pk
  formulation: "Adderall immediate release"
  population: "Healthy adults receiving single fasted 10 or 30 mg doses"
  observation: "Peak concentrations occurred at approximately 3 hours. Mean elimination half-life was 9.77–11 hours for dextroamphetamine and 11.5–13.8 hours for levoamphetamine."
  limitation: "These are enantiomer-specific plasma measurements, not durations of useful attention or wakefulness. The IR label states that food effects have not been studied."
  sourceId: adderall-ir-label

- id: xr-human-pk
  formulation: "Adderall XR"
  observation: "Peak concentrations occur at approximately 7 hours. Adult mean elimination half-lives are approximately 10 hours for dextroamphetamine and 13 hours for levoamphetamine."
  comparison: "The label describes a comparable plasma concentration profile for XR 20 mg and IR 10 mg given twice, four hours apart."
  limitation: "This specific comparison does not establish equivalence across all extended-release amphetamine products."
  sourceId: adderall-xr-label

- id: mydayis-human-pk
  formulation: "Mydayis"
  observation: "Peak concentrations occur at approximately 8 hours in adults and 7–10 hours in pediatric PK studies. Mean half-life ranges are approximately 10–11 hours for dextroamphetamine and 10–13 hours for levoamphetamine."
  limitation: "A later peak primarily reflects delivery characteristics; it is not evidence that Mydayis contains a different stimulant molecule."
  sourceId: mydayis-label

- id: metabolism-and-excretion
  observation: "Amphetamine undergoes multiple oxidative pathways. CYP2D6 participates in formation of 4-hydroxyamphetamine, but it is not the sole determinant of clearance."
  renalObservation: "With normal urinary pH, approximately 30–40% of a dose is recovered unchanged in urine. The label reports much wider recovery across differing urinary pH conditions."
  limitation: "Clearance varies with urinary pH, renal function and metabolism. A single half-life or a fixed CYP2D6 interaction multiplier is not established for every patient."
  sourceId: adderall-ir-label
```

## Duration

```yaml
- id: xr-observed-coverage
  formulation: "Adderall XR"
  observation: "A four-week adult ADHD trial detected symptom benefits at assessments 4 and 12 hours after dosing."
  limitation: "A significant group difference at 12 hours is not a guarantee of 12-hour coverage for every individual."
  sourceId: weisler-2006

- id: mydayis-duration
  formulation: "Mydayis"
  observation: "The label describes effects that may last up to 16 hours and identifies consequent potential for insomnia."
  limitation: "This upper observation is formulation-specific, not a universal amphetamine duration."
  sourceId: mydayis-label
```

## Modifiers

```yaml
- id: food-xr
  modifier: "High-fat meal"
  observation: "For Adderall XR, food does not materially change the extent of absorption but delays peak concentrations by approximately 2.5–2.7 hours in the cited 30 mg study."
  limitation: "This result cannot be assigned to IR tablets or every extended-release formulation."
  sourceId: adderall-xr-label

- id: age-and-weight
  modifier: "Age and body size"
  observation: "Adderall XR exposure and clearance vary with body weight. Children aged 6–12 have shorter mean half-lives than adults in the label's studied populations."
  limitation: "Younger age does not imply that adult dosing can be scaled mechanically; the current label excludes use below age 6 because of higher exposure and adverse reactions, including weight loss."
  sourceId: adderall-xr-label

- id: renal-xr
  modifier: "Severe renal impairment"
  observation: "For GFR 15 to below 30 mL/min/1.73 m², the XR label specifies 15 mg each morning for adults and 5 mg for pediatric patients, with a 20 mg maximum for ages 6–12. Use in end-stage renal disease below GFR 15 is not recommended in the label."
  sourceId: adderall-xr-label

- id: renal-mydayis
  modifier: "Severe renal impairment"
  observation: "For Mydayis, the corresponding adult starting dose is 12.5 mg/day with a 25 mg/day maximum; the maximum for ages 13–17 is 12.5 mg/day if tolerated. The label does not recommend use in end-stage renal disease."
  sourceId: mydayis-label

- id: baseline-cognition
  modifier: "Baseline ability and COMT genotype"
  observation: "Exploratory moderation appeared on a minority of tasks in a healthy-adult crossover study."
  limitation: "These findings do not establish a validated genotype-based regimen or a reliable rule that low baseline performers benefit."
  sourceId: ilieva-2013
```

## Effects

```yaml
- id: clinical-symptoms
  domain: "ADHD symptoms"
  observation: "Inattentiveness and hyperactivity-impulsivity ratings can improve relative to placebo during treatment."
  distinction: "Clinical symptom reduction is not equivalent to an increase in intelligence."
  sourceId: weisler-2017

- id: activation
  domain: "Healthy participants"
  observation: "Acute MAS can increase subjective activation, positive activated emotion, heart rate and blood pressure without broad objective cognitive improvement."
  limitation: "The directly cited experiment was small and acute."
  sourceId: weyandt-2018

- id: common-adverse-effects
  domain: "Adolescent ADHD trial"
  observation: "Across active XR doses, decreased appetite occurred in 35.6% versus 1.9% with placebo, insomnia in 12.0% versus 3.7%, and weight loss in 9.4% versus 0%."
  limitation: "These four-week trial percentages are population- and dose-specific, not universal incidence estimates."
  sourceId: spencer-2006
```

## Outcomes

```yaml
- id: ir-versus-methylphenidate
  population: "25 children with ADHD; mean age 9.6 years"
  design: "Randomized, double-blind, within-person crossover during a summer behavioral-treatment program"
  intervention: "Adderall IR 7.5 or 12.5 mg twice daily"
  comparator: "Methylphenidate IR 10 or 17.5 mg twice daily; placebo"
  result: "Both medications improved behavior and classroom productivity over placebo. MAS outperformed the tested methylphenidate doses on several, but not all, measures and often retained effects later in the day."
  limitation: "The investigators considered the tested MAS doses functionally more potent. This small, behaviorally intensive study does not establish general superiority at equivalent doses."
  sourceId: pelham-1999

- id: pediatric-xr
  population: "584 randomized children aged 6–12; 563 in the intention-to-treat analysis"
  design: "Three-week, double-blind, parallel-group randomized trial"
  intervention: "Adderall XR 10, 20 or 30 mg each morning"
  comparator: "Placebo"
  result: "All active groups improved teacher and parent Conners Global Index ratings, including afternoon assessments; dose-related improvement was reported."
  limitation: "Short-term behavioral ratings do not establish long-term educational attainment or rare-event safety."
  sourceId: biederman-2002

- id: adolescent-xr
  population: "287 randomized adolescents aged 13–17; 278 in the intention-to-treat analysis"
  design: "Four-week randomized, double-blind trial"
  intervention: "Adderall XR 10, 20, 30 or 40 mg/day"
  comparator: "Placebo"
  result: "Pooled active-treatment ADHD Rating Scale change was -17.8 points versus -9.4 with placebo."
  limitation: "Pooling doses obscures dose-specific benefit-harm differences; tested doses are not identical to labeled routine dosing."
  sourceId: spencer-2006

- id: adult-xr
  population: "255 randomized adults with ADHD"
  design: "Four-week randomized, double-blind, placebo-controlled trial"
  intervention: "Adderall XR 20, 40 or 60 mg/day"
  comparator: "Placebo"
  result: "All three doses improved ADHD symptoms; the reported mean effect size was 0.8. Endpoint ADHD Rating Scale scores were similar across active doses."
  limitation: "Greater benefit at 60 mg in a more severely affected subgroup was post hoc, not proof that higher doses are generally better."
  sourceId: weisler-2006

- id: adult-mydayis
  population: "275 randomized adults aged 18–55"
  design: "Four-week randomized, double-blind, forced-dose trial"
  intervention: "SHP465/Mydayis 12.5 or 37.5 mg/day"
  comparator: "Placebo"
  result: "Placebo-adjusted ADHD Rating Scale reductions were 8.1 points (95% CI 4.4–11.7) and 13.4 points (9.7–17.1), respectively."
  limitation: "Selected population, short duration and manufacturer involvement; the two active doses were not statistically compared for superiority."
  registry: NCT02604407
  sourceId: weisler-2017

- id: hypersomnolence-comparison
  population: "44 adults: 33 with idiopathic hypersomnia and 11 with narcolepsy type 2"
  design: "Twelve-week randomized, blinded, non-inferiority trial"
  intervention: "MAS immediate release, individually titrated up to 20 mg twice daily"
  comparator: "Modafinil, up to 200 mg twice daily"
  result: "Epworth Sleepiness Scale improved by 4.4 points with MAS and 5.0 with modafinil. MAS did not demonstrate non-inferiority on the primary endpoint using the prespecified two-point margin; p=0.11."
  qualification: "Several secondary endpoints met non-inferiority criteria, but this does not reverse the primary result. Failure to establish non-inferiority does not prove inferiority."
  limitation: "Only 11 participants had narcolepsy type 2; no narcolepsy type 1 or cataplexy efficacy conclusion follows."
  registry: NCT03772314
  sourceId: trotti-2024

- id: healthy-cognition-2013
  population: "Healthy young adults"
  design: "Double-blind, placebo-controlled crossover"
  intervention: "Single-session MAS 20 mg; dose verified from indexed author-manuscript methods"
  comparator: "Placebo"
  result: "No general enhancement across 13 cognitive measures was found, although participants perceived greater enhancement after active drug."
  limitation: "Small or task-specific effects remain possible. Full manuscript retrieval was unavailable; accessible abstract and indexed manuscript excerpts were used."
  sourceId: ilieva-2013

- id: healthy-cognition-2018
  population: "13 healthy college-student completers without ADHD"
  design: "Double-blind, placebo-controlled crossover"
  intervention: "Single oral dose of generic MAS 30 mg"
  comparator: "Dextrose placebo"
  result: "Response-time variability improved, but forward digit span worsened. Reading and story-recall outcomes did not significantly improve. Physiological and subjective activation were more prominent than cognitive effects."
  qualification: "Unlike the 2013 experiment, perceived cognitive enhancement was not significantly increased."
  limitation: "Pilot sample, multiple outcomes and one-tailed testing make individual cognitive findings provisional."
  sourceId: weyandt-2018

- id: cardiovascular-follow-up
  population: "223 otherwise healthy adults exposed to MAS XR 20–60 mg/day for up to 24 months"
  design: "Long-term treatment follow-up"
  result: "Mean changes were approximately +2.3 mmHg systolic pressure, +1.3 mmHg diastolic pressure and +2.1 beats/minute pulse. Seven participants discontinued for hypertension or palpitations/tachycardia."
  limitation: "No concurrent long-term placebo estimate is provided in the accessed abstract. Selected participants and limited sample size cannot exclude uncommon serious cardiovascular outcomes."
  sourceId: weisler-2005-cv

- id: psychosis-mania-observational
  population: "1,374 hospitalized cases aged 16–35 and 2,748 psychiatric hospital controls"
  design: "Case-control study; not randomized"
  exposure: "Prescription amphetamines pooled across products, not MAS alone"
  result: "Past-month exposure was associated with psychosis or mania: adjusted odds ratio 2.68 (95% CI 1.90–3.77). Doses above 30 mg/day dextroamphetamine equivalents were associated with 5.28-fold odds."
  limitation: "Selection and residual confounding remain possible. These are not MAS-specific incidence estimates, and dextroamphetamine-equivalent doses are not labeled MAS milligrams or a safe-dose boundary."
  sourceId: moran-2024

- id: registered-mydayis-study
  registry: NCT02604407
  status: "Completed; results posted"
  observation: "Shire-sponsored phase 3 study enrolled 275 participants, ran from November 2015 to March 2016, and links the 2017 primary publication."
  sourceId: registry-shp465

- id: registered-hypersomnia-study
  registry: NCT03772314
  status: "Completed; results posted"
  observation: "Emory-sponsored study enrolled 44 participants from April 2019 through May 2023. The American Academy of Sleep Medicine is listed as collaborator."
  sourceId: registry-hypersomnia
```

## Mechanisms

```yaml
- id: catecholamine-signaling
  level: "Established pharmacologic description"
  observation: "Amphetamines increase extracellular norepinephrine and dopamine through increased release and inhibition of reuptake."
  qualification: "The labels state that the precise therapeutic mechanism in ADHD is not fully established. A neurotransmitter mechanism alone does not prove healthy-user cognitive benefit."
  sourceId: adderall-ir-label

- id: delivery-system
  level: "Formulation mechanism"
  observation: "Mydayis combines immediate-release beads with delayed-release beads triggered at approximately pH 5.5 and pH 7.0."
  qualification: "This explains a different delivery profile, not a new active molecule or an independently demonstrated safety advantage."
  sourceId: mydayis-label
```

## Cautions

```yaml
- id: formal-contraindications
  observation: "Current U.S. labels contraindicate amphetamine/component hypersensitivity and concurrent MAOI treatment or use within 14 days after MAOI discontinuation. Relevant MAOIs include linezolid and intravenous methylene blue."
  distinction: "Serious cardiac disease and other risk states also carry warnings; warnings are not automatically identical to the label's formal contraindication list."
  sourceId: adderall-ir-label

- id: cardiovascular-risk
  observation: "Labels warn about serious cardiac disease, including structural abnormalities, cardiomyopathy, serious arrhythmias and coronary disease. Sudden death has been reported with stimulant treatment in patients with serious cardiac disease."
  qualification: "Average increases of 2–4 mmHg blood pressure and 3–6 beats/minute heart rate are label-level CNS-stimulant estimates, not a MAS-specific guarantee or upper bound."
  sourceId: adderall-xr-label

- id: psychiatric-risk
  observation: "Stimulants can exacerbate psychosis, precipitate manic or mixed episodes in susceptible patients, and produce new psychotic or manic symptoms."
  qualification: "The label's approximately 0.1% estimate for new psychotic/manic symptoms comes from pooled short-term CNS-stimulant trials, not an isolated MAS cohort."
  sourceId: adderall-xr-label

- id: addiction-and-misuse
  observation: "The boxed warning identifies high potential for abuse, misuse and addiction. Misuse can cause overdose and death; risk increases with higher doses and unapproved administration."
  qualification: "Prescription status and extended release do not eliminate addiction or overdose potential."
  sourceId: adderall-xr-label

- id: dependence-and-withdrawal
  observation: "Repeated exposure can produce tolerance and physical dependence. Withdrawal after prolonged use or substantial dose reduction can include depressed or dysphoric mood, fatigue, sleep disturbance, increased appetite and psychomotor changes."
  distinction: "Physical dependence and tolerance are not, by themselves, synonymous with addiction."
  sourceId: adderall-xr-label

- id: other-important-adverse-reactions
  observation: "Warnings include growth suppression and weight loss, seizures, peripheral vasculopathy including Raynaud's phenomenon, and motor or verbal tics or worsening Tourette's syndrome."
  qualification: "Rare peripheral vascular complications can include digital ulceration. These warnings are separate from the common appetite and sleep effects."
  sourceId: adderall-xr-label

- id: pregnancy-and-lactation
  observation: "Available prescription-amphetamine epidemiology has not identified a drug-associated major-malformation or miscarriage signal, but prematurity and low birth weight have been reported. Amphetamine enters human milk; long-term infant effects are unknown."
  qualification: "The label's pregnancy and lactation evidence includes amphetamine-class data, not exclusively this four-salt product. Absence of an identified malformation signal is not proof of pregnancy safety."
  sourceId: adderall-xr-label

- id: overdose
  observation: "Severe stimulant toxicity can involve arrhythmia, myocardial infarction, stroke, agitation, seizures, hyperthermia, rhabdomyolysis and death."
  qualification: "The extended-release pharmacokinetic profile remains relevant during overdose; it does not imply a brief intoxication window."
  sourceId: adderall-xr-label
```

## Claims

```yaml
- claim: "Mixed amphetamine salts improve healthy people's intelligence or academic achievement."
  assessment: "Not established"
  explanation: "Controlled cognitive testing did not demonstrate general enhancement. Acute laboratory tasks also do not establish improved grades or sustained real-world productivity."
  sourceId: ilieva-2013

- claim: "Feeling more activated means cognition has improved."
  assessment: "Not supported as an equivalence"
  explanation: "Physiological and subjective activation can occur alongside small, absent or adverse changes on objective cognitive tasks."
  sourceId: weyandt-2018

- claim: "Higher Adderall XR doses are generally more effective."
  assessment: "Not established by the cited adult trial"
  explanation: "All tested doses were effective, but endpoint symptom scores were similar; a high-dose advantage in more severe ADHD was a post-hoc finding."
  sourceId: weisler-2006

- claim: "Adderall XR and Mydayis can be substituted milligram for milligram."
  assessment: "Contradicted by formulation-specific labeling"
  explanation: "Mydayis explicitly warns against milligram-for-milligram substitution because of differing compositions and pharmacokinetic profiles."
  sourceId: mydayis-label
```

## Interactions

```yaml
- id: maoi
  interactingClass: "Monoamine oxidase inhibitors"
  consequence: "Potential hypertensive crisis and serious toxicity; concurrent use and the 14-day post-MAOI interval are contraindicated."
  sourceId: adderall-xr-label

- id: serotonergic-drugs
  interactingClass: "Serotonergic medications"
  consequence: "Increased risk of serotonin syndrome."
  limitation: "This is a clinically important label warning, not a quantified risk estimate for every individual combination."
  sourceId: adderall-xr-label

- id: cyp2d6-inhibitors
  interactingClass: "CYP2D6 inhibitors"
  consequence: "May increase amphetamine exposure and serotonin-syndrome risk."
  limitation: "The label does not provide a universal magnitude of exposure increase or a fixed conversion between inhibited and uninhibited doses."
  sourceId: adderall-xr-label

- id: ph-modifying-agents
  interactingClass: "Gastrointestinal or urinary acidifying and alkalinizing agents"
  consequence: "Acidifying agents can reduce amphetamine blood levels; alkalinizing agents can increase levels and potentiate effects."
  limitation: "The size of the change depends on agent, formulation and physiology; these are interaction hazards rather than predictable duration-control methods."
  sourceId: adderall-xr-label

- id: proton-pump-inhibitors
  interactingClass: "Proton pump inhibitors"
  consequence: "Adderall XR labeling reports a decreased time to peak amphetamine concentration."
  distinction: "An earlier peak is not, by itself, proof of a greater total exposure or improved efficacy."
  sourceId: adderall-xr-label

- id: tricyclic-antidepressants
  interactingClass: "Tricyclic antidepressants"
  consequence: "Sympathomimetic and cardiovascular effects can be potentiated."
  sourceId: adderall-xr-label

- id: antihypertensives
  interactingClass: "Antihypertensive drugs"
  consequence: "Amphetamines may antagonize antihypertensive effects."
  sourceId: adderall-ir-label
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: adderall-ir-label
  title: "ADDERALL (DEXTROAMPHETAMINE SACCHARATE, AMPHETAMINE ASPARTATE, DEXTROAMPHETAMINE SULFATE, AND AMPHETAMINE SULFATE) TABLET [TEVA PHARMACEUTICALS USA, INC.]"
  organization: "Teva Pharmaceuticals USA, Inc.; DailyMed"
  year: 2024
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f22635fe-821d-4cde-aa12-419f8b53db81"
  insight: "Defines IR composition, salt/base units, ADHD and narcolepsy indications, dosing, human PK and warnings."
  limitation: "Prescribing information combines product-specific and class evidence; version 21."
  funding: "Manufacturer-submitted regulatory labeling; not an independent clinical study."
  sponsorshipStatus: manufacturer-label
  conflictsOfInterest: "The labeler has a commercial interest in the product."
  conflictOfInterestStatus: commercial-interest

- id: adderall-xr-label
  title: "ADDERALL XR (DEXTROAMPHETAMINE SULFATE, DEXTROAMPHETAMINE SACCHARATE, AMPHETAMINE SULFATE AND AMPHETAMINE ASPARTATE) CAPSULE, EXTENDED RELEASE [TAKEDA PHARMACEUTICALS AMERICA, INC.]"
  organization: "Takeda Pharmaceuticals America, Inc.; DailyMed"
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aff45863-ffe1-4d4f-8acf-c7081512a6c0"
  insight: "Current XR identity, age restrictions, dosing, PK, contraindications and boxed warning."
  limitation: "Version 38, effective April 30, 2026; some risk estimates are pooled stimulant-class evidence."
  funding: "Manufacturer-submitted regulatory labeling."
  sponsorshipStatus: manufacturer-label
  conflictsOfInterest: "The labeler has a commercial interest in the product."
  conflictOfInterestStatus: commercial-interest

- id: mydayis-label
  title: "MYDAYIS (DEXTROAMPHETAMINE SULFATE, DEXTROAMPHETAMINE SACCHARATE, AMPHETAMINE ASPARTATE MONOHYDRATE, AND AMPHETAMINE SULFATE) CAPSULE, EXTENDED RELEASE [TAKEDA PHARMACEUTICALS AMERICA, INC.]"
  organization: "Takeda Pharmaceuticals America, Inc.; DailyMed"
  year: 2026
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=141a7970-3f06-44ea-9ab7-aeece2c085fc"
  insight: "Defines triple-bead delivery, ADHD indication from age 13, dosing, renal limits and substitution warning."
  limitation: "Version 13, effective April 30, 2026; not an independent comparison with other formulations."
  funding: "Manufacturer-submitted regulatory labeling."
  sponsorshipStatus: manufacturer-label
  conflictsOfInterest: "The labeler has a commercial interest in the product."
  conflictOfInterestStatus: commercial-interest

- id: pelham-1999
  title: "A comparison of ritalin and adderall: efficacy and time-course in children with attention-deficit/hyperactivity disorder."
  authors: "W E Pelham; H R Aronoff; J K Midlam; C J Shapiro; E M Gnagy; A M Chronis; A N Onyango; G Forehand; A Nguyen; J Waxmonsky"
  year: 1999
  url: "https://pubmed.ncbi.nlm.nih.gov/10103335/"
  insight: "Direct IR MAS, methylphenidate and placebo comparison."
  limitation: "25 children, intensive concurrent behavioral treatment and non-equivalent functional potency."
  funding: "Publisher acknowledgement identifies a grant from Shire Richwood, Adderall's manufacturer."
  sponsorshipStatus: industry-funded
  conflictsOfInterest: "Manufacturer funding established; complete individual disclosures were not verified."
  conflictOfInterestStatus: partially-verified

- id: biederman-2002
  title: "A randomized, double-blind, placebo-controlled, parallel-group study of SLI381 (Adderall XR) in children with attention-deficit/hyperactivity disorder."
  authors: "Joseph Biederman; Frank A Lopez; Samuel W Boellner; Mark C Chandler"
  year: 2002
  url: "https://pubmed.ncbi.nlm.nih.gov/12165576/"
  insight: "Large short-term pediatric XR efficacy trial."
  limitation: "Three weeks; detailed funding and disclosure text unavailable in accessed abstract."
  funding: "Not independently verified from accessible material."
  sponsorshipStatus: unknown
  conflictsOfInterest: "Not verified; unavailable disclosure is not evidence of no conflicts."
  conflictOfInterestStatus: unknown

- id: spencer-2006
  title: "Efficacy and safety of mixed amphetamine salts extended release (Adderall XR) in the management of attention-deficit/hyperactivity disorder in adolescent patients: a 4-week, randomized, double-blind, placebo-controlled, parallel-group study."
  authors: "Thomas J Spencer; Timothy E Wilens; Joseph Biederman; Richard H Weisler; Stephanie C Read; Raymond Pratt"
  year: 2006
  url: "https://pubmed.ncbi.nlm.nih.gov/16678648/"
  insight: "Adolescent symptom changes and formulation-specific adverse-event frequencies."
  limitation: "Four weeks; pooled active-dose results; full disclosures not accessed."
  funding: "Complete study funding not verified."
  sponsorshipStatus: unknown
  conflictsOfInterest: "Complete author disclosures not verified."
  conflictOfInterestStatus: unknown

- id: weisler-2006
  title: "Mixed amphetamine salts extended-release in the treatment of adult ADHD: a randomized, controlled trial."
  authors: "Richard H Weisler; Joseph Biederman; Thomas J Spencer; Timothy E Wilens; Stephen V Faraone; Allan K Chrisman; Stephanie C Read; Simon J Tulloch"
  year: 2006
  url: "https://pubmed.ncbi.nlm.nih.gov/16871129/"
  insight: "Adult XR efficacy and assessments through 12 hours."
  limitation: "Four-week trial; severity-related dose findings were post hoc."
  funding: "Supported in part by Shire, as stated in the author-posted article."
  sponsorshipStatus: industry-funded
  conflictsOfInterest: "Investigators disclosed multiple industry relationships including Shire; author affiliations identify Read and Tulloch as Shire employees."
  conflictOfInterestStatus: disclosed

- id: weisler-2017
  title: "Efficacy and Safety of SHP465 Mixed Amphetamine Salts in the Treatment of Attention-Deficit/Hyperactivity Disorder in Adults: Results of a Randomized, Double-Blind, Placebo-Controlled, Forced-Dose Clinical Study"
  authors: "Richard H Weisler; Michael Greenbaum; Valerie Arnold; Ming Yu; Brian Yan; Margo Jaffee; Brigitte Robertson"
  year: 2017
  url: "https://doi.org/10.1007/s40263-017-0455-7"
  insight: "Mydayis-specific placebo-controlled efficacy."
  limitation: "Short, selected-population, forced-dose study."
  funding: "Shire Development funded research, writing assistance and publication; sponsor participated in design, analysis and reporting."
  sponsorshipStatus: industry-funded
  conflictsOfInterest: "Four authors were Shire employees with stock interests; investigators disclosed industry payments."
  conflictOfInterestStatus: disclosed

- id: trotti-2024
  title: "Modafinil Versus Amphetamine-Dextroamphetamine For Idiopathic Hypersomnia and Narcolepsy Type 2: A Randomized, Blinded, Non-inferiority Trial"
  authors: "Lynn Marie Trotti; Tyler Blake; Romy Hoque; David B Rye; Surina Sharma; Donald L Bliwise"
  year: 2024
  url: "https://doi.org/10.1007/s40263-024-01122-y"
  insight: "Primary non-inferiority was not established."
  limitation: "Small mixed-diagnosis sample, predominantly idiopathic hypersomnia."
  funding: "American Academy of Sleep Medicine Foundation; NIH UL1TR002378 and R01NS111280."
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: "Trotti disclosed society/foundation board roles arising after the award; Rye disclosed Jazz and Takeda consulting."
  conflictOfInterestStatus: disclosed

- id: ilieva-2013
  title: "Objective and subjective cognitive enhancing effects of mixed amphetamine salts in healthy people."
  authors: "Irena Ilieva; Joseph Boland; Martha J Farah"
  year: 2013
  url: "https://pubmed.ncbi.nlm.nih.gov/22884611/"
  fullTextUrl: "https://repository.upenn.edu/bitstreams/fef33568-25ba-4bf9-ae35-756bda857bf4/download"
  insight: "Dissociation between general objective performance and perceived enhancement."
  limitation: "Abstract and indexed author-manuscript excerpts accessed; complete PDF retrieval failed."
  funding: "Full funding declaration not verified."
  sponsorshipStatus: unknown
  conflictsOfInterest: "Full declaration not verified."
  conflictOfInterestStatus: unknown

- id: weyandt-2018
  title: "Neurocognitive, Autonomic, and Mood Effects of Adderall: A Pilot Study of Healthy College Students"
  authors: "Lisa L Weyandt; Tara L White; Bergljot Gyda Gudmundsdottir; Adam Z Nitenson; Emma S Rathkey; Kelvin A De Leon; Stephanie A Bjorn"
  year: 2018
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6165228/"
  insight: "Acute 30 mg MAS produced more prominent activation than cognitive improvement."
  limitation: "13 completers and multiple exploratory outcomes."
  funding: "Rhode Island neuroscience institutions, NIH and NSF grants; funders reported no role beyond financial support."
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: "Authors explicitly reported no competing biomedical financial interests or potential conflicts."
  conflictOfInterestStatus: none-declared

- id: weisler-2005-cv
  title: "Long-term cardiovascular effects of mixed amphetamine salts extended release in adults with ADHD."
  authors: "Richard H Weisler; Joseph Biederman; Thomas J Spencer; Timothy E Wilens"
  year: 2005
  url: "https://pubmed.ncbi.nlm.nih.gov/16344839/"
  insight: "Longer MAS-specific cardiovascular follow-up, including cardiovascular discontinuations."
  limitation: "Selected healthy adults; insufficient to quantify rare-event risk."
  funding: "Not verified from accessible abstract."
  sponsorshipStatus: unknown
  conflictsOfInterest: "Complete publication-specific declarations unavailable."
  conflictOfInterestStatus: unknown

- id: moran-2024
  title: "Risk of Incident Psychosis and Mania With Prescription Amphetamines."
  authors: "Lauren V Moran; Joseph P Skinner; Ann K Shinn; Kathryn Nielsen; Vinod Rao; S Trevor Taylor; Talia R Cohen; Cemre Erkol; Jaisal Merchant; Christin A Mujica; Roy H Perlis; Dost Ongur"
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/39262211/"
  insight: "Observational association between amphetamine exposure, dose and psychosis or mania."
  limitation: "Hospital-control selection; pooled amphetamine products; no MAS-specific incidence."
  funding: "NIMH grant R01MH122427."
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: "Complete author disclosure text not verified."
  conflictOfInterestStatus: unknown

- id: registry-shp465
  title: "Safety and Efficacy Study of SHP465 in Adults Aged 18-55 Years With Attention-deficit/ Hyperactivity Disorder (ADHD)"
  organization: "Shire; ClinicalTrials.gov"
  year: 2021
  url: "https://clinicaltrials.gov/study/NCT02604407"
  insight: "Registration, sponsor, dates, enrollment and posted results."
  limitation: "Sponsor-submitted record; year reflects last posted update."
  funding: "Lead sponsor Shire."
  sponsorshipStatus: industry-sponsored
  conflictsOfInterest: "Sponsor is the product developer; registry does not replace author disclosures."
  conflictOfInterestStatus: commercial-interest

- id: registry-hypersomnia
  title: "Modafinil Versus Amphetamines for the Treatment of Narcolepsy Type 2 and Idiopathic Hypersomnia"
  organization: "Emory University; ClinicalTrials.gov"
  year: 2024
  url: "https://clinicaltrials.gov/study/NCT03772314"
  insight: "Registered direct comparison, completed enrollment and posted results."
  limitation: "Sponsor-submitted record; not independent efficacy adjudication."
  funding: "Emory University sponsor; American Academy of Sleep Medicine collaborator."
  sponsorshipStatus: non-industry-sponsored
  conflictsOfInterest: "Individual investigator disclosures are reported in the publication, not established by registry fields."
  conflictOfInterestStatus: not-reported-in-registry

- id: us-schedule-ii
  title: "21 CFR 1308.12 — Schedule II."
  organization: "U.S. Drug Enforcement Administration; Electronic Code of Federal Regulations"
  year: 2026
  url: "https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12"
  insight: "Federal scheduling includes amphetamine, its salts and optical isomers."
  limitation: "U.S. federal classification only; not a worldwide possession, prescribing or importation survey."
  funding: "Government regulatory publication."
  sponsorshipStatus: government
  conflictsOfInterest: "No study sponsorship or author financial-disclosure framework applies."
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: "United States, federal"
  status: "Schedule II controlled substance"
  observation: "21 CFR 1308.12(d)(1) includes amphetamine, its salts, optical isomers and salts of its optical isomers."
  checkedAt: "2026-10-15"
  sourceId: us-schedule-ii

- jurisdiction: "United States"
  formulation: "Adderall immediate-release tablets"
  status: "Prescription medication"
  approvedIndications: "ADHD and narcolepsy"
  sourceId: adderall-ir-label

- jurisdiction: "United States"
  formulation: "Adderall XR"
  approvedIndications: "ADHD in adults and pediatric patients aged 6 years and older"
  qualification: "The reviewed label does not provide a narcolepsy indication."
  sourceId: adderall-xr-label

- jurisdiction: "United States"
  formulation: "Mydayis"
  approvedIndications: "ADHD in patients aged 13 years and older"
  qualification: "Approval applies to this formulation; it does not establish approval of healthy-user cognitive enhancement."
  sourceId: mydayis-label
```