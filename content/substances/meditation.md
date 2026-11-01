---
slug: meditation
name: Meditation
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Reddit index entry
tags:
- reddit-index
accent: '#a9b993'
reviewedAt: '2026-11-01'
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: reddit-index-meditation
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: reddit-index-meditation
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
- externalWikiLinks
- references
- legal
---

## Summary

Meditation includes brief laboratory sessions, multi-week mindfulness courses, and intensive retreats. Linked studies report task-specific changes in cognitive control, working memory, sustained attention, or depression symptoms; expectancy effects, non-randomized designs, and intensive retreat settings limit generalization. [reddit-pmid-26637968] [reddit-pmid-26462570] [reddit-pmid-23538911] [reddit-pmid-20483826] [reddit-pmid-26085853]

## Description

This page retains the Reddit index source trail and maps each linked PubMed/PMC publication to its studied meditation exposure, population, measured endpoint, and design. Meditation practices and doses are heterogeneous; the records do not establish a single pharmacologic dose or a universal cognitive effect.

## Evidence note

Reviewed 6 PubMed abstracts and retrieved full text for PMC3132583 (PMID 20483826) and PMC4465797 (PMID 26085853). The indexed evidence spans single-session experiments, a 2-week course, an 8-week MBCT course, and a 3-month intensive retreat. Non-PubMed links remain discovery leads; funding and conflicts were not available from the reviewed abstract/full-text passages.

## Doses

