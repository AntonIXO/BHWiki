---
slug: psilocybin-microdosing
name: psilocybin microdosing
subtitle: Evidence-specific research record.
aliases:
  - psilocybin microdosing
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research subject
tags:
  - psychedelic
  - tryptamine
  - serotonin-2a
accent: "#888888"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: 1.4–3 hours in high-dose oral psilocybin PK studies; not microdose-specific
  low: 1.4
  high: 3
  context: Human PK studies used 15–30 mg or 0.3–0.6 mg/kg, substantially above typical microdosing exposures. Their psilocin timing and half-life estimates cannot be assumed to describe repeated microdosing precisely (S5, S6).
  sourceId: S5
  observationId: psilocybin-microdosing-pk
kinetics:
  onset: Microdose-specific onset is not standardized; high-dose oral psilocin peaks around 2 hours
  peak: About 2 hours in 15–30 mg oral studies
  duration: High-dose psilocin half-life about 1.4–3 hours; repeated microdose accumulation is unknown
  bioavailability: Formulation- and mushroom-content-dependent
  metabolism: Psilocybin is converted to psilocin; glucuronidation and an extended terminal phase are reported
  sourceId: S5
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

Psilocybin microdosing means repeated low exposure to psilocybin-containing mushrooms, truffles, or measured psilocybin. Controlled studies in screened healthy adults show detectable subjective, somatic, and EEG effects in some protocols, but no reliable improvement in standard cognition, creativity, mood, anxiety, depression, well-being, or social function beyond placebo (S1, S2, S4, S7).

## Description

There is no universal pharmacological cutoff for a microdose. Controlled datasets used roughly 0.8–1.5 mg measured psilocybin per administration or variable mushroom/truffle masses. Fresh or dried material cannot be converted reliably to analyte milligrams without moisture and alkaloid assays (S1, S2, S4, S7).

## Evidence note

The controlled literature is small, short, and dominated by healthy or screened adults. Expectancy, incomplete blinding, self-selection, variable mushroom potency, and exclusion of people taking medication limit generalization. Positive observational reports cannot be separated cleanly from expectancy and ritual effects (S1, S2, S3, S4, S7).

## Doses

```yaml
- label: Dried Psilocybe cubensis
  amount: 0.5 g dried mushroom; estimated approximately 0.9 mg psilocybin
  quantity: 0.5
  quantityMax: null
  unit: g dried material
  ingredient: Psilocybin microdosing
  formulation: Psilocybe cubensis mushroom
  route: Oral
  frequency: Single study administration
  duration: Acute assessment
  population: 34 healthy adults
  purpose: Research exposure; not a dosing recommendation.
  note: Mushroom chemistry was variable and active effects were often detectable (S1).
  sourceCategory: research
  sourceId: S1
- label: Dried Galindoi truffles
  amount: 0.7 g dried truffles; approximately 1.5 mg psilocybin
  quantity: 0.7
  quantityMax: null
  unit: g dried material
  ingredient: Psilocybin microdosing
  formulation: Galindoi truffles
  route: Oral
  frequency: Five to seven administrations across three weeks
  duration: 3 weeks
  population: Healthy self-selected adults
  purpose: Research exposure; not a dosing recommendation.
  note: The preregistered study found no placebo difference in DASS-21, emotional Go/No-Go, or MAIA outcomes (S2).
  sourceCategory: research
  sourceId: S2
- label: Fresh Galindoii truffles
  amount: 0.65–1.00 g fresh truffles
  quantity: 0.65
  quantityMax: 1
  unit: g fresh material
  ingredient: Psilocybin microdosing
  formulation: Psilocybe galindoii fresh truffles
  route: Oral
  frequency: Approximately one dose every three days
  duration: Six to ten doses across longitudinal trials
  population: Healthy screened adults
  purpose: Research exposure; not a dosing recommendation.
  note: Fresh-truffle mass is not a precise analyte dose; broad cognitive and mood measures were null after correction (S4).
  sourceCategory: research
  sourceId: S4
- label: Measured psilocybin microdose range
  amount: Approximately 0.8–1.5 mg psilocybin per administration in controlled datasets
  quantity: 0.8
  quantityMax: 1.5
  unit: mg psilocybin
  ingredient: Psilocybin microdosing
  formulation: Measured or estimated psilocybin exposure
  route: Oral
  frequency: Protocol-specific
  duration: Short repeated protocols
  population: Healthy screened adults
  purpose: Research exposure range; not a dosing recommendation.
  note: Mushroom and truffle mass cannot be converted reliably without chemical assays (S1, S2, S7).
  sourceCategory: research
  sourceId: S7
```

