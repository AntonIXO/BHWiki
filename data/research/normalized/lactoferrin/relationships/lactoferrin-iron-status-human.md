---
id: lactoferrin-iron-status-human
label: Lactoferrin and human iron-status outcomes
relation: evaluated-for
members:
  - substance:lactoferrin
  - tag:hemoglobin-concentration
  - tag:serum-ferritin
memberRoles:
  substance:lactoferrin: intervention
  tag:hemoglobin-concentration: measured outcome
  tag:serum-ferritin: measured outcome
sourceUrl: https://pubmed.ncbi.nlm.nih.gov/42302886/
sourceUrls:
  - https://pubmed.ncbi.nlm.nih.gov/42302886/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9556315/
  - https://pubmed.ncbi.nlm.nih.gov/19639462/
directedSteps:
  - from: substance:lactoferrin
    to: tag:hemoglobin-concentration
    label: evaluated in randomized human anemia trials with population-dependent and conflicting results
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/42302886/
      - https://pmc.ncbi.nlm.nih.gov/articles/PMC9556315/
  - from: substance:lactoferrin
    to: tag:serum-ferritin
    label: evaluated as an iron-status endpoint; large 2026 monotherapy trial strongly favored ferrous sulfate
    sourceUrls:
      - https://pubmed.ncbi.nlm.nih.gov/42302886/
x-shape:
  - id
  - label
  - relation
  - members
  - memberRoles
  - sourceUrl
  - sourceUrls
  - directedSteps
  - description
---

## Description

Human trials directly evaluate lactoferrin against hematologic and iron-store outcomes, but the direction is not uniform. The largest modern monotherapy trial found bovine lactoferrin inferior to ferrous sulfate, while smaller disease-specific trials reported favorable results.

Human randomized trials directly connect lactoferrin exposure with hemoglobin and ferritin measurement. The relationship is evidence-supported but not uniformly beneficial: the largest current monotherapy trial is negative relative to ferrous sulfate.
