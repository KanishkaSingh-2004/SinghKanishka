"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Download, ArrowRight, Sparkles, FileText } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profileData } from "@/data/profileData";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white select-none"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none z-0" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-start text-left space-y-7 max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-700 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            <span>{profileData.roleTitle}</span>
          </div>

          {/* Main Name */}
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-tight">
            {profileData.name}
          </h1>

          <div className="h-[3px] w-20 bg-cyan-600 my-1 rounded-full" />

          {/* Professional Summary */}
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            {profileData.summary}
          </p>

          {/* Perspective Card */}
          <div className="w-full border border-neutral-200 bg-neutral-50/50 backdrop-blur-md rounded-2xl p-6 md:p-7 flex flex-col md:flex-row gap-5 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-cyan-200 bg-cyan-50 flex items-center justify-center shrink-0 text-cyan-600">
              <Code2 className="w-6 h-6 md:w-7 md:h-7" />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 text-[10px] font-mono font-bold tracking-widest uppercase mb-2 w-fit">
                FULL-STACK // AI // SYSTEM ARCHITECTURE
              </div>
              <h3 className="font-sans text-base md:text-lg font-bold text-slate-900">
                Building Scalable Software Solutions
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1">
                Computer Science (AI) student at <strong className="text-slate-900">Parul University</strong>. Building web applications with React, Node.js, Express, and databases, backed by solid DSA fundamentals.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-cyan-600 text-white font-sans text-xs font-bold tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-slate-900/10 cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-sans text-xs font-bold tracking-widest rounded-xl transition-all duration-300 shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>
            )}

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-slate-800 border border-neutral-300 font-sans text-xs font-bold tracking-widest rounded-xl transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-600" />
              <span>DOWNLOAD PDF</span>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-auto sm:ml-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-200 rounded-xl bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-200 rounded-xl bg-white text-slate-600 hover:text-cyan-600 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
