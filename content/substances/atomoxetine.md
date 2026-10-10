---
slug: atomoxetine
name: Atomoxetine
subtitle: Selective norepinephrine reuptake inhibition with exposure-dependent safety limits.
aliases:
  - Strattera
  - atomoxetine hydrochloride
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Non-stimulant ADHD medicine
tags:
  - attention
  - cognitive-performance
  - major-cardiovascular-events
  - blood-pressure
accent: "#8e9cb8"
reviewedAt: "2026-10-11"
editorialStatus: sourced-draft
halfLife:
  label: 5.2 hours in most CYP2D6 metabolizer types; 21.6 hours in poor metabolizers
  low: 5.2
  high: 21.6
  context: Label pharmacokinetics describe a markedly longer terminal half-life in CYP2D6 poor metabolizers; this is not a universal personal estimate or a therapeutic-onset measure.
  sourceId: atomoxetine-label
  observationId: atomoxetine-pk
kinetics:
  onset: Clinical benefit can separate from placebo during week 1 and increase over subsequent weeks; plasma peak is not therapeutic onset
  peak: Median plasma peak about 1 hour in most metabolizer types and 2.5 hours in poor metabolizers
  duration: Not inferred from half-life; symptom response was followed over weeks to months in adult trials
  bioavailability: Absolute bioavailability about 63% in most metabolizer types and 94% in poor metabolizers
  metabolism: Primarily CYP2D6 to equipotent 4-hydroxyatomoxetine, followed by glucuronidation; CYP2C19 forms less-active N-desmethylatomoxetine
  sourceId: atomoxetine-label
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

Atomoxetine is an oral selective norepinephrine reuptake inhibitor approved in the United States for ADHD in adults and children aged 6 years and older. The U.S. label does not establish it as a general memory, intelligence, productivity, or cognitive-enhancement medicine. ADHD trials support symptom improvement, while healthy-volunteer studies show task-specific findings rather than a general enhancement effect. [atomoxetine-label] [asherson2014] [chamberlain2006]

## Description

Atomoxetine is supplied as oral capsules and is not a controlled substance under the cited U.S. label. The clinically relevant evidence separates diagnosed-ADHD symptom outcomes from healthy-volunteer laboratory tasks, and separates plasma exposure from the slower time course of clinical response. [atomoxetine-label] [chamberlain2006] [faraone2016]

## Evidence note

This page converts the completed research into source-linked cards. Label dosing, pharmacokinetics, CYP2D6 modifiers, ADHD outcomes, healthy-volunteer findings, safety warnings, interactions, claims, and legal context are kept in their corresponding sections. [atomoxetine-label] [asherson2014] [chamberlain2006]

## Doses

```yaml
- label: Pediatric patients under 70 kg
  amount: 0.5 mg/kg/day starting; 1.2 mg/kg/day target; maximum 1.4 mg/kg/day or 100 mg/day, whichever is less
  quantity: null
  quantityMax: null
  unit: mg/kg/day or mg/day
  ingredient: Atomoxetine
  formulation: Oral capsule
  route: Oral
  frequency: Once each morning or divided between morning and late afternoon/early evening
  duration: Label titration and maintenance dosing
  population: Pediatric patients under 70 kg
  purpose: U.S. labeled ADHD treatment; not individualized dosing advice
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: The label reports no additional pediatric benefit above 1.2 mg/kg/day. Capsules are taken whole.
  sourceId: atomoxetine-label
- label: Patients at least 70 kg and adults
  amount: 40 mg/day starting; 80 mg/day target; 100 mg/day maximum
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Atomoxetine
  formulation: Oral capsule
  route: Oral
  frequency: Once each morning or divided between morning and late afternoon/early evening
  duration: Label titration and maintenance dosing
  population: Pediatric patients at least 70 kg and adults
  purpose: U.S. labeled ADHD treatment; not individualized dosing advice
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: The label reports no evidence supporting effectiveness above 100 mg/day in adults.
  sourceId: atomoxetine-label
- label: CYP2D6 poor metabolizer or strong CYP2D6 inhibitor
  amount: Nominal starting, target, and maximum doses follow the applicable label group
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: Atomoxetine
  formulation: Oral capsule
  route: Oral
  frequency: Label regimen
  duration: Extend titration interval to 4 weeks before considering a dose increase
  population: Known CYP2D6 poor metabolizers or people receiving strong CYP2D6 inhibitors
  purpose: Label exposure-management context; not individualized dosing advice
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: Higher exposure requires slower titration consideration even when nominal dose limits are unchanged.
  sourceId: atomoxetine-label
- label: Hepatic impairment adjustment
  amount: 50% of normal initial and target dose in Child-Pugh B; 25% in Child-Pugh C
  quantity: null
  quantityMax: null
  unit: fraction of label dose
  ingredient: Atomoxetine
  formulation: Oral capsule
  route: Oral
  frequency: Label regimen
  duration: During moderate or severe hepatic impairment
  population: Patients with hepatic impairment
  purpose: Label dose-adjustment context; not individualized dosing advice
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: Child-Pugh A uses the normal dose in the cited label; discontinuation does not require a taper under that label.
  sourceId: atomoxetine-label
```

