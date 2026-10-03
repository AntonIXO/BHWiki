import Link from "next/link";
import { Atom } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2 text-lg font-medium tracking-tight" aria-label="BHWiki home">
      <Atom aria-hidden="true" />
      <span>bh<span className="font-normal text-muted-foreground">wiki</span>.</span>
    </Link>
  );
}
