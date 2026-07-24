import React from 'react';
import { socialChannels } from '../data/socialData';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const instagram = socialChannels.find((c) => c.id === 'instagram') || socialChannels[0];
  const facebook = socialChannels.find((c) => c.id === 'facebook') || socialChannels[1];
  const youtube = socialChannels.find((c) => c.id === 'youtube') || socialChannels[2];

  return (
    <main className="flex-grow hero-bg-gradient min-h-[calc(100vh-80px)] flex flex-col md:flex-row pt-20 pb-8 px-4 md:px-8 overflow-hidden max-w-[1400px] mx-auto w-full gap-6 md:gap-8">
      {/* Left Column: Full Length Portrait */}
      <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 min-h-[450px] md:min-h-[calc(100vh-140px)]">
        {/* Decorative blur glows */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl z-0 pointer-events-none" />
        
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Hjt4Kw-grNCdnU1KLq6V1Tp3bBqKosLQo_aNqq7BB_q6wiPpoIpVJYAABqYFjSNBNpJYeyt-HlR5e3I6CSEclZh9m4eaA_1gh8sTV_nawY7_YsGbF3i6ZXgbXNzbgacURDOY26bD-1DxX_-HRaiDVTBjtXXWxeNY_LzweHB4i59k_pnpPG7skSbFDRug6nfuFXOJba4P6FLT9mELY7ZKIB0e4ofkepHE9I8qRTrEXCBJQK8tDvJCpaOcrLXZqlSFXldtTXlt2wE"
          alt="Portrait of Shiven"
          className="w-full h-full object-cover object-top relative z-10 filter drop-shadow-xl transition-transform duration-700 hover:scale-[1.01]"
        />
      </div>

      {/* Right Column: Title + Equally Distributed CTA Rows */}
      <div className="w-full md:w-[55%] lg:w-[58%] flex flex-col justify-between py-2 min-h-[calc(100vh-140px)]">
        {/* Top Header Information */}
        <div className="mb-6 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#4648d4] font-extrabold text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4648d4]" />
            Learn English with Shiven
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
            Speak English with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4648d4] to-[#6b38d4]">
              Confidence
            </span>
          </h1>

          <p className="text-slate-600 text-base lg:text-lg font-normal max-w-2xl leading-relaxed">
            Helping students improve spoken English, grammar, vocabulary, pronunciation, and confidence through simple and practical lessons.
          </p>
        </div>

        {/* 3 Social CTA Cards Consuming Full Vertical Length Equally */}
        <div className="flex-grow flex flex-col gap-4 justify-between my-2">
          {/* Instagram Card Row */}
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card rounded-3xl p-5 lg:p-6 flex items-center justify-between group hover:-translate-y-1 hover:shadow-xl hover:border-pink-300/90 transition-all duration-300 cursor-pointer border border-slate-200/90 min-h-[90px] no-underline"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex flex-shrink-0 items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-3xl">photo_camera</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-0.5 group-hover:text-pink-600 transition-colors">
                  Instagram
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  Daily English Tips
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#4648d4] group-hover:bg-[#4648d4] group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* Facebook Card Row */}
          <a
            href={facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card rounded-3xl p-5 lg:p-6 flex items-center justify-between group hover:-translate-y-1 hover:shadow-xl hover:border-blue-300/90 transition-all duration-300 cursor-pointer border border-slate-200/90 min-h-[90px] no-underline"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-600 flex flex-shrink-0 items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">
                  Facebook
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  Community Updates
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#4648d4] group-hover:bg-[#4648d4] group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>

          {/* YouTube Card Row */}
          <a
            href={youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glass-card rounded-3xl p-5 lg:p-6 flex items-center justify-between group hover:-translate-y-1 hover:shadow-xl hover:border-red-300/90 transition-all duration-300 cursor-pointer border border-slate-200/90 min-h-[90px] no-underline"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-red-600 flex flex-shrink-0 items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-3xl">play_arrow</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-0.5 group-hover:text-red-600 transition-colors">
                  YouTube
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  Free Video Lessons
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#4648d4] group-hover:bg-[#4648d4] group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

