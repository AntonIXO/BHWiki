import { loadCorpus } from "../src/lib/content-markdown";
import { validateSubstance } from "../src/lib/validate-content";

const corpus = loadCorpus();
// The pending folder also contains queued topics that do not yet have wiki
// articles. Audit only the pages integrated by the current Deep Research pass.
const slugs = [
  "alpha-gpc", "armodafinil", "astaxanthin", "atomoxetine", "berberine",
  "bromelain", "choline-bitartrate", "choline-chloride", "citicoline",
  "coenzyme-q10", "dihexa", "exogenous-ketones", "fasting", "gaba",
  "huperzine-a", "ketogenic-diet", "lactoferrin", "liver", "lutein",
  "lutemax", "magnesium-citrate", "magnesium-glycinate",
  "magnesium-l-threonate", "magnesium-malate", "magnesium-oxide", "melatonin",
  "modafinil", "noopept", "omega-3", "phenibut", "phenylpiracetam",
  "phosphatidylserine", "pqq", "psilocybin-microdosing", "quercetin",
  "saccharomyces-boulardii", "spermidine", "synbiotics", "tadalafil", "tyrosine",
  "urolithin-a", "vitamin-c", "zeaxanthin",
];
const fields = ["doses", "pkObservations", "modifiers", "effects", "outcomes", "mechanisms", "cautions", "claims", "interactions", "legal"] as const;
const forbidden = /Original Deep Research|Returned Deep Research|full returned|preserved report|Deep Research synthesis|research synthesis|Research mechanisms|Research safety|Documented interaction context|See cited study|```|\byaml\b|\*\*|^\s*#{2,6}\s|\||^\s*[-*]\s*[^\n:]{1,80}:\s|\{\s*["'][^{}]+\}/i;
const failures: string[] = [];
for (const slug of [...new Set(slugs)]) {
  const substance = corpus.substances.find((item) => item.slug === slug);
  if (!substance) { failures.push(`${slug}: missing article`); continue; }
  try { validateSubstance(substance); } catch (error) { failures.push(String(error)); }
  const inspect = (path: string, value: unknown, max = 500) => {
    if (typeof value !== "string") return;
    if (value.includes("\n")) failures.push(`${slug} ${path}: multiline card text`);
    if (value.length > max) failures.push(`${slug} ${path}: ${value.length} characters`);
    if (forbidden.test(value)) failures.push(`${slug} ${path}: raw report syntax or marker`);
  };
  inspect("summary", substance.summary, 500);
  inspect("description", substance.description, 500);
  inspect("evidenceNote", substance.evidenceNote, 420);
  for (const field of fields) for (let index = 0; index < substance[field].length; index++) {
    for (const [key, value] of Object.entries(substance[field][index])) inspect(`${field}[${index}].${key}`, value);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Audited ${slugs.length} Deep Research articles: no raw report cards or unresolved source records.`);
}
