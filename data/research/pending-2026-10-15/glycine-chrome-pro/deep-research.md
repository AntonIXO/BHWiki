---
slug: glycine
name: Glycine
subtitle: Dietary amino acid and separately studied supplemental glycine
aliases: [aminoacetic acid, glycocoll, Gly]
formula: C2H5NO2
category: amino-acid
tags: [sleep, cognition, metabolism]
reviewedAt: "2026-10-15"
editorialStatus: sourced-draft
x-shape: [slug, name, subtitle, summary, description, aliases, formula, molecularWeight, pubchemCid, smiles, category, tags, accent, evidenceNote, reviewedAt, editorialStatus, halfLife, pkObservations, kinetics, modifiers, doses, effects, outcomes, claims, mechanisms, cautions, interactions, experienceLinks, references, legal]
---

## Summary

Supplemental glycine has preliminary, short-term human evidence for some sleep measures, but results are selective rather than consistently positive. Small trials reported better subjective sleep or shorter sleep-stage latencies; restricted-sleep experiments did not consistently improve sleepiness, memory, or daytime functioning. Much of this research involved Ajinomoto-affiliated investigators. (sourceId: ref2; sourceId: ref3; sourceId: ref4)

Metabolic findings are mixed, and increased circulating glycine is not equivalent to improved health. A large schizophrenia trial found no benefit for negative symptoms or cognition; a severe-COVID-19 trial found no improvement in major clinical outcomes. Dietary associations, isolated glycine supplementation, and glycine-containing combinations require separate interpretation. (sourceId: ref11; sourceId: ref14; sourceId: ref17; sourceId: ref21; sourceId: ref23)

## Description

Glycine is a protein-forming amino acid obtained from food and endogenous synthesis. Food sources include meat, fish, dairy products and legumes; gelatin is glycine-rich. Its biochemical roles include protein, glutathione and creatine synthesis. These physiological functions do not establish that additional glycine improves clinical outcomes. (sourceId: ref1)

This article distinguishes free glycine powder or capsules from protein-bound dietary glycine, sublingual pharmaceutical preparations, intravenous administration and combination products. GlyNAC contains both glycine and N-acetylcysteine; its results cannot identify glycine’s independent contribution. (sourceId: ref8; sourceId: ref11; sourceId: ref15; sourceId: ref23)

## Evidence note

The strongest distinctions are between randomized comparisons and uncontrolled changes, between clinical outcomes and biomarkers, and between humans and experimental animals. The frequently cited heat-loss mechanism was investigated in rats, not established as a human thermoregulatory treatment. Some clinical studies are exceptionally small, while larger or more rigorous comparisons have produced null results. (sourceId: ref5; sourceId: ref12; sourceId: ref17)

References identify inspected funding and conflicts separately. Unavailable disclosures are marked unknown rather than interpreted as independence. Important access limitations include the unverified Bioglycin dose and internally ambiguous dose wording in the diabetes abstract. (sourceId: ref6; sourceId: ref9)

## Doses

```yaml
- context: Short-term sleep experiments
  formulation: Oral free glycine, including flavored granules
  studiedAmount: 3 g before bedtime
  timing: Within one hour of bedtime; 30 minutes in the sleep-restriction experiment
  scope: Experimental regimens, not an established insomnia-treatment dose
  sourceId: ref3
  sourceIds: [ref3, ref4]

- context: Metabolic syndrome
  formulation: Oral glycine supplement
  studiedAmount: 15 g/day
  duration: 3 months
  comparator: Placebo
  sourceId: ref10

- context: Type 2 diabetes
  studiedAmount: Unresolved from the inspected primary abstract
  uncertainty: The abstract combines a daily 5-g amount with three-times-daily wording. A reliable total daily dose cannot be assigned from that wording alone.
  sourceId: ref9

- context: Severe obesity
  formulation: Commercially purchased 1-g pure-glycine capsules
  studiedAmount: 100 mg/kg/day in four divided doses
  duration: 14 days
  design: Uncontrolled exploratory study
  sourceId: ref11

- context: Psychiatric research
  studiedAmount: Approximately 30–60 g/day, depending on the trial
  scope: Adjunctive, medically monitored research; not interchangeable with bedtime sleep experiments
  sourceId: ref18
  sourceIds: [ref17, ref18, ref19]

- context: Acute tolerability
  studiedAmount: 9 g
  scope: Acute exposure only; does not establish chronic tolerability at this amount
  sourceId: ref22
```

## Pharmacokinetics

