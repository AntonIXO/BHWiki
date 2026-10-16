---
slug: psilocybin
name: Psilocybin
subtitle: A fungal psychedelic prodrug with protocol-specific clinical evidence.
aliases:
  - O-phosphoryl-4-hydroxy-N,N-dimethyltryptamine
  - 4-phosphoryloxy-N,N-dimethyltryptamine
formula: C12H17N2O4P
molecularWeight: 284.25 g/mol
pubchemCid: 10624
smiles: CN(C)CCC1=CNC2=C1C(=CC=C2)OP(=O)(O)O
category: Psychedelic
tags:
  - psychedelic
  - serotonin-2a
  - serotonin
  - perception
  - us-schedule-i
  - depression-severity
  - psychological-support
accent: "#c1a6c5"
reviewedAt: "2026-10-16"
editorialStatus: sourced-draft
halfLife:
  label: "Psilocin: about 1.4–1.8 hours in a fixed-dose model"
  low: 1.4
  high: 1.8
  context: Model-based elimination estimates for unconjugated psilocin after 15–30 mg oral psilocybin in healthy participants; terminal estimates and subjective duration are longer and method-dependent.
  sourceId: holze2023
  observationId: psilocin-model-half-life
kinetics:
  onset: No single general onset estimate curated here
  peak: Mean psilocin maximum concentration occurred at about 2 hours after 15–30 mg oral psilocybin
  duration: Mean subjective effects lasted about 5.5–6.4 hours after 15–30 mg in healthy participants
  bioavailability: No absolute oral bioavailability estimate curated here
  metabolism: Psilocybin is converted to psychoactive psilocin; measured clinical PK primarily describes psilocin
  sourceId: holze2023
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
x-order: 5
---

## Summary

Psilocybin is a naturally occurring fungal tryptamine converted after ingestion to psychoactive psilocin. Most efficacy trials use measured oral doses of isolated psilocybin with structured psychological support; evidence from whole-mushroom formulations is much less developed. Depression trials include positive and null primary findings, while PTSD, anxiety and addiction evidence remains indication- and protocol-specific.

## Description

Psilocybin is PubChem CID 10624, C12H17N2O4P, molecular weight 284.25 g/mol. Human research usually administers synthetic or otherwise standardized psilocybin orally. A separate Phase 1 PTSD study registered dried psilocybin-containing mushrooms in chocolate, illustrating that mushroom-derived products are distinct formulations and should not be assumed equivalent to isolated psilocybin by mushroom weight or preparation.

## Evidence note

Randomized depression evidence is mixed: some trials show substantial symptom reductions, while escitalopram comparison and the 2026 EPISODE trial preserved important null primary findings. PTSD evidence is currently open-label, and the registered whole-mushroom PTSD study has no posted results. Psychoactive effects complicate masking, and most clinical studies combine drug administration with substantial support.

## Doses

```yaml
- label: Fixed-dose pharmacokinetic study
  amount: 15, 25, or 30 mg
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Psilocybin
  formulation: Standardized oral psilocybin
  route: Oral
  frequency: Single administration per study session
  duration: Acute PK and subjective-effect observation
  population: Healthy adults
  purpose: Pharmacokinetic and pharmacodynamic characterization
  sourceCategory: research
  note: Research exposures, not personal-use dosing guidance.
  sourceId: holze2023
- label: Major depressive disorder trial
  amount: 20 mg/70 kg followed by 30 mg/70 kg
  quantity: null
  quantityMax: null
  unit: mg/70 kg
  ingredient: Psilocybin
  formulation: Opaque oral capsules
  route: Oral
  frequency: Two supported administration sessions
  duration: Primary follow-up through 4 weeks after treatment
  population: Adults with major depressive disorder
  purpose: Randomized immediate-versus-delayed treatment trial
  sourceCategory: research
  note: Both administrations occurred within a psychotherapy-supported protocol.
  sourceId: davis2021
- label: Cancer-related anxiety and depression trial
  amount: 22 or 30 mg/70 kg versus 1 or 3 mg/70 kg
  quantity: null
  quantityMax: null
  unit: mg/70 kg
  ingredient: Psilocybin
  formulation: Standardized oral psilocybin
  route: Oral
  frequency: Two crossover sessions 5 weeks apart
  duration: Follow-up through 6 months
  population: Patients with life-threatening cancer and depression and/or anxiety symptoms
  purpose: Randomized double-blind crossover research
  sourceCategory: research
  note: Evidence pertains to cancer-related psychological distress, not anxiety disorders generally.
  sourceId: griffiths2016
- label: PTSD open-label trial
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Psilocybin
  formulation: COMP360 synthetic psilocybin
  route: Oral
  frequency: Single administration
  duration: Follow-up through 12 weeks
  population: 22 adults with PTSD
  purpose: Phase 2 safety and tolerability research
  sourceCategory: research
  note: Efficacy measures were secondary and uncontrolled.
  sourceId: mcgowan2026
- label: Alcohol use disorder trial
  amount: 25 mg/70 kg, then 25–40 mg/70 kg
  quantity: null
  quantityMax: null
  unit: mg/70 kg
  ingredient: Psilocybin
  formulation: Standardized oral psilocybin
  route: Oral
  frequency: Two administration sessions at weeks 4 and 8
  duration: 32-week double-blind outcome period after first administration
  population: Adults with alcohol use disorder
  purpose: Randomized active-placebo trial with psychotherapy
  sourceCategory: research
  note: Both groups received manualized psychotherapy.
  sourceId: bogenschutz2022
- label: Whole-mushroom PTSD study
  amount: 30 mg psilocybin
  quantity: 30
  quantityMax: null
  unit: mg psilocybin
  ingredient: Psilocybin-containing mushrooms
  formulation: Dried organic whole mushrooms in chocolate
  route: Oral
  frequency: Single administration session
  duration: Follow-up through 3 months
  population: Adults with PTSD
  purpose: Phase 1 safety, PK and preliminary-efficacy study
  sourceCategory: research
  note: Registry reports no posted results; the formulation should not be treated as interchangeable with synthetic psilocybin.
  sourceId: passage2026
```