## Pharmacokinetics

```yaml
- id: psilocybin-microdosing-pk
  analyte: Psilocin
  route: Oral
  formulation: High-dose oral psilocybin PK studies; microdose-specific curve unavailable
  population: Healthy adults in single-dose PK studies
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.4
  high: 3
  unit: hours
  context: At 15–30 mg oral psilocybin, psilocin peaked at about 2 hours with half-lives around 1.4–1.8 hours; a 0.3–0.6 mg/kg study reported about 3.0 ± 1.1 hours. Intact psilocybin was not detected in plasma in one study, and repeated microdose accumulation or steady state is unknown (S5, S6).
  sourceId: S5
  modelEligible: false
```

## Modifiers

```yaml
- label: Species, batch, storage, and drying
  effect: Active-alkaloid concentration changes exposure.
  detail: Whole-mushroom and truffle mass are imprecise proxies for psilocybin without assays.
  sourceId: S1
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
- label: Dose and schedule
  effect: Dose-response and repeated-protocol kinetics are not mapped adequately.
  detail: Every-third-day schedules are customary rather than pharmacokinetically validated.
  sourceId: S2
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
- label: Baseline state
  effect: Healthy participants may show ceiling effects on mood and well-being measures.
  detail: Clinical psychiatric populations are largely absent from controlled microdosing studies.
  sourceId: S4
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
- label: Prior psychedelic experience
  effect: Previous use may increase detectability and shape conditioning or expectancy.
  detail: Samples are self-selected and blinding is difficult when active effects are perceptible.
  sourceId: S1
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
- label: Expectancy
  effect: Beliefs about receiving an active dose can influence self-reported outcomes.
  detail: In a self-blinded citizen-science study, beliefs predicted reported benefits better than capsule content.
  sourceId: S3
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
- label: Assessment timing
  effect: Acute testing near the expected peak may capture transient effects rather than persistent or between-dose effects.
  detail: Short studies do not establish durability beyond the protocol.
  sourceId: S7
  observationId: psilocybin-microdosing-pk
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: psilocybin-microdosing-effect-subjective
  conceptId: perception
  name: Acute subjective state
  direction: Increased
  evidence: Subjective reports
  description: Active-dose subjective ratings were higher on dosing days, but differences were concentrated among participants who correctly identified their condition and blinding was frequently incomplete.
  sourceId: S1
  population: 34 healthy adults
  exposure: 0.5 g dried mushroom; acute within-subject study
  instrument: Subjective ratings and blinding accuracy
  magnitude: Detectable in a subset
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-effect-neural
  conceptId: perception
  name: EEG theta power
  direction: Decreased
  evidence: Human research
  description: Reduced EEG theta power was observed without corresponding behavioral cognitive enhancement.
  sourceId: S1
  population: 34 healthy adults
  exposure: 0.5 g dried mushroom
  instrument: EEG
  magnitude: Reduced theta power
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-effect-somatic
  conceptId: perception
  name: Somatic and bodily sensations
  direction: Variable
  evidence: Subjective reports
  description: Body awareness, nausea, altered temperature, or heart-rate sensations can occur at microdose-range exposures; symptoms were not specific to active assignment in all analyses.
  sourceId: S4
  population: Healthy screened adults in two longitudinal trials
  exposure: Six or ten fresh-truffle doses
  instrument: Symptom and bodily-awareness reports
  magnitude: Mixed; 48% of symptom reporters were placebo
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: psilocybin-microdosing-outcome-cognition
  conceptId: cognitive-performance
  name: Standard cognitive performance
  direction: Variable
  evidence: Human research
  description: No reliable enhancement across attention, inhibition, working memory, divergent thinking, or convergent thinking; small uncorrected slowing signals were exploratory.
  sourceId: S1
  population: Healthy screened adults
  exposure: Acute and repeated microdose protocols
  instrument: AX-CPT, Reference-Back, N-back, Attentional Blink, Stroop, creativity tasks
  magnitude: Predominantly null
  reportType: measured-assessment
  conflictingSourceIds: []
  study:
    id: psilo-cognition
    design: Double-blind placebo-controlled studies
    comparator: Placebo
    route: Oral
    formulation: Mushroom or truffle
    assessmentTime: Acute and repeated
    sampleSize: 34
- id: psilocybin-microdosing-outcome-creativity
  conceptId: cognitive-performance
  name: Creativity
  direction: Variable
  evidence: Human research
  description: The principal controlled mushroom study found no corrected active-placebo advantage on standard divergent- or convergent-thinking measures.
  sourceId: S1
  population: 34 healthy adults
  exposure: 0.5 g dried mushroom
  instrument: Creativity tasks
  magnitude: Null after correction
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-outcome-mood
  conceptId: depression-severity
  name: Mood and anxiety symptoms
  direction: Variable
  evidence: Human research
  description: Seven approximately 1.5 mg truffle doses over three weeks produced no placebo difference in DASS-21 depression, anxiety, or stress; later longitudinal trials were also broadly null after correction.
  sourceId: S2
  population: Healthy self-selected adults
  exposure: Repeated truffle microdosing over three weeks
  instrument: DASS-21, emotional Go/No-Go, MAIA
  magnitude: DASS condition test F(1,43)=0.59, P=.45; BF 0.24 favoring null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-outcome-social
  conceptId: cognitive-performance
  name: Social cognition and well-being
  direction: Variable
  evidence: Human research
  description: The longitudinal trials found no reliable group differences in social cognition, mindfulness, self-compassion, flexibility, or well-being; one difficult RMET signal remained exploratory after many tests.
  sourceId: S4
  population: Healthy screened adults
  exposure: Six or ten fresh-truffle doses
  instrument: RMET and well-being measures
  magnitude: Broadly null; isolated exploratory signal
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-outcome-clinical
  conceptId: depression-severity
  name: Clinical treatment efficacy
  direction: Variable
  evidence: Limited research
  description: Microdose efficacy for depression, ADHD, anxiety disorders, or other diagnoses is unestablished because clinical populations are largely absent from controlled studies.
  sourceId: S7
  population: Clinical populations largely unstudied
  exposure: Microdose protocols
  instrument: Clinical symptom endpoints
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
- id: psilocybin-microdosing-outcome-durability
  conceptId: cognitive-performance
  name: Durability
  direction: Variable
  evidence: Limited research
  description: Controlled evidence does not establish benefits persisting beyond short protocols lasting days to several weeks.
  sourceId: S7
  population: Healthy screened adults
  exposure: Short repeated protocols
  instrument: Follow-up outcomes
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Psilocin 5-HT2A signaling
  description: Psilocybin functions largely as a prodrug for psilocin, which activates 5-HT2A signaling; receptor occupancy and a microdose-specific exposure threshold are not established.
  sourceId: S5
  conceptId: serotonin-2a
- title: Expectancy pathway
  description: In a self-blinded sample, beliefs about capsule content predicted reported outcomes better than actual capsule content, supporting expectancy as a contributor.
  sourceId: S3
- title: Acute neural modulation
  description: Reduced theta power is compatible with acute pharmacological action but does not identify a beneficial mechanism.
  sourceId: S1
- title: Plasticity claim remains extrapolated
  description: Preclinical or high-dose neuroplasticity findings cannot establish a human microdosing effect; repeated microdose plasticity has not been demonstrated clinically.
  sourceId: S2
```

