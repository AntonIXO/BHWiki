---
slug: zeaxanthin
name: Zeaxanthin
subtitle: A macular xanthophyll carotenoid with mixed standalone human supplementation evidence
aliases:
  - 3R,3'R-zeaxanthin
  - all-trans-zeaxanthin
  - beta,beta-carotene-3,3'-diol
  - zeaxanthol
formula: C40H56O2
molecularWeight: 568.9 g/mol
pubchemCid: 5280899
smiles: CC1=C(C(C[C@@H](C1)O)(C)C)/C=C/C(=C/C=C/C(=C/C=C/C=C(/C=C/C=C(/C=C/C2=C(C[C@H](CC2(C)C)O)C)\C)\C)/C)/C
category: carotenoid
tags: []
accent: "#E7A900"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: Human supplementation studies report serum exposure and 72-hour sampling, but no validated universal terminal half-life for zeaxanthin.
  sourceId: ref-kotagiri-2022
  observationId: zeaxanthin-pk-1
kinetics:
  onset: Serum appearance occurs after oral dosing; exact onset depends on formulation.
  peak: A formulation study sampled serum from 2–72 h; no universal Tmax was adopted here.
  duration: MPOD and retinal outcomes were assessed over months; subjective or clinical duration is not established.
  bioavailability: Oil-based micronized formulation increased serum Cmax and AUC relative to reference.
  metabolism: Zeaxanthin is transported in lipoproteins and deposited in macular pigment; distribution differs from lutein.
  sourceId: ref-kotagiri-2022
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

Standalone zeaxanthin at approximately 8–20 mg/day can raise serum zeaxanthin and sometimes MPOD, but responses are inconsistent and clinical vision or disease benefits are unproven. AREDS2, pediatric eye-strain and food-matrix trials are combination evidence and cannot be assigned to zeaxanthin alone.

## Description

Zeaxanthin, meso-zeaxanthin and lutein are distinct retinal carotenoids. This record separates standalone zeaxanthin from lutein/zeaxanthin mixtures, Lycium food interventions and multi-ingredient supplements.

## Evidence note

Biomarker changes are more reproducible than visual outcomes. The MacTel2 study reported a reversible crystalline-deposit signal at 20 mg/day, and no formal human medication interaction study was found.

## Doses

```yaml
- sourceCategory: research
  label: Zeaxanthin and Visual Function Study
  amount: 8 mg/day
  quantity: 8
  quantityMax: null
  unit: mg/day
  ingredient: Zeaxanthin
  formulation: Study softgel
  route: oral
  frequency: daily
  duration: 1 year
  population: 60 adults with mild-to-moderate atrophic AMD
  purpose: Assess MPOD and visual function
  note: Lutein was an active comparator; no inert placebo.
  sourceId: ref-zvf-2011
- sourceCategory: research
  label: Japanese MPOD trial
  amount: 10 mg/day
  quantity: 10
  quantityMax: null
  unit: mg/day
  ingredient: Zeaxanthin
  formulation: Study supplement
  route: oral
  frequency: daily
  duration: 3 months
  population: 22 healthy Japanese adults with and without high myopia
  purpose: Assess MPOD
  note: Standalone zeaxanthin did not consistently increase MPOD.
  sourceId: ref-tanito-2012
- sourceCategory: research
  label: MacTel2 trial
  amount: 10 or 20 mg/day
  quantity: 10
  quantityMax: 20
  unit: mg/day
  ingredient: Zeaxanthin
  formulation: High-dose zeaxanthin supplement
  route: oral
  frequency: daily
  duration: Up to 24 months
  population: 8 adults with macular telangiectasia type 2
  purpose: Assess retinal pigment and function
  note: One participant developed reversible inner-retinal crystalline deposits at 20 mg/day.
  sourceId: ref-mactel-2017
- sourceCategory: research
  label: LUXEA supplementation
  amount: 10 or 20 mg/day
  quantity: 10
  quantityMax: 20
  unit: mg/day
  ingredient: Zeaxanthin
  formulation: Actilease/OPTISHARP zeaxanthin
  route: oral
  frequency: daily
  duration: 6–12 months
  population: Healthy volunteers
  purpose: Assess retinal pigment accumulation and visual performance
  note: Standalone and combination arms were studied separately.
  sourceId: ref-luxea-2007
- sourceCategory: research
  label: Formulation PK study
  amount: 2 mg zeaxanthin + 10 mg lutein single dose
  quantity: 2
  quantityMax: null
  unit: mg zeaxanthin
  ingredient: Zeaxanthin
  formulation: Micronized oil-based Ocusorb versus reference formulation
  route: oral
  frequency: single dose
  duration: Sampling through 72 hours
  population: 90 healthy men
  purpose: Compare serum bioavailability
  note: Combination dose; OmniActive funded the study and supplied products.
  sourceId: ref-kotagiri-2022
- sourceCategory: research
  label: Pediatric combination trial
  amount: 10 mg lutein + 2 mg zeaxanthin/day
  quantity: 2
  quantityMax: null
  unit: mg zeaxanthin/day
  ingredient: Zeaxanthin
  formulation: Gummy combination
  route: oral
  frequency: daily
  duration: 180 days
  population: 60 children aged 5–12 years
  purpose: Assess MPOD and eye-strain outcomes
  note: Combination evidence; zeaxanthin-specific contribution cannot be isolated.
  sourceId: ref-children-2024
```