## Pharmacokinetics

```yaml
- id: psilocin-model-half-life
  analyte: Unconjugated psilocin
  route: Oral administration of psilocybin
  formulation: Fixed-dose standardized psilocybin
  population: Healthy participants receiving 15, 25, or 30 mg
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.4
  high: 1.8
  unit: hours
  context: Model-based mean half-lives were 1.8, 1.4, and 1.8 hours after 15, 25, and 30 mg, respectively. Mean Cmax occurred at about 2 hours.
  sourceId: holze2023
  modelEligible: true
- id: psilocin-terminal-half-life
  analyte: Unconjugated psilocin
  route: Oral administration of psilocybin
  formulation: Fixed-dose standardized psilocybin
  population: Healthy participants receiving 15, 25, or 30 mg
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.8
  high: 2.7
  unit: hours
  context: Noncompartmental terminal estimates were longer than the model-based values. Subjective effects lasted approximately 5.5–6.4 hours and should not be inferred directly from plasma half-life.
  sourceId: holze2023
  modelEligible: false
```

## Modifiers

```yaml
- label: Body weight
  effect: No relevant association detected in the fixed-dose study
  detail: Body weight did not materially influence psilocin pharmacokinetics or acute response across the healthy-participant datasets analyzed; this does not establish equivalence in all populations.
  sourceId: holze2023
  observationId: psilocin-model-half-life
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: psilocybin-acute-psychedelic-effects
  conceptId: perception
  name: Acute psychedelic experience
  direction: Increased
  evidence: Human research
  description: Acute subjective intensity increased with fixed oral dose. Mean maximum any-drug ratings were 58%, 73%, and 80% after 15, 25, and 30 mg, with mean subjective durations of 5.6, 5.5, and 6.4 hours.
  sourceId: holze2023
  population: Healthy adults
  exposure: 15–30 mg oral psilocybin
  instrument: Repeated subjective drug-effect ratings
  magnitude: Dose-related
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-receptor-linked-intensity
  conceptId: perception
  name: Psychedelic intensity
  direction: Increased
  evidence: Human research
  description: In eight healthy volunteers, subjective psychedelic intensity covaried with plasma psilocin and cerebral 5-HT2A receptor occupancy after 3–30 mg oral psilocybin.
  sourceId: madsen2019
  population: Eight healthy volunteers
  exposure: 3–30 mg oral psilocybin
  instrument: Subjective ratings and PET imaging
  magnitude: Receptor occupancy reached up to 72%
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: psilocybin-mdd-davis
  conceptId: depression-severity
  name: Major depressive disorder symptoms
  direction: Decreased
  evidence: Human research
  description: In a small randomized waiting-list trial, immediate psilocybin-assisted therapy produced markedly lower GRID-HAMD scores than delayed treatment; 71% met response criteria at weeks 1 and 4 after treatment.
  sourceId: davis2021
  population: 27 randomized adults with MDD; 24 completed the intervention and primary follow-up
  exposure: 20 mg/70 kg then 30 mg/70 kg with psychological support
  instrument: GRID-HAMD
  magnitude: Cohen d 2.5 and 2.6 at the two randomized comparison points
  reportType: measured-assessment
  conflictingSourceIds:
    - carhartharris2021
    - mertens2026
- id: psilocybin-mdd-escitalopram
  conceptId: depression-severity
  name: Depression versus escitalopram
  direction: Variable
  evidence: Human research
  description: The prespecified QIDS-SR-16 primary outcome did not significantly differ between two 25 mg psilocybin sessions and six weeks of escitalopram; several secondary outcomes favored psilocybin but were not corrected for multiplicity.
  sourceId: carhartharris2021
  population: 59 adults with moderate-to-severe MDD
  exposure: Two 25 mg psilocybin sessions versus daily escitalopram, with support in both arms
  instrument: QIDS-SR-16
  magnitude: Between-group primary-outcome difference 2.0 points; 95% CI -5.0 to 0.9; P = 0.17
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-trd-episode
  conceptId: depression-severity
  name: Treatment-resistant depression response
  direction: Variable
  evidence: Human research
  description: EPISODE did not meet its prespecified HAMD17 response primary endpoint at week 6. Continuous secondary depression measures favored 25 mg, but formal hierarchical testing stopped after the primary comparison failed.
  sourceId: mertens2026
  population: 144 randomized adults with treatment-resistant major depression
  exposure: 25 mg or 5 mg psilocybin or 100 mg nicotinamide with adjunct psychotherapy
  instrument: HAMD17
  magnitude: Response 17.0% versus 10.6% for 25 mg versus nicotinamide; adjusted OR 1.73, 95% CI 0.53–6.23; P = 0.19
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-cancer-distress
  conceptId: cancer-related-distress
  name: Cancer-related depression and anxiety
  direction: Decreased
  evidence: Human research
  description: High-dose psilocybin outperformed a very-low-dose condition on depression and anxiety measures in a randomized crossover study, with approximately 80% continuing to show clinically significant decreases at six months.
  sourceId: griffiths2016
  population: 51 patients with life-threatening cancer and depression and/or anxiety symptoms
  exposure: 22 or 30 mg/70 kg versus 1 or 3 mg/70 kg
  instrument: Clinician- and self-rated depression and anxiety measures
  magnitude: Large acute and sustained group differences
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-ptsd-open-label
  conceptId: ptsd-severity
  name: PTSD symptom severity
  direction: Decreased
  evidence: Limited research
  description: In an uncontrolled 22-person trial, mean CAPS-5 scores decreased by 29.9 points at week 4 and 29.5 points at week 12 after one 25 mg dose. The study was designed primarily for safety and cannot establish efficacy.
  sourceId: mcgowan2026
  population: 22 adults with PTSD
  exposure: Single 25 mg COMP360 administration with psychological support
  instrument: CAPS-5
  magnitude: Uncontrolled mean change about -30 points
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-aud-heavy-drinking
  conceptId: heavy-drinking-days
  name: Heavy drinking days
  direction: Decreased
  evidence: Human research
  description: During the 32-week double-blind period, heavy drinking days were 9.7% with psilocybin plus psychotherapy and 23.6% with diphenhydramine plus psychotherapy.
  sourceId: bogenschutz2022
  population: 95 randomized adults with alcohol use disorder; 93 received study medication
  exposure: Two psilocybin administrations plus psychotherapy versus active placebo plus psychotherapy
  instrument: Timeline followback interview
  magnitude: Mean difference 13.9 percentage points; 95% CI 3.0–24.7; P = 0.01
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-smoking
  conceptId: smoking-abstinence
  name: Prolonged smoking abstinence
  direction: Increased
  evidence: Human research
  description: In an unblinded pilot randomized trial, biochemically verified prolonged abstinence at six months was 40.5% with one psilocybin session plus CBT versus 10.0% with nicotine patch plus CBT.
  sourceId: johnson2026
  population: 82 psychiatrically healthy adult cigarette smokers
  exposure: 30 mg/70 kg psilocybin plus CBT versus nicotine patch plus CBT
  instrument: Self-report with carbon monoxide and cotinine verification
  magnitude: OR 6.12; 95% CI 1.99–23.26; P = 0.003
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Conversion to psilocin
  description: Clinical PK studies measure unconjugated psilocin as the psychoactive metabolite formed after oral psilocybin; psilocin exposure is dose-proportional across the studied fixed doses.
  sourceId: holze2023
  conceptId: serotonin
- title: Serotonin 5-HT2A receptor engagement
  description: Human PET data showed dose-related cerebral 5-HT2A occupancy and close associations among receptor occupancy, plasma psilocin and acute subjective intensity. This supports an acute mechanism but does not establish the mechanism of persistent clinical outcomes.
  sourceId: madsen2019
  conceptId: serotonin-2a
```

