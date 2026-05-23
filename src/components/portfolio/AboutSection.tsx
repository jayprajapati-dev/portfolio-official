"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Projects Built", value: "6+" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" aria-label="About Jay Prajapati" className="relative py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-number" aria-hidden="true">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <article className="space-y-4">
            <p className="text-slate-100 leading-relaxed text-base font-semibold">
              Tech Builder &amp; Cloud Enthusiast from Gujarat, India.
            </p>
            <p className="text-emerald-400/90 leading-relaxed text-sm font-mono">
              My Evolution: Diverse Web Tech → Automated SaaS Tools → Cloud Architecture.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              I am a practical problem-solver. By leveraging AI and modern tools, I craft clean logic,
              design premium minimalist interfaces, and architect robust cloud setups. I care deeply about
              fast, secure, and cost-effective deployments that deliver real value.
            </p>
            </article>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 pt-4" role="list" aria-label="Key statistics">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-lg px-5 py-3 text-center min-w-[120px]"
                  role="listitem"
                >
                  <div className="text-xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
            aria-label="Developer profile in JSON format"
          >
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/40 border-b border-emerald-500/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" aria-hidden="true" />
                <span className="text-[11px] font-mono text-slate-500 ml-2">about.sh</span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <p className="text-emerald-400">
                  <span className="text-slate-600">$</span> cat about.json
                </p>
                <div className="mt-2.5 text-slate-400">
                  <p><span className="text-emerald-400">&quot;name&quot;</span>: <span className="text-amber-300">&quot;Jay Prajapati&quot;</span>,</p>
                  <p><span className="text-emerald-400">&quot;location&quot;</span>: <span className="text-amber-300">&quot;Palanpur, Gujarat&quot;</span>,</p>
                  <p><span className="text-emerald-400">&quot;role&quot;</span>: <span className="text-amber-300">&quot;Aspiring Cloud &amp; Software Engineer&quot;</span>,</p>
                  <p><span className="text-emerald-400">&quot;focus&quot;</span>: <span className="text-amber-300">&quot;Scalable Infrastructure&quot;</span></p>
                </div>
                <p className="mt-2.5 text-emerald-400">
                  <span className="text-slate-600">$</span> <span className="cursor-blink" aria-hidden="true">_</span>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
