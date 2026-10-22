import assert from "node:assert/strict";
import test from "node:test";
import {
  buildEuropePmcQuery,
  canonicalPaperId,
  deduplicatePapers,
  extractQuotedEvidence,
  validateSuggestion,
  renderEditorialProposal,
  type LiteraturePaper,
} from "../src/lib/literature-monitor";

test("builds a bounded Europe PMC query from substance names and tags", () => {
  const query = buildEuropePmcQuery(
    {
      slug: "caffeine",
      name: "Caffeine",
      aliases: ["1,3,7-trimethylxanthine"],
      tags: ["sleep", "adenosine-antagonist"],
    },
    new Map([
      ["sleep", "Sleep"],
      ["adenosine-antagonist", "Adenosine antagonist"],
    ]),
    "2026-10-15",
  );

  assert.match(query, /TITLE_ABS:/);
  assert.match(query, /caffeine/);
  assert.match(query, /1,3,7-trimethylxanthine/);
  assert.match(query, /sleep/);
  assert.match(query, /FIRST_PDATE:\[2026-10-15 TO \*\]/);
  assert.ok(query.length < 900);
});

test("deduplicates by PMID first, then DOI, then stable title identity", () => {
  const papers: LiteraturePaper[] = [
    {
      id: "pmid:1",
      title: "A study",
      abstract: "one",
      url: "https://pubmed.ncbi.nlm.nih.gov/1/",
      doi: "10.1000/example",
      pmid: "1",
      pmcid: null,
      publishedOn: "2026-10-20",
      journal: "Journal",
      authors: ["A"],
      sourceKind: "europepmc",
      matchedSubstances: ["caffeine"],
      matchedTerms: ["caffeine"],
      raw: {},
    },
    {
      id: "doi:10.1000/example",
      title: "A study",
      abstract: "two",
      url: "https://doi.org/10.1000/example",
      doi: "10.1000/example",
      pmid: null,
      pmcid: null,
      publishedOn: "2026-10-20",
      journal: "Journal",
      authors: ["A"],
      sourceKind: "crossref",
      matchedSubstances: ["caffeine"],
      matchedTerms: ["caffeine"],
      raw: {},
    },
  ];

  const result = deduplicatePapers(papers);
  assert.equal(result.length, 1);
  assert.equal(canonicalPaperId(result[0]), "pmid:1");
});

test("accepts only verbatim evidence quotes from the abstract", () => {
  const abstract = "Caffeine improved reaction time by 4 ms in 24 adults.";
  assert.deepEqual(extractQuotedEvidence(["Caffeine improved reaction time by 4 ms"], abstract), [
    "Caffeine improved reaction time by 4 ms",
  ]);
  assert.deepEqual(extractQuotedEvidence(["Caffeine dramatically improved cognition"], abstract), []);
});

test("rejects suggestions with unsupported evidence quotes", () => {
  assert.throws(() => validateSuggestion({
    status: "proposed",
    suggestionType: "new-outcome",
    substanceSlug: "caffeine",
    payload: { outcome: "reaction time" },
    rationale: "The abstract reports a result.",
    evidenceQuotes: ["Not present"],
    abstract: "A short abstract.",
  }));
});

test("renders an approval artifact without silently publishing it", () => {
  const paper: LiteraturePaper = {
    id: "pmid:2",
    title: "A study",
    abstract: "Caffeine improved reaction time by 4 ms in 24 adults.",
    url: "https://pubmed.ncbi.nlm.nih.gov/2/",
    doi: null,
    pmid: "2",
    pmcid: null,
    publishedOn: "2026-10-20",
    journal: "Journal",
    authors: ["A"],
    sourceKind: "europepmc",
    matchedSubstances: ["caffeine"],
    matchedTerms: ["caffeine"],
    raw: {},
  };
  const markdown = renderEditorialProposal({
    id: "suggestion:abc12345",
    paper,
    suggestion: {
      substanceSlug: "caffeine",
      suggestionType: "new-outcome",
      payload: { outcome: "reaction time" },
      rationale: "The abstract reports a result.",
      evidenceQuotes: ["Caffeine improved reaction time by 4 ms"],
    },
    status: "approved",
    reviewer: "anton",
  });
  assert.match(markdown, /Status: \*\*approved\*\*/);
  assert.match(markdown, /Caffeine improved reaction time by 4 ms/);
  assert.match(markdown, /Apply the change manually/);
});
