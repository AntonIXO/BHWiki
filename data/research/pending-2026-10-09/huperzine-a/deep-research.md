# Research Report: Research exactly Huperzine A (slug huperzine-a). Return a compact complete BHWiki Markdown article only, <=4000 words. Required headings Summary, Description, Evidence note, Doses, Pharmacokinetics, Modifiers, Effects, Outcomes, Mechanisms, Cautions, Claims, Interactions, Experience links, References, Legal; frontmatter with x-shape; one fenced yaml list in every non-prose section. Cover purified Huperzine A versus Huperzia extracts, controlled Alzheimer/cognition trials and null findings, healthy enhancement gaps, cholinesterase mechanism, PK and cholinergic adverse events/interactions, funding and risk of bias. Every factual claim needs source link or sourceId. References require exact title, named authors/organization, year, HTTPS URL, kind, insight, limitation, funding, sponsorshipStatus, conflictsOfInterest, conflictOfInterestStatus. No preface, metadata, audit tables, citation tokens, or recommendations.

---
x-shape: "compound"
slug: "huperzine-a"
---

## Summary

Huperzine A (HupA) is a plant-derived, brain-penetrant, reversible acetylcholinesterase (AChE) inhibitor. Purified HupA used in trials is not dose-equivalent to an unstandardized *Huperzia serrata* extract, which contains multiple alkaloids and may contain substantially different HupA amounts. Alzheimer disease (AD) trials are mixed: small Chinese trials and pooled analyses suggest symptomatic benefit, while a 210-person U.S. phase-II trial missed its prespecified cognitive endpoint. Evidence for enhancement in healthy adults is sparse, small, and includes null findings. sourceId: R1, R3, R6, R9, R10

```yaml
- identity: "Purified (-)-huperzine A; also called HupA or selagine"
  evidence_summary: "Possible symptomatic cognitive effects in AD; insufficient evidence for healthy enhancement or disease modification"
  principal_risk: "Cholinergic adverse effects and additive pharmacodynamic interactions"
  sourceId: "R1"
```

## Description

HupA is an alkaloid found particularly in *Huperzia serrata*. Analytical work identified nine major alkaloids in *Huperzia* alkaloid extracts, so a plant extract is chemically broader than purified HupA. sourceId: R10

Commercial products may list purified HupA, *Huperzia serrata* extract, or an extract “standardized” to HupA. In a 22-product analysis, only two of the 13 products that declared a HupA amount were within 10% of the stated amount; 16 products had at least one labeled ingredient that was not detected. Therefore, an extract label is not evidence of exposure equivalent to a measured microgram dose of purified HupA. The last sentence is an inference from composition and assay data. sourceId: R9, R10

```yaml
- form: "Purified HupA"
  composition: "One quantified active alkaloid"
  clinical_relevance: "Most controlled trials used specified microgram amounts"
  sourceId: "R1"
- form: "Huperzia serrata extract"
  composition: "Mixture of HupA and other plant constituents"
  clinical_relevance: "HupA exposure may vary by species, plant material, extraction, and assay accuracy"
  sourceId: "R9, R10"
```

## Evidence note

The strongest controlled AD evidence is internally inconsistent. A Chinese multicenter trial randomized 202 people to HupA 400 µg/day or placebo for 12 weeks and reported improvements across cognitive, functional, behavioral, and global measures. The U.S. trial randomized 210 people with mild-to-moderate AD; its prespecified 200 µg twice-daily comparison showed no ADAS-Cog benefit at 16 weeks. A 400 µg twice-daily arm produced a secondary signal at week 11, but not a statistically significant week-16 ADAS-Cog difference and no significant ADL, global-impression, or neuropsychiatric benefit. sourceId: R1, R2

A 2013 meta-analysis found pooled advantages for cognition and activities of daily living, but the underlying trials were generally small, short, heterogeneous, and incompletely reported; publication bias was possible. The review was funded by a Beijing University of Chinese Medicine research-program grant. sourceId: R3, R13

