---
slug: lutein
name: lutein
subtitle: Evidence-specific research record.
aliases:
  - lutein
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
  context: Human sources report time-to-peak and accumulation, but not a validated universal terminal half-life for lutein.
  sourceId: S18
  observationId: lutein-pk-1
kinetics:
  onset: Serum lutein rises within days to weeks; exact onset varies by formulation.
  peak: Single-dose serum/plasma peaks were reported around 11–16 hours.
  duration: MPOD changes generally require weeks to months and may persist after serum decline.
  bioavailability: Dietary fat, food matrix and formulation affect micellarization and plasma exposure.
  metabolism: Lutein is transported in lipoproteins and can be converted to meso-zeaxanthin in retinal tissue.
  sourceId: S18
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

Lutein is a dietary xanthophyll concentrated in macular pigment. Oral lutein reliably raises serum lutein and often MPOD, while contrast, glare and photostress findings are endpoint-specific. AMD progression and cognition evidence mainly comes from lutein/zeaxanthin mixtures and remains low-certainty or null.

## Description

Lutein does not provide vitamin-A activity. Human evidence separates lutein-only trials from AREDS2 and other lutein/zeaxanthin combinations; a raised retinal biomarker is not equivalent to better acuity or delayed AMD.

## Evidence note

The most reproducible human response is serum lutein and MPOD increase. Clinical visual effects are smaller and inconsistent, and no established RDA or official UL exists. Commercial funding and formulation differences are retained in the reference metadata.

## Doses

```yaml
- sourceCategory: research
  label: Early-AMD lutein trial
  amount: 10 or 20 mg/day
  quantity: 10
  quantityMax: 20
  unit: mg/day
  ingredient: Lutein
  formulation: Study supplement
  route: oral
  frequency: daily
  duration: 48 weeks
  population: Adults with early AMD
  purpose: Assess serum lutein, MPOD and visual function
  note: Trial exposure; not a universal dose.
  sourceId: S6
- sourceCategory: research
  label: Two-year early-AMD trial
  amount: 10 or 20 mg/day lutein; comparator 10 mg lutein + 10 mg zeaxanthin
  quantity: 10
  quantityMax: 20
  unit: mg/day
  ingredient: Lutein
  formulation: Lutein-only or lutein/zeaxanthin study arms
  route: oral
  frequency: daily
  duration: 2 years
  population: Adults with early AMD
  purpose: Assess serum, MPOD and visual performance
  note: Combination arm is not lutein-only evidence.
  sourceId: S7
- sourceCategory: research
  label: Healthy-adult high-bioaccessibility trial
  amount: 12 mg/day
  quantity: 12
  quantityMax: null
  unit: mg/day
  ingredient: Lutein
  formulation: High-bioaccessibility formulation
  route: oral
  frequency: daily
  duration: 16 weeks
  population: Healthy adults
  purpose: Assess MPOD, contrast and glare sensitivity
  note: Small formulation-specific study.
  sourceId: S9
- sourceCategory: research
  label: AREDS2 carotenoid arm
  amount: 10 mg lutein + 2 mg zeaxanthin/day
  quantity: 10
  quantityMax: null
  unit: mg lutein/day
  ingredient: Lutein
  formulation: AREDS2 antioxidant/mineral background formula
  route: oral
  frequency: daily
  duration: 5 years
  population: 4,203 adults with high-risk AMD
  purpose: Assess progression to advanced AMD
  note: Mixture and background formula; not lutein monotherapy.
  sourceId: S2
- sourceCategory: research
  label: Dietary exposure context
  amount: Approximately 1–2 mg/day
  quantity: 1
  quantityMax: 2
  unit: mg/day
  ingredient: Lutein
  formulation: Usual diet
  route: oral
  frequency: daily
  duration: Ongoing dietary exposure
  population: General adults
  purpose: Describe background intake
  note: Population intake estimate, not an intervention dose.
  sourceId: S10
```

## Pharmacokinetics

