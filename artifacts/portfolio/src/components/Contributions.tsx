import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import {
  Globe, Layout, Server, Coffee, Brain, BarChart2, FlaskConical, GitMerge, Users2
} from "lucide-react";

const icons = [Globe, Layout, Server, Coffee, Brain, BarChart2, FlaskConical, GitMerge, Users2];

const gradients = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-indigo-500",
  "from-cyan-500 to-teal-500",
  "from-emerald-500 to-green-500",
  "from-pink-500 to-rose-500",
  "from-orange-400 to-amber-500",
  "from-indigo-500 to-blue-600",
  "from-teal-400 to-cyan-500",
  "from-purple-500 to-violet-600",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Contributions() {
  return (
    <section id="contributions" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.07),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Areas of <span className="text-gradient">Contribution</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {PORTFOLIO_DATA.areasOfContribution.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={area}
                variants={item}
                whileHover={{ y: -6, scale: 1.04 }}
                className="glass-panel rounded-xl p-5 flex flex-col items-center text-center gap-3 group transition-all duration-300 hover:border-white/25 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-md transition-transform group-hover:scale-110`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/85 leading-tight">{area}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
