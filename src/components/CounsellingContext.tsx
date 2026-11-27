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
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback((p?: Prefill) => {
    setPrefill(p);
    setKey((k) => k + 1);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    dialogRef.current?.close();
    setOpen(false);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => {
        dialog.querySelector<HTMLElement>('input[name="name"]')?.focus();
      });
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Progressive-enhancement fallback for browsers without native closedby="any" (e.g. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      setOpen(false);
    };
    dialog.addEventListener('close', handleClose);

    if ('closedBy' in HTMLDialogElement.prototype) {
      return () => dialog.removeEventListener('close', handleClose);
    }

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    const onDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', onDown);
    dialog.addEventListener('pointerup', onUp);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('pointerdown', onDown);
      dialog.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <CounsellingContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* Native <dialog> opened via showModal() handles role, aria-modal, focus containment, Esc, and focus return */}
      <dialog
        ref={dialogRef}
        aria-labelledby={open ? 'counselling-modal-title' : undefined}
        {...({ closedby: 'any' } as Record<string, string>)}
        className="m-auto max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-0 text-slate-900 shadow-2xl"
      >
        {open && (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h1 id="counselling-modal-title" className="text-xl font-bold text-navy">
                  Book Free UK Counselling
                </h1>
                <p className="mt-0.5 text-sm text-slate-600">
                  {prefill?.university
                    ? `Interested in ${prefill.university} — get a free eligibility & scholarship check.`
                    : 'Free 1-on-1 profile review with our Hyderabad UK counsellors.'}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="-mr-1 -mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-navy"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4">
              <LeadCaptureForm key={key} variant="full" prefill={prefill} />
            </div>
          </div>
        )}
      </dialog>
    </CounsellingContext.Provider>
  );
}