## Pharmacokinetics

```yaml
- sourceId: ref-kotagiri-2022
  id: zeaxanthin-pk-1
  analyte: zeaxanthin
  route: oral
  formulation: 2 mg zeaxanthin + 10 mg lutein; two formulations
  population: 90 healthy men
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Micronized formulation produced approximately 1.75-fold higher Cmax and 2.2-fold higher AUC than reference through 72 h; no terminal half-life was established.
  modelEligible: false
```

## Modifiers

```yaml
- label: Formulation
  effect: Serum exposure changes materially
  detail: Micronized oil-based formulation increased Cmax and AUC versus reference in a small commercial PK study.
  sourceId: ref-kotagiri-2022
  observationId: zeaxanthin-pk-1
  factorType: other
  direction: variable
- label: Baseline retinal pigment
  effect: Retinal distribution may limit response
  detail: MacTel2 and Japanese MPOD findings show that baseline retinal geography and myopia status affect measured response.
  sourceId: ref-mactel-2017
  observationId: zeaxanthin-pk-1
  factorType: other
  direction: variable
- label: Combination products
  effect: Attribution is limited
  detail: Lutein, meso-zeaxanthin, Lycium and other nutrients are frequently co-administered.
  sourceId: ref-children-2024
  observationId: zeaxanthin-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- sourceId: ref-zvf-2011
  id: zeaxanthin-effect-visual
  conceptId: perception
  name: Visual performance
  direction: Variable
  evidence: Human research
  description: ZVF reported a numerical high-contrast acuity improvement in the zeaxanthin arm, but lutein was an active comparator and several contrast or glare outcomes were trends rather than conventional significant effects.
  population: Adults with atrophic AMD
  exposure: 8 mg/day zeaxanthin for 1 year
  instrument: Visual acuity, contrast and glare tests
  magnitude: Mixed; no inert-placebo superiority established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- sourceId: ref-luxea-2007
  id: zeaxanthin-outcome-mpod
  conceptId: macular-pigment-optical-density
  name: Macular pigment optical density
  direction: Increased
  evidence: Human research
  description: LUXEA investigators estimated approximately 14% MPOD increase after correction for zeaxanthin deposition at the parafoveal reference location.
  population: Healthy volunteers in LUXEA
  exposure: Standalone zeaxanthin 10–20 mg/day
  instrument: Heterochromatic flicker photometry
  magnitude: Approximately +14% corrected MPOD estimate
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-tanito-2012
- sourceId: ref-tanito-2012
  id: zeaxanthin-outcome-mpod-null
  conceptId: macular-pigment-optical-density
  name: Japanese MPOD response
  direction: Variable
  evidence: Human research
  description: 10 mg/day zeaxanthin did not consistently raise MPOD over 3 months, unlike the lutein arm in non-high-myopic participants.
  population: 22 healthy Japanese adults
  exposure: 10 mg/day zeaxanthin
  instrument: MPOD measurement
  magnitude: No consistent standalone-zeaxanthin increase
  reportType: measured-assessment
  conflictingSourceIds:
    - ref-luxea-2007
- sourceId: ref-zvf-2011
  id: zeaxanthin-outcome-acuity
  conceptId: visual-acuity
  name: High-contrast visual acuity
  direction: Increased
  evidence: Human research
  description: The standalone zeaxanthin arm showed reported acuity improvement, but active lutein control, small sample and multiple outcomes limit causal certainty.
  population: 60 adults with mild-to-moderate atrophic AMD
  exposure: 8 mg/day zeaxanthin for 1 year
  instrument: High-contrast visual acuity
  magnitude: Approximately 1.5-line improvement reported; no inert-placebo comparison
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-mactel-2017
  id: zeaxanthin-outcome-mactel
  conceptId: macular-pigment-spatial-distribution
  name: MacTel2 retinal pigment distribution
  direction: Variable
  evidence: Human research
  description: Zeaxanthin increased pigment in a preserved perifoveal ring but did not restore the central foveal deficit; acuity, contrast and OCT did not improve.
  population: 8 adults with MacTel2
  exposure: 10 or 20 mg/day for up to 24 months
  instrument: MPOD, visual tests and OCT
  magnitude: Perifoveal deposition without disease-modifying functional benefit
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-areds2-2013
  id: zeaxanthin-outcome-areds2
  conceptId: visual-acuity
  name: AREDS2 AMD progression
  direction: Variable
  evidence: Human research
  description: AREDS2 tested 10 mg lutein + 2 mg zeaxanthin within an antioxidant/mineral formula and found no significant overall added protection; findings cannot be assigned to zeaxanthin alone.
  population: 4,203 adults with high-risk AMD
  exposure: AREDS2 combination formula
  instrument: Advanced AMD progression
  magnitude: HR 0.90 (98.7% CI 0.76–1.07; P=0.12)
  reportType: measured-assessment
  conflictingSourceIds: []
- sourceId: ref-kotagiri-2022
  id: zeaxanthin-outcome-pk
  conceptId: macular-pigment-optical-density
  name: Serum bioavailability
  direction: Increased
  evidence: Human research
  description: Micronized oil-based formulation increased serum zeaxanthin exposure compared with a reference formulation; retinal accumulation and clinical benefit were not measured.
  population: 90 healthy men
  exposure: 2 mg zeaxanthin + 10 mg lutein single dose
  instrument: Serum Cmax and AUC
  magnitude: Approximately 1.75-fold higher Cmax and 2.2-fold higher AUC
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Macular pigment deposition
  description: Zeaxanthin accumulates in retinal pigment regions, but spatial distribution depends on baseline retinal anatomy and disease.
  sourceId: ref-luxea-2007
- title: Short-wavelength light filtering
  description: Macular zeaxanthin absorbs short-wavelength light and may influence glare or contrast; this does not prove retinal disease treatment.
  sourceId: ref-hammond-2014
- title: Formulation-dependent exposure
  description: Micronization and oil matrices can raise serum exposure without demonstrating proportionally greater retinal accumulation or benefit.
  sourceId: ref-kotagiri-2022
```

