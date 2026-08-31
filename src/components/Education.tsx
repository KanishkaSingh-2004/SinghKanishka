"use client";

import React from "react";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { educationList } from "@/data/profileData";

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            EDUCATION & <span className="text-cyan-600">ACADEMICS</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50/40 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-bold text-slate-700 mt-1">
                  {edu.degree}
                  {edu.specialization && (
                    <span className="text-cyan-600 block text-xs font-mono mt-0.5">
                      Specialization: {edu.specialization}
                    </span>
                  )}
                </p>

                {edu.details && (
                  <div className="mt-4 space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* GPA Metric Pill */}
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-semibold">CUMULATIVE GPA</span>
                <span className="px-3 py-1 rounded-lg bg-cyan-600 text-white font-mono text-xs font-bold tracking-wider shadow-sm flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  {edu.gpa} / 10.0
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
