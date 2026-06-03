import { motion } from "framer-motion";
import { Code2, Brain, Globe, FlaskConical, GraduationCap } from "lucide-react";

const stats = [
  { value: "2+", label: "IIT Internships",  color: "text-violet-400" },
  { value: "2+", label: "Projects Built",  color: "text-cyan-400"   },
  { value: "2024", label: "Started Coding", color: "text-blue-400"  },
  { value: "∞",   label: "Curiosity Level", color: "text-pink-400"  },
];

const pillars = [
  { icon: Code2,       label: "Full-Stack Engineering", desc: "React, Node.js, databases",     color: "from-violet-500 to-purple-700" },
  { icon: Brain,       label: "AI & Machine Learning",  desc: "Models, data science, CV",      color: "from-blue-500 to-cyan-600"    },
  { icon: Globe,       label: "Open Source",            desc: "IIT Ropar VLED Lab",            color: "from-cyan-500 to-teal-500"    },
  { icon: FlaskConical,label: "Research",               desc: "IIT Jammu DS & AI",             color: "from-pink-500 to-rose-600"    },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(124,58,237,0.09),transparent)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl p-5 text-center border-white/[0.07]">
              <div className={`text-3xl font-poppins font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-white/45 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="glass-panel rounded-3xl p-8 relative overflow-hidden border-white/[0.07]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 mb-6">
                  <GraduationCap size={15} className="text-violet-400" />
                  <span className="text-xs font-montserrat font-semibold tracking-wider text-violet-300 uppercase">B.Tech CSE · GLA University · 2024–2028</span>
                </div>
                <p className="text-white/60 leading-relaxed mb-4 text-[15px]">
                  I'm a Computer Science Engineering student passionate about building technology that creates meaningful impact. Through research internships at <span className="text-violet-300 font-medium">IIT Ropar</span> and <span className="text-cyan-300 font-medium">IIT Jammu</span>, I've had the opportunity to collaborate on innovative projects, tackle real-world challenges, and strengthen both my technical and problem-solving skills.
                </p>
                <p className="text-white/60 leading-relaxed mb-4 text-[15px]">
                  My work spans the full stack — from crafting intuitive React interfaces and developing scalable Node.js applications to exploring machine learning and contributing to open-source initiatives. I enjoy transforming ideas into practical solutions that are both efficient and user-focused.
                </p>
                <p className="text-white/60 leading-relaxed text-[15px]">
                  I believe great software is built through <span className="text-white/80">curiosity</span>, <span className="text-white/80">collaboration</span>, and <span className="text-white/80">continuous improvement</span>. I'm always eager to learn, take on new challenges, and contribute to projects that make a difference.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Problem Solver", "Team Player", "Fast Learner", "Open Source Contributor"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-panel rounded-2xl p-6 flex flex-col gap-3 group cursor-default hover:border-white/20 transition-all duration-300 border-white/[0.07]">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight mb-0.5">{item.label}</p>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
