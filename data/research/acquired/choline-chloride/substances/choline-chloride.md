---
slug: choline-chloride
name: Choline chloride
subtitle: A water-soluble choline salt used as a nutrient source in research, foods, and animal nutrition.
aliases:
  - Cholinium chloride
  - Choline hydrochloride
  - (2-Hydroxyethyl)trimethylammonium chloride
formula: C5H14ClNO
molecularWeight: 139.62 g/mol
pubchemCid: 6209
smiles: "C[N+](C)(C)CCO.[Cl-]"
category: Choline salt
tags:
  - choline-precursor
accent: "#7A8B99"
reviewedAt: "2026-10-04"
halfLife:
  label: Not established
  low: null
  high: null
  context: Human intravenous choline-chloride pharmacokinetics were modeled as two-compartment with saturable central elimination, but the inspected report did not establish a single elimination half-life.
  sourceId: buchman-1994
  observationId: iv-elimination-half-life-not-established
kinetics:
  onset: Plasma choline rose rapidly after a single oral choline-chloride dose in healthy men.
  peak: Median time to peak plasma choline was 2.25 hours after 740 mg choline chloride providing 550 mg choline.
  duration: Plasma choline was near baseline by 24 hours after the single oral dose.
  bioavailability: Absolute oral bioavailability was not measured; plasma choline exposure did not significantly differ among the four tested choline sources in the six-person crossover.
  metabolism: Oral choline chloride increased plasma betaine and TMAO; the study interpreted TMAO formation through microbial trimethylamine production followed by host oxidation.
  sourceId: bockmann-2022
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

Choline chloride is a highly water-soluble choline salt used as a nutrient source. Human salt-specific evidence is strongest for short-term plasma choline delivery, prenatal supplementation within one small controlled-feeding cohort, and intravenous repletion in choline-deficient long-term parenteral-nutrition patients.

## Description

Choline chloride (CAS 67-48-1; PubChem CID 6209) is the chloride salt of choline. Pure anhydrous material is about 74.6% choline by mass; in one human crossover, 740 mg choline chloride supplied 550 mg choline. Commercial material can instead be aqueous or carried on solids, so product mass is not interchangeable with anhydrous salt mass. Human evidence is context-specific: oral pharmacokinetics have been studied acutely, prenatal controlled feeding used choline chloride to raise total maternal choline intake, and intravenous choline chloride has been studied in severe deficiency during long-term parenteral nutrition.

## Evidence note

This draft includes only outcomes for which choline chloride itself was the stated intervention or nutrient source. General choline-depletion/repletion findings and trials using phosphatidylcholine, citicoline, alpha-GPC, or choline bitartrate are not imported as choline-chloride outcomes. Prenatal cognition papers derive from the same small maternal feeding trial and are not independent replications. A single human elimination half-life was not established in the inspected pharmacokinetic report.

## Doses

