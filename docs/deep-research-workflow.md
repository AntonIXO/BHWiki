# One topic per Deep Research

Every ChatGPT Deep Research run covers exactly one substance, supplement form, food, or dietary protocol. Never batch the queue into a single report. The research instruction consists of the topic brief, the Markdown contract, the actual TypeScript record types, enrichment rules, existing concept IDs, and the current article where one exists. The output is an English UTF-8 Markdown file named `<slug>.md`, directly importable as `content/substances/<slug>.md`.

## Research questions

Research identity (including salts, stereoisomers, formulations, products and aliases), proposed uses, human benefits and null findings, subjective experiences, mechanisms, study/label exposures, absorption/metabolism/elimination, duration, modifiers, adverse events, tolerance/dependence/withdrawal, contraindications, interactions, and scoped official regulatory context. For foods, organisms, combinations and dietary protocols, do not invent a single molecule or elimination half-life. Preserve actual formulation, strain, elemental versus salt mass, and protocol definition.

Human clinical outcomes, laboratory tasks, physiological biomarkers, and subjective reports belong to different records. Do not equate a biomarker with clinical benefit, patient treatment with healthy-person enhancement, preclinical mechanisms with human efficacy, or full-dose psychedelic evidence with microdosing evidence. Preserve negative, conflicting and inconclusive findings. Search thoroughly; write compactly.

## Sources and search

Search PubMed/PMC, original journal full text, ClinicalTrials.gov and other recognized trial registries, systematic reviews and their original studies, official regulator documents, official medication labels, and authoritative nutrient monographs. Use source-specific queries combining the topic's generic, brand, chemical and regional names with randomized trial, meta-analysis, pharmacokinetics, adverse events, withdrawal, interaction and funding/conflict terms. Inspect full text and supplements whenever available. For Russian/Soviet compounds also search Russian names and original regional literature and explain inaccessible, untranslated or uncontrolled evidence.

Use reviews to locate and contextualize primary studies; do not present multiple papers from one trial as independent replications. Record design, sample size, population, comparator, formulation/route, exposure duration, assessment time, instrument, effect estimate and confidence interval when actually reported. Keep a registration/publication study ID so multiple outcomes from the same study stay connected. State access limits. Community resources can document subjective experience or give research leads, never establish clinical efficacy or official legal status. Do not use vendor sales pages as evidence.

Inspect the funding and conflict-of-interest declarations of each included publication. Record commercial sponsorship and disclosed employment, consulting, equity, patents and other declared interests without treating them as automatic proof that a result is false. Unknown disclosures are not proof of independence. Keep a direct link to the inspected declaration/full text.

## Page structure and interactive outputs

Preserve all existing article sections. The site consumes their structured fields, rather than extracting findings from prose:

| Markdown section/field | Output in BHWiki |
| --- | --- |
| Identity, aliases, tags | Identity panel, molecule provenance, browse/search and concept navigation |
| Summary, Description, Evidence note | Catalog summary, overview, evidence limitations |
| Effects | Subjective-effect cards and explorer; reporting method and population stay explicit |
| Outcomes | Measured-outcome cards, evidence explorer and comparison; one record per measured finding |
| `study` and `result` | Inspectable study context and study-result plots; retain units, instrument, comparator and assessment time |
| Doses | Source-specific research/label exposures with ingredient/form, route, quantity, frequency, duration and population |
| Pharmacokinetics, halfLife | Analyte-specific elimination observations and educational curves |
| Duration | Timing explorer; separate plasma timing from subjective-effect timing |
| Modifiers | Source-supported kinetic modifiers linked to the actual observation |
| Mechanisms, Claims, companion relationships | Source-linked mechanism and knowledge graphs with participants, roles and explicit directed steps |
| Cautions, Interactions | Safety cards and pair/class interaction explorer with explicit context and uncertainty |
| References | Primary study/label bibliography, evidence panels, funding and COI labels |
| Experience links | Optional outside experience index, clearly distinct from clinical findings |
| Legal | Jurisdiction/activity/form/date-specific official context |

