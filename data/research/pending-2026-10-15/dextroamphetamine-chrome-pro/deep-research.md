---
slug: dextroamphetamine
label: Dextroamphetamine
category: prescription-stimulant
editorialStatus: sourced-draft
reviewedAt: "2026-10-15"
x-shape:
  - slug
  - label
  - category
  - editorialStatus
  - reviewedAt
  - summary
  - description
  - evidenceNote
  - doses
  - pharmacokinetics
  - duration
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

Dextroamphetamine is a prescription central nervous system stimulant. U.S. indications depend on the product: the reviewed oral sulfate products are labeled for narcolepsy and pediatric ADHD, whereas Xelstrym, a dextroamphetamine transdermal system, is labeled for ADHD in adults and children aged six years and older—not narcolepsy. These formulations have different dose expressions and absorption profiles. (sourceId: zenzedi-label; sourceId: dexedrine-label; sourceId: procentra-label; sourceId: xelstrym-label)

Randomized studies support short-term ADHD symptom improvement. Healthy-volunteer experiments show selective improvements in attention or willingness to exert effort, alongside null working-memory and reward-learning results; these findings do not establish general intellectual enhancement or sustained real-world productivity. Abuse, addiction, cardiovascular effects, psychosis or mania, and withdrawal are material risks. (sourceId: taylor-2000; sourceId: cutler-2022; sourceId: macqueen-2018; sourceId: soder-2021; sourceId: kassim-2023; sourceId: xelstrym-label)

## Description

Dextroamphetamine is the dextrorotatory, S-enantiomer of amphetamine. Xelstrym contains dextroamphetamine base; the reviewed oral products contain its sulfate salt. Mixed amphetamine salts and lisdexamfetamine are outside this article’s direct-efficacy evidence unless explicitly identified as comparator, regulatory-bridging, or aggregated safety evidence. (sourceId: xelstrym-label; sourceId: zenzedi-label)

Representative U.S. formulations are Zenzedi immediate-release tablets containing 2.5, 5, 7.5, 10, 15, 20, or 30 mg dextroamphetamine sulfate; Dexedrine Spansule sustained-release capsules containing 5, 10, or 15 mg sulfate; and ProCentra immediate-release solution containing 5 mg sulfate per 5 mL. Their label records do not establish current pharmacy availability. (sourceId: zenzedi-label; sourceId: dexedrine-label; sourceId: procentra-label)

Xelstrym strengths describe estimated delivery over nine hours: 4.5, 9, 13.5, or 18 mg dextroamphetamine. The corresponding patches contain 5, 10, 15, or 20 mg. Patch content, delivered dose, and oral sulfate dose are different quantities; the label expressly rejects milligram-for-milligram substitution with other amphetamine products. (sourceId: xelstrym-label)

## Evidence note

The evidence below separates product-label findings, randomized clinical outcomes, healthy-volunteer laboratory experiments, and observational safety associations. FDA labeling sometimes incorporates evidence from related products: Xelstrym’s efficacy determination includes a direct pediatric patch trial and controlled **lisdexamfetamine** studies, including adult studies. Adult labeling therefore does not represent an independent adult patch efficacy trial. (sourceId: xelstrym-label)

The patch publication, FDA presentation, and NCT01711021 registry describe the same pivotal experiment, not independent replications. Dose optimization enriched the randomized sample for tolerability and response; a carryover/sequence effect complicates its crossover analysis. The FDA label presents first-period results. Older oral ADHD and narcolepsy reports were not uniformly accessible in full; unverified doses and disclosures remain explicitly unresolved rather than reconstructed. (sourceId: cutler-2022; sourceId: xelstrym-label; sourceId: nct01711021; sourceId: parkes-1973; sourceId: taylor-2000)

## Doses

