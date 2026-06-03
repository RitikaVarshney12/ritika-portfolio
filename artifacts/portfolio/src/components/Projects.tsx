import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Github, CheckCircle2, ArrowUpRight, ArrowRight, Rocket, GitMerge } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ── Inline SVG Illustrations ───────────────────────────── */

function AttendanceIllustration() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e0a3c" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="face1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="bar1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="400" height="220" fill="url(#bg1)" rx="12" />

      {/* Grid dots */}
      {Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 6 }, (_, j) => (
          <circle key={`${i}-${j}`} cx={20 + i * 40} cy={20 + j * 36} r="1" fill="#ffffff" fillOpacity="0.06" />
        ))
      )}

      {/* Camera frame — left side */}
      <rect x="20" y="20" width="160" height="120" rx="8" fill="#0d0d1a" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.6" />
      {/* Camera lens icon */}
      <circle cx="100" cy="14" r="4" fill="#7c3aed" fillOpacity="0.8" />
      <rect x="92" y="10" width="16" height="8" rx="3" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5" />

      {/* Face detection bounding box */}
      <rect x="60" y="38" width="80" height="84" rx="4" fill="url(#face1)" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6 3" />
      {/* Corner accents */}
      {[
        [60, 38], [120, 38], [60, 102], [120, 102]
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + (i % 2 === 0 ? 8 : -8)} y2={y} stroke="#06b6d4" strokeWidth="2.5" />
          <line x1={x} y1={y} x2={x} y2={y + (i < 2 ? 8 : -8)} stroke="#06b6d4" strokeWidth="2.5" />
        </g>
      ))}

      {/* Face dots */}
      <circle cx="83" cy="62" r="3" fill="#06b6d4" fillOpacity="0.8" filter="url(#glow1)" />
      <circle cx="117" cy="62" r="3" fill="#06b6d4" fillOpacity="0.8" filter="url(#glow1)" />
      <path d="M88 88 Q100 96 112 88" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      {/* Mesh lines */}
      {[70, 80, 90, 100, 110, 120, 130].map((x) => (
        <line key={x} x1={x} y1="38" x2={x - 5} y2="122" stroke="#7c3aed" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}
      {[45, 58, 71, 84, 97, 110].map((y) => (
        <line key={y} x1="60" y1={y} x2="140" y2={y} stroke="#7c3aed" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}

      {/* "IDENTIFIED" label */}
      <rect x="62" y="110" width="76" height="14" rx="3" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="0.8" />
      <text x="100" y="120" textAnchor="middle" fontSize="7" fill="#06b6d4" fontFamily="monospace">IDENTIFIED ✓</text>

      {/* Scan line animation hint */}
      <line x1="60" y1="70" x2="140" y2="70" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.5" />

      {/* Right panel — attendance list */}
      <rect x="195" y="20" width="185" height="175" rx="8" fill="#0d0d1a" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.08" />
      <text x="210" y="38" fontSize="8" fill="#ffffff" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="600">ATTENDANCE LOG</text>
      <line x1="195" y1="44" x2="380" y2="44" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.07" />

      {/* List rows */}
      {[
        { name: "Ritika V.", time: "09:01", status: true },
        { name: "Arjun S.", time: "09:03", status: true },
        { name: "Priya M.", time: "09:07", status: true },
        { name: "Rahul K.", time: "09:12", status: false },
        { name: "Sneha T.", time: "09:15", status: true },
        { name: "Dev P.", time: "—", status: false },
      ].map((row, i) => (
        <g key={i}>
          <rect x="195" y={48 + i * 24} width="185" height="23" fill={i % 2 === 0 ? "#ffffff" : "transparent"} fillOpacity="0.02" />
          <circle cx="208" cy={61 + i * 24} r="4" fill={row.status ? "#10b981" : "#ef4444"} fillOpacity="0.85" />
          <text x="218" y={64 + i * 24} fontSize="7.5" fill="#ffffff" fillOpacity="0.75" fontFamily="sans-serif">{row.name}</text>
          <text x="330" y={64 + i * 24} fontSize="7" fill="#ffffff" fillOpacity="0.4" fontFamily="monospace">{row.time}</text>
          <text x="360" y={64 + i * 24} fontSize="7" fill={row.status ? "#10b981" : "#ef4444"} fontFamily="sans-serif">{row.status ? "✓" : "✗"}</text>
        </g>
      ))}

      {/* Stats bar */}
      <rect x="195" y="196" width="185" height="1" fill="#ffffff" fillOpacity="0.06" />
      <rect x="200" y="200" width="60" height="10" rx="5" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="0.6" />
      <text x="230" y="208" textAnchor="middle" fontSize="6.5" fill="#10b981" fontFamily="sans-serif">5 Present</text>
      <rect x="268" y="200" width="50" height="10" rx="5" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.6" />
      <text x="293" y="208" textAnchor="middle" fontSize="6.5" fill="#ef4444" fontFamily="sans-serif">1 Absent</text>

      {/* Accuracy badge */}
      <rect x="20" y="155" width="160" height="30" rx="6" fill="#7c3aed" fillOpacity="0.12" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="50" y="168" fontSize="7" fill="#a78bfa" fontFamily="sans-serif">Recognition Accuracy</text>
      <text x="50" y="178" fontSize="9" fill="#ffffff" fontFamily="monospace" fontWeight="700">97.3%</text>
      <rect x="120" y="161" width="48" height="18" rx="4" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.7" />
      <text x="144" y="173" textAnchor="middle" fontSize="7.5" fill="#10b981" fontFamily="sans-serif">Live ●</text>

      {/* Top-right label */}
      <rect x="310" y="8" width="80" height="14" rx="7" fill="#7c3aed" fillOpacity="0.25" />
      <text x="350" y="18" textAnchor="middle" fontSize="7" fill="#a78bfa" fontFamily="sans-serif">AI · OpenCV</text>
    </svg>
  );
}

function ParkingIllustration() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#051a10" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="slot-free" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="slot-occ" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="400" height="220" fill="url(#bg2)" rx="12" />

      {/* Road surface — top-down */}
      <rect x="18" y="18" width="220" height="186" rx="8" fill="#0a1212" stroke="#1a2a1a" strokeWidth="1" />

      {/* Road markings */}
      <rect x="116" y="18" width="2" height="186" fill="#ffffff" fillOpacity="0.06" />
      {[30, 60, 110, 140].map((y) => (
        <rect key={y} x="18" y={y} width="220" height="1" fill="#ffffff" fillOpacity="0.04" />
      ))}

      {/* Top row — slots */}
      {[0, 1, 2, 3].map((i) => {
        const occupied = [false, true, false, true][i];
        const x = 24 + i * 52;
        return (
          <g key={`t${i}`}>
            <rect x={x} y="24" width="44" height="30" rx="3" fill={occupied ? "url(#slot-occ)" : "url(#slot-free)"} stroke={occupied ? "#ef4444" : "#10b981"} strokeWidth="0.8" strokeOpacity="0.6" />
            <text x={x + 22} y="43" textAnchor="middle" fontSize="7" fill={occupied ? "#ef4444" : "#10b981"} fontFamily="monospace">{`P${i + 1}`}</text>
            {occupied && (
              <g>
                <rect x={x + 8} y="28" width="28" height="18" rx="4" fill="#ef4444" fillOpacity="0.18" stroke="#ef4444" strokeWidth="0.6" />
                <rect x={x + 14} y="26" width="16" height="4" rx="2" fill="#ef4444" fillOpacity="0.3" />
              </g>
            )}
          </g>
        );
      })}

      {/* Bottom row — slots */}
      {[0, 1, 2, 3].map((i) => {
        const occupied = [true, false, true, false][i];
        const x = 24 + i * 52;
        return (
          <g key={`b${i}`}>
            <rect x={x} y="150" width="44" height="30" rx="3" fill={occupied ? "url(#slot-occ)" : "url(#slot-free)"} stroke={occupied ? "#ef4444" : "#10b981"} strokeWidth="0.8" strokeOpacity="0.6" />
            <text x={x + 22} y="168" textAnchor="middle" fontSize="7" fill={occupied ? "#ef4444" : "#10b981"} fontFamily="monospace">{`P${i + 5}`}</text>
            {occupied && (
              <g>
                <rect x={x + 8} y="154" width="28" height="18" rx="4" fill="#ef4444" fillOpacity="0.18" stroke="#ef4444" strokeWidth="0.6" />
                <rect x={x + 14} y="168" width="16" height="4" rx="2" fill="#ef4444" fillOpacity="0.3" />
              </g>
            )}
          </g>
        );
      })}

      {/* Sensor dots on road */}
      {[42, 94, 146, 198].map((x) =>
        [75, 95, 115, 130].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#06b6d4" fillOpacity="0.5" filter="url(#glow2)" />
        ))
      )}

      {/* Entry arrow */}
      <path d="M100 190 L120 200 L100 210" stroke="#10b981" strokeWidth="2" fill="none" strokeOpacity="0.6" />
      <text x="65" y="205" fontSize="7" fill="#10b981" fillOpacity="0.7" fontFamily="sans-serif">ENTRY</text>

      {/* Right panel — dashboard */}
      <rect x="248" y="18" width="136" height="186" rx="8" fill="#0a0d14" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.07" />
      <text x="264" y="36" fontSize="8" fill="#ffffff" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="600">SMART PARKING</text>
      <line x1="248" y1="42" x2="384" y2="42" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.07" />

      {/* Occupancy donut — simplified */}
      <circle cx="316" cy="95" r="36" fill="none" stroke="#1a1a2e" strokeWidth="10" />
      <circle cx="316" cy="95" r="36" fill="none" stroke="url(#slot-free)" strokeWidth="10"
        strokeDasharray="113" strokeDashoffset="0" strokeLinecap="round"
        transform="rotate(-90 316 95)" />
      <circle cx="316" cy="95" r="36" fill="none" stroke="#ef4444" strokeWidth="10"
        strokeDasharray="57 56" strokeDashoffset="-113" strokeLinecap="round" strokeOpacity="0.8"
        transform="rotate(-90 316 95)" />
      <text x="316" y="91" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="monospace" fontWeight="700">50%</text>
      <text x="316" y="103" textAnchor="middle" fontSize="6.5" fill="#ffffff" fillOpacity="0.4" fontFamily="sans-serif">Occupied</text>

      {/* Stats */}
      <rect x="258" y="143" width="54" height="36" rx="6" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="0.7" />
      <text x="285" y="158" textAnchor="middle" fontSize="14" fill="#10b981" fontFamily="monospace" fontWeight="700">4</text>
      <text x="285" y="170" textAnchor="middle" fontSize="6" fill="#10b981" fontFamily="sans-serif">Available</text>

      <rect x="320" y="143" width="54" height="36" rx="6" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="0.7" />
      <text x="347" y="158" textAnchor="middle" fontSize="14" fill="#ef4444" fontFamily="monospace" fontWeight="700">4</text>
      <text x="347" y="170" textAnchor="middle" fontSize="6" fill="#ef4444" fontFamily="sans-serif">Occupied</text>

      {/* Live badge */}
      <rect x="258" y="188" width="110" height="12" rx="6" fill="#06b6d4" fillOpacity="0.1" stroke="#06b6d4" strokeWidth="0.6" />
      <circle cx="266" cy="194" r="2.5" fill="#06b6d4" />
      <text x="273" y="197" fontSize="6.5" fill="#06b6d4" fontFamily="sans-serif">Real-Time Tracking Active</text>

      {/* Top-right label */}
      <rect x="308" y="8" width="84" height="14" rx="7" fill="#06b6d4" fillOpacity="0.2" />
      <text x="350" y="18" textAnchor="middle" fontSize="7" fill="#06b6d4" fontFamily="sans-serif">C++ · OOP · DSA</text>
    </svg>
  );
}

