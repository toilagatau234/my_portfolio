import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, Rocket, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState, useEffect } from "react";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  role: string;
  frontend: string;
  backend: string;
  image: string;
  images?: string[];
  tags: string[];
  links: { github: string; live: string };
  gridClass: string;
};

const projects: Project[] = [
  {
    title: "Sandra Store",
    description: "Nền tảng thương mại điện tử MERN Stack. Tôi đảm nhận xây dựng toàn bộ mã nguồn Frontend, Backend và đồng thời thực hiện kiểm thử quy trình checkout chuyên sâu.",
    fullDescription: "Sandra Store là một nền tảng thương mại điện tử hoàn chỉnh được xây dựng trên MERN Stack. Dự án tập trung vào trải nghiệm mua sắm trực tuyến mượt mà và quản lý đơn hàng hiệu quả. Trong dự án này, tôi không chỉ tham gia phát triển từ Frontend đến Backend mà còn chịu trách nhiệm thiết lập và chạy các kịch bản kiểm thử đảm bảo quy trình thanh toán không xảy ra lỗi.",
    date: "20/10/2025 - 24/01/2026",
    role: "Frontend, Backend Developer & Tester",
    frontend: "ReactJS, Tailwind CSS",
    backend: "Node.js, Express, MongoDB",
    image: "/Picture1.sandra.png",
    images: [
      "/Picture2.sandra.png",
      "/Picture3.sandra.png",
      "/Picture4.sandra.png",
      "/Picture5.sandra.png",
      "/Picture6.sandra.png",
      "/Picture7.sandra.png",
      "/Picture8.sandra.png",
      "/Picture9.sandra.png"
    ],
    tags: ["ReactJS", "Node.js", "MongoDB", "Manual Testing", "API Test"],
    links: { github: "https://github.com/toilagatau234/sandra_store", live: "https://sandra-store.vercel.app/" },
    gridClass: "lg:col-span-2 lg:row-span-2"
  },
  {
    title: "UDTMDT Project",
    description: "Website Thương mại điện tử thực tế. Tập trung vào phát triển các tính năng quản lý sản phẩm và thực hiện kiểm thử UI/UX, Security trên các môi trường staging.",
    fullDescription: "Dự án UDTMDT (Ứng dụng thương mại điện tử) được thiết kế như một nền tảng giao dịch trực tuyến. Tôi đảm nhận vai trò Frontend Developer kiêm nhiệm vụ Tester, đảm bảo giao diện thân thiện, tương tác tốt và an toàn trước các lỗ hổng Injection cơ bản.",
    date: "22/09/2025 - 17/12/2025",
    role: "Frontend Developer & Tester",
    frontend: "ReactJS, Bootstrap",
    backend: "Node.js, Express, MongoDB",
    image: "/Picture1.UDTMDT.png",
    images: [
      "/Picture2.UDTMDT.png",
      "/Picture3.UDTMDT.png",
      "/Picture4.UDTMDT.png",
      "/Picture5.UDTMDT.png",
      "/Picture6.UDTMDTpng.png",
      "/Picture7.UDTMDT.png",
      "/Picture8.UDTMDT.png",
      "/Picture9.UDTMDTpng.png",
      "/Picture10.UDTMDT.png"
    ],
    tags: ["MERN Stack", "Jira", "QA/QC", "Web Security"],
    links: { github: "https://github.com/toilagatau234/UDTMDT", live: "https://udtmdt.vercel.app/" },
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Library System",
    description: "Hệ thống quản lý thư viện sử dụng kiến trúc OOP và SQL Server. Tôi thiết kế logic nghiệp vụ mượn trả và thực hiện kịch bản test case tối ưu.",
    fullDescription: "Phần mềm quản lý thư viện trên nền tảng desktop/web sử dụng C# và SQL Server. Hệ thống đáp ứng việc quản lý hàng ngàn đầu sách và tự động tính toán chi phí phạt trễ hạn. Công việc chính của tôi là thiết kế cơ sở dữ liệu và viết logic nghiệp vụ, kèm theo kiểm thử hộp đen kỹ lưỡng.",
    date: "20/06/2025 - 01/09/2025",
    role: "Backend Developer & Tester",
    frontend: "Windows Forms (C#)",
    backend: ".NET, SQL Server",
    image: "/Picture1.OOP.png",
    images: [
      "/Picture2.OOP.png",
      "/Picture3.OOP.png",
      "/Picture4.OOP.png",
      "/Picture5.OOP.png",
      "/Picture6.OOP.png",
      "/Picture7.OOPpng.png",
      "/Picture8.OOP.png",
      "/Picture9.OOP.png"
    ],
    tags: ["C#", "SQL Server", "OOP", "Functional Test"],
    links: { github: "https://github.com/toilagatau234/library_system_OOP_SQL-server", live: "#" },
    gridClass: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "TTTN Capstone",
    description: "Dự án thực tập tốt nghiệp. Tôi đóng vai trò Fullstack Developer kết hợp QA, đảm bảo tính ổn định tối đa cho sản phẩm trước khi bàn giao.",
    fullDescription: "Dự án cuối khóa của quá trình học tập, nơi tôi vận dụng toàn bộ kiến thức về Development và QA. Đây là một hệ thống web application toàn diện từ frontend, backend đến quy trình triển khai.",
    date: "15/03/2026 - 05/05/2026",
    role: "Frontend, Backend Developer & Tester",
    frontend: "ReactJS, Tailwind CSS",
    backend: "Node.js, Express, PostgreSQL",
    image: "/Picture1.TTTN.png",
    images: [
      "/Picture2.TTTN.png",
      "/Picture3.TTTN.png",
      "/Picture4.TTTN.png",
      "/Picture5.TTTN.png",
      "/Picture6.TTTN.png",
      "/Picture7.TTTN.png",
      "/Picture8.TTTN.png",
      "/Picture9.TTTN.png",
      "/Picture10.TTTN.png"
    ],
    tags: ["React", "API", "Testing Framework", "Agile"],
    links: { github: "https://github.com/toilagatau234/TTTN", live: "#" },
    gridClass: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "LAP TRINH WEB",
    description: "Dự án nền tảng web tích hợp. Xây dựng các module cơ bản và thực hiện kiểm thử tính tương thích trên nhiều trình duyệt.",
    fullDescription: "Dự án khởi đầu trong việc tiếp cận quá trình phát triển web. Tập trung vào HTML, CSS và JavaScript thuần để hiểu rõ nền tảng thiết kế web.",
    date: "16/09/2025 - 17/12/2025",
    role: "Frontend Developer & Tester",
    frontend: "HTML, CSS, JavaScript",
    backend: "PHP",
    image: "/Picture1.LTW.png",
    images: [
      "/Picture2.LTW.png",
      "/Picture3.LTW.png",
      "/Picture4.LTW.png",
      "/Picture5.LTW.png",
      "/Picture6.LTW.png",
      "/Picture7.LTW.png",
      "/Picture8.LTW.png",
      "/Picture9.LTW.png",
      "/Picture10.LTW.png"
    ],
    tags: ["HTML/CSS", "JavaScript", "Manual Test"],
    links: { github: "https://github.com/toilagatau234/LAP_TRINH_WEB", live: "#" },
    gridClass: "lg:col-span-1 lg:row-span-1"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section 
      id="projects" 
      className="py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", damping: 20 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase mb-4"
            >
              <Rocket size={14} /> Dự Án Thực Tế
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Sản Phẩm & <span className="text-gradient">Chất Lượng</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm mb-2"
          >
            Tổng hợp các dự án tôi trực tiếp tham gia phát triển mã nguồn và đảm bảo chất lượng phần mềm thông qua quy trình QC chuyên nghiệp.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className={cn(
                "group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer",
                project.gridClass
              )}
              onClick={() => setSelectedProject(project)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-30 font-mono text-[10px] tracking-widest uppercase">
                  0{idx + 1} // DỰ_ÁN_TEST
                </div>

                <div className="mt-auto">
                  <span className="text-[10px] text-purple-400 font-bold tracking-[0.2em] uppercase mb-2 block">Dự án nổi bật</span>
                  <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 max-w-md line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-mono border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.links.live} 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.links.live === "#") e.preventDefault();
                        }}
                        className={`w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center transition-colors ${
                          project.links.live === "#" 
                            ? "text-gray-500 cursor-not-allowed opacity-50" 
                            : "text-white hover:text-brand-cyan"
                        }`}
                        title="Xem Demo"
                        target={project.links.live !== "#" ? "_blank" : undefined}
                        rel={project.links.live !== "#" ? "noopener noreferrer" : undefined}
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.links.github} 
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-brand-cyan transition-colors"
                        title="Xem Mã Nguồn"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Top-right icon */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                <Layers size={18} className="text-brand-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a href="https://github.com/toilagatau234" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all">
            <span className="font-bold underline underline-offset-8 text-white group-hover:text-brand-cyan transition-colors">Xem tất cả trên GitHub</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-bg-dark transition-all">
              <Github size={18} />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 lg:inset-x-[15%] lg:inset-y-10 z-[101] flex flex-col glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent="true">
                <div className="relative h-64 md:h-80 w-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-brand-cyan/20 text-brand-cyan rounded-md text-xs font-mono border border-brand-cyan/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Rocket className="text-brand-purple" /> Tổng Quan</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <div>
                         <h4 className="text-sm flex flex-col text-gray-500 tracking-wider mb-1">Ngày diễn ra</h4>
                         <p className="text-white font-medium">{selectedProject.date}</p>
                      </div>
                      <div>
                         <h4 className="text-sm flex flex-col text-gray-500 tracking-wider mb-1">Vai trò</h4>
                         <p className="text-white font-medium">{selectedProject.role}</p>
                      </div>
                      <div className="sm:col-span-2">
                         <h4 className="text-sm flex flex-col text-gray-500 tracking-wider mb-1">Giao diện người dùng (Frontend)</h4>
                         <p className="text-brand-cyan font-medium">{selectedProject.frontend}</p>
                      </div>
                      <div className="sm:col-span-2">
                         <h4 className="text-sm flex flex-col text-gray-500 tracking-wider mb-1">Phần Backend</h4>
                         <p className="text-brand-purple font-medium">{selectedProject.backend}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl border border-white/5">
                      <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Liên Kết Dự Án</h4>
                      <div className="space-y-3">
                        <a 
                          href={selectedProject.links.live}
                          target={selectedProject.links.live !== "#" ? "_blank" : undefined} 
                          rel={selectedProject.links.live !== "#" ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (selectedProject.links.live === "#") e.preventDefault();
                          }}
                          className={`flex items-center gap-3 w-full p-3 rounded-xl transition-colors ${
                            selectedProject.links.live === "#"
                              ? "bg-white/5 opacity-50 cursor-not-allowed text-gray-500"
                              : "bg-white/5 hover:bg-white/10 text-white"
                          }`}
                        >
                          <ExternalLink size={18} className={selectedProject.links.live !== "#" ? "text-brand-cyan" : "text-gray-500"} />
                          <span>{selectedProject.links.live === "#" ? "Chưa có Demo" : "Mở Demo (Live)"}</span>
                        </a>
                        <a 
                          href={selectedProject.links.github}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                        >
                          <Github size={18} />
                          <span>Xem Mã Nguồn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="px-8 md:px-12 pb-12 space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-2"><Layers className="text-brand-cyan" /> Gallery</h3>
                    <div className="flex flex-col gap-6">
                      {selectedProject.images.map((img, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden glass border border-white/5 shadow-lg">
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} screenshot ${i + 1}`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
