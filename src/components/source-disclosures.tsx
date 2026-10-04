import { Badge } from "@/components/ui/badge";
import { disclosureLabels, type SourceDisclosure } from "@/lib/source-disclosures";

export function SourceDisclosureBadges({ reference }: { reference: SourceDisclosure }) {
  const labels = disclosureLabels(reference);
  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge variant={labels.commercial ? "secondary" : "outline"}>{labels.sponsorship}</Badge>
      <Badge variant={labels.declaredConflict ? "secondary" : "outline"}>{labels.conflicts}</Badge>
    </div>
  );
}

export function SourceDisclosures({ reference }: { reference: SourceDisclosure }) {
  return (
    <div className="flex flex-col gap-2">
      <SourceDisclosureBadges reference={reference} />
      <p><strong>Funding:</strong> {reference.funding || "Not assessed."}</p>
      <p><strong>Conflicts of interest:</strong> {reference.conflictsOfInterest || "Not assessed."}</p>
      {reference.disclosureUrl && (
        <a href={reference.disclosureUrl} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4">Source disclosure</a>
      )}
    </div>
  );
}
