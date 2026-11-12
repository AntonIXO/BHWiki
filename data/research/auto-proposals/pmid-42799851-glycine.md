# Automated editorial proposal

- Proposal ID: proposal:387aeacdfce3805915df1300950643f5
- Substance: glycine
- Suggestion type: new-caution
- Source: [Assays of Antifungal Activity of an Antimicrobial Peptide Against Botrytis cinerea.](https://pubmed.ncbi.nlm.nih.gov/42799851/)
- PMID: 42799851
- DOI: 10.1007/978-1-0716-5551-1_15
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Antimicrobial peptides (AMPs) represent the first line of host immune defense against a broad spectrum of microorganisms. Whether naturally occurring or synthetically designed, these small peptides can potently inhibit microbial growth and remain stable under diverse conditions. Most AMPs act by directly disrupting fungal or bacterial membranes. In this study, we identified a glycine-rich peptide with strong antifungal activity against Botrytis cinerea. We further investigated its mode of action (MOA) and demonstrated its preventive antifungal activity in plants. Our work focuses primarily on the in vitro characterization of AMP features in the context of plant-Botrytis interactions.

## Proposed structured change

```json
{
  "text": "Do not attribute the reported antifungal activity to glycine itself; the abstract describes a glycine-rich antimicrobial peptide, and does not test glycine as an isolated substance."
}
```

## Model rationale

The study concerns a glycine-rich peptide rather than isolated glycine, so its findings should not be generalized to glycine alone.

## Verbatim evidence from the abstract

> In this study, we identified a glycine-rich peptide with strong antifungal activity against Botrytis cinerea.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
