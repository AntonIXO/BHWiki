---
slug: bromantane
name: Bromantane
subtitle: "Ladasten, asthenia research, and the limits of cognitive-enhancement claims"
aliases:
  - Bromantan
  - Ladasten
  - Ладастен
  - Adamantylbromphenylamine
formula: C16H20BrN
molecularWeight: 306.2
category: "Synthetic psychoactive compound"
tags:
  - asthenia
  - fatigue
  - cognition
  - stimulant
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
x-shape: [slug, name, subtitle, summary, description, aliases, formula, molecularWeight, pubchemCid, smiles, category, tags, accent, evidenceNote, reviewedAt, editorialStatus, halfLife, pkObservations, kinetics, modifiers, doses, effects, outcomes, claims, mechanisms, cautions, interactions, experienceLinks, references, legal]
---

## Summary

Bromantane has published human research, including a small randomized neurasthenia trial and a larger uncontrolled Russian clinical study. These provide preliminary signals for relief of asthenic symptoms, not reliable evidence of general cognitive enhancement. Healthy-volunteer findings are mixed: laboratory changes under fatigue coexist with unchanged principal performance measures in rested participants. Long-term safety, clinically important interactions, and independently replicated efficacy remain inadequately characterized. (sourceId: nezn-2009; sourceId: voz-2010; sourceId: viat-2000; sourceId: bogdan-2009)

Bromantane is listed as **bromantan under S6.A, non-specified stimulants, prohibited in competition**, in the 2026 World Anti-Doping Agency list. Sporting prohibition is separate from medicines authorization or criminal-law scheduling. (sourceId: wada-2026)

## Description

Bromantane is the synthetic adamantane derivative **N-(4-bromophenyl)adamantan-2-amine**, CAS 87913-26-6. Its formula is C16H20BrN; the forensic monograph reports molecular weight rounded to 306.2 g/mol. “Actoprotector” and “synthetic adaptogen” are descriptive classifications, not demonstrations of clinical benefit. (sourceId: cfsre-2024)

The Russian Ladasten instruction identifies oral 50 mg and 100 mg tablets containing adamantylbromphenylamine, with starch, microcrystalline cellulose, and magnesium stearate as excipients. No authoritative formulation document for a distinct product specifically named **ADAPTOGEN** was identified in this review; it is not treated as an established bioequivalent product. Oral-tablet findings do not establish equivalence of independently marketed powders, liquids, sublingual preparations, or nasal formulations. (sourceId: ladasten-label-2024; sourceId: literature-search-2026; sourceId: market-2025)

## Evidence note

Targeted searches used bromantane, bromantan, bromontan, Ladasten, adamantilbromphenylamine, alternative transliterations, and Russian-language terms. The retrieved human literature was predominantly Russian-language. No independent EU/EEA clinical efficacy replication was identified in that publication search. This was not an exhaustive reconstruction of historical Russian approvals or a complete audit of European trial registries. (sourceId: literature-search-2026)

ClinicalTrials.gov returned **zero records** for bromantane/bromantan/Ladasten and for an additional synonym search on the review date. This means no matching records were found in that registry—not that no human trials occurred. Published studies and their registered protocols must be distinguished; a prospectively registered primary endpoint was not verified for the principal studies below. (sourceId: ctgov-search-2026)

The 728-patient report appears under both PMID 21322821 and PMID 20559263 with matching study descriptions and results; it is treated as **one study**, not independent replication. Abstract-only findings are identified as such. Missing funding or conflict disclosures are recorded as unknown, not as evidence of independence. (sourceId: voz-2010)

## Doses

```yaml
- id: russian-label
  context: "Labeled treatment of asthenia/neurasthenia, not cognitive enhancement."
  formulation: "Oral Ladasten tablets."
  reportedRegimen: "50–100 mg per administration; 100–200 mg/day in two administrations for 2–4 weeks."
  sourceId: ladasten-label-2024

- id: clinical-study-exposures
  context: "Published research exposures; details and populations appear under Outcomes."
  reportedRegimen: "The placebo-controlled neurasthenia study used 100 mg/day with adjustment to 50–150 mg/day."
  limitation: "A studied regimen is not a validated dose for healthy users or other formulations."
  sourceId: nezn-2009

- id: dose-gap
  context: "Healthy cognition and alternative routes."
  finding: "No validated cognitive-enhancement dose, human intranasal regimen, sublingual dose conversion, or human exposure-equivalence study was identified."
  limitation: "Animal mg/kg experiments and marketed product strengths cannot fill these clinical gaps."
  sourceId: literature-search-2026
```

## Pharmacokinetics

