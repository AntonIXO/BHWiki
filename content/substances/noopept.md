---
slug: noopept
name: Noopept
subtitle: Source-linked research profile.
aliases:
  - Omberacetam
  - Ноопепт
formula: C17H22N2O4
molecularWeight: 318.4 g/mol
pubchemCid: 180496
smiles: CCOC(=O)CNC(=O)C1CCCN1C(=O)CC2=CC=CC=C2
category: Nootropic
tags:
  - nootropic-research
accent: "#a9b993"
reviewedAt: 2026-10-04
editorialStatus: sourced-draft
halfLife:
  label: Human elimination half-life not established
  low: null
  high: null
  context: A 2004 interspecies study reported slower elimination in humans than in rabbits or rats and substantial individual variability, but its accessible abstract gives no numeric human half-life.
  sourceId: boyko-2004-pk
  observationId: human-half-life-not-established
kinetics:
  onset: Human pharmacokinetic onset is not established in the accessible evidence.
  peak: Human Tmax is not established in the accessible evidence.
  duration: A numeric human plasma elimination duration is not established; treatment-course duration must not be used as a kinetic surrogate.
  bioavailability: The interspecies report included oral administration, but its accessible abstract does not provide a quantitative human oral-bioavailability estimate.
  metabolism: The interspecies study reported very rapid metabolism in rats, slower biotransformation in rabbits, and no detectable human plasma metabolites at the studied exposure, alongside substantial human interindividual variability.
  sourceId: boyko-2004-pk
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
x-order: 237
---

## Summary

Noopept (omberacetam; GVS-111) is N-phenylacetyl-L-prolylglycine ethyl ester, a Russian nootropic drug with limited regional human evidence and a much larger preclinical literature. Human efficacy, target affinity, pharmacokinetics, interactions, and long-term safety remain substantially less characterized than promotional summaries imply.

## Description

PubChem identifies Noopept as CID 180496 (C17H22N2O4; 318.4 g/mol); the retained SMILES records connectivity, while the named drug contains the L-proline stereocenter. It was selected from N-acylprolyl dipeptides in 1996; synthesis proceeds conceptually through N-phenylacetyl-L-proline followed by peptide coupling to glycine ethyl ester. Rat studies detect cyclo-prolylglycine (PubChem CID 126154), but human metabolite evidence is weak. Bioanalysis has used HPLC, GC/GC-MS, and, in market surveillance, chromatography coupled to mass spectrometry; modern solid-state characterization includes NMR, DSC/TGA, PXRD/SCXRD and SEM. The current Russian label supplies 10-mg oral tablets and names omberacetam as the active ingredient.

## Evidence note

Human evidence is concentrated in small Russian studies, notably a 53-patient active-comparator trial and an open post-stroke study; placebo-controlled replication and robust healthy-volunteer cognition data were not found. A current ClinicalTrials.gov search found no Noopept/omberacetam/GVS-111 record. Human numeric PK is sparse, and receptor-affinity evidence is mostly preclinical. Manufacturer sponsorship of the key human publications could not be established from inspected declarations, so sponsorship remains not-assessed rather than presumed independent. Preclinical metabolite, neurotrophin, HIF-1 and receptor findings must not be treated as demonstrated human mechanisms.

## Doses

