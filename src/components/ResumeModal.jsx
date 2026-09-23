import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import { personalInfo, education, skillCategories, projects, certifications, experiences } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    navigator.clipboard.writeText(`${personalInfo.name} | ${personalInfo.email} | ${personalInfo.phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md no-print"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar (Hidden when printing) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-950/80 no-print">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyber-500">
                Official Resume Document
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                (A4 Print Optimized)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyContact}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Copy contact details"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Contact'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-cyber-500 text-slate-950 hover:bg-cyber-400 transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Container */}
          <div id="printable-resume" className="overflow-y-auto p-8 sm:p-12 space-y-6 font-sans text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-normal">
            
            {/* Header: Name & Contact */}
            <div className="text-center border-b pb-6 border-slate-300 dark:border-slate-800 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-600 dark:text-cyber-400" />
                  {personalInfo.phoneRaw}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-600 dark:text-cyber-400" />
                  {personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-600 dark:text-cyber-400" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {/* Degree 1: BE */}
                <div>
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    <span>B.E. – Information Science and Engineering</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold">CGPA: 8.8 — Expected 2028</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 italic">
                    Adichunchanagiri Institute of Technology
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Bachelor of Engineering
                  </div>
                </div>

                {/* Degree 2: 2nd PUC */}
                <div>
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    <span>2nd PUC</span>
                    <span className="font-mono font-bold">91% — 2024</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 italic">
                    Mountain View PU College
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pre-University Education
                  </div>
                </div>

                {/* Degree 3: 10th CBSE */}
                <div>
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    <span>10th – CBSE</span>
                    <span className="font-mono font-bold">83% — 2022</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 italic">
                    Mountain View Public School
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Central Board of Secondary Education
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white">Programming Languages:</strong> Java, Python, C, SQL
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Core Concepts:</strong> Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS)
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Web Technologies:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Frameworks &amp; Tools:</strong> Java Collections Framework, JDBC, Git, GitHub, VS Code, IntelliJ IDEA
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Database:</strong> MySQL
                </div>
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="space-y-1.5 pt-2">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                SOFT SKILLS
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                Problem Solving, Communication, Teamwork, Time Management, Adaptability, Quick Learning, Leadership, Collaboration
              </p>
            </div>

            {/* PROJECTS */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                PROJECTS
              </h2>
              <div className="space-y-3">
                {projects.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      <span>{proj.title}</span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-normal">
                        {proj.techStack.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600 dark:text-slate-300 pl-1">
                      {proj.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE & ACTIVITIES */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                EXPERIENCE &amp; ACTIVITIES
              </h2>
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>NPTEL – Joy of Programming in Python</span>
                  <span className="font-mono text-xs">2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 pl-1 mt-1">
                  <li>Completed an NPTEL course focused on Python programming, problem solving, and computational thinking.</li>
                </ul>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-bold tracking-wider text-cyan-600 dark:text-cyber-400 uppercase border-b border-cyan-600/30 dark:border-cyber-400/30 pb-1">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 pl-1 space-y-0.5">
                <li>NPTEL – Joy of Programming in Python</li>
                <li>NPTEL – Database Management Systems (DBMS)</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
