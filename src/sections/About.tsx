import { motion } from "motion/react";
import { Code2, Cpu, GraduationCap, Lightbulb } from "lucide-react";

const journeyData = [
  {
    year: "2022",
    title: "Bắt đầu hành trình CNTT",
    description: "Gia nhập ngành CNTT với niềm đam mê giải thuật và tư duy logic.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Khám phá Thế giới Kiểm thử",
    description: "Nhận ra tầm quan trọng của chất lượng phần mềm. Bắt đầu tìm hiểu về các loại kiểm thử.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Tối ưu hóa Tự động",
    description: "Nghiên cứu về Automation Testing, CI/CD và cách xây dựng các framework kiểm thử bền vững.",
    icon: Cpu,
  },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
            Về Tôi
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Kỹ sư Phát triển & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase italic">Đảm Bảo Chất Lượng</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-left md:text-center">
            <p>
              Rất vui vì nhà tuyển dụng đã ghé thăm! Tôi là Quốc Anh, sinh viên năm cuối ngành CNTT tại Học viện Hàng không Việt Nam. Tôi đam mê xây dựng những sản phẩm chất lượng và luôn nỗ lực học hỏi công nghệ mới để nâng cao chuyên môn.
            </p>
            <p>
              Định hướng của tôi là trở thành một QC Engineer chuyên nghiệp. Tôi khao khát được làm việc trong môi trường năng động để rèn luyện tư duy phân tích lỗi, kỹ năng viết test case và phối hợp chặt chẽ cùng đội ngũ phát triển nhằm mang lại những giải pháp phần mềm hoàn thiện nhất cho khách hàng.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 glass rounded-3xl border border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Lightbulb size={24} className="text-brand-cyan" />
                </div>
                <h4 className="text-white font-bold mb-2">Tầm Nhìn</h4>
                <p className="text-sm opacity-60">Xây dựng những sản phẩm không chỉ chạy được, mà còn phải chạy hoàn hảo và bền vững.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 glass rounded-3xl border border-white/5 hover:border-brand-purple/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} className="text-brand-purple" />
                </div>
                <h4 className="text-white font-bold mb-2">Khát Vọng</h4>
                <p className="text-sm opacity-60">Trở thành cầu nối tin cậy giữa nhà sản phẩm và người dùng cuối thông qua chất lượng.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
