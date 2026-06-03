import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white">RV</span>
          <span className="font-poppins font-semibold text-white">Ritika Varshney</span>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          Crafted with <Heart size={12} className="text-rose-400" /> by Ritika &middot; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