```yaml
- id: label-pk
  route: oral
  tmax: "2–4 hours"
  halfLife: "11.21 hours"
  cmax: "363.3 ng/mL"
  evidence: "Values stated in the Russian product instruction."
  limitation: "The instruction does not identify the administered dose, participant characteristics, sample size, assay, variability, or underlying PK publication."
  sourceId: ladasten-label-2024

- id: human-pk-gaps
  finding: "An adequately documented primary human PK dataset establishing absolute bioavailability, dose proportionality, food effects, repeated-dose accumulation, metabolic-enzyme contributions, or renal/hepatic impairment effects was not recovered."
  interpretation: "These quantities remain unverified here; absence of a recovered dataset does not prove they have never been measured."
  sourceId: literature-search-2026

- id: species-boundary
  finding: "A frequently relevant early PK/pharmacodynamic publication studied rats."
  interpretation: "Its distribution and exposure findings cannot establish human bioavailability, brain concentrations, or clearance."
  sourceId: sergeeva-pk-1995

- id: duration-boundary
  finding: "An elimination half-life is not a measured duration of cognitive benefit, subjective stimulation, or anti-doping detectability."
  interpretation: "The label-derived half-life cannot establish an evidence-based duration for those separate outcomes."
  sourceId: ladasten-label-2024
```

## Modifiers

```yaml
- id: fatigue-context
  finding: "The healthy-volunteer laboratory study reported more pronounced effects in participants characterized as stress-labile."
  limitation: "Exploratory subgroup findings in a small study do not establish a clinically validated responder profile."
  sourceId: bogdan-2009

- id: eeg-and-expectancy
  finding: "A neurasthenia analysis associated reduced baseline alpha activity with stronger subjective responses to both Ladasten and placebo."
  interpretation: "This is not evidence that EEG testing can reliably select bromantane responders; expectancy and nonspecific treatment effects remain relevant."
  sourceId: neznamov-eeg-2012

- id: immune-biomarkers
  finding: "Lower baseline stimulated interleukin-1β production was associated with greater subsequent improvement in an uncontrolled 30-patient study."
  limitation: "Grouping patients by their eventual response does not validate a predictive biomarker or establish causation."
  sourceId: vetlugina-2015
```

## Effects

```yaml
- id: clinical-fatigue
  domain: "Asthenia and associated symptoms"
  evidenceAssessment: "Preliminary positive clinical signal."
  interpretation: "The largest retrieved report measured symptom ratings and clinical impressions without a concurrent control group. These are not placebo-adjusted efficacy estimates."
  sourceId: voz-2010

- id: healthy-performance
  domain: "Performance in rested healthy participants"
  evidenceAssessment: "No demonstrated improvement in principal operator-performance measures in the small retrieved study."
  interpretation: "EEG activation and reduced tremor are distinct from improved cognition or productivity."
  sourceId: viat-2000

- id: laboratory-fatigue
  domain: "Performance during experimentally induced mental fatigue"
  evidenceAssessment: "Selective favorable findings alongside null measures."
  interpretation: "The experiment does not establish durable benefits for memory, learning, occupational performance, or academic achievement."
  sourceId: bogdan-2009
```

## Outcomes

