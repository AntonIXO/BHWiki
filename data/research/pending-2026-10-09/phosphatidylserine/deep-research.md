# Research Report: Research exactly phosphatidylserine (slug phosphatidylserine). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover soy/sunflower versus historical bovine-cortex preparations, dementia/healthy cognition/stress/exercise randomized trials and null findings, mixtures/formulations, cortisol biomarkers versus clinical benefit, safety, product-specific sponsorship and conflicts. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
title: "Phosphatidylserine"
slug: "phosphatidylserine"
x-shape: "compound-monograph"
---

# Phosphatidylserine

## Summary

Phosphatidylserine (PS; PtdSer) is an endogenous anionic membrane phospholipid sold as a supplement. Human evidence is mixed: historical bovine-cortex trials reported selective cognitive or stress-biomarker effects, whereas a well-designed soy-PS trial was null. A 2022 meta-analysis found a memory signal in older adults but no improvement in activities of daily living; its dataset combined randomized and pre–post studies with different PS sources and formulations. Stress studies more consistently altered ACTH or cortisol than validated clinical outcomes, and exercise findings were largely null. Short-term oral use was generally well tolerated; long-term safety and dementia-prevention or treatment effects remain unestablished. Source IDs: PS-01, PS-02, PS-03, PS-10, PS-16. ([biolimitless.com](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf))

```yaml
- conclusion: "Evidence is formulation-specific and mixed, not a demonstrated dementia treatment."
  sourceId: PS-01
- strongest_negative_trial: "Soy-derived PS at 300 or 600 mg/day for 12 weeks produced no significant cognitive benefit."
  sourceId: PS-02
- strongest_positive_signal: "Small or older studies report selective memory or HPA-axis biomarker effects."
  sourceId: PS-03
- safety: "Short trials generally reported no serious adverse-event signal."
  sourceId: PS-11
```

## Description

PS is a glycerophospholipid concentrated in cell membranes, including neural tissue. Historical clinical research mainly used bovine-cortex PS (BC-PS). Modern products are predominantly enzymatically produced from soy or sunflower lecithin; marine PS products may contain EPA or DHA. The serine-containing head group is conserved, but fatty-acid composition differs: BC-PS contains more saturated/monounsaturated fatty acids and some DHA, soy and sunflower products are PUFA-rich, and marine preparations can be EPA/DHA-rich. The 2022 elderly meta-analysis included bovine, soy, and marine preparations but not a comparable sunflower efficacy trial; sunflower evidence is primarily regulatory safety documentation. Source IDs: PS-01, PS-13, PS-14. ([biolimitless.com](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf))

```yaml
- historical_form: "Bovine-cortex PS; used in many 1980s–1990s cognition and stress trials."
  sourceId: PS-01
- current_plant_forms: "Soy- and sunflower-lecithin-derived PS made by enzymatic transphosphatidylation."
  sourceId: PS-04
- marine_forms: "PS preparations containing marine fatty acids, often EPA/DHA."
  sourceId: PS-11
- comparability: "Different acyl chains and co-ingredients prevent assuming equivalent clinical effects."
  sourceId: PS-01
```

## Evidence note

The principal elderly systematic review identified nine studies involving 961 participants: five randomized trials and four pre–post studies; doses were 100–300 mg/day and durations were six weeks to six months. It reported a memory benefit but no activities-of-daily-living benefit, with five studies judged low risk of bias and four having some concerns. Positive findings often came from subgroup analyses, open-label studies, historical BC-PS, or mixtures. Product-specific sponsorship is material: the PS–omega-3 safety trial was funded by Enzymotec, with three employee authors and one consultant; the positive soy open-label pilot was authored by Enzymotec employees. Source IDs: PS-01, PS-11, PS-12. ([biolimitless.com](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf))

```yaml
- evidence_base: "Nine studies; 961 participants; five RCTs and four pre–post studies."
  sourceId: PS-01
- evidence_limit: "Mixed sources, mixtures, short durations, subgroup analyses, and modest sample sizes."
  sourceId: PS-01
- sponsorship_signal: "Enzymotec-funded PS–omega-3 safety study included employee authors and a consultant."
  sourceId: PS-11
- sponsorship_signal_2: "Soy-PS open-label pilot was conducted by Enzymotec employees."
  sourceId: PS-12
```

## Doses

