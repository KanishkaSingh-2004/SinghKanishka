"use client";

import React from "react";
import { profileData } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t border-neutral-200/80 relative overflow-hidden font-sans select-none z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left Side: Copyright */}
          <div className="font-mono text-xs text-slate-500 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} // <span className="font-bold text-slate-900">{profileData.name}</span> // ALL RIGHTS RESERVED
          </div>

          {/* Right Side: Professional Label */}
          <div className="text-xs text-slate-500 font-mono tracking-wider uppercase font-semibold">
            {profileData.roleTitle}
          </div>
        </div>
      </div>
    </footer>
  );
}
