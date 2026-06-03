import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Check, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-muted-foreground hover:text-white transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
    </button>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xanypqkb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-accent mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm">
            Whether you have an opportunity, a project, or just want to say hi — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-poppins font-semibold text-white mb-5 text-lg">Contact Details</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: PORTFOLIO_DATA.personal.email, copyable: true },
                  { icon: Phone, label: "Phone", value: PORTFOLIO_DATA.personal.phone, copyable: true },
                  { icon: MapPin, label: "Location", value: PORTFOLIO_DATA.personal.location, copyable: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="text-sm text-white/85 truncate">{item.value}</span>
                      {item.copyable && <CopyButton text={item.value} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-poppins font-semibold text-white mb-5 text-lg">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600/15 border border-blue-600/30 text-white/85 hover:bg-blue-600/25 hover:text-white transition-all group"
                >
                  <FaLinkedin size={18} className="text-blue-400" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/85 hover:bg-white/10 hover:text-white transition-all group"
                >
                  <FaGithub size={18} className="text-white/70" />
                  <span className="text-sm font-medium">GitHub Profile</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-white/85 hover:opacity-90 transition-all group"
                >
                  <Download size={18} className="text-accent" />
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 h-full flex flex-col gap-5">
              <h3 className="font-poppins font-semibold text-white text-lg mb-1">Send a Message</h3>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or anything..."
                  required
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all resize-none flex-1"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-emerald-400 font-medium"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-rose-400 font-medium"
                >
                  Something went wrong. Please try emailing directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
