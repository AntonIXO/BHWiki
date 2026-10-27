---
slug: vitamin-c
name: Vitamin C
subtitle: Essential ascorbate nutrient; deficiency treatment and route-dependent pharmacology
aliases:
  - L-ascorbic acid
  - ascorbic acid
  - ascorbate
  - L(+)-ascorbic acid
  - vitamin C
formula: C6H8O6
molecularWeight: 176.12 g/mol
pubchemCid: 54670067
smiles: C([C@@H]([C@@H]1C(=C(C(=O)O1)O)O)O)O
category: vitamin
tags: []
accent: "#D97706"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: IV ascorbate 7.4 ± 1.4 h; oral terminal half-life not established
  low: 7.4
  high: 7.4
  context: The IV estimate comes from three participants in the ASCOR label; oral absorption is saturable and should not inherit this value.
  sourceId: ref-ascor-label
  observationId: vitamin-c-pk-iv
kinetics:
  onset: Plasma exposure rises rapidly after oral or IV dosing; clinical onset depends on deficiency and endpoint.
  peak: 1.25 g produced approximately 135 μmol/L oral versus 885 μmol/L IV mean peak plasma concentration.
  duration: IV label reports a mean half-life around 7.4 h; oral clinical duration is endpoint-specific.
  bioavailability: Oral absorption is approximately 70–90% at 30–180 mg/day and falls below 50% above 1 g/day in NIH guidance.
  metabolism: Renal excretion increases above plasma threshold; urinary oxalate is a major metabolic route at high exposure.
  sourceId: ref-ods
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
x-order: 9007199254740991
---

## Summary

Vitamin C is an essential water-soluble nutrient. Adequacy and scurvy treatment are established; regular oral supplementation modestly shortens common-cold duration but does not reliably prevent colds in the general population. High-dose IV exposure is pharmacologically distinct and has not established benefit for sepsis, cancer, fatigue or routine recovery.

## Description

Dietary vitamin C, oral supplements and intravenous ascorbic acid are separate exposures. Oral absorption is saturable; IV products bypass gut absorption and carry distinct renal, assay and route-specific risks.

## Evidence note

The evidence is strongest for correcting deficiency and weakest for extrapolating pharmacologic IV concentrations into disease treatment. Large clinical trials and route-specific labels are kept separate from biomarker and mechanistic claims.

## Doses