```yaml
- id: oral-ir-adhd
  context: FDA-label dosing, not a healthy-enhancement regimen
  formulationRoute: ProCentra immediate-release oral dextroamphetamine sulfate
  population: Pediatric ADHD; indication specifies ages 3–16 years
  labelRegimen: >-
    Ages 3–5: initial 2.5 mg/day, with 2.5 mg weekly increments.
    Ages 6 and older: initial 5 mg once or twice daily, with 5 mg
    weekly increments. The label states that exceeding 40 mg/day
    is rarely necessary. Additional daily doses are separated by
    4–6 hours.
  doseBasis: Sulfate-salt mass; solution concentration 1 mg/mL
  limitation: >-
    These are product-label parameters, not an established optimum
    for every patient or an adult ADHD indication for this product.
  sourceId: procentra-label

- id: sustained-release-adhd
  context: FDA-label dosing
  formulationRoute: Dexedrine Spansule oral sustained-release sulfate
  population: ADHD indication specifies ages 6–16 years
  labelRegimen: >-
    Initial 5 mg once or twice daily, with 5 mg weekly increments;
    exceeding 40 mg/day is described as rarely necessary.
    Once-daily Spansule administration is permitted where appropriate.
  limitation: >-
    The reviewed label does not recommend this formulation below age six;
    the pediatric instructions are not a labeled adult ADHD regimen.
  sourceId: dexedrine-label

- id: oral-narcolepsy
  context: FDA-label dosing
  formulationRoute: Oral dextroamphetamine sulfate
  population: Narcolepsy
  labelRegimen: >-
    Usual total 5–60 mg/day in divided doses, individualized in the label.
    The oral-solution label places additional doses 4–6 hours apart.
  limitation: >-
    The narcolepsy range is not an ADHD dose range or evidence that
    its upper end is appropriate for healthy cognitive enhancement.
  sourceId: procentra-label

- id: transdermal-adhd
  context: FDA-label dosing
  formulationRoute: Xelstrym transdermal dextroamphetamine base
  population: ADHD; ages 6–17 and adults
  labelRegimen: >-
    Pediatric initial delivery 4.5 mg/9 hours, with weekly 4.5 mg
    increments; adult initial delivery 9 mg/9 hours. Maximum labeled
    delivery is 18 mg/9 hours. The label specifies one system per
    24 hours, applied two hours before the desired effect and removed
    within nine hours.
  doseBasis: Delivered base over the specified wear period, not patch content
  limitation: Not interchangeable milligram-for-milligram with oral products
  sourceId: xelstrym-label

- id: transdermal-renal-limits
  context: Product-specific renal dose limits
  formulationRoute: Xelstrym
  labelRegimen: >-
    Maximum 13.5 mg/9 hours for GFR 15 to less than 30 mL/min/1.73 m²;
    maximum 9 mg/9 hours for GFR below 15 mL/min/1.73 m².
  limitation: >-
    These patch-specific limits are not a validated conversion rule
    for immediate-release or sustained-release oral products.
  sourceId: xelstrym-label
```

## Pharmacokinetics

```yaml
- id: oral-comparison
  population: Twelve healthy subjects
  formulationRoute: Oral immediate-release versus sustained-release sulfate
  dose: 15 mg; immediate-release treatment comprised three 5 mg tablets
  observations: >-
    Immediate-release mean peak concentration was 36.6 ng/mL at
    approximately three hours; sustained-release mean peak was
    23.5 ng/mL at approximately eight hours. Extent of bioavailability
    was similar. Mean plasma elimination half-life was approximately
    12 hours for both formulations.
  limitation: >-
    Small label-reported study; these means do not define every
    patient's exposure, onset, or symptom-control duration.
  sourceId: zenzedi-label

- id: transdermal-disposition
  formulationRoute: Xelstrym worn for nine hours
  observations: >-
    Peak concentrations occurred approximately 6–9 hours after a
    single application and approximately six hours after repeated
    applications. Mean apparent elimination half-life following
    removal ranged from 6.4 hours in pediatric subjects to 11.5 hours
    in adults. Absorption can continue from the skin after removal.
  limitation: >-
    These formulation- and population-specific estimates should not
    be collapsed into one universal dextroamphetamine half-life.
  sourceId: xelstrym-label

- id: metabolism-and-excretion
  observations: >-
    Amphetamine undergoes several oxidative pathways; CYP2D6 participates
    in formation of 4-hydroxyamphetamine but is not the sole disposition
    pathway. Renal elimination is strongly influenced by urinary pH.
    Renal or hepatic dysfunction can prolong exposure.
  evidenceBoundary: >-
    The patch label's numerical urinary-recovery discussion derives
    from oral amphetamine data, not a dedicated patch mass-balance study.
  additionalFinding: The label states that dextroamphetamine is not dialyzable.
  sourceId: xelstrym-label
```

## Duration

```yaml
- id: oral-timing
  observation: >-
    The immediate-release oral-solution label spaces additional doses
    4–6 hours apart. A dosing interval is not a measured guarantee of
    benefit duration, nor is it the elimination half-life.
  sourceId: procentra-label

- id: patch-classroom-duration
  observation: >-
    In the pivotal pediatric classroom experiment, separation from
    placebo was observed from two through twelve hours after application;
    the patch was removed at nine hours.
  limitation: >-
    Twelve hours was the observed assessment boundary, not a guarantee
    of twelve-hour benefit or evidence that effects end immediately
    after patch removal.
  sourceId: cutler-2022
```

## Modifiers