```yaml
- label: Acute oral pharmacokinetic dose
  amount: 740 mg choline chloride, providing 550 mg choline
  quantity: 740
  quantityMax: null
  unit: mg choline chloride
  ingredient: Choline chloride
  formulation: Dry choline chloride dissolved in water and a beverage with a test meal
  route: Oral
  frequency: Single dose
  duration: Single administration with 24-hour follow-up
  population: Six healthy adult men
  purpose: Compare plasma choline, betaine, and TMAO kinetics across choline sources
  sourceCategory: research
  note: The salt-to-choline conversion was stated by the study; absolute oral bioavailability was not measured.
  sourceId: bockmann-2022
- label: Lower prenatal controlled-feeding exposure
  amount: 100 mg/day supplemental choline supplied as choline chloride, plus a 380 mg/day choline diet
  quantity: 100
  quantityMax: null
  unit: mg choline/day
  ingredient: Choline supplied as choline chloride
  formulation: Choline chloride in cran-grape juice with controlled diet
  route: Oral
  frequency: Daily
  duration: From about gestational week 27 until delivery
  population: Healthy third-trimester pregnant women
  purpose: Achieve 480 mg/day total choline intake
  sourceCategory: research
  note: The source states the amount as choline supplied from choline chloride; it does not state the corresponding mass of salt.
  sourceId: nct01127022
- label: Higher prenatal controlled-feeding exposure
  amount: 550 mg/day supplemental choline supplied as choline chloride, plus a 380 mg/day choline diet
  quantity: 550
  quantityMax: null
  unit: mg choline/day
  ingredient: Choline supplied as choline chloride
  formulation: Choline chloride in cran-grape juice with controlled diet
  route: Oral
  frequency: Daily
  duration: From about gestational week 27 until delivery
  population: Healthy third-trimester pregnant women
  purpose: Achieve 930 mg/day total choline intake
  sourceCategory: research
  note: The source states the amount as choline supplied from choline chloride; it does not state the corresponding mass of salt.
  sourceId: nct01127022
- label: Intravenous pharmacokinetic escalation
  amount: 7, 14, 28, and 56 mmol choline chloride on consecutive days
  quantity: 7
  quantityMax: 56
  unit: mmol choline chloride
  ingredient: Choline chloride
  formulation: Intravenous infusion
  route: Intravenous
  frequency: One 12-hour infusion daily at an escalating dose
  duration: Four consecutive study days
  population: Four patients receiving long-term total parenteral nutrition
  purpose: Characterize intravenous choline pharmacokinetics
  sourceCategory: research
  note: Plasma and 24-hour urinary choline were measured; the resulting model did not provide a single established elimination half-life in the inspected abstract.
  sourceId: buchman-1994
- label: Intravenous repletion in long-term parenteral nutrition
  amount: 1 to 4 g/day choline chloride in parenteral nutrition
  quantity: 1
  quantityMax: 4
  unit: g choline chloride/day
  ingredient: Choline chloride
  formulation: Added to parenteral nutrition solution
  route: Intravenous
  frequency: Daily
  duration: 6 weeks
  population: Four long-term total parenteral-nutrition patients with low plasma free choline and hepatic steatosis
  purpose: Replete choline and assess hepatic steatosis
  sourceCategory: research
  note: This was a small uncontrolled deficiency-treatment series, not evidence for routine supplementation in choline-sufficient people.
  sourceId: buchman-1995
```

## Pharmacokinetics

