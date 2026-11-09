---
slug: bacopa-monnieri
name: Bacopa monnieri
subtitle: Botanical and extract
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Botanical and extract
tags:
  - memory-performance-effect
  - working-memory-state
  - anxiety
  - hippocampal-dendritic-growth
  - stress-reactivity
  - memory-free-recall
  - attention-speed
  - male-fertility
  - memory-performance
  - delayed-word-recall
  - morphine-induced-hyperactivity
  - attention
  - cognitive-performance
  - serotonin
  - cyp1a2
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-01a08b04-2e9f-71e7-b1cb-d68cf0034550
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2e9f-71e7-b1cb-d68cf0034550
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
  - externalWikiLinks
x-order: 1274
---

## Summary

Bacopa monnieri is an herb studied for memory and cognitive performance. Human studies use specific extracts over several weeks.

## Description

Randomized studies used standardized extracts at 300–600 mg/day for 6–12 weeks or 320/640 mg single doses. Chronic trials reported improvements in selected memory, attention or working-memory measures, whereas an acute 300 mg trial found no cognitive change and a 450 mg 12-week trial found no significant cognitive differences. Animal studies report antioxidant, serotonergic, dendritic and reversible antifertility findings; an in-vitro CYP assay raises interaction concerns.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
- label: KeenMind chronic human trial (PMID 11498727)
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: Bacopa monnieri extract (KeenMind)
  formulation: Standardized extract
  route: Oral
  frequency: Daily
  duration: 12 weeks
  population: Healthy adults
  purpose: Cognitive research exposure
  sourceCategory: research
  note: Trial dose; effects were maximal at 12 weeks.
  sourceId: pubmed-11498727
- label: Bacopa cognitive trial (PMID 18683852)
  amount: 300 mg/day
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: KeenMind Bacopa monnieri extract
  formulation: 2 x 150 mg/day
  route: Oral
  frequency: Daily
  duration: 90 days
  population: 107 healthy participants recruited; 62 completed
  purpose: Working-memory research exposure
  sourceCategory: research
  note: Trial dose; completion was 62/107 with 80% treatment compliance.
  sourceId: pubmed-18683852
- label: Elderly volunteer dose-ranging trial (PMID 23320031)
  amount: 300 or 600 mg/day
  quantity: 300
  quantityMax: 600
  unit: mg/day
  ingredient: Standardized Bacopa monnieri extract
  formulation: Proprietary dried extract tablet
  route: Oral
  frequency: Once daily
  duration: 12 weeks
  population: 60 healthy elderly volunteers
  purpose: Attention, working memory and ERP research exposure
  sourceCategory: research
  note: Both doses were studied against placebo; full text confirms the standardized tablet preparation.
  sourceId: pubmed-23320031
- label: Acute CDRI 08 crossover doses (PMIDs 23281132 and 23788517)
  amount: 320 or 640 mg
  quantity: 320
  quantityMax: 640
  unit: mg
  ingredient: Bacopa monnieri CDRI 08 (KeenMind)
  formulation: Standardized extract
  route: Oral
  frequency: Single dose with 7-day washout
  duration: Acute assessments at 1–2 h and repeated cognitive battery
  population: Healthy adults (24 in sustained-performance study; 17 in stress-reactivity study)
  purpose: Acute cognition and stress-reactivity research exposure
  sourceCategory: research
  note: The 320 mg arm showed selected acute cognitive signals; findings require replication.
  sourceId: pubmed-23281132
- label: Bacognize medical-student trial (PMID 27803728)
  amount: 150 mg twice daily
  quantity: 300
  quantityMax: null
  unit: mg/day
  ingredient: Bacopa monnieri Bacognize extract
  formulation: Standardized extract
  route: Oral
  frequency: Twice daily
  duration: 6 weeks
  population: 60 medical students
  purpose: Memory research exposure
  sourceCategory: research
  note: Full text reports 150 mg standardized methanolic extract twice daily (four bacosides totaling 11.38% by HPLC) for a 45-day treatment run, summarized in the abstract as six weeks.
  sourceId: pubmed-27803728
