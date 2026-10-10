---
slug: phosphatidylserine
name: phosphatidylserine
subtitle: Evidence-specific research record.
aliases:
  - phosphatidylserine
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags: []
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: A serum concentration peak around 90 minutes and return toward baseline by 180 minutes were observed; terminal half-life was not established.
  sourceId: S7
  observationId: ps-serum-profile
kinetics:
  onset: Not established
  peak: Serum PS peak about 90 minutes in a PS/PA mixture
  duration: Return toward baseline by about 180 minutes in the cited study
  bioavailability: Not established
  metabolism: Digestion and lipid remodeling; intact brain delivery unresolved
  sourceId: S7
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

Phosphatidylserine (PS) is an endogenous membrane phospholipid sold in bovine-cortex, soy, sunflower, and marine-derived formulations. Evidence is mixed: historical bovine trials and some mixtures reported selective memory or stress-biomarker signals, while well-designed soy trials were null. A meta-analysis found a memory signal without activities-of-daily-living benefit. [S1][S2][S3][S4][S7]

## Description

Modern products are mainly soy- or sunflower-lecithin-derived; marine products may add EPA/DHA. Fatty-acid composition and co-ingredients differ from historical bovine-cortex PS, so formulations are not interchangeable. [S1][S13][S14]

## Evidence note

The elderly evidence base comprised nine studies and 961 participants, with mixed randomized and pre–post designs, short follow-up, and heterogeneous PS sources. Stress studies more consistently altered ACTH or cortisol than validated clinical outcomes; exercise findings were largely null. Product sponsorship and author employment are disclosed for several PS–DHA/EPA and soy-PS studies. [S1][S8][S10][S11][S12]

## Doses

```yaml
- label: Older-adult cognition RCT
  amount: 100 or 300 mg/day
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: Soy PS
  route: oral
  frequency: daily
  duration: 6 months
  population: 78 older adults with memory complaints
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Kato trial included 100 and 300 mg/day arms; overall memory-battery comparison was null.
  sourceId: S4
- label: Age-associated memory trial
  amount: 300 or 600 mg/day
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: Soy PS
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 120 older adults with age-associated memory impairment
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: No significant cognitive difference versus placebo.
  sourceId: S2
- label: Historical memory trial
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: Bovine-cortex PS
  route: oral
  frequency: daily
  duration: 12 weeks
  population: 149 adults with age-associated memory impairment
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Selective learning and memory signal; historical formulation.
  sourceId: S3
- label: PS plus phosphatidic acid
  amount: 300 mg PS + 240 mg PA/day
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: Soy PS/PA mixture
  route: oral
  frequency: daily
  duration: 2 months
  population: Older adults with Alzheimer disease or dementia
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: Per-protocol functional-stability signal; mixture cannot isolate PS.
  sourceId: S7
- label: Stress PAS study
  amount: 400, 600, or 800 mg/day
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: PS/phosphatidic-acid complex
  route: oral
  frequency: daily
  duration: Acute study
  population: Healthy adults during mental stress testing
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: ACTH/cortisol signal at 400 mg/day only; higher doses did not reproduce it.
  sourceId: S8
- label: Exercise trial
  amount: 750 mg/day
  quantity: 750
  quantityMax: null
  unit: mg
  ingredient: Phosphatidylserine
  formulation: Soy PS
  route: oral
  frequency: daily
  duration: 10 days
  population: 16 male soccer players
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: No cortisol, soreness, muscle-damage, or oxidative-stress benefit.
  sourceId: S10
```

## Pharmacokinetics

```yaml
- id: ps-serum-profile
  analyte: Serum phosphatidylserine
  route: oral
  formulation: PS/PA mixture
  population: Humans in crossover PK study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Serum PS peaked at approximately 90 minutes and returned toward baseline by about 180 minutes; a terminal half-life and brain exposure were not established.
  sourceId: S7
  modelEligible: false
- id: ps-brain-exposure
  analyte: Supplemental phosphatidylserine
  route: oral
  formulation: PS formulations
  population: Humans; review-level evidence
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Digestion, remodeling, and transport occur through lipid pathways; intact brain delivery is unresolved.
  sourceId: S13
  modelEligible: false
```

## Modifiers