```yaml
- id: iv-elimination-half-life-not-established
  analyte: Plasma choline
  route: Intravenous
  formulation: Choline chloride infused over 12 hours
  population: Four patients receiving long-term total parenteral nutrition
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: A two-compartment model with saturable elimination from the central compartment fit better than a one-compartment model; the inspected report did not establish one elimination half-life suitable for a single-value model.
  sourceId: buchman-1994
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: oral-plasma-choline
  study:
    id: DRKS00020454
    design: Randomized crossover pharmacokinetic study
    sampleSize: 6
    populationLabels:
      - Healthy adult men
    comparator: Other tested choline sources and test-meal control context
    route: Oral
    formulation: Choline chloride dissolved in beverage with a test meal
    assessmentTime: 0 to 24 hours after dose
  conceptId: plasma-choline-concentration
  name: Plasma choline after a single oral dose
  direction: Increased
  evidence: Human research
  description: A single 740 mg choline-chloride dose supplying 550 mg choline produced a rapid transient rise in plasma choline in six healthy men.
  sourceId: bockmann-2022
  population: Six healthy adult men
  exposure: Single oral 740 mg choline chloride dose providing 550 mg choline
  instrument: Tandem mass spectrometry
  magnitude: Median choline AUC0-24h was 235.2 µmol/L·h (IQR 206.5-261.1); median time to peak was 2.25 h (IQR 0.88-3.5), with concentrations near baseline by 24 h.
- id: oral-plasma-tmao
  study:
    id: DRKS00020454
    design: Randomized crossover pharmacokinetic study
    sampleSize: 6
    populationLabels:
      - Healthy adult men
    comparator: Other tested choline sources and test-meal control context
    route: Oral
    formulation: Choline chloride dissolved in beverage with a test meal
    assessmentTime: 0 to 24 hours after dose
  conceptId: plasma-tmao-concentration
  name: Plasma TMAO after a single oral dose
  direction: Increased
  evidence: Human research
  description: Choline chloride, like the other water-soluble choline preparations in the crossover, increased plasma TMAO after dosing; individual responses varied markedly.
  sourceId: bockmann-2022
  population: Six healthy adult men
  exposure: Single oral 740 mg choline chloride dose providing 550 mg choline
  instrument: Tandem mass spectrometry
  magnitude: A transient post-dose increase was observed; the study emphasized substantial inter-individual variability and return toward baseline by 24 hours.
- id: tpn-hepatic-steatosis
  study:
    id: buchman-tpn-1995
    design: Uncontrolled deficiency-treatment case series
    sampleSize: 4
    populationLabels:
      - Long-term total parenteral-nutrition patients
      - Low plasma free choline
      - Hepatic steatosis
    comparator: Within-person baseline before choline chloride
    route: Intravenous
    formulation: Choline chloride added to parenteral nutrition
    durationDays: 42
    assessmentTime: Baseline, weeks 2, 4, 6, and follow-up after withdrawal
  result:
    measure: mean
    estimate: 13.1
    unit: HU liver-spleen CT difference
    instrument: Abdominal computed tomography
    comparator: Baseline mean -14.2 HU
    assessmentTime: Week 6
    population: Four long-term parenteral-nutrition patients with low plasma free choline
  conceptId: hepatic-steatosis
  name: Hepatic steatosis during intravenous repletion
  direction: Decreased
  evidence: Human research
  description: Six weeks of intravenous choline chloride in four choline-deficient long-term parenteral-nutrition patients normalized plasma free choline within one week and was accompanied by CT-estimated resolution of hepatic steatosis.
  sourceId: buchman-1995
  population: Four long-term total parenteral-nutrition patients with low plasma free choline and hepatic steatosis
  exposure: Choline chloride 1-4 g/day in parenteral nutrition for 6 weeks
  instrument: Abdominal computed tomography and plasma free choline measurement
  magnitude: Liver-spleen CT difference changed from -14.2 ± 22.3 HU at baseline to 13.1 ± 7.3 HU at week 6; steatosis recurred in one patient after return to choline-free parenteral nutrition.
- id: infant-processing-speed-prenatal
  study:
    id: NCT01127022
    design: Randomized double-blind controlled maternal feeding trial with infant follow-up
    sampleSize: 24
    populationLabels:
      - Infants born to healthy pregnant participants
    comparator: Maternal total choline intake 480 mg/day versus 930 mg/day
    route: Maternal oral
    formulation: Controlled diet plus choline chloride supplement
    assessmentTime: Infant ages 4, 7, 10, and 13 months
  conceptId: cognitive-task-performance
  name: Infant information-processing speed after prenatal exposure
  direction: Increased
  evidence: Human research
  description: Infants whose mothers consumed 930 mg/day total choline, achieved with the higher choline-chloride supplement, had faster mean saccade reaction time across four infant assessments than the 480 mg/day group.
  sourceId: caudill-2018
  population: 24 infants from the NCT01127022 pregnancy cohort
  exposure: Maternal third-trimester controlled diet providing 480 or 930 mg/day total choline, using choline chloride for the supplemental 100 or 550 mg/day choline
  instrument: Stimulus-guided saccade reaction-time task
  magnitude: Mean reaction time averaged across ages 4, 7, 10, and 13 months was significantly faster in the 930 mg/day group; the abstract did not provide a single numerical between-group effect estimate.
- id: age-seven-sustained-attention-prenatal
  study:
    id: NCT01127022
    design: Seven-year follow-up of a randomized double-blind controlled maternal feeding trial
    sampleSize: 20
    populationLabels:
      - Children exposed prenatally in the NCT01127022 maternal feeding trial
    comparator: Maternal total choline intake 480 mg/day versus 930 mg/day
    route: Maternal oral
    formulation: Controlled diet plus choline chloride supplement
    assessmentTime: Age 7 years
  result:
    measure: mean
    estimate: 0.71
    unit: SAT score
    instrument: Sustained Attention Task
    comparator: 480 mg/day total choline group, mean SAT score 0.56
    assessmentTime: Age 7 years
    population: 20 children followed from the prenatal NCT01127022 cohort
  conceptId: attention
  name: Sustained attention at age seven after prenatal exposure
  direction: Increased
  evidence: Human research
  description: At age seven, children from the 930 mg/day maternal choline group had higher Sustained Attention Task scores and less decline in signal detection across the session than children from the 480 mg/day group.
  sourceId: bahnfleth-2022
  population: 20 children from the NCT01127022 pregnancy cohort
  exposure: Maternal third-trimester controlled diet providing 480 or 930 mg/day total choline, using choline chloride for the supplemental 100 or 550 mg/day choline
  instrument: Sustained Attention Task
  magnitude: Mean SAT score was 0.71 versus 0.56 (p=0.02); for 17 ms signals, hits declined 22.9% across the session in the 480 mg/day group versus a 1.5% increase in the 930 mg/day group.
- id: elderly-memory-high-dose
  study:
    id: mohs-1979-memory
    design: Placebo-choline-placebo treatment sequence
    sampleSize: 8
    populationLabels:
      - Elderly patients with mild memory impairment
    comparator: Pre- and post-choline placebo periods
    route: Oral
    formulation: Choline chloride
    durationDays: 7
    assessmentTime: After 7 days of choline chloride
  conceptId: cognitive-task-performance
  name: Memory performance during high-dose choline chloride
  direction: Variable
  evidence: Human research
  description: In eight elderly patients with mild memory impairment, 16 g/day choline chloride for seven days did not improve average memory performance relative to placebo periods, although one poor-baseline participant improved.
  sourceId: mohs-1979
  population: Eight elderly patients with mild memory impairment
  exposure: Oral choline chloride 16 g/day for 7 days
  instrument: null
  magnitude: No group-level average memory improvement versus pre- and post-treatment placebo periods; one participant with the poorest baseline performance improved considerably.
```

