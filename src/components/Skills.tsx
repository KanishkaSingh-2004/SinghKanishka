"use client";

import React, { useState } from "react";
import { Code2, Server, Database, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/profileData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].id);

  const currentCategoryObj = skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "languages":
        return <Code2 className="w-4 h-4 text-cyan-600" />;
      case "frameworks":
        return <Server className="w-4 h-4 text-cyan-600" />;
      case "databases_cloud":
        return <Database className="w-4 h-4 text-cyan-600" />;
      default:
        return <Wrench className="w-4 h-4 text-cyan-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-neutral-200/80 relative bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Technical Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            SKILLS & <span className="text-cyan-600">CAPABILITIES</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-neutral-200/80 pb-6">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-bold tracking-wider cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-600/20"
                  : "bg-neutral-50 text-slate-600 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCategoryObj.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-neutral-50/50 border border-neutral-200 rounded-xl p-4 flex flex-col gap-3 group hover:border-cyan-500/30 hover:bg-white transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white border border-neutral-200 shadow-sm text-cyan-600">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-slate-900 group-hover:text-cyan-600 transition-colors text-xs font-bold font-mono">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-200/60 p-[1.5px] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h-1 bg-cyan-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
