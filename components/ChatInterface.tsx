import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Terminal, Activity, Zap, Search, BrainCircuit } from 'lucide-react';
import { chatWithAgent, AgentResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'agent';
  text: string;
}

const THINKING_STEPS = [
  "Parsing Contextual Schema...",
  "Traversing Living Loop Nodes...",
  "Retrieving Governance Metadata...",
  "Synthesizing Expert Recommendation...",
  "Validating Execution Path..."
];

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'agent', 
      text: 'Welcome to ContextOS. I am your DataGol Deep Expert. I can explain our architecture, the Living Loop methodology, or how we solve specific industry data silos. Where shall we begin?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([
    "Explain the Living Loop", 
    "How does Unify handle silos?", 
    "Show me the Verify audit logic"
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let interval: number;
    if (isTyping) {
      interval = window.setInterval(() => {
        setThinkingStep((prev) => (prev + 1) % THINKING_STEPS.length);
      }, 800);
    } else {
      setThinkingStep(0);
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setSuggestions([]); 
    setIsTyping(true);

    const result: AgentResponse = await chatWithAgent(textToSend);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'agent', text: result.answer }]);
    setSuggestions(result.suggestions);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto glass-panel rounded-xl overflow-hidden flex flex-col h-[500px] border-t border-brand-500/20 shadow-2xl shadow-brand-500/10">
      {/* Header */}
      <div className="bg-dark-950/50 p-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-300">
          <BrainCircuit size={16} className="animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase">DataGol Deep Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">Core Ready</span>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
            <div 
              className={`max-w-[85%] p-3 rounded-lg relative ${
                msg.role === 'user' 
                  ? 'bg-brand-600/20 border border-brand-500/30 text-white shadow-inner' 
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-300'
              }`}
            >
              {msg.role === 'agent' && <Terminal size={12} className="mb-2 text-brand-400 opacity-50" />}
              <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-slate-900/80 border border-brand-500/30 p-4 rounded-lg flex flex-col gap-2 min-w-[200px] shadow-2xl">
              <div className="flex items-center gap-2 text-brand-400">
                <Activity size={14} className="animate-spin-slow" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Expert Reasoning</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                 <Search size={10} />
                 <span>{THINKING_STEPS[thinkingStep]}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-500 h-full transition-all duration-500" 
                  style={{ width: `${((thinkingStep + 1) / THINKING_STEPS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggestions Overlay */}
      {!isTyping && suggestions.length > 0 && (
        <div className="px-3 py-2 flex flex-wrap gap-2 animate-fade-in bg-dark-950/20">
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(s)}
              className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] text-brand-300 hover:bg-brand-600/20 hover:border-brand-500/50 transition-all flex items-center gap-1.5 group"
            >
              <Zap size={10} className="group-hover:text-brand-400 transition-colors" />
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-3 bg-dark-950/80 border-t border-white/10 relative">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask the expert about DataGol architecture..."
            className="w-full bg-slate-900/50 text-white text-sm rounded-md border border-slate-700 pl-3 pr-10 py-3 focus:outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600"
          />
          <button 
            onClick={() => handleSend()}
            disabled={isTyping || !input.trim()}
            className={`absolute right-2 top-2 p-1.5 rounded-md transition-all ${
              !input.trim() || isTyping ? 'text-slate-600' : 'text-brand-400 hover:text-white hover:bg-brand-500/20'
            }`}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};