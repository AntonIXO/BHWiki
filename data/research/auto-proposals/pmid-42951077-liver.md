# Automated editorial proposal

- Proposal ID: proposal:0a403a0997be76cc4b3d3346cf88321d
- Substance: liver
- Suggestion type: new-reference
- Source: [Spatiotemporal Multi-Omics Reveals Primate-Specific Mechanisms of Liver Regeneration Following Partial Hepatectomy.](https://pubmed.ncbi.nlm.nih.gov/42951077/)
- PMID: 42951077
- DOI: 10.1016/j.jhepr.2026.102077
- Published: 2026-10-28
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background & aims</h4>The liver is a vital metabolic organ with an extraordinary capacity for regeneration, making it a key focus for understanding tissue repair and developing therapeutic strategies for liver diseases. However, ethical limitations restrict liver regeneration research largely to rodents, leaving critical gaps in our understanding of primate-specific mechanisms.<h4>Methods</h4>We performed partial hepatectomy (PHx) using a novel laparoscopically assisted hepatic wedge resection (LAHWR) approach in two cynomolgus monkeys (Macaca fascicularis), one for mechanistic exploration and one for validation. Afterwards, we performed sequential sampling and applied integrative multi-omics approaches, including snRNA-Seq, snATAC-Seq, and spatial transcriptomics (Stereo-Seq), to systematically map cellular and molecular dynamics of primate liver regeneration.<h4>Results</h4>We successfully established two non-human primate models to study the spatiotemporal dynamics of liver regeneration following PHx. We generate a high-resolution map of cellular and molecular dynamics of primate liver regeneration. Our analysis identified a distinct hepatocyte subcluster with fetal liver-like transcriptional features and high regenerative activity emerging in the early stages post-PHx (18.83% in Day 3 vs. 0.48% in Day 0), which predominantly localizes in midlobular zone 2 (P < 0.0001). This subcluster was characterized by elevated expression of proliferation-associated genes and was regulated by key transcription factor POU2F1. Cross-species comparisons revealed that POU2F1 is a primate-specific regulator of liver regeneration, showing significant upregulation in primates (P < 0.01), but not in rodents. Importantly, POU2F1 expression was markedly upregulated in cirrhotic patients (2 for liver samples).<h4>Conclusion</h4>Proliferative hepatocytes localize primarily to midlobular zone 2 during primate hepatectomy regeneration process. POU2F1 is a primate-specific regulator of liver regeneration, implying novel regulatory mechanisms and emphasizing species-specific features.<h4>Impact and implications</h4>The specific mechanisms of liver regeneration in primates remain poorly understood. The hepatocyte population expressing POU2F1 is a hepatocyte cluster with high proliferative capacity, induced after PHx, mainly located in zone 2 of liver lobule. Comparative studies of liver regeneration across species indicate that POU2F1 is a specific regulator in the liver regeneration process of primates. The therapeutic targeting of POU2F1+ hepatocytes is of potential interest in human liver regeneration.

## Proposed structured change

```json
{
  "title": "Spatiotemporal Multi-Omics Reveals Primate-Specific Mechanisms of Liver Regeneration Following Partial Hepatectomy",
  "studyContext": "Partial hepatectomy in two cynomolgus monkeys with sequential sampling and integrative single-nucleus and spatial multi-omics"
}
```

## Model rationale

This abstract reports a primary non-human-primate study of liver regeneration following partial hepatectomy and is suitable as a new reference.

## Verbatim evidence from the abstract

> We performed partial hepatectomy (PHx) using a novel laparoscopically assisted hepatic wedge resection (LAHWR) approach in two cynomolgus monkeys (Macaca fascicularis), one for mechanistic exploration and one for validation.
> Afterwards, we performed sequential sampling and applied integrative multi-omics approaches, including snRNA-Seq, snATAC-Seq, and spatial transcriptomics (Stereo-Seq), to systematically map cellular and molecular dynamics of primate liver regeneration.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
