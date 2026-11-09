---
slug: pergolide
name: Pergolide
subtitle: Research compound
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Research compound
tags:
  - episodic-memory
  - dopamine
accent: "#a9b993"
reviewedAt: 2026-11-01
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No validated elimination observation was imported in this corpus pass.
  sourceId: pubmed-12680735
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: pubmed-12680735
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
x-order: 9007199254740991
---

## Summary

Pergolide acts on dopamine receptors. Research explores how dopamine signalling affects cognitive performance.

## Description

This page links PubMed evidence for pergolide. Study populations, formulations and endpoints are retained per PMID; non-PubMed links remain provenance leads. Abstracts were retrieved for PMID(s) 12680735, 15765257.

## Evidence note

Study findings and methods are linked to their original publications.

## Doses

```yaml
[]
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
[]
```

## Outcomes

```yaml
- id: research-pergolide-episodic-memory-12680735
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: The role of dopamine D1 and D2 receptors in modulating object working memory in humans is poorly understood.
  sourceId: pubmed-12680735
  population: Twelve healthy subjects underwent testing under three conditions (0.05 mg pergolide (D1/D2 receptor agonist), 2.5 mg bromocriptine (D2 receptor agonist) and placebo] in a double-blind, placebo-controlled repeated measures design.
  exposure: The role of dopamine D1 and D2 receptors in modulating object working memory in humans is poorly understood.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: research-pergolide-episodic-memory-15765257
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: EC has been associated with networks involving the prefrontal cortex (PFC).
  sourceId: pubmed-15765257
  population: Forty male healthy subjects participated in this randomized, double-blind, placebo-controlled, crossover study.
  exposure: Forty male healthy subjects participated in this randomized, double-blind, placebo-controlled, crossover study.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 12680735
  description: The role of dopamine D1 and D2 receptors in modulating object working memory in humans is poorly understood.
  sourceId: pubmed-12680735
- title: Source-specific finding from PMID 15765257
  description: Moreover, there is evidence that dopamine agonists, especially those with a D1 profile, may modulate EC, since in the PFC D1 subtype receptors are more abundant.
  sourceId: pubmed-15765257
```

## Cautions

```yaml
[]
```

## Claims

```yaml
- id: research-claim-pergolide-12680735-0
  assertion: "PMID 12680735 reported: The role of dopamine D1 and D2 receptors in modulating object working memory in humans is poorly understood."
  relation: associated-with
  participants:
    - entityId: substance:pergolide
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 12680735; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-12680735
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 12680735; this single study does not establish general efficacy or safety.
- id: research-claim-pergolide-15765257-1
  assertion: "PMID 15765257 reported: EC has been associated with networks involving the prefrontal cortex (PFC)."
  relation: associated-with
  participants:
    - entityId: substance:pergolide
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Source-specific result from PMID 15765257; applies to the population and design described in that abstract.
  sourceIds:
    - pubmed-15765257
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract result from PMID 15765257; this single study does not establish general efficacy or safety.
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
- id: pubmed-12680735
  title: The modulatory effects of dopamine D1 and D2 receptor function on object working memory in humans.
  authors: Cali F Bartholomeusz, Georgia Box, Cindy Van Rooy, Pradeep J Nathan
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12680735/
  kind: PubMed publication
  insight: The role of dopamine D1 and D2 receptors in modulating object working memory in humans is poorly understood.
  limitation: PubMed abstract for PMID 12680735 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "12680735"
  doi: 10.1177/0269881103017001688
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: pubmed-15765257
  title: Differential dopaminergic modulation of executive control in healthy subjects.
  authors: Daniela Roesch-Ely, Hans Scheffel, Stephan Weiland, Markus Schwaninger, Hans-Peter Hundemer, Thomas Kolter, Matthias Weisbrod
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15765257/
  kind: PubMed publication
  insight: EC has been associated with networks involving the prefrontal cortex (PFC).
  limitation: PubMed abstract for PMID 15765257 was reviewed; no rights-eligible PMC full text was available in this pass.
  pmid: "15765257"
  doi: 10.1007/s00213-004-2027-z
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-da3a77ecdd23
  title: D1- Versus D2-Receptor Modulation of Visuospatial Working Memory in Humans
  authors: Not established
  year: 2026
  url: https://www.jneurosci.org/content/18/7/2720.long
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
- id: publication-link-50293678ea30
  title: Tonic Dopaminergic Stimulation Impairs Associative Learning in Healthy Subjects
  authors: Not established
  year: 2026
  url: https://www.nature.com/npp/journal/v31/n11/full/1301167a.html
  kind: research index publication link
  insight: The research index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```