## Cautions

```yaml
- title: Acute adverse effects
  description: In the 22-person PTSD study, common treatment-emergent events included headache, nausea, crying and fatigue; most administration-day events resolved by the end of the next day. Acute anxiety and distress can also occur during supervised psychedelic sessions.
  sourceId: mcgowan2026
- title: Serious and persistent events remain possible
  description: EPISODE reported two serious adverse reactions after 25 mg, including one case of hallucinogen persisting perception disorder, while the prespecified efficacy primary endpoint was negative.
  sourceId: mertens2026
- title: Psychosis risk is poorly quantified in vulnerable populations
  description: Modern trials commonly exclude psychotic disorders. A published case described psychosis with catatonic features and suicidality after months of heavy psilocybin use in a person with several predisposing factors; a case report cannot estimate incidence or prove population-level causation.
  sourceId: morris2024
- title: Suicidality requires separate monitoring
  description: EPISODE observed dosing-day suicidal ideation in 4% after 25 mg versus 1%–2% in comparator conditions; the PTSD trial also recorded suicidal-ideation events. These observations do not by themselves establish causality.
  sourceId: mertens2026
- title: Trial exclusions are not an approved contraindication list
  description: Psilocybin remains in investigational drug development. The whole-mushroom PTSD protocol excludes conditions including uncontrolled hypertension, recent seizure, stroke or TIA, valvulopathy or pulmonary hypertension, marked QT prolongation and significant suicide risk.
  sourceId: passage2026
- title: Pregnancy and lactation
  description: The whole-mushroom PTSD protocol excludes pregnancy and nursing and requires pregnancy testing and contraception for participants of childbearing potential. This is a research precaution, not evidence establishing reproductive toxicity or safety.
  sourceId: passage2026
```

