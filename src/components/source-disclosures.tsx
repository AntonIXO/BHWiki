import { Badge } from "@/components/ui/badge";
import { disclosureLabels, type SourceDisclosure } from "@/lib/source-disclosures";
import { CircleDollarSign, ExternalLink, ShieldAlert } from "lucide-react";

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
    <div className="source-disclosures flex flex-col gap-2">
      <SourceDisclosureBadges reference={reference} />
      <p className="source-disclosure-row"><CircleDollarSign aria-hidden="true" size={15} /><span><strong>Funding:</strong> {reference.funding || "Not assessed."}</span></p>
      <p className="source-disclosure-row"><ShieldAlert aria-hidden="true" size={15} /><span><strong>Conflicts of interest:</strong> {reference.conflictsOfInterest || "Not assessed."}</span></p>
      {reference.disclosureUrl && (
        <a href={reference.disclosureUrl} target="_blank" rel="noreferrer" className="source-disclosure-link text-sm underline underline-offset-4"><ExternalLink aria-hidden="true" size={14} />Source disclosure</a>
      )}
    </div>
  );
}
