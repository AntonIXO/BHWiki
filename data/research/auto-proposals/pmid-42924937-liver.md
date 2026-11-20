# Automated editorial proposal

- Proposal ID: proposal:a92bc95f1b1a8d5d6f3f05ad506caba9
- Substance: liver
- Suggestion type: new-reference
- Source: [&lt;b&gt;Dencichine ameliorates hepatic fibrosis by modulating the PI3K/AKT signaling pathway in cellular and murine models&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42924937/)
- PMID: 42924937
- DOI: 10.36721/pjps/2026.40.16394.1
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4> Fibrotic liver is one of the serious pathophysiological consequences of chronic injury to the liver, may progress toward serious complications including cirrhosis and hepatic carcinoma.<h4>Objectives</h4>Panax notoginseng is used for both therapeutic and prophylactic purposes in TCM; it is a source of Dencichine, an active substance that has been proven to exhibit antifibrotic properties in hepatic fibrosis. The present study investigated how Dencichine treatment ameliorates liver fibrosis using an animal model and a cellular fibrosis model.<h4>Methods</h4>Randomly assigned, male C57BL/6J mice received 10% CCl4 for 15 consecutive weeks to induce hepatic fibrosis. Treatment with Dencichine was initiated from 7th week onward. To simulate in-vitro the presence of a fibrotic microenvironment, LX-2 cells were treated with PDGF-BB at a concentration of 20 ng/mL and incubated from one up to four days and then treated by various doses of Dencichine. Liver function was evaluated by measuring alanine aminotransferase (ALT), AST, HA and LN. Histopathology was evaluated by haematoxylin/eosin (HE), Masson's trichrome and Sirius red stains. Quantitative real-time PCR and western blot analyses were used to evaluate mRNA and protein expression levels, respectively. Wound-healing assays and transwell chamber experiments were used to assess cell migration; EdU proliferation detection and flow cytometry were performed to measure cell proliferation and cell cycle, respectively.<h4>Results</h4> The most important results are a considerable reduction of serum concentrations of AST and ALT, HA and laminin in CCl4-treated mice decreased liver injury and ECM deposition. Furthermore, this compound downregulated the expression of cyclin D1 and cyclin E1 and blocked the activation of PI3K and AKT kinases in fibrotic liver cells.<h4>Conclusion</h4>These results indicate that Dencichine may slow the development of liver fibrosis by interfering with the PI3K-AKT signaling cascade, demonstrating significant anti-scarring properties.

## Proposed structured change

```json
{
  "title": "Dencichine ameliorates hepatic fibrosis by modulating the PI3K/AKT signaling pathway in cellular and murine models",
  "studyModels": [
    "male C57BL/6J mice with CCl4-induced hepatic fibrosis",
    "LX-2 cellular fibrosis model"
  ]
}
```

## Model rationale

The abstract reports a cellular and murine study directly evaluating Dencichine in liver fibrosis.

## Verbatim evidence from the abstract

> The present study investigated how Dencichine treatment ameliorates liver fibrosis using an animal model and a cellular fibrosis model.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