## Claims

```yaml
- id: psilocybin-depression-efficacy-boundary
  assertion: Psilocybin-assisted protocols have antidepressant activity, but the clinical evidence is not uniformly positive across prespecified primary outcomes or comparators.
  relation: evidence-boundary
  participants:
    - entityId: substance:psilocybin
      role: intervention
    - entityId: tag:depression-severity
      role: measured-outcome
    - entityId: tag:psychological-support
      role: co-intervention
  context: Randomized MDD and TRD trials using standardized psilocybin with psychological support
  sourceIds:
    - davis2021
    - carhartharris2021
    - mertens2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small studies, heterogeneous comparators, functional unblinding, support protocols and a negative 2026 TRD primary endpoint limit broad efficacy claims.
- id: psilocybin-ptsd-efficacy-boundary
  assertion: Psilocybin is being studied for PTSD, but controlled efficacy has not been established by the published PTSD evidence curated here.
  relation: evidence-boundary
  participants:
    - entityId: substance:psilocybin
      role: intervention
    - entityId: tag:ptsd-severity
      role: measured-outcome
  context: Published 22-person open-label COMP360 study and registered whole-mushroom studies
  sourceIds:
    - mcgowan2026
    - passage2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The published study was uncontrolled and primarily assessed safety; the whole-mushroom registry has no posted outcome results.
- id: psilocybin-anxiety-boundary
  assertion: A positive trial in life-threatening cancer does not establish psilocybin efficacy for anxiety disorders generally.
  relation: evidence-boundary
  participants:
    - entityId: substance:psilocybin
      role: intervention
    - entityId: tag:cancer-related-distress
      role: measured-outcome
  context: Cancer-related depression, anxiety and existential distress
  sourceIds:
    - griffiths2016
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The population, crossover design and supportive setting are specific and should not be generalized to primary anxiety disorders.
- id: psilocybin-addiction-boundary
  assertion: Randomized alcohol and smoking studies report favorable substance-use outcomes when psilocybin is embedded in behavioral treatment, but they do not isolate a drug-only effect.
  relation: evidence-boundary
  participants:
    - entityId: substance:psilocybin
      role: intervention
    - entityId: tag:psychological-support
      role: co-intervention
  context: Alcohol use disorder and tobacco smoking cessation
  sourceIds:
    - bogenschutz2022
    - johnson2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Psychotherapy or CBT accompanied treatment, and the smoking trial was an unblinded pilot with greater treatment-contact time in the psilocybin arm.
- id: psilocybin-mushroom-equivalence
  assertion: A measured dose of isolated psilocybin cannot be assumed equivalent to a particular weight or preparation of psilocybin-containing mushrooms.
  relation: formulation-boundary
  participants:
    - entityId: substance:psilocybin
      role: active-constituent
    - entityId: tag:psychedelic
      role: formulation-class
  context: Synthetic or standardized isolated psilocybin versus dried whole-mushroom chocolate
  sourceIds:
    - passage2026
    - holze2023
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The whole-mushroom Phase 1 registry reports a psilocybin-targeted dose but has no posted PK or efficacy results as of this review.
```