## Cautions

```yaml
- title: Retinal crystalline deposits
  description: One MacTel2 participant developed yellowish hypofluorescent inner-retinal deposits at 20 mg/day; deposits resolved after stopping and did not establish incidence.
  sourceId: ref-mactel-2017
- title: Combination evidence
  description: AREDS2, pediatric gummies and food interventions include lutein or other ingredients and cannot establish zeaxanthin-alone efficacy.
  sourceId: ref-areds2-2013
- title: Pregnancy and lactation
  description: Available pregnancy evidence is combination-only and did not establish lactation transfer or long-term postpartum safety.
  sourceId: ref-mpgd-registry
- title: Organ impairment
  description: No dedicated standalone zeaxanthin study in significant renal or hepatic impairment was identified.
  sourceId: ref-kotagiri-2022
- title: Commercial sponsorship
  description: ZVF, LUXEA and formulation studies include industry sponsors or product suppliers; funding and COI remain relevant to interpretation.
  sourceId: ref-zvf-registry
```

## Claims

```yaml
- id: zeaxanthin-claim-mpod
  assertion: Standalone zeaxanthin can raise MPOD
  relation: evidence-boundary
  participants:
    - entityId: substance:zeaxanthin
      role: intervention
    - entityId: tag:macular-pigment-optical-density
      role: outcome
  context: Some studies show increased MPOD, while another randomized Japanese study was null.
  sourceIds:
    - ref-luxea-2007
    - ref-tanito-2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Response is inconsistent and MPOD is a surrogate.
- id: zeaxanthin-claim-amd
  assertion: Zeaxanthin prevents or treats AMD
  relation: evidence-boundary
  participants:
    - entityId: substance:zeaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: No robust standalone trial establishes disease modification; AREDS2 is a combination intervention.
  sourceIds:
    - ref-areds2-2013
    - ref-zvf-2011
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small active-comparator studies and mixture evidence cannot establish monotherapy.
- id: zeaxanthin-claim-cognition
  assertion: Zeaxanthin is a nootropic
  relation: evidence-boundary
  participants:
    - entityId: substance:zeaxanthin
      role: intervention
    - entityId: tag:attention
      role: reported-outcome-context
  context: No published standalone randomized efficacy trial establishing cognitive benefit was located.
  sourceIds:
    - ref-children-2024
    - ref-teen-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Positive cognitive findings come from combination products.
```

