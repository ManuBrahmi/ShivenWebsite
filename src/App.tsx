import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Hero & CTA Cards Section */}
      <HeroSection />

      {/* Footer with Room at Bottom */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 mt-auto border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4648d4] to-[#6b38d4] flex items-center justify-center text-white font-extrabold text-sm">
              S
            </div>
            <span className="text-slate-200 font-bold text-sm">
              Learn English with Shiven
            </span>
          </div>

          <p className="text-center sm:text-right text-slate-400">
            © {new Date().getFullYear()} Learn English with Shiven. Helping students speak English with confidence.
          </p>
        </div>
      </footer>
    </div>
  );
}