```yaml
- parameter: Oral plasma time course
  population: Nine healthy adults
  exposure: 1 mmol/kg lean body mass; mean administered amount 4.6 g
  observation: Mean plasma glycine rose from 217 to 909 micromol/L at 40 minutes and remained above baseline at 120 minutes.
  qualification: This is a measured concentration curve, not an established elimination half-life.
  sourceId: ref8

- parameter: Food-context modification
  observation: Co-ingested glucose attenuated and modestly prolonged the plasma glycine response compared with glycine alone.
  qualification: Findings from a glucose challenge do not characterize every mixed meal or formulation.
  sourceId: ref8

- parameter: Central exposure
  route: Intravenous
  studiedAmount: 100 or 200 mg/kg
  observation: Serum and cerebrospinal-fluid glycine increased dose-dependently in healthy participants, without clear behavioral or cognitive effects.
  qualification: Intravenous exposure does not establish oral bioavailability or oral brain exposure at a 3-g bedtime dose.
  sourceId: ref7

- parameter: Elimination half-life and absolute oral bioavailability
  value: null
  qualification: No validated supplement-specific estimate was established from the retrieved primary human evidence; neither complete absorption nor a fixed duration of action is assumed.
  sourceId: ref8
  sourceIds: [ref7, ref8]
```

## Modifiers

```yaml
- modifier: Baseline sleep condition
  distinction: Subjective poor sleepers and healthy adults undergoing experimentally restricted sleep are different populations; findings do not automatically apply to diagnosed chronic insomnia.
  sourceId: ref3
  sourceIds: [ref3, ref4]

- modifier: Comparator and measurement method
  distinction: The dialysis study compared glycine with branched-chain amino acids, not an inert placebo. Its favorable body-composition signal depended on bioimpedance rather than a corresponding DXA lean-mass improvement.
  sourceId: ref12

- modifier: Pregnancy stage and background protein
  distinction: The late-pregnancy metabolic signal occurred under a controlled amino-acid diet providing 0.88 g protein/kg/day; midgestation results were null.
  sourceId: ref20

- modifier: Concomitant antipsychotic
  distinction: Clozapine augmentation studies cannot be pooled uncritically with studies using other antipsychotics.
  sourceId: ref19
```

## Effects

```yaml
- effect: Subjective sleep improvement
  evidence: Some short-term participants reported improved sleep satisfaction or easier sleep initiation.
  boundary: This is not equivalent to consistently increased deep-sleep duration.
  sourceId: ref3

- effect: Selective next-day performance changes
  evidence: Psychomotor-vigilance reaction time improved in a very small restricted-sleep experiment, while most other task outcomes did not.
  boundary: Broad cognitive enhancement was not demonstrated.
  sourceId: ref4

- effect: Gastrointestinal symptoms
  evidence: Digestive symptoms occurred in an acute 9-g tolerability study, although serious adverse events were not reported.
  sourceId: ref22
```

## Outcomes

