import React from 'react';

interface BrowserButtonProps {
  name: string;
  icon: string;
}

export const BrowserButton: React.FC<BrowserButtonProps> = ({ name, icon }) => {
  const getBrowserIcon = () => {
    switch (icon) {
      case 'chrome':
        return '🟢';
      case 'firefox':
        return '🧡';
      case 'edge':
        return '🔵';
      case 'safari':
        return '🟠';
      default:
        return '🌐';
    }
  };

  return (
    <a
      href="#"
      className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 transform hover:scale-105 active:scale-95"
    >
      <div className="text-4xl mb-3">{getBrowserIcon()}</div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        下载扩展
      </p>
    </a>
  );
};