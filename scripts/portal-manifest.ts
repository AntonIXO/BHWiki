export type PortalSpec = {
  slug: string;
  name: string;
  query: string;
  cid?: number;
  aliases: string[];
  tags: string[];
  category: string;
  wiki?: string;
};

// The label in the row is 404 on PubChem name search. Each CID is the one record those synonyms identify.
const pinnedCids: Record<string, number> = {
  "delta-10-thc": 162625088,
  thcb: 6453891,
  "o-pce": 132989542,
};

/** `slug|Name|PubChem query|wiki title|alias;alias`. Empty optional fields may be omitted from the right. */
function parse(line: string, tags: string[], category: string): PortalSpec {
  const [slug, name, query, wiki, aliasField] = line.split("|");
  if (!slug || !name) throw new Error(`Bad portal row: ${line}`);
  return {
    slug,
    name,
    query: query || name,
    cid: pinnedCids[slug],
    aliases: aliasField ? aliasField.split(";").filter(Boolean) : [],
    tags,
    category,
    wiki: wiki || undefined,
  };
}

function group(category: string, tags: string[], lines: string[]): PortalSpec[] {
  return lines.map((line) => parse(line, tags, category));
}

const lysergamide = ["psychedelic", "lysergamide"];
const tryptamine = ["psychedelic", "tryptamine"];
const phenethylaminePsy = ["psychedelic", "phenethylamine"];
const cannabinoid = ["cannabinoid"];
const ach = ["dissociative", "arylcyclohexylamine"];
const dissociative = ["dissociative"];
const deliriant = ["deliriant"];
const depressant = ["depressant"];
const benzo = ["benzodiazepine", "depressant"];
const opioid = ["opioid", "depressant"];
const stimulantPea = ["stimulant", "phenethylamine"];
const stimulant = ["stimulant"];

