"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute inset-0 z-1000 bg-white opacity-[.6]">
      <dialog
        ref={dialogRef}
        className="relative m-auto flex h-auto max-h-125 w-80/100 max-w-125 items-center justify-center rounded-xl border-none bg-white p-5"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="close-button absolute top-2.5 right-2.5 flex h-12 w-12 cursor-pointer items-center justify-center border-15 border-none bg-transparent text-2xl font-medium after:text-black after:content-['x']"
        />
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