```yaml
- sourceCategory: research
  label: Adult dietary reference
  amount: 75–90 mg/day; pregnancy 85 mg/day; lactation 120 mg/day
  quantity: 75
  quantityMax: 120
  unit: mg/day
  ingredient: Vitamin C
  formulation: Dietary intake or oral ascorbate
  route: oral
  frequency: daily
  duration: Ongoing
  population: Adults
  purpose: Meet nutrient requirements
  note: Reference intake, not a therapeutic recommendation.
  sourceId: ref-ods
- sourceCategory: research
  label: Common-cold prevention trials
  amount: Generally ≥200 mg/day
  quantity: 200
  quantityMax: null
  unit: mg/day
  ingredient: Vitamin C
  formulation: Oral supplements
  route: oral
  frequency: daily
  duration: Varied
  population: General adults and children in prevention trials
  purpose: Assess common-cold incidence and duration
  note: Regular use modestly shortened duration but did not materially reduce general-population incidence.
  sourceId: ref-ods
- sourceCategory: research
  label: Oral PK study
  amount: 30–2,500 mg/day and single-dose challenges
  quantity: 30
  quantityMax: 2500
  unit: mg/day
  ingredient: Vitamin C
  formulation: Oral ascorbic acid
  route: oral
  frequency: Study-specific
  duration: Depletion/repletion study
  population: Healthy volunteers
  purpose: Characterize plasma and leukocyte saturation
  note: Absorption falls at high doses and urinary disposal rises.
  sourceId: ref-levine-1996
- sourceCategory: research
  label: ASCOR labeled scurvy treatment
  amount: 50–200 mg once daily by age
  quantity: 50
  quantityMax: 200
  unit: mg/day
  ingredient: Ascorbic acid
  formulation: ASCOR 500 mg/mL injection diluted to isotonic concentration
  route: intravenous
  frequency: once daily
  duration: Maximum 1 week
  population: Patients ≥5 months with scurvy when oral route is not feasible
  purpose: Treat scurvy under prescription label
  note: Labeled indication only; not approved for fatigue, sepsis or cancer.
  sourceId: ref-ascor-label
- sourceCategory: research
  label: CITRIS-ALI sepsis trial
  amount: 50 mg/kg every 6 hours
  quantity: 50
  quantityMax: null
  unit: mg/kg/dose
  ingredient: Ascorbic acid
  formulation: Intravenous infusion
  route: intravenous
  frequency: Every 6 hours
  duration: Up to 96 hours
  population: Adults with sepsis and severe acute respiratory failure
  purpose: Assess organ-failure and biomarker outcomes
  note: Organ-failure and biomarker endpoints were null.
  sourceId: ref-citris
- sourceCategory: research
  label: LOVIT sepsis trial
  amount: 50 mg/kg every 6 hours
  quantity: 50
  quantityMax: null
  unit: mg/kg/dose
  ingredient: Ascorbic acid
  formulation: Intravenous infusion
  route: intravenous
  frequency: Every 6 hours
  duration: Up to 96 hours
  population: 872 adults with sepsis in ICU
  purpose: Assess patient-important outcomes
  note: Primary composite favored placebo; this is not established sepsis therapy.
  sourceId: ref-lovit
```

## Pharmacokinetics

```yaml
- sourceId: ref-ascor-label
  id: vitamin-c-pk-iv
  analyte: ascorbate
  route: intravenous
  formulation: 1,000 mg ASCOR infused over 30 minutes
  population: 8 healthy adults; half-life estimate from 3 participants
  endpoint: elimination-half-life
  statistic: study-mean
  value: 7.4
  low: null
  high: null
  unit: hours
  context: Mean half-life 7.4 ± 1.4 h; urinary excretion rises above the renal threshold.
  modelEligible: true
- sourceId: ref-levine-1996
  id: vitamin-c-pk-oral
  analyte: ascorbate
  route: oral
  formulation: Oral ascorbic acid
  population: Healthy volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Oral absorption is saturable; single-dose bioavailability is near-complete at 200 mg but falls at 500 mg and above. No universal oral terminal half-life was established.
  modelEligible: false
- sourceId: ref-padayatty-2004
  id: vitamin-c-pk-route
  analyte: ascorbate
  route: oral or intravenous
  formulation: 1.25 g oral versus 1.25 g IV
  population: Healthy volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Mean peak plasma concentration was approximately 135 μmol/L oral versus 885 μmol/L IV; route changes exposure by orders of magnitude.
  modelEligible: false
```

## Modifiers

```yaml
- label: Route
  effect: IV produces much higher plasma exposure than oral dosing
  detail: IV bypasses saturable intestinal absorption; this pharmacokinetic difference does not establish superior clinical outcomes.
  sourceId: ref-padayatty-2004
  observationId: vitamin-c-pk-route
  factorType: other
  direction: variable
- label: Dose
  effect: Oral bioavailability decreases at high doses
  detail: Absorption falls and urinary disposal rises as dose increases.
  sourceId: ref-levine-1996
  observationId: vitamin-c-pk-oral
  factorType: other
  direction: variable
- label: Renal function
  effect: Renal impairment increases risk with pharmacologic IV use
  detail: ASCOR warns about oxalate nephropathy and nephrolithiasis in renal-risk populations.
  sourceId: ref-ascor-label
  observationId: vitamin-c-pk-iv
  factorType: other
  direction: slower
```

## Effects

