
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-full h-full object-cover brightness-50"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 glass">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Digital Growth Studio</span>
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight animate-fade-in">
          We build <span className="text-gradient">powerful websites</span> and grow brands.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-delayed">
          WebEasily helps modern businesses thrive in the digital landscape with high-performance web solutions and strategic marketing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-more-delayed">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:scale-105 hover:bg-slate-100 transition-all flex items-center justify-center"
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
