# Automated editorial proposal

- Proposal ID: proposal:52ebc3aa902fa37c00ba3678a448c22e
- Substance: resveratrol
- Suggestion type: new-reference
- Source: [Experimental evidence that dietary antioxidants induce an antiviral transcriptomic signature in a wild seabird.](https://pubmed.ncbi.nlm.nih.gov/42862045/)
- PMID: 42862045
- DOI: 10.1242/bio.062786
- Published: 2026-10-29
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Infectious disease emergence in natural systems is driven by complex host-pathogen-environment interactions. Nutritional factors, particularly dietary antioxidants, can modulate physiological states by enhancing immune function and mitigating oxidative damage, but the underlying molecular mechanisms in wildlife remain poorly understood. To bridge this gap, we conducted a transcriptomic analysis of blood samples from both healthy and clinically affected magnificent frigatebirds Fregata magnificens chicks treated with either resveratrol (a plant-derived polyphenol with known antiviral and antioxidant properties) or a placebo. Resveratrol supplementation induced significant gene expression changes, particularly in diseased individuals, where we identified the upregulation of ten key genes in treated sick chicks, including the interferon-stimulated genes (IFI6, OASL2) and immune regulators (SOCS1, PLAC8); two additional transcripts were unannotated. Furthermore, resveratrol treatment was associated with increased expression of DDX60, a potent antiviral factor, and CYGB1, which supports cytoprotection. In contrast, healthy chicks showed fewer differentially expressed genes, primarily associated with metabolism and cellular organization. Collectively, our results reveal a transcriptional signature consistent with dietary antioxidants such as resveratrol acting as active molecular modulators of host defense, rather than simple passive antioxidants, although direct evidence of enhanced antiviral protection (e.g. reduced viral load) remains to be established. This study highlights the utility of transcriptomic approaches to link nutritional ecology with disease dynamics, offering a framework for understanding how dietary quality shapes host defense strategies and population resilience under increasing pathogen pressure.

## Proposed structured change

```json
{
  "title": "Experimental evidence that dietary antioxidants induce an antiviral transcriptomic signature in a wild seabird.",
  "studyContext": "Transcriptomic analysis of blood samples from healthy and clinically affected magnificent frigatebird chicks treated with resveratrol or placebo."
}
```

## Model rationale

The abstract describes a study directly evaluating resveratrol supplementation in wild seabird chicks and its transcriptomic effects.

## Verbatim evidence from the abstract

> we conducted a transcriptomic analysis of blood samples from both healthy and clinically affected magnificent frigatebirds Fregata magnificens chicks treated with either resveratrol (a plant-derived polyphenol with known antiviral and antioxidant properties) or a placebo.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
