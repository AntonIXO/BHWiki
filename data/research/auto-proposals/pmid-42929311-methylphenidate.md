# Automated editorial proposal

- Proposal ID: proposal:3e8fd41676c2f4a0fde11d40566dc838
- Substance: methylphenidate
- Suggestion type: new-effect
- Source: [Psychopharmacological advances in neurorehabilitation after traumatic brain injury.](https://pubmed.ncbi.nlm.nih.gov/42929311/)
- PMID: 42929311
- DOI: 10.1097/wco.0000000000001528
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Purpose of review</h4>Pharmacotherapy is widely used to manage neuropsychiatric sequelae that may interfere with neurorehabilitation after traumatic brain injury (TBI), despite limited TBI-specific evidence. This review summarizes psychopharmacological evidence from the past 18 months and proposes a three-step approach: deprescribing potentially recovery-limiting medications, characterizing individual neuropsychiatric symptoms, and selecting symptom-targeted treatments to support cognitive, emotional, behavioral, and functional recovery after TBI.<h4>Recent findings</h4>Methylphenidate shows the most consistent evidence for selected cognitive outcomes, particularly attention and processing speed. Pharmacological approaches to agitation, sleep-wake disorders, depression, fatigue, and posttraumatic headache have been studied, but TBI-specific evidence remains limited or heterogeneous. Sedative, anticholinergic, and cognitive adverse effects, cardiovascular risks, and dependence require consideration in TBI neurorehabilitation.<h4>Summary</h4>No pharmacological treatment is established as disease-modifying after TBI. Given the limited evidence, psychopharmacotherapy should be individualized, symptom-targeted, and integrated into multidisciplinary TBI neurorehabilitation. Continuous medication review and deprescribing should accompany careful treatment selection and monitoring. Future trials should determine whether symptom improvement translates into better rehabilitation participation, functional independence, and long-term health-related quality of life.

## Proposed structured change

```json
{
  "outcomes": [
    "attention",
    "processing speed"
  ],
  "population": "people undergoing neurorehabilitation after traumatic brain injury",
  "effectSummary": "Shows the most consistent evidence among reviewed pharmacological approaches for selected cognitive outcomes, particularly attention and processing speed."
}
```

## Model rationale

The abstract specifically identifies methylphenidate as having the most consistent evidence for selected cognitive outcomes after traumatic brain injury.

## Verbatim evidence from the abstract

> Methylphenidate shows the most consistent evidence for selected cognitive outcomes, particularly attention and processing speed.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