```yaml
- id: age-and-exposure
  modifier: Age and body size
  observation: >-
    Pediatric subjects had higher dextroamphetamine exposure than
    adults at the same patch dose. Xelstrym is not approved below
    age six; older adults over 65 were not included in its clinical studies.
  sourceId: xelstrym-label

- id: patch-heat
  modifier: External heat
  observation: >-
    A heating-pad experiment increased patch exposure over hours 0–9
    to approximately 1.5 times the unheated condition. This is an
    exposure and overdose-risk modifier, not evidence of improved efficacy.
  sourceId: xelstrym-label

- id: sustained-release-food
  modifier: Food
  observation: >-
    In a separate twelve-subject study, a meal containing 58–75 g
    fat did not materially change the rate or extent of absorption
    from the sustained-release capsule.
  limitation: Not a finding about every oral formulation
  sourceId: zenzedi-label

- id: baseline-performance
  modifier: Baseline working memory and willingness to exert effort
  observation: >-
    Lower baseline working memory and effort moderated greater
    effort-task responses in one healthy-volunteer experiment.
  limitation: An exploratory moderator, not a validated treatment-selection test
  sourceId: soder-2021
```

## Effects

```yaml
- id: adhd-symptoms
  domain: Clinical symptoms
  observation: >-
    Reduced ADHD symptom ratings have been demonstrated in randomized
    studies; symptom-scale improvement is distinct from long-term
    educational or occupational achievement.
  sourceId: taylor-2000

- id: autonomic-effects
  domain: Cardiovascular physiology
  observation: >-
    Product labeling describes average CNS-stimulant increases of
    approximately 2–4 mmHg in blood pressure and 3–6 beats/minute
    in heart rate.
  evidenceBoundary: >-
    These are stimulant-class label estimates, not a pooled estimate
    calculated exclusively from pure-dextroamphetamine trials.
  sourceId: xelstrym-label

- id: appetite-and-sleep
  domain: Short-term adverse effects
  observation: >-
    During the randomized patch phase, decreased appetite was reported
    in 12.3% on active treatment versus 1.9% on placebo; insomnia was
    reported in 5.7% versus 4.8%.
  limitation: >-
    Participants had already undergone open-label optimization, limiting
    interpretation of these rates for treatment initiation.
  sourceId: cutler-2022
```

## Outcomes

```yaml
- id: pediatric-active-comparator
  population: 125 children with ADHD
  design: Randomized double-blind crossover; two weeks per treatment
  formulationRoute: Oral dexamphetamine
  dose: 0.15 mg/kg twice daily
  comparator: Methylphenidate 0.3 mg/kg twice daily
  instruments: Conners parent and teacher ratings; continuous performance testing
  result: >-
    Both treatments improved ratings relative to baseline. Parent-rated
    improvement occurred in 69% with dexamphetamine and 73% with
    methylphenidate. Several teacher-rated domains favored methylphenidate;
    continuous-performance correct responses and errors did not differ.
  limitation: >-
    No placebo arm, short treatment periods, and fixed rather than
    individually optimized doses. This does not establish universal
    superiority of either drug.
  sourceId: efron-1997

- id: adult-adhd
  population: 22 adults with ADHD; 21 completed
  design: Randomized double-blind placebo-controlled three-period crossover
  formulationRoute: Oral dextroamphetamine, administered twice daily
  dose: Mean optimized total 21.8 mg/day, SD 8.9
  comparator: Placebo and modafinil, mean optimized total 206.8 mg/day
  duration: Two weeks per condition; titration during the first 4–7 days
  instrument: DSM-IV ADHD Behavior Checklist for Adults
  result: Both active treatments improved checklist scores versus placebo, p < 0.001.
  limitation: >-
    Small preliminary study; not an equivalence trial, not healthy-cognition
    evidence, and not itself proof of an FDA adult indication for every
    oral dextroamphetamine product.
  sourceId: taylor-2000

- id: pediatric-patch
  population: 110 enrolled patients with ADHD, ages 6–17
  design: Five-week open-label optimization followed by two-week randomized crossover
  formulationRoute: Dextroamphetamine transdermal system
  dose: Optimized delivery equivalent to labeled strengths of 4.5–18 mg/9 hours
  comparator: Placebo patch
  instrument: Swanson, Kotkin, Agler, M-Flynn, and Pelham classroom scale
  result: >-
    The FDA label's first-period analysis reports least-squares means
    of 12.4 on active treatment and 17.1 on placebo, with difference
    -4.7 points, 95% CI -8.0 to -1.4.
  limitation: >-
    Short, optimized classroom experiment; not a long-term academic
    outcome study or an independent adult efficacy trial.
  trialId: NCT01711021
  sourceId: xelstrym-label

- id: historical-narcolepsy
  population: Twelve patients with narcoleptic syndrome
  design: Controlled clinical report comparing the two amphetamine enantiomers
  intervention: Dextroamphetamine
  comparator: Levoamphetamine, administered separately
  dose: Not recoverable from the accessed abstract
  result: >-
    Both treatments reportedly suppressed daytime narcoleptic attacks;
    dextroamphetamine was described as slightly more potent. Cataplexy
    was not improved. Nervousness and insomnia occurred with both.
    No tolerance was observed during the reported six-month period.
  limitation: >-
    Small historical report; randomization, exact regimen, and detailed
    outcome ascertainment were not verified. Absence of observed
    tolerance in twelve patients does not establish absence of tolerance risk.
  sourceId: parkes-1973

- id: healthy-attention
  population: 71 healthy young adults
  design: Randomized double-blind single-session comparison
  dose: Dextroamphetamine 10 mg or 20 mg, as reported
  comparator: Placebo; group sizes 17, 25, and 29 respectively
  instrument: Five-choice continuous performance test
  result: >-
    Both doses improved signal detection, response accuracy, and
    reaction-time consistency. Mean reaction time was not improved.
  limitation: >-
    Human laboratory outcome only; the publication's mouse experiments
    are separate evidence. No demonstrated benefit to grades or employment.
  sourceId: macqueen-2018

- id: healthy-effort-versus-learning
  population: Thirty healthy volunteers
  design: Within-participant placebo and two-dose experiment
  dose: D-amphetamine 10 mg and 20 mg, as reported
  comparator: Placebo
  instruments: Effort Expenditure for Reward Task; Probabilistic Reward Task
  result: >-
    Willingness to exert effort increased, particularly at low-to-intermediate
    expected rewards; reward learning did not significantly improve.
  limitation: Increased effort allocation is not synonymous with improved learning.
  sourceId: soder-2021

- id: healthy-working-memory
  population: Twenty healthy volunteers in the amphetamine experiment
  design: Randomized double-blind counterbalanced placebo-controlled crossover
  formulationRoute: Oral d-amphetamine
  dose: 0.45 mg/kg, as reported
  comparator: Placebo
  instruments: Spatial span and digit span; delays of 0, 2, 4, and 8 seconds
  result: >-
    No significant spatial or verbal working-memory improvement.
    A composite psychosis-like-experience score increased, p = 0.0005.
  limitation: >-
    Small acute pilot; questionnaire changes are not diagnoses of
    psychotic disorder. The separate twenty-person caffeine experiment
    was not a head-to-head comparator or additional amphetamine sample.
  sourceId: kassim-2023
```

