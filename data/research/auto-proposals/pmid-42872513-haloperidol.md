# Automated editorial proposal

- Proposal ID: proposal:9245409ef597afaafa7a83f0478729e2
- Substance: haloperidol
- Suggestion type: new-outcome
- Source: [Occupancy-Guided Continuous Antipsychotic Dosing Provides a Translational Model for Evaluating Extrapyramidal Motor Liability in Mice.](https://pubmed.ncbi.nlm.nih.gov/42872513/)
- PMID: 42872513
- DOI: 10.1002/npr2.70176
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> The therapeutic effects of antipsychotic drugs are primarily achieved through dopamine D2 receptor antagonism. However, excessive striatal D2 receptor blockade is associated with extrapyramidal side effects (EPS) in schizophrenic patients. Clinical studies indicate a therapeutic window of approximately 60%-80% striatal D2 receptor occupancy, with higher occupancy increasing the risk of EPS. However, conventional rodent dosing paradigms rarely maintain clinically comparable receptor occupancy, limiting their translational relevance. Here, we investigated whether continuous antipsychotic administration designed to achieve clinically relevant striatal D2 receptor occupancy can be used to evaluate extrapyramidal motor liability in mice. Using an occupancy-guided dosing paradigm, we continuously administered haloperidol or olanzapine and assessed catalepsy as an index of EPS. To validate catalepsy as an EPS-like phenotype, we examined whether it could be attenuated by an anticholinergic agent, consistent with the clinical management of EPS. Catalepsy was observed only under high-occupancy haloperidol condition. A significant increase in catalepsy time was observed only in mice receiving haloperidol at a dose producing approximately 90% D2 receptor occupancy on day 3, whereas no catalepsy was detected under lower occupancy conditions with either haloperidol or olanzapine. Importantly, haloperidol-induced catalepsy was significantly attenuated by scopolamine. Together, these findings demonstrate that an occupancy-guided continuous antipsychotic dosing paradigm enables evaluation of EPS-like behavior under clinically relevant D2 receptor occupancy conditions in mice, providing a translational framework linking clinical PET studies with preclinical research.

## Proposed structured change

```json
{
  "outcome": "Catalepsy",
  "finding": "A significant increase in catalepsy time occurred in mice receiving haloperidol producing approximately 90% D2 receptor occupancy on day 3; no catalepsy was detected at lower occupancy conditions."
}
```

## Model rationale

The abstract reports a specific motor outcome associated with high-occupancy haloperidol dosing in mice.

## Verbatim evidence from the abstract

> A significant increase in catalepsy time was observed only in mice receiving haloperidol at a dose producing approximately 90% D2 receptor occupancy on day 3, whereas no catalepsy was detected under lower occupancy conditions with either haloperidol or olanzapine.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
