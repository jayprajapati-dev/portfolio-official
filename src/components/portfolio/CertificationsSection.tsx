"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

interface Certification {
  name: string;
  provider: string;
  date: string;
  credentialId: string;
  status: "earned" | "in-progress";
  color: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect - Associate",
    provider: "Amazon Web Services",
    date: "January 2026",
    credentialId: "SAA-C03-XXXX",
    status: "earned",
    color: "from-amber-500/20 to-orange-500/20",
    skills: ["EC2", "S3", "VPC", "IAM", "RDS", "Lambda"],
  },
  {
    name: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    date: "August 2025",
    credentialId: "CLF-C02-XXXX",
    status: "earned",
    color: "from-emerald-500/20 to-teal-500/20",
    skills: ["Cloud Concepts", "Security", "Billing", "Architecture"],
  },
  {
    name: "Certified Kubernetes Administrator",
    provider: "Cloud Native Computing Foundation",
    date: "March 2026",
    credentialId: "CKA-2026-XXXX",
    status: "earned",
    color: "from-cyan-500/20 to-sky-500/20",
    skills: ["K8s Clusters", "Networking", "Security", "Storage", "Troubleshooting"],
  },
  {
    name: "HashiCorp Terraform Associate",
    provider: "HashiCorp",
    date: "June 2026",
    credentialId: "In Progress",
    status: "in-progress",
    color: "from-purple-500/20 to-violet-500/20",
    skills: ["IaC", "HCL", "State Mgmt", "Modules", "Workspaces"],
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.05)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
            {"// "}Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Cloud <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass-card rounded-xl overflow-hidden hover:border-emerald-500/25 transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <Award className="w-7 h-7 text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                        {cert.name}
                      </h3>
                      {cert.status === "earned" ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <span className="px-2 py-0.5 text-xs font-mono bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 shrink-0">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-1">{cert.provider}</p>
                    <p className="text-xs font-mono text-slate-500 mb-3">
                      {cert.date} {cert.credentialId !== "In Progress" && `• ${cert.credentialId}`}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs bg-slate-800 text-slate-400 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.status === "earned" && (
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
