"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Python", "Flask", "Node.js"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "phpMyAdmin"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux (basics)"],
  },
  {
    title: "Learning",
    skills: ["Docker", "AWS Basics", "GitHub Actions", "Bash Scripting", "CI/CD"],
  },
  {
    title: "Other",
    skills: ["REST APIs", "Responsive Design", "SEO Basics", "Deployment", "Digital Marketing (Meta Ads & Others)"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" aria-label="Technical skills and tools" className="relative py-20 sm:py-28" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.04)_0%,_transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Skills &amp; Tools</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-xl p-5 card-glow"
            >
              <h3 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-emerald-500/8 text-emerald-300/90 rounded-md border border-emerald-500/10 hover:border-emerald-500/25 hover:bg-emerald-500/12 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