## Mechanisms

```yaml
- title: Choline delivery
  description: Choline chloride is an ionic source of choline; a human oral crossover demonstrated a rapid rise in plasma choline after a dose explicitly quantified as 740 mg choline chloride providing 550 mg choline.
  sourceId: bockmann-2022
  conceptId: choline-precursor
- title: Choline oxidation and methyl-donor pathway
  description: After oral choline chloride, plasma betaine increased, consistent with oxidation of absorbed choline into the one-carbon metabolic pool.
  sourceId: bockmann-2022
- title: Gut microbial trimethylamine pathway
  description: The oral crossover attributed post-dose TMAO formation from water-soluble choline sources to microbial trimethylamine generation followed by hepatic oxidation; the magnitude varied strongly among individuals.
  sourceId: bockmann-2022
- title: Hepatic lipid-export support during deficiency
  description: In severe long-term parenteral-nutrition deficiency, intravenous choline chloride restored plasma free choline and was accompanied by reversal of CT-estimated hepatic steatosis; the small clinical series does not by itself quantify the responsible biochemical step.
  sourceId: buchman-1995
```

## Cautions

```yaml
- title: Distinguish choline mass from choline-chloride mass
  description: Pure anhydrous choline chloride is about 74.6% choline by molecular mass, and the acute human study used 740 mg salt to supply 550 mg choline. Commercial aqueous and carrier-based products can have substantially lower choline-chloride concentration, so label basis must be checked.
  sourceId: bockmann-2022
- title: TMAO response after oral dosing
  description: A single choline-chloride dose increased plasma TMAO in the six-man crossover, with large individual variation. The study did not establish the long-term clinical significance of repeated transient TMAO elevations.
  sourceId: bockmann-2022
- title: High total choline intake
  description: The adult 3.5 g/day tolerable upper intake level applies to total choline, not to choline-chloride mass; reported high-intake concerns include hypotension, sweating, diarrhea, and fishy body odor. It is not a choline-chloride dosing target.
  sourceId: fda-choline-2001
- title: Occupational skin and respiratory exposure
  description: EFSA's 2025 feed-additive review considers choline chloride a potential skin and respiratory sensitizer and treats skin or respiratory exposure as a user-safety risk; eye-irritation potential above 70% aqueous concentration could not be concluded.
  sourceId: efsa-2025
- title: Fire, oxidizers, dust, and moisture
  description: The ILO-WHO safety card describes choline chloride as combustible and hygroscopic, advises separation from strong oxidants, ventilation and basic eye/skin protection, and notes corrosive or toxic fumes including hydrogen chloride on combustion.
  sourceId: icsc-0853
```

