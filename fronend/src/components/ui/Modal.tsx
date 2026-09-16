"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-lg bg-white shadow-lg ${className}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
}