Do not leave Effects, Outcomes, Doses, Mechanisms, Cautions, Interactions or Claims empty merely to shorten the article when eligible evidence exists. Empty arrays are correct when the evidence is absent or unverified. Explain major gaps in Evidence note. Include meaningful quantitative results when verified; never manufacture values to activate a plot. Limit prose to the essential finding/context/limitation, avoid repeated background, and retain direct source links. There is no arbitrary maximum number of sources, but each included source must support a concrete record or essential qualification.

## Markdown contract

The article starts with YAML frontmatter bounded by `---`. No H1, no text before the frontmatter, no wrapping the entire article in a code fence, and no ChatGPT citation tokens in the downloaded file. Frontmatter contains all non-section fields, `x-shape` listing every record field exactly once, and the existing `x-order` if supplied. Do not put prose/list fields in frontmatter. Retain `editorialStatus: sourced-draft`; automated research is not independent editorial review. `reviewedAt` is the research date as a quoted YYYY-MM-DD string.

Required headings in this order: `## Summary`, `## Description`, `## Evidence note`, `## Doses`, `## Pharmacokinetics`, optional `## Duration`, `## Modifiers`, `## Effects`, `## Outcomes`, `## Mechanisms`, `## Cautions`, `## Claims`, `## Interactions`, `## Experience links`, `## References`, `## Legal`.

Summary, Description and Evidence note contain ordinary original Markdown prose without fenced blocks. Every other section contains exactly one fenced `yaml` block whose root is a list, including `[]` when empty. No extra prose outside that fence. `Duration` maps to `kinetics.timeline` and is not an additional `x-shape` field. Do not add unknown article headings.

Use the attached TypeScript types as the exact key/enum contract and the existing article/template as the formatting example. Supply every required field on every record, using null only where allowed. Strings must be nonempty. IDs and slugs use lowercase letters, digits and hyphens. Each `sourceId`, supporting/conflicting source ID, and severity source points to a reference on this article. `halfLife.observationId` and modifier observation IDs point to existing `pkObservations` IDs. Preserve existing identities, source metadata and curated records unless an inspected source justifies a correction. Unresolved identity must have `pubchemCid: null` and exactly `Not established` for formula, molecularWeight and smiles. Do not infer structures for products, foods, organisms or protocols.

### Observation, result and timing rules

Effects refer to concept kind `effect`, Outcomes to kind `outcome`. `direction` is `Increased`, `Decreased` or `Variable`, not a benefit score. `evidence` is `Human research`, `Subjective reports` or `Limited research`. `reportType` is `measured-assessment` or `informal-account` when known. Distinguish anxiety ratings as a measured clinical outcome from reported feelings of anxiety as an effect. A trial with multiple endpoints gets multiple sourced observations with the same actual `study.id`; attach different/null/conflicting results accurately.

Use `result` only for a reported mean, mean difference, standardized mean difference, odds ratio, risk ratio or hazard ratio. Keep `estimate`, `unit`, `instrument`, `comparator`, `assessmentTime`, and `population`; include `confidenceInterval: {lower, upper, level}` only for a verified confidence interval (e.g. level 95). Never reinterpret SD, SE, P values or ranges as CI. Omit unsupported numeric enrichment while retaining a clear free-text `magnitude` and source context.

PK records identify measured analyte, route, formulation, population, statistic (`approximate`, `study-mean`, `reported-range`, `not-established`), value/bounds in hours, source and context. Unknown estimates have value/low/high null and modelEligible false. Never infer subjective duration from elimination. Nutrient balance, organism persistence and dietary protocols are not drug elimination curves.

Duration entries preserve route, population, formulation, `measurement: subjective|plasma`, source, note, total and phases. Plasma entries must identify the analyte. Each phase declares `basis: elapsed-since-exposure|phase-duration` only when explicitly supported, with min/max and minutes/hours. Do not add independent phase ranges together or transform medians/ranges into means. Omit unsupported timing instead of inventing it.

### Connections and companion concepts

