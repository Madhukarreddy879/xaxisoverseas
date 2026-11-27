'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import LeadCaptureForm, { Prefill } from './LeadCaptureForm';

interface Ctx {
  openModal: (prefill?: Prefill) => void;
  closeModal: () => void;
}

const CounsellingContext = createContext<Ctx>({ openModal: () => {}, closeModal: () => {} });

export const useCounselling = () => useContext(CounsellingContext);

export function CounsellingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill | undefined>();
  const [key, setKey] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback((p?: Prefill) => {
    setPrefill(p);
    setKey((k) => k + 1);
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  return (
    <CounsellingContext.Provider value={{ openModal, closeModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/70 p-4"
          onClick={closeModal}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="counselling-modal-title"
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full p-1.5 text-slate-500 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 id="counselling-modal-title" className="pr-8 text-xl font-bold text-navy">
              Book Free UK Counselling
            </h2>
            {prefill?.university && (
              <p className="mt-1 text-sm text-slate-600">Interested in: {prefill.university}</p>
            )}
            <div className="mt-4">
              <LeadCaptureForm key={key} variant="full" prefill={prefill} />
            </div>
          </div>
        </div>
      )}
    </CounsellingContext.Provider>
  );
}
