import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    role: "B.Tech — Computer Science Engineering",
    org: "GLA University",
    period: "2024 – 2028",
    location: "Mathura, Uttar Pradesh",
    description: "Building a strong foundation in computer science, software engineering, AI/ML, and full-stack web development. Active participant in research and open-source initiatives from the first year itself.",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Summer School 2026 Intern",
    org: "IIT Jammu",
    period: "Summer 2026",
    location: "Jammu, India",
    description: "Selected for the prestigious Summer School 2026 Internship Program in Data Science & Artificial Intelligence. Exposure to advanced AI concepts, data science methodologies, and research-based learning from IIT faculty.",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Summer Research Intern — VLED Lab",
    org: "IIT Ropar",
    period: "Summer 2025",
    location: "Ropar, Punjab (Remote)",
    description: "Contributing to open-source software repositories addressing India-centric challenges. Direct code contributions to publicly accessible repositories. Collaborating with research mentors and fellow developers to solve technical bottlenecks and maintain development quality standards.",
    color: "from-blue-500 to-indigo-500",
    glow: "shadow-blue-500/20",
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Java Development Intern",
    org: "Pinnacle Labs",
    period: "2024",
    location: "India",
    description: "Worked on practical Java development tasks with real software engineering workflows. Gained hands-on experience in application development, object-oriented design principles, and industry-standard practices.",
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Intern",
    org: "Astrea IT Services",
    period: "2024",
    location: "India",
    description: "Participated in industry-oriented software training and professional development programs. Gained exposure to software development workflows, team collaboration, and professional communication in a tech environment.",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.07),transparent_50%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">Journey</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Education &amp; <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Icon dot on line */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow}`}>
                    <item.icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-panel rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-poppins font-semibold text-white text-lg leading-tight group-hover:text-gradient transition-all">{item.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{item.org}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={11} />{item.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
