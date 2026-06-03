import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Heart, Mail } from "lucide-react";

const anchorLinks = [
  { label: "About",        id: "about"        },
  { label: "Experience",   id: "experience"   },
  { label: "Skills",       id: "skills"       },
  { label: "Projects",     id: "projects"     },
  { label: "Achievements", id: "achievements" },
  { label: "Contact",      id: "contact"      },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-14 pb-10 bg-[#06060a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group mb-4 cursor-pointer">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">RV</span>
              <span className="font-poppins font-bold text-lg text-white">Ritika<span className="text-violet-400">.</span></span>
            </button>
            <p className="text-xs text-white/35 leading-relaxed max-w-xs">
              B.Tech CSE student at GLA University. Research intern at IIT Ropar & IIT Jammu. Passionate about building impactful software at the edge of engineering and AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/30 mb-4">Navigate</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {anchorLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)}
                  className="text-sm text-white/45 hover:text-white transition-colors text-left cursor-pointer">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/30 mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-white transition-colors">
                <Mail size={14} className="text-violet-400" />{PORTFOLIO_DATA.personal.email}
              </a>
              <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-white transition-colors">
                <FaGithub size={14} className="text-white/50" />GitHub Profile
              </a>
              <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/45 hover:text-white transition-colors">
                <FaLinkedin size={14} className="text-blue-400" />LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <p>© {new Date().getFullYear()} Ritika Varshney. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <Heart size={10} className="text-rose-400" /> and lots of late-night code</p>
        </div>
      </div>
    </footer>
  );
}
