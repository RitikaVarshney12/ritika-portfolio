import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Mail, Phone, MapPin, Download, Copy, Check, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_64msgd8";
const EMAILJS_TEMPLATE_ID = "template_j52jk5n";
const EMAILJS_PUBLIC_KEY = "t5obnaV-lYjQD4gNJ";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handle} className="ml-1.5 text-muted-foreground hover:text-accent transition-colors" aria-label="Copy">
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
    </button>
  );
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ from_name: "", reply_to: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.from_name.trim()) e.from_name = "Name is required";
    if (!form.reply_to.trim()) e.reply_to = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.reply_to)) e.reply_to = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("success");
      setForm({ from_name: "", reply_to: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: PORTFOLIO_DATA.personal.email, href: `mailto:${PORTFOLIO_DATA.personal.email}`, copyable: true },
    { icon: Phone, label: "Phone", value: PORTFOLIO_DATA.personal.phone, href: `tel:${PORTFOLIO_DATA.personal.phone}`, copyable: true },
    { icon: MapPin, label: "Location", value: PORTFOLIO_DATA.personal.location, href: undefined, copyable: false },
  ];

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(124,58,237,0.12),transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-violet-500/0 via-violet-500/40 to-violet-500/0" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-montserrat font-semibold tracking-widest uppercase text-cyan-400 mb-3 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-poppins font-extrabold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you have an opportunity, a collaboration idea, or just want to say hello — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-panel rounded-2xl p-7">
              <h3 className="font-poppins font-bold text-white mb-6 text-lg">Contact Details</h3>
              <div className="space-y-5">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-violet-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/30 mb-0.5">{item.label}</span>
                      <div className="flex items-center gap-1">
                        {item.href ? (
                          <a href={item.href} className="text-sm text-white/75 hover:text-white transition-colors truncate">{item.value}</a>
                        ) : (
                          <span className="text-sm text-white/75 truncate">{item.value}</span>
                        )}
                        {item.copyable && <CopyButton text={item.value} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-7">
              <h3 className="font-poppins font-bold text-white mb-5 text-lg">Online Profiles</h3>
              <div className="flex flex-col gap-3">
                <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-blue-600/10 border border-blue-600/20 text-white/75 hover:bg-blue-600/20 hover:text-white transition-all group">
                  <FaLinkedin size={17} className="text-blue-400" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/75 hover:bg-white/10 hover:text-white transition-all group">
                  <FaGithub size={17} className="text-white/60" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href={PORTFOLIO_DATA.personal.resumeLink} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 border border-violet-500/25 text-white/75 hover:opacity-90 transition-all group">
                  <Download size={17} className="text-cyan-400" />
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-2xl p-8 md:p-10 h-full flex flex-col">
              <h3 className="font-poppins font-bold text-white text-xl mb-7">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/35">Your Name</label>
                    <input
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={`bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.07] transition-all ${errors.from_name ? "border-rose-500/50 focus:border-rose-500/70" : "border-white/10 focus:border-violet-500/50"}`}
                    />
                    {errors.from_name && <span className="text-xs text-rose-400">{errors.from_name}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/35">Email Address</label>
                    <input
                      name="reply_to"
                      type="email"
                      value={form.reply_to}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.07] transition-all ${errors.reply_to ? "border-rose-500/50 focus:border-rose-500/70" : "border-white/10 focus:border-violet-500/50"}`}
                    />
                    {errors.reply_to && <span className="text-xs text-rose-400">{errors.reply_to}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[10px] font-montserrat font-semibold tracking-widest uppercase text-white/35">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project, or idea..."
                    rows={7}
                    className={`bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.07] transition-all resize-none ${errors.message ? "border-rose-500/50 focus:border-rose-500/70" : "border-white/10 focus:border-violet-500/50"}`}
                  />
                  {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20 text-sm"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm"
                  >
                    <Check size={16} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-sm"
                  >
                    Something went wrong. Please email directly at {PORTFOLIO_DATA.personal.email}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