```yaml
- sourceId: ref-cochrane-cold
  id: vitamin-c-effect-cold
  conceptId: perception
  name: Common-cold symptom experience
  direction: Variable
  evidence: Human research
  description: Regular oral vitamin C modestly shortened cold duration, while starting supplementation after symptom onset showed no consistent treatment benefit.
  population: General adults and children in randomized trials
  exposure: Usually ≥200 mg/day oral vitamin C
  instrument: Cold duration and symptom measures
  magnitude: Approximately 8% shorter in adults and 14% in children with regular use
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- sourceId: ref-cochrane-cold
  id: vitamin-c-outcome-cold-incidence
  conceptId: common-cold-incidence
  name: Common-cold incidence
  direction: Variable
  evidence: Human research
  description: Regular supplementation did not materially reduce common-cold incidence in the general population; incidence was lower in some extreme-exertion or cold-exposure groups.
  population: General populations and short-term extreme-exposure groups
  exposure: Regular oral vitamin C, study-specific doses
  instrument: Documented respiratory illness
  magnitude: General-population prevention null; subgroup signal
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-citris
  id: vitamin-c-outcome-citris
  conceptId: sepsis-organ-dysfunction
  name: Sepsis organ-failure endpoints
  direction: Variable
  evidence: Human research
  description: CITRIS-ALI found no significant improvement in modified SOFA score, CRP or thrombomodulin despite pharmacologic IV exposure.
  population: Adults with sepsis and severe acute respiratory failure
  exposure: 50 mg/kg IV every 6 h for up to 96 h
  instrument: Modified SOFA, CRP and thrombomodulin
  magnitude: Primary biomarker endpoints null
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-lovit
- sourceId: ref-lovit
  id: vitamin-c-outcome-lovit
  conceptId: death-or-persistent-organ-dysfunction
  name: Death or persistent organ dysfunction
  direction: Increased
  evidence: Human research
  description: In LOVIT, day-28 death or persistent organ dysfunction occurred in 44.5% with IV vitamin C versus 38.5% with placebo.
  population: 872 adults with sepsis in ICU
  exposure: 50 mg/kg IV every 6 h for up to 96 h
  instrument: Death or persistent organ dysfunction composite
  magnitude: RR 1.21 (95% CI 1.04–1.40; p=0.01)
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-citris
    - ref-ssc-2026
- sourceId: ref-phs-cvd
  id: vitamin-c-outcome-cvd
  conceptId: major-cardiovascular-events
  name: Major cardiovascular events
  direction: Variable
  evidence: Human research
  description: The Physicians' Health Study II did not show prevention of cardiovascular disease from vitamin C supplementation in male physicians.
  population: Male physicians in a large randomized prevention trial
  exposure: Oral vitamin C supplementation
  instrument: Major cardiovascular events
  magnitude: No overall preventive benefit
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-phs-cancer
  id: vitamin-c-outcome-cancer
  conceptId: total-cancer-incidence
  name: Total cancer incidence
  direction: Variable
  evidence: Human research
  description: Long-term oral vitamin C supplementation did not reduce total or prostate cancer incidence in the Physicians' Health Study II.
  population: Male physicians in a large randomized prevention trial
  exposure: Oral vitamin C supplementation
  instrument: Incident cancer diagnoses
  magnitude: No overall preventive benefit
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-hodges-1971
  id: vitamin-c-outcome-scurvy
  conceptId: scurvy-clinical-manifestations
  name: Scurvy manifestations
  direction: Decreased
  evidence: Human research
  description: Vitamin C deficiency causes fatigue, gingival disease, bruising and impaired wound healing; repletion treats the deficiency state.
  population: People with severe dietary deficiency
  exposure: Vitamin C repletion
  instrument: Clinical deficiency manifestations
  magnitude: Established deficiency treatment context
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Saturable intestinal transport
  description: Oral absorption falls at high intake and urinary disposal increases, limiting dose-proportional plasma exposure.
  sourceId: ref-levine-1996
- title: Renal threshold and oxalate handling
  description: Above the plasma renal threshold, ascorbate is cleared into urine and high pharmacologic exposure can increase oxalate burden.
  sourceId: ref-ascor-label
- title: Antioxidant and redox chemistry
  description: Ascorbate can alter redox-sensitive assays and biochemical pathways, but mechanistic plausibility does not establish disease benefit.
  sourceId: ref-ascor-label
```

