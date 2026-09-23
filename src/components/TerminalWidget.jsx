import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, education, certifications } from '../data/portfolioData';

export const TerminalWidget = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to SuzainOS Shell v2.4 [x86_64-engine]' },
    { type: 'system', content: 'Type "help" to view all available commands or click quick action pills below.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', content: `$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available commands:
  • whoami      - Quick bio and engineering summary
  • skills      - Technical languages, tools, and databases
  • education   - Degree, college, and academic achievements
  • certs       - Official NPTEL certifications
  • contact     - Phone number and email address
  • sudo hire   - Run priority hiring protocol 🎉
  • clear       - Clean terminal screen`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          content: `${personalInfo.name} | ${personalInfo.degree}
Currently studying at ${personalInfo.college} with an ${personalInfo.cgpa} CGPA.
Passionate about Java, Python, SQL, DBMS, and full-stack software development.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: `Programming: Java, Python, C, SQL, JavaScript
Core Concepts: Data Structures, Algorithms, OOP, DBMS (ACID, Normalization)
Web & Frameworks: HTML5, CSS3, React.js, Tailwind CSS
Tools & DB: MySQL, JDBC, Git, GitHub, IntelliJ IDEA, VS Code`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          content: education.map(e => `[${e.period}] ${e.degree} - ${e.institution} (${e.score})`).join('\n')
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          content: certifications.map(c => `✓ ${c.title} (${c.issuer} - ${c.date})`).join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}`
        });
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        newHistory.push({
          type: 'output',
          content: `✨ Access Granted! Initiating interview protocol.
Thank you for considering Mohammed Suzain Khan for your engineering team!
Send an email directly to ${personalInfo.email} or call ${personalInfo.phone}.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          content: `zsh: command not found: ${trimmed}. Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  const quickPills = ['whoami', 'skills', 'education', 'certs', 'sudo hire', 'clear'];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs">
      {/* Header */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyber-400" />
            Interactive Terminal CLI
          </span>
        </div>
        <span className="text-[11px] text-cyber-400 bg-cyber-500/10 px-2 py-0.5 rounded border border-cyber-500/20">
          Bash Ready
        </span>
      </div>

      {/* Terminal Screen */}
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed whitespace-pre-wrap">
            {item.type === 'system' && (
              <div className="text-slate-400 italic">{item.content}</div>
            )}
            {item.type === 'user' && (
              <div className="text-cyber-400 font-semibold">{item.content}</div>
            )}
            {item.type === 'output' && (
              <div className="text-emerald-300 pl-2 border-l border-emerald-500/30">{item.content}</div>
            )}
            {item.type === 'error' && (
              <div className="text-rose-400 pl-2 border-l border-rose-500/30">{item.content}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Buttons */}
      <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800/80 flex flex-wrap gap-1.5 items-center">
        <span className="text-[10px] text-slate-400 font-sans">Quick run:</span>
        {quickPills.map((pill) => (
          <button
            key={pill}
            onClick={() => executeCommand(pill)}
            className="text-[11px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyber-400 border border-slate-700/60 transition-colors"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <span className="text-cyber-400 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command (e.g. skills, whoami, education, sudo hire)..."
          className="flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-400 text-xs font-mono"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-cyber-500/20 text-cyber-400 hover:bg-cyber-500 hover:text-slate-950 transition-colors"
          title="Send command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