```yaml
- id: rested-volunteers-2000
  population: "10 healthy volunteers."
  design: "Single oral administration compared with placebo."
  dose: "Not specified in the retrieved abstract."
  endpoints: "EEG, psychophysiological measures, subjective state, operator performance, and tremor."
  result: "Principal operator-performance components and subjective state were unchanged in untired participants; EEG changes and tremor reduction were reported."
  limitation: "Very small experiment; no verified prespecified primary endpoint or sustained functional benefit."
  sourceId: viat-2000

- id: pilot-asthenia-2006
  population: "Patients with psychogenic asthenic disorders."
  design: "Pilot clinical study, indexed as phase II."
  endpoints: "Psychopathological assessments and psychological self-ratings."
  result: "Authors described activating and anxiolytic effects."
  limitation: "The retrieved abstract does not provide sample size, comparator details, dose, a primary-endpoint hierarchy, or a numerical treatment effect."
  sourceId: siuniakov-2006

- id: neurasthenia-randomized-2009
  population: "30 patients; 15 allocated to Ladasten and 15 to placebo."
  design: "Randomized, single-blind; 28 days followed by one week of placebo."
  endpoints: "MFI-20 fatigue inventory, visual-analogue asthenia ratings, state anxiety, and Clinical Global Impression scales."
  result: "Authors reported greater symptom reduction with Ladasten; 11/15 active-treatment participants were much or very much improved on CGI."
  limitation: "All 15 active participants but only 7/15 placebo participants completed treatment. Last-observation-carried-forward analysis was used. The small sample, differential attrition, and unverified primary-endpoint specification limit inference."
  sourceId: nezn-2009

- id: fatigued-volunteers-2009
  population: "20 healthy adults aged 18–45; 10 per group."
  design: "Placebo-controlled laboratory experiment involving prolonged mental arithmetic."
  exposure: "One oral 100 mg dose; subsequent testing approximately one hour later."
  endpoints: "A broad battery of reaction-time, response-error, coordination, attention, and other psychophysiological measures."
  result: "Some measures favored Ladasten, including fewer anticipatory errors in a simple reaction task."
  nullFindings: "Tables did not show significant benefits for mean simple or choice reaction time."
  limitation: "No clearly identified primary endpoint; randomization and blinding were not established from the inspected methods. Multiple comparisons and small subgroups weaken generalization."
  sourceId: bogdan-2009

- id: multicenter-asthenia-2010
  population: "728 analyzable patients with psychoautonomic syndrome and asthenic disorders across 28 Russian centers; 91.6% of the original sample."
  design: "Uncontrolled treatment study."
  exposure: "50–100 mg/day for 28 days."
  endpoints: "Clinical Global Impression, symptom scales, sleep, and quality of life."
  result: "Reported responder proportions were 76.0% on CGI-S and 90.8% on CGI-I. Improvement was reported from day 3 and at one-month post-treatment follow-up."
  limitation: "Response definitions are author-specific; there was no concurrent placebo group. Persistence of ratings after treatment does not establish disease modification or continuing drug exposure."
  sourceId: voz-2010

- id: immune-asthenia-2015
  population: "30 patients with non-psychotic mental disorders and prominent asthenia."
  design: "Uncontrolled interrupted time-series study; 100 mg/day for 28 days."
  endpoints: "MFI-20 and cellular, humoral, and stimulated-cytokine measurements."
  result: "Twenty-one patients were categorized as much/very much improved and nine as minimally improved. Final median MFI-20 scores were 26 and 57, respectively."
  nullFindings: "Favorable immune-marker changes were reported only in the stronger-response subgroup."
  limitation: "Response-defined subgroups, absence of a randomized comparator, and biomarker multiplicity prevent causal or predictive conclusions."
  sourceId: vetlugina-2015

- id: high-altitude-combination-2014
  population: "Volunteers moving from 1670 m to 3750 m after prior acclimatization."
  design: "Comparison involving placebo, hypoxen, and combined actoprotectors."
  exposure: "Metaprot 125 mg plus Ladasten 100 mg in the combination arm."
  endpoints: "Exercise tolerance, blood-cell measures, cardiovascular/CNS measures, and energy-metabolism indices."
  result: "Authors reported faster adaptation with the combination."
  limitation: "The contribution of bromantane cannot be isolated; this is not monotherapy evidence or a general cognitive-enhancement trial."
  sourceId: kundashev-2014

- id: palliative-cancer-combination-2015
  population: "Patients with incurable cancer and fatigue/weakness."
  design: "Comparative controlled clinical report."
  exposure: "Ladasten 100 mg/day with ondansetron 16 mg/day and agomelatine 50 mg nightly."
  result: "The combination was reported as more effective than standard therapy."
  limitation: "The retrieved abstract lacks numerical endpoint estimates and sample size. Multiple active medicines preclude attribution to bromantane."
  sourceId: ryazankina-2015

- id: parkinson-report-2011
  population: "Patients with Parkinson disease."
  finding: "A publication on non-motor symptoms is indexed as a randomized controlled trial."
  limitation: "No abstract is provided in PubMed; sufficient primary results were not recovered to characterize the comparator, dose, primary endpoint, or treatment effect."
  sourceId: sarycheva-2011

- id: ibs-report-2010
  population: "Patients with irritable bowel syndrome and associated asthenic symptoms."
  finding: "A clinical treatment report was identified."
  limitation: "The abstract does not supply sample size, a quantitative comparative outcome, or an identifiable primary endpoint. It does not establish bromantane monotherapy efficacy."
  sourceId: uspenskii-2010
```

## Mechanisms

```yaml
- id: dopamine-and-plasticity
  evidenceType: "Rat experiments and hippocampal slices."
  finding: "Ladasten altered tyrosine-hydroxylase expression and dopamine/L-DOPA measures. In slices, reinforcement of short-term potentiation depended on protein synthesis and was attenuated by D1/D5 receptor antagonism."
  limitation: "These results do not demonstrate increased dopamine synthesis, improved memory, or durable neuroplasticity in humans."
  sourceId: mikhaylova-2007

- id: monoamine-uptake
  evidenceType: "Animal and in-vitro pharmacology."
  finding: "An early study reported dopamine/serotonin uptake inhibition at 50 micromolar and noradrenaline uptake inhibition at higher concentrations."
  limitation: "Human target engagement at clinically achieved unbound concentrations was not established."
  sourceId: morozov-1999

- id: gaba-related-gene-expression
  evidenceType: "Rat-brain gene-expression experiment."
  finding: "Changes involving GAT3 and other genes were proposed as contributors to anxiolytic effects."
  limitation: "Gene-expression changes are not proof of direct GABA-receptor agonism or a characterized human anxiolytic mechanism."
  sourceId: vakhitova-2005

- id: clinical-mechanism-boundary
  finding: "Human immune-marker associations are separate from brain neurotransmitter measurements and clinical disease outcomes."
  interpretation: "They do not establish generalized immune enhancement, infection prevention, or a mechanism responsible for clinical improvement."
  sourceId: vetlugina-2015
```

