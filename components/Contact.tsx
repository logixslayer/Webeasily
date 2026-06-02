
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="py-16 md:py-32 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Contact Us</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">Let's build something great.</h3>

        <div className="glass p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/5 text-left">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Received!</h4>
              <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-white font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all resize-none"
                ></textarea>
              </div>
              <button
                disabled={status === 'sending'}
                className="w-full py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
