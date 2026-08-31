"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onTerminalToggle?: () => void;
  onOpenResume?: () => void;
}

export default function Navbar({ onTerminalToggle, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "skills", "education", "certifications", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "EDUCATION", href: "#education", id: "education" },
    { name: "CERTIFICATIONS", href: "#certifications", id: "certifications" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-40 max-w-7xl mx-auto rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-lg transition-all duration-300 ${
        scrolled ? "py-2.5 shadow-xl" : "py-3.5"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#home" className="flex items-center gap-3 group text-slate-900 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-xs shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
            SK
          </div>
          <div className="font-mono text-xs md:text-sm font-black tracking-[0.15em] text-slate-900">
            SINGH KANISHKA
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`font-mono text-[11px] font-bold tracking-wider relative py-1 transition-colors duration-200 ${
                  isActive ? "text-cyan-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all font-mono text-[11px] font-bold cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          )}

          {onTerminalToggle && (
            <button
              onClick={onTerminalToggle}
              className="p-2 rounded-xl border border-neutral-200 bg-neutral-50 text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Toggle Dev Terminal (Hotkey: `)"
            >
              <Code2 className="w-4 h-4" />
            </button>
          )}

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2 bg-slate-900 hover:bg-cyan-600 text-white font-mono text-xs font-bold tracking-wider rounded-xl transition-all duration-200 shadow-md cursor-pointer"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-slate-700 hover:text-slate-900 lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[110%] left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl rounded-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-xs font-bold tracking-wider py-1.5 border-b border-neutral-100 transition-colors ${
                      isActive ? "text-cyan-600 font-black" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {onOpenResume && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-center py-2.5 bg-cyan-50 text-cyan-700 border border-cyan-200 font-mono text-xs font-bold tracking-wider rounded-xl hover:bg-cyan-600 hover:text-white transition-colors"
                >
                  VIEW RESUME
                </button>
              )}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-slate-900 text-white font-mono text-xs font-bold tracking-wider rounded-xl hover:bg-cyan-600 transition-colors"
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
