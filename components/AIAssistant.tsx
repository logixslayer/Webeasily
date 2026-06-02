
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { getAIAssistance } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I'm your WebEasily assistant. How can I help you grow your business today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getAIAssistance(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: response || "I'm sorry, I couldn't process that." }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Bot className="w-5 h-5 text-slate-900" />
              </div>
              <span className="font-bold text-white text-sm">AI Consultation</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-white text-slate-900 rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 px-4 py-2.5 rounded-2xl rounded-tl-none border border-white/5 text-xs italic">
                  AI is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-grow bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
        >
          <MessageSquare className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
