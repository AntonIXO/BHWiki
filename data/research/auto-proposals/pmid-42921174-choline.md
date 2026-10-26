# Automated editorial proposal

- Proposal ID: proposal:6dcfa743f2be23f3c56b07a061321a6e
- Substance: choline
- Suggestion type: new-effect
- Source: [Perioperative Cerebral Metabolism in Patients Under General Anaesthesia With Sevoflurane or Propofol: Evaluation of the Arterial and Jugular Bulb Metabolome.](https://pubmed.ncbi.nlm.nih.gov/42921174/)
- PMID: 42921174
- DOI: 10.1155/anrp/8559251
- Published: 2026-10-23
- Journal: not stated

This file is a review proposal. It is not a published BHWiki article and must not be treated as medical guidance.

## Embedded source snapshot

This abstract snapshot is included so an offline reviewer can check abstract-level claims. It is not a substitute for full-text, version, retraction or licensing verification.

### Abstract

> <h4>Objective</h4>Arterial serum was generally used to uncover shifts in the metabolic profile induced by surgery and anaesthesia. The specific perioperative metabolic alterations in the brain remain largely unknown. We aimed to detect perioperative changes in cerebral metabolism by arteriovenous gradients of circulating metabolites across the brain using liquid chromatography-tandem mass spectrometry (LC-MS) analysis.<h4>Methods</h4>The prospective study was conducted at Sichuan Provincial People's Hospital, China. Twenty patients with unilateral pulmonary lesion were recruited. Patients undergoing thoracic surgery were randomised to receive general anaesthesia with sevoflurane or propofol. Blood samples from radial artery and jugular bulb were collected before and after first anaesthetic administration, at the end of 60 min of maintenance of anaesthesia and 60 min after patients regained consciousness. LC-MS-based untargeted metabolomics strategies were used to determine the difference in abundance of circulating metabolites between artery and jugular bulb.<h4>Results</h4>A total of 3900 metabolites were detected. Potential critical alterations of metabolites including phosphatidylcholine (PC), phosphatidylethanolamine (PE), choline, isocitrate and lactate and pathways were identified. Brain took up PC and PE in group sevoflurane but secreted these compounds in group propofol. Additionally, propofol was associated with the release of choline and isocitrate from brain. In both groups, lactic acid entered brain intraoperatively.<h4>Conclusion</h4>This work may offer a comprehensive mapping of perioperative alterations of cerebral metabolism in patients under general anaesthesia and a new direction for further studies in pharmacology of general anaesthetics and pathogenesis of perioperative brain dysfunction. <b>Trial Registration:</b> Chinese Clinical Trial Registry: ChiCTR2500111204.

## Proposed structured change

```json
{
  "effect": "Release from the brain was associated with propofol anaesthesia during the perioperative period.",
  "context": "Patients undergoing thoracic surgery under general anaesthesia; arteriovenous metabolite gradients were measured across the brain.",
  "comparator": "Sevoflurane"
}
```

## Model rationale

The abstract reports that propofol was associated with release of choline from the brain, while describing perioperative cerebral metabolite changes.

## Verbatim evidence from the abstract

> Additionally, propofol was associated with the release of choline and isocitrate from brain.

## Human review

- [ ] Open the canonical publication and inspect the strongest permitted full text.
- [ ] Verify article version, retraction/correction state, population, exposure, comparator, outcome and limitations.
- [ ] Verify funding/conflict and reuse rights; remove any unsupported field.
- [ ] Apply changes manually to the appropriate Markdown source; do not edit this proposal into public content.
- [ ] Run `bun run content:validate`, `bun run test`, and the normal publisher before merging.
