# Automated editorial proposal

- Proposal ID: proposal:d7f5b999cdd086a74d564629dcdab670
- Substance: calcium
- Suggestion type: new-outcome
- Source: [Monitoring Calcium Dynamics in Pig Intestinal Organoids with FLIM and FRET.](https://pubmed.ncbi.nlm.nih.gov/42763863/)
- PMID: 42763863
- DOI: 10.1007/978-1-0716-5412-5_17
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Intracellular calcium signaling plays a crucial role in intestinal epithelial function. In this chapter, we describe a method to monitor calcium dynamics in live pig small intestinal organoids using stably expressed genetically encoded FRET-based biosensor in combination with intensity-based ratiometric and fluorescence lifetime imaging (FLIM) microscopy readouts. The calcium biosensor Twitch-2B was introduced into organoids by electroporation. Despite the modest lifetime contrast, the biosensor provides a highly reliable ratiometric signal and is compatible with both conventional fluorescence and FLIM-based imaging platform. Following electroporation, organoids are allowed to form and subsequently were selected to establish stable biosensor-expressing lines. This is followed by the live microscopy of heterogeneous and cell-specific calcium responses upon pharmacological stimulation. The presented protocol offers a versatile approach for studies of calcium signaling in relevant 3D cell models, such as organoids and tissues-on-a-chip.

## Proposed structured change

```json
{
  "outcome": "Intracellular calcium dynamics and cell-specific calcium responses",
  "model": "Live pig small intestinal organoids",
  "measurement": "FRET-based biosensor with ratiometric and fluorescence lifetime imaging"
}
```

## Model rationale

The abstract describes monitoring intracellular calcium dynamics and heterogeneous, cell-specific calcium responses in live pig small intestinal organoids using a genetically encoded FRET biosensor.

## Verbatim evidence from the abstract

> Intracellular calcium signaling plays a crucial role in intestinal epithelial function.
> live microscopy of heterogeneous and cell-specific calcium responses upon pharmacological stimulation

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