```yaml
- label: Russian-label starting regimen
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg/day
  ingredient: Omberacetam
  formulation: 10-mg Noopept tablets
  route: Oral
  frequency: 10 mg twice daily, morning and daytime
  duration: 1.5-3 months
  population: Adults older than 18 years with labeled cognitive or emotional-lability disorders
  purpose: Labeled treatment regimen in Russia
  sourceCategory: approved-label
  note: Treatment starts at 20 mg/day; the label advises not taking the medicine after 18:00.
  sourceId: russia-label-2024
- label: Russian-label escalated regimen
  amount: 30 mg/day
  quantity: 30
  quantityMax: null
  unit: mg/day
  ingredient: Omberacetam
  formulation: 10-mg Noopept tablets
  route: Oral
  frequency: 10 mg three times daily during the day
  duration: 1.5-3 months
  population: Adults older than 18 years with inadequate response and good tolerability
  purpose: Labeled dose escalation in Russia
  sourceCategory: approved-label
  note: Increase to 30 mg/day is stated to require clinician recommendation; a repeat course may be considered after one month.
  sourceId: russia-label-2024
- label: Vascular or post-traumatic cognitive-disorder comparison
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg/day
  ingredient: Noopept
  formulation: Oral Noopept
  route: Oral
  frequency: 10 mg twice daily
  duration: 56 days
  population: 53 patients randomized to Noopept or piracetam for mild cognitive disorders of vascular or traumatic origin; 31 were assigned Noopept
  purpose: Comparative efficacy and tolerability research
  sourceCategory: research
  note: Noopept was compared with piracetam 1200 mg/day; no placebo group was included and masking methods were not reported.
  sourceId: molekul-link-175
- label: Post-stroke cognitive study
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg/day
  ingredient: Noopept
  formulation: Oral Noopept
  route: Oral
  frequency: Daily; dose division not stated in the abstract
  duration: 2 months for the reported cognitive assessment
  population: 60 patients with stroke and mild cognitive impairment
  purpose: Open prospective cognitive-outcome research
  sourceCategory: research
  note: The abstract also states that patients were followed or treated over 12 months, creating an exposure-duration ambiguity; the reported conclusion specifies 20 mg/day for 2 months.
  sourceId: amelin-2011
- label: Tuberculosis-chemotherapy adjunct study
  amount: 20 mg/day
  quantity: 20
  quantityMax: null
  unit: mg/day
  ingredient: Noopept
  formulation: Oral Noopept
  route: Oral
  frequency: 10 mg twice daily
  duration: 1 month
  population: 30 of 60 patients with newly diagnosed respiratory tuberculosis received Noopept
  purpose: Prevention of reported neuro- and cardiotoxic effects during antituberculous therapy
  sourceCategory: research
  note: Comparator allocation details and exact anxiety instrument are not available in the accessible abstract.
  sourceId: mordyk-2009
- label: Six-month rabbit toxicology exposure
  amount: 10-100 mg/kg/day
  quantity: 10
  quantityMax: 100
  unit: mg/kg/day
  ingredient: Noopept
  formulation: Noopept
  route: Oral
  frequency: Daily
  duration: 6 months
  population: Male and female rabbits
  purpose: Chronic preclinical toxicology
  sourceCategory: research
  note: The abstract reported no irreversible pathological changes in the tested organ systems at these doses; this does not establish long-term human safety.
  sourceId: kovalenko-2002-tox
- label: Rat metabolite-identification exposure
  amount: 5 mg/kg
  quantity: 5
  quantityMax: null
  unit: mg/kg
  ingredient: GVS-111
  formulation: Noopept research compound
  route: Intraperitoneal
  frequency: Single administration
  duration: Single dose; brain sampled at 1 hour
  population: Rats
  purpose: Metabolite identification in brain
  sourceCategory: research
  note: Parent GVS-111 was below the HPLC detection limit in brain at 1 hour; cyclo-prolylglycine increased about 2.5-fold.
  sourceId: gudasheva-1997-metabolite
```

## Pharmacokinetics

```yaml
- id: human-half-life-not-established
  analyte: Noopept
  route: Oral and intravenous routes were studied across species; a route-specific human half-life is not available in the accessible abstract
  formulation: GVS-111 / Noopept
  population: Humans in an interspecies pharmacokinetic study; sample size and dose are not available in the accessible abstract
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Elimination was reported to be slower in humans than in rabbits and rats, with considerable individual variability; no numeric human half-life was reported in the accessible abstract.
  sourceId: boyko-2004-pk
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: anxiety-symptoms-active-comparator
  study:
    id: neznamov-teleshova-vascular-traumatic-2005-2006
    design: Randomized active-comparator clinical study; placebo and masking were not reported
    sampleSize: 53
    populationLabels:
      - Mild cognitive disorders of vascular origin
      - Postconcussion syndrome
    comparator: Piracetam 1200 mg/day
    route: Oral
    formulation: Noopept 20 mg/day
    durationDays: 56
    assessmentTime: Repeated weekly assessments through day 56
    comparedSubstances:
      - piracetam
  reportType: measured-assessment
  conceptId: anxiety
  name: Anxiety symptoms
  direction: Decreased
  evidence: Human research
  description: The authors reported improvement in anxiety-related symptoms during Noopept treatment, emerging earlier in the vascular subgroup than in the post-traumatic subgroup; the study lacked a placebo and reported no blinded assessment.
  sourceId: molekul-link-175
  population: Patients with vascular-origin organic emotional-lability/asthenic disorders or postconcussion syndrome
  exposure: Noopept 20 mg/day orally for 56 days versus piracetam 1200 mg/day
  instrument: Unified symptom-severity assessment used by the study for organic disorders
  magnitude: Statistically significant within-group improvement was reported; a validated anxiety-specific effect estimate was not provided.
```

## Outcomes