```yaml
- label: Focused-attention or open-monitoring session
  amount: Single brief bout; duration not reported in abstract
  quantity: null
  quantityMax: null
  unit: session
  ingredient: Meditation practice
  formulation: Focused attention meditation (FAM) or open monitoring meditation (OMM)
  route: Behavioral practice
  frequency: Single session
  duration: Acute laboratory experiment
  population: Healthy adults
  purpose: Compare cognitive-control states after FAM versus OMM
  sourceCategory: research
  note: The abstract does not provide session duration or sample size; global-precedence attention was unchanged, while congruency effects differed by practice.
  sourceId: reddit-pmid-26637968
- label: Short-term focused-attention meditation
  amount: 20 minutes per session
  quantity: 20
  quantityMax: null
  unit: minutes/session
  ingredient: Meditation practice
  formulation: Focused-attention meditation with positive or negative suggestions
  route: Behavioral practice
  frequency: Once daily
  duration: 3 consecutive days
  population: 59 healthy meditation-naive volunteers
  purpose: Randomized single-blind study of meditation and expectancy effects on executive tasks
  sourceCategory: research
  note: Expectancy instructions were experimentally manipulated; this is a research protocol, not a recommended practice dose.
  sourceId: reddit-pmid-26462570
- label: Mindfulness training course
  amount: Course duration and practice dose not reported in abstract
  quantity: null
  quantityMax: null
  unit: course
  ingredient: Mindfulness training
  formulation: Two-week mindfulness-training course
  route: Behavioral practice
  frequency: Course schedule not reported in abstract
  duration: 2 weeks
  population: Participants in a randomized controlled investigation
  purpose: Assess working memory capacity, GRE reading comprehension, and mind wandering
  sourceCategory: research
  note: The abstract reports improved GRE reading-comprehension and working-memory outcomes with reduced mind wandering; exact contact hours are not stated.
  sourceId: reddit-pmid-23538911
- label: Brief meditation intervention
  amount: 20 minutes
  quantity: 20
  quantityMax: null
  unit: minutes/session
  ingredient: Meditation practice
  formulation: Secular meditation intervention
  route: Behavioral practice
  frequency: Single intervening task
  duration: Acute pre/post experiment
  population: 120 undergraduates in Study 1 and 90 undergraduates in Study 2
  purpose: Test reduction in habitual responding
  sourceCategory: research
  note: Meditation was compared with rest or a cognitive control; the study reported reduced habitual responding on Stroop/category-generation tasks, with one word-production measure null.
  sourceId: reddit-pmid-15819448
- label: Mindfulness-based cognitive therapy course
  amount: Weekly 2 h 15 min group session plus 45 min/day home practice on 6 days/week
  quantity: 135
  quantityMax: null
  unit: minutes/group session
  ingredient: Mindfulness-based cognitive therapy
  formulation: Eight-week MBCT course (body scan, breathing space, mindful movement, sitting meditation)
  route: Behavioral practice
  frequency: Weekly group session plus home practice
  duration: 8 weeks
  population: 23 adults with acute major depressive disorder; matched sertraline cohort n=20
  purpose: Pilot comparison of MBCT monotherapy with sertraline
  sourceCategory: research
  note: Full text reports 25-minute sitting meditations, 25-minute mindful movement, and 45 minutes/day home practice on six additional days; five MBCT participants attended fewer than five sessions.
  sourceId: reddit-pmid-26085853
- label: Intensive Shamatha meditation retreat
  amount: Approximately 5 hours/day Shamatha plus 45 minutes/day complementary practice
  quantity: 5
  quantityMax: null
  unit: hours/day
  ingredient: Meditation practice
  formulation: Intensive Shamatha retreat with complementary compassion/kindness practices
  route: Behavioral practice
  frequency: Daily
  duration: 3 months
  population: 60 experienced meditators randomized to retreat-first or waiting-list control groups (complete-data analyses smaller)
  purpose: Test visual discrimination and sustained-attention training effects
  sourceCategory: research
  note: Full text reports two group sessions, solitary practice, and weekly instructor meetings; participants had prior retreat experience and paid for room/board.
  sourceId: reddit-pmid-20483826
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
- id: meditation-effect-cognitive-control-state-26637968
  conceptId: perception
  name: Cognitive-control state
  direction: Variable
  evidence: Human research
  description: Focused-attention and open-monitoring meditation produced different congruency effects while global-precedence attention was unchanged in a single-bout experiment.
  sourceId: reddit-pmid-26637968
  population: Healthy adults
  exposure: Single bout of FAM or OMM before a global-local task
  instrument: Global-local task
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-meditation-cognitive-control-26637968
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Global-precedence effect was unaffected by meditation type, but the congruency effect was larger after open-monitoring than focused-attention meditation, indicating practice-specific cognitive-control states.
  sourceId: reddit-pmid-26637968
  population: Healthy adults
  exposure: Single bout of focused-attention or open-monitoring meditation
  instrument: Global-local task
  magnitude: null
  reportType: measured-assessment
- id: reddit-meditation-executive-function-26462570
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: In 59 meditation-naive volunteers trained for 20 minutes on three days, positive or negative suggestions substantially affected interference control and verbal fluency; meditation itself showed a small verbal-fluency effect.
  sourceId: reddit-pmid-26462570
  population: 59 healthy meditation-naive volunteers
  exposure: 20-minute focused-attention sessions on 3 consecutive days with manipulated expectations
  instrument: Stroop, d2, figural and verbal fluency tasks
  magnitude: null
  reportType: measured-assessment
- id: reddit-meditation-working-memory-23538911
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: A randomized 2-week mindfulness course improved GRE reading-comprehension scores and working-memory capacity while reducing mind wandering; mediation analyses linked performance gains to reduced mind wandering in distraction-prone participants.
  sourceId: reddit-pmid-23538911
  population: Participants in a randomized controlled mindfulness-training study
  exposure: Two-week mindfulness-training course
  instrument: GRE reading comprehension and working-memory task
  magnitude: null
  reportType: measured-assessment
- id: reddit-meditation-habitual-responding-15819448
  conceptId: attention
  name: Attention
  direction: Decreased
  evidence: Human research
  description: Across two undergraduate experiments, a 20-minute meditation intervention reduced habitual responding on Stroop and category-generation tasks; the word-production measure in Study 1 was not significant.
  sourceId: reddit-pmid-15819448
  population: 120 undergraduates in Study 1 and 90 in Study 2
  exposure: 20-minute meditation, rest, or cognitive-control intervention
  instrument: Stroop and category-generation/word-production tasks
  magnitude: null
  reportType: measured-assessment
- id: reddit-meditation-depression-26085853
  conceptId: depression-severity
  name: Depression Severity
  direction: Decreased
  evidence: Human research
  description: In an open-label, nonrandomized pilot, both 8-week MBCT and sertraline cohorts improved HAMD-17 scores; between-group HAMD change was not different, while QIDS-SR16 improvement favored MBCT.
  sourceId: reddit-pmid-26085853
  population: 23 MBCT participants with acute MDD and matched sertraline cohort n=20 (outcome analyses n=19 and n=17)
  exposure: Eight-week MBCT course versus sertraline monotherapy
  instrument: HAMD-17 and QIDS-SR16
  magnitude: HAMD between-group t(34)=1.42, p=.165; QIDS-SR16 between-group p<.0001 as reported in abstract
  reportType: measured-assessment
- id: reddit-meditation-sustained-attention-20483826
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: In experienced meditators assigned to a 3-month retreat or waiting-list control, intensive practice improved visual discrimination and reduced the vigilance decrement under fixed-target conditions; discrimination gains persisted at about 5-month follow-up.
  sourceId: reddit-pmid-20483826
  population: 60 experienced meditators randomized to retreat-first or waiting-list control groups
  exposure: Approximately 5 h/day Shamatha plus 45 min/day complementary practice for 3 months
  instrument: Visual line-discrimination threshold and sustained-attention A' slope
  magnitude: Retreat 1 posttraining group difference p=.019; Retreat 2 training-period vigilance interaction β=.005, p=.012; follow-up discrimination p=.037
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Practice-specific cognitive-control bias
  description: "Focused-attention and open-monitoring meditation were interpreted as inducing different cognitive-control states: open monitoring increased interference from irrelevant information relative to focused attention, while global-precedence attention did not change."
  sourceId: reddit-pmid-26637968
- title: Expectancy modulation of executive performance
  description: Positive versus negative suggestions changed interference control and verbal fluency in meditation-naive volunteers, showing that contextual expectancy can contribute to measured meditation effects.
  sourceId: reddit-pmid-26462570
- title: Reduced mind wandering as a mediator
  description: In the two-week mindfulness study, performance gains were mediated by reduced mind wandering among participants prone to distraction at baseline.
  sourceId: reddit-pmid-23538911
- title: Mindfulness and emotion-regulation pathways
  description: The MBCT full text identifies mindfulness, self-compassion, decentering, and reduced rumination as putative mediators; these mechanisms were exploratory correlates rather than randomized mechanistic proof.
  sourceId: reddit-pmid-26085853
- title: Perceptual sensitivity and attentional-resource demand
  description: The intensive-retreat full text links improved vigilance to better visual discrimination and reduced perceptual resource demand, while noting no compelling direct change in sustained-attention ability under threshold-matched conditions.
  sourceId: reddit-pmid-20483826
```

