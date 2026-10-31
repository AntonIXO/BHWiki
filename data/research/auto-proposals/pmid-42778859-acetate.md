# Automated editorial proposal

- Proposal ID: proposal:4dddc7c1e6fb203cfb3dc09ebc2f7dea
- Substance: acetate
- Suggestion type: new-effect
- Source: [Functionalization of Flavonoids with Lipases.](https://pubmed.ncbi.nlm.nih.gov/42778859/)
- PMID: 42778859
- DOI: 10.1007/978-1-0716-5472-9_14
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Flavonoids, valued for their health benefits, face challenges due to low solubility. Enzymatic acylation offers promise in enhancing properties, with the use of lipase B sourced from Candida antarctica (N435). This study has the aim to improve naringin solubility via esterification using as acyl donors short- and medium-chain fatty acids (vinyl acetate, propionate, and laurate) catalyzed by N435. Lipases play a crucial role as catalysts, facilitating the acylation process. Our study encompasses executing acylation and characterizing products. This process significantly enhances aqueous and organic solvent solubility of naringin esters. Additionally, acylating flavonoids with these fatty acids has the potential to broaden their range of applications in understanding and modulating gut health.

## Proposed structured change

```json
{
  "effect": "Vinyl acetate was used as an acyl donor for enzymatic esterification of naringin, producing naringin esters with enhanced solubility.",
  "context": "The reaction was catalyzed by lipase B from Candida antarctica (N435)."
}
```

## Model rationale

The abstract explicitly identifies vinyl acetate as an acyl donor in the solubility-enhancing esterification process.

## Verbatim evidence from the abstract

> using as acyl donors short- and medium-chain fatty acids (vinyl acetate, propionate, and laurate) catalyzed by N435
> This process significantly enhances aqueous and organic solvent solubility of naringin esters.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