```yaml
- id: cognitive-scales-active-comparator
  study:
    id: neznamov-teleshova-vascular-traumatic-2005-2006
    design: Randomized active-comparator clinical study; placebo and masking were not reported
    sampleSize: 53
    populationLabels:
      - Mild cognitive disorders of vascular origin
      - Postconcussion syndrome
    comparator: Piracetam 1200 mg/day
    route: Oral
    formulation: Noopept 20 mg/day
    durationDays: 56
    assessmentTime: Through day 56
    comparedSubstances:
      - piracetam
  conceptId: cognitive-task-performance
  name: Global cognitive test performance
  direction: Increased
  evidence: Human research
  description: Both groups showed reported cognitive-scale improvement, but direct Noopept-versus-piracetam comparisons on MMSE, BCRS and CCSE were not significant in the accessible study text. The MMSE narrative contains an internal directional inconsistency, so no numeric effect is encoded.
  sourceId: molekul-link-175
  population: Patients with mild cognitive disorders of vascular or traumatic origin
  exposure: Noopept 20 mg/day for 56 days versus piracetam 1200 mg/day
  instrument: MMSE, BCRS and CCSE
  magnitude: No significant between-treatment difference on the named cognitive scales was reported.
- id: sleep-postconcussion-null
  study:
    id: neznamov-teleshova-vascular-traumatic-2005-2006
    design: Randomized active-comparator clinical study; placebo and masking were not reported
    sampleSize: 53
    populationLabels:
      - Postconcussion syndrome subgroup
    comparator: Piracetam 1200 mg/day
    route: Oral
    formulation: Noopept 20 mg/day
    durationDays: 56
    assessmentTime: Through day 56
    comparedSubstances:
      - piracetam
  conceptId: sleep
  name: Sleep symptoms in postconcussion subgroup
  direction: Variable
  evidence: Human research
  description: In the postconcussion subgroup, the study reported no significant Noopept effect on sleep onset, sleep depth or duration, waking disturbances, or daytime drowsiness.
  sourceId: molekul-link-175
  population: Patients with postconcussion syndrome within the comparative study
  exposure: Noopept 20 mg/day orally for 56 days
  instrument: Study symptom-severity scale
  magnitude: Null finding for the listed sleep symptoms in this subgroup.
- id: poststroke-cognitive-assessment
  study:
    id: amelin-poststroke-noopept-2011
    design: Open prospective controlled study
    sampleSize: 60
    populationLabels:
      - Stroke with mild cognitive impairment
    comparator: Control group described in the abstract; allocation method not specified
    route: Oral
    formulation: Noopept 20 mg/day
    durationDays: 60
    assessmentTime: 2 months
  conceptId: cognitive-task-performance
  name: Post-stroke cognitive performance
  direction: Increased
  evidence: Human research
  description: The abstract reported significant improvement after two months in MMSE scores and lateral and categorical verbal associations in the Noopept group compared with controls; the open design and sparse comparator description limit causal inference.
  sourceId: amelin-2011
  population: Patients with stroke and mild cognitive impairment
  exposure: Noopept 20 mg/day orally for 2 months for the reported endpoint
  instrument: MMSE and lateral/categorical association tasks
  magnitude: Significant group differences were reported without an extractable effect estimate or confidence interval in the abstract.
```

## Mechanisms

```yaml
- title: α7 nicotinic acetylcholine receptor-dependent interneuron activation
  description: In rat hippocampal slices, 5 µM Noopept increased firing of stratum-radiatum GABAergic interneurons and increased spontaneous inhibitory postsynaptic currents in CA1 pyramidal cells; α7-selective antagonists nearly abolished these effects. This supports α7-receptor involvement, not direct agonist binding or a human mechanism.
  sourceId: kondratenko-2022-alpha7
  conceptId: nicotinic-receptor
- title: Low-potency competition at AMPA-receptor ligand sites
  description: In rat-brain radioligand assays, Noopept competed at AMPA-receptor binding sites with an IC50 of 80 ± 5.6 µM. IC50 in this assay is not a Ki or Kd and does not establish clinically relevant receptor occupancy.
  sourceId: firstova-2011-ampa
  conceptId: ampa-receptor
- title: HIF-1 reporter activation and proposed PHD2 interaction
  description: In HEK293 reporter assays, Noopept increased HIF-1-dependent signal while eight other tested transcription-factor reporters were not significantly changed. Docking proposed PHD2 binding, but direct enzyme affinity or inhibition was not measured.
  sourceId: molekul-link-168
- title: Neurotrophin-expression changes in rat hippocampus
  description: Acute and 28-day rat studies reported increased hippocampal NGF and BDNF mRNA after Noopept exposure, with no tolerance to the reported neurotrophic signal. These are molecular endpoints in rats, not evidence of human cognitive benefit.
  sourceId: molekul-link-178
- title: Formation of cyclo-prolylglycine in rats
  description: After 5 mg/kg intraperitoneal GVS-111 in rats, cyclo-prolylglycine increased in brain while parent compound was below HPLC detection at one hour; plasma and brain enzymes formed the cyclic dipeptide in vitro. Human conversion to this metabolite has not been robustly demonstrated.
  sourceId: gudasheva-1997-metabolite
```

