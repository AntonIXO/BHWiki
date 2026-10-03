import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Empty, EmptyHeader, EmptyDescription } from "@/components/ui/empty";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  wellClassName?: string;
};

/** Structure drawings ship on a #f5f5f5 matte. Contrast lifts that matte to white, then multiply drops it into the card. */
export function MoleculeImage({ className, wellClassName, alt, ...props }: Props) {
  if (!props.src) return (
    <Empty className={wellClassName}>
      <EmptyHeader><EmptyDescription>Structure not established</EmptyDescription></EmptyHeader>
    </Empty>
  );
  return (
    <span className={cn("structure-well flex items-center justify-center", wellClassName)}>
      <img alt={alt} className={cn("structure-art h-full w-full object-contain", className)} {...props} />
    </span>
  );
}