## Cautions

```yaml
- title: Long-term cardiac uncertainty
  description: Chronic 5-HT2B-related valvular or fibrotic risk is biologically plausible, but microdosing-specific clinical injury has not been established and long-term surveillance is inadequate.
  sourceId: S7
- title: Psychiatric exclusions
  description: Trials commonly excluded psychosis, schizophrenia, mania, bipolar-spectrum histories, serious substance-use disorders, and major comorbidity; safety in these groups is uncertain.
  sourceId: S8
- title: Functional impairment is possible
  description: Active doses can be perceptible and may produce somatic discomfort or small task-slowing signals; subthreshold intent does not guarantee unimpaired performance.
  sourceId: S1
- title: Product variability
  description: Unassayed mushrooms and truffles can deliver materially different psilocybin and psilocin exposures.
  sourceId: S1
- title: Evidence gaps
  description: Pregnancy, significant cardiovascular disease, seizure disorders, prolonged frequent use, and polypharmacy are insufficiently characterized.
  sourceId: S7
```

## Claims

```yaml
- id: psilocybin-microdosing-claim-treatment
  assertion: Microdosing treats depression or anxiety
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: Not established; controlled studies in healthy adults found null mood outcomes and clinical populations remain insufficiently studied.
  sourceIds:
    - S2
    - S4
    - S7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Healthy short-term samples cannot estimate treatment efficacy.
- id: psilocybin-microdosing-claim-focus
  assertion: Microdosing improves focus, productivity, or ADHD symptoms
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: Not demonstrated across the cited attention and working-memory measures; ADHD treatment evidence is absent.
  sourceIds:
    - S4
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Most studies were not clinical ADHD trials.
- id: psilocybin-microdosing-claim-creativity
  assertion: Microdosing enhances creativity
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: No reliable advantage on standard divergent or convergent thinking tasks.
  sourceIds:
    - S1
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: One short controlled mushroom study cannot exclude every protocol, but broad enhancement is unsupported.
- id: psilocybin-microdosing-claim-imperceptible
  assertion: Microdoses are imperceptible
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: Incorrect as a general definition; active effects were detectable and blinding frequently failed.
  sourceIds:
    - S1
    - S2
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Detectability varies by dose and expectancy.
- id: psilocybin-microdosing-claim-safe
  assertion: Long-term microdosing is safe
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: Unknown; long-term cardiac, psychiatric, and repeated-exposure surveillance is inadequate.
  sourceIds:
    - S7
    - S8
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Absence of evidence is not evidence of safety.
- id: psilocybin-microdosing-claim-placebo
  assertion: All reported benefits are placebo
  relation: evidence-assessment
  participants:
    - entityId: substance:psilocybin-microdosing
      role: subject
    - entityId: tag:serotonin-2a
      role: context
  context: Too strong for current evidence; expectancy contributes, but pharmacological effects remain unresolved.
  sourceIds:
    - S3
    - S7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Dose, duration, sample, and measurement limitations remain.
```

