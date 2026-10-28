# Automated editorial proposal

- Proposal ID: proposal:615118fedf5b162ad903d4c318bda024
- Substance: vitamin-c
- Suggestion type: new-reference
- Source: [Vitamin C and Methylprednisolone Modulate Apoptotic and Transcript Responses in a B-35 Scratch Screening Model.](https://pubmed.ncbi.nlm.nih.gov/42935308/)
- PMID: 42935308
- DOI: 10.5607/en26031
- Published: 2026-10-27
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> In vitro mechanical injury platforms using proliferative neuronal cell lines provide accessible systems for preliminary pharmacological screening before progression to differentiated, primary, or in vivo models. We investigated the effects of vitamin C and methylprednisolone, alone or in combination, on cell viability, Annexin V/PI-defined apoptotic cell death, scratch-gap closure, and selected transcript responses in the B-35 rat neuroblastoma cell line. Mechanical injury was induced in confluent B-35 monolayers using a standardized scratch method. Vitamin C, methylprednisolone, or their combination was applied either immediately after injury (0 h) or after a 24 h delay. Scratch-gap closure was quantified by image-based analysis, and IL-4, IL-10, and TUBB3 expression was evaluated by quantitative real-time PCR. Early combined exposure to vitamin C and methylprednisolone was associated with low apoptotic cell fractions, faster scratch-gap closure, and higher IL-4, IL-10, and TUBB3 mRNA levels than either single treatment, whereas delayed treatment showed attenuated responses. These findings describe treatment-associated changes in a simplified B-35 cell-line screening model. They should not be interpreted as evidence of regeneration, pharmacological synergy, neuroprotection, or spinal cord injury therapy. Protein-level validation, proliferation control, and confirmation in differentiated neuronal cultures, primary neuronglia co-cultures, organoid or slice models, and in vivo injury systems are required before mechanistic or translational conclusions can be drawn.

## Proposed structured change

```json
{
  "title": "Vitamin C and Methylprednisolone Modulate Apoptotic and Transcript Responses in a B-35 Scratch Screening Model.",
  "studyModel": "In vitro B-35 rat neuroblastoma cell scratch-injury model",
  "interventions": "Vitamin C alone or combined with methylprednisolone, administered immediately after injury or after a 24 h delay"
}
```

## Model rationale

The abstract reports an in vitro B-35 scratch-screening study evaluating vitamin C alone and in combination with methylprednisolone.

## Verbatim evidence from the abstract

> We investigated the effects of vitamin C and methylprednisolone, alone or in combination, on cell viability, Annexin V/PI-defined apoptotic cell death, scratch-gap closure, and selected transcript responses in the B-35 rat neuroblastoma cell line.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
