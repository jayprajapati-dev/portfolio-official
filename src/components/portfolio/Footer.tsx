"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="relative border-t border-emerald-500/8 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Designed &amp; Built by Jay Prajapati
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/jayprajapati-dev", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jayprajapati171120/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:prajapatijay17112007@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 text-slate-600 hover:text-emerald-400 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