```yaml
- outcome: Subjective sleep quality
  study: Randomized double-blind crossover study of volunteers dissatisfied with sleep
  intervention: 3 g oral glycine before bedtime versus placebo
  result: Improved selected morning assessments, including fatigue, liveliness and clear-headedness.
  limitation: Sample size and exposure duration were not verified from the accessible primary abstract; long-term insomnia outcomes were not established.
  sourceId: ref2

- outcome: Polysomnography and subjective sleep
  study: Randomized single-blind crossover; 11 adults with subjective poor sleep
  intervention: 3 g flavored glycine versus matched flavored placebo; two nights per condition, with the adaptation night excluded
  result: Shorter latency to stage-2 sleep and first slow-wave sleep; improved several subjective sleep measures.
  nullFindings: Sleep-stage proportions were unchanged. Overall Stanford sleepiness scores were not significantly different.
  limitation: Small, brief experiment; selected time-specific daytime findings do not establish sustained functional benefit.
  sourceId: ref3

- outcome: Performance during partial sleep restriction
  study: Randomized single-blind crossover; ten recruited male employees, seven analyzed
  intervention: 3 g nightly versus placebo during three nights with time in bed reduced by 25%
  result: Fatigue improved on day 1; vigilance reaction time improved on days 1 and 3.
  nullFindings: Day-1 sleepiness was not significant; day-3 subjective measures and most memory, addition and simple-reaction outcomes were null.
  sourceId: ref4

- outcome: Healthy-adult memory and attention
  study: Randomized double-blind crossover in students and middle-aged men
  intervention: Branded Bioglycin versus control
  result: Episodic-memory retrieval improved in both age groups; sustained attention improved in middle-aged men.
  nullFindings: Focused and divided attention and mood did not improve.
  limitation: Dose, duration and participant count were not verified from the accessible abstract; formulation-specific, test-specific evidence.
  sourceId: ref6

- outcome: Acute glucose handling
  study: Randomized four-condition crossover; nine healthy adults
  intervention: Glycine, 25 g glucose, their combination or water
  result: Adding glycine reduced the two-hour glucose area response by more than 50%.
  nullFindings: Insulin area response did not differ significantly between glucose-plus-glycine and glucose alone.
  limitation: Acute challenge biomarkers, not diabetes treatment or complication prevention.
  sourceId: ref8

- outcome: Type 2 diabetes biomarkers
  study: Placebo-controlled randomized trial; 74 participants; three months
  result: Lower HbA1c and TNF-receptor-I concentrations versus placebo; interferon-gamma increased.
  limitation: Dose wording is ambiguous in the abstract, absolute HbA1c effect size was not verified, and clinical complications were not demonstrated to improve.
  sourceId: ref9

- outcome: Metabolic syndrome
  study: Randomized double-blind comparison; 60 participants
  intervention: 15 g/day versus placebo for three months
  result: Lower lipid-peroxidation marker TBARS; systolic blood pressure decreased in the male subgroup.
  limitation: Subgroup and laboratory findings do not establish a general antihypertensive effect or cardiovascular-event reduction.
  sourceId: ref10

- outcome: Severe-obesity metabolic study
  study: Uncontrolled; 19 adults; 100 mg/kg/day for 14 days
  result: Plasma glycine, several urinary acylglycines and selected one-carbon metabolites increased; triglycerides and aminotransferases decreased.
  nullFindings: No significant improvement in weight, glucose regulation, insulin resistance, glutathione or the measured oxidative-stress marker.
  limitation: No placebo, liver imaging or biopsy; biomarker changes do not demonstrate reversal of liver disease.
  sourceId: ref11

- outcome: Schizophrenia, preliminary positive study
  study: Double-blind placebo-controlled crossover; 22 enrolled, 19 completed
  intervention: 0.8 g/kg/day adjunctive glycine during six-week treatment periods
  result: Negative-symptom ratings improved by approximately 30%.
  limitation: Small study; improvement in a cognitive symptom rating is not equivalent to improvement across an objective cognitive test battery.
  sourceId: ref16

- outcome: Schizophrenia, larger confirmatory comparison
  study: CONSIST; 157 participants across glycine, D-cycloserine and placebo groups; 16 weeks
  intervention: Adjunctive glycine targeting 60 g/day
  result: No significant advantage over placebo for primary negative-symptom or composite cognitive outcomes.
  limitation: Site heterogeneity was present; the overall result did not confirm general efficacy.
  sourceId: ref17

- outcome: Body composition during haemodialysis
  study: Post hoc analysis of a randomized double-blind crossover; 36 enrolled, 27 compliant completers
  intervention: Glycine 7 g twice daily versus equally dosed branched-chain amino acids; four months each
  result: Bioimpedance-derived fat-free-mass index favored glycine.
  nullFindings: DXA lean mass, physical function and quality of life did not show corresponding benefits.
  limitation: Active comparator and possible hydration effects; not proof of muscle gain or improved survival.
  sourceId: ref12

- outcome: Muscle preservation in critical illness
  study: Blinded randomized trial; 29 mechanically ventilated patients
  intervention: Enteral glycine 0.2 or 0.4 g/kg/day versus placebo for up to seven days
  result: Plasma and muscle glycine increased.
  nullFindings: Quadriceps-thickness difference was not significant; high dose versus placebo 0.11 cm, 95% CI -0.10 to 0.31. Myofiber diameter was unchanged.
  limitation: Shorter admissions were exploratory findings in a very small trial, not confirmed recovery benefits.
  sourceId: ref13

- outcome: Severe COVID-19
  study: Open-label randomized pilot; 56 mechanically ventilated patients
  intervention: Enteral glycine 0.5 g/kg/day plus usual care versus usual care
  result: No improvement in major clinical outcomes.
  details: Mortality was 63.6% versus 52.2%, p=0.60; ventilation outcomes were not improved. Fibrinogen decreased without broad cytokine improvement.
  limitation: Underpowered for definitive mortality benefit or harm.
  sourceId: ref14

- outcome: Acute ischaemic stroke
  study: Double-blind randomized trial; 200 patients treated within six hours
  intervention: Sublingual glycine 0.5, 1 or 2 g/day for five days versus placebo
  result: Selected neurological and functional scores favored the 1–2-g groups.
  limitation: Lower mortality was a trend, not a confirmed survival benefit; an older acute-treatment trial does not establish dietary stroke prevention.
  sourceId: ref15

- outcome: Cystic fibrosis
  study: Double-blind randomized crossover pilot; 13 completers aged 6–23 years
  intervention: Oral glycine 0.5 g/kg/day versus sugar placebo; eight-week periods
  result: Symptoms, spirometry and oxygenation favored glycine; FEV1 increased during glycine and declined during placebo.
  limitation: Very small disease-specific pilot with multiple outcomes; no established general pulmonary or exercise benefit.
  sourceId: ref24

- outcome: Dietary glycine and stroke
  study: Observational analysis of approximately 356000 European participants
  exposure: Estimated dietary glycine, including its proportion of total protein
  result: Highest versus lowest fifth of proportional glycine intake was associated with ischaemic stroke, HR 1.28, 95% CI 1.14–1.43.
  limitation: Model-dependent association, correlated food sources and residual confounding; neither proof of glycine toxicity nor evidence about isolated supplementation.
  sourceId: ref21

- outcome: Pregnancy amino-acid metabolism
  study: Seventeen women receiving randomly ordered acute dietary glycine test intakes
  exposure: 5–100 mg/kg/day within controlled amino-acid diets
  result: Late-gestation oxidation and 5-oxoproline responses suggested greater glycine demand; midgestation responses were not significant.
  limitation: Metabolic requirement experiment, not a trial of birth outcomes or chronic supplement safety.
  sourceId: ref20
```

