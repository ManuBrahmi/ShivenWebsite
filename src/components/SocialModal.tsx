import React from 'react';
import { SocialChannel } from '../types';
import { X, ExternalLink, Heart, ThumbsUp, Eye, Sparkles, Volume2 } from 'lucide-react';

interface SocialModalProps {
  channel: SocialChannel | null;
  onClose: () => void;
}

export const SocialModal: React.FC<SocialModalProps> = ({ channel, onClose }) => {
  if (!channel) return null;

  const playTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/60">
        {/* Header */}
        <div className={`p-6 text-white bg-gradient-to-r ${channel.bgGradient} flex justify-between items-center relative overflow-hidden`}>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl border border-white/30">
              <span className="material-symbols-outlined text-3xl">{channel.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">{channel.title} Channel</h2>
              <p className="text-white/90 text-sm font-medium">{channel.handle} • {channel.followers}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer relative z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtitle Bar */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Curated Content & Recent Posts
          </span>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#4648d4] hover:underline flex items-center gap-1"
          >
            Visit Official Channel <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow">
          {channel.recentPosts.map((post, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-[#4648d4]">
                  {post.type}
                </span>
                <span className="text-xs text-slate-400 font-medium">{post.time}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
                <span>{post.title}</span>
                <button
                  onClick={() => playTTS(`${post.title}. ${post.description}`)}
                  className="p-1.5 rounded-lg bg-indigo-50 text-[#4648d4] hover:bg-indigo-100 transition-colors cursor-pointer"
                  title="Listen to pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </h3>

              <p className="text-slate-600 text-sm whitespace-pre-line leading-relaxed mb-4">
                {post.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  {channel.id === 'instagram' && (
                    <span className="flex items-center gap-1 text-pink-600 font-semibold">
                      <Heart className="w-4 h-4 fill-pink-600" /> {post.likes} Likes
                    </span>
                  )}
                  {channel.id === 'facebook' && (
                    <span className="flex items-center gap-1 text-blue-600 font-semibold">
                      <ThumbsUp className="w-4 h-4" /> {post.likes} Reactions
                    </span>
                  )}
                  {channel.id === 'youtube' && (
                    <span className="flex items-center gap-1 text-red-600 font-semibold">
                      <Eye className="w-4 h-4" /> {post.likes} Views
                    </span>
                  )}
                </div>

                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#4648d4] hover:text-[#6b38d4] flex items-center gap-1"
                >
                  View Post <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Join thousands of active English learners on {channel.title}!
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
