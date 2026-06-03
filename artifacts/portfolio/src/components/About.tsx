import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Code2, Brain, Globe, FlaskConical } from "lucide-react";

const pillars = [
  { icon: Code2, label: "Full-Stack Engineering", color: "from-violet-500 to-purple-600" },
  { icon: Brain, label: "AI & Machine Learning", color: "from-blue-500 to-cyan-500" },
  { icon: Globe, label: "Open Source Contributor", color: "from-cyan-500 to-teal-400" },
  { icon: FlaskConical, label: "Research Enthusiast", color: "from-purple-500 to-pink-500" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.07),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-montserrat font-semibold tracking-wider text-primary uppercase">B.Tech CSE · GLA University · 2024–2028</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
                  I'm a first-year Computer Science Engineering student who jumped straight into research internships at two IITs — driven by a genuine obsession with building things that matter.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
                  My interests span the full spectrum: from architecting scalable web systems with React and Node.js to training machine learning models and contributing to open-source projects addressing real-world challenges in India.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  I believe the best software happens at the intersection of engineering precision and research curiosity. I'm actively seeking opportunities to grow alongside exceptional teams and contribute to impactful products.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass-panel rounded-xl p-6 flex flex-col items-center text-center gap-3 cursor-default transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-primary/30`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
