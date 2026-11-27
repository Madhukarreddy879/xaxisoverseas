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
      dialog.querySelector<HTMLElement>('[autofocus]')?.focus();
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
        aria-labelledby="counselling-modal-title"
        {...({ closedby: 'any' } as Record<string, string>)}
        className="m-auto max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-md overflow-y-auto rounded-2xl bg-white p-0 text-slate-900 shadow-2xl"
      >
        <div className="relative p-6">
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
          <h1 id="counselling-modal-title" className="pr-10 text-xl font-bold text-navy">
            Book Free UK Counselling
          </h1>
          {prefill?.university && (
            <p className="mt-1 text-sm text-slate-600">Interested in: {prefill.university}</p>
          )}
          <div className="mt-4">
            {open && <LeadCaptureForm key={key} variant="full" prefill={prefill} autoFocusFirst />}
          </div>
        </div>
      </dialog>
    </CounsellingContext.Provider>
  );
}
