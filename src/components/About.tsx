"use client";

import React from "react";
import { Code2, Server, Database, Brain, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-600" />,
      title: "Frontend Engineering",
      desc: "Proficient in React.js, Tailwind CSS, and JavaScript. Building responsive, accessible, and user-centric interfaces.",
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-600" />,
      title: "Backend Systems & APIs",
      desc: "Experienced with Node.js, Express.js, and RESTful APIs, building scalable business logic and microservice integrations.",
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-600" />,
      title: "Database Management & ORM",
      desc: "Hands-on experience with MongoDB, PostgreSQL, SQL, and Prisma ORM for structured and unstructured data persistence.",
    },
    {
      icon: <Brain className="w-5 h-5 text-cyan-600" />,
      title: "Artificial Intelligence Focus",
      desc: "Specializing in AI at Parul University, integrating machine learning models and intelligent API services into backend workflows.",
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Background & Focus
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            ABOUT <span className="text-cyan-600">ME</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Quote Card */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50/50 shadow-lg relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Engineering Mindset</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
                "{profileData.summary}"
              </p>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                <div>
                  <span className="text-slate-400">LOCATION:</span> <strong className="text-slate-900">{profileData.location}</strong>
                </div>
                <div>
                  <span className="text-slate-400">DEGREE:</span> <strong className="text-slate-900">B.Tech CSE (AI)</strong>
                </div>
                <div>
                  <span className="text-slate-400">GPA:</span> <strong className="text-cyan-600">8.24 / 10.0</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Pillars */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs text-slate-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-600" />
              TECHNICAL PILLARS
            </h3>

            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex gap-4 p-4 border border-neutral-200 bg-neutral-50/40 rounded-xl hover:border-cyan-500/30 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 border border-neutral-200 rounded-lg bg-white h-fit self-start group-hover:border-cyan-500/40 transition-all shadow-sm">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 group-hover:text-cyan-600 transition-colors text-sm">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
