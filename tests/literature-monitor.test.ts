import assert from "node:assert/strict";
import test from "node:test";
import {
  buildEuropePmcQuery,
  canonicalPaperId,
  deduplicatePapers,
  europePmcPaper,
  extractQuotedEvidence,
  matchWatchTerms,
  spoolFileStem,
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

test("maps a Europe PMC core record's journal and author names", () => {
  const paper = europePmcPaper(
    {
      pmid: "42880479",
      doi: "10.1016/j.fct.2026.116460",
      title: "Evaluating the biological effects of caffeine-related compounds methylliberine and theacrine.",
      authorString: "Santillo MF, Sprando RL, Yourick JJ.",
      journalInfo: {
        journal: {
          title: "Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association",
          medlineAbbreviation: "Food Chem Toxicol",
          isoabbreviation: "Food Chem Toxicol",
        },
      },
      abstractText: "Methylliberine and theacrine were profiled.",
      firstPublicationDate: "2026-10-15",
    },
    { slug: "caffeine", name: "Caffeine", aliases: [], tags: [] },
    ["Caffeine"],
  );
  assert.equal(paper.journal, "Food Chem Toxicol");
  assert.deepEqual(paper.authors, ["Santillo MF", "Sprando RL", "Yourick JJ"]);
});

test("matches watch terms once regardless of casing", () => {
  const terms = matchWatchTerms(
    { slug: "caffeine", name: "Caffeine", aliases: ["CYP1A2"], tags: ["stimulant", "cyp1a2"] },
    new Map([["stimulant", "Stimulant"], ["cyp1a2", "CYP1A2"]]),
    { title: "Caffeine as a stimulant", abstractText: "CYP1A2 metabolises caffeine." },
  );
  assert.deepEqual(terms, ["Caffeine", "CYP1A2", "stimulant"]);
});

test("merging duplicate papers keeps one matched term per case-insensitive value", () => {
  const target = { slug: "caffeine", name: "Caffeine", aliases: [], tags: [] };
  const [merged] = deduplicatePapers([
    europePmcPaper({ pmid: "7", title: "A study", abstractText: "short" }, target, ["Caffeine"]),
    europePmcPaper({ pmid: "7", title: "A study", abstractText: "longer abstract" }, target, ["caffeine", "sleep"]),
  ]);
  assert.deepEqual(merged.matchedTerms, ["Caffeine", "sleep"]);
});

test("spool file stems keep existing names and keep DOI slashes out of paths", () => {
  assert.equal(spoolFileStem("pmid:42880479"), "pmid_42880479");
  assert.equal(spoolFileStem("suggestion:abc123"), "suggestion_abc123");
  assert.equal(spoolFileStem("doi:10.64898/2026.09.30.26363751"), "doi_10.64898%2F2026.09.30.26363751");
  assert.notEqual(spoolFileStem("doi:10.1000/a_b"), spoolFileStem("doi:10.1000/a/b"));
});
