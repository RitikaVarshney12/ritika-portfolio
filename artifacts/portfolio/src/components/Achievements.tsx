import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Award, Star, Trophy, Zap, BookOpen, Lightbulb } from "lucide-react";

const icons = [Trophy, Award, Zap, Star, BookOpen, Lightbulb];

const gradients = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-orange-400 to-amber-500",
  "from-indigo-500 to-blue-600",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,rgba(6,182,212,0.07),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {PORTFOLIO_DATA.achievements.map((achievement, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={achievement}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl p-7 flex items-start gap-4 group transition-all duration-300 hover:border-white/20"
              >
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm leading-relaxed">{achievement}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
