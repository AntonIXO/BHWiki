# Automated editorial proposal

- Proposal ID: proposal:e3319a8b09f0fb8795ac428f7ded98f1
- Substance: n-acetylcysteine-019fe218
- Suggestion type: new-effect
- Source: [Evidence on Glutathione and Boosters for Prevention of Chemotherapy-Induced Neuropathy: A Systematic Review and Network Meta-Analysis.](https://pubmed.ncbi.nlm.nih.gov/42876024/)
- PMID: 42876024
- DOI: 10.1111/bcpt.70319
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Chemotherapy-induced peripheral neuropathy (CIPN) adversely affects treatment efficacy and quality of life. Despite studies on glutathione (GSH) or GSH boosters' antioxidative effects for prevention, optimal management remains uncertain. We conducted a systematic review and network meta-analysis of randomized controlled trials to consolidate and critically appraise the current evidence and to compare the efficacy of GSH and GSH boosters for the prevention of CIPN. The MEDLINE, Embase and CENTRAL databases were searched through March 2025. Twenty-five RCTs involving 1625 patients were included. No intervention significantly reduced all-grade CIPN compared with placebo. N-acetylcysteine (odds ratio [OR] 0.19, 95% credible intervals [CrI] 0.05-0.63), GSH (OR 0.34, 95% CrI 0.13-0.79) and vitamin E (OR 0.33, 95% CrI 0.11-0.91) were associated with a reduced incidence of grade 3/4 CIPN compared with placebo. N-acetylcysteine ranked highest for both all-grade and grade 3/4 CIPN prevention. These findings remained consistent in sensitivity analyses excluding patients with pre-existing neuropathy but were not retained in analyses restricted to double-blind studies. Overall, N-acetylcysteine, GSH, and vitamin E were associated with potential reductions in severe CIPN, with N-acetylcysteine consistently ranking highest, although these associations should be regarded as preliminary. Further rigorously conducted and adequately powered trials are warranted to confirm these findings and evaluate agents demonstrating potential benefits.

## Proposed structured change

```json
{
  "outcome": "Grade 3/4 chemotherapy-induced peripheral neuropathy",
  "direction": "reduced incidence versus placebo",
  "estimate": "OR 0.19; 95% CrI 0.05-0.63",
  "population": "Patients receiving chemotherapy",
  "study_type": "Systematic review and network meta-analysis of randomized controlled trials"
}
```

## Model rationale

The abstract reports an association between N-acetylcysteine and reduced severe CIPN incidence versus placebo, with N-acetylcysteine ranking highest for prevention.

## Verbatim evidence from the abstract

> N-acetylcysteine (odds ratio [OR] 0.19, 95% credible intervals [CrI] 0.05-0.63)

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
