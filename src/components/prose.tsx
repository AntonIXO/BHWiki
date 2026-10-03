import type { ReactNode } from "react";
import Markdown from "react-markdown";

const markdownSyntax = /[*_`\][#]|^\s*[-+] |<[a-z!/]/i;

type Props = { text: string; className?: string; inline?: boolean };

function markdown(text: string, className: string | undefined, inline: boolean) {
  return (
    <Markdown
      skipHtml
      disallowedElements={["img", "script", "style", "iframe", "object", "embed", "form"]}
      unwrapDisallowed
      urlTransform={(url) => (url.startsWith("https://") ? url : "")}
      components={{
        p: ({ node: _node, children }) => inline ? <span className={className}>{children}</span> : <p className={className}>{children}</p>,
        a: ({ node: _node, href, children }) => {
          const safe = typeof href === "string" && href.startsWith("https://") ? href : undefined;
          return safe ? <a href={safe} rel="noreferrer" target="_blank">{children}</a> : <span>{children}</span>;
        },
      }}
    >
      {text}
    </Markdown>
  );
}

/** Renders a narrative field. Plain text stays a single paragraph, which is how every current article is stored. */
export function Prose({ text, className, inline = false }: Props): ReactNode {
  if (!markdownSyntax.test(text)) {
    if (inline) return text;
    return <p className={className}>{text}</p>;
  }
  return markdown(text, className, inline);
}