## Pharmacokinetics

```yaml
- id: atomoxetine-pk
  analyte: Atomoxetine
  route: Oral
  formulation: Atomoxetine capsule
  population: Adults and children represented in U.S. label analyses
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 5.2
  high: 21.6
  unit: hours
  context: Terminal half-life is about 5.2 hours in most CYP2D6 metabolizer types and about 21.6 hours in CYP2D6 poor metabolizers. The same table reports median peak concentration at about 1 hour and 2.5 hours, respectively, with accumulation about 1.1-fold and 3.3-fold.
  sourceId: atomoxetine-label
  modelEligible: true
- id: atomoxetine-pk-food
  analyte: Atomoxetine and metabolites
  route: Oral
  formulation: Atomoxetine capsule with or without food
  population: Label pharmacokinetic study participants
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Food did not materially change total exposure, but the studied fed condition lowered peak concentration by about 37% and delayed peak time by about 3 hours. More than 80% of the dose was recovered in urine as 4-hydroxyatomoxetine-O-glucuronide and less than 3% unchanged.
  sourceId: atomoxetine-label
  modelEligible: false
- id: atomoxetine-pk-metabolism
  analyte: Atomoxetine metabolites
  route: Oral
  formulation: Atomoxetine capsule
  population: Human pharmacokinetic analyses in the U.S. label
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: CYP2D6 forms 4-hydroxyatomoxetine, an equipotent norepinephrine-transporter inhibitor that is then glucuronidated. CYP2C19 forms N-desmethylatomoxetine, reported as approximately 20-fold less pharmacologically active than parent atomoxetine.
  sourceId: atomoxetine-label
  modelEligible: false
- id: atomoxetine-pk-onset
  analyte: Atomoxetine clinical response
  route: Oral
  formulation: Atomoxetine in pooled adult trials
  population: Adults with ADHD in pooled randomized trials
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Plasma peak and elimination half-life are not therapeutic-onset measures. Adult symptom effects were detectable by week 1, larger by week 4, and further improved on average through week 26.
  sourceId: faraone2016
  modelEligible: false
```

## Modifiers

