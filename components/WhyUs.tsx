
import React from 'react';
import { Palette, FastForward, Layers, Target } from 'lucide-react';

const reasons = [
  {
    icon: <Palette className="w-6 h-6 text-slate-400" />,
    title: "Clean Design",
    description: "Aesthetics meet functionality. We believe in minimal interfaces that let your content shine."
  },
  {
    icon: <FastForward className="w-6 h-6 text-slate-400" />,
    title: "Fast Delivery",
    description: "We work in agile sprints to get your project from concept to launch in record time."
  },
  {
    icon: <Layers className="w-6 h-6 text-slate-400" />,
    title: "Scalable Solutions",
    description: "Architecture built for growth. Our systems expand seamlessly as your business scales."
  },
  {
    icon: <Target className="w-6 h-6 text-slate-400" />,
    title: "Business Focused",
    description: "We don't just build websites; we build business tools that achieve specific conversion goals."
  }
];

const WhyUs: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Why WebEasily</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Built for businesses that demand excellence.</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-10">
              Our approach is rooted in understanding your business objectives first, technology second.
            </p>
            <a href="#contact" className="text-white font-semibold border-b border-white/20 pb-1 hover:border-white transition-all inline-block">
              Learn more about our process
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