- label: Mouse fertility study (PMID 19041444)
  amount: 250 mg/kg/day
  quantity: 250
  quantityMax: null
  unit: mg/kg/day
  ingredient: Bacopa monnieri extract
  formulation: Plant extract
  route: Oral
  frequency: Daily
  duration: 28 or 56 days, followed by withdrawal recovery
  population: Male Parkes mice
  purpose: Reproductive-toxicity research exposure
  sourceCategory: research
  note: Animal dose; not a human dose.
  sourceId: pubmed-19041444
```

## Pharmacokinetics

```yaml
[]
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: bacopa-memory-chronic-11498727
  conceptId: memory-performance-effect
  name: Memory performance
  direction: Increased
  evidence: Human research
  description: Twelve weeks of 300 mg/day KeenMind improved visual-information processing speed, learning rate and AVLT memory consolidation versus placebo; maximal effects were reported at week 12.
  sourceId: pubmed-11498727
  population: Healthy adults in a double-blind placebo-controlled trial
  exposure: 300 mg/day for 12 weeks
  instrument: Inspection-time task and Auditory Verbal Learning Test
  magnitude: Significant on specified measures; numeric effect size not reported in abstract
  reportType: measured-assessment
- id: bacopa-memory-null-12404571
  conceptId: memory-performance-effect
  name: Acute cognitive performance
  direction: Variable
  evidence: Human research
  description: A single 300 mg dose produced no significant change on any neuropsychological test at 2 hours post-dose.
  sourceId: pubmed-12404571
  population: 38 healthy participants (18 Bacopa, 20 placebo)
  exposure: 300 mg single oral dose
  instrument: Neuropsychological test battery
  magnitude: No significant change reported
  reportType: measured-assessment
- id: bacopa-working-memory-18683852
  conceptId: working-memory-state
  name: Working memory
  direction: Increased
  evidence: Human research
  description: After 90 days of 300 mg/day KeenMind, the working-memory factor and spatial working-memory accuracy improved; false positives on rapid visual information processing were reduced.
  sourceId: pubmed-18683852
  population: 107 recruited healthy participants; 62 completed
  exposure: 300 mg/day for 90 days
  instrument: Cognitive Drug Research battery
  magnitude: Directional improvement; effect size not reported in abstract
  reportType: measured-assessment
- id: bacopa-anxiety-23354535
  conceptId: anxiety
  name: State anxiety
  direction: Variable
  evidence: Human research
  description: A 12-week 450 mg/day trial found no significant cognitive differences and only a trend toward lower state anxiety versus placebo.
  sourceId: pubmed-23354535
  population: 72 healthy adults aged 35–60
  exposure: 450 mg/day for 12 weeks
  instrument: Cognitive tests and state/trait anxiety measures
  magnitude: Trend only for state anxiety; no significant cognitive differences
  reportType: measured-assessment
- id: bacopa-dendritic-arborization-21892534
  conceptId: hippocampal-dendritic-growth
  name: Hippocampal CA3 dendritic arborization
  direction: Increased
  evidence: Limited research
  description: Standardized Bacopa extract improved spatial learning and memory retention in rats; four- and six-week treatment increased CA3 dendritic intersections and branching points, whereas two weeks did not.
  sourceId: pubmed-21892534
  population: Adult Wistar rats
  exposure: 20, 40 or 80 mg/kg/day for 2, 4 or 6 weeks
  instrument: T-maze, passive avoidance and Golgi-stained CA3 morphology
  magnitude: Significant dendritic increases after 4–6 weeks; numeric effects not stated in abstract
  reportType: measured-assessment
