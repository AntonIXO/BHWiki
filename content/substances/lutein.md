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
  context: The returned report does not establish a validated universal human terminal half-life.
  sourceId: S1
  observationId: lutein-pk-1
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: S1
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

Lutein is a non–provitamin A xanthophyll carotenoid concentrated in the retina, especially in macular pigment. The most reproducible human effect of supplementation is increased serum lutein and macular pigment optical density (MPOD). Lutein-only trials support MPOD augmentation; effects on visual performance are smaller, endpoint-specific, and inconsistent. (S10, S17)

Age-related macular degeneration (AMD) outcome evidence is mainly for **lutein 10 mg plus zeaxanthin 2 mg** within the broader AREDS2 antioxidant/mineral formula, not lutein alone. The original AREDS2 primary analysis found no overall additional benefit from adding the lutein/zeaxanthin mixture, whereas a later exploratory 10-year follow-up found a modest association with lower progression compared with beta-carotene. Cochrane judged lutein/zeaxanthin-alone evidence as low certainty and compatible with little or no effect. (S1–S4)

Cognition is secondary evidence: pooled randomized-trial effects were not statistically significant, and the large AREDS2 cognitive analysis did not show benefit from lutein/zeaxanthin. Lutein has no established deficiency syndrome, recommended dietary allowance, or official tolerable upper intake level. (S10–S12, S16)

- evidence_level: strongest
  finding: increased serum lutein and MPOD
  scope: lutein alone or lutein-containing mixtures
  sourceId: [S6, S7, S9, S10]
- evidence_level: mixed
  finding: contrast sensitivity, glare, and photostress outcomes
  scope: mostly small trials; both lutein-only and mixtures
  sourceId: [S5, S6, S8, S9]
- evidence_level: uncertain
  finding: slowing AMD progression
  scope: chiefly lutein/zeaxanthin within AREDS2, not lutein monotherapy
  sourceId: [S1, S3, S4]
- evidence_level: insufficient
  finding: cognition, primary AMD prevention, or general visual-acuity enhancement
  sourceId: [S1, S10–S12]

## Description

Lutein is a dietary xanthophyll found in leafy green vegetables, egg yolks, corn, squash, avocado, and other plant foods. Humans do not synthesize it. Unlike beta-carotene, lutein does not provide vitamin A activity. (S10, S17)

The human macular pigment consists primarily of lutein, zeaxanthin, and meso-zeaxanthin. Lutein is relatively more abundant in peripheral macular regions, while zeaxanthin and meso-zeaxanthin are relatively enriched toward the foveal center. Many supplements and food databases report lutein together with zeaxanthin, which complicates lutein-specific interpretation. (S10, S17)

- identity: xanthophyll carotenoid
  vitamin_A_activity: no
  sourceId: [S10, S17]
- major_food_sources:
    - leafy_green_vegetables
    - egg_yolk
    - corn
    - squash
    - avocado
  sourceId: [S10, S17]
- retinal_context: component of macular pigment
  related_carotenoids:
    - zeaxanthin
    - meso-zeaxanthin
  sourceId: [S10, S17]
- evidence_boundary: lutein-only results should not be attributed automatically to lutein/zeaxanthin mixtures, or vice versa
  sourceId: [S2, S4, S10]

## Evidence note

MPOD is a biological and optical surrogate, not the same as preserved visual acuity or delayed AMD. A treatment can raise MPOD without producing a clinically important change in standard acuity or disease progression. (S5, S6, S10)

AREDS2 enrolled 4,203 adults aged approximately 50–85 years with bilateral large drusen or large drusen in one eye and advanced AMD in the fellow eye. The tested carotenoid intervention was lutein 10 mg plus zeaxanthin 2 mg daily, usually alongside vitamins C and E, zinc, and copper. Healthy adults and people without AMD were not the target population. (S1, S2)

Commercial involvement is uneven. AREDS2 was NIH-led but used supplied commercial supplements; the healthy-eye MPOD review was funded through IAFNS/ILSI North America; a lutein-only visual trial included an Omnica-affiliated author; and formulation studies involved company-affiliated investigators or branded ingredients. These facts do not establish bias, but they make independent replication and formulation-specific interpretation relevant. (S3, S9, S10, S13, S14)

