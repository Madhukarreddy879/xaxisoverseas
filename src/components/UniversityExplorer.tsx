'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { universities } from '@/data/ukData';
import { useCounselling } from './CounsellingContext';

const filters = ['All', 'Russell Group', 'London', 'MOI Friendly', 'May Intake'] as const;

function QuerySync({ onQuery }: { onQuery: (q: string) => void }) {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q') ?? '';
  useEffect(() => {
    onQuery(urlQuery);
  }, [urlQuery, onQuery]);
  return null;
}

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
      <Suspense fallback={null}>
        <QuerySync onQuery={setQ} />
      </Suspense>
      <search className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative md:w-80">
          <Search aria-hidden="true" className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          <input
            id="university-search"
            name="q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            autoCorrect="off"
            spellCheck={false}
            placeholder="Search university, city or course"
            className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3.5 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15"
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
              className={`min-h-[42px] rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                f === x ? 'bg-navy text-white shadow-sm' : 'bg-white text-navy ring-1 ring-slate-300 hover:ring-navy'
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </search>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
        <p aria-live="polite">{list.length} universities shown</p>
        {(q || f !== 'All') && (
          <button
            type="button"
            onClick={() => {
              setQ('');
              setF('All');
            }}
            className="text-xs font-semibold text-crimson hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((u) => (
          <article key={u.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-bold text-navy">{u.name}</h2>
              <span className="shrink-0 rounded-md bg-gold-light px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                {u.tier}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-slate-500">{u.city}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              {u.intakes.map((i) => (
                <span key={i} className="rounded-md bg-navy/5 px-2 py-0.5 font-medium text-navy">
                  {i}
                </span>
              ))}
              {u.moi && (
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
                  MOI friendly
                </span>
              )}
            </div>
            <dl className="mt-3.5 space-y-1 text-sm text-slate-600">
              <div><dt className="inline font-semibold text-navy/85">Tuition: </dt><dd className="inline">{u.tuition}</dd></div>
              <div><dt className="inline font-semibold text-navy/85">Scholarship: </dt><dd className="inline">{u.scholarship}</dd></div>
              <div><dt className="inline font-semibold text-navy/85">Popular: </dt><dd className="inline">{u.courses.join(', ')}</dd></div>
            </dl>
            <div className="mt-auto pt-4">
              <button
                type="button"
                onClick={() => openModal({ university: u.name, source: 'university-card' })}
                className="min-h-[44px] w-full rounded-xl border border-crimson bg-white px-4 py-2.5 text-sm font-semibold text-crimson transition hover:bg-crimson hover:text-white"
              >
                Check My Eligibility<span className="sr-only"> for {u.name}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-8 text-center text-slate-500">
          No match — ask our counsellors, we work with many more UK universities.
        </p>
      )}
      <p className="mt-6 text-xs text-slate-500">
        Fees are indicative yearly postgraduate figures; MOI acceptance depends on course and UKVI rules.
      </p>
    </div>
  );
}
