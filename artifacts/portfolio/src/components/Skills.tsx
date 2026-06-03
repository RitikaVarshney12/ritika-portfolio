import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Code2, Globe, Database, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "Programming",
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/20",
    skills: PORTFOLIO_DATA.skills.programming,
  },
  {
    icon: Globe,
    label: "Web Development",
    color: "from-blue-500 to-indigo-500",
    glow: "group-hover:shadow-blue-500/20",
    skills: PORTFOLIO_DATA.skills.web,
  },
  {
    icon: Database,
    label: "Databases",
    color: "from-cyan-500 to-teal-500",
    glow: "group-hover:shadow-cyan-500/20",
    skills: PORTFOLIO_DATA.skills.databases,
  },
  {
    icon: Brain,
    label: "AI & Data Science",
    color: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-pink-500/20",
    skills: PORTFOLIO_DATA.skills.aiDs,
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    color: "from-emerald-500 to-green-500",
    glow: "group-hover:shadow-emerald-500/20",
    skills: PORTFOLIO_DATA.skills.tools,
  },
  {
    icon: Users,
    label: "Professional Skills",
    color: "from-orange-500 to-amber-500",
    glow: "group-hover:shadow-orange-500/20",
    skills: PORTFOLIO_DATA.skills.professional,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.07),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-panel rounded-2xl p-6 group transition-all duration-300 hover:border-white/25 hover:shadow-xl ${cat.glow}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}>
                  <cat.icon size={20} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/8 border border-white/10 text-white/80 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
