"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2 } from "lucide-react";

interface TimelineEntry {
  type: "education" | "work";
  title: string;
  org: string;
  period: string;
  highlights: string[];
}

const entries: TimelineEntry[] = [
  {
    type: "education",
    title: "Diploma in Information Technology",
    org: "Palanpur, Gujarat, India - 385001",
    period: "2023 – 2026",
    highlights: [
      "Specializing in software development and systems administration",
      "Coursework in databases, networking, and operating systems",
    ],
  },
  {
    type: "work",
    title: "Self-taught Web Developer",
    org: "Independent",
    period: "2022 – Present",
    highlights: [
      "Built and maintained multiple real-world projects independently",
      "Creator of TaskProper.com — live product with real users and SEO traffic",
      "Shipped 8+ projects across full-stack, systems, and tools",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" aria-label="Experience and education" className="relative py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Experience & Education</h2>
        </motion.div>

        <div className="max-w-2xl space-y-6">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  {entry.type === "education" ? (
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-bold text-slate-100">{entry.title}</h3>
                    <span className="text-xs font-mono text-slate-500 shrink-0">{entry.period}</span>
                  </div>
                  <p className="text-sm text-emerald-400 mb-3">{entry.org}</p>
                  <ul className="space-y-1.5">
                    {entry.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-emerald-400 mt-0.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
