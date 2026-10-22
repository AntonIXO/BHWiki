# Automated editorial proposal

- Proposal ID: proposal:b7bca02d31c487ccc2ba30dec0c746f1
- Substance: caffeine
- Suggestion type: new-reference
- Source: [Evaluating the biological effects of caffeine-related compounds methylliberine and theacrine by integrated in silico and in vitro new approach methods (NAMs).](https://pubmed.ncbi.nlm.nih.gov/42880479/)
- PMID: 42880479
- DOI: 10.1016/j.fct.2026.116460
- Published: 2026-10-15
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Methylliberine (1,O2,7,9-tetramethyluric acid; 1,2,7,9-MU) and theacrine (1,3,7,9-tetramethyluric acid; 1,3,7,9-MU) are purine alkaloids found in a variety of botanicals and products marketed as dietary supplements. Despite their widespread use, extensive data on their human health effects are lacking. Therefore, methylliberine and theacrine were profiled using multiple new approach methods (NAMs): in silico metabolite predictions, in silico blood-brain barrier (BBB) permeability predictions, and in vitro assays for adenosine receptor binding (A1, A2A), functional activity (A2A), cytochrome P450 inhibition (CYP1A2), and phosphodiesterase inhibition (PDE3A, PDE4B, PDE4D). Like caffeine, methylliberine and theacrine were predicted to be metabolized via desmethylation by multiple in silico models. In silico predictions and cluster analysis also suggested that methylliberine and theacrine may permeate the BBB like caffeine. In vitro assays revealed that methylliberine and its metabolite 1,2,9-MU were CYP1A2 inhibitors (IC<sub>50</sub>, 9.6 and 27 μM, respectively) that agreed with clinical observations and could lead to interactions with drugs and xenobiotics. Both methylliberine and theacrine were A2A receptor antagonists, suggesting a potential for stimulant effects, although their potencies (52-62% inhibition at 100 μM) were weaker than theophylline, paraxanthine, and caffeine (IC<sub>50</sub>, 4.9-23.3 μM). Overall, this study highlights integration of multiple NAMs for profiling two purine alkaloids relevant to human health.

## Proposed structured change

```json
{
  "title": "Evaluating the biological effects of caffeine-related compounds methylliberine and theacrine by integrated in silico and in vitro new approach methods (NAMs).",
  "relevance": "Caffeine was used as a comparator for predicted metabolism, blood-brain barrier permeability, and A2A receptor antagonism of methylliberine and theacrine."
}
```

## Model rationale

This study is relevant to caffeine because it compares two caffeine-related purine alkaloids with caffeine across in silico metabolism and BBB permeability predictions and in vitro A2A receptor antagonism.

## Verbatim evidence from the abstract

> Like caffeine, methylliberine and theacrine were predicted to be metabolized via desmethylation by multiple in silico models.
> In silico predictions and cluster analysis also suggested that methylliberine and theacrine may permeate the BBB like caffeine.
> Both methylliberine and theacrine were A2A receptor antagonists, suggesting a potential for stimulant effects, although their potencies (52-62% inhibition at 100 μM) were weaker than theophylline, paraxanthine, and caffeine (IC<sub>50</sub>, 4.9-23.3 μM).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
