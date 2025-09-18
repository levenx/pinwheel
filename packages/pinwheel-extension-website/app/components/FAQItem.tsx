import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-500">
      <button
        className="w-full p-6 text-left font-semibold text-lg flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span
          className={`transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>
      <div
        className="bg-white dark:bg-slate-800 overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-6 pt-0 text-slate-600 dark:text-slate-300">
          {answer}
        </div>
      </div>
    </div>
  );
};