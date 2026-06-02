
import React from 'react';
import { Globe, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-12 md:pt-20 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12 text-center md:text-left">
          <div className="max-w-xs mx-auto md:mx-0">
            <a href="#home" className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <Globe className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">WebEasily</span>
            </a>
            <p className="text-slate-500 font-light leading-relaxed">
              Building digital experiences that work. We specialize in creating high-end websites and marketing strategies for forward-thinking brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h5 className="text-white font-bold mb-6">Agency</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Services</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#services" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Ads</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-white font-bold mb-6">Follow Us</h5>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-center md:text-left">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} WebEasily Agency. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 glass rounded-full text-slate-400 hover:text-white transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
