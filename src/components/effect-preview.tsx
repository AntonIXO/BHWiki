import Link from "next/link";
import type { Tag } from "@/lib/types";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
export function EffectPreview({ effect }: { effect: Tag }) {
  return (
    <Popover>
      <PopoverTrigger render={<Button size="sm" variant="ghost" />}>
        Preview effect
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>{effect.label}</PopoverTitle>
          <PopoverDescription>{effect.description}</PopoverDescription>
        </PopoverHeader>
        <Link href={`/effects/${effect.id}`} className="underline">
          Explore {effect.label.toLowerCase()}
        </Link>
      </PopoverContent>
    </Popover>
  );
}
