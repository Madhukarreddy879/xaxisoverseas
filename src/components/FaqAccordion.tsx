import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-accordion divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((it, i) => (
        <details key={it.q} open={i === 0} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left text-[15px] font-semibold text-navy transition hover:bg-slate-50 sm:px-6 sm:text-base">
            <span>{it.q}</span>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-crimson transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <p className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
