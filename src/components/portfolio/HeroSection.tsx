"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" aria-label="Introduction — Jay Prajapati, Cloud & Software Engineer" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-emerald-500/15 bg-emerald-500/5 text-slate-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Building Scalable Web &amp; Cloud Systems
          </span>
        </motion.div>



        {/* Primary H1 — exactly one per page, contains primary keyword */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-100"
        >
          Hi, I&apos;m <span className="gradient-text">Jay Prajapati</span>
          <span className="cursor-blink text-emerald-400 ml-1 font-light" aria-hidden="true">|</span>
        </motion.h1>

        {/* Subheadline with LSI keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl"
        >
          Aspiring Cloud &amp; Software Engineer building scalable web applications,
          infrastructure automation, and developer tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="group px-7 py-3 bg-emerald-500 text-gray-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
          </motion.a>
          <motion.a
            href="https://github.com/jayprajapati-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-3"
          aria-label="Social media links"
        >
          {[
            { icon: Github, href: "https://github.com/jayprajapati-dev", label: "GitHub Profile" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jayprajapati171120/", label: "LinkedIn Profile" },
            { icon: Mail, href: "mailto:prajapatijay17112007@gmail.com", label: "Email Jay Prajapati" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label.startsWith("Email") ? undefined : "_blank"}
              rel={label.startsWith("Email") ? undefined : "noopener noreferrer"}
              className="p-3 glass-card rounded-lg text-slate-400 hover:text-emerald-400 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-5 h-9 rounded-full border-2 border-emerald-500/20 flex justify-center pt-2">
          <div className="w-1 h-1.5 rounded-full bg-emerald-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