- id: bacopa-stress-reactivity-23788517
  conceptId: stress-reactivity
  name: Multitasking stress reactivity and mood
  direction: Decreased
  evidence: Human research
  description: In 17 healthy volunteers, acute CDRI 08 produced selected positive cognitive and mood effects and reduced salivary cortisol during a multitasking framework.
  sourceId: pubmed-23788517
  population: 17 healthy volunteers
  exposure: 320 or 640 mg single oral CDRI 08 dose
  instrument: Multitasking framework, mood measures and salivary cortisol
  magnitude: Effects at 1–2 hours; numeric estimates not stated in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: bacopa-meta-memory-22747190
  conceptId: memory-free-recall
  name: Memory free recall
  direction: Increased
  evidence: Human research
  description: A systematic review of six randomized trials (300–450 mg/day for 12 weeks) found improvement on 9 of 17 memory free-recall tests, with little evidence in other domains.
  sourceId: pubmed-22747190
  population: Adults without dementia or significant cognitive impairment
  exposure: Standardized Bacopa extracts, 300–450 mg/day for 12 weeks
  instrument: Validated cognitive tests
  magnitude: 9/17 memory free-recall tests improved across trials
  reportType: measured-assessment
- id: bacopa-meta-trail-b-24252493
  conceptId: attention-speed
  name: Trail Making B and choice reaction time
  direction: Increased
  evidence: Human research
  description: A meta-analysis of nine chronic randomized trials (518 subjects; 437 eligible for pooled analysis) found shorter Trail Making B time and improved choice reaction time.
  sourceId: pubmed-24252493
  population: Healthy or cognitively intact human trial participants
  exposure: Standardized Bacopa extracts for at least 12 weeks
  instrument: Trail Making Test B and choice reaction time
  magnitude: Trail B weighted mean difference −17.9 ms (95% CI −24.6 to −11.2); choice reaction time −10.6 ms (95% CI −12.1 to −9.2)
  reportType: measured-assessment
- id: bacopa-fertility-mouse-19041444
  conceptId: male-fertility
  name: Male fertility
  direction: Decreased
  evidence: Limited research
  description: Oral 250 mg/kg/day Bacopa reduced sperm number, motility, viability and morphology and suppressed fertility in male mice; reproductive changes recovered after 56 days of withdrawal.
  sourceId: pubmed-19041444
  population: Male Parkes mice
  exposure: 250 mg/kg/day for 28 or 56 days
  instrument: Sperm, testicular histology and fertility endpoints
  magnitude: Significant reductions; reversible after withdrawal
  reportType: measured-assessment
- id: bacopa-medical-student-memory-27803728
  conceptId: memory-performance
  name: Medical-student cognitive tests
  direction: Increased
  evidence: Human research
  description: Six weeks of Bacognize improved tests relating to cognitive function in 60 medical students; serum calcium increased but remained within the normal range.
  sourceId: pubmed-27803728
  population: 60 second-year medical students
  exposure: 150 mg standardized Bacopa extract twice daily for 6 weeks
  instrument: Baseline and post-trial memory and biochemical tests
  magnitude: Significant improvement reported; numeric effects not stated in abstract
  reportType: measured-assessment
- id: bacopa-effect-size-review-23043278
  conceptId: delayed-word-recall
  name: Delayed word recall effect size
  direction: Increased
  evidence: Human research
  description: A review benchmarking healthy-human nutraceutical trials reported the highest Bacopa cognitive effect size as Cohen d=0.95 for delayed word recall.
  sourceId: pubmed-23043278
  population: Healthy participants in double-blind placebo-controlled Bacopa studies
  exposure: Chronic standardized Bacopa extracts
  instrument: Delayed word recall tests
  magnitude: Highest reported Bacopa effect size Cohen d=0.95
  reportType: measured-assessment
