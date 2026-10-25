# Automated editorial proposal

- Proposal ID: proposal:2f04c3fbc35453cc51412bf783fb31e0
- Substance: caffeine
- Suggestion type: new-effect
- Source: [Should Coffee Consumers Not Have Their Habitual Morning Coffee Before Testing Their Cognitive Functions?](https://pubmed.ncbi.nlm.nih.gov/42920333/)
- PMID: 42920333
- DOI: 10.1002/hup.70070
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Objective</h4>Caffeine could improve cognitive functions, but study protocols usually prohibit drinking coffee before cognitive testing. However, regular coffee consumers may experience withdrawal effects when they cannot drink their habitual coffee, which may impair cognitive performance. Therefore, we tested the effects of overnight coffee abstinence in regular coffee consumers: once allowing to drink their coffee and once not drinking coffee. The cognitive performance was compared with non-regular coffee consumers.<h4>Methods</h4>Thirty regular coffee consumers (RCCs) and 25 non-regular consumers (N-RCCs) took part in this study. RCCs were tested after their habitual morning coffee (c-RCC) and after overnight abstinence (a-RCC); N-RCCs were tested once. A cognitive battery assessed reaction time (RT), processing speed (digit symbol substitution test), working memory, verbal learning/memory and executive function (Stroop). Sleep quality was included as a covariate.<h4>Results</h4>Compared to c-RCC, overnight coffee abstinence significantly slowed RTs but did not affect the performance in the other cognitive tasks. In the a-RCC condition, but not the c-RCC condition, the RTs were slower than those of the N-RCCs, while accuracy measures were comparable across groups. Sleep quality did not alter these findings.<h4>Conclusions</h4>Overnight coffee abstinence selectively slowed RT, and no statistical support was found for effects on memory or executive function. This suggests that overnight coffee abstinence protocols may introduce withdrawal-related RT slowing as a confound in habitual consumers, whereas other cognitive domains may not be affected. Allowing habitual consumers to maintain normal coffee intake could reduce this bias, supporting tailored rather than uniform abstinence requirements based on the specific outcomes studied.

## Proposed structured change

```json
{
  "effect": "Overnight coffee abstinence selectively slowed reaction times in regular coffee consumers, while accuracy, memory, executive function, processing speed, and working memory were not statistically affected.",
  "population": "Regular coffee consumers",
  "comparison": "Habitual morning coffee versus overnight abstinence"
}
```

## Model rationale

The study found a selective reaction-time effect of overnight abstinence without statistical support for effects on other assessed cognitive domains.

## Verbatim evidence from the abstract

> Compared to c-RCC, overnight coffee abstinence significantly slowed RTs but did not affect the performance in the other cognitive tasks.
> Overnight coffee abstinence selectively slowed RT, and no statistical support was found for effects on memory or executive function.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
