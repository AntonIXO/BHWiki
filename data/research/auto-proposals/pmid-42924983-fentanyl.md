# Automated editorial proposal

- Proposal ID: proposal:69fed7286dd252cdaa1d8ef38e4862f3
- Substance: fentanyl
- Suggestion type: new-reference
- Source: [&lt;b&gt;Dose-dependent effects of transdermal fentanyl on hepatic structural integrity, biochemical function and markers of intrinsic mitochondrial apoptosis in rats&lt;/b&gt;.](https://pubmed.ncbi.nlm.nih.gov/42924983/)
- PMID: 42924983
- DOI: 10.36721/pjps/2026.40.15351.1
- Published: 2027-01-01
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Background</h4>Transdermal fentanyl is widely used for pain management; however, whether high systemic doses exert direct hepatotoxic effects or trigger intrinsic liver apoptotic pathways independently of systemic hypoxia remains unclear.<h4>Objectives</h4>This study aimed to investigate the dose-dependent effects of transdermal fentanyl on hepatic structural integrity, biochemical function and markers of intrinsic mitochondrial apoptosis (Bcl-2 and caspase-3) in rats.<h4>Methods</h4>Thirty-two Wistar albino rats were randomly assigned to four groups (n = 8): a control group and three experimental groups treated with transdermal fentanyl at doses of 3.125 µg/kg/h (Group I), 6.25 µg/kg/h (Group II) and 12.5 µg/kg/h (Group III). Patches were applied to the abdominal region and replaced every 72 hours for nine days. At the end of the experiment, liver tissues were collected for biochemical and histopathological and molecular analyses of apoptotic markers. Apoptotic changes were assessed by measuring caspase-3 and Bcl-2 levels.<h4>Results</h4>Serum alanine aminotransferase (ALT) and total cholesterol levels were significantly higher in Group II and III than in the control group (p<0.05). Glucose levels were significantly increased in all fentanyl-treated groups (p<0.05). Total protein levels were significantly elevated in Group III compared to the control group (p<0.05). Lactate dehydrogenase (LDH) levels were significantly lower in Groups II and III (p<0.05). The anti-apoptotic marker Bcl-2 was significantly decreased in Group III compared with the other groups (p<0.05), whereas no statistically significant differences were observed in caspase-3 levels among any of the groups. No evident histopathological alterations were detected in liver tissues.<h4>Conclusion</h4>High-dose transdermal fentanyl induces significant biochemical alterations and reduces Bcl-2 levels in rat liver tissue, suggesting a potential shift toward apoptotic signaling despite the absence of significant caspase-3 changes. However, short-term administration does not appear to cause evident histopathological damage.

## Proposed structured change

```json
{
  "title": "Dose-dependent effects of transdermal fentanyl on hepatic structural integrity, biochemical function and markers of intrinsic mitochondrial apoptosis in rats",
  "studyType": "animal study",
  "species": "Wistar albino rats",
  "route": "transdermal",
  "duration": "nine days"
}
```

## Model rationale

The abstract reports a controlled rat study evaluating dose-dependent hepatic biochemical, histopathological, and apoptotic-marker effects of transdermal fentanyl.

## Verbatim evidence from the abstract

> Thirty-two Wistar albino rats were randomly assigned to four groups (n = 8): a control group and three experimental groups treated with transdermal fentanyl
> Patches were applied to the abdominal region and replaced every 72 hours for nine days.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
