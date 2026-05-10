import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/src/lib/utils";

const experiences = [
  {
    role: "Frontend, Backend Developer & Tester",
    company: "Dự Án Thực Tập Tốt Nghiệp (TTTN)",
    period: "15/03/2026 - 05/05/2026",
    location: "Trường Đại học",
    description: "Lên kế hoạch dự án và thiết kế giao diện UI/UX. Xây dựng database, logic xử lý Backend và API. Lên kịch bản và thực hiện kiểm thử thủ công (manual testing) cho từng chức năng nhằm đảm bảo chất lượng sản phẩm trước khi báo cáo.",
    tags: ["ReactJS", "Node.js", "QA/QC", "Manual Testing"]
  },
  {
    role: "Frontend, Backend Developer & Tester",
    company: "Sandra Store (MERN Stack) — Đồ án Chuyên ngành",
    period: "20/10/2025 - 24/01/2026",
    location: "Đồ án Môn học",
    description: "Tham gia từ khâu thu thập yêu cầu, định hình thiết kế giao diện (UI) đến lập trình luồng người dùng (UX). Xây dựng logic Backend và thực hiện các bộ Test Case/Test Plan chuyên sâu bao quát quy trình xem hàng đến thanh toán.",
    tags: ["Frontend", "Backend", "Test Case/Plan", "E-commerce"]
  },
  {
    role: "Frontend Developer & Tester",
    company: "Nền tảng TMĐT (UDTMDT)",
    period: "22/09/2025 - 17/12/2025",
    location: "Đồ án Môn học",
    description: "Tập trung xây dựng giao diện người dùng và chức năng quản lý, phân loại sản phẩm. Đồng thời, tôi tiến hành các bài kiểm thử thực tế về giao diện (UI) cùng trải nghiệm thao tác (UX) trên nền tảng staging.",
    tags: ["UI/UX Design", "Frontend Dev", "UI Testing", "UX Flow"]
  },
  {
    role: "Backend Developer & Tester",
    company: "Hệ thống Quản lý Thư viện (OOP & SQL Server)",
    period: "20/06/2025 - 01/09/2025",
    location: "Đồ án Môn học",
    description: "Thiết kế kiến trúc cơ sở dữ liệu và xây dựng logic nghiệp vụ (quản lý sách, mượn/trả) sử dụng kiến trúc OOP. Áp dụng các kỹ thuật phân tích giá trị biên và kiểm thử chức năng (Functional Testing) một cách bài bản.",
    tags: ["C#", "SQL Server", "Functional Test", "Boundary Analysis"]
  },
  {
    role: "Frontend Developer & Tester",
    company: "Website Cơ Bản (LAP_TRINH_WEB)",
    period: "16/09/2025 - 17/12/2025",
    location: "Đồ án Cơ sở",
    description: "Xây dựng các module giao diện đồ họa cơ bản và tích hợp các ràng buộc dữ liệu phía Front-end. Lên kết hoạch và kiểm thử tính tương thích (Cross-browser, Responsive) để đảm bảo việc hiển thị đúng trên nhiều thiết bị.",
    tags: ["HTML/CSS", "Javascript", "Responsive Design", "Cross-browser Testing"]
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          {/* Sidebar Area */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Lộ Trình <br />Thực Hành</h2>
              <p className="text-slate-400 mb-8 max-w-sm">
                Nhật ký về sự phát triển chuyên môn, kinh nghiệm tích lũy qua các dự án và đồ án môn học.
              </p>
              
              <div className="space-y-4">
                <div className="p-6 glass rounded-2xl border border-brand-cyan/20 cursor-pointer hover:bg-brand-cyan/10 transition-colors">
                  <h4 className="text-brand-cyan font-bold mb-1">Học viện Hàng không Việt Nam</h4>
                  <p className="text-white text-sm font-medium">Ngành Công nghệ Thông tin</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                    <Calendar size={12} /> 2023 - 2026
                  </div>
                </div>
                
                <div className="p-6 glass border-white/5 rounded-2xl">
                  <h4 className="text-white font-bold mb-1">GPA: 2.86 / 4.0</h4>
                  <p className="text-slate-500 text-xs">Phân tích hệ thống & Kiểm thử</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience List */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="group relative pl-8 border-l border-white/10 hover:border-cyan-500/30 transition-colors pb-8 last:pb-0"
              >
                {/* Timeline Dot from theme */}
                <div className={cn(
                  "absolute w-2 h-2 rounded-full left-[-4.5px] top-2 transition-all duration-300",
                  idx === 0 ? "bg-cyan-400 shadow-[0_0_8px_cyan]" : "bg-white/30 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_cyan]"
                )} />

                <div className="text-xs font-mono font-bold text-cyan-400 mb-2 tracking-widest">{exp.period}</div>
                <div className="glass px-6 py-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-cyan/5">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-3">@ {exp.company} — {exp.location}</p>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-mono border border-white/5 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
