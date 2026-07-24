import React, { useState } from 'react';
import { LessonItem } from '../types';
import { lessonsData } from '../data/lessonsData';
import { Volume2, CheckCircle2, XCircle, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export const LessonsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLesson, setSelectedLesson] = useState<LessonItem>(lessonsData[0]);
  const [quizSelection, setQuizSelection] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const categories = ['All', 'Spoken English', 'Grammar', 'Pronunciation', 'Vocabulary'];

  const filteredLessons = selectedCategory === 'All'
    ? lessonsData
    : lessonsData.filter(l => l.category === selectedCategory);

  const playSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleLessonChange = (lesson: LessonItem) => {
    setSelectedLesson(lesson);
    setQuizSelection(null);
    setShowResult(false);
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Category Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4648d4] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          Practical Course Catalog
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          Structured English Lessons
        </h1>
        <p className="text-slate-600 text-base mt-1">
          Master spoken English, grammar, vocabulary, and pronunciation through step-by-step practical guides.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white shadow-md shadow-indigo-500/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Lessons Selector & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Lesson Cards List */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            Available Lessons ({filteredLessons.length})
          </h2>
          
          {filteredLessons.map((lesson) => {
            const isSelected = selectedLesson.id === lesson.id;
            return (
              <div
                key={lesson.id}
                onClick={() => handleLessonChange(lesson)}
                className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#4648d4] shadow-lg ring-2 ring-[#4648d4]/10'
                    : 'glass-card hover:bg-white border-slate-200 hover:border-indigo-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4648d4]">
                    {lesson.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {lesson.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                  {lesson.title}
                </h3>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#4648d4]">
                  <span>{lesson.level} Level</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Start Lesson <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Lesson Reader */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#4648d4]">
                  {selectedLesson.category} • {selectedLesson.level}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                  {selectedLesson.title}
                </h2>
              </div>
              <button
                onClick={() => playSpeech(selectedLesson.title)}
                className="p-3 rounded-full bg-indigo-50 text-[#4648d4] hover:bg-indigo-100 transition-colors cursor-pointer"
                title="Listen to lesson title pronunciation"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {selectedLesson.description}
            </p>

            {/* Key Takeaways */}
            <div className="bg-indigo-50/60 rounded-2xl p-5 mb-6 border border-indigo-100">
              <h4 className="text-sm font-bold text-[#4648d4] flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4" />
                Key Takeaways
              </h4>
              <ul className="space-y-2">
                {selectedLesson.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Examples */}
            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Practical Usage & Examples
              </h4>
              {selectedLesson.examples.map((ex, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  {ex.incorrect && (
                    <div className="flex items-start gap-2 text-rose-600 text-sm mb-2">
                      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Avoid saying: </span>
                        <span className="line-through">{ex.incorrect}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 text-slate-900 text-sm font-semibold mb-2">
                    <div className="flex items-start gap-2 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                      <div>
                        <span className="font-bold">Correct Natural Way: </span>
                        <span>"{ex.correct}"</span>
                      </div>
                    </div>
                    <button
                      onClick={() => playSpeech(ex.audioText)}
                      className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                      title="Audio Pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 pl-6 border-l-2 border-indigo-200 mt-2">
                    💡 <span className="font-semibold">Why?</span> {ex.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Practice Exercise */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
                <BookOpen className="w-4 h-4" />
                Interactive Lesson Check
              </div>
              <p className="text-base font-semibold mb-4">
                {selectedLesson.practiceExercise.prompt}
              </p>

              <div className="space-y-2 mb-4">
                {selectedLesson.practiceExercise.options.map((opt, idx) => {
                  let btnClass = "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700";
                  if (showResult) {
                    if (idx === selectedLesson.practiceExercise.correctAnswer) {
                      btnClass = "bg-emerald-600 text-white border-emerald-500 font-bold";
                    } else if (idx === quizSelection) {
                      btnClass = "bg-rose-600 text-white border-rose-500";
                    }
                  } else if (quizSelection === idx) {
                    btnClass = "bg-indigo-600 text-white border-indigo-500";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setQuizSelection(idx);
                        setShowResult(true);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all cursor-pointer ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                  quizSelection === selectedLesson.practiceExercise.correctAnswer
                    ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/80 border border-rose-500 text-rose-200'
                }`}>
                  <p className="font-bold mb-1">
                    {quizSelection === selectedLesson.practiceExercise.correctAnswer
                      ? '🎉 Excellent job! That is correct.'
                      : '💡 Not quite right, but great attempt!'}
                  </p>
                  <p>{selectedLesson.practiceExercise.explanation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
