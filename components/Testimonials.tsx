
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "WebEasily transformed our online presence. Their attention to detail and professional approach is unmatched. The speed of the new site is incredible.",
    author: "Sarah Jenkins",
    role: "CEO of TechFlow"
  },
  {
    quote: "The results speak for themselves. Our conversion rates increased by 40% after the relaunch. They are more than an agency; they are strategic partners.",
    author: "Elena Rodriguez",
    role: "Marketing Director at Solari"
  },
  {
    quote: "Fast delivery and stunning design. They made the entire process incredibly easy for us, handling everything from branding to deployment.",
    author: "Mark Thompson",
    role: "Founder of UrbanEats"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <Quote className="w-10 h-10 md:w-12 md:h-12 text-white/10 mx-auto mb-6" />
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Client Feedback</h2>
          <h3 className="text-3xl md:text-6xl font-bold text-white">What they say about us.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-[40px] glass border border-white/5 flex flex-col h-full">
              <p className="text-xl text-slate-200 font-light leading-relaxed italic mb-10 flex-grow">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">{t.author}</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