## Mechanisms

```yaml
- id: catecholamine-pharmacology
  level: Established pharmacology as summarized in product labeling
  description: >-
    Amphetamines increase extracellular norepinephrine and dopamine
    through enhanced release and reduced presynaptic reuptake.
    This supports their sympathomimetic and central stimulant actions.
  uncertainty: >-
    The precise therapeutic mechanism in ADHD remains incompletely
    established. Catecholamine elevation alone does not demonstrate
    improved intelligence, memory, or long-term functioning.
  sourceId: xelstrym-label
```

## Cautions

```yaml
- id: formal-contraindications
  description: >-
    The reviewed current label lists hypersensitivity to amphetamine
    or product components, and concurrent MAOI treatment or exposure
    within the preceding fourteen days, as contraindications.
  distinction: >-
    Serious cardiac disease is addressed separately through a strong
    warning; a warning and a formal contraindication are not identical
    labeling categories.
  sourceId: xelstrym-label

- id: cardiovascular-risk
  description: >-
    Sudden death has been reported with prescribed CNS stimulants
    in people with structural cardiac abnormalities or other serious
    cardiac disease. Hypertension, tachycardia, and peripheral
    vasculopathy, including Raynaud phenomenon and occasionally
    digital tissue injury, are labeled risks.
  limitation: >-
    Small short-term efficacy trials cannot quantify rare events or
    establish long-term cardiovascular safety of pure dextroamphetamine.
  sourceId: xelstrym-label

- id: psychiatric-risk
  description: >-
    Stimulants can worsen existing psychosis, precipitate manic or
    mixed episodes, and produce new psychotic or manic symptoms
    even at recommended doses.
  evidenceBoundary: >-
    The label's approximately 0.1% versus 0% placebo estimate comes
    from pooled short-term CNS-stimulant trials, not a pure-dextroamphetamine
    incidence study.
  sourceId: xelstrym-label

- id: observational-dose-signal
  population: Psychiatric hospital patients ages 16–35
  design: Case-control study; 1374 incident psychosis or mania cases and 2748 controls
  exposure: Prescription amphetamines aggregated across products
  finding: >-
    Past-month exposure was associated with adjusted odds ratio 2.68
    for psychosis or mania versus no exposure. Doses above 30 mg/day
    dextroamphetamine equivalents were associated with odds ratio 5.28.
  limitation: >-
    The exposure includes mixed amphetamine salts and lisdexamfetamine;
    it is not a pure-dextroamphetamine estimate. Hospital selection and
    confounding limit causal interpretation. Odds ratios are not
    absolute risks, and the dose category is not a safety threshold.
  sourceId: moran-2024

- id: misuse-dependence-withdrawal
  description: >-
    Dextroamphetamine has high abuse and misuse potential, including
    addiction, overdose, and death. Risk increases with higher doses
    and unapproved administration methods. Physical dependence and
    tolerance can develop; neither alone is identical to addiction.
  withdrawal: >-
    Abrupt discontinuation or substantial dose reduction after prolonged
    exposure may produce dysphoria, depression, fatigue, increased
    appetite, unpleasant dreams, sleep disturbance, and psychomotor changes.
  sourceId: xelstrym-label

- id: growth-and-tics
  description: >-
    Weight loss and reduced pediatric growth rate are stimulant-label
    concerns. New or worsened motor and verbal tics, including worsening
    Tourette syndrome, are also reported.
  evidenceBoundary: >-
    The patch trial documents weight loss; some longer-term height
    findings summarized in its label derive from other stimulants.
  sourceId: xelstrym-label

- id: pregnancy-and-lactation
  description: >-
    Label-reviewed prescription-amphetamine epidemiology has not
    identified a major-birth-defect or miscarriage signal, but premature
    delivery and low birth weight have been observed. Amphetamine
    enters human milk; long-term infant neurodevelopmental effects
    remain uncertain.
  evidenceBoundary: >-
    These data are not exclusive to pure dextroamphetamine and do
    not establish safety of every formulation during pregnancy or lactation.
  sourceId: xelstrym-label

- id: patch-specific-hazards
  description: >-
    Application-site pain, irritation, and allergic contact sensitization
    can occur. Sensitization may complicate subsequent oral amphetamine
    exposure. Drug absorption does not necessarily stop immediately
    when the patch is removed.
  sourceId: xelstrym-label

- id: overdose
  description: >-
    Severe toxicity can include arrhythmias, myocardial ischemia,
    extreme blood-pressure changes, agitation, hallucinations, seizures,
    stroke, hyperthermia, rhabdomyolysis, coma, and death.
  evidenceBoundary: These are labeled stimulant-overdose manifestations.
  sourceId: xelstrym-label
```

