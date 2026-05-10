import { useState, useEffect } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 50, stiffness: 500, mass: 0.1 });
  const cursorY = useSpring(0, { damping: 50, stiffness: 500, mass: 0.1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        (typeof target.className === 'string' && target.className.includes('cursor-pointer')) ||
        (target.classList && target.classList.contains('cursor-pointer'));
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "transparent",
          border: isHovering ? "1px solid rgba(6, 182, 212, 0.3)" : "1px solid rgba(255, 255, 255, 0.2)",
        }}
        className="rounded-full"
      />
    </div>
  );
}
