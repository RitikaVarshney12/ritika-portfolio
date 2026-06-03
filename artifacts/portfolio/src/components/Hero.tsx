import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)]"></div>
      </div>
      
      {/* Mesh/Particles Placeholder via CSS */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel mb-6"
          >
            <span className="text-xs font-montserrat font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Available for Opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Ritika</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            {PORTFOLIO_DATA.personal.title}
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-10 max-w-2xl font-light">
            {PORTFOLIO_DATA.personal.intro}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={PORTFOLIO_DATA.personal.resumeLink} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
            
            <div className="flex gap-4 ml-4">
              <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaGithub size={22} />
              </a>
              <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-secondary transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl absolute animate-pulse"></div>
          <div className="relative w-72 h-72 rounded-full glass-panel p-2 flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl shadow-primary/20">
            {/* Abstract Avatar Placeholder */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-80 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-repeat opacity-30 mix-blend-overlay rounded-full"></div>
            <span className="absolute font-poppins font-bold text-6xl text-white/50 tracking-tighter">RV</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