## Mechanisms

```yaml
- mechanism: Neurotransmission
  description: Glycine acts at inhibitory glycine receptors and as a co-agonist at NMDA receptors.
  boundary: Receptor pharmacology does not establish that oral supplementation produces sedation or cognitive enhancement.
  sourceId: ref7

- mechanism: Heat dissipation
  evidenceLevel: Animal experiment
  description: In rats, glycine-induced cutaneous blood flow, reduced core temperature and sleep effects depended on NMDA signaling in the suprachiasmatic nucleus.
  boundary: Human heat tolerance, temperature-lowering efficacy and mediation of human sleep effects remain unestablished.
  sourceId: ref5

- mechanism: Biosynthetic substrate
  description: Glycine contributes to protein, glutathione and creatine synthesis.
  boundary: Being a required substrate does not demonstrate that extra intake increases tissue repair or improves clinical outcomes.
  sourceId: ref1

- mechanism: Glycine conjugation
  evidenceLevel: Uncontrolled human biomarker study
  description: Supplementation increased excretion of several acylglycines in severe obesity.
  boundary: Altered metabolite excretion is not proof of a clinically beneficial detoxification treatment.
  sourceId: ref11
```

## Cautions

```yaml
- concern: Upper-limit uncertainty
  description: The VKM assessment did not establish a human tolerable upper intake level. Its favorable assessment of specified 20–650-mg/day amounts cannot be extrapolated to multi-gram or psychiatric research doses.
  sourceId: ref1

- concern: Acute versus chronic safety
  description: Acute 9-g exposure produced digestive symptoms without serious reported events. This does not establish long-term safety.
  sourceId: ref22

- concern: Renal impairment
  description: A monitored dialysis trial does not establish general safety across kidney disease. Predialysis urea increased during amino-acid supplementation, and bioimpedance findings could reflect water rather than muscle.
  sourceId: ref12

- concern: Hepatic impairment and metabolic uncertainty
  description: The obesity study excluded significant renal or hepatic dysfunction. Lower aminotransferases do not establish safety in cirrhosis; a small homocysteine increase also occurred.
  sourceId: ref11

- concern: Pregnancy and lactation
  description: Acute pregnancy metabolism data do not establish chronic supplemental safety, fetal benefit or lactation safety.
  sourceId: ref20

- concern: Sedation in a different clinical setting
  description: Slight sedation was reported in nine participants in the acute-stroke trial.
  boundary: This cannot quantify sedation risk in healthy bedtime users.
  sourceId: ref15
```

## Claims

```yaml
- claim: Glycine reliably increases deep sleep.
  assessment: Overstated
  reason: Shorter latency to slow-wave sleep was reported, but sleep-stage proportions were unchanged.
  sourceId: ref3

- claim: Glycine is a general nootropic.
  assessment: Not established
  reason: One older branded-product study found selective memory effects but null results for several attention and mood measures.
  sourceId: ref6

- claim: Raising blood glycine proves improved metabolic health.
  assessment: Unsupported inference
  reason: Plasma glycine increased in severe obesity without improved insulin resistance, glucose handling or glutathione.
  sourceId: ref11

- claim: GlyNAC trials prove glycine alone reverses aging.
  assessment: Incorrect attribution
  reason: The randomized intervention combined glycine with N-acetylcysteine; biomarker and functional results neither isolate glycine nor establish lifespan extension.
  sourceId: ref23

- claim: Glycine's role in collagen proves supplemental benefits for skin, joints or wound healing.
  assessment: Unsupported inference
  reason: Biochemical participation in protein synthesis is not a clinical trial of isolated glycine supplementation.
  sourceId: ref1

- claim: Glycine improves human thermoregulation through the established sleep mechanism.
  assessment: Species extrapolation
  reason: The cited causal thermoregulation experiments were conducted in rats.
  sourceId: ref5
```

## Interactions

