import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-10">
      <div className="p-4 rounded-lg shadow-lg  overflow-auto">
        <button
          className="absolute top-4 right-10 text-emerald-600 hover:text-emerald-300 items-center 
          justify-center flex bg-white dark:bg-gray-950 rounded-full p-2 transition-colors duration-300  pl-4 pr-4"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}