- endpoint_hierarchy:
    - serum_lutein
    - MPOD
    - contrast_or_glare_metrics
    - standard_visual_acuity
    - AMD_progression
    - cognition
  interpretation: evidence generally becomes less direct and less consistent down the list
  sourceId: [S5, S6, S10]
- lutein_specific_evidence:
    strongest: serum_lutein_and_MPOD
    moderate_or_mixed: contrast_sensitivity_and_glare
    limited: cognition_and_long_term_disease_outcomes
  sourceId: [S6, S7, S9, S10, S11]
- mixture_evidence:
    principal_AMD_trial: AREDS2
    intervention: lutein_10_mg_plus_zeaxanthin_2_mg
    confounder: background_AREDS_antioxidant_mineral_formula
  sourceId: [S1, S2, S3]
- commercial_funding_signal:
    present_in_some_sources: true
    interpretation: warrants transparency, not automatic dismissal
    sourceId: [S3, S9, S10, S13, S14]

**Full Deep Research detail retained from the returned report:**

**Doses:**

Studied doses vary by endpoint and formulation. In healthy-eye MPOD research, pooled evidence found clearer increases above 10 mg/day of combined lutein/zeaxanthin, while effects below 5 mg/day and from ordinary dietary intake were less certain; the review found no adequate dose-response evidence for the 5-to-less-than-10 mg/day range. (S10)

Lutein-only AMD trials used 10 or 20 mg/day, while a healthy-adult trial used 12 mg/day. The AREDS2 disease-outcome dose was 10 mg lutein plus 2 mg zeaxanthin daily for five years. These are trial contexts, not an established universal dose. (S2, S6, S7, S9)

- context: average_US_dietary_intake
  dose: approximately_1_to_2_mg_per_day_lutein_or_lutein_zeaxanthin
  population: general_adults
  sourceId: S10
- context: early_AMD_lutein_only
  dose: 10_or_20_mg_per_day
  duration: 48_weeks
  endpoint: MPOD_and_visual_function
  sourceId: S6
- context: early_AMD_lutein_only_or_lutein_plus_zeaxanthin
  dose: 10_mg_lutein; 20_mg_lutein; or 10_mg_lutein_plus_10_mg_zeaxanthin
  duration: 2_years
  endpoint: serum_lutein_MPOD_and_visual_function
  sourceId: S7
- context: healthy_adults_lutein_only
  dose: 12_mg_per_day
  duration: 16_weeks
  endpoint: MPOD_contrast_and_glare
  sourceId: S9
- context: AREDS2
  dose: 10_mg_lutein_plus_2_mg_zeaxanthin_per_day
  duration: 5_years
  endpoint: AMD_progression
  sourceId: [S1, S2]
- regulatory_status:
    RDA: not_established
    official_UL: not_established
    observed_safe_level_in_one_risk_assessment: 20_mg_per_day
  limitation: observed_safe_level is not an official dietary reference value
  sourceId: [S10, S16]

**Pharmacokinetics:**

Lutein is lipophilic. Intestinal absorption involves release from the food or supplement matrix, incorporation into mixed micelles, uptake by enterocytes, and transport in lipoprotein-rich particles. Dietary fat, food matrix, particle size, and formulation influence bioavailability. (S10, S13, S17)

Human serum or plasma concentrations typically peak about 11–16 hours after a single oral dose in older pharmacokinetic evaluations. With daily 20 mg supplementation, steady-state plasma concentrations were reported within approximately 30 days. Serum concentrations can fall after discontinuation while MPOD remains elevated for longer. (S15, S18)

Formulation effects can be large: in one eight-person crossover trial, a water-soluble formulation produced approximately twice the plasma and erythrocyte lutein exposure of an oil suspension; in a 48-person single-dose study, a starch-matrix beadlet produced 1.8-fold higher 0–72-hour lutein AUC than an alginate-matrix beadlet. (S13, S14)

Free lutein and lutein esters are both bioavailable. A small randomized study comparing 10 mg free lutein with 20 mg lutein esters equivalent to 10 mg free lutein found no significant between-group difference in serum lutein or MPOD. (S15)

- absorption:
    route: oral
    limiting_properties:
      - hydrophobicity
      - crystallinity
    sourceId: [S13, S17]
