import { Badge } from "@/components/ui/badge";
import { disclosureLabels, type SourceDisclosure } from "@/lib/source-disclosures";
import { Prose } from "@/components/prose";
import { CircleDollarSign, ExternalLink, ShieldAlert } from "lucide-react";

function isAssessedStatus(status: string | undefined) {
  return Boolean(status && status !== "not-assessed" && status !== "not-reported");
}

export function SourceDisclosureBadges({ reference, hideUnassessed = false }: { reference: SourceDisclosure; hideUnassessed?: boolean }) {
  const labels = disclosureLabels(reference);
  const showSponsorship = !hideUnassessed || isAssessedStatus(reference.sponsorshipStatus);
  const showConflicts = !hideUnassessed || isAssessedStatus(reference.conflictOfInterestStatus);
  if (!showSponsorship && !showConflicts) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {showSponsorship && <Badge variant={labels.commercial ? "secondary" : "outline"}>{labels.sponsorship}</Badge>}
      {showConflicts && <Badge variant={labels.declaredConflict ? "secondary" : "outline"}>{labels.conflicts}</Badge>}
    </div>
  );
}

export function SourceDisclosures({ reference, hideUnassessed = false }: { reference: SourceDisclosure; hideUnassessed?: boolean }) {
  const funding = reference.funding?.trim();
  const conflicts = reference.conflictsOfInterest?.trim();
  const genericFunding = Boolean(funding && /^(?:funding\s+)?(?:not assessed|not reported|unknown)\.?$/i.test(funding));
  const genericConflicts = Boolean(conflicts && /^(?:conflicts?(?: of interest)?\s+)?(?:not assessed|not reported|unknown)\.?$/i.test(conflicts));
  const showFunding = Boolean(funding && (!hideUnassessed || !genericFunding));
  const showConflicts = Boolean(conflicts && (!hideUnassessed || !genericConflicts));
  const showDisclosure = Boolean(reference.disclosureUrl);
  if (!showFunding && !showConflicts && !showDisclosure && (!reference.sponsorshipStatus || !isAssessedStatus(reference.sponsorshipStatus)) && (!reference.conflictOfInterestStatus || !isAssessedStatus(reference.conflictOfInterestStatus))) return null;
  return (
    <div className="source-disclosures flex flex-col gap-2">
      <SourceDisclosureBadges reference={reference} hideUnassessed={hideUnassessed} />
      {showFunding && <p className="source-disclosure-row"><CircleDollarSign aria-hidden="true" size={15} /><span><strong>Funding:</strong> <Prose text={funding!} inline /></span></p>}
      {showConflicts && <p className="source-disclosure-row"><ShieldAlert aria-hidden="true" size={15} /><span><strong>Conflicts of interest:</strong> <Prose text={conflicts!} inline /></span></p>}
      {showDisclosure && (
        <a href={reference.disclosureUrl} target="_blank" rel="noreferrer" className="source-disclosure-link text-sm underline underline-offset-4"><ExternalLink aria-hidden="true" size={14} />Source disclosure</a>
      )}
    </div>
  );
}
