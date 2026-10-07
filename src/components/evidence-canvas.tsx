"use client";

import { useEffect, useRef, useState } from "react";
import { ChartNoAxesCombined, ClipboardPaste, ImagePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EvidenceCanvas() {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const image = Array.from(event.clipboardData?.items ?? []).find(item => item.type.startsWith("image/"));
      const file = image?.getAsFile();
      if (file) {
        event.preventDefault();
        setPreview(URL.createObjectURL(file));
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);

  function selectFile(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="evidence-canvas" aria-label="Evidence figure workspace">
      <div className="evidence-canvas-heading">
        <span className="evidence-canvas-icon"><ImagePlus aria-hidden="true" size={18} /></span>
        <div>
          <strong>{preview ? "Figure attached to this draft" : "Add a figure or dataset"}</strong>
          <p>Paste an image, choose a file, or connect a chart to the claim context.</p>
        </div>
        {preview && <Button variant="ghost" size="icon-sm" aria-label="Remove figure" onClick={() => setPreview(null)}><X aria-hidden="true" /></Button>}
      </div>
      {preview ? (
        <img src={preview} alt="Pasted evidence figure preview" className="evidence-canvas-preview" />
      ) : (
        <div className="evidence-canvas-actions">
          <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}><ImagePlus data-icon="inline-start" />Choose image</Button>
          <span><ClipboardPaste aria-hidden="true" size={14} />Paste from clipboard</span>
          <span><ChartNoAxesCombined aria-hidden="true" size={14} />Chart slot ready</span>
          <input ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={event => selectFile(event.target.files?.[0])} />
        </div>
      )}
    </div>
  );
}
