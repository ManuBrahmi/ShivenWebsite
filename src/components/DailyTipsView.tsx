import React, { useState } from 'react';
import { dailyTips } from '../data/tipsData';
import { Lightbulb, Volume2, CheckCircle2, XCircle, Sparkles, BookOpen, Share2 } from 'lucide-react';

export const DailyTipsView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const playSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleShare = (title: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Learn English with Shiven Daily Tip: "${title}"`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-[1000px] mx-auto min-h-screen">
      {/* Title */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4648d4] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 inline-flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-[#4648d4]" /> Daily Fluency Hacks
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          Daily English Micro-Lessons
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Bite-sized grammar hacks, phrasal verbs, pronunciation guides, and natural phrases updated daily.
        </p>
      </div>

      {/* Grid of Tip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dailyTips.map((tip) => (
          <div
            key={tip.id}
            className="glass-card rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-300 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-indigo-50 text-[#4648d4]">
                  {tip.category}
                </span>
                <span className="text-xs font-medium text-slate-400">{tip.date}</span>
              </div>

              {/* Title & Audio */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {tip.title}
                </h3>
                <button
                  onClick={() => playSpeech(tip.audioText)}
                  className="p-2 rounded-xl bg-indigo-50 text-[#4648d4] hover:bg-indigo-100 transition-colors flex-shrink-0 cursor-pointer"
                  title="Listen to audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Wrong vs Correct Comparison */}
              <div className="space-y-2 mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {tip.wrongUsage && (
                  <div className="flex items-center gap-2 text-rose-600 text-xs font-medium">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="line-through">{tip.wrongUsage}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-emerald-700 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                  <span>{tip.correctUsage}</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                💡 <span className="font-semibold text-slate-800">Rule:</span> {tip.meaning}
              </p>

              {/* Example */}
              <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800">
                <span className="font-bold text-[#4648d4]">Example Sentence:</span>
                <p className="italic mt-0.5 text-slate-700">"{tip.exampleSentence}"</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-[#4648d4]">
                <Sparkles className="w-3.5 h-3.5" /> Practice Out Loud
              </span>
              <button
                onClick={() => handleShare(tip.title, tip.id)}
                className="flex items-center gap-1 hover:text-[#4648d4] transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedId === tip.id ? 'Copied!' : 'Share Tip'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
