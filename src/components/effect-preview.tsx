import Link from "next/link";
import type { Tag } from "@/lib/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function EffectPreview({ effect }: { effect: Tag }) {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        closeDelay={100}
        render={<Link href={`/effects/${effect.id}`} className="underline underline-offset-4" />}
      >
        {effect.label}
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">{effect.label}</h4>
          <p className="text-muted-foreground">{effect.description}</p>
          <Link href={`/effects/${effect.id}`} className="underline underline-offset-4">
            Explore {effect.label.toLowerCase()}
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
