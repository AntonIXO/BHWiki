import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export const metadata = { title: "Measured outcomes", description: "Compare research findings while preserving their populations, exposures, instruments, and limitations." };
export default async function OutcomesPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="outcomes" searchParams={await searchParams}/>;
}