- id: bacopa-morphine-hyperactivity-22105846
  conceptId: morphine-induced-hyperactivity
  name: Morphine-induced locomotor activity
  direction: Decreased
  evidence: Limited research
  description: In mice, oral n-butanol Bacopa extract reduced morphine-induced hyperactivity and associated striatal dopamine/serotonin turnover.
  sourceId: pubmed-22105846
  population: Mice
  exposure: 5, 10 or 15 mg/kg extract 60 minutes before morphine
  instrument: Locomotor activity and striatal monoamine assays
  magnitude: Significant reduction reported; numeric effects not stated in abstract
  reportType: measured-assessment
- id: bacopa-attention-23320031
  conceptId: attention
  name: Attention and cognitive processing
  direction: Increased
  evidence: Human research
  description: In 60 healthy elderly volunteers, 300 or 600 mg/day for 12 weeks improved working-memory indices and reduced N100/P300 latencies; plasma AChE activity was suppressed.
  sourceId: pubmed-23320031
  population: 60 healthy elderly volunteers
  exposure: 300 or 600 mg/day for 12 weeks
  instrument: Memory tests and N100/P300 event-related potentials
  magnitude: Numeric between-group effects not included in abstract
  reportType: measured-assessment
- id: bacopa-acute-cognitive-23281132
  conceptId: cognitive-performance
  name: Sustained cognitive performance
  direction: Increased
  evidence: Human research
  description: In 24 healthy volunteers, acute 320 mg CDRI 08 improved selected repetitions of a cognitively demanding battery; 640 mg did not show the same pattern.
  sourceId: pubmed-23281132
  population: 24 healthy volunteers
  exposure: 320 or 640 mg single oral CDRI 08 dose
  instrument: Cognitive Demand Battery
  magnitude: Improvement at repetitions 1, 2 and 4 for the 320 mg arm; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Antioxidant and metal-chelation activity
  description: Alcohol and hexane Bacopa fractions reduced FeSO4- and cumene-hydroperoxide-induced lipid peroxidation in vitro; the authors proposed metal chelation and chain-breaking mechanisms, with dose dependence.
  sourceId: pubmed-8792640
- title: Serotonergic and cholinergic changes in preclinical models
  description: In postnatal rats, 40 mg/kg/day ethanolic extract improved learning and memory while increasing serotonin and TPH2/SERT expression; in elderly humans, 300/600 mg/day suppressed plasma AChE activity.
  sourceId: pubmed-21129470
- title: CYP inhibition in vitro
  description: Standardized Bacopa extract inhibited CYP2C19, CYP2C9, CYP1A2 and CYP3A4 in recombinant human-enzyme assays; isolated bacosides showed negligible inhibition.
  sourceId: pubmed-24566323
- title: Hippocampal dendritic remodeling
  description: In adult rats, four- and six-week Bacopa extract treatment increased CA3 dendritic branching and intersections alongside improved spatial learning, supporting a structural plasticity mechanism.
  sourceId: pubmed-21892534
- title: Bacoside A protection in smoke-exposed rat brain
  description: A review of controlled rat experiments reports that bacoside A countered cigarette-smoke-associated oxidative, mitochondrial, neurotransmitter and apoptotic changes; functional human translation remains unestablished.
  sourceId: pubmed-26413118
- title: Standardization by validated bacoside HPLC assay
  description: A validated quantitative HPLC method for KeenMind highlights that total bacoside values depend on which closely related saponins are included, affecting cross-product comparability.
  sourceId: pubmed-26448776
```

## Cautions

```yaml
- title: Reproductive toxicity signal in male mice
  description: Bacopa at 250 mg/kg/day caused reversible suppression of spermatogenesis and fertility in male mice; human fertility risk is unestablished.
  sourceId: pubmed-19041444
- title: Potential herb-drug interaction via CYP inhibition
  description: In vitro extract concentrations reduced CYP3A4, CYP2C9 and CYP2C19 activity; this is a mechanistic interaction signal, not proof of a clinical interaction.
  sourceId: pubmed-24566323
