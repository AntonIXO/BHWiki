# Automated editorial proposal

- Proposal ID: proposal:90c91642fff9174d654fde668a7661d2
- Substance: creatine
- Suggestion type: new-outcome
- Source: [Multi-omics profiling of FFPE tissues identifies serine synthesis and impaired creatine metabolism as metabolic hallmarks of high-grade bladder cancer.](https://pubmed.ncbi.nlm.nih.gov/42926156/)
- PMID: 42926156
- DOI: 10.1016/j.urolonc.2026.09.020
- Published: 2026-10-24
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>High-grade (HG) bladder urothelial carcinoma is an aggressive tumor with poor outcomes, underscoring the need for early molecular stratification. However, a comprehensive functional understanding of its metabolic landscape remains limited. This study aims to delineate the proteomic and metabolic hallmarks of HG bladder cancer by leveraging formalin-fixed, paraffin-embedded (FFPE) tissue archives.<h4>Methods</h4>We performed integrated proteomic (data-independent acquisition mass spectrometry) and untargeted metabolomic profiling on FFPE specimens from a discovery cohort of 56 patients (27 low-grade/LG, 29 HG). Key findings were validated via immunohistochemistry (IHC) on an independent cohort of 60 patients (30 LG, 30 HG).<h4>Results</h4>Proteomics revealed extensive molecular remodeling in HG tumors, with 2,506 differentially expressed proteins enriched in metabolic pathways. Metabolomics identified 67 altered metabolites, highlighting a profoundly rewired metabolic network. Integrated analysis converged on 2 core pathways: (1) enhanced nucleotide anabolism supported by the upregulation of enzymes including phosphoglycerate dehydrogenase (PHGDH), and (2) a collapsed creatine-phosphagen system evidenced by marked decreases in creatine/creatinine. IHC validation confirmed significant upregulation of PHGDH in HG tumors. Intriguingly, while metabolomic and DIA‑MS‑based proteomic data indicated downregulation of guanidinoacetate N‑methyltransferase (GAMT), the terminal enzyme for creatine biosynthesis, IHC on an independent validation cohort demonstrated robust GAMT immunoreactive accumulation within HG tumor cells. This multi‑omics discordance points toward complex, non‑canonical dysregulation consistent with a working model of protein‑catalytic‑function decoupling, which is presented as a testable working model requiring further experimental validation.<h4>Conclusion</h4>This multi-omics study defines a metabolic dichotomy in HG bladder cancer, characterized by concurrent anabolic reinforcement and energy buffer collapse. We validate PHGDH as a consistent biomarker and uncover complex dysregulation of GAMT, consistent with a testable working model involving putative post-translational modifications, protein truncation, aberrant subcellular sequestration, or gain-of-non-canonical functions. Our findings provide novel metabolic biomarkers and reveal an unexpected layer of complexity in the molecular pathology of advanced bladder cancer.

## Proposed structured change

```json
{
  "outcome": "Reduced tissue creatine/creatinine levels and impaired creatine-phosphagen metabolism",
  "population": "High-grade bladder urothelial carcinoma",
  "context": "FFPE tumor tissue multi-omics profiling",
  "direction": "decreased"
}
```

## Model rationale

The study reports an association between high-grade bladder cancer and marked reductions in creatine/creatinine, indicating a collapsed creatine-phosphagen system. This is observational tumor-tissue evidence and does not establish an effect of creatine supplementation or causality.

## Verbatim evidence from the abstract

> a collapsed creatine-phosphagen system evidenced by marked decreases in creatine/creatinine

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