- approximate_single_dose_peak:
    serum_or_plasma: 11_to_16_hours
    sourceId: S18
- accumulation:
    20_mg_per_day: steady_state_reported_within_about_30_days
    sourceId: S18
- formulation_comparison:
    water_soluble_vs_oil: approximately_twofold_higher_exposure_in_small_trial
    starch_beadlet_vs_alginate_beadlet: 1.8_fold_higher_0_to_72_hour_AUC
    sourceId: [S13, S14]
- chemical_form:
    free_lutein: bioavailable
    lutein_ester: bioavailable
    small_trial_difference: not_significant
    sourceId: S15

**Modifiers:**

Baseline status is a major modifier. People with lower baseline MPOD often show greater increases, although some low-MPOD individuals remain nonresponders despite increased serum lutein. (S6, S10)

Response also depends on dietary lutein/zeaxanthin status, age, disease stage, lipid handling, formulation, meal fat, and potentially variation in transport and uptake proteins such as SR-BI/SCARB1 and CD36. These modifiers explain why the same labeled dose does not produce the same serum or retinal response in every person. (S10, S17)

- baseline_MுபOD:
    lower_baseline: often_larger_change
    limitation: low_baseline_does_not_guarantee_response
    sourceId: [S6, S10]
- dietary_status:
    low_lutein_zeaxanthin_intake: possible_larger_incremental_response
    sourceId: [S1, S3, S10]
- formulation:
    effect: can materially_change_serum_exposure
    sourceId: [S13, S14]
- meal_context:
    dietary_fat_and_food_matrix: alter_micellarization_and_absorption
    sourceId: [S10, S17]
- host_biology:
    candidate_modifiers:
      - lipid_status
      - age
      - intestinal_absorption
      - SCARB1_or_CD36_variation
    sourceId: [S10, S17]

**Effects:**

The most consistent effect is increased MPOD. Lutein-only studies in AMD and healthy adults increased MPOD, and lutein/zeaxanthin mixtures also commonly increased it. (S5–S10)

Visual-performance effects are less uniform. Lutein-only studies have reported improvements in contrast sensitivity or glare-related measures, but standard visual acuity often did not change significantly. A one-year lutein/zeaxanthin trial improved chromatic contrast and photostress recovery, while glare disability did not significantly improve. (S5, S6, S8, S9)

- effect: serum_lutein
  certainty: consistent_biomarker_response
  sourceId: [S6, S7, S9, S13–S15]
- effect: MPOD
  certainty: consistent_but_variable
  sourceId: [S5–S10, S15]
- effect: contrast_sensitivity
  certainty: possible_endpoint_specific_benefit
  sourceId: [S6, S8, S9]
- effect: glare_or_photostress
  certainty: mixed
  sourceId: [S5, S8, S9]
- effect: standard_visual_acuity
  certainty: usually_no_clear_change
  sourceId: [S5, S6, S7, S8]
- effect: clinical_quality_of_life
  certainty: insufficient
  sourceId: [S4, S5]

**Outcomes:**

For AMD, the intervention must be named precisely. The AREDS2 primary trial did **not** find an overall additional reduction in advanced AMD when lutein/zeaxanthin was added to the original AREDS formula. (S1, S2)

A later 10-year follow-up of the AREDS2 cohort reported a hazard ratio of 0.91 for progression to late AMD comparing lutein/zeaxanthin with no lutein/zeaxanthin, and 0.85 comparing lutein/zeaxanthin directly with beta-carotene. This was an exploratory post-trial analysis; during follow-up, nearly all participants were offered the revised AREDS2 formula, so it does not isolate long-term lutein monotherapy. (S3)

The 2023 Cochrane review found low-certainty evidence that lutein with or without zeaxanthin had little or no effect on late AMD progression: risk ratio 0.94, 95% CI 0.87–1.01; neovascular AMD 0.92, 95% CI 0.84–1.02; geographic atrophy 0.92, 95% CI 0.80–1.05; and visual loss 0.98, 95% CI 0.91–1.05. (S4)

AREDS/AREDS2 supplements are not shown to prevent AMD onset in people without AMD, and the trial population was not healthy supplementation for primary prevention. (S1)

