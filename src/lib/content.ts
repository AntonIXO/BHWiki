import type { Hyperedge, Substance, Tag } from "./types";
import { additionalSubstances, additionalTags, additionalHyperedges } from "./content-additions";

// Original curated records. Sourced drafts have not passed independent editorial review.
const coreTags: Tag[] = [
  {
    "id": "stimulant",
    "label": "Stimulant",
    "kind": "class",
    "description": "Compounds associated with increased arousal; mechanisms and risks differ.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/",
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ]
  },
  {
    "id": "methylxanthine",
    "label": "Methylxanthine",
    "kind": "chemical-family",
    "description": "A chemical family that includes caffeine.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ]
  },
  {
    "id": "amino-acid",
    "label": "Amino acid derivative",
    "kind": "chemical-family",
    "description": "A chemical grouping, not a shared claim of cognitive benefit.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/23096008/",
      "https://pubmed.ncbi.nlm.nih.gov/28615996/"
    ]
  },
  {
    "id": "hormone",
    "label": "Hormone",
    "kind": "class",
    "description": "Endogenous signals that can also be administered as products.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know"
    ]
  },
  {
    "id": "psychedelic",
    "label": "Psychedelic",
    "kind": "class",
    "description": "Compounds that can produce substantial changes in perception and experience.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28353056/"
    ]
  },
  {
    "id": "adenosine-antagonist",
    "label": "Adenosine antagonist",
    "kind": "mechanism",
    "description": "Blocks adenosine receptor signaling.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ]
  },
  {
    "id": "nicotinic-agonist",
    "label": "Nicotinic agonist",
    "kind": "mechanism",
    "description": "Activates nicotinic acetylcholine receptors.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ]
  },
  {
    "id": "serotonin-2a",
    "label": "Serotonin 5-HT2A receptor",
    "kind": "target",
    "description": "A serotonin receptor implicated by human antagonist experiments in acute psilocybin effects.",
    "aliases": [
      "5-HT2A",
      "HTR2A"
    ],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/9875725/"
    ]
  },
  {
    "id": "energy-buffer",
    "label": "Energy buffering",
    "kind": "mechanism",
    "description": "Supports the creatine–phosphocreatine system in tissue energy metabolism.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28615996/"
    ]
  },
  {
    "id": "circadian",
    "label": "Circadian signaling",
    "kind": "mechanism",
    "description": "Signals associated with the timing of sleep and waking.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know"
    ]
  },
  {
    "id": "adenosine",
    "label": "Adenosine",
    "kind": "neurotransmitter",
    "description": "A neuromodulator involved in sleep pressure and arousal.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ]
  },
  {
    "id": "acetylcholine",
    "label": "Acetylcholine",
    "kind": "neurotransmitter",
    "description": "The endogenous transmitter at nicotinic and muscarinic receptors.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ]
  },
  {
    "id": "serotonin",
    "label": "Serotonin",
    "kind": "neurotransmitter",
    "description": "A transmitter with multiple receptor families; receptor activity is not a benefit score.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/9875725/"
    ]
  },
  {
    "id": "cyp1a2",
    "label": "CYP1A2",
    "kind": "enzyme",
    "description": "A liver enzyme important in caffeine metabolism; activity varies with exposures and physiology.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/15289794/"
    ]
  },
  {
    "id": "cyp2a6",
    "label": "CYP2A6",
    "kind": "enzyme",
    "description": "An enzyme with an important role in nicotine metabolism.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/19184645/"
    ]
  },
  {
    "id": "attention",
    "label": "Attention",
    "kind": "outcome",
    "description": "Performance on tasks that test selecting or switching attention. A task result does not measure general intelligence or subjective focus.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/18681988/"
    ]
  },
  {
    "id": "sleep",
    "label": "Sleep",
    "kind": "outcome",
    "description": "Measured sleep outcomes, such as onset time and continuity. Direction and clinical meaning depend on the endpoint and population.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/24235903/",
      "https://pubmed.ncbi.nlm.nih.gov/29912983/"
    ]
  },
  {
    "id": "exercise",
    "label": "Exercise performance",
    "kind": "outcome",
    "description": "Performance outcomes during exercise or training.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28615996/"
    ]
  },
  {
    "id": "perception",
    "label": "Altered perception",
    "kind": "effect",
    "description": "Changes in the character of sensory experience.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/9875725/"
    ]
  },
  {
    "id": "us-schedule-i",
    "label": "US federal Schedule I",
    "kind": "legal",
    "description": "A US federal classification; not a worldwide or state-level legal conclusion.",
    "aliases": [],
    "relatedIds": [],
    "sourceUrls": [
      "https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf"
    ]
  },
  {
    "id": "adenosine-receptor",
    "label": "Adenosine receptors",
    "kind": "target",
    "description": "Receptors activated by adenosine; caffeine antagonism changes signaling without removing the physiological need for sleep.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ],
    "aliases": [],
    "relatedIds": [
      "adenosine",
      "adenosine-antagonist"
    ]
  },
  {
    "id": "nicotinic-receptor",
    "label": "Nicotinic acetylcholine receptors",
    "kind": "target",
    "description": "Ligand-gated receptors activated by acetylcholine and nicotine. Receptor subtypes and desensitization affect the response.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ],
    "aliases": [
      "nAChR"
    ],
    "relatedIds": [
      "acetylcholine",
      "nicotinic-agonist"
    ]
  },
  {
    "id": "tobacco-smoke",
    "label": "Tobacco-smoke exposure",
    "kind": "exposure",
    "description": "Smoke exposure can induce CYP1A2 activity. This context is distinct from nicotine exposure and from the route of caffeine administration.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/15289794/"
    ],
    "aliases": [
      "Smoking",
      "Cigarette smoke"
    ],
    "relatedIds": [
      "cyp1a2"
    ]
  },
  {
    "id": "alertness",
    "label": "Subjective alertness",
    "kind": "effect",
    "description": "A reported sense of being awake and responsive. It can change independently of objective task performance or later sleep.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/18681988/"
    ],
    "aliases": [
      "Feeling awake"
    ],
    "relatedIds": [
      "attention",
      "sleep"
    ]
  },
  {
    "id": "anxiety",
    "label": "Anxiety and jitteriness",
    "kind": "effect",
    "description": "Uncomfortable arousal or unease reported after exposure. The experience depends on dose, sensitivity and context.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ],
    "aliases": [
      "Jitteriness"
    ],
    "relatedIds": []
  },
  {
    "id": "craving",
    "label": "Craving",
    "kind": "effect",
    "description": "An urge to use a substance; with nicotine dependence it may appear during abstinence and be temporarily relieved by renewed exposure.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ],
    "aliases": [],
    "relatedIds": []
  },
  {
    "id": "daytime-sleepiness",
    "label": "Daytime sleepiness",
    "kind": "effect",
    "description": "A reported tendency to feel sleepy during waking hours. Adverse-event reporting is distinct from an objective sleep-latency test.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/29912983/"
    ],
    "aliases": [],
    "relatedIds": [
      "sleep"
    ]
  },
  {
    "id": "muscle-stores",
    "label": "Muscle creatine stores",
    "kind": "outcome",
    "description": "The measured concentration of total creatine in skeletal muscle. Tissue concentration is a biochemical outcome, not a subjective benefit score.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/8828669/"
    ],
    "aliases": [],
    "relatedIds": [
      "exercise",
      "energy-buffer"
    ]
  },
  {
    "id": "depression-severity",
    "label": "Depression symptom severity",
    "kind": "outcome",
    "description": "Severity measured with a specified clinical instrument, population and follow-up interval; a scale change does not by itself establish remission.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/36322843/"
    ],
    "aliases": [],
    "relatedIds": []
  },
  {
    "id": "behavioral-scheduling",
    "label": "Behavioral sleep–wake scheduling",
    "kind": "exposure",
    "description": "Scheduled sleep and waking behavior used alongside a study treatment. Combined-treatment findings should retain this context.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/29912983/"
    ],
    "aliases": [],
    "relatedIds": [
      "sleep",
      "circadian"
    ]
  },
  {
    "id": "psychological-support",
    "label": "Clinical psychological support",
    "kind": "exposure",
    "description": "Preparation and support supplied within a clinical research protocol. Findings from that setting do not establish outcomes of unsupervised exposure.",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/36322843/"
    ],
    "aliases": [],
    "relatedIds": []
  }
];

