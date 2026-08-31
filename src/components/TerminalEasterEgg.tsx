"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TermIcon, X, CheckCircle, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { profileData, experiences, projects, skillCategories, educationList, certifications } from "@/data/profileData";

interface TerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogLine {
  text: string;
  isCmd?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export default function TerminalEasterEgg({ isOpen, onClose }: TerminalEasterEggProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { text: `DEVELOPER CONSOLE — SESSION ESTABLISHED FOR ${profileData.name.toUpperCase()}` },
    { text: "TYPE 'help' TO EXPLORE RESUME COMMANDS." },
    { text: "" },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { text: `$ ${cmdStr}`, isCmd: true }];

    if (trimmed === "") {
      setHistory(newHistory);
      return;
    }

    const command = trimmed.split(" ")[0];

    switch (command) {
      case "help":
        setHistory([
          ...newHistory,
          { text: "AVAILABLE COMMANDS:" },
          { text: "  about         - Display career summary & objective" },
          { text: "  experience    - List professional internship experience" },
          { text: "  projects      - Display full-stack software projects & GitHub repos" },
          { text: "  skills        - List technical skills, languages, and frameworks" },
          { text: "  education     - Show degree, university, and GPA" },
          { text: "  certifications- Display verified NPTEL and Saylor certifications" },
          { text: "  contact       - Show email, phone, location, LinkedIn, and GitHub" },
          { text: "  clear         - Clear terminal history" },
          { text: "  exit          - Close developer terminal" },
        ]);
        break;

      case "about":
        setHistory([
          ...newHistory,
          { text: `${profileData.name.toUpperCase()} — ${profileData.roleTitle}` },
          { text: `Summary: ${profileData.summary}` },
          { text: `Location: ${profileData.location}` },
        ]);
        break;

      case "experience":
        const expLines: LogLine[] = [{ text: "PROFESSIONAL EXPERIENCE:", isSuccess: true }];
        experiences.forEach((exp) => {
          expLines.push({ text: `Role: ${exp.role} @ ${exp.company} (${exp.period} | ${exp.location})` });
          exp.bullets.forEach((b) => expLines.push({ text: `  - ${b}` }));
        });
        setHistory([...newHistory, ...expLines]);
        break;

      case "projects":
        const projLines: LogLine[] = [{ text: "FEATURED PROJECTS & REPOSITORIES:", isSuccess: true }];
        projects.forEach((p, idx) => {
          projLines.push({ text: `${idx + 1}. ${p.title} (${p.subtitle})` });
          projLines.push({ text: `   Tech: ${p.tech.join(", ")}` });
          projLines.push({ text: `   GitHub: ${p.github}` });
        });
        setHistory([...newHistory, ...projLines]);
        break;

      case "skills":
        const skillLines: LogLine[] = [{ text: "TECHNICAL SKILLS & TOOLKITS:", isSuccess: true }];
        skillCategories.forEach((cat) => {
          skillLines.push({ text: `[${cat.name}]` });
          skillLines.push({ text: `  ${cat.items.map((i) => i.name).join(" | ")}` });
        });
        setHistory([...newHistory, ...skillLines]);
        break;

      case "education":
        const eduLines: LogLine[] = [{ text: "EDUCATION:", isSuccess: true }];
        educationList.forEach((e) => {
          eduLines.push({ text: `${e.degree} — ${e.institution}` });
          if (e.specialization) eduLines.push({ text: `Specialization: ${e.specialization}` });
          eduLines.push({ text: `Period: ${e.period} | GPA: ${e.gpa}` });
        });
        setHistory([...newHistory, ...eduLines]);
        break;

      case "certifications":
        const certLines: LogLine[] = [{ text: "CERTIFICATIONS:", isSuccess: true }];
        certifications.forEach((c) => {
          certLines.push({ text: `- ${c.title} (${c.issuer})` });
          certLines.push({ text: `  Details: ${c.dateOrDuration}` });
        });
        setHistory([...newHistory, ...certLines]);
        break;

      case "contact":
        setHistory([
          ...newHistory,
          { text: "CONTACT CHANNELS:", isSuccess: true },
          { text: `  Email:    ${profileData.email}` },
          { text: `  Phone:    ${profileData.phone}` },
          { text: `  LinkedIn: ${profileData.linkedin}` },
          { text: `  GitHub:   ${profileData.github}` },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "exit":
        onClose();
        break;

      default:
        setHistory([
          ...newHistory,
          { text: `Command not recognized: '${command}'. Type 'help' for available commands.`, isError: true },
        ]);
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-2xl h-[440px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono"
      >
        {/* Terminal Header */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TermIcon className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-slate-300 tracking-wider">
              DEVELOPER SHELL // {profileData.name.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Logs */}
        <div className="flex-1 p-4 overflow-y-auto text-xs leading-relaxed bg-slate-950 text-slate-300 scrollbar-thin">
          {history.map((line, idx) => {
            if (line.isCmd) {
              return (
                <div key={idx} className="text-cyan-400 font-bold mb-1">
                  {line.text}
                </div>
              );
            }
            let colorClass = "text-slate-300";
            if (line.isError) colorClass = "text-rose-400";
            if (line.isSuccess) colorClass = "text-emerald-400 font-bold";

            return (
              <div key={idx} className={`${colorClass} mb-1 whitespace-pre-wrap`}>
                {line.text}
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Prompt */}
        <div className="bg-slate-900 border-t border-slate-800 px-4 py-2.5 flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-xs select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-cyan-300 text-xs caret-cyan-400"
            placeholder="Type command here (e.g. 'help', 'projects', 'skills')..."
            autoFocus
          />
        </div>
      </motion.div>
    </div>
  );
}