Cognition remains secondary evidence. A randomized-trial meta-analysis found nonsignificant effects for complex attention, executive function, and memory; the AREDS2 cognitive trial likewise found no meaningful cognitive benefit from 10 mg lutein plus 2 mg zeaxanthin. (S11, S12)

- outcome: AMD_progression
  lutein_only: insufficient_direct_evidence
  lutein_zeaxanthin_mixture: primary_AREDS2_overall_result_null; later_exploratory_followup_favorable_vs_beta_carotene
  sourceId: [S1–S4]
- outcome: primary_AMD_prevention
  conclusion: not_established
  sourceId: S1
- outcome: cognition
  conclusion: pooled_randomized_effects_not_significant
  sourceId: [S11, S12]
- outcome: cataract_surgery
  conclusion: no_overall_additional_effect_in_AREDS2
  sourceId: S1
- outcome: MPOD
  conclusion: reproducibly_increased_more_often_than_clinical_outcomes
  sourceId: [S5–S10]

**Mechanisms:**

Macular lutein contributes to optical filtering of short-wavelength light and local antioxidant activity. These mechanisms plausibly explain improved glare resistance, chromatic contrast, or photostress recovery in some participants, but mechanistic plausibility does not establish prevention of AMD or cognitive decline. (S8, S17)

Lutein and its related macular carotenoids also occur in brain tissue. Proposed neural mechanisms include antioxidant and anti-inflammatory activity, membrane effects, and modulation of light or oxidative stress; human cognitive trials remain too inconsistent to confirm a clinically meaningful effect. (S11, S17)

Lutein can be converted within the retina to meso-zeaxanthin through an RPE65-associated pathway. This is a retinal metabolism finding and does not demonstrate that a particular supplement formulation is clinically superior. (S17)

- retinal_mechanism:
    - short_wavelength_light_filtering
    - local_antioxidant_activity
    - possible_photostress_modulation
  clinical_status: biologically_plausible; outcome_evidence_mixed
  sourceId: [S8, S17]
- macular_pigment:
    components:
      - lutein
      - zeaxanthin
      - meso-zeaxanthin
    sourceId: [S10, S17]
- retinal_metabolism:
    lutein_to_meso_zeaxanthin: RPE65_associated_pathway
    sourceId: S17
- brain_mechanism:
    proposed:
      - antioxidant_activity
      - anti-inflammatory_activity
      - membrane_or_neural_effects
    clinical_confirmation: insufficient
    sourceId: [S11, S17]

**Cautions:**

Human trials generally report good short- to medium-term tolerability, including large AREDS2 experience. Benign yellow-orange skin discoloration (carotenodermia) has been reported with lutein supplementation and is not the same as vitamin A toxicity. (S3, S16)

Long-term safety above approximately 20 mg/day is less well characterized than safety at commonly studied doses; 20 mg/day is an observed-safe-level estimate from a risk-assessment publication, not an official upper limit. Evidence in pregnancy, lactation, children, inherited carotenoid-metabolism disorders, and unusual retinal diseases is more limited. (S10, S16, S17)

The lung-cancer signal associated with beta-carotene in smokers or former smokers should not be automatically attributed to lutein. In the 10-year AREDS2 follow-up, lutein/zeaxanthin was not associated with a statistically significant increase in lung cancer, whereas beta-carotene was associated with higher risk among former smokers. (S1, S3)

- adverse_effect:
    carotenodermia: reported; generally_benign
    sourceId: [S16, S17]
- serious_adverse_events:
    AREDS2: no_clear_lutein_zeaxanthin_signal
    sourceId: [S2, S3]
- beta_carotene_distinction:
    smoker_related_lung_cancer_signal: applies_to_beta_carotene_evidence
    lutein_zeaxanthin_followup_signal: not_statistically_increased
    sourceId: [S1, S3]
- long_term_high_dose:
    above_20_mg_per_day: evidence_less_complete
    sourceId: [S10, S16]
- underrepresented_groups:
    - pregnancy
    - lactation
    - children
    - rare_carotenoid_metabolism_disorders
  sourceId: S17

**Claims:**

The strongest defensible claim is that lutein supplementation can raise circulating lutein and often raises MPOD. Claims of improved visual function are narrower: contrast, glare, and photostress may change in selected groups, while standard acuity usually does not. (S5–S10)

