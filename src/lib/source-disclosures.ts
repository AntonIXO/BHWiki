import type { Reference } from "./types";

export type SourceDisclosure = Pick<Reference, "funding" | "sponsorshipStatus" | "conflictsOfInterest" | "conflictOfInterestStatus" | "disclosureUrl">;

export const sponsorshipLabels = {
  "industry-funded": "Industry sponsored",
  "mixed-funding": "Mixed funding · includes industry",
  "non-industry-funded": "Non-industry funding declared",
  "no-external-funding": "No external funding declared",
  "not-reported": "Funding not reported",
  "not-assessed": "Funding not assessed",
} as const;

export const conflictLabels = {
  declared: "Conflicts of interest declared",
  "none-declared": "No conflicts declared",
  "not-reported": "Conflicts not reported",
  "not-assessed": "Conflicts not assessed",
} as const;

/** Labels reflect explicit metadata, never a guess from funder names or affiliations. */
export function disclosureLabels(reference: SourceDisclosure) {
  return {
    sponsorship: sponsorshipLabels[reference.sponsorshipStatus ?? "not-assessed"],
    conflicts: conflictLabels[reference.conflictOfInterestStatus ?? "not-assessed"],
    commercial: reference.sponsorshipStatus === "industry-funded" || reference.sponsorshipStatus === "mixed-funding",
    declaredConflict: reference.conflictOfInterestStatus === "declared",
  };
}

export function validateSourceDisclosure(value: Record<string, unknown>, path: string) {
  const fail = (message: string): never => { throw new Error(`${path}: ${message}`); };
  const nonempty = (key: string) => typeof value[key] === "string" && Boolean((value[key] as string).trim());
  for (const key of ["funding", "conflictsOfInterest"])
    if (value[key] !== undefined && !nonempty(key)) fail(`${key} must be nonempty text`);
  for (const [key, labels, detail] of [
    ["sponsorshipStatus", sponsorshipLabels, "funding"],
    ["conflictOfInterestStatus", conflictLabels, "conflictsOfInterest"],
  ] as const) {
    const status = value[key];
    if (status === undefined) continue;
    if (typeof status !== "string" || !Object.hasOwn(labels, status)) fail(`invalid ${key}`);
    if (status !== "not-assessed" && (!nonempty(detail) || !nonempty("disclosureUrl")))
      fail(`${key} requires ${detail} and an inspected disclosureUrl`);
    if (status !== "not-assessed" && /^(?:not assessed|unknown|unassessed)\.?$/i.test(String(value[detail]).trim()))
      fail(`${key} cannot use an unassessed disclosure`);
  }
  if (value.disclosureUrl !== undefined) {
    try {
      const url = new URL(String(value.disclosureUrl));
      if (url.protocol !== "https:" || url.username || url.password) fail("disclosureUrl must be a public HTTPS URL");
    } catch { fail("disclosureUrl must be a public HTTPS URL"); }
  }
}
