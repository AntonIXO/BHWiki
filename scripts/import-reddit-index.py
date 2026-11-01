#!/usr/bin/env python3
"""Import the legacy Reddit Nootropics index into BHWiki substance pages.

This is deliberately a conservative corpus importer: PubMed abstracts are used for
structured records, while non-PubMed links remain explicit, clearly labeled source
leads. Existing article content is preserved and merged by source URL/PMID.
"""
from __future__ import annotations

import hashlib
import re
from datetime import date
from pathlib import Path
from typing import Any

import yaml

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
SUBSTANCES = CONTENT / "substances"
PUBMED_PATH = ROOT / "data" / "reddit" / "pubmed.json"
TODAY = "2026-11-01"

HEAD_RE = re.compile(r"^###\s*(.+?)\s*$", re.M)
LINK_RE = re.compile(r"\[([^\]]+)\]\(((?:\\.|[^)])+)\)")
PMID_RE = re.compile(r"(?:pubmed(?:\.ncbi\.nlm\.nih\.gov)?|ncbi\.nlm\.nih\.gov/pubmed/)(?:/|%2F)?(\d+)", re.I)
PMCID_RE = re.compile(r"PMC\d+", re.I)
YEAR_RE = re.compile(r"\b(19\d{2}|20\d{2})\b")

BASE_SHAPE = [
    "slug", "name", "subtitle", "summary", "description", "aliases", "formula",
    "molecularWeight", "pubchemCid", "smiles", "category", "tags", "accent",
    "evidenceNote", "reviewedAt", "editorialStatus", "halfLife", "pkObservations",
    "kinetics", "modifiers", "doses", "effects", "outcomes", "claims", "mechanisms",
    "cautions", "interactions", "experienceLinks", "externalWikiLinks", "references", "legal",
]

EFFECTS = {p.stem for p in (CONTENT / "effects").glob("*.md")}
OUTCOMES = {p.stem for p in (CONTENT / "outcomes").glob("*.md")}

def slugify(value: str) -> str:
    value = value.lower().replace("&", " and ")
    value = re.sub(r"['’]", "", value)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value or "reddit-index-entry"