```yaml
- sourceId: S18
  id: lutein-pk-1
  analyte: lutein
  route: oral
  formulation: Free or esterified lutein; formulations vary
  population: Human supplementation studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Serum/plasma peaks were reported approximately 11–16 h after single doses; daily 20 mg supplementation reached reported steady state within about 30 days. A universal terminal half-life was not established.
  modelEligible: false
- sourceId: S13
  id: lutein-pk-formulation
  analyte: lutein
  route: oral
  formulation: Water-soluble versus oil suspension
  population: 8 healthy men
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Water-soluble formulation produced approximately twice the plasma and erythrocyte exposure of an oil suspension; no terminal half-life was reported.
  modelEligible: false
```

## Modifiers

```yaml
- label: Baseline MPOD
  effect: Lower baseline often predicts a larger increase
  detail: Low baseline does not guarantee response; nonresponders occur despite increased serum lutein.
  sourceId: S6
  observationId: lutein-pk-1
  factorType: other
  direction: variable
- label: Food and formulation
  effect: Absorption varies
  detail: Dietary fat, particle matrix and water-soluble or beadlet formulation changed exposure in small human PK studies.
  sourceId: S13
  observationId: lutein-pk-formulation
  factorType: other
  direction: variable
- label: Dietary carotenoid status
  effect: Baseline intake may alter incremental response
  detail: Studies in people with low lutein/zeaxanthin intake may not generalize to high-intake populations.
  sourceId: S10
  observationId: lutein-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- sourceId: S9
  id: lutein-effect-mpod
  conceptId: perception
  name: Macular pigment response
  direction: Increased
  evidence: Human research
  description: Lutein-only and mixed-carotenoid trials commonly raise MPOD, but the magnitude depends on baseline status, formulation and measurement method.
  population: Healthy adults and adults with early AMD
  exposure: 10–20 mg/day lutein in study-specific formulations
  instrument: Macular pigment optical-density measurement
  magnitude: Direction generally increased; magnitude varied
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S8
  id: lutein-effect-photostress
  conceptId: perception
  name: Photostress and glare experience
  direction: Variable
  evidence: Human research
  description: A 1-year lutein/zeaxanthin trial improved chromatic contrast and photostress recovery, while glare disability did not significantly improve.
  population: Healthy young adults
  exposure: 10 mg lutein + 2 mg zeaxanthin/day
  instrument: Photostress, glare and chromatic-contrast tests
  magnitude: Endpoint-specific; mixed
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- sourceId: S9
  id: lutein-outcome-mpod
  conceptId: macular-pigment-optical-density
  name: Macular pigment optical density
  direction: Increased
  evidence: Human research
  description: A 12 mg/day lutein formulation increased MPOD in a 16-week randomized trial.
  population: Healthy adults
  exposure: 12 mg/day lutein for 16 weeks
  instrument: Macular pigment optical-density measurement
  magnitude: Increased versus placebo; exact effect estimate retained in source
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S9
  id: lutein-outcome-contrast
  conceptId: contrast-sensitivity
  name: Contrast sensitivity
  direction: Increased
  evidence: Human research
  description: The same small trial reported improved contrast sensitivity; the result is formulation-specific and not evidence of disease modification.
  population: Healthy adults
  exposure: 12 mg/day lutein for 16 weeks
  instrument: Contrast-sensitivity testing
  magnitude: Improved versus placebo in the trial
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: S2
  id: lutein-outcome-amd
  conceptId: visual-acuity
  name: Advanced AMD progression
  direction: Variable
  evidence: Human research
  description: AREDS2 did not find an overall significant additional reduction in advanced AMD from adding lutein/zeaxanthin to the original formula; a later follow-up was exploratory and nonrandomized.
  population: 4,203 adults with high-risk AMD
  exposure: 10 mg lutein + 2 mg zeaxanthin/day with AREDS background
  instrument: Clinical AMD progression assessment
  magnitude: Primary overall result null; later exploratory HR 0.91 versus no lutein/zeaxanthin
  reportType: measured-assessment
  conflictingSourceIds:
    - S3
    - S4
- sourceId: S4
  id: lutein-outcome-cognition
  conceptId: cognitive-performance
  name: Cognitive performance
  direction: Variable
  evidence: Human research
  description: Meta-analysis and AREDS2 cognitive trial did not show a meaningful, statistically reliable cognitive benefit from lutein/zeaxanthin supplementation.
  population: Adults in heterogeneous randomized trials and AREDS2
  exposure: Lutein or lutein/zeaxanthin mixtures
  instrument: Domain-specific cognitive tests
  magnitude: Small or non-significant pooled effects
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Macular pigment filtering
  description: Lutein absorbs short-wavelength light and contributes to macular pigment; this may influence glare or photostress, but mechanism does not prove AMD prevention.
  sourceId: S17
- title: Retinal carotenoid metabolism
  description: Lutein and related carotenoids are transported into retinal tissue and lutein can contribute to meso-zeaxanthin formation.
  sourceId: S17
- title: Systemic and neural hypotheses
  description: Antioxidant, anti-inflammatory and membrane effects are biologically plausible, but human cognition trials remain inconsistent.
  sourceId: S11
```

