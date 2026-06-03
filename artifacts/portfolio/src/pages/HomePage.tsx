import { Hero } from "@/components/Hero";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  User, Briefcase, Code2, FolderGit2, Trophy, Mail, ArrowRight
} from "lucide-react";

const sections = [
  { icon: User,        label: "About Me",        sub: "Background & passions",            href: "/about",        gradient: "from-violet-500 to-purple-700" },
  { icon: Briefcase,   label: "Experience",       sub: "IIT internships & education",      href: "/experience",   gradient: "from-blue-500 to-indigo-600"  },
  { icon: Code2,       label: "Skills",           sub: "Tech stack & tools",               href: "/skills",       gradient: "from-cyan-500 to-teal-600"    },
  { icon: FolderGit2,  label: "Projects",         sub: "Featured builds",                  href: "/projects",     gradient: "from-emerald-500 to-green-600" },
  { icon: Trophy,      label: "Achievements",     sub: "Milestones & contributions",       href: "/achievements", gradient: "from-pink-500 to-rose-600"    },
  { icon: Mail,        label: "Contact",          sub: "Let's connect",                    href: "/contact",      gradient: "from-orange-400 to-amber-500" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section navigation cards */}
      <div className="relative bg-[#08080d] py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.07),transparent)]" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-montserrat font-semibold tracking-widest uppercase text-violet-400 mb-2">Explore Portfolio</p>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white">Navigate the Sections</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sections.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={s.href}
                  className="group flex items-center gap-4 p-5 glass-panel rounded-2xl border-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white leading-tight">{s.label}</p>
                    <p className="text-xs text-white/40 truncate">{s.sub}</p>
                  </div>
                  <ArrowRight size={14} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
