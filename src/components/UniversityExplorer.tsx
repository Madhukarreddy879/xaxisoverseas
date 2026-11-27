'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { universities } from '@/data/ukData';
import { useCounselling } from './CounsellingContext';

const filters = ['All', 'Russell Group', 'London', 'MOI Friendly', 'May Intake'] as const;

export default function UniversityExplorer() {
  const [q, setQ] = useState('');
  const [f, setF] = useState<(typeof filters)[number]>('All');
  const { openModal } = useCounselling();

  const list = useMemo(
    () =>
      universities.filter((u) => {
        const text = `${u.name} ${u.city} ${u.courses.join(' ')}`.toLowerCase();
        if (q && !text.includes(q.toLowerCase())) return false;
        if (f === 'Russell Group') return u.tier === 'Russell Group';
        if (f === 'London') return u.city === 'London';
        if (f === 'MOI Friendly') return u.moi;
        if (f === 'May Intake') return u.intakes.includes('May');
        return true;
      }),
    [q, f],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative md:w-80">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search university, city or course"
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm focus:border-navy focus:outline-none"
            aria-label="Search universities"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button
              key={x}
              type="button"
              aria-pressed={f === x}
              onClick={() => setF(x)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${f === x ? 'bg-navy text-white' : 'bg-white text-navy ring-1 ring-slate-300 hover:ring-navy'}`}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{list.length} universities shown</p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((u) => (
          <article key={u.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-navy">{u.name}</h3>
              <span className="shrink-0 rounded bg-gold-light px-2 py-0.5 text-[11px] font-semibold text-gold">{u.tier}</span>
            </div>
            <p className="text-sm text-slate-500">{u.city}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              {u.intakes.map((i) => (
                <span key={i} className="rounded bg-navy/5 px-2 py-0.5 font-medium text-navy">{i}</span>
              ))}
              {u.moi && <span className="rounded bg-green-100 px-2 py-0.5 font-medium text-green-700">MOI friendly</span>}
            </div>
            <dl className="mt-3 space-y-1 text-sm text-slate-600">
              <div><dt className="inline font-semibold">Tuition: </dt><dd className="inline">{u.tuition}</dd></div>
              <div><dt className="inline font-semibold">Scholarship: </dt><dd className="inline">{u.scholarship}</dd></div>
              <div><dt className="inline font-semibold">Popular: </dt><dd className="inline">{u.courses.join(', ')}</dd></div>
            </dl>
            <button
              onClick={() => openModal({ university: u.name, source: 'university-card' })}
              className="mt-4 rounded-lg bg-crimson px-4 py-2.5 text-sm font-semibold text-white hover:bg-crimson-dark"
            >
              Check My Eligibility
            </button>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="mt-8 text-center text-slate-500">No match — ask our counsellors, we work with many more universities.</p>}
      <p className="mt-6 text-xs text-slate-500">Fees are indicative yearly postgraduate figures; MOI acceptance depends on course and UKVI rules.</p>
    </div>
  );
}
