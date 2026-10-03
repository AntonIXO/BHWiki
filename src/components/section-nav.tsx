import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SectionNav({ label, items }: { label: string; items: { id: string; name: string }[] }) {
  if (!items.length) return null;
  return (
    <nav aria-label={label}>
      <Tabs>
        <TabsList variant="line" className="h-auto w-full flex-wrap justify-start group-data-horizontal/tabs:h-auto">
          {items.map((item) => (
            <TabsTrigger key={item.id} value={item.id} nativeButton={false} render={<a href={`#${item.id}`} />}>
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