## Claims

```yaml
- id: sustained-release-superiority
  claim: Sustained-release dextroamphetamine is intrinsically more effective than divided immediate-release dosing.
  assessment: >-
    Not established. The Dexedrine label explicitly states that Spansule
    has not demonstrated superior effectiveness over the same total
    dose of standard noncontrolled-release formulations in divided doses.
  sourceId: dexedrine-label

- id: motivation-equals-cognition
  claim: Greater willingness to work proves better learning.
  assessment: >-
    Not supported by the effort experiment: willingness to exert effort
    increased while reward-learning performance did not significantly improve.
  sourceId: soder-2021

- id: patch-eliminates-systemic-risk
  claim: Transdermal delivery eliminates addiction or interaction risks.
  assessment: >-
    Contradicted by the patch's boxed warning and interaction sections;
    transdermal delivery changes absorption, not the identity of the
    systemically active stimulant.
  sourceId: xelstrym-label

- id: registered-pivotal-study
  claim: NCT01711021 provides an additional independent replication of the published patch trial.
  assessment: >-
    No. It is the registration of that experiment: a completed
    Noven-sponsored phase 2 study with 110 enrolled participants,
    conducted from October 2012 to March 2013. Results are posted.
    The inspected record was last updated in December 2023.
  sourceId: nct01711021
```

## Interactions

