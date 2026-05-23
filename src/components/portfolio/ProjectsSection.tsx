"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock } from "lucide-react";

interface ProjectLink {
  type: "github" | "live";
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  isPrivate: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "Push Notification System",
    description:
      "Built a custom browser push notification system from scratch — no Firebase, no third-party service. Handles user subscription, service worker registration, and real-time payload delivery to subscribed browsers.",
    tech: ["JavaScript", "Service Workers", "Web Push API", "PHP"],
    links: [],
    isPrivate: true,
  },
  {
    title: "Admin Dashboard + Auth System",
    description:
      "A full authentication system with role-based access control and an admin dashboard UI. Includes login, session management, protected routes, and user management panel.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    links: [],
    isPrivate: true,
  },
  {
    title: "UniClass – Academic Management Portal",
    description:
      "A MERN stack college portal to manage semesters, branches, subjects, and assignment notices. Role-based access for admin and students.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: [{ type: "github", label: "GitHub", href: "https://github.com/jayprajapati-dev/college-academic-portal" }],
    isPrivate: false,
  },
  {
    title: "Free Fire Tournament Platform",
    description:
      "Complete esports tournament management system — handles team registrations, bracket generation, and match results. Built in two versions.",
    tech: ["PHP", "Flask", "HTML", "CSS", "MySQL"],
    links: [
      { type: "github", label: "GitHub (PHP)", href: "https://github.com/jayprajapati-dev/tournament-platform-php" },
      { type: "github", label: "GitHub (Flask)", href: "https://github.com/jayprajapati-dev/tournament-platform-flask" },
    ],
    isPrivate: false,
  },
  {
    title: "Lead Management CRM",
    description:
      "Pixel-perfect CRM system for managing leads, contacts, and sales pipeline stages. Built to replicate real enterprise CRM workflow and UX.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: [{ type: "github", label: "GitHub", href: "https://github.com/jayprajapati-dev/Lead-Management-System" }],
    isPrivate: false,
  },
  {
    title: "TaskProper – Online Tools Platform",
    description:
      "A platform with 25+ free web tools — CGPA calculators, health trackers, finance planners, unit converters, productivity utilities, and more. Built, deployed, and maintained solo.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [],
    isPrivate: false,
  },
];

interface OtherBuild {
  title: string;
  tech: string;
  isPrivate: boolean;
}

const otherBuilds: OtherBuild[] = [
  { title: "Live Code Editor", tech: "HTML, CSS, JavaScript", isPrivate: false },
  { title: "Medical Lab Website", tech: "HTML, CSS, JavaScript", isPrivate: true },
  { title: "QR Code Generator", tech: "JavaScript", isPrivate: false },
  { title: "Expense Tracker", tech: "HTML, CSS, JavaScript", isPrivate: false },
  { title: "Typing Speed Test", tech: "JavaScript", isPrivate: false },
  { title: "Pomodoro Timer", tech: "JavaScript", isPrivate: false },
  { title: "CGPA Calculator", tech: "HTML, CSS, JavaScript", isPrivate: false },
  { title: "Local Shop Website", tech: "HTML, CSS, JavaScript", isPrivate: true },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" aria-label="Featured projects and experiments" className="relative py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 card-glow flex flex-col"
              aria-label={project.title}
            >
              {/* Header: Private Badge */}
              <div className="flex items-center justify-end mb-3">
                {project.isPrivate && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-amber-400 bg-amber-400/8 border border-amber-400/15 rounded">
                    <Lock className="w-3 h-3" />
                    Private Project
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-100 mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] font-mono bg-slate-800/60 text-slate-400 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {link.type === "github" ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.label}
                  </a>
                ))}
                {project.isPrivate && project.links.length === 0 && (
                  <span className="text-xs text-slate-500 italic">Available on request</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Builds */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-bold text-slate-200 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Other Builds &amp; Experiments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherBuilds.map((build) => (
              <div
                key={build.title}
                className="glass-card rounded-lg p-3.5 card-glow"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-medium text-slate-300 truncate">{build.title}</h4>
                  {build.isPrivate && <Lock className="w-3 h-3 text-amber-400/60 shrink-0 ml-1" />}
                </div>
                <p className="text-[11px] font-mono text-slate-500">{build.tech}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600 italic">
            Some projects are private or locally developed — available on request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