## Cautions

```yaml
- id: labeled-adverse-effects
  finding: "The instruction lists excessive activation, sleep-onset disturbance, allergic reactions, and possible dizziness; substantial overdose may produce sedation."
  sourceId: ladasten-label-2024

- id: randomized-safety-findings
  finding: "Adverse events occurred in 7/15 Ladasten recipients and 4/15 placebo recipients. Active-arm events included headache, anxiety, irritability, and increased blood pressure."
  limitation: "These small counts cannot quantify uncommon cardiovascular or psychiatric risks."
  sourceId: nezn-2009

- id: uncontrolled-safety-findings
  finding: "The multicenter report recorded adverse effects in 3%, discontinuation in 0.8%, and no serious adverse effects."
  limitation: "Different populations and ascertainment preclude pooling this rate with the small randomized trial. Short follow-up cannot exclude rare or delayed toxicity."
  sourceId: voz-2010

- id: pregnancy-lactation-age
  finding: "Pregnancy, breastfeeding, age under 18, and hypersensitivity are contraindications in the Russian instruction."
  sourceId: ladasten-label-2024

- id: reproductive-evidence
  finding: "A rat study reported favorable antenatal/postnatal developmental findings."
  limitation: "Animal developmental observations do not establish human pregnancy, lactation, or fertility safety."
  sourceId: bugaeva-2012

- id: long-term-gaps
  finding: "The retrieved evidence does not adequately quantify long-term cardiovascular, hepatic, renal, psychiatric, reproductive, tolerance, or dependence outcomes."
  limitation: "An absence of sufficiently documented events is not a demonstrated absence of risk."
  sourceId: literature-search-2026

- id: forensic-coexposure
  finding: "A 2024 CFSRE monograph described a blood toxicology detection with methamphetamine and bromazolam also present."
  limitation: "Co-detection cannot attribute a clinical outcome or death to bromantane and does not establish an interaction effect."
  sourceId: cfsre-2024

- id: product-equivalence
  finding: "European/Australian laboratory surveillance detected bromantane in two submitted samples, with 33.2 mg/unit reported for quantified material."
  limitation: "These analytical findings neither validate commercial products generally nor establish equivalence to Ladasten tablets."
  sourceId: market-2025
```

## Claims

```yaml
- id: no-human-research
  claim: "Bromantane has never been studied in humans."
  assessment: "Incorrect."
  reason: "Published clinical and healthy-volunteer investigations exist, although their evidentiary strength is limited."
  sourceId: literature-search-2026

- id: broad-cognitive-enhancement
  claim: "Bromantane reliably improves cognition and productivity in healthy people."
  assessment: "Not established."
  reason: "The rested-volunteer study found unchanged principal performance measures; favorable EEG findings are not equivalent to better cognitive performance."
  sourceId: viat-2000

- id: nonaddictive
  claim: "Bromantane cannot cause tolerance, dependence, or withdrawal."
  assessment: "Not established."
  reason: "No withdrawal syndrome was observed during one week after the small 28-day trial; that does not exclude dependence after other exposures."
  sourceId: nezn-2009

- id: dopamine-restoration
  claim: "Bromantane permanently restores dopamine function."
  assessment: "Unsupported clinical extrapolation."
  reason: "Rat biochemical and slice-plasticity findings do not demonstrate permanent human dopamine restoration."
  sourceId: mikhaylova-2007

- id: disease-generalization
  claim: "Asthenia findings establish efficacy for ADHD, ME/CFS, or long COVID."
  assessment: "Not established by the cited studies."
  reason: "The multicenter population and outcomes do not provide diagnosis-specific randomized evidence for those conditions."
  sourceId: voz-2010

- id: adaptogen-safety
  claim: "Classification as an adaptogen establishes safety."
  assessment: "Incorrect inference."
  reason: "A descriptive pharmacological category is not a safety assessment or medicines authorization."
  sourceId: cfsre-2024
```

## Interactions