For mild cognitive impairment, a Cochrane review found no eligible placebo-controlled randomized trial and therefore could not estimate efficacy or safety. sourceId: R4

Healthy enhancement remains a major evidence gap. A small adolescent study involving students who reported memory inadequacy found higher memory-quotient scores after four weeks, whereas a randomized crossover study in 15 exercise-trained adults found no cognitive, exercise-performance, or perceived-exertion benefit after one 200 µg dose. These populations and designs do not establish benefit for healthy adults generally. sourceId: R5, R6

```yaml
- population: "Mild-to-moderate AD"
  finding: "Mixed; positive small trials and meta-analytic signals, but the U.S. primary endpoint was null"
  certainty: "Low"
  sourceId: "R1, R2, R3"
- population: "Mild cognitive impairment"
  finding: "No eligible placebo-controlled RCT identified by Cochrane"
  certainty: "Insufficient"
  sourceId: "R4"
- population: "Healthy adults"
  finding: "Sparse evidence; one selected adolescent study positive and one small adult exercise trial null"
  certainty: "Insufficient"
  sourceId: "R5, R6"
- bias: "Small samples, short follow-up, incomplete blinding/allocation reporting, attrition/reporting concerns, and possible publication bias"
  sourceId: "R3, R13"
- funding_signal: "The largest U.S. RCT had NIH/NIA and Neuro-Hitech support; sponsor relationships were disclosed"
  interpretation: "Funding is a risk-of-bias consideration, not proof of biased results"
  sourceId: "R1"
```

## Doses

The following are studied research exposures, not a validated healthy-use regimen. No health-based guidance value, acceptable daily intake, or acute reference dose was established in the 2024 RIVM assessment. sourceId: R1, R5, R6, R8

```yaml
- population: "AD, U.S. phase II"
  dose: "200 µg twice daily; comparator arm escalated to 400 µg twice daily"
  duration: "Placebo-controlled to week 16; active follow-up to week 24"
  sourceId: "R1"
- population: "AD, Chinese multicenter trial"
  dose: "400 µg/day"
  duration: "12 weeks"
  sourceId: "R2"
- population: "Adolescents reporting memory inadequacy"
  dose: "100 µg twice daily"
  duration: "4 weeks"
  sourceId: "R5"
- population: "Healthy exercise-trained adults"
  dose: "200 µg single dose"
  duration: "Acute crossover exposure"
  sourceId: "R6"
- population: "Healthy pharmacokinetic volunteers"
  dose: "400 µg single dose"
  duration: "Single-dose PK study"
  sourceId: "R7"
- safety_boundary: "No validated chronic safe intake was established"
  sourceId: "R8"
```

## Pharmacokinetics

After a 400 µg oral dose in 12 young volunteers, HupA appeared in plasma within 5–10 minutes, reached a mean peak at about 58 minutes, and had a terminal half-life of approximately 716 minutes, or 11.9 hours, in a two-compartment model. Other human studies summarized by RIVM reported half-lives near 5–6 hours at lower doses, indicating variability by dose, formulation, population, and analytical model. sourceId: R7, R8

In 14 elderly participants given 100 µg, approximately 35% ± 9% of the dose was recovered unchanged in urine over 48 hours, although collection duration limited the estimate. Human hepatocyte experiments did not show significant CYP1A2 or CYP3A4 alteration at tested concentrations, but RIVM identified conflicting animal and human signals relevant to CYP-mediated interactions. sourceId: R8

HupA crosses the blood–brain barrier; plasma PK does not by itself establish the magnitude or duration of central AChE inhibition. sourceId: R1

```yaml
- absorption: "Rapid oral appearance; Tmax approximately 58–80 minutes in human studies"
  sourceId: "R7, R8"
- elimination: "Reported terminal half-life approximately 5–12 hours across small studies"
  sourceId: "R7, R8"
- excretion: "Substantial unchanged urinary excretion reported in elderly participants"
  sourceId: "R8"
- metabolism: "Clinical CYP interaction evidence is limited and inconsistent"
  sourceId: "R8"
- CNS_penetration: "Blood–brain barrier penetration reported"
  sourceId: "R1"
```