```yaml
- label: Source and fatty-acid composition
  effect: Variable
  detail: Bovine, soy, sunflower, and marine PS differ in acyl chains and co-ingredients.
  sourceId: S1
  observationId: ps-serum-profile
  factorType: other
  direction: variable
- label: Mixture formulation
  effect: Variable
  detail: PS alone, PS/PA, PS plus EPA/DHA, and multinutrient products are not interchangeable.
  sourceId: S7
  observationId: ps-serum-profile
  factorType: other
  direction: variable
- label: Baseline cognition or stress
  effect: Variable
  detail: Lower baseline performance or higher chronic stress may identify responsive subgroups, but signals were not confirmatory.
  sourceId: S3
  observationId: ps-serum-profile
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: perception
  name: Selective memory performance
  direction: Increased
  evidence: Human research
  description: Historical BC-PS trials reported selective learning or memory effects, with apparent baseline-severity interaction.
  sourceId: S3
  population: 149 adults with age-associated memory impairment
  exposure: 300 mg/day BC-PS for 12 weeks
  instrument: Cognitive test battery
  magnitude: null
- conceptId: perception
  name: Soy-PS memory battery
  direction: Variable
  evidence: Human research
  description: Overall randomized comparisons were null in soy trials; a delayed-recall subgroup signal was reported in one study.
  sourceId: S4
  population: 78 older adults with memory complaints
  exposure: 100 or 300 mg/day soy PS for 6 months
  instrument: RBMT and memory tests
  magnitude: null
- conceptId: perception
  name: ACTH and cortisol response
  direction: Variable
  evidence: Human research
  description: Selected PS/PA or BC-PS protocols altered stress biomarkers, but findings varied by dose and baseline stress.
  sourceId: S8
  population: Healthy adults in acute stress paradigms
  exposure: 400 mg/day PAS or 800 mg/day BC-PS
  instrument: ACTH and cortisol
  magnitude: null
- conceptId: perception
  name: Exercise recovery symptoms
  direction: Variable
  evidence: Human research
  description: A controlled soccer-player trial found no reduction in cortisol, soreness, muscle-damage markers, or oxidative stress.
  sourceId: S10
  population: 16 male soccer players
  exposure: 750 mg/day soy PS for 10 days
  instrument: Cortisol, soreness, CK, myoglobin
  magnitude: null
```

## Outcomes

```yaml
- conceptId: memory
  name: Memory test outcomes
  direction: Variable
  evidence: Human research
  description: A 2022 review found a memory benefit signal but no pooled activities-of-daily-living benefit; randomized soy evidence was inconsistent.
  sourceId: S1
  population: Nine studies; 961 participants
  exposure: 100–300 mg/day across heterogeneous PS products
  instrument: Memory and ADL measures
  magnitude: null
- conceptId: memory
  name: Daily functioning in dementia
  direction: Variable
  evidence: Human research
  description: A short PS/PA pilot suggested functional stabilization in a per-protocol subgroup; this was not disease modification.
  sourceId: S7
  population: Older adults with dementia
  exposure: PS/PA mixture for 2 months
  instrument: Activities of daily living
  magnitude: null
- conceptId: fatigue-severity
  name: Exercise performance
  direction: Variable
  evidence: Human research
  description: Time to exhaustion favored PS numerically but was not statistically significant; recovery outcomes were null.
  sourceId: S10
  population: 16 male soccer players
  exposure: 750 mg/day soy PS for 10 days
  instrument: Time to exhaustion and recovery markers
  magnitude: null
- conceptId: stress-response
  name: Stress biomarkers
  direction: Variable
  evidence: Human research
  description: ACTH and cortisol changes occurred under selected protocols without consistent psychological-stress benefit.
  sourceId: S8
  population: Healthy adults under stress testing
  exposure: PAS 400–800 mg/day
  instrument: ACTH/cortisol
  magnitude: null
```

## Mechanisms

```yaml
- title: Membrane signaling
  description: PS is an anionic membrane phospholipid involved in membrane structure, protein docking, vesicle fusion, and receptor signaling.
  sourceId: S13
- title: Neural signaling hypothesis
  description: Cholinergic and synaptic effects are biologically plausible but do not establish clinical cognitive benefit from oral PS.
  sourceId: S1
- title: HPA-axis modulation
  description: Some PS/PA and BC-PS studies attenuated stress-induced ACTH/cortisol responses; clinical stress benefit remains unestablished.
  sourceId: S8
```

## Cautions

```yaml
- title: Short-term tolerability
  description: Short trials generally reported no serious treatment-related signal, including soy PS and PS–DHA/EPA products.
  sourceId: S11
- title: Reported symptoms
  description: GI discomfort, flatulence, nausea, vomiting, itching, dizziness, and agitation appeared in some reports with uncertain attribution.
  sourceId: S1
- title: Historical bovine-cortex products
  description: Historical BC-PS carried theoretical prion-transmission concerns; modern products are predominantly plant-derived.
  sourceId: S14
- title: Long-term and special-population evidence
  description: Long-term safety, pregnancy, lactation, and medically complex-population data are limited.
  sourceId: S16
```

