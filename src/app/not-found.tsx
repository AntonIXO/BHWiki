import { PrimaryLink } from "@/components/shell";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-16 sm:px-8">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">404 · Not in the library</p>
      <h1 className="text-4xl font-medium">There’s more to discover.</h1>
      <p className="text-muted-foreground">We couldn’t find that article. Try searching the substance library.</p>
      <PrimaryLink href="/">Explore the library</PrimaryLink>
    </main>
  );
}