“Prevents AMD,” “reverses AMD,” “improves cognition,” and “improves eyesight” are broader than the lutein-specific evidence supports. The AREDS2 evidence applies to a defined high-risk AMD population and a multi-ingredient lutein/zeaxanthin formula, not to lutein monotherapy in healthy adults. (S1–S4, S11, S12)

- claim: raises_serum_lutein
  verdict: supported
  sourceId: [S6, S7, S9, S13–S15]
- claim: raises_macular_pigment
  verdict: supported_but_response_varies
  sourceId: [S5–S10, S15]
- claim: improves_contrast_glare_or_photostress
  verdict: possible_and_endpoint_specific
  sourceId: [S5, S6, S8, S9]
- claim: improves_standard_visual_acuity
  verdict: not_consistently_supported
  sourceId: [S5–S8]
- claim: prevents_AMD_in_healthy_people
  verdict: not_established
  sourceId: S1
- claim: lutein_alone_slows_AMD_progression
  verdict: insufficient_direct_evidence
  sourceId: [S3, S4]
- claim: AREDS2_lutein_zeaxanthin_formula_replaces_beta_carotene
  verdict: supported_in_studied_AMD_context
  sourceId: [S1, S3]
- claim: improves_cognition
  verdict: insufficient_and_pooled_effects_not_significant
  sourceId: [S11, S12]

**Interactions:**

Lutein absorption is affected by dietary fat, food matrix, formulation, and co-administered carotenoids. Competition among carotenoids has been reported in experimental and human pharmacokinetic work, but the clinical importance varies by dose and formulation. (S10, S17)

A systematic review reported no demonstrated interaction between lutein intake and cytochrome P450 activity, but direct clinical interaction data with prescription medicines are sparse. Therefore, “no established interaction” is not equivalent to proof of universal interaction safety. (S16)

- interaction_type: dietary_fat
  effect: generally_facilitates_carotenoid_micellarization
  sourceId: [S10, S17]
- interaction_type: formulation
  effect: can_change_serum_exposure_substantially
  sourceId: [S13, S14]
- interaction_type: other_carotenoids
  effect: possible_competition_or altered_absorption
  sourceId: [S10, S17]
- interaction_type: cytochrome_P450
  finding: no_demonstrated_effect_reported_in_review
  limitation: direct_drug_interaction_trials_sparse
  sourceId: S16
- interaction_type: prescription_medicines
  conclusion: clinically_relevant_interaction_profile_not_established
  sourceId: [S16, S17]

**Legal:**

This article is an evidence summary, not a treatment directive, product endorsement, medical diagnosis, or jurisdiction-specific legal opinion. Product labels, disease claims, and supplement regulations must be evaluated under the law applicable to the relevant country and product.

- article_status: research_summary
- medical_status: not_a_diagnosis_or_treatment_instruction
- product_status: no_product_endorsement
- legal_status: jurisdiction_specific_details_not_assessed

## Doses

