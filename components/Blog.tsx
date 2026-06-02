
import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Future of Web Design in 2025",
    excerpt: "Exploring the intersection of minimalism, AI-driven layouts, and extreme performance benchmarks.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    date: "May 12, 2024"
  },
  {
    title: "Maximizing ROI with Digital Marketing",
    excerpt: "A deep dive into data-backed strategies that turn passive visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=600",
    date: "April 28, 2024"
  },
  {
    title: "Why Performance is the New SEO",
    excerpt: "How site speed directly impacts your bottom line and search engine rankings in the modern era.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    date: "April 15, 2024"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">Insights</h2>
          <h3 className="text-3xl md:text-6xl font-bold text-white">Latest from the agency.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-8 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 glass text-[10px] font-bold text-white uppercase tracking-widest rounded-full">Article</span>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{post.date}</p>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-300 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-slate-400 font-light leading-relaxed mb-6 line-clamp-2 text-sm">
                {post.excerpt}
              </p>
              <a href="#" className="inline-flex items-center space-x-2 text-white font-semibold text-sm group-hover:space-x-4 transition-all">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
