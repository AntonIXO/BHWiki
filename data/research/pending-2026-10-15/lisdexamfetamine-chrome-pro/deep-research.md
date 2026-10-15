---
slug: lisdexamfetamine
title: Lisdexamfetamine
aliases:
  - Vyvanse
  - Elvanse
  - Lisdexamfetamine dimesylate
  - LDX
category: substance
subcategories:
  - prescription-stimulant
  - amphetamine-prodrug
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
x:
  evidenceScope: "Human randomized trials, FDA labeling, pharmacokinetics, safety and regulatory evidence"
  evidenceGrade: "High for short-term ADHD symptom reduction and adult binge-eating outcomes; insufficient for healthy cognitive enhancement"
  jurisdiction: "United States; other jurisdictions require independent verification"
  compoundScope: "Lisdexamfetamine only; evidence for other amphetamine formulations is not transferred"
  clinicalDisclaimer: "Evidence reference, not individualized prescribing guidance"
---

## Summary

Lisdexamfetamine (LDX) is an orally administered, centrally acting stimulant prodrug converted primarily in blood to **dextroamphetamine**, its pharmacologically active component. It is FDA-approved for attention-deficit/hyperactivity disorder (ADHD) in patients aged 6 years and older and moderate-to-severe binge-eating disorder (BED) in adults. It is not approved for weight loss or general cognitive enhancement.

Placebo-controlled randomized trials demonstrate clinically meaningful reductions in ADHD symptom ratings and binge-eating frequency in diagnosed populations. Evidence does not establish that these benefits generalize to healthy people or translate into superior real-world intellectual performance. Important risks include insomnia, appetite and weight reduction, elevated heart rate and blood pressure, psychiatric adverse reactions, and misuse, addiction, overdose and dependence.

The prodrug formulation changes absorption and active-drug exposure kinetics but does not eliminate amphetamine-associated risks. [sourceId: fda2025, adler2008, mcelroy2016]

## Description

Lisdexamfetamine is a covalent conjugate of **L-lysine and dextroamphetamine**, marketed as its dimesylate salt. Following oral absorption, it is hydrolyzed primarily by red blood cells, releasing active dextroamphetamine and L-lysine. It is not equivalent milligram-for-milligram to dextroamphetamine sulfate, mixed amphetamine salts or other stimulant formulations.

Vyvanse is available as oral capsules and chewable tablets. The pharmacological activity is predominantly attributable to the released dextroamphetamine, which enhances catecholaminergic neurotransmission. The conversion step contributes to a comparatively gradual active-drug concentration profile after oral administration; this does not confer immunity from misuse or make the drug nonaddictive. [sourceId: fda2025]

## Evidence note

The strongest direct evidence consists of short-term, randomized, double-blind, placebo-controlled trials in diagnosed ADHD and adult BED, supplemented by randomized-withdrawal maintenance studies. Primary endpoints are predominantly symptom scales, binge-eating days and relapse definitions rather than educational attainment, occupational productivity, long-term cardiovascular outcomes or mortality.

The ADHD and BED trials frequently excluded participants with unstable medical or significant psychiatric comorbidity, limiting external validity. Several pivotal trials were sponsored by Shire, with sponsor employees among the authors. Open-label extensions, post hoc analyses and responder-enriched randomized-withdrawal studies are distinguished from independent, unselected placebo-controlled trials.

No demonstrated benefit in diagnosed ADHD or BED is treated as evidence of efficacy in healthy individuals. [sourceId: adler2008, adler2013, mcelroy2015, mcelroy2016, hudson2017]

## Doses

```yaml
- population: "ADHD, age 6 years and older"
  formulation: "Oral lisdexamfetamine dimesylate"
  labeledStartingDose: "30 mg once daily in the morning"
  titration: "10 or 20 mg increments at approximately weekly intervals"
  labeledRange: "30–70 mg/day"
  maximum: "70 mg/day"
  evidenceType: "FDA prescribing information"
  sourceId: fda2025

- population: "Moderate-to-severe BED, adults"
  formulation: "Oral lisdexamfetamine dimesylate"
  labeledStartingDose: "30 mg once daily in the morning"
  titration: "20 mg approximately weekly"
  labeledTarget: "50–70 mg/day"
  maximum: "70 mg/day"
  evidenceType: "FDA prescribing information"
  sourceId: fda2025

- population: "Severe renal impairment, GFR 15 to <30 mL/min/1.73 m²"
  maximum: "50 mg/day"
  evidenceType: "Renal-adjusted FDA maximum"
  sourceId: fda2025

- population: "End-stage renal disease, GFR <15 mL/min/1.73 m²"
  maximum: "30 mg/day"
  evidenceType: "Renal-adjusted FDA maximum"
  sourceId: fda2025

- population: "Healthy individuals seeking cognitive enhancement"
  establishedDose: null
  evidenceType: "No FDA-approved enhancement indication or established benefit-risk dosing regimen"
  sourceId: fda2025
```

