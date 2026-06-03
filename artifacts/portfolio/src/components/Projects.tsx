import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";

const projectColors = [
  "from-violet-500/20 to-blue-500/10",
  "from-cyan-500/20 to-emerald-500/10",
];

const borderColors = [
  "hover:border-violet-500/40",
  "hover:border-cyan-500/40",
];

const badgeColors = [
  "bg-violet-500/15 border-violet-500/30 text-violet-300",
  "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Projects where engineering meets creativity — built to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`glass-panel rounded-2xl overflow-hidden group transition-all duration-300 ${borderColors[i]}`}
            >
              {/* Card top gradient band */}
              <div className={`h-2 bg-gradient-to-r ${i === 0 ? "from-violet-500 via-purple-500 to-blue-500" : "from-cyan-500 via-teal-400 to-emerald-500"}`} />

              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-poppins font-bold text-white text-xl leading-tight mb-1 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/30 transition-all"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${badgeColors[i]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className={i === 0 ? "text-violet-400 flex-shrink-0" : "text-cyan-400 flex-shrink-0"} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
