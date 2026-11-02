# Automated editorial proposal

- Proposal ID: proposal:511b2a15840e6fe3c89940a7dffc9e7d
- Substance: caffeine
- Suggestion type: new-effect
- Source: [Caffeine attenuates Aβ-induced hippocampal dysfunction alongside changes in adenosine receptor-linked GABA handling and neuronal excitability.](https://pubmed.ncbi.nlm.nih.gov/42906650/)
- PMID: 42906650
- DOI: 10.1016/j.phrs.2026.109697
- Published: 2026-10-21
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> Synaptic and circuit dysfunction in the hippocampus is an early feature of Alzheimer's disease, involving disturbances at both excitatory and inhibitory synapses. Adenosine receptors (ARs) regulate hippocampal glutamatergic and GABAergic signaling. Caffeine, a non-selective AR antagonist, has well-established neuroprotective actions. We examined whether caffeine attenuates amyloid-β (Aβ)-induced changes in neuronal viability, GABA handling, intrinsic excitability and synaptic excitation/inhibition (E/I) balance, and whether these functional effects occur alongside changes in AR and GABA transporter 1 (GAT-1) protein abundance. Primary mouse hippocampal cultures were exposed to Aβ<sub>1-42</sub> (1nM) and/or caffeine (0.1, 1, 25, and 50µM) for culture-based assays, whereas acute hippocampal slices were exposed to Aβ<sub>1-42</sub> (100nM) and/or caffeine (25µM) during whole-cell patch-clamp recordings from CA1 pyramidal neurons. In cultures, Aβ increased neuronal death, confirming previous reports, and caffeine co-treatment attenuated this effect. Total GAT-1, A1R and A2AR protein levels were unchanged, whereas Aβ reduced neuronal A1R immunoreactivity; this reduction was not observed with caffeine co-treatment. Radiometric assays identified treatment-associated differences in 1-h <sup>3</sup>H-GABA accumulation and basal <sup>3</sup>H-GABA outflow, including a non-significant trend toward increased accumulation after Aβ exposure and reduced accumulation in the Aβ+caffeine condition. In slices, Aβ flattened the frequency-current relationship and transiently reduced the E/I ratio, whereas these changes were not observed during caffeine co-application; subsequent caffeine exposure restored firing output after 30min of Aβ exposure. Further experiments are required to establish if changes in A1R immunoreactivity or radiometric GABA handling contribute to the electrophysiological effects.

## Proposed structured change

```json
{
  "effect": "Caffeine co-treatment attenuated Aβ-induced neuronal death in primary mouse hippocampal cultures.",
  "population": "Primary mouse hippocampal cultures",
  "context": "Aβ1-42 exposure",
  "direction": "protective"
}
```

## Model rationale

The abstract reports that Aβ increased neuronal death and that caffeine co-treatment attenuated this effect, supporting a protective effect in this in vitro model.

## Verbatim evidence from the abstract

> In cultures, Aβ increased neuronal death, confirming previous reports, and caffeine co-treatment attenuated this effect.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
