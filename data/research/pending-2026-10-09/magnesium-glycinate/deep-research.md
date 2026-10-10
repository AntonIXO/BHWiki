# Research Report: Research exactly magnesium glycinate/bisglycinate (slug magnesium-glycinate). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover pure bisglycinate versus buffered products, elemental dose, direct human sleep/cognition/deficiency trials and evidence gaps, glycine coingredient attribution, comparative absorption/tolerance, safety and manufacturer disclosures. Do not borrow evidence from other magnesium salts. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
slug: magnesium-glycinate
title: Magnesium glycinate/bisglycinate
x-shape: supplement
---

## Summary

Magnesium glycinate, magnesium bisglycinate, and magnesium diglycinate generally denote the same chelate: one magnesium ion associated with two glycinate ligands. The anhydrous compound has formula `C4H8MgN2O4`, molecular weight 172.42 g/mol, and a theoretical elemental-magnesium fraction of about 14.1%. [PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate) ([pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate?utm_source=openai))

Direct human evidence is limited. A 2025 placebo-controlled sleep trial found a small improvement in self-reported insomnia severity with 250 mg/day elemental magnesium as bisglycinate, but the intervention also supplied 1,523 mg/day glycine. A 2020 cognition trial was null overall and positive only in a small subgroup over age 65. A 2026 trial studied magnesium glycinate in hypomagnesemic adults with asthma or COPD, but its “440 mg/day” dose was not identified as elemental magnesium in the abstract. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/), [cognition RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/), [deficiency RCT](https://pubmed.ncbi.nlm.nih.gov/42633850/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

“Pure” bisglycinate and “buffered” glycinate are not interchangeable product identities. Manufacturer and regulatory disclosures show buffered products can contain magnesium oxide in addition to magnesium glycinate/bisglycinate. [TGA product record](https://www.tga.gov.au/resources/artg/363829), [Balchem/Albion catalog](https://balchem.com/human-nutrition-health/wp-content/uploads/sites/2/2024/03/TRAACS_Product-list_Albion-Minerals.pdf) ([tga.gov.au](https://www.tga.gov.au/resources/artg/363829?utm_source=openai))

```yaml
- identity: magnesium glycinate = magnesium bisglycinate/diglycinate in common supplement usage
  evidence: chemical database
  source: https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate
- strongest_direct_signal: modest self-reported sleep benefit at 250 mg/day elemental magnesium for 4 weeks
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- major_attribution_problem: sleep intervention supplied 1523 mg/day glycine as well as magnesium
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- evidence_gaps: pure-versus-buffered trials, glycine-controlled sleep trials, replicated cognition trials, and robust elemental-dose deficiency trials
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- interpretation: product identity and elemental magnesium amount matter more than front-label compound weight
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
```

## Description

Magnesium bisglycinate is a magnesium–amino-acid chelate. “Glycinate” is common commercial shorthand; “bisglycinate” describes the two-glycinate stoichiometry represented by the PubChem structure. Theoretical elemental magnesium is approximately 24.305/172.42, or 14.1%, for the anhydrous formula; hydrated or differently specified raw materials can weigh more per unit of magnesium. [PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate) ([pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate?utm_source=openai))

Pure bisglycinate means the claimed magnesium source is the chelate itself. Buffered material is a blend or raw-material grade containing bisglycinate plus a denser magnesium source, commonly magnesium oxide. The Australian Therapeutic Goods Register lists one “Buffered Magnesium Glycinate” product with heavy magnesium oxide and magnesium glycinate dihydrate; Balchem/Albion separately lists “Magnesium Bisglycinate Chelate” and “Magnesium Bisglycinate Chelate Buffered.” [TGA](https://www.tga.gov.au/resources/artg/363829), [Balchem](https://balchem.com/human-nutrition-health/wp-content/uploads/sites/2/2024/03/TRAACS_Product-list_Albion-Minerals.pdf) ([tga.gov.au](https://www.tga.gov.au/resources/artg/363829?utm_source=openai))

The 2025 sleep trial disclosed its test material: two capsules supplied 1,786 mg magnesium bisglycinate, 250 mg elemental magnesium, and 1,523 mg glycine daily, consistent with approximately 14% elemental magnesium by raw-material weight. [Trial report](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

```yaml
- chemical_names:
    - magnesium glycinate
    - magnesium bisglycinate
    - magnesium diglycinate
  source: https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate
- formula: C4H8MgN2O4
  molecular_weight: 172.42 g/mol
  theoretical_elemental_magnesium: approximately 14.1%
  source: https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate
- pure_product: chelate-only identity is claimed or specified
  source: https://balchem.com/human-nutrition-health/wp-content/uploads/sites/2/2024/03/TRAACS_Product-list_Albion-Minerals.pdf
- buffered_product: may contain magnesium oxide plus glycinate/bisglycinate
  source: https://www.tga.gov.au/resources/artg/363829
- label_check: Supplement Facts expresses elemental magnesium, not total chelate weight
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
```

## Evidence note

This article counts efficacy and pharmacokinetic evidence only when the human intervention itself was identified as magnesium glycinate or bisglycinate. Evidence from magnesium oxide, citrate, sulfate, lactate, or other salts is not used to infer glycinate efficacy. General safety, labeling, and interaction statements are identified as magnesium-class information rather than glycinate-specific efficacy evidence. [NIH ODS](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai))

The direct evidence base is small: one sleep RCT, one cognition ancillary RCT, one pregnancy-cramp RCT, one 2026 hypomagnesemia trial, and limited comparative absorption studies. There is no direct clinical trial isolating pure bisglycinate from buffered bisglycinate, no sleep factorial trial separating elemental magnesium from glycine, and no replicated cognition trial establishing a general cognitive effect. These are inferences from the designs and disclosures of the available studies. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/), [cognition RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/), [pregnancy RCT](https://pubmed.ncbi.nlm.nih.gov/22909270/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

```yaml
- direct_human_sleep_evidence: one 4-week randomized placebo-controlled trial
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- direct_human_cognition_evidence: one 12-week randomized trial with an ancillary MoCA sample
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- direct_human_deficiency_evidence: one 2026 trial in hypomagnesemic asthma/COPD participants
  source: https://pubmed.ncbi.nlm.nih.gov/42633850/
- direct_human_tolerance_evidence: pregnancy-cramp and sleep trials reported no clear excess common adverse effects
  source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- untested_question: pure bisglycinate versus buffered bisglycinate in a controlled human trial
  source: https://www.tga.gov.au/resources/artg/363829
- untested_question: magnesium-only versus glycine-only versus combined bisglycinate for sleep
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
```

## Doses

The relevant dose is elemental magnesium, not the mass of the complete glycinate compound. U.S. Supplement Facts labeling uses elemental magnesium. [NIH ODS](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai))

Observed direct-trial doses were 250 mg/day elemental magnesium for sleep, a personalized mean of 216.5 mg/day for cognition, 300 mg/day elemental magnesium for pregnancy cramps, and 440 mg/day of “magnesium glycinate” in the 2026 deficiency trial without clarification that the number was elemental. The U.S. tolerable upper intake level for supplemental magnesium is 350 mg/day for adults; that limit excludes magnesium from food and is not a glycinate-specific efficacy threshold. [ODS](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/), [trial sources](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai))

```yaml
- sleep_trial:
    elemental_magnesium: 250 mg/day
    raw_bisglycinate: 1786 mg/day
    glycine: 1523 mg/day
    duration: 4 weeks
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- cognition_trial:
    mean_elemental_magnesium: 216.5 mg/day
    range: 77.25-389.55 mg/day
    duration: 12 weeks
    source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- pregnancy_cramp_trial:
    elemental_magnesium: 300 mg/day
    duration: 4 weeks
    source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- hypomagnesemia_trial:
    reported_magnesium_glycinate: 440 mg/day
    elemental_status: unspecified in abstract
    duration: 12 months
    source: https://pubmed.ncbi.nlm.nih.gov/42633850/
- reference_value:
    US_supplemental_upper_limit: 350 mg/day elemental magnesium for adults
    source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
```

## Pharmacokinetics

Direct glycinate pharmacokinetic evidence is limited and does not establish a universal absorption advantage. A 2018 randomized crossover study gave 350 mg magnesium in several formulations, including magnesium bisglycinate, and measured blood, urine, and red-cell magnesium over 24 hours; the proprietary sucrosomial formulation produced a higher red-cell response than bisglycinate in that experiment. The study was single-day, used healthy participants, and did not establish long-term clinical superiority. [Brilli et al.](https://pubmed.ncbi.nlm.nih.gov/29630135/) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/29630135/))

Magnesium amino-acid chelation has been proposed to influence intestinal handling, but reviews describe mixed evidence and insufficient human data to rank all forms reliably. No direct human study identified here demonstrates that pure bisglycinate reaches the brain, muscle, or intracellular compartments better than buffered bisglycinate. [Schuchardt and Hahn](https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/))

```yaml
- absorption_metric: plasma, urine, and red-cell magnesium have been measured after bisglycinate
  source: https://pubmed.ncbi.nlm.nih.gov/29630135/
- comparative_result: one single-day study found a higher red-cell response with a proprietary comparator than with bisglycinate
  source: https://pubmed.ncbi.nlm.nih.gov/29630135/
- clinical_meaning: short-term blood or red-cell change is not equivalent to fractional absorption or clinical benefit
  source: https://pubmed.ncbi.nlm.nih.gov/29630135/
- transporter_claim: amino-acid/dipeptide transport is proposed but not a demonstrated clinical superiority mechanism
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/
- formulation_gap: no direct pure-versus-buffered pharmacokinetic trial identified
  source: https://www.tga.gov.au/resources/artg/363829
```

## Modifiers

Response and interpretation may vary with baseline dietary magnesium, baseline magnesium status, age, calcium-to-magnesium intake ratio, renal function, glycine exposure, and product composition. The sleep trial reported exploratory larger effects among participants with lower dietary magnesium intake. The cognition trial targeted people with calcium-to-magnesium ratios of at least 2.6 and found its signal only in participants older than 65 years. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/), [cognition RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

The sleep trial excluded people consuming more than 200 mg/day supplemental magnesium or more than 1 g/day glycine before enrollment, so its result does not directly address people already exposed to either ingredient. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

```yaml
- baseline_dietary_magnesium: lower intake was associated with greater exploratory sleep response
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- age_modifier: cognition signal appeared in participants older than 65 years
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- calcium_magnesium_context: cognition trial reduced the dietary Ca:Mg ratio toward approximately 2.3
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- glycine_exposure: sleep result cannot be generalized to people already consuming substantial glycine
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- product_modifier: pure and buffered products can deliver different salt mixtures at the same labeled elemental dose
  source: https://www.tga.gov.au/resources/artg/363829
- renal_modifier: impaired renal clearance increases magnesium accumulation risk
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
```

## Effects

The clearest glycinate-specific signal is modest subjective sleep improvement. The 2025 trial’s active group reduced Insomnia Severity Index scores by 3.9 points versus 2.3 points with placebo at week 4; the between-group effect was statistically borderline, `p = 0.049`, with Cohen’s `d = 0.2`. Other psychological outcomes were not significantly different. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

The cognition evidence is exploratory rather than generalizable. Overall MoCA change was not significantly different; a subgroup over age 65 improved by 9.1% over 12 weeks, but the cognitive sample was an ancillary subset and the age interaction was not conventionally definitive. [Cognition RCT](https://pubmed.ncbi.nlm.nih.gov/32280092/) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/32280092/?utm_source=openai))

```yaml
- sleep: small improvement in self-reported insomnia severity
  certainty: limited_direct_evidence
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- cognition: overall null; exploratory positive subgroup over age 65
  certainty: unconfirmed
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- pregnancy_leg_cramps: 50-percent reductions in frequency and intensity favored bisglycinate over placebo
  certainty: one short trial
  source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- hypomagnesemic_asthma_copd: lower inflammatory markers and improved lung-function measures were reported
  certainty: disease-specific, dose ambiguity
  source: https://pubmed.ncbi.nlm.nih.gov/42633850/
- general_calmness: not directly established by a glycinate-specific controlled trial
  certainty: evidence_gap
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
```

## Outcomes

The sleep outcome was a questionnaire score, not polysomnography, actigraphy, or a biomarker of sleep physiology. The cognition outcome was MoCA, a screening measure, not dementia incidence or a validated disease-modifying endpoint. The deficiency study reported inflammatory and pulmonary outcomes; the abstract did not provide the magnitude of serum-magnesium correction. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/), [cognition RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/), [deficiency RCT](https://pubmed.ncbi.nlm.nih.gov/42633850/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

The pregnancy-cramp study is the most direct evidence for a symptom outcome other than sleep or cognition, but it lasted only four weeks and studied healthy pregnant women with frequent cramps. [Pregnancy RCT](https://pubmed.ncbi.nlm.nih.gov/22909270/) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/22909270/?utm_source=openai))

```yaml
- outcome_type: subjective symptom scale
  example: Insomnia Severity Index
  limitation: no objective sleep measurement
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- outcome_type: cognitive screening
  example: Montreal Cognitive Assessment
  limitation: ancillary subset, possible practice effect, no dementia endpoint
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- outcome_type: disease biomarker/function
  example: CRP, cytokines, FEV1 in hypomagnesemic asthma/COPD
  limitation: disease-specific and abstract dose ambiguity
  source: https://pubmed.ncbi.nlm.nih.gov/42633850/
- outcome_type: symptom responder
  example: 50-percent reduction in pregnancy-cramp frequency or intensity
  limitation: short duration and narrow population
  source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- long_term_outcome: not established for healthy users
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
```

## Mechanisms

Elemental magnesium is the mineral component measured in trials; glycine is the coingredient supplied by the chelate. In the sleep trial, 250 mg elemental magnesium was accompanied by 1,523 mg glycine. Because there was no magnesium-only, glycine-only, or factorial arm, the observed sleep difference cannot be attributed uniquely to magnesium, glycine, or their combination. [Sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai))

Proposed mechanisms include magnesium-dependent neuromuscular and NMDA-related physiology, glycine-mediated neurotransmission, and altered calcium–magnesium balance. These are mechanistic hypotheses rather than validated explanations for the clinical results. The cognition study’s APOE-methylation findings are exploratory and were not shown to produce durable cognitive or Alzheimer-disease outcomes. [Cognition RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/), [magnesium absorption review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/) ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/))