```yaml
- label: CYP2D6 genotype
  effect: Much higher exposure in poor metabolizers
  detail: CYP2D6 poor metabolizers had about 10-fold higher atomoxetine AUC and 5-fold higher steady-state peak concentration than other metabolizer types; label analyses also show larger mean heart-rate and blood-pressure changes.
  sourceId: atomoxetine-label
  observationId: atomoxetine-pk
  factorType: genotype
  direction: variable
- label: Strong CYP2D6 inhibition
  effect: Phenoconversion toward poor-metabolizer exposure
  detail: Paroxetine increased atomoxetine AUC about 6.5-fold and fluoxetine about 6–8-fold in subjects who were not genetically poor metabolizers.
  sourceId: atomoxetine-label
  observationId: atomoxetine-pk
  factorType: enzyme
  direction: variable
- label: Hepatic impairment
  effect: Higher exposure
  detail: Atomoxetine AUC increased about two-fold in moderate hepatic impairment and about four-fold in severe hepatic impairment, supporting the label's dose reductions.
  sourceId: atomoxetine-label
  observationId: atomoxetine-pk
  factorType: other
  direction: variable
- label: Severe renal impairment
  effect: Higher systemic exposure with limited label significance
  detail: Severe renal impairment produced approximately 65% higher systemic exposure; after correction for dose per kilogram, the label describes the difference as not clinically significant.
  sourceId: atomoxetine-label-older
  observationId: atomoxetine-pk
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: atomoxetine-effect-adhd
  conceptId: perception
  name: ADHD symptom reduction
  direction: Increased
  evidence: Human research
  description: A meta-analysis of 13 controlled adult trials involving 1,824 participants found atomoxetine superior to placebo for overall ADHD symptoms, with standardized mean difference about -0.45; effects were about -0.42 for inattention and -0.36 for hyperactivity or impulsivity.
  sourceId: ravishankar2016
  population: Adults with ADHD in controlled trials
  exposure: Atomoxetine treatment over included trial durations
  instrument: ADHD symptom rating scales
  magnitude: Standardized mean difference -0.45 overall; -0.42 inattention; -0.36 hyperactivity or impulsivity
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-effect-executive
  conceptId: perception
  name: Executive-function domains in ADHD
  direction: Variable
  evidence: Human research
  description: A 2024 systematic review and meta-analysis found benefits in attention, inhibition, and reaction-time-related domains but no significant pooled working-memory effect for chronic atomoxetine administration.
  sourceId: isfandnia2024
  population: Participants with ADHD in seven atomoxetine studies
  exposure: Chronic atomoxetine treatment in included studies
  instrument: Domain-specific executive-function tasks
  magnitude: Hedges g about 0.36–0.64 in reported positive domains; working-memory result not significant
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-effect-inhibition
  conceptId: alertness
  name: Acute response inhibition in healthy volunteers
  direction: Increased
  evidence: Human research
  description: A single 60-mg dose improved stop-signal response inhibition in healthy men but did not improve probabilistic learning or broad alertness measures.
  sourceId: chamberlain2006
  population: 60 healthy men
  exposure: Acute atomoxetine 60 mg in randomized double-blind placebo-controlled study
  instrument: Stop-signal and probabilistic-learning tasks
  magnitude: Selective response-inhibition improvement; null probabilistic-learning and broad-alertness findings
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-effect-adverse
  conceptId: perception
  name: Common adverse effects
  direction: Variable
  evidence: Human research
  description: Label adverse reactions include nausea, dry mouth, reduced appetite, insomnia, somnolence, fatigue, headache, abdominal pain, sexual dysfunction, urinary hesitancy or retention, and tachycardia; frequencies differ by age and metabolizer status.
  sourceId: atomoxetine-label
  population: Pediatric and adult participants in label trials
  exposure: Therapeutic atomoxetine treatment
  instrument: Adverse-event reporting
  magnitude: Pediatric examples include headache 19% versus 15% placebo and reduced appetite 16% versus 4% placebo; adult CYP2D6 poor metabolizers had higher selected adverse-event frequencies.
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: atomoxetine-outcome-adult-response
  conceptId: attention
  name: Adult ADHD response and symptom scores
  direction: Increased
  evidence: Human research
  description: In an integrated analysis, mean CAARS change favored atomoxetine over placebo in short-term studies and after six months. A response definition requiring at least 30% CAARS improvement plus CGI-ADHD severity of 3 or less was met more often with atomoxetine at both time horizons.
  sourceId: asherson2014
  population: Adults with ADHD in multicenter placebo-controlled trials
  exposure: Atomoxetine treatment in short-term and six-month studies
  instrument: CAARS and CGI-ADHD
  magnitude: CAARS change -12.2 versus -8.1 short-term and -13.2 versus -9.7 at six months; response 34.8% versus 22.3% short-term and 43.4% versus 28.0% at six months
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-outcome-time-course
  conceptId: attention
  name: Time course of adult symptom response
  direction: Increased
  evidence: Human research
  description: A pooled analysis found increasing average effect sizes from week 1 through week 26; this describes group trajectories and does not predict an individual response.
  sourceId: faraone2016
  population: Adults with ADHD in two randomized trials
  exposure: Atomoxetine treatment followed for up to six months
  instrument: ADHD symptom scales
  magnitude: Approximate effect sizes 0.28 at week 1, 0.45 at week 4, and 0.52 at week 26; 80-mg group estimate 0.82 at six months
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-outcome-relapse
  conceptId: attention
  name: Pediatric relapse prevention
  direction: Decreased
  evidence: Human research
  description: In label relapse-prevention studies, responders who continued atomoxetine had longer time to ADHD relapse than responders switched to placebo during both maintenance follow-up periods.
  sourceId: atomoxetine-label
  population: Pediatric patients with an initial atomoxetine response
  exposure: Continued atomoxetine versus placebo switch
  instrument: Relapse criteria defined by the trial
  magnitude: Statistically longer time to relapse with continued treatment; exact estimates vary by study phase
  reportType: measured-assessment
  conflictingSourceIds: []
- id: atomoxetine-outcome-healthy-boundary
  conceptId: cognitive-performance
  name: Healthy-cognition evidence boundary
  direction: Variable
  evidence: Human research
  description: Healthy-volunteer findings are task-specific and include null results; ADHD symptom efficacy and laboratory neural or inhibitory-task effects do not establish broad cognitive enhancement in people without ADHD.
  sourceId: chamberlain2006
  population: Healthy volunteers and adults with ADHD across cited studies
  exposure: Acute healthy-volunteer dosing and therapeutic ADHD treatment
  instrument: Stop-signal, probabilistic-learning, neuroimaging, and ADHD rating measures
  magnitude: No general enhancement estimate established
  reportType: measured-assessment
  conflictingSourceIds: [marquand2011]
- id: atomoxetine-outcome-comparative
  conceptId: attention
  name: Comparative short-term ADHD symptom effect
  direction: Increased
  evidence: Human research
  description: A network meta-analysis estimated clinician-rated standardized mean differences around -0.56 for atomoxetine, -0.78 for methylphenidate, and -1.02 for amphetamines at approximately 12 weeks; more negative values favored the medication in that analysis.
  sourceId: cortese2018
  population: Children, adolescents, and adults with ADHD in indirect network comparisons
  exposure: Short-term licensed medication trials
  instrument: Clinician-rated ADHD symptom scales
  magnitude: Indirect comparison; not a universal ranking for an individual patient
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Norepinephrine-transporter inhibition
  description: Atomoxetine blocks the norepinephrine transporter; its principal active metabolite 4-hydroxyatomoxetine also inhibits the transporter. This is established pharmacology and does not by itself establish a clinical outcome in healthy people.
  sourceId: atomoxetine-label
- title: Task- and context-dependent noradrenergic modulation
  description: Acute response-inhibition and healthy-volunteer neuroimaging findings are consistent with task- and context-dependent noradrenergic modulation. They do not reduce ADHD response to a single neurotransmitter or prove a general dopamine-boosting effect.
  sourceId: chamberlain2006
```