## Cautions

```yaml
- title: Oral gastrointestinal effects
  description: High oral doses commonly cause diarrhea, nausea and abdominal cramping; adult UL is 2,000 mg/day.
  sourceId: ref-ods
- title: Renal oxalate risk
  description: ASCOR labeling warns about oxalate nephropathy and nephrolithiasis, especially with renal impairment or prior stones.
  sourceId: ref-ascor-label
- title: G6PD deficiency
  description: Hemolysis, including severe hemolysis, has been reported; the label restricts pharmacologic use and calls for monitoring.
  sourceId: ref-ascor-label
- title: Laboratory interference
  description: High ascorbate can interfere with susceptible blood and urine glucose, bilirubin, nitrite and leukocyte assays.
  sourceId: ref-ascor-label
- title: Pregnancy and lactation
  description: Nutrient reference intakes differ from pharmacologic IV exposure; ASCOR has no adequate pregnancy safety data for high-dose use.
  sourceId: ref-ascor-label
- title: Continuous renal replacement therapy changes micronutrient context
  description: A 2026 literature review identifies vitamin C among micronutrients that may be lost into dialysis effluent or adsorbed to CRRT tubing or filters, but it reports that evidence is insufficient to define optimal supplementation doses or monitoring parameters.
  sourceId: pmid-42929728
```

## Claims

```yaml
- id: vitamin-c-claim-scurry
  assertion: Vitamin C treats scurvy
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-c
      role: intervention
    - entityId: tag:scurvy-clinical-manifestations
      role: outcome
  context: Adequacy and deficiency treatment are established nutrient uses.
  sourceIds:
    - ref-ods
    - ref-ascor-label
    - ref-hodges-1971
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Labeled IV treatment is short-term and route-specific.
- id: vitamin-c-claim-cold
  assertion: Vitamin C prevents common colds
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-c
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Regular oral use modestly shortens duration but generally does not prevent incidence.
  sourceIds:
    - ref-cochrane-cold
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Extreme-exposure subgroup findings do not generalize to all adults.
- id: vitamin-c-claim-sepsis
  assertion: High-dose IV vitamin C treats sepsis
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-c
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: CITRIS-ALI was null and LOVIT found a harm signal on its primary composite.
  sourceIds:
    - ref-citris
    - ref-lovit
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Low-certainty meta-analytic signals do not override the largest multicenter result.
- id: vitamin-c-claim-cancer
  assertion: Vitamin C is an established anticancer therapy
  relation: evidence-boundary
  participants:
    - entityId: substance:vitamin-c
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: Oral 10 g/day and IV phase-I monotherapy did not establish objective clinical benefit.
  sourceIds:
    - ref-vitality
    - ref-paller
    - ref-nci-pdq
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Pharmacologic exposure and laboratory hypotheses are not patient benefit evidence.
```

## Interactions