## Modifiers

Observed effects may vary with disease state, dose, formulation, assay accuracy, and concurrent cholinergic or anticholinergic exposure. Comparisons between AD patients and healthy participants are indirect because the trials differ in baseline cognition, endpoints, duration, and dosing. sourceId: R1, R5, R6, R9

```yaml
- modifier: "Baseline cognitive state"
  implication: "A signal in AD cannot be generalized to cognitively healthy adults"
  sourceId: "R1, R5, R6"
- modifier: "Dose"
  implication: "The 200 µg twice-daily AD primary endpoint was null; the higher-dose signal was secondary"
  sourceId: "R1"
- modifier: "Preparation"
  implication: "Purified HupA and Huperzia extract have different compositional certainty"
  sourceId: "R9, R10"
- modifier: "Product quality"
  implication: "Label dose may not predict measured dose or co-ingredients"
  sourceId: "R9"
- modifier: "Co-medication"
  implication: "Cholinergic, anticholinergic, cardiac, and CYP-related effects may alter the net response"
  sourceId: "R8, R11"
```

## Effects

The established pharmacological effect is AChE inhibition, which can increase acetylcholine signaling in central and peripheral tissues. Reported clinical adverse events are compatible with cholinergic activation and include nausea, vomiting, diarrhea, anorexia, dizziness, sweating, insomnia, abdominal symptoms, constipation, and bradycardia. sourceId: R1, R3, R8

In the U.S. AD trial, HupA was generally tolerated through 24 weeks, but serious adverse events and withdrawals occurred in all groups, and the study was not designed to establish long-term safety. sourceId: R1

```yaml
- pharmacological_effect: "Reversible AChE inhibition"
  expected_systemic_effect: "Increased cholinergic tone"
  sourceId: "R1"
- reported_adverse_events:
    - "Nausea"
    - "Vomiting"
    - "Diarrhea"
    - "Anorexia"
    - "Dizziness"
    - "Sweating"
    - "Insomnia"
    - "Bradycardia"
  sourceId: "R3, R8"
- chronic_safety: "Not established"
  sourceId: "R1, R8"
```

## Outcomes

Clinical evidence supports, at most, an uncertain symptomatic effect in some AD populations. It does not establish prevention of dementia, slowing of neurodegeneration, restoration of normal cognition, or disease modification. The null U.S. primary endpoint and absence of MCI placebo trials materially limit generalization. sourceId: R1, R4

```yaml
- outcome: "ADAS-Cog in AD"
  result: "200 µg twice daily: null at week 16; 400 µg twice daily: secondary week-11 signal, not significant at week 16"
  sourceId: "R1"
- outcome: "Activities of daily living"
  result: "Positive reports in some Chinese trials; no significant benefit in the U.S. phase-II trial"
  sourceId: "R1, R2, R3"
- outcome: "Global clinical status and neuropsychiatric symptoms"
  result: "No significant U.S. phase-II benefit"
  sourceId: "R1"
- outcome: "MCI"
  result: "Evidence unavailable from eligible placebo-controlled RCTs"
  sourceId: "R4"
- outcome: "Healthy cognitive enhancement"
  result: "Not established; acute exercise-trial outcomes were null"
  sourceId: "R6"
- outcome: "Disease modification"
  result: "Unproven in humans"
  sourceId: "R1, R3"
```

## Mechanisms

HupA is a potent, reversible, brain-penetrant AChE inhibitor. By slowing acetylcholine hydrolysis, it can increase cholinergic signaling, the same broad symptomatic strategy used by approved AChE inhibitors. Preclinical work also describes NMDA-receptor antagonism and effects on amyloid processing, oxidative stress, mitochondrial function, and nerve-growth-factor pathways; these mechanisms do not constitute demonstrated clinical disease modification. sourceId: R1