## Claims

```yaml
- id: quantified-choline-delivery
  assertion: A single 740 mg oral dose of choline chloride delivered 550 mg choline and produced a measurable transient rise in plasma choline in healthy men.
  relation: supplies-choline
  participants:
    - entityId: substance:choline-chloride
      role: choline source
    - entityId: tag:choline-precursor
      role: mechanism
  context: Acute randomized crossover study in six healthy adult men; absolute oral bioavailability was not measured.
  sourceIds:
    - bockmann-2022
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute study; it does not establish chronic clinical benefit or a single absolute bioavailability value.
- id: parenteral-deficiency-repletion
  assertion: Intravenous choline chloride repletion in four choline-deficient long-term parenteral-nutrition patients normalized plasma free choline and was accompanied by resolution of CT-estimated hepatic steatosis.
  relation: deficiency-repletion-associated-with-improvement
  participants:
    - entityId: substance:choline-chloride
      role: intervention
    - entityId: tag:hepatic-steatosis
      role: measured outcome
  context: Uncontrolled six-week case series using 1-4 g/day choline chloride in parenteral nutrition.
  sourceIds:
    - buchman-1995
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Four-patient uncontrolled series in severe deficiency; it does not establish benefit in choline-sufficient populations.
- id: prenatal-cognition-same-cohort
  assertion: In the same small prenatal controlled-feeding cohort, the higher maternal total choline intake achieved with a larger choline-chloride supplement was followed by faster infant processing speed and better sustained attention at age seven.
  relation: prenatal-exposure-associated-with-cognitive-performance
  participants:
    - entityId: substance:choline-chloride
      role: supplemental choline source
    - entityId: tag:attention
      role: measured outcome
    - entityId: tag:cognitive-task-performance
      role: measured outcome
  context: NCT01127022 compared 480 versus 930 mg/day total maternal choline during the third trimester using choline chloride for the supplemental choline.
  sourceIds:
    - caudill-2018
    - bahnfleth-2022
    - nct01127022
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: These are follow-ups from one small cohort, not independent replications, and the comparison tests total choline intake rather than salt chemistry.
- id: direct-memory-evidence-limited
  assertion: Small late-1970s and 1980 high-dose choline-chloride studies did not show a consistent group-level memory benefit.
  relation: no-consistent-group-memory-benefit
  participants:
    - entityId: substance:choline-chloride
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: measured outcome
  context: Oral high-dose studies in elderly participants with mild memory impairment and young healthy subjects.
  sourceIds:
    - mohs-1979
    - davis-1980
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Old, small studies used very high doses and do not answer whether lower chronic doses affect modern cognitive endpoints.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem-6209
  title: Choline Chloride | CID 6209
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/6209
  kind: Chemical database
  insight: Confirms salt-specific identity, CID 6209, formula, molecular weight, SMILES, manufacturing summaries, and EPA CDR production-volume data.
  limitation: Aggregates information from multiple upstream sources; individual hazard and manufacturing statements retain their original-source limitations.
  funding: Not applicable to this government chemical database record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to this government chemical database record.
  conflictOfInterestStatus: not-assessed
- id: bockmann-2022
  title: Differential metabolism of choline supplements in adult volunteers
  authors: Katrin A Böckmann, Axel R Franz, Michaela Minarski, et al.
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8783899/
  kind: Randomized crossover human study
  insight: Provides salt-specific oral dose conversion, plasma choline/betaine kinetics, TMAO response, and timing after choline chloride.
  limitation: Six healthy men, single-dose exposure, no absolute bioavailability measurement, and no long-term clinical endpoint.
  pmid: "34287673"
  doi: "10.1007/s00394-021-02637-6"
  funding: Open-access support through Projekt DEAL; investigator-initiated trial partly funded by HiPP-Werk Georg Hipp OHG, an infant-formula manufacturer.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Authors declared no conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8783899/
- id: nct01127022
  title: Effect of Maternal Choline Intake on Choline Status and Health Biomarkers During Pregnancy and Lactation
  authors: Cornell University
  year: 2010
  url: https://clinicaltrials.gov/study/NCT01127022
  kind: Trial registry
  insight: Confirms randomized maternal feeding design and 100 versus 550 mg/day supplemental choline supplied as choline chloride.
  limitation: Registry record has no posted results; sponsor and collaborator fields do not substitute for publication-specific funding declarations.
  funding: Not assessed as a publication-level funding declaration; registry lists Cornell University as sponsor and several collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the registry record.
  conflictOfInterestStatus: not-assessed
- id: caudill-2018
  title: Maternal choline supplementation during the third trimester of pregnancy improves infant information processing speed
  authors: Marie A Caudill, Barbara J Strupp, Laura Muscalu, Julie E H Nevins, Richard L Canfield
  year: 2018
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6988845/
  kind: Randomized controlled feeding trial follow-up
  insight: Reports faster infant saccade reaction time after the higher maternal choline intake achieved with choline-chloride supplementation.
  limitation: Small cohort, maternal rather than infant dosing, and one prenatal trial; no single numerical between-group effect in the abstract.
  pmid: "29217669"
  doi: "10.1096/fj.201700692RR"
  funding: Egg Nutrition Center, The Beef Checkoff, USDA programs, Cornell social-science and life-course grants, and NIFA/USDA Hatch support.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors declared no conflicts; funders were stated to have no role in trial conduct or reporting.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6988845/
- id: bahnfleth-2022
  title: Prenatal choline supplementation improves child sustained attention
  authors: Charlotte L Bahnfleth, Barbara J Strupp, Marie A Caudill, Richard L Canfield
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9303951/
  kind: Randomized controlled feeding trial follow-up
  insight: Reports better age-seven sustained-attention performance after the higher maternal choline intake in the NCT01127022 cohort.
  limitation: Only 20 children were analyzed; this is a follow-up of the same prenatal trial, not an independent replication.
  pmid: "34962672"
  doi: "10.1096/fj.202101217R"
  funding: Seven-year follow-up funded by NIFA/USDA Hatch and Balchem Corp.; trainee support included NICHD and an Egg Nutrition Center award.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors reported no conflicts of interest; funders were stated to have no role in study design, data collection, analysis, or interpretation.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9303951/
- id: buchman-1994
  title: Choline pharmacokinetics during intermittent intravenous choline infusion in human subjects
  authors: A L Buchman, D J Jenden, A A Moukarzel, et al.
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/8143393/
  kind: Human pharmacokinetic study
  insight: Provides escalating intravenous choline-chloride exposure and supports a two-compartment model with saturable central elimination.
  limitation: Four long-term parenteral-nutrition patients; inspected abstract does not provide a single elimination half-life.
  pmid: "8143393"
  doi: "10.1038/clpt.1994.28"
  funding: Not assessed from a full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from a full disclosure statement.
  conflictOfInterestStatus: not-assessed
- id: buchman-1995
  title: Choline deficiency: a cause of hepatic steatosis during parenteral nutrition that can be reversed with intravenous choline supplementation
  authors: A L Buchman, M D Dubin, A A Moukarzel, et al.
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7590654/
  kind: Human deficiency-treatment case series
  insight: Four deficient long-term parenteral-nutrition patients received 1-4 g/day intravenous choline chloride with plasma and CT improvement.
  limitation: Uncontrolled four-person series in severe deficiency; funding and conflict declarations were not inspected in full text.
  pmid: "7590654"
  doi: "10.1002/hep.1840220510"
  funding: Not assessed from a full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from a full disclosure statement.
  conflictOfInterestStatus: not-assessed
- id: mohs-1979
  title: Choline chloride treatment of memory deficits in the elderly
  authors: R C Mohs, K L Davis, J R Tinklenberg, L E Hollister, J A Yesavage, B S Kopell
  year: 1979
  url: https://pubmed.ncbi.nlm.nih.gov/484722/
  kind: Human placebo-sequence study
  insight: Eight elderly patients showed no average memory improvement after 16 g/day choline chloride for seven days.
  limitation: Very small, old study; instrument details and modern disclosure information were unavailable in the inspected abstract.
  pmid: "484722"
  doi: "10.1176/ajp.136.10.1275"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: davis-1980
  title: Cholinomimetics and memory. The effect of choline chloride
  authors: K L Davis, R C Mohs, J R Tinklenberg, L E Hollister, A Pfefferbaum, B S Kopell
  year: 1980
  url: https://pubmed.ncbi.nlm.nih.gov/7350901/
  kind: Double-blind human study
  insight: Young healthy subjects receiving high-dose choline chloride showed no significant group-level short- or long-term memory benefit.
  limitation: Sample size is not stated in the abstract; old high-dose study with uninspected funding and conflict declarations.
  pmid: "7350901"
  doi: "10.1001/archneur.1980.00500500079013"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: efsa-2025
  title: Assessment of the feed additive consisting of choline chloride for all animal species for the renewal of its authorisation
  authors: EFSA Panel on Additives and Products or Substances used in Animal Feed
  year: 2025
  url: https://doi.org/10.2903/j.efsa.2025.9264
  kind: Regulatory scientific opinion
  insight: Current EU feed-additive characterization, formulation specifications, use conditions, environmental conclusion, and occupational sensitization assessment.
  limitation: Feed-additive risk assessment is not a human dietary-supplement efficacy trial and is specific to authorized animal-nutrition uses.
  doi: "10.2903/j.efsa.2025.9264"
  funding: Not applicable to a clinical-trial sponsorship classification; EFSA opinion requested by the European Commission.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: EFSA expert declarations are managed under EFSA policy; no publication-level clinical COI classification applied here.
  conflictOfInterestStatus: not-assessed
- id: icsc-0853
  title: ICSC 0853 - Choline chloride
  authors: International Labour Organization and World Health Organization
  year: 2005
  url: https://www.inchem.org/documents/icsc/icsc/eics0853.htm
  kind: International chemical safety card
  insight: Provides workplace handling, fire, oxidizer, dust, water-solubility, hygroscopicity, and first-aid guidance.
  limitation: Card is dated October 2005 and is a workplace safety summary, not a clinical toxicology trial or current national exposure standard.
  funding: Not applicable to a clinical-trial sponsorship classification.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-trial disclosure classification.
  conflictOfInterestStatus: not-assessed
- id: fda-choline-2001
  title: Nutrient Content Claims Notification for Choline Containing Foods
  authors: U.S. Food and Drug Administration
  year: 2001
  url: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/nutrient-content-claims-notification-choline-containing-foods
  kind: Official nutrient regulatory context
  insight: Records the adult 3.5 g/day total-choline UL and adverse-effect basis cited from the National Academies.
  limitation: The UL applies to total choline and is not a choline-chloride product dose or occupational exposure limit.
  funding: Not applicable to a clinical-trial sponsorship classification.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-trial disclosure classification.
  conflictOfInterestStatus: not-assessed
- id: ecfr-1828252
  title: 21 CFR 182.8252 - Choline chloride
  authors: U.S. Office of the Federal Register and U.S. Food and Drug Administration
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-182/subpart-I/section-182.8252
  kind: Regulation
  insight: U.S. food regulation lists choline chloride as generally recognized as safe when used in accordance with good manufacturing practice.
  limitation: GRAS status under specified food-use conditions is not proof of efficacy or safety at arbitrary supplemental or occupational exposures.
  funding: Not applicable to a clinical-trial sponsorship classification.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-trial disclosure classification.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Food use as a nutrient substance
  status: Generally recognized as safe when used in accordance with good manufacturing practice under 21 CFR 182.8252.
  sourceUrl: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-182/subpart-I/section-182.8252
  asOf: "2026-09-17"
```
