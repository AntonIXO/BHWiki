# Automated editorial proposal

- Proposal ID: proposal:0bc29f0dcfebfca182fe028f9f594f54
- Substance: quercetin
- Suggestion type: new-effect
- Source: [&lt;b&gt;Exploring the association of quercetin with liver fibrosis through network pharmacology and 16S rRNA gene sequencing&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42929408/)
- PMID: 42929408
- DOI: 10.36721/pjps/2026.40.16003.1
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Liver fibrosis is a chronic wound healing process of liver injury and gut-liver axis dysregulation has been recently identified as an important contributor to liver fibrosis progression. Quercetin has been reported to have anti-inflammatory activity and microbiota-modulating effects. However, the potential targets of quercetin remain unclear, as does the relationship between quercetin-associated targets and changes in the gut microbiota in liver fibrosis.<h4>Objectives</h4>The purpose of this study was to use network pharmacology to predict potential targets of quercetin associated with liver fibrosis and to explore changes in gut microbiota following treatment with quercetin using a CCl4-induced rat model.<h4>Methods</h4>Eighteen male Sprague-Dawley rats were randomized into CON group, MOD group and QR group (n = 6 per group). Liver fibrosis was induced by weekly subcutaneous injection of carbon tetrachloride (CCl4) for eight weeks. Oral gavage of quercetin (50 mg/kg/day) was performed in QR group. Histopathological changes were assessed by hematoxylin-eosin staining, Masson staining and Ishak scoring. Potential targets of quercetin were screened using network pharmacology, followed by protein-protein interaction (PPI) network construction and Gene Ontology (GO)/Kyoto Encyclopedia of Genes and Genomes (KEGG) enrichment analyses. Cecal microbiota composition was determined by 16S rRNA gene sequencing. Parametric or non-parametric tests were used accordingly, including one-way ANOVA or Kruskal-Wallis test.<h4>Results</h4>Histopathology revealed significant liver injury and fibrosis in the MOD group relative to the CON group. The QR group showed lower Ishak fibrosis scores and milder histopathological features compared with the MOD group. Network pharmacology analysis identified UBC, UBE2I, RBX1, PSMB7 and UBA1 as hub targets, with KEGG pathways of interest including the TNF signaling pathway, p53 signaling pathway, Toll-like receptor signaling pathway and ubiquitin-mediated proteolysis. Alpha diversity of the cecal microbiota differed significantly among groups, whereas beta diversity did not. Relative abundance of Proteobacteria decreased and Firmicutes increased in the QR group relative to the MOD group. Taxa enrichment analysis identified enrichment of Muribaculaceae and Ligilactobacillus in the QR group.<h4>Conclusion</h4>Histopathology and microbiome analyses indicated that quercetin intervention was associated with altered liver histopathological features and shifts in gut microbiota composition in rats with CCl4-induced liver fibrosis. Network pharmacology predicted several hub targets and pathways potentially linked to these observations. As the present analyses are purely correlational and lack mechanistic validation at the molecular level, no causal relationships are implied between the predicted targets/pathways and the observed histological or microbiome changes. These findings should be regarded as hypothesis-generating and warrant further validation studies.

## Proposed structured change

```json
{
  "effect": "associated with lower liver fibrosis scores and milder histopathological features",
  "model": "CCl4-induced liver fibrosis in male Sprague-Dawley rats",
  "dose": "50 mg/kg/day orally",
  "duration": "eight weeks"
}
```

## Model rationale

The rat study reported improved histopathological fibrosis measures after quercetin intervention, but the finding is limited to this animal model and does not establish causality.

## Verbatim evidence from the abstract

> The QR group showed lower Ishak fibrosis scores and milder histopathological features compared with the MOD group.
> Oral gavage of quercetin (50 mg/kg/day) was performed in QR group.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
