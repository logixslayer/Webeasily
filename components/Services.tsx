
import React from 'react';
import { Code, Share2, BarChart, Palette, PenTool, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Bespoke, high-performance websites built with the latest technologies like React, Next.js, and Tailwind CSS.",
    tags: ["React & Next.js", "Headless CMS", "Performance Audit", "API Integrations"]
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media",
    description: "Curated content strategies and active community engagement to amplify your brand's voice across platforms.",
    tags: ["Content Creation", "Growth Strategy", "Community Management", "Paid Ads"]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-backed SEO and PPC campaigns designed to drive traffic, capture leads, and maximize your ROI.",
    tags: ["SEO Optimization", "PPC Campaigns", "Email Marketing", "Conversion Rate"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Premium, intuitive user interfaces and user experiences that resonate with target audiences and drive conversions.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Crafting cohesive visual identities, brand guidelines, logo design, and positioning strategies to differentiate your brand.",
    tags: ["Logo Design", "Brand Voice", "Visual Assets", "Market Positioning"]
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce",
    description: "Building conversion-optimized, secure online stores with Shopify, WooCommerce, or custom headless checkouts.",
    tags: ["Shopify & Custom", "Payment Gateways", "Inventory Sync", "Cart Optimization"]
  }
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
              className="group p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-500 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-slate-900 transition-colors duration-500 text-white">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {service.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-[10px] font-semibold tracking-wider uppercase bg-white/5 border border-white/5 text-slate-400 px-2.5 py-1 rounded-full group-hover:border-white/10 group-hover:text-slate-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

