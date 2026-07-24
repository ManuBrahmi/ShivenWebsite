import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { Award, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles, Flame } from 'lucide-react';

export const QuizView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setIsAnswered(false);
    setQuizComplete(false);
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-[900px] mx-auto min-h-screen flex flex-col justify-center">
      {/* Quiz Title */}
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4648d4] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 inline-flex items-center gap-1">
          <Award className="w-3.5 h-3.5" /> Interactive Knowledge Check
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          Daily English Master Quiz
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Test your grammar, vocabulary, spoken English, and pronunciation skills.
        </p>
      </div>

      {!quizComplete ? (
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Progress & Stats Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-400">
                QUESTION {currentIndex + 1} OF {quizQuestions.length}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4648d4]">
                {currentQ.category}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-600 font-extrabold text-sm">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{streak} Streak</span>
              </div>
              <div className="text-sm font-extrabold text-[#4648d4]">
                Score: {score}/{quizQuestions.length}
              </div>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";
              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-500/20";
                } else if (idx === selectedOption) {
                  btnStyle = "bg-rose-50 border-rose-500 text-rose-900 font-bold";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-sm md:text-base font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className={`p-5 rounded-2xl text-xs md:text-sm leading-relaxed mb-6 animate-in fade-in ${
              selectedOption === currentQ.correctIndex
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                : 'bg-indigo-50 border border-indigo-200 text-slate-800'
            }`}>
              <span className="font-extrabold block mb-1">
                {selectedOption === currentQ.correctIndex ? '🎉 Excellent!' : '💡 Explanation:'}
              </span>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Action Footer */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white font-bold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
              >
                {currentIndex + 1 < quizQuestions.length ? 'Next Question →' : 'View Final Score 🎉'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Card */
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg text-center animate-in zoom-in duration-300">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#4648d4] to-[#6b38d4] flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-indigo-500/25">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Quiz Completed!</h2>
          <p className="text-slate-600 text-base mb-6">
            You scored <span className="font-extrabold text-[#4648d4]">{score}</span> out of{' '}
            <span className="font-extrabold">{quizQuestions.length}</span> questions correctly!
          </p>

          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 max-w-md mx-auto mb-8 text-xs text-slate-700 leading-relaxed">
            {score === quizQuestions.length ? (
              <p className="font-bold text-emerald-700">🌟 Perfect Score! You have an outstanding command of English grammar and vocabulary!</p>
            ) : score >= 3 ? (
              <p className="font-semibold text-[#4648d4]">Great job! Keep reviewing Shiven's daily tips to reach complete mastery!</p>
            ) : (
              <p className="font-semibold text-slate-800">Good attempt! Explore the structured lessons tab to build your core grammar skills.</p>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white font-bold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      )}
    </div>
  );
};