## Cautions

```yaml
- title: Pediatric suicidal ideation
  description: Pooled short-term studies reported suicidal ideation in 5 of 1,357 atomoxetine-treated pediatric patients (0.4%) versus 0 of 851 placebo-treated patients; all reported ideation occurred in patients aged 6–12 years during the first treatment month, and one case involved a suicide attempt.
  sourceId: atomoxetine-label
- title: Severe liver injury
  description: Rare postmarketing cases included liver failure and one transplant. Reported cases often began within 120 days; the label directs discontinuation and no rechallenge when jaundice or laboratory evidence of liver injury occurs.
  sourceId: atomoxetine-label
- title: Heart rate and blood pressure
  description: Atomoxetine can increase heart rate and blood pressure and is contraindicated in severe cardiovascular disorders expected to deteriorate with clinically important increases. The label calls for cardiovascular assessment and periodic monitoring.
  sourceId: atomoxetine-label
- title: Psychiatric activation
  description: New psychotic or manic symptoms, aggression, hostility, or mania activation can occur; the label calls for bipolar-risk screening before initiation.
  sourceId: atomoxetine-label
- title: Contraindications and other recognized risks
  description: The label contraindicates MAOI co-use or use within 14 days, narrow-angle glaucoma, pheochromocytoma, severe cardiovascular disorders, and known hypersensitivity. Urinary retention, priapism, growth or weight effects, orthostatic hypotension, syncope, and possible concentration-related QTc changes are also recognized risks.
  sourceId: atomoxetine-label
```

