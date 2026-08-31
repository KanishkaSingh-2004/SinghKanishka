"use client";

import React, { useState, useEffect } from "react";

// Components
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";
import ResumeModal from "@/components/ResumeModal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Monitor shortcut backtick key to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "Backquote") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTerminalToggle = () => {
    setTerminalOpen((prev) => !prev);
  };

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-white">
          <ScrollProgress />

          {/* Navigation */}
          <Navbar onTerminalToggle={handleTerminalToggle} onOpenResume={handleOpenResume} />

          {/* Main Content Sections */}
          <main className="flex-1 w-full relative z-10 space-y-0">
            {/* Hero view */}
            <Hero onOpenResume={handleOpenResume} />

            {/* About Section */}
            <About />

            {/* Professional Experience */}
            <Experience />

            {/* Featured Projects */}
            <Projects />

            {/* Technical Skills */}
            <Skills />

            {/* Education */}
            <Education />

            {/* Certifications */}
            <Certifications />

            {/* Contact Form & Channels */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Developer Terminal Easter Egg */}
          <TerminalEasterEgg isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

          {/* Interactive Resume Document Viewer Modal */}
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        </div>
      )}
    </>
  );
}
