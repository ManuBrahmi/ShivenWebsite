import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Mic, MicOff, Volume2, Sparkles, CheckCircle, RefreshCw, MessageSquare, AlertCircle } from 'lucide-react';

export const AiPracticeView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'shiven',
      text: "Hello there! I am Shiven, your AI English Practice Companion. What would you like to practice today? You can type your sentence or tap the microphone icon to speak directly to me!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('General Spoken English');
  const [userLevel, setUserLevel] = useState('Intermediate');
  const [enhanceText, setEnhanceText] = useState('');
  const [enhanceResult, setEnhanceResult] = useState<any>(null);
  const [enhancing, setEnhancing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const topics = [
    'General Spoken English',
    'Job Interview Preparation',
    'Restaurant & Coffee Shop',
    'Travel & Hotel Check-in',
    'Public Speaking & Confidence',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Speech Recognition setup
  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your message.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

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

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          topic: selectedTopic,
          userLevel,
          history: messages.map((m) => ({ role: m.sender, content: m.text })),
        }),
      });

      const data = await response.json();
      const aiReplyText = data.text || data.fallback || 'Great effort! Keep practicing every day!';

      const shivenMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'shiven',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, shivenMsg]);
      playTTS(aiReplyText.replace(/💡 Quick Feedback:[\s\S]*?(?=\n\n|\n[A-Z]|$)/g, ''));
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'shiven',
          text: 'Thank you for practicing! Remember: "Practice makes confidence!" What else would you like to discuss?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleEnhance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enhanceText.trim() || enhancing) return;

    setEnhancing(true);
    setEnhanceResult(null);

    try {
      const res = await fetch('/api/ai/enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence: enhanceText }),
      });
      const data = await res.json();
      setEnhanceResult(data);
    } catch (err) {
      console.error('Enhance error:', err);
    } finally {
      setEnhancing(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4648d4] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 flex items-center gap-1.5 w-fit mx-auto md:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-[#4648d4]" />
          Gemini-Powered Voice & Text Tutor
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          Practice Speaking with AI Shiven
        </h1>
        <p className="text-slate-600 text-base mt-1">
          Have real conversations, get polite grammar feedback, and build fluency without any stage fear!
        </p>
      </div>

      {/* Main Grid: Chat Window + Side Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Chat Console */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[650px] overflow-hidden">
          {/* Bar Settings */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Topic:</span>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Level:</span>
              <select
                value={userLevel}
                onChange={(e) => setUserLevel(e.target.value)}
                className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'shiven' && (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#4648d4] to-[#6b38d4] flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0 shadow-xs">
                    S
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span
                      className={`text-[10px] font-bold ${
                        msg.sender === 'user' ? 'text-indigo-100' : 'text-[#4648d4]'
                      }`}
                    >
                      {msg.sender === 'user' ? 'You' : 'Shiven (AI Tutor)'}
                    </span>
                    <span
                      className={`text-[10px] ${
                        msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  <p className="whitespace-pre-line font-medium">{msg.text}</p>

                  {msg.sender === 'shiven' && (
                    <button
                      onClick={() => playTTS(msg.text)}
                      className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#4648d4] hover:text-[#6b38d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Listen to Audio
                    </button>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 items-center text-slate-500 text-xs font-medium">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-[#4648d4] animate-pulse">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Shiven is generating grammar feedback and response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleListening}
              className={`p-3 rounded-xl transition-all cursor-pointer ${
                isListening
                  ? 'bg-rose-600 text-white animate-bounce'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
              title={isListening ? 'Stop listening' : 'Speak into microphone'}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening
                  ? 'Listening... Speak now...'
                  : 'Type your message or response in English...'
              }
              className="flex-grow px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#4648d4] focus:bg-white transition-all text-slate-900 font-medium"
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-gradient-to-r from-[#4648d4] to-[#6b38d4] text-white p-3 rounded-xl hover:shadow-md hover:shadow-indigo-500/20 disabled:opacity-50 transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Right Column: AI Sentence Enhancer Tool */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#4648d4]" />
              AI Sentence Polisher
            </h3>
            <p className="text-slate-600 text-xs mb-4">
              Paste any English sentence below to see natural corrections, fluency score, and advanced synonyms instantly.
            </p>

            <form onSubmit={handleEnhance} className="space-y-3">
              <textarea
                value={enhanceText}
                onChange={(e) => setEnhanceText(e.target.value)}
                placeholder="E.g., I am wanting to go market yesterday..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#4648d4] focus:bg-white"
              />
              <button
                type="submit"
                disabled={!enhanceText.trim() || enhancing}
                className="w-full bg-[#4648d4] hover:bg-[#3b3dbb] text-white py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {enhancing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" /> Check & Enhance Sentence
                  </>
                )}
              </button>
            </form>

            {enhanceResult && (
              <div className="mt-4 p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs space-y-2 animate-in fade-in">
                <div>
                  <span className="font-bold text-[#4648d4]">✨ Polished Sentence:</span>
                  <p className="font-semibold text-slate-900 mt-0.5">"{enhanceResult.corrected}"</p>
                </div>
                <div>
                  <span className="font-bold text-slate-700">💡 Explanation:</span>
                  <p className="text-slate-600">{enhanceResult.explanation}</p>
                </div>
                {enhanceResult.vocabularyTip && (
                  <div>
                    <span className="font-bold text-emerald-700">🌟 Vocabulary Booster:</span>
                    <p className="text-slate-700">{enhanceResult.vocabularyTip}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-6 shadow-md">
            <h4 className="text-base font-bold mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-300" />
              Shiven's Speaking Tip
            </h4>
            <p className="text-xs text-indigo-100 leading-relaxed mb-3">
              "Never worry about making mistakes! Making mistakes is proof that you are trying. Speaks 5 minutes out loud every single day."
            </p>
            <div className="flex items-center gap-2 text-[11px] text-indigo-200 font-semibold">
              <AlertCircle className="w-4 h-4" />
              Tip: Click the mic button to speak naturally!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
