import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export const metadata = { title: "Subjective effects", description: "Explore reported experiences, their definitions, substance connections, and supporting evidence." };
export default async function EffectsPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="effects" searchParams={await searchParams}/>;
}