def norm(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", value.lower())

def parse_frontmatter(path: Path) -> tuple[dict[str, Any], str]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        raise ValueError(f"missing frontmatter: {path}")
    end = text.find("\n---\n", 4)
    if end < 0:
        raise ValueError(f"invalid frontmatter: {path}")
    data = yaml.safe_load(text[4:end]) or {}
    return data, text[end + 5 :]

def split_sections(body: str) -> dict[str, str]:
    parts = re.split(r"^## (.+?)\s*$", body, flags=re.M)
    sections: dict[str, str] = {}
    for i in range(1, len(parts), 2):
        sections[parts[i].strip()] = parts[i + 1].strip()
    return sections

def read_list(sections: dict[str, str], title: str) -> list[Any]:
    raw = sections.get(title, "")
    match = re.search(r"```yaml\s*\n(.*?)\n```", raw, flags=re.S)
    if not match:
        return []
    value = yaml.safe_load(match.group(1))
    return value if isinstance(value, list) else []

def dump_yaml(value: Any) -> str:
    return yaml.safe_dump(value, allow_unicode=True, sort_keys=False, default_flow_style=False, width=1000).rstrip()

def ref_id(url: str, pmid: str | None = None) -> str:
    if pmid:
        return f"reddit-pmid-{pmid}"
    return f"reddit-link-{hashlib.sha1(url.encode()).hexdigest()[:12]}"

def year_for(title: str, publication_date: str = "") -> int:
    match = YEAR_RE.search(publication_date) or YEAR_RE.search(title)
    return int(match.group(1)) if match else 2026

def first_sentence(text: str, fallback: str) -> str:
    clean = re.sub(r"\s+", " ", text or "").strip()
    if not clean:
        return fallback
    sentence = re.split(r"(?<=[.!?])\s+", clean, maxsplit=1)[0]
    return sentence[:700]

def abstract_population(abstract: str) -> str:
    m = re.search(r"(?:sample|participants?|subjects?|volunteers?)\s+(?:of|included|were)\s+([^.;]+)", abstract, re.I)
    return m.group(1).strip()[:300] if m else "Population described in the PubMed abstract"

def source_records(section: str, pubmed: dict[str, dict[str, Any]]) -> tuple[list[dict[str, Any]], list[dict[str, str]], list[dict[str, str]]]:
    refs: list[dict[str, Any]] = []
    external: list[dict[str, str]] = []
    links = LINK_RE.findall(section)
    for label, raw_url in links:
        url = raw_url.replace("http://", "https://").replace("\\(", "(").replace("\\)", ")")
        if "reddit.com/r/nootropics/wiki/index" in url.lower() or "r/nootropics/wiki/index" in url.lower():
            continue
        pmid_match = PMID_RE.search(url)
        pmcid_match = PMCID_RE.search(url)
        if "wikipedia.org/wiki/" in url:
            external.append({"service": "Wikipedia", "url": url.split("#", 1)[0].split("?", 1)[0], "title": label})
            continue
        if "examine.com/" in url:
            external.append({"service": "Examine", "url": url.split("#", 1)[0].split("?", 1)[0], "title": label})
            continue
        if "pubchem.ncbi.nlm.nih.gov" in url:
            continue
        pmid = pmid_match.group(1) if pmid_match else None
        article = pubmed.get(pmid) if pmid else None
        rid = ref_id(url, pmid)
        if article:
            title = article.get("title") or label
            authors = ", ".join(article.get("authors") or []) or "Not established"
            abstract = article.get("abstract") or ""
            refs.append({
                "id": rid, "title": title, "authors": authors,
                "year": year_for(title, article.get("publication_date", "")), "url": article.get("url") or url,
                "kind": "PubMed publication", "insight": first_sentence(abstract, "PubMed publication linked from the Reddit index."),
                "limitation": "Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.",
                "pmid": str(pmid), **({"doi": article["doi"]} if article.get("doi") else {}),
                "funding": "Not assessed in this corpus pass.", "sponsorshipStatus": "not-assessed",
                "conflictsOfInterest": "Not assessed in this corpus pass.", "conflictOfInterestStatus": "not-assessed",
            })
        else:
            # Keep research links that did not resolve to a PubMed record as leads.
            if "reddit.com/" in url:
                continue
            if pmcid_match:
                kind = "PubMed Central publication link"
            else:
                kind = "Reddit index publication link"
            refs.append({
                "id": rid, "title": label, "authors": "Not established", "year": year_for(label), "url": url,
                "kind": kind,
                "insight": "The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.",
                "limitation": "Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.",
                "funding": "Not assessed in this corpus pass.", "sponsorshipStatus": "not-assessed",
                "conflictsOfInterest": "Not assessed in this corpus pass.", "conflictOfInterestStatus": "not-assessed",
            })
    # Stable order and URL deduplication.
    seen: set[str] = set(); unique_refs = []
    for ref in refs:
        key = ref["url"]
        if key not in seen:
            seen.add(key); unique_refs.append(ref)
    seen_ext: set[tuple[str, str]] = set(); unique_ext = []
    for link in external:
        key = (link["service"], link["url"])
        if key not in seen_ext:
            seen_ext.add(key); unique_ext.append(link)
    return unique_refs, unique_ext, [{"label": label, "url": url} for label, url in links if "reddit.com" in url]

def pubchem_cid(section: str) -> int | None:
    m = re.search(r"pubchem\.ncbi\.nlm\.nih\.gov/(?:summary/summary\.cgi\?cid=|compound/)(\d+)", section, re.I)
    return int(m.group(1)) if m else None

def source_key(ref: dict[str, Any]) -> tuple[str, str]:
    pmid = str(ref.get("pmid", "")) if ref.get("pmid") else ""
    if not pmid:
        match = re.search(r"pubmed\.ncbi\.nlm\.nih\.gov/(\d+)", str(ref.get("url", "")), re.I)
        if match: pmid = match.group(1)
    if pmid: return ("pmid", pmid)
    doi = str(ref.get("doi", "")).lower() if ref.get("doi") else ""
    if doi: return ("doi", doi)
    return ("url", str(ref.get("url", "")).rstrip('"\\'))

def source_score(ref: dict[str, Any]) -> tuple[int, int, int, int, int, int]:
    rid = str(ref.get("id", "")); kind = str(ref.get("kind", "")); title = str(ref.get("title", "")); authors = str(ref.get("authors", "")); url = str(ref.get("url", ""))
    return (0 if rid.startswith(("reddit-", "dr-")) else 1, 0 if kind.startswith("Reddit index") else 1, 0 if title.startswith("Direct source link:") else 1, 0 if authors == "Not established" else 1, 0 if url.endswith(('"', '\\')) else 1, len(str(ref.get("insight", ""))))

def canonicalize_refs(refs: list[dict[str, Any]], canonical: dict[tuple[str, str], dict[str, Any]]) -> list[dict[str, Any]]:
    result = []
    for ref in refs:
        item = dict(ref)
        base = canonical.get(source_key(item))
        if base:
            for field in ["title", "authors", "year", "url", "kind", "doi", "pmid"]:
                if field in base: item[field] = base[field]
        item["url"] = str(item.get("url", "")).replace("\\(", "(").replace("\\)", ")").rstrip('"\\')
        result.append(item)
    return result

def infer_records(slug: str, name: str, refs: list[dict[str, Any]], pubmed: dict[str, dict[str, Any]], existing: dict[str, Any] | None = None) -> dict[str, list[Any]]:
    doses: list[Any] = []
    effects: list[Any] = []
    outcomes: list[Any] = []
    mechanisms: list[Any] = []
    cautions: list[Any] = []
    claims: list[Any] = []
    pk: list[Any] = []
    effect_map = {"alertness": "alertness", "wakefulness": "wakefulness", "anxiety": "anxiety", "drowsiness": "drowsiness", "sleep": "sleep", "fatigue": "fatigue-severity", "mood": "mood", "craving": "craving", "euphoria": "euphoria"}
    outcome_map = {"attention": "attention", "cognitive": "cognitive-performance", "memory": "episodic-memory", "sleep": "sleep", "depression": "depression-severity", "anxiety": "anxiety-symptom-severity", "fatigue": "fatigue-severity", "alertness": "alertness"}
    used_effect: set[tuple[str, str]] = set(); used_outcome: set[tuple[str, str]] = set(); used_source: set[str] = set()
    for ref in refs:
        pmid = ref.get("pmid")
        article = pubmed.get(str(pmid)) if pmid else None
        if not article:
            continue
        text = f"{article.get('title','')} {article.get('abstract','')}".lower()
        abstract = article.get("abstract") or ""
        population = abstract_population(abstract)
        exposure = first_sentence(abstract, "Study exposure described in the PubMed abstract.")
        direction = "Variable"
        if re.search(r"\b(no significant|did not|does not|not enhance|failed to|without effect|no effect)\b", text): direction = "Variable"
        elif re.search(r"\b(improv|enhanc|facilitat|promot|increas|reduc(?:ed|es)? symptoms?)", text): direction = "Increased"
        elif re.search(r"\b(impair|decreas|reduc|worsen|attenuat)", text): direction = "Decreased"
        for keyword, concept in effect_map.items():
            if keyword in text and concept in EFFECTS and (concept, ref["id"]) not in used_effect:
                used_effect.add((concept, ref["id"]))
                effects.append({"id": f"reddit-{slug}-{concept}-{pmid}", "conceptId": concept, "name": concept.replace("-", " ").title(), "direction": direction, "evidence": "Human research" if re.search(r"human|volunteer|participant|adult", text) else "Limited research", "description": first_sentence(abstract, "Abstract-linked finding."), "sourceId": ref["id"], "population": population, "exposure": exposure, "instrument": None, "magnitude": None, "reportType": "measured-assessment"})
        for keyword, concept in outcome_map.items():
            if keyword in text and concept in OUTCOMES and (concept, ref["id"]) not in used_outcome:
                used_outcome.add((concept, ref["id"]))
                outcomes.append({"id": f"reddit-{slug}-{concept}-{pmid}", "conceptId": concept, "name": concept.replace("-", " ").title(), "direction": direction, "evidence": "Human research" if re.search(r"human|volunteer|participant|adult", text) else "Limited research", "description": first_sentence(abstract, "Abstract-linked measured outcome."), "sourceId": ref["id"], "population": population, "exposure": exposure, "instrument": None, "magnitude": None, "reportType": "measured-assessment"})
        dose_match = re.search(r"(?<![\d.])(\d+(?:\.\d+)?)\s*(mg\/kg|g\/kg|mg|g|mcg|µg)\b", abstract, re.I)
        if dose_match and ref["id"] not in used_source and re.search(r"administer|receiv|dose|ingest|supplement", abstract, re.I):
            amount, unit = dose_match.groups(); unit = unit.lower().replace("µg", "mcg")
            quantity = float(amount) if "." in amount else int(amount)
            doses.append({"label": f"PubMed study exposure ({pmid})", "amount": f"{amount} {unit}", "quantity": quantity, "quantityMax": None, "unit": unit, "ingredient": name, "formulation": "As described in the PubMed abstract", "route": "Not established from abstract", "frequency": "Study exposure", "duration": "Study exposure", "population": population, "purpose": "Research exposure", "sourceCategory": "research", "note": "Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.", "sourceId": ref["id"]})
            used_source.add(ref["id"])
        if re.search(r"receptor|dopamine|serotonin|gaba|nmda|adenosine|bdnf|cyp1a2|mechanis", text):
            mechanisms.append({"title": f"Mechanistic finding from PMID {pmid}", "description": first_sentence(abstract, "The abstract reports a mechanistic observation."), "sourceId": ref["id"]})
        if re.search(r"adverse|safety|toxicity|withdrawal|interaction|side effect|harm", text):
            cautions.append({"title": f"Safety context from PMID {pmid}", "description": first_sentence(abstract, "The abstract reports safety or adverse-event context."), "sourceId": ref["id"]})
        if effects or outcomes:
            for rec in (effects[-1:] + outcomes[-1:]):
                claims.append({"id": f"reddit-claim-{slug}-{pmid}-{len(claims)}", "assertion": f"{name} is associated with the reported {rec['name'].lower()} finding in this publication.", "relation": "associated-with", "participants": [{"entityId": f"substance:{slug}", "role": "intervention or exposure"}, {"entityId": f"tag:{rec['conceptId']}", "role": "reported endpoint"}], "context": "Publication abstract; direction and population are retained on the linked observation.", "sourceIds": [ref["id"]], "conflictingSourceIds": [], "assessment": "not-formally-assessed", "limitation": "Automated corpus import from an abstract; this record is not an independent meta-analysis."})
    return {"doses": doses, "effects": effects, "outcomes": outcomes, "mechanisms": mechanisms, "cautions": cautions, "claims": claims, "pkObservations": pk}

def merge_by_id(old: list[Any], new: list[Any]) -> list[Any]:
    result = list(old or [])
    ids = {str(x.get("id")) for x in result if isinstance(x, dict) and x.get("id") is not None}
    for item in new:
        if not isinstance(item, dict): continue
        item_id = str(item.get("id", ""))
        if item_id and item_id in ids: continue
        result.append(item)
        if item_id: ids.add(item_id)
    return result

def render(data: dict[str, Any], sections: dict[str, str]) -> str:
    shape = data.get("x-shape") or list(BASE_SHAPE)
    for field in BASE_SHAPE:
        if field not in shape: shape.append(field)
    data["x-shape"] = shape
    if data.get("externalWikiLinks"):
        cleaned_links = []
        seen_services: set[str] = set()
        for link in data["externalWikiLinks"]:
            if not isinstance(link, dict) or link.get("service") in seen_services:
                continue
            item = dict(link)
            item["url"] = str(item.get("url", "")).replace("\\(", "(").replace("\\)", ")").rstrip("\\").rstrip("/")
            if item.get("service") == "Wikipedia":
                item["url"] = item["url"].split("?", 1)[0].split("#", 1)[0]
            seen_services.add(str(item.get("service")))
            cleaned_links.append(item)
        data["externalWikiLinks"] = cleaned_links
    if data.get("references"):
        cleaned_refs = []
        seen_ref_ids: set[str] = set()
        for ref in data["references"]:
            if not isinstance(ref, dict):
                continue
            item = dict(ref)
            url = str(item.get("url", "")).replace("\\(", "(").replace("\\)", ")").rstrip("\\")
            if url.startswith("http://"):
                url = "https://" + url[7:]
            elif url.startswith("/r/"):
                url = "https://www.reddit.com" + url
            elif url.startswith("r/"):
                url = "https://www.reddit.com/" + url
            item["url"] = url
            if str(item.get("id")) in seen_ref_ids:
                continue
            seen_ref_ids.add(str(item.get("id")))
            cleaned_refs.append(item)
        data["references"] = cleaned_refs
    section_fields = {
        "summary", "description", "evidenceNote", "pkObservations", "modifiers", "doses", "effects",
        "outcomes", "mechanisms", "cautions", "claims", "interactions", "experienceLinks",
        "externalWikiLinks", "references", "legal", "identificationTests", "monitoring", "monitoringCadence",
    }
    front_data = {key: value for key, value in data.items() if key not in section_fields}
    if isinstance(front_data.get("kinetics"), dict) and "timeline" in front_data["kinetics"]:
        front_data["kinetics"] = {k: v for k, v in front_data["kinetics"].items() if k != "timeline"}
    front = dump_yaml(front_data).replace(f"reviewedAt: {TODAY}", f"reviewedAt: '{TODAY}'")
    ordered = ["Summary", "Description", "Evidence note", "Doses", "Pharmacokinetics", "Duration", "Modifiers", "Effects", "Outcomes", "Mechanisms", "Cautions", "Claims", "Interactions", "Identification tests", "Monitoring", "Monitoring cadence", "Experience links", "External wiki links", "References", "Legal"]
    body = []
    for title in ordered:
        if title in {"External wiki links", "Identification tests", "Monitoring", "Duration"} and not (data.get({"External wiki links":"externalWikiLinks", "Identification tests":"identificationTests", "Monitoring":"monitoring", "Duration":"_duration"}[title]) or (title == "Duration" and isinstance(data.get("kinetics"), dict) and data["kinetics"].get("timeline"))):
            continue
        if title == "Monitoring cadence" and not (data.get("monitoringCadence") or sections.get(title, "").strip()):
            continue
        if title in {"Doses", "Pharmacokinetics", "Duration", "Modifiers", "Effects", "Outcomes", "Mechanisms", "Cautions", "Claims", "Interactions", "Identification tests", "Monitoring", "Experience links", "External wiki links", "References", "Legal"}:
            field = {"Doses":"doses", "Pharmacokinetics":"pkObservations", "Duration":"_duration", "Modifiers":"modifiers", "Effects":"effects", "Outcomes":"outcomes", "Mechanisms":"mechanisms", "Cautions":"cautions", "Claims":"claims", "Interactions":"interactions", "Identification tests":"identificationTests", "Monitoring":"monitoring", "Experience links":"experienceLinks", "External wiki links":"externalWikiLinks", "References":"references", "Legal":"legal"}[title]
            value = data.get(field, [])
            if field == "_duration": value = data.get("kinetics", {}).get("timeline", []) if isinstance(data.get("kinetics"), dict) else []
            body.append(f"## {title}\n\n```yaml\n{dump_yaml(value)}\n```")
        elif title == "Monitoring cadence":
            cadence = str(data.get('monitoringCadence') or sections.get(title, '')).strip()
            if cadence:
                body.append(f"## {title}\n\n{cadence}")
        else:
            field = {"Summary": "summary", "Description": "description", "Evidence note": "evidenceNote"}[title]
            prose = str(data.get(field) or sections.get(title, "")).strip()
            body.append(f"## {title}\n\n{prose}")
    return f"---\n{front}\n---\n\n" + "\n\n".join(body) + "\n"

def main() -> None:
    reddit = (ROOT / "reddit.md").read_text(encoding="utf-8")
    pubmed_data = yaml.safe_load(PUBMED_PATH.read_text(encoding="utf-8"))
    pubmed = {str(a["pmid"]): a for a in pubmed_data.get("articles", [])}
    matches = list(HEAD_RE.finditer(reddit))
    existing: dict[str, tuple[Path, dict[str, Any], str]] = {}
    for path in SUBSTANCES.glob("*.md"):
        try:
            data, body = parse_frontmatter(path)
            existing[path.stem] = (path, data, body)
        except Exception:
            continue
    baseline_groups: dict[tuple[str, str], list[dict[str, Any]]] = {}
    for _, _, existing_body in existing.values():
        existing_sections = split_sections(existing_body)
        for ref in read_list(existing_sections, "References"):
            if isinstance(ref, dict): baseline_groups.setdefault(source_key(ref), []).append(ref)
    canonical_sources = {key: sorted(values, key=source_score, reverse=True)[0] for key, values in baseline_groups.items()}
    lookup: dict[str, str] = {}
    for stem, (_, data, _) in existing.items():
        lookup[norm(stem)] = stem
        lookup[norm(str(data.get("name", "")))] = stem
        for alias in data.get("aliases", []) or []: lookup[norm(str(alias))] = stem
    manual = {"cdp-choline": "citicoline", "l-theanine-and-caffeine": "l-theanine", "methylphenidate-ritalin": "methylphenidate", "valerian-valeriana-officinalis": "valerian", "n-acetylcysteine": "n-acetylcysteine-019fe218", "zolpidem": "zolpidem-01a08b04", "morphine": "morphine-01a08b04", "oxiracetam": "oxiracetam-019fe218", "tianeptine": "tianeptine-019fe218", "pramiracetam": "pramiracetam-019fe218", "memantine": "memantine-019fe218", "exercise": "exercise-protocol", "bdnf": "bdnf-protein", "sleep": "sleep-protocol"}
    summary = {"headings": 0, "updated": 0, "created": 0, "pubmedRefs": 0, "linkRefs": 0, "unmatched": []}
    touched_paths: set[Path] = set()
    for idx, match in enumerate(matches):
        name = match.group(1).strip()
        if name.lower() == "miscellaneous links": continue
        start = match.end(); end = matches[idx + 1].start() if idx + 1 < len(matches) else len(reddit)
        section = reddit[start:end]
        slug = slugify(name)
        target_stem = manual.get(slug) or lookup.get(norm(slug)) or lookup.get(norm(name))
        if not target_stem:
            for candidate, stem in lookup.items():
                if candidate and (candidate.startswith(norm(slug)) or norm(slug).startswith(candidate)) and len(candidate) >= 7:
                    target_stem = stem; break
        refs, external, _ = source_records(section, pubmed)
        if not refs and not external:
            summary["unmatched"].append(name)
            continue
        cid = pubchem_cid(section)
        if target_stem and target_stem in existing:
            path, data, body = existing[target_stem]
            sections = split_sections(body)
            # Sections are the source of truth for structured article fields. Load
            # every existing list before merging so rendering cannot erase a page's
            # curated PK, modifiers, interactions, or legal records.
            for field, title in [("pkObservations", "Pharmacokinetics"), ("modifiers", "Modifiers"), ("doses", "Doses"), ("effects", "Effects"), ("outcomes", "Outcomes"), ("mechanisms", "Mechanisms"), ("cautions", "Cautions"), ("claims", "Claims"), ("interactions", "Interactions"), ("identificationTests", "Identification tests"), ("monitoring", "Monitoring"), ("experienceLinks", "Experience links"), ("externalWikiLinks", "External wiki links"), ("legal", "Legal")]:
                data[field] = read_list(sections, title)
            if isinstance(data.get("kinetics"), dict):
                data["kinetics"]["timeline"] = read_list(sections, "Duration")
            if "Monitoring cadence" in sections:
                data["monitoringCadence"] = sections["Monitoring cadence"]
            old_refs = read_list(sections, "References")
            old_by_url = {str(x.get("url")): x for x in old_refs if isinstance(x, dict) and x.get("url")}
            merged_refs = list(old_refs)
            for ref in refs:
                if ref.get("url") not in old_by_url:
                    merged_refs.append(ref); old_by_url[str(ref.get("url"))] = ref
            refs_for_records = [dict(ref, id=str(old_by_url.get(str(ref.get("url")), ref).get("id", ref.get("id")))) for ref in refs]
            merged_refs = canonicalize_refs(merged_refs, canonical_sources)
            data["references"] = merged_refs
            data["references"] = merged_refs
            if external:
                old_ext = data.get("externalWikiLinks") or read_list(sections, "External wiki links")
                seen = {(x.get("service"), x.get("url")) for x in old_ext if isinstance(x, dict)}
                data["externalWikiLinks"] = old_ext + [x for x in external if (x["service"], x["url"]) not in seen]
            # A Reddit PubChem link is retained in the source trail, but does not
            # authorize adding a structure to an existing identity stub.
            records = infer_records(target_stem, str(data.get("name") or name), refs_for_records, pubmed, data)
            for field in ["doses", "effects", "outcomes", "mechanisms", "cautions", "claims"]:
                data[field] = merge_by_id(read_list(sections, {"doses":"Doses", "effects":"Effects", "outcomes":"Outcomes", "mechanisms":"Mechanisms", "cautions":"Cautions", "claims":"Claims"}[field]), records[field])
            note = str(data.get("evidenceNote") or sections.get("Evidence note") or "")
            addition = f"\n\nReddit index corpus import ({len(refs)} linked source records; {sum(1 for r in refs if r.get('pmid'))} PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so."
            if "Reddit index corpus import" not in note: data["evidenceNote"] = note + addition
            if str(data.get("summary", "")).startswith("Identity only import") or "canonical identity" in str(data.get("summary", "")):
                data["subtitle"] = "Reddit index evidence trail."
                data["summary"] = f"{data.get('name', name)} has a Reddit index evidence trail with {len(refs)} linked publications; structured records below are limited to abstract-supported observations."
                data["description"] = f"This page merges the legacy Reddit index with PubMed-linked publication metadata for {data.get('name', name)}. Publication abstracts are used for the structured evidence records; unverified links remain labeled as leads."
            existing[target_stem] = (path, data, body)
            path.write_text(render(data, sections), encoding="utf-8")
            touched_paths.add(path)
            summary["updated"] += 1
        else:
            target_stem = target_stem or slug
            if target_stem in existing: target_stem = f"{slug}-reddit-index"
            identity_ref = {"id": f"reddit-index-{target_stem}", "title": "Reddit Nootropics index entry", "authors": "Reddit r/Nootropics community index", "year": 2026, "url": "https://www.reddit.com/r/nootropics/wiki/index", "kind": "Community index", "insight": "The community index lists this substance and links the source trail below.", "limitation": "Community indexing is a discovery aid and does not establish efficacy or safety."}
            all_refs = [identity_ref] + canonicalize_refs(refs, canonical_sources)
            first_source = all_refs[0]["id"]
            obs_id = f"{target_stem}-reddit-pk-unestablished"
            data = {"slug": target_stem, "name": name, "subtitle": "Reddit index evidence trail.", "aliases": [x.strip() for x in re.findall(r"\(([^)]+)\)", name) for x in re.split(r",|/", x) if x.strip()], "formula": "Not established", "molecularWeight": "Not established", "pubchemCid": None, "smiles": "Not established", "category": "Reddit index entry", "tags": ["reddit-index"], "accent": "#a9b993", "reviewedAt": TODAY, "editorialStatus": "sourced-draft", "halfLife": {"label": "Not established", "low": None, "high": None, "context": "No validated elimination observation was imported in this corpus pass.", "sourceId": first_source, "observationId": obs_id}, "kinetics": {"onset": "Not established", "peak": "Not established", "duration": "Not established", "bioavailability": "Not established", "metabolism": "Not established", "sourceId": first_source}, "x-shape": list(BASE_SHAPE), "summary": f"{name} has {len(refs)} linked publications in the Reddit Nootropics index; abstract-supported records are listed below.", "description": f"This page imports the Reddit index source trail for {name}. PubMed abstracts are used for structured observations where the abstract supports them; other links remain explicitly labeled as unverified leads.", "evidenceNote": f"Corpus import reviewed {sum(1 for r in refs if r.get('pmid'))} PubMed abstracts and retained {len(refs)} linked source records. Full-text methods, funding, conflicts, and legal context were not comprehensively reviewed.", "pkObservations": [{"id": obs_id, "analyte": name, "route": "Not assessed", "formulation": "Index entry", "population": "Not assessed", "endpoint": "elimination-half-life", "statistic": "not-established", "value": None, "low": None, "high": None, "unit": "hours", "context": "This corpus import does not establish a pharmacokinetic observation.", "sourceId": first_source, "modelEligible": False}], "modifiers": [], "doses": [], "effects": [], "outcomes": [], "claims": [], "mechanisms": [], "cautions": [], "interactions": [], "experienceLinks": [], "legal": [], "references": all_refs}
            records = infer_records(target_stem, name, refs, pubmed)
            for field in ["doses", "effects", "outcomes", "mechanisms", "cautions", "claims"]: data[field] = records[field]
            if external: data["externalWikiLinks"] = external
            path = SUBSTANCES / f"{target_stem}.md"
            path.write_text(render(data, {}), encoding="utf-8")
            existing[target_stem] = (path, data, "")
            summary["created"] += 1
            touched_paths.add(path)
        summary["pubmedRefs"] += sum(1 for r in refs if r.get("pmid"))
        summary["linkRefs"] += sum(1 for r in refs if not r.get("pmid"))
        summary["headings"] += 1
    # Earlier reruns can leave generated records pointing at a Reddit PMID id while
    # an existing article already had the same URL under a different canonical id.
    # Repair those aliases after the merge so every sourceId resolves locally.
    for path in touched_paths:
        try:
            data, body = parse_frontmatter(path)
            sections = split_sections(body)
            refs = read_list(sections, "References")
            by_pmid = {str(r.get("pmid")): str(r.get("id")) for r in refs if isinstance(r, dict) and r.get("pmid") and r.get("id")}
            by_url = {str(r.get("url")): str(r.get("id")) for r in refs if isinstance(r, dict) and r.get("url") and r.get("id")}
            def canonical(source: Any) -> Any:
                if not isinstance(source, str) or not source.startswith("reddit-pmid-"):
                    return source
                return by_pmid.get(source.removeprefix("reddit-pmid-"), source)
            changed = False
            for field, title in [("pkObservations", "Pharmacokinetics"), ("modifiers", "Modifiers"), ("doses", "Doses"), ("effects", "Effects"), ("outcomes", "Outcomes"), ("mechanisms", "Mechanisms"), ("cautions", "Cautions"), ("claims", "Claims"), ("interactions", "Interactions")]:
                items = read_list(sections, title)
                for item in items:
                    if not isinstance(item, dict): continue
                    if "sourceId" in item:
                        new = canonical(item["sourceId"]); changed |= new != item["sourceId"]; item["sourceId"] = new
                    if isinstance(item.get("sourceIds"), list):
                        item["sourceIds"] = [canonical(x) for x in item["sourceIds"]]
                    if isinstance(item.get("conflictingSourceIds"), list):
                        item["conflictingSourceIds"] = [canonical(x) for x in item["conflictingSourceIds"]]
                    if isinstance(item.get("severity"), dict) and "sourceId" in item["severity"]:
                        new = canonical(item["severity"]["sourceId"]); changed |= new != item["severity"]["sourceId"]; item["severity"]["sourceId"] = new
                data[field] = items
            for key in ["halfLife", "kinetics"]:
                if isinstance(data.get(key), dict) and "sourceId" in data[key]:
                    new = canonical(data[key]["sourceId"]); changed |= new != data[key]["sourceId"]; data[key]["sourceId"] = new
            data["references"] = refs
            if changed:
                path.write_text(render(data, sections), encoding="utf-8")
        except Exception:
            continue
    print(yaml.safe_dump(summary, sort_keys=False))

if __name__ == "__main__":
    main()
