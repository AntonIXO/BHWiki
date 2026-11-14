# Automated editorial proposal

- Proposal ID: proposal:6ad335623d89ac5aaacba77415e1fd06
- Substance: glycine
- Suggestion type: new-effect
- Source: [Comprehensive study on the structure and dynamics of ammonium-based biocompatible ionic liquids.](https://pubmed.ncbi.nlm.nih.gov/42820471/)
- PMID: 42820471
- DOI: 10.1039/d5cp04596g
- Published: 2026-10-21
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Ammonium-based biocompatible ionic liquids (bio-ILs) are low-cost, non-toxic, widely available, biodegradable, and thermally stable compared to conventional ILs. This study highlights the structural and dynamic properties of (2-hydroxyethyl)trimethylammonium glycinate, known as choline glycinate ([CHO][GLY]), and ethyltrimethylammonium glycinate ([AMO][GLY]) examined using quantum mechanical computation and molecular dynamics (MD) simulations. The density functional theory (DFT) results reveal a stronger orbital interaction and increased stability in [CHO][GLY] due to the greater energy gap compared to that of [AMO][GLY]. This suggests that electron transfer is more likely in [AMO][GLY] during chemical reactions, indicating lower kinetic stability and higher chemical reactivity compared to [CHO][GLY]. Moreover, the study identifies the most important chemical reactivity species based on electronegativity (<i>χ</i>) and chemical hardness (<i>η</i>). Both values are lower for [AMO][GLY], reflecting its less pronounced nucleophilic sites compared with the [CHO][GLY] bio-IL.The hydrogen bond (HB) energy and cation-anion interaction energy (<i>E</i><sub>int</sub>) are found to be more significant in the [CHO][GLY] bio-IL, aligning with its higher anodic limit. These results suggest that the [CHO][GLY] bio-IL can be a more stable medium for separation, due to its ability to form stronger interactions, while the [AMO][GLY] bio-IL offers superior mass transport properties, making the two systems complementary for different green chemistry applications.

## Proposed structured change

```json
{
  "effect": "Glycine-containing ammonium ionic liquids showed distinct computationally predicted stability, reactivity, and transport properties: choline glycinate ([CHO][GLY]) had stronger orbital interactions, greater stability, and stronger hydrogen-bond and cation–anion interactions, whereas ethyltrimethylammonium glycinate ([AMO][GLY]) was predicted to have higher chemical reactivity and superior mass transport properties.",
  "context": "Quantum mechanical computation and molecular dynamics simulations of ammonium-based biocompatible ionic liquids; findings concern glycinate ionic liquids rather than free glycine."
}
```

## Model rationale

The abstract reports specific comparative effects for two ammonium glycinate ionic liquids. Relevance to glycine is indirect because the studied substances are glycinate salts, not standalone glycine.

## Verbatim evidence from the abstract

> The density functional theory (DFT) results reveal a stronger orbital interaction and increased stability in [CHO][GLY] due to the greater energy gap compared to that of [AMO][GLY].
> This suggests that electron transfer is more likely in [AMO][GLY] during chemical reactions, indicating lower kinetic stability and higher chemical reactivity compared to [CHO][GLY].
> The hydrogen bond (HB) energy and cation-anion interaction energy (<i>E</i><sub>int</sub>) are found to be more significant in the [CHO][GLY] bio-IL, aligning with its higher anodic limit.
> These results suggest that the [CHO][GLY] bio-IL can be a more stable medium for separation, due to its ability to form stronger interactions, while the [AMO][GLY] bio-IL offers superior mass transport properties, making the two systems complementary for different green chemistry applications.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
