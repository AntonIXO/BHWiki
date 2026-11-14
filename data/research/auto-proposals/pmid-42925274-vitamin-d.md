# Automated editorial proposal

- Proposal ID: proposal:9061497e4f7b17d705d62f72f655be00
- Substance: vitamin-d
- Suggestion type: new-reference
- Source: [Comparison of the efficacy of daily versus weekly vitamin D supplementation on GOLD classification in COPD patients with vitamin D deficiency: An open-label randomized clinical trial.](https://pubmed.ncbi.nlm.nih.gov/42925274/)
- PMID: 42925274
- DOI: 10.1177/02601060261499901
- Published: 2026-10-24
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> BackgroundChronic obstructive pulmonary disease (COPD), characterized by irreversible airflow limitation, markedly reduces expiratory airflow. COPD patients commonly suffer from vitamin D deficiency, which is strongly associated with reduced forced expiratory volume in 1 second (FEV1) and forced vital capacity (FVC).AimThis study compared the effects of weekly versus daily vitamin D supplementation on lung function in COPD patients with low baseline vitamin D levels.MethodsIn this open-label randomized clinical trial, 49 patients with COPD and baseline serum 25-hydroxyvitamin D levels below 30 ng/mL were allocated to receive either daily 4000 IU or weekly 50,000 IU vitamin D3, in addition to standard COPD treatment, for 12 weeks.SummaryAfter the intervention, serum vitamin D levels increased in both supplementation groups, while lung-function measures also increased from baseline. Although the weekly group showed numerically higher post-intervention FEV1 and FEV1 percentage values, the between-group differences were not statistically significant after adjustment for baseline age (<i>p</i> = 0.079 for absolute FEV1; <i>p</i> = 0.981 for FEV1 percentage). We observed a significant association between post-intervention vitamin D levels and post-intervention FEV1 (<i>R</i><sup>2</sup> = 0.42, <i>p</i> < 0.001). These findings do not demonstrate superiority of the weekly regimen over the daily regimen, and larger randomized controlled trials are needed to determine whether clinically meaningful differences exist between dosing schedules.

## Proposed structured change

```json
{
  "title": "Comparison of the efficacy of daily versus weekly vitamin D supplementation on GOLD classification in COPD patients with vitamin D deficiency: An open-label randomized clinical trial.",
  "studyDesign": "Open-label randomized clinical trial",
  "population": "49 patients with COPD and baseline serum 25-hydroxyvitamin D levels below 30 ng/mL",
  "interventions": [
    "Daily 4000 IU vitamin D3",
    "Weekly 50,000 IU vitamin D3"
  ],
  "backgroundTreatment": "Standard COPD treatment",
  "duration": "12 weeks"
}
```

## Model rationale

The abstract reports a randomized clinical trial directly comparing two vitamin D3 supplementation schedules in vitamin D-deficient patients with COPD.

## Verbatim evidence from the abstract

> In this open-label randomized clinical trial, 49 patients with COPD and baseline serum 25-hydroxyvitamin D levels below 30 ng/mL were allocated to receive either daily 4000 IU or weekly 50,000 IU vitamin D3, in addition to standard COPD treatment, for 12 weeks.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
