# BHWiki implementation contract

The accepted launch plan is an independent, English-language open-source substance reference. It connects substances, subjective experiences, biological mechanisms and research findings. This document supersedes the prototype's companion-product roadmap.

## Reading experience

- A searchable substance library with typed filters, canonical aliases and compact results.
- Shared effect, measured-outcome and mechanism/concept pages with original definitions, sources and linked substances.
- Cytoscape.js graph navigation using the same entities and claims as the articles. Persist hyperedges with member roles and display a relationship node joined to its complete participants. Include focused shareable URLs, bounded neighborhoods, source details and a keyboard-accessible list.
- Substance articles containing identity/molecule provenance, overview, qualitative subjective effects, measured outcomes, dose contexts, pharmacokinetics, safety, research, connections, dated legal context and public revisions.
- Methods and contribution pages explaining evidence selection, review status, licensing and repository pull requests.

Initial substances: caffeine, L-theanine, creatine, melatonin, nicotine, psilocybin, modafinil, methylphenidate, diphenhydramine and citicoline. The source-linked launch content remains visibly labeled sourced draft unless a real review is recorded. Missing findings are not assessed or not established.

## Content and interfaces

Claims identify participating entities and roles, applicable context, supporting/conflicting sources and editorial assessment. Publications are stored once by stable identity, with DOI/PMID where available. Dose records retain form, route, amount/unit, frequency, duration, population, purpose and source category. Pharmacokinetic observations retain the measured analyte, endpoint, statistic type, values/units, route/formulation, population and source. Effects distinguish reported experiences from measured outcomes and retain instrument/context where applicable.

No universal substance evidence score or invented radar-chart intensity is permitted. Quantitative charts require real measurements or an explicitly labeled educational model. Caffeine smoke exposure must remain a metabolic context; the decline of CYP1A2 activity after cessation is not caffeine's elimination half-life. Psilocin kinetics must name psilocin.

Immutable revisions preserve the source snapshot, source commit, contributor/reviewer information and publication event. Publishing updates normalized facts, projections and publication pointers atomically. Compare against the current publication so A → B → A records three publications. Publication visibility is separate from editorial review status.

## Infrastructure and delivery

Use Next.js App Router, React, TypeScript and pinned Bun. Public article rendering runs on the server; interactivity uses small client components. Database reads use a dedicated read-only server SQL role and a small pool in the existing Supabase PostgreSQL cluster. There is no browser database client or shared PostgREST configuration change.

All BHWiki application tables explicitly use OrioleDB in a separate `bhwiki` schema; an unavailable engine is a migration failure. Use compact immutable IDs, unique slugs and native B-tree indexes. Add new checksummed migrations in `/opt/optihealth_db` with matching portable copies, preserving the applied foundation.

`BHWIKI_DATA_MODE=bundled` is the explicit local-content mode. `database` requires a working runtime URL; errors surface rather than falling back. Catalog and graph queries return compact, bounded data rather than every article document.

Delivery order: correct the prototype and publication foundation; complete article/concept/graph navigation; curate the ten substance launch collection; establish PR validation and deployment packaging. Public domain deployment remains a separate operation. The launch contains no OptiHealth promotion/integration, outcome ingestion, vendor pages or purchasing information. Accounts, online editing, community ratings and multilingual publishing are deferred.

## Acceptance

- Every displayed quantitative observation links to a supporting source and context; legal conclusions have jurisdiction/date.
- Catalog, articles and graph agree on entity identity; filtering preserves complete hyperedge context.
- Regression checks distinguish caffeine from enzyme-activity kinetics and psilocybin from psilocin.
- Publication checks cover unchanged imports, changes, reversion and concurrent publication; published readers cannot access drafts.
- Actual database checks verify OrioleDB table storage, RLS, forbidden writes and isolation from other tenants.
- Browser checks cover desktop/mobile search, filters, source anchors, graph controls, keyboard navigation and empty states.
- Benchmarks measure article lookup, catalog filtering and graph queries before any performance claim.
- Code is MIT; original editorial content is CC BY-SA 4.0 with asset exceptions/provenance recorded separately.
