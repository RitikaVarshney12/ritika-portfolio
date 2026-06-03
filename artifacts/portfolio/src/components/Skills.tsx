import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Code2, Globe, Database, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  { icon: Code2,   label: "Programming Languages", color: "from-violet-500 to-purple-700", border: "hover:border-violet-500/35",  glow: "group-hover:shadow-violet-500/15", skills: PORTFOLIO_DATA.skills.programming },
  { icon: Globe,   label: "Web Development",        color: "from-blue-500 to-indigo-600",  border: "hover:border-blue-500/35",    glow: "group-hover:shadow-blue-500/15",   skills: PORTFOLIO_DATA.skills.web        },
  { icon: Database,label: "Databases",              color: "from-cyan-500 to-teal-600",    border: "hover:border-cyan-500/35",    glow: "group-hover:shadow-cyan-500/15",   skills: PORTFOLIO_DATA.skills.databases  },
  { icon: Brain,   label: "AI & Data Science",      color: "from-pink-500 to-rose-600",    border: "hover:border-pink-500/35",    glow: "group-hover:shadow-pink-500/15",   skills: PORTFOLIO_DATA.skills.aiDs       },
  { icon: Wrench,  label: "Tools & Platforms",      color: "from-emerald-500 to-green-600",border: "hover:border-emerald-500/35", glow: "group-hover:shadow-emerald-500/15",skills: PORTFOLIO_DATA.skills.tools      },
  { icon: Users,   label: "Professional Skills",    color: "from-orange-400 to-amber-600", border: "hover:border-orange-400/35",  glow: "group-hover:shadow-orange-400/15", skills: PORTFOLIO_DATA.skills.professional},
];

const techLogos: Record<string,string> = {
  Java:"☕","C++":"⚡",Python:"🐍",HTML:"🌐",CSS:"🎨","React.js":"⚛️","Node.js":"🟢",
  MySQL:"🗄️",MongoDB:"🍃",SQLite:"📦","Machine Learning":"🤖","Data Science":"📊",
  "Computer Vision":"👁️",Git:"🌿",GitHub:"🐙","VS Code":"💻",
  "Problem Solving":"🧩",Teamwork:"🤝",Leadership:"🎯",Communication:"💬",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(6,182,212,0.08),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm mt-4">A growing toolkit built through projects, internships, and a genuine love for learning.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`glass-panel rounded-2xl p-7 group transition-all duration-300 border border-white/[0.07] ${cat.border} hover:shadow-xl ${cat.glow}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                  <cat.icon size={21} className="text-white" />
                </div>
                <h3 className="font-poppins font-bold text-white text-sm leading-tight">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span key={skill} whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/[0.08] text-white/70 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-default">
                    <span>{techLogos[skill] ?? "▸"}</span>{skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