## Interactions

```yaml
- id: psilocybin-escitalopram
  name: Escitalopram
  otherSlug: null
  summary: In healthy volunteers, 14 days of escitalopram pretreatment did not materially change psilocin pharmacokinetics or positive mood effects of 25 mg psilocybin and reduced anxiety, adverse cardiovascular effects and several other acute adverse effects.
  sourceId: becker2022
  mechanism: Serotonergic antidepressant pretreatment
  context: Randomized crossover study in healthy participants; short pretreatment does not establish safety or efficacy of chronic coadministration in psychiatric patients.
  severity:
    label: Not established by the cited short-term healthy-volunteer study
    sourceId: becker2022
  conflictingSourceIds: []
- id: psilocybin-antidepressant-discontinuation
  name: SSRI/SNRI discontinuation before psilocybin
  otherSlug: null
  summary: Exploratory post hoc analyses found smaller clinical improvements among participants who had discontinued serotonergic antidepressants before psilocybin than among those unmedicated at trial entry, without a difference in acute psychedelic intensity.
  sourceId: erritzoe2024
  mechanism: Not established
  context: Nonrandomized subgroup comparison; it did not compare continuation versus discontinuation and cannot establish causation.
  severity:
    label: Not established; exploratory discontinuation analysis
    sourceId: erritzoe2024
  conflictingSourceIds: []
- id: psilocybin-other-serotonergic-agents
  name: Other serotonergic agents and monoamine oxidase inhibitors
  otherSlug: null
  summary: Some current research protocols restrict centrally acting serotonergic drugs and MAO inhibitors around administration. This is protocol-level precautionary evidence, not a quantified clinical interaction estimate.
  sourceId: passage2026
  mechanism: Potential serotonergic drug interaction
  context: Whole-mushroom PTSD Phase 1 eligibility protocol
  severity:
    label: Protocol precaution; quantitative interaction risk not established
    sourceId: passage2026
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem10624
  title: Psilocybin | C12H17N2O4P | CID 10624 - PubChem
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/10624
  kind: Chemical database
  insight: Compound identity, molecular formula, molecular weight and connectivity structure.
  limitation: A database identity record does not establish the composition, potency or clinical equivalence of a mushroom
    or commercial formulation.
  funding: U.S. National Library of Medicine and NCBI public database infrastructure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as a government database record.
  conflictOfInterestStatus: not-assessed
- id: holze2023
  title: Pharmacokinetics and Pharmacodynamics of Oral Psilocybin Administration in Healthy Participants
  authors: Friederike Holze, Anna M. Becker, Karolina E. Kolaczynska, Urs Duthaler, and Matthias E. Liechti
  year: 2023
  pmid: '36507738'
  url: https://pubmed.ncbi.nlm.nih.gov/36507738/
  kind: Controlled oral PK/PD study
  insight: Characterized psilocin exposure, half-life, dose proportionality and subjective duration after 15–30 mg oral psilocybin.
  limitation: Healthy controlled-study populations; pooled study datasets and method-dependent half-life estimates limit generalization
    to patients or mushroom products.
  funding: Swiss National Science Foundation, University Hospital Basel and Mind Medicine Inc.; the company was reported not
    to control study conduct or publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Matthias E Liechti reported consulting for Mind Medicine; other authors reported no competing interests
    in the article.
  conflictOfInterestStatus: not-assessed
- id: madsen2019
  title: Psychedelic effects of psilocybin correlate with serotonin 2A receptor occupancy and plasma psilocin levels.
  authors: Martin K Madsen, Patrick M Fisher, Daniel Burmester, Agnete Dyssegaard, Dea S Stenbæk, Sara Kristiansen, Sys S
    Johansen, Sczabolz Lehel, Kristian Linnet, Claus Svarer, David Erritzoe, Brice Ozenne, Gitte M Knudsen
  year: 2019
  pmid: '30685771'
  doi: 10.1038/s41386-019-0324-9
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6785028/
  kind: Human PET mechanistic study
  insight: Linked plasma psilocin and cerebral 5-HT2A occupancy with acute psychedelic intensity.
  limitation: Eight healthy participants; receptor occupancy during acute exposure does not establish the mechanism of durable
    therapeutic change.
  funding: Exact funding details were not re-extracted from the accessible primary record used for this draft.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full disclosure metadata were not re-extracted for this draft.
  conflictOfInterestStatus: not-assessed
- id: becker2022
  title: Acute Effects of Psilocybin After Escitalopram or Placebo Pretreatment in a Randomized, Double-Blind, Placebo-Controlled,
    Crossover Study in Healthy Subjects.
  authors: Anna M Becker, Friederike Holze, Tanja Grandinetti, Aaron Klaiber, Vanja E Toedtli, Karolina E Kolaczynska, Urs
    Duthaler, Nimmy Varghese, Anne Eckert, Edna Grünblatt, Matthias E Liechti
  year: 2022
  pmid: '34743319'
  doi: 10.1002/cpt.2487
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9299061/
  kind: Randomized pharmacology interaction study
  insight: Tested acute 25 mg psilocybin after two weeks of escitalopram versus placebo pretreatment.
  limitation: Healthy volunteers and short antidepressant exposure cannot establish chronic interaction safety or treatment
    efficacy in patients.
  funding: University Hospital Basel and Mind Medicine Inc.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Matthias E Liechti reported consulting for Mind Medicine; the remaining authors reported no competing
    interests.
  conflictOfInterestStatus: not-assessed
- id: erritzoe2024
  title: Effects of discontinuation of serotonergic antidepressants prior to psilocybin therapy versus escitalopram for major
    depression.
  authors: David Erritzoe, Tommaso Barba, Meg J Spriggs, Fernando E Rosas, David J Nutt, Robin Carhart-Harris
  year: 2024
  pmid: '38520045'
  doi: 10.1177/02698811241237870
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11102650/
  kind: Post hoc clinical-trial analysis
  insight: Explored outcomes according to serotonergic-antidepressant discontinuation before psilocybin treatment.
  limitation: Exploratory nonrandomized subgroup analysis; continuation versus discontinuation was not experimentally assigned,
    so causation cannot be inferred.
  funding: Exact funding and disclosure details were not re-extracted for this secondary analysis.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not fully re-extracted from the primary article for this draft.
  conflictOfInterestStatus: not-assessed
- id: davis2021
  title: 'Effects of Psilocybin-Assisted Therapy on Major Depressive Disorder: A Randomized Clinical Trial.'
  authors: Alan K Davis, Frederick S Barrett, Darrick G May, Mary P Cosimano, Nathan D Sepeda, Matthew W Johnson, Patrick
    H Finan, Roland R Griffiths
  year: 2021
  pmid: '33146667'
  doi: 10.1001/jamapsychiatry.2020.3285
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7643046/
  kind: Randomized clinical trial
  insight: Small waiting-list-controlled MDD trial with large short-term reductions in depression ratings.
  limitation: Small single-center selected sample, delayed-treatment comparator and readily perceptible drug effects limit
    blinding and generalizability.
  funding: Supported by philanthropic and crowdfunding sources associated with the Johns Hopkins psychedelic research program
    and NIH-linked research support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors disclosed research, board or advisory relationships involving psychedelic-research organizations;
    consult the primary disclosure for complete details.
  conflictOfInterestStatus: not-assessed
- id: carhartharris2021
  title: Trial of Psilocybin versus Escitalopram for Depression.
  authors: Robin Carhart-Harris, Bruna Giribaldi, Rosalind Watts, Michelle Baker-Jones, Ashleigh Murphy-Beiner, Roberta Murphy,
    Jonny Martell, Allan Blemings, David Erritzoe, David J Nutt
  year: 2021
  pmid: '33852780'
  doi: 10.1056/NEJMoa2032994
  url: https://pubmed.ncbi.nlm.nih.gov/33852780/
  kind: Phase 2 randomized comparative trial
  insight: The prespecified depression primary outcome did not significantly differ between psilocybin and escitalopram at
    six weeks.
  limitation: Small selected sample; secondary outcomes were not multiplicity-corrected, and accessible PubMed material does
    not contain the complete article text.
  funding: Alexander Mosley Charitable Trust and Imperial College London's Centre for Psychedelic Research.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors reported outside consulting or advisory relationships, including relationships with psychedelic-sector
    organizations; full details are in the journal disclosure.
  conflictOfInterestStatus: not-assessed
- id: mertens2026
  title: 'Efficacy and Safety of Psilocybin in Treatment-Resistant Major Depression: The EPISODE Randomized Clinical Trial.'
  authors: Lea J Mertens, Michael Koslowski, Felix Betzler, Manuela Brand, Ricarda Evens, Laura Kärtner, Andrea Jungaberle,
    Henrik Jungaberle, Tomislav Majić, Christian N Schmitz, Andreas Ströhle, Dennis Scharf, Moritz Spangemacher, Max Wolff,
    Zahra Assadi, Scharif Bahri, Lilith Becher, Luca V Färber, Niklas Kirchen, Eugenia Kulakova, Linda Kunz, Andy Meijer,
    Barbara Rohrmoser, Stefan Wellek, Moritz M Berger, Gerhard Gründer
  year: 2026
  pmid: '41848690'
  doi: 10.1001/jamapsychiatry.2026.0132
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13000742/
  kind: Phase 2b randomized clinical trial
  insight: Preserved a null week-6 HAMD17 response primary endpoint while reporting exploratory continuous-score improvements
    with 25 mg.
  limitation: Primary endpoint failed; later hierarchical tests are exploratory. Two sites, functional unblinding and a predominantly
    White sample constrain interpretation.
  funding: German Federal Ministry of Education and Research grant 01EN2006 A/B; German Center for Mental Health supported
    open access; Usona Institute supplied psilocybin.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Multiple authors disclosed outside fees, research support, equity or organizational roles involving
    pharmaceutical or psychedelic-sector organizations.
  conflictOfInterestStatus: not-assessed
- id: mcgowan2026
  title: 'Investigating the safety and tolerability of single-dose psilocybin for post-traumatic stress disorder: A nonrandomized
    open-label clinical trial.'
  authors: Niall M McGowan, James J Rucker, Rachel Yehuda, Manish Agrawal, Nadav Liam Modlin, Hollie Simmons, Agata Tofil-Kaluza,
    Shriya Das, Guy M Goodwin
  year: 2026
  pmid: '40883964'
  doi: 10.1177/02698811251362390
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13198616/
  kind: Phase 2 open-label clinical trial
  insight: Provides the principal published PTSD safety dataset curated here and uncontrolled CAPS-5 follow-up.
  limitation: Twenty-two participants, no control arm and open-label design; symptom changes were secondary and cannot establish
    efficacy.
  funding: Sponsored by Compass Pathfinder Ltd.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Several authors were current or former COMPASS employees or held company equity; additional outside
    relationships were disclosed.
  conflictOfInterestStatus: not-assessed
- id: griffiths2016
  title: 'Psilocybin produces substantial and sustained decreases in depression and anxiety in patients with life-threatening
    cancer: A randomized double-blind trial.'
  authors: Roland R Griffiths, Matthew W Johnson, Michael A Carducci, Annie Umbricht, William A Richards, Brian D Richards,
    Mary P Cosimano, Margaret A Klinedinst
  year: 2016
  pmid: '27909165'
  doi: 10.1177/0269881116675513
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5367557/
  kind: Randomized double-blind crossover trial
  insight: Found sustained improvements in cancer-related depression and anxiety after high-dose psilocybin.
  limitation: Small, highly selected cancer population and crossover design; expectancy and imperfect masking restrict generalization
    to anxiety disorders generally.
  funding: Heffter Research Institute and multiple philanthropic foundations and donors, with NIH support for part of the
    work.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Roland R Griffiths disclosed service on the Heffter Research Institute board.
  conflictOfInterestStatus: not-assessed
- id: bogenschutz2022
  title: 'Percentage of Heavy Drinking Days Following Psilocybin-Assisted Psychotherapy vs Placebo in the Treatment of Adult
    Patients With Alcohol Use Disorder: A Randomized Clinical Trial.'
  authors: Michael P Bogenschutz, Stephen Ross, Snehal Bhatt, Tara Baron, Alyssa A Forcehimes, Eugene Laska, Sarah E Mennenga,
    Kelley O'Donnell, Lindsey T Owens, Samantha Podrebarac, John Rotrosen, J Scott Tonigan, Lindsay Worth
  year: 2022
  pmid: '36001306'
  doi: 10.1001/jamapsychiatry.2022.2096
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9403854/
  kind: Randomized active-placebo clinical trial
  insight: Reported fewer heavy drinking days with psilocybin plus psychotherapy than diphenhydramine plus psychotherapy.
  limitation: Psychotherapy was integral to both arms, psychoactive effects complicate masking, and results do not establish
    a drug-only effect.
  funding: Heffter Research Institute, NIH/NCATS infrastructure support and private donations; psilocybin was supplied for
    the study.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors disclosed grants, consulting relationships and intellectual-property or commercial relationships
    involving psychedelic organizations.
  conflictOfInterestStatus: not-assessed
- id: johnson2026
  title: 'Psilocybin or Nicotine Patch for Smoking Cessation: A Pilot Randomized Clinical Trial.'
  authors: Matthew W Johnson, Gideon P Naudé, Peter S Hendricks, Albert Garcia-Romeu
  year: 2026
  pmid: '41805956'
  doi: 10.1001/jamanetworkopen.2026.0972
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12976795/
  kind: Pilot randomized clinical trial
  insight: Reported higher six-month biochemically verified smoking abstinence with one psilocybin session plus CBT than nicotine
    patch plus CBT.
  limitation: Unblinded pilot; 68 of 82 completed six-month follow-up, and psilocybin participants received substantially
    more treatment-contact time.
  funding: Heffter Research Institute, Beckley Foundation and William Harrison; some investigators also received support through
    philanthropic funding of the Johns Hopkins center.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Johnson, Hendricks and Garcia-Romeu disclosed grants, fees, equity or other relationships with multiple
    psychedelic-sector organizations.
  conflictOfInterestStatus: not-assessed
- id: morris2024
  title: A Case Report of Psilocybin-induced Psychosis in a Predisposed Patient.
  authors: Sorsha Lee Morris
  year: 2024
  pmid: '39420616'
  doi: 10.9758/cpn.24.1180
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11494431/
  kind: Case report
  insight: Documents prolonged psychosis with catatonic features and suicidality after repeated heavy psilocybin exposure
    in a person with several predisposing factors.
  limitation: A single case cannot establish incidence, relative risk, dose-response causation or risk in screened clinical
    populations.
  funding: No funding conclusion is drawn beyond the disclosure available in the primary article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No conflict conclusion beyond the primary article disclosure is asserted here.
  conflictOfInterestStatus: not-assessed
- id: passage2026
  title: An Open-Label, Phase 1 Study of the Safety Pharmacokinetic Profile, and Preliminary Efficacy, of Organic Whole Psilocybin-Containing
    Mushrooms in Patients Suffering From PTSD
  authors: Scottsdale Research Institute
  year: 2026
  url: https://clinicaltrials.gov/study/NCT07275970
  kind: ClinicalTrials.gov registry record
  insight: Registers a single 30 mg psilocybin exposure delivered as dried whole mushrooms in chocolate and prospectively
    specifies safety and psilocin PK endpoints.
  limitation: Open-label Phase 1 study with 24 planned participants; no posted results as of this review, so safety, PK and
    efficacy outcomes cannot yet be inferred.
  funding: Scottsdale Research Institute is listed as lead sponsor; additional funding is not reported in the retrieved registry
    record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: ClinicalTrials.gov registry metadata do not provide an investigator conflict-of-interest statement.
  conflictOfInterestStatus: not-assessed
- id: fda2026
  title: 'Psychedelic Drugs: Considerations for Clinical Investigations'
  authors: U.S. Food and Drug Administration, Center for Drug Evaluation and Research
  year: 2026
  url: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/psychedelic-drugs-considerations-clinical-investigations
  kind: Final regulatory guidance
  insight: FDA guidance for clinical development of psychedelic drugs, including psychiatric and substance-use indications.
  limitation: Development guidance is not an approval, product label, efficacy determination or psilocybin-specific contraindication
    list.
  funding: U.S. federal government.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to agency guidance.
  conflictOfInterestStatus: not-assessed
- id: ecfr2026
  title: 21 CFR § 1308.11 — Schedule I
  authors: U.S. Drug Enforcement Administration; Electronic Code of Federal Regulations
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.11
  kind: Federal regulation
  insight: Lists psilocybin, DEA controlled-substance code 7437, in Schedule I.
  limitation: Federal classification does not by itself describe every research authorization, state law, local policy or
    regulated state service framework.
  funding: U.S. federal government.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to codified regulation.
  conflictOfInterestStatus: not-assessed
- id: oregon2026
  title: Oregon Psilocybin Services - Access Psilocybin Services
  authors: Oregon Health Authority
  year: 2026
  url: https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-access-psilocybin-services.aspx
  kind: State regulator
  insight: Describes Oregon's licensed service-center framework for adults aged 21 or older, including preparation and on-site
    purchase and consumption.
  limitation: Oregon's service framework does not alter federal Schedule I status and should not be generalized to other jurisdictions.
  funding: State of Oregon.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to state regulatory information.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States — federal
  activity: Possession, manufacture, distribution and authorized research involving psilocybin
  status: Psilocybin is listed in Schedule I under 21 CFR § 1308.11 with DEA controlled-substance code 7437; applicable statutory and research-authority exceptions require separate analysis.
  sourceUrl: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.11
  asOf: "2026-10-16"
- jurisdiction: Oregon, United States
  activity: State-regulated psilocybin services
  status: Adults aged 21 or older may access Oregon's regulated psilocybin-services framework after required preparation; purchase and consumption occur during an administration session at a licensed service center, and products may not be taken off-site. Federal law remains separate.
  sourceUrl: https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-access-psilocybin-services.aspx
  asOf: "2026-10-16"
```
