import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0B0F19]">
      {/* Dot Grid Layer from Theme */}
      <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glowing Orbs matched to theme positions */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-50px] left-[-50px] h-[300px] w-[300px] rounded-full bg-purple-500 blur-[100px]"
      />

      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19]/80" />
    </div>
  );
}
