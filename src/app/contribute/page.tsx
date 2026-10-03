import Link from "next/link";
import { Breadcrumb } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemGroup, ItemTitle } from "@/components/ui/item";
import { repositoryUrl } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata = { title: "Contribute" };

export default function Contribute() {
  const repo = repositoryUrl();
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 py-10 sm:px-8">
      <Breadcrumb current="Contribute" />
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Knowledge is a collective effort</p>
      <h1 className="text-4xl font-medium">Make the next article better.</h1>
      <p className="text-lg text-muted-foreground">A useful contribution makes a claim more precise, a source easier to follow, or an uncertainty harder to miss.</p>
      <h2 className="pt-4 text-2xl font-medium">Propose one verifiable change</h2>
      <p>Supply the substance or concept, proposed wording, and a primary publication or authoritative reference. State the population, route, formulation and limitation where relevant. Write an original summary and disclose any relevant financial or personal conflict.</p>
      <h2 className="pt-4 text-2xl font-medium">From proposal to publication</h2>
      <ol className="flex list-decimal flex-col gap-4 ps-5">
        <li><strong>Open a pull request.</strong> Change the article, shared concept or source record. Explain what changed and why.</li>
        <li><strong>Validate the content.</strong> Automated checks verify source references, structured observations and graph membership.</li>
        <li><strong>Review the evidence.</strong> A maintainer inspects the source and diff, including contradictory findings and limitations.</li>
        <li><strong>Publish a revision.</strong> An accepted change becomes an atomic publication with source-control provenance. Corrections and reversions remain traceable.</li>
      </ol>
      <h2 className="pt-4 text-2xl font-medium">Where to contribute</h2>
      {repo ? (
        <>
          <p>The repository contains setup instructions, content examples, review templates and issue reporting.</p>
          <Button nativeButton={false} render={<a href={repo} target="_blank" rel="noreferrer" />}>Open the source repository</Button>
        </>
      ) : (
        <p>This installation does not yet have a public repository configured. The source distribution includes CONTRIBUTING.md, a pull-request template, and validation commands. Maintainers will add the repository link when it is available.</p>
      )}
      <h2 className="pt-4 text-2xl font-medium">What would help</h2>
      <ItemGroup>
        {[
          "Primary references and precise study context.",
          "Corrections to mechanisms, metabolism, or molecular identity.",
          "Effect definitions that separate experience from measured outcomes.",
          "Dated legal records with a jurisdiction and primary authority.",
          "Accessible interfaces and reproducible software fixes.",
        ].map((item) => (
          <Item key={item} variant="outline" size="sm" role="listitem">
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
      <p>The initial collection is labelled sourced draft. Independent review is a recorded step, not an assumption made when an article is imported.</p>
      <Button variant="outline" nativeButton={false} render={<Link href="/about" />}>Read the editorial methods</Button>
    </main>
  );
}
