# Automated literature monitor

## Goal

Discover new papers relevant to the substances and concepts already present in BHWiki, triage them with an LLM, and put every result into a private editorial inbox. Nothing from the monitor is public and nothing is published automatically.

## Data flow

```text
Markdown corpus (names, aliases, tags)
        │
        ▼
Europe PMC REST search (rolling 7-day overlap)
        │
        ▼
identifier deduplication (PMID → DOI → title/date hash)
        │
        ├── private `literature_papers`
        └── LLM triage using title + abstract only
                    │
                    ▼
          verbatim-quote validation
                    │
                    ▼
          `literature_suggestions` (proposed)
                    │
        human review: approve/reject
                    │
                    ▼
   Markdown proposal artifact + manual source edit/PR
                    │
                    ▼
   `content:validate` → `db-seed.ts` → public publication
```

The existing Markdown corpus remains the editable source of truth. The inbox is acquisition state and audit data, not a second public content model.

## Commands

```bash
# Discover papers without an LLM (safe smoke test or metadata-only mode)
bun run content:research-monitor -- --max-substances=1 --limit=20 --no-llm

# Normal run: requires BHWIKI_ADMIN_DATABASE_URL and the LLM variables
bun run content:research-monitor -- --limit=100

# Inspect the pending inbox
bun run content:research-review -- --list

# Approve creates a review artifact; it does not edit or publish an article
bun run content:research-review -- \
  --id='suggestion:<id>' --decision=approve --reviewer=anton

# Reject a proposal
bun run content:research-review -- \
  --id='suggestion:<id>' --decision=reject --reviewer=anton
```

The filesystem spool is used when `BHWIKI_ADMIN_DATABASE_URL` is absent. In production configure the database URL and write to `/var/lib/bhwiki/literature`; this keeps the read-only web container out of the worker's credential boundary.

## LLM contract

The LLM receives only a publication title, abstract, matched substance slugs, and a strict extraction prompt. It returns a JSON list of candidate changes. Each candidate must contain a suggestion type, structured payload, rationale, and contiguous verbatim quotes. The code rejects quotes that are not present in the abstract. Missing information remains missing; the model is not allowed to infer dose, mechanism, efficacy, certainty, licensing, or funding.

Full-text extraction is deliberately a later step. A metadata-only or abstract-only paper can become a review candidate, but it cannot silently become a published claim.

## Source and rights policy

- Europe PMC is the first biomedical discovery source and supplies abstracts and open-access indicators: <https://europepmc.org/RestfulWebService>.
- PubMed E-utilities is the authoritative fallback for biomedical identifiers and indexing events: <https://www.ncbi.nlm.nih.gov/books/NBK25497/>.
- Crossref is a DOI and metadata lifecycle enrichment source: <https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/>.
- OpenAlex is a recall/enrichment source, not the canonical bibliographic authority: <https://help.openalex.org/api/>.
- ClinicalTrials.gov is a separate registry evidence source and is not merged into journal-paper records: <https://clinicaltrials.gov/data-api/api>.
- Full text is retained or copied only when its access and reuse rights are explicit. A free-to-read page or an OA URL is not itself a redistribution license. PMC OA guidance: <https://pmc.ncbi.nlm.nih.gov/tools/openftlist/>.

## Database boundary

Migration `202610220002_literature_monitor.sql` creates three private OrioleDB tables:

- `bhwiki.literature_runs`: run status and counts.
- `bhwiki.literature_papers`: source metadata, abstract, identifiers, matched corpus terms, and raw provider payload.
- `bhwiki.literature_suggestions`: LLM proposals, verbatim evidence, model, reviewer, and approval status.

The tables are RLS-enabled and explicitly unreadable by `bhwiki_reader`. The worker uses the administrator/owner connection; the public Next.js process keeps its existing read-only connection.

## Activation

The repository includes `deploy/bhwiki-literature-monitor.service`, `.timer`, and `.env.example`. Install only after placing a real provider configuration in `/etc/bhwiki/literature.env` with mode `0600`:

```bash
install -D -m 0644 deploy/bhwiki-literature-monitor.service /etc/systemd/system/bhwiki-literature-monitor.service
install -D -m 0644 deploy/bhwiki-literature-monitor.timer /etc/systemd/system/bhwiki-literature-monitor.timer
install -d -m 0700 /var/lib/bhwiki/literature
systemctl daemon-reload
systemctl enable --now bhwiki-literature-monitor.timer
systemctl start bhwiki-literature-monitor.service
systemctl status bhwiki-literature-monitor.timer --no-pager
journalctl -u bhwiki-literature-monitor.service --since today --no-pager
```

The timer is intentionally not enabled by the repository deployment itself because the LLM provider and writer credential are deployment-specific secrets.
