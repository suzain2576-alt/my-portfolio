import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Database, 
  Lightbulb, 
  CheckCircle2, 
  Award,
  BookOpen,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TerminalWidget } from './TerminalWidget';

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      desc: "Maintaining an 8.8 CGPA in Information Science & Engineering at AIT with distinction in PUC (91%).",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: Database,
      title: "Relational DBMS & SQL",
      desc: "NPTEL Certified in DBMS with practical mastery of ACID properties, 3NF normalization, and JDBC integration.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Code2,
      title: "Core Java & Python",
      desc: "Extensive problem-solving experience with Java Collections Framework, OOP principles, and computational Python.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: Lightbulb,
      title: "Adaptive Problem Solver",
      desc: "Thrives in fast-paced collaborative environments, eager to explore cutting-edge stacks and engineering challenges.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 text-xs font-mono mb-3">
            <span>&lt;About /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Driven by <span className="gradient-text-cyan-purple">Passion & Precision</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            Get to know my technical foundation, academic journey, and engineering philosophy.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Who is Mohammed Suzain Khan?</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an aspiring software engineer currently pursuing my <strong className="text-slate-900 dark:text-white">Bachelor of Engineering in Information Science and Engineering</strong> at <span className="text-cyber-500 font-medium">{personalInfo.college}</span>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                My journey began with a strong interest in understanding how computational algorithms and databases drive modern applications. From constructing normalized relational databases with <strong className="text-slate-900 dark:text-white">MySQL & JDBC</strong> to mastering OOP paradigms in <strong className="text-slate-900 dark:text-white">Java</strong> and computational problem-solving in <strong className="text-slate-900 dark:text-white">Python</strong>, I focus on creating scalable, clean, and well-tested code.
              </p>

              {/* Personal Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/60 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyber-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-electric-400 shrink-0" />
                  <span>Graduation: {personalInfo.expectedGraduation}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl glass-panel border border-slate-800/80 hover:border-cyber-500/30 transition-all group">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 border ${item.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Live Interactive Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>INTERACTIVE_DEVELOPER_CONSOLE</span>
                <span className="text-cyber-400 font-semibold">LIVE REPL</span>
              </div>
              <TerminalWidget />
            </div>

            {/* Soft Skills Badges */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyber-400" />
                <span>Core Behavioral & Collaboration Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Communication",
                  "Teamwork",
                  "Time Management",
                  "Adaptability",
                  "Quick Learning",
                  "Leadership",
                  "Collaboration"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 text-slate-300 font-medium hover:border-cyber-400 hover:text-cyber-400 transition-colors"
                  >
                    ✦ {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
