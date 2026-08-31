"use client";

import React, { useState } from "react";
import { X, Download, ExternalLink, ZoomIn, ZoomOut, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profileData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-4xl max-h-[92vh] bg-white border border-neutral-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="font-mono text-xs md:text-sm font-bold tracking-wider text-slate-100 uppercase">
                  {profileData.name} — OFFICIAL RESUME
                </h3>
                <span className="font-mono text-[10px] text-cyan-400 block font-medium">
                  Verified SDE Resume Document
                </span>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button
                  onClick={handleZoomOut}
                  className="p-1 text-slate-300 hover:text-white cursor-pointer transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="font-mono text-[10px] text-cyan-400 px-2 font-bold">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1 text-slate-300 hover:text-white cursor-pointer transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-lg transition-colors shadow-sm"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">DOWNLOAD PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Viewer */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100 flex justify-center items-start scrollbar-thin">
            <div
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200 transition-transform duration-200 max-w-full"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }}
            >
              <img
                src="/resume-preview.png"
                alt="Singh Kanishka Resume Document"
                className="w-full h-auto max-w-[800px] object-contain"
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div className="bg-neutral-50 px-5 py-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500 text-[11px]">
              Document Source: <strong className="text-slate-900">Singh_Kanishka_Resume.pdf</strong>
            </span>

            <div className="flex items-center gap-3">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-slate-900 font-bold flex items-center gap-1 transition-colors"
              >
                <span>OPEN PDF IN NEW TAB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-3 py-1 bg-slate-900 text-white rounded text-[11px] font-bold hover:bg-cyan-600 transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