## Claims

```yaml
- id: ps-memory
  assertion: PS supports memory in older adults
  relation: evidence-boundary
  participants:
    - entityId: substance:phosphatidylserine
      role: intervention
    - entityId: tag:glycerophospholipid
      role: reported-outcome
  context: Some historical or subgroup signals exist, but randomized soy results and pooled clinical importance are uncertain.
  sourceIds:
    - S1
    - S2
    - S3
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Heterogeneous sources, formulations, short duration, and mixed study quality.
- id: ps-dementia
  assertion: PS treats or prevents dementia
  relation: evidence-boundary
  participants:
    - entityId: substance:phosphatidylserine
      role: intervention
    - entityId: tag:glycerophospholipid
      role: reported-outcome
  context: No convincing evidence establishes prevention or disease modification.
  sourceIds:
    - S5
    - S6
    - S16
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small historical trials and mixtures cannot support disease-treatment claims.
- id: ps-stress
  assertion: PS lowers stress
  relation: evidence-boundary
  participants:
    - entityId: substance:phosphatidylserine
      role: intervention
    - entityId: tag:immune-inflammatory-modulation
      role: reported-outcome
  context: Selected ACTH/cortisol changes are biomarker-limited and do not establish improved psychological stress.
  sourceIds:
    - S8
    - S9
    - S17
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Composite PAS products and small acute studies limit attribution.
- id: ps-exercise
  assertion: PS improves exercise recovery
  relation: evidence-boundary
  participants:
    - entityId: substance:phosphatidylserine
      role: intervention
    - entityId: tag:glycerophospholipid
      role: reported-outcome
  context: Controlled exercise findings are mostly null or exploratory.
  sourceIds:
    - S10
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small samples and short interventions.
```

## Interactions

