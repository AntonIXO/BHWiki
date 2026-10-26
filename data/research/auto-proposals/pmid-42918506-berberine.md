# Automated editorial proposal

- Proposal ID: proposal:770448ff0cd240ec96a48ba19e0159c2
- Substance: berberine
- Suggestion type: new-reference
- Source: [Anticonvulsant activity of berberine: a systematic review and meta-analysis of preclinical studies in animal models.](https://pubmed.ncbi.nlm.nih.gov/42918506/)
- PMID: 42918506
- DOI: 10.1016/j.fitote.2026.107526
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Introduction and aim</h4>Epilepsy affects approximately 50 million people worldwide, and a substantial proportion of patients have drug-resistant disease or experience adverse effects from anticonvulsant medications. Berberine, a blood-brain-barrier-permeant isoquinoline alkaloid, has shown anticonvulsant potential in preclinical models. This systematic review and meta-analysis evaluated the preclinical evidence on berberine's anticonvulsant efficacy, its dose-response and formulation dependence, and its mechanisms of action.<h4>Methodology</h4>PubMed, Scopus, Web of Science and the Cochrane Library were searched and reported per PRISMA 2020 (PROSPERO CRD420251135006). Random-effects models (DerSimonian-Laird with Hartung-Knapp adjustment) pooled dichotomous outcomes as risk ratios (RR) and continuous outcomes as standardised mean differences (SMD); pre-specified subgroup, dose-response, leave-one-out and GRADE analyses were conducted.<h4>Results</h4>Sixteen studies were included. Berberine reduced the incidence of status epilepticus/generalised seizure (RR 0.73, 95% CI 0.61-0.87; I<sup>2</sup> = 35%), the proportion reaching the fully kindled state (RR 0.53, 0.37-0.75; I<sup>2</sup> = 0%) and seizure-related mortality (RR 0.72, 0.60-0.85; I<sup>2</sup> = 0%), with a trend toward fewer spontaneous recurrent seizures (RR 0.65, 0.40-1.04). Seizure severity decreased (SMD 3.09, 1.45-4.74) and latency increased (SMD 1.50, 0.23-2.76). A monotonic dose-response gradient was observed across ascending dose tiers (≤25, 50 and ≥ 100 mg/kg; RR 0.88 → 0.67 → 0.41), and nano-encapsulated berberine markedly outperformed conventional berberine (kindling RR 0.04 vs 0.53). Mechanistically, berberine reduced lipid peroxidation (MDA, SMD 1.82, 0.63-3.01) and raised the antioxidant enzyme superoxide dismutase (SOD, SMD 1.44, 0.48-2.40).<h4>Conclusion</h4>Berberine exerts a consistent, dose-dependent, multi-target anticonvulsant effect that is greatly enhanced by nanoformulation. Certainty was moderate for the primary outcome and low-moderate elsewhere, defining berberine as a rational candidate for further translational development in epilepsy.

## Proposed structured change

```json
{
  "title": "Anticonvulsant activity of berberine: a systematic review and meta-analysis of preclinical studies in animal models.",
  "studyType": "systematic review and meta-analysis of preclinical animal studies",
  "registration": "PROSPERO CRD420251135006",
  "includedStudies": 16
}
```

## Model rationale

The abstract reports a systematic review and meta-analysis directly evaluating berberine in animal models of epilepsy.

## Verbatim evidence from the abstract

> This systematic review and meta-analysis evaluated the preclinical evidence on berberine's anticonvulsant efficacy
> Sixteen studies were included.
> PROSPERO CRD420251135006

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