```yaml
- interaction: Clozapine, possible efficacy attenuation
  evidenceLevel: Small randomized trial
  finding: With 30 g/day glycine for 12 weeks, 19 participants showed no augmentation benefit; positive symptoms improved in the placebo group but not the glycine group.
  interpretation: A possible pharmacodynamic interaction was suggested, not established as a predictable toxic interaction.
  sourceId: ref18

- interaction: Clozapine, conflicting evidence on worsening
  evidenceLevel: Randomized trial
  finding: In 30 randomized adults receiving 60 g/day for eight weeks, glycine provided no symptom or cognitive benefit, but clinically significant worsening was not observed.
  interpretation: The evidence supports lack of demonstrated augmentation benefit more consistently than definite interference.
  sourceId: ref19

- interaction: Glucose-lowering medication
  evidenceLevel: Theoretical extrapolation from human metabolic effects
  finding: Glycine modified glucose responses during an acute glucose challenge.
  interpretation: This is not a dedicated drug-interaction study; the magnitude of any interaction or hypoglycaemia risk with medication remains unquantified.
  sourceId: ref8
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: ref1
  title: 'Risk assessment of "other substances" – glycine'
  authors: [Norwegian Scientific Committee for Food Safety]
  year: 2016
  url: https://vkm.no/download/18.645b840415d03a2fe8f25c8b/1502711280583/Risk%20assessment%20of%20%22other%20substances%22%20%E2%80%93%20glycine.pdf
  kind: regulatory-risk-assessment
  insight: Dietary background and limitations of supplemental safety evidence.
  limitation: Assessed specified amounts; not a human high-dose safety standard.
  funding: Commissioned by the Norwegian Food Safety Authority.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Institutional independence policies described; individual declarations not verified.
  conflictOfInterestStatus: not-fully-verified

- id: ref2
  title: Subjective effects of glycine ingestion before bedtime on sleep quality
  authors: [Kentaro Inagawa, Takenori Hiraoka, Tohru Kohda, Wataru Yamadera, Michio Takahashi]
  year: 2006
  url: https://doi.org/10.1111/j.1479-8425.2006.00193.x
  kind: randomized-crossover-trial
  insight: Preliminary subjective sleep findings.
  limitation: Primary abstract available; complete methods and disclosures not verified.
  funding: Separate funding statement not verified.
  sponsorshipStatus: industry-linked
  conflictsOfInterest: Four authors affiliated with Ajinomoto; formal declaration unavailable.
  conflictOfInterestStatus: relationships-identified

- id: ref3
  title: Glycine ingestion improves subjective sleep quality in human volunteers, correlating with polysomnographic changes
  authors: [Wataru Yamadera, Kentaro Inagawa, Shintaro Chiba, Makoto Bannai, Michio Takahashi, Kazuhiko Nakayama]
  year: 2007
  url: https://doi.org/10.1111/j.1479-8425.2007.00262.x
  kind: randomized-crossover-trial
  insight: Sleep-stage latency signals without changed sleep architecture.
  limitation: Eleven participants and short exposure.
  funding: Separate funding statement not located.
  sponsorshipStatus: industry-linked
  conflictsOfInterest: Three authors affiliated with Ajinomoto; company ethics review.
  conflictOfInterestStatus: relationships-identified

- id: ref4
  title: The Effects of Glycine on Subjective Daytime Performance in Partially Sleep-Restricted Healthy Volunteers
  authors: [Makoto Bannai, Nobuhiro Kawai, Kaori Ono, K. Nakahara, N. Murakami]
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22529837/
  kind: randomized-crossover-trial
  insight: Selective vigilance and fatigue findings, with important null outcomes.
  limitation: Seven analyzed male employees; single-blind design.
  funding: Separate funding amount or grant not identified.
  sponsorshipStatus: industry-linked
  conflictsOfInterest: Authors declared no relevant commercial relationships, despite Ajinomoto affiliations and employee recruitment.
  conflictOfInterestStatus: declared-none-with-identified-affiliations

- id: ref5
  title: The sleep-promoting and hypothermic effects of glycine are mediated by NMDA receptors in the suprachiasmatic nucleus.
  authors: [Nobuhiro Kawai, Noriaki Sakai, Masashi Okuro, Sachie Karakawa, Yosuke Tsuneyoshi, Noriko Kawasaki, Tomoko Takeda, Makoto Bannai, Seiji Nishino]
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25533534/
  kind: animal-mechanistic-study
  insight: Causal rat experiments linking glycine, heat loss and hypothalamic NMDA signaling.
  limitation: Not a human thermoregulation trial.
  funding: Ajinomoto support identified for Sakai, Okuro and Nishino.
  sponsorshipStatus: industry
  conflictsOfInterest: Other authors included Ajinomoto-affiliated researchers.
  conflictOfInterestStatus: relationships-identified

- id: ref6
  title: Beneficial effects of glycine (bioglycin) on memory and attention in young and middle-aged adults.
  authors: [S. E. File, E. Fluck, C. Fernandes]
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10587285/
  kind: randomized-crossover-trial
  insight: Selective episodic-memory and age-dependent attention findings.
  limitation: Dose and complete methods not verified from the abstract.
  funding: Funder not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Konapharma preparation named; financial relationships not established.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref7
  title: IV glycine and oral D-cycloserine effects on plasma and CSF amino acids in healthy humans.
  authors: [D. C. D'Souza, R. Gil, K. Cassello, K. Morrissey, D. Abi-Saab, J. White, et al.]
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10704956/
  kind: randomized-human-experiment
  insight: Increased cerebrospinal-fluid glycine without clear cognitive benefit.
  limitation: Intravenous exposure and limited cognitive sensitivity.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref8
  title: The metabolic response to ingested glycine.
  authors: [Mary C. Gannon, Jennifer A. Nuttall, Frank Q. Nuttall]
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12450897/
  kind: randomized-crossover-trial
  insight: Oral plasma kinetics and acute glucose-challenge effects.
  limitation: Nine healthy adults; two-hour surrogate outcomes.
  funding: Minnesota Medical Foundation, Minnesota Obesity Center and Veterans Affairs Medical Research Service; glycine donated by Ajinomoto.
  sponsorshipStatus: mixed-with-industry-in-kind-support
  conflictsOfInterest: Product donation disclosed; separate personal declaration not located.
  conflictOfInterestStatus: relationships-identified

- id: ref9
  title: Glycine treatment decreases proinflammatory cytokines and increases interferon-gamma in patients with type 2 diabetes.
  authors: [M. Cruz, C. Maldonado-Bernal, R. Mondragón-Gonzalez, R. Sanchez-Barrera, N. H. Wacher, G. Carvajal-Sandoval, J. Kumate]
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18852529/
  kind: randomized-controlled-trial
  insight: HbA1c and inflammatory-marker signals.
  limitation: Abstract dose ambiguity; no demonstrated complication reduction.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref10
  title: Oral supplementation with glycine reduces oxidative stress in patients with metabolic syndrome, improving their systolic blood pressure.
  authors: [Margarita Díaz-Flores, Miguel Cruz, Genoveva Duran-Reyes, Catarina Munguia-Miranda, et al.]
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24144057/
  kind: randomized-controlled-trial
  insight: Oxidative-marker findings and male-subgroup blood-pressure signal.
  limitation: Biomarkers and subgroup findings, not cardiovascular events.
  funding: Specific support not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref11
  title: Metabolic impact of dietary glycine supplementation in individuals with severe obesity
  authors: [Hong Chang Tan, Jean W. Hsu, E. Shyong Tai, Shaji Chacko, Vieon Wu, Paul M. Yen, Jean-Paul Kovalik, Farook Jahoor]
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/41107432/
  kind: uncontrolled-clinical-study
  insight: Glycine and metabolite increases alongside several metabolic null findings.
  limitation: Nineteen participants, two weeks, no comparator.
  funding: Duke-NUS Khoo Mentored Research Grant KMRA2020/0013; supplements purchased commercially.
  sponsorshipStatus: noncommercial
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: declared-none

- id: ref12
  title: 'Glycine increases fat-free mass in malnourished haemodialysis patients: a randomized double-blind crossover trial.'
  authors: [Laurence Genton, Daniel Teta, Menno Pruijm, Catherine Stoermann, Nicola Marangon, et al.]
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/34519439/
  kind: randomized-trial-post-hoc-analysis
  insight: Bioimpedance signal without corresponding DXA or functional benefit.
  limitation: Active comparator, attrition and hydration uncertainty.
  funding: Swiss National Science Foundation, Alfred and Alice Lachmann Foundation, Fresenius Kabi Deutschland.
  sponsorshipStatus: mixed
  conflictsOfInterest: Author grants and fees from nutrition/medical companies; Cani disclosed biotechnology cofounding and patents.
  conflictOfInterestStatus: relationships-disclosed

- id: ref13
  title: 'The effect of enteral glycine on plasma glycine and muscle structure, size, and function in the critically ill: A randomized controlled trial.'
  authors: [Yasmine Ali Abdelhamid, Amy J. Bongetti, Marissa K. Caldow, Amalia Karahalios, et al.]
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/41109034/
  kind: randomized-controlled-trial
  insight: Increased glycine availability without confirmed muscle preservation.
  limitation: Twenty-nine participants; exploratory secondary clinical outcomes.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Full disclosure not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref14
  title: 'Glycine by enteral route does not improve major clinical outcomes in severe COVID-19: a randomized clinical pilot trial.'
  authors: [Mario H. Vargas, Jaime Chávez, Rosangela Del-Razo-Rodríguez, Carolina Muñoz-Perea, et al.]
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38773199/
  kind: randomized-controlled-trial
  insight: Major clinical outcomes were null despite lower fibrinogen.
  limitation: Open-label pilot with limited statistical power.
  funding: Funding declaration not verified.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not verified.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref15
  title: Neuroprotective effects of glycine for therapy of acute ischaemic stroke.
  authors: [E. I. Gusev, V. I. Skvortsova, S. A. Dambinova, K. S. Raevskiy, et al.]
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10629347/
  kind: randomized-controlled-trial
  insight: Selected acute-stroke scale improvements with sublingual glycine.
  limitation: Mortality finding was a trend; no dietary-prevention inference.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref16
  title: Efficacy of High-Dose Glycine in the Treatment of Enduring Negative Symptoms of Schizophrenia
  authors: [Uriel Heresco-Levy, Daniel C. Javitt, Marina Ermilov, Clara Mordel, Gail Silipo, Michael Lichtenstein]
  year: 1999
  url: https://doi.org/10.1001/archpsyc.56.1.29
  kind: randomized-crossover-trial
  insight: Small positive negative-symptom trial.
  limitation: Nineteen completers; limited generalizability.
  funding: Hebrew University–Milton Rosenbaum Endowment, Harry Stern/ENOSH Research Fund, NARSAD and NIMH MH56343.
  sponsorshipStatus: explicitly-no-commercial-sponsorship
  conflictsOfInterest: Separate personal declaration not located.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref17
  title: 'The Cognitive and Negative Symptoms in Schizophrenia Trial (CONSIST): the efficacy of glutamatergic agents for negative symptoms and cognitive impairments.'
  authors: [Robert W. Buchanan, Daniel C. Javitt, Stephen R. Marder, Nina R. Schooler, James M. Gold, Robert P. McMahon, Uriel Heresco-Levy, William T. Carpenter]
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17898352/
  kind: multicenter-randomized-controlled-trial
  insight: No overall negative-symptom or cognitive benefit.
  limitation: Site heterogeneity.
  funding: NIH and other US-government support indexed; complete funding details not verified.
  sponsorshipStatus: public-support-identified
  conflictsOfInterest: Full author disclosures not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref18
  title: Effect of clozapine and adjunctive high-dose glycine in treatment-resistant schizophrenia.
  authors: [S. G. Potkin, Y. Jin, B. G. Bunney, J. Costa, B. Gulasekaram]
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/9892314/
  kind: randomized-controlled-trial
  insight: No augmentation benefit; possible attenuation of clozapine response.
  limitation: Nineteen participants.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref19
  title: Placebo-controlled trial of glycine added to clozapine in schizophrenia.
  authors: [A. E. Evins, S. M. Fitzgerald, L. Wine, R. Rosselli, D. C. Goff]
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10784481/
  kind: randomized-controlled-trial
  insight: Null augmentation result without clinically significant worsening.
  limitation: Thirty randomized participants and eight weeks.
  funding: Not identified in inspected abstract.
  sponsorshipStatus: unclear
  conflictsOfInterest: Declaration not retrieved.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref20
  title: Glycine, a Dispensable Amino Acid, Is Conditionally Indispensable in Late Stages of Human Pregnancy.
  authors: [Betina F. Rasmussen, Madeleine A. Ennis, Roger A. Dyer, Kenneth Lim, Rajavel Elango]
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/32939556/
  kind: randomized-intake-metabolic-experiment
  insight: Late-gestation metabolic response under controlled protein intake.
  limitation: Not a pregnancy-outcome or chronic safety trial.
  funding: Canadian Institutes of Health Research FRN-134069.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Authors reported no conflicts.
  conflictOfInterestStatus: declared-none

- id: ref21
  title: 'Dietary amino acids and risk of stroke subtypes: a prospective analysis of 356,000 participants in seven European countries'
  authors: [Tammy Y. N. Tong, Robert Clarke, Julie A. Schmidt, et al.]
  year: 2024
  url: https://doi.org/10.1007/s00394-023-03251-4
  kind: prospective-cohort
  insight: Dietary glycine associations differ from simple favorable circulating-biomarker narratives.
  limitation: Observational, model-dependent and food-source-confounded.
  funding: MRC, Cancer Research UK, Wellcome, European and national public/charitable cohort funding.
  sponsorshipStatus: public-and-charitable
  conflictsOfInterest: Authors declared no conflicts.
  conflictOfInterestStatus: declared-none

- id: ref22
  title: Assessment of Acute Adverse Events of Glycine Ingestion at a High Dose in Human Volunteers
  authors: [Kentaro Inagawa, Nobuhiro Kawai, Kaori Ono, Eiji Sukegawa, Shoji Tsubuku, Michio Takahashi]
  year: 2006
  url: https://doi.org/10.11468/seikatsueisei.50.27
  kind: acute-human-tolerability-study
  insight: Digestive symptoms without serious reported events after 9 g.
  limitation: Acute exposure; chronic safety unresolved.
  funding: Separate funding statement not verified.
  sponsorshipStatus: industry-linked
  conflictsOfInterest: All listed authors affiliated with Ajinomoto; formal declaration unavailable.
  conflictOfInterestStatus: relationships-identified

- id: ref23
  title: 'Supplementing Glycine and N-Acetylcysteine (GlyNAC) in Older Adults Improves Glutathione Deficiency, Oxidative Stress, Mitochondrial Dysfunction, Inflammation, Physical Function, and Aging Hallmarks: A Randomized Clinical Trial.'
  authors: [Premranjan Kumar, Chun Liu, James Suliburk, Jean W. Hsu, Raja Muthupillai, Farook Jahoor, Charles G. Minard, George E. Taffet, Rajagopal V. Sekhar]
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/35975308/
  kind: combination-randomized-controlled-trial
  insight: Combination-treatment evidence, not isolated glycine efficacy.
  limitation: Twenty-four randomized older adults; no lifespan endpoint.
  funding: NIH/NIA R01AG041782 and philanthropic support.
  sponsorshipStatus: public-and-philanthropic
  conflictsOfInterest: Complete formal declaration not verified.
  conflictOfInterestStatus: not-reported-in-accessible-material

- id: ref24
  title: 'Effect of oral glycine on the clinical, spirometric and inflammatory status in subjects with cystic fibrosis: a pilot randomized trial.'
  authors: [Mario H. Vargas, Rosangela Del-Razo-Rodríguez, Amando López-García, José Luis Lezana-Fernández, Jaime Chávez, María E. Y. Furuya, Juan Carlos Marín-Santana]
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29246256/
  kind: randomized-crossover-pilot
  insight: Preliminary disease-specific symptom and lung-function findings.
  limitation: Thirteen completers and multiple outcomes.
  funding: Authors reported no extra-institutional funding.
  sponsorshipStatus: institutional
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: declared-none

- id: ref25
  title: 21 CFR § 170.50 — Glycine (aminoacetic acid) in food for human consumption.
  authors: [US Food and Drug Administration, Electronic Code of Federal Regulations]
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-170/subpart-C/section-170.50
  kind: regulation
  insight: Historical blanket GRAS opinions were rescinded.
  limitation: Current codification; conventional-food regulation is not equivalent to supplement classification.
  funding: Public regulatory work.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Not a clinical-study disclosure.
  conflictOfInterestStatus: not-applicable

- id: ref26
  title: 21 CFR § 172.812 — Glycine.
  authors: [US Food and Drug Administration, Electronic Code of Federal Regulations]
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-172/subpart-I/section-172.812
  kind: regulation
  insight: Specified technological food uses and concentration limits.
  limitation: Not approval of therapeutic benefits or unrestricted supplemental amounts.
  funding: Public regulatory work.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Not a clinical-study disclosure.
  conflictOfInterestStatus: not-applicable

- id: ref27
  title: Questions and Answers on Dietary Supplements
  authors: [US Food and Drug Administration]
  year: 2026
  url: https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
  kind: regulatory-guidance
  insight: Supplements are not premarket-approved for safety and effectiveness.
  limitation: General US framework, not a product-specific authorization.
  funding: Public regulatory work.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Not a clinical-study disclosure.
  conflictOfInterestStatus: not-applicable

- id: ref28
  title: Commission Regulation (EU) No 231/2012 of 9 March 2012 laying down specifications for food additives listed in Annexes II and III to Regulation (EC) No 1333/2008 of the European Parliament and of the Council
  authors: [European Commission]
  year: 2012
  url: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02012R0231-20260818
  kind: regulation
  insight: E640 specifications cover glycine and its sodium salt.
  limitation: Consolidated 18 August 2026; specifications do not establish therapeutic efficacy or all national supplement rules.
  funding: Public regulatory work.
  sponsorshipStatus: public-sector
  conflictsOfInterest: Not a clinical-study disclosure.
  conflictOfInterestStatus: not-applicable
```

## Legal

```yaml
- jurisdiction: United States
  category: Conventional food
  status: Section 170.50 rescinded earlier blanket GRAS opinions for glycine; unrestricted GRAS status should not be assumed.
  sourceId: ref25

- jurisdiction: United States
  category: Specified food-additive uses
  status: Section 172.812 permits specified uses, including saccharin-aftertaste masking in beverages at up to 0.2% and stabilization of mono- and diglycerides at up to 0.02%.
  boundary: These permissions are not therapeutic approvals.
  sourceId: ref26

- jurisdiction: United States
  category: Dietary supplements
  status: FDA does not approve supplements for safety and effectiveness before marketing. Manufacturers remain responsible for lawful products and claims.
  boundary: Disease-treatment or prevention representations can cause a product to be regulated as a drug.
  sourceId: ref27

- jurisdiction: European Union
  category: Food-additive specifications
  status: Glycine and its sodium salt are identified as E640 in the specifications regulation.
  boundary: An additive specification is not proof of unrestricted use, a universally authorized supplement dose or clinical efficacy.
  sourceId: ref28
```