import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award, Terminal } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 text-xs font-mono mb-3">
            <span>&lt;Experience &amp; Activities /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic &amp; <span className="gradient-text-cyan-purple">Practical Milestones</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            Hands-on coursework, algorithmic problem solving, and collegiate engineering initiatives.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing center line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyber-500 via-electric-500 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Center Beacon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyber-500 shadow-neon-cyan flex items-center justify-center text-cyber-400 z-10 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyber-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyber-500/40 transition-all duration-300 group">
                      
                      {/* Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 font-semibold">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyber-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Org */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-electric-400 mt-0.5 mb-4">
                        {item.organization}
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2.5">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
