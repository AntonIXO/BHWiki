"use client";

import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";

export type SwitchingTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  tone?: string;
  count?: number;
  badge?: ReactNode;
  ariaLabel?: string;
};

export function SwitchingTabs({
  items,
  value,
  onChange,
  ariaLabel,
  panel,
}: {
  items: SwitchingTab[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  panel: ReactNode;
}) {
  const baseId = useId();
  const reducedMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabScrollRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === value));
  const activeItem = items[activeIndex];
  const select = (index: number) => {
    const next = items[index];
    if (next) onChange(next.id);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % items.length
      : event.key === "ArrowLeft"
        ? (index - 1 + items.length) % items.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : -1;
    if (nextIndex < 0) return;
    event.preventDefault();
    select(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  useEffect(() => {
    const scroll = tabScrollRef.current;
    const activeTab = tabRefs.current[activeIndex];
    if (!scroll || !activeTab) return;
    if (activeIndex === 0) {
      scroll.scrollLeft = 0;
      return;
    }
    const left = activeTab.offsetLeft;
    const right = left + activeTab.offsetWidth;
    const gutter = 8;
    if (left < scroll.scrollLeft + gutter) scroll.scrollLeft = Math.max(0, left - gutter);
    else if (right > scroll.scrollLeft + scroll.clientWidth - gutter) scroll.scrollLeft = right - scroll.clientWidth + gutter;
  }, [activeIndex, items.length]);

  if (!activeItem) return null;

  const panelId = `${baseId}-panel`;
  return (
    <div className="route-dose-tabs">
      <LayoutGroup id={`${baseId}-tabs`}>
        <div className="route-dose-tab-scroll" ref={tabScrollRef}>
          <div aria-label={ariaLabel} className="route-dose-tablist" role="tablist">
            {items.map((item, index) => {
              const Icon = item.icon;
              const selected = index === activeIndex;
              return (
                <button
                  aria-controls={panelId}
                  aria-label={item.ariaLabel ?? `${item.label}${item.count === undefined ? "" : `, ${item.count} ${item.count === 1 ? "record" : "records"}`}`}
                  aria-selected={selected}
                  className={`route-dose-tab route-dose-tab--${item.tone ?? "other"}`}
                  id={`${baseId}-tab-${item.id}`}
                  key={item.id}
                  onClick={() => select(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  {selected && <motion.span aria-hidden="true" className="route-dose-tab-indicator" layoutId={`${baseId}-indicator`} transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 450, damping: 36 }} />}
                  <span className="route-dose-tab-label"><Icon aria-hidden="true" size={15} /><span>{item.label}</span>{(item.badge !== undefined || item.count !== undefined) && <small>{item.badge ?? item.count}</small>}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          className="route-dose-panel"
          id={panelId}
          role="tabpanel"
        >
          {panel}
        </div>
      </LayoutGroup>
    </div>
  );
}
