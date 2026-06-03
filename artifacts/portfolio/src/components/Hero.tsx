import { motion } from "framer-motion";
import { Link } from "wouter";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#08080d]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_70%,rgba(6,182,212,0.10),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <ParticleCanvas />
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 py-16">
        {/* Text content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-violet-300">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-6xl xl:text-7xl font-poppins font-extrabold text-white leading-[1.08] mb-5"
          >
            Hi, I'm{" "}
            <span className="relative">
              <span className="text-gradient text-[58px]">Ritika Varshney</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg font-medium text-cyan-400/90 mb-5 font-montserrat tracking-wide"
          >
            {PORTFOLIO_DATA.personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-[15px] text-white/55 leading-relaxed mb-10 max-w-xl"
          >
            {PORTFOLIO_DATA.personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/projects"
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={PORTFOLIO_DATA.personal.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl glass-panel text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 text-sm border-white/15"
            >
              <Download size={16} />
              Resume
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all text-sm"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <a
              href={PORTFOLIO_DATA.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all group"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all"
            >
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
        >
          <div className="relative">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/40 to-cyan-500/30 blur-2xl scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 scale-105 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-cyan-500/15 scale-[1.12] animate-[spin_18s_linear_infinite_reverse]" />
            {/* Orbiting dot */}
            <div className="absolute -top-3 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "50% calc(50% + 160px)" }} />
            {/* Photo frame */}
            <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-violet-900/40">
              <img
                src="https://i.postimg.cc/MGCgGnsm/mine.jpg"
                alt="Ritika Varshney"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  (el.parentElement as HTMLElement).innerHTML = `<div class="w-full h-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 flex items-center justify-center"><span class="font-poppins font-black text-7xl text-white/40 select-none">RV</span></div>`;
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
      >
        <span className="text-[10px] font-montserrat tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