```yaml
- label: lutein research exposure 1
  amount: approximately_1_to_2_mg_per_day_lutein_or_lutein_zeaxanthin
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: general_adults
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"context":"average_US_dietary_intake","dose":"approximately_1_to_2_mg_per_day_lutein_or_lutein_zeaxanthin","population":"general_adults","sourceId":"S10"}'
  sourceId: S10
- label: lutein research exposure 2
  amount: 10_or_20_mg_per_day
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 48_weeks
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"context":"early_AMD_lutein_only","dose":"10_or_20_mg_per_day","duration":"48_weeks","endpoint":"MPOD_and_visual_function","sourceId":"S6"}'
  sourceId: S6
- label: lutein research exposure 3
  amount: 10_mg_lutein; 20_mg_lutein; or 10_mg_lutein_plus_10_mg_zeaxanthin
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 2_years
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"context":"early_AMD_lutein_only_or_lutein_plus_zeaxanthin","dose":"10_mg_lutein; 20_mg_lutein; or 10_mg_lutein_plus_10_mg_zeaxanthin","duration":"2_years","endpoint":"serum_lutein_MPOD_and_visual_function","sourceId":"S7"}'
  sourceId: S7
- label: lutein research exposure 4
  amount: 12_mg_per_day
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 16_weeks
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"context":"healthy_adults_lutein_only","dose":"12_mg_per_day","duration":"16_weeks","endpoint":"MPOD_contrast_and_glare","sourceId":"S9"}'
  sourceId: S9
- label: lutein research exposure 5
  amount: 10_mg_lutein_plus_2_mg_zeaxanthin_per_day
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: 5_years
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"context":"AREDS2","dose":"10_mg_lutein_plus_2_mg_zeaxanthin_per_day","duration":"5_years","endpoint":"AMD_progression","sourceId":["S1","S2"]}'
  sourceId: S1
- label: lutein research exposure 6
  amount: Not established
  quantity: null
  quantityMax: null
  unit: not established
  ingredient: lutein
  formulation: Not established
  route: Not established
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: Research exposure; not a dosing recommendation.
  sourceCategory: research
  note: 'Original Deep Research fields preserved: {"regulatory_status":{"RDA":"not_established","official_UL":"not_established","observed_safe_level_in_one_risk_assessment":"20_mg_per_day"},"limitation":"observed_safe_level is not an official dietary reference value","sourceId":["S10","S16"]}'
  sourceId: S10
```

## Pharmacokinetics

```yaml
- id: lutein-pk-1
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Original Deep Research PK detail: {"absorption":{"route":"oral","limiting_properties":["hydrophobicity","crystallinity"],"sourceId":["S13","S17"]}}'
  sourceId: S1
  modelEligible: false
- id: lutein-pk-2
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Original Deep Research PK detail: {"approximate_single_dose_peak":{"serum_or_plasma":"11_to_16_hours","sourceId":"S18"}}'
  sourceId: S1
  modelEligible: false
- id: lutein-pk-3
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Original Deep Research PK detail: {"accumulation":{"20_mg_per_day":"steady_state_reported_within_about_30_days","sourceId":"S18"}}'
  sourceId: S1
  modelEligible: false
- id: lutein-pk-4
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Original Deep Research PK detail: {"formulation_comparison":{"water_soluble_vs_oil":"approximately_twofold_higher_exposure_in_small_trial","starch_beadlet_vs_alginate_beadlet":"1.8_fold_higher_0_to_72_hour_AUC","sourceId":["S13","S14"]}}'
  sourceId: S1
  modelEligible: false
- id: lutein-pk-5
  analyte: Parent compound or reported analyte
  route: Not established
  formulation: Not established
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: 'Original Deep Research PK detail: {"chemical_form":{"free_lutein":"bioavailable","lutein_ester":"bioavailable","small_trial_difference":"not_significant","sourceId":"S15"}}'
  sourceId: S1
  modelEligible: false
```

## Modifiers

```yaml
- label: Modifier 1
  effect: Variable
  detail: '{"baseline_MுபOD":{"lower_baseline":"often_larger_change","limitation":"low_baseline_does_not_guarantee_response","sourceId":["S6","S10"]}}'
  sourceId: S1
  observationId: lutein-pk-1
  factorType: other
  direction: variable
- label: Modifier 2
  effect: Variable
  detail: '{"dietary_status":{"low_lutein_zeaxanthin_intake":"possible_larger_incremental_response","sourceId":["S1","S3","S10"]}}'
  sourceId: S1
  observationId: lutein-pk-1
  factorType: other
  direction: variable
- label: Modifier 3
  effect: Variable
  detail: '{"formulation":{"effect":"can materially_change_serum_exposure","sourceId":["S13","S14"]}}'
  sourceId: S1
  observationId: lutein-pk-1
  factorType: other
  direction: variable
- label: Modifier 4
  effect: Variable
  detail: '{"meal_context":{"dietary_fat_and_food_matrix":"alter_micellarization_and_absorption","sourceId":["S10","S17"]}}'
  sourceId: S1
  observationId: lutein-pk-1
  factorType: other
  direction: variable
- label: Modifier 5
  effect: Variable
  detail: '{"host_biology":{"candidate_modifiers":["lipid_status","age","intestinal_absorption","SCARB1_or_CD36_variation"],"sourceId":["S10","S17"]}}'
  sourceId: S1
  observationId: lutein-pk-1
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: lutein-effect-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S6
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-effect-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S5
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-effect-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S6
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-effect-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S5
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-effect-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S5
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-effect-6
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: perception
  name: lutein effect
  direction: Variable
  evidence: Human research
  description: Returned Deep Research effect record; see the preserved report detail in Evidence note.
  sourceId: S4
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
- id: lutein-outcome-1
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: AMD_progression
  direction: Variable
  evidence: Human research
  description: Returned Deep Research outcome record; see the preserved report detail in Evidence note.
  sourceId: S1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-outcome-2
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: primary_AMD_prevention
  direction: Variable
  evidence: Human research
  description: Returned Deep Research outcome record; see the preserved report detail in Evidence note.
  sourceId: S1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-outcome-3
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: cognition
  direction: Variable
  evidence: Human research
  description: Returned Deep Research outcome record; see the preserved report detail in Evidence note.
  sourceId: S11
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-outcome-4
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: cataract_surgery
  direction: Variable
  evidence: Human research
  description: Returned Deep Research outcome record; see the preserved report detail in Evidence note.
  sourceId: S1
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
- id: lutein-outcome-5
  conflictingSourceIds: []
  reportType: measured-assessment
  conceptId: attention
  name: MPOD
  direction: Variable
  evidence: Human research
  description: Returned Deep Research outcome record; see the preserved report detail in Evidence note.
  sourceId: S5
  population: Not established
  exposure: Not established
  instrument: null
  magnitude: null
```

