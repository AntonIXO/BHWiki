# Automated editorial proposal

- Proposal ID: proposal:f3a7eca23eaf21111552675e63b06a41
- Substance: berberine
- Suggestion type: new-reference
- Source: [&lt;b&gt;Berberine improves diabetic foot ulcer healing after tibial transverse osteotomy by inhibiting the PDGF-B/PDGFRβ signaling pathway&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42924998/)
- PMID: 42924998
- DOI: 10.36721/pjps/2026.40.15603.1
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Tibial transverse osteotomy (TTO) is a promising but limited surgical option for diabetic foot (DF). Berberine, a natural compound from Coptis chinensis, exhibits anti-inflammatory and pro-angiogenic effects relevant to metabolic diseases.<h4>Objectives</h4>This study aimed to evaluate whether adjunctive berberine enhances the therapeutic outcomes of TTO in DF patients and to explore its potential association with the platelet-derived growth factor-B (PDGF-B)/PDGF receptor-β (PDGFRβ) signaling pathway.<h4>Methods</h4>This was a prospective, single-center, randomized, placebo-controlled, parallel-group, blinded trial. Of 200 screened DF patients, 96 eligible participants (Wagner grade 2-4) scheduled for TTO were randomized 1:1 to receive either TTO plus local berberine injections (n=48) or TTO plus local saline placebo (n=48). An additional non-randomized diabetic reference group (n=10) and healthy control group (n=10) were included for exploratory cellular studies only. The primary outcome was the total effective rate of ulcer healing at 3 months. Secondary outcomes included changes in Ankle-Brachial Index (ABI), ulcer area, Visual Analogue Scale (VAS) pain score and serum inflammatory markers (hs-CRP, IL-6). Exploratory outcomes comprised serum VEGF, bFGF and PDGF-B levels, as well as fibroblast apoptosis in wound tissue.<h4>Results</h4>All 96 randomized participants completed the 3-month follow-up, with no dropouts. The berberine group demonstrated a significantly higher total effective rate than the surgery-alone group (87.5% vs. 68.8%; risk difference, 18.7%; 95% CI, 1.2% to 36.2%; P < 0.05). At 3 months, the berberine group also showed greater improvements in ABI (mean difference, 0.13; 95% CI, 0.08 to 0.18; P < 0.01) and ulcer healing rate (mean difference, 16.7%; 95% CI, 9.5% to 23.9%; P < 0.01), along with more significant reductions in hs-CRP and IL-6. Berberine treatment was associated with reduced fibroblast apoptosis in wound tissue (mean difference, -1.10%; 95% CI, -1.56% to -0.64%; P = 0.001) and lower protein expression of PDGF-B and PDGFRβ. No severe adverse events related to berberine injections were reported.<h4>Conclusion</h4>In DF patients undergoing TTO, adjunctive local berberine therapy significantly improves the total effective rate and promotes ulcer healing, with benefits associated with reduced inflammation and fibroblast apoptosis and downregulation of the PDGF-B/PDGFRβ pathway. These findings are correlative and require further mechanistic validation. Larger multi-center trials are needed to confirm efficacy and safety.

## Proposed structured change

```json
{
  "title": "Berberine improves diabetic foot ulcer healing after tibial transverse osteotomy by inhibiting the PDGF-B/PDGFRβ signaling pathway",
  "study_design": "prospective, single-center, randomized, placebo-controlled, parallel-group, blinded trial",
  "population": "96 diabetic foot patients with Wagner grade 2-4 ulcers scheduled for tibial transverse osteotomy",
  "intervention": "TTO plus local berberine injections",
  "comparator": "TTO plus local saline placebo"
}
```

## Model rationale

The abstract reports a prospective randomized placebo-controlled clinical trial evaluating adjunctive local berberine in diabetic foot ulcer patients undergoing tibial transverse osteotomy.

## Verbatim evidence from the abstract

> This was a prospective, single-center, randomized, placebo-controlled, parallel-group, blinded trial.
> 96 eligible participants (Wagner grade 2-4) scheduled for TTO were randomized 1:1 to receive either TTO plus local berberine injections (n=48) or TTO plus local saline placebo (n=48).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