Studied oral doses range from 100–300 mg/day in older-adult cognition trials, 300–600 mg/day in the null soy trial, and 750–800 mg/day in exercise or historical BC-PS stress studies. PAS studies report composite doses of 400–800 mg/day, while another trial used 200 mg PS plus 200 mg phosphatidic acid or 400 mg PS plus 400 mg phosphatidic acid daily. These are research exposures, not an established optimal regimen. Source IDs: PS-02, PS-04, PS-08, PS-09, PS-10, PS-17. ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/11842880/?utm_source=openai))

```yaml
- cognition_older_adults: "100 or 300 mg/day soy PS for six months; 300 or 600 mg/day for 12 weeks in another trial."
  sourceId: PS-02
- historical_dementia: "300 mg/day BC-PS, commonly 100 mg three times daily."
  sourceId: PS-05
- exercise_stress: "750 mg/day soy PS for 10 days; 800 mg/day BC-PS for 10 days."
  sourceId: PS-09
- PAS_mental_stress: "400, 600, or 800 mg/day of a PS/phosphatidic-acid complex."
  sourceId: PS-08
- PAS_chronic_stress: "200/200 or 400/400 mg/day PS/phosphatidic acid."
  sourceId: PS-17
```

## Pharmacokinetics

In a PS–phosphatidic-acid study, serum PS peaked about 90 minutes after a single ingestion and returned to baseline by approximately 180 minutes. This describes a mixture and does not establish brain exposure. Reviews state that oral PS is digested, remodeled, and transported through lipid pathways, but the amount reaching the brain, whether it crosses the blood–brain barrier intact, and whether intact supplemental PS is incorporated into neurons remain unresolved. Source IDs: PS-07, PS-13. ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/25414047/?utm_source=openai))

```yaml
- observed_serum_profile: "Peak at approximately 90 minutes; return toward baseline by approximately 180 minutes."
  sourceId: PS-07
- brain_exposure: "Human brain delivery and intact neuronal incorporation are not established."
  sourceId: PS-13
- interpretation: "Serum kinetics cannot be treated as evidence of cognitive or clinical efficacy."
  sourceId: PS-13
```

## Modifiers

