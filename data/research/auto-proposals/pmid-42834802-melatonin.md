# Automated editorial proposal

- Proposal ID: proposal:0b59d1a597ffc6884e38c8c690aae07a
- Substance: melatonin
- Suggestion type: new-claim
- Source: [Global Research Trends in Sleep Quality, Sleep Deprivation and Sleep Promotion Among ICU Patients: A Descriptive and Evaluative Bibliometric Analysis.](https://pubmed.ncbi.nlm.nih.gov/42834802/)
- PMID: 42834802
- DOI: 10.1111/nicc.70722
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Sleep deprivation and poor sleep quality are critical problems among intensive care unit (ICU) patients, with significant implications for recovery, delirium onset and clinical outcomes. Despite growing scientific interest, no bibliometric study has systematically mapped the intellectual structure and thematic evolution of this field.<h4>Aim</h4>To analyse the bibliometric characteristics and thematic structure of publications on sleep deprivation, sleep promotion and sleep quality in ICU patients indexed in the Web of Science (WoS) database between 1983 and 2026.<h4>Study design</h4>A descriptive and evaluative bibliometric analysis was conducted. Data were retrieved on April 26, 2026, from the WoS Core Collection using a comprehensive search strategy. Publications were filtered by document type, WoS categories (nursing, critical care medicine, anaesthesiology) and index (SCI-EXPANDED, SSCI, ESCI). Data were analysed using R software with the Biblioshiny interface, and annual publication trends were evaluated using Microsoft Excel.<h4>Results</h4>Of 11 418 publications retrieved, 379 met the inclusion criteria, spanning 37 years (1983-2026). Linear regression revealed a statistically significant positive trend in publication output (β = 0.643, R<sup>2</sup> = 0.704, r = 0.839, p < 0.001), with mean annual publications of 10.24 ± 8.83 and notable acceleration from the 2000s onwards. Thematic mapping identified 'sleep', 'sleep deprivation' and 'delirium' as motor themes both highly central and well developed. Emerging concepts included circadian rhythm, actigraphy, fatigue, pain and anxiety.<h4>Conclusions</h4>ICU sleep research has grown substantially over four decades, with sleep deprivation and delirium emerging as co-dominant research priorities. Thematic gaps and emerging clusters identified in this analysis highlight important directions for future nursing research and evidence-based practice development in critical care.<h4>Relevance to clinical practice</h4>This bibliometric analysis identified sleep deprivation and delirium as the co-dominant motor themes of ICU sleep research, and intervention-related concepts such as earplugs, eye masks and melatonin as emerging clusters. These evidence-based trends can guide ICU nurses in prioritizing targeted sleep promotion protocols and support policymakers in directing resources toward the most scientifically mature intervention areas in critical care.

## Proposed structured change

```json
{
  "claim": "Melatonin was identified as an emerging intervention-related cluster in ICU sleep research."
}
```

## Model rationale

The abstract reports melatonin as an emerging research cluster in a bibliometric analysis, but does not provide clinical efficacy, safety, dosing, or mechanistic evidence.

## Verbatim evidence from the abstract

> intervention-related concepts such as earplugs, eye masks and melatonin as emerging clusters.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
