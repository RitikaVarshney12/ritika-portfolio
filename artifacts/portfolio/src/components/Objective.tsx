import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Target } from "lucide-react";

export function Objective() {
  return (
    <section id="objective" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
              <Target size={26} className="text-white" />
            </div>

            <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-4 block">Career Objective</span>

            <blockquote className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl mx-auto">
              <span className="text-4xl text-primary/60 leading-none font-serif">"</span>
              {PORTFOLIO_DATA.personal.objective}
              <span className="text-4xl text-primary/60 leading-none font-serif">"</span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
