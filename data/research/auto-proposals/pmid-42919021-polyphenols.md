# Automated editorial proposal

- Proposal ID: proposal:ddcfe065ffcb98997b182e633a56b569
- Substance: polyphenols
- Suggestion type: new-caution
- Source: [Development of Single-Nucleotide Polymorphism (SNP) Markers in Sesame (Sesamum indicum L.).](https://pubmed.ncbi.nlm.nih.gov/42919021/)
- PMID: 42919021
- DOI: 10.1007/978-1-0716-5663-1_15
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Sesame (Sesamum indicum L.) is an important oilseed crop with considerable agronomic potential, widely cultivated across tropical and subtropical regions. Despite its substantial economic value, genomic research in sesame has progressed more slowly than in major staple crops. The advent of high-throughput single-nucleotide polymorphism (SNP) markers has markedly advanced sesame breeding by enabling the development of dense genetic linkage maps, genome-wide association studies (GWAS), and marker-assisted selection (MAS). This chapter presents detailed protocols for SNP discovery and validation in sesame using next-generation sequencing (NGS) approaches, specifically genotyping-by-sequencing (GBS) and double-digest restriction-site associated DNA sequencing (ddRAD-seq). It provides step-by-step methods for extracting high-quality DNA from tissues rich in polysaccharides and polyphenols, constructing sequencing libraries, performing bioinformatic filtering, and validating SNPs using Kompetitive allele specific PCR (KASP) and high-resolution melting (HRM) analysis. Particular emphasis is placed on troubleshooting common challenges related to DNA quality, restriction enzyme digestion efficiency, and the optimization of bioinformatic parameters to achieve a sufficient number of reliable SNP calls across the sesame genome.

## Proposed structured change

```json
{
  "caution": "Polyphenol-rich tissues can present challenges during DNA extraction for genomic analyses."
}
```

## Model rationale

The abstract identifies polyphenol-rich tissues as requiring specific DNA extraction methods and describes DNA quality as a common troubleshooting challenge.

## Verbatim evidence from the abstract

> troubleshooting common challenges related to DNA quality

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
