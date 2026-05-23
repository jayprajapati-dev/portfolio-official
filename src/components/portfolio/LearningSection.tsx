"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Loader2, Circle } from "lucide-react";

interface LearningItem {
  name: string;
  status: "done" | "progress" | "planned";
}

const learningItems: LearningItem[] = [
  { name: "React & Tailwind CSS", status: "done" },
  { name: "PHP + MySQL Full Stack", status: "done" },
  { name: "Flask (Python web apps)", status: "done" },
  { name: "Git & GitHub", status: "done" },
  { name: "Linux & Bash Scripting", status: "progress" },
  { name: "Docker Basics", status: "progress" },
  { name: "AWS Cloud Fundamentals", status: "progress" },
  { name: "GitHub Actions & CI/CD", status: "planned" },
  { name: "VPS Deployment & Nginx", status: "planned" },
  { name: "Kubernetes Basics", status: "planned" },
];

const statusConfig = {
  done: {
    icon: CheckCircle2,
    label: "Completed",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-400/80",
    dotColor: "bg-emerald-400",
  },
  progress: {
    icon: Loader2,
    label: "In Progress",
    iconColor: "text-amber-400",
    textColor: "text-amber-400/80",
    dotColor: "bg-amber-400",
  },
  planned: {
    icon: Circle,
    label: "Planned",
    iconColor: "text-slate-600",
    textColor: "text-slate-600",
    dotColor: "bg-slate-600",
  },
};

export default function LearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="learning" aria-label="Learning roadmap" className="relative py-20 sm:py-28" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.04)_0%,_transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Currently Learning</h2>
        </motion.div>

        <div className="max-w-2xl">
          <div className="space-y-2">
            {learningItems.map((item, i) => {
              const config = statusConfig[item.status];
              const Icon = config.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3.5 glass-card rounded-lg px-4 py-3"
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${config.iconColor} ${item.status === "progress" ? "animate-spin" : ""}`}
                    style={item.status === "progress" ? { animationDuration: "3s" } : undefined}
                    aria-hidden="true"
                  />
                  <span className={`text-sm font-medium flex-1 ${item.status === "planned" ? "text-slate-500" : "text-slate-300"}`}>
                    {item.name}
                  </span>
                  <span className={`text-[11px] font-mono ${config.textColor}`}>
                    {config.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-5 mt-5 text-[11px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Completed
            </span>
            <span className="flex items-center gap-1.5">
              <Loader2 className="w-3.5 h-3.5 text-amber-400" style={{ animationDuration: "3s", animation: "none" }} />
              In Progress
            </span>
            <span className="flex items-center gap-1.5">
              <Circle className="w-3.5 h-3.5 text-slate-600" />
              Planned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
