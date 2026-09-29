import { ConceptIndex, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
export const metadata = { title: "Mechanisms & concepts", description: "Explore chemical families, targets, enzymes, and other concepts that connect substances and evidence." };
export default async function ConceptsPage({ searchParams }: { searchParams: Promise<ReadingSearchParams> }) {
  return <ConceptIndex section="concepts" searchParams={await searchParams}/>;
}
