
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">About WebEasily</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Simple. Results-driven.<br />
              <span className="text-slate-500">Unapologetically premium.</span>
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-slate-400 font-light leading-relaxed text-center lg:text-left">
              We believe that the digital world shouldn't be complicated. Our mission is to take the complexity out of technology and deliver seamless, high-impact experiences that drive business growth.
            </p>
            <p className="text-xl text-slate-400 font-light leading-relaxed text-center lg:text-left">
              At WebEasily, we combine cutting-edge engineering with sophisticated design to create digital products that don't just look good—they perform. We are your partners in navigating the modern web.
            </p>
            <div className="pt-4 flex gap-12 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-white">99%</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