## Pharmacokinetics

```yaml
- parameter: "Activation"
  finding: "Absorbed lisdexamfetamine is converted primarily in red blood cells to dextroamphetamine and L-lysine"
  distinction: "Prodrug conversion is not primarily dependent on hepatic CYP activation"
  sourceId: fda2025

- parameter: "Lisdexamfetamine Tmax"
  finding: "Approximately 1 hour after fasting oral administration"
  population: "Healthy adults"
  sourceId: fda2025

- parameter: "Dextroamphetamine Tmax"
  finding: "Approximately 3.5 hours after fasting oral capsule administration"
  population: "Healthy adults"
  sourceId: fda2025

- parameter: "Lisdexamfetamine plasma half-life"
  finding: "Generally less than 1 hour"
  interpretation: "Not the duration of the active stimulant effect"
  sourceId: fda2025

- parameter: "Dextroamphetamine plasma half-life"
  finding: "Approximately 10–13 hours in adults"
  interpretation: "Elimination half-life is not identical to clinical effect duration"
  sourceId: fda2025

- parameter: "Food effect"
  finding: "A high-fat meal delays dextroamphetamine Tmax by approximately 1 hour without materially changing its AUC or Cmax after capsule administration"
  sourceId: fda2025

- parameter: "Elimination"
  finding: "Amphetamine elimination is influenced by urinary pH and renal function"
  interpretation: "Urine acidification increases, and alkalinization decreases, amphetamine blood concentrations"
  sourceId: fda2025

- parameter: "Dialysis"
  finding: "Lisdexamfetamine and dextroamphetamine are not dialyzable"
  sourceId: fda2025
```

## Duration

```yaml
- endpoint: "ADHD symptom control"
  finding: "Laboratory classroom and workplace studies support efficacy across multiple postdose hours, with some studies evaluating effects through approximately 13 hours"
  limitation: "Group-level assessment windows do not guarantee an individual duration"
  sourceId: fda2025

- endpoint: "Steady-state exposure"
  finding: "Dextroamphetamine steady state is reached after approximately 5 days of once-daily administration"
  limitation: "Steady-state PK does not establish tolerance, long-term efficacy or dependence"
  sourceId: fda2025
```

## Modifiers

```yaml
- modifier: "Renal impairment"
  effect: "Reduced elimination of active amphetamine and greater exposure risk"
  evidence: "FDA pharmacokinetic and dosage guidance"
  sourceId: fda2025

- modifier: "Urinary pH"
  effect: "Acidifying agents lower and alkalinizing agents raise amphetamine blood concentrations"
  evidence: "Established amphetamine elimination pharmacology"
  sourceId: fda2025

- modifier: "High-fat meal"
  effect: "Delays active-metabolite Tmax but does not materially alter total exposure"
  evidence: "Oral capsule food-effect pharmacokinetics"
  sourceId: fda2025

- modifier: "Underlying cardiovascular or psychiatric vulnerability"
  effect: "May increase the clinical consequences of stimulant-associated physiological or psychiatric effects"
  evidence: "Label warnings, exclusions and postmarketing safety evidence"
  sourceId: fda2025

- modifier: "Concurrent serotonergic or sympathomimetic substances"
  effect: "Potential pharmacodynamic interaction and increased adverse-event risk"
  evidence: "FDA drug-interaction warnings"
  sourceId: fda2025
```

## Effects

