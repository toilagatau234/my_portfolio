import { motion } from "motion/react";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="space-y-4 mb-8">
            <h2 className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase">// Kỹ sư Phát triển & Kiểm thử Phần mềm</h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] tracking-tighter">
              NGUYỄN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase">
                QUỐC ANH.
              </span>
            </h1>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Sinh viên năm cuối <span className="text-white font-medium">Học viện Hàng không Việt Nam</span>. 
            Tôi kết hợp tư duy logic của một <span className="text-cyan-400">Developer</span> và sự tỉ mỉ của một <span className="text-purple-400">Tester</span> để tạo ra những sản phẩm phần mềm hoàn thiện nhất.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold flex items-center gap-2 hover:bg-cyan-500/20 transition-all"
            >
              Xem Dự Án <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-8 rounded-xl border border-white/10 hover:bg-white/5 text-white font-semibold flex items-center gap-2 transition-all"
            >
              Kết Nối Ngay
            </motion.a>
            <motion.a
              href="/Nguyen-Quoc-Anh-CV.pdf"
              download="Nguyen-Quoc-Anh-CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold flex items-center gap-2 transition-all group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> Tải CV
            </motion.a>
          </div>
        </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Cuộn để khám phá</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-50" />
          </motion.div>
        
        {/* Visual Element / Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Background geometric shapes */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [6, 8, 6]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 rounded-3xl blur-3xl" 
            />
            
            <motion.div 
              variants={{
                initial: { scale: 1, rotate: -3 },
                hover: { scale: 1.02, rotate: 1 }
              }}
              whileHover="hover"
              initial="initial"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 border border-white/10 rounded-3xl backdrop-blur-3xl overflow-hidden shadow-2xl group/avatar"
            >
              <motion.img 
                src="/profile.jpg" 
                alt="Profile" 
                loading="lazy"
                decoding="async"
                variants={{
                  hover: { scale: 1.12 }
                }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Cinematic Shine Effect */}
              <motion.div 
                variants={{
                  hover: { x: "100%" }
                }}
                initial={{ x: "-100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" 
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-cyan p-0.5">
                    <img 
                      src="/profile.jpg" 
                      alt="Avatar" 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Nguyễn Quốc Anh</h3>
                    <p className="text-xs text-gray-400">QC Engineer Intern</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating floating floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 px-4 py-3 glass rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-xs font-mono">React v19.x</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-16 px-4 py-3 glass rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <MousePointer2 className="text-brand-cyan" size={16} />
                <span className="text-xs font-mono">Clean Architecture</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