```yaml
- id: thiopental
  finding: "The Russian instruction states that Ladasten reduces thiopental sodium's hypnotic action."
  limitation: "It does not provide a quantitative human interaction study."
  sourceId: ladasten-label-2024

- id: benzodiazepines
  finding: "The instruction states that benzodiazepine anxiolysis is not weakened."
  limitation: "This does not establish overall combination safety."
  sourceId: ladasten-label-2024

- id: uncharacterized-combinations
  finding: "Controlled human interaction data were not identified for MAO inhibitors, other stimulants, antidepressants, alcohol, or commonly combined nootropics."
  interpretation: "Neither interaction magnitude nor a safe dose or timing adjustment is established by the retrieved evidence."
  sourceId: literature-search-2026

- id: mechanistic-interactions
  finding: "Animal monoaminergic findings create hypotheses about pharmacodynamic interactions."
  limitation: "They do not establish a particular human interaction syndrome, a quantified risk, or a contraindication."
  sourceId: morozov-1999

- id: combination-study-boundary
  finding: "Clinical exposure alongside other medicines has been reported."
  limitation: "A multidrug efficacy report is not a dedicated pharmacokinetic or pharmacodynamic interaction assessment."
  sourceId: ryazankina-2015
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ladasten-label-2024
  title: "Инструкция по медицинскому применению лекарственного препарата Ладастен®"
  organization: "ЗАО «ЛЕККО»; ОАО «Фармстандарт-Лексредства»"
  year: 2024
  url: "https://files.dev.lsgeotar.ru/public/k96dW5L-UO56HOW9SFzxXg.pdf"
  kind: "Russian product instruction; registration stamp dated 16 May 2024"
  insight: "Documents formulation, labeled regimen, PK statements, contraindications, interactions, and prescription status."
  limitation: "Underlying clinical datasets are not supplied; not a current availability assessment."
  funding: "Document-specific funding not itemized."
  sponsorshipStatus: "manufacturer-document"
  conflictsOfInterest: "LEKKO is the authorization holder; Pharmstandard-Leksredstva is the manufacturer."
  conflictOfInterestStatus: "commercial-roles-disclosed"

- id: cfsre-2024
  title: "Bromantane — NPS Discovery New Drug Monograph"
  authors: "Sara E. Walton; Denice Teem; Alex J. Krotulski; Donna M. Papsun; Barry K. Logan"
  organization: "Center for Forensic Science Research and Education"
  year: 2024
  url: "https://www.drugsandalcohol.ie/41986/1/Bromantane-New-Drug-Monograph-NPS-Discovery.pdf"
  kind: "Primary forensic identification report"
  insight: "Confirms chemical identity and a toxicology detection; describes US scheduling status in August 2024."
  limitation: "Forensic identification is not causal toxicology, clinical efficacy, or current legal certification."
  funding: "US National Institute of Justice award 15PNIJ-22-GG-04434-MUMU."
  sponsorshipStatus: "publicly-funded"
  conflictsOfInterest: "Contributions from CFSRE and NMS Labs acknowledged; no formal conflict declaration located."
  conflictOfInterestStatus: "not-reported"

- id: literature-search-2026
  title: "PubMed search results for bromantane, bromantan, and Ladasten"
  organization: "US National Library of Medicine"
  year: 2026
  url: "https://pubmed.ncbi.nlm.nih.gov/?term=bromantane+OR+bromantan+OR+ladasten"
  kind: "Literature search; accessed 15 October 2026"
  insight: "Identifies primary human and preclinical publications; supplemented by transliteration and generic-name searches."
  limitation: "Search-dependent evidence map, not proof that unindexed, unpublished, or inaccessible evidence does not exist."
  funding: "Public bibliographic service; not a clinical trial."
  sponsorshipStatus: "not-applicable"
  conflictsOfInterest: "Database hosting does not establish independence of indexed studies."
  conflictOfInterestStatus: "not-applicable"

- id: ctgov-search-2026
  title: "ClinicalTrials.gov search results for bromantane OR bromantan OR ladasten"
  organization: "US National Library of Medicine"
  year: 2026
  url: "https://clinicaltrials.gov/search?term=bromantane%20OR%20bromantan%20OR%20ladasten"
  kind: "Registry search; accessed 15 October 2026"
  insight: "No matching records; a supplementary generic-name/bromontan/NP-160 search also returned zero."
  limitation: "Restricted to this registry and search vocabulary; published Russian trials nevertheless exist."
  funding: "Public registry service; no matching trial sponsor identified."
  sponsorshipStatus: "not-applicable"
  conflictsOfInterest: "No matching study-level disclosure available."
  conflictOfInterestStatus: "not-applicable"

- id: nezn-2009
  title: "Ladasten, the new drug with psychostimulant and anxiolytic actions in treatment of neurasthenia (results of the comparative clinical study with placebo)"
  authors: "G. G. Neznamov; S. A. Siuniakov; E. S. Teleshova; D. V. Chumakov; M. A. Reutova; T. S. Siuniakov; L. E. Mametova; O. A. Dorofeeva; S. A. Grishin"
  year: 2009
  url: "https://pubmed.ncbi.nlm.nih.gov/19491814/"
  fullTextUrl: "https://www.researchgate.net/publication/26262370_Ladasten_the_new_drug_with_psychostimulant_and_anxiolytic_actions_in_treatment_of_neurasthenia_results_of_the_comparative_clinical_study_with_placebo"
  kind: "Primary randomized single-blind trial; published full text inspected"
  insight: "Small controlled efficacy signal with adverse-event and withdrawal observations."
  limitation: "Differential attrition, short follow-up, and no verified prespecified primary outcome."
  funding: "No funding statement located."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Authors affiliated with the Zakusov institute developing Ladasten; formal financial disclosure not located."
  conflictOfInterestStatus: "incompletely-reported"

- id: viat-2000
  title: "[The neuro- and psychophysiological effects of bromantane]."
  authors: "O. A. Viatleva; V. G. Barchukov; I. S. Morozov; Iu. A. Salenko; E. N. Zhirnov"
  year: 2000
  url: "https://pubmed.ncbi.nlm.nih.gov/10998997/"
  kind: "Primary placebo-comparison study; abstract"
  insight: "Preserves important null findings in rested healthy participants."
  limitation: "Ten participants; dose and complete methodological details unavailable in abstract."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: bogdan-2009
  title: "[Effect of ladasten on the psychophysiological parameters of healthy volunteers]."
  authors: "N. G. Bogdan; N. V. Kolotilinskaia; M. A. Iarkova; S. A. Nadorov; B. A. Badyshtov; S. B. Seredenin"
  year: 2009
  url: "https://pubmed.ncbi.nlm.nih.gov/19642584/"
  fullTextUrl: "https://ekf.folium.ru/index.php/ekf/article/download/694/627"
  kind: "Primary healthy-volunteer experiment; full text and tables inspected"
  insight: "Selective psychophysiological findings under mental fatigue."
  limitation: "Small groups, multiple outcomes, and unclear randomization/blinding."
  funding: "No funding statement located."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Zakusov institute research; no formal financial disclosure located."
  conflictOfInterestStatus: "not-reported"

- id: siuniakov-2006
  title: "[Pilot clinical trial of ladasten]."
  authors: "S. A. Siuniakov; S. A. Grishin; E. S. Teleshova; G. G. Neznamov; S. B. Seredenin"
  year: 2006
  url: "https://pubmed.ncbi.nlm.nih.gov/16995430/"
  kind: "Primary phase-II pilot report; abstract"
  insight: "Documents early human asthenia research."
  limitation: "Insufficient abstract detail for quantitative comparative assessment."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: voz-2010
  title: "[Treatment of asthenic disorders in patients with psychoautonomic syndrome: results of a multicenter study on efficacy and safety of ladasten]."
  authors: "T. G. Voznesenskaia; N. M. Fokina; N. N. Iakhno"
  year: 2010
  url: "https://pubmed.ncbi.nlm.nih.gov/21322821/"
  duplicateRecordUrl: "https://pubmed.ncbi.nlm.nih.gov/20559263/"
  kind: "Primary multicenter clinical report; abstract"
  insight: "Largest retrieved clinical dataset, with symptom and short-term tolerability observations."
  limitation: "Uncontrolled; incomplete analyzable cohort; duplicate indexing is not replication."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: neznamov-eeg-2012
  title: "[Ladasten versus placebo effect self-evaluated by neurasthenia patients with different EEG alpha rhythm types]."
  authors: "G. G. Neznamov; V. K. Bochkarev; M. A. Reutova; A. A. Shabanova; S. A. Siuniakov"
  year: 2012
  url: "https://pubmed.ncbi.nlm.nih.gov/22834121/"
  kind: "Primary clinical subgroup analysis; abstract"
  insight: "Stronger subjective responses occurred with both active treatment and placebo in one EEG-defined subgroup."
  limitation: "Exploratory association; independence from related clinical cohorts not established."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: vetlugina-2015
  title: "[Influence of Adamantilbromphenylamine on Parameters of Immunity and Symptoms of Asthenia in Patients with Non-Psychotic Mental Disorders]."
  authors: "T. P. Vetlugina; V. B. Nikitina; S. A. Sergeeva; M. M. Axenov; O. A. Lobacheva; D. N. Savochkina; E. M. Epanchintseva; N. A. Bokhan"
  year: 2015
  url: "https://pubmed.ncbi.nlm.nih.gov/26710531/"
  fullTextUrl: "https://vestnikramn.spr-journal.ru/jour/article/download/496/467"
  kind: "Primary uncontrolled clinical study"
  insight: "Connects symptom changes with exploratory immune measurements."
  limitation: "Thirty patients and response-defined subgroups cannot validate efficacy or biomarkers."
  funding: "Authors declared no reportable financial support."
  sponsorshipStatus: "declared-none"
  conflictsOfInterest: "Authors declared no reportable conflicts."
  conflictOfInterestStatus: "declared-none"

- id: kundashev-2014
  title: "[Possibilities of the pharmacological correction of adaptive reactions of human organism in short-term moving from middle to high altitude]."
  authors: "U. K. Kundashev; A. Z. Zurdinov; V. G. Barchukov"
  year: 2014
  url: "https://pubmed.ncbi.nlm.nih.gov/25365868/"
  kind: "Primary human combination study; abstract"
  insight: "Documents combined actoprotector exposure during altitude adaptation."
  limitation: "Cannot isolate bromantane; sample size and complete analysis unavailable in abstract."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: ryazankina-2015
  title: "[Optimization of pharmacological therapy for weakness syndrome in incurable patients]."
  authors: "A. A. Ryazankina; S. A. Rozengard; V. A. Glushchenko; A. P. Karitsky; A. V. Kvashnin"
  year: 2015
  url: "https://pubmed.ncbi.nlm.nih.gov/26087610/"
  kind: "Primary controlled combination-treatment report; abstract"
  insight: "Documents use in cancer-related weakness."
  limitation: "Multidrug regimen and sparse abstract reporting prevent bromantane-specific inference."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: sarycheva-2011
  title: "[Ladasten in the management of non-motor symptoms of Parkinson's disease]."
  authors: "T. N. Sarycheva; V. A. Rybak; O. V. Kurushina"
  year: 2011
  url: "https://pubmed.ncbi.nlm.nih.gov/21434470/"
  kind: "Primary publication; randomized-trial indexing"
  insight: "Establishes that a Parkinson-related human report exists."
  limitation: "No PubMed abstract; efficacy details not sufficiently recovered."
  funding: "Not available in retrieved record."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not available in retrieved record."
  conflictOfInterestStatus: "not-reported"

- id: uspenskii-2010
  title: "[Prospects for using ladasten preparations in patients with irritable bowel syndrome]."
  authors: "Iu. P. Uspenskiĭ; Iu. A. Fominykh"
  year: 2010
  url: "https://pubmed.ncbi.nlm.nih.gov/21434378/"
  kind: "Primary clinical report; abstract"
  insight: "Documents investigation of associated asthenic symptoms in IBS."
  limitation: "Insufficient quantitative and design information for efficacy assessment."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: mikhaylova-2007
  title: "The effects of ladasten on dopaminergic neurotransmission and hippocampal synaptic plasticity in rats."
  authors: "M. Mikhaylova; J. V. Vakhitova; R. S. Yamidanov; M. Kh. Salimgareeva; S. B. Seredenin; T. Behnisch"
  year: 2007
  url: "https://pubmed.ncbi.nlm.nih.gov/17854844/"
  kind: "Primary animal and ex-vivo study"
  insight: "Supports dopamine-related and protein-synthesis-dependent mechanistic hypotheses."
  limitation: "Not human target-engagement or cognitive-efficacy evidence."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: morozov-1999
  title: "[The mechanisms of the neurotropic action of bromantan]."
  authors: "I. S. Morozov; G. S. Pukhova; N. A. Avdulov; S. A. Sergeeva; A. A. Spasov; I. N. Iezhitsa"
  year: 1999
  url: "https://pubmed.ncbi.nlm.nih.gov/10198757/"
  kind: "Primary preclinical pharmacology"
  insight: "Reports monoaminergic and other experimental effects."
  limitation: "Concentrations and animal effects do not establish human interaction magnitudes."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: vakhitova-2005
  title: "[DNA macroarray analysis of gene expression changes in rat brain after single administration of 2-aminoadamantane compound]."
  authors: "Iu. V. Vakhitova; R. S. Iamidanov; V. A. Vakhitov; S. B. Seredenin"
  year: 2005
  url: "https://pubmed.ncbi.nlm.nih.gov/15856951/"
  kind: "Primary rat gene-expression study"
  insight: "Identifies candidate signaling and GABA-related mechanisms."
  limitation: "Molecular associations do not establish receptor pharmacology or human benefit."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: sergeeva-pk-1995
  title: "[Correlated interconnection between pharmacokinetic and dynamic development of the pharmacologic effects of bromantane]."
  authors: "S. A. Sergeeva; S. V. Krapivin; A. S. Losev; I. S. Morozov"
  year: 1995
  url: "https://pubmed.ncbi.nlm.nih.gov/7795204/"
  kind: "Primary animal PK/pharmacodynamic publication"
  insight: "Identifies an early PK source as rat research."
  limitation: "No abstract; cannot supply a verified human PK estimate."
  funding: "Not available in retrieved record."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not available in retrieved record."
  conflictOfInterestStatus: "not-reported"

- id: bugaeva-2012
  title: "[Effect of ladasten on antenatal and postnatal development]."
  authors: "L. I. Bugaeva; T. D. Denisova; A. A. Spasov"
  year: 2012
  url: "https://pubmed.ncbi.nlm.nih.gov/22702107/"
  kind: "Primary rat developmental study"
  insight: "Documents reproductive/developmental experimentation."
  limitation: "Cannot establish safety during human pregnancy or breastfeeding."
  funding: "Not reported in retrieved abstract."
  sponsorshipStatus: "unknown"
  conflictsOfInterest: "Not reported in retrieved abstract."
  conflictOfInterestStatus: "not-reported"

- id: market-2025
  title: "The Occurrence of Illicit Smart Drugs or Nootropics in Europe and Australia and Their Associated Dangers: Results from a Market Surveillance Study by 12 Official Medicines Control Laboratories."
  authors: "Celine Vanhee; Eric Deconinck; Mark George; Andrew Hansen; Andreas Hackl; Uwe Wollein; Oliver El-Atma; Nico Beerbaum; Federica Aureli; Anna Borioni; Magdalena Poplawska; Agata Blazewicz; Karin Roschel; Claude Marson; Magnolia Mendoza Barrios; Birgit Hakkarainen; Andreas Blomgren; Ingrid Bakker-'t Hart; Marta Miquel"
  year: 2025
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/"
  kind: "Primary official-laboratory market surveillance"
  insight: "Documents bromantane detections and its research-chemical classification in the surveyed markets."
  limitation: "Selected suspect samples are not representative of all products; discussion of other drugs' harms is not bromantane-specific toxicity evidence."
  funding: "Authors report no external funding."
  sponsorshipStatus: "no-external-funding-declared"
  conflictsOfInterest: "Andreas Hackl's AGES employment disclosed; remaining authors declared no relevant commercial or financial relationships."
  conflictOfInterestStatus: "disclosed"

- id: canada-2024
  title: "Unauthorized drug products sold illegally on Quadragen and Advanced Research websites may pose serious health risks"
  organization: "Health Canada"
  year: 2024
  url: "https://recalls-rappels.canada.ca/en/alert-recall/unauthorized-drug-products-sold-illegally-quadragen-and-advanced-research-websites-may"
  kind: "Official safety and authorization notice"
  insight: "Specifically identifies bromantane as unauthorized in Canada."
  limitation: "A regulatory notice, not a systematic trial review or a worldwide legal determination."
  funding: "Government regulatory activity; document-specific funding not stated."
  sponsorshipStatus: "government"
  conflictsOfInterest: "Issued in a governmental regulatory capacity."
  conflictOfInterestStatus: "not-applicable"

- id: fda-database
  title: "Drugs@FDA: FDA-Approved Drugs"
  organization: "US Food and Drug Administration"
  year: 2026
  url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm"
  kind: "Official approval database; accessed 15 October 2026"
  insight: "Relevant source for US marketing authorization, distinct from chemical identifiers and scheduling."
  limitation: "Bromantane-specific query retrieval was incomplete; no affirmative authorization record was verified."
  funding: "Government regulatory database."
  sponsorshipStatus: "government"
  conflictsOfInterest: "Institutional regulatory role."
  conflictOfInterestStatus: "not-applicable"

- id: wada-2026
  title: "The 2026 Prohibited List"
  organization: "World Anti-Doping Agency"
  year: 2025
  url: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf"
  kind: "Official international standard, effective 1 January 2026"
  insight: "Lists bromantan under S6.A non-specified stimulants prohibited in competition."
  limitation: "Does not establish efficacy, medical authorization, criminal scheduling, or a detection window."
  funding: "Institutional standard-setting document; document-specific funding not itemized."
  sponsorshipStatus: "institutional"
  conflictsOfInterest: "Issued in WADA's anti-doping standard-setting role."
  conflictOfInterestStatus: "not-applicable"
```

