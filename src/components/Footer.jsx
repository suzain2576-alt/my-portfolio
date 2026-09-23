import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-cyber-500/20 border border-cyber-500/40 text-cyber-400 font-mono font-bold flex items-center justify-center text-sm">
                &lt;S/&gt;
              </span>
              <span className="font-bold text-base text-white">
                Mohammed Suzain Khan
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Information Science &amp; Engineering Undergrad • Adichunchanagiri Institute of Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-400 hover:border-cyber-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-400 hover:border-cyber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-400 hover:border-cyber-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 hover:bg-cyber-500 hover:text-slate-950 transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2 text-center">
          <div>
            © {new Date().getFullYear()} Mohammed Suzain Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with React, Tailwind CSS &amp; Framer Motion</span>
            <Sparkles className="w-3 h-3 text-cyber-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
