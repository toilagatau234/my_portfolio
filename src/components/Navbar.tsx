import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Trang chủ", href: "#home" },
  { name: "Giới thiệu", href: "#about" },
  { name: "Kỹ năng", href: "#skills" },
  { name: "Dự án", href: "#projects" },
  { name: "Kinh nghiệm", href: "#experience" },
  { name: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-shadow group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">QA</span>
          <span className="hidden sm:inline-block text-brand-cyan">My-Portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors relative pb-1",
                activeSection === link.name.toLowerCase() 
                  ? "text-white border-b border-brand-cyan" 
                  : "hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-green-400">Sẵn sàng làm việc</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Nguyen-Quoc-Anh-CV.pdf"
            download="Nguyen-Quoc-Anh-CV.pdf"
            type="application/pdf"
            className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-slate-200"
          >
            Tải CV.pdf
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-bg-dark/95 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-display font-medium transition-colors",
                    activeSection === link.name.toLowerCase() ? "text-brand-cyan" : "text-gray-400"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 border-t border-white/10 pt-6">
                <a href="#" className="text-gray-400"><Github size={24} /></a>
                <a href="#" className="text-gray-400"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