## Cautions

```yaml
- title: MPOD is a surrogate
  description: Raising MPOD does not establish improved acuity, delayed AMD or preserved cognition.
  sourceId: S10
- title: Carotenodermia
  description: Yellow-orange skin discoloration has been reported and is generally benign; it is not vitamin-A toxicity.
  sourceId: S16
- title: High-dose evidence is incomplete
  description: An observed-safe-level estimate around 20 mg/day is not an official UL, and longer-term higher-dose safety is less characterized.
  sourceId: S10
- title: Combination evidence
  description: AREDS2 and many visual trials combine lutein with zeaxanthin or other nutrients; attribution to lutein alone is not valid.
  sourceId: S2
- title: Population limits
  description: Pregnancy, lactation, inherited carotenoid disorders, unusual retinal disease and children remain less studied than healthy adults.
  sourceId: S16
```

## Claims

```yaml
- id: lutein-claim-serum-mpod
  assertion: Lutein raises serum lutein and often MPOD
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:macular-pigment-optical-density
      role: outcome
  context: Lutein-only and mixed-carotenoid human studies repeatedly show biomarker increases.
  sourceIds:
    - S6
    - S9
    - S10
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Biomarker response does not establish clinical disease benefit.
- id: lutein-claim-amd
  assertion: Lutein alone prevents or slows AMD
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:visual-acuity
      role: disease outcome context
  context: Direct lutein-only disease-progression evidence is insufficient; AREDS2 is combination evidence.
  sourceIds:
    - S2
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: High-risk AMD population and background formula prevent clean lutein-monotherapy inference.
- id: lutein-claim-cognition
  assertion: Lutein improves cognition
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: Pooled randomized cognitive effects were small and not statistically significant.
  sourceIds:
    - S11
    - S12
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cognition was often secondary and interventions were heterogeneous.
```

## Interactions

