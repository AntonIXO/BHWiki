# Research Report: Research exactly lutein (slug lutein). Return a compact complete BHWiki Markdown article only, <=4500 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover lutein-specific evidence versus lutein/zeaxanthin mixtures, macular pigment and visual performance, age-related macular degeneration outcomes, cognition as secondary evidence, deficiency versus healthy supplementation, absorption/formulation, exact dose contexts, and commercial funding. Every factual claim needs a source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus; use not-assessed when unknown. No preface, metadata, audit tables, citation tokens, or recommendations.

---
x-shape:
  slug: lutein
  type: dietary-carotenoid
  name: lutein
---

# lutein

## Summary

Lutein is a non–provitamin A xanthophyll carotenoid concentrated in the retina, especially in macular pigment. The most reproducible human effect of supplementation is increased serum lutein and macular pigment optical density (MPOD). Lutein-only trials support MPOD augmentation; effects on visual performance are smaller, endpoint-specific, and inconsistent. (S10, S17)

Age-related macular degeneration (AMD) outcome evidence is mainly for **lutein 10 mg plus zeaxanthin 2 mg** within the broader AREDS2 antioxidant/mineral formula, not lutein alone. The original AREDS2 primary analysis found no overall additional benefit from adding the lutein/zeaxanthin mixture, whereas a later exploratory 10-year follow-up found a modest association with lower progression compared with beta-carotene. Cochrane judged lutein/zeaxanthin-alone evidence as low certainty and compatible with little or no effect. (S1–S4)

Cognition is secondary evidence: pooled randomized-trial effects were not statistically significant, and the large AREDS2 cognitive analysis did not show benefit from lutein/zeaxanthin. Lutein has no established deficiency syndrome, recommended dietary allowance, or official tolerable upper intake level. (S10–S12, S16)

```yaml
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
```

## Description

Lutein is a dietary xanthophyll found in leafy green vegetables, egg yolks, corn, squash, avocado, and other plant foods. Humans do not synthesize it. Unlike beta-carotene, lutein does not provide vitamin A activity. (S10, S17)

The human macular pigment consists primarily of lutein, zeaxanthin, and meso-zeaxanthin. Lutein is relatively more abundant in peripheral macular regions, while zeaxanthin and meso-zeaxanthin are relatively enriched toward the foveal center. Many supplements and food databases report lutein together with zeaxanthin, which complicates lutein-specific interpretation. (S10, S17)

```yaml
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
```

## Evidence note

MPOD is a biological and optical surrogate, not the same as preserved visual acuity or delayed AMD. A treatment can raise MPOD without producing a clinically important change in standard acuity or disease progression. (S5, S6, S10)

AREDS2 enrolled 4,203 adults aged approximately 50–85 years with bilateral large drusen or large drusen in one eye and advanced AMD in the fellow eye. The tested carotenoid intervention was lutein 10 mg plus zeaxanthin 2 mg daily, usually alongside vitamins C and E, zinc, and copper. Healthy adults and people without AMD were not the target population. (S1, S2)

Commercial involvement is uneven. AREDS2 was NIH-led but used supplied commercial supplements; the healthy-eye MPOD review was funded through IAFNS/ILSI North America; a lutein-only visual trial included an Omnica-affiliated author; and formulation studies involved company-affiliated investigators or branded ingredients. These facts do not establish bias, but they make independent replication and formulation-specific interpretation relevant. (S3, S9, S10, S13, S14)

```yaml
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
```

## Doses

Studied doses vary by endpoint and formulation. In healthy-eye MPOD research, pooled evidence found clearer increases above 10 mg/day of combined lutein/zeaxanthin, while effects below 5 mg/day and from ordinary dietary intake were less certain; the review found no adequate dose-response evidence for the 5-to-less-than-10 mg/day range. (S10)

Lutein-only AMD trials used 10 or 20 mg/day, while a healthy-adult trial used 12 mg/day. The AREDS2 disease-outcome dose was 10 mg lutein plus 2 mg zeaxanthin daily for five years. These are trial contexts, not an established universal dose. (S2, S6, S7, S9)

