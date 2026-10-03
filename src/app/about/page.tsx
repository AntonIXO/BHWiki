import { Breadcrumb, PrimaryLink } from "@/components/shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = { title: "Evidence & methodology" };

export default function About() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 py-10 sm:px-8">
      <Breadcrumb current="Methods" />
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Evidence, with the context left in</p>
      <h1 className="text-4xl font-medium">Curiosity deserves good sources.</h1>
      <p className="text-lg text-muted-foreground">BHWiki is an independent encyclopedia for understanding substances: what they do, what people report, and what research supports.</p>
      <Accordion multiple defaultValue={["questions", "finding", "numbers", "effects", "relationships", "publication", "open"]}>
        <AccordionItem value="questions">
          <AccordionTrigger>Different questions, different evidence</AccordionTrigger>
          <AccordionContent>
            <p>Human studies, mechanistic explanations, and subjective experiences answer different questions. Effect pages describe experiences. Outcome pages describe measured endpoints. A receptor mechanism does not establish a health benefit, and feeling focused is not the same measurement as accuracy on an attention task.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="finding">
          <AccordionTrigger>A finding is more than a headline</AccordionTrigger>
          <AccordionContent>
            <p>Each claim identifies its context, sources and limitations. Studies can disagree because their participants, exposures, comparators, or measurement times differ. The founding collection is a selected evidence reference, not a systematic review. Certainty has not been formally assessed; we do not give a universal evidence score to a substance.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="numbers">
          <AccordionTrigger>Numbers need context</AccordionTrigger>
          <AccordionContent>
            <p>Dose entries describe research exposures, label instructions, reference information, or community descriptions where explicitly identified. Route, formulation and population remain attached to the number. Missing values are marked as not assessed. A studied amount is not a personal recommendation.</p>
            <p>Kinetic observations identify the analyte that was measured, including active metabolites. Study means and reported ranges have different meanings. The elimination chart illustrates a first-order model with a constant half-life after absorption. It does not estimate personal concentration, experienced effects, impairment, or a safe redosing time.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="effects">
          <AccordionTrigger>Subjective effects without invented precision</AccordionTrigger>
          <AccordionContent>
            <p>Qualitative profiles show direction, source type and context. Quantitative results appear only where the underlying study supplies an instrument and a result. There are no invented intensity ratings, pooled user counts, or assumed equivalents between different scales.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="relationships">
          <AccordionTrigger>Relationships you can inspect</AccordionTrigger>
          <AccordionContent>
            <p>The graph connects a statement to all of its participants, including contextual factors. Selecting a connection reveals its role and source. Shared classification does not imply equal effects, equal risks, or a reason to combine substances.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="publication">
          <AccordionTrigger>Publication and review</AccordionTrigger>
          <AccordionContent>
            <p>“Sourced draft” means the article has linked sources but has not received independent editorial review. “Editorially reviewed” requires a recorded review; it does not mean a medical recommendation. Public history records publication events and available source-control provenance. Corrections and reversions are new publications rather than overwritten history.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="open">
          <AccordionTrigger>Open by design</AccordionTrigger>
          <AccordionContent>
            <p>Code is licensed under MIT and original editorial content under CC BY-SA 4.0. Molecular diagrams identify their PubChem source. Third-party publications and reference sites retain their own rights. Contributions use original summaries and preserve source attribution.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <PrimaryLink href="/contribute">Contribute to the wiki</PrimaryLink>
    </main>
  );
}
