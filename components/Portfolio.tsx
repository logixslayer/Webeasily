
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Creek Cafe",
    description: "A premium digital experience for a modern cafe, featuring artisanal aesthetics and seamless information flow.",
    image: "https://images.unsplash.com/photo-1501339817302-ee4b642e13ad?auto=format&fit=crop&q=80&w=800",
    category: "Hospitality",
    link: "https://creek-cafe.netlify.app/"
  },
  {
    title: "Dr. Ramya's Clinic",
    description: "A professional healthcare platform designed to build trust and provide clear medical information for patients.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    category: "Healthcare",
    link: "https://dr-ramya-clinic.web.app/"
  },
  {
    title: "Navodaya Coaching",
    description: "An educational gateway focused on academic excellence and structured learning resources.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    category: "Education",
    link: "https://navodaya-coaching-c2860.web.app"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-20 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-6xl font-bold text-white leading-tight">Projects that define our standard.</h3>
          </div>
          <button className="text-white font-semibold border-b border-white/20 pb-1 hover:border-white transition-all h-fit">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-slate-900">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white font-semibold group/btn w-fit"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
