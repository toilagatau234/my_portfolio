import { motion } from "motion/react";
import { 
  FileCode2, 
  Globe, 
  Database, 
  Hammer, 
  Terminal, 
  Layout, 
  Server,
  Workflow
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const skillGroups = [
  {
    title: "Kiểm thử Phần mềm",
    icon: Layout,
    color: "from-cyan-500/20 to-blue-500/20",
    glow: "bg-cyan-500/50",
    skills: ["Manual Testing", "API Testing", "Test Case/Plan", "Boundary Analysis", "Functional Testing", "UI/UX Logic"]
  },
  {
    title: "Công nghệ Web",
    icon: Server,
    color: "from-purple-500/20 to-pink-500/20",
    glow: "bg-purple-500/50",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "ReactJS", "Redux", "Node.js"]
  },
  {
    title: "Dữ liệu & Công cụ",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "bg-emerald-500/50",
    skills: ["SQL Cơ bản", "MongoDB", "Postman", "Jira", "Trello", "Figma"]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 20 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Hammer size={14} /> Kho công cụ của tôi
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Năng Lực Kỹ Thuật
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Tôi sử dụng các công nghệ kiểm thử hiện đại để đảm bảo sản phẩm luôn đạt tiêu chuẩn cao nhất về hiệu năng và độ tin cậy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className={cn(
                "p-8 rounded-3xl glass border border-white/5 relative group transition-all duration-500",
                "hover:border-white/20 hover:shadow-2xl overflow-hidden cursor-pointer"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", group.color)} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <group.icon size={28} className="text-cyan-400 relative z-10" />
                  <div className={cn("absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity", group.glow)} />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-6 flex flex-col gap-1">
                  <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mb-1">Nhóm // SK_0{idx + 1}</span>
                  {group.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) + (sIdx * 0.05), type: "spring" }}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1 group/skill hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                    >
                      <span className="text-[10px] text-cyan-400 font-mono opacity-50 group-hover/skill:opacity-100 transition-opacity">0{sIdx + 1}</span>
                      <span className="text-xs font-bold text-slate-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative light effect */}
              <div className={cn(
                "absolute -right-10 -bottom-10 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                group.glow
              )} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
