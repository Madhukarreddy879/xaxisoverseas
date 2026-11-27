'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <div key={it.q}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {it.q}
            <ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
