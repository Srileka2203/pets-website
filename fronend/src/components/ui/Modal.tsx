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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#172B4D]/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-[24px] border border-[#F4D8CE] bg-white shadow-lg ${className}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#F4D8CE] px-6 py-4">
          {title && (
            <h2 className="text-lg font-semibold text-[#172B4D]">
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-2 text-[#68778D] transition-colors hover:bg-[#FFF0F5] hover:text-[#FF80AB] focus:outline-none focus:ring-2 focus:ring-[#FFD0DE]"
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