import { motion } from "framer-motion";
import { Link } from "wouter";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Github, CheckCircle2, ArrowUpRight, Cpu, Car } from "lucide-react";

const projectMeta = [
  {
    icon: Cpu,
    accent: "violet",
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/30",
    badge: "bg-violet-500/15 border-violet-500/25 text-violet-300",
    tag: "Computer Vision · Python",
  },
  {
    icon: Car,
    accent: "cyan",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
    badge: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
    tag: "Systems · C++",
  },
];

export function Projects() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(124,58,237,0.09),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">What I've Built</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-poppins font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            Engineering solutions to real-world problems — built end-to-end with attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.projects.map((project, i) => {
            const meta = projectMeta[i];
            const Icon = meta.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`group relative glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${meta.glow} ${meta.border} border-white/[0.07]`}
              >
                {/* Top gradient band */}
                <div className={`h-1.5 bg-gradient-to-r ${meta.gradient}`} />

                {/* Mock screen preview */}
                <div className={`h-48 bg-gradient-to-br ${meta.gradient} opacity-[0.08] relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={80} className="text-white/10" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0e0e16] to-transparent" />
                </div>

                <div className="p-7 -mt-4 relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`text-[10px] font-montserrat font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${meta.badge} inline-block mb-2`}>
                        {meta.tag}
                      </span>
                      <h3 className="font-poppins font-bold text-white text-xl leading-tight group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
                    >
                      <Github size={17} />
                    </a>
                  </div>

                  <p className="text-white/45 text-[13px] leading-relaxed mb-5">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span key={tech} className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${meta.badge}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-[13px] text-white/50">
                        <CheckCircle2 size={13} className={i === 0 ? "text-violet-400 flex-shrink-0" : "text-cyan-400 flex-shrink-0"} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white/70 hover:text-white text-sm font-medium transition-all border-white/10 hover:border-white/20"
          >
            <Github size={16} />
            View all on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