```yaml
- id: maoi
  interactingAgent: Monoamine oxidase inhibitors, including linezolid and intravenous methylene blue
  effect: >-
    Contraindicated concurrently or within fourteen days after an MAOI.
    Hypertensive crisis, severe neurological toxicity, and hyperpyrexia
    can occur.
  sourceId: xelstrym-label

- id: serotonergic-drugs
  interactingAgent: SSRIs, SNRIs, triptans, tramadol, fentanyl, lithium, buspirone, and other serotonergic agents
  effect: Increased risk of potentially life-threatening serotonin syndrome
  limitation: >-
    The label does not provide a reliable absolute risk for each
    individual combination.
  sourceId: xelstrym-label

- id: cyp2d6-inhibitors
  interactingAgent: CYP2D6 inhibitors
  effect: >-
    May increase dextroamphetamine exposure and serotonin-syndrome risk.
  limitation: >-
    The label does not establish one fold-increase applicable to every
    inhibitor, genotype, dose, or formulation.
  sourceId: xelstrym-label

- id: urinary-ph-modifiers
  interactingAgent: Urinary alkalinizing or acidifying agents
  effect: >-
    Alkalinization can reduce elimination and increase blood levels;
    acidification can increase elimination and reduce levels and efficacy.
    The label includes ascorbic acid as an acidifying-agent example.
  limitation: >-
    These statements do not quantify the effect of an ordinary meal
    or establish a predictable exposure change from a particular supplement.
  sourceId: xelstrym-label

- id: tricyclic-antidepressants
  interactingAgent: Tricyclic antidepressants
  effect: Potential enhancement of sympathomimetic and cardiovascular effects
  sourceId: xelstrym-label

- id: pharmacokinetic-versus-pharmacodynamic
  interactingAgent: Guanfacine, venlafaxine, or omeprazole
  effect: >-
    The patch label does not require adjustment solely on pharmacokinetic
    grounds for these combinations.
  limitation: >-
    This is not a declaration that all pharmacodynamic interactions
    are absent; venlafaxine remains a serotonergic drug.
  sourceId: xelstrym-label
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: zenzedi-label
  title: "ZENZEDI® (DEXTROAMPHETAMINE SULFATE TABLETS, USP) CII"
  authors: ["Azurity Pharmaceuticals, Inc."]
  year: 2025
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6394df5-f2c9-47eb-b57e-f3e9cfd94f84"
  kind: regulatory-label
  version: 14
  effectiveDate: "2025-11-26"
  insight: Oral tablet strengths, pediatric ADHD and narcolepsy indications, comparative oral pharmacokinetics.
  limitation: Label-reported studies are small; the document is not comparative-effectiveness or availability evidence.
  funding: Manufacturer-issued regulatory document; separate document funding not reported.
  sponsorshipStatus: industry
  conflictsOfInterest: Labeler has a commercial interest in the product.
  conflictOfInterestStatus: commercial-interest

- id: dexedrine-label
  title: "DEXEDRINE® (dextroamphetamine sulfate) SPANSULE® sustained-release capsules, CII"
  authors: ["Amneal Pharmaceuticals LLC"]
  year: 2025
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cc717b9b-22ea-4c60-a1d4-ee38a40bce78"
  kind: regulatory-label
  version: 15
  effectiveDate: "2025-09-25"
  insight: Sustained-release strengths, age-specific indication, dosing, and absence of established superiority over divided immediate-release dosing.
  limitation: Does not establish an adult ADHD indication or current stock availability.
  funding: Manufacturer-issued regulatory document; separate document funding not reported.
  sponsorshipStatus: industry
  conflictsOfInterest: Labeler has a commercial interest in the product.
  conflictOfInterestStatus: commercial-interest

- id: procentra-label
  title: "ProCentra® (dextroamphetamine sulfate) Oral Solution, CII"
  authors: ["Independence Pharmaceuticals, LLC"]
  year: 2025
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1548cce2-fb6b-4f17-8a3b-868933f6c9d6"
  kind: regulatory-label
  version: 17
  effectiveDate: "2025-05-14"
  insight: Oral solution concentration, pediatric ADHD regimen, and narcolepsy dosing.
  limitation: Label dosing is not a healthy-enhancement regimen.
  funding: Manufacturer-issued regulatory document; separate document funding not reported.
  sponsorshipStatus: industry
  conflictsOfInterest: Labeler has a commercial interest in the product.
  conflictOfInterestStatus: commercial-interest

- id: xelstrym-label
  title: "XELSTRYM® (dextroamphetamine) transdermal system, CII"
  authors: ["Noven Therapeutics, LLC"]
  year: 2025
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0862f02a-72a8-41cc-8845-57cf4974bb6f"
  kind: regulatory-label
  version: 17
  effectiveDate: "2025-12-23"
  insight: Delivered-dose strengths, adult and pediatric ADHD approval, patch pharmacokinetics, renal limits, warnings, and interactions.
  limitation: Includes lisdexamfetamine regulatory bridging and broader stimulant safety evidence, not exclusively direct patch experiments.
  funding: Manufacturer-issued regulatory document describing an industry development program.
  sponsorshipStatus: industry
  conflictsOfInterest: Labeler and developer have commercial interests in the product.
  conflictOfInterestStatus: commercial-interest

- id: efron-1997
  title: "Methylphenidate versus dexamphetamine in children with attention deficit hyperactivity disorder: A double-blind, crossover trial."
  authors: ["D. Efron", "F. Jarman", "M. Barker"]
  year: 1997
  url: "https://pubmed.ncbi.nlm.nih.gov/9382907/"
  kind: randomized-controlled-trial
  insight: Direct pediatric comparison at specified twice-daily doses; both improved symptoms, with some ratings favoring methylphenidate.
  limitation: No placebo arm; two weeks per drug; full funding and disclosure text not recovered.
  funding: Specific funder not verified from the accessed abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author-level declarations were not accessible in the inspected material.
  conflictOfInterestStatus: not-assessed

- id: taylor-2000
  title: "Efficacy of modafinil compared to dextroamphetamine for the treatment of attention deficit hyperactivity disorder in adults."
  authors: ["F. B. Taylor", "J. Russo"]
  year: 2000
  url: "https://pubmed.ncbi.nlm.nih.gov/11191692/"
  kind: randomized-controlled-trial
  insight: Small adult crossover trial found symptom improvement with dextroamphetamine and modafinil versus placebo.
  limitation: Twenty-two participants; short periods; abstract-level access; not designed to establish equivalence.
  funding: Not recovered from the accessed abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full disclosure statement not recovered.
  conflictOfInterestStatus: not-assessed

- id: cutler-2022
  title: "Efficacy and Safety of Dextroamphetamine Transdermal System for the Treatment of Attention-Deficit/Hyperactivity Disorder in Children and Adolescents: Results from a Pivotal Phase 2 Study."
  authors: ["Andrew J. Cutler", "Katsumi Suzuki", "Brittney Starling", "Kanan Balakrishnan", "Marina Komaroff", "Mariacristina Castelli", "Suzanne Meeves", "Ann C. Childress"]
  year: 2022
  url: "https://pubmed.ncbi.nlm.nih.gov/35020462/"
  kind: randomized-controlled-trial
  insight: Direct pediatric patch efficacy and tolerability experiment underlying NCT01711021.
  limitation: Optimization enrichment, short randomized exposure, and significant carryover or sequence effect.
  funding: Noven Pharmaceuticals funded the study and PharmaWrite medical-writing assistance.
  sponsorshipStatus: industry
  conflictsOfInterest: Six coauthors reported Noven employment; Cutler and Childress reported extensive industry relationships, including Noven support.
  conflictOfInterestStatus: declared

- id: nct01711021
  title: "Study to Evaluate Safety & Efficacy of d-Amphetamine Transdermal System vs Placebo in Children & Adolescents With ADHD"
  authors: ["Noven Pharmaceuticals, Inc.", "ClinicalTrials.gov"]
  year: 2023
  url: "https://clinicaltrials.gov/study/NCT01711021"
  kind: trial-registry
  insight: Completed phase 2 registration with posted results and linked pivotal publication.
  limitation: Sponsor-submitted record; not an independent replication.
  funding: Noven Pharmaceuticals is the registered lead sponsor.
  sponsorshipStatus: industry
  conflictsOfInterest: Commercial developer is the sponsor; individual investigator declarations are not established by this record.
  conflictOfInterestStatus: commercial-interest

- id: parkes-1973
  title: "Levo(-) amphetamine and dextro(+) amphetamine in the treatment of narcolepsy."
  authors: ["J. D. Parkes", "G. W. Fenton"]
  year: 1973
  url: "https://pubmed.ncbi.nlm.nih.gov/4359162/"
  kind: controlled-clinical-study
  insight: Historical twelve-patient comparison reported daytime symptom suppression but no cataplexy benefit.
  limitation: Exact regimen and full methods were not recovered; no modern large-trial inference is warranted.
  funding: Not recovered from accessible material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full disclosure information not recovered.
  conflictOfInterestStatus: not-assessed

- id: macqueen-2018
  title: "Amphetamine improves mouse and human attention in the 5-choice continuous performance test."
  authors: ["David A. MacQueen", "Arpi Minassian", "Johnny A. Kenton", "Mark A. Geyer", "William Perry", "Jonathan L. Brigman", "Jared W. Young"]
  year: 2018
  url: "https://pubmed.ncbi.nlm.nih.gov/29859849/"
  kind: randomized-controlled-trial
  insight: Human single-dose attention improvements; animal findings were analyzed separately.
  limitation: Laboratory task, not sustained academic or occupational performance.
  funding: NIH support, including NIMH grants R01MH104344 and R01MH071916; additional NIH grants are indexed.
  sponsorshipStatus: non-industry
  conflictsOfInterest: Geyer disclosed industry consulting and San Diego Instruments equity; Young disclosed industry funding, consulting, and honoraria. Other authors declared no relevant financial interests.
  conflictOfInterestStatus: declared

- id: soder-2021
  title: "Dose-response effects of d-amphetamine on effort-based decision-making and reinforcement learning."
  authors: ["Heather E. Soder", "Jessica A. Cooper", "Paula Lopez-Gamundi", "Jennifer K. Hoots", "Cecilia Nunez", "Victoria M. Lawlor", "Scott D. Lane", "Michael T. Treadway", "Margaret C. Wardle"]
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/32722661/"
  kind: placebo-controlled-experiment
  insight: Effort allocation increased without significant reward-learning improvement.
  limitation: Thirty healthy participants; laboratory outcomes and exploratory moderators.
  funding: NIH/NIDA grants K08DA040006 and F32DA048542 are indexed; complete funding statement was not recovered.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete author disclosure statement was not recovered.
  conflictOfInterestStatus: not-assessed

- id: kassim-2023
  title: "The effects of caffeine and d-amphetamine on spatial span task in healthy participants."
  authors: ["Faiz M. Kassim", "J. H. Mark Lim", "Sophie V. Slawik", "Katharina Gaus", "Benjamin Peters", "Joseph W. Y. Lee", "Emily K. Hepple", "Jennifer Rodger", "Matthew A. Albrecht", "Mathew T. Martin-Iverson"]
  year: 2023
  url: "https://pubmed.ncbi.nlm.nih.gov/37440493/"
  kind: randomized-controlled-trial
  insight: Working-memory null results and increased psychosis-like experiences after d-amphetamine.
  limitation: Twenty-person amphetamine pilot; separate caffeine cohort; acute scores are not clinical diagnoses.
  funding: Authors reported no specific funding for this work.
  sponsorshipStatus: none-reported
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: none-declared

- id: moran-2024
  title: "Risk of Incident Psychosis and Mania With Prescription Amphetamines."
  authors: ["Lauren V. Moran", "Joseph P. Skinner", "Ann K. Shinn", "Kathryn Nielsen", "Vinod Rao", "S. Trevor Taylor", "Talia R. Cohen", "Cemre Erkol", "Jaisal Merchant", "Christin A. Mujica", "Roy H. Perlis", "Dost Ongur"]
  year: 2024
  url: "https://pubmed.ncbi.nlm.nih.gov/39262211/"
  kind: observational-case-control
  insight: Dose-related association between aggregated prescription amphetamine exposure and incident psychosis or mania.
  limitation: Not pure-dextroamphetamine-specific; hospitalized controls, selection bias, and residual confounding.
  funding: Full funding statement not recovered from accessible material.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full author disclosure statement not recovered.
  conflictOfInterestStatus: not-assessed

- id: us-schedule-ii
  title: "21 CFR § 1308.12 — Schedule II."
  authors: ["U.S. Drug Enforcement Administration", "Office of the Federal Register"]
  year: 2026
  url: "https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12"
  kind: regulation
  insight: Amphetamine, its salts, optical isomers, and their salts are Schedule II.
  limitation: U.S. federal scheduling only; does not establish other jurisdictions' rules.
  funding: Government regulatory publication; not a clinical study.
  sponsorshipStatus: not-applicable
  conflictsOfInterest: Not applicable to a statutory scheduling document.
  conflictOfInterestStatus: not-applicable

- id: wada-2026
  title: "World Anti-Doping Code International Standard: Prohibited List 2026"
  authors: ["World Anti-Doping Agency"]
  year: 2025
  url: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf"
  kind: sport-standard
  insight: The 2026 list, effective January 1, includes amphetamine and relevant optical isomers under in-competition stimulant prohibitions.
  limitation: Anti-doping status is distinct from national prescription or possession law.
  funding: Institutional standard; not a clinical study.
  sponsorshipStatus: not-applicable
  conflictsOfInterest: No study-level conflict declaration applies.
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: United States, federal
  status: Schedule II controlled substance
  detail: >-
    21 CFR 1308.12(d)(1) covers amphetamine, its salts, optical isomers,
    and salts of its optical isomers, encompassing dextroamphetamine.
  sourceId: us-schedule-ii

- jurisdiction: United States, product labeling
  status: Prescription-only medication with formulation-specific indications
  detail: >-
    Xelstrym is labeled for adult and pediatric ADHD from age six.
    It is not labeled for narcolepsy or healthy cognitive enhancement.
  sourceId: xelstrym-label

- jurisdiction: United States, oral product labeling
  status: Prescription-only medication
  detail: >-
    The reviewed ProCentra label includes narcolepsy and pediatric
    ADHD ages 3–16; this does not extend every indication to every
    dextroamphetamine formulation.
  sourceId: procentra-label

- jurisdiction: Sport under the 2026 World Anti-Doping Code list
  status: Prohibited in competition
  detail: >-
    Amphetamine and relevant optical isomers fall under S6.A,
    non-specified stimulants. This sporting classification is separate
    from national criminal or prescription law.
  sourceId: wada-2026
```