```yaml
- primary_mechanism: "Reversible AChE inhibition"
  consequence: "Reduced acetylcholine breakdown and increased cholinergic signaling"
  evidence_level: "Human pharmacology and clinical-trial rationale"
  sourceId: "R1"
- secondary_mechanisms: "NMDA antagonism and other neuroprotective signaling"
  evidence_level: "Predominantly preclinical or mechanistic"
  clinical_status: "Not established as disease-modifying in humans"
  sourceId: "R1"
```

## Cautions

Clinical safety evidence is short-term and incomplete. In the AD systematic review, seven of 20 trials did not report adverse-event information; reported events were usually described as mild, but incomplete reporting limits confidence. RIVM found no suitable basis for a chronic safe level and noted missing or inadequate chronic toxicity, reproductive/developmental, and genotoxicity data. sourceId: R3, R8

Two overdose notifications involving *H. serrata* preparations included nausea, tremor, dysarthria, diarrhea, and blurred vision. A separate case report involving *Lycopodium selago* tea described sweating, vomiting, diarrhea, dizziness, cramps, and slurred speech consistent with cholinergic toxicity. sourceId: R8

```yaml
- concern: "Cholinergic toxicity"
  indicators: "GI upset, sweating, salivation, tremor, blurred vision, dysarthria, bradycardia, or respiratory compromise"
  sourceId: "R8"
- concern: "Long-term exposure"
  status: "Insufficient chronic toxicology and no established health-based guidance value"
  sourceId: "R8"
- concern: "Product mislabeling"
  status: "Measured HupA frequently differed from label claims in a 22-product analysis"
  sourceId: "R9"
- concern: "Evidence quality"
  status: "Small, short, incompletely reported trials with possible publication bias"
  sourceId: "R3"
```

## Claims

```yaml
- claim: "Improves memory and focus in healthy adults"
  assessment: "Unsubstantiated as a general claim; evidence is sparse and includes a null adult trial"
  sourceId: "R5, R6, R12"
- claim: "Treats Alzheimer disease"
  assessment: "Mixed clinical evidence; not established by the U.S. phase-II primary endpoint"
  sourceId: "R1, R2, R3"
- claim: "Prevents or reverses neurodegeneration"
  assessment: "Preclinical rationale only; no demonstrated human disease-modifying outcome"
  sourceId: "R1, R3"
- claim: "Huperzia extract is equivalent to purified HupA"
  assessment: "Unsupported without verified standardization and assay"
  sourceId: "R9, R10"
- claim: "Natural origin implies safety"
  assessment: "Unsupported; cholinergic toxicity and overdose cases are documented"
  sourceId: "R8"
- claim: "Enhances pre-workout cognition or performance"
  assessment: "Not supported in the small randomized exercise trial"
  sourceId: "R6"
```

## Interactions

HupA can have additive pharmacodynamic effects with other AChE inhibitors or cholinergic agents. FDA guidance uses a cholinesterase-inhibiting ingredient such as HupA combined with a cholinergic agonist as an example of a combination that may produce low heart rate, gastrointestinal distress, low blood pressure, and, in severe cases, irregular heartbeat. sourceId: R8, R11

Anticholinergics such as scopolamine may oppose HupA’s cholinergic effects; evidence for this interaction is mainly animal or mechanistic. Additive bradycardia with beta-blockers or other cardiac medicines has been proposed but is not well quantified clinically. CYP-mediated interactions remain uncertain. sourceId: R8