export const portalManifest: PortalSpec[] = [
  ...group("Psychedelic", lysergamide, [
    "1p-lsd|1P-LSD|1P-LSD|1P-LSD",
    "al-lad|AL-LAD",
    "eth-lad|ETH-LAD",
    "lsa|LSA|lysergic acid amide|LSA|Ergine",
  ]),
  ...group("Psychedelic", tryptamine, [
    "psilocin|Psilocin|Psilocin|Psilocin|4-HO-DMT",
    "4-aco-dmt|4-AcO-DMT|O-Acetylpsilocin|4-AcO-DMT|Psilacetin",
    "4-aco-det|4-AcO-DET|4-Acetoxy-N,N-diethyltryptamine|4-AcO-DET",
    "4-aco-met|4-AcO-MET|4-Acetoxy-N-methyl-N-ethyltryptamine|4-AcO-MET",
    "4-aco-mipt|4-AcO-MiPT|4-Acetoxy-N-methyl-N-isopropyltryptamine|4-AcO-MiPT",
    "4-ho-dipt|4-HO-DiPT|4-Hydroxy-N,N-diisopropyltryptamine|4-HO-DiPT",
    "4-ho-dpt|4-HO-DPT|4-Hydroxy-N,N-dipropyltryptamine|4-HO-DPT",
    "4-ho-met|4-HO-MET|4-Hydroxy-N-methyl-N-ethyltryptamine|4-HO-MET",
    "4-ho-mipt|4-HO-MiPT|4-Hydroxy-N-methyl-N-isopropyltryptamine|4-HO-MiPT",
    "5-meo-dalt|5-MeO-DALT|5-Methoxy-N,N-diallyltryptamine|5-MeO-DALT",
    "5-meo-dibf|5-MeO-DiBF|5-MeO-DiBF|5-MeO-DiBF",
    "5-meo-dmt|5-MeO-DMT|5-Methoxy-N,N-dimethyltryptamine|5-MeO-DMT",
    "5-meo-mipt|5-MeO-MiPT|5-Methoxy-N-methyl-N-isopropyltryptamine|5-MeO-MiPT",
    "amt|αMT|alpha-Methyltryptamine|AMT|AMT",
    "dipt|DiPT|N,N-Diisopropyltryptamine|DiPT",
    "mipt|MiPT|N-Methyl-N-isopropyltryptamine|MiPT",
    "met|MET|N-Methyl-N-ethyltryptamine|MET",
    "ibogaine|Ibogaine",
  ]),
  ...group("Psychedelic", phenethylaminePsy, [
    "2c-b|2C-B",
    "2c-b-fly|2C-B-FLY",
    "2c-c|2C-C",
    "2c-d|2C-D",
    "2c-e|2C-E",
    "2c-i|2C-I",
    "2c-p|2C-P",
    "2c-t-2|2C-T-2",
    "2c-t-7|2C-T-7",
    "dob|DOB|2,5-Dimethoxy-4-bromoamphetamine|DOB",
    "doc|DOC|2,5-Dimethoxy-4-chloroamphetamine|DOC",
    "doi|DOI|2,5-Dimethoxy-4-iodoamphetamine|DOI",
    "dom|DOM|2,5-Dimethoxy-4-methylamphetamine|DOM|STP",
    "mda|MDA|3,4-Methylenedioxyamphetamine|MDA",
    "25b-nbome|25B-NBOMe",
    "25c-nbome|25C-NBOMe",
    "25i-nbome|25I-NBOMe",
    "25n-nbome|25N-NBOMe",
    "bromo-dragonfly|Bromo-DragonFLY|Bromo-DragonFLY|Bromo-DragonFLY",
  ]),
  ...group("Antiretroviral", [], [
    "efavirenz|Efavirenz",
  ]),
  ...group("Cannabinoid", cannabinoid, [
    "delta-8-thc|Delta-8-THC|Delta-8-Tetrahydrocannabinol|Delta-8-THC",
    "delta-10-thc|Delta-10-THC|delta10-THC|Delta-10-THC",
    "delta-11-thc|Delta-11-THC|Delta-11-Tetrahydrocannabinol|Delta-11-THC",
    "thcb|THCB|Tetrahydrocannabinol-C4|THCB",
    "thch|THCH|Tetrahydrocannabihexol|THCH",
    "thcp|THCP|Tetrahydrocannabiphorol|THCP",
    "hhc|HHC|Hexahydrocannabinol|HHC",
    "hhch|HHCH|Hexahydrocannabihexol|HHCH",
    "hhcp-o-acetate|HHCP-O-acetate|HHCP-O-acetate|HHCP-O-acetate",
    "thc-o-acetate|THC-O-acetate|THC-O-acetate|THC-O-acetate",
    "thcp-o-acetate|THCP-O-acetate|THCP-O-acetate|THCP-O-acetate",
    "5f-akb48|5F-AKB48",
    "5f-pb-22|5F-PB-22",
    "ab-fubinaca|AB-FUBINACA",
    "apica|APICA|APICA|APICA|SDB-001",
    "jwh-018|JWH-018",
    "jwh-073|JWH-073",
    "thj-018|THJ-018",
    "thj-2201|THJ-2201",
    "sts-135|STS-135",
  ]),
  ...group("Dissociative", ach, [
    "2-fdck|2-FDCK|2-Fluorodeschloroketamine|2-FDCK",
    "3-meo-pce|3-MeO-PCE",
    "3-meo-pcmo|3-MeO-PCMo",
    "3-meo-pcp|3-MeO-PCP",
    "4-meo-pcp|4-MeO-PCP",
    "dck|Deschloroketamine|Deschloroketamine|Deschloroketamine|DCK",
    "methoxetamine|Methoxetamine|Methoxetamine|Methoxetamine|MXE",
    "o-pce|O-PCE|eticyclidone|O-PCE",
    "pcp|Phencyclidine|Phencyclidine|PCP|PCP",
  ]),
  ...group("Dissociative", dissociative, [
    "memantine|Memantine",
    "diphenidine|Diphenidine",
    "ephenidine|Ephenidine",
    "methoxphenidine|Methoxphenidine|Methoxphenidine|Methoxphenidine|MXP",
  ]),
  ...group("Deliriant", deliriant, [
    "benzydamine|Benzydamine",
    "mirtazapine|Mirtazapine",
    "myristicin|Myristicin",
  ]),
  ...group("Depressant", depressant, [
    "2m2b|2-Methyl-2-butanol|2-Methyl-2-butanol|2-Methyl-2-butanol|2M2B;tert-Amyl alcohol",
    "pentobarbital|Pentobarbital",
    "phenobarbital|Phenobarbital",
    "secobarbital|Secobarbital",
    "f-phenibut|F-Phenibut|4-Fluorophenibut|F-Phenibut",
    "phenibut|Phenibut",
    "gabapentin|Gabapentin",
    "pregabalin|Pregabalin",
    "1-4-butanediol|1,4-Butanediol|1,4-Butanediol|1,4-Butanediol",
    "gbl|GBL|gamma-Butyrolactone|GBL",
    "ghb|GHB|4-Hydroxybutanoic acid|GHB|gamma-Hydroxybutyric acid",
    "zopiclone|Zopiclone",
    "zolpidem|Zolpidem",
    "methaqualone|Methaqualone",
    "quetiapine|Quetiapine",
    "tianeptine|Tianeptine",
  ]),
  ...group("Benzodiazepine", benzo, [
    "clonazolam|Clonazolam",
    "clonazepam|Clonazepam",
    "deschloroetizolam|Deschloroetizolam",
    "diazepam|Diazepam",
    "diclazepam|Diclazepam",
    "etizolam|Etizolam",
    "flubromazepam|Flubromazepam",
    "flubromazolam|Flubromazolam",
    "lorazepam|Lorazepam",
    "nifoxipam|Nifoxipam",
    "pyrazolam|Pyrazolam",
  ]),
  ...group("Opioid", opioid, [
    "acetylfentanyl|Acetylfentanyl",
    "buprenorphine|Buprenorphine",
    "codeine|Codeine",
    "desomorphine|Desomorphine",
    "dextropropoxyphene|Dextropropoxyphene",
    "dihydrocodeine|Dihydrocodeine",
    "ethylmorphine|Ethylmorphine",
    "heroin|Heroin|Diacetylmorphine|Heroin|Diamorphine;Diacetylmorphine",
    "hydrocodone|Hydrocodone",
    "methadone|Methadone",
    "morphine|Morphine",
    "n-2c-fentanyl|N-(2C)-Fentanyl|N-(2C)-fentanyl",
    "o-desmethyltramadol|O-Desmethyltramadol|O-Desmethyltramadol|O-Desmethyltramadol|O-DSMT",
    "oxycodone|Oxycodone",
    "pethidine|Pethidine|Pethidine|Pethidine|Meperidine",
    "sufentanil|Sufentanil",
    "tapentadol|Tapentadol",
    "tramadol|Tramadol",
    "u-47700|U-47700",
  ]),
  ...group("Wake-promoting medicine", stimulant, [
    "armodafinil|Armodafinil",
  ]),
  ...group("Nootropic", [], [
    "alpha-gpc|Alpha-GPC|Choline alfoscerate|Alpha-GPC",
    "choline-bitartrate|Choline bitartrate",
    "meclofenoxate|Meclofenoxate|Meclofenoxate|Meclofenoxate|Centrophenoxine",
    "coluracetam|Coluracetam",
    "oxiracetam|Oxiracetam",
    "piracetam|Piracetam",
    "pramiracetam|Pramiracetam",
    "bromantane|Bromantane|Bromantane|Bromantane|Ladasten",
    "n-acetylcysteine|N-Acetylcysteine|Acetylcysteine|Acetylcysteine|NAC",
    "s-adenosyl-methionine|S-Adenosyl methionine|S-Adenosyl methionine|S-Adenosyl_methionine|SAMe",
    "phenylpiracetam|Phenylpiracetam|Fonturacetam|Phenylpiracetam|Fonturacetam",
    "noopept|Noopept|Noopept|Noopept|Omberacetam",
    "picamilon|Picamilon",
  ]),
  ...group("Nootropic", ["amino-acid"], [
    "tyrosine|Tyrosine|L-Tyrosine|Tyrosine",
  ]),
  ...group("Actoprotector", [], [
    "bemitil|Bemitil|Bemethyl|Bemitil|Bemethyl;Metaprot",
    "kemantane|Kemantane",
    "chlodantane|Chlodantane",
  ]),
  ...group("Stimulant", stimulantPea, [
    "5-apb|5-APB",
    "6-apb|6-APB",
    "6-apdb|6-APDB",
    "2-fa|2-FA|2-Fluoroamphetamine|2-FA",
    "2-fma|2-FMA|2-Fluoromethamphetamine|2-FMA",
    "amphetamine|Amphetamine",
    "lisdexamfetamine|Lisdexamfetamine|Lisdexamfetamine|Lisdexamfetamine|Vyvanse",
    "methamphetamine|Methamphetamine",
    "3-fea|3-FEA|3-Fluoroethamphetamine|3-FEA",
    "4-fa|4-FA|4-Fluoroamphetamine|4-FA",
    "butylone|Butylone",
    "ethylone|Ethylone",
    "hexedrone|Hexedrone",
    "hexen|Hexen|N-Ethylhexedrone|Hexen|N-Ethylhexedrone",
    "mephedrone|Mephedrone|Mephedrone|Mephedrone|4-MMC",
    "mdea|MDEA|3,4-Methylenedioxy-N-ethylamphetamine|MDEA",
    "methylone|Methylone",
    "mexedrone|Mexedrone",
    "nep|NEP|N-Ethylpentedrone|N-Ethylpentedrone|N-Ethylpentedrone",
    "a-php|A-PHP|alpha-Pyrrolidinohexiophenone|A-PHP",
    "a-pvp|A-PVP|alpha-Pyrrolidinopentiophenone|A-PVP",
    "mdpv|MDPV|Methylenedioxypyrovalerone|MDPV",
  ]),
  ...group("Stimulant", stimulant, [
    "cocaine|Cocaine",
    "dichloropane|Dichloropane|Dichloropane|Dichloropane|RTI-111",
    "nm-2-ai|NM-2-AI|N-methyl-2-aminoindane|NM-2-AI",
    "2-ai|2-AI|2-Aminoindane|2-AI",
    "desoxypipradrol|Desoxypipradrol|Desoxypipradrol|Desoxypipradrol|2-DPMP",
    "ethylphenidate|Ethylphenidate",
    "isopropylphenidate|Isopropylphenidate",
    "methylnaphthidate|Methylnaphthidate|Methylnaphthidate|Methylnaphthidate|HDMP-28",
    "3-4-ctmp|3,4-CTMP|3,4-Dichloromethylphenidate|3,4-CTMP",
    "3-fpm|3-FPM|3-Fluorophenmetrazine|3-FPM",
    "mdai|MDAI|5,6-Methylenedioxy-2-aminoindane|MDAI",
  ]),
];

export const deepStructures: Array<{ slug: string; cid: number }> = [
  { slug: "lsd", cid: 5761 },
  { slug: "mdma", cid: 1615 },
  { slug: "ketamine", cid: 3821 },
  { slug: "delta-9-thc", cid: 16078 },
  { slug: "ethanol", cid: 702 },
  { slug: "mescaline", cid: 4076 },
  { slug: "dmt", cid: 6089 },
  { slug: "dextromethorphan", cid: 5360696 },
  { slug: "salvinorin-a", cid: 128563 },
  { slug: "mitragynine", cid: 3034396 },
  { slug: "alprazolam", cid: 2118 },
  { slug: "nitrous-oxide", cid: 948 },
];
