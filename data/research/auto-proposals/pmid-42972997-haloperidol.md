# Automated editorial proposal

- Proposal ID: proposal:f1f0ce8ea2de1f5285e124962dac225e
- Substance: haloperidol
- Suggestion type: new-effect
- Source: [Catatonic signs during delirium in leptomeningeal melanoma: Treatment trade-offs in end-of-life care.](https://pubmed.ncbi.nlm.nih.gov/42972997/)
- PMID: 42972997
- DOI: 10.1017/s1478951526103708
- Published: 2026-11-03
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Objectives</h4>Catatonic and delirious signs overlap, creating treatment dilemmas when sedation obscures diagnostic assessment. We describe serial assessment and medication decision-making in advanced leptomeningeal melanoma during transition to home hospice.<h4>Methods</h4>Inpatient observations, investigations, medication exposures, goals-of-care discussions, and serial Bush-Francis Catatonia Rating Scale (BFCRS) examinations were synthesized.<h4>Results</h4>A man in his late 30s with metastatic melanoma involving the leptomeninges and brain developed fluctuating arousal, inattention, disorientation, mutism, immobility, staring, withdrawal, and waxy flexibility. His Bush-Francis Catatonia Rating Scale (BFCRS) score decreased from 7 to 1 after intravenous lorazepam, although reassessment was limited by sedation and fluctuating wakefulness. Transient improvements in movement and speech did not translate into sustained gains in attention, communication, intake, mobility, or function. Lorazepam was subsequently reduced and discontinued when severe agitation emerged. As catatonic signs became less sustained and agitation threatened safety, scheduled haloperidol was introduced, with improvement in evening agitation and no documented extrapyramidal symptoms, oversedation, or QTc prolongation. A supervised oral-medication trial supported discharge planning, although hospice placement remained delayed by insurance barriers.<h4>Significance of results</h4>A lower BFCRS score after lorazepam does not necessarily indicate meaningful clinical response if arousal, attention, and function remain impaired. In advanced cancer, catatonic signs may occur within a broader delirious or toxic-neurologic encephalopathy. Serial assessment should therefore incorporate wakefulness, attention, mobility, communication, and patient- and caregiver-defined goals. Treatment should be guided by the immediate priorities of interaction, safety, or comfort and continually reassessed in light of prognosis and feasibility of home care.

## Proposed structured change

```json
{
  "effect": "Scheduled haloperidol was associated with improvement in evening agitation in advanced leptomeningeal melanoma with delirious or catatonic signs; no extrapyramidal symptoms, oversedation, or QTc prolongation were documented.",
  "context": "Single observational end-of-life case; haloperidol was introduced after catatonic signs became less sustained and agitation threatened safety."
}
```

## Model rationale

The abstract reports an observed improvement in evening agitation after scheduled haloperidol, while explicitly noting the absence of several documented adverse effects. This is limited to a single case and does not establish general efficacy or safety.

## Verbatim evidence from the abstract

> As catatonic signs became less sustained and agitation threatened safety, scheduled haloperidol was introduced, with improvement in evening agitation and no documented extrapyramidal symptoms, oversedation, or QTc prolongation.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
