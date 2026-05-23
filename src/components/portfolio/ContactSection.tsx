"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("prajapatijay17112007@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — replace with real endpoint later
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" aria-label="Contact Jay Prajapati" className="relative py-20 sm:py-28" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.04)_0%,_transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Get In Touch</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 max-w-xl text-base leading-relaxed mb-10"
        >
          Open to internships, freelance projects, and collaborations.
          Whether you have a question or just want to say hi, my inbox is always open!
        </motion.p>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Column — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-emerald-500/15 bg-emerald-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">Open to Work</span>
            </div>

            {/* Email Block */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email</label>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:prajapatijay17112007@gmail.com"
                  className="text-[#e6edf3] text-sm sm:text-base font-medium hover:text-emerald-400 transition-colors break-all"
                >
                  prajapatijay17112007@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 p-1.5 rounded-md text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-400/80 font-mono">Copied to clipboard</p>
              )}
            </div>

            {/* Social Icons */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect</label>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/jayprajapati-dev", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/jayprajapati171120/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:prajapatijay17112007@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-3 glass-card rounded-lg text-slate-400 hover:text-emerald-400 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/10 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/10 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-emerald-500/10 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending || sent}
                className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-gray-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
