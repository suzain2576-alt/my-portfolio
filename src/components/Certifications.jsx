import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, BookCheck, Terminal, Database } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 text-xs font-mono mb-3">
            <span>&lt;Certifications /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Credentials &amp; <span className="gradient-text-cyan-purple">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            National standard certifications awarded by premier engineering institutions through NPTEL.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-7 rounded-2xl border border-slate-800/80 hover:border-cyber-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Corner Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified</span>
              </div>

              <div>
                {/* Icon & Issuer */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-500/20 to-electric-500/20 border border-cyber-500/30 text-cyber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cert.title.includes('Python') ? (
                      <Terminal className="w-6 h-6 text-cyber-400" />
                    ) : (
                      <Database className="w-6 h-6 text-electric-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-cyber-400">
                      Completed: {cert.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyber-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                    Competencies Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer / ID */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Credential ID:</span>
                <span className="text-slate-300 font-semibold">{cert.credentialId}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
