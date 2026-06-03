import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",         id: "hero"          },
  { label: "About",        id: "about"         },
  { label: "Experience",   id: "experience"    },
  { label: "Skills",       id: "skills"        },
  { label: "Projects",     id: "projects"      },
  { label: "Achievements", id: "achievements"  },
  { label: "Contact",      id: "contact"       },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeId, setActiveId]       = useState("hero");

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.25, rootMargin: "-72px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = useCallback((id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08080d]/90 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-2xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNav("hero")}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
            RV
          </span>
          <span className="font-poppins font-bold text-lg tracking-tight text-white">
            Ritika<span className="text-violet-400">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeId === link.id
                  ? "text-white bg-white/8"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              )}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="ml-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 cursor-pointer"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-6 flex flex-col gap-1 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all text-left cursor-pointer ${
                activeId === link.id
                  ? "text-white bg-white/10 border border-white/10"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold text-center cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
