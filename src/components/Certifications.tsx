"use client";

import React from "react";
import { Award, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { certifications } from "@/data/profileData";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Verified Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            CERTIFICATIONS & <span className="text-cyan-600">COURSES</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Clean Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-neutral-50/50 border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between gap-4 group hover:border-cyan-500/40 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-mono text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                      cert.status === "COMPLETED"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-cyan-600 font-bold tracking-widest uppercase block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="font-mono text-[10px] text-slate-500 flex items-center justify-between border-t border-neutral-200/80 pt-3 mt-2">
                <span className="flex items-center gap-1.5 font-semibold text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" />
                  {cert.dateOrDuration}
                </span>
                <span className="font-bold text-slate-700">{cert.badgeCode}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