## Cautions

```yaml
- title: Blood-pressure elevation in hypertension
  description: The current Russian label lists blood-pressure elevation of unknown frequency in patients with arterial hypertension, mainly severe hypertension. In the 53-patient comparison, two Noopept recipients reportedly withdrew because blood pressure rose and antihypertensive treatment was required.
  sourceId: russia-label-2024
- title: Contraindicated or unestablished populations
  description: The Russian label contraindicates use during pregnancy or breastfeeding, under age 18, in severe hepatic or renal dysfunction, and with allergy to omberacetam or excipients; pediatric efficacy and safety are stated as unestablished.
  sourceId: russia-label-2024
- title: Preclinical toxicology does not establish long-term human safety
  description: Six-month rabbit oral exposures of 10 or 100 mg/kg/day were reported without irreversible pathology in the tested systems, but human sample sizes, duration, and systematic adverse-event evidence are much more limited.
  sourceId: kovalenko-2002-tox
- title: Unregulated-market product quality
  description: European/Australian official-laboratory surveillance detected Noopept in unauthorized products and bulk raw material, including high-purity material and a 20 mg/mL sample. Product identity, strength and contamination risk outside regulated supply chains cannot be inferred from the pharmaceutical literature.
  sourceId: vanhee-2025-surveillance
```

## Claims

```yaml
- id: noopept-alpha7-nicotinic-involvement
  assertion: Noopept-induced changes in rat hippocampal inhibitory transmission involve α7 nicotinic acetylcholine receptors.
  relation: involves
  participants:
    - entityId: substance:noopept
      role: tested-compound
    - entityId: tag:nicotinic-receptor
      role: implicated-alpha7-receptor-subtype
  context: Rat hippocampal slices; 5 µM Noopept; effects were blocked by α-bungarotoxin and methyllycaconitine.
  sourceIds:
    - kondratenko-2022-alpha7
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Antagonist sensitivity supports receptor involvement but does not establish direct Noopept binding, agonism, affinity, or relevance at human exposure.
- id: noopept-ampa-radioligand-competition
  assertion: Noopept competes with an AMPA-receptor radioligand in rat-brain membrane assays at micromolar concentrations.
  relation: competes-at
  participants:
    - entityId: substance:noopept
      role: tested-compound
    - entityId: tag:ampa-receptor
      role: assay-target
  context: In vitro rat-brain radioligand binding; reported IC50 80 ± 5.6 µM.
  sourceIds:
    - firstova-2011-ampa
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The reported IC50 is not a Ki/Kd, is relatively high, and does not establish clinically relevant human receptor occupancy.
```

## Interactions

```yaml
- id: ethanol-interaction-not-established
  name: Ethanol
  otherSlug: ethanol
  summary: The current Russian label states that an interaction with alcohol has not been established; this should not be interpreted as evidence that combined use is safe or interaction-free.
  sourceId: russia-label-2024
  mechanism: No human pharmacokinetic or pharmacodynamic interaction mechanism was established in the label.
  context: Current Russian omberacetam 10-mg tablet labeling.
- id: oatp1b1-oatp1b3-in-vitro
  name: OATP1B1/OATP1B3 substrate interaction potential
  otherSlug: null
  summary: In HepG2 cells, omberacetam at 100-500 µM reduced intracellular atorvastatin accumulation and at 500 µM increased OATP1B1/OATP1B3 content; the investigators judged the interaction clinically insignificant using a Cmax/IC50 approach.
  sourceId: erokhina-2024-oatp
  mechanism: High-concentration in vitro effects on hepatic OATP1B1/OATP1B3 transporter activity or expression were observed.
  context: Cell-based transporter study, not a human drug-drug interaction trial.
- id: concomitant-medicines-evidence-gap
  name: Other medicines and supplements
  otherSlug: null
  summary: Reliable human interaction studies with common medicines or supplements were not located. The Russian label specifically says interactions with hypnotics, antihypertensives and psychostimulants have not been established and advises medical review with concomitant medicines.
  sourceId: russia-label-2024
  context: Absence of an established interaction in labeling is not evidence of compatibility.
```

## Experience links

