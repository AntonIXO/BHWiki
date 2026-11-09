import { pageMetadata } from "@/lib/seo";
import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export async function generateMetadata({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return pageMetadata({ path: "/outcomes", title: "Measured outcomes", description: "Compare research findings while preserving their populations, exposures, instruments, and limitations.", search: await searchParams });
}
export default async function OutcomesPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="outcomes" searchParams={await searchParams}/>;
}