## Claims

```yaml
- id: atomoxetine-claim-nonstimulant
  assertion: Atomoxetine is not a stimulant under the cited U.S. label
  relation: classification
  participants:
    - entityId: substance:atomoxetine
      role: intervention
    - entityId: tag:cognitive-performance
      role: classification-context
  context: The label describes selective norepinephrine reuptake inhibition, no controlled-substance status, and no stimulant or euphoriant properties in the cited abuse-potential study.
  sourceIds: [atomoxetine-label]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Regulatory classification and an abuse-potential study do not establish that misuse or adverse effects are impossible.
- id: atomoxetine-claim-onset
  assertion: A one-hour plasma peak does not mean one-hour therapeutic onset
  relation: evidence-boundary
  participants:
    - entityId: substance:atomoxetine
      role: intervention
    - entityId: tag:attention
      role: claimed-outcome
  context: Peak concentration occurs earlier than the week-to-month symptom trajectory observed in adult trials.
  sourceIds: [atomoxetine-label, faraone2016]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Group trial averages do not predict an individual onset or response.
- id: atomoxetine-claim-cognition
  assertion: Atomoxetine is not established as a general cognitive enhancer
  relation: evidence-boundary
  participants:
    - entityId: substance:atomoxetine
      role: intervention
    - entityId: tag:cognitive-performance
      role: claimed-outcome
  context: The indication is ADHD; healthy studies show selective laboratory effects and null findings rather than broad real-world enhancement.
  sourceIds: [atomoxetine-label, chamberlain2006, marquand2011]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Healthy laboratory findings are not a comprehensive test of every possible cognitive domain.
- id: atomoxetine-claim-cyp2d6
  assertion: CYP2D6 status materially changes atomoxetine exposure
  relation: clearance-modification
  participants:
    - entityId: substance:atomoxetine
      role: substrate
    - entityId: tag:attention
      role: metabolizing-enzyme
  context: Poor metabolizer status and strong CYP2D6 inhibition increase exposure and can increase adverse effects.
  sourceIds: [atomoxetine-label]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Exposure differences do not provide a personal dose recommendation.
- id: atomoxetine-claim-dose-effect
  assertion: Higher atomoxetine dose is not established to produce proportionally greater benefit
  relation: dose-response-boundary
  participants:
    - entityId: substance:atomoxetine
      role: intervention
    - entityId: tag:attention
      role: measured-outcome
  context: The U.S. label reports no additional pediatric benefit above 1.2 mg/kg/day, and a 2026 dose-effect network meta-analysis found no dose-effect pattern for atomoxetine in fixed-dose studies.
  sourceIds: [atomoxetine-label, nourredine2026]
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Aggregate fixed-dose analyses do not determine an individual's optimal dose.
```

## Interactions

