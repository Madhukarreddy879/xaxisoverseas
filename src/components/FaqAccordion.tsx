import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-accordion divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <details key={it.q} open={i === 0} className="group">
          <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 text-left font-semibold text-navy hover:bg-slate-50">
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-crimson transition-transform duration-200 -rotate-90 group-open:rotate-0 motion-reduce:transition-none"
            />
            <span>{it.q}</span>
          </summary>
          <p className="px-5 pb-5 pl-12 text-sm leading-relaxed text-slate-600">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
