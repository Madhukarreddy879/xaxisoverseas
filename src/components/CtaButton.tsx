'use client';

import { useCounselling } from './CounsellingContext';
import type { Prefill } from './LeadCaptureForm';

export default function CtaButton({
  children = 'Book Free Counselling',
  className = 'rounded-lg bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark',
  source = 'cta',
  prefill,
}: {
  children?: React.ReactNode;
  className?: string;
  source?: string;
  prefill?: Prefill;
}) {
  const { openModal } = useCounselling();
  return (
    <button type="button" onClick={() => openModal({ source, ...prefill })} className={className}>
      {children}
    </button>
  );
}