```yaml
- title: Noopept on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Noopept
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem
  title: "Noopept: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/180496
  kind: Chemical database
  insight: Confirms Noopept/omberacetam identity, CID 180496, formula C17H22N2O4, molecular weight 318.4 g/mol and stereochemically resolved structure.
  limitation: A chemical identity record does not establish clinical efficacy, dosage, human pharmacokinetics or product quality.
  funding: U.S. National Library of Medicine; publication-level funding assessment not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; database record rather than a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: cpg-pubchem
  title: "Cyclo-prolylglycine: PubChem compound record CID 126154"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/126154
  kind: Chemical database
  insight: Confirms cyclo-prolylglycine identity as PubChem CID 126154, formula C7H10N2O2 and molecular weight 154.17 g/mol.
  limitation: Identity does not establish that this metabolite forms in humans after Noopept exposure.
  funding: U.S. National Library of Medicine; publication-level funding assessment not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; database record rather than a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: russia-label-2024
  title: "Noopept: current Russian patient leaflet and instructions for use"
  authors: OTCPharm
  year: 2024
  url: https://noopept.ru/instruction/
  kind: Official product label / registration-holder information
  insight: Registration LP-N(004920)-(RG-RU), 10-mg omberacetam tablets, adult indications, 20-30 mg/day dosing, contraindications, adverse reactions, interaction wording and OTC supply status.
  limitation: Manufacturer-hosted labeling is authoritative for that registered product but is not an independent efficacy study and does not establish status outside Russia.
  funding: Not assessed; product labeling rather than a study.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; product labeling rather than a research publication. The page identifies OTCPharm as the registration holder.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://noopept.ru/instruction/
- id: gudasheva-1996-synthesis
  title: Synthesis and antiamnesic activity of a series of N-acylprolyl-containing dipeptides
  authors: T. A. Gudasheva et al.
  year: 1996
  url: https://doi.org/10.1016/0223-5234(96)80448-X
  kind: Primary medicinal-chemistry study
  insight: Describes synthesis of N-acylprolyl dipeptides and selection of N-phenylacetylprolylglycine ethyl ester for further evaluation.
  limitation: Antiamnesic screening was preclinical; the accessible record does not provide a human exposure or target-affinity result.
  doi: 10.1016/0223-5234(96)80448-X
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: us5439930-patent
  title: N-Phenylacetyl-L-prolylglycine ethyl ester and methods for preparing acylprolyl-containing compounds
  authors: T. A. Gudasheva et al.
  year: 1995
  url: https://patents.google.com/patent/US5439930A/en
  kind: Primary patent / synthesis source
  insight: Describes preparation of N-phenylacetyl-L-proline and coupling with glycine ethyl ester as a route to the Noopept structure.
  limitation: Patent procedures establish synthetic feasibility, not clinical efficacy, purity of commercial products or comparative safety.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: boyko-1996-hplc
  title: The use of the HPLC method for the quantitative determination of a peptide analog of piracetam with nootropic activity and its main metabolites
  authors: S. S. Boyko et al.
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8974563/
  kind: Primary analytical/pharmacokinetic-method study
  insight: Developed an HPLC bioanalytical method and showed rat plasma enzymes formed phenylacetylproline during one-hour in vitro incubation.
  limitation: Rat/in-vitro method work; it does not establish human metabolite fractions or clearance.
  pmid: "8974563"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: gudasheva-1997-metabolite
  title: The major metabolite of dipeptide piracetam analogue GVS-111 in rat brain and its similarity to endogenous neuropeptide cyclo-L-prolylglycine
  authors: T. A. Gudasheva et al.
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9358206/
  kind: Primary animal pharmacokinetic/metabolism study
  insight: In rats, cyclo-prolylglycine increased in brain after GVS-111 and was formed from GVS-111 by plasma/brain enzymes in vitro.
  limitation: Rat data at 5 mg/kg intraperitoneally; the study does not demonstrate the same metabolic pathway or exposure in humans.
  pmid: "9358206"
  doi: 10.1007/BF03189814
  funding: Not assessed; PubMed support indexing is not treated as a funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: boiko-2000-oral-pk
  title: Pharmacokinetics of new nootropic acylprolyldipeptide and its penetration across the blood-brain barrier after oral administration
  authors: S. S. Boiko et al.
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10977920/
  kind: Primary animal pharmacokinetic study
  insight: Rat HPLC data showed oral gastrointestinal absorption, systemic exposure and penetration of unchanged GVS-111 across the blood-brain barrier.
  limitation: Rat data; the abstract does not provide robust quantitative human oral bioavailability or a human half-life.
  pmid: "10977920"
  doi: 10.1007/BF02439270
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: kovalenko-2002-tox
  title: Preclinical study of noopept toxicity
  authors: L. P. Kovalenko et al.
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12025790/
  kind: Primary preclinical toxicology study
  insight: Six-month oral rabbit exposures of 10 or 100 mg/kg/day were reported without irreversible pathology in tested systems; reproductive and immunotoxicity assays were also reported.
  limitation: Preclinical battery with abstract-level access; it cannot establish long-term human safety or rare adverse-event risk.
  pmid: "12025790"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: boyko-2004-pk
  title: Interspecies differences of noopept pharmacokinetics
  authors: S. S. Boyko et al.
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15079908/
  kind: Primary comparative pharmacokinetic study
  insight: Reports progressively slower elimination from rats to rabbits to humans, substantial human variability and no detected human plasma metabolites at the studied exposure.
  limitation: Accessible abstract omits human sample size, dose and numeric PK parameters; no defensible human half-life can be extracted.
  pmid: "15079908"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-link-175
  title: Comparative studies of Noopept and piracetam in the treatment of patients with mild cognitive disorders in organic brain diseases of vascular and traumatic origin
  authors: G. G. Neznamov and E. S. Teleshova
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19234797/
  kind: Human randomized active-comparator study
  insight: Compared Noopept 20 mg/day with piracetam 1200 mg/day for 56 days in 53 patients; both showed reported clinical/cognitive improvement with important null comparator findings.
  limitation: No placebo; masking and randomization method were not reported, 41 completed, subgroups were small, and some translated outcome wording is internally inconsistent.
  pmid: "19234797"
  doi: 10.1007/s11055-009-9128-4
  funding: Not assessed; no inspected funding declaration was available.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; no inspected conflict declaration was available.
  conflictOfInterestStatus: not-assessed
- id: mordyk-2009
  title: Prevention of neuro- and cardiotoxic side effects of tuberculosis chemotherapy with noopept
  authors: A. V. Mordyk et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19565831/
  kind: Human comparative study
  insight: In 60 pulmonary-tuberculosis patients, 30 received Noopept 10 mg twice daily for one month; the abstract reports less anxiety and fewer neuro/cardiotoxic reactions.
  limitation: Abstract-level report with limited allocation, comparator, instrument and effect-size detail; concomitant multidrug tuberculosis therapy complicates attribution.
  pmid: "19565831"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-link-178
  title: Noopept stimulates the expression of NGF and BDNF in rat hippocampus
  authors: R. U. Ostrovskaya et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19240853/
  kind: Primary animal mechanism study
  insight: Acute and 28-day Noopept treatment increased hippocampal neurotrophin-expression measures in rats; chronic treatment did not show tolerance to the reported effect.
  limitation: Rat molecular endpoints do not establish human neurotrophin changes or clinical benefit.
  pmid: "19240853"
  doi: 10.1007/s10517-008-0297-x
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: firstova-2011-ampa
  title: Studying specific effects of nootropic drugs on glutamate receptors in the rat brain
  authors: Iu. Iu. Firstova, E. V. Vasil'eva and G. I. Kovalev
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21476267/
  kind: Primary in-vitro receptor-binding study
  insight: Rat-brain radioligand assays reported Noopept competition at AMPA-receptor sites with IC50 80 ± 5.6 µM.
  limitation: IC50 is not Ki/Kd; the concentration is high and the assay does not establish human receptor occupancy or clinical mechanism.
  pmid: "21476267"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: amelin-2011
  title: Noopept in the treatment of mild cognitive impairment in patients with stroke
  authors: A. V. Amelin, A. Iu. Iliukhina and A. A. Shmonin
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/22500312/
  kind: Human open prospective study
  insight: In 60 post-stroke patients, the abstract reports improved MMSE and verbal-association measures after two months of 20 mg/day Noopept versus controls.
  limitation: Open design, sparse comparator detail and inconsistent duration wording; no extractable effect estimate or confidence interval is provided in the abstract.
  pmid: "22500312"
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: molekul-link-168
  title: Molecular Mechanism Underlying the Action of Substituted Pro-Gly Dipeptide Noopept
  authors: Y. V. Vakhitova, S. V. Sadovnikov, S. S. Borisevich, R. U. Ostrovskaya, T. A. Gudasheva and S. B. Seredenin
  year: 2016
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4837574/
  kind: Primary cell/mechanism study
  insight: HEK293 reporter assays showed selective HIF-1 signal increase; docking proposed PHD2 binding by L-Noopept and an L-N-phenylacetylprolyl metabolite.
  limitation: Cell-reporter and computational evidence; direct PHD2 affinity/inhibition and clinical relevance were not demonstrated.
  pmid: "27099787"
  funding: Russian Federation President grant for leading scientific schools NSh-5923.2014.4, as stated in the inspected full text.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No explicit conflict-of-interest declaration was located in the inspected full text.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC4837574/
- id: kondratenko-2022-alpha7
  title: Effect of nootropic dipeptide noopept on CA1 pyramidal neurons involves α7AChRs on interneurons in hippocampal slices from rat
  authors: R. V. Kondratenko et al.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/36195298/
  kind: Primary ex-vivo mechanism study
  insight: In rat hippocampal slices, α7-selective antagonists nearly abolished Noopept-induced interneuron firing and increased inhibitory input to CA1 pyramidal neurons.
  limitation: Antagonist-sensitive slice physiology does not establish direct receptor binding, affinity or a human mechanism.
  pmid: "36195298"
  doi: 10.1016/j.neulet.2022.136898
  funding: Not assessed; PubMed support indexing is not treated as a funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: erokhina-2024-oatp
  title: The Effect of Original Russian Neurotropic Drugs on Organic Anion Transporting Polypeptides OATP1B1 and OATP1B3
  authors: P. D. Erokhina et al.
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/38198100/
  kind: Primary in-vitro transporter study
  insight: HepG2 experiments found high-concentration omberacetam effects on OATP1B1/OATP1B3-linked atorvastatin uptake; the authors judged predicted clinical relevance insignificant.
  limitation: Cell concentrations of 100-500 µM and model-based extrapolation do not substitute for a human drug-drug interaction study.
  pmid: "38198100"
  doi: 10.1007/s10517-024-05989-1
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: araj-2025-structure
  title: Physicochemical and structural analysis of N-phenylacetyl-L-prolylglycine ethyl ester (Noopept) - An active pharmaceutical ingredient with nootropic activity
  authors: S. K. Araj et al.
  year: 2025
  url: https://doi.org/10.1016/j.jpba.2024.116474
  kind: Primary physicochemical/analytical study
  insight: Characterized Noopept by thermal analysis, liquid/solid-state NMR, microscopy, single-crystal and powder X-ray diffraction, DFT and polymorph screening.
  limitation: Physicochemical work; it does not establish human efficacy, safety, receptor pharmacology or clinical pharmacokinetics.
  pmid: "39298839"
  doi: 10.1016/j.jpba.2024.116474
  funding: Medical University of Warsaw grant 18/F/MG/N/23; X-ray infrastructure supported by a European Union Regional Operational Program, per inspected disclosure.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no known competing financial interests or personal relationships that could have influenced the work.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.sciencedirect.com/science/article/pii/S0731708524005144
- id: vanhee-2025-surveillance
  title: The Occurrence of Illicit Smart Drugs or Nootropics in Europe and Australia and Their Associated Dangers
  authors: C. Vanhee et al.
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/
  kind: Official-laboratory market-surveillance study
  insight: Thirteen official laboratories documented unauthorized nootropics; Noopept appeared in bulk/raw materials and a 20 mg/mL sample, illustrating non-regulated supply risks.
  limitation: Enforcement-biased market sample; it does not estimate population prevalence, and its Russian prescription-status wording conflicts with the current Russian OTC label.
  pmid: "40558871"
  doi: 10.3390/jox15030088
  funding: This research received no external funding, according to the inspected full text.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: Andreas Hackl was disclosed as employed by AGES; remaining authors stated no commercial or financial relationships that could be construed as potential conflicts.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/
- id: clinicaltrials-search-2026
  title: ClinicalTrials.gov search for Noopept, omberacetam or GVS-111
  authors: U.S. National Library of Medicine / ClinicalTrials.gov
  year: 2026
  url: https://clinicaltrials.gov/search?term=Noopept%20OR%20omberacetam%20OR%20GVS-111
  kind: Trial-registry search
  insight: A current search returned no registered study under the searched Noopept, omberacetam or GVS-111 names.
  limitation: Registry absence does not exclude unregistered historical studies, regional registries, alternate names or unpublished research.
  funding: Not applicable to the search result.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to the search result.
  conflictOfInterestStatus: not-assessed
- id: fda-2022-warning
  title: Crystal Clear Supplements warning letter MARCS-CMS 620285
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/crystal-clear-supplements-620285-02042022
  kind: Official regulatory enforcement document
  insight: FDA treated a Noopept powder marketed with disease/function claims as an unapproved new drug whose interstate marketing violated the FD&C Act.
  limitation: Warning letter concerns specific marketed claims/products; it is not a blanket criminal-law ruling on personal possession.
  funding: U.S. federal government regulatory activity.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an agency enforcement document.
  conflictOfInterestStatus: not-assessed
- id: mhra-2014-seizure
  title: Medicines watchdog makes record seizure of experimental smart drugs
  authors: UK Medicines and Healthcare products Regulatory Agency
  year: 2014
  url: https://www.gov.uk/government/news/medicines-watchdog-makes-record-seizure-of-experimental-smart-drugs
  kind: Official regulatory enforcement notice
  insight: MHRA reported seizure of Noopept among cognitive-enhancement medicines in a large 2014 UK enforcement action.
  limitation: A historical seizure notice does not by itself establish every current UK rule on possession, importation, prescribing or product authorization.
  funding: UK government regulatory activity.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an agency enforcement notice.
  conflictOfInterestStatus: not-assessed
- id: australia-poisons-2026
  title: Therapeutic Goods (Poisons Standard—June 2026) Instrument 2026
  authors: Australian Government Department of Health, Disability and Ageing
  year: 2026
  url: https://www.legislation.gov.au/F2026L00633/latest/text
  kind: Official legislation
  insight: Lists OMBERACETAM in Schedule 4, the prescription-only medicines schedule, with index cross-references to Noopept and N-phenylacetyl-L-prolylglycine ethyl ester.
  limitation: The instrument explicitly states scheduling does not itself mean a product is approved, available or efficacious.
  funding: Australian government legislative instrument.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to legislation.
  conflictOfInterestStatus: not-assessed
- id: molekul-profile
  title: "Noopept: Molekul research profile"
  authors: Molekul
  year: 2026
  url: https://molekul.io/compounds/noopept
  kind: Research atlas · accessed 2026
  insight: Provenance of the imported name, working classification and source trail.
  limitation: A secondary discovery resource. This import does not independently verify its findings or count its links as independent studies.
  funding: Not assessed in this import.
- id: molekul-link-169
  title: PubMed PMID 18383733 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/18383733/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-170
  title: ekf.folium.ru document 171 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://ekf.folium.ru/index.php/ekf/article/view/744
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-52
  title: PubMed PMID 7793100 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/7793100/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-171
  title: PubMed PMID 23593416 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/23593416/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-172
  title: pubs.acs.org document 173 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubs.acs.org/doi/10.1021/envhealth.5c00818
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-173
  title: PubMed Central PMC10558480 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10558480/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-174
  title: PubMed PMID 18697252 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/18697252/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-176
  title: PubMed PMID 19938275 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/19938275/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-124
  title: ekf.folium.ru document 125 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://ekf.folium.ru/index.php/ekf/article/download/964/918
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-125
  title: journals.eco-vector.com document 126 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://journals.eco-vector.com/1682-7392/article/view/710758
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-177
  title: PubMed PMID 19008801 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/19008801/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-179
  title: PubMed PMID 11177296 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/11177296/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-180
  title: PubMed PMID 11548439 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/11548439/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
- id: molekul-link-181
  title: PubMed PMID 9606516 — source link captured 2026; metadata pending
  authors: Bibliographic metadata not independently verified
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/9606516/
  kind: Source discovery link · capture year
  insight: This URL appeared in the compound profile's source trail. No study finding is asserted by this reference.
  limitation: Publication title, authors, date, methods, findings, source access and relevance require original-document verification. Multiple links may represent the same study or a related preparation.
  funding: Not assessed in this import.
```

