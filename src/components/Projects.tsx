"use client";

import React, { useState } from "react";
import { Terminal, ExternalLink, Code2, Database, GitBranch, ArrowUpRight, X, Layers, CheckCircle2 } from "lucide-react";
import { Github } from "./BrandIcons";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectItem } from "@/data/profileData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Featured Engineering
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            FEATURED <span className="text-cyan-600">PROJECTS</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-50/50 border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/40 hover:bg-white transition-all duration-300 relative shadow-lg hover:shadow-cyan-500/5 overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Header tag */}
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-600 animate-pulse" />
                    <span className="font-mono text-[10px] text-cyan-600 font-bold uppercase tracking-wider">
                      REPOSITORY
                    </span>
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-neutral-200 rounded-lg bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40 transition-all duration-200"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="font-mono text-[11px] text-slate-500 font-bold tracking-wider mt-0.5">
                    {proj.subtitle}
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-medium">
                  {proj.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] bg-neutral-100 text-slate-700 border border-neutral-200 px-2 py-0.5 rounded font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="font-mono text-[9px] text-cyan-600 font-bold px-1.5 py-0.5">
                      +{proj.tech.length - 4} MORE
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-200/80 relative z-10">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-sans font-bold text-slate-700 hover:text-cyan-600 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 px-3 py-1.5 rounded-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600 cursor-pointer transition-all duration-200"
                >
                  GITHUB REPO
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[85vh] bg-white border border-neutral-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal header */}
              <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-600" />
                  <span className="font-mono text-xs font-bold text-slate-600 tracking-wider">
                    PROJECT DEEP DIVE // {selectedProject.title.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-neutral-200 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{selectedProject.title}</h3>
                  <div className="font-mono text-xs text-cyan-600 font-bold mt-0.5 mb-3">{selectedProject.subtitle}</div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{selectedProject.detailedDesc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-slate-900 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" /> KEY HIGHLIGHTS
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-600 font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-slate-900 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <GitBranch className="w-4 h-4 text-cyan-600" /> ARCHITECTURE & FLOW
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      {selectedProject.architecture.map((a, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-600 font-bold">•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-2 pt-4 border-t border-neutral-200">
                  <h4 className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] bg-neutral-100 border border-neutral-200 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Payload */}
                {selectedProject.samplePayload && (
                  <div className="space-y-2 pt-4 border-t border-neutral-200">
                    <h4 className="font-mono text-xs text-cyan-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" /> STRUCTURED DATA PAYLOAD PREVIEW
                    </h4>
                    <pre className="p-4 bg-slate-900 border border-slate-800 rounded-xl font-mono text-[11px] leading-relaxed text-cyan-300 overflow-x-auto">
                      {selectedProject.samplePayload}
                    </pre>
                  </div>
                )}
              </div>

              {/* Modal footer */}
              <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-cyan-600 hover:text-slate-900 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY ON GITHUB</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-sans font-bold hover:bg-cyan-600 cursor-pointer transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
