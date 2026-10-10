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
smiles: C[N+](C)(C)CCO.[Cl-]
category: Choline salt
tags:
  - choline-precursor
accent: "#7A8B99"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Human intravenous choline-chloride pharmacokinetics were modeled as two-compartment with saturable central elimination, but the inspected report did not establish a single elimination half-life.
  sourceId: buchman-1994
  observationId: choline-chloride-free-choline
kinetics:
  onset: Plasma choline rose rapidly after a single oral choline-chloride dose in healthy men.
  peak: Median time to peak plasma choline was 2.25 hours after 740 mg choline chloride providing 550 mg choline.
  duration: Plasma choline was near baseline by 24 hours after the single oral dose.
  bioavailability: Absolute oral bioavailability was not measured; plasma choline exposure did not significantly differ among the four tested choline sources in the six-person crossover.
  metabolism: Oral choline chloride increased plasma betaine and TMAO; the study interpreted TMAO formation through microbial trimethylamine production followed by host oxidation.
  sourceId: bockmann-2022
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

Choline chloride is a highly water-soluble choline salt used as a nutrient source. Human salt-specific evidence is strongest for short-term plasma choline delivery, prenatal supplementation within one small controlled-feeding cohort, and intravenous repletion in choline-deficient long-term parenteral-nutrition patients.

## Description

Choline chloride (CAS 67-48-1; PubChem CID 6209) is the chloride salt of choline, with about 74.6% choline-equivalent by mass in the pure anhydrous form. In one human crossover, 740 mg choline chloride supplied 550 mg choline. Commercial material can instead be aqueous or carried on solids, so product mass is not interchangeable with anhydrous salt mass.

## Evidence note

Choline chloride reliably raises free-choline and related biomarkers after oral dosing. Healthy and elderly cognition studies are mostly null; prenatal offspring signals and parenteral-nutrition repletion belong to different populations and routes. Salt mass, choline-equivalent mass, feed formulations and human products must remain separate.

## Doses

```yaml
- label: Equal-choline oral PK comparison
  amount: 740 mg choline chloride supplying 550 mg choline-equivalent
  quantity: 740
  quantityMax: null
  unit: mg salt
  ingredient: Choline chloride
  formulation: Salt dissolved in water with a small test meal
  route: Oral
  frequency: Single dose
  duration: 24-hour sampling
  population: Six healthy adult men
  purpose: Choline and metabolite kinetics
  sourceCategory: research
  note: Equal-choline comparison with bitartrate, Alpha-GPC and egg phosphatidylcholine.
  sourceId: bockmann-2022
- label: Prenatal low supplemental intake
  amount: 100 mg/day supplemental choline from choline chloride
  quantity: 100
  quantityMax: null
  unit: mg/day choline-equivalent
  ingredient: Choline chloride
  formulation: Controlled feeding intervention
  route: Oral
  frequency: Daily during late pregnancy
  duration: Approximately 12 weeks
  population: Healthy pregnant women in NCT01127022
  purpose: Maternal/fetal biomarker and offspring-development research
  sourceCategory: research
  note: Basal diet supplied about 380 mg/day; total intake was approximately 480 mg/day.
  sourceId: nct01127022
- label: Prenatal high supplemental intake
  amount: 550 mg/day supplemental choline from choline chloride
  quantity: 550
  quantityMax: null
  unit: mg/day choline-equivalent
  ingredient: Choline chloride
  formulation: Controlled feeding intervention
  route: Oral
  frequency: Daily during late pregnancy
  duration: Approximately 12 weeks
  population: Healthy pregnant women in NCT01127022
  purpose: Maternal/fetal biomarker and offspring-development research
  sourceCategory: research
  note: Basal diet supplied about 380 mg/day; total intake was approximately 930 mg/day.
  sourceId: caudill-2018
- label: Parenteral-nutrition deficiency repletion
  amount: 1–4 g/day choline chloride
  quantity: 1
  quantityMax: 4
  unit: g/day
  ingredient: Choline chloride
  formulation: Added to long-term total parenteral nutrition
  route: Intravenous
  frequency: Daily
  duration: 6 weeks
  population: Four long-term TPN patients with low plasma choline and hepatic steatosis
  purpose: Deficiency repletion
  sourceCategory: research
  note: Uncontrolled four-person series; not evidence for choline-replete supplementation.
  sourceId: buchman-1995
- label: High-dose elderly memory study
  amount: 2 g four times daily; 8 g/day
  quantity: 8
  quantityMax: null
  unit: g/day
  ingredient: Choline chloride
  formulation: Oral capsules or powder
  route: Oral
  frequency: Four times daily
  duration: 21 days
  population: Nondemented adults over 60 years
  purpose: Memory research
  sourceCategory: research
  note: No significant group-level memory benefit was established.
  sourceId: davis-1980
```

## Pharmacokinetics