## Legal

```yaml
- jurisdiction: Russia
  activity: Supply of the registered Noopept 10-mg tablet product
  status: The current Russian product leaflet identifies omberacetam as the active ingredient and states that Noopept is supplied without a prescription; registration number LP-N(004920)-(RG-RU) is dated 20 March 2024.
  sourceUrl: https://noopept.ru/instruction/
  asOf: 2026-10-04
- jurisdiction: United States (federal)
  activity: Marketing Noopept with drug claims in interstate commerce
  status: FDA has treated Noopept products promoted for disease or structure/function uses as unapproved new drugs that may not be legally introduced into interstate commerce without approval; this record does not establish a federal prohibition on personal possession.
  sourceUrl: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/crystal-clear-supplements-620285-02042022
  asOf: 2026-10-04
- jurisdiction: Australia
  activity: Therapeutic supply
  status: Omberacetam is listed in Schedule 4 of the June 2026 Poisons Standard, meaning prescription-only control if marketed; the Standard expressly states that scheduling does not itself indicate product approval or availability.
  sourceUrl: https://www.legislation.gov.au/F2026L00633/latest/text
  asOf: 2026-10-04
- jurisdiction: United Kingdom
  activity: Market enforcement involving cognitive-enhancement products
  status: MHRA reported seizure of Noopept products in a 2014 enforcement action involving cognitive-enhancement medicines. The cited notice is historical and does not alone establish every current rule on possession or importation.
  sourceUrl: https://www.gov.uk/government/news/medicines-watchdog-makes-record-seizure-of-experimental-smart-drugs
  asOf: 2014-10-24
- jurisdiction: European Union
  activity: Market authorization / surveillance context
  status: A 2025 General European Official Medicines Control Laboratory Network study described Noopept as not authorized in the EU and documented unauthorized Noopept-containing material; member-state product classification and enforcement can differ.
  sourceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12193813/
  asOf: 2025-06-06
```