Observed effects vary with source, fatty-acid composition, formulation, baseline impairment or stress, dose, and endpoint. In the Crook BC-PS trial, participants with lower baseline performance appeared more responsive; in the Kato soy trial, the overall memory battery was null between groups while a lower-score subgroup showed delayed-recall signals. The 2014 PAS trial found biomarker effects only in chronically high-stress men, not low-stress men. Source IDs: PS-03, PS-04, PS-17. ([neurology.org](https://www.neurology.org/doi/abs/10.1212/WNL.41.5.644?is_nova=true&nb_cid=24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&nbclid=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&ref_id=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&src=%5B07.02.26%5D+MM+E.I1&sub1=2019982747502501890&sub2=%5B07.02.26%5D+MM+E.I1&sub3=2019982842447720450&sub4=%5B07.02.26%5D+C1_Img&sub5=2019983294635634690&sub6=Img_02&sub7=android&sub8=0&utm_source=openai))

```yaml
- source_modifier: "Bovine, soy, sunflower, and marine PS differ in fatty-acid composition."
  sourceId: PS-01
- formulation_modifier: "PS alone, PS plus phosphatidic acid, PS plus EPA/DHA, and multinutrient products are not interchangeable."
  sourceId: PS-07
- baseline_modifier: "Lower baseline cognition or higher chronic stress may identify responsive subgroups."
  sourceId: PS-03
- dose_modifier: "Some PAS effects appeared at an intermediate dose and not at higher doses."
  sourceId: PS-08
```

## Effects

Evidence spans dementia, age-associated memory complaints, mild cognitive impairment, acute psychosocial stress, and exercise. Results are endpoint-specific rather than consistently clinical. Source IDs: PS-01 through PS-18. ([neurology.org](https://www.neurology.org/doi/abs/10.1212/WNL.41.5.644?is_nova=true&nb_cid=24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&nbclid=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&ref_id=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&src=%5B07.02.26%5D+MM+E.I1&sub1=2019982747502501890&sub2=%5B07.02.26%5D+MM+E.I1&sub3=2019982842447720450&sub4=%5B07.02.26%5D+C1_Img&sub5=2019983294635634690&sub6=Img_02&sub7=android&sub8=0&utm_source=openai))

```yaml
- domain: "Dementia and Alzheimer disease"
  finding: "Historical BC-PS trials were inconsistent. Delwaide randomized 42 hospitalized patients; 35 completed six weeks at 300 mg/day, with a significant Peri-scale effect but no convincing broad result. Crook studied 51 probable-AD patients for 12 weeks at 300 mg/day and reported improvements on selected cognitive measures, greatest in less severe disease."
  sourceId: PS-05
- domain: "Dementia and Alzheimer disease"
  finding: "A soy PS plus phosphatidic-acid product, 300 mg PS plus 240 mg PA/day for two months, stabilized seven activities of daily living in the per-protocol PS+PA group (n=53) while placebo declined (n=39); this was short-term functional stabilization, not disease modification."
  sourceId: PS-07
- domain: "Healthy or near-healthy cognition"
  finding: "Crook reported benefit with 300 mg/day BC-PS for 12 weeks in 149 people with age-associated memory impairment. In contrast, Jorissen randomized 120 older adults to placebo, 300 mg/day, or 600 mg/day soy PS for 12 weeks and found no significant difference in any cognitive outcome."
  sourceId: PS-02
- domain: "Soy cognition trial"
  finding: "Kato randomized 78 Japanese adults with subjective memory complaints to placebo, 100 mg/day, or 300 mg/day soy PS for six months; all groups improved on some tests and the overall RBMT comparison was null, while delayed-recall subgroup signals appeared after follow-up."
  sourceId: PS-04
- domain: "Recent MCI mixture trial"
  finding: "A 2025 RCT randomized 190 Chinese adults with MCI for 12 months to a product providing 63 mg/day PS plus 288 mg/day ALA, ginkgo flavonoids, vitamins B1/B6, and folate. Arithmetic, similarity, and short-term-memory scores improved, but the result cannot isolate PS."
  sourceId: PS-18
- domain: "Stress"
  finding: "BC-PS at 800 mg/day for 10 days in nine healthy men blunted exercise-induced ACTH and cortisol. A PAS trial with four groups of 20 found ACTH and cortisol reductions and lower distress only at 400 mg/day PAS, not 600 or 800 mg/day. A later 75-man trial found 400/400 mg/day PS/PA normalized ACTH and cortisol only in highly chronically stressed men, without a significant psychological stress effect."
  sourceId: PS-08
- domain: "Exercise"
  finding: "In 16 male soccer players, 750 mg/day soy PS for 10 days did not reduce cortisol, soreness, creatine kinase, myoglobin, or lipid-peroxidation responses. Running time to exhaustion favored PS numerically but was not statistically significant (P=0.084)."
  sourceId: PS-10
- domain: "PS-containing mixtures"
  finding: "Marine PS combined with DHA/EPA and newer PS/ALA/ginkgo products produce product-level findings; their results should not be attributed to isolated soy or sunflower PS."
  sourceId: PS-01
```

## Outcomes

The most defensible outcome is a possible small, selective memory effect in some older adults with complaints or cognitive decline, with substantial uncertainty about clinical importance. Functional outcomes, dementia prevention, disease modification, exercise recovery, and general stress improvement are not established. ACTH and cortisol reductions are laboratory biomarkers; they are not equivalent to improved mood, resilience, performance, or disease outcomes. Source IDs: PS-01, PS-07, PS-10, PS-16, PS-17. ([biolimitless.com](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf))

```yaml
- cognitive_tests: "Possible modest or domain-specific effects; inconsistent across randomized studies."
  sourceId: PS-01
- daily_function: "No pooled improvement in activities of daily living."
  sourceId: PS-01
- dementia: "No convincing evidence of prevention or disease modification."
  sourceId: PS-16
- cortisol: "Biomarker signal under selected formulations and stress paradigms."
  sourceId: PS-08
- exercise: "No consistent evidence for recovery, soreness, cortisol, or performance benefit."
  sourceId: PS-10
```

## Mechanisms

Endogenous PS helps organize membrane-associated signaling, protein docking, vesicle fusion, receptor activity, and cellular responses to apoptosis and inflammation. Proposed cognition mechanisms include altered membrane function, cholinergic signaling, synaptic transmission, and anti-inflammatory effects. Proposed stress mechanisms involve modulation of hypothalamic–pituitary–adrenal feedback. These mechanisms are biologically plausible but do not establish that oral PS produces clinically meaningful effects in humans. Source IDs: PS-01, PS-13. ([biolimitless.com](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf))

```yaml
- membrane_role: "Anionic phospholipid involved in membrane structure and signaling."
  sourceId: PS-13
- neural_hypothesis: "Potential effects on cholinergic release, receptor function, and synaptic signaling."
  sourceId: PS-01
- inflammatory_hypothesis: "Potential modulation of microglial and oxidative-inflammatory signaling."
  sourceId: PS-01
- HPA_hypothesis: "Potential attenuation or normalization of stress-induced ACTH/cortisol responses."
  sourceId: PS-08
- uncertainty: "Human brain uptake and causal links to clinical benefit remain unresolved."
  sourceId: PS-13
```

## Cautions

Short-term trials generally found no serious safety signal, including soy PS at 300 or 600 mg/day for 12 weeks and soy PS at 100 or 300 mg/day for six months. Reported or potentially related symptoms include flatulence, gastrointestinal discomfort, nausea, vomiting, itching, dizziness, and agitation, although causality was often uncertain. Historical BC-PS was largely displaced because of theoretical prion/BSE contamination concerns. Long-term exposure, pregnancy, lactation, and use in medically complex populations are poorly characterized by these trials. Source IDs: PS-04, PS-11, PS-14, PS-16. ([jstage.jst.go.jp](https://www.jstage.jst.go.jp/article/jcbn/47/3/47_10-62/_pdf))

```yaml
- short_term_safety: "Generally well tolerated in studied older-adult trials."
  sourceId: PS-04
- reported_symptoms: "GI discomfort, flatulence, nausea, vomiting, itching, dizziness, and agitation appeared in some reports; attribution was uncertain."
  sourceId: PS-01
- bovine_cortex: "Historical BC-PS carried theoretical prion-transmission concerns."
  sourceId: PS-14
- evidence_gap: "Long-term safety and special-population safety are not established."
  sourceId: PS-16
```

## Claims

```yaml
- claim: "Supports memory in older adults with subjective or mild cognitive decline."
  status: "Mixed; possible small selective effect, low-to-moderate certainty."
  sourceId: PS-01
- claim: "Treats or prevents Alzheimer disease or dementia."
  status: "Unsupported by convincing clinical evidence."
  sourceId: PS-05
- claim: "Improves cognition in healthy adults."
  status: "Insufficient direct evidence; many studies enrolled memory complaints or used mixtures."
  sourceId: PS-02
- claim: "Lowers stress."
  status: "Biomarker-limited; selected PS/PA studies altered ACTH/cortisol, but clinical stress benefit is unestablished."
  sourceId: PS-08
- claim: "Improves exercise recovery or athletic performance."
  status: "Unproven; controlled exercise findings are mostly null or exploratory."
  sourceId: PS-10
- claim: "Is safe."
  status: "Short-term tolerability is reassuring; long-term certainty is limited."
  sourceId: PS-11
```

## Interactions

Clinical interaction data are sparse. A possible bleeding risk has been raised for PS, and marine PS products add EPA/DHA exposure; this is a theoretical or formulation-specific concern rather than an established PS interaction. An exploratory soy-PS study reported lower blood pressure, so additive blood-pressure effects remain possible but untested. The cited RCTs generally excluded relevant medications or detect uncommon interactions. Source IDs: PS-04, PS-11, PS-12, PS-16. ([alzdiscovery.org](https://www.alzdiscovery.org/cognitive-vitality/ratings/phosphatidylserine))

```yaml
- bleeding: "Possible but unconfirmed concern; more relevant when the product also contains EPA/DHA."
  sourceId: PS-16
- blood_pressure: "A small open-label soy-PS study reported lower systolic and diastolic pressure; interaction evidence is absent."
  sourceId: PS-12
- allergens: "Soy, sunflower, fish, and other formulation excipients create source-specific exposure differences."
  sourceId: PS-11
- interaction_evidence: "No reliable human interaction dataset establishes safety with prescription medicines."
  sourceId: PS-11
```

## Experience links

The links below are human trial reports, not endorsements or efficacy recommendations. Source IDs: PS-02, PS-04, PS-08, PS-11.

```yaml
- link: "[Soy PS cognition RCT, Jorissen 2001](https://pubmed.ncbi.nlm.nih.gov/11842880/)"
  result: "Null randomized trial."
  sourceId: PS-02
- link: "[Soy PS cognition study, Kato-Kataoka 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2966935/)"
  result: "Overall null battery comparison with subgroup delayed-recall signal."
  sourceId: PS-04
- link: "[PAS mental-stress RCT, Hellhammer 2004](https://pubmed.ncbi.nlm.nih.gov/15512856/)"
  result: "Dose-specific ACTH/cortisol signal."
  sourceId: PS-08
- link: "[PS–omega-3 safety RCT, Vakhapova 2011](https://bmcneurol.biomedcentral.com/articles/10.1186/1471-2377-11-79)"
  result: "Product-specific safety and sponsorship disclosures."
  sourceId: PS-11
```

## References

```yaml
- sourceId: PS-01
  title: "Effect of phosphatidylserine on cognitive function in the elderly: A systematic review and meta-analysis"
  authors: "Eun Young Kang; Fengjiao Cui; Hyun Kyung Kim; Hadia Nawaz; Sumin Kang; Hayoon Kim; Jihye Jang; Gwang-woong Go"
  year: 2022
  url: "https://doi.org/10.9721/KJFST.2022.54.1.52"
  kind: "Systematic review and meta-analysis"
  insight: "Nine studies and 961 participants; memory benefit signal but no activities-of-daily-living benefit."
  limitation: "Five RCTs plus four pre–post studies; mixed sources, formulations, and risk of bias."
  funding: "Not reported."
  sponsorshipStatus: "Academic review; sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-02
  title: "The influence of soy-derived phosphatidylserine on cognition in age-associated memory impairment"
  authors: "B. L. Jorissen; F. Brouns; M. P. Van Boxtel; R. W. Ponds; F. R. Verhey; J. Jolles; W. J. Riedel"
  year: 2001
  url: "https://pubmed.ncbi.nlm.nih.gov/11842880/"
  kind: "Randomized, double-blind, placebo-controlled trial"
  insight: "120 older adults; 300 or 600 mg/day soy PS for 12 weeks; no significant cognitive benefit."
  limitation: "Short duration; age-associated memory impairment rather than dementia."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-03
  title: "Effects of phosphatidylserine in age-associated memory impairment"
  authors: "T. H. Crook; J. Tinklenberg; J. Yesavage; W. Petrie; M. G. Nunzi; D. C. Massari"
  year: 1991
  url: "https://pubmed.ncbi.nlm.nih.gov/2027477/"
  kind: "Randomized, placebo-controlled clinical trial"
  insight: "149 participants; 300 mg/day BC-PS for 12 weeks; selective learning and memory improvement."
  limitation: "Historical bovine product, short duration, and apparent baseline-severity interaction."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-04
  title: "Soybean-derived phosphatidylserine improves memory function of the elderly Japanese subjects with memory complaints"
  authors: "A. Kato-Kataoka et al.; Yakult Central Institute for Microbiological Research"
  year: 2010
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2966935/"
  kind: "Randomized, double-blind, placebo-controlled trial"
  insight: "78 randomized; 100 or 300 mg/day soy PS for six months; overall memory-battery comparison was null."
  limitation: "Small sample; subgroup findings and a placebo containing other bioactive nutrients complicate interpretation."
  funding: "Not reported; PS-20L was made by Yakult Honsha."
  sponsorshipStatus: "Industry product involvement; financial sponsorship not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-05
  title: "Double-blind randomized controlled study of phosphatidylserine in senile demented patients"
  authors: "P. J. Delwaide; A. M. Gyselynck-Mambourg; A. Hurlet; M. Ylieff"
  year: 1986
  url: "https://pubmed.ncbi.nlm.nih.gov/3518329/"
  kind: "Randomized, double-blind, placebo-controlled trial"
  insight: "42 hospitalized patients; 300 mg/day BC-PS for six weeks; selected behavioral-scale signal."
  limitation: "35 completers, short duration, historical bovine product, limited generalizability."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-06
  title: "Effects of phosphatidylserine in Alzheimer's disease"
  authors: "T. Crook; W. Petrie; C. Wells; D. C. Massari"
  year: 1992
  url: "https://pubmed.ncbi.nlm.nih.gov/1609044/"
  kind: "Randomized, placebo-controlled clinical trial"
  insight: "51 probable-AD patients; 300 mg/day BC-PS for 12 weeks; selected cognitive improvements."
  limitation: "Small, short trial; effects were greatest in less severe disease and did not establish disease modification."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-07
  title: "Positive effects of soy lecithin-derived phosphatidylserine plus phosphatidic acid on memory, cognition, daily functioning, and mood in elderly patients with Alzheimer's disease and dementia"
  authors: "M. I. Moré et al."
  year: 2014
  url: "https://pubmed.ncbi.nlm.nih.gov/25414047/"
  kind: "Pilot randomized, double-blind, placebo-controlled studies"
  insight: "PS+PA product showed memory or short-term functional-stability signals and rapid serum PS kinetics."
  limitation: "Proprietary mixture, per-protocol analyses, short duration, and limited independent replication."
  funding: "Not stated in the consulted record."
  sponsorshipStatus: "Product-specific study; sponsor details incompletely reported."
  conflictsOfInterest: "Not fully reported in the abstract."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-08
  title: "Effects of soy lecithin phosphatidic acid and phosphatidylserine complex (PAS) on the endocrine and psychological responses to mental stress"
  authors: "J. Hellhammer; E. Fries; C. Buss; V. Engert; A. Tuch; D. Rutenberg; D. Hellhammer"
  year: 2004
  url: "https://pubmed.ncbi.nlm.nih.gov/15512856/"
  kind: "Randomized controlled trial"
  insight: "400 mg/day PAS reduced ACTH and cortisol responses; larger PAS doses did not reproduce the effect."
  limitation: "Small groups, composite PAS product, acute stress test, and no disease outcome."
  funding: "Not reported."
  sponsorshipStatus: "Neuropattern-affiliated study; sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-09
  title: "Blunting by chronic phosphatidylserine administration of the stress-induced activation of the hypothalamo-pituitary-adrenal axis in healthy men"
  authors: "P. Monteleone; M. Maj; L. Beinat; M. Natale; D. Kemali"
  year: 1992
  url: "https://pubmed.ncbi.nlm.nih.gov/1325348/"
  kind: "Placebo-controlled clinical trial"
  insight: "Nine men; 800 mg/day BC-PS for 10 days; blunted exercise-induced ACTH and cortisol."
  limitation: "Extremely small sample, historical bovine product, biomarker-only outcome."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-10
  title: "Effects of phosphatidylserine on oxidative stress following intermittent running"
  authors: "Michael I. Kingsley; Daniel Wadsworth; Liam P. Kilduff; Jane McEneny; David Benton"
  year: 2005
  url: "https://pubmed.ncbi.nlm.nih.gov/16118575/"
  kind: "Randomized, double-blind, placebo-controlled exercise trial"
  insight: "16 soccer players; 750 mg/day soy PS for 10 days; no cortisol, soreness, muscle-damage, or oxidative-stress benefit."
  limitation: "Small sample and short intervention; performance trend was nonsignificant."
  funding: "Not reported."
  sponsorshipStatus: "Sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-11
  title: "Safety of phosphatidylserine containing omega-3 fatty acids in non-demented elderly: a double-blind placebo-controlled trial followed by an open-label extension"
  authors: "V. Vakhapova; Y. Richter; T. Cohen; Y. Herzog; A. D. Korczyn"
  year: 2011
  url: "https://bmcneurol.biomedcentral.com/articles/10.1186/1471-2377-11-79"
  kind: "Randomized safety trial plus open-label extension"
  insight: "PS–DHA/EPA product was generally well tolerated without serious treatment-related adverse events."
  limitation: "Mixture rather than isolated PS; short duration; efficacy attribution is impossible."
  funding: "Enzymotec Ltd., Israel."
  sponsorshipStatus: "Industry-funded."
  conflictsOfInterest: "Three authors were Enzymotec employees; one was a consultant."
  conflictOfInterestStatus: "Declared industry conflicts."

- sourceId: PS-12
  title: "The effect of soybean-derived phosphatidylserine on cognitive performance in elderly with subjective memory complaints: a pilot study"
  authors: "Yael Richter; Yael Herzog; Yael Lifshitz; Rami Hayun; Sigalit Zchut"
  year: 2013
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3665496/"
  kind: "Open-label pilot study"
  insight: "30 older adults received 300 mg/day soy PS for 12 weeks; several cognitive measures improved."
  limitation: "No placebo group, small sample, and all authors were employed by Enzymotec."
  funding: "Not clearly stated; product and investigators were company-affiliated."
  sponsorshipStatus: "Industry-employed authors; product-specific."
  conflictsOfInterest: "All listed authors were Enzymotec employees."
  conflictOfInterestStatus: "Declared or evident industry conflict."

- sourceId: PS-13
  title: "Phosphatidylserine in the brain: metabolism and function"
  authors: "H. Y. Kim; B. X. Huang; A. A. Spector"
  year: 2014
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4258547/"
  kind: "Mechanistic review"
  insight: "Explains endogenous PS metabolism, membrane functions, and unresolved brain-delivery questions."
  limitation: "Mechanistic review; does not establish supplement efficacy."
  funding: "Not reported."
  sponsorshipStatus: "Academic review; sponsor not stated."
  conflictsOfInterest: "Not reported."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-14
  title: "GRAS Notice 636: Phosphatidylserine derived from sunflower lecithin"
  authors: "U.S. Food and Drug Administration"
  year: 2016
  url: "https://www.fda.gov/files/food/published/GRAS-Notice-000636--Phosphatidylserine-derived-from-sunflower.pdf"
  kind: "Regulatory safety dossier"
  insight: "Reviews human safety data across bovine, soy, marine, and sunflower-related PS evidence."
  limitation: "Industry-submitted safety dossier; GRAS status is not efficacy evidence."
  funding: "Notifier-sponsored regulatory submission."
  sponsorshipStatus: "Industry regulatory submission."
  conflictsOfInterest: "Notifier interests are inherent to the submission."
  conflictOfInterestStatus: "Not independent."

- sourceId: PS-15
  title: "Food Labeling Guide"
  authors: "U.S. Food and Drug Administration"
  year: 2013
  url: "https://www.fda.gov/media/81606/download"
  kind: "Regulatory labeling guidance"
  insight: "Documents the qualified soy-PS cognitive-function/dementia claim and required disclaimer."
  limitation: "Labeling guidance, not a clinical efficacy review."
  funding: "U.S. government agency."
  sponsorshipStatus: "Government regulatory source."
  conflictsOfInterest: "None stated."
  conflictOfInterestStatus: "No commercial conflict stated."

- sourceId: PS-16
  title: "Phosphatidylserine & Your Brain"
  authors: "Alzheimer's Drug Discovery Foundation"
  year: 2023
  url: "https://www.alzdiscovery.org/cognitive-vitality/ratings/phosphatidylserine"
  kind: "Evidence synthesis"
  insight: "Rates evidence as modest and difficult to compare because PS chemistry varies across products."
  limitation: "Secondary assessment rather than systematic review or primary trial."
  funding: "Not stated on the page."
  sponsorshipStatus: "Nonprofit evidence program; sponsor not stated."
  conflictsOfInterest: "Not stated."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-17
  title: "A soy-based phosphatidylserine/phosphatidic acid complex (PAS) normalizes the stress reactivity of hypothalamus-pituitary-adrenal-axis in chronically stressed male subjects: a randomized, placebo-controlled study"
  authors: "D. Hellhammer et al."
  year: 2014
  url: "https://pubmed.ncbi.nlm.nih.gov/25081826/"
  kind: "Randomized, placebo-controlled trial"
  insight: "400/400 mg/day PS/PA normalized ACTH and cortisol responses in highly chronically stressed men."
  limitation: "75 healthy men, subgroup analysis, composite product, and no significant psychological-stress effect."
  funding: "Not reported in the PubMed record."
  sponsorshipStatus: "Product-specific study; sponsor unclear."
  conflictsOfInterest: "Not reported in the PubMed record."
  conflictOfInterestStatus: "Unclear."

- sourceId: PS-18
  title: "Effects of a food supplement containing phosphatidylserine on cognitive function in Chinese older adults with mild cognitive impairment: A randomized double-blind, placebo-controlled trial"
  authors: "Huilian Duan; Ning Xu; Tong Yang; Moyan Wang; Chunlai Zhang; Jiangang Zhao; Zhenshu Li; Yongjie Chen; Jing Yan; Meilin Zhang; Wen Li; Zhongbao Yue; Fei Ma; Ruikun He; Guowei Huang"
  year: 2025
  url: "https://pubmed.ncbi.nlm.nih.gov/39317299/"
  kind: "Randomized, double-blind, placebo-controlled trial"
  insight: "190 MCI participants; 12-month PS/ALA/ginkgo/vitamin/folate product improved selected cognitive measures."
  limitation: "PS was one component of a multinutrient product; no isolated-PS inference."
  funding: "Not stated; author affiliations included BYHEALTH Institute of Nutrition & Health."
  sponsorshipStatus: "Product/company affiliation present; financial sponsorship not stated."
  conflictsOfInterest: "Authors declared no conflict of interest."
  conflictOfInterestStatus: "Declared none, with product-affiliated institutional representation."
```

## Legal

In the United States, FDA labeling guidance permits narrowly worded qualified claims for supplements containing soy-derived PS, accompanied by the disclaimer that the research is “very limited and preliminary” and that FDA finds little supporting evidence. This is not approval to treat dementia or cognitive dysfunction. FDA GRAS documentation for sunflower-derived PS addresses food-safety use, not clinical efficacy. Source IDs: PS-14, PS-15. ([fda.gov](https://www.fda.gov/media/81606/download?pwsName=healthandwellness&sponsorId=Q%2BbsLFVYDSzmXKlASeqkmA%3D%3D))

```yaml
- United_States_claim: "Qualified claim applies to carefully worded soy-derived PS labeling with an adjacent disclaimer."
  sourceId: PS-15
- disease_claim: "The qualified claim is not approval for treatment or prevention of dementia."
  sourceId: PS-15
- sunflower_status: "FDA GRAS documentation concerns food-use safety, not proof of cognitive efficacy."
  sourceId: PS-14
- regulatory_scope: "Legal wording and permissible claims vary by jurisdiction and product composition."
  sourceId: PS-15
```

## Research Metadata
- **Total research steps**: 75
- **Search queries executed**: 9
- **Citations found**: 10
- **Task ID**: resp_06ebe3db77d07892016ac951225f0c87d28fabe32f4d863c7f
- **Execution time**: 667.06 seconds

## Citations
1. [54-1(07)11-007.fm](https://biolimitless.com/wp-content/uploads/2025/03/KJFST-phosph-cognitive-elderly.pdf)
2. [The influence of soy-derived phosphatidylserine on cognition in age-associated memory impairment - PubMed](https://pubmed.ncbi.nlm.nih.gov/11842880/?utm_source=openai)
3. [Positive effects of soy lecithin-derived phosphatidylserine plus phosphatidic acid on memory, cognition, daily functioning, and mood in elderly patients with Alzheimer's disease and dementia.](https://pubmed.ncbi.nlm.nih.gov/25414047/?utm_source=openai)
4. [Effects of phosphatidylserine in age‐associated memory impairment | Neurology](https://www.neurology.org/doi/abs/10.1212/WNL.41.5.644?is_nova=true&nb_cid=24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&nbclid=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&ref_id=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&src=%5B07.02.26%5D+MM+E.I1&sub1=2019982747502501890&sub2=%5B07.02.26%5D+MM+E.I1&sub3=2019982842447720450&sub4=%5B07.02.26%5D+C1_Img&sub5=2019983294635634690&sub6=Img_02&sub7=android&sub8=0&utm_source=openai)
5. [Source 5](https://www.jstage.jst.go.jp/article/jcbn/47/3/47_10-62/_pdf)
6. [Phosphatidylserine & Your Brain | Cognitive Vitality | Alzheimer's Drug Discovery Foundation](https://www.alzdiscovery.org/cognitive-vitality/ratings/phosphatidylserine)
7. [Food Labeling Guide](https://www.fda.gov/media/81606/download?pwsName=healthandwellness&sponsorId=Q%2BbsLFVYDSzmXKlASeqkmA%3D%3D)
8. [The influence of soy-derived phosphatidylserine on cognition in age-associated memory impairment - PubMed](https://pubmed.ncbi.nlm.nih.gov/11842880/)
9. [Positive effects of soy lecithin-derived phosphatidylserine plus phosphatidic acid on memory, cognition, daily functioning, and mood in elderly patients with Alzheimer's disease and dementia.](https://pubmed.ncbi.nlm.nih.gov/25414047/)
10. [Effects of phosphatidylserine in age‐associated memory impairment | Neurology](https://www.neurology.org/doi/abs/10.1212/WNL.41.5.644?is_nova=true&nb_cid=24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&nbclid=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&ref_id=nvss_24469f3dde4641caa2495e5dc1da0eb5_2019983294635634690&src=%5B07.02.26%5D+MM+E.I1&sub1=2019982747502501890&sub2=%5B07.02.26%5D+MM+E.I1&sub3=2019982842447720450&sub4=%5B07.02.26%5D+C1_Img&sub5=2019983294635634690&sub6=Img_02&sub7=android&sub8=0)
