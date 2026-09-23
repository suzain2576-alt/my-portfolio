import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen, Star } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 text-xs font-mono mb-3">
            <span>&lt;Education /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Background &amp; <span className="gradient-text-cyan-purple">Foundations</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            Structured foundation in Information Science &amp; Engineering, pre-university mathematics, and physical sciences.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-cyber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Score */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyber-500/15 border border-cyber-500/30 text-cyber-400 font-bold">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyber-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Score Indicator Box */}
                <div className="p-4 rounded-xl bg-slate-800/50 dark:bg-slate-900/60 border border-slate-700/60 mb-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">Academic Score</span>
                    <div className="text-2xl font-extrabold text-white font-mono flex items-center gap-1.5">
                      {item.score}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-400 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-1 mb-1">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  {item.affiliations}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status:</span>
                <span className="text-emerald-400 font-medium">{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
