"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, RefreshCw, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profileData } from "@/data/profileData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields: Name, Email, and Message.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try again or reach out via email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white select-none">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-sans text-xs font-bold text-cyan-600 tracking-[0.2em] uppercase mb-1">
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            GET IN <span className="text-cyan-600">TOUCH</span>
          </h2>
          <div className="w-12 h-[2px] bg-cyan-600 mt-2" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          {/* Info & Handles */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                Let's build something scalable.
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                I am actively seeking SDE internships and full-stack software development roles. Whether you have an open position, project collaboration, or tech opportunity, feel free to reach out directly.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-3 font-sans text-xs">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3.5 p-4 border border-neutral-200 bg-neutral-50/50 rounded-2xl hover:border-cyan-500/40 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 border border-neutral-200 rounded-xl bg-white text-cyan-600 group-hover:scale-105 transition-transform shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">EMAIL ADDRESS</div>
                  <div className="text-slate-900 font-bold group-hover:text-cyan-600 transition-colors font-mono">{profileData.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-3.5 p-4 border border-neutral-200 bg-neutral-50/50 rounded-2xl hover:border-cyan-500/40 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 border border-neutral-200 rounded-xl bg-white text-cyan-600 group-hover:scale-105 transition-transform shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">PHONE / MOBILE</div>
                  <div className="text-slate-900 font-bold group-hover:text-cyan-600 transition-colors font-mono">{profileData.phone}</div>
                </div>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 border border-neutral-200 bg-neutral-50/50 rounded-2xl hover:border-cyan-500/40 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 border border-neutral-200 rounded-xl bg-white text-cyan-600 group-hover:scale-105 transition-transform shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">LINKEDIN PROFILE</div>
                  <div className="text-slate-900 font-bold group-hover:text-cyan-600 transition-colors font-mono">kanishka-singh</div>
                </div>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 border border-neutral-200 bg-neutral-50/50 rounded-2xl hover:border-cyan-500/40 hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <div className="p-2.5 border border-neutral-200 rounded-xl bg-white text-cyan-600 group-hover:scale-105 transition-transform shadow-sm">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">GITHUB REPOSITORIES</div>
                  <div className="text-slate-900 font-bold group-hover:text-cyan-600 transition-colors font-mono">KanishkaSingh-2004</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50/40 shadow-xl relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <label htmlFor="name" className="text-slate-500 font-bold uppercase tracking-wider">YOUR NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl outline-none text-slate-900 focus:border-cyan-500 transition-colors placeholder:text-slate-400 text-xs font-mono shadow-sm"
                      placeholder="e.g. Hiring Manager"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-[11px]">
                    <label htmlFor="email" className="text-slate-500 font-bold uppercase tracking-wider">YOUR EMAIL *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl outline-none text-slate-900 focus:border-cyan-500 transition-colors placeholder:text-slate-400 text-xs font-mono shadow-sm"
                      placeholder="e.g. recruiter@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  <label htmlFor="subject" className="text-slate-500 font-bold uppercase tracking-wider">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl outline-none text-slate-900 focus:border-cyan-500 transition-colors placeholder:text-slate-400 text-xs font-mono shadow-sm"
                    placeholder="e.g. SDE Internship Opportunity"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  <label htmlFor="message" className="text-slate-500 font-bold uppercase tracking-wider">MESSAGE *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl outline-none text-slate-900 focus:border-cyan-500 transition-colors placeholder:text-slate-400 text-xs font-mono resize-none shadow-sm"
                    placeholder="Write your message details here..."
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-mono flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Transmission Error</div>
                      <div>{errorMessage}</div>
                    </div>
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-mono flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Message Delivered!</div>
                      <div>Thank you for reaching out. I will respond to your message promptly.</div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 bg-slate-900 hover:bg-cyan-600 text-white font-mono font-bold text-xs tracking-widest rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-slate-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
