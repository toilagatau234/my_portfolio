import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, Github, Linkedin, Facebook, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwpzqb";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        console.error("Error", data);
        alert("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Không thể kết nối với máy chủ. Vui lòng kiểm tra kết nối mạng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Sẵn sàng để <span className="text-gradient-cyan">Hợp tác?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Tôi đang tìm kiếm cơ hội thực tập cho năm 2026. Nếu bạn có dự án hoặc vị trí phù hợp, hãy kết nối với tôi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", damping: 20, delay: 0.2 }}
              className="p-8 glass rounded-3xl border border-white/5 space-y-8"
            >
              <h3 className="text-2xl font-display font-bold">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@nova.dev" className="flex items-center gap-4 group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-white transition-all">
                    <Mail size={20} className="text-brand-cyan group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email</p>
                    <p className="text-white font-medium">toilagatau234@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <Phone size={20} className="text-brand-purple group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Điện thoại</p>
                    <p className="text-white font-medium">078 28 08 968</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-bg-dark transition-all">
                    <MapPin size={20} className="text-gray-400 group-hover:text-bg-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Địa chỉ</p>
                    <p className="text-white font-medium">Bình Tân, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-widest">Theo dõi tôi</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                    href="https://github.com/toilagatau234"
                    target="_blank"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1, rotate: -5 }}
                    href="https://www.facebook.com/nguyen.quocanh.1102.4"
                    target="_blank"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                  >
                    <Facebook size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 20, delay: 0.4 }}
            className="p-8 md:p-12 glass rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500"
          >
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-cyan transition-colors">Họ và tên</label>
                  <input 
                    type="text" 
                    name="Họ tên"
                    required
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 hover:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-cyan transition-colors">Địa chỉ Email</label>
                  <input 
                    type="email" 
                    name="Email"
                    required
                    placeholder="email@vidu.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 hover:bg-white/10 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-cyan transition-colors">Chủ đề</label>
                <input 
                  type="text" 
                  name="Chủ đề"
                  required
                  placeholder="Yêu cầu thực tập" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 hover:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-cyan transition-colors">Lời nhắn</label>
                <textarea 
                  rows={5} 
                  name="Lời nhắn"
                  required
                  placeholder="Hãy kể cho tôi nghe về dự án của bạn..." 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 hover:bg-white/10 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  isSuccess 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-none' 
                    : 'bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-xl shadow-brand-cyan/10 hover:shadow-brand-cyan/30 hover:shadow-2xl'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-3"
                    >
                      Đang gửi... <Loader2 size={20} className="animate-spin" />
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-3"
                    >
                      Đã Gửi Thành Công <CheckCircle2 size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-3"
                    >
                      Gửi Tin Nhắn <Send size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
            
            {/* Decorative gradient in form */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