## Mechanisms

```yaml
- title: Research mechanism
  description: 'Original Deep Research mechanism: {"retinal_mechanism":["short_wavelength_light_filtering","local_antioxidant_activity","possible_photostress_modulation"],"clinical_status":"biologically_plausible; outcome_evidence_mixed","sourceId":["S8","S17"]}'
  sourceId: S8
- title: Research mechanism
  description: 'Original Deep Research mechanism: {"macular_pigment":{"components":["lutein","zeaxanthin","meso-zeaxanthin"],"sourceId":["S10","S17"]}}'
  sourceId: S1
- title: Research mechanism
  description: 'Original Deep Research mechanism: {"retinal_metabolism":{"lutein_to_meso_zeaxanthin":"RPE65_associated_pathway","sourceId":"S17"}}'
  sourceId: S1
- title: Research mechanism
  description: 'Original Deep Research mechanism: {"brain_mechanism":{"proposed":["antioxidant_activity","anti-inflammatory_activity","membrane_or_neural_effects"],"clinical_confirmation":"insufficient","sourceId":["S11","S17"]}}'
  sourceId: S1
```

## Cautions

```yaml
- title: Research caution
  description: 'Original Deep Research caution: {"adverse_effect":{"carotenodermia":"reported; generally_benign","sourceId":["S16","S17"]}}'
  sourceId: S1
- title: Research caution
  description: 'Original Deep Research caution: {"serious_adverse_events":{"AREDS2":"no_clear_lutein_zeaxanthin_signal","sourceId":["S2","S3"]}}'
  sourceId: S1
- title: Research caution
  description: 'Original Deep Research caution: {"beta_carotene_distinction":{"smoker_related_lung_cancer_signal":"applies_to_beta_carotene_evidence","lutein_zeaxanthin_followup_signal":"not_statistically_increased","sourceId":["S1","S3"]}}'
  sourceId: S1
- title: Research caution
  description: 'Original Deep Research caution: {"long_term_high_dose":{"above_20_mg_per_day":"evidence_less_complete","sourceId":["S10","S16"]}}'
  sourceId: S1
- title: Research caution
  description: 'Original Deep Research caution: {"underrepresented_groups":["pregnancy","lactation","children","rare_carotenoid_metabolism_disorders"],"sourceId":"S17"}'
  sourceId: S17
```

## Claims

