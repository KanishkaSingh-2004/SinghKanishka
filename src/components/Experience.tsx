"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/profileData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Career Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            PROFESSIONAL <span className="text-cyan-600">EXPERIENCE</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/80 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 border border-cyan-500/20">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-bold text-slate-700 mt-1 flex items-center gap-2">
                    <span className="text-cyan-600 font-extrabold">{exp.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-mono font-bold w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                  Key Work & Highlights
                </h4>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/60">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