```yaml
- id: interaction-lutein-fat
  name: Dietary fat and food matrix
  otherSlug: null
  summary: Dietary fat, food matrix and formulation alter carotenoid micellarization and serum exposure.
  sourceId: S10
  context: Absorption modifier; clinical importance varies by formulation.
- id: interaction-lutein-carotenoids
  name: Other carotenoids
  otherSlug: null
  summary: Competition or altered absorption among carotenoids has been reported, but direct clinical significance is uncertain.
  sourceId: S17
  context: Human prescription-drug interaction evidence is sparse.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: AREDS/AREDS2 Clinical Trials
  authors: National Eye Institute, National Institutes of Health
  year: 2025
  url: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  kind: government trial summary
  insight: Defines the AREDS2 population, 10 mg lutein plus 2 mg zeaxanthin dose and official AMD interpretation.
  limitation: Secondary government summary rather than a full systematic review.
  funding: National Institutes of Health
  sponsorshipStatus: not-reported
  conflictsOfInterest: Institutional source; personal conflicts not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
- id: S2
  title: "Lutein + Zeaxanthin and Omega-3 Fatty Acids for Age-Related Macular Degeneration: The Age-Related Eye Disease Study 2 (AREDS2) Randomized Clinical Trial"
  authors: AREDS2 Research Group
  year: 2013
  url: https://jamanetwork.com/journals/jama/fullarticle/1684847
  kind: randomized clinical trial
  insight: Tested 10 mg lutein plus 2 mg zeaxanthin in 4,203 people with high-risk AMD; primary overall addition to AREDS was null.
  limitation: Background AREDS formula and high-risk AMD population prevent isolation of lutein monotherapy or healthy supplementation.
  funding: National Eye Institute and collaborating NIH institutes; commercial product support reported.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Publication disclosures and product supply reported; personal conflicts not fully reconstructed.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/1684847
- id: S3
  title: Long-term Outcomes of Adding Lutein/Zeaxanthin and ω-3 Fatty Acids to the AREDS Supplements on Age-Related Macular Degeneration Progression
  authors: Emily Y. Chew; Traci E. Clemons; Elvira Agrón; Amitha Domalpally; Tiarnán D. L. Keenan; Susan Vitale; Claire Weber; Douglas C. Smith; William Christen; AREDS2 Research Group
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9164119/
  kind: epidemiologic follow-up of randomized trial
  insight: Ten-year follow-up found HR 0.91 for lutein/zeaxanthin versus no lutein/zeaxanthin and HR 0.85 versus beta-carotene.
  limitation: Post-trial follow-up was no longer randomized and nearly all participants were offered revised AREDS2 supplements.
  funding: NIH/NEI and other NIH components; Bausch & Lomb supplied follow-up supplements.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: NIH held a royalty-bearing AREDS license to Bausch & Lomb until 2021; other disclosures not fully assessed.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9164119/
- id: S4
  title: Antioxidant vitamin and mineral supplements for slowing the progression of age-related macular degeneration
  authors: Jennifer R. Evans; John G. Lawrenson
  year: 2023
  url: https://www.cochrane.org/evidence/CD000254_do-antioxidant-vitamin-and-mineral-supplements-slow-down-progression-age-related-macular
  kind: systematic review and meta-analysis
  insight: Lutein with or without zeaxanthin showed little or no effect on AMD progression with low-certainty evidence.
  limitation: Most evidence came from AREDS2 participants receiving background supplements; lutein-only evidence was limited.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the retrieved record.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Effects of lutein supplementation on macular pigment optical density and visual acuity in patients with age-related macular degeneration
  authors: Günther Weigert; Semira Kaya; Berthold Pemp; Stefan Sacu; Michael Lasta; René Marcel Werkmeister; Nikolaus Dragostinoff; Christian Simader; Gerhard Garhöfer; Ursula Schmidt-Erfurth; Leopold Schmetterer
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21873668/
  kind: randomized placebo-controlled trial
  insight: Lutein increased MPOD in AMD, but visual-acuity and microperimetry effects were not statistically significant.
  limitation: Six-month surrogate-endpoint study without AMD-progression power.
  funding: Research support, non-U.S. government.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/21873668/
- id: S6
  title: Effect of lutein and zeaxanthin on macular pigment and visual function in patients with early age-related macular degeneration
  authors: Le Ma; Shao-Fang Yan; Yang-Mu Huang; Xin-Rong Lu; Fang Qian; Hong-Lei Pang; Xian-Rong Xu; Zhi-Yong Zou; Peng-Cheng Dong; Xin Xiao; Xun Wang; Ting-Ting Sun; Hong-Liang Dou; Xiao-Ming Lin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22858124/
  kind: randomized double-masked placebo-controlled trial
  insight: Compared 10 mg lutein, 20 mg lutein and 10 mg lutein plus 10 mg zeaxanthin for 48 weeks; MPOD increased and some contrast outcomes improved.
  limitation: Small study with surrogate and visual-function endpoints, not late-AMD progression.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: "22858124"
  doi: 10.1016/j.ophtha.2012.06.014
- id: S7
  title: Effect of supplemental lutein and zeaxanthin on serum, macular pigmentation, and visual performance in patients with early age-related macular degeneration
  authors: Yang-Mu Huang; Hong-Liang Dou; Fei-Fei Huang; Xian-Rong Xu; Zhi-Yong Zou; Xiao-Ming Lin
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25815324/
  kind: randomized double-blind placebo-controlled trial
  insight: Two-year 10 or 20 mg lutein and 10 mg lutein plus 10 mg zeaxanthin increased serum levels and MPOD; acuity and flash-recovery effects were not significant.
  limitation: Small early-AMD trial from one setting with no disease-progression endpoint.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: A double-blind, placebo-controlled study on the effects of lutein and zeaxanthin on photostress recovery, glare disability, and chromatic contrast
  authors: Billy R Hammond, Laura M Fletcher, Franz Roos, Jonas Wittwer, Wolfgang Schalch
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25468896/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: One year of 10 mg lutein plus 2 mg zeaxanthin increased MPOD and improved chromatic contrast and photostress recovery.
  limitation: Healthy young adults, small-to-moderate sample and no disease outcome.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: "25468896"
  doi: 10.1167/iovs.14-15573
- id: S9
  title: Clinical Effects of Dietary Supplementation of Lutein with High Bio-Accessibility on Macular Pigment Optical Density and Contrast Sensitivity
  authors: Naomichi Machida; Marie Kosehira; Nobuyoshi Kitaichi
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32998324/
  kind: randomized placebo-controlled trial
  insight: Twelve mg/day lutein alone for 16 weeks increased MPOD, contrast sensitivity, glare sensitivity and serum lutein in healthy adults.
  limitation: Small formulation-specific study; first author was affiliated with Omnica.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial affiliation disclosed through author affiliation.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/32998324/
- id: S10
  title: "The Effect of Lutein/Zeaxanthin Intake on Human Macular Pigment Optical Density: A Systematic Review and Meta-Analysis"
  authors: Lisa M. Wilson; Saraniya Tharmarajah; Yuanxi Jia; Richard D. Semba; Debra A. Schaumberg; Karen A. Robinson
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8634499/
  kind: systematic review and meta-analysis
  insight: Among 46 studies and 3,189 healthy adults, doses above 10 mg/day more consistently increased MPOD; lower-dose and dietary effects were less clear.
  limitation: Mixed lutein/zeaxanthin interventions, heterogeneous methods and limited dose coverage.
  funding: Institute for the Advancement of Food and Nutrition Sciences through an ILSI North America Bioactive Committee grant.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors reported no conflicts; funding organization is industry-supported.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8634499/
- id: S11
  title: "Dietary Lutein and Cognitive Function in Adults: A Meta-Analysis of Randomized Controlled Trials"
  authors: Jeffrey Li; El-Sayed M. Abdel-Aal
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8510423/
  kind: meta-analysis of randomized trials
  insight: Effects on complex attention, executive function and memory were small and not statistically significant.
  limitation: Small heterogeneous evidence base with mixtures, foods and supplements; cognition was generally secondary.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S12
  title: "Effect of Omega-3 Fatty Acids, Lutein/Zeaxanthin, or Other Nutrient Supplementation on Cognitive Function: The AREDS2 Randomized Clinical Trial"
  authors: Emily Y. Chew; Traci E. Clemons; Elvira Agrón; Lenore J. Launer; Francine Grodstein; Paul S. Bernstein; AREDS2 Research Group
  year: 2015
  url: https://jamanetwork.com/journals/jama/fullarticle/2429713
  kind: randomized clinical trial
  insight: Five-year 10 mg lutein plus 2 mg zeaxanthin did not produce a meaningful cognitive benefit.
  limitation: Older high-risk-AMD population and background nutrient formula; cognition was not the primary trial purpose.
  funding: National Eye Institute and collaborating NIH institutes; commercial product support reported.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/2429713
- id: S13
  title: Randomized controlled trial of a water-soluble formulation of lutein in humans
  authors: Junya Kobayashi; Etsuko Tominaga; Makoto Ozeki; Tsutomu Okubo; Kiyotaka Nakagawa; Teruo Miyazawa
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31382835/
  kind: randomized crossover pharmacokinetic trial
  insight: In eight healthy men, a water-soluble formulation produced approximately twice the plasma and erythrocyte exposure of an oil suspension.
  limitation: Very small, short-term and formulation-specific study.
  funding: Company-affiliated Taiyo Kagaku investigators; exact funding not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S14
  title: Effects of formulation on the bioavailability of lutein and zeaxanthin
  authors: Malkanthi Evans; Mareike Beck; James Elliott; Stephane Etheve; Richard Roberts; Wolfgang Schalch
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23052623/
  kind: randomized crossover pharmacokinetic trial
  insight: In 48 adults receiving 20 mg lutein, starch-matrix beadlets produced higher exposure than alginate-matrix beadlets.
  limitation: Single-dose comparison of two branded formulations; pharmacokinetics does not establish clinical superiority.
  funding: Company-affiliated KGK Synergize authors; exact funding not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S15
  title: Comparison of macular pigment and serum lutein concentration changes between free lutein and lutein esters supplements in Japanese subjects
  authors: Hiroko Yoshizako; Katunori Hara; Yasuyuki Takai; Sachiko Kaidzu; Akira Obana; Akihiro Ohira
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27273910/
  kind: randomized comparative trial
  insight: Free lutein and esterified lutein produced similar serum and MPOD responses in a small three-month study.
  limitation: Only 20 healthy Japanese adults and no major visual or disease endpoint.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: An Evidence-Based Systematic Review of Lutein by the Natural Standard Research Collaboration
  authors: Catherine Ulbricht; Natural Standard Research Collaboration
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25616151/
  kind: evidence-based systematic review
  insight: Reviews lutein dosing, pharmacokinetics, adverse effects, interactions and clinical evidence; supports generally favorable tolerability but incomplete high-dose evidence.
  limitation: Heterogeneous evidence and expert synthesis rather than a definitive long-term safety trial.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S17
  title: Lutein and Zeaxanthin Isomers in Eye Health and Disease
  authors: Paul S. Bernstein; Bin Li; Pramod P. Vachali; Anuradha Gorusupudi; Rajashri Shyam; Brian S. Henriksen; John M. Nolan
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5611842/
  kind: narrative mechanistic and clinical review
  insight: Reviews macular pigment biology, absorption, transport, metabolism, visual performance and evidence gaps.
  limitation: Narrative review; many clinical findings involve mixtures rather than lutein alone.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S18
  title: Lutein from Tagetes erecta L.
  authors: Joint FAO/WHO Expert Committee on Food Additives
  year: 2005
  url: https://www.inchem.org/documents/jecfa/jecmono/v54je01.pdf
  kind: international food-safety evaluation
  insight: Summarizes human timing data, including approximately 11–16-hour post-dose peaks and steady-state observations.
  limitation: Regulatory safety review with older studies; not a clinical efficacy review or official human UL.
  funding: World Health Organization and Food and Agriculture Organization
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.inchem.org/documents/jecfa/jecmono/v54je01.pdf
- id: S19
  title: Effects of Lutein Supplementation on Macular Pigment Optical Density and Visual Acuity in Patients With Age-related Macular Degeneration
  authors: ClinicalTrials.gov; National Library of Medicine
  year: 2009
  url: https://clinicaltrials.gov/study/NCT00879671
  kind: clinical trial registry
  insight: Registry record for the LISA lutein-only AMD trial.
  limitation: Registry record rather than a complete results publication.
  funding: Medical University of Vienna
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT00879671
```

## Legal

```yaml
- jurisdiction: General
  activity: Dietary carotenoid use
  status: No official lutein RDA or UL was established in the cited evidence; product and disease claims remain jurisdiction-specific.
  sourceUrl: https://pubmed.ncbi.nlm.nih.gov/25616151/
  asOf: 2026-10-10
```