```yaml
- id: choline-chloride-free-choline
  analyte: Plasma free choline
  route: Oral
  formulation: 740 mg choline chloride supplying 550 mg choline-equivalent
  population: Six healthy adult men
  endpoint: elimination-half-life
  statistic: study-mean
  value: null
  low: null
  high: null
  unit: hours
  context: Median free-choline Tmax was 2.25 hours, with median AUC0-6h 63.4 and AUC0-24h 235.2 micromol/L·h; concentrations returned near baseline by 24 hours. No validated terminal half-life was fitted.
  sourceId: bockmann-2022
  modelEligible: false
- id: choline-chloride-isotope
  analyte: D9-free choline and D9-betaine
  route: Oral
  formulation: 2.7 mg/kg D9-choline-equivalent as D9-choline chloride
  population: Six healthy men
  endpoint: elimination-half-life
  statistic: approximate
  value: null
  low: null
  high: null
  unit: hours
  context: Labelled free choline peaked near 1 hour and was near zero by about 5 hours; labelled phosphatidylcholine derived from the source peaked much later. These are analyte-specific windows, not a single salt half-life.
  sourceId: bahnfleth-2022
  modelEligible: false
- id: choline-chloride-iv
  analyte: Plasma choline
  route: Intravenous
  formulation: Choline chloride infusion
  population: Four adults receiving long-term parenteral nutrition
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Serial infusions were better described by a two-compartment model with saturable elimination than by a universal one-compartment half-life.
  sourceId: buchman-1994
  modelEligible: false
- id: choline-chloride-tmao
  analyte: Plasma TMAO
  route: Oral
  formulation: 740 mg choline chloride supplying 550 mg choline-equivalent
  population: Six healthy adult men
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Water-soluble choline produced a transient TMAO increase with marked person-to-person variation; this biomarker cannot populate a drug elimination model or establish cardiovascular harm.
  sourceId: bockmann-2022
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
- id: choline-chloride-memory-mohs
  conceptId: episodic-memory
  name: Memory performance in older adults
  direction: Variable
  evidence: Human research
  description: Oral 2 g four times daily did not significantly improve memory storage, retrieval or digit span in nondemented adults over 60.
  sourceId: davis-1980
  population: Nondemented adults over 60
  exposure: 8 g/day choline chloride for 21 days
  instrument: Memory storage, retrieval and digit-span tasks
  magnitude: No significant group-level benefit
  reportType: measured-assessment
  conflictingSourceIds: []
- id: choline-chloride-prenatal-infant
  conceptId: cognitive-task-performance
  name: Infant information-processing speed
  direction: Increased
  evidence: Human research
  description: In a small follow-up of the Cornell feeding cohort, infants born after the higher maternal choline intake had faster stimulus-guided saccade reaction times. This is prenatal developmental exposure, not acute adult cognition.
  sourceId: caudill-2018
  population: 24 infants from NCT01127022
  exposure: Maternal total choline approximately 930 versus 480 mg/day in late pregnancy
  instrument: Stimulus-guided saccade reaction-time task
  magnitude: Faster mean reaction time in the higher-intake group; single between-group estimate not reported in the abstract
  reportType: measured-assessment
  conflictingSourceIds: []
- id: choline-chloride-prenatal-age-seven
  conceptId: attention
  name: Sustained attention at age seven
  direction: Increased
  evidence: Human research
  description: A 20-child follow-up from the same cohort favored the higher maternal intake on sustained attention, but the small retained sample limits certainty and does not establish adult supplementation effects.
  sourceId: bahnfleth-2022
  population: 20 children from NCT01127022
  exposure: Maternal total choline approximately 930 versus 480 mg/day
  instrument: Sustained Attention Task
  magnitude: Mean SAT score 0.71 versus 0.56; p=0.02
  reportType: measured-assessment
  conflictingSourceIds: []
- id: choline-chloride-tpn-steatosis
  conceptId: hepatic-steatosis
  name: Hepatic steatosis during deficiency repletion
  direction: Decreased
  evidence: Human research
  description: Four long-term TPN patients with low plasma choline improved CT evidence of hepatic steatosis during intravenous repletion; one patient relapsed after choline-free PN resumed.
  sourceId: buchman-1995
  population: Four long-term TPN patients with choline deficiency
  exposure: 1–4 g/day intravenous choline chloride for 6 weeks
  instrument: Abdominal CT liver-spleen attenuation and plasma free choline
  magnitude: CT difference changed from -14.2±22.3 to 13.1±7.3 HU at week 6
  reportType: measured-assessment
  conflictingSourceIds: []
- id: choline-chloride-tmao-outcome
  conceptId: plasma-tmao-concentration
  name: Plasma TMAO exposure
  direction: Increased
  evidence: Human research
  description: Water-soluble choline chloride produced a transient plasma TMAO increase with substantial inter-individual variation; this biomarker does not establish cardiovascular harm.
  sourceId: bockmann-2022
  population: Six healthy adult men
  exposure: Single 740 mg choline chloride dose supplying 550 mg choline
  instrument: Plasma TMAO assay
  magnitude: Median TMAO rose at six hours and approached baseline by 24 hours
  reportType: measured-assessment
  conflictingSourceIds: []
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
- title: Choline chloride salt conversion
  description: Anhydrous choline chloride is about 74.6% choline-equivalent by mass; aqueous feed and carrier preparations have different active concentrations and are not human-product specifications.
  sourceId: pubchem-6209
- title: TMAO is not a clinical event
  description: Oral water-soluble choline raises TMAO transiently, but available chloride studies did not test myocardial infarction, stroke, thrombosis or mortality.
  sourceId: bockmann-2022
- title: Prenatal findings are population-specific
  description: Favorable infant and age-seven attention signals come from a small late-pregnancy controlled-feeding cohort and cannot be transferred to acute adult nootropic claims.
  sourceId: bahnfleth-2022
- title: Parenteral repletion is deficiency treatment
  description: Intravenous choline chloride improved liver imaging in a four-person TPN-deficiency series; this uncontrolled evidence should not be extrapolated to choline-replete users.
  sourceId: buchman-1995
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
  authors: Katrin A. Böckmann, Axel R. Franz, Michaela Minarski, Anna Shunova, Christian A. Maiwald, Julian Schwarz, Maximilian Gross, Christian F. Poets, Wolfgang Bernhard
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8783899/
  kind: Human randomized crossover pharmacokinetic study
  insight: Provides salt-specific oral dose conversion, plasma choline/betaine kinetics, TMAO response, and timing after choline chloride.
  limitation: Six healthy men, single-dose exposure, no absolute bioavailability measurement, and no long-term clinical endpoint.
  pmid: "34287673"
  doi: 10.1007/s00394-021-02637-6
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
  kind: ClinicalTrials.gov registry
  insight: Confirms randomized maternal feeding design and 100 versus 550 mg/day supplemental choline supplied as choline chloride.
  limitation: Registry record has no posted results; sponsor and collaborator fields do not substitute for publication-specific funding declarations.
  funding: Not assessed as a publication-level funding declaration; registry lists Cornell University as sponsor and several collaborators.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the registry record.
  conflictOfInterestStatus: not-assessed
- id: caudill-2018
  title: "Maternal choline supplementation during the third trimester of pregnancy improves infant information processing speed: a randomized, double-blind, controlled feeding study"
  authors: Marie A Caudill, Barbara J Strupp, Laura Muscalu, Julie E H Nevins, Richard L Canfield
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29217669/
  kind: Randomized double-blind controlled feeding trial
  insight: Reports faster infant saccade reaction time after the higher maternal choline intake achieved with choline-chloride supplementation.
  limitation: Small cohort, maternal rather than infant dosing, and one prenatal trial; no single numerical between-group effect in the abstract.
  pmid: "29217669"
  doi: 10.1096/fj.201700692RR
  funding: Egg Nutrition Center, The Beef Checkoff, USDA programs, Cornell social-science and life-course grants, and NIFA/USDA Hatch support.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors declared no conflicts; funders were stated to have no role in trial conduct or reporting.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6988845/
- id: bahnfleth-2022
  title: "Prenatal choline supplementation improves child sustained attention: A 7-year follow-up of a randomized controlled feeding trial"
  authors: Charlotte L Bahnfleth, Barbara J Strupp, Marie A Caudill, Richard L Canfield
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/34962672/
  kind: Randomized-trial follow-up
  insight: Reports better age-seven sustained-attention performance after the higher maternal choline intake in the NCT01127022 cohort.
  limitation: Only 20 children were analyzed; this is a follow-up of the same prenatal trial, not an independent replication.
  pmid: "34962672"
  doi: 10.1096/fj.202101217R
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
  doi: 10.1038/clpt.1994.28
  funding: Not assessed from a full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from a full disclosure statement.
  conflictOfInterestStatus: not-assessed
- id: buchman-1995
  title: "Choline deficiency: a cause of hepatic steatosis during parenteral nutrition that can be reversed with intravenous choline supplementation"
  authors: A L Buchman, M D Dubin, A A Moukarzel, et al.
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7590654/
  kind: Human deficiency-treatment case series
  insight: Four deficient long-term parenteral-nutrition patients received 1-4 g/day intravenous choline chloride with plasma and CT improvement.
  limitation: Uncontrolled four-person series in severe deficiency; funding and conflict declarations were not inspected in full text.
  pmid: "7590654"
  doi: 10.1002/hep.1840220510
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
  doi: 10.1176/ajp.136.10.1275
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
  doi: 10.1001/archneur.1980.00500500079013
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
  doi: 10.2903/j.efsa.2025.9264
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
  activity: Food ingredient
  status: 21 CFR §182.8252 lists choline chloride as GRAS when used according to good manufacturing practice; this is not therapeutic approval.
  sourceUrl: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-182/subpart-I/section-182.8252
  asOf: 2026-10-10
- jurisdiction: European Union
  activity: Animal feed additive
  status: Regulation (EU) 2026/164 authorizes specified choline-chloride feed preparations for animal nutrition. Feed-grade purity and carrier conditions do not establish human supplement quality or safety.
  sourceUrl: https://eur-lex.europa.eu/eli/reg_impl/2026/164/oj/eng
  asOf: 2026-10-10
```
