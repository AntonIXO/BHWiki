# Automated editorial proposal

- Proposal ID: proposal:bfbdf0f0b02221f1baf09aedb88256e6
- Substance: choline
- Suggestion type: new-caution
- Source: [The Lysine Methyltransferase SETDB1 Alleviates Methionine- and Choline-Deficient Diet-Induced Steatohepatitis by Suppressing Ferroptosis.](https://pubmed.ncbi.nlm.nih.gov/42918499/)
- PMID: 42918499
- DOI: 10.1016/j.jbc.2026.113665
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Metabolic dysfunction-associated steatotic liver disease (MASLD) is a prevalent chronic liver disorder, with its progressive form, metabolic dysfunction-associated steatohepatitis (MASH), characterized by steatosis, inflammation, hepatocyte injury, and fibrosis. However, the underlying mechanism remains incompletely understood. Here, we performed an in vivo CRISPR screen in Cas9 mice fed a methionine- and choline-deficient (MCD) diet to identify epigenetic regulators of MASH. SETDB1 emerged as a key modulator: hepatocyte-specific loss of Setdb1 exacerbated steatosis, inflammation, ductular reaction, and fibrosis, whereas Setdb1 overexpression markedly alleviated these pathological features. Notably, human liver samples showed decreased SETDB1 expression with advancing MASLD. Furthermore, SETDB1 deficiency increased hepatic ferroptosis by upregulating ACSL4, aggravating MASH pathology, whereas ACSL4 knockout reduced liver injury in the absence of SETDB1. SETDB1 overexpression protected against liver damage by repressing ACSL4. Therefore, the SETDB1-ACSL4-ferroptosis axis regulates MASH progression and represents a potential therapeutic target.

## Proposed structured change

```json
{
  "caution": "The study uses a combined methionine- and choline-deficient diet, so its findings should not be attributed to choline deficiency alone."
}
```

## Model rationale

The experimental model combines methionine and choline deficiency, and the abstract does not report an isolated choline-deficiency comparison or choline supplementation intervention.

## Verbatim evidence from the abstract

> in Cas9 mice fed a methionine- and choline-deficient (MCD) diet

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