```yaml
- effect: "ADHD symptom reduction"
  population: "Adults with diagnosed ADHD"
  direction: beneficial
  evidence: "Randomized placebo-controlled"
  certainty: high
  sourceId: adler2008

- effect: "Executive-function rating improvement"
  population: "Adults with ADHD and clinically significant executive-function impairment"
  direction: beneficial
  evidence: "Randomized placebo-controlled; predominantly self-reported functional ratings"
  certainty: moderate
  sourceId: adler2013

- effect: "Binge-eating frequency reduction"
  population: "Adults with moderate-to-severe BED"
  direction: beneficial
  evidence: "Randomized placebo-controlled trials"
  certainty: high
  sourceId: mcelroy2015

- effect: "Binge-eating relapse prevention"
  population: "Adults with BED who previously responded to lisdexamfetamine"
  direction: beneficial
  evidence: "Responder-enriched randomized-withdrawal trial"
  certainty: moderate
  sourceId: hudson2017

- effect: "Healthy cognitive enhancement"
  population: "Healthy individuals"
  direction: uncertain
  evidence: "Insufficient directly applicable evidence for reliable net improvement in cognition or real-world productivity"
  certainty: insufficient
  sourceId: fda2025

- effect: "Appetite suppression and weight reduction"
  population: "Clinical trial participants"
  direction: adverse_or_context_dependent
  evidence: "Randomized safety observations and FDA labeling"
  certainty: high
  sourceId: fda2025

- effect: "Insomnia"
  population: "Clinical trial participants"
  direction: adverse
  evidence: "Randomized adverse-event reporting"
  certainty: high
  sourceId: fda2025

- effect: "Heart rate and blood pressure elevation"
  population: "Treated patients"
  direction: adverse
  evidence: "Clinical trial physiology and FDA labeling"
  certainty: high
  sourceId: fda2025
```

## Outcomes

```yaml
- outcome: "Adult ADHD symptom severity"
  design: "Four-week randomized double-blind placebo-controlled trial"
  population: "420 adults aged 18–55 with moderate-to-severe ADHD"
  intervention: "Lisdexamfetamine 30, 50 or 70 mg/day"
  comparator: "Placebo"
  result: "Mean ADHD-RS change: -16.2, -17.4 and -18.6 versus -8.2 with placebo; all active groups p<0.0001"
  limitation: "Short follow-up; forced titration in higher-dose arms; no statistically established difference between active doses"
  sourceId: adler2008

- outcome: "Adult ADHD clinical global improvement"
  design: "Same four-week randomized trial"
  population: "420 adults with ADHD"
  intervention: "Lisdexamfetamine 30, 50 or 70 mg/day"
  comparator: "Placebo"
  result: "CGI-I improvement: 57%, 62% and 61% versus 29% with placebo"
  limitation: "Clinician-rated short-term improvement, not objective lifetime functioning"
  sourceId: adler2008

- outcome: "Executive-function difficulties"
  design: "Ten-week randomized double-blind placebo-controlled trial"
  population: "161 adults with ADHD and elevated BRIEF-A scores"
  intervention: "Optimized lisdexamfetamine 30–70 mg/day"
  comparator: "Placebo"
  result: "Improvement in self-reported executive-function impairment"
  limitation: "Selected clinical population; questionnaire outcomes cannot be equated with improved performance on objective cognitive tasks"
  sourceId: adler2013

- outcome: "BED, phase 2 dose finding"
  design: "Eleven-week randomized double-blind placebo-controlled trial"
  population: "Adults with moderate-to-severe BED"
  intervention: "Lisdexamfetamine 30, 50 or 70 mg/day"
  comparator: "Placebo"
  result: "50 and 70 mg/day significantly reduced binge-eating days; 30 mg/day did not demonstrate the same significant benefit on the primary endpoint"
  limitation: "Short-term symptom outcome; not a trial of obesity treatment"
  sourceId: mcelroy2015

- outcome: "BED, confirmatory phase 3"
  design: "Two 12-week multicenter randomized double-blind placebo-controlled trials"
  population: "Adults with moderate-to-severe BED"
  intervention: "Dose-optimized lisdexamfetamine 50 or 70 mg/day"
  comparator: "Placebo"
  result: "Both trials showed statistically significant reductions in binge-eating days per week versus placebo"
  limitation: "Industry-sponsored; short duration and selected eligibility criteria"
  sourceId: mcelroy2016

- outcome: "BED relapse"
  design: "26-week randomized-withdrawal phase after 12-week open-label treatment"
  population: "418 randomized adults who met predefined response criteria"
  intervention: "Continued lisdexamfetamine 50 or 70 mg/day"
  comparator: "Switch to placebo"
  result: "Relapse in 3.7% versus 32.1%, respectively"
  limitation: "Enriched for initial responders and tolerators; cannot estimate initial treatment success in an unselected population"
  sourceId: hudson2017

- outcome: "Long-term cardiovascular events"
  design: "Pivotal efficacy RCTs"
  population: "Selected ADHD and BED trial participants"
  intervention: "Lisdexamfetamine"
  comparator: "Placebo"
  result: "No definitive randomized estimate of myocardial infarction, stroke or cardiovascular mortality risk"
  limitation: "Trials were not designed or powered for rare long-latency events"
  sourceId: fda2025

- outcome: "Healthy cognition and productivity"
  design: "Evidence gap"
  population: "Healthy adults without ADHD"
  intervention: "Lisdexamfetamine"
  comparator: "Placebo or active comparator"
  result: "No established clinically meaningful, durable improvement in real-world productivity"
  limitation: "Absence of an established benefit is not proof that every individual cognitive endpoint is unaffected"
  sourceId: fda2025
```

