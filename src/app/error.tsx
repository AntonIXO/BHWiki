"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-16 sm:px-8">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Library unavailable</p>
      <h1 className="text-4xl font-medium">We couldn’t load the library.</h1>
      <p className="text-muted-foreground">The content service is temporarily unavailable. Please try again.</p>
      <Button type="button" onClick={reset}>Try again</Button>
    </main>
  );
}