```yaml
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
```

## Pharmacokinetics

Lutein is lipophilic. Intestinal absorption involves release from the food or supplement matrix, incorporation into mixed micelles, uptake by enterocytes, and transport in lipoprotein-rich particles. Dietary fat, food matrix, particle size, and formulation influence bioavailability. (S10, S13, S17)

Human serum or plasma concentrations typically peak about 11–16 hours after a single oral dose in older pharmacokinetic evaluations. With daily 20 mg supplementation, steady-state plasma concentrations were reported within approximately 30 days. Serum concentrations can fall after discontinuation while MPOD remains elevated for longer. (S15, S18)

Formulation effects can be large: in one eight-person crossover trial, a water-soluble formulation produced approximately twice the plasma and erythrocyte lutein exposure of an oil suspension; in a 48-person single-dose study, a starch-matrix beadlet produced 1.8-fold higher 0–72-hour lutein AUC than an alginate-matrix beadlet. (S13, S14)

Free lutein and lutein esters are both bioavailable. A small randomized study comparing 10 mg free lutein with 20 mg lutein esters equivalent to 10 mg free lutein found no significant between-group difference in serum lutein or MPOD. (S15)

```yaml
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
```

## Modifiers

Baseline status is a major modifier. People with lower baseline MPOD often show greater increases, although some low-MPOD individuals remain nonresponders despite increased serum lutein. (S6, S10)

Response also depends on dietary lutein/zeaxanthin status, age, disease stage, lipid handling, formulation, meal fat, and potentially variation in transport and uptake proteins such as SR-BI/SCARB1 and CD36. These modifiers explain why the same labeled dose does not produce the same serum or retinal response in every person. (S10, S17)

```yaml
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
```

## Effects

The most consistent effect is increased MPOD. Lutein-only studies in AMD and healthy adults increased MPOD, and lutein/zeaxanthin mixtures also commonly increased it. (S5–S10)

Visual-performance effects are less uniform. Lutein-only studies have reported improvements in contrast sensitivity or glare-related measures, but standard visual acuity often did not change significantly. A one-year lutein/zeaxanthin trial improved chromatic contrast and photostress recovery, while glare disability did not significantly improve. (S5, S6, S8, S9)

```yaml
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
```

## Outcomes

For AMD, the intervention must be named precisely. The AREDS2 primary trial did **not** find an overall additional reduction in advanced AMD when lutein/zeaxanthin was added to the original AREDS formula. (S1, S2)

A later 10-year follow-up of the AREDS2 cohort reported a hazard ratio of 0.91 for progression to late AMD comparing lutein/zeaxanthin with no lutein/zeaxanthin, and 0.85 comparing lutein/zeaxanthin directly with beta-carotene. This was an exploratory post-trial analysis; during follow-up, nearly all participants were offered the revised AREDS2 formula, so it does not isolate long-term lutein monotherapy. (S3)

The 2023 Cochrane review found low-certainty evidence that lutein with or without zeaxanthin had little or no effect on late AMD progression: risk ratio 0.94, 95% CI 0.87–1.01; neovascular AMD 0.92, 95% CI 0.84–1.02; geographic atrophy 0.92, 95% CI 0.80–1.05; and visual loss 0.98, 95% CI 0.91–1.05. (S4)

AREDS/AREDS2 supplements are not shown to prevent AMD onset in people without AMD, and the trial population was not healthy supplementation for primary prevention. (S1)

Cognition remains secondary evidence. A randomized-trial meta-analysis found nonsignificant effects for complex attention, executive function, and memory; the AREDS2 cognitive trial likewise found no meaningful cognitive benefit from 10 mg lutein plus 2 mg zeaxanthin. (S11, S12)

```yaml
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
```

## Mechanisms

Macular lutein contributes to optical filtering of short-wavelength light and local antioxidant activity. These mechanisms plausibly explain improved glare resistance, chromatic contrast, or photostress recovery in some participants, but mechanistic plausibility does not establish prevention of AMD or cognitive decline. (S8, S17)