```yaml
- interacting_class: "Donepezil, galantamine, rivastigmine, or other AChE inhibitors"
  interaction: "Potential additive cholinergic adverse effects and bradycardia"
  evidence: "Pharmacological and clinical safety concern; limited direct DDI data"
  sourceId: "R8"
- interacting_class: "Cholinergic agonists or precursors"
  interaction: "Potential additive cholinergic, GI, cardiovascular, and muscarinic effects"
  sourceId: "R8, R11"
- interacting_class: "Anticholinergics such as scopolamine"
  interaction: "Pharmacodynamic opposition; HupA reduced scopolamine effects in animal studies"
  sourceId: "R8"
- interacting_class: "Beta-blockers or other rate-lowering cardiac drugs"
  interaction: "Possible additive bradyarrhythmia"
  evidence: "Theoretical or limited clinical evidence"
  sourceId: "R8"
- interacting_class: "CYP1A2/CYP3A4 substrates, inhibitors, or inducers"
  interaction: "Clinical relevance uncertain; available findings are inconsistent"
  sourceId: "R8"
```

## Experience links

These links provide label, consumer, or research-summary context; they are not controlled efficacy evidence or personal-use recommendations.

```yaml
- title: "Huperzine A: Dietary Supplements for Brain Health"
  organization: "Operation Supplement Safety"
  url: "https://www.opss.org/article/huperzine-dietary-supplements-brain-health"
  role: "Government consumer and military-health summary"
  sourceId: "R12"
- title: "Huperzine A — Cognitive Vitality for Researchers"
  organization: "Alzheimer’s Drug Discovery Foundation"
  url: "https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Huperzine-A-Cognitive-Vitality-For-Researchers.pdf"
  role: "Research-oriented evidence summary"
  sourceId: "R13"
- title: "Huperzine A 100 mcg (Label)"
  organization: "NIH Office of Dietary Supplements Dietary Supplement Label Database"
  url: "https://dsld.od.nih.gov/label/295821"
  role: "Example of product labeling and marketing claims"
  sourceId: "R14"
```

## References

