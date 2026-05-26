import { DocumentRenderer } from '@keystatic/core/renderer';
import type { DocumentElement } from '@keystatic/core';
import type { ReactNode, ReactElement } from 'react';

type Props = {
  document: DocumentElement[];
};

export default function BlogContentRenderer({ document }: Props) {
  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          blockquote: ({ children }: { children: ReactNode }) => (
            <div className="article-callout">{children}</div>
          ),
          heading: ({ level, children }: { level: 1 | 2 | 3 | 4 | 5 | 6; children: ReactNode; textAlign?: 'center' | 'end' }) => {
            if (level === 2) return <h2>{children}</h2>;
            if (level === 3) return <h3>{children}</h3>;
            return <h2>{children}</h2>;
          },
          list: ({ type, children }: { type: 'ordered' | 'unordered'; children: ReactElement[] }) => {
            const items = children.map((child, i) => <li key={i}>{child}</li>);
            return type === 'ordered' ? <ol>{items}</ol> : <ul>{items}</ul>;
          },
        },
      }}
    />
  );
}