## Interactions

```yaml
- id: psilo-interaction-psychiatric
  name: Psychiatric medications
  otherSlug: null
  summary: Direct controlled interaction data for SSRIs, SNRIs, antipsychotics, mood stabilizers, and other psychotropics at microdose exposure are insufficient.
  sourceId: S2
  context: Evidence gap
- id: psilo-interaction-serotonergic
  name: Serotonergic drugs
  otherSlug: null
  summary: The frequency and severity of serotonin-mediated adverse interactions with microdoses are not quantified.
  sourceId: S8
  context: Evidence gap
- id: psilo-interaction-maoi
  name: MAOIs, lithium, and stimulants
  otherSlug: null
  summary: No reliable microdose-specific safety or pharmacodynamic dataset establishes interaction risk.
  sourceId: S8
  context: Evidence gap
- id: psilo-interaction-substances
  name: Alcohol, cannabis, and other psychedelics
  otherSlug: null
  summary: Controlled repeated microdosing studies do not characterize these combinations.
  sourceId: S2
  context: Evidence gap
- id: psilo-interaction-metabolism
  name: Psilocin metabolism
  otherSlug: null
  summary: Psilocin glucuronidation is documented, but clinically useful enzyme-interaction predictions for microdosing are not established.
  sourceId: S6
  context: Pharmacokinetic uncertainty
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: S1
  title: "Microdosing with psilocybin mushrooms: a double-blind placebo-controlled study"
  authors: Federico Cavanna, Stephanie Muller, Laura Alethia de la Fuente, Federico Zamberlan, Matías Palmucci, Lucie Janeckova, Martin Kuchar, Carla Pallavicini, and Enzo Tagliazucchi
  year: 2022
  url: https://doi.org/10.1038/s41398-022-02039-0
  kind: Primary randomized, double-blind, placebo-controlled within-subject study
  insight: A 0.5 g dried-mushroom dose produced subjective and EEG effects but no reliable enhancement of cognition, creativity, or well-being.
  limitation: n=34; short exposure; variable mushroom chemistry; high unblinding.
  funding: Not stated in the retrieved article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved article record.
  conflictOfInterestStatus: not-assessed
- id: S2
  title: "Psilocybin microdosing does not affect emotion-related symptoms and processing: A preregistered field and lab-based study"
  authors: Josephine Marschall et al.; Leiden University and collaborators
  year: 2022
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8801668/
  kind: Primary preregistered randomized, double-blind, placebo-controlled crossover study
  insight: Approximately seven 1.5 mg psilocybin-equivalent truffle doses over three weeks did not change DASS-21 symptoms, emotional Go/No-Go processing, or interoceptive awareness.
  limitation: Healthy, self-selected participants; variable truffle content; short protocol; attrition and incomplete blinding.
  funding: Community and in-kind support acknowledged; no conventional grant stated in the retrieved text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no potential conflicts of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8801668/
- id: S3
  title: Self-blinding citizen science to explore psychedelic microdosing
  authors: Balázs Szigeti et al.; Imperial College London
  year: 2021
  url: https://doi.org/10.7554/eLife.62878
  kind: Naturalistic self-blinded citizen-science placebo-controlled study
  insight: Among 191 completers using self-selected psychedelic microdoses, beliefs about capsule content explained reported benefits better than actual capsule content.
  limitation: Self-administered, mixed substances, nonclinical sample, self-selection, and imperfect blinding.
  funding: Not stated in the retrieved article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved article record.
  conflictOfInterestStatus: not-assessed
- id: S4
  title: "Cognitive and subjective effects of psilocybin microdosing: Results from two double-blind placebo-controlled longitudinal trials"
  authors: Luisa Prochazkova, Josephine Marschall, Dominique Patrick Lippelt, Neil R. Schon, Martin Kuchař, and Bernhard Hommel
  year: 2026
  url: https://doi.org/10.1016/j.neuropharm.2025.110722
  kind: Two primary randomized, double-blind, placebo-controlled longitudinal trials
  insight: Six- and ten-dose fresh-truffle protocols produced no compelling cognitive or emotional benefit beyond placebo in healthy participants; active doses produced more somatic effects.
  limitation: Healthy, self-selected sample; multiple comparisons; limited power for very small effects; fresh-truffle mass is not a precise analyte dose.
  funding: European Research Council Advanced Grant ERC-2015-AdG-694722 and MICR grant VI20172020056.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no known competing financial interests or relationships.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://doi.org/10.1016/j.neuropharm.2025.110722
- id: S5
  title: Pharmacokinetics and Pharmacodynamics of Oral Psilocybin Administration in Healthy Participants
  authors: Friederike Holze, Anna M. Becker, Karolina E. Kolaczynska, Urs Duthaler, and Matthias E. Liechti
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/36507738/
  kind: Controlled oral PK/PD study
  insight: At 15–30 mg, psilocin peaked at about two hours, showed dose-proportional PK, and had approximately 1.4–1.8-hour half-lives.
  limitation: Doses were far above typical microdosing exposures and were single administrations in healthy adults.
  funding: Not stated in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: S6
  title: Pharmacokinetics of Escalating Doses of Oral Psilocybin in Healthy Adults
  authors: Brown et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28353056/
  kind: Human pharmacokinetic study
  insight: At 0.3–0.6 mg/kg, psilocin half-life was approximately three hours, intact renal clearance was under 2%, and no psilocybin was detected in plasma or urine.
  limitation: Single-dose, high-exposure study; not a microdosing or repeated-protocol study.
  funding: Not stated in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: S7
  title: Is microdosing a placebo? A rapid review of low-dose LSD and psilocybin research
  authors: Vince Polito and Patricio Liknaitzky
  year: 2024
  url: https://doi.org/10.1177/02698811241254831
  kind: Rapid systematic review
  insight: Microdosing studies show some acute subjective and neurophysiological effects, but cognitive and mood benefits are inconsistent, blinding is difficult, and long-term safety is unstudied.
  limitation: Rapid review; combines LSD and psilocybin; small and heterogeneous primary literature.
  funding: Not stated in the retrieved article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not stated in the retrieved article record.
  conflictOfInterestStatus: not-assessed
- id: S8
  title: "Considerations and cautions for the integration of psilocybin into routine clinical care: a consensus statement from the US National Network of Depression Centers' Task Group on Psychedelics and Related Compounds"
  authors: US National Network of Depression Centers, Task Group on Psychedelics and Related Compounds
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12495261/
  kind: Clinical consensus statement
  insight: Drug interactions, medical comorbidity, psychiatric exclusions, expectancy, and longitudinal harms remain important unanswered questions.
  limitation: Not microdose-specific and not a randomized efficacy study.
  funding: Not stated in the retrieved article record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: See article disclosure statement.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12495261/
- id: S9
  title: "Drugs of Abuse: A DEA Resource Guide, 2024 Edition"
  authors: United States Drug Enforcement Administration
  year: 2024
  url: https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf
  kind: Federal regulatory information
  insight: The DEA describes psilocybin as a Schedule I substance under the federal Controlled Substances Act.
  limitation: Regulatory description, not a clinical safety or efficacy study.
  funding: U.S. federal agency publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: not-assessed
- id: S10
  title: Oregon Psilocybin Services - What are Psilocybin Services?
  authors: Oregon Health Authority
  year: 2026
  url: https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-what-are-psilocybin-services.aspx
  kind: State regulatory guidance
  insight: Oregon permits access through licensed service centers during an administration session with a trained facilitator; psilocybin remains federally Schedule I.
  limitation: Applies to Oregon’s statutory service model and does not describe other jurisdictions or unsupervised microdosing.
  funding: State agency publication.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
- jurisdiction: United States
  activity: Psilocybin possession and use
  status: The DEA describes psilocybin as Schedule I under the federal Controlled Substances Act.
  sourceUrl: https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf
  asOf: 2026-10-10
- jurisdiction: Oregon, United States
  activity: Licensed psilocybin services
  status: Oregon permits access through licensed service centers during a facilitated administration session; this is not nationwide legalization or a general legal take-home microdosing market.
  sourceUrl: https://www.oregon.gov/oha/ph/preventionwellness/pages/psilocybin-what-are-psilocybin-services.aspx
  asOf: 2026-10-10
```
