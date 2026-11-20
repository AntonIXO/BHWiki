# Automated editorial proposal

- Proposal ID: proposal:1515ac8cbd9db7b7bb048acfc15692b0
- Substance: memantine-019fe218
- Suggestion type: ignore
- Source: [Angiotensin II Receptor Blockers and the Risk of Alzheimer's Disease Progression: A Population-Based Cohort Study.](https://pubmed.ncbi.nlm.nih.gov/42899358/)
- PMID: 42899358
- DOI: 10.1111/bcpt.70323
- Published: 2026-11-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> We investigated the effects of angiotensin II receptor blockers (ARBs) on the progression of Alzheimer's disease (AD). This retrospective cohort study used data from the Korean nationwide claims data to identify patients with AD aged 60-79 years in 2010. ARB users and nonusers were 1:1 propensity score matched. Cox proportional hazards regression evaluated AD progression, defined as memantine initiation and mortality. Active-comparator and dose-response analyses were conducted. ARB use was associated with lower risks of memantine initiation (hazard ratio [HR] = 0.79; 95% confidence interval [CI] = 0.70-0.89) and mortality (HR = 0.83; 95% CI = 0.76-0.89). Cumulative exposure analyses showed stronger associations in the highest exposure categories, including 2-3 years of ARB use and ≥ 2 DDD-years, whereas associations in the lower exposure categories were not statistically significant. In active-comparator analyses, ARBs were associated with lower mortality risk than ACE inhibitors and beta-blockers, but not with dihydropyridine calcium channel blockers (CCBs). ARB use may be a reasonable antihypertensive choice in patients with AD, although the comparable outcomes between ARBs and CCBs suggest that these associations may not be unique to ARBs and may instead reflect shared blood pressure-lowering and vascular effects. Further prospective research is warranted to optimize antihypertensive selection in patients with AD.

## Proposed structured change

```json
{}
```

## Model rationale

Memantine is mentioned only as a claims-based endpoint defining Alzheimer's disease progression; the study evaluates angiotensin II receptor blockers, not memantine's effects, safety, or efficacy.

## Verbatim evidence from the abstract

> Cox proportional hazards regression evaluated AD progression, defined as memantine initiation and mortality.
> ARB use was associated with lower risks of memantine initiation (hazard ratio [HR] = 0.79; 95% confidence interval [CI] = 0.70-0.89) and mortality (HR = 0.83; 95% CI = 0.76-0.89).

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
