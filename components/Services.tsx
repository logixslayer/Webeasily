
import React from 'react';
import { Code, Share2, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Bespoke, high-performance websites built with the latest technologies like React, Next.js, and Tailwind CSS."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Management",
    description: "Curated content strategies and active community engagement to amplify your brand's voice across platforms."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-backed SEO and PPC campaigns designed to drive traffic, capture leads, and maximize your ROI."
  },

];

const Services: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-6xl font-bold text-white">Solutions for the next era.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-500 border border-white/5"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-slate-900 transition-colors duration-500 text-white">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
