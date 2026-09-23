import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Terminal as TerminalIcon,
  Code,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = personalInfo.roles;

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Beacon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 dark:bg-slate-900/80 border border-cyber-500/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                {personalInfo.availability}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h2 className="text-base sm:text-lg font-mono text-slate-400 mb-2 flex items-center gap-2">
              <span className="text-cyber-400">👋</span> Hello world, I am
            </h2>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
              Mohammed <span className="gradient-text-cyan-purple">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Dynamic Typewriter Subheadline */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-lg sm:text-2xl font-mono text-cyber-400 font-semibold">
                &gt; {currentText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Undergraduate in <strong className="text-slate-900 dark:text-white font-semibold">Information Science and Engineering</strong> at <span className="text-cyber-500 font-medium">{personalInfo.college}</span> with an <strong className="text-emerald-400">8.8 CGPA</strong>. Building software at the intersection of robust Java/SQL systems, algorithms, and sleek web experiences.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-500 to-cyan-400 hover:from-cyber-400 hover:to-cyan-300 text-slate-950 font-bold text-sm shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyber-400/60 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 text-cyber-400" />
                <span>Resume CV</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-cyber-400 font-medium text-sm transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Channels Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyber-400 hover:border-cyber-400 transition-all hover:scale-110"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyber-400 hover:border-cyber-400 transition-all hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyber-400 hover:border-cyber-400 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  aria-label="Call Direct"
                  className="p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyber-400 hover:border-cyber-400 transition-all hover:scale-110"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Futuristic Terminal Card & Snapshot (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow backdrop behind terminal */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyber-500/20 to-electric-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Terminal Frame */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                {/* Window Topbar */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <TerminalIcon className="w-3 h-3 text-cyber-400" />
                    <span>suzain@ait-ise: ~</span>
                  </div>
                  <div className="text-[10px] text-slate-400">zsh</div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 space-y-3.5 text-slate-300">
                  <div>
                    <span className="text-cyber-400 font-semibold">suzain@portfolio</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-electric-400">~</span>
                    <span className="text-slate-400">$</span> cat profile.json
                  </div>

                  <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800/80 text-[11.5px] leading-relaxed">
                    <span className="text-slate-400">&#123;</span>
                    <div className="pl-4">
                      <span className="text-cyan-300">"engineer"</span>: <span className="text-emerald-300">"Mohammed Suzain Khan"</span>,<br/>
                      <span className="text-cyan-300">"institution"</span>: <span className="text-emerald-300">"Adichunchanagiri Inst. of Tech"</span>,<br/>
                      <span className="text-cyan-300">"degree"</span>: <span className="text-amber-300">"B.E. Info Science & Engg"</span>,<br/>
                      <span className="text-cyan-300">"cgpa"</span>: <span className="text-purple-300">8.8</span>,<br/>
                      <span className="text-cyan-300">"puc_distinction"</span>: <span className="text-purple-300">"91%"</span>,<br/>
                      <span className="text-cyan-300">"certifications"</span>: [<br/>
                      <span className="pl-4 text-emerald-300">"NPTEL Joy of Programming in Python"</span>,<br/>
                      <span className="pl-4 text-emerald-300">"NPTEL Database Management Systems"</span><br/>
                      ],<br/>
                      <span className="text-cyan-300">"stack"</span>: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"SQL"</span>, <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"JDBC"</span>]
                    </div>
                    <span className="text-slate-400">&#125;</span>
                  </div>

                  <div>
                    <span className="text-cyber-400 font-semibold">suzain@portfolio</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-electric-400">~</span>
                    <span className="text-slate-400">$</span> status --active
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ready for software internships & engineering challenges</span>
                  </div>
                </div>
              </div>

              {/* Mini Float Badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-cyber-500/40 p-3 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyber-500/20 border border-cyber-500/40 flex items-center justify-center text-cyber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">B.E. Academic Score</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    8.8 CGPA <span className="text-[10px] text-emerald-400 font-normal">(Top Tier)</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-slate-800/80"
        >
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl glass-panel hover:border-cyber-500/40 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyber-400 transition-colors font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
