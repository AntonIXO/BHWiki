# Automated editorial proposal

- Proposal ID: proposal:ae842f3a7cdde3ad800598b852a35874
- Substance: vitamin-b12
- Suggestion type: new-effect
- Source: [Rapid-Onset Subacute Combined Degeneration After Short-Term, High-Dose Nitrous Oxide Use.](https://pubmed.ncbi.nlm.nih.gov/42945514/)
- PMID: 42945514
- DOI: not indexed
- Published: 2026-11-02
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Recreational nitrous oxide (N2O) use has risen in recent years and is increasingly accessible in high-volume cartridges and canisters. N2O oxidizes cobalamin and functionally inhibits methionine synthase disrupting methylation pathways essential for myelin maintenance and DNA metabolism. Serum vitamin B12 levels may be normal despite functional deficiency, making markers such as homocysteine and methylmalonic acid helpful to confirm the diagnosis. Clinical manifestations range from peripheral neuropathy and megaloblastic anemia to subacute combined degeneration (SCD), a demyelinating myelopathy classically involving the dorsal columns (and sometimes corticospinal tracts). Although SCD is often associated with chronic exposure, brief but high-dose use may precipitate rapid neurologic decline. Early recognition and prompt parenteral vitamin B12 replacement may reduce the risk of irreversible deficits.

## Proposed structured change

```json
{
  "effect": "Functional vitamin B12 deficiency may occur despite normal serum vitamin B12 levels after nitrous oxide exposure.",
  "context": "Nitrous oxide use"
}
```

## Model rationale

The abstract states that nitrous oxide functionally inhibits cobalamin-related metabolism and that serum vitamin B12 can remain normal despite functional deficiency.

## Verbatim evidence from the abstract

> N2O oxidizes cobalamin and functionally inhibits methionine synthase disrupting methylation pathways essential for myelin maintenance and DNA metabolism.
> Serum vitamin B12 levels may be normal despite functional deficiency

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