```yaml
- elemental_component: magnesium ion supplies the measured mineral dose
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
- glycine_component: pure bisglycinate necessarily carries glycine; the sleep trial delivered 1523 mg/day
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- attribution_status: magnesium and glycine effects were not separated experimentally
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- cognition_hypothesis: Ca:Mg reduction and APOE methylation were exploratory findings in an older subgroup
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- buffered_mechanism: added oxide changes the salt mixture and prevents attributing the entire product to bisglycinate
  source: https://www.tga.gov.au/resources/artg/363829
```

## Cautions

Magnesium supplements can cause diarrhea, nausea, and abdominal cramping; very high systemic magnesium can cause hypotension, lethargy, breathing difficulty, cardiac conduction problems, or cardiac arrest. Risk is increased when renal clearance is impaired. These are magnesium-class safety statements, not proof that pure bisglycinate has the same risk frequency as every other magnesium product. [NIH ODS](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai))

The direct glycinate/bisglycinate trials were short or disease-specific. The pregnancy study found no significant nausea or diarrhea difference, the sleep study reported no excess tolerability signal, and the 2026 deficiency trial reported no serious adverse events; none establishes long-term safety for all populations or products. [Pregnancy RCT](https://pubmed.ncbi.nlm.nih.gov/22909270/), [sleep RCT](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/), [deficiency RCT](https://pubmed.ncbi.nlm.nih.gov/42633850/) ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/22909270/?utm_source=openai))

```yaml
- gastrointestinal: diarrhea, nausea, and cramping are recognized magnesium-supplement effects
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
- renal: reduced kidney function increases accumulation risk
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
- dose_threshold: US supplemental upper limit is 350 mg/day for adults
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
- direct_trial_tolerance: no significant excess nausea/diarrhea in the pregnancy bisglycinate trial
  source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- product_quality: “buffered glycinate” may contain magnesium oxide
  source: https://www.tga.gov.au/resources/artg/363829
- contamination_disclosure: raw-material specifications and finished-product testing are manufacturer-specific
  source: https://balchem.com/human-nutrition-health/wp-content/uploads/sites/2/2024/03/TRAACS_Product-list_Albion-Minerals.pdf
```

## Claims

```yaml
- claim: "magnesium glycinate improves sleep"
  status: limited_support
  basis: one 4-week RCT with small self-reported effect
  attribution_limit: 1523 mg/day glycine was co-delivered
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- claim: "magnesium glycinate improves cognition"
  status: unconfirmed
  basis: overall trial null; older-subgroup signal only
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- claim: "magnesium glycinate corrects magnesium deficiency"
  status: preliminary_direct_evidence
  basis: 2026 hypomagnesemia trial
  limitation: 440 mg dose was not identified as elemental in the abstract
  source: https://pubmed.ncbi.nlm.nih.gov/42633850/
- claim: "magnesium glycinate is better absorbed than other forms"
  status: unproven_universally
  basis: limited direct comparative pharmacokinetics
  source: https://pubmed.ncbi.nlm.nih.gov/29630135/
- claim: "magnesium glycinate is gentle on the stomach"
  status: plausible_but_limited
  basis: no excess common GI effects in one pregnancy trial
  limitation: not a universal head-to-head tolerance result
  source: https://pubmed.ncbi.nlm.nih.gov/22909270/
- claim: "buffered magnesium glycinate is pure bisglycinate"
  status: false_as_a_general_identity
  basis: buffered products can contain magnesium oxide
  source: https://www.tga.gov.au/resources/artg/363829
```

## Interactions

Magnesium can reduce absorption of oral bisphosphonates and some antibiotics; magnesium-containing products can also be relevant to drugs that alter magnesium balance. The NIH interaction information is generally magnesium-class information, not a dedicated magnesium-bisglycinate interaction database. [NIH ODS](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/) ([ods.od.nih.gov](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/?crsi=4077191147&utm_source=openai))

```yaml
- oral_bisphosphonates: magnesium can reduce absorption
  source: https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/
- tetracycline_or_quinolone_antibiotics: magnesium can reduce absorption
  source: https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/
- magnesium_status_modifiers: proton-pump inhibitors and some diuretics can alter magnesium status
  source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- glycinate_specific_interactions: no robust dedicated human interaction dataset identified
  source: https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/
```

## Experience links

Anecdotal reports are not used to establish efficacy. The links below are direct human-study publications or registries rather than product testimonials.

```yaml
- sleep_trial_publication: https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/
- sleep_trial_registry: https://drks.de/search/en/trial/DRKS00031494
- cognition_trial_publication: https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/
- pregnancy_trial_publication: https://pubmed.ncbi.nlm.nih.gov/22909270/
- deficiency_trial_publication: https://pubmed.ncbi.nlm.nih.gov/42633850/
```

## References

```yaml
- title: "Magnesium Glycinate"
  authors_or_organization: "National Center for Biotechnology Information, National Institutes of Health"
  year: 2026
  url: "https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate"
  kind: "chemical database"
  insight: "Formula, molecular weight, synonyms, and compound identity."
  limitation: "Not a clinical efficacy or finished-product quality study."
  funding: "NIH/NLM database support."
  sponsorshipStatus: "government database"
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "not_applicable"

- title: "Magnesium - Health Professional Fact Sheet"
  authors_or_organization: "NIH Office of Dietary Supplements"
  year: 2026
  url: "https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/"
  kind: "government evidence and safety fact sheet"
  insight: "Elemental-magnesium labeling, supplemental upper limit, adverse effects, and interactions."
  limitation: "Most efficacy and absorption summaries are not specific to bisglycinate."
  funding: "U.S. National Institutes of Health."
  sponsorshipStatus: "government"
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "not_reported"

- title: "Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial"
  authors_or_organization: "Julius Schuster; Igor Cycelskij; Adrian Lopresti; Andreas Hahn"
  year: 2025
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/"
  kind: "randomized, double-blind, placebo-controlled human trial"
  insight: "250 mg/day elemental magnesium plus 1523 mg/day glycine modestly improved self-reported insomnia severity over 4 weeks."
  limitation: "Short duration, subjective primary outcome, no objective sleep measures, and no glycine-only comparator."
  funding: "Institute of Food and One Health, Leibniz University Hannover."
  sponsorshipStatus: "academic internal funding; Biogena supplied the test product"
  conflictsOfInterest: "No commercial funding was reported in the accessible funding statement; manufacturer relationship beyond product supply is unclear."
  conflictOfInterestStatus: "unclear"

- title: "Ca:Mg Ratio, APOE Cytosine Modifications, and Cognitive Function: Results from a Randomized Trial"
  authors_or_organization: "Xiaoli Zhu; Adam R. Borenstein; Yujing Zheng; Wen Zhang; David L. Seidner; Robert Ness; Harvey J. Murff; Bin Li; Mary Jo Shrubsole; Chao Yu; Luiping Hou; Qi Dai"
  year: 2020
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/"
  kind: "randomized trial ancillary cognition analysis"
  insight: "Personalized magnesium glycinate supplementation showed no overall MoCA benefit but a subgroup signal in participants older than 65 years with high Ca:Mg intake ratios."
  limitation: "Ancillary subset, possible practice effect, no intention-to-treat cognition analysis, no Alzheimer-disease endpoint, and incomplete product-composition detail."
  funding: "National Cancer Institute grants R01 CA149633 and R01 CA202936; Ingram Cancer Center Endowment; Vanderbilt CTSA and institutional resources."
  sponsorshipStatus: "public academic funding"
  conflictsOfInterest: "All authors reported no conflicts of interest."
  conflictOfInterestStatus: "none_reported"

- title: "Oral magnesium for relief in pregnancy-induced leg cramps: a randomised controlled trial"
  authors_or_organization: "Chayanis Supakatisant; Vorapong Phupong"
  year: 2015
  url: "https://pubmed.ncbi.nlm.nih.gov/22909270/"
  kind: "randomized, double-blind, placebo-controlled human trial"
  insight: "300 mg/day elemental magnesium as bisglycinate for 4 weeks improved 50-percent responder rates for cramp frequency and intensity."
  limitation: "Small, short, pregnancy-specific study; not a sleep, cognition, or general deficiency trial."
  funding: "Independent funding."
  sponsorshipStatus: "independent"
  conflictsOfInterest: "No conflict reported in the evidence extraction."
  conflictOfInterestStatus: "none_reported"

- title: "Efficacy and safety of magnesium glycinate as add on therapy in hypomagnesemic asthma and chronic obstructive pulmonary disease patients: A randomised controlled study assessing inflammatory biomarkers"
  authors_or_organization: "Maneesh Kumar Maddirevula; Muhasaparur G. Rajanandh; Boman Wesley"
  year: 2026
  url: "https://pubmed.ncbi.nlm.nih.gov/42633850/"
  kind: "randomized, double-blind, placebo-controlled human trial"
  insight: "In adults with serum magnesium below 1.6 mg/dL and asthma or COPD, 12 months of reported magnesium glycinate was associated with lower CRP and improved pulmonary measures."
  limitation: "Ahead-of-print abstract, disease-specific population, and 440 mg/day was not identified as elemental magnesium."
  funding: "Not reported in the PubMed record."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Authors declared no known competing financial interests or personal relationships."
  conflictOfInterestStatus: "none_reported_by_authors"

- title: "Magnesium bioavailability after administration of sucrosomial® magnesium: results of an ex-vivo study and a comparative, double-blinded, cross-over study in healthy subjects"
  authors_or_organization: "E. Brilli; S. Khadge; A. Fabiano; Y. Zambito; T. Williams; G. Tarantino"
  year: 2018
  url: "https://pubmed.ncbi.nlm.nih.gov/29630135/"
  kind: "single-day comparative crossover pharmacokinetic study"
  insight: "Included a magnesium-bisglycinate arm and measured blood, urine, and red-cell magnesium after 350 mg magnesium."
  limitation: "Short-term healthy-volunteer study; proprietary comparator; does not establish universal bisglycinate superiority."
  funding: "Research support listed as non-U.S. government; authors affiliated with PharmaNutra."
  sponsorshipStatus: "industry-linked"
  conflictsOfInterest: "Commercial affiliation creates potential relevance; detailed COI not clear from the abstract."
  conflictOfInterestStatus: "unclear"

- title: "Intestinal Absorption and Factors Influencing Bioavailability of Magnesium—An Update"
  authors_or_organization: "J. P. Schuchardt; A. Hahn"
  year: 2017
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/"
  kind: "narrative review"
  insight: "Summarizes magnesium absorption determinants and the limited, mixed evidence for differences among forms."
  limitation: "Not a bisglycinate-specific clinical efficacy study."
  funding: "Not reported."
  sponsorshipStatus: "not reported"
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "unknown"

- title: "Opinion on certain bisglycinates as sources of copper, zinc, calcium, magnesium and glycinate nicotinate as source of chromium in foods intended for the general population (including food supplements) and foods for particular nutritional uses"
  authors_or_organization: "European Food Safety Authority"
  year: 2008
  url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2008.718"
  kind: "regulatory scientific opinion"
  insight: "Evaluates specified bisglycinates as mineral sources, including magnesium bisglycinate."
  limitation: "Regulatory source-safety assessment, not proof of clinical superiority or finished-product purity."
  funding: "European Food Safety Authority."
  sponsorshipStatus: "public regulatory agency"
  conflictsOfInterest: "Institutional assessment; no commercial conflict stated."
  conflictOfInterestStatus: "not_applicable"

- title: "Buffered Magnesium Glycinate (363829)"
  authors_or_organization: "Therapeutic Goods Administration, Australian Government"
  year: 2021
  url: "https://www.tga.gov.au/resources/artg/363829"
  kind: "regulatory product record"
  insight: "Documents a marketed buffered product containing heavy magnesium oxide and magnesium glycinate dihydrate."
  limitation: "One registered product; cannot determine composition of every product labeled glycinate."
  funding: "Australian Government regulatory system."
  sponsorshipStatus: "government regulator"
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "not_applicable"

- title: "TRAACS® Product List: Albion Minerals"
  authors_or_organization: "Balchem Corporation"
  year: 2024
  url: "https://balchem.com/human-nutrition-health/wp-content/uploads/sites/2/2024/03/TRAACS_Product-list_Albion-Minerals.pdf"
  kind: "manufacturer raw-material catalog"
  insight: "Separately lists magnesium bisglycinate chelate and buffered magnesium bisglycinate grades."
  limitation: "Commercial manufacturer disclosure, not independent product testing."
  funding: "Manufacturer publication."
  sponsorshipStatus: "commercial"
  conflictsOfInterest: "Commercial interest in mineral-chelate ingredients."
  conflictOfInterestStatus: "present"

- title: "Dietary Supplements"
  authors_or_organization: "U.S. Food and Drug Administration"
  year: 2026
  url: "https://www.fda.gov/food/dietary-supplements"
  kind: "regulatory information"
  insight: "U.S. regulatory framework for dietary supplements."
  limitation: "Does not assess any specific magnesium-glycinate product."
  funding: "U.S. federal government."
  sponsorshipStatus: "government"
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "not_applicable"

- title: "Structure/Function Claims"
  authors_or_organization: "U.S. Food and Drug Administration"
  year: 2026
  url: "https://www.fda.gov/food/dietary-supplements/structurefunction-claims"
  kind: "regulatory guidance"
  insight: "Distinguishes structure/function claims from disease claims for dietary supplements."
  limitation: "Does not validate efficacy of magnesium glycinate claims."
  funding: "U.S. federal government."
  sponsorshipStatus: "government"
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "not_applicable"
```

## Legal

In the United States, magnesium glycinate products marketed as dietary supplements are not thereby FDA-approved treatments for insomnia, cognitive decline, asthma, COPD, or magnesium deficiency. Structure/function language is distinct from disease-treatment claims, and product-specific labeling, manufacturing, and disclosure remain relevant to legal identity and substantiation. [FDA dietary supplements](https://www.fda.gov/food/dietary-supplements), [FDA structure/function claims](https://www.fda.gov/food/dietary-supplements/structurefunction-claims)

```yaml
- US_status: dietary supplement ingredient, not automatically an FDA-approved drug
  source: https://www.fda.gov/food/dietary-supplements
- claim_boundary: structure/function claims are distinct from disease claims
  source: https://www.fda.gov/food/dietary-supplements/structurefunction-claims
- label_identity: elemental magnesium and all disclosed magnesium sources determine the labeled formulation
  source: https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/
- article_scope: research summary, not a product certification or clinical treatment directive
  source: https://www.fda.gov/food/dietary-supplements
```

## Research Metadata
- **Total research steps**: 64
- **Search queries executed**: 10
- **Citations found**: 10
- **Task ID**: resp_0b685f40b46a857f016ac94e84aee087d2b6e030ff2ab4e128
- **Execution time**: 393.27 seconds

## Citations
1. [Magnesium Glycinate | C4H8MgN2O4 | CID 84645 - PubChem](https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-Glycinate?utm_source=openai)
2. [Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/?utm_source=openai)
3. [Buffered Magnesium Glycinate (363829) | Therapeutic Goods Administration (TGA)](https://www.tga.gov.au/resources/artg/363829?utm_source=openai)
4. [Magnesium - Health Professional Fact Sheet](https://ods.od.nih.gov/factsheets/magnesium-healthProfessional/?utm_source=openai)
5. [Magnesium bioavailability after administration of sucrosomial® magnesium: results of an ex-vivo study and a comparative, double-blinded, cross-over study in healthy subjects - PubMed](https://pubmed.ncbi.nlm.nih.gov/29630135/)
6. [Checking your browser - reCAPTCHA](https://pmc.ncbi.nlm.nih.gov/articles/PMC5652077/)
7. [Ca:Mg Ratio, APOE Cytosine Modifications, and Cognitive Function: Results from a Randomized Trial.](https://pubmed.ncbi.nlm.nih.gov/32280092/?utm_source=openai)
8. [Oral magnesium for relief in pregnancy-induced leg cramps: a randomised controlled trial - PubMed](https://pubmed.ncbi.nlm.nih.gov/22909270/?utm_source=openai)
9. [Ca:Mg Ratio, APOE Cytosine Modifications and Cognitive Function: Results from a Randomized Trial - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7737669/)
10. [Magnesium - Health Professional Fact Sheet](https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/?crsi=4077191147&utm_source=openai)