```yaml
- id: atomoxetine-interaction-maoi
  name: MAO inhibitors
  otherSlug: null
  summary: Concurrent use and use within 14 days of stopping either drug are contraindicated by the cited U.S. label.
  sourceId: atomoxetine-label
  context: Official contraindication; no combination-safety inference is made.
  conflictingSourceIds: []
- id: atomoxetine-interaction-cyp2d6
  name: Paroxetine, fluoxetine, and quinidine
  otherSlug: null
  summary: Strong CYP2D6 inhibition increases atomoxetine exposure; the label uses a four-week titration interval when an increase is considered.
  sourceId: atomoxetine-label
  mechanism: CYP2D6 inhibition
  context: Exposure interaction documented in label pharmacokinetic studies.
  conflictingSourceIds: []
- id: atomoxetine-interaction-antihypertensive
  name: Antihypertensive medicines
  otherSlug: null
  summary: Blood-pressure effects may require more frequent monitoring and dosage adjustment because atomoxetine can raise heart rate or blood pressure.
  sourceId: atomoxetine-label
  context: Label monitoring warning; magnitude depends on the co-treatment and patient context.
  conflictingSourceIds: []
- id: atomoxetine-interaction-beta2
  name: Systemic albuterol and other beta2 agonists
  otherSlug: null
  summary: Cardiovascular effects, particularly heart-rate and blood-pressure increases, may be potentiated.
  sourceId: atomoxetine-label
  context: Label warning for cardiovascular pharmacodynamic interaction.
  conflictingSourceIds: []
- id: atomoxetine-interaction-methylphenidate
  name: Methylphenidate
  otherSlug: null
  summary: One pharmacodynamic study did not find cardiovascular effects beyond methylphenidate alone; this was not a general combination-safety finding.
  sourceId: atomoxetine-label
  context: Single study result with limited generalizability.
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: atomoxetine-label
  title: "STRATTERA (atomoxetine) capsules, for oral use; Initial U.S. Approval: 2002"
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021411s053lbl.pdf
  kind: U.S. prescribing information
  insight: Indication, dosing, pharmacokinetics, CYP2D6 effects, warnings, contraindications, interactions, and label clinical trials.
  limitation: Regulatory labeling summarizes selected trials and postmarketing data; it is not an independent systematic review.
  funding: Regulatory product labeling based on manufacturer-submitted data; exact funding statement not assessed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Conflicts are not reported in the label.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021411s053lbl.pdf
- id: cortese2018
  title: "Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis"
  authors: Samuele Cortese, Ashmita Adamo, Claudia Del Giovane, et al.
  year: 2018
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6109107/
  kind: Systematic review and network meta-analysis
  insight: Comparative short-term ADHD symptom effects across age groups.
  limitation: Indirect comparisons, heterogeneous trials, and predominantly short-term outcomes.
  funding: Not assessed from the cited record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the cited record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6109107/
- id: asherson2014
  title: "Efficacy of atomoxetine in adults with attention deficit hyperactivity disorder: an integrated analysis of the complete database of multicenter placebo-controlled trials"
  authors: Philip Asherson, Chris Bushe, Keith Saylor, Yoko Tanaka, Walter Deberdt, Himanshu Upadhyaya
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25035246/
  kind: Pooled individual-patient analysis of randomized placebo-controlled trials
  insight: Adult symptom changes and response rates in short- and longer-term studies.
  limitation: All included trials were Eli Lilly-sponsored; outcomes were principally rating-scale based.
  funding: Eli Lilly-sponsored trials.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: One author reported multiple industry relationships; four authors were Eli Lilly employees and stockholders; another reported research and consulting relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/25035246/
- id: faraone2016
  title: "Atomoxetine Increased Effect over Time in Adults with Attention-Deficit/Hyperactivity Disorder Treated for up to 6 Months: Pooled Analysis of Two Double-Blind, Placebo-Controlled, Randomized Trials"
  authors: Stephen V. Faraone et al.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26922462/
  kind: Pooled randomized-trial time-course analysis
  insight: Symptom effects were detectable by week 1 and increased through week 26.
  limitation: Pooled trial analysis, symptom-scale outcomes, and an industry-linked trial program.
  funding: Eli Lilly and Company; exact funding statement not assessed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Not assessed from the available record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/26922462/
- id: ravishankar2016
  title: "The efficacy of atomoxetine in treating adult attention deficit hyperactivity disorder (ADHD): A meta-analysis of controlled trials"
  authors: Vinutha Ravishankar, Suresh Vedaveni Chowdappa, Vivek Benegal, Kesavan Muralidharan
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27931908/
  kind: Meta-analysis of controlled trials
  insight: Pooled adult ADHD effect sizes, including inattention and hyperactivity or impulsivity.
  limitation: Trial heterogeneity and limited long-term functional-outcome data.
  funding: Not assessed from the cited record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the cited record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/27931908/
- id: isfandnia2024
  title: "The effects of chronic administration of stimulant and non-stimulant medications on executive functions in ADHD: A systematic review and meta-analysis"
  authors: Ferdous Isfandnia et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38718988/
  kind: Systematic review and meta-analysis
  insight: Atomoxetine effects on attention, inhibition, reaction time, and working memory in ADHD.
  limitation: Only seven atomoxetine studies, heterogeneous cognitive tasks, and limited power for individual domains.
  funding: Not assessed from the cited record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: One author reported Takeda funding for another project; other authors reported no conflict.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/38718988/
- id: chamberlain2006
  title: Neurochemical Modulation of Response Inhibition and Probabilistic Learning in Humans
  authors: Samuel R. Chamberlain, Ulrich Müller, Andrew D. Blackwell, Luke Clark, Trevor W. Robbins, Barbara J. Sahakian
  year: 2006
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1867315/
  kind: Randomized, double-blind, placebo-controlled healthy-volunteer pharmacology study
  insight: Acute atomoxetine improved stop-signal response inhibition but not probabilistic learning.
  limitation: Single dose, small healthy male sample, and no ADHD or real-world clinical outcome.
  funding: Medical Research Council grants and Behavioural and Clinical Neuroscience Institute MRC or Wellcome support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the source record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC1867315/
- id: marquand2011
  title: "Pattern classification of working memory networks reveals differential effects of methylphenidate, atomoxetine, and placebo in healthy volunteers"
  authors: Andre F. Marquand, Sara De Simoni, Owen G. O'Daly, Steven C. R. Williams, Janaina Mourão-Miranda, Mitul A. Mehta
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21346736/
  kind: Randomized healthy-volunteer fMRI study
  insight: Atomoxetine produced context-dependent working-memory network effects.
  limitation: Experimental neuroimaging design and limited generalizability to everyday cognition.
  funding: Not assessed from the cited record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the cited record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/21346736/
- id: nourredine2026
  title: "Pharmacological interventions for ADHD: a systematic review and dose-effect network meta-analysis"
  authors: Mikail Nourredine, Lucie Jurek, Tasnim Hamza, Andrea Cipriani, Fabien Subtil, Valeria Parlatini, Luis C. Farhat, Guilherme Fusetto Veronesi, Orestis Efthimiou, Georgia Salanti, Samuele Cortese
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42134365/
  kind: Systematic review and dose-effect network meta-analysis
  insight: No evidence of a dose-effect pattern for atomoxetine in fixed-dose studies.
  limitation: Aggregate-level evidence, sparse data at some doses, and a listed 2026 correction.
  funding: National Institute for Health and Care Research, NIHR303122.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Travel support, honoraria, grants, employment, and shareholding were reported for specified authors; other authors reported no competing interests.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/42134365/
- id: atomoxetine-label-older
  title: "STRATTERA (atomoxetine) capsules, for oral use; earlier U.S. label revision"
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021411s000lbl.pdf
  kind: U.S. prescribing information
  insight: Earlier label revision cited for the severe-renal-impairment pharmacokinetic comparison.
  limitation: Earlier label revision; the current label remains the primary regulatory source for the page.
  funding: Regulatory product labeling based on manufacturer-submitted data; exact funding statement not assessed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Conflicts are not reported in the label.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021411s000lbl.pdf
```

## Legal

```yaml
- jurisdiction: United States
  activity: Prescription ADHD treatment
  status: FDA-labeled for ADHD in adults and pediatric patients aged 6 years and older; prescription-only and not a controlled substance under the cited label. Legal classification outside the United States is not assessed.
  sourceUrl: https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021411s053lbl.pdf
  asOf: 2026-10-11
```
