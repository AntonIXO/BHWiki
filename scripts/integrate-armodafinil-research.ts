import { readFileSync, writeFileSync } from "node:fs";
import { loadCorpus, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import { validateContent } from "../src/lib/validate-content";
import { validateCanonicalSources } from "../src/lib/publication-metadata";
import type { DoseContext, Observation, Reference, Substance } from "../src/lib/types";

// A source-bound conversion of the completed report. Reference numbers refer to
// bibliography entries, never to the ordinal position of URLs within an entry.
const report = readFileSync("data/research/pending-2026-10-09/armodafinil-chrome-pro/deep-research.md", "utf8");
const target = "content/substances/armodafinil.md";
const parsed = parseContentSource("substances/armodafinil.md", readFileSync(target, "utf8"));
if (parsed.collection !== "substances") throw new Error("Expected armodafinil article");
const s = structuredClone(parsed.record);
const corpus = loadCorpus();
const canonical = corpus.substances.filter(x => x.slug !== s.slug).flatMap(x => x.references);
const entries = new Map([...report.matchAll(/^\*\*R(\d+) — (.+?)\*\* ([\s\S]*?)(?=^\*\*R\d+ — |^\*\*Central conversion boundary:|$(?![\s\S]))/gm)].map(m => [Number(m[1]), { title: m[2].replace(/\.$/, ""), text: m[3].trim() }]));
if (entries.size !== 22) throw new Error(`Expected 22 bibliography entries; got ${entries.size}`);
const titles: Record<number, { authors: string; year: number; kind: string }> = {
  1: { authors: "Cephalon LLC", year: 2007, kind: "U.S. prescribing information; initial approval year" },
  2: { authors: "Harsh JR, Hayduk R, Rosenberg R, Wesnes KA, Walsh JK, Arora S, Niebler GE, Roth T", year: 2006, kind: "Randomized placebo-controlled trial" },
  3: { authors: "Cephalon; ClinicalTrials.gov", year: 2026, kind: "Trial registry; access year" },
  4: { authors: "Roth T, White D, Schmidt-Nowara W, Wesnes KA, Niebler G, Arora S, Black J", year: 2006, kind: "Randomized placebo-controlled trial" },
  5: { authors: "Cephalon; ClinicalTrials.gov", year: 2026, kind: "Trial registry; access year" },
  6: { authors: "Roth T, White D, Schmidt-Nowara W, Wesnes KA, Niebler G, Arora S, Black J", year: 2006, kind: "Randomized placebo-controlled trial" },
  7: { authors: "Krystal AD, Harsh JR, Yang R, Rippon GA, Lankford DA", year: 2010, kind: "Randomized placebo-controlled trial" },
  8: { authors: "Pitre T, Mah J, Roberts S, Desai K, Gu Y, Ryan C, Busse JW, Zeraatkar D", year: 2023, kind: "Network meta-analysis" },
  9: { authors: "Czeisler CA, Walsh JK, Wesnes KA, Arora S, Roth T", year: 2009, kind: "Randomized placebo-controlled trial" },
  10: { authors: "Liira J, Verbeek JH, Costa G, Driscoll TR, Sallinen M, Isotalo LK, Ruotsalainen JH", year: 2014, kind: "Cochrane systematic review" },
  11: { authors: "Dinges DF, Arora S, Darwish M, Niebler GE", year: 2006, kind: "Randomized experimental sleep-deprivation study" },
  12: { authors: "University of Florida; ClinicalTrials.gov", year: 2026, kind: "Trial registry; access year; no posted results" },
  13: { authors: "Randall DC, Shneerson JM, Plaha KK, File SE", year: 2003, kind: "Racemic-modafinil trial" },
  14: { authors: "Randall DC, Fleck NL, Shneerson JM, File SE", year: 2004, kind: "Racemic-modafinil trial" },
  15: { authors: "Randall DC, Viswanath A, Bharania P, Elsabagh SM, Hartley DE, Shneerson JM, File SE", year: 2005, kind: "Racemic-modafinil trial" },
  16: { authors: "Darwish M, Kirby M, Hellriegel ET, Yang R, Robertson P", year: 2009, kind: "Pooled analysis of randomized pharmacokinetic studies" },
  17: { authors: "Darwish M, Kirby M, Robertson P, Hellriegel ET", year: 2008, kind: "Clinical drug-interaction study" },
  18: { authors: "Kaplan S, Goehring EL Jr, Melamed-Gal S, Nguyen-Khoa BA, Knebel H, Jones JK", year: 2018, kind: "Racemic-modafinil pharmacoepidemiology" },
  19: { authors: "Kaplan S, Carneal-Frazer N, Braverman DL, Parsley L, Robinson C, Benjamin DK, Albano JD", year: 2025, kind: "Combined modafinil/armodafinil pregnancy registry" },
  20: { authors: "Cesta CE, Engeland A, Karlsson P, Kieler H, Reutfors J, Furu K", year: 2020, kind: "Racemic-modafinil pregnancy cohort" },
  21: { authors: "Kaplan S, de Nascimento J, Contini A", year: 2026, kind: "Racemic-modafinil pregnancy cohort" },
  22: { authors: "Kanoun M, Bouazza N, Treluyer JM, Collier M", year: 2026, kind: "Racemic-modafinil pregnancy cohort" },
};
const insights: Record<number, string> = {
  1: "Approved indications/exposures, terminal half-life, drug interactions, serious reactions, cardiovascular monitoring and postmarketing misuse/withdrawal.",
  2: "196 adults with narcolepsy; 150/250 mg versus placebo for 12 weeks; MWT and CGI-C outcomes.",
  3: "254-participant shift-work-disorder development trial. The report incorrectly cites this entry as the narcolepsy registry.",
  4: "395 CPAP-adherent adults with OSA; wake-maintenance, CGI-C, ESS and fatigue outcomes.",
  5: "Cephalon sponsorship and 395-participant design of the OSA development study.",
  6: "The report repeats the R4 URL/DOI for a purported additional 150-mg OSA trial. Independent replication is unresolved.",
  7: "OSA with depression: improved CGI-C/ESS but MWT 2.6 versus 1.1 minutes, P=.30.",
  8: "14 RCTs/3,085 participants; pooled modafinil/armodafinil ESS and adverse-event discontinuation estimates.",
  9: "254 night workers; MSLT, CGI-C, diary sleepiness, memory and attention; daytime sleep assessed.",
  10: "Two armodafinil SWD trials/572 participants; sleepiness and reaction time; no trials in undiagnosed ordinary shift workers.",
  11: "107 healthy men during acute sleep loss; wakefulness/vigilance, late drug exposure and subsequent sleep.",
  12: "12-person 250-mg study with planned driving, EEG and cognitive outcomes, without posted results or linked publication.",
  13: "30 rested young volunteers taking racemic modafinil: no battery-wide cognitive improvement; mood/somatic-anxiety changes.",
  14: "45 rested adults aged 50–67: mostly null cognition with isolated benefits and more set-shifting errors at 200 mg racemate.",
  15: "60 rested young adults: many null task outcomes with racemic modafinil.",
  16: "119 healthy subjects: linear PK 50–400 mg; fasted Tmax approximately 2 h, terminal half-life approximately 15 h and steady state approximately 7 days.",
  17: "CYP3A4 induction and CYP2C19 inhibition: reduced midazolam and increased omeprazole exposure; caffeine PK not materially changed.",
  18: "Racemic-modafinil cardiovascular database study: largely null overall estimates; recurrent-stroke subgroup signal.",
  19: "Combined product registry: 18 major malformations/137 prospective live births; not an isolated-armodafinil risk estimate.",
  20: "Sweden/Norway racemic-modafinil cohort: 3/133 malformations; wide confidence interval.",
  21: "786 exposed/3,144 matched pregnancies: first-trimester anomalies 4.2% versus 3.3%; uncertain adjusted RR.",
  22: "865 prenatally exposed children: uncertain anomalies versus unexposed and methylphenidate comparators; no increased neurodevelopmental risk versus unexposed.",
};

function field(audit: string, name: string): string {
  return audit.match(new RegExp(`(?:^|[.;] )${name}: ([\\s\\S]*?)(?= (?:Funding|Sponsorship|COI|Status):|$)`))?.[1].trim() ?? "Not assessed in the completed report.";
}
const sourceMap = new Map<number, Reference>();
for (const [n, entry] of entries) {
  const urls = [...entry.text.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map(m => m[1]);
  if (!urls.length) throw new Error(`R${n} has no URL`);
  const pmid = urls.map(u => u.match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/)?.[1]).find(Boolean);
  const doi = urls.find(u => u.startsWith("https://doi.org/"))?.slice("https://doi.org/".length);
  const existing = canonical.find(r => (pmid && r.pmid === pmid) || (doi && r.doi?.toLowerCase() === doi.toLowerCase()) || urls.includes(r.url));
  const audit = entry.text.slice(entry.text.search(/Funding(?:\/sponsorship(?:\/COI)?)?:/));
  const funding = field(audit, "Funding(?:/sponsorship(?:/COI)?)?");
  const coi = field(audit, "COI");
  // The report's explicit disclosure findings are retained, with its limitations.
  // Unknown/unretrieved declarations never become a negative COI assertion.
  const sponsorshipStatus: Reference["sponsorshipStatus"] = [3,5,7,9,16,18,19,21].includes(n) ? "industry-funded" : [20].includes(n) ? "non-industry-funded" : n === 22 ? "no-external-funding" : "not-assessed";
  const conflictOfInterestStatus: Reference["conflictOfInterestStatus"] = [9,16,18,19,21].includes(n) ? "declared" : [20,22].includes(n) ? "none-declared" : "not-assessed";
  const ref: Reference = {
    id: `dr-r${n}`, title: n === 6 ? entries.get(4)!.title : entry.title, ...titles[n], url: urls[0],
    ...(pmid ? { pmid } : {}), ...(doi ? { doi } : {}),
    insight: insights[n], limitation: audit,
    funding: `${funding} ${field(audit, "Sponsorship")}`,
    sponsorshipStatus, conflictsOfInterest: coi, conflictOfInterestStatus,
    ...((sponsorshipStatus !== "not-assessed" || conflictOfInterestStatus !== "not-assessed") ? { disclosureUrl: n === 7 ? urls.find(u => u.includes("clinicaltrials.gov"))! : urls[0] } : {}),
  };
  if (existing) for (const key of ["title", "authors", "year", "url", "kind", "pmid", "doi"] as const) {
    if (existing[key] !== undefined) (ref as any)[key] = existing[key];
  }
  if (n === 6) {
    const first = sourceMap.get(4)!;
    for (const key of ["title", "authors", "year", "url", "kind", "pmid", "doi"] as const) if (first[key] !== undefined) (ref as any)[key] = first[key];
  }
  sourceMap.set(n, ref);
}
const ref = (n: number) => `dr-r${n}`;
const cite = (n: number) => `[R${n}](${sourceMap.get(n)!.url})`;
const label = sourceMap.get(1)!.url;
s.aliases = [...new Set([...s.aliases, "Nuvigil", "R-modafinil"])];
s.reviewedAt = "2026-10-10";
s.subtitle = "Wakefulness in diagnosed sleepiness disorders; healthy-person enhancement remains unestablished.";
s.summary = `R-modafinil improves wakefulness in diagnosed narcolepsy, residual OSA sleepiness and shift-work disorder. Evidence for broad cognitive enhancement in rested healthy people is not established. ${cite(1)} ${cite(11)}`;
s.description = `Armodafinil is the isolated R-enantiomer of modafinil. Its longer persistence makes equal milligram doses of the racemate and R-enantiomer nonequivalent. It treats residual sleepiness in OSA, not airway obstruction; CPAP or other primary treatment remains necessary. Approved use does not include ordinary sleep deprivation, general cognitive enhancement or replacement of sleep. ${cite(1)}`;
s.evidenceNote = `Clinical trials, acute sleep-deprivation experiments, PK and CYP interactions provide direct armodafinil evidence. Racemic-modafinil studies and pooled pregnancy registries remain explicitly labeled below. ${cite(1)} ${cite(11)} ${cite(19)}\n\nThree citation problems in the completed report remain visible: R3 links the SWD registry NCT00080288 although the narcolepsy paragraph names NCT00078377; R6 repeats R4's DOI/PMID despite describing another OSA trial, so it is not counted as an independent replication; R23 is cited but absent from the bibliography. The French 865-child cohort is identified by R22; no additional R23 source has been invented. ${cite(3)} ${cite(4)} ${cite(22)}`;
const returnedDetail = report
  .split(/^### References and disclosure audit/m)[0]
  .replace(/^## /gm, "### ")
  .replace(/\[R(\d+)\]/g, (_whole, number) => number === "23" ? "(the returned report cites an unlisted R23 source)" : `[${ref(Number(number))}]`);
s.evidenceNote += `\n\n### Returned Deep Research detail\n\n${returnedDetail}`;
s.references = [...s.references.filter(r => !r.id.startsWith("dr-")), ...sourceMap.values()];
s.references.push({ id: "dr-nct00518986", title: "NCT00518986: armodafinil in treated OSA with comorbid depression", authors: "Cephalon; ClinicalTrials.gov", year: 2026, kind: "Trial registry; access year", url: "https://clinicaltrials.gov/study/NCT00518986", insight: "Registry cited alongside Krystal et al. (2010) in the completed report.", limitation: "Publication-level conflict declarations were not recovered.", funding: "Cephalon is the sponsor identified in the report's registry review.", sponsorshipStatus: "industry-funded", conflictsOfInterest: "Not assessed.", conflictOfInterestStatus: "not-assessed", disclosureUrl: "https://clinicaltrials.gov/study/NCT00518986" });
const pkId = "armodafinil-terminal-half-life";
s.pkObservations = [{ id: pkId, analyte: "R-modafinil (armodafinil)", route: "Oral", formulation: "Armodafinil", population: "Healthy subjects in three pooled randomized PK studies (n=119)", endpoint: "elimination-half-life", statistic: "approximate", value: 15, low: null, high: null, unit: "hours", context: "Terminal half-life approximately 15 h; approximately linear PK at 50–400 mg. This is not a subjective-effect duration or an impairment-specific estimate.", sourceId: ref(16), modelEligible: true }];
s.halfLife = { label: "About 15 hours", low: 15, high: 15, context: "Approximate terminal plasma half-life in healthy subjects; not subjective-effect duration.", sourceId: ref(16), observationId: pkId };
s.kinetics = { onset: "Clinical onset not established by the reported Tmax", peak: "Fasted Tmax about 2 h; food delays it by about 2–4 h", duration: "Wakefulness and plasma elimination are distinct; steady state by about 7 days", bioavailability: "Absolute fraction not specified; food does not materially change total exposure", metabolism: "Steady-state exposure about 1.8-fold single-dose exposure; CYP3A4 induction and CYP2C19 inhibition described separately", sourceId: ref(16), timeline: [{ id: "armodafinil-plasma-peak", route: "Oral", formulation: "Armodafinil, fasted", measurement: "plasma", analyte: "R-modafinil", population: "Healthy subjects", sourceId: ref(16), note: "Approximate Tmax; not time of maximum cognitive benefit.", total: null, phases: [{ name: "peak", basis: "elapsed-since-exposure", min: 2, max: 2, unit: "hours" }] }] };
s.modifiers = [{ label: "Food", effect: "Delayed Tmax; similar total exposure", detail: "Food delays Tmax about 2–4 h without materially changing exposure.", sourceId: ref(16), observationId: pkId, factorType: "other", direction: "variable" }];
function dose(label: string, amount: string, quantity: number, quantityMax: number | null, population: string, duration: string, purpose: string, note: string, source: number, category: DoseContext["sourceCategory"] = "research", frequency = "Once daily"): DoseContext {
  return { label, amount, quantity, quantityMax, unit: "mg", ingredient: "Armodafinil (R-modafinil)", formulation: "Oral armodafinil tablets", route: "Oral", frequency, duration, population, purpose, note, sourceId: ref(source), sourceCategory: category };
}
s.doses = [
  dose("Narcolepsy — U.S. label", "150–250 mg each morning",150,250,"Adults with excessive sleepiness associated with narcolepsy","Label does not prescribe one universal treatment duration","Improve wakefulness","Pivotal efficacy trial studied both 150 and 250 mg for 12 weeks.",1,"approved-label","Each morning"),
  dose("Residual OSA sleepiness — U.S. label","150–250 mg each morning",150,250,"Adults with residual sleepiness despite primary OSA treatment","Label does not prescribe one universal treatment duration","Improve wakefulness","No consistent extra benefit at 250 versus 150 mg; primary airway treatment remains necessary.",1,"approved-label","Each morning"),
  dose("Shift-work disorder — U.S. label","150 mg about 1 h before shift",150,null,"Adults with diagnosed shift-work disorder","Label does not prescribe one universal treatment duration","Improve wakefulness during work","Pivotal trial gave 150 mg 30–60 min before night shifts for 12 weeks.",1,"approved-label","About 1 h before work shift"),
  dose("Experimental acute sleep loss","100, 150, 200 or 300 mg",100,300,"107 healthy men","Acute enforced overnight wakefulness","Experimental vigilance/wakefulness","Dose arms are discrete; the range does not describe titration. Racemic modafinil 200 mg and placebo were comparators.",11),
  dose("OSA with comorbid depression","200 mg",200,null,"Adults with treated OSA and depression","Trial duration not stated in the report","Residual sleepiness","CGI-C and ESS improved; MWT difference was nonsignificant (P=.30).",7),
  dose("Registered driving/EEG experiment","250 mg",250,null,"12 healthy adults following sleep deprivation","Single dose","Driving, EEG, vigilance, working memory, risk-taking and cognition","NCT02468856 was completed but had no posted results or linked publication; no efficacy conclusion.",12,"research","Single dose"),
];
function outcome(id: string, name: string, conceptId: string, description: string, source: number, population: string, exposure: string, instrument: string | null, magnitude: string | null, study?: Observation["study"], direction: Observation["direction"] = "Variable"): Observation {
  return { id, name, conceptId, description, sourceId: ref(source), population, exposure, instrument, magnitude, study, direction, evidence: "Human research", reportType: "measured-assessment", conflictingSourceIds: [] };
}
const narcolepsy = { id: "harsh-2006-narcolepsy", design: "Randomized placebo-controlled trial", sampleSize: 196, populationLabels: ["Adults with narcolepsy"], comparator: "Placebo", route: "Oral", formulation: "Armodafinil", durationDays: 84, assessmentTime: "12 weeks" };
const osa = { id: "roth-2006-osa", design: "Randomized placebo-controlled trial", sampleSize: 395, populationLabels: ["CPAP-adherent adults with residual OSA sleepiness"], comparator: "Placebo", route: "Oral", formulation: "Armodafinil", durationDays: 84, assessmentTime: "12 weeks" };
const swd = { id: "nct00080288", design: "Randomized placebo-controlled trial", sampleSize: 254, populationLabels: ["Night workers with SWD"], comparator: "Placebo", route: "Oral", formulation: "Armodafinil", durationDays: 84, assessmentTime: "12 weeks" };
s.outcomes = [
  outcome("narcolepsy-mwt","Wake maintenance in narcolepsy","wake-maintenance","Morning/early-afternoon MWT improved; late-day wakefulness also favored armodafinil.",2,"196 adults with narcolepsy","150 or 250 mg/day versus placebo","MWT","Change +1.3 min (150 mg), +2.6 min (250 mg), −1.9 min (placebo)",narcolepsy,"Increased"),
  outcome("narcolepsy-cgi","Clinical global improvement in narcolepsy","wake-maintenance","At least minimal CGI-C improvement; this is a global clinical rating, not the MWT endpoint.",2,"196 adults with narcolepsy","150 or 250 mg/day versus placebo","CGI-C","69%, 73% and 33% respectively",narcolepsy,"Increased"),
  outcome("narcolepsy-secondary","Secondary cognition and fatigue","cognitive-task-performance","Selected memory, attention and fatigue measures improved. The report supplies no endpoint-specific effect sizes; principal adverse events were headache, nausea and dizziness.",2,"Adults with narcolepsy","150/250 mg/day, 12 weeks","Memory/attention/fatigue measures not specified",null,narcolepsy),
  outcome("osa-mwt","Wake maintenance in treated OSA","wake-maintenance","Pooled 150/250-mg arms improved MWT relative to placebo.",4,"395 CPAP-adherent adults with residual OSA sleepiness","150 or 250 mg/day versus placebo","MWT","Mean change approximately +1.9 versus −1.7 min",osa,"Increased"),
  outcome("osa-global-sleepiness","Clinical global response and sleepiness in OSA","sleep","CGI-C improvement 72% versus 37%; ESS change −5.5 versus −3.3 points; fatigue improved. Nighttime polysomnography and CPAP use were not worsened.",4,"395 CPAP-adherent adults","150/250 mg/day, 12 weeks","CGI-C; ESS; polysomnography","CGI-C 72% vs 37%; ESS −5.5 vs −3.3",osa),
  outcome("osa-additional-report","Additional OSA result — attribution unresolved","wake-maintenance","The report describes 150 mg/day for 12 weeks: MWT +2.3 versus −1.3 min, CGI-C 71% versus 53%, improved episodic secondary memory. Its R6 repeats R4's DOI/PMID; a distinct study identity is unverified and this is not counted as independent replication.",6,"Adults with OSA; sample size not separately identified","150 mg/day versus placebo, 12 weeks","MWT; CGI-C; episodic memory","+2.3 vs −1.3 min; 71% vs 53%"),
  outcome("osa-depression","OSA and depression — objective/subjective disagreement","wake-maintenance","CGI-C and ESS improved but objective MWT was nonsignificant (P=.30).",7,"Adults with treated OSA and comorbid depression","200 mg/day versus placebo","MWT; CGI-C; ESS","MWT change 2.6 versus 1.1 min; P=.30",{id:"nct00518986", design:"Randomized placebo-controlled trial", comparator:"Placebo", formulation:"Armodafinil", route:"Oral"}),
  outcome("osa-network-meta","Pooled modafinil/armodafinil OSA review","sleep","14 RCTs/3,085 participants; pooled class effect improved ESS and MWT at about four weeks. This is not an armodafinil-specific estimate.",8,"Patients with OSA across 14 RCTs","Modafinil or armodafinil versus controls","ESS; MWT","ESS improvement 2.25 points",{id:"pitre-2023",design:"Network meta-analysis",sampleSize:3085,assessmentTime:"Approximately 4 weeks",comparedSubstances:["modafinil","armodafinil"]}),
  outcome("swd-mslt","Sleep latency during shift work","wake-maintenance","MSLT increased from 2.3 to 5.3 min with armodafinil and 2.4 to 2.8 min with placebo.",9,"254 night workers with SWD","150 mg 30–60 min before night shift","MSLT","2.3→5.3 vs 2.4→2.8 min",swd,"Increased"),
  outcome("swd-global","Global response and daily functioning in SWD","sleep","CGI-C improved in 79% versus 59%. Diary sleepiness improved during laboratory shifts, real shifts and the commute; selected memory/attention improved. Daytime sleep was not measurably worsened on polysomnography.",9,"254 night workers with SWD","150 mg before night shift, 12 weeks","CGI-C; diaries; polysomnography","CGI-C 79% vs 59%",swd),
  outcome("swd-cochrane-sleepiness","SWD systematic review — sleepiness","sleep","Two armodafinil SWD trials, 572 participants; moderate-certainty evidence. Headache, nausea and BP increases occurred. No trials in ordinary shift workers without diagnosed SWD.",10,"572 participants with diagnosed SWD","Armodafinil versus placebo","Karolinska Sleepiness Scale","Approximately −0.99 points",{id:"liira-2014",design:"Systematic review",sampleSize:572},"Decreased"),
  outcome("swd-cochrane-reaction","SWD systematic review — reaction time","reaction-time","Simple reaction time improved by about 50 ms; same review/trial population as the sleepiness finding, not an independent replication.",10,"572 participants across the two SWD trials in the review","Armodafinil versus placebo","Simple reaction time","Approximately 50 ms faster",{id:"liira-2014",design:"Systematic review",sampleSize:572},"Decreased"),
  outcome("acute-sleep-loss","Acute sleep deprivation — vigilance","attention","All armodafinil doses improved objective wakefulness and psychomotor vigilance. At 200 mg, armodafinil had more sustained late exposure than 200 mg racemate. Tachycardia/palpitations, increased mean BP and lower subsequent sleep efficiency were reported. These results do not establish complex judgment, learning, creativity, decision quality or chronic sleep-restriction safety.",11,"107 healthy men","100/150/200/300 mg armodafinil; 200 mg modafinil; placebo during overnight wakefulness","Psychomotor vigilance; objective wakefulness",null,{id:"dinges-2006",design:"Randomized sleep-deprivation experiment",sampleSize:107,comparedSubstances:["modafinil","armodafinil"],assessmentTime:"Acute overnight sleep loss"}),
  outcome("rested-racemate-2003","Rested cognition — racemate, 2003","cognitive-task-performance","No significant battery-wide cognitive improvement in 30 students; mood/somatic-anxiety effects. This is racemic modafinil evidence, not isolated R-modafinil.",13,"30 non-sleep-deprived students","100 or 200 mg racemic modafinil","Cognitive battery", "No significant battery-wide improvement",{id:"randall-2003",sampleSize:30,comparedSubstances:["modafinil"]}),
  outcome("rested-racemate-2004","Rested cognition — racemate, 2004","cognitive-task-performance","Mostly null cognitive findings with isolated improvements and more set-shifting errors at 200 mg; not direct armodafinil evidence.",14,"45 rested adults aged 50–67","Racemic modafinil; 200-mg error signal","Cognitive battery; set shifting",null,{id:"randall-2004",sampleSize:45,comparedSubstances:["modafinil"]}),
  outcome("rested-racemate-2005","Rested cognition — racemate, 2005","cognitive-task-performance","Many null reaction-time, attention, memory, executive, visuospatial and fluency findings; not direct armodafinil evidence.",15,"60 healthy young adults","Racemic modafinil","Cognitive battery",null,{id:"randall-2005",sampleSize:60,comparedSubstances:["modafinil"]}),
];
s.effects = [];
s.cautions = [
  { title:"Serious rash and DRESS", description:"Label reports SJS/TEN, with serious rash from about 1 day to 2 months after starting and isolated later cases; no reliable predictor. It directs stopping at the first rash, skin/mouth sores, blistering or ulceration unless clearly unrelated. A fatal DRESS case was temporally associated with armodafinil at about 3 weeks; additional hypersensitivity evidence comes from the racemate.", sourceId:ref(1) },
  { title:"Psychiatric reactions", description:"Discontinuations for anxiety/agitation/nervousness/irritability were about 1.2% versus 0.3% placebo, and depression-related discontinuations 0.6% versus 0.2%; suicidal ideation occurred. Postmarketing mania, delusions, hallucinations, suicidal ideation and aggression sometimes required hospitalization, including without prior psychiatric history.", sourceId:ref(1) },
  { title:"Blood pressure and pulse", description:"Short-term placebo-adjusted mean BP increases were about 1.2–4.3 mmHg and pulse increases 0.9–3.5 beats/min. New/intensified antihypertensive therapy: 2.9% versus 1.8%. Label advises HR/BP monitoring and caution with cardiovascular disease.", sourceId:ref(1) },
  { title:"Cardiovascular events — racemic modafinil", description:"Three U.S. claims databases found no overall MI increase and mostly null cardiovascular-hospitalization estimates. Among OSA patients with prior stroke, recurrent-stroke adjusted HR was 1.96 (95% CI 1.02–3.76). Observational subgroup finding; not an armodafinil-specific risk.", sourceId:ref(18) },
  { title:"Adverse-event discontinuation — pooled products", description:"The 14-trial OSA network meta-analysis estimated RR 2.01 (95% CI 1.14–3.51) for discontinuation due to adverse events with pooled modafinil/armodafinil. Product-specific risk cannot be inferred.", sourceId:ref(8) },
  { title:"Tolerance, misuse and withdrawal", description:"Postmarketing reports describe escalating/repeated doses, diversion, obtaining drug against medical advice and tolerance. Physical dependence is reported. Abrupt cessation or major reduction after chronic use has been associated with shaking, sweating, chills, nausea/vomiting, confusion, aggression, atrial fibrillation, convulsions, suicidality, fatigue, insomnia, aches, depression and headache. Controlled stimulant/euphoric abuse-liability evidence in the label largely concerns racemic modafinil; monkey self-administration is animal evidence.", sourceId:ref(1) },
  { title:"Pregnancy — isolated armodafinil uncertainty", description:"Human armodafinil data are insufficient to quantify risk. Label reports include intrauterine growth restriction and spontaneous abortion. Pregnant rats given 60/200/600 mg/kg/day had reduced fetal weight and developmental-delay variations at the highest dose; no-effect exposure at 200 mg/kg/day was below human exposure at 250 mg/day. Animal exposure findings cannot quantify human risk.", sourceId:ref(1) },
  { title:"Pregnancy — combined product registry", description:"The 14-year Provigil/Nuvigil registry pooled modafinil and/or armodafinil. Among 137 prospective live births, 18 major malformations occurred: 13.1% (95% CI 8.0–20.0); first-trimester prevalence 13.7% versus a cited 3% population comparator. This substantial signal does not identify isolated-armodafinil absolute risk.", sourceId:ref(19) },
  { title:"Pregnancy — Sweden/Norway racemate cohort", description:"Three major malformations among 133 first-trimester-exposed infants; RR 1.06 (95% CI 0.35–3.25). The wide CI retains uncertainty; predominantly racemic-modafinil evidence.", sourceId:ref(20) },
  { title:"Pregnancy — French matched cohort", description:"786 modafinil-exposed versus 3,144 matched unexposed pregnancies: first-trimester major malformations 4.2% versus 3.3%, adjusted RR 1.32 (95% CI 0.81–2.15). Most other outcomes were nonsignificant; elective termination was more frequent. Racemate study with disclosed industry sponsorship.", sourceId:ref(21) },
  { title:"Pregnancy — French childhood follow-up", description:"865 prenatally modafinil-exposed children: first-trimester major-anomaly adjusted RR 1.23 (95% CI 0.76–1.99) versus matched unexposed and 1.77 (95% CI 1.01–3.07) versus methylphenidate-exposed. Neurodevelopmental risk was not increased versus unexposed. Authors could not exclude moderate malformation risk; no study funding declared, COUPERIN CY26 open-access support acknowledged. The report's additional R23 citation has no bibliography entry.", sourceId:ref(22) },
  { title:"Severe hepatic impairment", description:"Label calls for dose reduction without a universal numeric reduced dose. Supporting PK is extrapolated from racemic modafinil: nine patients with cirrhosis had about 60% lower clearance and doubled steady-state concentration. It is not a dedicated armodafinil hepatic study.", sourceId:ref(1) },
  { title:"Advanced renal impairment", description:"Indirect evidence: single 200-mg racemic-modafinil study at CrCl ≤20 mL/min did not substantially change parent PK but increased inactive modafinil-acid exposure about ninefold. Dedicated armodafinil safety in advanced kidney disease is not established.", sourceId:ref(1) },
];
s.interactions = [
  { id:"armodafinil-midazolam", name:"Midazolam — CYP3A4 induction", otherSlug:corpus.substances.some(x=>x.slug==="midazolam")?"midazolam":null, summary:"Repeated armodafinil 250 mg/day reduced midazolam AUC about 32% orally and 17% IV, and oral Cmax about 19%.", sourceId:ref(17), context:"Clinical CYP-probe study; route-specific exposure changes." },
  { id:"armodafinil-omeprazole", name:"Omeprazole — CYP2C19 inhibition", otherSlug:corpus.substances.some(x=>x.slug==="omeprazole")?"omeprazole":null, summary:"Armodafinil 400 mg increased omeprazole exposure approximately 38–40%.", sourceId:ref(17), context:"Clinical CYP-probe study; not a universal magnitude for all CYP2C19 substrates." },
  { id:"armodafinil-caffeine", name:"Caffeine — CYP1A2 probe", otherSlug:"caffeine", summary:"Caffeine pharmacokinetics were not materially altered in the reported clinical probe study.", sourceId:ref(17), context:"Null PK finding, not evidence that all co-use effects are absent." },
  { id:"armodafinil-contraceptives", name:"Steroidal contraceptives", otherSlug:null, summary:"Label warns of reduced effectiveness during treatment and for 1 month after discontinuation; it advises alternative or concomitant contraception.", sourceId:ref(1), context:"CYP3A4/5 induction; class-level label warning." },
  { id:"armodafinil-cyp3a-substrates", name:"Cyclosporine, triazolam and other CYP3A4/5 substrates", otherSlug:null, summary:"Armodafinil can lower concentrations/effectiveness of these substrates. Label describes weak/moderate CYP3A4/5 induction; midazolam and quetiapine quantitative findings are separate.", sourceId:ref(1), context:"Documented label class interaction, not an inferred shared-pathway warning." },
  { id:"armodafinil-cyp2c19-substrates", name:"Phenytoin, diazepam, propranolol, omeprazole and clomipramine", otherSlug:null, summary:"Reversible/moderate CYP2C19 inhibition can increase exposure or prolong elimination of these label-listed substrates.", sourceId:ref(1), context:"Magnitude depends on the substrate; omeprazole probe estimate is not generalized." },
  { id:"armodafinil-warfarin", name:"Warfarin", otherSlug:null, summary:"Label advises closer PT/INR monitoring during coadministration.", sourceId:ref(1), context:"Official labeling recommendation." },
  { id:"armodafinil-maoi", name:"MAO inhibitors", otherSlug:null, summary:"Label advises caution with coadministration.", sourceId:ref(1), context:"Label caution; no quantitative interaction magnitude reported." },
  { id:"armodafinil-quetiapine", name:"Quetiapine", otherSlug:corpus.substances.some(x=>x.slug==="quetiapine")?"quetiapine":null, summary:"Quetiapine exposure decreased approximately 29% in a clinical interaction study cited by the label.", sourceId:ref(1), context:"Clinical exposure finding, not a universal dose-adjustment rule." },
];
s.mechanisms = [
  { title:"Dopaminergic involvement", conceptId:"dopamine-transporter", description:"The complete wake-promoting mechanism remains unknown. Label describes in-vitro dopamine-transporter binding and dopamine-reuptake inhibition, with indirect dopamine-receptor agonism; these findings do not establish a complete clinical mechanism.", sourceId:ref(1) },
  { title:"R- versus S-enantiomer persistence", description:"R-modafinil terminal half-life is about 15 h versus about 4 h for S-modafinil. Single 50-mg NUVIGIL produces an R-enantiomer concentration profile nearly superimposable on 100-mg racemic PROVIGIL; at equal 200-mg total daily doses, pure armodafinil has higher late R exposure. Milligram-for-milligram interchangeability is not established.", sourceId:ref(1) },
  { title:"Preclinical mechanism boundaries", description:"R/S enantiomers have broadly similar actions in tested animal systems; modafinil loses wake-promoting activity in dopamine-transporter-knockout mice and racemic modafinil is reinforcing in monkeys. These do not quantify human armodafinil efficacy or abuse/dependence risk.", sourceId:ref(1) },
];
s.claims = [{ id:"armodafinil-rested-enhancement-boundary", assertion:"Acute sleep-loss wakefulness/vigilance evidence does not establish broad cognitive enhancement in rested healthy people.", relation:"evidence-boundary", participants:[{entityId:"substance:armodafinil",role:"intervention"},{entityId:"tag:cognitive-task-performance",role:"claimed-outcome"}], context:"Diagnosed excessive-sleepiness trials and acute experimental sleep loss differ from rested healthy enhancement; racemate null studies cannot be relabeled as isolated R-modafinil.", sourceIds:[ref(1),ref(11),ref(13),ref(14),ref(15)], conflictingSourceIds:[], assessment:"not-formally-assessed", limitation:"No convincing direct rested-healthy broad-enhancement literature identified in the completed report." }];
s.legal = [{jurisdiction:"United States",activity:"Prescription use and controlled-substance classification",status:"NUVIGIL is Schedule IV; labeled for adult excessive sleepiness associated with narcolepsy, OSA or shift-work disorder. Ordinary sleep deprivation and general cognitive enhancement are not approved indications.",sourceUrl:label,asOf:"2026-10-10"}];
const updated = { ...corpus, substances: corpus.substances.map(x => x.slug === s.slug ? s : x) };
validateContent(updated);
validateCanonicalSources(updated.substances.flatMap(x => x.references));
const output = serializeContent("substances/armodafinil.md", { ...parsed, record:s });
parseContentSource("substances/armodafinil.md", output);
console.log(JSON.stringify({ slug:s.slug, references:s.references.length, doses:s.doses.length, outcomes:s.outcomes.length, cautions:s.cautions.length, interactions:s.interactions.length, unresolvedCitations:["R3 registry mismatch","R6 duplicated source","R23 missing from report bibliography"], mode:process.argv.includes("--apply")?"apply":"dry-run" }, null, 2));
if (process.argv.includes("--apply")) writeFileSync(target, output);
