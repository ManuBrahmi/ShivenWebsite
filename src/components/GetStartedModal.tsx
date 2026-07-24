import React, { useState } from 'react';
import { TabType } from '../types';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface GetStartedModalProps {
  onClose: () => void;
  onNavigateToTab: (tab: TabType) => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  onClose,
  onNavigateToTab,
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('spoken');
  const [selectedLevel, setSelectedLevel] = useState<string>('intermediate');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const goals = [
    { id: 'spoken', label: 'Speak Fluent English with Confidence', desc: 'Overcome hesitation & think directly in English' },
    { id: 'interview', label: 'Job Interview & Career English', desc: 'Master professional self-introductions & workplace vocabulary' },
    { id: 'grammar', label: 'Grammar & Sentence Structure', desc: 'Fix common tenses, prepositions, and grammatical errors' },
    { id: 'pronunciation', label: 'Pronunciation & Accent Neutralization', desc: 'Clear phonics, silent letters, and intonation' },
  ];

  const levels = [
    { id: 'beginner', label: 'Beginner', desc: 'I struggle to frame basic sentences' },
    { id: 'intermediate', label: 'Intermediate', desc: 'I understand English well but hesitate while speaking' },
    { id: 'advanced', label: 'Advanced', desc: 'I speak well but want advanced vocabulary & executive polish' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-white/60 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4648d4] flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Start Your English Learning Journey
              </h2>
              <p className="text-slate-600 text-xs md:text-sm mt-1">
                Tell us your main goal so Shiven can personalize your learning path!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Goal Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  1. Select Your Primary Goal
                </label>
                <div className="space-y-2">
                  {goals.map((g) => (
                    <div
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        selectedGoal === g.id
                          ? 'bg-indigo-50/80 border-[#4648d4] ring-2 ring-[#4648d4]/10'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{g.label}</span>
                        {selectedGoal === g.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#4648d4]" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{g.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  2. Select Your Current English Level
                </label>
                <div className="space-y-2">
                  {levels.map((lvl) => (
                    <div
                      key={lvl.id}
                      onClick={() => setSelectedLevel(lvl.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        selectedLevel === lvl.id
                          ? 'bg-indigo-50/80 border-[#4648d4] ring-2 ring-[#4648d4]/10'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{lvl.label}</span>
                        {selectedLevel === lvl.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#4648d4]" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{lvl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
              >
                Create My Personalized Roadmap →
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 animate-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Your Roadmap is Ready!
            </h2>
            <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
              Based on your goal, we recommend starting with practical speaking drills and Shiven's AI practice session.
            </p>

            <div className="space-y-3 max-w-sm mx-auto">
              <button
                onClick={() => {
                  onNavigateToTab('ai-practice');
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Start AI Practice Session
              </button>

              <button
                onClick={() => {
                  onNavigateToTab('lessons');
                  onClose();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Browse Course Lessons <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
