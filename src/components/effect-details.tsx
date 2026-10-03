"use client";
import { useState } from "react";
import type { EffectDetails as Details } from "@/lib/research-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/prose";
function Illustration({
  media,
}: {
  media: NonNullable<Details["media"]>[number];
}) {
  const [visible, setVisible] = useState(false);
  return (
    <figure className="flex flex-col gap-3">
      <figcaption>
        <strong>{media.title}</strong>
        <p>Illustration · {media.description}</p>
      </figcaption>
      <div>
        <Button variant="outline" onClick={() => setVisible((v) => !v)}>
          {visible ? "Hide illustration" : "Show illustration"}
        </Button>
      </div>
      {visible &&
        (media.kind === "image" ? (
          <img
            src={media.url}
            alt={media.description}
            loading="lazy"
            className="max-h-96 w-full object-contain"
          />
        ) : media.kind === "audio" ? (
          <audio
            src={media.url}
            controls
            preload="none"
            aria-label={media.description}
          />
        ) : (
          <video
            src={media.url}
            controls
            preload="none"
            crossOrigin="anonymous"
            aria-label={media.description}
          >
            <track
              kind="captions"
              src={media.captionsUrl}
              srcLang="en"
              label="English"
              default
            />
          </video>
        ))}
      <p className="text-sm text-muted-foreground">
        {media.attribution} · {media.license} ·{" "}
        <a
          className="underline"
          href={media.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          Original source
        </a>
      </p>
    </figure>
  );
}
export function EffectDetails({ details }: { details: Details | undefined }) {
  if (!details) return null;
  return (
    <div className="flex flex-col gap-6">
      {Boolean(details.variations?.length) && (
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium">Variations</h2>
          {details.variations!.map((v) => (
            <Card key={v.id}>
              <CardHeader>
                <CardTitle>
                  <h3>{v.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Prose text={v.description} />
                <div className="flex flex-wrap gap-3">
                  {v.sourceUrls.map((url, i) => (
                    <a
                      href={url}
                      key={url}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source {i + 1}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
      {Boolean(details.reports?.length) && (
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium">Curated accounts</h2>
          <p className="text-muted-foreground">
            Individual reports document experiences; they do not establish
            prevalence or efficacy.
          </p>
          {details.reports!.map((r) => (
            <article key={r.url}>
              <a
                href={r.url}
                className="underline font-medium"
                target="_blank"
                rel="noreferrer"
              >
                {r.title}
              </a>
              <Prose text={r.context} />
            </article>
          ))}
        </section>
      )}
      {Boolean(details.media?.length) && (
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium">Illustrative media</h2>
          {details.media!.map((m) => (
            <Illustration key={m.url} media={m} />
          ))}
        </section>
      )}
    </div>
  );
}