const coreSubstances: Substance[] = [
  {
    "slug": "caffeine",
    "name": "Caffeine",
    "subtitle": "Wakefulness, with a long tail.",
    "summary": "A familiar stimulant with an unusually rich evidence base. Its effects depend on timing, tolerance and how quickly your body clears it.",
    "description": "Caffeine is a methylxanthine found in coffee and tea and added to some foods and medicines. Blocking adenosine signaling can increase alertness, while residual exposure can interfere with sleep. The evidence below separates measured outcomes from the experience of feeling more awake.",
    "aliases": [
      "1,3,7-trimethylxanthine",
      "Coffee caffeine"
    ],
    "formula": "C8H10N4O2",
    "molecularWeight": "194.19 g/mol",
    "pubchemCid": 2519,
    "smiles": "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
    "category": "Stimulant",
    "tags": [
      "stimulant",
      "methylxanthine",
      "adenosine-antagonist",
      "adenosine",
      "cyp1a2",
      "attention",
      "sleep",
      "adenosine-receptor",
      "tobacco-smoke",
      "alertness",
      "anxiety"
    ],
    "accent": "#adbd8e",
    "evidenceNote": "Selected evidence covers alertness, sleep disruption and pharmacokinetics. Claims have not undergone formal evidence grading or independent editorial review.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "3–7 hours",
      "low": 3,
      "high": 7,
      "context": "A commonly reported adult range, not an individual prediction. Pregnancy, medications, smoking and liver function can shift it substantially.",
      "sourceId": "temple2017",
      "observationId": "caffeine-elimination"
    },
    "kinetics": {
      "onset": "Subjective onset varies",
      "peak": "Serum peak around 2 hours in the cited review; formulation and study matter",
      "duration": "Sleep effects may outlast perceived stimulation",
      "bioavailability": "Rapid, near-complete intestinal absorption",
      "metabolism": "Primarily hepatic CYP1A2; paraxanthine is the major metabolite",
      "sourceId": "temple2017"
    },
    "modifiers": [
      {
        "label": "Tobacco smoke",
        "effect": "Faster clearance during smoking",
        "detail": "Smoking induces CYP1A2. In a small study of heavy smokers, caffeine clearance fell after cessation. This is not evidence that nicotine itself accelerates caffeine clearance.",
        "sourceId": "faber2004",
        "observationId": "caffeine-elimination",
        "factorType": "smoking",
        "direction": "faster"
      },
      {
        "label": "CYP1A2 activity",
        "effect": "Exposure varies between people",
        "detail": "Genetics, medicines and physiological context affect clearance. A genotype alone cannot determine a precise personal half-life.",
        "sourceId": "grzegorzewski2022",
        "observationId": "caffeine-elimination",
        "factorType": "enzyme",
        "direction": "variable"
      },
      {
        "label": "Oral contraceptives",
        "effect": "Slower clearance in reviewed data",
        "detail": "The systematic dataset found longer elimination half-life with oral contraceptive use; formulation and individual context still matter.",
        "sourceId": "grzegorzewski2022",
        "observationId": "caffeine-elimination",
        "factorType": "other",
        "direction": "slower"
      }
    ],
    "doses": [
      {
        "label": "Attention study",
        "amount": "50 mg",
        "route": "Oral",
        "population": "27 healthy adult volunteers",
        "note": "Studied alone and with 100 mg L-theanine. A trial exposure, not a recommended personal dose.",
        "sourceId": "owen2008",
        "quantity": 50,
        "quantityMax": null,
        "unit": "mg",
        "ingredient": "Caffeine",
        "formulation": "Study treatment; exact preparation not assessed",
        "frequency": "Single exposure per crossover session",
        "duration": "Acute assessment at 60 and 90 minutes",
        "purpose": "Compare attention and mood with placebo and a caffeine–theanine combination",
        "sourceCategory": "research"
      },
      {
        "label": "Sleep-disruption study",
        "amount": "400 mg",
        "route": "Oral",
        "population": "Adults in a placebo-controlled sleep study",
        "note": "Given at bedtime or 3 or 6 hours before it. Sleep was disrupted at every tested timing; this is not a suggested dose.",
        "sourceId": "drake2013",
        "quantity": 400,
        "quantityMax": null,
        "unit": "mg",
        "ingredient": "Caffeine",
        "formulation": "Study treatment; exact preparation not assessed",
        "frequency": "Single exposure on each test night",
        "duration": "At bedtime, or 3 or 6 hours before bedtime; sleep followed that night",
        "purpose": "Assess timing-dependent sleep disruption",
        "sourceCategory": "research"
      }
    ],
    "effects": [
      {
        "name": "Subjective alertness",
        "direction": "Increased",
        "evidence": "Human research",
        "description": "Participants reported greater alertness after caffeine in the cited crossover trial.",
        "sourceId": "owen2008",
        "conceptId": "alertness",
        "population": "27 healthy adult volunteers",
        "exposure": "50 mg caffeine; acute crossover comparison with placebo",
        "instrument": "Subjective alertness assessment; exact scale not assessed",
        "magnitude": null
      },
      {
        "name": "Anxiety / jitteriness",
        "direction": "Variable",
        "evidence": "Human research",
        "description": "Adverse experiences depend on exposure and sensitivity; vulnerable populations need separate consideration.",
        "sourceId": "temple2017",
        "conceptId": "anxiety",
        "population": "Populations represented in a narrative safety review",
        "exposure": "Varied caffeine intakes and exposure histories",
        "instrument": null,
        "magnitude": null
      }
    ],
    "mechanisms": [
      {
        "title": "Adenosine receptor antagonism",
        "description": "Caffeine interferes with adenosine signaling. Feeling less sleepy does not mean the underlying need for sleep has disappeared.",
        "sourceId": "temple2017",
        "conceptId": "adenosine-antagonist"
      }
    ],
    "cautions": [
      {
        "title": "Sleep is part of the outcome",
        "description": "A short-lived improvement in alertness can coexist with later sleep disruption. Half-life is not the same as duration of a noticeable effect.",
        "sourceId": "drake2013"
      },
      {
        "title": "Changing smoking status changes exposure",
        "description": "Caffeine clearance can decrease after stopping smoking; previous intake may then produce different exposure.",
        "sourceId": "faber2004"
      },
      {
        "title": "Population matters",
        "description": "Pregnancy, childhood, heart conditions and some psychiatric conditions change the risk context. Adult study exposures are not universal guidance.",
        "sourceId": "temple2017"
      }
    ],
    "references": [
      {
        "id": "owen2008",
        "title": "The combined effects of L-theanine and caffeine on cognitive performance and mood",
        "authors": "Owen et al.",
        "year": 2008,
        "url": "https://pubmed.ncbi.nlm.nih.gov/18681988/",
        "kind": "Randomized crossover trial",
        "insight": "Caffeine with L-theanine improved some attention-task outcomes in 27 healthy volunteers.",
        "limitation": "Small, short-term study; selected laboratory tasks do not establish everyday productivity or long-term benefit. Authors were affiliated with Unilever.",
        "funding": "Funding not assessed; author affiliations include Unilever.",
        "pmid": "18681988",
        "doi": "10.1179/147683008X301513"
      },
      {
        "id": "temple2017",
        "title": "The Safety of Ingested Caffeine: A Comprehensive Review",
        "authors": "Temple et al.",
        "year": 2017,
        "url": "https://pubmed.ncbi.nlm.nih.gov/28603504/",
        "kind": "Narrative review",
        "insight": "Reviews absorption, adenosine signaling, adult elimination and population-specific safety concerns.",
        "limitation": "A broad review; its typical kinetic values cannot predict an individual's response.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "28603504",
        "doi": "10.3389/fpsyt.2017.00080"
      },
      {
        "id": "grzegorzewski2022",
        "title": "Pharmacokinetics of Caffeine: A Systematic Analysis of Reported Data",
        "authors": "Grzegorzewski et al.",
        "year": 2022,
        "url": "https://pubmed.ncbi.nlm.nih.gov/35280254/",
        "kind": "Systematic pharmacokinetic analysis",
        "insight": "Integrates human kinetic data and examines smoking, contraceptives, medicines and disease as modifiers.",
        "limitation": "The underlying studies use different populations and methods; the result is not a personal clearance calculator.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "35280254",
        "doi": "10.3389/fphar.2021.752826"
      },
      {
        "id": "faber2004",
        "title": "Time response of cytochrome P450 1A2 activity on cessation of heavy smoking",
        "authors": "Faber & Fuhr",
        "year": 2004,
        "url": "https://pubmed.ncbi.nlm.nih.gov/15289794/",
        "kind": "Human pharmacokinetic study",
        "insight": "Caffeine clearance decreased after cessation in 12 heavy smokers.",
        "limitation": "Small selected sample. The reported half-life of enzyme activity change must not be confused with caffeine elimination half-life.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "15289794",
        "doi": "10.1016/j.clpt.2004.04.003"
      },
      {
        "id": "drake2013",
        "title": "Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed",
        "authors": "Drake et al.",
        "year": 2013,
        "url": "https://pubmed.ncbi.nlm.nih.gov/24235903/",
        "kind": "Randomized controlled trial",
        "insight": "The tested caffeine exposure disrupted sleep at each tested timing.",
        "limitation": "A single fixed exposure and a small sample do not define a universal bedtime cutoff.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "24235903",
        "doi": "10.5664/jcsm.3170"
      },
      {
        "id": "pubchem",
        "title": "Caffeine: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2519",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "caffeine-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "A commonly reported adult range, not an individual prediction. Pregnancy, medications, smoking and liver function can shift it substantially.",
        "sourceId": "temple2017",
        "analyte": "Caffeine",
        "route": "Oral",
        "formulation": "Ingested caffeine; preparations vary across reviewed studies",
        "population": "Adults represented in the narrative review",
        "statistic": "reported-range",
        "value": null,
        "low": 3,
        "high": 7,
        "modelEligible": true
      }
    ],
    "outcomes": [
      {
        "name": "Attention-task accuracy",
        "direction": "Increased",
        "evidence": "Human research",
        "description": "Accuracy improved on a specific switching task; this does not quantify a general cognitive boost.",
        "sourceId": "owen2008",
        "conceptId": "attention",
        "population": "27 healthy adult volunteers",
        "exposure": "50 mg caffeine; assessment 90 minutes after administration",
        "instrument": "Attention-switching task accuracy",
        "magnitude": null
      },
      {
        "name": "Sleep continuity",
        "direction": "Decreased",
        "evidence": "Human research",
        "description": "The sleep trial found disruption even when the studied exposure preceded bedtime by several hours.",
        "sourceId": "drake2013",
        "conceptId": "sleep",
        "population": "Adults in a placebo-controlled home sleep study",
        "exposure": "400 mg caffeine at bedtime or 3 or 6 hours before it",
        "instrument": "Self-report and validated portable sleep monitoring",
        "magnitude": null
      }
    ],
    "claims": [
      {
        "id": "adenosine-action",
        "assertion": "Caffeine antagonizes adenosine receptors.",
        "relation": "receptor-antagonism",
        "participants": [
          {
            "entityId": "substance:caffeine",
            "role": "agent"
          },
          {
            "entityId": "tag:adenosine-receptor",
            "role": "target"
          },
          {
            "entityId": "tag:adenosine",
            "role": "endogenous-ligand"
          }
        ],
        "context": "Human pharmacology; receptor activity does not erase physiological sleep need.",
        "sourceIds": [
          "temple2017"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Mechanism alone does not establish the size or duration of a clinical effect."
      },
      {
        "id": "smoking-clearance",
        "assertion": "Tobacco-smoke exposure induces CYP1A2 activity; stopping smoking reduced caffeine clearance in the cited study.",
        "relation": "clearance-modification",
        "participants": [
          {
            "entityId": "substance:caffeine",
            "role": "substrate"
          },
          {
            "entityId": "tag:cyp1a2",
            "role": "metabolizing-enzyme"
          },
          {
            "entityId": "tag:tobacco-smoke",
            "role": "exposure-context"
          }
        ],
        "context": "Heavy smokers undergoing cessation. Tobacco smoke is a metabolic exposure, not a caffeine route.",
        "sourceIds": [
          "faber2004"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Enzyme activity decline after cessation is not caffeine elimination half-life."
      },
      {
        "id": "sleep-disruption",
        "assertion": "The tested caffeine exposure disrupted subsequent sleep.",
        "relation": "adverse-outcome",
        "participants": [
          {
            "entityId": "substance:caffeine",
            "role": "exposure"
          },
          {
            "entityId": "tag:sleep",
            "role": "measured-outcome"
          }
        ],
        "context": "400 mg administered at bedtime or 3 or 6 hours before it.",
        "sourceIds": [
          "drake2013"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "One fixed exposure cannot establish a universal sleep cutoff."
      },
      {
        "id": "attention-combination",
        "assertion": "A caffeine–L-theanine combination improved selected attention task results.",
        "relation": "co-studied",
        "participants": [
          {
            "entityId": "substance:caffeine",
            "role": "co-exposure"
          },
          {
            "entityId": "substance:l-theanine",
            "role": "co-exposure"
          },
          {
            "entityId": "tag:attention",
            "role": "measured-outcome"
          }
        ],
        "context": "27 healthy volunteers; acute crossover comparison with placebo.",
        "sourceIds": [
          "owen2008"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "A co-study does not establish long-term benefit or synergy."
      }
    ]
  },
  {
    "slug": "l-theanine",
    "name": "L-theanine",
    "subtitle": "A tea amino acid, beyond the stack.",
    "summary": "A tea-derived amino acid studied alone and alongside caffeine. Small attention studies offer useful signals, with important limits.",
    "description": "L-theanine is often discussed as a partner to caffeine. Evidence for a particular combination should stay attached to that combination, task and population. Human absorption has been studied, but a tidy claim that it reliably cancels caffeine's adverse effects goes beyond the sources included here.",
    "aliases": [
      "Theanine",
      "γ-glutamylethylamide"
    ],
    "formula": "C7H14N2O3",
    "molecularWeight": "174.20 g/mol",
    "pubchemCid": 439378,
    "smiles": "CCNC(=O)CCC(C(=O)O)N",
    "category": "Amino acid derivative",
    "tags": [
      "amino-acid",
      "attention"
    ],
    "accent": "#9fbab0",
    "evidenceNote": "Selected small human studies are included. Combination findings do not establish theanine-alone benefit.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "Not established",
      "low": null,
      "high": null,
      "context": "Uptake was measured, but no elimination estimate has been curated for this article.",
      "sourceId": "scheid2012",
      "observationId": "l-theanine-elimination"
    },
    "kinetics": {
      "onset": "Not established here",
      "peak": "About 0.8 hours after 100 mg in the cited study",
      "duration": "Not established here",
      "bioavailability": "Systemic uptake observed from tea and capsules; absolute fraction not assigned",
      "metabolism": "Human data suggest hydrolysis to ethylamine and glutamic acid",
      "sourceId": "scheid2012"
    },
    "modifiers": [
      {
        "label": "Formulation",
        "effect": "Comparable uptake in the tested preparations",
        "detail": "Tea and capsules gave similar kinetic results in the cited small crossover study; this does not validate every commercial product.",
        "sourceId": "scheid2012",
        "observationId": "l-theanine-elimination",
        "factorType": "other",
        "direction": "variable"
      }
    ],
    "doses": [
      {
        "label": "Combination attention study",
        "amount": "100 mg",
        "route": "Oral",
        "population": "27 healthy volunteers",
        "note": "Studied with 50 mg caffeine. Research context, not a recommended stack.",
        "sourceId": "owen2008",
        "quantity": 100,
        "quantityMax": null,
        "unit": "mg",
        "ingredient": "L-theanine",
        "formulation": "Study treatment combined with caffeine; exact preparation not assessed",
        "frequency": "Single exposure per crossover session",
        "duration": "Acute assessment at 60 and 90 minutes",
        "purpose": "Assess attention and mood with 50 mg caffeine versus placebo",
        "sourceCategory": "research"
      }
    ],
    "effects": [],
    "mechanisms": [
      {
        "title": "Absorption is better established than a clinical mechanism",
        "description": "The kinetic study detected theanine and its metabolites in people. It does not establish which molecule explains a cognitive effect.",
        "sourceId": "scheid2012",
        "conceptId": "amino-acid"
      }
    ],
    "cautions": [
      {
        "title": "Combination evidence has limits",
        "description": "This small, acute study cannot establish long-term benefit or show that theanine removes caffeine-related sleep disruption.",
        "sourceId": "owen2008"
      }
    ],
    "references": [
      {
        "id": "owen2008",
        "title": "The combined effects of L-theanine and caffeine on cognitive performance and mood",
        "authors": "Owen et al.",
        "year": 2008,
        "url": "https://pubmed.ncbi.nlm.nih.gov/18681988/",
        "kind": "Randomized crossover trial",
        "insight": "Caffeine with L-theanine improved some attention-task outcomes in 27 healthy volunteers.",
        "limitation": "Small, short-term study; selected laboratory tasks do not establish everyday productivity or long-term benefit. Authors were affiliated with Unilever.",
        "funding": "Funding not assessed; author affiliations include Unilever.",
        "pmid": "18681988",
        "doi": "10.1179/147683008X301513"
      },
      {
        "id": "scheid2012",
        "title": "Kinetics of L-theanine uptake and metabolism in healthy participants are comparable after ingestion via capsules and green tea",
        "authors": "Scheid et al.",
        "year": 2012,
        "url": "https://pubmed.ncbi.nlm.nih.gov/23096008/",
        "kind": "Randomized crossover study",
        "insight": "Measured uptake and metabolites after tea or capsule ingestion in 12 healthy participants.",
        "limitation": "Small study focused on exposure, not clinical benefit or long-term safety.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "23096008",
        "doi": "10.3945/jn.112.166371"
      },
      {
        "id": "pubchem",
        "title": "L-theanine: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/439378",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "l-theanine-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "Uptake was measured, but no elimination estimate has been curated for this article.",
        "sourceId": "scheid2012",
        "analyte": "L-theanine",
        "route": "Oral",
        "formulation": "Capsules and green tea",
        "population": "12 healthy participants in the crossover study",
        "statistic": "not-established",
        "value": null,
        "low": null,
        "high": null,
        "modelEligible": false
      }
    ],
    "outcomes": [
      {
        "name": "Attention switching",
        "direction": "Increased",
        "evidence": "Human research",
        "description": "Some task performance improved with the caffeine combination. The result does not isolate a standalone theanine benefit.",
        "sourceId": "owen2008",
        "conceptId": "attention",
        "population": "27 healthy adult volunteers",
        "exposure": "100 mg L-theanine with 50 mg caffeine; acute crossover comparison with placebo",
        "instrument": "Attention-switching task at 60 minutes",
        "magnitude": null
      }
    ],
    "claims": [
      {
        "id": "attention-combination",
        "assertion": "The studied caffeine–L-theanine combination improved selected attention task results.",
        "relation": "co-studied",
        "participants": [
          {
            "entityId": "substance:l-theanine",
            "role": "co-exposure"
          },
          {
            "entityId": "substance:caffeine",
            "role": "co-exposure"
          },
          {
            "entityId": "tag:attention",
            "role": "measured-outcome"
          }
        ],
        "context": "27 healthy volunteers; acute crossover comparison with placebo.",
        "sourceIds": [
          "owen2008"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "This does not isolate theanine-alone benefit."
      },
      {
        "id": "uptake",
        "assertion": "Human uptake was comparable from the tested tea and capsule preparations.",
        "relation": "absorption",
        "participants": [
          {
            "entityId": "substance:l-theanine",
            "role": "measured-compound"
          },
          {
            "entityId": "tag:amino-acid",
            "role": "chemical-family"
          }
        ],
        "context": "Healthy volunteers in a small crossover study.",
        "sourceIds": [
          "scheid2012"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Uptake does not establish a cognitive mechanism or equivalent exposure from every product."
      }
    ]
  },
  {
    "slug": "creatine",
    "name": "Creatine",
    "subtitle": "An energy reserve, studied over time.",
    "summary": "An endogenous compound used in muscle energy metabolism. Supplementation research is strongest around muscle stores and exercise.",
    "description": "Creatine is better understood through tissue stores and repeated supplementation than through an immediate subjective effect. Research on training outcomes and research on cognition ask different questions and should not share a single benefit score.",
    "aliases": [
      "Creatine monohydrate (supplement form)"
    ],
    "formula": "C4H9N3O2",
    "molecularWeight": "131.13 g/mol",
    "pubchemCid": 586,
    "smiles": "CN(CC(=O)O)C(=N)N",
    "category": "Amino acid derivative",
    "tags": [
      "amino-acid",
      "energy-buffer",
      "exercise",
      "muscle-stores"
    ],
    "accent": "#c3b093",
    "evidenceNote": "Evidence here concerns muscle stores and exercise. Proposed cognitive and clinical applications need separate assessment.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "Tissue stores matter",
      "low": null,
      "high": null,
      "context": "A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.",
      "sourceId": "hultman1996",
      "observationId": "creatine-elimination"
    },
    "kinetics": {
      "onset": "Tissue accumulation with repeated intake",
      "peak": "Not summarized as a single acute peak",
      "duration": "Muscle stores change gradually after supplementation stops",
      "bioavailability": "No absolute estimate curated here",
      "metabolism": "The creatine–phosphocreatine system supports energy buffering; creatinine is a breakdown product",
      "sourceId": "hultman1996"
    },
    "modifiers": [
      {
        "label": "Starting muscle stores",
        "effect": "Response is not uniform",
        "detail": "Baseline stores and supplementation history are part of the interpretation of muscle-loading studies.",
        "sourceId": "hultman1996",
        "observationId": "creatine-elimination",
        "factorType": "other",
        "direction": "variable"
      }
    ],
    "doses": [
      {
        "label": "Gradual muscle-loading study",
        "amount": "3 g daily for 28 days",
        "route": "Oral",
        "population": "Male participants in a muscle-biopsy study",
        "note": "This exposure increased muscle creatine stores. The compound diagram shows creatine, not the monohydrate formulation.",
        "sourceId": "hultman1996",
        "quantity": 3,
        "quantityMax": null,
        "unit": "g",
        "ingredient": "Creatine",
        "formulation": "Supplement preparation; hydrate form not assessed from the abstract",
        "frequency": "Daily total; divided schedule not assessed",
        "duration": "28 days",
        "purpose": "Measure change in muscle creatine concentration",
        "sourceCategory": "research"
      }
    ],
    "effects": [],
    "mechanisms": [
      {
        "title": "Energy buffering",
        "description": "Creatine availability supports the phosphocreatine system, which helps regenerate ATP during demanding activity.",
        "sourceId": "kreider2017",
        "conceptId": "energy-buffer"
      }
    ],
    "cautions": [
      {
        "title": "Evidence is specific to the outcome",
        "description": "Exercise evidence should not be treated as proof of a broad cognitive or anti-aging effect. Clinical populations require separate evidence.",
        "sourceId": "kreider2017"
      }
    ],
    "references": [
      {
        "id": "hultman1996",
        "title": "Muscle creatine loading in men",
        "authors": "Hultman et al.",
        "year": 1996,
        "url": "https://pubmed.ncbi.nlm.nih.gov/8828669/",
        "kind": "Human supplementation study",
        "insight": "Compared muscle accumulation with different supplementation patterns in 31 men.",
        "limitation": "Male-only sample; muscle concentration is not itself an exercise or cognitive outcome.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "8828669",
        "doi": "10.1152/jappl.1996.81.1.232"
      },
      {
        "id": "kreider2017",
        "title": "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine",
        "authors": "Kreider et al.",
        "year": 2017,
        "url": "https://pubmed.ncbi.nlm.nih.gov/28615996/",
        "kind": "Position stand / review",
        "insight": "Summarizes muscle energy metabolism and exercise supplementation research.",
        "limitation": "A professional-society position stand, not an independent trial; proposed clinical uses vary in evidence strength.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "28615996",
        "doi": "10.1186/s12970-017-0173-z"
      },
      {
        "id": "pubchem",
        "title": "Creatine: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/586",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "creatine-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.",
        "sourceId": "hultman1996",
        "analyte": "Creatine",
        "route": "Oral",
        "formulation": "Creatine supplementation; tissue stores are the reported endpoint",
        "population": "Men in the cited muscle-loading study",
        "statistic": "not-established",
        "value": null,
        "low": null,
        "high": null,
        "modelEligible": false
      }
    ],
    "outcomes": [
      {
        "name": "Muscle creatine stores",
        "direction": "Increased",
        "evidence": "Human research",
        "description": "Measured muscle stores rose with repeated intake in the cited study; this is a biochemical outcome rather than a subjective sensation.",
        "sourceId": "hultman1996",
        "conceptId": "muscle-stores",
        "population": "Men in a study that enrolled 31 participants across supplementation protocols",
        "exposure": "3 g daily over 28 days",
        "instrument": "Muscle total creatine concentration",
        "magnitude": null
      },
      {
        "name": "High-intensity exercise performance",
        "direction": "Increased",
        "evidence": "Human research",
        "description": "The position stand summarizes benefits in studied exercise settings; effects depend on the task and training context.",
        "sourceId": "kreider2017",
        "conceptId": "exercise",
        "population": "Exercise and training populations represented in the position stand",
        "exposure": "Varied creatine supplementation protocols",
        "instrument": "Multiple performance tests; no shared scale",
        "magnitude": null
      }
    ],
    "claims": [
      {
        "id": "muscle-stores",
        "assertion": "Repeated supplementation raised muscle total creatine concentration.",
        "relation": "measured-outcome",
        "participants": [
          {
            "entityId": "substance:creatine",
            "role": "exposure"
          },
          {
            "entityId": "tag:muscle-stores",
            "role": "measured-outcome"
          }
        ],
        "context": "Men receiving the studied supplementation protocols.",
        "sourceIds": [
          "hultman1996"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Muscle concentration is not itself a subjective or cognitive outcome."
      },
      {
        "id": "energy-buffer",
        "assertion": "Creatine participates in phosphocreatine energy buffering.",
        "relation": "metabolic-pathway",
        "participants": [
          {
            "entityId": "substance:creatine",
            "role": "substrate"
          },
          {
            "entityId": "tag:energy-buffer",
            "role": "mechanism"
          },
          {
            "entityId": "tag:exercise",
            "role": "related-outcome"
          }
        ],
        "context": "Exercise physiology reviewed in a professional-society position stand.",
        "sourceIds": [
          "kreider2017"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Individual exercise outcomes depend on task and training context."
      }
    ]
  },
  {
    "slug": "melatonin",
    "name": "Melatonin",
    "subtitle": "A timing signal, not a universal sleep switch.",
    "summary": "A hormone involved in circadian timing. Formulation, timing and the sleep problem being studied all matter.",
    "description": "The body produces melatonin in response to darkness. Supplemental melatonin has been studied for specific sleep and circadian problems. Results from delayed sleep-wake phase disorder should not be generalized to all insomnia.",
    "aliases": [
      "N-acetyl-5-methoxytryptamine"
    ],
    "formula": "C13H16N2O2",
    "molecularWeight": "232.28 g/mol",
    "pubchemCid": 896,
    "smiles": "CC(=O)NCCC1=CNC2=C1C=C(C=C2)OC",
    "category": "Hormone",
    "tags": [
      "hormone",
      "circadian",
      "sleep",
      "daytime-sleepiness",
      "behavioral-scheduling"
    ],
    "accent": "#b1abcf",
    "evidenceNote": "Evidence differs by sleep condition, formulation, timing and population. No overall benefit rating is assigned.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "About 45 minutes",
      "low": 0.75,
      "high": 0.75,
      "context": "Approximate summary estimate in a human pharmacokinetic review, not a universal range. Release formulation and population matter.",
      "sourceId": "harpsoe2015",
      "observationId": "melatonin-elimination"
    },
    "kinetics": {
      "onset": "Depends on formulation and circadian timing",
      "peak": "Around 50 minutes for oral immediate-release products in the review",
      "duration": "Plasma exposure and circadian effects are different outcomes",
      "bioavailability": "About 15% orally in the review; substantial between-study variability",
      "metabolism": "Exposure is modified by medicines, smoking, feeding status and physiological factors",
      "sourceId": "harpsoe2015"
    },
    "modifiers": [
      {
        "label": "Release formulation",
        "effect": "Changes the exposure profile",
        "detail": "The immediate-release kinetic summary should not be applied directly to prolonged-release products.",
        "sourceId": "harpsoe2015",
        "observationId": "melatonin-elimination",
        "factorType": "other",
        "direction": "variable"
      }
    ],
    "doses": [
      {
        "label": "Delayed sleep-wake phase trial",
        "amount": "0.5 mg",
        "route": "Oral",
        "population": "People with diagnosed delayed sleep-wake phase disorder and delayed melatonin timing",
        "note": "Given 1 hour before desired bedtime, with behavioral scheduling, over 4 weeks. A specific trial protocol, not general insomnia guidance.",
        "sourceId": "sletten2018",
        "quantity": 0.5,
        "quantityMax": null,
        "unit": "mg",
        "ingredient": "Melatonin",
        "formulation": "Fast-release oral formulation",
        "frequency": "At least 5 consecutive nights per week, 1 hour before desired bedtime",
        "duration": "4 weeks, alongside behavioral sleep–wake scheduling",
        "purpose": "Assess sleep initiation in delayed sleep–wake phase disorder",
        "sourceCategory": "research"
      }
    ],
    "effects": [
      {
        "name": "Daytime sleepiness",
        "direction": "Variable",
        "evidence": "Human research",
        "description": "Daytime sleepiness was among reported adverse events; its rate was similar between trial groups.",
        "sourceId": "sletten2018",
        "conceptId": "daytime-sleepiness",
        "population": "Patients with delayed sleep–wake phase disorder in the randomized trial",
        "exposure": "Melatonin or placebo alongside behavioral scheduling",
        "instrument": "Adverse-event reporting",
        "magnitude": null
      }
    ],
    "mechanisms": [
      {
        "title": "A signal linked to darkness",
        "description": "Endogenous melatonin participates in circadian timing. Light exposure and timing belong in the interpretation of sleep outcomes.",
        "sourceId": "nccih-melatonin",
        "conceptId": "circadian"
      }
    ],
    "cautions": [
      {
        "title": "Long-term uncertainty",
        "description": "The cited trial did not establish long-term benefit or safety, nor benefit in people without the studied circadian delay.",
        "sourceId": "sletten2018"
      },
      {
        "title": "Products and populations differ",
        "description": "Supplement contents can differ from labels. Evidence and safety considerations are different in children and pregnancy.",
        "sourceId": "nccih-melatonin"
      }
    ],
    "references": [
      {
        "id": "harpsoe2015",
        "title": "Clinical pharmacokinetics of melatonin: a systematic review",
        "authors": "Harpsøe et al.",
        "year": 2015,
        "url": "https://pubmed.ncbi.nlm.nih.gov/26008214/",
        "kind": "Systematic review",
        "insight": "Summarizes exposure and large differences between formulations and study conditions.",
        "limitation": "Heterogeneous studies; an approximate central value is not a personal prediction.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "26008214",
        "doi": "10.1007/s00228-015-1873-4"
      },
      {
        "id": "sletten2018",
        "title": "Efficacy of melatonin with behavioural sleep-wake scheduling for delayed sleep-wake phase disorder",
        "authors": "Sletten et al.",
        "year": 2018,
        "url": "https://pubmed.ncbi.nlm.nih.gov/29912983/",
        "kind": "Randomized controlled trial",
        "insight": "Melatonin with scheduling improved sleep initiation in a selected circadian-disorder population.",
        "limitation": "Scheduling was part of treatment; long-term outcomes and broader insomnia populations were not established.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "29912983",
        "doi": "10.1371/journal.pmed.1002587"
      },
      {
        "id": "nccih-melatonin",
        "title": "Melatonin: What You Need To Know",
        "authors": "NCCIH / NIH",
        "year": 2026,
        "url": "https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know",
        "kind": "Public health reference",
        "insight": "Explains circadian signaling, differences between sleep conditions and supplement quality concerns.",
        "limitation": "Public information, not individual clinical advice; year indicates access.",
        "funding": "Not assessed; consult the original disclosure."
      },
      {
        "id": "pubchem",
        "title": "Melatonin: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/896",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "melatonin-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "Approximate summary estimate in a human pharmacokinetic review, not a universal range. Release formulation and population matter.",
        "sourceId": "harpsoe2015",
        "analyte": "Melatonin",
        "route": "Oral",
        "formulation": "Immediate-release products in a heterogeneous review",
        "population": "Human participants across reviewed studies",
        "statistic": "approximate",
        "value": 0.75,
        "low": null,
        "high": null,
        "modelEligible": true
      }
    ],
    "outcomes": [
      {
        "name": "Sleep onset time",
        "direction": "Decreased",
        "evidence": "Human research",
        "description": "Sleep began earlier with melatonin plus scheduling in the selected circadian-disorder population.",
        "sourceId": "sletten2018",
        "conceptId": "sleep",
        "population": "116 randomized patients with delayed sleep–wake phase disorder and delayed endogenous melatonin timing",
        "exposure": "0.5 mg fast-release melatonin plus scheduling for 4 weeks versus placebo plus scheduling",
        "instrument": "Actigraphic sleep onset time",
        "magnitude": null
      }
    ],
    "claims": [
      {
        "id": "sleep-initiation",
        "assertion": "Melatonin with scheduling advanced sleep initiation in the studied circadian-disorder population.",
        "relation": "measured-outcome",
        "participants": [
          {
            "entityId": "substance:melatonin",
            "role": "exposure"
          },
          {
            "entityId": "tag:sleep",
            "role": "measured-outcome"
          },
          {
            "entityId": "tag:behavioral-scheduling",
            "role": "co-intervention"
          }
        ],
        "context": "Selected delayed sleep–wake phase disorder patients receiving fast-release melatonin with scheduling.",
        "sourceIds": [
          "sletten2018"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "The protocol does not establish efficacy for all insomnia or long-term treatment."
      },
      {
        "id": "circadian-signal",
        "assertion": "Endogenous melatonin participates in circadian timing.",
        "relation": "hormone-signaling",
        "participants": [
          {
            "entityId": "substance:melatonin",
            "role": "signal"
          },
          {
            "entityId": "tag:circadian",
            "role": "mechanism"
          },
          {
            "entityId": "tag:hormone",
            "role": "functional-class"
          }
        ],
        "context": "Physiology summarized by NIH.",
        "sourceIds": [
          "nccih-melatonin"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Supplement effects depend on timing, condition and formulation."
      }
    ]
  },
  {
    "slug": "nicotine",
    "name": "Nicotine",
    "subtitle": "Cholinergic signaling with dependence risk.",
    "summary": "An addictive nicotinic acetylcholine receptor agonist. Delivery route changes exposure; tobacco-smoke harms and nicotine pharmacology need separate treatment.",
    "description": "Nicotine activates receptors normally used by acetylcholine and participates in reinforcement and dependence. Medicines containing nicotine are used in smoking cessation. Neither that use nor short-term changes in attention establish a case for starting nicotine as a cognitive enhancer.",
    "aliases": [
      "(S)-nicotine"
    ],
    "formula": "C10H14N2",
    "molecularWeight": "162.23 g/mol",
    "pubchemCid": 89594,
    "smiles": "CN1CCCC1C2=CN=CC=C2",
    "category": "Stimulant",
    "tags": [
      "stimulant",
      "nicotinic-agonist",
      "acetylcholine",
      "cyp2a6",
      "nicotinic-receptor",
      "craving"
    ],
    "accent": "#c8a18f",
    "evidenceNote": "This entry covers receptor pharmacology and dependence, rather than establishing a use for cognitive enhancement.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "About 2 hours",
      "low": 2,
      "high": 2,
      "context": "Approximate plasma elimination after smoking or intravenous administration in the review. Slower terminal release from tissues is also described.",
      "sourceId": "benowitz2009",
      "observationId": "nicotine-elimination"
    },
    "kinetics": {
      "onset": "Strongly dependent on delivery route",
      "peak": "Rapid with inhalation; slower with replacement products",
      "duration": "Repeated exposure can accumulate",
      "bioavailability": "Route- and product-dependent; no universal value",
      "metabolism": "Primarily hepatic metabolism, including CYP2A6; cotinine is an important metabolite",
      "sourceId": "benowitz2009"
    },
    "modifiers": [
      {
        "label": "Delivery route",
        "effect": "Changes speed and exposure",
        "detail": "Inhaled and medicinal products have different absorption profiles. Product contents cannot be equated with an absorbed dose.",
        "sourceId": "benowitz2009",
        "observationId": "nicotine-elimination",
        "factorType": "other",
        "direction": "variable"
      },
      {
        "label": "Metabolic activity",
        "effect": "Variable clearance",
        "detail": "Genetics, medicines, pregnancy and kidney disease can affect nicotine disposition.",
        "sourceId": "benowitz2009",
        "observationId": "nicotine-elimination",
        "factorType": "enzyme",
        "direction": "variable"
      }
    ],
    "doses": [],
    "effects": [
      {
        "name": "Craving during abstinence",
        "direction": "Variable",
        "evidence": "Human research",
        "description": "Dependence can produce cravings during abstinence; relief after nicotine can reflect reversal of withdrawal.",
        "sourceId": "benowitz2010",
        "conceptId": "craving",
        "population": "People with established tobacco dependence discussed in the clinical review",
        "exposure": "Repeated nicotine exposure and subsequent abstinence",
        "instrument": null,
        "magnitude": null
      }
    ],
    "mechanisms": [
      {
        "title": "Nicotinic acetylcholine receptors",
        "description": "Receptor activation changes neurotransmitter release, including dopamine signaling involved in reinforcement.",
        "sourceId": "benowitz2010",
        "conceptId": "nicotinic-receptor"
      }
    ],
    "cautions": [
      {
        "title": "Dependence is central",
        "description": "Reward, tolerance and withdrawal belong in any assessment of perceived cognitive benefit.",
        "sourceId": "benowitz2010"
      },
      {
        "title": "Smoking is a separate exposure",
        "description": "A nicotine molecule diagram does not describe the many toxic exposures from burning tobacco. Medicinal replacement and smoking are not interchangeable risk categories.",
        "sourceId": "benowitz2010"
      }
    ],
    "references": [
      {
        "id": "benowitz2009",
        "title": "Nicotine chemistry, metabolism, kinetics and biomarkers",
        "authors": "Benowitz, Hukkanen & Jacob",
        "year": 2009,
        "url": "https://pubmed.ncbi.nlm.nih.gov/19184645/",
        "kind": "Pharmacology review",
        "insight": "Describes route-dependent absorption, elimination and metabolic modifiers.",
        "limitation": "Population summaries differ by product and exposure history; a plasma half-life is not a duration-of-effect estimate.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "19184645",
        "doi": "10.1007/978-3-540-69248-5_2"
      },
      {
        "id": "benowitz2010",
        "title": "Nicotine addiction",
        "authors": "Benowitz",
        "year": 2010,
        "url": "https://pubmed.ncbi.nlm.nih.gov/20554984/",
        "kind": "Clinical review",
        "insight": "Explains receptor signaling, reinforcement and the cycle of dependence and withdrawal.",
        "limitation": "Not a trial of nicotine enhancement in people who do not use tobacco.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "20554984",
        "doi": "10.1056/NEJMra0809890"
      },
      {
        "id": "pubchem",
        "title": "Nicotine: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/89594",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "nicotine-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "Approximate plasma elimination after smoking or intravenous administration in the review. Slower terminal release from tissues is also described.",
        "sourceId": "benowitz2009",
        "analyte": "Nicotine",
        "route": "Inhalation or intravenous administration",
        "formulation": "Cigarette smoke or intravenous nicotine in reviewed kinetic studies",
        "population": "Adults represented in the pharmacology review",
        "statistic": "approximate",
        "value": 2,
        "low": null,
        "high": null,
        "modelEligible": true
      }
    ],
    "outcomes": [],
    "claims": [
      {
        "id": "nicotinic-action",
        "assertion": "Nicotine activates nicotinic acetylcholine receptors.",
        "relation": "receptor-agonism",
        "participants": [
          {
            "entityId": "substance:nicotine",
            "role": "agent"
          },
          {
            "entityId": "tag:nicotinic-receptor",
            "role": "target"
          },
          {
            "entityId": "tag:acetylcholine",
            "role": "endogenous-ligand"
          }
        ],
        "context": "Receptor pharmacology in a clinical review of dependence.",
        "sourceIds": [
          "benowitz2010"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Dependence and withdrawal confound claims of enhancement."
      },
      {
        "id": "metabolism",
        "assertion": "CYP2A6 contributes to nicotine metabolism.",
        "relation": "metabolic-pathway",
        "participants": [
          {
            "entityId": "substance:nicotine",
            "role": "substrate"
          },
          {
            "entityId": "tag:cyp2a6",
            "role": "metabolizing-enzyme"
          }
        ],
        "context": "Route-dependent human nicotine pharmacokinetics.",
        "sourceIds": [
          "benowitz2009"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "CYP2A6 metabolism does not make nicotine a proxy for tobacco-smoke induction of CYP1A2."
      }
    ]
  },
  {
    "slug": "psilocybin",
    "name": "Psilocybin",
    "subtitle": "A psychedelic under clinical investigation.",
    "summary": "A prodrug of psilocin, studied in supported clinical settings. Subjective effects, therapeutic outcomes and legal status are distinct questions.",
    "description": "Psilocybin is converted to active psilocin. Modern trials study carefully selected participants and structured support; their results cannot be transferred directly to unsupervised use or variable mushroom preparations. This entry distinguishes parent-compound identity from active-metabolite kinetics.",
    "aliases": [
      "O-phosphoryl-4-hydroxy-N,N-dimethyltryptamine"
    ],
    "formula": "C12H17N2O4P",
    "molecularWeight": "284.25 g/mol",
    "pubchemCid": 10624,
    "smiles": "CN(C)CCC1=CNC2=C1C(=CC=C2)OP(=O)(O)O",
    "category": "Psychedelic",
    "tags": [
      "psychedelic",
      "serotonin-2a",
      "serotonin",
      "perception",
      "us-schedule-i",
      "depression-severity",
      "psychological-support"
    ],
    "accent": "#c1a6c5",
    "evidenceNote": "Included clinical findings come from selected participants receiving psychological support. Comparative benefit, durability and harms need continued assessment.",
    "reviewedAt": "2026-09-29",
    "halfLife": {
      "label": "Psilocin: about 3 hours",
      "low": 3,
      "high": 3,
      "context": "Mean elimination of the active metabolite in a small controlled study; this is not the half-life of parent psilocybin or a prediction of experience duration.",
      "sourceId": "brown2017",
      "observationId": "psilocybin-elimination"
    },
    "kinetics": {
      "onset": "No estimate curated here",
      "peak": "No estimate curated here",
      "duration": "Subjective duration is not inferred from elimination",
      "bioavailability": "No absolute estimate curated here",
      "metabolism": "Converted to psilocin; the cited study measured active-metabolite kinetics",
      "sourceId": "brown2017"
    },
    "modifiers": [],
    "doses": [
      {
        "label": "Depression trial exposure",
        "amount": "25 mg (studied arm)",
        "route": "Oral",
        "population": "Adults with treatment-resistant depression in a supported clinical trial",
        "note": "An investigational trial arm, not instructions for personal use or an equivalent mushroom weight.",
        "sourceId": "goodwin2022",
        "quantity": 25,
        "quantityMax": null,
        "unit": "mg",
        "ingredient": "Psilocybin",
        "formulation": "Proprietary synthetic formulation in a supported clinical trial",
        "frequency": "Single administration",
        "duration": "Primary outcome at week 3; secondary follow-up through week 12",
        "purpose": "Investigate depression severity versus a 1 mg control arm",
        "sourceCategory": "research"
      }
    ],
    "effects": [
      {
        "name": "Perceptual alteration",
        "direction": "Variable",
        "evidence": "Human research",
        "description": "Human antagonist experiments support serotonin-receptor involvement in changes to perception and experience; no intensity score is assigned.",
        "sourceId": "vollenweider1998",
        "conceptId": "perception",
        "population": "Healthy volunteers in an acute antagonist experiment",
        "exposure": "Psilocybin with pharmacological pretreatment in a controlled setting",
        "instrument": "Acute subjective assessment; exact scale not assessed",
        "magnitude": null
      }
    ],
    "mechanisms": [
      {
        "title": "Serotonin 5-HT2A signaling",
        "description": "Blocking this receptor attenuated acute psilocybin effects in a human experiment. That does not establish a complete mechanism for lasting therapeutic change.",
        "sourceId": "vollenweider1998",
        "conceptId": "serotonin-2a"
      }
    ],
    "cautions": [
      {
        "title": "Clinical support and screening matter",
        "description": "The depression trial reported headache, nausea and dizziness. Suicidal ideation, behavior or self-injury occurred across dose groups; the study cannot establish safety for unsupervised use.",
        "sourceId": "goodwin2022"
      }
    ],
    "references": [
      {
        "id": "brown2017",
        "title": "Pharmacokinetics of Escalating Doses of Oral Psilocybin in Healthy Adults",
        "authors": "Brown et al.",
        "year": 2017,
        "url": "https://pubmed.ncbi.nlm.nih.gov/28353056/",
        "kind": "Human pharmacokinetic study",
        "insight": "Measured psilocin elimination after controlled oral psilocybin exposure in 12 healthy adults.",
        "limitation": "Small, selected and supported sample. Active-metabolite kinetics are not equivalent to parent-compound kinetics.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "28353056",
        "doi": "10.1007/s40262-017-0540-6"
      },
      {
        "id": "goodwin2022",
        "title": "Single-Dose Psilocybin for a Treatment-Resistant Episode of Major Depression",
        "authors": "Goodwin et al.",
        "year": 2022,
        "url": "https://pubmed.ncbi.nlm.nih.gov/36322843/",
        "kind": "Phase 2 randomized trial",
        "insight": "A supported clinical protocol improved the primary short-term depression outcome in the higher-dose arm.",
        "limitation": "Adverse events occurred; longer and comparative trials are needed. Funded by COMPASS Pathfinder.",
        "funding": "COMPASS Pathfinder.",
        "pmid": "36322843",
        "doi": "10.1056/NEJMoa2206443"
      },
      {
        "id": "vollenweider1998",
        "title": "Psilocybin induces schizophrenia-like psychosis in humans via a serotonin-2 agonist action",
        "authors": "Vollenweider et al.",
        "year": 1998,
        "url": "https://pubmed.ncbi.nlm.nih.gov/9875725/",
        "kind": "Human antagonist experiment",
        "insight": "Antagonist pretreatment supported a role for serotonin receptors in acute effects.",
        "limitation": "Historical terminology and an acute laboratory experiment do not establish a model of schizophrenia or a therapeutic mechanism.",
        "funding": "Not assessed; consult the original disclosure.",
        "pmid": "9875725",
        "doi": "10.1097/00001756-199812010-00024"
      },
      {
        "id": "pubchem",
        "title": "Psilocybin: compound record and molecular structure",
        "authors": "NCBI PubChem",
        "year": 2026,
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/10624",
        "kind": "Chemical database",
        "insight": "Source for molecular identity, formula, molecular weight and the structure diagram.",
        "limitation": "A compound record does not establish a product's purity, identity or clinical benefit.",
        "funding": "Public database maintained by NCBI."
      }
    ],
    "legal": [
      {
        "jurisdiction": "United States — federal",
        "status": "Schedule I under the Controlled Substances Act. State and local rules require separate review.",
        "sourceUrl": "https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf",
        "asOf": "2026-09-29",
        "activity": "Federal controlled-substance classification of psilocybin; does not determine permitted state or local activities."
      }
    ],
    "editorialStatus": "sourced-draft",
    "pkObservations": [
      {
        "id": "psilocybin-elimination",
        "endpoint": "elimination-half-life",
        "unit": "hours",
        "context": "Mean elimination of the active metabolite in a small controlled study; this is not the half-life of parent psilocybin or a prediction of experience duration.",
        "sourceId": "brown2017",
        "analyte": "Psilocin (active metabolite)",
        "route": "Oral administration of psilocybin",
        "formulation": "Controlled oral psilocybin preparation",
        "population": "12 healthy adults in an open-label escalating-exposure study",
        "statistic": "study-mean",
        "value": 3,
        "low": null,
        "high": null,
        "modelEligible": true
      }
    ],
    "outcomes": [
      {
        "name": "Depression symptom severity",
        "direction": "Decreased",
        "evidence": "Human research",
        "description": "The studied higher-dose arm improved the primary short-term outcome compared with the low-dose control, with adverse events and unresolved durability.",
        "sourceId": "goodwin2022",
        "conceptId": "depression-severity",
        "population": "Adults with treatment-resistant depression in the phase 2 trial",
        "exposure": "Single 25 mg psilocybin administration with psychological support versus 1 mg control; week 3",
        "instrument": "Montgomery–Åsberg Depression Rating Scale (MADRS)",
        "magnitude": null
      }
    ],
    "claims": [
      {
        "id": "serotonin-perception",
        "assertion": "Antagonist experiments support serotonin 5-HT2A involvement in acute psilocybin effects.",
        "relation": "receptor-pathway",
        "participants": [
          {
            "entityId": "substance:psilocybin",
            "role": "administered-prodrug"
          },
          {
            "entityId": "tag:serotonin-2a",
            "role": "target"
          },
          {
            "entityId": "tag:perception",
            "role": "subjective-effect"
          }
        ],
        "context": "Controlled acute human antagonist experiment.",
        "sourceIds": [
          "vollenweider1998"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Acute receptor evidence does not establish a complete mechanism of sustained therapeutic change."
      },
      {
        "id": "depression-trial",
        "assertion": "The higher-dose study arm reduced depression severity relative to the low-dose control at the primary time point.",
        "relation": "measured-outcome",
        "participants": [
          {
            "entityId": "substance:psilocybin",
            "role": "exposure"
          },
          {
            "entityId": "tag:depression-severity",
            "role": "measured-outcome"
          },
          {
            "entityId": "tag:psychological-support",
            "role": "co-intervention"
          }
        ],
        "context": "Treatment-resistant depression; standardized preparation and psychological support; assessment at week 3.",
        "sourceIds": [
          "goodwin2022"
        ],
        "conflictingSourceIds": [],
        "assessment": "not-formally-assessed",
        "limitation": "Adverse events occurred and longer comparative trials are needed."
      }
    ]
  }
];

const coreHyperedges: Hyperedge[] = [
  {
    "id": "caffeine-adenosine",
    "label": "Adenosine and wakefulness",
    "relation": "receptor pathway",
    "members": [
      "substance:caffeine",
      "tag:adenosine-antagonist",
      "tag:adenosine",
      "tag:stimulant",
      "tag:adenosine-receptor"
    ],
    "description": "Caffeine's adenosine antagonism connects a molecule, mechanism, transmitter system and functional class.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28603504/",
    "memberRoles": {
      "substance:caffeine": "agent",
      "tag:adenosine-antagonist": "mechanism",
      "tag:adenosine": "endogenous-ligand",
      "tag:stimulant": "functional-class",
      "tag:adenosine-receptor": "target"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28603504/"
    ]
  },
  {
    "id": "caffeine-clearance",
    "label": "Caffeine clearance",
    "relation": "metabolic pathway",
    "members": [
      "substance:caffeine",
      "tag:cyp1a2",
      "tag:tobacco-smoke"
    ],
    "description": "Tobacco-smoke exposure induces CYP1A2. The study measured declining caffeine clearance after cessation; enzyme activity decline is not caffeine elimination half-life.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/15289794/",
    "memberRoles": {
      "substance:caffeine": "substrate",
      "tag:cyp1a2": "metabolizing-enzyme",
      "tag:tobacco-smoke": "exposure-context"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/15289794/"
    ]
  },
  {
    "id": "attention-trial",
    "label": "Studied together: attention",
    "relation": "co-studied",
    "members": [
      "substance:caffeine",
      "substance:l-theanine",
      "tag:attention"
    ],
    "description": "A small randomized study tested the combination. Co-study is not a recommendation to combine substances.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/18681988/",
    "memberRoles": {
      "substance:caffeine": "co-exposure",
      "substance:l-theanine": "co-exposure",
      "tag:attention": "measured-outcome"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/18681988/"
    ]
  },
  {
    "id": "melatonin-sleep",
    "label": "Circadian timing and sleep",
    "relation": "outcome pathway",
    "members": [
      "substance:melatonin",
      "tag:hormone",
      "tag:circadian",
      "tag:sleep",
      "tag:behavioral-scheduling"
    ],
    "description": "Fast-release melatonin with behavioral scheduling was studied in selected delayed sleep–wake phase disorder patients. The co-intervention is part of this relationship.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/29912983/",
    "memberRoles": {
      "substance:melatonin": "exposure",
      "tag:hormone": "functional-class",
      "tag:circadian": "mechanism",
      "tag:sleep": "measured-outcome",
      "tag:behavioral-scheduling": "co-intervention"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/29912983/"
    ]
  },
  {
    "id": "caffeine-sleep",
    "label": "Stimulation and sleep",
    "relation": "adverse outcome",
    "members": [
      "substance:caffeine",
      "tag:sleep"
    ],
    "description": "The sleep connection represents possible disruption, not a sleep benefit.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/24235903/",
    "memberRoles": {
      "substance:caffeine": "exposure",
      "tag:sleep": "measured-outcome"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/24235903/"
    ]
  },
  {
    "id": "creatine-energy",
    "label": "Energy availability in muscle",
    "relation": "mechanism and outcome",
    "members": [
      "substance:creatine",
      "tag:energy-buffer",
      "tag:exercise",
      "tag:amino-acid"
    ],
    "description": "Creatine connects tissue energy metabolism and exercise research.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/28615996/",
    "memberRoles": {
      "substance:creatine": "substrate",
      "tag:energy-buffer": "mechanism",
      "tag:exercise": "related-outcome",
      "tag:amino-acid": "chemical-family"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/28615996/"
    ]
  },
  {
    "id": "nicotine-cholinergic",
    "label": "Cholinergic signaling",
    "relation": "receptor pathway",
    "members": [
      "substance:nicotine",
      "tag:nicotinic-agonist",
      "tag:acetylcholine",
      "tag:stimulant",
      "tag:nicotinic-receptor"
    ],
    "description": "Nicotine acts at nicotinic acetylcholine receptors; dependence is integral to the interpretation.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20554984/",
    "memberRoles": {
      "substance:nicotine": "agent",
      "tag:nicotinic-agonist": "mechanism",
      "tag:acetylcholine": "endogenous-ligand",
      "tag:stimulant": "functional-class",
      "tag:nicotinic-receptor": "target"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/20554984/"
    ]
  },
  {
    "id": "nicotine-clearance",
    "label": "Nicotine metabolism",
    "relation": "metabolic pathway",
    "members": [
      "substance:nicotine",
      "tag:cyp2a6"
    ],
    "description": "Nicotine and caffeine have distinct major metabolic pathways; nicotine is not a proxy for tobacco smoke induction of CYP1A2.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/19184645/",
    "memberRoles": {
      "substance:nicotine": "substrate",
      "tag:cyp2a6": "metabolizing-enzyme"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/19184645/"
    ]
  },
  {
    "id": "psilocybin-serotonin",
    "label": "Serotonin and perception",
    "relation": "receptor pathway",
    "members": [
      "substance:psilocybin",
      "tag:serotonin-2a",
      "tag:serotonin",
      "tag:psychedelic",
      "tag:perception"
    ],
    "description": "Human antagonist studies link acute psilocybin effects to serotonin receptor signaling.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9875725/",
    "memberRoles": {
      "substance:psilocybin": "administered-prodrug",
      "tag:serotonin-2a": "target",
      "tag:serotonin": "endogenous-ligand",
      "tag:psychedelic": "functional-class",
      "tag:perception": "subjective-effect"
    },
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/9875725/"
    ]
  },
  {
    "id": "psilocybin-us-law",
    "label": "US federal classification",
    "relation": "jurisdictional classification",
    "members": [
      "substance:psilocybin",
      "tag:us-schedule-i"
    ],
    "description": "A scoped federal classification with an authority source; no inference about other jurisdictions.",
    "sourceUrl": "https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf",
    "memberRoles": {
      "substance:psilocybin": "classified-compound",
      "tag:us-schedule-i": "jurisdictional-classification"
    },
    "sourceUrls": [
      "https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf"
    ]
  },
  {
    "id": "creatine-muscle-stores",
    "label": "Creatine and tissue stores",
    "relation": "measured-outcome",
    "members": [
      "substance:creatine",
      "tag:muscle-stores"
    ],
    "memberRoles": {
      "substance:creatine": "exposure",
      "tag:muscle-stores": "measured-outcome"
    },
    "description": "Repeated supplementation raised muscle total creatine concentration. Men receiving the studied supplementation protocols.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/8828669/",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/8828669/"
    ]
  },
  {
    "id": "psilocybin-depression-trial",
    "label": "Supported depression trial",
    "relation": "measured-outcome",
    "members": [
      "substance:psilocybin",
      "tag:depression-severity",
      "tag:psychological-support"
    ],
    "memberRoles": {
      "substance:psilocybin": "exposure",
      "tag:depression-severity": "measured-outcome",
      "tag:psychological-support": "co-intervention"
    },
    "description": "The higher-dose study arm reduced depression severity relative to the low-dose control at the primary time point. Treatment-resistant depression; standardized preparation and psychological support; assessment at week 3.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/36322843/",
    "sourceUrls": [
      "https://pubmed.ncbi.nlm.nih.gov/36322843/"
    ]
  }
];

export const tags: Tag[] = [...coreTags, ...additionalTags];
export const substances: Substance[] = [...coreSubstances, ...additionalSubstances];
export const hyperedges: Hyperedge[] = [...coreHyperedges, ...additionalHyperedges];
