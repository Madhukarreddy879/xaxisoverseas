'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

function SubmittedBannerInner() {
  const searchParams = useSearchParams();
  if (searchParams.get('submitted') !== '1') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
    >
      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
      <p>
        <strong>Thank you!</strong> Your UK counselling enquiry has been received. Our Ameerpet team will call you shortly.
      </p>
    </div>
  );
}

export default function SubmittedBanner() {
  return (
    <Suspense fallback={null}>
      <SubmittedBannerInner />
    </Suspense>
  );
}