## Legal

```yaml
- id: russia
  jurisdiction: Russia
  status: "The 2024 instruction documents Ladasten prescription status for asthenia/neurasthenia."
  limitation: "Current registration continuity and commercial availability were not independently established."
  sourceId: ladasten-label-2024

- id: european-markets
  jurisdiction: "European Union and Australia"
  status: "The 2025 official-laboratory surveillance paper classifies bromantane as a research chemical in these markets, contrasting it with Russian prescription use."
  limitation: "This is not a country-by-country determination of possession, importation, or supply law."
  sourceId: market-2025

- id: canada
  jurisdiction: Canada
  status: "Health Canada's July 2024 notice states that bromantane is not authorized for any use in Canada."
  limitation: "The notice's date and jurisdiction delimit this finding."
  sourceId: canada-2024

- id: united-states-scheduling
  jurisdiction: "United States"
  status: "CFSRE described bromantane as unscheduled in August 2024."
  limitation: "Current federal/state scheduling was not independently certified. Unscheduled status does not establish lawful medicinal or supplement marketing."
  sourceId: cfsre-2024

- id: united-states-authorization
  jurisdiction: "United States"
  status: "No affirmative FDA marketing-authorization record was verified for this article."
  limitation: "Approval-database query retrieval was incomplete; a chemical identifier or vendor listing is not an authorization record."
  sourceId: fda-database

- id: anti-doping
  jurisdiction: "Sport governed by the World Anti-Doping Code"
  status: "Bromantan is prohibited in competition under S6.A, non-specified stimulants, in the 2026 list."
  limitation: "No clearance interval or guaranteed negative-test window is established here."
  sourceId: wada-2026
```