## Cautions

```yaml
- title: Expectancy and active-control limitations
  description: In the short-term meditation experiment, positive and negative suggestions materially changed interference control and verbal fluency; interpretation requires separating practice effects from expectation effects.
  sourceId: reddit-pmid-26462570
- title: Small nonrandomized depression pilot
  description: MBCT versus sertraline was open-label and nonrandomized with matched historical cohorts, small samples, attrition, and no blinded control; the full text reports no treatment-specific adverse-event dropouts.
  sourceId: reddit-pmid-26085853
- title: Intensive-retreat generalizability
  description: The retreat study enrolled experienced meditators willing to pay for a 3-month retreat and abstain from substances; retreat setting, motivation, teacher contact, and self-selection may limit generalization.
  sourceId: reddit-pmid-20483826
- title: Endpoint-specific null findings
  description: Meditation did not improve global-precedence attention in the single-bout study, and the habitual-responding study found no significant effect on one word-production measure.
  sourceId: reddit-pmid-26637968
```

## Claims

```yaml
- id: meditation-claim-task-specific-control-26637968
  assertion: A single bout of focused-attention versus open-monitoring meditation produced different cognitive-control patterns, while global-precedence attention was unchanged.
  relation: associated-with
  participants:
  - entityId: substance:meditation
    role: intervention
  - entityId: tag:cognitive-performance
    role: measured endpoint
  context: Healthy-adult global-local task experiment.
  sourceIds:
  - reddit-pmid-26637968
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Single acute laboratory study; abstract does not provide exact session duration or sample size.
- id: meditation-claim-expectancy-26462570
  assertion: Expectancy suggestions materially influenced executive-task performance in a 3-day meditation experiment.
  relation: modifies
  participants:
  - entityId: substance:meditation
    role: intervention
  - entityId: tag:attention
    role: measured endpoint
  context: Randomized single-blind study in 59 meditation-naive volunteers.
  sourceIds:
  - reddit-pmid-26462570
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The abstract describes a proof-of-concept design and a small meditation effect on verbal fluency.
- id: meditation-claim-mind-wandering-23538911
  assertion: A 2-week mindfulness course improved GRE reading comprehension and working-memory capacity while reducing mind wandering.
  relation: associated-with
  participants:
  - entityId: substance:meditation
    role: intervention
  - entityId: tag:cognitive-performance
    role: measured endpoint
  context: Randomized controlled training study.
  sourceIds:
  - reddit-pmid-23538911
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract does not provide sample size or exact practice schedule.
- id: meditation-claim-mbct-depression-26085853
  assertion: Eight-week MBCT and sertraline cohorts both improved depression ratings, with no between-group HAMD difference and greater QIDS-SR16 improvement in the MBCT cohort.
  relation: associated-with
  participants:
  - entityId: substance:meditation
    role: intervention
  - entityId: tag:depression-severity
    role: measured endpoint
  context: Open-label, nonrandomized pilot with matched cohorts; full text reviewed.
  sourceIds:
  - reddit-pmid-26085853
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sample, attrition, nonrandomized design, and historical control limit causal inference.
- id: meditation-claim-intensive-retreat-20483826
  assertion: Three months of intensive Shamatha practice improved visual discrimination and reduced the vigilance decrement under fixed-target conditions in experienced meditators.
  relation: associated-with
  participants:
  - entityId: substance:meditation
    role: intervention
  - entityId: tag:cognitive-performance
    role: measured endpoint
  context: Randomized retreat-first versus waiting-list control study; PMC full text reviewed.
  sourceIds:
  - reddit-pmid-20483826
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Intensive retreat, experienced volunteers, and waiting-list control limit generalization to ordinary meditation practice.
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
- id: reddit-index-meditation
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: The community index lists this substance and links the source trail below.
  limitation: Community indexing is a discovery aid and does not establish efficacy or safety.
- id: reddit-pmid-26637968
  title: 'A single bout of meditation biases cognitive control but not attentional focusing: Evidence from the global-local task.'
  authors: Lorenza S Colzato, Pauline van der Wel, Roberta Sellaro, Bernhard Hommel
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26637968/
  kind: PubMed publication
  insight: Focused-attention and open-monitoring meditation produced different congruency effects, while global-precedence attention was unchanged.
  limitation: PubMed abstract reviewed; exact session duration, sample size, funding, and conflicts were not extracted.
  pmid: '26637968'
  doi: 10.1016/j.concog.2015.11.003
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26462570
  title: Impact of short-term meditation and expectation on executive brain functions.
  authors: Martin Prätzlich, Joe Kossowsky, Jens Gaab, Peter Krummenacher
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26462570/
  kind: PubMed publication
  insight: In 59 meditation-naive volunteers, 20-minute sessions on three days showed strong expectancy effects on interference control and verbal fluency.
  limitation: PubMed abstract reviewed; funding and conflicts were not extracted.
  pmid: '26462570'
  doi: 10.1016/j.bbr.2015.10.012
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20483826
  title: Intensive meditation training improves perceptual discrimination and sustained attention.
  authors: Katherine A MacLean, Emilio Ferrer, Stephen R Aichele, David A Bridwell, Anthony P Zanesco, Tonya L Jacobs, Brandon G King, Erika L Rosenberg, Baljinder K Sahdra, Phillip R Shaver, B Alan Wallace, George R Mangun, Clifford D Saron
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20483826/
  kind: PubMed publication
  insight: Three months of intensive meditation training improved visual discrimination and, under fixed-target conditions, reduced the vigilance decrement; discrimination gains persisted at follow-up.
  limitation: PubMed abstract and PMC3132583 full text reviewed; experienced retreat volunteers, waiting-list control, and intensive setting limit generalization.
  pmid: '20483826'
  pmcid: PMC3132583
  doi: 10.1177/0956797610371339
  funding: Not extracted from reviewed passages.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not extracted from reviewed passages.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-f31904c1c11b
  title: Three randomized experiments on the longitudinal effects of the Transcendental Meditation technique on cognition
  authors: Not established
  year: 2026
  url: https://www.sciencedirect.com/science/article/pii/S0160289601000708
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23538911
  title: Mindfulness training improves working memory capacity and GRE performance while reducing mind wandering.
  authors: Michael D Mrazek, Michael S Franklin, Dawa Tarchin Phillips, Benjamin Baird, Jonathan W Schooler
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23538911/
  kind: PubMed publication
  insight: A two-week mindfulness course improved GRE reading comprehension and working-memory capacity while reducing mind wandering.
  limitation: PubMed abstract reviewed; exact sample size, practice schedule, funding, and conflicts were not extracted.
  pmid: '23538911'
  doi: 10.1177/0956797612459659
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e495f3f9623a
  title: Impact of Two Sessions of Mindfulness Training on Attention
  authors: Not established
  year: 2026
  url: https://scholarlyrepository.miami.edu/oa_dissertations/251/
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15819448
  title: Meditation can reduce habitual responding.
  authors: Heidi Wenk-Sormaz
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15819448/
  kind: PubMed publication
  insight: Twenty-minute meditation reduced habitual responding on Stroop and category-generation tasks in two undergraduate experiments, with one word-production endpoint null.
  limitation: PubMed abstract reviewed; funding and conflicts were not extracted.
  pmid: '15819448'
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e07324df6122
  title: Mindfulness-based stress reduction and attentional control
  authors: Not established
  year: 2026
  url: https://onlinelibrary.wiley.com/doi/10.1002/cpp.544/abstract
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26085853
  title: 'A Preliminary Study: Efficacy of Mindfulness-Based Cognitive Therapy versus Sertraline as First-line Treatments for Major Depressive Disorder.'
  authors: Stuart J Eisendrath, Erin Gillung, Kevin Delucchi, Daniel H Mathalon, Tony T Yang, Derek D Satre, Rebecca Rosser, Walter E B Sipe, Owen M Wolkowitz
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26085853/
  kind: PubMed publication
  insight: In an open-label pilot, 8-week MBCT and sertraline both improved depression ratings; HAMD change did not differ, while QIDS-SR16 improvement favored MBCT.
  limitation: PMC4465797 full text and PubMed abstract reviewed; small nonrandomized matched cohorts and attrition limit causal inference.
  pmid: '26085853'
  doi: 10.1007/s12671-014-0280-8
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-644f2de60201
  title: 'Google Talk: Mindfulness with Jon Kabat-Zinn (2007)'
  authors: Not established
  year: 2007
  url: https://www.youtube.com/watch?v=3nwwKbM_vJc
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-d03b4b280a10
  title: 'Google Talk: The Science of Mindfulness with Dr. Ron Siegel (2015)'
  authors: Not established
  year: 2015
  url: https://www.youtube.com/watch?v=aPlG_w40qOE
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
