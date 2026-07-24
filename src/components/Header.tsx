import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 shadow-xs">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1200px] mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4648d4] to-[#6b38d4] flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-[#4648d4] tracking-tight">
            Learn English with Shiven
          </span>
        </div>
      </div>
    </header>
  );
};

