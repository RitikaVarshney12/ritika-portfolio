import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    role: "B.Tech — Computer Science Engineering",
    org: "GLA University",
    period: "2024 – 2028",
    location: "Mathura, Uttar Pradesh",
    description: "Building a rigorous foundation in computer science, algorithms, software engineering, AI/ML, and full-stack web development. Active researcher and open-source contributor since Year 1.",
    gradient: "from-violet-500 to-purple-700",
    glow: "shadow-violet-500/25",
    highlight: true,
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Summer School 2026 — Data Science & AI",
    org: "IIT Jammu",
    period: "2026",
    location: "Remote",
    description: "Selected for the prestigious IIT Jammu Summer School 2026 Internship Program specializing in Data Science and Artificial Intelligence. Exposure to advanced AI concepts, data science methodologies, and research-based learning directly from IIT faculty and researchers.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    highlight: false,
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Summer Research Intern — VLED Lab",
    org: "IIT Ropar",
    period: "2026",
    location: "Remote",
    description: "Contributing to live open-source software repositories at the Vicharanashala Lab for Education Design (VLED Lab), addressing real India-centric educational challenges. Making direct code contributions to publicly accessible repositories, collaborating with research mentors and fellow developers, solving technical bottlenecks, and maintaining quality standards.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "shadow-blue-500/20",
    highlight: false,
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Java Development Intern",
    org: "Pinnacle Labs",
    period: "2026",
    location: "Remote",
    description: "Worked on practical Java development tasks within real software engineering workflows. Gained hands-on experience in object-oriented application development, design patterns, and industry-standard practices.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    highlight: false,
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Software Intern",
    org: "Astrea IT Services",
    period: "2026",
    location: "Remote",
    description: "Participated in industry-oriented software training and professional development programs. Gained exposure to software development workflows, team collaboration, and professional communication in a technology-focused environment.",
    gradient: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
    highlight: false,
  },
];

export function Experience() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(37,99,235,0.08),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">Journey</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-poppins font-extrabold text-white mb-4">
            Education &amp; <span className="text-gradient">Experience</span>
          </h1>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Spine */}
          <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500/80 via-cyan-500/40 to-transparent" />

          <div className="flex flex-col gap-6">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="relative flex gap-7"
                >
                  {/* Timeline icon */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl ${item.glow}`}>
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex-1 glass-panel rounded-2xl p-6 transition-all duration-300 group border-white/[0.07] hover:border-white/18 ${item.highlight ? "border-violet-500/20" : ""}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-poppins font-bold text-white text-base leading-tight mb-1 group-hover:text-gradient transition-all">{item.role}</h3>
                        <p className={`font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>{item.org}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-[11px] text-white/35 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={10} />{item.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={10} />{item.location}</span>
                      </div>
                    </div>
                    <p className="text-white/45 text-[13px] leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