```yaml
- sourceId: "R1"
  title: "A phase II trial of huperzine A in mild to moderate Alzheimer disease"
  authors: "Michael S. Rafii; Sarah Walsh; James T. Little; K. Behan; B. Reynolds; S. Jin; R. Thomas; Paul S. Aisen; Alzheimer’s Disease Cooperative Study"
  year: 2011
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/"
  kind: "Multicenter randomized double-blind placebo-controlled dose-escalation RCT"
  insight: "n=210; 200 µg twice daily missed the prespecified ADAS-Cog endpoint; the higher-dose signal was secondary and lacked functional/global confirmation."
  limitation: "Short follow-up, withdrawals, and no disease-modification or chronic-safety assessment."
  funding: "NIH/NIA and Neuro-Hitech, Inc."
  sponsorshipStatus: "Public and industry supported"
  conflictsOfInterest: "Several authors disclosed industry advisory, consulting, salary-support, research-support, or stock relationships."
  conflictOfInterestStatus: "Disclosed; relevant sponsor relationship present"

- sourceId: "R2"
  title: "Clinical efficacy and safety of huperzine Alpha in treatment of mild to moderate Alzheimer disease, a placebo-controlled, double-blind, randomized trial"
  authors: "Zhenxin Zhang; Xinde Wang; Qingtang Chen; Jizuo Wang; Guangliang Shan"
  year: 2002
  url: "https://pubmed.ncbi.nlm.nih.gov/12181083/"
  kind: "Multicenter placebo-controlled double-blind RCT"
  insight: "202 participants; 400 µg/day for 12 weeks; reported improvements in cognitive, functional, behavioral, and global measures."
  limitation: "Chinese-language report with limited publicly available methodological and funding detail."
  funding: "Not stated in the cited record"
  sponsorshipStatus: "Not stated"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R3"
  title: "Huperzine A for Alzheimer’s Disease: A Systematic Review and Meta-Analysis of Randomized Clinical Trials"
  authors: "Gao-Yuan Yang; Yan-Ying Wang; coauthors"
  year: 2013
  url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0074916"
  kind: "Systematic review and meta-analysis"
  insight: "Pooled findings favored HupA for several AD outcomes, but trial quality, heterogeneity, incomplete reporting, and possible publication bias reduced confidence."
  limitation: "Many small, short, predominantly Chinese trials; substantial risk-of-bias uncertainty."
  funding: "Program for Innovative Research Teams of Beijing University of Chinese Medicine, grants 2011-CXTD-09 and 2011-CXTD-21"
  sponsorshipStatus: "Academic institutional funding"
  conflictsOfInterest: "No competing interests declared in the article"
  conflictOfInterestStatus: "Disclosed as none"

- sourceId: "R4"
  title: "Huperzine A for mild cognitive impairment"
  authors: "Jing Yue; Bi-Rong Dong; Xia Lin; Min Yang; Hui-Min Wu; Tingting Wu"
  year: 2022
  url: "https://www.cochrane.org/evidence/CD008827_no-evidence-randomised-controlled-trials-or-against-use-huperzine-treatment-people-mild-cognitive"
  kind: "Cochrane systematic review"
  insight: "No eligible placebo-controlled RCTs were found for MCI."
  limitation: "The evidence base was absent rather than definitively negative; the review’s search strategy originated in earlier years."
  funding: "Not stated in the public summary"
  sponsorshipStatus: "Cochrane review; external funding not stated"
  conflictsOfInterest: "Not stated in the public summary"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R5"
  title: "Huperzine-A capsules enhance memory and learning performance in 34 pairs of matched adolescent students"
  authors: "Q.Q. Sun; S.S. Xu; J.L. Pan; H.M. Guo; W.Q. Cao"
  year: 1999
  url: "https://pubmed.ncbi.nlm.nih.gov/10678121/"
  kind: "Matched-pair double-blind placebo-controlled clinical trial"
  insight: "68 adolescents reporting memory inadequacy received 100 µg twice daily for four weeks; the HupA group had higher reported memory-quotient scores."
  limitation: "Small, selected adolescent sample and non-generalizable outcome context."
  funding: "Research support, non-U.S. government"
  sponsorshipStatus: "Public/non-U.S. research support"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R6"
  title: "Effect of Huperzine A on Cognitive Function and Perception of Effort during Exercise: A Randomized Double-Blind Crossover Trial"
  authors: "Chadsley M. Wessinger; Cynthia L. Inman; Jeremiah Weinstock; Edward P. Weiss"
  year: 2021
  url: "https://pubmed.ncbi.nlm.nih.gov/34567353/"
  kind: "Randomized double-blind crossover RCT"
  insight: "15 exercise-trained adults received 200 µg HupA or placebo; cognitive, performance, heart-rate, and perceived-exertion outcomes were null."
  limitation: "Very small sample and acute exposure; not a test of chronic use or general healthy populations."
  funding: "Not stated in the cited record"
  sponsorshipStatus: "Not stated"
  conflictsOfInterest: "Not stated in the cited record"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R7"
  title: "Pharmacokinetics of huperzine A following oral administration to human volunteers"
  authors: "Y.X. Li; R.Q. Zhang; C.R. Li; X.H. Jiang"
  year: 2007
  url: "https://pubmed.ncbi.nlm.nih.gov/18348466/"
  kind: "Single-dose human pharmacokinetic clinical trial"
  insight: "12 volunteers received 0.4 mg; Tmax was about 58 minutes and terminal half-life about 716 minutes."
  limitation: "Small, young, single-dose study with PK estimates that vary across other studies."
  funding: "Not stated in the cited record"
  sponsorshipStatus: "Not stated"
  conflictsOfInterest: "Not stated"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R8"
  title: "Risk assessment of herbal preparations containing Huperzia serrata"
  authors: "National Institute for Public Health and the Environment (RIVM)"
  year: 2024
  url: "https://www.rivm.nl/bibliotheek/rapporten/2024-0028.pdf"
  kind: "Governmental toxicological risk assessment"
  insight: "No HBGV, ADI, or ARfD could be established; reviewed PK, overdose reports, adverse events, interaction signals, and toxicology gaps."
  limitation: "Secondary assessment based on heterogeneous studies; no new definitive chronic-safety experiment."
  funding: "Institutional Dutch public-health funding; specific grant not stated"
  sponsorshipStatus: "Public institutional"
  conflictsOfInterest: "No commercial conflict stated"
  conflictOfInterestStatus: "No apparent commercial sponsorship"

- sourceId: "R9"
  title: "The scoop on brain health dietary supplement products containing huperzine A"
  authors: "Cindy Crawford; Yan-Hong Wang; Bharathi Avula; Ji-Yeong Bae; Ikhlas A. Khan; Patricia A. Deuster"
  year: 2020
  url: "https://pubmed.ncbi.nlm.nih.gov/31990212/"
  kind: "Analytical market study"
  insight: "Among 22 products, 73% had at least one labeled ingredient not detected; only two declared HupA amounts were within 10% of label."
  limitation: "Selected products queried by service members and not necessarily representative of the entire market."
  funding: "Preservation of the Force and Family Behavioral Health Program, award HU0001-15-2-0053, and Consortium for Health and Military Performance"
  sponsorshipStatus: "Public/military research funding"
  conflictsOfInterest: "Not reported in the cited abstract"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R10"
  title: "Quantification of huperzine A in Huperzia serrata by HPLC-UV and identification of the major constituents in its alkaloid extracts by HPLC-DAD-MS-MS"
  authors: "Qingqing Wu; Yuehua Gu"
  year: 2005
  url: "https://pubmed.ncbi.nlm.nih.gov/16337768/"
  kind: "Analytical chemistry study"
  insight: "Huperzia alkaloid extracts contain HupA plus multiple other alkaloids."
  limitation: "Chemical characterization does not establish clinical equivalence, efficacy, or safety."
  funding: "Not stated"
  sponsorshipStatus: "Not stated"
  conflictsOfInterest: "Not reported"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R11"
  title: "Revised Draft Guidance for Industry: Dietary Supplements: New Dietary Ingredient Notifications and Related Issues (April 2024)"
  authors: "U.S. Food and Drug Administration"
  year: 2024
  url: "https://www.fda.gov/media/99538/download"
  kind: "Regulatory draft guidance"
  insight: "Uses cholinesterase-inhibiting ingredients such as HupA as an example of possible additive risk with cholinergic agonists."
  limitation: "Draft guidance and a general safety example, not a product-specific legal determination."
  funding: "U.S. government"
  sponsorshipStatus: "Public regulator"
  conflictsOfInterest: "No commercial conflict stated"
  conflictOfInterestStatus: "Not applicable"

- sourceId: "R12"
  title: "Huperzine A: Dietary Supplements for Brain Health"
  authors: "Operation Supplement Safety, U.S. Department of Defense"
  year: 2026
  url: "https://www.opss.org/article/huperzine-dietary-supplements-brain-health"
  kind: "Government consumer-health brief"
  insight: "Summarizes the lack of reliable healthy-enhancement evidence and describes U.S. marketing and China’s drug use."
  limitation: "Not a primary trial or formal legal opinion."
  funding: "Public U.S. Department of Defense program"
  sponsorshipStatus: "Public institutional"
  conflictsOfInterest: "No commercial conflict stated"
  conflictOfInterestStatus: "No apparent commercial sponsorship"

- sourceId: "R13"
  title: "Huperzine A — Cognitive Vitality for Researchers"
  authors: "Alzheimer’s Drug Discovery Foundation"
  year: 2020
  url: "https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Huperzine-A-Cognitive-Vitality-For-Researchers.pdf"
  kind: "Research evidence summary"
  insight: "Summarizes trial heterogeneity, publication-bias concerns, and the difference between AD evidence and healthy enhancement."
  limitation: "Secondary synthesis rather than an independently registered systematic review."
  funding: "Organizational publication; specific funding not stated"
  sponsorshipStatus: "Nonprofit institutional"
  conflictsOfInterest: "Not stated"
  conflictOfInterestStatus: "Unknown"

- sourceId: "R14"
  title: "Huperzine A 100 mcg (Label)"
  authors: "NIH Office of Dietary Supplements Dietary Supplement Label Database"
  year: 2023
  url: "https://dsld.od.nih.gov/label/295821"
  kind: "Regulatory-label database record"
  insight: "Documents example U.S. supplement labeling and cognitive claims."
  limitation: "A label record is not efficacy or safety evidence."
  funding: "U.S. government"
  sponsorshipStatus: "Public database"
  conflictsOfInterest: "No commercial conflict stated"
  conflictOfInterestStatus: "Not applicable"

- sourceId: "R15"
  title: "HUPERZINE A"
  authors: "U.S. Food and Drug Administration Substance Registration System"
  year: 2026
  url: "https://precision.fda.gov/uniisearch/srs/unii/0111871I23"
  kind: "Substance identity record"
  insight: "Identifies HupA as an ingredient substance and explicitly states that a UNII does not imply regulatory review or approval."
  limitation: "Identity registration is not a marketing authorization or safety assessment."
  funding: "U.S. government"
  sponsorshipStatus: "Public regulator"
  conflictsOfInterest: "No commercial conflict stated"
  conflictOfInterestStatus: "Not applicable"
```