/* ── Project data with illustration components ────────────── */

const projectMeta = [
  {
    Illustration: AttendanceIllustration,
    accent: "violet",
    gradient: "from-violet-600 via-purple-600 to-blue-600",
    borderHover: "hover:border-violet-500/40",
    glow: "hover:shadow-violet-500/20",
    badge: "bg-violet-500/15 border-violet-500/25 text-violet-300",
    tag: "Computer Vision · Python",
    tagColor: "text-violet-300",
  },
  {
    Illustration: ParkingIllustration,
    accent: "cyan",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    borderHover: "hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/20",
    badge: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
    tag: "Systems · C++",
    tagColor: "text-cyan-300",
  },
];

/* ── Floating particles for CTA card ─────────────────────── */

function MiniParticles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    x: `${5 + (i * 5.5) % 92}%`,
    y: `${10 + (i * 17) % 80}%`,
    r: i % 3 === 0 ? 2 : 1.2,
    delay: i * 0.3,
    dur: 3 + (i % 4),
  }));
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#7c3aed">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${d.dur}s`} begin={`${d.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ── Main Component ───────────────────────────────────────── */

export function Projects() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(124,58,237,0.09),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">What I've Built</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-poppins font-extrabold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            Engineering solutions to real-world problems — built end-to-end with attention to detail.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {PORTFOLIO_DATA.projects.map((project, i) => {
            const meta = projectMeta[i];
            const { Illustration } = meta;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`group relative glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${meta.glow} ${meta.borderHover} border-white/[0.07]`}
              >
                {/* Top gradient accent */}
                <div className={`h-1 bg-gradient-to-r ${meta.gradient}`} />

                {/* Illustration */}
                <div className="relative overflow-hidden bg-[#08080f]">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    <Illustration />
                  </motion.div>
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0e0e18] to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`text-[10px] font-montserrat font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${meta.badge} inline-block mb-2`}>
                        {meta.tag}
                      </span>
                      <h3 className="font-poppins font-bold text-white text-xl leading-tight group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-shrink-0 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-colors"
                    >
                      <Github size={17} />
                    </motion.a>
                  </div>

                  <p className="text-white/45 text-[13px] leading-relaxed mb-5">{project.description}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, ti) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + ti * 0.06 }}
                        whileHover={{ scale: 1.08 }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border cursor-default ${meta.badge}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-white/[0.06] pt-5">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-[13px] text-white/50">
                        <CheckCircle2 size={13} className={`${meta.tagColor} flex-shrink-0`} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width "More Coming Soon" card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 bg-[length:200%_100%] animate-[gradient_4s_linear_infinite] opacity-70" />
            <div className="absolute inset-[1.5px] rounded-3xl bg-[#0b0b14]" />

            <MiniParticles />

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                {/* Left content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-montserrat font-bold tracking-widest uppercase bg-violet-500/15 border border-violet-500/30 text-violet-300">
                      Building • Learning • Contributing
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-montserrat font-bold tracking-widest uppercase bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      Open to Internships &amp; Collaborations
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <Rocket size={24} className="text-violet-400 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-poppins font-extrabold text-white">
                      More Projects Coming Soon
                    </h2>
                  </div>

                  <p className="text-white/50 text-[14px] leading-relaxed mb-6 max-w-xl">
                    I continuously work on real-world applications, open-source contributions, full-stack web development projects, and machine learning solutions. Always exploring new technologies and building things that solve practical problems.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                    {[
                      "Full-Stack Development",
                      "Machine Learning Applications",
                      "Open Source Contributions",
                      "Research-Oriented Projects",
                      "Scalable Software Solutions",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[12px] text-white/55">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="https://github.com/RitikaVarshney12"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
                  >
                    <FaGithub size={18} />
                    View GitHub Profile
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Right — visual stat panel */}
                <div className="flex-shrink-0 w-full lg:w-64 glass-panel rounded-2xl p-6 border-white/[0.07]">
                  <div className="flex items-center gap-2 mb-4">
                    <GitMerge size={16} className="text-violet-400" />
                    <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-white/40">Activity</span>
                  </div>
                  {[
                    { label: "Repositories", val: "10+", color: "from-violet-500 to-purple-600" },
                    { label: "Contributions", val: "Active", color: "from-cyan-500 to-teal-500" },
                    { label: "Open Source PRs", val: "IIT Ropar", color: "from-emerald-500 to-green-600" },
                    { label: "Focus Areas", val: "AI & Web", color: "from-blue-500 to-indigo-600" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-xs text-white/40">{s.label}</span>
                      <span className={`text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}>{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}
