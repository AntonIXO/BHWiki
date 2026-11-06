# Automated editorial proposal

- Proposal ID: proposal:b7f7de6f64c8df9332b7c7265993cd9a
- Substance: liver
- Suggestion type: new-reference
- Source: [Liver Injury Due to Hormonal Contraceptives in the Modern Era.](https://pubmed.ncbi.nlm.nih.gov/42969678/)
- PMID: 42969678
- DOI: 10.1111/liv.70945
- Published: 2026-12-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background and aims</h4>Hormonal agents and their association with liver injury remain a concern in clinical practice. This study aimed to characterise the biochemical and clinical features of hormonal agent-associated liver injury and compare them with a control group of age- and gender-matched cases of liver injury caused by non-hormonal drugs.<h4>Methods</h4>Of 2123 adjudicated drug-induced liver injury cases enrolled in the Drug-Induced Liver Injury Network (2004-2024), 20 high-confidence cases (1.3%) were attributed to hormonal agents. These cases were compared with age- and sex-matched non-hormonal drug-induced liver injury (DILI) controls, and analyses assessed clinical features, biochemical patterns, outcomes, HLA alleles and candidate genetic variants associated with cholestatic liver disease.<h4>Results</h4>The median age of women was 22 years. Most presented within 2-12 weeks with jaundice and pruritus, predominantly with cholestatic or mixed patterns of liver enzyme elevations, but a hepatocellular pattern was not uncommon at 28%. The route of administration did not appear to influence DILI risk. Half underwent a liver biopsy, and half required hospitalization, but none died or required liver transplantation. Compared with other DILI cases, hormonal agent-associated liver injury was more often cholestatic, with jaundice and pruritus, and less frequently associated with fever or rash. No HLA association was identified, although the intronic MROH2A variant rs6722064 ranked as the top potential candidate for increased risk [OR (95% CI) = 3.58 (1.67, 7.65), p = 0.001].<h4>Conclusions</h4>Hormonal agent-associated liver injury presents with a distinctive mixed or cholestatic pattern and often lacks the inflammatory features seen in other DILI cases. These findings underscore the need for greater clinical awareness to improve patient outcomes.

## Proposed structured change

```json
{
  "title": "Liver Injury Due to Hormonal Contraceptives in the Modern Era.",
  "population": "20 high-confidence hormonal agent-associated liver injury cases from the Drug-Induced Liver Injury Network, compared with age- and sex-matched non-hormonal drug-induced liver injury controls",
  "studyPeriod": "2004-2024"
}
```

## Model rationale

The abstract reports a comparative analysis of hormonal agent-associated drug-induced liver injury cases and matched controls.

## Verbatim evidence from the abstract

> Of 2123 adjudicated drug-induced liver injury cases enrolled in the Drug-Induced Liver Injury Network (2004-2024), 20 high-confidence cases (1.3%) were attributed to hormonal agents.
> These cases were compared with age- and sex-matched non-hormonal drug-induced liver injury (DILI) controls

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
