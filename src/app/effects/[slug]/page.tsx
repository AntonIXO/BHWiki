import { ConceptArticle, conceptMetadata, type ReadingSearchParams } from "@/components/concept-reading";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }>; searchParams: Promise<ReadingSearchParams> };
export async function generateMetadata({ params }: Props) { return conceptMetadata((await params).slug); }
export default async function EffectPage({ params, searchParams }: Props) {
  return <ConceptArticle section="effects" slug={(await params).slug} searchParams={await searchParams}/>;
}
