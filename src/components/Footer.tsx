import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="h-20 md:h-12 px-10 flex flex-col md:flex-row items-center justify-between border-t border-white/5 text-[10px] font-mono text-slate-500 bg-bg-dark/80 backdrop-blur-md relative z-50">
      <div className="flex flex-wrap justify-center gap-6 uppercase tracking-widest py-2 md:py-0">
         <a href="https://github.com/toilagatau234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB: toilagatau234</a>
         <a href="https://www.facebook.com/nguyen.quocanh.1102.4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FACEBOOK: QUOC ANH</a>
      </div>
      <div className="flex items-center gap-4 py-2 md:py-0">
        <span className="hidden sm:inline">VỊ TRÍ: TP. HỒ CHÍ MINH, VN</span>
        <span className="text-white bg-white/5 px-2 py-1 rounded border border-white/5">
          UTC+7 {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </span>
      </div>
    </footer>
  );
}