```yaml
- id: lutein-claim-1
  assertion: raises_serum_lutein
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S6
    - S7
    - S9
    - S13
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-2
  assertion: raises_macular_pigment
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S5
    - S15
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-3
  assertion: improves_contrast_glare_or_photostress
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S5
    - S6
    - S8
    - S9
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-4
  assertion: improves_standard_visual_acuity
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S5
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-5
  assertion: prevents_AMD_in_healthy_people
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S1
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-6
  assertion: lutein_alone_slows_AMD_progression
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S3
    - S4
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-7
  assertion: AREDS2_lutein_zeaxanthin_formula_replaces_beta_carotene
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S1
    - S3
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
- id: lutein-claim-8
  assertion: improves_cognition
  relation: evidence-boundary
  participants:
    - entityId: substance:lutein
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported-outcome-context
  context: Returned Deep Research report
  sourceIds:
    - S11
    - S12
  conflictingSourceIds:
    - S1
  assessment: not-formally-assessed
  limitation: Source-specific limitation preserved in the returned report.
```

## Interactions

```yaml
- id: interaction-1
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Original Deep Research interaction: {"interaction_type":"dietary_fat","effect":"generally_facilitates_carotenoid_micellarization","sourceId":["S10","S17"]}'
  sourceId: S10
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-2
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Original Deep Research interaction: {"interaction_type":"formulation","effect":"can_change_serum_exposure_substantially","sourceId":["S13","S14"]}'
  sourceId: S13
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-3
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Original Deep Research interaction: {"interaction_type":"other_carotenoids","effect":"possible_competition_or altered_absorption","sourceId":["S10","S17"]}'
  sourceId: S10
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-4
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Original Deep Research interaction: {"interaction_type":"cytochrome_P450","finding":"no_demonstrated_effect_reported_in_review","limitation":"direct_drug_interaction_trials_sparse","sourceId":"S16"}'
  sourceId: S16
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
- id: interaction-5
  name: Documented or hypothesized coexposure
  otherSlug: null
  summary: 'Original Deep Research interaction: {"interaction_type":"prescription_medicines","conclusion":"clinically_relevant_interaction_profile_not_established","sourceId":["S16","S17"]}'
  sourceId: S16
  context: Evidence context preserved from Deep Research
  conflictingSourceIds:
    - S1
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://jamanetwork.com/journals/jama/fullarticle/1684847
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S3
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9164119/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://www.cochrane.org/evidence/CD000254_do-antioxidant-vitamin-and-mineral-supplements-slow-down-progression-age-related-macular
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S5
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/21873668/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S6
  title: Effect of lutein and zeaxanthin on macular pigment and visual function in patients with early age-related macular degeneration
  authors: Le Ma, Shao-Fang Yan, Yang-Mu Huang, Xin-Rong Lu, Fang Qian, Hong-Lei Pang, Xian-Rong Xu, Zhi-Yong Zou, Peng-Cheng Dong, Xin Xiao, Xun Wang, Ting-Ting Sun, Hong-Liang Dou, Xiao-Ming Lin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22858124/
  kind: randomized double-masked placebo-controlled clinical trial
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: "22858124"
  doi: 10.1016/j.ophtha.2012.06.014
- id: S7
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/25815324/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
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
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
  pmid: "25468896"
  doi: 10.1167/iovs.14-15573
- id: S9
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/32998324/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8634499/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S11
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8510423/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S12
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://jamanetwork.com/journals/jama/fullarticle/2429713
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S13
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/31382835/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S14
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/23052623/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S15
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/27273910/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S16
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/25616151/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S17
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5611842/
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S18
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://www.inchem.org/documents/jecfa/jecmono/v54je01.pdf
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: S19
  title: Deep Research source
  authors: Not assessed
  year: 2026
  url: https://clinicaltrials.gov/study/NCT00879671
  kind: Deep Research source
  insight: Source cited by the returned Deep Research report.
  limitation: Publication metadata, funding, or disclosure details were not fully recovered in the capture.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: Not established
  activity: Not established
  status: 'Original Deep Research legal detail: {"article_status":"research_summary"}'
  sourceUrl: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: 'Original Deep Research legal detail: {"medical_status":"not_a_diagnosis_or_treatment_instruction"}'
  sourceUrl: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: 'Original Deep Research legal detail: {"product_status":"no_product_endorsement"}'
  sourceUrl: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  asOf: 2026-10-10
- jurisdiction: Not established
  activity: Not established
  status: 'Original Deep Research legal detail: {"legal_status":"jurisdiction_specific_details_not_assessed"}'
  sourceUrl: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  asOf: 2026-10-10
```