Prefer the supplied canonical concept IDs. New endpoints are allowed and desirable when the topic needs distinct visual, metabolic, gastrointestinal, cardiovascular or other measured outcomes absent from the current dictionary. Return a separate downloadable concept Markdown file for each essential new concept, never squeeze a finding into an unrelated existing concept. These remain supporting artifacts for the ONE researched topic, not additional substance research.

Concept frontmatter: `id`, `label`, `kind` (effect, outcome, class, mechanism, target, neurotransmitter, enzyme, exposure, chemical-family or legal), `aliases: []`, `relatedIds: []`, `sourceUrls: [actual HTTPS sources]`, `x-shape: [id, label, kind, description, aliases, relatedIds, sourceUrls]`; only body heading `## Definition` with a concise original sourced definition. File path is `effects/<id>.md`, `outcomes/<id>.md`, or `concepts/<kind>/<id>.md`. IDs cannot duplicate a substance slug. Do not return replacements for existing shared concepts.

Claims keep assertion, relation, distinct participant entity IDs with explicit roles, context, sourceIds, conflictingSourceIds, `assessment: not-formally-assessed`, and limitation. Participant IDs are `substance:<slug>` or `tag:<id>` and must exist or be supplied as companion concepts. Interactions use exact existing `otherSlug` when that specific pair is actually supported, or `otherSlug: null` plus an existing class `targetClassId` for documented class-wide concern. Do not set both. Generic caution has null otherSlug and no targetClassId; it does not create a pair match. Optional severity is the source's actual characterization with its sourceId, never an invented traffic-light score.

For a verified mechanism graph, supply a separate relationship Markdown with frontmatter `id`, `label`, `relation`, `members`, `memberRoles`, `sourceUrl`, optional `sourceUrls`, optional `directedSteps: [{from, to, label, sourceUrls}]`, and matching `x-shape` (including description); body only `## Description`. All member IDs and roles must resolve. Arrows require direct source support, not shared classification. A clinical endpoint must not be asserted as a consequence of a preclinical mechanism.

### Funding and conflicts (new reference metadata)

Every included reference retains id, exact title, authors/organization, integer publication year, direct HTTPS url, study/official-source kind, concise actual insight and specific limitation; verified PMID/DOI are quoted strings. Add:

```yaml
funding: "Named funders and role, or Not assessed."
sponsorshipStatus: not-assessed
conflictsOfInterest: "Declared interests, explicit no-conflict statement, or Not assessed."
conflictOfInterestStatus: not-assessed
# Include only after actually inspecting a declaration/source:
disclosureUrl: https://actual-inspected-fulltext.example/publication
```

`sponsorshipStatus` enums: industry-funded, non-industry-funded, mixed-funding, no-external-funding, not-reported, not-assessed. Industry and mixed statuses require explicit commercial funding/sponsorship (do not infer from author affiliation alone). Non-industry-funded requires inspected funding disclosure identifying noncommercial support. No-external-funding requires that explicit declaration and does not establish commercial independence; report any in-kind support separately in funding text. Not-reported requires an inspected source without a disclosure; inaccessible/uninspected is not-assessed.

`conflictOfInterestStatus` enums: declared, none-declared, not-reported, not-assessed. Declared means actual disclosed interests; none-declared requires an inspected explicit no-conflict declaration. Not-reported and not-assessed follow the distinction above. Nonunknown statuses require supporting funding/conflicts text and an inspected `disclosureUrl`. Do not label a study independent solely because no disclosure is visible in an abstract.

## Delivery and validation

Create an actual downloadable `<slug>.md`, not just an essay or a truncated inline sample. Supply companion concept/relationship Markdown files only when necessary to populate supported rich features. A ZIP containing these Markdown files is acceptable alongside the main standalone MD. Validate YAML/IDs/source references before delivery. A short separate coverage note lists searched evidence categories, any missing full text, unresolved discrepancies and unpopulated sections with reasons. Never put that note inside the article.

Downloaded research is acquisition material. BHWiki independently parses and validates the proposed corpus, checks canonical bibliography, inspects key sources/disclosures, and renders the affected article before accepting it. Machine validation does not establish scientific accuracy or editorial review.