## Legal

Legal status depends on jurisdiction, product form, labeling, and disease claims. In the United States, HupA appears in supplement-label records, but an FDA substance identifier does not imply FDA review or approval, and OPSS describes the legality of dietary-supplement marketing as unclear. OPSS describes HupA as an approved drug in China. These statements are jurisdictional descriptions, not legal advice. sourceId: R11, R12, R14, R15

```yaml
- jurisdiction: "United States"
  status: "Sold in products labeled as dietary supplements; no FDA approval is implied by a UNII or label record; legality of HupA-specific supplement marketing is described as unclear"
  sourceId: "R11, R12, R14, R15"
- jurisdiction: "China"
  status: "Described by OPSS as an approved drug for cognitive disorders including Alzheimer disease"
  sourceId: "R12"
- regulatory_scope: "A supplement label, ingredient identity record, or research use does not establish an approved medical indication"
  sourceId: "R11, R14, R15"
```

## Research Metadata
- **Total research steps**: 70
- **Search queries executed**: 12
- **Citations found**: 15
- **Task ID**: resp_04c3fe8a12b720bc016ac9511af03087d2814abd5dc68da80d
- **Execution time**: 658.43 seconds

## Citations
1. [Source 1](https://www.opss.org/article/huperzine-dietary-supplements-brain-health")
2. [Source 2](https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Huperzine-A-Cognitive-Vitality-For-Researchers.pdf")
3. [Source 3](https://dsld.od.nih.gov/label/295821")
4. [Source 4](https://pmc.ncbi.nlm.nih.gov/articles/PMC3269774/")
5. [Source 5](https://pubmed.ncbi.nlm.nih.gov/12181083/")
6. [Source 6](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0074916")
7. [Source 7](https://www.cochrane.org/evidence/CD008827_no-evidence-randomised-controlled-trials-or-against-use-huperzine-treatment-people-mild-cognitive")
8. [Source 8](https://pubmed.ncbi.nlm.nih.gov/10678121/")
9. [Source 9](https://pubmed.ncbi.nlm.nih.gov/34567353/")
10. [Source 10](https://pubmed.ncbi.nlm.nih.gov/18348466/")
11. [Source 11](https://www.rivm.nl/bibliotheek/rapporten/2024-0028.pdf")
12. [Source 12](https://pubmed.ncbi.nlm.nih.gov/31990212/")
13. [Source 13](https://pubmed.ncbi.nlm.nih.gov/16337768/")
14. [Source 14](https://www.fda.gov/media/99538/download")
15. [Source 15](https://precision.fda.gov/uniisearch/srs/unii/0111871I23")
