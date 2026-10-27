# Automated editorial proposal

- Proposal ID: proposal:b6ede03438659cadd791fe78798f7d5d
- Substance: glycine
- Suggestion type: new-effect
- Source: [Polyglycine Strands Within a Collagen Triple Helix.](https://pubmed.ncbi.nlm.nih.gov/42885613/)
- PMID: 42885613
- DOI: 10.1002/bip.70127
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> The collagen triple helix is the most abundant protein structural motif in animals. It tolerates any amino acid in its Xaa and Yaa positions but demands glycine (Gly) at every third position, where the residue packs into the sterically forbidding core of the triple helix and donates the recurring interstrand N-H⋯OC hydrogen bond that stitches the three strands together. (2S)-Proline (Pro) and (2S,4R)-4-hydroxyproline (Hyp) are enriched far above their proteome-wide abundance because they preorganize individual strands into the polyproline II conformation, lowering the entropic cost of folding. We asked whether the triple helix is intrinsically stable enough to form from strands that carry no such preorganization, that is, from polyglycine. To offset the conformational entropy of a Gly-rich tract, we embedded Gly<sub>6</sub> within flanking triple-helical (Pro-Hyp-Gly)<sub>n</sub> clamps in Ac-(Pro-Hyp-Gly)<sub>6</sub>-Gly<sub>6</sub>-(Pro-Hyp-Gly)<sub>5</sub>-Pro-Hyp-NH<sub>2</sub> and compared it with an otherwise identical peptide in which Gly<sub>6</sub> was replaced by two [2-(2-aminoethoxy)ethoxy]acetic acid units, a flexible, length-matched spacer that lacks most of the regularly spaced backbone amides of Gly<sub>6</sub>. Circular dichroism spectroscopy revealed the diagnostic positive band at 225 nm. The molar ellipticity of the spacer-containing control was 86% of that of the Gly<sub>6</sub>-containing peptide, matching the 35/41 = 85% ratio of residues capable of triple-helix formation and consistent with the Gly<sub>6</sub> segment contributing to the triple-helical signal. Thermal denaturation yielded a T<sub>m</sub> of 46.8°C for the Gly<sub>6</sub>-containing peptide, 6.3°C higher than that of the matched spacer control. This added stability indicates that the polyglycine tract is not merely accommodated within the helix but contributes stabilizing interstrand hydrogen bonds. Together, these data indicate that three polyglycine strands can form a collagen triple helix when flanked by triple-helical clamps. This result is consistent with the idea that the triple-helical architecture predates the recruitment of Pro and Hyp, informs the evolutionary origin of collagen, and offers a blunt-ended, symmetric scaffold for designing peptidic triple helices.

## Proposed structured change

```json
{
  "effect": "Glycine-rich tracts can form part of a collagen triple helix and contribute to its stability through interstrand hydrogen bonds when flanked by triple-helical clamps.",
  "context": "Polyglycine-containing collagen-mimetic peptide"
}
```

## Model rationale

The study reports that a Gly6 segment contributes to the triple-helical signal, increases thermal stability relative to a matched flexible spacer, and can participate in triple-helix formation when appropriately flanked.

## Verbatim evidence from the abstract

> This added stability indicates that the polyglycine tract is not merely accommodated within the helix but contributes stabilizing interstrand hydrogen bonds.
> Together, these data indicate that three polyglycine strands can form a collagen triple helix when flanked by triple-helical clamps.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