- title: Gastrointestinal symptoms reported in prior human work
  description: The full text of the elderly volunteer study cites digestive problems and flu-like symptoms in earlier 300 mg/day Bacopa work; those events were not the primary outcome of PMID 23320031.
  sourceId: pubmed-23320031
```

## Claims

```yaml
- id: bacopa-claim-chronic-memory-22747190
  assertion: Standardized Bacopa extracts may improve selected memory free-recall outcomes after chronic use.
  relation: associated-with
  participants:
    - entityId: substance:bacopa-monnieri
      role: intervention
    - entityId: tag:memory-free-recall
      role: pooled endpoint
  context: Six-trial systematic review; extracts and tests varied.
  sourceIds:
    - pubmed-22747190
  conflictingSourceIds:
    - pubmed-23354535
  assessment: not-formally-assessed
  limitation: Evidence was limited to a small, heterogeneous trial base and did not establish all cognitive domains.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: optihealth-substance-01a08b04-2e9f-71e7-b1cb-d68cf0034550
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2e9f-71e7-b1cb-d68cf0034550
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: pubmed-8792640
  title: "Bacopa monniera Linn. as an antioxidant: mechanism of action."
  authors: Y B Tripathi, S Chaurasia, E Tripathi, A Upadhyay, G P Dubey
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8792640/
  kind: PubMed publication
  insight: Bacopa monniera, Linn.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "8792640"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-21892534
  title: Enhanced dendritic arborization of hippocampal CA3 neurons by Bacopa monniera extract treatment in adult rats.
  authors: Venkata Ramana Vollala, Subramanya Upadhya, Satheesha Nayak
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21892534/
  kind: PubMed publication
  insight: "OBJECTIVE: Bacopa monniera (BM), a traditional Ayurvedic medicine has been used in treatment for a number of disorders, particularly those involving anxiety, intellect and poor memory."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21892534"
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-21129470
  title: "Bacopa monniera leaf extract up-regulates tryptophan hydroxylase (TPH2) and serotonin transporter (SERT) expression: implications in memory formation."
  authors: Prisila Dulcy Charles, Ganesh Ambigapathy, Pitchairaj Geraldine, Mohammad Abdulkadar Akbarsha, Koilmani Emmanuvel Rajan
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21129470/
  kind: PubMed publication
  insight: "AIM OF THE STUDY: To examine the effect of Bacopa monniera leaf ethanolic extract (BMEE) on the serotonergic system of postnatal rats with reference to learning and memory."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21129470"
  doi: 10.1016/j.jep.2010.11.045
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22105846
  title: A Bacoside containing Bacopa monnieri extract reduces both morphine hyperactivity plus the elevated striatal dopamine and serotonin turnover.
  authors: Khalid Rauf, Fazal Subhan, Robert D E Sewell
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22105846/
  kind: PubMed publication
  insight: Bacopa monnieri (BM) has been used in Ayurvedic medicine as a nootropic, anxiolytic, antiepileptic and antidepressant.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22105846"
  doi: 10.1002/ptr.3631
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-22747190
  title: "The cognitive-enhancing effects of Bacopa monnieri: a systematic review of randomized, controlled human clinical trials."
  authors: Matthew P Pase, James Kean, Jerome Sarris, Chris Neale, Andrew B Scholey, Con Stough
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22747190/
  kind: PubMed publication
  insight: "OBJECTIVES: Traditional knowledge suggests that Bacopa monnieri enhances cognitive performance."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22747190"
  doi: 10.1089/acm.2011.0367
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-24252493
  title: Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract.
  authors: Chuenjid Kongkeaw, Piyameth Dilokthornsakul, Phurit Thanarangsarit, Nanteetip Limpeanchob, C Norman Scholfield
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24252493/
  kind: PubMed publication
  insight: "ETHNOPHARMACOLOGICAL RELEVANCE: Bacopa monnieri has a long history in Ayurvedic medicine for neurological and behavioral defects."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24252493"
  doi: 10.1016/j.jep.2013.11.008
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-8b00f5398f64
  title: A Randomized, Double-Blind Study Assessing Changes in Cognitive Function in Indian School Children Receiving a Combination of Bacopa monnieri and Micronutrient Supplementation vs. Placebo (2017)
  authors: Not established
  year: 2017
  url: https://www.frontiersin.org/articles/10.3389/fphar.2017.00678/full
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-27803728
  title: "Efficacy of Standardized Extract of Bacopa monnieri (Bacognize®) on Cognitive Functions of Medical Students: A Six-Week, Randomized Placebo-Controlled Trial."
  authors: Navneet Kumar, L G Abichandani, Vijay Thawani, K J Gharpure, M U R Naidu, G Venkat Ramana
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27803728/
  kind: PubMed publication
  insight: Rationale.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "27803728"
  doi: 10.1155/2016/4103423
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23788517
  title: An acute, double-blind, placebo-controlled cross-over study of 320 mg and 640 mg doses of Bacopa monnieri (CDRI 08) on multitasking stress reactivity and mood.
  authors: Sarah Benson, Luke A Downey, Con Stough, Mark Wetherell, Andrea Zangara, Andrew Scholey
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/23788517/
  kind: PubMed publication
  insight: Little research exists in humans concerning the anxiolytic, antidepressant, sedative, and adaptogenic actions the traditional Ayurvedic medicine Bacopa monnieri (BM) possesses in addition to its documented cognitive-enhancing effects.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23788517"
  doi: 10.1002/ptr.5029
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23281132
  title: An acute, double-blind, placebo-controlled crossover study of 320 mg and 640 mg doses of a special extract of Bacopa monnieri (CDRI 08) on sustained cognitive performance.
  authors: Luke A Downey, James Kean, Fiona Nemeh, Angela Lau, Alex Poll, Rebecca Gregory, Margaret Murray, Johanna Rourke, Brigit Patak, Matthew P Pase, Andrea Zangara, Justine Lomas, Andrew Scholey, Con Stough
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23281132/
  kind: PubMed publication
  insight: Standardized extracts of the traditional Ayurvedic medicine Bacopa monnieri (BM) (Brahmi) have been recently shown to have cognitive enhancing effects in chronic administration studies.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23281132"
  doi: 10.1002/ptr.4864
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23354535
  title: Brahmi for the better? New findings challenging cognition and anti-anxiety effects of Brahmi (Bacopa monniera) in healthy adults.
  authors: Vidya Sathyanarayanan, Tinku Thomas, Suzanne J L Einöther, Rajendra Dobriyal, M K Joshi, Srinivasan Krishnamachari
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23354535/
  kind: PubMed publication
  insight: "RATIONALE: A number of studies have indicated positive effects of long-term administration (3 months) of Bacopa monniera (Brahmi) on various cognitive functions especially memory and anxiety."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23354535"
  doi: 10.1007/s00213-013-2978-z
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23320031
  title: Effects of 12-Week Bacopa monnieri Consumption on Attention, Cognitive Processing, Working Memory, and Functions of Both Cholinergic and Monoaminergic Systems in Healthy Elderly Volunteers.
  authors: Tatimah Peth-Nui, Jintanaporn Wattanathorn, Supaporn Muchimapura, Terdthai Tong-Un, Nawanant Piyavhatkul, Poonsri Rangseekajee, Kornkanok Ingkaninan, Sakchai Vittaya-Areekul
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23320031/
  kind: PubMed publication
  insight: At present, the scientific evidence concerning the effect of Bacopa monnieri on brain activity together with working memory is less available.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23320031"
  doi: 10.1155/2012/606424
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-12404571
  title: The acute effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy normal subjects.
  authors: P. J. Nathan, J. Clarke, J. Lloyd, C. W. Hutchison, L. Downey, C. Stough
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/12404571/
  kind: PubMed publication
  insight: The Ayurvedic medicine Bacopa monniera (Brahmi) has been shown to exert cognitive enhancing effects in animals.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12404571"
  doi: 10.1002/hup.306
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-d6488a509b5b
  title: |-
    Chronic Effects of Brahmi (Bacopa monnieri)
    on Human Memory
  authors: Not established
  year: 2026
  url: https://www.wellcorps.com/files/MemoryEffectsofBacopaMonnieri.pdf
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-11498727
  title: The chronic effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy human subjects.
  authors: C Stough, J Lloyd, J Clarke, L A Downey, C W Hutchison, T Rodgers, P J Nathan
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11498727/
  kind: PubMed publication
  insight: "RATIONALE: Extracts of Bacopa monniera have been reported to exert cognitive enhancing effects in animals."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "11498727"
  doi: 10.1007/s002130100815
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-18683852
  title: "Examining the nootropic effects of a special extract of Bacopa monniera on human cognitive functioning: 90 day double-blind placebo-controlled randomized trial."
  authors: Con Stough, Luke A Downey, Jenny Lloyd, Beata Silber, Stephanie Redman, Chris Hutchison, Keith Wesnes, Pradeep J Nathan
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18683852/
  kind: PubMed publication
  insight: While Ayurvedic medicine has touted the cognitive enhancing effects of Bacopa monniera for centuries, there is a need for double-blind placebo-controlled investigations.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "18683852"
  doi: 10.1002/ptr.2537
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-19041444
  title: Evaluation of antifertility potential of Brahmi in male mouse.
  authors: Akanksha Singh, Shio Kumar Singh
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19041444/
  kind: PubMed publication
  insight: "BACKGROUND: The purpose of the present study was to evaluate the effect of Bacopa monnieri (Brahmi) on fertility of male laboratory mouse."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19041444"
  doi: 10.1016/j.contraception.2008.07.023
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26413118
  title: "Bacoside A: Role in Cigarette Smoking Induced Changes in Brain."
  authors: G Vani, K Anbarasi, C S Shyamaladevi
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26413118/
  kind: PubMed publication
  insight: Cigarette smoking (CS) is a major health hazard that exerts diverse physiologic and biochemical effects mediated by the components present and generated during smoking.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26413118"
  doi: 10.1155/2015/286137
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-26448776
  title: Validation of Quantitative HPLC Method for Bacosides in KeenMind.
  authors: Ashley Dowell, George Davidson, Dilip Ghosh
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26448776/
  kind: PubMed publication
  insight: Brahmi (Bacopa monnieri) has been used by Ayurvedic medical practitioners in India for almost 3000 years.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26448776"
  doi: 10.1155/2015/696172
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-23043278
  title: "Cognitive effects of two nutraceuticals Ginseng and Bacopa benchmarked against modafinil: a review and comparison of effect sizes."
  authors: Chris Neale, David Camfield, Jonathon Reay, Con Stough, Andrew Scholey
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23043278/
  kind: PubMed publication
  insight: Over recent years there has been increasing research into both pharmaceutical and nutraceutical cognition enhancers. Here we aimed to calculate the effect sizes of positive cognitive effect of the pharmaceutical modafinil in order to benchmark the effect of two widely used nutraceuticals Ginseng and Bacopa (which have consistent acute and chronic cognitive effects, respectively).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23043278"
  doi: 10.1111/bcp.12002
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-24566323
  title: Inhibition of human cytochrome P450 enzymes by Bacopa monnieri standardized extract and constituents.
  authors: Seetha Ramasamy, Lik Voon Kiew, Lip Yong Chung
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24566323/
  kind: PubMed publication
  insight: Bacopa monnieri and the constituents of this plant, especially bacosides, possess various neuropharmacological properties.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24566323"
  doi: 10.3390/molecules19022588
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Bacopa_monnieri
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Bacopa+Monnieri
  title: Examine
```