Lutein and its related macular carotenoids also occur in brain tissue. Proposed neural mechanisms include antioxidant and anti-inflammatory activity, membrane effects, and modulation of light or oxidative stress; human cognitive trials remain too inconsistent to confirm a clinically meaningful effect. (S11, S17)

Lutein can be converted within the retina to meso-zeaxanthin through an RPE65-associated pathway. This is a retinal metabolism finding and does not demonstrate that a particular supplement formulation is clinically superior. (S17)

```yaml
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
```

## Cautions

Human trials generally report good short- to medium-term tolerability, including large AREDS2 experience. Benign yellow-orange skin discoloration (carotenodermia) has been reported with lutein supplementation and is not the same as vitamin A toxicity. (S3, S16)

Long-term safety above approximately 20 mg/day is less well characterized than safety at commonly studied doses; 20 mg/day is an observed-safe-level estimate from a risk-assessment publication, not an official upper limit. Evidence in pregnancy, lactation, children, inherited carotenoid-metabolism disorders, and unusual retinal diseases is more limited. (S10, S16, S17)

The lung-cancer signal associated with beta-carotene in smokers or former smokers should not be automatically attributed to lutein. In the 10-year AREDS2 follow-up, lutein/zeaxanthin was not associated with a statistically significant increase in lung cancer, whereas beta-carotene was associated with higher risk among former smokers. (S1, S3)

```yaml
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
```

## Claims

The strongest defensible claim is that lutein supplementation can raise circulating lutein and often raises MPOD. Claims of improved visual function are narrower: contrast, glare, and photostress may change in selected groups, while standard acuity usually does not. (S5–S10)

“Prevents AMD,” “reverses AMD,” “improves cognition,” and “improves eyesight” are broader than the lutein-specific evidence supports. The AREDS2 evidence applies to a defined high-risk AMD population and a multi-ingredient lutein/zeaxanthin formula, not to lutein monotherapy in healthy adults. (S1–S4, S11, S12)

```yaml
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
```

## Interactions

Lutein absorption is affected by dietary fat, food matrix, formulation, and co-administered carotenoids. Competition among carotenoids has been reported in experimental and human pharmacokinetic work, but the clinical importance varies by dose and formulation. (S10, S17)

A systematic review reported no demonstrated interaction between lutein intake and cytochrome P450 activity, but direct clinical interaction data with prescription medicines are sparse. Therefore, “no established interaction” is not equivalent to proof of universal interaction safety. (S16)

```yaml
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
```

## Experience links

The most useful “experience” links are human trial records and primary reports rather than testimonials. The LISA registry documents a lutein-only AMD trial; the AREDS2 publications document the mixture and its disease-outcome context. (S1, S2, S5, S19)

```yaml
- link_type: clinical_trial_registry
  label: LISA lutein-only AMD trial
  url: https://clinicaltrials.gov/study/NCT00879671
  sourceId: S19
- link_type: government_trial_overview
  label: NEI AREDS/AREDS2 overview
  url: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  sourceId: S1
- link_type: primary_lutein_only_trial
  label: Lutein and visual outcomes in early AMD
  url: https://pubmed.ncbi.nlm.nih.gov/22858124/
  sourceId: S6
- link_type: primary_healthy_adult_trial
  label: High-bioaccessibility lutein trial
  url: https://pubmed.ncbi.nlm.nih.gov/32998324/
  sourceId: S9
```

## References

