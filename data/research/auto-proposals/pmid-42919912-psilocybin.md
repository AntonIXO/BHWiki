# Automated editorial proposal

- Proposal ID: proposal:014f184e20b0bef09ddb3a6e5b585f05
- Substance: psilocybin
- Suggestion type: new-effect
- Source: [Sustained antidepressant-like effects of psychedelics through 5-HT&lt;sub&gt;2A&lt;/sub&gt;R-β-arrestin signaling.](https://pubmed.ncbi.nlm.nih.gov/42919912/)
- PMID: 42919912
- DOI: 10.1038/s41593-026-02497-5
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Psychedelics produce long-lasting antidepressant effects, but their hallucinogenic properties limit clinical use. Using structure-guided design of 5-HT<sub>2A</sub>R-β-arrestin-biased agonists, we identified β-arrestin signaling as a critical driver of prolonged antidepressant-like effects in mice. Here we show that the slow-dissociation kinetics of lysergic acid diethylamide (LSD) enable progressive accumulation of 5-HT<sub>2A</sub>R engagement during repeated low-dose administration, approaching the receptor occupancy achieved by an acute high dose while avoiding its high peak concentration. This kinetic separation sustains β-arrestin signaling while limiting robust Gα<sub>q</sub>-mediated Ca<sup>2+</sup> responses. Consistent with this framework, repeated low-dose LSD and repeated low-dose psilocybin pretreatment followed by a high-dose psychedelic challenge produced sustained antidepressant-like behavioral effects in mice. In parallel, these regimens produced no detectable psychedelic-associated behavioral disruption in mice and cynomolgus macaques. Together, these findings uncover the signaling basis of sustained psychedelic efficacy and provide a rational framework for developing nonhallucinogenic psychedelic therapies for psychiatric disorders.

## Proposed structured change

```json
{
  "effect": "Repeated low-dose psilocybin pretreatment followed by a high-dose psychedelic challenge produced sustained antidepressant-like behavioral effects in mice.",
  "population": "mice",
  "regimen": "repeated low-dose pretreatment followed by a high-dose psychedelic challenge"
}
```

## Model rationale

The abstract directly reports a sustained antidepressant-like behavioral outcome for repeated low-dose psilocybin pretreatment in mice.

## Verbatim evidence from the abstract

> Consistent with this framework, repeated low-dose LSD and repeated low-dose psilocybin pretreatment followed by a high-dose psychedelic challenge produced sustained antidepressant-like behavioral effects in mice.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
