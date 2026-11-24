import React from 'react';

interface ScenarioContentProps {
  content: string;
  className?: string;
}

type Block =
  | { type: 'text'; lines: string[] }
  | { type: 'code'; lang: string; code: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

function isTableDivider(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|') || !trimmed.includes('-')) return false;
  const cells = trimmed
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
  return cells.length > 0 && cells.every((c) => /^:?-{2,}:?$/.test(c));
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseBlocks(content: string): Block[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;
  let textBuffer: string[] = [];

  const flushText = () => {
    if (textBuffer.length > 0) {
      // Avoid emitting blocks that are strictly empty if surrounded by structured blocks
      blocks.push({ type: 'text', lines: textBuffer });
      textBuffer = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Fenced code block
    if (trimmed.startsWith('```')) {
      flushText();
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && lines[i].trim().startsWith('```')) {
        i++;
      }
      blocks.push({ type: 'code', lang, code: codeLines.join('\n') });
      continue;
    }

    // Markdown table: header row + divider row
    if (
      trimmed.includes('|') &&
      i + 1 < lines.length &&
      isTableDivider(lines[i + 1])
    ) {
      flushText();
      const headers = parseTableRow(lines[i]);
      i += 2; // Skip header and divider
      const rows: string[][] = [];
      while (i < lines.length) {
        const rowLine = lines[i].trim();
        if (!rowLine || !rowLine.includes('|')) {
          break;
        }
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    textBuffer.push(line);
    i++;
  }

  flushText();
  return blocks;
}

export const ScenarioContent: React.FC<ScenarioContentProps> = ({
  content,
  className = '',
}) => {
  const blocks = React.useMemo(() => parseBlocks(content), [content]);

  return (
    <div className={`space-y-3 ${className}`}>
      {blocks.map((block, idx) => {
        if (block.type === 'code') {
          return (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-slate-300/80 bg-slate-900 text-slate-100 shadow-sm my-2"
            >
              {block.lang && (
                <div className="px-3.5 py-1.5 bg-slate-800/90 border-b border-slate-700/80 text-[11px] font-mono uppercase tracking-wider text-slate-300">
                  {block.lang}
                </div>
              )}
              <pre className="p-3.5 text-xs md:text-[13px] leading-relaxed font-mono overflow-x-auto whitespace-pre">
                <code>{block.code}</code>
              </pre>
            </div>
          );
        }

        if (block.type === 'table') {
          return (
            <div
              key={idx}
              className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs my-2"
            >
              <table className="min-w-full border-collapse text-left text-xs md:text-sm">
                <thead className="bg-slate-100/90 border-b border-slate-200">
                  <tr>
                    {block.headers.map((header, hIdx) => (
                      <th
                        key={hIdx}
                        className="px-3.5 py-2.5 font-semibold text-slate-800 whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  {block.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}
                    >
                      {block.headers.map((_, cIdx) => (
                        <td
                          key={cIdx}
                          className="px-3.5 py-2.5 text-slate-700 align-top whitespace-pre-wrap"
                        >
                          {row[cIdx] ?? ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        const text = block.lines.join('\n').trim();
        if (!text) return null;

        return (
          <div key={idx} className="whitespace-pre-line">
            {text}
          </div>
        );
      })}
    </div>
  );
};
