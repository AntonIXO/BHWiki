---
slug: citicoline
name: Citicoline
subtitle: A precursor, with outcome-specific evidence.
aliases:
  - CDP-choline
  - Cytidine diphosphate choline
  - Cytidine 5′-diphosphocholine
formula: C14H26N4O11P2
molecularWeight: 488.32 g/mol
pubchemCid: 13804
smiles: C[N+](C)(C)CCOP(=O)([O-])OP(=O)(O)OCC1C(C(C(O1)N2C=CC(=NC2=O)N)O)O
category: Choline precursor
tags:
  - choline-precursor
  - episodic-memory
  - stroke-recovery
accent: "#a9b993"
reviewedAt: 2026-09-29
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: Available tracer disposition includes metabolites and tissue pathways; no parent-citicoline half-life is assigned.
  sourceId: dinsdale1983
  observationId: citicoline-unresolved
kinetics:
  onset: Not established here
  peak: Tracer radioactivity has multiple peaks; not treated as a parent-compound plasma peak
  duration: Not established here
  bioavailability: Radiolabel absorption does not establish unchanged parent-compound bioavailability
  metabolism: Extensive transformation and incorporation into biosynthetic pathways
  sourceId: dinsdale1983
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
  - references
  - legal
  - interactions
  - experienceLinks
x-order: 9
---

## Summary

CDP-choline is studied as a source of choline and in neurological outcomes. A positive memory-task finding does not establish broad neuroprotection.

## Description

Citicoline participates in choline-related metabolism. Research spans healthy older adults with memory complaints and people with neurological disease. These populations, endpoints and treatment contexts must remain separate. Radiolabel disposition is not a parent-drug elimination curve.

## Evidence note

Memory-task and stroke-recovery findings differ. This draft does not assign a general cognition or neuroprotection score.

## Doses

```yaml
- label: Memory-task trial
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: Study capsules
  route: Oral
  frequency: Once daily with breakfast
  duration: 12 weeks
  population: 100 adults aged 50–85 with age-associated memory impairment
  purpose: Compare memory-test changes with placebo
  sourceCategory: research
  note: Selected population and study formulation; not evidence for benefit in all ages.
  sourceId: nakazaki2021
```

## Pharmacokinetics

```yaml
- id: citicoline-unresolved
  analyte: Unchanged citicoline
  route: Oral
  formulation: Radiolabeled study compound
  population: Healthy adult volunteers
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Measured radioactivity follows parent-derived material, not specifically unchanged citicoline; no decay model is justified.
  sourceId: dinsdale1983
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- conceptId: episodic-memory
  name: Paired-associate memory
  direction: Increased
  evidence: Human research
  description: A secondary episodic-memory endpoint improved relative to placebo. Clinical importance and generalizability remain uncertain.
  sourceId: nakazaki2021
  population: Older adults with age-associated memory impairment
  exposure: 500 mg/day for 12 weeks
  instrument: Cambridge Brain Sciences Paired Associate test
  magnitude: null
- conceptId: stroke-recovery
  name: Global recovery after stroke
  direction: Variable
  evidence: Human research
  description: ICTUS found no significant recovery advantage over placebo and was stopped for futility.
  sourceId: davalos2012
  population: Adults with moderate-to-severe acute ischemic stroke
  exposure: "Hospital trial: intravenous followed by oral citicoline"
  instrument: Global endpoint combining NIHSS, modified Rankin Scale and Barthel Index at 90 days
  magnitude: Odds ratio 1.03; 95% CI 0.86–1.25
```

## Mechanisms

```yaml
- title: Precursor metabolism
  description: Measurements after administration support conversion to choline and cytidine; the parent compound and its metabolites require separate interpretation.
  sourceId: lopez1987
  conceptId: choline-precursor
```

## Cautions

```yaml
- title: Disease outcomes do not transfer
  description: The large ICTUS trial did not demonstrate improved recovery after moderate-to-severe acute stroke.
  sourceId: davalos2012
- title: Limited safety horizon
  description: A short trial in selected older adults does not establish long-term safety across all populations.
  sourceId: nakazaki2021
```

## Claims

```yaml
- id: citicoline-choline
  assertion: Administered citicoline is converted into circulating metabolites including choline.
  relation: metabolic-precursor
  participants:
    - entityId: substance:citicoline
      role: substance
    - entityId: tag:choline-precursor
      role: mechanism
  context: Human and animal metabolism experiments distinguished parent compound from metabolites
  sourceIds:
    - lopez1987
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Metabolite availability alone does not establish a memory benefit.
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
- id: nakazaki2021
  title: "Citicoline and Memory Function in Healthy Older Adults: A Randomized, Double-Blind, Placebo-Controlled Clinical Trial"
  authors: Nakazaki et al.
  year: 2021
  pmid: "33978188"
  doi: 10.1093/jn/nxab119
  url: https://pubmed.ncbi.nlm.nih.gov/33978188/
  kind: Randomized placebo-controlled trial
  insight: Found improvement in secondary episodic and composite memory endpoints.
  limitation: Selected older population, short follow-up and secondary endpoints; not a broad cognitive-enhancement result.
  funding: Ingredient-supplier involvement is reported; full funding disclosures require editorial review.
- id: davalos2012
  title: "Citicoline in the treatment of acute ischaemic stroke: an international, randomised, multicentre, placebo-controlled study (ICTUS trial)"
  authors: Dávalos et al.
  year: 2012
  pmid: "22691567"
  doi: 10.1016/S0140-6736(12)60813-7
  url: https://pubmed.ncbi.nlm.nih.gov/22691567/
  kind: Multicentre randomized placebo-controlled trial
  insight: Did not demonstrate a recovery advantage in moderate-to-severe acute ischemic stroke.
  limitation: A clinical stroke population and hospital treatment sequence; findings do not resolve healthy-memory questions.
  funding: Ferrer Grupo.
- id: dinsdale1983
  title: Pharmacokinetics of 14C CDP-choline
  authors: Dinsdale et al.
  year: 1983
  pmid: "6412727"
  url: https://pubmed.ncbi.nlm.nih.gov/6412727/
  kind: Human radiolabel-disposition study
  insight: Tracked absorption and elimination of radiolabeled material through multiple pathways.
  limitation: Small study; radioactivity includes metabolites and cannot define a parent-drug half-life.
  funding: Not assessed in this draft.
- id: lopez1987
  title: Metabolism of cytidine (5′)-diphosphocholine (CDP-choline) following oral and intravenous administration to the human and the rat
  authors: López-Coviella et al.
  year: 1987
  pmid: "20501174"
  doi: 10.1016/0197-0186(87)90049-0
  url: https://pubmed.ncbi.nlm.nih.gov/20501174/
  kind: Human and animal metabolism study
  insight: Distinguished unchanged compound from circulating choline and cytidine.
  limitation: Mechanistic disposition findings do not demonstrate cognitive efficacy.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Citicoline: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/13804
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure and connectivity SMILES.
  limitation: The parent compound identity is distinct from salts, formulations and commercial product quality.
  funding: US National Library of Medicine.
```

## Legal

```yaml
[]
```

