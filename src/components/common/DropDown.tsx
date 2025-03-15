import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function Dropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Selecciona una opción"}
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
