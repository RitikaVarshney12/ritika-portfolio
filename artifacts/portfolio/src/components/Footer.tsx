import { Link } from "wouter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Heart } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 bg-[#06060a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">RV</span>
            <span className="font-poppins font-bold text-lg text-white">Ritika<span className="text-violet-400">.</span></span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="px-4 py-1.5 rounded-lg text-sm text-white/45 hover:text-white hover:bg-white/5 transition-all">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <FaGithub size={16} />
            </a>
            <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Ritika Varshney. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose-400" /> and lots of late-night code
          </p>
        </div>
      </div>
    </footer>
  );
}