## Mechanisms

```yaml
- mechanism: "Prodrug hydrolysis"
  description: "Red-blood-cell-associated conversion releases active dextroamphetamine and L-lysine"
  evidenceLevel: "Human pharmacokinetics"
  sourceId: fda2025

- mechanism: "Catecholaminergic signaling"
  description: "Released dextroamphetamine promotes central dopaminergic and noradrenergic signaling through amphetamine-associated monoamine transporter and presynaptic mechanisms"
  evidenceLevel: "Established pharmacology; mechanism does not independently prove clinical efficacy"
  sourceId: fda2025

- mechanism: "Delayed active-drug appearance"
  description: "Conversion following absorption contributes to a delayed dextroamphetamine peak relative to the prodrug"
  evidenceLevel: "Human pharmacokinetics"
  sourceId: fda2025

- mechanism: "Binge-eating effects"
  description: "Central catecholaminergic effects plausibly influence impulse control and food-related behavior"
  evidenceLevel: "Mechanistic interpretation; clinical efficacy established separately by BED trials"
  sourceId: mcelroy2016
```

## Cautions

```yaml
- risk: "Abuse, misuse and addiction"
  severity: high
  finding: "Schedule II amphetamine prodrug with boxed warning; misuse can lead to overdose and death"
  sourceId: fda2025

- risk: "Serious cardiovascular adverse events"
  severity: high
  finding: "Warnings include sudden death in susceptible patients; stimulants increase heart rate and blood pressure"
  sourceId: fda2025

- risk: "Psychiatric adverse reactions"
  severity: high
  finding: "May exacerbate pre-existing psychosis or precipitate manic or psychotic symptoms"
  sourceId: fda2025

- risk: "Insomnia, anxiety and appetite suppression"
  severity: moderate
  finding: "Common treatment-emergent adverse reactions; weight reduction may be clinically significant"
  sourceId: fda2025

- risk: "Pediatric growth suppression"
  severity: moderate
  finding: "Weight and growth effects are recognized stimulant safety concerns"
  sourceId: fda2025

- risk: "Peripheral vasculopathy"
  severity: moderate
  finding: "Includes Raynaud phenomenon"
  sourceId: fda2025

- risk: "Serotonin syndrome"
  severity: high
  finding: "Potentially life-threatening interaction, particularly with serotonergic drugs or metabolic inhibitors"
  sourceId: fda2025

- risk: "Pregnancy and lactation"
  severity: uncertain
  finding: "Potential fetal and neonatal risks; amphetamines are present in human milk and breastfeeding is not recommended during treatment under US labeling"
  sourceId: fda2025

- risk: "Dependence and withdrawal"
  severity: moderate_to_high
  finding: "Prolonged exposure may produce physical dependence; abrupt discontinuation after sustained use can produce dysphoria, fatigue, sleep changes and other withdrawal symptoms"
  sourceId: fda2025

- risk: "Overdose"
  severity: critical
  finding: "Possible hyperthermia, arrhythmia, severe agitation, seizures, rhabdomyolysis and death"
  sourceId: fda2025
```

## Claims

```yaml
- claim: "Lisdexamfetamine treats ADHD symptoms"
  verdict: supported
  qualification: "Supported for diagnosed ADHD in indicated age groups, not all possible functional outcomes"
  sourceId: adler2008

- claim: "Lisdexamfetamine reduces binge eating"
  verdict: supported
  qualification: "Adults with moderate-to-severe BED; not equivalent to an obesity indication"
  sourceId: mcelroy2016

- claim: "Lisdexamfetamine