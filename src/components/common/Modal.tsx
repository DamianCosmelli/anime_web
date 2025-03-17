import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg relative m-2 w-3/4 h-9/10 overflow-auto">
        <button
          className="absolute top-2 right-2 text-black hover:text-gray-700"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
}