## Interactions

```yaml
- id: interaction-zeaxanthin-drugs
  name: Prescription medicines
  otherSlug: null
  summary: No controlled published human trial established a clinically important zeaxanthin–medication interaction.
  sourceId: ref-kotagiri-2022
  context: Interaction status not assessed.
- id: interaction-zeaxanthin-carotenoids
  name: Lutein and other carotenoids
  otherSlug: null
  summary: Co-administered lutein, meso-zeaxanthin and food matrices can confound attribution and may alter absorption.
  sourceId: ref-luxea-2007
  context: Formulation and mixture dependent.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref-pubchem-zeaxanthin
  title: Zeaxanthin
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5280899
  kind: authoritative chemical database
  insight: Establishes zeaxanthin identity as PubChem CID 5280899, formula C40H56O2, molecular weight 568.9 g/mol, stereochemical structure and canonical SMILES.
  limitation: Chemical database record; not clinical efficacy or safety evidence.
  funding: Not assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed
  conflictOfInterestStatus: not-assessed
- id: ref-luxea-2007
  title: Xanthophyll accumulation in the human retina during supplementation with lutein or zeaxanthin - the LUXEA (LUtein Xanthophyll Eye Accumulation) study
  authors: Wolfgang Schalch, William Cohn, Felix M Barker, Wolfgang Köpcke, John Mellerio, Alan C Bird, Anthony G Robson, Fred F Fitzke, Frederik J G M van Kuijk
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17084803/
  kind: randomized controlled human supplementation study
  insight: Using monthly heterochromatic flicker photometry and plasma HPLC, zeaxanthin alone produced similar pigment accumulation at foveal and parafoveal locations; after correction for reference-location accumulation, the reported MPOD increase was approximately 14%.
  limitation: Spatial accumulation of zeaxanthin confounded the conventional differential HFP calculation; the accessible abstract does not expose complete arm-level baseline characteristics or adverse-event tables.
  pmid: "17084803"
  doi: 10.1016/j.abb.2006.09.032
  funding: Not assessed from an inspected publication funding declaration; two authors had DSM Nutritional Products affiliation, which is not itself coded as proof of study sponsorship.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; an explicit publication conflict declaration was not available in the inspected abstract-level source.
  conflictOfInterestStatus: not-assessed
- id: ref-kvansakul-2006
  title: Supplementation with the carotenoids lutein or zeaxanthin improves human visual performance
  authors: Jessica Kvansakul, Marisa Rodriguez-Carmona, David F Edgar, Felix M Barker, Wolfgang Köpcke, Wolfgang Schalch, John L Barbur
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16792735/
  kind: controlled human supplementation study
  insight: In 34 subjects from the carotenoid supplementation program, high-mesopic contrast-acuity thresholds tended to improve with supplementation, but the clearly significant result was reported for lutein rather than standalone zeaxanthin.
  limitation: Small subgroup analysis; outcome pattern does not establish an independent significant zeaxanthin visual-performance effect.
  pmid: "16792735"
  doi: 10.1111/j.1475-1313.2006.00387.x
  funding: Not assessed from an inspected funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; the author list included a DSM Nutritional Products employee, but affiliation alone is not treated as a declared conflict.
  conflictOfInterestStatus: not-assessed
- id: ref-rodriguez-2006
  title: The effects of supplementation with lutein and/or zeaxanthin on human macular pigment density and colour vision
  authors: Marisa Rodriguez-Carmona, Jessica Kvansakul, J Alister Harlow, Wolfgang Köpcke, Wolfgang Schalch, John L Barbur
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16460314/
  kind: controlled human clinical trial
  insight: In 24 normal trichromats, supplementation increased macular pigment but yellow-blue discrimination remained unaffected; red-green discrimination showed only a tendency toward improvement.
  limitation: Small study and mixed lutein/zeaxanthin exposure conditions; not a clean standalone-zeaxanthin efficacy estimate.
  pmid: "16460314"
  doi: 10.1111/j.1475-1313.2006.00386.x
  funding: Not assessed from an inspected publication funding statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-zvf-2011
  title: "Randomized, double-blind, placebo-controlled study of zeaxanthin and visual function in patients with atrophic age-related macular degeneration: the Zeaxanthin and Visual Function Study (ZVF) FDA IND #78, 973"
  authors: Stuart P Richer, William Stiles, Kelly Graham-Hoffman, Marc Levin, Dennis Ruskin, James Wrobel, Dong-Wouk Park, Carla Thomas
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22027699/
  kind: randomized double-masked active-controlled clinical trial
  insight: Sixty mostly male AMD patients were randomized to 8 mg zeaxanthin, zeaxanthin plus lutein, or lutein. MPOD rose across all groups without a between-group difference; the zeaxanthin arm improved high-contrast acuity by 1.5 lines, with borderline shape/field results, while lutein performed better on low-contrast acuity, CSF and glare recovery.
  limitation: The 'faux placebo' was active lutein rather than inert placebo; small and overwhelmingly male cohort; several reported zeaxanthin findings were exploratory or borderline.
  pmid: "22027699"
  doi: 10.1016/j.optm.2011.08.008
  funding: Supported by the Captain James A. Lovell Federal Health Care Facility and Department of Veterans Affairs Research Service/CARES; Chrysantis, Inc. was identified as the primary ZVF granting sponsor, with multiple companies providing instruments or other support.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: An explicit publication COI declaration was not established from the inspected sources.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://ohsu.elsevierpure.com/en/publications/randomized-double-blind-placebo-controlled-study-of-zeaxanthin-an/
- id: ref-zvf-registry
  title: The Zeaxanthin and Visual Function Study
  authors: ClinicalTrials.gov; Chrysantis, Inc.
  year: 2012
  url: https://clinicaltrials.gov/study/NCT00564902
  kind: clinical trial registry
  insight: Registry confirms NCT00564902, randomized double masking, 60 actual participants, 8 mg/day standalone 3R,3'R-zeaxanthin, 8 mg zeaxanthin plus 8 mg lutein, and 9 mg lutein active control, with detailed MPOD, acuity, glare, CSF, color and kinetic-field methods.
  limitation: Sponsor-submitted registry data; registry presence and posted endpoints do not independently establish efficacy.
  funding: Lead sponsor Chrysantis, Inc.; collaborators Kowa Company, Ltd. and Image Technologies Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Registry does not constitute a journal conflict-of-interest declaration.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT00564902
- id: ref-tanito-2012
  title: "Macular pigment density changes in Japanese individuals supplemented with lutein or zeaxanthin: quantification via resonance Raman spectrophotometry and autofluorescence imaging"
  authors: Masaki Tanito, Akira Obana, Yuko Gohto, Shigetoshi Okazaki, Werner Gellermann, Akihiro Ohira
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22699751/
  kind: randomized active-comparator clinical trial
  insight: Twenty-two healthy Japanese volunteers received 10 mg/day lutein or zeaxanthin for up to three months. Zeaxanthin-group MPOD measured by resonance Raman spectroscopy remained unchanged, while lutein produced >20% MPOD increases at months 2 and 3.
  limitation: Small active-comparator study, only three months long, with no inert placebo.
  pmid: "22699751"
  doi: 10.1007/s10384-012-0157-0
  funding: Not assessed because the inspected accessible sources did not expose a funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed because an explicit disclosure statement was not available in the inspected accessible source.
  conflictOfInterestStatus: not-assessed
- id: ref-mactel-2017
  title: MACULAR PIGMENT DISTRIBUTION RESPONSES TO HIGH-DOSE ZEAXANTHIN SUPPLEMENTATION IN PATIENTS WITH MACULAR TELANGIECTASIA TYPE 2
  authors: Rene Y Choi, Aruna Gorusupudi, Kimberley Wegner, Mohsen Sharifzadeh, Werner Gellermann, Paul S Bernstein
  year: 2017
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5503818/
  kind: randomized open-label interventional trial
  insight: Eight MacTel patients randomized to 10 or 20 mg/day zeaxanthin increased pigment in the residual perifoveal ring but not the depleted fovea, with no objective VA, contrast-sensitivity or OCT benefit. One 20-mg participant developed reversible crystalline maculopathy.
  limitation: Extremely small sample, no placebo control and progressive underlying disease; insufficient for incidence estimates or robust efficacy statistics.
  pmid: "28079755"
  doi: 10.1097/IAE.0000000000001450
  funding: Research to Prevent Blindness, Lowy Medical Research Institute, NIH grants EY11600 and EY14800; zeaxanthin supplements supplied by ZeaVision, LLC.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: The authors explicitly reported no proprietary conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5503818/
- id: ref-ma-2012
  title: Effect of lutein and zeaxanthin on macular pigment and visual function in patients with early age-related macular degeneration
  authors: Le Ma; Shao-Fang Yan; Yang-Mu Huang; Xin-Rong Lu; Fang Qian; Hong-Lei Pang; Xian-Rong Xu; Zhi-Yong Zou; Peng-Cheng Dong; Xin Xiao; Xun Wang; Ting-Ting Sun; Hong-Liang Dou; Xiao-Ming Lin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22858124/
  kind: randomized double-masked placebo-controlled trial
  insight: In 108 people with early AMD, 10 mg lutein plus 10 mg zeaxanthin increased MPOD by 0.058±0.027 density unit over 48 weeks; visual-function relationships were also analyzed.
  limitation: Combination arm cannot isolate zeaxanthin; the strongest contrast-sensitivity between-group result in the abstract favored 20 mg lutein.
  pmid: "22858124"
  doi: 10.1016/j.ophtha.2012.06.014
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-ma-mferg-2012
  title: "Improvement of retinal function in early age-related macular degeneration after lutein and zeaxanthin supplementation: a randomized, double-masked, placebo-controlled trial"
  authors: Le Ma, Hong-Liang Dou, Yang-Mu Huang, Xin-Rong Lu, Xian-Rong Xu, Fang Qian, Zhi-Yong Zou, Hong-Lei Pang, Peng-Cheng Dong, Xin Xiao, Xun Wang, Ting-Ting Sun, Xiao-Ming Lin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22835510/
  kind: randomized double-masked placebo-controlled clinical trial
  insight: At 48 weeks the lutein-plus-zeaxanthin arm showed a significant increase in central ring-1 mfERG N1P1 response density; peripheral responses and P1 latencies did not consistently change.
  limitation: Combination treatment cannot identify a zeaxanthin-specific electrophysiologic effect.
  pmid: "22835510"
  doi: 10.1016/j.ajo.2012.04.014
  funding: Not assessed from an inspected funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-hammond-2014
  title: A double-blind, placebo-controlled study on the effects of lutein and zeaxanthin on photostress recovery, glare disability, and chromatic contrast
  authors: Billy R Hammond, Laura M Fletcher, Franz Roos, Jonas Wittwer, Wolfgang Schalch
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25468896/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Ten mg lutein plus 2 mg zeaxanthin daily for one year increased MPOD and improved photostress recovery and chromatic contrast versus placebo; glare disability did not significantly improve.
  limitation: No standalone-zeaxanthin arm. Publication reports 115 recruited participants, while the later ClinicalTrials.gov record lists 109 actual enrollment.
  pmid: "25468896"
  doi: 10.1167/iovs.14-15573
  funding: University of Georgia was lead sponsor and DSM-firmenich Switzerland AG is listed as collaborator in the registry.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: An explicit publication conflict declaration was not established from the inspected sources.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT00909090
- id: ref-mpgd-registry
  title: Macular Pigment and Glare Disability
  authors: ClinicalTrials.gov; University of Georgia
  year: 2020
  url: https://clinicaltrials.gov/study/NCT00909090
  kind: clinical trial registry
  insight: Registry specifies the 10 mg FloraGLO lutein plus 2 mg OptiSharp zeaxanthin intervention, placebo control and MPOD, glare-disability, photostress-recovery and heterochromatic-contrast endpoints.
  limitation: Sponsor-submitted registry data; not an independent efficacy assessment.
  funding: University of Georgia lead sponsor; DSM-firmenich Switzerland AG collaborator.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Not assessed by the registry.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT00909090
- id: ref-zhang-2022
  title: Macular pigment optical density responses to different levels of zeaxanthin in patients with high myopia
  authors: Yue Zhang, Jie Hao, Kai Cao, Yue Qi, Ningli Wang, Song Han
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35044504/
  kind: randomized controlled clinical trial
  insight: Fifty-four high-myopia participants were randomized among Lycium barbarum arms providing 10 or 20 mg zeaxanthin plus small lutein doses, lutein controls and blank control. The high-dose Lycium comparison was significant for MPOD; the low-dose comparison was not.
  limitation: Zeaxanthin was delivered in whole Lycium barbarum with lutein and other food constituents, so this is not purified standalone-zeaxanthin evidence.
  pmid: "35044504"
  doi: 10.1007/s00417-021-05532-2
  funding: Not assessed from an inspected publication funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: ref-kotagiri-2022
  title: Superior Bioavailability of a Novel Lutein and Zeaxanthin Formulation in Healthy Human Subjects
  authors: Srinivasa Rao Kotagiri, Abhijeet Morde, Deshanie Rai, Kalmanoor Babji, Mohan Lal, Muralidhara Padigaru, Chirag Khatri
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9253220/
  kind: randomized double-blind comparative single-dose bioavailability study
  insight: Ninety adults received 10 mg lutein plus 2 mg zeaxanthin in test or reference formulations. The test formulation produced approximately 1.8-fold higher zeaxanthin Cmax and 2.2-fold higher AUC0-72, demonstrating formulation-dependent exposure.
  limitation: Co-formulated lutein/zeaxanthin single-dose pharmacokinetic study; does not establish a terminal zeaxanthin half-life or clinical visual efficacy.
  pmid: "35585428"
  doi: 10.1007/s40123-022-00522-x
  funding: Not assessed from the inspected disclosure section.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected disclosure section.
  conflictOfInterestStatus: not-assessed
- id: ref-children-2024
  title: "Lutein and Zeaxanthin Supplementation Improves Dynamic Visual and Cognitive Performance in Children: A Randomized, Double-Blind, Parallel, Placebo-Controlled Study"
  authors: Rajesh Parekh, Billy R Hammond, Divya Chandradhara
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38363462/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Sixty children received 10 mg lutein plus 2 mg zeaxanthin or placebo for 180 days; MPOD increased significantly versus placebo from day 42 and no safety concern was reported.
  limitation: Combination intervention; cannot attribute effects to zeaxanthin alone.
  pmid: "38363462"
  doi: 10.1007/s12325-024-02785-1
  funding: Not assessed from an inspected disclosure statement.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected disclosure statement.
  conflictOfInterestStatus: not-assessed
- id: ref-teen-2026
  title: Supplementation with lutein and zeaxanthin increases macular pigment optical density and cognitive performance in healthy teenagers in a randomized, double-blind, placebo-controlled trial
  authors: Adrian L Lopresti, Stephen J Smith
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42413424/
  kind: randomized double-blind placebo-controlled clinical trial
  insight: Eighty-two teenagers received 10 mg lutein plus 2 mg zeaxanthin or sunflower-oil placebo for six months; MPOD increased more in both eyes in the active group, while several other cognitive/self-report endpoints were null.
  limitation: Combination intervention and recent publication without inspected full-text funding/COI declarations.
  pmid: "42413424"
  doi: 10.1016/j.nutres.2026.06.005
  funding: Not assessed because the full disclosure statement was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed because the full disclosure statement was not inspected.
  conflictOfInterestStatus: not-assessed
- id: ref-areds2-2013
  title: "Lutein + zeaxanthin and omega-3 fatty acids for age-related macular degeneration: the Age-Related Eye Disease Study 2 (AREDS2) randomized clinical trial"
  authors: Age-Related Eye Disease Study 2 Research Group
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23644932/
  kind: multicenter randomized double-masked placebo-controlled phase 3 trial
  insight: "Among 4203 high-risk AMD participants, adding 10 mg lutein plus 2 mg zeaxanthin to the AREDS background did not significantly reduce advanced AMD in the primary comparison: HR 0.90, 98.7% CI 0.76–1.07, P=0.12."
  limitation: "Not standalone zeaxanthin: lutein and zeaxanthin were combined and participants generally also received the AREDS antioxidant/zinc formula. Secondary substitutions and subgroup analyses answer different questions from standalone efficacy."
  pmid: "23644932"
  doi: 10.1001/jama.2013.4997
  funding: Not assessed from an inspected funding declaration for this record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected disclosure statement for this record.
  conflictOfInterestStatus: not-assessed
- id: ref-fda-gras-639
  title: Agency Response Letter GRAS Notice No. GRN 000639
  authors: U.S. Food and Drug Administration
  year: 2016
  url: https://www.fda.gov/food/gras-notice-inventory/agency-response-letter-gras-notice-no-grn-000639
  kind: official regulatory food-ingredient record
  insight: FDA stated that it had no questions regarding Kemin's conclusion that its specified zeaxanthin ingredient was GRAS under the intended food-use conditions, while explicitly noting that FDA had not made its own GRAS determination.
  limitation: GRAS response concerns specified food-ingredient uses and is not drug approval, disease-treatment approval, or proof that every zeaxanthin supplement/formulation is equivalent.
  funding: Not applicable / not assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable / not assessed
  conflictOfInterestStatus: not-assessed
- id: ref-fda-gras-588
  title: Agency Response Letter GRAS Notice No. GRN 000588
  authors: U.S. Food and Drug Administration
  year: 2016
  url: https://www.fda.gov/food/gras-notice-inventory/agency-response-letter-gras-notice-no-grn-000588
  kind: official regulatory food-ingredient record
  insight: FDA responded without questions to OmniActive's GRAS conclusion for specified paprika-derived zeaxanthin food uses at stated serving levels.
  limitation: Scoped to the notified ingredient and intended food uses; not an approval of therapeutic claims or all supplement doses.
  funding: Not applicable / not assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable / not assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: European Union
  activity: Zeaxanthin novel food
  status: EU authorization specifies a food-use condition and is not therapeutic approval.
  sourceUrl: https://eur-lex.europa.eu/eli/reg_impl/2018/1132/oj
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Zeaxanthin food ingredient
  status: FDA GRAS no-questions records apply to specified food uses; they are not approval for AMD, cognition or myopia treatment.
  sourceUrl: https://www.fda.gov/food/gras-notice-inventory/agency-response-letter-gras-notice-no-grn-000639
  asOf: 2026-10-10
```
