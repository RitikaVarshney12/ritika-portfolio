import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Award, Star, Trophy, Zap, BookOpen, Lightbulb, Globe, Layout, Server, Coffee, Brain, BarChart2, FlaskConical, GitMerge, Users2, Target } from "lucide-react";

const achievementIcons  = [Trophy, Award, Zap, Star, BookOpen, Lightbulb];
const achievementColors = ["from-violet-500 to-purple-700","from-blue-500 to-cyan-500","from-emerald-500 to-teal-500","from-pink-500 to-rose-600","from-orange-400 to-amber-500","from-indigo-500 to-blue-600"];
const contribIcons      = [Globe, Layout, Server, Coffee, Brain, BarChart2, FlaskConical, GitMerge, Users2];
const contribColors     = ["from-violet-500 to-purple-600","from-blue-500 to-indigo-500","from-cyan-500 to-teal-500","from-emerald-500 to-green-500","from-pink-500 to-rose-500","from-orange-400 to-amber-500","from-indigo-500 to-blue-600","from-teal-400 to-cyan-500","from-purple-500 to-violet-600"];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_40%,rgba(6,182,212,0.07),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-24">
          {PORTFOLIO_DATA.achievements.map((a, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            return (
              <motion.div key={a}
                initial={{ opacity: 0, scale: 0.88, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl p-6 flex items-start gap-4 group transition-all duration-300 hover:border-white/20 border-white/[0.07]">
                <div className={`w-12 h-12 rounded-2xl flex-shrink-0 bg-gradient-to-br ${achievementColors[i % achievementColors.length]} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                  <Icon size={21} className="text-white" />
                </div>
                <p className="text-white/70 font-medium text-sm leading-relaxed pt-1 group-hover:text-white/90 transition-colors">{a}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Areas of Contribution */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-violet-400 mb-3 block">What I Offer</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-white">
            Areas of <span className="text-gradient">Contribution</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">
          {PORTFOLIO_DATA.areasOfContribution.map((area, i) => {
            const Icon = contribIcons[i % contribIcons.length];
            return (
              <motion.div key={area}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -5, scale: 1.04 }}
                className="glass-panel rounded-xl p-5 flex flex-col items-center text-center gap-3 group transition-all duration-300 hover:border-white/20 border-white/[0.07] cursor-default">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contribColors[i % contribColors.length]} flex items-center justify-center shadow-md transition-transform group-hover:scale-110`}>
                  <Icon size={19} className="text-white" />
                </div>
                <span className="text-xs font-medium text-white/70 leading-tight group-hover:text-white/90 transition-colors">{area}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Career Objective */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border-white/[0.07]">
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-violet-500/25">
                <Target size={22} className="text-white" />
              </div>
              <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-5 block">Career Objective</span>
              <blockquote className="text-lg md:text-xl font-light text-white/65 leading-relaxed max-w-2xl mx-auto">
                <span className="text-5xl text-violet-500/40 leading-none font-serif select-none">"</span>
                {PORTFOLIO_DATA.personal.objective}
                <span className="text-5xl text-violet-500/40 leading-none font-serif select-none">"</span>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