```yaml
- id: interaction-vitamin-c-iron
  name: Iron absorption and iron overload
  otherSlug: null
  summary: Vitamin C enhances non-heme iron absorption; this may be undesirable in hereditary hemochromatosis or other iron-loading states.
  sourceId: ref-ods
  context: Nutrient interaction.
- id: interaction-vitamin-c-lab
  name: Redox-sensitive laboratory assays
  otherSlug: null
  summary: High circulating ascorbate can produce inaccurate glucose, bilirubin, nitrite and leukocyte results on susceptible platforms.
  sourceId: ref-ascor-label
  context: ASCOR label-specific warning.
- id: interaction-vitamin-c-warfarin
  name: Warfarin
  otherSlug: null
  summary: Limited case reports suggest possible interference, while the label reports no observed effect up to 1,000 mg/day for two weeks; continue INR monitoring.
  sourceId: ref-ascor-label
  context: Clinical significance at pharmacologic IV exposure is not established.
- id: interaction-vitamin-c-urine-ph
  name: Urine pH-sensitive drugs
  otherSlug: null
  summary: Urine acidification can alter renal handling of amphetamine and other pH-sensitive medicines.
  sourceId: ref-ascor-label
  context: Route and dose specific label warning.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pmid-42929728
  title: "Micronutrient deficiencies in continuous renal replacement therapy: A literature review and the emerging role of the pharmacist."
  authors: Wang C, Kaarto P, Farina N, Schultz M, Burr L, Nordbeck S.
  year: 2026
  pmid: "42929728"
  doi: 10.1093/ajhp/zxag361
  url: https://pubmed.ncbi.nlm.nih.gov/42929728/
  kind: Literature review
  insight: The review includes vitamin C among micronutrients at risk of loss during continuous renal replacement therapy and emphasizes uncertainty about supplementation and monitoring strategies.
  limitation: Review-level, population-specific context; it does not establish an optimal vitamin C dose or a general supplementation indication.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: ref-ods
  title: Vitamin C - Health Professional Fact Sheet
  authors: NIH Office of Dietary Supplements
  year: 2025
  url: https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/
  kind: authoritative nutrient monograph
  insight: Summarizes biochemical functions, food sources, U.S. RDA/AI and UL values, absorption, deficiency, common-cold evidence and safety considerations; updated July 31, 2025.
  limitation: Secondary authoritative synthesis rather than a single primary study.
  funding: U.S. National Institutes of Health public information resource; trial sponsorship not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed for an agency fact sheet.
  conflictOfInterestStatus: not-assessed
- id: ref-ascor-label
  title: ASCOR (ascorbic acid injection), for intravenous use
  authors: McGuff Pharmaceuticals, Inc.
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=388aad52-fc01-4784-9791-1dbc80c69306
  kind: current U.S. prescription drug label
  insight: Labels short-term IV treatment of scurvy when oral administration is not possible, insufficient or contraindicated; provides age-based doses, oxalate/G6PD/laboratory warnings, interactions and a 1,000 mg IV pharmacokinetic study.
  limitation: Product-specific prescribing information; labeled dosing should not be extrapolated to high-dose investigational IV uses.
  funding: Regulatory product labeling; trial sponsorship not separately assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable/assessed for prescribing information.
  conflictOfInterestStatus: not-assessed
- id: ref-hodges-1971
  title: Clinical manifestations of ascorbic acid deficiency in man
  authors: Hodges RE, Hood J, Canham JE, Sauberlich HE, Baker EM
  year: 1971
  url: https://pubmed.ncbi.nlm.nih.gov/5090631/
  kind: controlled human depletion-repletion study
  insight: Described the sequence of clinical scurvy during prolonged experimental vitamin C deprivation; five completing volunteers developed full clinical scurvy after approximately 84 to 97 days.
  limitation: Very small historical study in incarcerated adult men under research standards that predate modern ethical norms; limited generalizability.
  pmid: "5090631"
  doi: 10.1093/ajcn/24.4.432
  funding: U.S. Army Medical Research and Development Command contract DADA17-67-C-7111 and grant/support AM5306-08 were reported.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No modern competing-interest declaration was identified in the inspected historical record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/5090631/
- id: ref-levine-1996
  title: "Vitamin C pharmacokinetics in healthy volunteers: evidence for a recommended dietary allowance"
  authors: Levine M, Conry-Cantilena C, Wang Y, Welch RW, Washko PW, Dhariwal KR, Park JB, Lazarev A, Graumlich JF, King J, Cantilena LR
  year: 1996
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC39676/
  kind: controlled depletion-repletion pharmacokinetic study
  insight: In seven hospitalized healthy volunteers, steady-state plasma concentrations followed sigmoid dose-response kinetics; leukocytes saturated near 100 mg/day, oral bioavailability was complete at a 200 mg single dose, fell at 500 mg and above, and urinary excretion rose with higher doses.
  limitation: Seven participants and an intensive metabolic-ward design limit population generalizability.
  pmid: "8623000"
  doi: 10.1073/pnas.93.8.3704
  funding: Funding and sponsorship were not fully re-audited from the accessible record for this article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Competing-interest disclosure was not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-padayatty-2004
  title: "Vitamin C pharmacokinetics: implications for oral and intravenous use"
  authors: Padayatty SJ, Sun H, Wang Y, Riordan HD, Hewitt SM, Katz A, Wesley RA, Levine M
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15068981/
  kind: human dose-concentration study and pharmacokinetic modeling
  insight: In 17 healthy hospitalized volunteers, 1.25 g oral vitamin C produced mean peak plasma concentration 134.8 µmol/L versus 885 µmol/L after IV administration; modeled high-dose IV exposure was far above oral exposure.
  limitation: Very high IV-dose concentrations were partly modeled; patient data did not validate the high-dose cancer context.
  pmid: "15068981"
  doi: 10.7326/0003-4819-140-7-200404060-00010
  funding: Source-level funding details were not fully assessed from the accessible record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Source-level competing-interest details were not fully assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-cochrane-cold
  title: Vitamin C for preventing and treating the common cold
  authors: Hemilä H, Chalker E
  year: 2013
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8078152/
  kind: systematic review and meta-analysis of placebo-controlled trials
  insight: General-population incidence RR 0.97 (95% CI 0.94–1.00); severe-physical-stress subgroup RR 0.48 (0.35–0.64); regular supplementation shortened adult cold duration about 8%, while therapeutic post-onset trials showed no consistent effect.
  limitation: Many trials were old and heterogeneous in dose, population and outcome definitions; subgroup findings are context-specific.
  pmid: "23440782"
  doi: 10.1002/14651858.CD000980.pub4
  funding: Review support included Australian National University and the Australian Commonwealth Department of Health and Ageing; no commercial trial sponsor was reported for the review.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The review reports no relevant conflict for the other review authors after disclosed academic interests were considered.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8078152/
- id: ref-phs-cvd
  title: "Vitamins E and C in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial"
  authors: Sesso HD, Buring JE, Christen WG, Kurth T, Belanger C, MacFadyen J, Bubes V, Manson JE, Glynn RJ, Gaziano JM
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18997197/
  kind: randomized double-blind placebo-controlled factorial trial
  insight: "Vitamin C 500 mg/day for a mean 8 years did not reduce major cardiovascular events: HR 0.99 (95% CI 0.89–1.11)."
  limitation: Male physicians age 50 years and older; limited generalizability to women, deficiency states and lower-resource populations.
  pmid: "18997197"
  doi: 10.1001/jama.2008.600
  funding: NIH grants plus an investigator-initiated BASF grant; BASF, Wyeth and DSM provided study agents/packaging.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Author disclosures included research support and relationships with governmental, nonprofit and commercial entities.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2586922/
- id: ref-phs-cancer
  title: "Vitamins E and C in the prevention of prostate and total cancer in men: the Physicians' Health Study II randomized controlled trial"
  authors: Gaziano JM, Glynn RJ, Christen WG, Kurth T, Belanger C, MacFadyen J, Bubes V, Manson JE, Sesso HD, Buring JE
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19066368/
  kind: randomized double-blind placebo-controlled factorial trial
  insight: Vitamin C 500 mg/day did not reduce total cancer (HR 1.01, 95% CI 0.92–1.10) or prostate cancer (HR 1.02, 95% CI 0.90–1.15).
  limitation: Same predominantly well-nourished male-physician cohort as the cardiovascular analysis.
  pmid: "19066368"
  doi: 10.1001/jama.2008.862
  funding: NIH support with study agents/packaging and an investigator-initiated grant involving commercial manufacturers.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Author financial disclosures were reported in the publication.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2774210/
- id: ref-citris
  title: "Effect of Vitamin C Infusion on Organ Failure and Biomarkers of Inflammation and Vascular Injury in Patients With Sepsis and Severe Acute Respiratory Failure: The CITRIS-ALI Randomized Clinical Trial"
  authors: Fowler AA 3rd, Truwit JD, Hite RD, Morris PE, DeWilde C, Priday A, Fisher B, Thacker LR 2nd, Natarajan R, Brophy DF, et al.
  year: 2019
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6777268/
  kind: randomized double-blind placebo-controlled multicenter trial
  insight: IV vitamin C 50 mg/kg every 6 h for 96 h did not improve the primary modified SOFA, C-reactive-protein or thrombomodulin endpoints.
  limitation: Preliminary trial with multiple endpoints; exploratory mortality findings were not the primary efficacy endpoint and later evidence changed the balance.
  pmid: "31573637"
  doi: 10.1001/jama.2019.11825
  funding: NIH/NHLBI and other academic/public support; McGuff supplied vitamin C study material.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Author disclosures included research support and study-material relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6777268/
- id: ref-lovit
  title: Intravenous Vitamin C in Adults with Sepsis in the Intensive Care Unit
  authors: Lamontagne F, Masse MH, Menard J, Sprague S, Pinto R, Heyland DK, Cook DJ, et al.; LOVIT Investigators and Canadian Critical Care Trials Group
  year: 2022
  url: https://www.nejm.org/doi/10.1056/NEJMoa2200644
  kind: randomized blinded placebo-controlled multicenter trial
  insight: The day-28 composite of death or persistent organ dysfunction occurred in 44.5% with IV vitamin C versus 38.5% with placebo, RR 1.21 (95% CI 1.04–1.40).
  limitation: ICU sepsis population receiving vasopressors; findings do not address ordinary dietary supplementation or treatment of confirmed nutritional deficiency.
  pmid: "35704292"
  doi: 10.1056/NEJMoa2200644
  funding: Lotte and John Hecht Memorial Foundation; Nova Biomedical Canada supplied glucometers/strips/control solutions; vitamin C was purchased from Mylan at Canadian and New Zealand sites.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Author disclosure forms are published with the article; individual relationships were not exhaustively transcribed here.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nejm.org/doi/10.1056/NEJMoa2200644
- id: ref-ssc-2026
  title: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026"
  authors: Society of Critical Care Medicine
  year: 2026
  url: https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
  kind: international clinical practice guideline
  insight: For adults with sepsis or septic shock, the guideline suggests against IV vitamin C; certainty of evidence is rated low.
  limitation: Conditional recommendation based on the guideline evidence framework; does not address documented nutritional deficiency.
  funding: Guideline-level funding and individual panel disclosures were not fully re-audited for this article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Guideline panel disclosures were not fully re-audited.
  conflictOfInterestStatus: not-assessed
- id: ref-vitality
  title: A Randomized, Open-Label, Multicenter, Phase 3 Study of High-Dose Vitamin C Plus FOLFOX ± Bevacizumab versus FOLFOX ± Bevacizumab in Unresectable Untreated Metastatic Colorectal Cancer (VITALITY Study)
  authors: Wang F, He MM, Xiao J, Zhang YQ, Yuan XL, Fang WJ, et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9527503/
  kind: randomized open-label multicenter phase 3 trial
  insight: "Overall PFS was not significantly improved by adding IV vitamin C: median 8.6 vs 8.3 months; HR 0.86 (95% CI 0.70–1.05)."
  limitation: Open-label design; positive RAS-mutant subgroup finding was not the overall primary result and requires confirmation.
  pmid: "35929990"
  doi: 10.1158/1078-0432.CCR-22-0655
  funding: Sun Yat-sen University Clinical Research 5010 Program, National Natural Science Foundation of China and provincial/municipal public research programs.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The publication reports no disclosures.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9527503/
- id: ref-paller
  title: "High-Dose Intravenous Vitamin C Combined with Docetaxel in Men with Metastatic Castration-Resistant Prostate Cancer: A Randomized Placebo-Controlled Phase II Trial"
  authors: Paller CJ, Zahurak ML, Mandl A, Metri NA, Lalji A, Heath E, Kelly WK, Hoimes C, Barata P, Taksey J, et al.
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11333993/
  kind: randomized double-blind placebo-controlled phase 2 trial
  insight: Adding IV vitamin C 1 g/kg to docetaxel did not significantly improve PSA50 response, radiographic PFS, overall survival or toxicity; the study stopped for futility.
  limitation: Small, heavily pretreated population and early futility termination reduce precision.
  pmid: "39076107"
  doi: 10.1158/2767-9764.CRC-24-0225
  funding: U.S. Department of Defense, NIH and Billi Marcus Foundation support were reported.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Multiple author relationships with commercial oncology companies were disclosed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11333993/
- id: ref-bodeker
  title: A randomized trial of pharmacological ascorbate, gemcitabine, and nab-paclitaxel for metastatic pancreatic cancer
  authors: Bodeker KL, Smith BJ, Berg DJ, Chandrasekharan C, Sharif S, Fei N, et al.
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11491967/
  kind: randomized phase 2 clinical trial
  insight: In 36 randomized patients, adding 75 g IV ascorbate three times weekly was associated with OS HR 0.46 (90% CI 0.23–0.92) and PFS HR 0.43 (90% CI 0.20–0.92).
  limitation: Very small sample, 34 treated patients, and use of 90% confidence intervals; findings require independent confirmation.
  pmid: "39369582"
  doi: 10.1016/j.redox.2024.103375
  funding: NIH P01CA217797 and Holden Comprehensive Cancer Center P30 support were reported.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no known competing financial interests or personal relationships that could have appeared to influence the work.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11491967/
- id: ref-nci-pdq
  title: Intravenous Vitamin C (PDQ®)–Health Professional Version
  authors: National Cancer Institute
  year: 2025
  url: https://www.cancer.gov/about-cancer/treatment/cam/hp/vitamin-c-pdq
  kind: U.S. government evidence summary
  insight: Separates oral from IV pharmacology, reviews clinical oncology evidence and states that FDA has not approved high-dose vitamin C as a cancer treatment.
  limitation: Secondary evidence synthesis; not itself a randomized trial or FDA approval database.
  funding: U.S. National Cancer Institute evidence summary; trial sponsorship not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed for the PDQ editorial process in this article.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-supplements
  title: "FDA 101: Dietary Supplements"
  authors: U.S. Food and Drug Administration
  year: 2025
  url: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  kind: official U.S. regulatory information
  insight: Explains that FDA does not approve dietary supplements for safety, effectiveness or labeling before sale; firms bear primary responsibility for lawful marketing.
  limitation: General supplement regulatory framework, not vitamin-C-specific efficacy evidence.
  funding: U.S. government regulatory information; study sponsorship not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to regulatory guidance.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary supplement
  status: Oral vitamin C supplements are not FDA pre-approved for safety or effectiveness; disease claims can make a product a drug under applicable law.
  sourceUrl: https://www.fda.gov/consumers/consumer-updates/fda-101-dietary-supplements
  asOf: 2026-10-10
- jurisdiction: United States
  activity: ASCOR prescription injection
  status: Approved short-term treatment of scurvy when oral administration is not feasible; not approved for fatigue, sepsis or cancer.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=388aad52-fc01-4784-9791-1dbc80c69306
  asOf: 2026-10-10
```
