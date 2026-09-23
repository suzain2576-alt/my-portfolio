import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Globe, 
  Wrench, 
  Database, 
  Sparkles, 
  Cpu, 
  FileCode, 
  Terminal, 
  Coffee,
  GitFork,
  Boxes,
  Server,
  Workflow,
  Layout,
  Palette,
  Atom,
  Box,
  Cable,
  GitBranch,
  Monitor
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Icon mapper helper
const getIcon = (iconName) => {
  const iconMap = {
    Code2, Layers, Globe, Wrench, Database, Sparkles, Cpu, FileCode,
    Terminal, Coffee, GitFork, Boxes, Server, Workflow, Layout,
    Palette, Atom, Box, Cable, GitBranch, Monitor
  };
  const Component = iconMap[iconName] || Code2;
  return <Component className="w-5 h-5" />;
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'core', label: 'Core CS Concepts' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'tools', label: 'Tools & Databases' }
  ];

  const displayedCategories = activeTab === 'all' 
    ? skillCategories.filter(c => c.id !== 'soft')
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 text-xs font-mono mb-3">
            <span>&lt;Skills &amp; Expertise /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack &amp; <span className="gradient-text-cyan-purple">Core Disciplines</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            Systematic knowledge in software architecture, computational algorithms, and database management.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-cyber-500 text-slate-950 font-bold shadow-neon-cyan scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 flex items-center justify-center">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                  {category.title}
                </h3>
                <div className="h-px bg-slate-800 flex-1 ml-2" />
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-cyber-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyber-400 flex items-center justify-center group-hover:scale-110 group-hover:border-cyber-400 transition-all">
                          {getIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-cyber-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            Proficiency: {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-3 mt-1 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress Level Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="bg-gradient-to-r from-cyber-500 to-electric-500 h-full rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Database Focus Highlight Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-cyber-500/30 bg-gradient-to-r from-cyber-500/5 to-electric-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyber-500/20 border border-cyber-500/40 text-cyber-400 flex items-center justify-center shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Certified in Database Management Systems (DBMS)
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Specialized in SQL query optimization, ER diagrams, schema normalization, and relational integrity.
              </p>
            </div>
          </div>
          <a
            href="#certifications"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyber-400 border border-slate-700 hover:border-cyber-400 transition-all shrink-0"
          >
            View Certification
          </a>
        </div>

      </div>
    </section>
  );
};