```yaml
- id: ps-bleeding
  name: Bleeding risk
  otherSlug: null
  summary: Possible but unconfirmed concern, more relevant when the product also contains EPA/DHA; reliable prescription-drug interaction data are absent.
  sourceId: S16
  context: Secondary evidence synthesis
- id: ps-blood-pressure
  name: Blood-pressure lowering
  otherSlug: null
  summary: A small open-label soy-PS study reported lower blood pressure; additive antihypertensive effects remain untested.
  sourceId: S12
  context: Open-label product study
- id: ps-formulation
  name: Source-specific excipients
  otherSlug: null
  summary: Soy, sunflower, fish, and mixture ingredients create formulation-specific allergen and exposure differences.
  sourceId: S11
  context: Safety trial and product composition
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Effect of phosphatidylserine on cognitive function in the elderly: A systematic review and meta-analysis"
  authors: Eun Young Kang; Fengjiao Cui; Hyun Kyung Kim; Hadia Nawaz; Sumin Kang; Hayoon Kim; Jihye Jang; Gwang-woong Go
  year: 2022
  url: https://doi.org/10.9721/KJFST.2022.54.1.52
  kind: Systematic review and meta-analysis
  insight: Nine studies and 961 participants; memory benefit signal but no activities-of-daily-living benefit.
  limitation: Five RCTs plus four pre–post studies; mixed sources, formulations, and risk of bias.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: The influence of soy-derived phosphatidylserine on cognition in age-associated memory impairment
  authors: B. L. Jorissen; F. Brouns; M. P. Van Boxtel; R. W. Ponds; F. R. Verhey; J. Jolles; W. J. Riedel
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11842880/
  kind: Randomized, double-blind, placebo-controlled trial
  insight: 120 older adults; 300 or 600 mg/day soy PS for 12 weeks; no significant cognitive benefit.
  limitation: Short duration; age-associated memory impairment rather than dementia.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S3
  title: Effects of phosphatidylserine in age-associated memory impairment
  authors: T. H. Crook; J. Tinklenberg; J. Yesavage; W. Petrie; M. G. Nunzi; D. C. Massari
  year: 1991
  url: https://pubmed.ncbi.nlm.nih.gov/2027477/
  kind: Randomized, placebo-controlled clinical trial
  insight: 149 participants; 300 mg/day BC-PS for 12 weeks; selective learning and memory improvement.
  limitation: Historical bovine product, short duration, and apparent baseline-severity interaction.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Soybean-derived phosphatidylserine improves memory function of the elderly Japanese subjects with memory complaints
  authors: A. Kato-Kataoka et al.; Yakult Central Institute for Microbiological Research
  year: 2010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2966935/
  kind: Randomized, double-blind, placebo-controlled trial
  insight: 78 randomized; 100 or 300 mg/day soy PS for six months; overall memory-battery comparison was null.
  limitation: Small sample; subgroup findings and a placebo containing other bioactive nutrients complicate interpretation.
  funding: Not reported; PS-20L was made by Yakult Honsha.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Double-blind randomized controlled study of phosphatidylserine in senile demented patients
  authors: P. J. Delwaide; A. M. Gyselynck-Mambourg; A. Hurlet; M. Ylieff
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3518329/
  kind: Randomized, double-blind, placebo-controlled trial
  insight: 42 hospitalized patients; 300 mg/day BC-PS for six weeks; selected behavioral-scale signal.
  limitation: 35 completers, short duration, historical bovine product, limited generalizability.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S6
  title: Effects of phosphatidylserine in Alzheimer's disease
  authors: T. Crook; W. Petrie; C. Wells; D. C. Massari
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1609044/
  kind: Randomized, placebo-controlled clinical trial
  insight: 51 probable-AD patients; 300 mg/day BC-PS for 12 weeks; selected cognitive improvements.
  limitation: Small, short trial; effects were greatest in less severe disease and did not establish disease modification.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: Positive effects of soy lecithin-derived phosphatidylserine plus phosphatidic acid on memory, cognition, daily functioning, and mood in elderly patients with Alzheimer's disease and dementia
  authors: M. I. Moré et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25414047/
  kind: Pilot randomized, double-blind, placebo-controlled studies
  insight: PS+PA product showed memory or short-term functional-stability signals and rapid serum PS kinetics.
  limitation: Proprietary mixture, per-protocol analyses, short duration, and limited independent replication.
  funding: Not stated in the consulted record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully reported in the abstract.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: Effects of soy lecithin phosphatidic acid and phosphatidylserine complex (PAS) on the endocrine and psychological responses to mental stress
  authors: J. Hellhammer; E. Fries; C. Buss; V. Engert; A. Tuch; D. Rutenberg; D. Hellhammer
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15512856/
  kind: Randomized controlled trial
  insight: 400 mg/day PAS reduced ACTH and cortisol responses; larger PAS doses did not reproduce the effect.
  limitation: Small groups, composite PAS product, acute stress test, and no disease outcome.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S9
  title: Blunting by chronic phosphatidylserine administration of the stress-induced activation of the hypothalamo-pituitary-adrenal axis in healthy men
  authors: P. Monteleone; M. Maj; L. Beinat; M. Natale; D. Kemali
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1325348/
  kind: Placebo-controlled clinical trial
  insight: Nine men; 800 mg/day BC-PS for 10 days; blunted exercise-induced ACTH and cortisol.
  limitation: Extremely small sample, historical bovine product, biomarker-only outcome.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: Effects of phosphatidylserine on oxidative stress following intermittent running
  authors: Michael I. Kingsley; Daniel Wadsworth; Liam P. Kilduff; Jane McEneny; David Benton
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16118575/
  kind: Randomized, double-blind, placebo-controlled exercise trial
  insight: 16 soccer players; 750 mg/day soy PS for 10 days; no cortisol, soreness, muscle-damage, or oxidative-stress benefit.
  limitation: Small sample and short intervention; performance trend was nonsignificant.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S11
  title: "Safety of phosphatidylserine containing omega-3 fatty acids in non-demented elderly: a double-blind placebo-controlled trial followed by an open-label extension"
  authors: V. Vakhapova; Y. Richter; T. Cohen; Y. Herzog; A. D. Korczyn
  year: 2011
  url: https://bmcneurol.biomedcentral.com/articles/10.1186/1471-2377-11-79
  kind: Randomized safety trial plus open-label extension
  insight: PS–DHA/EPA product was generally well tolerated without serious treatment-related adverse events.
  limitation: Mixture rather than isolated PS; short duration; efficacy attribution is impossible.
  funding: Enzymotec Ltd., Israel.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Three authors were Enzymotec employees; one was a consultant.
  conflictOfInterestStatus: declared
  disclosureUrl: https://bmcneurol.biomedcentral.com/articles/10.1186/1471-2377-11-79
- id: S12
  title: "The effect of soybean-derived phosphatidylserine on cognitive performance in elderly with subjective memory complaints: a pilot study"
  authors: Yael Richter; Yael Herzog; Yael Lifshitz; Rami Hayun; Sigalit Zchut
  year: 2013
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3665496/
  kind: Open-label pilot study
  insight: 30 older adults received 300 mg/day soy PS for 12 weeks; several cognitive measures improved.
  limitation: No placebo group, small sample, and all authors were employed by Enzymotec.
  funding: Not clearly stated; product and investigators were company-affiliated.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: All listed authors were Enzymotec employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3665496/
- id: S13
  title: "Phosphatidylserine in the brain: metabolism and function"
  authors: H. Y. Kim; B. X. Huang; A. A. Spector
  year: 2014
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4258547/
  kind: Mechanistic review
  insight: Explains endogenous PS metabolism, membrane functions, and unresolved brain-delivery questions.
  limitation: Mechanistic review; does not establish supplement efficacy.
  funding: Not reported.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported.
  conflictOfInterestStatus: not-assessed
- id: S14
  title: "GRAS Notice 636: Phosphatidylserine derived from sunflower lecithin"
  authors: U.S. Food and Drug Administration
  year: 2016
  url: https://www.fda.gov/files/food/published/GRAS-Notice-000636--Phosphatidylserine-derived-from-sunflower.pdf
  kind: Regulatory safety dossier
  insight: Reviews human safety data across bovine, soy, marine, and sunflower-related PS evidence.
  limitation: Industry-submitted safety dossier; GRAS status is not efficacy evidence.
  funding: Notifier-sponsored regulatory submission.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Notifier interests are inherent to the submission.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.fda.gov/files/food/published/GRAS-Notice-000636--Phosphatidylserine-derived-from-sunflower.pdf
- id: S15
  title: Food Labeling Guide
  authors: U.S. Food and Drug Administration
  year: 2013
  url: https://www.fda.gov/media/81606/download
  kind: Regulatory labeling guidance
  insight: Documents the qualified soy-PS cognitive-function/dementia claim and required disclaimer.
  limitation: Labeling guidance, not a clinical efficacy review.
  funding: U.S. government agency.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: None stated.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: Phosphatidylserine & Your Brain
  authors: Alzheimer's Drug Discovery Foundation
  year: 2023
  url: https://www.alzdiscovery.org/cognitive-vitality/ratings/phosphatidylserine
  kind: Evidence synthesis
  insight: Rates evidence as modest and difficult to compare because PS chemistry varies across products.
  limitation: Secondary assessment rather than systematic review or primary trial.
  funding: Not stated on the page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated.
  conflictOfInterestStatus: not-assessed
- id: S17
  title: "A soy-based phosphatidylserine/phosphatidic acid complex (PAS) normalizes the stress reactivity of hypothalamus-pituitary-adrenal-axis in chronically stressed male subjects: a randomized, placebo-controlled study"
  authors: D. Hellhammer et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25081826/
  kind: Randomized, placebo-controlled trial
  insight: 400/400 mg/day PS/PA normalized ACTH and cortisol responses in highly chronically stressed men.
  limitation: 75 healthy men, subgroup analysis, composite product, and no significant psychological-stress effect.
  funding: Not reported in the PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the PubMed record.
  conflictOfInterestStatus: not-assessed
- id: S18
  title: "Effects of a food supplement containing phosphatidylserine on cognitive function in Chinese older adults with mild cognitive impairment: A randomized double-blind, placebo-controlled trial"
  authors: Huilian Duan; Ning Xu; Tong Yang; Moyan Wang; Chunlai Zhang; Jiangang Zhao; Zhenshu Li; Yongjie Chen; Jing Yan; Meilin Zhang; Wen Li; Zhongbao Yue; Fei Ma; Ruikun He; Guowei Huang
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/39317299/
  kind: Randomized, double-blind, placebo-controlled trial
  insight: 190 MCI participants; 12-month PS/ALA/ginkgo/vitamin/folate product improved selected cognitive measures.
  limitation: PS was one component of a multinutrient product; no isolated-PS inference.
  funding: Not stated; author affiliations included BYHEALTH Institute of Nutrition & Health.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no conflict of interest.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Qualified soy-PS cognitive-function/dementia labeling claim
  status: FDA guidance requires a qualified claim and disclaimer; labeling is not proof of efficacy.
  sourceUrl: https://www.fda.gov/media/81606/download
  asOf: 2013-01-01
- jurisdiction: United States
  activity: Sunflower-derived phosphatidylserine food ingredient
  status: GRAS notice safety dossier; not an efficacy approval.
  sourceUrl: https://www.fda.gov/files/food/published/GRAS-Notice-000636--Phosphatidylserine-derived-from-sunflower.pdf
  asOf: 2016-01-01
```