```yaml
- id: S1
  title: AREDS/AREDS2 Clinical Trials
  authors_or_organization: National Eye Institute, National Institutes of Health
  year: 2025
  url: https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2
  kind: government_trial_summary
  insight: Defines AREDS2 population, 10 mg lutein plus 2 mg zeaxanthin dose, and official interpretation of AMD findings.
  limitation: Secondary government summary rather than a full systematic review.
  funding: National Institutes of Health
  sponsorshipStatus: government
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S2
  title: Lutein + Zeaxanthin and Omega-3 Fatty Acids for Age-Related Macular Degeneration: The Age-Related Eye Disease Study 2 (AREDS2) Randomized Clinical Trial
  authors_or_organization: Age-Related Eye Disease Study 2 Research Group
  year: 2013
  url: https://jamanetwork.com/journals/jama/fullarticle/1684847
  kind: randomized_clinical_trial
  insight: Tested 10 mg lutein plus 2 mg zeaxanthin in 4,203 people with high-risk AMD; primary overall addition to AREDS was null.
  limitation: Background AREDS formula and high-risk AMD population prevent isolation of lutein monotherapy or healthy supplementation.
  funding: National Eye Institute and collaborating NIH institutes; commercial product support reported in the publication.
  sponsorshipStatus: government_with_commercial_product_support
  conflictsOfInterest: publication disclosures and product supply reported; personal conflicts not-assessed
  conflictOfInterestStatus: mixed_or_not_fully_assessed

- id: S3
  title: Long-term Outcomes of Adding Lutein/Zeaxanthin and ω-3 Fatty Acids to the AREDS Supplements on Age-Related Macular Degeneration Progression
  authors_or_organization: Emily Y. Chew; Traci E. Clemons; Elvira Agrón; Amitha Domalpally; Tiarnán D. L. Keenan; Susan Vitale; Claire Weber; Douglas C. Smith; William Christen; AREDS2 Research Group
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9164119/
  kind: epidemiologic_followup_of_randomized_trial
  insight: Ten-year follow-up found HR 0.91 for lutein/zeaxanthin versus no lutein/zeaxanthin and HR 0.85 versus beta-carotene; no significant lung-cancer increase with lutein/zeaxanthin.
  limitation: Post-trial follow-up was no longer randomized; nearly all participants were offered the revised AREDS2 supplement.
  funding: NIH/NEI, ODS, NIA, NHLBI, NINDS, Research to Prevent Blindness; Bausch & Lomb supplied follow-up supplements.
  sponsorshipStatus: government_with_commercial_supply_and_nonprofit_support
  conflictsOfInterest: NIH held a royalty-bearing AREDS license to Bausch & Lomb until 2021; no other disclosures reported.
  conflictOfInterestStatus: disclosed

- id: S4
  title: Antioxidant vitamin and mineral supplements for slowing the progression of age-related macular degeneration
  authors_or_organization: Jennifer R. Evans; John G. Lawrenson
  year: 2023
  url: https://www.cochrane.org/evidence/CD000254_do-antioxidant-vitamin-and-mineral-supplements-slow-down-progression-age-related-macular
  kind: systematic_review_and_meta_analysis
  insight: Lutein with or without zeaxanthin showed little or no effect on AMD progression with low-certainty evidence.
  limitation: Most evidence came from AREDS2 participants receiving background supplements; lutein-only evidence was limited.
  funding: not-assessed
  sponsorshipStatus: nonprofit_review_body
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S5
  title: Effects of lutein supplementation on macular pigment optical density and visual acuity in patients with age-related macular degeneration
  authors_or_organization: Günther Weigert; Semira Kaya; Berthold Pemp; Stefan Sacu; Michael Lasta; René Marcel Werkmeister; Nikolaus Dragostinoff; Christian Simader; Gerhard Garhöfer; Ursula Schmidt-Erfurth; Leopold Schmetterer
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21873668/
  kind: randomized_placebo_controlled_trial
  insight: Lutein increased MPOD by approximately 27.9% in AMD, but visual-acuity and microperimetry effects were not statistically significant.
  limitation: Six-month surrogate-endpoint study without AMD-progression power.
  funding: Research Support, Non-U.S. Government
  sponsorshipStatus: academic_or_public
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S6
  title: Effect of lutein and zeaxanthin on macular pigment and visual function in patients with early age-related macular degeneration
  authors_or_organization: Le Ma; Shao-Fang Yan; Yang-Mu Huang; Xin-Rong Lu; Fang Qian; Hong-Lei Pang; Xian-Rong Xu; Zhi-Yong Zou; Peng-Cheng Dong; Xin Xiao; Xun Wang; Ting-Ting Sun; Hong-Liang Dou; Xiao-Ming Lin
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22858124/
  kind: randomized_double_masked_placebo_controlled_trial
  insight: Compared 10 mg lutein, 20 mg lutein, and 10 mg lutein plus 10 mg zeaxanthin for 48 weeks; MPOD increased and some contrast outcomes improved.
  limitation: Small study with surrogate and visual-function endpoints, not late-AMD progression.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S7
  title: Effect of supplemental lutein and zeaxanthin on serum, macular pigmentation, and visual performance in patients with early age-related macular degeneration
  authors_or_organization: Yang-Mu Huang; Hong-Liang Dou; Fei-Fei Huang; Xian-Rong Xu; Zhi-Yong Zou; Xiao-Ming Lin
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25815324/
  kind: randomized_double_blind_placebo_controlled_trial
  insight: Two-year 10 or 20 mg lutein and 10 mg lutein plus 10 mg zeaxanthin increased serum levels and MPOD; acuity and flash-recovery effects were not significant.
  limitation: Small early-AMD trial from one setting with no disease-progression endpoint.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S8
  title: A Double-Blind, Placebo-Controlled Study on the Effects of Lutein and Zeaxanthin on Photostress Recovery, Glare Disability, and Chromatic Contrast
  authors_or_organization: Emily R. Stringham; John M. Stringham
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25468896/
  kind: randomized_double_blind_placebo_controlled_trial
  insight: One year of 10 mg lutein plus 2 mg zeaxanthin increased MPOD and improved chromatic contrast and photostress recovery.
  limitation: Healthy young adults, small-to-moderate sample, and no disease outcome.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S9
  title: Clinical Effects of Dietary Supplementation of Lutein with High Bio-Accessibility on Macular Pigment Optical Density and Contrast Sensitivity: A Randomized Double-Blind Placebo-Controlled Parallel-Group Comparison Trial
  authors_or_organization: Naomichi Machida; Marie Kosehira; Nobuyoshi Kitaichi
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32998324/
  kind: randomized_placebo_controlled_trial
  insight: Twelve mg/day lutein alone for 16 weeks increased MPOD, contrast sensitivity, glare sensitivity, and serum lutein in healthy adults.
  limitation: Small formulation-specific study; first author was affiliated with Omnica.
  funding: not-assessed
  sponsorshipStatus: commercial_linked
  conflictsOfInterest: commercial affiliation disclosed through author affiliation.
  conflictOfInterestStatus: disclosed_affiliation

- id: S10
  title: The Effect of Lutein/Zeaxanthin Intake on Human Macular Pigment Optical Density: A Systematic Review and Meta-Analysis
  authors_or_organization: Lisa M. Wilson; Saraniya Tharmarajah; Yuanxi Jia; Richard D. Semba; Debra A. Schaumberg; Karen A. Robinson
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8634499/
  kind: systematic_review_and_meta_analysis
  insight: Among 46 studies and 3,189 healthy adults, doses above 10 mg/day of lutein/zeaxanthin more consistently increased MPOD; lower-dose and dietary effects were less clear.
  limitation: Mixed lutein/zeaxanthin interventions, heterogeneous methods, healthy-eye focus, and limited dose coverage.
  funding: Institute for the Advancement of Food and Nutrition Sciences through an ILSI North America Bioactive Committee grant.
  sponsorshipStatus: industry_public_mix
  conflictsOfInterest: authors reported no conflicts; funding organization is industry-supported.
  conflictOfInterestStatus: disclosed_funding_no_author_conflict_reported

- id: S11
  title: Dietary Lutein and Cognitive Function in Adults: A Meta-Analysis of Randomized Controlled Trials
  authors_or_organization: Jeffrey Li; El-Sayed M. Abdel-Aal
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8510423/
  kind: meta_analysis_of_randomized_trials
  insight: Effects on complex attention, executive function, and memory were small and not statistically significant.
  limitation: Small heterogeneous evidence base with mixtures, foods, and supplements; cognition was generally secondary.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S12
  title: Effect of Omega-3 Fatty Acids, Lutein/Zeaxanthin, or Other Nutrient Supplementation on Cognitive Function: The AREDS2 Randomized Clinical Trial
  authors_or_organization: Emily Y. Chew; Traci E. Clemons; Elvira Agrón; Lenore J. Launer; Francine Grodstein; Paul S. Bernstein; AREDS2 Research Group
  year: 2015
  url: https://jamanetwork.com/journals/jama/fullarticle/2429713
  kind: randomized_clinical_trial
  insight: Five-year 10 mg lutein plus 2 mg zeaxanthin supplementation did not produce a meaningful cognitive benefit.
  limitation: Older high-risk-AMD population and background nutrient formula; cognition was not the primary trial purpose.
  funding: National Eye Institute and collaborating NIH institutes; commercial product support reported in AREDS2 program.
  sponsorshipStatus: government_with_commercial_product_support
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S13
  title: Randomized controlled trial of a water-soluble formulation of lutein in humans
  authors_or_organization: Junya Kobayashi; Etsuko Tominaga; Makoto Ozeki; Tsutomu Okubo; Kiyotaka Nakagawa; Teruo Miyazawa
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31382835/
  kind: randomized_crossover_pharmacokinetic_trial
  insight: In eight healthy men, a water-soluble formulation produced approximately twice the plasma and erythrocyte exposure of an oil suspension.
  limitation: Very small, short-term, formulation-specific study.
  funding: company-affiliated Taiyo Kagaku investigators; exact funding not-assessed.
  sponsorshipStatus: commercial_linked
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S14
  title: Effects of formulation on the bioavailability of lutein and zeaxanthin: a randomized, double-blind, cross-over, comparative, single-dose study in healthy subjects
  authors_or_organization: Malkanthi Evans; Mareike Beck; James Elliott; Stephane Etheve; Richard Roberts; Wolfgang Schalch
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23052623/
  kind: randomized_crossover_pharmacokinetic_trial
  insight: In 48 adults receiving 20 mg lutein, starch-matrix beadlets produced higher exposure than alginate-matrix beadlets.
  limitation: Single-dose comparison of two branded formulations; pharmacokinetics does not establish clinical superiority.
  funding: company-affiliated KGK Synergize authors; exact funding not-assessed.
  sponsorshipStatus: commercial_linked
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S15
  title: Comparison of macular pigment and serum lutein concentration changes between free lutein and lutein esters supplements in Japanese subjects
  authors_or_organization: Hiroko Yoshizako; Katunori Hara; Yasuyuki Takai; Sachiko Kaidzu; Akira Obana; Akihiro Ohira
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27273910/
  kind: randomized_comparative_trial
  insight: Free lutein and esterified lutein produced similar serum and MPOD responses in a small three-month study.
  limitation: Only 20 healthy Japanese adults and no major visual or disease endpoint.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S16
  title: An Evidence-Based Systematic Review of Lutein by the Natural Standard Research Collaboration
  authors_or_organization: Catherine Ulbricht; Natural Standard Research Collaboration
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25616151/
  kind: evidence_based_systematic_review
  insight: Reviews lutein dosing, pharmacokinetics, adverse effects, interactions, and clinical evidence; supports generally favorable tolerability but incomplete high-dose evidence.
  limitation: Includes heterogeneous evidence and expert synthesis rather than a single definitive long-term safety trial.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S17
  title: Lutein and Zeaxanthin Isomers in Eye Health and Disease
  authors_or_organization: Paul S. Bernstein; Bin Li; Pramod P. Vachali; Anuradha Gorusupudi; Rajashri Shyam; Brian S. Henriksen; John M. Nolan
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5611842/
  kind: narrative_mechanistic_and_clinical_review
  insight: Reviews macular pigment biology, absorption, transport, metabolism, visual performance, and evidence gaps.
  limitation: Narrative review; many clinical findings involve mixtures rather than lutein alone.
  funding: not-assessed
  sponsorshipStatus: not-assessed
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S18
  title: Lutein from Tagetes erecta L.
  authors_or_organization: Joint FAO/WHO Expert Committee on Food Additives
  year: 2005
  url: https://www.inchem.org/documents/jecfa/jecmono/v54je01.pdf
  kind: international_food_safety_evaluation
  insight: Summarizes human timing data, including approximately 11–16-hour post-dose peaks and steady-state observations with daily supplementation.
  limitation: Regulatory safety review with older studies; not a clinical efficacy review or official human UL.
  funding: World Health Organization and Food and Agriculture Organization
  sponsorshipStatus: intergovernmental
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed

- id: S19
  title: Effects of Lutein Supplementation on Macular Pigment Optical Density and Visual Acuity in Patients With Age-related Macular Degeneration
  authors_or_organization: ClinicalTrials.gov; National Library of Medicine
  year: 2009
  url: https://clinicaltrials.gov/study/NCT00879671
  kind: clinical_trial_registry
  insight: Registry record for the LISA lutein-only AMD trial.
  limitation: Registry record rather than a complete results publication.
  funding: Medical University of Vienna
  sponsorshipStatus: academic
  conflictsOfInterest: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

This article is an evidence summary, not a treatment directive, product endorsement, medical diagnosis, or jurisdiction-specific legal opinion. Product labels, disease claims, and supplement regulations must be evaluated under the law applicable to the relevant country and product.

```yaml
- article_status: research_summary
- medical_status: not_a_diagnosis_or_treatment_instruction
- product_status: no_product_endorsement
- legal_status: jurisdiction_specific_details_not_assessed
```

## Research Metadata
- **Total research steps**: 55
- **Search queries executed**: 9
- **Citations found**: 19
- **Task ID**: resp_08af9cf3680adeda016ac94bbb8f4c87d2b559b9a31ea72a6f
- **Execution time**: 542.74 seconds

## Citations
1. [Source 1](https://clinicaltrials.gov/study/NCT00879671)
2. [Source 2](https://www.nei.nih.gov/eye-health-information/clinical-trials/age-related-eye-disease-studies-aredsareds2/about-areds-and-areds2)
3. [Source 3](https://pubmed.ncbi.nlm.nih.gov/22858124/)
4. [Source 4](https://pubmed.ncbi.nlm.nih.gov/32998324/)
5. [Source 5](https://jamanetwork.com/journals/jama/fullarticle/1684847)
6. [Source 6](https://pmc.ncbi.nlm.nih.gov/articles/PMC9164119/)
7. [Source 7](https://www.cochrane.org/evidence/CD000254_do-antioxidant-vitamin-and-mineral-supplements-slow-down-progression-age-related-macular)
8. [Source 8](https://pubmed.ncbi.nlm.nih.gov/21873668/)
9. [Source 9](https://pubmed.ncbi.nlm.nih.gov/25815324/)
10. [Source 10](https://pubmed.ncbi.nlm.nih.gov/25468896/)
11. [Source 11](https://pmc.ncbi.nlm.nih.gov/articles/PMC8634499/)
12. [Source 12](https://pmc.ncbi.nlm.nih.gov/articles/PMC8510423/)
13. [Source 13](https://jamanetwork.com/journals/jama/fullarticle/2429713)
14. [Source 14](https://pubmed.ncbi.nlm.nih.gov/31382835/)
15. [Source 15](https://pubmed.ncbi.nlm.nih.gov/23052623/)
16. [Source 16](https://pubmed.ncbi.nlm.nih.gov/27273910/)
17. [Source 17](https://pubmed.ncbi.nlm.nih.gov/25616151/)
18. [Source 18](https://pmc.ncbi.nlm.nih.gov/articles/PMC5611842/)
19. [Source 19](https://www.inchem.org/documents/jecfa/jecmono/v54je01.pdf)
